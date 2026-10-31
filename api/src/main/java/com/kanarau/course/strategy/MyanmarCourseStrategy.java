package com.kanarau.course.strategy;

import com.kanarau.course.dto.CourseCardDto;
import com.kanarau.course.dto.CourseDeckDto;
import com.kanarau.course.dto.CourseLevelDto;
import com.kanarau.course.dto.CourseTrackDto;
import com.kanarau.course.entity.CourseDeck;
import com.kanarau.course.entity.CourseItem;
import com.kanarau.course.entity.CourseLevel;
import com.kanarau.course.entity.CourseTrack;
import com.kanarau.course.repository.CourseDeckRepository;
import com.kanarau.course.repository.CourseItemRepository;
import com.kanarau.course.repository.CourseLevelRepository;
import com.kanarau.course.repository.CourseTrackRepository;
import org.springframework.stereotype.Component;

import java.util.*;

import com.kanarau.course.entity.CourseDeckProgress;
import com.kanarau.course.repository.CourseDeckProgressRepository;

@Component
public class MyanmarCourseStrategy implements CourseTrackStrategy {

    private final CourseTrackRepository trackRepository;
    private final CourseLevelRepository levelRepository;
    private final CourseDeckRepository deckRepository;
    private final CourseItemRepository itemRepository;
    private final CourseDeckProgressRepository courseDeckProgressRepository;

    public MyanmarCourseStrategy(CourseTrackRepository trackRepository,
                                 CourseLevelRepository levelRepository,
                                 CourseDeckRepository deckRepository,
                                 CourseItemRepository itemRepository,
                                 CourseDeckProgressRepository courseDeckProgressRepository) {
        this.trackRepository = trackRepository;
        this.levelRepository = levelRepository;
        this.deckRepository = deckRepository;
        this.itemRepository = itemRepository;
        this.courseDeckProgressRepository = courseDeckProgressRepository;
    }

    @Override
    public String getTrackCode() {
        return "MY";
    }

    @Override
    public String getTargetLanguage() {
        return "my";
    }

    @Override
    public CourseTrackDto getTrackInfo(String myLang) {
        Optional<CourseTrack> track = trackRepository.findById("MY");
        if (track.isPresent()) {
            return CourseTrackDto.from(track.get(), myLang);
        }
        String title = "id".equalsIgnoreCase(myLang) ? "Bahasa Myanmar" : ("en".equalsIgnoreCase(myLang) ? "Burmese (Myanmar)" : "မြန်မာဘာသာစကား");
        String desc = "id".equalsIgnoreCase(myLang)
                ? "Kuasai aksara Burma 33 konsonan, vokal, sistem nada, hingga percakapan dan ujian MLT."
                : ("en".equalsIgnoreCase(myLang)
                ? "Master 33 Burmese consonants, vowels, tone system, daily phrases, and MLT proficiency."
                : "အခြေခံဗျည်း၊ သရ၊ အသံထွက်မှ နေ့စဉ်သုံးစကားနှင့် MLT စာမေးပွဲအထိ လေ့လာပါ။");
        return new CourseTrackDto("MY", title, "my", "🇲🇲", desc);
    }

    @Override
    public List<CourseLevelDto> getLevels(String myLang) {
        List<CourseLevel> levels = levelRepository.findByIdTrackCodeOrderBySortOrderAsc("MY");
        if (!levels.isEmpty()) {
            List<CourseLevelDto> dtoList = new ArrayList<>();
            for (CourseLevel l : levels) {
                dtoList.add(CourseLevelDto.from(l, myLang));
            }
            return dtoList;
        }

        return List.of(
                new CourseLevelDto("MY", "FOUNDATION", "Fondasi Huruf", "id".equalsIgnoreCase(myLang) ? "33 Konsonan Akshara & Vokal Dasar" : ("my".equalsIgnoreCase(myLang) ? "အခြေခံဗျည်း ၃၃ လုံးနှင့် သရများ" : "33 Burmese Consonants & Core Vowels"), 1),
                new CourseLevelDto("MY", "MLT-1", "MLT 1 (Dasar)", "id".equalsIgnoreCase(myLang) ? "Aturan Nada, Medial Ya-Pin/Wa-Hswe & Kata Esensial" : ("my".equalsIgnoreCase(myLang) ? "အသံထွက်စည်းမျဉ်းများနှင့် နေ့စဉ်သုံးစကားလုံးများ" : "Tone Rules, Medials & Everyday Words"), 2),
                new CourseLevelDto("MY", "MLT-2", "MLT 2 (Menengah)", "id".equalsIgnoreCase(myLang) ? "Pola Kalimat SOV, Partikel Penghubung & Situasi Nyata" : ("my".equalsIgnoreCase(myLang) ? "ဝါကျတည်ဆောက်ပုံနှင့် လက်တွေ့စကားပြော" : "SOV Sentence Pattern, Particles & Dialogues"), 3),
                new CourseLevelDto("MY", "MLT-3", "MLT 3 (Lanjutan)", "id".equalsIgnoreCase(myLang) ? "Teks Bacaan Menengah & Percakapan Sosial" : ("my".equalsIgnoreCase(myLang) ? "စာဖတ်စွမ်းရည်နှင့် လူမှုဆက်ဆံရေး" : "Reading Comprehension & Social Interaction"), 4),
                new CourseLevelDto("MY", "MLT-4", "MLT 4 (Mahir)", "id".equalsIgnoreCase(myLang) ? "Bahasa Tulis Baku, Formal & Sastra Myanmar" : ("my".equalsIgnoreCase(myLang) ? "အဆင့်မြင့် စာပေဘာသာစကားနှင့် ရေးသားချက်များ" : "Literary Burmese & Advanced Proficiency"), 5)
        );
    }

