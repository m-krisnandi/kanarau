package com.kanarau.admin.dto;

import java.util.List;
import java.util.Map;

public record AdminOverviewResponse(
        long totalUsers,
        long activeLearners,
        long totalStudySessions,
        long totalCardsStudied,
        long totalMasteredWords,
        long totalFeedbacks,
        long pendingFeedbacks,
        Map<String, Long> levelDistribution,
        Map<String, Long> srsDistribution,
        List<DailyActivityDto> weeklyActivity,
        double globalAccuracy
) {
    public record DailyActivityDto(
            String dayLabel,
            String date,
            long cardsStudied,
            long sessionsCount
    ) {}
}
