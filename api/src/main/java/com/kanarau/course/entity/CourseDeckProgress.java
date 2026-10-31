package com.kanarau.course.entity;

import jakarta.persistence.*;
import java.time.Instant;

@Entity
@Table(name = "course_deck_progress")
public class CourseDeckProgress {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_id", nullable = false)
    private Long userId;

    @Column(name = "track_code", nullable = false)
    private String trackCode;

    @Column(name = "deck_id", nullable = false)
    private Long deckId;

    @Column(name = "progress_percent", nullable = false)
    private Integer progressPercent = 0;

    @Column(name = "completed", nullable = false)
    private Boolean completed = false;

    @Column(name = "completed_at")
    private Instant completedAt;

    @Column(name = "updated_at")
    private Instant updatedAt;

    protected CourseDeckProgress() {}

    public CourseDeckProgress(Long userId, String trackCode, Long deckId, Integer progressPercent, Boolean completed) {
        this.userId = userId;
        this.trackCode = trackCode;
        this.deckId = deckId;
        this.progressPercent = progressPercent != null ? progressPercent : 0;
        this.completed = completed != null ? completed : false;
        this.completedAt = Boolean.TRUE.equals(completed) ? Instant.now() : null;
        this.updatedAt = Instant.now();
    }

    public Long getId() { return id; }
    public Long getUserId() { return userId; }
    public String getTrackCode() { return trackCode; }
    public Long getDeckId() { return deckId; }
    public Integer getProgressPercent() { return progressPercent; }
    public Boolean getCompleted() { return completed; }
    public Instant getCompletedAt() { return completedAt; }
    public Instant getUpdatedAt() { return updatedAt; }

    public void setProgressPercent(Integer progressPercent) { this.progressPercent = progressPercent; }
    public void setCompleted(Boolean completed) {
        this.completed = completed;
        if (Boolean.TRUE.equals(completed) && this.completedAt == null) {
            this.completedAt = Instant.now();
        }
    }
    public void setUpdatedAt(Instant updatedAt) { this.updatedAt = updatedAt; }
}
