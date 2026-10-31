package com.kanarau.course.service;

import com.kanarau.auth.dto.UserDto;
import com.kanarau.auth.entity.User;
import com.kanarau.auth.repository.UserRepository;
import com.kanarau.common.exception.ApiException;
import com.kanarau.common.model.JlptLevel;
import com.kanarau.course.dto.*;
import com.kanarau.course.registry.CourseTrackRegistry;
import com.kanarau.course.strategy.CourseTrackStrategy;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
public class CourseService {

    private final CourseTrackRegistry trackRegistry;
    private final UserRepository userRepository;

    public CourseService(CourseTrackRegistry trackRegistry, UserRepository userRepository) {
        this.trackRegistry = trackRegistry;
        this.userRepository = userRepository;
    }

    public List<CourseTrackDto> listTracks(String myLang) {
        List<CourseTrackDto> result = new ArrayList<>();
        for (CourseTrackStrategy strategy : trackRegistry.getAllStrategies()) {
            result.add(strategy.getTrackInfo(myLang));
        }
        return result;
    }

    public List<CourseLevelDto> listLevels(String trackCode, String myLang) {
        CourseTrackStrategy strategy = trackRegistry.getStrategy(trackCode);
        return strategy.getLevels(myLang);
    }

    public List<CourseDeckDto> listDecks(String trackCode, String levelCode, String myLang, Long userId) {
        CourseTrackStrategy strategy = trackRegistry.getStrategy(trackCode);
        return strategy.getDecks(levelCode, myLang, userId);
    }

    public List<CourseCardDto> getDeckCards(String trackCode, Long deckId, String myLang) {
        CourseTrackStrategy strategy = trackRegistry.getStrategy(trackCode);
        return strategy.getDeckCards(deckId, myLang);
    }

    @Transactional
    public UserDto switchCourse(Long userId, SwitchCourseRequest req) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ApiException(HttpStatus.NOT_FOUND, "Pengguna tidak ditemukan"));

        if (req.myLanguage() != null && !req.myLanguage().isBlank()) {
            user.setPreferredLanguage(req.myLanguage().trim().toLowerCase());
        }

        if (req.targetLanguage() != null && !req.targetLanguage().isBlank()) {
            user.setTargetLanguage(req.targetLanguage().trim().toLowerCase());
        }

        if (req.levelCode() != null && !req.levelCode().isBlank()) {
            user.setCurrentTrackLevel(req.levelCode().trim());
            // If Japanese track, also sync currentLevel enum
            if ("ja".equalsIgnoreCase(req.targetLanguage()) || "JA".equalsIgnoreCase(req.trackCode())) {
                try {
                    user.setCurrentLevel(JlptLevel.valueOf(req.levelCode().trim().toUpperCase()));
                } catch (Exception ignored) {}
            }
        }

        user = userRepository.save(user);
        return UserDto.from(user);
    }
}
