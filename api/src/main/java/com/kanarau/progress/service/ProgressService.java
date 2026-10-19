package com.kanarau.progress.service;

import com.kanarau.common.model.JlptLevel;
import com.kanarau.common.model.ProgressStatus;
import com.kanarau.deck.entity.Deck;
import com.kanarau.deck.entity.DeckKotoba;
import com.kanarau.deck.repository.DeckKotobaRepository;
import com.kanarau.deck.repository.DeckRepository;
import com.kanarau.progress.dto.DeckProgressResponse;
import com.kanarau.progress.dto.JlptCountdownResponse;
import com.kanarau.progress.dto.MonthlyCalendarResponse;
import com.kanarau.progress.dto.OverallStatsResponse;
import com.kanarau.review.entity.UserProgress;
import com.kanarau.review.repository.UserProgressRepository;
import com.kanarau.study.entity.StudySession;
import com.kanarau.study.repository.StudySessionRepository;
import org.springframework.stereotype.Service;

import java.time.*;
import java.time.temporal.ChronoUnit;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class ProgressService {

    private final DeckRepository deckRepository;
    private final DeckKotobaRepository deckKotobaRepository;
    private final UserProgressRepository userProgressRepository;
    private final StudySessionRepository studySessionRepository;

    public ProgressService(
            DeckRepository deckRepository,
            DeckKotobaRepository deckKotobaRepository,
            UserProgressRepository userProgressRepository,
            StudySessionRepository studySessionRepository
    ) {
        this.deckRepository = deckRepository;
        this.deckKotobaRepository = deckKotobaRepository;
        this.userProgressRepository = userProgressRepository;
        this.studySessionRepository = studySessionRepository;
    }

    public OverallStatsResponse getOverallStats(Long userId) {
        if (userId == null) {
            return new OverallStatsResponse(0, 0, 0, 0, 0, 0, 0);
        }

        int streak = computeStreak(userId);
        long masteredCount = userProgressRepository.countMasteredByUser(userId);
        long reviewCount = userProgressRepository.countReviewByUser(userId);
        long learningCount = userProgressRepository.countLearningByUser(userId);
        long totalCards = masteredCount + reviewCount + learningCount;

        List<StudySession> sessions = studySessionRepository.findByUserIdOrderByStartedAtDesc(userId);

        long totalStudied = studySessionRepository.totalCardsStudiedByUser(userId);
        long totalCorrect = studySessionRepository.totalCardsCorrectByUser(userId);
        int accuracy = totalStudied > 0 ? (int) Math.round(((double) totalCorrect / totalStudied) * 100) : 0;

        int totalMinutes = 0;
        for (StudySession s : sessions) {
            if (s.getStartedAt() != null && s.getFinishedAt() != null) {
                totalMinutes += (int) Duration.between(s.getStartedAt(), s.getFinishedAt()).toMinutes();
            } else {
                totalMinutes += Math.max(1, s.getCardsStudied() * 20 / 60);
            }
        }

        int totalStudyDays = (int) sessions.stream()
                .filter(s -> s.getStartedAt() != null)
                .map(s -> s.getStartedAt().atZone(ZoneId.systemDefault()).toLocalDate())
                .distinct()
                .count();

        int longestStreak = Math.max(streak, totalStudyDays);

        return new OverallStatsResponse(
                streak,
                longestStreak,
                totalStudyDays,
                totalMinutes,
                totalCards,
                totalStudied,
                accuracy
        );
    }

    public MonthlyCalendarResponse getCalendar(Long userId, int year, int month) {
        YearMonth ym = YearMonth.of(year, month);
        int daysInMonth = ym.lengthOfMonth();
        List<MonthlyCalendarResponse.DayStatsDto> dayList = new ArrayList<>();

        Instant start = ym.atDay(1).atStartOfDay(ZoneId.systemDefault()).toInstant();
        Instant end = ym.atEndOfMonth().atTime(23, 59, 59).atZone(ZoneId.systemDefault()).toInstant();

        List<StudySession> sessions = (userId != null)
                ? studySessionRepository.findByUserIdAndDateRange(userId, start, end)
                : Collections.emptyList();

        Map<Integer, List<StudySession>> sessionsByDay = sessions.stream()
                .filter(s -> s.getStartedAt() != null)
                .collect(Collectors.groupingBy(s -> s.getStartedAt().atZone(ZoneId.systemDefault()).getDayOfMonth()));

        for (int d = 1; d <= daysInMonth; d++) {
            LocalDate date = ym.atDay(d);
            String dateStr = date.toString();
            List<StudySession> daySessions = sessionsByDay.get(d);

            if (daySessions != null && !daySessions.isEmpty()) {
                int dayCardsStudied = daySessions.stream().mapToInt(StudySession::getCardsStudied).sum();
                int dayCardsCorrect = daySessions.stream().mapToInt(StudySession::getCardsCorrect).sum();
                int dayMinutes = 0;
                for (StudySession s : daySessions) {
                    if (s.getStartedAt() != null && s.getFinishedAt() != null) {
                        dayMinutes += (int) Duration.between(s.getStartedAt(), s.getFinishedAt()).toMinutes();
                    } else {
                        dayMinutes += Math.max(1, s.getCardsStudied() * 20 / 60);
                    }
                }
                int dayAccuracy = dayCardsStudied > 0 ? (int) Math.round(((double) dayCardsCorrect / dayCardsStudied) * 100) : 0;
                dayList.add(new MonthlyCalendarResponse.DayStatsDto(
                        dateStr,
                        true,
                        Math.max(1, dayMinutes),
                        dayCardsStudied,
                        dayCardsCorrect,
                        dayAccuracy
                ));
            } else {
                dayList.add(new MonthlyCalendarResponse.DayStatsDto(
                        dateStr,
                        false,
                        0,
                        0,
                        0,
                        0
                ));
            }
        }

        return new MonthlyCalendarResponse(year, month, dayList);
    }

    public List<DeckProgressResponse> getDeckProgress(Long userId) {
        List<Deck> decks = deckRepository.findAllByOrderByLevelAscDayNumberAsc();
        List<DeckProgressResponse> result = new ArrayList<>();

        for (Deck deck : decks) {
            List<Long> kotobaIds = deckKotobaRepository.findByDeckIdOrderBySortOrder(deck.getId())
                    .stream().map(DeckKotoba::getKotobaId).toList();

            int total = deck.getKotobaCount();
            int learned = 0;
            int reviewing = 0;
            int mastered = 0;

            if (userId != null && !kotobaIds.isEmpty()) {
                List<UserProgress> upList = userProgressRepository.findByUserIdAndKotobaIds(userId, kotobaIds);
                for (UserProgress up : upList) {
                    if (up.getStatus() == ProgressStatus.LEARNING) learned++;
                    else if (up.getStatus() == ProgressStatus.REVIEW) reviewing++;
                    else if (up.getStatus() == ProgressStatus.MASTERED) mastered++;
                }
            }

            int percent = total > 0 ? (int) Math.round(((double) (mastered * 2 + reviewing + learned) / (total * 2)) * 100) : 0;
            if (percent > 100) percent = 100;

            result.add(new DeckProgressResponse(
                    deck.getId(),
                    deck.getName(),
                    deck.getLevel(),
                    deck.getDayNumber(),
                    total,
                    learned,
                    reviewing,
                    mastered,
                    percent
            ));
        }

        return result;
    }

    public JlptCountdownResponse getCountdown() {
        LocalDate today = LocalDate.now();
        LocalDate nextExam = LocalDate.of(2026, 12, 6);
        long days = ChronoUnit.DAYS.between(today, nextExam);
        int daysRemaining = (int) Math.max(0, days);

        return new JlptCountdownResponse(
                JlptLevel.N2,
                "2026-12-06",
                daysRemaining
        );
    }

    private int computeStreak(Long userId) {
        List<StudySession> sessions = studySessionRepository.findByUserIdOrderByStartedAtDesc(userId);
        if (sessions.isEmpty()) return 0;

        Set<LocalDate> dates = sessions.stream()
                .filter(s -> s.getStartedAt() != null)
                .map(s -> s.getStartedAt().atZone(ZoneId.systemDefault()).toLocalDate())
                .collect(Collectors.toSet());

        LocalDate checkDate = LocalDate.now();
        int streak = 0;

        if (!dates.contains(checkDate)) {
            checkDate = checkDate.minusDays(1);
        }

        while (dates.contains(checkDate)) {
            streak++;
            checkDate = checkDate.minusDays(1);
        }

        return streak;
    }
}
