package com.kanarau.tts.controller;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URI;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.security.MessageDigest;
import java.util.concurrent.TimeUnit;

@RestController
public class TtsController {

    private static final String CACHE_DIR = "/tmp/kanarau_tts_cache";
    private static String getScriptPath() {
        File localScript = new File("/Users/user/Documents/ALUESA/SOLIDPACE/kanarau/api/src/main/resources/scripts/edge_tts_synth.py");
        if (localScript.exists()) {
            return localScript.getAbsolutePath();
        }
        File tempScript = new File("/tmp/edge_tts_synth.py");
        if (!tempScript.exists() || tempScript.length() == 0) {
            String scriptContent = """
import sys
import asyncio
import edge_tts

async def main():
    if len(sys.argv) < 5:
        sys.exit(1)

    voice = sys.argv[1]
    pitch = sys.argv[2]
    text = sys.argv[3]
    output_path = sys.argv[4]

    if not pitch or pitch == "0" or pitch == "default":
        communicate = edge_tts.Communicate(text, voice)
    else:
        communicate = edge_tts.Communicate(text, voice, pitch=pitch)

    await communicate.save(output_path)

if __name__ == '__main__':
    asyncio.run(main())
""";
            try {
                Files.writeString(tempScript.toPath(), scriptContent, StandardCharsets.UTF_8);
            } catch (Exception ignored) {}
        }
        return tempScript.getAbsolutePath();
    }

    @GetMapping("/tts")
    public ResponseEntity<byte[]> getAudio(
            @RequestParam("text") String text,
            @RequestParam(value = "voice", defaultValue = "female") String voice,
            @RequestParam(value = "lang", defaultValue = "ja") String lang
    ) {
        if (text == null || text.trim().isEmpty()) {
            return ResponseEntity.badRequest().build();
        }

        String cleanText = text.trim();
        String normalizedLang = lang != null ? lang.trim().toLowerCase() : "ja";
        byte[] audioBytes = getOrSynthesizeAudio(cleanText, voice, normalizedLang);

        if (audioBytes == null || audioBytes.length == 0) {
            return ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE).build();
        }

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.valueOf("audio/mpeg"));
        headers.setCacheControl("public, max-age=86400");
        return new ResponseEntity<>(audioBytes, headers, HttpStatus.OK);
    }

    private byte[] getOrSynthesizeAudio(String text, String voice, String lang) {
        try {
            File cacheFolder = new File(CACHE_DIR);
            if (!cacheFolder.exists()) {
                cacheFolder.mkdirs();
            }

            String cacheKey = md5(lang + "_" + voice + "_" + text);
            File cacheFile = new File(cacheFolder, cacheKey + ".mp3");

            if (cacheFile.exists() && cacheFile.length() > 0) {
                return Files.readAllBytes(cacheFile.toPath());
            }

            // Synthesize using Edge Neural TTS
            byte[] synthesized = synthesizeEdgeTts(text, voice, lang, cacheFile);
            if (synthesized != null && synthesized.length > 0) {
                return synthesized;
            }

            // Fallback to Google Translate TTS
            byte[] fallback = fetchGoogleTtsAudio(text, lang);
            if (fallback != null && fallback.length > 0) {
                Files.write(cacheFile.toPath(), fallback);
                return fallback;
            }

        } catch (Exception ignored) {}
        return null;
    }

    private byte[] synthesizeEdgeTts(String text, String voice, String lang, File targetFile) {
        try {
            String edgeVoice;
            String pitch = "0";

            if ("id".equals(lang)) {
                edgeVoice = "male".equalsIgnoreCase(voice) ? "id-ID-ArdiNeural" : "id-ID-GadisNeural";
            } else if ("my".equals(lang)) {
                edgeVoice = "male".equalsIgnoreCase(voice) ? "my-MM-ThihaNeural" : "my-MM-NilarNeural";
            } else if ("en".equals(lang)) {
                edgeVoice = "male".equalsIgnoreCase(voice) ? "en-US-GuyNeural" : "en-US-JennyNeural";
            } else {
                switch (voice.toLowerCase()) {
                    case "male":
                        edgeVoice = "ja-JP-KeitaNeural";
                        break;
                    case "child":
                        edgeVoice = "ja-JP-NanamiNeural";
                        pitch = "+25Hz";
                        break;
                    case "female":
                    default:
                        edgeVoice = "ja-JP-NanamiNeural";
                        break;
                }
            }

            ProcessBuilder pb = new ProcessBuilder(
                    "python3",
                    getScriptPath(),
                    edgeVoice,
                    pitch,
                    text,
                    targetFile.getAbsolutePath()
            );
            pb.redirectErrorStream(true);
            Process proc = pb.start();
            boolean finished = proc.waitFor(6, TimeUnit.SECONDS);

            if (finished && proc.exitValue() == 0 && targetFile.exists() && targetFile.length() > 0) {
                return Files.readAllBytes(targetFile.toPath());
            }
        } catch (Exception ignored) {}
        return null;
    }

    private byte[] fetchGoogleTtsAudio(String chunk, String lang) {
        try {
            String targetTl = "ja";
            if ("id".equals(lang)) targetTl = "id";
            else if ("my".equals(lang)) targetTl = "my";
            else if ("en".equals(lang)) targetTl = "en";

            String encoded = URLEncoder.encode(chunk, StandardCharsets.UTF_8);
            String urlString = "https://translate.google.com/translate_tts?ie=UTF-8&tl=" + targetTl + "&client=tw-ob&q=" + encoded;

            HttpURLConnection conn = (HttpURLConnection) URI.create(urlString).toURL().openConnection();
            conn.setRequestMethod("GET");
            conn.setRequestProperty("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko)");
            conn.setConnectTimeout(4000);
            conn.setReadTimeout(6000);

            if (conn.getResponseCode() == 200) {
                try (InputStream in = conn.getInputStream()) {
                    return in.readAllBytes();
                }
            }
        } catch (Exception ignored) {}
        return null;
    }

    private String md5(String input) {
        try {
            MessageDigest md = MessageDigest.getInstance("MD5");
            byte[] digest = md.digest(input.getBytes(StandardCharsets.UTF_8));
            StringBuilder sb = new StringBuilder();
            for (byte b : digest) {
                sb.append(String.format("%02x", b));
            }
            return sb.toString();
        } catch (Exception e) {
            return String.valueOf(input.hashCode());
        }
    }
}
