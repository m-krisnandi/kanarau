package com.kanarau.kotoba.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.kanarau.common.model.JlptLevel;
import com.kanarau.kanji.dto.KanjiResponse;
import com.kanarau.kotoba.entity.Kotoba;

import java.util.Collections;
import java.util.List;

public record KotobaResponse(
        Long id,
        String kanji,
        String hiragana,
        @JsonProperty("meaning") String meaning,
        @JsonProperty("meaning_id") String meaningId,
        @JsonProperty("meaning_en") String meaningEn,
        @JsonProperty("meaning_my") String meaningMy,
        String notes,
        @JsonProperty("example_sentence") String exampleSentence,
        @JsonProperty("example_sentence_meaning") String exampleSentenceMeaning,
        @JsonProperty("example_translation") String exampleTranslation,
        @JsonProperty("jlpt_level") JlptLevel jlptLevel,
        @JsonProperty("kanji_details") List<KanjiResponse> kanjiDetails
) {
    public static KotobaResponse from(Kotoba k) {
        return from(k, "id");
    }

    public static KotobaResponse from(Kotoba k, String lang) {
        List<KanjiResponse> details = Collections.emptyList();
        try {
            if (k.getKanjiSet() != null && !k.getKanjiSet().isEmpty()) {
                details = k.getKanjiSet().stream().map(kj -> KanjiResponse.from(kj, lang)).toList();
            }
        } catch (Exception ignored) {
            // Safe fallback if not initialized
        }

        String activeMeaning = k.getMeaningId();
        if ("en".equalsIgnoreCase(lang) && k.getMeaningEn() != null && !k.getMeaningEn().isBlank()) {
            activeMeaning = k.getMeaningEn();
        } else if ("my".equalsIgnoreCase(lang)) {
            if (k.getMeaningMy() != null && !k.getMeaningMy().isBlank()) {
                activeMeaning = k.getMeaningMy();
            } else if (k.getMeaningEn() != null && !k.getMeaningEn().isBlank()) {
                activeMeaning = k.getMeaningEn();
            }
        }

        return new KotobaResponse(
                k.getId(),
                k.getKanji(),
                k.getHiragana(),
                activeMeaning,
                k.getMeaningId(),
                k.getMeaningEn(),
                k.getMeaningMy(),
                k.getNotes(),
                k.getExampleSentence(),
                k.getExampleTranslation(),
                k.getExampleTranslation(),
                k.getLevel(),
                details
        );
    }
}
