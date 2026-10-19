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

    public StudyController(StudyService studyService) {
        this.studyService = studyService;
    }

    private Long getUserId(Authentication auth) {
        if (auth != null && auth.getPrincipal() instanceof Long uid) {
            return uid;
        }
        return null;
    }

    @PostMapping("/submit")
    public ResponseEntity<ApiResponse<Map<String, Object>>> submitSession(
            @RequestBody SubmitSessionRequest req,
            Authentication auth
    ) {
        Long userId = getUserId(auth);
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
}
