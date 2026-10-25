package com.kanarau.leaderboard.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public record LeaderboardEntryDto(
        int rank,
        @JsonProperty("user_id") Long userId,
        @JsonProperty("display_name") String displayName,
        @JsonProperty("total_xp") int totalXp,
        @JsonProperty("gamification_level") int gamificationLevel,
        @JsonProperty("level_title") String levelTitle,
        int streak,
        @JsonProperty("jlpt_level") String jlptLevel,
        @JsonProperty("is_current_user") boolean isCurrentUser
) {}
