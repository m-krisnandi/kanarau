package com.kanarau.study.entity;

import jakarta.persistence.*;
import java.time.Instant;

@Entity
@Table(name = "study_sessions")
public class StudySession {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_id", nullable = false)
    private Long userId;

    @Column(name = "deck_id", nullable = false)
    private Long deckId;

    @Column(name = "started_at", nullable = false)
    private Instant startedAt;

    @Column(name = "finished_at")
    private Instant finishedAt;

    @Column(name = "cards_studied", nullable = false)
    private Integer cardsStudied;

    @Column(name = "cards_correct", nullable = false)
    private Integer cardsCorrect;

    protected StudySession() {}

    public StudySession(Long userId, Long deckId) {
        this.userId = userId;
        this.deckId = deckId;
        this.startedAt = Instant.now();
        this.cardsStudied = 0;
        this.cardsCorrect = 0;
    }

    public Long getId() { return id; }
    public Long getUserId() { return userId; }
    public Long getDeckId() { return deckId; }
    public Instant getStartedAt() { return startedAt; }
    public Instant getFinishedAt() { return finishedAt; }
    public Integer getCardsStudied() { return cardsStudied; }
    public Integer getCardsCorrect() { return cardsCorrect; }

    public void setStartedAt(Instant startedAt) { this.startedAt = startedAt; }
    public void setFinishedAt(Instant finishedAt) { this.finishedAt = finishedAt; }
    public void incrementStudied() { this.cardsStudied++; }
    public void incrementCorrect() { this.cardsCorrect++; }

    public boolean isFinished() { return finishedAt != null; }
}
