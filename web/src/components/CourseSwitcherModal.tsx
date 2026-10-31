import React, { useState, useEffect } from 'react';
import { useCourseStore, type TargetLanguage, type TrackCode } from '@/stores/courseStore';
import { useLanguageStore } from '@/stores/languageStore';
import type { Language } from '@/locales/translations';
import {
  X,
  Sparkles,
  Globe,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  BookOpen,
  Compass,
} from 'lucide-react';

interface LanguageOption {
  code: Language;
  name: string;
  nativeName: string;
  flag: string;
}

interface LevelOption {
  code: string;
  nameId: string;
  nameEn: string;
  nameMy: string;
  descId: string;
  descEn: string;
  descMy: string;
}

interface TargetOption {
  code: TargetLanguage;
  trackCode: TrackCode;
  nameId: string;
  nameEn: string;
  nameMy: string;
  flag: string;
  levels: LevelOption[];
}

const MY_LANG_OPTIONS: LanguageOption[] = [
  { code: 'my', name: 'Burmese', nativeName: 'မြန်မာဘာသာ', flag: '🇲🇲' },
  { code: 'id', name: 'Bahasa Indonesia', nativeName: 'Bahasa Indonesia', flag: '🇮🇩' },
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
];

const TARGET_COURSES: TargetOption[] = [
  {
    code: 'id',
    trackCode: 'ID',
    nameId: 'Bahasa Indonesia (BIPA)',
    nameEn: 'Indonesian (BIPA)',
    nameMy: 'အင်ဒိုနီးရှားဘာသာစကား (BIPA)',
    flag: '🇮🇩',
    levels: [
      {
        code: 'BIPA-1',
        nameId: 'BIPA 1 (A1)',
        nameEn: 'BIPA 1 (A1)',
        nameMy: 'BIPA 1 (A1)',
        descId: 'Pemula: Salam, Angka, Kosakata Esensial & Fonetik',
        descEn: 'Beginner: Greetings, Numbers, Essential Vocab & Phonetics',
        descMy: 'အခြေခံ- နှုတ်ဆက်ခြင်း၊ ဂဏန်းများနှင့် အခြေခံစကားလုံးများ',
      },
      {
        code: 'BIPA-2',
        nameId: 'BIPA 2 (A2)',
        nameEn: 'BIPA 2 (A2)',
        nameMy: 'BIPA 2 (A2)',
        descId: 'Dasar: Kehidupan Sehari-hari, Arah & Belanja',
        descEn: 'Elementary: Daily Life, Directions & Shopping',
        descMy: 'အခြေခံအဆင့်- နေ့စဉ်ဘဝ၊ လမ်းညွှန်ချက်များနှင့် ဈေးဝယ်ခြင်း',
      },
      {
        code: 'BIPA-3',
        nameId: 'BIPA 3 (B1)',
        nameEn: 'BIPA 3 (B1)',
        nameMy: 'BIPA 3 (B1)',
        descId: 'Menengah: Pola Kalimat & Imbuhan me-, ber-, di-',
        descEn: 'Intermediate: Sentence Patterns & Affixes me-, ber-, di-',
        descMy: 'အလယ်အလတ်- ဝါကျတည်ဆောက်ပုံနှင့် ရှေ့ဆက်စကားလုံးများ',
      },
      {
        code: 'BIPA-4',
        nameId: 'BIPA 4 (B2)',
        nameEn: 'BIPA 4 (B2)',
        nameMy: 'BIPA 4 (B2)',
        descId: 'Menengah Atas: Percakapan Kerja, Sosial & Budaya',
        descEn: 'Upper-Intermediate: Workplace, Social & Cultural Fluency',
        descMy: 'အထက်တန်း- လုပ်ငန်းခွင်နှင့် လူမှုဆက်ဆံရေးစကားပြော',
      },
      {
        code: 'BIPA-5',
        nameId: 'BIPA 5 (C1)',
        nameEn: 'BIPA 5 (C1)',
        nameMy: 'BIPA 5 (C1)',
        descId: 'Mahir: Wacana Formal, Esai & Standar UKBI',
        descEn: 'Advanced: Formal Discourse, Essays & UKBI Standard',
        descMy: 'ကျွမ်းကျင်- တရားဝင်ရေးသားပြောဆိုမှုနှင့် UKBI စာမေးပွဲအဆင့်',
      },
    ],
  },
  {
    code: 'my',
    trackCode: 'MY',
    nameId: 'Bahasa Myanmar (Burmese)',
    nameEn: 'Burmese (Myanmar)',
    nameMy: 'မြန်မာဘာသာစကား',
    flag: '🇲🇲',
    levels: [
      {
        code: 'FOUNDATION',
        nameId: 'Fondasi Huruf',
        nameEn: 'Alphabet Foundation',
        nameMy: 'အက္ခရာအခြေခံ',
        descId: '33 Konsonan Akshara & Vokal Dasar',
        descEn: '33 Burmese Consonants & Core Vowels',
        descMy: 'အခြေခံဗျည်း ၃၃ လုံးနှင့် သရများ',
      },
      {
        code: 'MLT-1',
        nameId: 'MLT 1 (Dasar)',
        nameEn: 'MLT 1 (Elementary)',
        nameMy: 'MLT 1 (အခြေခံ)',
        descId: 'Aturan Nada, Medial Ya-Pin/Wa-Hswe & Kata Esensial',
        descEn: 'Tone Rules, Medials Ya-Pin/Wa-Hswe & Everyday Words',
        descMy: 'အသံထွက်စည်းမျဉ်းများနှင့် နေ့စဉ်သုံးစကားလုံးများ',
      },
      {
        code: 'MLT-2',
        nameId: 'MLT 2 (Menengah)',
        nameEn: 'MLT 2 (Intermediate)',
        nameMy: 'MLT 2 (အလယ်အလတ်)',
        descId: 'Pola Kalimat SOV, Partikel Penghubung & Dialog',
        descEn: 'SOV Sentence Patterns, Particles & Dialogues',
        descMy: 'ဝါကျတည်ဆောက်ပုံနှင့် လက်တွေ့စကားပြော',
      },
      {
        code: 'MLT-3',
        nameId: 'MLT 3 (Lanjutan)',
        nameEn: 'MLT 3 (Upper-Int)',
        nameMy: 'MLT 3 (အဆင့်မြင့်)',
        descId: 'Teks Bacaan Menengah & Percakapan Sosial',
        descEn: 'Reading Comprehension & Social Interaction',
        descMy: 'စာဖတ်စွမ်းရည်နှင့် လူမှုဆက်ဆံရေး',
      },
      {
        code: 'MLT-4',
        nameId: 'MLT 4 (Mahir)',
        nameEn: 'MLT 4 (Advanced)',
        nameMy: 'MLT 4 (ကျွမ်းကျင်)',
        descId: 'Bahasa Tulis Baku, Formal & Sastra Myanmar',
        descEn: 'Literary Burmese & Advanced Proficiency',
        descMy: 'အဆင့်မြင့် စာပေဘာသာစကားနှင့် ရေးသားချက်များ',
      },
    ],
  },
  {
    code: 'ja',
    trackCode: 'JA',
    nameId: 'Bahasa Jepang (JLPT)',
    nameEn: 'Japanese (JLPT)',
    nameMy: 'ဂျပန်ဘာသာစကား (JLPT)',
    flag: '🇯🇵',
    levels: [
      {
        code: 'N5',
        nameId: 'JLPT N5',
        nameEn: 'JLPT N5',
        nameMy: 'JLPT N5',
        descId: 'Tingkat Pemula Dasar',
        descEn: 'Beginner Level',
        descMy: 'အခြေခံစတင်သူအဆင့်',
      },
      {
        code: 'N4',
        nameId: 'JLPT N4',
        nameEn: 'JLPT N4',
        nameMy: 'JLPT N4',
        descId: 'Tingkat Dasar Lanjutan',
        descEn: 'Elementary Level',
        descMy: 'အခြေခံအဆင့်မြင့်',
      },
      {
        code: 'N3',
        nameId: 'JLPT N3',
        nameEn: 'JLPT N3',
        nameMy: 'JLPT N3',
        descId: 'Tingkat Menengah',
        descEn: 'Intermediate Level',
        descMy: 'အလယ်အလတ်အဆင့်',
      },
      {
        code: 'N2',
        nameId: 'JLPT N2',
        nameEn: 'JLPT N2',
        nameMy: 'JLPT N2',
        descId: 'Tingkat Menengah Atas',
        descEn: 'Upper-Intermediate Level',
        descMy: 'အထက်တန်းအလယ်အလတ်',
      },
      {
        code: 'N1',
        nameId: 'JLPT N1',
        nameEn: 'JLPT N1',
        nameMy: 'JLPT N1',
        descId: 'Tingkat Mahir Profesional',
        descEn: 'Advanced Professional Level',
        descMy: 'ကျွမ်းကျင်အဆင့်',
      },
    ],
  },
  {
    code: 'en',
    trackCode: 'EN',
    nameId: 'Bahasa Inggris (TOEIC/IELTS)',
    nameEn: 'English (TOEIC/IELTS)',
    nameMy: 'အင်္ဂလိပ်ဘာသာစကား (TOEIC/IELTS)',
    flag: '🇬🇧',
    levels: [
      {
        code: 'CEFR-A2',
        nameId: 'Elementary (A2)',
        nameEn: 'Elementary (A2)',
        nameMy: 'Elementary (A2)',
        descId: 'Percakapan Praktis & Kosakata Sehari-hari',
        descEn: 'Practical English & Daily Vocabulary',
        descMy: 'လက်တွေ့သုံး အင်္ဂလိပ်စကားပြောနှင့် အခြေခံများ',
      },
      {
        code: 'CEFR-B1',
        nameId: 'Intermediate (B1)',
        nameEn: 'Intermediate (B1)',
        nameMy: 'Intermediate (B1)',
        descId: 'Bahasa Inggris Kerja & Percakapan Lancar',
        descEn: 'Workplace & Conversational English',
        descMy: 'အလုပ်ခွင်သုံး အင်္ဂလိပ်စကားပြော',
      },
      {
        code: 'CEFR-B2',
        nameId: 'Upper-Int (B2)',
        nameEn: 'Upper-Int (B2)',
        nameMy: 'Upper-Int (B2)',
        descId: 'Negosiasi, Presentasi & Persiapan IELTS 6.5+',
        descEn: 'Business Fluency & IELTS 6.5+ Prep',
        descMy: 'စီးပွားရေးသုံးနှင့် IELTS 6.5+ ပြင်ဆင်မှု',
      },
      {
        code: 'CEFR-C1',
        nameId: 'Advanced (C1)',
        nameEn: 'Advanced (C1)',
        nameMy: 'Advanced (C1)',
        descId: 'Komunikasi Profesional & Akademik',
        descEn: 'Professional & Academic Communication',
        descMy: 'အဆင့်မြင့် ပရော်ဖက်ရှင်နယ် အင်္ဂလိပ်စာ',
      },
    ],
  },
];

