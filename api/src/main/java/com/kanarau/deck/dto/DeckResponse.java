package com.kanarau.deck.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.kanarau.common.model.JlptLevel;
import com.kanarau.deck.entity.Deck;

public record DeckResponse(
        Long id,
        String name,
        String description,
        @JsonProperty("jlpt_level") JlptLevel jlptLevel,
        @JsonProperty("day_number") Integer dayNumber,
        @JsonProperty("kotoba_count") Integer kotobaCount,
        @JsonProperty("progress_percent") Integer progressPercent,
        @JsonProperty("is_new") Boolean isNew,
        @JsonProperty("is_completed") Boolean isCompleted
) {
    public static DeckResponse from(Deck deck, int progressPercent) {
        return new DeckResponse(
                deck.getId(),
                deck.getName(),
                "DAY " + deck.getDayNumber() + " " + deck.getLevel() + " - " + deck.getKotobaCount() + " kotoba",
                deck.getLevel(),
                deck.getDayNumber(),
                deck.getKotobaCount(),
                progressPercent,
                progressPercent == 0,
                progressPercent >= 100
        );
    }
}
