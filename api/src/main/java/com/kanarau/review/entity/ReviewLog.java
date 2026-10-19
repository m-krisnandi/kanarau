package com.kanarau.review.entity;

import com.kanarau.common.model.ReviewResponse;
import jakarta.persistence.*;
import java.time.Instant;

@Entity
@Table(name = "review_logs")
public class ReviewLog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "progress_id", nullable = false)
    private Long progressId;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private ReviewResponse response;

    @Column(name = "response_time_ms", nullable = false)
    private Long responseTimeMs;

    @Column(name = "reviewed_at", nullable = false)
    private Instant reviewedAt;

    protected ReviewLog() {}

    public ReviewLog(Long progressId, ReviewResponse response, Long responseTimeMs) {
        this.progressId = progressId;
        this.response = response;
        this.responseTimeMs = responseTimeMs;
        this.reviewedAt = Instant.now();
    }

    public Long getId() { return id; }
    public Long getProgressId() { return progressId; }
    public ReviewResponse getResponse() { return response; }
    public Long getResponseTimeMs() { return responseTimeMs; }
    public Instant getReviewedAt() { return reviewedAt; }
}
