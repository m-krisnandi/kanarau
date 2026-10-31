import React, { useState, useEffect } from 'react';
import { X, Volume2, Sparkles, BookOpen, Layers } from 'lucide-react';
import { playUniversalAudio, stopAudio } from '@/utils/audioPlayer';
import type { Language } from '@/locales/translations';

export interface CourseCardDetailItem {
  id: number | string;
  target_text: string;
  romanization?: string;
  meaning: string;
  notes?: string;
  example_target?: string;
  example_meaning?: string;
  item_type?: string;
  track_code?: string;
  level_code?: string;
}

interface CourseCardDetailModalProps {
  item: CourseCardDetailItem | null;
  onClose: () => void;
  targetLanguage: string;
  myLanguage: Language;
  onAskAi?: (prompt: string, displayText: string) => void;
}

export const CourseCardDetailModal: React.FC<CourseCardDetailModalProps> = ({
  item,
  onClose,
  targetLanguage,
  myLanguage,
  onAskAi,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPlayingExample, setIsPlayingExample] = useState(false);

  useEffect(() => {
    return () => {
      stopAudio();
    };
  }, []);

  useEffect(() => {
    if (item) {
      const original = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [item]);

  if (!item) return null;

  const handlePlayWord = () => {
    setIsPlaying(true);
    playUniversalAudio(item.target_text, targetLanguage, 1.0, () => {
      setIsPlaying(false);
    });
  };

  const handlePlayExample = () => {
    if (!item.example_target) return;
    setIsPlayingExample(true);
    playUniversalAudio(item.example_target, targetLanguage, 1.0, () => {
      setIsPlayingExample(false);
    });
  };

  // Localized Labels
  const isMy = myLanguage === 'my';
  const isEn = myLanguage === 'en';

  const typeLabels: Record<string, { my: string; en: string; id: string }> = {
    EXPRESSION: { my: 'နှုတ်ဆက်/အသုံးအနှုန်း', en: 'Expression', id: 'Ungkapan' },
    VOCABULARY: { my: 'ဝေါဟာရ', en: 'Vocabulary', id: 'Kosakata' },
    ALPHABET: { my: 'အက္ခရာ', en: 'Alphabet', id: 'Huruf / Abjad' },
    GRAMMAR: { my: 'သဒ္ဒါ', en: 'Grammar', id: 'Tata Bahasa' },
  };

  const itemTypeKey = (item.item_type || 'VOCABULARY').toUpperCase();
  const localizedType =
    typeLabels[itemTypeKey]?.[myLanguage] || (isMy ? 'ဝေါဟာရ' : isEn ? 'Vocabulary' : 'Kosakata');

  const listenWordLabel = isMy
    ? 'အသံထွက် နားထောင်ရန်'
    : isEn
    ? 'Listen to Pronunciation'
    : 'Dengarkan Pelafalan';

  const listenSentenceLabel = isMy
    ? 'ဝါကျ နားထောင်ရန်'
    : isEn
    ? 'Listen to Sentence'
    : 'Dengarkan Kalimat';

  const exampleTitle = isMy ? 'ဥပမာ ဝါကျ' : isEn ? 'Example Sentence' : 'Contoh Kalimat';
  const notesTitle = isMy ? 'မှတ်ချက်' : isEn ? 'Usage Notes' : 'Catatan Penggunaan';
  const closeLabel = isMy ? 'ပိတ်ရန်' : isEn ? 'Close' : 'Tutup';

  const trackFlag =
    targetLanguage === 'id' ? '🇮🇩' : targetLanguage === 'my' ? '🇲🇲' : targetLanguage === 'en' ? '🇬🇧' : '🇯🇵';

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          stopAudio();
          onClose();
        }
      }}
      className="fixed inset-0 z-[80] bg-black/60 dark:bg-black/80 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 animate-fade-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-[#121824] border border-[#EFEAE2] dark:border-[#232F46] text-stone-900 dark:text-[#F8FAFC] w-full max-w-md rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden animate-slide-up max-h-[92vh] flex flex-col"
      >
        {/* Top Minimal Bar */}
        <div className="px-5 pt-3.5 pb-2.5 flex items-center justify-between border-b border-[#EFEAE2] dark:border-[#232F46]/70">
          <div className="flex items-center space-x-2">
            <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-800/70 flex items-center gap-1">
              <span>{trackFlag}</span>
              <span>{item.level_code || 'BIPA'}</span>
            </span>
            <span className="text-[11px] font-medium text-stone-500 dark:text-zinc-400">
              {localizedType}
            </span>
          </div>
          <button
            onClick={() => {
              stopAudio();
              onClose();
            }}
            className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 dark:bg-[#1E293B] dark:hover:bg-[#28354D] text-stone-500 hover:text-stone-800 dark:text-zinc-400 dark:hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label={closeLabel}
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4 no-scrollbar">
          {/* Main Word Header */}
          <div className="text-center space-y-1.5 pt-2 pb-1">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900 dark:text-white">
              {item.target_text}
            </h2>

            {item.romanization && (
              <p className="text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400 font-mono tracking-wide">
                {item.romanization}
              </p>
            )}

            <div className="pt-2">
              <span className="text-lg sm:text-xl font-bold text-stone-800 dark:text-slate-100 leading-snug">
                {item.meaning}
              </span>
            </div>
          </div>

          {/* Audio Pronunciation Button */}
          <div className="flex justify-center pt-1 pb-1">
            <button
              onClick={handlePlayWord}
              disabled={isPlaying}
              className={`py-2 px-5 rounded-2xl flex items-center space-x-2 text-xs font-bold transition-all shadow-sm active:scale-95 cursor-pointer ${
                isPlaying
                  ? 'bg-emerald-600 text-white animate-pulse'
                  : 'bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 border border-indigo-200 dark:border-indigo-800'
              }`}
            >
              <Volume2 className={`w-4 h-4 ${isPlaying ? 'animate-bounce' : ''}`} />
              <span>{isPlaying ? '...' : listenWordLabel}</span>
            </button>
          </div>

          {/* Usage Notes */}
          {item.notes && (
            <div className="bg-stone-50/90 dark:bg-[#1A2234] border border-stone-200/80 dark:border-[#232F46] rounded-2xl p-3.5 space-y-1">
              <div className="text-[11px] font-bold text-stone-600 dark:text-slate-400">
                {notesTitle}
              </div>
              <p className="text-xs text-stone-700 dark:text-slate-200 leading-relaxed whitespace-pre-line">
                {item.notes}
              </p>
            </div>
          )}

          {/* Example Sentence Box */}
          {item.example_target && (
            <div className="bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/50 rounded-2xl p-3.5 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-indigo-900 dark:text-indigo-300">
                  {exampleTitle}
                </span>
                <button
                  onClick={handlePlayExample}
                  disabled={isPlayingExample}
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 p-1 rounded-md cursor-pointer transition-colors flex items-center gap-1 text-[11px] font-semibold"
                  title={listenSentenceLabel}
                >
                  <Volume2 className={`w-3.5 h-3.5 ${isPlayingExample ? 'animate-pulse' : ''}`} />
                  <span>{listenSentenceLabel}</span>
                </button>
              </div>

              <div className="space-y-1">
                <p className="text-xs sm:text-sm font-bold text-stone-900 dark:text-slate-100">
                  {item.example_target}
                </p>
                {item.example_meaning && (
                  <p className="text-xs text-stone-600 dark:text-slate-300">
                    {item.example_meaning}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* S-P-O vs S-O-V Sentence Structure Breakdown for Indonesian Track */}
          {targetLanguage === 'id' && (
            <div className="bg-gradient-to-br from-amber-50/70 via-white to-amber-50/40 dark:from-[#1E293B]/70 dark:via-[#151D2E] dark:to-[#1E293B]/40 border border-amber-200/80 dark:border-amber-900/50 rounded-2xl p-4 space-y-3 shadow-xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-lg bg-amber-500 text-white flex items-center justify-center text-xs shadow-2xs">
                    <Layers className="w-3.5 h-3.5" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-extrabold text-amber-950 dark:text-amber-200">
                    {isMy
                      ? 'ဝါကျဖွဲ့စည်းပုံ နှိုင်းယှဉ်ချက် (S-P-O vs S-O-V)'
                      : isEn
                      ? 'Word Order Contrast (S-P-O vs S-O-V)'
                      : 'Pola Susunan Kalimat (S-P-O vs S-O-V)'}
                  </h4>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-300">
                  {isMy ? 'အစီအစဉ် ပြောင်းပြန်' : isEn ? 'Inverted Order' : 'Urutan Terbalik'}
                </span>
              </div>

              {/* Comparison Formula Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {/* Indonesian SPO */}
                <div className="p-2.5 rounded-xl bg-white dark:bg-[#1A2234] border border-amber-100 dark:border-amber-900/50 space-y-1.5 shadow-2xs">
                  <div className="flex items-center justify-between text-[11px] font-bold text-stone-800 dark:text-stone-200">
                    <span>🇮🇩 အင်ဒိုနီးရှား (Indonesian)</span>
                    <span className="font-mono text-indigo-600 dark:text-indigo-400 font-extrabold">S - P - O</span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-bold flex-wrap">
                    <span className="px-1.5 py-0.5 rounded bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                      {isMy ? 'Subjek (ကတ္တား)' : 'Subjek (S)'}
                    </span>
                    <span className="text-stone-400">➔</span>
                    <span className="px-1.5 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                      {isMy ? 'Predikat (ကြိယာ)' : 'Predikat (P)'}
                    </span>
                    <span className="text-stone-400">➔</span>
                    <span className="px-1.5 py-0.5 rounded bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                      {isMy ? 'Objek (ကံ)' : 'Objek (O)'}
                    </span>
                  </div>
                  <p className="text-[10px] text-stone-600 dark:text-zinc-400 leading-tight">
                    {isMy
                      ? 'ကြိယာ (Predikat) သည် ကံ (Objek) ၏ ရှေ့တွင် လာပါသည်။'
                      : isEn
                      ? 'The Predicate/Verb comes BEFORE the Object.'
                      : 'Predikat (kata kerja) mendahului Objek.'}
                  </p>
                </div>

                {/* Myanmar SOV */}
                <div className="p-2.5 rounded-xl bg-white dark:bg-[#1A2234] border border-amber-100 dark:border-amber-900/50 space-y-1.5 shadow-2xs">
                  <div className="flex items-center justify-between text-[11px] font-bold text-stone-800 dark:text-stone-200">
                    <span>🇲🇲 မြန်မာ (Burmese)</span>
                    <span className="font-mono text-amber-600 dark:text-amber-400 font-extrabold">S - O - V</span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-bold flex-wrap">
                    <span className="px-1.5 py-0.5 rounded bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                      {isMy ? 'Subjek (ကတ္တား)' : 'Subjek (S)'}
                    </span>
                    <span className="text-stone-400">➔</span>
                    <span className="px-1.5 py-0.5 rounded bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                      {isMy ? 'Objek (ကံ)' : 'Objek (O)'}
                    </span>
                    <span className="text-stone-400">➔</span>
                    <span className="px-1.5 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                      {isMy ? 'Predikat (ကြိယာ)' : 'Predikat (V)'}
                    </span>
                  </div>
                  <p className="text-[10px] text-stone-600 dark:text-zinc-400 leading-tight">
                    {isMy
                      ? 'ကြိယာ (Verb) သည် ဝါကျ၏ အဆုံးသတ်တွင် အမြဲရှိပါသည်။'
                      : isEn
                      ? 'The Predicate/Verb always comes at the very END.'
                      : 'Kata kerja selalu diletakkan di akhir kalimat.'}
                  </p>
                </div>
              </div>

              {/* Inversion Breakdown for Current Word / Example */}
              {item.example_target && (
                <div className="p-2.5 rounded-xl bg-amber-100/60 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-900/60 space-y-1.5 text-xs">
                  <div className="text-[11px] font-bold text-amber-950 dark:text-amber-200 flex items-center gap-1">
                    <span>💡</span>
                    <span>
                      {isMy
                        ? 'ဤဝါကျတွင် အစီအစဉ် ပြောင်းပြန်ဖြစ်ပုံ ရှင်းလင်းချက်-'
                        : isEn
                        ? 'Inversion Breakdown in this Sentence:'
                        : 'Analisis Urutan Terbalik pada Kalimat ini:'}
                    </span>
                  </div>
                  <p className="text-[11px] text-stone-700 dark:text-stone-300 leading-relaxed">
                    {isMy ? (
                      <>
                        အင်ဒိုနီးရှားတွင် <strong className="text-stone-900 dark:text-white">"{item.example_target}"</strong> ဟု ပြောရာတွင် ကြိယာ/ခံစားချက် (Predikat) ကို အစပိုင်းတွင် ထားသော်လည်း၊ မြန်မာဘာသာ <strong className="text-stone-900 dark:text-white">"{item.example_meaning}"</strong> တွင်မူ ကံ သို့မဟုတ် ခံစားချက်ကို အဆုံးသတ်တွင် ထားပါသည်။
                      </>
                    ) : isEn ? (
                      <>
                        In Indonesian <strong className="text-stone-900 dark:text-white">"{item.example_target}"</strong>, the predicate/verb comes earlier, whereas in Burmese <strong className="text-stone-900 dark:text-white">"{item.example_meaning}"</strong>, the verb is positioned at the end.
                      </>
                    ) : (
                      <>
                        Pada kalimat <strong className="text-stone-900 dark:text-white">"{item.example_target}"</strong>, predikat diucapkan lebih awal sebelum pelengkap/objeknya.
                      </>
                    )}
                  </p>
                </div>
              )}

              {/* Grammatical Role Definitions */}
              <div className="text-[10px] text-stone-600 dark:text-stone-400 space-y-1 pt-1 border-t border-amber-200/60 dark:border-amber-900/40">
                <div className="font-bold text-stone-700 dark:text-stone-300">
                  {isMy ? 'ဝါကျ အစိတ်အပိုင်းများ အဓိပ္ပာယ်သတ်မှတ်ချက်:' : isEn ? 'Grammar Role Legend:' : 'Keterangan Unsur Kalimat:'}
                </div>
                <div className="grid grid-cols-2 gap-x-2 gap-y-0.5">
                  <div>• <strong>Subjek:</strong> {isMy ? 'ကတ္တား (လုပ်ဆောင်သူ)' : 'Subjek / Pelaku'}</div>
                  <div>• <strong>Predikat:</strong> {isMy ? 'ကြိယာ/နာမဝိသေသန' : 'Kata Kerja / Sifat'}</div>
                  <div>• <strong>Objek:</strong> {isMy ? 'ကံ (ခံရသူ/အရာဝတ္ထု)' : 'Objek / Sasaran'}</div>
                  <div>• <strong>Keterangan:</strong> {isMy ? 'အခြေအနေပြ (အချိန်/နေရာ)' : 'Keterangan Tempat/Waktu'}</div>
                </div>
              </div>

              {/* Ask AI Tutor CTA */}
              {onAskAi && (
                <div className="pt-1 flex justify-center">
                  <button
                    type="button"
                    onClick={() => {
                      const prompt = isMy
                        ? `အင်ဒိုနီးရှားစကားလုံး "${item.target_text}" နှင့် ဥပမာဝါကျ "${item.example_target || item.target_text}" ၏ ဝါကျဖွဲ့စည်းပုံ (Subjek, Predikat, Objek, Keterangan) ကို မြန်မာဘာသာ (S-O-V) နှင့် အစီအစဉ် ပြောင်းပြန်ဖြစ်ပုံကို အသေးစိတ် ခွဲခြမ်းပြပေးပါ။ (JLPT သို့မဟုတ် ဂျပန်စာ မပါဝင်ရပါ)`
                        : isEn
                        ? `Explain the SPO vs SOV word order for Indonesian word "${item.target_text}" and sentence "${item.example_target || item.target_text}" compared to Burmese. Do not mention JLPT.`
                        : `Jelaskan analisis pola kalimat S-P-O kosakata "${item.target_text}" dan kalimat "${item.example_target || item.target_text}" beserta perbandingannya dengan bahasa berpola SOV.`;
                      const displayText = isMy
                        ? `"${item.target_text}" ဝါကျဖွဲ့စည်းပုံ (S-P-O vs S-O-V) ခွဲခြမ်းစိတ်ဖြာချက်`
                        : isEn
                        ? `Sentence Structure (SPO vs SOV): "${item.target_text}"`
                        : `Analisis Kalimat SPO: "${item.target_text}"`;
                      stopAudio();
                      onClose();
                      onAskAi(prompt, displayText);
                    }}
                    className="w-full py-2.5 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center justify-center space-x-2 shadow-xs transition-colors cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    <span>
                      {isMy
                        ? 'AI အား S-P-O ဝါကျဖွဲ့စည်းပုံ အသေးစိတ် မေးမြန်းရန်'
                        : isEn
                        ? 'Ask AI to Analyze SPO Word Order'
                        : 'Tanya AI Bedah Struktur SPO'}
                    </span>
                  </button>
                </div>
              )}
            </div>
          )}

          {/* S-O-V vs S-P-O Breakdown for Myanmar Track */}
          {targetLanguage === 'my' && (
            <div className="bg-gradient-to-br from-emerald-50/70 via-white to-emerald-50/40 dark:from-[#1E293B]/70 dark:via-[#151D2E] dark:to-[#1E293B]/40 border border-emerald-200/80 dark:border-emerald-900/50 rounded-2xl p-4 space-y-3 shadow-xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-xs shadow-2xs">
                    <Layers className="w-3.5 h-3.5" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-extrabold text-emerald-950 dark:text-emerald-200">
                    Perbedaan Struktur Kalimat (S-O-V vs S-P-O)
                  </h4>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300">
                  Kata Kerja di Akhir
                </span>
              </div>
              <p className="text-[11px] text-stone-700 dark:text-stone-300 leading-relaxed">
                Dalam Bahasa Myanmar, kalimat menggunakan urutan <strong>S - O - V (Subjek ➔ Objek ➔ Predikat)</strong>. Berbeda dengan Bahasa Indonesia (S-P-O), kata kerja selalu berada di akhir kalimat!
              </p>
              {onAskAi && (
                <div className="pt-1 flex justify-center">
                  <button
                    type="button"
                    onClick={() => {
                      const prompt = `Jelaskan kaidah urutan kalimat SOV dalam Bahasa Myanmar untuk kata "${item.target_text}". Berikan contoh kalimat praktis dan bandingkan dengan susunan SPO bahasa Indonesia.`;
                      const displayText = `Pola Kalimat SOV Myanmar: "${item.target_text}"`;
                      stopAudio();
                      onClose();
                      onAskAi(prompt, displayText);
                    }}
                    className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center space-x-2 shadow-xs transition-colors cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    <span>Tanya AI Bedah Pola SOV Bahasa Myanmar</span>
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer Close Button */}
        <div className="p-4 border-t border-[#EFEAE2] dark:border-[#232F46]/70 flex justify-center bg-stone-50/50 dark:bg-[#121824]">
          <button
            onClick={() => {
              stopAudio();
              onClose();
            }}
            className="w-full py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 dark:bg-[#1E293B] dark:hover:bg-[#28354D] text-stone-700 dark:text-slate-200 font-bold text-xs transition-colors cursor-pointer"
          >
            {closeLabel}
          </button>
        </div>
      </div>
    </div>
  );
};
