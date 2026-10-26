package com.kanarau.progress.service;

import com.kanarau.common.model.JlptLevel;
import com.kanarau.progress.dto.JlptCountdownResponse;
import com.kanarau.deck.repository.DeckKotobaRepository;
import com.kanarau.deck.repository.DeckRepository;
import com.kanarau.review.repository.UserProgressRepository;
import com.kanarau.study.repository.StudySessionRepository;
import org.junit.jupiter.api.Test;

import java.time.LocalDate;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class ProgressServiceTest {

    @Test
    void countdownUsesConfiguredExamDateAndLevel() {
        ProgressService service = new ProgressService(
                mock(DeckRepository.class),
                mock(DeckKotobaRepository.class),
                mock(UserProgressRepository.class),
                mock(StudySessionRepository.class),
                "2026-12-06",
                "N2",
                "Asia/Jakarta"
        );

        JlptCountdownResponse response = service.getCountdown();

        assertEquals(LocalDate.of(2026, 12, 6).toString(), response.examDate());
        assertEquals(JlptLevel.N2, response.level());
        assertTrue(response.daysRemaining() >= 0);
    }

    @Test
    void currentStreakIsZeroUntilThereIsActivityToday() {
        var sessions = new com.kanarau.study.entity.StudySession(1L, 1L);
        sessions.setStartedAt(ZonedDateTime.now(ZoneId.of("Asia/Jakarta")).minusDays(1).toInstant());

        var repository = mock(StudySessionRepository.class);
        when(repository.findByUserIdOrderByStartedAtDesc(1L)).thenReturn(List.of(sessions));
        var service = new ProgressService(
                mock(DeckRepository.class),
                mock(DeckKotobaRepository.class),
                mock(UserProgressRepository.class),
                repository,
                "2026-12-06",
                "N2",
                "Asia/Jakarta"
        );

        assertEquals(0, service.computeStreak(1L));
    }
}
