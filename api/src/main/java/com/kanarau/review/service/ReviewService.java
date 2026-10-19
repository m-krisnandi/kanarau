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

        for (Kotoba k : kotobas) {
            KotobaResponse kDto = KotobaResponse.from(k);

            List<String> meaningChoices = generateChoices(
                    k.getMeaningId(),
                    kotobas.stream().map(Kotoba::getMeaningId).toList(),
                    random
            );

            cards.add(new QuizCardResponse(
                    "review_" + k.getId() + "_km",
                    kDto,
                    "kanji_to_meaning",
                    k.getKanji() != null && !k.getKanji().isBlank() ? k.getKanji() : k.getHiragana(),
                    k.getMeaningId(),
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

    private List<String> generateChoices(String correct, List<String> allPool, Random random) {
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

        while (choices.size() < 4) {
            choices.add("Pilihan " + (choices.size() + 1));
        }

        List<String> result = new ArrayList<>(choices);
        Collections.shuffle(result, random);
        return result;
    }
}
