package com.kanarau.study.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.kanarau.kotoba.dto.KotobaResponse;

import java.util.List;

public record QuizCardResponse(
        String id,
        KotobaResponse kotoba,
        String direction,
        String question,
        @JsonProperty("correct_answer") String correctAnswer,
        List<String> choices
) {}
