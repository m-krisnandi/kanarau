package com.kanarau.admin.dto;

import com.kanarau.admin.entity.UserFeedback;
import java.time.Instant;

public record FeedbackResponse(
        Long id,
        Long userId,
        String userName,
        String userEmail,
        String category,
        String description,
        String status,
        Instant createdAt
) {
    public static FeedbackResponse from(UserFeedback f) {
        return new FeedbackResponse(
                f.getId(),
                f.getUserId(),
                f.getUserName(),
                f.getUserEmail(),
                f.getCategory(),
                f.getDescription(),
                f.getStatus(),
                f.getCreatedAt()
        );
    }
}
