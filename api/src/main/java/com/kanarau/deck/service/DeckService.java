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
                    long distinctLearned = userProgressRepository.findByUserIdAndKotobaIdIn(userId, kotobaIds)
                            .stream().map(com.kanarau.review.entity.UserProgress::getKotobaId).distinct().count();
                    progressPercent = (int) Math.min(100, Math.round(((double) distinctLearned / kotobaIds.size()) * 100));
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
                long distinctLearned = userProgressRepository.findByUserIdAndKotobaIdIn(userId, kotobaIds)
                        .stream().map(com.kanarau.review.entity.UserProgress::getKotobaId).distinct().count();
                progressPercent = (int) Math.min(100, Math.round(((double) distinctLearned / kotobaIds.size()) * 100));
            }
        }
        return DeckResponse.from(deck, progressPercent);
    }

    public List<QuizCardResponse> generateCardsForDeck(Long deckId) {
        return generateCardsForDeck(deckId, "id");
    }

    public List<QuizCardResponse> generateCardsForDeck(Long deckId, String lang) {
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

        List<String> allMeaningsPool = kotobas.stream()
                .map(item -> getMeaningForLang(item, lang))
                .filter(m -> m != null && !m.isBlank())
                .map(String::trim)
                .toList();

        List<String> allHiraganasPool = kotobas.stream()
                .map(Kotoba::getHiragana)
                .filter(Objects::nonNull)
                .map(String::trim)
                .filter(s -> !s.isBlank())
                .toList();

        List<String> allJapaneseWordsPool = kotobas.stream()
                .map(item -> (item.getKanji() != null && !item.getKanji().isBlank())
                        ? item.getKanji().trim()
                        : (item.getHiragana() != null ? item.getHiragana().trim() : ""))
                .filter(s -> !s.isBlank())
                .toList();

        for (Kotoba k : kotobas) {
            KotobaResponse kDto = KotobaResponse.from(k, lang);
            String localizedMeaning = getMeaningForLang(k, lang);
            String kanji = k.getKanji() != null ? k.getKanji().trim() : "";
            String hiragana = k.getHiragana() != null ? k.getHiragana().trim() : "";
            String primaryJapanese = !kanji.isBlank() ? kanji : hiragana;
            String cleanMeaning = localizedMeaning != null ? localizedMeaning.trim() : "";

            // 1. Kanji / Japanese to Meaning
            if (!primaryJapanese.isBlank() && !cleanMeaning.isBlank()
                    && !primaryJapanese.equalsIgnoreCase(cleanMeaning)) {
                List<String> meaningChoices = generateChoices(
                        cleanMeaning,
                        primaryJapanese,
                        allMeaningsPool,
                        random,
                        lang
                );
                cards.add(new QuizCardResponse(
                        "card_" + k.getId() + "_km",
                        kDto,
                        "kanji_to_meaning",
                        primaryJapanese,
                        cleanMeaning,
                        meaningChoices
                ));
            }

            // 2. Kanji to Hiragana (Reading Quiz)
            // MUST only be generated if the word actually contains Kanji characters and the reading is different from the kanji text
            if (hasKanji(kanji) && !hiragana.isBlank() && !kanji.equalsIgnoreCase(hiragana)) {
                List<String> readingChoices = generateChoices(
                        hiragana,
                        kanji,
                        allHiraganasPool,
                        random,
                        lang
                );
                cards.add(new QuizCardResponse(
                        "card_" + k.getId() + "_kh",
                        kDto,
                        "kanji_to_hiragana",
                        kanji,
                        hiragana,
                        readingChoices
                ));
            }

            // 3. Meaning to Kanji / Japanese word
            if (!cleanMeaning.isBlank() && !primaryJapanese.isBlank()
                    && !cleanMeaning.equalsIgnoreCase(primaryJapanese)) {
                List<String> kanjiChoices = generateChoices(
                        primaryJapanese,
                        cleanMeaning,
                        allJapaneseWordsPool,
                        random,
                        lang
                );
                cards.add(new QuizCardResponse(
                        "card_" + k.getId() + "_mk",
                        kDto,
                        "meaning_to_kanji",
                        cleanMeaning,
                        primaryJapanese,
                        kanjiChoices
                ));
            }
        }

        // Post-generation invariant: Remove any cards where question equals answer or either is blank
        cards.removeIf(card -> card.question() == null || card.correctAnswer() == null
                || card.question().trim().isBlank() || card.correctAnswer().trim().isBlank()
                || card.question().trim().equalsIgnoreCase(card.correctAnswer().trim()));

        Collections.shuffle(cards, new Random(System.currentTimeMillis()));
        return cards;
    }

    private boolean hasKanji(String text) {
        if (text == null || text.isBlank()) return false;
        return text.codePoints().anyMatch(cp -> Character.UnicodeScript.of(cp) == Character.UnicodeScript.HAN);
    }

    private String getMeaningForLang(Kotoba k, String lang) {
        if (k == null) return "";
        if ("en".equalsIgnoreCase(lang)) {
            if (k.getMeaningEn() != null && !k.getMeaningEn().isBlank()) {
                return k.getMeaningEn();
            }
        } else if ("my".equalsIgnoreCase(lang)) {
            if (k.getMeaningMy() != null && !k.getMeaningMy().isBlank()) {
                return k.getMeaningMy();
            }
            if (k.getMeaningEn() != null && !k.getMeaningEn().isBlank()) {
                return k.getMeaningEn();
            }
        }
        return k.getMeaningId() != null ? k.getMeaningId() : "";
    }

    private List<String> generateChoices(String correct, String questionToExclude, List<String> allPool, Random random, String lang) {
        Set<String> choices = new LinkedHashSet<>();
        if (correct != null && !correct.isBlank()) {
            choices.add(correct.trim());
        }

        List<String> pool = new ArrayList<>(allPool);
        pool.removeIf(item -> item == null || item.isBlank()
                || item.trim().equalsIgnoreCase(correct.trim())
                || (questionToExclude != null && item.trim().equalsIgnoreCase(questionToExclude.trim())));
        Collections.shuffle(pool, random);

        for (String item : pool) {
            String trimmed = item.trim();
            if (!choices.contains(trimmed)) {
                choices.add(trimmed);
                if (choices.size() >= 4) break;
            }
        }

        if (choices.size() < 4) {
            List<String> fallbacks;
            if ("en".equalsIgnoreCase(lang)) {
                fallbacks = List.of("None", "Other", "Unknown", "Not listed");
            } else if ("my".equalsIgnoreCase(lang)) {
                fallbacks = List.of("မရှိပါ", "အခြား", "မသိပါ", "စာရင်းမပါ");
            } else {
                fallbacks = List.of("tidak ada", "lainnya", "belum tahu", "tidak tercantum");
            }
            for (String f : fallbacks) {
                if (!choices.contains(f) && (questionToExclude == null || !f.equalsIgnoreCase(questionToExclude.trim()))) {
                    choices.add(f);
                    if (choices.size() >= 4) break;
                }
            }
        }

        List<String> result = new ArrayList<>(choices);
        Collections.shuffle(result, random);
        return result;
    }
}
