package com.kanarau.kotoba.entity;

import com.kanarau.common.model.JlptLevel;
import com.kanarau.kanji.entity.Kanji;
import jakarta.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "kotoba")
public class Kotoba {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String kanji;

    @Column(nullable = false)
    private String hiragana;

    @Column(name = "meaning_id", nullable = false)
    private String meaningId;  // Indonesian meaning

    @Column(name = "meaning_en")
    private String meaningEn;

    @Column(name = "meaning_my")
    private String meaningMy;  // Myanmar translation

    @Column
    private String notes;

    @Column(name = "example_sentence")
    private String exampleSentence;

    @Column(name = "example_translation")
    private String exampleTranslation;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private JlptLevel level;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "kotoba_kanji",
            joinColumns = @JoinColumn(name = "kotoba_id"),
            inverseJoinColumns = @JoinColumn(name = "kanji_id")
    )
    private Set<Kanji> kanjiSet = new HashSet<>();

    protected Kotoba() {}

    public Long getId() { return id; }
    public String getKanji() { return kanji; }
    public String getHiragana() { return hiragana; }
    public String getMeaningId() { return meaningId; }
    public String getMeaningEn() { return meaningEn; }
    public String getMeaningMy() { return meaningMy; }
    public String getNotes() { return notes; }
    public String getExampleSentence() { return exampleSentence; }
    public String getExampleTranslation() { return exampleTranslation; }
    public JlptLevel getLevel() { return level; }
    public Set<Kanji> getKanjiSet() { return kanjiSet; }

    public void setMeaningMy(String meaningMy) { this.meaningMy = meaningMy; }
    public void setMeaningEn(String meaningEn) { this.meaningEn = meaningEn; }
}
