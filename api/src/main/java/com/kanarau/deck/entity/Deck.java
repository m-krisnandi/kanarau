package com.kanarau.deck.entity;

import com.kanarau.common.model.JlptLevel;
import jakarta.persistence.*;

@Entity
@Table(name = "decks")
public class Deck {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private JlptLevel level;

    @Column(name = "day_number", nullable = false)
    private Integer dayNumber;

    @Column(name = "kotoba_count", nullable = false)
    private Integer kotobaCount;

    protected Deck() {}

    public Deck(Long id, String name, JlptLevel level, Integer dayNumber, Integer kotobaCount) {
        this.id = id;
        this.name = name;
        this.level = level;
        this.dayNumber = dayNumber;
        this.kotobaCount = kotobaCount;
    }

    public Long getId() { return id; }
    public String getName() { return name; }
    public JlptLevel getLevel() { return level; }
    public Integer getDayNumber() { return dayNumber; }
    public Integer getKotobaCount() { return kotobaCount; }
}
