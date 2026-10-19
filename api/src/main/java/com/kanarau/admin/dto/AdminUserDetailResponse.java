package com.kanarau.admin.dto;

import java.time.Instant;
import java.util.List;
import java.util.Map;

public record AdminUserDetailResponse(
        AdminUserStatsResponse userStats,
        Map<String, Long> statusBreakdown,
        List<SessionSummary> recentSessions
) {
    public record SessionSummary(
            Long id,
            Long deckId,
            int cardsStudied,
            int cardsCorrect,
            Instant startedAt,
            Instant finishedAt
    ) {}
}
