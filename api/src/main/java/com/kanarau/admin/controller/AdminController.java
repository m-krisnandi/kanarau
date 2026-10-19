package com.kanarau.admin.controller;

import com.kanarau.admin.dto.*;
import com.kanarau.admin.service.AdminService;
import com.kanarau.auth.entity.User;
import com.kanarau.auth.repository.UserRepository;
import com.kanarau.common.dto.ApiResponse;
import com.kanarau.common.exception.ApiException;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin")
public class AdminController {

    private final AdminService adminService;
    private final UserRepository userRepository;

    public AdminController(AdminService adminService, UserRepository userRepository) {
        this.adminService = adminService;
        this.userRepository = userRepository;
    }

    private Long checkAdminAccess() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth == null || !(auth.getPrincipal() instanceof Long userId)) {
            throw new ApiException(HttpStatus.UNAUTHORIZED, "Harus login untuk mengakses data admin");
        }
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ApiException(HttpStatus.UNAUTHORIZED, "User tidak ditemukan"));
        if (!"ADMIN".equalsIgnoreCase(user.getRole())) {
            throw new ApiException(HttpStatus.FORBIDDEN, "Hanya admin yang memiliki izin akses");
        }
        return userId;
    }

    @GetMapping("/overview")
    public ResponseEntity<ApiResponse<AdminOverviewResponse>> getOverview() {
        checkAdminAccess();
        AdminOverviewResponse res = adminService.getOverview();
        return ResponseEntity.ok(ApiResponse.ok(res));
    }

    @GetMapping("/users")
    public ResponseEntity<ApiResponse<List<AdminUserStatsResponse>>> getAllUsers() {
        checkAdminAccess();
        List<AdminUserStatsResponse> users = adminService.getAllUsers();
        return ResponseEntity.ok(ApiResponse.ok(users));
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<ApiResponse<AdminUserDetailResponse>> getUserDetail(@PathVariable Long id) {
        checkAdminAccess();
        AdminUserDetailResponse detail = adminService.getUserDetail(id);
        return ResponseEntity.ok(ApiResponse.ok(detail));
    }

    @PatchMapping("/users/{id}/role")
    public ResponseEntity<ApiResponse<AdminUserStatsResponse>> updateUserRole(
            @PathVariable Long id,
            @RequestBody @Valid UserRoleUpdateRequest req
    ) {
        Long actorUserId = checkAdminAccess();
        AdminUserStatsResponse res = adminService.updateUserRole(id, req.role(), actorUserId);
        return ResponseEntity.ok(ApiResponse.ok(res));
    }

    @PostMapping("/users/admin")
    public ResponseEntity<ApiResponse<AdminUserStatsResponse>> createOrPromoteAdmin(
            @RequestBody @Valid CreateAdminRequest req
    ) {
        checkAdminAccess();
        AdminUserStatsResponse res = adminService.createOrPromoteAdmin(req);
        return ResponseEntity.ok(ApiResponse.ok(res));
    }

    @GetMapping("/feedbacks")
    public ResponseEntity<ApiResponse<List<FeedbackResponse>>> getAllFeedbacks() {
        checkAdminAccess();
        List<FeedbackResponse> feedbacks = adminService.getAllFeedbacks();
        return ResponseEntity.ok(ApiResponse.ok(feedbacks));
    }

    @PatchMapping("/feedbacks/{id}/status")
    public ResponseEntity<ApiResponse<FeedbackResponse>> updateFeedbackStatus(
            @PathVariable Long id,
            @RequestBody FeedbackStatusUpdateRequest req
    ) {
        checkAdminAccess();
        FeedbackResponse updated = adminService.updateFeedbackStatus(id, req.status());
        return ResponseEntity.ok(ApiResponse.ok(updated));
    }

    @DeleteMapping("/feedbacks/{id}")
    public ResponseEntity<ApiResponse<String>> deleteFeedback(@PathVariable Long id) {
        checkAdminAccess();
        adminService.deleteFeedback(id);
        return ResponseEntity.ok(ApiResponse.ok("Feedback deleted successfully"));
    }
}
