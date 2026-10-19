package com.kanarau.review.entity;

import com.kanarau.common.model.ProgressStatus;
import com.kanarau.common.model.StudyDirection;
import jakarta.persistence.*;
import java.time.Instant;

@Entity
@Table(name = "user_progress",
       uniqueConstraints = @UniqueConstraint(columnNames = {"user_id", "kotoba_id", "direction"}))
public class UserProgress {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_id", nullable = false)
    private Long userId;

    @Column(name = "kotoba_id", nullable = false)
    private Long kotobaId;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private StudyDirection direction;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private ProgressStatus status;

    @Column(name = "ease_factor", nullable = false)
    private Double easeFactor;

    @Column(name = "interval_days", nullable = false)
    private Double intervalDays;

    @Column(name = "next_review")
    private Instant nextReview;

    @Column(name = "review_count", nullable = false)
    private Integer reviewCount;

    @Column(name = "last_reviewed")
    private Instant lastReviewed;

    protected UserProgress() {}

    public UserProgress(Long userId, Long kotobaId, StudyDirection direction) {
        this.userId = userId;
        this.kotobaId = kotobaId;
        this.direction = direction;
        this.status = ProgressStatus.NEW;
        this.easeFactor = 2.5;
        this.intervalDays = 0.0;
        this.reviewCount = 0;
    }

    public Long getId() { return id; }
    public Long getUserId() { return userId; }
    public Long getKotobaId() { return kotobaId; }
    public StudyDirection getDirection() { return direction; }
    public ProgressStatus getStatus() { return status; }
    public Double getEaseFactor() { return easeFactor; }
    public Double getIntervalDays() { return intervalDays; }
    public Instant getNextReview() { return nextReview; }
    public Integer getReviewCount() { return reviewCount; }
    public Instant getLastReviewed() { return lastReviewed; }

    public void setStatus(ProgressStatus status) { this.status = status; }
    public void setEaseFactor(Double easeFactor) { this.easeFactor = easeFactor; }
    public void setIntervalDays(Double intervalDays) { this.intervalDays = intervalDays; }
    public void setNextReview(Instant nextReview) { this.nextReview = nextReview; }
    public void setReviewCount(Integer reviewCount) { this.reviewCount = reviewCount; }
    public void setLastReviewed(Instant lastReviewed) { this.lastReviewed = lastReviewed; }
}
