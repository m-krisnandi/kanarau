package com.kanarau.study.controller;

import com.kanarau.common.dto.ApiResponse;
import com.kanarau.study.dto.QuizAnswerDto;
import com.kanarau.study.dto.SubmitSessionRequest;
import com.kanarau.study.service.StudyService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/study")
public class StudyController {

    private final StudyService studyService;
    private final com.kanarau.auth.repository.UserRepository userRepository;

    public StudyController(StudyService studyService, com.kanarau.auth.repository.UserRepository userRepository) {
        this.studyService = studyService;
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

    @PostMapping("/submit")
    public ResponseEntity<ApiResponse<Map<String, Object>>> submitSession(
            @RequestBody SubmitSessionRequest req,
            Authentication auth
    ) {
        Long userId = getUserId(auth);
        if (userId == null) {
            throw new com.kanarau.common.exception.ApiException(
                    org.springframework.http.HttpStatus.UNAUTHORIZED,
                    "Sesi login tidak valid atau sudah kedaluwarsa. Silakan masuk kembali."
            );
        }
        Map<String, Object> result = studyService.submitSession(userId, req);
        return ResponseEntity.ok(ApiResponse.ok(result));
    }

    @PostMapping("/answer")
    public ResponseEntity<ApiResponse<Void>> submitAnswer(
            @RequestBody QuizAnswerDto req,
            Authentication auth
    ) {
        Long userId = getUserId(auth);
        studyService.recordSingleAnswer(userId, req);
        return ResponseEntity.ok(ApiResponse.ok(null));
    }

    @PostMapping("/module-xp")
    public ResponseEntity<ApiResponse<Map<String, Object>>> awardModuleXp(
            @RequestBody com.kanarau.study.dto.ModuleXpRequest req,
            Authentication auth
    ) {
        Long userId = getUserId(auth);
        if (userId == null) {
            throw new com.kanarau.common.exception.ApiException(
                    org.springframework.http.HttpStatus.UNAUTHORIZED,
                    "Sesi login tidak valid atau sudah kedaluwarsa. Silakan masuk kembali."
            );
        }
        Map<String, Object> result = studyService.awardModuleXp(userId, req);
        return ResponseEntity.ok(ApiResponse.ok(result));
    }
}
