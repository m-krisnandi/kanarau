package com.kanarau.course.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "course_decks")
public class CourseDeck {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "track_code", nullable = false, length = 20)
    private String trackCode;

    @Column(name = "level_code", nullable = false, length = 30)
    private String levelCode;

    @Column(name = "day_number", nullable = false)
    private Integer dayNumber;

    @Column(name = "title_target", nullable = false, length = 150)
    private String titleTarget;

    @Column(name = "title_id", nullable = false, length = 150)
    private String titleId;

    @Column(name = "title_en", nullable = false, length = 150)
    private String titleEn;

    @Column(name = "title_my", nullable = false, length = 150)
    private String titleMy;

    @Column(name = "item_count", nullable = false)
    private Integer itemCount = 0;

    protected CourseDeck() {}

    public CourseDeck(Long id, String trackCode, String levelCode, Integer dayNumber, String titleTarget, String titleId, String titleEn, String titleMy, Integer itemCount) {
        this.id = id;
        this.trackCode = trackCode;
        this.levelCode = levelCode;
        this.dayNumber = dayNumber;
        this.titleTarget = titleTarget;
        this.titleId = titleId;
        this.titleEn = titleEn;
        this.titleMy = titleMy;
        this.itemCount = itemCount != null ? itemCount : 0;
    }

    public Long getId() { return id; }
    public String getTrackCode() { return trackCode; }
    public String getLevelCode() { return levelCode; }
    public Integer getDayNumber() { return dayNumber; }
    public String getTitleTarget() { return titleTarget; }
    public String getTitleId() { return titleId; }
    public String getTitleEn() { return titleEn; }
    public String getTitleMy() { return titleMy; }
    public Integer getItemCount() { return itemCount; }

    public String getLocalizedTitle(String lang) {
        if ("my".equalsIgnoreCase(lang)) return titleMy;
        if ("en".equalsIgnoreCase(lang)) return titleEn;
        return titleId;
    }
}
