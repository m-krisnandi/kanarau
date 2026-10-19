package com.kanarau.kanji.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.kanarau.kanji.entity.Kanji;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public record KanjiResponse(
        Long id,
        String character,
        String meaning,
        List<String> meanings,
        @JsonProperty("meaning_en") String meaningEn,
        @JsonProperty("meaning_my") String meaningMy,
        @JsonProperty("on_reading") String onReading,
        @JsonProperty("on_readings") List<String> onReadings,
        @JsonProperty("kun_reading") String kunReading,
        @JsonProperty("kun_readings") List<String> kunReadings,
        String radical,
        @JsonProperty("radical_meaning") String radicalMeaning,
        @JsonProperty("stroke_count") Integer strokeCount,
        Integer grade,
        @JsonProperty("jlpt_level") String jlptLevel
) {
    public static KanjiResponse from(Kanji k) {
        return from(k, "id");
    }

    public static KanjiResponse from(Kanji k, String lang) {
        String activeMeaning = k.getMeaning();
        if ("en".equalsIgnoreCase(lang) && k.getMeaningEn() != null && !k.getMeaningEn().isBlank()) {
            activeMeaning = k.getMeaningEn();
        } else if ("my".equalsIgnoreCase(lang)) {
            if (k.getMeaningMy() != null && !k.getMeaningMy().isBlank()) {
                activeMeaning = k.getMeaningMy();
            } else if (k.getMeaningEn() != null && !k.getMeaningEn().isBlank()) {
                activeMeaning = k.getMeaningEn();
            }
        }

        List<String> mList = activeMeaning != null && !activeMeaning.isBlank()
                ? Arrays.stream(activeMeaning.split("[,;]\\s*")).map(String::trim).filter(s -> !s.isEmpty()).toList()
                : Collections.emptyList();
        List<String> onList = k.getOnReading() != null && !k.getOnReading().isBlank()
                ? Arrays.stream(k.getOnReading().split("[,;\\s]+")).map(String::trim).filter(s -> !s.isEmpty()).toList()
                : Collections.emptyList();
        List<String> kunList = k.getKunReading() != null && !k.getKunReading().isBlank()
                ? Arrays.stream(k.getKunReading().split("[,;\\s]+")).map(String::trim).filter(s -> !s.isEmpty()).toList()
                : Collections.emptyList();

        return new KanjiResponse(
                k.getId(),
                k.getCharacter(),
                activeMeaning,
                mList,
                k.getMeaningEn(),
                k.getMeaningMy(),
                k.getOnReading(),
                onList,
                k.getKunReading(),
                kunList,
                k.getRadical(),
                k.getRadicalMeaning(),
                k.getStrokeCount(),
                k.getGrade(),
                k.getJlptLevel() != null ? k.getJlptLevel() : "N2"
        );
    }
}