export const CourseSwitcherModal: React.FC = () => {
  const { isModalOpen, setModalOpen, targetLanguage, activeTrack, activeLevel, switchCourse } = useCourseStore();
  const currentLanguage = useLanguageStore((state) => state.language);

  const [selectedMyLang, setSelectedMyLang] = useState<Language>(currentLanguage);
  const [selectedTarget, setSelectedTarget] = useState<TargetLanguage>(targetLanguage);
  const [selectedTrack, setSelectedTrack] = useState<TrackCode>(activeTrack);
  const [selectedLevel, setSelectedLevel] = useState<string>(activeLevel);
  const [isApplying, setIsApplying] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      setSelectedMyLang(currentLanguage);
      setSelectedTarget(targetLanguage);
      setSelectedTrack(activeTrack);
      setSelectedLevel(activeLevel);
    }
  }, [isModalOpen, currentLanguage, targetLanguage, activeTrack, activeLevel]);

  if (!isModalOpen) return null;

  const currentTargetMeta: TargetOption = TARGET_COURSES.find((c) => c.code === selectedTarget) || TARGET_COURSES[0]!;
  if (!currentTargetMeta) return null;

  const handleSelectTarget = (target: TargetOption) => {
    setSelectedTarget(target.code);
    setSelectedTrack(target.trackCode);
    setSelectedLevel(target.levels[0]?.code || 'N2');
  };

  const handleApply = async () => {
    setIsApplying(true);
    try {
      await switchCourse(selectedTarget, selectedMyLang, selectedTrack, selectedLevel);
      setModalOpen(false);
    } finally {
      setIsApplying(false);
    }
  };

  const isMyanmarLang = selectedMyLang === 'my';
  const isEnLang = selectedMyLang === 'en';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto bg-white dark:bg-[#151D2E] rounded-3xl shadow-2xl border border-stone-200/90 dark:border-[#232F46] flex flex-col">
        {/* Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between p-4 sm:p-5 border-b border-stone-100 dark:border-[#1E293B] bg-white/95 dark:bg-[#151D2E]/95 backdrop-blur-md">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shadow-xs">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-stone-900 dark:text-white leading-tight">
                {isMyanmarLang
                  ? 'သင်ယူမှုအစီအစဉ် ရွေးချယ်ပါ'
                  : isEnLang
                  ? 'Language & Track Settings'
                  : 'Pengaturan Bahasa & Program Belajar'}
              </h2>
              <p className="text-xs text-stone-500 dark:text-slate-400">
                {isMyanmarLang
                  ? 'မိခင်ဘာသာစကားနှင့် သင်ယူလိုသော ဘာသာစကားကို သတ်မှတ်ပါ'
                  : isEnLang
                  ? 'Choose your native language and the language you want to master'
                  : 'Atur bahasa pengantar Anda dan bahasa yang ingin Anda pelajari'}
              </p>
            </div>
          </div>
          <button
            onClick={() => setModalOpen(false)}
            className="p-2 rounded-xl text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 space-y-6 flex-1 text-sm">
          {/* Step 1: My Language (Native / Interface) */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5" />
                {isMyanmarLang
                  ? '၁။ ကျွန်ုပ်၏ မိခင်ဘာသာစကား (My Language)'
                  : isEnLang
                  ? '1. My Native / Explanation Language'
                  : '1. Bahasa Saya (Bahasa Pengantar & Penjelasan)'}
              </span>
              <span className="text-[11px] text-stone-400 dark:text-slate-500">
                {isMyanmarLang ? 'ရှင်းလင်းချက်များ ထွက်ပေါ်မည့် ဘာသာစကား' : 'Penjelasan materi & AI'}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {MY_LANG_OPTIONS.map((opt) => {
                const isSelected = selectedMyLang === opt.code;
                return (
                  <button
                    key={opt.code}
                    type="button"
                    onClick={() => setSelectedMyLang(opt.code)}
                    className={`p-3 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center gap-1.5 ${
                      isSelected
                        ? 'border-indigo-600 dark:border-indigo-500 bg-indigo-50/70 dark:bg-indigo-950/40 shadow-xs ring-2 ring-indigo-500/20'
                        : 'border-stone-200/90 dark:border-[#232F46] bg-stone-50/50 dark:bg-[#0B0F19]/50 hover:bg-stone-100/70 dark:hover:bg-slate-800/50'
                    }`}
                  >
                    <span className="text-2xl">{opt.flag}</span>
                    <span className="font-bold text-xs text-stone-800 dark:text-slate-200">
                      {opt.nativeName}
                    </span>
                    <span className="text-[10px] text-stone-400 dark:text-slate-500">
                      {opt.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Target Learning Language */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5" />
                {isMyanmarLang
                  ? '၂။ ကျွန်ုပ် သင်ယူလိုသော ဘာသာစကား (I Want to Learn)'
                  : isEnLang
                  ? '2. Target Language to Master'
                  : '2. Saya Ingin Belajar (Target Bahasa)'}
              </span>
              <span className="text-[11px] text-stone-400 dark:text-slate-500">
                {isMyanmarLang ? 'လေ့လာလိုသည့် ဘာသာစကား' : 'Materi yang akan dipelajari'}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {TARGET_COURSES.map((target) => {
                const isSelected = selectedTarget === target.code;
                const targetTitle = isMyanmarLang ? target.nameMy : isEnLang ? target.nameEn : target.nameId;
                return (
                  <button
                    key={target.code}
                    type="button"
                    onClick={() => handleSelectTarget(target)}
                    className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between h-24 ${
                      isSelected
                        ? 'border-emerald-600 dark:border-emerald-500 bg-emerald-50/70 dark:bg-emerald-950/40 shadow-xs ring-2 ring-emerald-500/20'
                        : 'border-stone-200/90 dark:border-[#232F46] bg-stone-50/50 dark:bg-[#0B0F19]/50 hover:bg-stone-100/70 dark:hover:bg-slate-800/50'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className="text-2xl">{target.flag}</span>
                      {isSelected && <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />}
                    </div>
                    <div>
                      <p className="font-extrabold text-xs text-stone-900 dark:text-white leading-tight">
                        {targetTitle}
                      </p>
                      <p className="text-[10px] text-stone-400 dark:text-slate-400 font-mono mt-0.5">
                        Track: {target.trackCode}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Choose Level */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                {isMyanmarLang
                  ? '၃။ စတင်မည့် အဆင့် / Level ရွေးချယ်ပါ'
                  : isEnLang
                  ? '3. Select Proficiency Level'
                  : '3. Pilih Tingkat Kemahiran / Level'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {currentTargetMeta.levels.map((lvl) => {
                const isSelected = selectedLevel === lvl.code;
                return (
                  <button
                    key={lvl.code}
                    type="button"
                    onClick={() => setSelectedLevel(lvl.code)}
                    className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'border-amber-500 dark:border-amber-400 bg-amber-50/60 dark:bg-amber-950/40 shadow-xs ring-2 ring-amber-500/20'
                        : 'border-stone-200/80 dark:border-[#232F46] bg-white dark:bg-[#0B0F19]/40 hover:bg-stone-50 dark:hover:bg-slate-800/40'
                    }`}
                  >
                    {(() => {
                      const levelTitle = isMyanmarLang ? (lvl.nameMy || lvl.nameEn) : isEnLang ? lvl.nameEn : lvl.nameId;
                      const levelDesc = isMyanmarLang ? (lvl.descMy || lvl.descEn) : isEnLang ? lvl.descEn : lvl.descId;
                      return (
                        <div className="space-y-0.5">
                          <span className="font-extrabold text-xs text-stone-900 dark:text-white block">
                            {levelTitle}
                          </span>
                          <span className="text-[11px] text-stone-500 dark:text-slate-400 block leading-relaxed line-clamp-1">
                            {levelDesc}
                          </span>
                        </div>
                      );
                    })()}
                    {isSelected && <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 ml-2" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Configuration Summary Card */}
          <div className="p-3.5 rounded-2xl bg-gradient-to-r from-indigo-50/80 via-purple-50/60 to-emerald-50/80 dark:from-indigo-950/40 dark:via-purple-950/30 dark:to-emerald-950/40 border border-indigo-100/80 dark:border-indigo-900/40 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">
                {MY_LANG_OPTIONS.find((m) => m.code === selectedMyLang)?.flag}
              </span>
              <ArrowRight className="w-4 h-4 text-stone-400" />
              <span className="text-2xl">{currentTargetMeta.flag}</span>
              <div>
                <span className="text-xs font-bold text-stone-900 dark:text-white block">
                  {selectedMyLang.toUpperCase()} ➔ {selectedTarget.toUpperCase()} ({selectedLevel})
                </span>
                <span className="text-[10px] text-stone-500 dark:text-slate-400 block">
                  {isMyanmarLang
                    ? 'ရှင်းလင်းချက်များနှင့် AI Sensei သည် မြန်မာဘာသာဖြင့် ဖြစ်ပါမည်'
                    : isEnLang
                    ? 'Explanations & AI Sensei will be in your native language'
                    : 'Materi bahasa target dengan penjelasan bahasa ibu Anda'}
                </span>
              </div>
            </div>
            <div className="shrink-0">
              <span className="px-2.5 py-1 text-[10px] font-extrabold rounded-lg bg-indigo-600 text-white shadow-xs">
                30 Min / Day
              </span>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="sticky bottom-0 z-20 flex items-center justify-end gap-2.5 p-4 border-t border-stone-100 dark:border-[#1E293B] bg-white/95 dark:bg-[#151D2E]/95 backdrop-blur-md">
          <button
            type="button"
            onClick={() => setModalOpen(false)}
            className="px-4 py-2.5 rounded-xl font-bold text-xs text-stone-600 dark:text-slate-300 hover:bg-stone-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            {isMyanmarLang ? 'မလုပ်တော့ပါ' : isEnLang ? 'Cancel' : 'Batal'}
          </button>
          <button
            type="button"
            onClick={handleApply}
            disabled={isApplying}
            className="px-5 py-2.5 rounded-xl font-extrabold text-xs text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 transition-all shadow-md shadow-indigo-500/20 cursor-pointer flex items-center gap-2"
          >
            {isApplying ? (
              <span>{isMyanmarLang ? 'ပြောင်းလဲနေသည်...' : 'Applying...'}</span>
            ) : (
              <>
                <Sparkles className="w-3.5 h-3.5" />
                <span>
                  {isMyanmarLang
                    ? 'အတည်ပြုပြီး စတင်လေ့လာပါ'
                    : isEnLang
                    ? 'Apply & Start Learning'
                    : 'Terapkan & Mulai Belajar'}
                </span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
