package com.kanarau.progress.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.kanarau.common.model.JlptLevel;

public record OverallStatsResponse(
        @JsonProperty("current_streak") int currentStreak,
        @JsonProperty("longest_streak") int longestStreak,
        @JsonProperty("total_study_days") int totalStudyDays,
        @JsonProperty("total_study_time_minutes") int totalStudyTimeMinutes,
        @JsonProperty("total_cards_learned") long totalCardsLearned,
        @JsonProperty("total_reviews") long totalReviews,
        @JsonProperty("average_accuracy") int averageAccuracy
) {}
