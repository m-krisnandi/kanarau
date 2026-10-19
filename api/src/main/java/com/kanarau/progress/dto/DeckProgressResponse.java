package com.kanarau.progress.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.kanarau.common.model.JlptLevel;

public record DeckProgressResponse(
        @JsonProperty("deck_id") Long deckId,
        @JsonProperty("deck_name") String deckName,
        @JsonProperty("jlpt_level") JlptLevel jlptLevel,
        @JsonProperty("day_number") int dayNumber,
        @JsonProperty("total_kotoba") int totalKotoba,
        int learned,
        int reviewing,
        int mastered,
        @JsonProperty("progress_percent") int progressPercent
) {}
