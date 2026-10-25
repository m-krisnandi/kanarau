package com.kanarau.deck.service;

import com.kanarau.common.model.JlptLevel;
import com.kanarau.deck.entity.Deck;
import com.kanarau.deck.entity.DeckKotoba;
import com.kanarau.deck.repository.DeckKotobaRepository;
import com.kanarau.deck.repository.DeckRepository;
import com.kanarau.kotoba.entity.Kotoba;
import com.kanarau.kotoba.repository.KotobaRepository;
import com.kanarau.review.repository.UserProgressRepository;
import com.kanarau.study.dto.QuizCardResponse;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class DeckServiceTest {

    private DeckRepository deckRepository;
    private DeckKotobaRepository deckKotobaRepository;
    private KotobaRepository kotobaRepository;
    private UserProgressRepository userProgressRepository;
    private DeckService deckService;

    @BeforeEach
    void setUp() {
        deckRepository = mock(DeckRepository.class);
        deckKotobaRepository = mock(DeckKotobaRepository.class);
        kotobaRepository = mock(KotobaRepository.class);
        userProgressRepository = mock(UserProgressRepository.class);

        deckService = new DeckService(
                deckRepository,
                deckKotobaRepository,
                kotobaRepository,
                userProgressRepository
        );
    }

    @Test
    @DisplayName("Kana-only words without kanji (like あちらこちら) must NOT produce kanji_to_hiragana card with identical question and answer")
    void testKanaOnlyWordDoesNotProduceIdenticalQuestionAndAnswer() {
        Long deckId = 1L;
        Deck deck = new Deck(deckId, "DAY 1 N2", JlptLevel.N2, 1, 2);

        // Word 1: あちらこちら (Kana-only, no kanji characters)
        Kotoba k1 = new Kotoba(4532L, "あちらこちら", "あちらこちら", "di sana-sini", "here and there", "ဒီမှာရော", JlptLevel.N2);
        // Word 2: アイデア (Katakana, no kanji characters)
        Kotoba k2 = new Kotoba(4512L, "アイデア", "アイデア", "ide", "idea", "စိတ်ကူး", JlptLevel.N2);
        // Word 3: 約束 (Contains kanji)
        Kotoba k3 = new Kotoba(4513L, "約束", "やくそく", "janji", "promise", "ကတိ", JlptLevel.N2);

        when(deckRepository.findById(deckId)).thenReturn(Optional.of(deck));
        when(deckKotobaRepository.findByDeckIdOrderBySortOrder(deckId)).thenReturn(List.of(
                new DeckKotoba(deckId, 4532L, 1),
                new DeckKotoba(deckId, 4512L, 2),
                new DeckKotoba(deckId, 4513L, 3)
        ));
        when(kotobaRepository.findAllById(List.of(4532L, 4512L, 4513L))).thenReturn(List.of(k1, k2, k3));

        List<QuizCardResponse> cards = deckService.generateCardsForDeck(deckId, "id");

        assertFalse(cards.isEmpty());

        for (QuizCardResponse card : cards) {
            // Absolute requirement: Question and Correct Answer must NEVER be identical
            assertNotEquals(card.question().trim().toLowerCase(), card.correctAnswer().trim().toLowerCase(),
                    "Question and answer cannot be identical for card: " + card.id());

            // If card direction is kanji_to_hiragana, question MUST contain at least one Kanji character
            if ("kanji_to_hiragana".equals(card.direction())) {
                boolean containsKanji = card.question().codePoints().anyMatch(cp ->
                        Character.UnicodeScript.of(cp) == Character.UnicodeScript.HAN
                );
                assertTrue(containsKanji, "kanji_to_hiragana card question must contain Kanji: " + card.question());
            }

            // Distractor choices must not be equal to question
            for (String choice : card.choices()) {
                if (!choice.equalsIgnoreCase(card.correctAnswer())) {
                    assertNotEquals(choice.trim().toLowerCase(), card.question().trim().toLowerCase(),
                            "Distractor choice must not be identical to question in card: " + card.id());
                }
            }
        }

        // Verify that card_4532_kh (あちらこちら -> あちらこちら) does NOT exist
        boolean hasAchiraKochiraKh = cards.stream().anyMatch(c -> c.id().equals("card_4532_kh"));
        assertFalse(hasAchiraKochiraKh, "card_4532_kh should not be generated for kana-only kotoba");

        // Verify that card_4513_kh (約束 -> やくそく) DOES exist
        boolean hasYakusokuKh = cards.stream().anyMatch(c -> c.id().equals("card_4513_kh"));
        assertTrue(hasYakusokuKh, "card_4513_kh should be generated for kanji kotoba");
    }
}
