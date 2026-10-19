package com.kanarau.deck.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "deck_kotoba")
public class DeckKotoba {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "deck_id", nullable = false)
    private Long deckId;

    @Column(name = "kotoba_id", nullable = false)
    private Long kotobaId;

    @Column(name = "sort_order", nullable = false)
    private Integer sortOrder;

    protected DeckKotoba() {}

    public Long getId() { return id; }
    public Long getDeckId() { return deckId; }
    public Long getKotobaId() { return kotobaId; }
    public Integer getSortOrder() { return sortOrder; }
}
