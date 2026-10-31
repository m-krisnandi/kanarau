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
import com.kanarau.course.entity.CourseDeckProgress;
import com.kanarau.course.entity.UserTrackStats;
import com.kanarau.course.repository.CourseDeckProgressRepository;
import com.kanarau.course.repository.UserTrackStatsRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.time.LocalDate;
import java.util.Map;

@Service
public class StudyService {

    private final StudySessionRepository studySessionRepository;
    private final UserProgressRepository userProgressRepository;
    private final ReviewLogRepository reviewLogRepository;
    private final UserRepository userRepository;
    private final SrsAlgorithm srsAlgorithm;
    private final com.kanarau.progress.service.ProgressService progressService;
    private final CourseDeckProgressRepository courseDeckProgressRepository;
    private final UserTrackStatsRepository userTrackStatsRepository;

    public StudyService(
            StudySessionRepository studySessionRepository,
            UserProgressRepository userProgressRepository,
            ReviewLogRepository reviewLogRepository,
            UserRepository userRepository,
            SrsAlgorithm srsAlgorithm,
            com.kanarau.progress.service.ProgressService progressService,
            CourseDeckProgressRepository courseDeckProgressRepository,
            UserTrackStatsRepository userTrackStatsRepository
    ) {
        this.studySessionRepository = studySessionRepository;
        this.userProgressRepository = userProgressRepository;
        this.reviewLogRepository = reviewLogRepository;
        this.userRepository = userRepository;
        this.srsAlgorithm = srsAlgorithm;
        this.progressService = progressService;
        this.courseDeckProgressRepository = courseDeckProgressRepository;
        this.userTrackStatsRepository = userTrackStatsRepository;
    }

    @Transactional
    public Map<String, Object> submitSession(Long userId, SubmitSessionRequest req) {
        if (userId == null) {
            return Map.of("xp_gained", 0);
        }

        String track = (req.trackCode() != null && !req.trackCode().isBlank())
                ? req.trackCode().trim().toUpperCase()
                : "JA";
        Long deckId = req.deckId() != null ? req.deckId() : 1L;

        // 1. Record session with trackCode and realistic start time based on actual duration
        StudySession session = new StudySession(userId, deckId, track);
        long durationMs = req.totalTimeMs() > 0 ? req.totalTimeMs() : (Math.max(1, req.totalCards()) * 15000L);
        session.setStartedAt(Instant.now().minusMillis(durationMs));
        for (int i = 0; i < req.totalCards(); i++) session.incrementStudied();
        for (int i = 0; i < req.correctCount(); i++) session.incrementCorrect();
        session.setFinishedAt(Instant.now());
        studySessionRepository.save(session);

        // 2. Process each answer into SRS if kotoba
        if (req.answers() != null) {
            for (QuizAnswerDto a : req.answers()) {
                try {
                    recordSingleAnswer(userId, a);
                } catch (Exception ignored) {}
            }
        }

        // 3. Persistent course deck progress (for non-JA or course decks >= 1000)
        if (!"JA".equals(track) || deckId >= 1000) {
            try {
                CourseDeckProgress cdp = courseDeckProgressRepository.findByUserIdAndDeckId(userId, deckId)
                        .orElseGet(() -> new CourseDeckProgress(userId, track, deckId, 100, true));
                cdp.setProgressPercent(100);
                cdp.setCompleted(true);
                cdp.setUpdatedAt(Instant.now());
                courseDeckProgressRepository.save(cdp);
            } catch (Exception ignored) {}
        }

        // 4. Update track-specific stats (isolated XP and streak per language track)
        UserTrackStats trackStats = userTrackStatsRepository.findByUserIdAndTrackCode(userId, track)
                .orElseGet(() -> new UserTrackStats(userId, track));
        trackStats.addXp(req.xpGained());
        int trackStreak = progressService.computeStreak(userId, track);
        trackStats.setStreak(trackStreak);
        trackStats.setLongestStreak(Math.max(trackStats.getLongestStreak(), trackStreak));
        trackStats.setLastStudiedDate(LocalDate.now());
        trackStats.setUpdatedAt(Instant.now());
        userTrackStatsRepository.save(trackStats);

        // 5. Update user table (sync Japanese XP & streak for backward compatibility)
        userRepository.findById(userId).ifPresent(user -> {
            if ("JA".equals(track)) {
                user.addXp(req.xpGained());
                long distinctKotobas = userProgressRepository.countDistinctKotobaByUser(userId);
                int minXp = (int) (distinctKotobas * 10);
                if (minXp > user.getTotalXp()) {
                    user.setTotalXp(minXp);
                }
                user.setStreak(trackStreak);
            }
            userRepository.save(user);
        });

        return Map.of(
                "xp_gained", req.xpGained(),
                "streak", trackStreak,
                "total_xp", trackStats.getTotalXp(),
                "track_code", track
        );
    }

    @Transactional
    public Map<String, Object> awardModuleXp(Long userId, com.kanarau.study.dto.ModuleXpRequest req) {
        if (userId == null || req == null || req.xpGained() <= 0) {
            return Map.of("xp_gained", 0);
        }

        try {
            StudySession session = new StudySession(userId, 1L);
            long durationMs = req.durationSeconds() > 0 ? (req.durationSeconds() * 1000L) : 30000L;
            session.setStartedAt(Instant.now().minusMillis(durationMs));
            session.incrementStudied();
            session.incrementCorrect();
            session.setFinishedAt(Instant.now());
            studySessionRepository.save(session);
        } catch (Exception ignored) {
            // Best-effort study session logging
        }

        int updatedStreak = progressService.computeStreak(userId);
        java.util.concurrent.atomic.AtomicInteger currentTotalXp = new java.util.concurrent.atomic.AtomicInteger(0);
        userRepository.findById(userId).ifPresent(user -> {
            user.addXp(req.xpGained());
            user.setStreak(updatedStreak);
            userRepository.save(user);
            currentTotalXp.set(user.getTotalXp());
        });

        return Map.of(
                "xp_gained", req.xpGained(),
                "total_xp", currentTotalXp.get(),
                "streak", updatedStreak
        );
    }

    @Transactional
    public void recordSingleAnswer(Long userId, QuizAnswerDto a) {
        if (userId == null || a.kotobaId() == null) return;

        StudyDirection dir = StudyDirection.KANJI_TO_MEANING;
        if (a.cardId() != null) {
            if (a.cardId().contains("_kh")) dir = StudyDirection.KANJI_TO_HIRAGANA;
            else if (a.cardId().contains("_mk")) dir = StudyDirection.MEANING_TO_KANJI;
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
