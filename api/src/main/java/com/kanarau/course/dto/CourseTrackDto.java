package com.kanarau.course.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.kanarau.course.entity.CourseTrack;

public record CourseTrackDto(
        String code,
        String title,
        @JsonProperty("target_language") String targetLanguage,
        String icon,
        String description
) {
    public static CourseTrackDto from(CourseTrack track, String lang) {
        return new CourseTrackDto(
                track.getCode(),
                track.getLocalizedTitle(lang),
                track.getTargetLanguage(),
                track.getIcon(),
                track.getLocalizedDescription(lang)
        );
    }
}
