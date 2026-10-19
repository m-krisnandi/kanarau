package com.kanarau.kanji.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "kanji")
public class Kanji {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 4)
    private String character;

    @Column(nullable = false)
    private String meaning;

    @Column(name = "meaning_en")
    private String meaningEn;

    @Column(name = "meaning_my")
    private String meaningMy;

    @Column(name = "on_reading")
    private String onReading;

    @Column(name = "kun_reading")
    private String kunReading;

    @Column
    private String radical;

    @Column(name = "radical_meaning")
    private String radicalMeaning;

    @Column(name = "stroke_count")
    private Integer strokeCount;

    @Column(name = "grade")
    private Integer grade;

    @Column(name = "jlpt_level", length = 10)
    private String jlptLevel;

    protected Kanji() {}

    public Long getId() { return id; }
    public String getCharacter() { return character; }
    public String getMeaning() { return meaning; }
    public String getMeaningEn() { return meaningEn; }
    public String getMeaningMy() { return meaningMy; }
    public String getOnReading() { return onReading; }
    public String getKunReading() { return kunReading; }
    public String getRadical() { return radical; }
    public String getRadicalMeaning() { return radicalMeaning; }
    public Integer getStrokeCount() { return strokeCount; }
    public Integer getGrade() { return grade; }
    public String getJlptLevel() { return jlptLevel; }

    public void setMeaningEn(String meaningEn) { this.meaningEn = meaningEn; }
    public void setMeaningMy(String meaningMy) { this.meaningMy = meaningMy; }
    public void setJlptLevel(String jlptLevel) { this.jlptLevel = jlptLevel; }
}
