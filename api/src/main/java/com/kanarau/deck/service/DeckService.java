package com.kanarau.deck.service;

import com.kanarau.common.exception.ApiException;
import com.kanarau.common.model.JlptLevel;
import com.kanarau.deck.dto.DeckResponse;
import com.kanarau.deck.entity.Deck;
import com.kanarau.deck.entity.DeckKotoba;
import com.kanarau.deck.repository.DeckKotobaRepository;
import com.kanarau.deck.repository.DeckRepository;
import com.kanarau.kotoba.dto.KotobaResponse;
import com.kanarau.kotoba.entity.Kotoba;
import com.kanarau.kotoba.repository.KotobaRepository;
import com.kanarau.review.repository.UserProgressRepository;
import com.kanarau.study.dto.QuizCardResponse;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class DeckService {

    private final DeckRepository deckRepository;
    private final DeckKotobaRepository deckKotobaRepository;
    private final KotobaRepository kotobaRepository;
    private final UserProgressRepository userProgressRepository;

    public DeckService(
            DeckRepository deckRepository,
            DeckKotobaRepository deckKotobaRepository,
            KotobaRepository kotobaRepository,
            UserProgressRepository userProgressRepository
    ) {
        this.deckRepository = deckRepository;
        this.deckKotobaRepository = deckKotobaRepository;
        this.kotobaRepository = kotobaRepository;
        this.userProgressRepository = userProgressRepository;
    }

    public List<DeckResponse> getAllDecks(Long userId, JlptLevel level) {
        List<Deck> decks = (level != null)
                ? deckRepository.findByLevelOrderByDayNumber(level)
                : deckRepository.findAllByOrderByLevelAscDayNumberAsc();

        return decks.stream().map(deck -> {
            int progressPercent = 0;
            if (userId != null && deck.getKotobaCount() > 0) {
                List<Long> kotobaIds = deckKotobaRepository.findByDeckIdOrderBySortOrder(deck.getId())
                        .stream().map(DeckKotoba::getKotobaId).toList();
                if (!kotobaIds.isEmpty()) {
                    int learnedCount = userProgressRepository.findByUserIdAndKotobaIdIn(userId, kotobaIds).size();
                    progressPercent = (int) Math.min(100, Math.round(((double) learnedCount / (kotobaIds.size() * 3)) * 100));
                }
            }
            return DeckResponse.from(deck, progressPercent);
        }).toList();
    }

    public DeckResponse getDeckById(Long deckId, Long userId) {
        Deck deck = deckRepository.findById(deckId)
                .orElseThrow(() -> new ApiException(HttpStatus.NOT_FOUND, "Deck tidak ditemukan"));
        int progressPercent = 0;
        if (userId != null && deck.getKotobaCount() > 0) {
            List<Long> kotobaIds = deckKotobaRepository.findByDeckIdOrderBySortOrder(deck.getId())
                    .stream().map(DeckKotoba::getKotobaId).toList();
            if (!kotobaIds.isEmpty()) {
                int learnedCount = userProgressRepository.findByUserIdAndKotobaIdIn(userId, kotobaIds).size();
                progressPercent = (int) Math.min(100, Math.round(((double) learnedCount / (kotobaIds.size() * 3)) * 100));
            }
        }
        return DeckResponse.from(deck, progressPercent);
    }

    public List<QuizCardResponse> generateCardsForDeck(Long deckId) {
        Deck deck = deckRepository.findById(deckId)
                .orElseThrow(() -> new ApiException(HttpStatus.NOT_FOUND, "Deck tidak ditemukan"));

        List<DeckKotoba> deckKotobas = deckKotobaRepository.findByDeckIdOrderBySortOrder(deckId);
        List<Long> kotobaIds = deckKotobas.stream().map(DeckKotoba::getKotobaId).toList();
        List<Kotoba> kotobas = kotobaRepository.findAllById(kotobaIds);

        if (kotobas.isEmpty()) {
            return Collections.emptyList();
        }

        List<QuizCardResponse> cards = new ArrayList<>();
        Random random = new Random(deckId);

        for (Kotoba k : kotobas) {
            KotobaResponse kDto = KotobaResponse.from(k);

            // 1. Kanji to Meaning
            List<String> meaningChoices = generateChoices(
                    k.getMeaningId(),
                    kotobas.stream().map(Kotoba::getMeaningId).toList(),
                    random
            );
            cards.add(new QuizCardResponse(
                    "card_" + k.getId() + "_km",
                    kDto,
                    "kanji_to_meaning",
                    k.getKanji() != null && !k.getKanji().isBlank() ? k.getKanji() : k.getHiragana(),
                    k.getMeaningId(),
                    meaningChoices
            ));

            // 2. Kanji to Hiragana
            if (k.getKanji() != null && !k.getKanji().isBlank()) {
                List<String> readingChoices = generateChoices(
                        k.getHiragana(),
                        kotobas.stream().map(Kotoba::getHiragana).toList(),
                        random
                );
                cards.add(new QuizCardResponse(
                        "card_" + k.getId() + "_kh",
                        kDto,
                        "kanji_to_hiragana",
                        k.getKanji(),
                        k.getHiragana(),
                        readingChoices
                ));
            }

            // 3. Meaning to Kanji
            String correctTarget = k.getKanji() != null && !k.getKanji().isBlank() ? k.getKanji() : k.getHiragana();
            List<String> kanjiChoices = generateChoices(
                    correctTarget,
                    kotobas.stream().map(item -> item.getKanji() != null && !item.getKanji().isBlank() ? item.getKanji() : item.getHiragana()).toList(),
                    random
            );
            cards.add(new QuizCardResponse(
                    "card_" + k.getId() + "_mk",
                    kDto,
                    "meaning_to_kanji",
                    k.getMeaningId(),
                    correctTarget,
                    kanjiChoices
            ));
        }

        Collections.shuffle(cards, new Random(System.currentTimeMillis()));
        return cards;
    }

    private List<String> generateChoices(String correct, List<String> allPool, Random random) {
        Set<String> choices = new LinkedHashSet<>();
        choices.add(correct);

        List<String> pool = new ArrayList<>(allPool);
        pool.remove(correct);
        Collections.shuffle(pool, random);

        for (String item : pool) {
            if (item != null && !item.isBlank() && !choices.contains(item)) {
                choices.add(item);
                if (choices.size() == 4) break;
            }
        }

        if (choices.size() < 4) {
            List<String> fallbacks = List.of("tidak ada", "lainnya", "belum tahu", "tidak tercantum");
            for (String f : fallbacks) {
                if (choices.size() < 4) choices.add(f);
            }
        }

        List<String> result = new ArrayList<>(choices);
        Collections.shuffle(result);
        return result;
    }
}
