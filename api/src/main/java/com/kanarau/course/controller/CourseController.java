package com.kanarau.course.controller;

import com.kanarau.auth.dto.UserDto;
import com.kanarau.common.dto.ApiResponse;
import com.kanarau.common.exception.ApiException;
import com.kanarau.course.dto.*;
import com.kanarau.course.service.CourseService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/courses")
public class CourseController {

    private final CourseService courseService;

    public CourseController(CourseService courseService) {
        this.courseService = courseService;
    }

    private Long getUserId(Authentication auth) {
        if (auth != null && auth.getPrincipal() instanceof Long uid) {
            return uid;
        }
        return null;
    }

    private Long getRequiredUserId(Authentication auth) {
        Long uid = getUserId(auth);
        if (uid == null) {
            throw new ApiException(HttpStatus.UNAUTHORIZED, "Sesi login diperlukan");
        }
        return uid;
    }

    @GetMapping("/tracks")
    public ResponseEntity<ApiResponse<List<CourseTrackDto>>> listTracks(
            @RequestParam(required = false, defaultValue = "en") String lang
    ) {
        List<CourseTrackDto> tracks = courseService.listTracks(lang);
        return ResponseEntity.ok(ApiResponse.ok(tracks));
    }

    @GetMapping("/{trackCode}/levels")
    public ResponseEntity<ApiResponse<List<CourseLevelDto>>> listLevels(
            @PathVariable String trackCode,
            @RequestParam(required = false, defaultValue = "en") String lang
    ) {
        List<CourseLevelDto> levels = courseService.listLevels(trackCode, lang);
        return ResponseEntity.ok(ApiResponse.ok(levels));
    }

    @GetMapping("/{trackCode}/decks")
    public ResponseEntity<ApiResponse<List<CourseDeckDto>>> listDecks(
            @PathVariable String trackCode,
            @RequestParam(required = false) String level,
            @RequestParam(required = false, defaultValue = "en") String lang,
            Authentication auth
    ) {
        Long userId = getUserId(auth);
        List<CourseDeckDto> decks = courseService.listDecks(trackCode, level, lang, userId);
        return ResponseEntity.ok(ApiResponse.ok(decks));
    }

    @GetMapping("/{trackCode}/decks/{deckId}/cards")
    public ResponseEntity<ApiResponse<List<CourseCardDto>>> getDeckCards(
            @PathVariable String trackCode,
            @PathVariable Long deckId,
            @RequestParam(required = false, defaultValue = "en") String lang
    ) {
        List<CourseCardDto> cards = courseService.getDeckCards(trackCode, deckId, lang);
        return ResponseEntity.ok(ApiResponse.ok(cards));
    }

    @PutMapping("/switch")
    public ResponseEntity<ApiResponse<UserDto>> switchCourse(
            @Valid @RequestBody SwitchCourseRequest req,
            Authentication auth
    ) {
        Long userId = getRequiredUserId(auth);
        UserDto updatedUser = courseService.switchCourse(userId, req);
        return ResponseEntity.ok(ApiResponse.ok(updatedUser, "Program belajar berhasil dialihkan"));
    }
}
