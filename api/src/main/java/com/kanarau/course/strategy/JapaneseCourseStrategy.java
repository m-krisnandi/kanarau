package com.kanarau.course.strategy;

import com.kanarau.common.model.JlptLevel;
import com.kanarau.course.dto.CourseCardDto;
import com.kanarau.course.dto.CourseDeckDto;
import com.kanarau.course.dto.CourseLevelDto;
import com.kanarau.course.dto.CourseTrackDto;
import com.kanarau.deck.dto.DeckResponse;
import com.kanarau.deck.service.DeckService;
import com.kanarau.study.dto.QuizCardResponse;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class JapaneseCourseStrategy implements CourseTrackStrategy {

    private final DeckService deckService;

    public JapaneseCourseStrategy(DeckService deckService) {
        this.deckService = deckService;
    }

    @Override
    public String getTrackCode() {
        return "JA";
    }

    @Override
    public String getTargetLanguage() {
        return "ja";
    }

    @Override
    public CourseTrackDto getTrackInfo(String myLang) {
        String title = "my".equalsIgnoreCase(myLang) ? "ဂျပန်ဘာသာစကား" : ("en".equalsIgnoreCase(myLang) ? "Japanese" : "Bahasa Jepang");
        String desc = "my".equalsIgnoreCase(myLang)
                ? "N5 မှ N1 အထိ ဂျပန်ဝေါဟာရ၊ ခန်ဂျီ၊ သဒ္ဒါနှင့် စာမေးပွဲများကို လေ့လာပါ။"
                : ("en".equalsIgnoreCase(myLang)
                ? "Master Japanese vocabulary, kanji, grammar, and JLPT exams from N5 to N1."
                : "Kuasai kosakata, kanji, tata bahasa, dan simulasi JLPT dari N5 hingga N1.");
        return new CourseTrackDto("JA", title, "ja", "🇯🇵", desc);
    }

    @Override
    public List<CourseLevelDto> getLevels(String myLang) {
        return List.of(
                new CourseLevelDto("JA", "N5", "JLPT N5", "my".equalsIgnoreCase(myLang) ? "အခြေခံစတင်သူအဆင့်" : ("en".equalsIgnoreCase(myLang) ? "Beginner Level" : "Tingkat Pemula Dasar"), 1),
                new CourseLevelDto("JA", "N4", "JLPT N4", "my".equalsIgnoreCase(myLang) ? "အခြေခံအဆင့်မြင့်" : ("en".equalsIgnoreCase(myLang) ? "Elementary Level" : "Tingkat Dasar Lanjutan"), 2),
                new CourseLevelDto("JA", "N3", "JLPT N3", "my".equalsIgnoreCase(myLang) ? "အလယ်အလတ်အဆင့်" : ("en".equalsIgnoreCase(myLang) ? "Intermediate Level" : "Tingkat Menengah"), 3),
                new CourseLevelDto("JA", "N2", "JLPT N2", "my".equalsIgnoreCase(myLang) ? "အထက်တန်းအလယ်အလတ်" : ("en".equalsIgnoreCase(myLang) ? "Upper-Intermediate Level" : "Tingkat Menengah Atas"), 4),
                new CourseLevelDto("JA", "N1", "JLPT N1", "my".equalsIgnoreCase(myLang) ? "ကျွမ်းကျင်အဆင့်" : ("en".equalsIgnoreCase(myLang) ? "Advanced Level" : "Tingkat Mahir"), 5)
        );
    }

    @Override
    public List<CourseDeckDto> getDecks(String levelCode, String myLang, Long userId) {
        JlptLevel level = JlptLevel.N2;
        try {
            if (levelCode != null) {
                level = JlptLevel.valueOf(levelCode.trim().toUpperCase());
            }
        } catch (Exception ignored) {}

        List<DeckResponse> deckResponses = deckService.getAllDecks(userId, level);
        List<CourseDeckDto> result = new ArrayList<>();
        for (DeckResponse d : deckResponses) {
            result.add(new CourseDeckDto(
                    d.id(),
                    "JA",
                    level.name(),
                    d.dayNumber(),
                    d.name(),
                    d.name(),
                    d.kotobaCount(),
                    d.progressPercent()
            ));
        }
        return result;
    }

    @Override
    public List<CourseCardDto> getDeckCards(Long deckId, String myLang) {
        List<QuizCardResponse> responses = deckService.generateCardsForDeck(deckId, myLang);
        List<CourseCardDto> cards = new ArrayList<>();
        for (QuizCardResponse r : responses) {
            String target = r.kotoba() != null ? (r.kotoba().kanji() != null && !r.kotoba().kanji().isBlank() ? r.kotoba().kanji() : r.kotoba().hiragana()) : r.question();
            String reading = r.kotoba() != null ? r.kotoba().hiragana() : "";
            String meaning = r.kotoba() != null ? r.kotoba().meaning() : r.correctAnswer();
            String notes = r.kotoba() != null ? r.kotoba().notes() : "";
            String example = r.kotoba() != null ? r.kotoba().exampleSentence() : "";
            String exampleMeaning = r.kotoba() != null ? r.kotoba().exampleSentenceMeaning() : "";

            cards.add(new CourseCardDto(
                    r.kotoba() != null ? r.kotoba().id() : null,
                    target,
                    reading,
                    "VOCABULARY",
                    meaning,
                    notes,
                    example,
                    exampleMeaning,
                    r.choices()
            ));
        }
        return cards;
    }
}
