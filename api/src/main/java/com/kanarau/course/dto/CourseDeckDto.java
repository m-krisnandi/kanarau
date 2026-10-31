package com.kanarau.course.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.kanarau.course.entity.CourseDeck;

public record CourseDeckDto(
        Long id,
        @JsonProperty("track_code") String trackCode,
        @JsonProperty("level_code") String levelCode,
        @JsonProperty("day_number") Integer dayNumber,
        @JsonProperty("title_target") String titleTarget,
        String title,
        @JsonProperty("item_count") Integer itemCount,
        @JsonProperty("progress_percent") Integer progressPercent
) {
    public static CourseDeckDto from(CourseDeck deck, String lang, Integer progressPercent) {
        return new CourseDeckDto(
                deck.getId(),
                deck.getTrackCode(),
                deck.getLevelCode(),
                deck.getDayNumber(),
                deck.getTitleTarget(),
                deck.getLocalizedTitle(lang),
                deck.getItemCount(),
                progressPercent != null ? progressPercent : 0
        );
    }
}
