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
public class IndonesianCourseStrategy implements CourseTrackStrategy {

    private final CourseTrackRepository trackRepository;
    private final CourseLevelRepository levelRepository;
    private final CourseDeckRepository deckRepository;
    private final CourseItemRepository itemRepository;
    private final CourseDeckProgressRepository courseDeckProgressRepository;

    public IndonesianCourseStrategy(CourseTrackRepository trackRepository,
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
        return "ID";
    }

    @Override
    public String getTargetLanguage() {
        return "id";
    }

    @Override
    public CourseTrackDto getTrackInfo(String myLang) {
        Optional<CourseTrack> track = trackRepository.findById("ID");
        if (track.isPresent()) {
            return CourseTrackDto.from(track.get(), myLang);
        }
        String title = "my".equalsIgnoreCase(myLang) ? "အင်ဒိုနီးရှားဘာသာစကား" : ("en".equalsIgnoreCase(myLang) ? "Indonesian" : "Bahasa Indonesia");
        String desc = "my".equalsIgnoreCase(myLang)
                ? "အခြေခံနှုတ်ဆက်စကားများမှ အဆင့်မြင့် BIPA နှင့် UKBI စာမေးပွဲအထိ အင်ဒိုနီးရှားစကားကို လေ့လာပါ။"
                : ("en".equalsIgnoreCase(myLang)
                ? "Learn Indonesian from daily essentials to advanced BIPA and UKBI proficiency."
                : "Pelajari Bahasa Indonesia dari percakapan dasar hingga standar kemahiran BIPA & UKBI.");
        return new CourseTrackDto("ID", title, "id", "🇮🇩", desc);
    }

    @Override
    public List<CourseLevelDto> getLevels(String myLang) {
        List<CourseLevel> levels = levelRepository.findByIdTrackCodeOrderBySortOrderAsc("ID");
        if (!levels.isEmpty()) {
            List<CourseLevelDto> dtoList = new ArrayList<>();
            for (CourseLevel l : levels) {
                dtoList.add(CourseLevelDto.from(l, myLang));
            }
            return dtoList;
        }

        return List.of(
                new CourseLevelDto("ID", "BIPA-1", "BIPA 1 (A1)", "my".equalsIgnoreCase(myLang) ? "အခြေခံ- နှုတ်ဆက်ခြင်း၊ ဂဏန်းများနှင့် အခြေခံစကားလုံးများ" : "Pemula: Salam, Angka, Kosakata Esensial & Pelafalan", 1),
                new CourseLevelDto("ID", "BIPA-2", "BIPA 2 (A2)", "my".equalsIgnoreCase(myLang) ? "အခြေခံအဆင့်- နေ့စဉ်ဘဝ၊ လမ်းညွှန်ချက်များနှင့် ဈေးဝယ်ခြင်း" : "Dasar: Kehidupan Sehari-hari, Arah & Belanja", 2),
                new CourseLevelDto("ID", "BIPA-3", "BIPA 3 (B1)", "my".equalsIgnoreCase(myLang) ? "အလယ်အလတ်- ဝါကျတည်ဆောက်ပုံနှင့် ရှေ့ဆက်စကားလုံးများ" : "Menengah: Pola Kalimat & Imbuhan me-, ber-, di-", 3),
                new CourseLevelDto("ID", "BIPA-4", "BIPA 4 (B2)", "my".equalsIgnoreCase(myLang) ? "အထက်တန်း- လုပ်ငန်းခွင်နှင့် လူမှုဆက်ဆံရေးစကားပြော" : "Menengah Atas: Percakapan Kerja, Sosial & Budaya", 4),
                new CourseLevelDto("ID", "BIPA-5", "BIPA 5 (C1)", "my".equalsIgnoreCase(myLang) ? "ကျွမ်းကျင်- တရားဝင်ရေးသားပြောဆိုမှုနှင့် UKBI စာမေးပွဲအဆင့်" : "Mahir: Wacana Formal, Esai & Standar UKBI", 5)
        );
    }

    @Override
    public List<CourseDeckDto> getDecks(String levelCode, String myLang, Long userId) {
        String level = (levelCode != null && !levelCode.isBlank()) ? levelCode.trim() : "BIPA-1";
        List<CourseDeck> decks = deckRepository.findByTrackCodeAndLevelCodeOrderByDayNumberAsc("ID", level);

        Map<Long, Integer> progressMap = new HashMap<>();
        if (userId != null) {
            List<CourseDeckProgress> userProg = courseDeckProgressRepository.findByUserIdAndTrackCode(userId, "ID");
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
        List<CourseItem> allTrackItems = itemRepository.findByTrackCodeAndLevelCodeOrderBySortOrderAsc("ID", "BIPA-1");

        List<CourseCardDto> cards = new ArrayList<>();
        for (CourseItem item : items) {
            String meaning = item.getLocalizedMeaning(myLang);
            List<String> choices = generateChoices(meaning, allTrackItems, myLang);

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

    private List<String> generateChoices(String correctAnswer, List<CourseItem> pool, String myLang) {
        Set<String> options = new LinkedHashSet<>();
        options.add(correctAnswer);

        List<CourseItem> shuffledPool = new ArrayList<>(pool);
        Collections.shuffle(shuffledPool);

        for (CourseItem cand : shuffledPool) {
            String candMeaning = cand.getLocalizedMeaning(myLang);
            if (candMeaning != null && !candMeaning.equalsIgnoreCase(correctAnswer)) {
                options.add(candMeaning);
                if (options.size() >= 4) break;
            }
        }

        List<String> result = new ArrayList<>(options);
        Collections.shuffle(result);
        return result;
    }
}
