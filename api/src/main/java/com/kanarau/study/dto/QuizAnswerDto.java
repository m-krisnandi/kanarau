package com.kanarau.study.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public record QuizAnswerDto(
        @JsonProperty("card_id") String cardId,
        @JsonProperty("kotoba_id") Long kotobaId,
        @JsonProperty("selected_answer") String selectedAnswer,
        @JsonProperty("correct_answer") String correctAnswer,
        @JsonProperty("is_correct") boolean isCorrect,
        @JsonProperty("response_time_ms") long responseTimeMs,
        String rating
) {}
