package com.kanarau.leaderboard.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.List;

public record LeaderboardResponse(
        @JsonProperty("top_users") List<LeaderboardEntryDto> topUsers,
        @JsonProperty("current_user_entry") LeaderboardEntryDto currentUserEntry,
        @JsonProperty("total_learners") long totalLearners
) {}
