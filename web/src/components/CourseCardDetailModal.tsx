import React, { useState, useEffect } from 'react';
import { X, Volume2, Sparkles, BookOpen } from 'lucide-react';
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
}

export const CourseCardDetailModal: React.FC<CourseCardDetailModalProps> = ({
  item,
  onClose,
  targetLanguage,
  myLanguage,
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
            className="w-7 h-7 rounded-full bg-stone-100 hover:bg-stone-200 dark:bg-[#1E293B] dark:hover:bg-[#28354D] text-stone-500 hover:text-stone-800 dark:text-zinc-400 dark:hover:text-white flex items-center justify-center transition-colors cursor-pointer"
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
