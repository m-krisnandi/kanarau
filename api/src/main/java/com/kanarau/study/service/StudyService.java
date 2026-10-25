package com.kanarau.study.service;

import com.kanarau.auth.repository.UserRepository;
import com.kanarau.common.model.ReviewResponse;
import com.kanarau.common.model.StudyDirection;
import com.kanarau.review.entity.ReviewLog;
import com.kanarau.review.entity.UserProgress;
import com.kanarau.review.repository.ReviewLogRepository;
import com.kanarau.review.repository.UserProgressRepository;
import com.kanarau.review.service.SrsAlgorithm;
import com.kanarau.study.dto.QuizAnswerDto;
import com.kanarau.study.dto.SubmitSessionRequest;
import com.kanarau.study.entity.StudySession;
import com.kanarau.study.repository.StudySessionRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.Map;

@Service
public class StudyService {

    private final StudySessionRepository studySessionRepository;
    private final UserProgressRepository userProgressRepository;
    private final ReviewLogRepository reviewLogRepository;
    private final UserRepository userRepository;
    private final SrsAlgorithm srsAlgorithm;
    private final com.kanarau.progress.service.ProgressService progressService;

    public StudyService(
            StudySessionRepository studySessionRepository,
            UserProgressRepository userProgressRepository,
            ReviewLogRepository reviewLogRepository,
            UserRepository userRepository,
            SrsAlgorithm srsAlgorithm,
            com.kanarau.progress.service.ProgressService progressService
    ) {
        this.studySessionRepository = studySessionRepository;
        this.userProgressRepository = userProgressRepository;
        this.reviewLogRepository = reviewLogRepository;
        this.userRepository = userRepository;
        this.srsAlgorithm = srsAlgorithm;
        this.progressService = progressService;
    }

    @Transactional
    public Map<String, Object> submitSession(Long userId, SubmitSessionRequest req) {
        if (userId == null) {
            return Map.of("xp_gained", 0);
        }

        // 1. Record session with realistic start time based on actual duration
        StudySession session = new StudySession(userId, req.deckId() != null ? req.deckId() : 1L);
        long durationMs = req.totalTimeMs() > 0 ? req.totalTimeMs() : (Math.max(1, req.totalCards()) * 15000L);
        session.setStartedAt(Instant.now().minusMillis(durationMs));
        for (int i = 0; i < req.totalCards(); i++) session.incrementStudied();
        for (int i = 0; i < req.correctCount(); i++) session.incrementCorrect();
        session.setFinishedAt(Instant.now());
        studySessionRepository.save(session);

        // 2. Process each answer into SRS
        if (req.answers() != null) {
            for (QuizAnswerDto a : req.answers()) {
                recordSingleAnswer(userId, a);
            }
        }

        // 3. Update user XP and compute updated streak
        int updatedStreak = progressService.computeStreak(userId);
        userRepository.findById(userId).ifPresent(user -> {
            user.addXp(req.xpGained());
            user.setStreak(updatedStreak);
            userRepository.save(user);
        });

        return Map.of("xp_gained", req.xpGained(), "streak", updatedStreak);
    }

    @Transactional
    public void recordSingleAnswer(Long userId, QuizAnswerDto a) {
        if (userId == null || a.kotobaId() == null) return;

        StudyDirection dir = StudyDirection.KANJI_TO_MEANING;
        if (a.cardId() != null) {
            if (a.cardId().endsWith("_kh")) dir = StudyDirection.KANJI_TO_HIRAGANA;
            else if (a.cardId().endsWith("_mk")) dir = StudyDirection.MEANING_TO_KANJI;
        }

        final StudyDirection direction = dir;
        final Long uid = userId;

        UserProgress progress = userProgressRepository
                .findByUserIdAndKotobaIdAndDirection(uid, a.kotobaId(), direction)
                .orElseGet(() -> new UserProgress(uid, a.kotobaId(), direction));

        ReviewResponse response = srsAlgorithm.autoRate(a.isCorrect(), a.responseTimeMs());
        SrsAlgorithm.CalculationResult calc = srsAlgorithm.calculateNext(progress, response);

        progress.setEaseFactor(calc.newEaseFactor());
        progress.setIntervalDays(calc.newIntervalDays());
        progress.setNextReview(calc.nextReview());
        progress.setStatus(calc.newStatus());
        progress.setReviewCount(progress.getReviewCount() + 1);
        progress.setLastReviewed(Instant.now());

        progress = userProgressRepository.save(progress);

        ReviewLog log = new ReviewLog(progress.getId(), response, a.responseTimeMs());
        reviewLogRepository.save(log);
    }
}
