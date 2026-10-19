package com.kanarau.progress.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.List;

public record MonthlyCalendarResponse(
        int year,
        int month,
        List<DayStatsDto> days
) {
    public record DayStatsDto(
            String date,
            boolean studied,
            @JsonProperty("study_time_minutes") int studyTimeMinutes,
            @JsonProperty("cards_studied") int cardsStudied,
            @JsonProperty("cards_reviewed") int cardsReviewed,
            @JsonProperty("accuracy_percent") int accuracyPercent
    ) {}
}
