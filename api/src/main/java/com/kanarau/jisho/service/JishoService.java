package com.kanarau.jisho.service;

import com.kanarau.common.exception.ApiException;
import com.kanarau.common.model.JlptLevel;
import com.kanarau.jisho.dto.SearchResultResponse;
import com.kanarau.jisho.util.RomajiConverter;
import com.kanarau.kanji.dto.KanjiResponse;
import com.kanarau.kanji.entity.Kanji;
import com.kanarau.kanji.repository.KanjiRepository;
import com.kanarau.kotoba.dto.KotobaResponse;
import com.kanarau.kotoba.entity.Kotoba;
import com.kanarau.kotoba.repository.KotobaRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.regex.Pattern;

@Service
public class JishoService {

    private final KotobaRepository kotobaRepository;
    private final KanjiRepository kanjiRepository;

    public JishoService(KotobaRepository kotobaRepository, KanjiRepository kanjiRepository) {
        this.kotobaRepository = kotobaRepository;
        this.kanjiRepository = kanjiRepository;
    }

    public List<SearchResultResponse> search(String query) {
        return search(query, "id", null);
    }

    public List<SearchResultResponse> search(String query, String lang) {
        return search(query, lang, null);
    }

    public List<SearchResultResponse> search(String query, String lang, String level) {
        List<SearchResultResponse> results = new ArrayList<>();

        // When query is empty, filter by level if specified
        if (query == null || query.trim().isBlank()) {
            if (level != null && !level.trim().isBlank() && !level.equalsIgnoreCase("all")) {
                String lvl = level.trim().toUpperCase();
                try {
                    JlptLevel jlpt = JlptLevel.valueOf(lvl);
                    List<Kotoba> kotobas = kotobaRepository.findByLevel(jlpt);
                    for (Kotoba k : kotobas) {
                        results.add(new SearchResultResponse("kotoba", KotobaResponse.from(k)));
                    }
                } catch (IllegalArgumentException ignored) {}

                List<Kanji> kanjis = kanjiRepository.findByJlptLevel(lvl);
                for (Kanji k : kanjis) {
                    results.add(new SearchResultResponse("kanji", KanjiResponse.from(k)));
                }
                return results;
            }

            List<Kanji> kanjis = kanjiRepository.findAll();
            for (Kanji k : kanjis) {
                results.add(new SearchResultResponse("kanji", KanjiResponse.from(k)));
            }
            List<Kotoba> kotobas = kotobaRepository.findAll();
            for (Kotoba k : kotobas) {
                results.add(new SearchResultResponse("kotoba", KotobaResponse.from(k)));
            }
            return results;
        }

        String q = query.trim();
        String lowerQ = q.toLowerCase();
        String activeLang = (lang != null && !lang.isBlank()) ? lang.trim().toLowerCase() : "id";

        // Convert Romaji to Hiragana & Katakana if input contains Latin alphabet
        String hira = "";
        String kata = "";
        if (RomajiConverter.containsLatin(lowerQ)) {
            hira = RomajiConverter.toHiragana(lowerQ);
            kata = RomajiConverter.toKatakana(hira);
        }

        // Fetch candidate Kotoba records
        Map<Long, Kotoba> candidateKotobaMap = new LinkedHashMap<>();
        for (Kotoba k : kotobaRepository.search(q)) {
            candidateKotobaMap.put(k.getId(), k);
        }
        if (!hira.isEmpty() && !hira.equals(lowerQ)) {
            for (Kotoba k : kotobaRepository.search(hira)) {
                candidateKotobaMap.put(k.getId(), k);
            }
        }

        // Score and rank Kotoba candidates
        List<ScoredItem<Kotoba>> scoredKotobas = new ArrayList<>();
        for (Kotoba k : candidateKotobaMap.values()) {
            int score = scoreKotoba(k, lowerQ, hira, kata, activeLang);
            if (score > 0) {
                scoredKotobas.add(new ScoredItem<>(k, score));
            }
        }
        scoredKotobas.sort((a, b) -> Integer.compare(b.score, a.score));

        // Fetch candidate Kanji records
        Map<Long, Kanji> candidateKanjiMap = new LinkedHashMap<>();
        for (Kanji k : kanjiRepository.search(q)) {
            candidateKanjiMap.put(k.getId(), k);
        }
        if (!hira.isEmpty() && !hira.equals(lowerQ)) {
            for (Kanji k : kanjiRepository.search(hira)) {
                candidateKanjiMap.put(k.getId(), k);
            }
        }

        // Score and rank Kanji candidates
        List<ScoredItem<Kanji>> scoredKanjis = new ArrayList<>();
        for (Kanji k : candidateKanjiMap.values()) {
            int score = scoreKanji(k, lowerQ, hira, kata, activeLang);
            if (score > 0) {
                scoredKanjis.add(new ScoredItem<>(k, score));
            }
        }
        scoredKanjis.sort((a, b) -> Integer.compare(b.score, a.score));

        // Merge results: High-scoring matches first
        // If Kanji has high match (e.g. single character exact match), prioritize Kanji
        List<ScoredResult> combined = new ArrayList<>();
        for (ScoredItem<Kotoba> sk : scoredKotobas) {
            combined.add(new ScoredResult("kotoba", KotobaResponse.from(sk.item), sk.score));
        }
        for (ScoredItem<Kanji> sk : scoredKanjis) {
            combined.add(new ScoredResult("kanji", KanjiResponse.from(sk.item), sk.score));
        }

        combined.sort((a, b) -> Integer.compare(b.score, a.score));

        for (ScoredResult sr : combined) {
            results.add(new SearchResultResponse(sr.type, sr.item));
        }

        return results;
    }

