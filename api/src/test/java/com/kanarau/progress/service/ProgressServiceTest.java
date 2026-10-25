package com.kanarau.progress.service;

import com.kanarau.common.model.JlptLevel;
import com.kanarau.progress.dto.JlptCountdownResponse;
import com.kanarau.deck.repository.DeckKotobaRepository;
import com.kanarau.deck.repository.DeckRepository;
import com.kanarau.review.repository.UserProgressRepository;
import com.kanarau.study.repository.StudySessionRepository;
import org.junit.jupiter.api.Test;

import java.time.LocalDate;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.mock;

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
}
