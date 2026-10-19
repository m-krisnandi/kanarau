package com.kanarau.admin.controller;

import com.kanarau.admin.dto.FeedbackRequest;
import com.kanarau.admin.dto.FeedbackResponse;
import com.kanarau.admin.service.AdminService;
import com.kanarau.auth.entity.User;
import com.kanarau.auth.repository.UserRepository;
import com.kanarau.common.dto.ApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/feedback")
public class FeedbackController {

    private final AdminService adminService;
    private final UserRepository userRepository;

    public FeedbackController(AdminService adminService, UserRepository userRepository) {
        this.adminService = adminService;
        this.userRepository = userRepository;
    }

    @PostMapping
    public ResponseEntity<ApiResponse<FeedbackResponse>> submitFeedback(
            @RequestBody FeedbackRequest req,
            Authentication auth
    ) {
        Long userId = null;
        String email = "anonymous@kanarau.app";
        String name = "Pengguna Kanarau";

        if (auth != null && auth.getPrincipal() instanceof Long uid) {
            userId = uid;
            User user = userRepository.findById(uid).orElse(null);
            if (user != null) {
                email = user.getEmail();
                name = user.getDisplayName();
            }
        }

        FeedbackResponse res = adminService.submitFeedback(userId, email, name, req);
        return ResponseEntity.ok(ApiResponse.ok(res));
    }
}
