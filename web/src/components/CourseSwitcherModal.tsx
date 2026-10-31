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

interface TargetOption {
  code: TargetLanguage;
  trackCode: TrackCode;
  nameId: string;
  nameEn: string;
  nameMy: string;
  flag: string;
  levels: { code: string; name: string; desc: string }[];
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
      { code: 'BIPA-1', name: 'BIPA 1 (A1)', desc: 'Pemula: Salam, Angka, Kosakata Esensial & Fonetik' },
      { code: 'BIPA-2', name: 'BIPA 2 (A2)', desc: 'Dasar: Kehidupan Sehari-hari, Arah & Belanja' },
      { code: 'BIPA-3', name: 'BIPA 3 (B1)', desc: 'Menengah: Pola Kalimat & Imbuhan me-, ber-, di-' },
      { code: 'BIPA-4', name: 'BIPA 4 (B2)', desc: 'Menengah Atas: Percakapan Kerja, Sosial & Budaya' },
      { code: 'BIPA-5', name: 'BIPA 5 (C1)', desc: 'Mahir: Wacana Formal, Esai & Standar UKBI' },
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
      { code: 'FOUNDATION', name: 'Fondasi Huruf', desc: '33 Konsonan Akshara & Vokal Dasar' },
      { code: 'MLT-1', name: 'MLT 1 (Dasar)', desc: 'Aturan Nada, Medial Ya-Pin/Wa-Hswe & Kata Esensial' },
      { code: 'MLT-2', name: 'MLT 2 (Menengah)', desc: 'Pola Kalimat SOV, Partikel Penghubung & Dialog' },
      { code: 'MLT-3', name: 'MLT 3 (Lanjutan)', desc: 'Teks Bacaan Menengah & Percakapan Sosial' },
      { code: 'MLT-4', name: 'MLT 4 (Mahir)', desc: 'Bahasa Tulis Baku, Formal & Sastra Myanmar' },
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
      { code: 'N5', name: 'JLPT N5', desc: 'Tingkat Pemula Dasar' },
      { code: 'N4', name: 'JLPT N4', desc: 'Tingkat Dasar Lanjutan' },
      { code: 'N3', name: 'JLPT N3', desc: 'Tingkat Menengah' },
      { code: 'N2', name: 'JLPT N2', desc: 'Tingkat Menengah Atas' },
      { code: 'N1', name: 'JLPT N1', desc: 'Tingkat Mahir Profesional' },
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
      { code: 'CEFR-A2', name: 'Elementary (A2)', desc: 'Percakapan Praktis & Kosakata Sehari-hari' },
      { code: 'CEFR-B1', name: 'Intermediate (B1)', desc: 'Bahasa Inggris Kerja & Percakapan Lancar' },
      { code: 'CEFR-B2', name: 'Upper-Int (B2)', desc: 'Negosiasi, Presentasi & Persiapan IELTS 6.5+' },
      { code: 'CEFR-C1', name: 'Advanced (C1)', desc: 'Komunikasi Profesional & Akademik' },
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
                    <div className="space-y-0.5">
                      <span className="font-extrabold text-xs text-stone-900 dark:text-white block">
                        {lvl.name}
                      </span>
                      <span className="text-[11px] text-stone-500 dark:text-slate-400 block leading-relaxed line-clamp-1">
                        {lvl.desc}
                      </span>
                    </div>
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
