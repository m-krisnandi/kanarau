package com.kanarau.course.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "course_levels")
public class CourseLevel {

    @EmbeddedId
    private CourseLevelId id;

    @Column(name = "level_name", nullable = false, length = 100)
    private String levelName;

    @Column(name = "description_id", columnDefinition = "TEXT")
    private String descriptionId;

    @Column(name = "description_en", columnDefinition = "TEXT")
    private String descriptionEn;

    @Column(name = "description_my", columnDefinition = "TEXT")
    private String descriptionMy;

    @Column(name = "sort_order", nullable = false)
    private int sortOrder;

    protected CourseLevel() {}

    public CourseLevel(CourseLevelId id, String levelName, String descriptionId, String descriptionEn, String descriptionMy, int sortOrder) {
        this.id = id;
        this.levelName = levelName;
        this.descriptionId = descriptionId;
        this.descriptionEn = descriptionEn;
        this.descriptionMy = descriptionMy;
        this.sortOrder = sortOrder;
    }

    public CourseLevelId getId() { return id; }
    public String getTrackCode() { return id != null ? id.getTrackCode() : null; }
    public String getLevelCode() { return id != null ? id.getLevelCode() : null; }
    public String getLevelName() { return levelName; }
    public String getDescriptionId() { return descriptionId; }
    public String getDescriptionEn() { return descriptionEn; }
    public String getDescriptionMy() { return descriptionMy; }
    public int getSortOrder() { return sortOrder; }

    public String getLocalizedDescription(String lang) {
        if ("my".equalsIgnoreCase(lang)) return descriptionMy;
        if ("en".equalsIgnoreCase(lang)) return descriptionEn;
        return descriptionId;
    }
}
