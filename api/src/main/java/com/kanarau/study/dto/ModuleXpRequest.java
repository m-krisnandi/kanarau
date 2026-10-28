package com.kanarau.study.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public record ModuleXpRequest(
        @JsonProperty("module") String module,
        @JsonProperty("item_id") String itemId,
        @JsonProperty("xp_gained") int xpGained,
        @JsonProperty("duration_seconds") int durationSeconds
) {}
