package com.kanarau.course.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.List;

public record CourseCardDto(
        Long id,
        @JsonProperty("target_text") String targetText,
        String reading,
        @JsonProperty("item_type") String itemType,
        String meaning,
        String notes,
        @JsonProperty("example_sentence") String exampleSentence,
        @JsonProperty("example_meaning") String exampleMeaning,
        List<String> choices
) {}
