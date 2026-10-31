package com.kanarau.course.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotBlank;

public record SwitchCourseRequest(
        @JsonProperty("my_language") @NotBlank String myLanguage,
        @JsonProperty("target_language") @NotBlank String targetLanguage,
        @JsonProperty("track_code") @NotBlank String trackCode,
        @JsonProperty("level_code") @NotBlank String levelCode
) {}
