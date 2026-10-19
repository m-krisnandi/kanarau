package com.kanarau.review.service;

import com.kanarau.auth.repository.UserRepository;
import com.kanarau.kotoba.dto.KotobaResponse;
import com.kanarau.kotoba.entity.Kotoba;
import com.kanarau.kotoba.repository.KotobaRepository;
import com.kanarau.review.dto.ReviewStatsResponse;
import com.kanarau.review.entity.UserProgress;
import com.kanarau.review.repository.UserProgressRepository;
import com.kanarau.study.dto.QuizAnswerDto;
import com.kanarau.study.dto.QuizCardResponse;
import com.kanarau.study.service.StudyService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.*;

@Service
public class ReviewService {

    private final UserProgressRepository userProgressRepository;
    private final KotobaRepository kotobaRepository;
    private final StudyService studyService;
    private final UserRepository userRepository;

    public ReviewService(
            UserProgressRepository userProgressRepository,
            KotobaRepository kotobaRepository,
            StudyService studyService,
            UserRepository userRepository
    ) {
        this.userProgressRepository = userProgressRepository;
        this.kotobaRepository = kotobaRepository;
        this.studyService = studyService;
        this.userRepository = userRepository;
    }

    public ReviewStatsResponse getStats(Long userId) {
        if (userId == null) {
            return new ReviewStatsResponse(0, 0, 0, 0);
        }

        Instant now = Instant.now();
        List<UserProgress> dueList = userProgressRepository.findDueReviews(userId, now);
        long dueCount = dueList.size();

        Instant tomorrow = now.plus(1, ChronoUnit.DAYS);
        List<UserProgress> dueTomorrowList = userProgressRepository.findDueReviews(userId, tomorrow);
        long dueTomorrow = Math.max(0, dueTomorrowList.size() - dueCount);

        return new ReviewStatsResponse(dueCount, dueCount, dueTomorrow, 0);
    }

    public List<QuizCardResponse> getReviewQueue(Long userId) {
        return getReviewQueue(userId, "id");
    }

    public List<QuizCardResponse> getReviewQueue(Long userId, String lang) {
        if (userId == null) {
            return Collections.emptyList();
        }

        Instant now = Instant.now();
        List<UserProgress> dueProgress = userProgressRepository.findDueReviews(userId, now);

        List<Long> kotobaIds = dueProgress.stream().map(UserProgress::getKotobaId).distinct().toList();
        List<Kotoba> kotobas;

        if (kotobaIds.isEmpty()) {
            return Collections.emptyList();
        }
        kotobas = kotobaRepository.findAllById(kotobaIds);

        if (kotobas.isEmpty()) {
            return Collections.emptyList();
        }

        List<QuizCardResponse> cards = new ArrayList<>();
        Random random = new Random();

        List<String> allMeaningsPool = kotobas.stream()
                .map(item -> getMeaningForLang(item, lang))
                .filter(m -> m != null && !m.isBlank())
                .toList();

        for (Kotoba k : kotobas) {
            KotobaResponse kDto = KotobaResponse.from(k, lang);
            String localizedMeaning = getMeaningForLang(k, lang);

            List<String> meaningChoices = generateChoices(
                    localizedMeaning,
                    allMeaningsPool,
                    random,
                    lang
            );

            cards.add(new QuizCardResponse(
                    "review_" + k.getId() + "_km",
                    kDto,
                    "kanji_to_meaning",
                    k.getKanji() != null && !k.getKanji().isBlank() ? k.getKanji() : k.getHiragana(),
                    localizedMeaning,
                    meaningChoices
            ));
        }

        Collections.shuffle(cards);
        return cards;
    }

    @Transactional
    public Map<String, Object> submitReview(Long userId, List<QuizAnswerDto> answers) {
        if (userId == null) {
            return Map.of("xp_gained", 0);
        }

        int xpGained = 0;
        if (answers != null) {
            for (QuizAnswerDto a : answers) {
                studyService.recordSingleAnswer(userId, a);
                if (a.isCorrect()) xpGained += 15;
            }
        }

        final int finalXp = xpGained;
        userRepository.findById(userId).ifPresent(user -> {
            user.addXp(finalXp);
            userRepository.save(user);
        });

        return Map.of("xp_gained", xpGained);
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

    private List<String> generateChoices(String correct, List<String> allPool, Random random, String lang) {
        Set<String> choices = new LinkedHashSet<>();
        choices.add(correct);

        List<String> pool = new ArrayList<>(allPool);
        pool.remove(correct);
        Collections.shuffle(pool, random);

        for (String item : pool) {
            if (item != null && !item.isBlank() && !choices.contains(item)) {
                choices.add(item);
                if (choices.size() >= 4) break;
            }
        }

        String fallbackPrefix = "id".equalsIgnoreCase(lang) ? "Pilihan " : ("my".equalsIgnoreCase(lang) ? "ရွေးချယ်မှု " : "Option ");
        while (choices.size() < 4) {
            choices.add(fallbackPrefix + (choices.size() + 1));
        }

        List<String> result = new ArrayList<>(choices);
        Collections.shuffle(result, random);
        return result;
    }
}
