package com.kanarau.admin.dto;

import java.time.Instant;

public record AdminUserStatsResponse(
        Long id,
        String displayName,
        String email,
        String role,
        String currentLevel,
        int streak,
        int totalXp,
        long totalSessions,
        long cardsStudied,
        long masteredCount,
        long learningCount,
        long reviewCount,
        double accuracyRate,
        Instant lastActive,
        Instant createdAt,
        String discordUsername
) {}
