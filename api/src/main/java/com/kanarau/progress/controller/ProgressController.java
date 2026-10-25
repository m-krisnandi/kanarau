package com.kanarau.progress.controller;

import com.kanarau.common.dto.ApiResponse;
import com.kanarau.progress.dto.DeckProgressResponse;
import com.kanarau.progress.dto.JlptCountdownResponse;
import com.kanarau.progress.dto.MonthlyCalendarResponse;
import com.kanarau.progress.dto.OverallStatsResponse;
import com.kanarau.progress.service.ProgressService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/progress")
public class ProgressController {

    private final ProgressService progressService;

    public ProgressController(ProgressService progressService) {
        this.progressService = progressService;
    }

    @GetMapping("/stats")
    public ResponseEntity<ApiResponse<OverallStatsResponse>> getStats(Authentication auth) {
        Long userId = getUserId(auth);
        OverallStatsResponse stats = progressService.getOverallStats(userId);
        return ResponseEntity.ok(ApiResponse.ok(stats));
    }

    @GetMapping("/calendar")
    public ResponseEntity<ApiResponse<MonthlyCalendarResponse>> getCalendar(
            @RequestParam(required = false) Integer year,
            @RequestParam(required = false) Integer month,
            Authentication auth
    ) {
        Long userId = getUserId(auth);
        int y = (year != null) ? year : LocalDate.now().getYear();
        int m = (month != null) ? month : LocalDate.now().getMonthValue();
        MonthlyCalendarResponse calendar = progressService.getCalendar(userId, y, m);
        return ResponseEntity.ok(ApiResponse.ok(calendar));
    }

    @GetMapping("/decks")
    public ResponseEntity<ApiResponse<List<DeckProgressResponse>>> getDeckProgress(Authentication auth) {
        Long userId = getUserId(auth);
        List<DeckProgressResponse> progress = progressService.getDeckProgress(userId);
        return ResponseEntity.ok(ApiResponse.ok(progress));
    }

    @GetMapping("/jlpt-countdown")
    public ResponseEntity<ApiResponse<JlptCountdownResponse>> getCountdown() {
        JlptCountdownResponse countdown = progressService.getCountdown();
        return ResponseEntity.ok(ApiResponse.ok(countdown));
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
}
