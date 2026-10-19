import React, { useState } from 'react';
import { Volume2, Copy, Check, Plus, X, ChevronRight, BookOpen, Sparkles } from 'lucide-react';
import { playNaturalJapaneseVoice } from '@/utils/audioPlayer';
import { useTranslation } from '@/stores/languageStore';
import type { QuickLookupEntry } from '@/utils/quickLookupDictionary';

interface KanjiLookupPopoverProps {
  entry: QuickLookupEntry;
  onClose: () => void;
  onOpenDetail?: (entry: QuickLookupEntry) => void;
  onAskAi?: (word: string) => void;
  position?: { x: number; y: number } | null;
}

export const KanjiLookupPopover: React.FC<KanjiLookupPopoverProps> = ({
  entry,
  onClose,
  onOpenDetail,
  onAskAi,
  position,
}) => {
  const { language } = useTranslation();
  const [copied, setCopied] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [saved, setSaved] = useState(false);

  const meanings = entry.meanings[language] || entry.meanings.id || [];

  const handlePronounce = () => {
    setIsPlaying(true);
    playNaturalJapaneseVoice(
      entry.term,
      () => setIsPlaying(true),
      () => setIsPlaying(false)
    );
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(entry.term);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleBookmark = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-3 sm:p-4 bg-black/40 backdrop-blur-[2px] animate-fade-in"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-sm bg-white dark:bg-[#161D2E] rounded-3xl sm:rounded-2xl border border-stone-200 dark:border-slate-800 shadow-2xl p-5 space-y-3.5 animate-slide-up text-left relative overflow-hidden"
      >
        {/* Top Header Row */}
        <div className="flex items-center justify-between border-b border-stone-100 dark:border-slate-800 pb-2.5">
          <div className="flex items-center space-x-2">
            <h2 className="text-2xl sm:text-3xl font-bold font-jp text-blue-600 dark:text-blue-400 tracking-tight">
              {entry.term}
            </h2>
          </div>

          <div className="flex items-center space-x-1.5">
            {/* Bookmark / Add button */}
            <button
              onClick={handleBookmark}
              className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
                saved
                  ? 'bg-emerald-50 text-emerald-600 border-emerald-300'
                  : 'bg-stone-50 hover:bg-stone-100 text-stone-600 border-stone-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700'
              }`}
              title={saved ? (language === "my" ? "မှတ်သားပြီးပါပြီ" : language === "en" ? "Saved" : "Tersimpan") : (language === "my" ? "ကျက်မှတ်ရန် သိမ်းပါ" : language === "en" ? "Save to study list" : "Simpan ke daftar hafalan")}
            >
              {saved ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
            </button>

            {/* Audio Pronounce Button */}
            <button
              onClick={handlePronounce}
              className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
                isPlaying
                  ? 'bg-blue-600 text-white border-blue-600 animate-pulse'
                  : 'bg-stone-50 hover:bg-stone-100 text-stone-600 border-stone-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700'
              }`}
              title="Dengar pengucapan native"
            >
              <Volume2 className="w-4 h-4" />
            </button>

            {/* Copy Button */}
            <button
              onClick={handleCopy}
              className="w-8 h-8 rounded-full bg-stone-50 hover:bg-stone-100 text-stone-600 border border-stone-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700 flex items-center justify-center transition-all cursor-pointer"
              title="Salin kata"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-500 hover:text-stone-800 flex items-center justify-center transition-all cursor-pointer ml-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Reading Badge Pill */}
        <div className="flex items-center space-x-2">
          <span className="px-3 py-1 rounded-full text-xs font-bold font-jp bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200 dark:border-blue-900">
            {entry.reading}
          </span>
          {entry.romaji && (
            <span className="text-[11px] text-stone-400 font-mono">
              {entry.romaji}
            </span>
          )}
        </div>

        {/* Kanji Readings Info if single kanji */}
        {entry.kanjiInfo && (
          <div className="p-2.5 bg-stone-50 dark:bg-slate-900/60 rounded-xl border border-stone-200/80 dark:border-slate-800 text-[11px] space-y-1">
            <div className="flex items-center justify-between text-stone-600 dark:text-slate-300">
              <span>{language === "my" ? "ရေးဆွဲချက်-" : language === "en" ? "Strokes:" : "Goresan:"} <strong>{entry.kanjiInfo.strokes || '-'}</strong></span>
              {entry.kanjiInfo.radical && (
                <span>{language === "my" ? "အရင်းခံ-" : language === "en" ? "Radical:" : "Radikal:"} <strong>{entry.kanjiInfo.radical}</strong></span>
              )}
            </div>
            {entry.kanjiInfo.onReadings && entry.kanjiInfo.onReadings.length > 0 && (
              <p className="text-stone-600 dark:text-slate-300">
                On: <span className="font-jp font-semibold text-blue-700 dark:text-blue-400">{entry.kanjiInfo.onReadings.join(', ')}</span>
              </p>
            )}
            {entry.kanjiInfo.kunReadings && entry.kanjiInfo.kunReadings.length > 0 && (
              <p className="text-stone-600 dark:text-slate-300">
                Kun: <span className="font-jp font-semibold text-emerald-700 dark:text-emerald-400">{entry.kanjiInfo.kunReadings.join(', ')}</span>
              </p>
            )}
          </div>
        )}

        {/* Numbered Meanings / Definitions List */}
        <div className="space-y-1.5 py-0.5">
          {meanings.map((m, idx) => (
            <div key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-stone-800 dark:text-slate-200 leading-snug">
              <span className="font-bold text-stone-400 shrink-0 text-xs mt-0.5">
                {idx + 1}.
              </span>
              <span className="font-medium">{m}</span>
            </div>
          ))}
        </div>

        {/* Footer Bar */}
        <div className="pt-2 border-t border-stone-100 dark:border-slate-800 flex items-center justify-between">
          <span className="text-[10px] font-bold text-stone-400 italic">
            Kanarau Jisho
          </span>

          <div className="flex items-center space-x-2">
            {onAskAi && (
              <button
                onClick={() => {
                  onClose();
                  onAskAi(entry.term);
                }}
                className="inline-flex items-center space-x-1 text-xs font-bold text-purple-700 bg-purple-50 hover:bg-purple-100 dark:bg-purple-950/60 dark:text-purple-300 px-2.5 py-1 rounded-full border border-purple-200 dark:border-purple-800 transition-colors cursor-pointer"
                title={language === 'my' ? 'AI အား မေးမြန်းပါ' : language === 'en' ? 'Ask AI' : 'Tanya AI'}
              >
                <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                <span>AI</span>
              </button>
            )}

            {onOpenDetail && (
              <button
                onClick={() => {
                  onClose();
                  onOpenDetail(entry);
                }}
                className="inline-flex items-center space-x-1 text-xs font-bold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/60 dark:text-indigo-300 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-800 transition-colors cursor-pointer"
              >
                <span>{language === 'my' ? 'အသေးစိတ်' : language === 'en' ? 'Detail' : 'Detail'}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
