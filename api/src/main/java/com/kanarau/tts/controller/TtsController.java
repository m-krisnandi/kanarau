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
    private static final String SCRIPT_PATH = "/Users/user/Documents/ALUESA/SOLIDPACE/kanarau/api/src/main/resources/scripts/edge_tts_synth.py";

    @GetMapping("/tts")
    public ResponseEntity<byte[]> getJapaneseAudio(
            @RequestParam("text") String text,
            @RequestParam(value = "voice", defaultValue = "female") String voice
    ) {
        if (text == null || text.trim().isEmpty()) {
            return ResponseEntity.badRequest().build();
        }

        String cleanText = text.trim();
        byte[] audioBytes = getOrSynthesizeAudio(cleanText, voice);

        if (audioBytes == null || audioBytes.length == 0) {
            return ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE).build();
        }

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.valueOf("audio/mpeg"));
        headers.setCacheControl("public, max-age=86400");
        return new ResponseEntity<>(audioBytes, headers, HttpStatus.OK);
    }

    private byte[] getOrSynthesizeAudio(String text, String voice) {
        try {
            File cacheFolder = new File(CACHE_DIR);
            if (!cacheFolder.exists()) {
                cacheFolder.mkdirs();
            }

            String cacheKey = md5(voice + "_" + text);
            File cacheFile = new File(cacheFolder, cacheKey + ".mp3");

            if (cacheFile.exists() && cacheFile.length() > 0) {
                return Files.readAllBytes(cacheFile.toPath());
            }

            // Synthesize using Edge TTS
            byte[] synthesized = synthesizeEdgeTts(text, voice, cacheFile);
            if (synthesized != null && synthesized.length > 0) {
                return synthesized;
            }

            // Fallback to Google Translate TTS
            byte[] fallback = fetchGoogleTtsAudio(text);
            if (fallback != null && fallback.length > 0) {
                Files.write(cacheFile.toPath(), fallback);
                return fallback;
            }

        } catch (Exception ignored) {}
        return null;
    }

    private byte[] synthesizeEdgeTts(String text, String voice, File targetFile) {
        try {
            String edgeVoice;
            String pitch;

            switch (voice.toLowerCase()) {
                case "male":
                    edgeVoice = "ja-JP-KeitaNeural";
                    pitch = "0";
                    break;
                case "child":
                    edgeVoice = "ja-JP-NanamiNeural";
                    pitch = "+25Hz";
                    break;
                case "female":
                default:
                    edgeVoice = "ja-JP-NanamiNeural";
                    pitch = "0";
                    break;
            }

            ProcessBuilder pb = new ProcessBuilder(
                    "python3",
                    SCRIPT_PATH,
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

    private byte[] fetchGoogleTtsAudio(String chunk) {
        try {
            String encoded = URLEncoder.encode(chunk, StandardCharsets.UTF_8);
            String urlString = "https://translate.google.com/translate_tts?ie=UTF-8&tl=ja&client=tw-ob&q=" + encoded;

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
