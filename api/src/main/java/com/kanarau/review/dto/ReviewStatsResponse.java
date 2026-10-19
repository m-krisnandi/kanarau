package com.kanarau.review.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public record ReviewStatsResponse(
        @JsonProperty("pending_count") long pendingCount,
        @JsonProperty("due_today") long dueToday,
        @JsonProperty("due_tomorrow") long dueTomorrow,
        long overdue
) {}
