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
import org.springframework.beans.factory.annotation.Value;

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
    private final LocalDate examDate;
    private final JlptLevel examLevel;
    private final ZoneId studyZone;

    public ProgressService(
            DeckRepository deckRepository,
            DeckKotobaRepository deckKotobaRepository,
            UserProgressRepository userProgressRepository,
            StudySessionRepository studySessionRepository,
            @Value("${kanarau.jlpt.exam-date:2026-12-06}") String examDate,
            @Value("${kanarau.jlpt.exam-level:N2}") String examLevel,
            @Value("${kanarau.jlpt.timezone:Asia/Jakarta}") String timezone
    ) {
        this.deckRepository = deckRepository;
        this.deckKotobaRepository = deckKotobaRepository;
        this.userProgressRepository = userProgressRepository;
        this.studySessionRepository = studySessionRepository;
        this.examDate = LocalDate.parse(examDate);
        this.examLevel = JlptLevel.valueOf(examLevel.toUpperCase(Locale.ROOT));
        this.studyZone = ZoneId.of(timezone);
    }

    public OverallStatsResponse getOverallStats(Long userId) {
        if (userId == null) {
            return new OverallStatsResponse(0, 0, 0, 0, 0, 0, 0);
        }

        int streak = computeStreak(userId);
        long distinctKotobas = userProgressRepository.countDistinctKotobaByUser(userId);
        long masteredCount = userProgressRepository.countMasteredByUser(userId);
        long reviewCount = userProgressRepository.countReviewByUser(userId);
        long learningCount = userProgressRepository.countLearningByUser(userId);
        long totalCards = distinctKotobas > 0 ? distinctKotobas : (masteredCount + reviewCount + learningCount);

        List<StudySession> sessions = studySessionRepository.findByUserIdOrderByStartedAtDesc(userId);

        long totalStudied = studySessionRepository.totalCardsStudiedByUser(userId);
        long totalCorrect = studySessionRepository.totalCardsCorrectByUser(userId);
        int accuracy = totalStudied > 0 ? (int) Math.round(((double) totalCorrect / totalStudied) * 100) : 0;

        int totalMinutes = 0;
        for (StudySession s : sessions) {
            if (s.getStartedAt() != null && s.getFinishedAt() != null) {
                long diffMs = Duration.between(s.getStartedAt(), s.getFinishedAt()).toMillis();
                totalMinutes += Math.max(1, (int) Math.ceil(diffMs / 60000.0));
            } else {
                totalMinutes += Math.max(1, s.getCardsStudied() * 20 / 60);
            }
        }

        int totalStudyDays = (int) sessions.stream()
                .filter(s -> activityInstant(s) != null)
                .map(s -> activityInstant(s).atZone(studyZone).toLocalDate())
                .distinct()
                .count();

        int longestStreak = computeLongestStreak(sessions);

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

        Instant start = ym.atDay(1).atStartOfDay(studyZone).toInstant();
        Instant end = ym.plusMonths(1).atDay(1).atStartOfDay(studyZone).toInstant();

        List<StudySession> sessions = (userId != null)
                ? studySessionRepository.findByUserIdAndDateRange(userId, start, end)
                : Collections.emptyList();

        Map<Integer, List<StudySession>> sessionsByDay = sessions.stream()
                .filter(s -> activityInstant(s) != null)
                .collect(Collectors.groupingBy(s -> activityInstant(s).atZone(studyZone).getDayOfMonth()));

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
                        long diffMs = Duration.between(s.getStartedAt(), s.getFinishedAt()).toMillis();
                        dayMinutes += Math.max(1, (int) Math.ceil(diffMs / 60000.0));
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

            int total = (deck.getKotobaCount() != null && deck.getKotobaCount() > 0)
                    ? deck.getKotobaCount()
                    : kotobaIds.size();
            int learned = 0;
            int reviewing = 0;
            int mastered = 0;
            int percent = 0;

            if (userId != null && !kotobaIds.isEmpty()) {
                List<UserProgress> upList = userProgressRepository.findByUserIdAndKotobaIds(userId, kotobaIds);
                Map<Long, ProgressStatus> bestStatusByKotoba = new HashMap<>();
                for (UserProgress up : upList) {
                    ProgressStatus current = bestStatusByKotoba.get(up.getKotobaId());
                    if (current == null || up.getStatus().ordinal() > current.ordinal()) {
                        bestStatusByKotoba.put(up.getKotobaId(), up.getStatus());
                    }
                }

                for (ProgressStatus st : bestStatusByKotoba.values()) {
                    if (st == ProgressStatus.LEARNING) learned++;
                    else if (st == ProgressStatus.REVIEW) reviewing++;
                    else if (st == ProgressStatus.MASTERED) mastered++;
                }

                long distinctLearnedInDeck = bestStatusByKotoba.size();
                percent = total > 0 ? (int) Math.min(100, Math.round(((double) distinctLearnedInDeck / total) * 100)) : 0;
            }

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
        LocalDate today = LocalDate.now(studyZone);
        long days = ChronoUnit.DAYS.between(today, examDate);
        int daysRemaining = (int) Math.max(0, days);

        return new JlptCountdownResponse(
                examLevel,
                examDate.toString(),
                daysRemaining
        );
    }

    public int computeStreak(Long userId) {
        List<StudySession> sessions = studySessionRepository.findByUserIdOrderByStartedAtDesc(userId);
        if (sessions.isEmpty()) return 0;

        Set<LocalDate> dates = sessions.stream()
                .filter(s -> activityInstant(s) != null)
                .map(s -> activityInstant(s).atZone(studyZone).toLocalDate())
                .collect(Collectors.toSet());

        LocalDate checkDate = LocalDate.now(studyZone);
        int streak = 0;

        if (!dates.contains(checkDate)) return 0;

        while (dates.contains(checkDate)) {
            streak++;
            checkDate = checkDate.minusDays(1);
        }

        return streak;
    }

    private int computeLongestStreak(List<StudySession> sessions) {
        List<LocalDate> dates = sessions.stream()
                .filter(s -> activityInstant(s) != null)
                .map(s -> activityInstant(s).atZone(studyZone).toLocalDate())
                .distinct()
                .sorted()
                .toList();
        if (dates.isEmpty()) return 0;

        int longest = 1;
        int current = 1;
        for (int i = 1; i < dates.size(); i++) {
            if (dates.get(i).equals(dates.get(i - 1).plusDays(1))) {
                current++;
                longest = Math.max(longest, current);
            } else {
                current = 1;
            }
        }
        return longest;
    }

    private Instant activityInstant(StudySession session) {
        return session.getFinishedAt() != null ? session.getFinishedAt() : session.getStartedAt();
    }
}
