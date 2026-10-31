package com.kanarau.course.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "course_items")
public class CourseItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "deck_id")
    private Long deckId;

    @Column(name = "track_code", nullable = false, length = 20)
    private String trackCode;

    @Column(name = "level_code", nullable = false, length = 30)
    private String levelCode;

    @Column(name = "target_text", nullable = false)
    private String targetText;

    @Column(name = "romanization")
    private String romanization;

    @Column(name = "item_type", nullable = false, length = 50)
    private String itemType = "VOCABULARY";

    @Column(name = "meaning_id", nullable = false, columnDefinition = "TEXT")
    private String meaningId;

    @Column(name = "meaning_en", nullable = false, columnDefinition = "TEXT")
    private String meaningEn;

    @Column(name = "meaning_my", nullable = false, columnDefinition = "TEXT")
    private String meaningMy;

    @Column(name = "notes_id", columnDefinition = "TEXT")
    private String notesId;

    @Column(name = "notes_en", columnDefinition = "TEXT")
    private String notesEn;

    @Column(name = "notes_my", columnDefinition = "TEXT")
    private String notesMy;

    @Column(name = "example_target", columnDefinition = "TEXT")
    private String exampleTarget;

    @Column(name = "example_meaning_id", columnDefinition = "TEXT")
    private String exampleMeaningId;

    @Column(name = "example_meaning_en", columnDefinition = "TEXT")
    private String exampleMeaningEn;

    @Column(name = "example_meaning_my", columnDefinition = "TEXT")
    private String exampleMeaningMy;

    @Column(name = "sort_order", nullable = false)
    private int sortOrder = 0;

    protected CourseItem() {}

    public Long getId() { return id; }
    public Long getDeckId() { return deckId; }
    public String getTrackCode() { return trackCode; }
    public String getLevelCode() { return levelCode; }
    public String getTargetText() { return targetText; }
    public String getRomanization() { return romanization; }
    public String getItemType() { return itemType; }
    public String getMeaningId() { return meaningId; }
    public String getMeaningEn() { return meaningEn; }
    public String getMeaningMy() { return meaningMy; }
    public String getNotesId() { return notesId; }
    public String getNotesEn() { return notesEn; }
    public String getNotesMy() { return notesMy; }
    public String getExampleTarget() { return exampleTarget; }
    public String getExampleMeaningId() { return exampleMeaningId; }
    public String getExampleMeaningEn() { return exampleMeaningEn; }
    public String getExampleMeaningMy() { return exampleMeaningMy; }
    public int getSortOrder() { return sortOrder; }

    public String getLocalizedMeaning(String lang) {
        if ("my".equalsIgnoreCase(lang)) return meaningMy;
        if ("en".equalsIgnoreCase(lang)) return meaningEn;
        return meaningId;
    }

    public String getLocalizedNotes(String lang) {
        if ("my".equalsIgnoreCase(lang)) return notesMy;
        if ("en".equalsIgnoreCase(lang)) return notesEn;
        return notesId;
    }

    public String getLocalizedExample(String lang) {
        if ("my".equalsIgnoreCase(lang)) return exampleMeaningMy;
        if ("en".equalsIgnoreCase(lang)) return exampleMeaningEn;
        return exampleMeaningId;
    }
}
