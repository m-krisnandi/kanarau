package com.kanarau.progress.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.kanarau.common.model.JlptLevel;

public record JlptCountdownResponse(
        JlptLevel level,
        @JsonProperty("exam_date") String examDate,
        @JsonProperty("days_remaining") int daysRemaining
) {}
