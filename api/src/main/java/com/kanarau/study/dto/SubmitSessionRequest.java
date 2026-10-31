package com.kanarau.study.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.List;

public record SubmitSessionRequest(
        @JsonProperty("deck_id") Long deckId,
        @JsonProperty("total_cards") int totalCards,
        @JsonProperty("correct_count") int correctCount,
        @JsonProperty("accuracy_percent") int accuracyPercent,
        @JsonProperty("total_time_ms") long totalTimeMs,
        @JsonProperty("xp_gained") int xpGained,
        @JsonProperty("track_code") String trackCode,
        List<QuizAnswerDto> answers
) {}
