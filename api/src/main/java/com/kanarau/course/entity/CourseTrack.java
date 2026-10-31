package com.kanarau.course.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "course_tracks")
public class CourseTrack {

    @Id
    @Column(length = 20)
    private String code;

    @Column(name = "title_id", nullable = false, length = 100)
    private String titleId;

    @Column(name = "title_en", nullable = false, length = 100)
    private String titleEn;

    @Column(name = "title_my", nullable = false, length = 100)
    private String titleMy;

    @Column(name = "target_language", nullable = false, length = 10)
    private String targetLanguage;

    @Column(nullable = false, length = 20)
    private String icon;

    @Column(name = "description_id", columnDefinition = "TEXT")
    private String descriptionId;

    @Column(name = "description_en", columnDefinition = "TEXT")
    private String descriptionEn;

    @Column(name = "description_my", columnDefinition = "TEXT")
    private String descriptionMy;

    @Column(name = "is_active", nullable = false)
    private boolean isActive = true;

    protected CourseTrack() {}

    public CourseTrack(String code, String titleId, String titleEn, String titleMy, String targetLanguage, String icon, String descriptionId, String descriptionEn, String descriptionMy) {
        this.code = code;
        this.titleId = titleId;
        this.titleEn = titleEn;
        this.titleMy = titleMy;
        this.targetLanguage = targetLanguage;
        this.icon = icon;
        this.descriptionId = descriptionId;
        this.descriptionEn = descriptionEn;
        this.descriptionMy = descriptionMy;
        this.isActive = true;
    }

    public String getCode() { return code; }
    public String getTitleId() { return titleId; }
    public String getTitleEn() { return titleEn; }
    public String getTitleMy() { return titleMy; }
    public String getTargetLanguage() { return targetLanguage; }
    public String getIcon() { return icon; }
    public String getDescriptionId() { return descriptionId; }
    public String getDescriptionEn() { return descriptionEn; }
    public String getDescriptionMy() { return descriptionMy; }
    public boolean isActive() { return isActive; }

    public String getLocalizedTitle(String lang) {
        if ("my".equalsIgnoreCase(lang)) return titleMy;
        if ("en".equalsIgnoreCase(lang)) return titleEn;
        return titleId;
    }

    public String getLocalizedDescription(String lang) {
        if ("my".equalsIgnoreCase(lang)) return descriptionMy;
        if ("en".equalsIgnoreCase(lang)) return descriptionEn;
        return descriptionId;
    }
}
