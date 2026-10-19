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
        List<KanjiResponse> details = Collections.emptyList();
        try {
            if (k.getKanjiSet() != null && !k.getKanjiSet().isEmpty()) {
                details = k.getKanjiSet().stream().map(KanjiResponse::from).toList();
            }
        } catch (Exception ignored) {
            // Safe fallback if not initialized
        }

        return new KotobaResponse(
                k.getId(),
                k.getKanji(),
                k.getHiragana(),
                k.getMeaningId(),
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