    @Override
    public List<CourseDeckDto> getDecks(String levelCode, String myLang, Long userId) {
        String level = (levelCode != null && !levelCode.isBlank()) ? levelCode.trim() : "FOUNDATION";
        List<CourseDeck> decks = deckRepository.findByTrackCodeAndLevelCodeOrderByDayNumberAsc("MY", level);

        Map<Long, Integer> progressMap = new HashMap<>();
        if (userId != null) {
            List<CourseDeckProgress> userProg = courseDeckProgressRepository.findByUserIdAndTrackCode(userId, "MY");
            for (CourseDeckProgress p : userProg) {
                progressMap.put(p.getDeckId(), p.getProgressPercent());
            }
        }

        List<CourseDeckDto> list = new ArrayList<>();
        for (CourseDeck d : decks) {
            int pct = progressMap.getOrDefault(d.getId(), 0);
            list.add(CourseDeckDto.from(d, myLang, pct));
        }
        return list;
    }

    @Override
    public List<CourseCardDto> getDeckCards(Long deckId, String myLang) {
        List<CourseItem> items = itemRepository.findByDeckIdOrderBySortOrderAsc(deckId);
        List<CourseItem> allTrackItems = itemRepository.findByTrackCodeAndLevelCodeOrderBySortOrderAsc("MY", "FOUNDATION");

        List<CourseCardDto> cards = new ArrayList<>();
        for (CourseItem item : items) {
            String meaning = item.getLocalizedMeaning(myLang);
            List<String> choices = generateChoices(meaning, item.getItemType(), allTrackItems, myLang);

            cards.add(new CourseCardDto(
                    item.getId(),
                    item.getTargetText(),
                    item.getRomanization(),
                    item.getItemType(),
                    meaning,
                    item.getLocalizedNotes(myLang),
                    item.getExampleTarget(),
                    item.getLocalizedExample(myLang),
                    choices
            ));
        }
        return cards;
    }

    private List<String> generateChoices(String correctAnswer, String itemType, List<CourseItem> pool, String myLang) {
        Set<String> options = new LinkedHashSet<>();
        options.add(correctAnswer);

        // 1. Prioritize distractors with the exact same item_type (e.g. ALPHABET vs ALPHABET)
        if (itemType != null) {
            List<CourseItem> sameTypePool = pool.stream()
                    .filter(c -> itemType.equalsIgnoreCase(c.getItemType()))
                    .toList();
            List<CourseItem> shuffledSame = new ArrayList<>(sameTypePool);
            Collections.shuffle(shuffledSame);

            for (CourseItem cand : shuffledSame) {
                String candMeaning = cand.getLocalizedMeaning(myLang);
                if (candMeaning != null && !candMeaning.equalsIgnoreCase(correctAnswer)) {
                    options.add(candMeaning);
                    if (options.size() >= 4) break;
                }
            }
        }

        // 2. Fallback if not enough candidates of same type
        if (options.size() < 4) {
            List<CourseItem> shuffledPool = new ArrayList<>(pool);
            Collections.shuffle(shuffledPool);

            for (CourseItem cand : shuffledPool) {
                String candMeaning = cand.getLocalizedMeaning(myLang);
                if (candMeaning != null && !candMeaning.equalsIgnoreCase(correctAnswer)) {
                    options.add(candMeaning);
                    if (options.size() >= 4) break;
                }
            }
        }

        List<String> result = new ArrayList<>(options);
        Collections.shuffle(result);
        return result;
    }
}
