package com.kanarau.course.strategy;

import com.kanarau.course.dto.CourseCardDto;
import com.kanarau.course.dto.CourseDeckDto;
import com.kanarau.course.dto.CourseLevelDto;
import com.kanarau.course.dto.CourseTrackDto;
import com.kanarau.course.entity.CourseTrack;
import com.kanarau.course.repository.CourseTrackRepository;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class EnglishCourseStrategy implements CourseTrackStrategy {

    private final CourseTrackRepository trackRepository;

    public EnglishCourseStrategy(CourseTrackRepository trackRepository) {
        this.trackRepository = trackRepository;
    }

    @Override
    public String getTrackCode() {
        return "EN";
    }

    @Override
    public String getTargetLanguage() {
        return "en";
    }

    @Override
    public CourseTrackDto getTrackInfo(String myLang) {
        Optional<CourseTrack> track = trackRepository.findById("EN");
        if (track.isPresent()) {
            return CourseTrackDto.from(track.get(), myLang);
        }
        String title = "my".equalsIgnoreCase(myLang) ? "အင်္ဂလိပ်ဘာသာစကား" : ("id".equalsIgnoreCase(myLang) ? "Bahasa Inggris" : "English");
        String desc = "my".equalsIgnoreCase(myLang)
                ? "အပြည်ပြည်ဆိုင်ရာ ဆက်သွယ်ရေး၊ အလုပ်ခွင်သုံးနှင့် TOEIC/IELTS အတွက် အင်္ဂလိပ်စကားကို လေ့လာပါ။"
                : ("id".equalsIgnoreCase(myLang)
                ? "Tingkatkan kemampuan bahasa Inggris untuk komunikasi global, persiapan kerja, TOEIC, dan IELTS."
                : "Enhance English communication, workplace fluency, and prep for TOEIC and IELTS.");
        return new CourseTrackDto("EN", title, "en", "🇬🇧", desc);
    }

    @Override
    public List<CourseLevelDto> getLevels(String myLang) {
        return List.of(
                new CourseLevelDto("EN", "CEFR-A2", "Elementary (A2)", "id".equalsIgnoreCase(myLang) ? "Percakapan Praktis & Kosakata Sehari-hari (TOEIC 400+)" : ("my".equalsIgnoreCase(myLang) ? "လက်တွေ့သုံး အင်္ဂလိပ်စကားပြောနှင့် အခြေခံများ" : "Practical English & Basics (TOEIC 400+)"), 1),
                new CourseLevelDto("EN", "CEFR-B1", "Intermediate (B1)", "id".equalsIgnoreCase(myLang) ? "Bahasa Inggris Kerja & Percakapan Lancar (TOEIC 550+)" : ("my".equalsIgnoreCase(myLang) ? "အလုပ်ခွင်သုံး အင်္ဂလိပ်စကားပြော" : "Workplace & Conversational English (TOEIC 550+)"), 2),
                new CourseLevelDto("EN", "CEFR-B2", "Upper-Int (B2)", "id".equalsIgnoreCase(myLang) ? "Negosiasi, Presentasi & Persiapan IELTS 6.5+" : ("my".equalsIgnoreCase(myLang) ? "စီးပွားရေးသုံးနှင့် IELTS 6.5+ ပြင်ဆင်မှု" : "Business Fluency & IELTS 6.5+ Prep"), 3),
                new CourseLevelDto("EN", "CEFR-C1", "Advanced (C1)", "id".equalsIgnoreCase(myLang) ? "Komunikasi Profesional & Akademik Tingkat Tinggi" : ("my".equalsIgnoreCase(myLang) ? "အဆင့်မြင့် ပရော်ဖက်ရှင်နယ် အင်္ဂလိပ်စာ" : "Professional & Academic Fluency"), 4)
        );
    }

    @Override
    public List<CourseDeckDto> getDecks(String levelCode, String myLang, Long userId) {
        return List.of(
                new CourseDeckDto(3001L, "EN", "CEFR-B1", 1, "Workplace Greetings & Email Etiquette", "Salam Kerja & Etika Email", 10, 0),
                new CourseDeckDto(3002L, "EN", "CEFR-B1", 2, "Meeting Participation & Agreeing/Disagreeing", "Rapat Kerja & Mengemukakan Pendapat", 10, 0)
        );
    }

    @Override
    public List<CourseCardDto> getDeckCards(Long deckId, String myLang) {
        return List.of(
                new CourseCardDto(1L, "Could you please elaborate on that point?", "kun-yu-pliz-i-la-bo-reit", "EXPRESSION", 
                        "id".equalsIgnoreCase(myLang) ? "Bisakah Anda menjelaskan lebih rinci poin tersebut?" : "ထိုအချက်ကို အနည်းငယ် အသေးစိတ် ရှင်းပြပေးနိုင်မလားခင်ဗျာ?",
                        "id".equalsIgnoreCase(myLang) ? "Ungkapan sopan dalam rapat saat meminta penjelasan tambahan." : "အစည်းအဝေးများတွင် ယဉ်ကျေးစွာ အသေးစိတ်ထပ်မံရှင်းပြရန် တောင်းဆိုသောအသုံးအနှုန်း။",
                        "Could you please elaborate on the budget proposal?", 
                        "id".equalsIgnoreCase(myLang) ? "Bisakah Anda menjelaskan lebih rinci proposal anggaran tersebut?" : "ဘတ်ဂျက်အဆိုပြုချက်ကို အသေးစိတ် ရှင်းပြပေးနိုင်မလားခင်ဗျာ?",
                        List.of(
                                "id".equalsIgnoreCase(myLang) ? "Bisakah Anda menjelaskan lebih rinci poin tersebut?" : "ထိုအချက်ကို အနည်းငယ် အသေးစိတ် ရှင်းပြပေးနိုင်မလားခင်ဗျာ?",
                                "id".equalsIgnoreCase(myLang) ? "Bisakah kita menunda rapat hari ini?" : "ဒီကနေ့ အစည်းအဝေးကို ရွှေ့ဆိုင်းလို့ရမလား?",
                                "id".equalsIgnoreCase(myLang) ? "Saya sangat setuju dengan usulan Anda." : "ခင်ဗျားရဲ့ အဆိုပြုချက်ကို ကျွန်တော် လုံးဝသဘောတူပါတယ်။",
                                "id".equalsIgnoreCase(myLang) ? "Terima kasih atas kehadiran semuanya." : "အားလုံး တက်ရောက်ပေးတဲ့အတွက် ကျေးဇူးတင်ပါတယ်။"
                        ))
        );
    }
}
