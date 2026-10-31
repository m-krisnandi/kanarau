package com.kanarau.course.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.kanarau.course.entity.CourseLevel;

public record CourseLevelDto(
        @JsonProperty("track_code") String trackCode,
        @JsonProperty("level_code") String levelCode,
        @JsonProperty("level_name") String levelName,
        String description,
        @JsonProperty("sort_order") int sortOrder
) {
    public static CourseLevelDto from(CourseLevel level, String lang) {
        return new CourseLevelDto(
                level.getTrackCode(),
                level.getLevelCode(),
                level.getLevelName(),
                level.getLocalizedDescription(lang),
                level.getSortOrder()
        );
    }
}