    private int scoreKotoba(Kotoba k, String lowerQ, String hira, String kata, String lang) {
        String kanji = k.getKanji() != null ? k.getKanji().toLowerCase() : "";
        String hiragana = k.getHiragana() != null ? k.getHiragana().toLowerCase() : "";
        String mId = k.getMeaningId() != null ? k.getMeaningId().toLowerCase() : "";
        String mEn = k.getMeaningEn() != null ? k.getMeaningEn().toLowerCase() : "";
        String mMy = k.getMeaningMy() != null ? k.getMeaningMy() : "";

        // 1. Exact Japanese reading or kanji match
        if ((!kanji.isEmpty() && kanji.equals(lowerQ)) ||
            hiragana.equals(lowerQ) ||
            (!hira.isEmpty() && hiragana.equals(hira)) ||
            (!kata.isEmpty() && kanji.equals(kata))) {
            return 1000;
        }

        // 2. Starts with Japanese reading or kanji
        if ((!hira.isEmpty() && hiragana.startsWith(hira)) ||
            hiragana.startsWith(lowerQ) ||
            (!kanji.isEmpty() && kanji.startsWith(lowerQ))) {
            return 800;
        }

        // 3. Contains Japanese reading
        if ((!hira.isEmpty() && hiragana.contains(hira)) || hiragana.contains(lowerQ)) {
            return 600;
        }

        // 4. Target language meaning match
        String targetMeaning = "en".equals(lang) ? mEn : ("my".equals(lang) ? mMy : mId);
        if (!targetMeaning.isEmpty()) {
            if (targetMeaning.equalsIgnoreCase(lowerQ)) return 500;
            if (hasWordBoundaryMatch(targetMeaning, lowerQ)) return 400;
            if (targetMeaning.toLowerCase().startsWith(lowerQ)) return 300;
            // Short queries (<= 3 chars like "anu") must NOT match random substrings inside words like "manufacture"
            if (lowerQ.length() > 3 && targetMeaning.toLowerCase().contains(lowerQ)) {
                return 200;
            }
        }

        // 5. Cross-language fallback match
        // Strictly ignore short queries (<= 3 chars) across other languages
        if (lowerQ.length() <= 3) {
            return 0;
        }

        if (mEn.contains(lowerQ) || mId.contains(lowerQ) || mMy.contains(lowerQ)) {
            return 10;
        }

        return 0;
    }

    private int scoreKanji(Kanji k, String lowerQ, String hira, String kata, String lang) {
        String character = k.getCharacter() != null ? k.getCharacter() : "";
        String on = k.getOnReading() != null ? k.getOnReading() : "";
        String kun = k.getKunReading() != null ? k.getKunReading() : "";
        String mId = k.getMeaning() != null ? k.getMeaning().toLowerCase() : "";
        String mEn = k.getMeaningEn() != null ? k.getMeaningEn().toLowerCase() : "";
        String mMy = k.getMeaningMy() != null ? k.getMeaningMy() : "";

        // 1. Exact character match
        if (character.equals(lowerQ)) {
            return 1200;
        }

        // 2. On / Kun reading match
        if (!hira.isEmpty()) {
            if (kun.contains(hira) || on.contains(kata)) {
                return 950;
            }
        }

        // 3. Target language meaning match
        String targetMeaning = "en".equals(lang) ? mEn : ("my".equals(lang) ? mMy : mId);
        if (!targetMeaning.isEmpty()) {
            if (targetMeaning.equalsIgnoreCase(lowerQ)) return 500;
            if (hasWordBoundaryMatch(targetMeaning, lowerQ)) return 400;
            if (targetMeaning.toLowerCase().startsWith(lowerQ)) return 300;
            if (lowerQ.length() > 3 && targetMeaning.toLowerCase().contains(lowerQ)) {
                return 200;
            }
        }

        // 4. Cross-language fallback
        if (lowerQ.length() <= 3) {
            return 0;
        }

        if (mEn.contains(lowerQ) || mId.contains(lowerQ) || mMy.contains(lowerQ)) {
            return 10;
        }

        return 0;
    }

    private boolean hasWordBoundaryMatch(String text, String word) {
        try {
            Pattern pattern = Pattern.compile("(?i)\\b" + Pattern.quote(word) + "\\b");
            return pattern.matcher(text).find();
        } catch (Exception e) {
            return text.contains(word);
        }
    }

    private record ScoredItem<T>(T item, int score) {}
    private record ScoredResult(String type, Object item, int score) {}

    public KotobaResponse getKotobaById(Long id) {
        Kotoba k = kotobaRepository.findById(id)
                .orElseThrow(() -> new ApiException(HttpStatus.NOT_FOUND, "Kotoba tidak ditemukan"));
        return KotobaResponse.from(k);
    }

    public KanjiResponse getKanjiById(Long id) {
        Kanji k = kanjiRepository.findById(id)
                .orElseThrow(() -> new ApiException(HttpStatus.NOT_FOUND, "Kanji tidak ditemukan"));
        return KanjiResponse.from(k);
    }

    public List<KotobaResponse> getKotobaByKanji(Long kanjiId) {
        Kanji kanji = kanjiRepository.findById(kanjiId)
                .orElseThrow(() -> new ApiException(HttpStatus.NOT_FOUND, "Kanji tidak ditemukan"));

        List<Kotoba> kotobas = kotobaRepository.search(kanji.getCharacter());
        return kotobas.stream().map(KotobaResponse::from).toList();
    }
}
