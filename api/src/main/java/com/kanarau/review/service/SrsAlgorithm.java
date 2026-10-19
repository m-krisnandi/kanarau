package com.kanarau.review.service;

import com.kanarau.common.model.ProgressStatus;
import com.kanarau.common.model.ReviewResponse;
import com.kanarau.review.entity.UserProgress;
import org.springframework.stereotype.Component;

import java.time.Instant;
import java.time.temporal.ChronoUnit;

@Component
public class SrsAlgorithm {

    public static final double MIN_EASE_FACTOR = 1.3;
    public static final double DEFAULT_EASE_FACTOR = 2.5;
    public static final double MAX_INTERVAL_DAYS = 19.0; // Maximum review spacing per class design

    public record CalculationResult(
            double newEaseFactor,
            double newIntervalDays,
            Instant nextReview,
            ProgressStatus newStatus
    ) {}

    /**
     * Automatically rates user answer based on speed and accuracy.
     */
    public ReviewResponse autoRate(boolean isCorrect, long responseTimeMs) {
        if (!isCorrect) {
            return ReviewResponse.AGAIN;
        }
        if (responseTimeMs < 3000) {
            return ReviewResponse.EASY;
        } else if (responseTimeMs <= 8000) {
            return ReviewResponse.GOOD;
        } else {
            return ReviewResponse.HARD;
        }
    }

    /**
     * Calculates the next review schedule using SM-2 variant.
     */
    public CalculationResult calculateNext(UserProgress progress, ReviewResponse response) {
        double ease = progress.getEaseFactor() != null ? progress.getEaseFactor() : DEFAULT_EASE_FACTOR;
        double interval = progress.getIntervalDays() != null ? progress.getIntervalDays() : 0.0;
        int reviewCount = progress.getReviewCount() != null ? progress.getReviewCount() : 0;

        double newInterval;
        double newEase = ease;
        ProgressStatus newStatus;

        switch (response) {
            case AGAIN -> {
                newInterval = 0.01; // ~15 minutes
                newEase = Math.max(MIN_EASE_FACTOR, ease - 0.20);
                newStatus = ProgressStatus.LEARNING;
            }
            case HARD -> {
                newInterval = (interval <= 0) ? 0.5 : interval * 1.2;
                newEase = Math.max(MIN_EASE_FACTOR, ease - 0.15);
                newStatus = ProgressStatus.LEARNING;
            }
            case GOOD -> {
                if (interval <= 0) {
                    newInterval = 1.0;
                } else if (interval == 1.0) {
                    newInterval = 3.0;
                } else {
                    newInterval = interval * ease;
                }
                newStatus = (reviewCount >= 3) ? ProgressStatus.REVIEW : ProgressStatus.LEARNING;
            }
            case EASY -> {
                if (interval <= 0) {
                    newInterval = 2.0;
                } else {
                    newInterval = interval * ease * 1.3;
                }
                newEase = ease + 0.15;
                newStatus = (reviewCount >= 4) ? ProgressStatus.MASTERED : ProgressStatus.REVIEW;
            }
            default -> {
                newInterval = 1.0;
                newStatus = ProgressStatus.LEARNING;
            }
        }

        // Cap at max interval
        newInterval = Math.min(newInterval, MAX_INTERVAL_DAYS);

        // Next review date
        long minutesToAdd = (long) (newInterval * 24 * 60);
        Instant nextReview = Instant.now().plus(minutesToAdd, ChronoUnit.MINUTES);

        return new CalculationResult(newEase, newInterval, nextReview, newStatus);
    }
}
