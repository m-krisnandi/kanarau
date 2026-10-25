package com.kanarau.leaderboard.controller;

import com.kanarau.common.dto.ApiResponse;
import com.kanarau.leaderboard.dto.LeaderboardResponse;
import com.kanarau.leaderboard.service.LeaderboardService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping({"/leaderboard", "/progress/leaderboard"})
public class LeaderboardController {

    private final LeaderboardService leaderboardService;
    private final com.kanarau.auth.repository.UserRepository userRepository;

    public LeaderboardController(
            LeaderboardService leaderboardService,
            com.kanarau.auth.repository.UserRepository userRepository
    ) {
        this.leaderboardService = leaderboardService;
        this.userRepository = userRepository;
    }

    private Long getUserId(Authentication auth) {
        if (auth == null || auth.getPrincipal() == null) return null;
        Object principal = auth.getPrincipal();
        if (principal instanceof Long l) return l;
        if (principal instanceof Number n) return n.longValue();
        try {
            return Long.parseLong(principal.toString());
        } catch (NumberFormatException ignored) {
            return userRepository.findByEmailIgnoreCase(principal.toString())
                    .map(com.kanarau.auth.entity.User::getId)
                    .orElse(null);
        }
    }

    @GetMapping
    public ResponseEntity<ApiResponse<LeaderboardResponse>> getLeaderboard(Authentication auth) {
        Long userId = getUserId(auth);
        LeaderboardResponse response = leaderboardService.getLeaderboard(userId);
        return ResponseEntity.ok(ApiResponse.ok(response));
    }
}
