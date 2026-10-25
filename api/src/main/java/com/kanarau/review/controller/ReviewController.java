package com.kanarau.review.controller;

import com.kanarau.common.dto.ApiResponse;
import com.kanarau.review.dto.ReviewStatsResponse;
import com.kanarau.review.service.ReviewService;
import com.kanarau.study.dto.QuizAnswerDto;
import com.kanarau.study.dto.QuizCardResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/review")
public class ReviewController {

    private final ReviewService reviewService;

    public ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    private Long getUserId(Authentication auth) {
        if (auth == null || auth.getPrincipal() == null) return null;
        Object principal = auth.getPrincipal();
        if (principal instanceof Long l) return l;
        if (principal instanceof Number n) return n.longValue();
        try {
            return Long.parseLong(principal.toString());
        } catch (NumberFormatException ignored) {
            return null;
        }
    }

    @GetMapping("/stats")
    public ResponseEntity<ApiResponse<ReviewStatsResponse>> getStats(Authentication auth) {
        Long userId = getUserId(auth);
        ReviewStatsResponse stats = reviewService.getStats(userId);
        return ResponseEntity.ok(ApiResponse.ok(stats));
    }

    @GetMapping("/queue")
    public ResponseEntity<ApiResponse<List<QuizCardResponse>>> getQueue(
            @RequestParam(required = false, defaultValue = "id") String lang,
            Authentication auth
    ) {
        Long userId = getUserId(auth);
        List<QuizCardResponse> queue = reviewService.getReviewQueue(userId, lang);
        return ResponseEntity.ok(ApiResponse.ok(queue));
    }

    public record SubmitReviewWrapper(List<QuizAnswerDto> answers) {}

    @PostMapping("/submit")
    public ResponseEntity<ApiResponse<Map<String, Object>>> submitReview(
            @RequestBody SubmitReviewWrapper req,
            Authentication auth
    ) {
        Long userId = getUserId(auth);
        Map<String, Object> result = reviewService.submitReview(userId, req.answers());
        return ResponseEntity.ok(ApiResponse.ok(result));
    }
}
