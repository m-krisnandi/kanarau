import React, { useState, useEffect } from 'react';
import type { Kotoba } from '@/types';
import { Volume2, X, PenTool, Layers } from 'lucide-react';
import { playNaturalJapaneseVoice, stopAudio } from '@/utils/audioPlayer';
import {
  getWordConjugations,
  getRelevantKotoba,
} from '@/utils/japaneseConjugator';
import { useTranslation } from '@/stores/languageStore';
import { localizeKotoba, RELEVANT_TRANSLATIONS } from '@/locales/vocabularyTranslations';

interface Props {
  kotoba: Kotoba | null;
  onClose: () => void;
  onViewKanji?: (kanjiChar: string) => void;
}

const getLocalizedPartOfSpeech = (posLabel: string, lang: 'id' | 'en' | 'my') => {
  const map: Record<string, Record<string, string>> = {
    'Kata benda (Nomina)': {
      id: 'Kata benda (Nomina)',
      en: 'Noun',
      my: 'နာမ် (Noun)',
    },
    'Kata benda': {
      id: 'Kata benda',
      en: 'Noun',
      my: 'နာမ် (Noun)',
    },
    'Kata benda + する': {
      id: 'Kata benda + する',
      en: 'Noun + する (Suru-verb)',
      my: 'နာမ် + する (Suru ကြိယာ)',
    },
    'Kata sifat -i': {
      id: 'Kata sifat -i',
      en: 'i-Adjective',
      my: 'i-နာမဝိသေသန',
    },
    'Kata sifat -na': {
      id: 'Kata sifat -na',
      en: 'na-Adjective',
      my: 'na-နာမဝိသေသန',
    },
    'Kata kerja Golongan 2 (Ichidan)': {
      id: 'Kata kerja Golongan 2 (Ichidan)',
      en: 'Group 2 Verb (Ichidan)',
      my: 'အုပ်စု ၂ ကြိယာ (Ichidan)',
    },
    'Kata kerja Golongan 1 (Godan)': {
      id: 'Kata kerja Golongan 1 (Godan)',
      en: 'Group 1 Verb (Godan)',
      my: 'အုပ်စု ၁ ကြိယာ (Godan)',
    },
  };
  return map[posLabel]?.[lang] || posLabel;
};

const getLocalizedConjugationLabel = (label: string, lang: 'id' | 'en' | 'my') => {
  const map: Record<string, Record<string, string>> = {
    'Bentuk kamus': {
      id: 'Bentuk kamus',
      en: 'Dictionary form',
      my: 'အဘိဓာန်ပုံစံ',
    },
    'Bentuk ます': {
      id: 'Bentuk ます',
      en: 'Masu form',
      my: 'ます ပုံစံ',
    },
    'Bentuk て': {
      id: 'Bentuk て',
      en: 'Te form',
      my: 'て ပုံစံ',
    },
    'Bentuk ない': {
      id: 'Bentuk ない',
      en: 'Nai form',
      my: 'ない ပုံစံ',
    },
    'Bentuk です': {
      id: 'Bentuk です',
      en: 'Desu form',
      my: 'です ပုံစံ',
    },
    'Bentuk sopan': {
      id: 'Bentuk sopan',
      en: 'Polite form',
      my: 'ယဉ်ကျေးသော ပုံစံ',
    },
    'Partikel kepemilikan': {
      id: 'Partikel kepemilikan',
      en: 'Possessive particle',
      my: 'ပိုင်ဆိုင်မှု ဝိဘတ်',
    },
    'Bentuk dasar': {
      id: 'Bentuk dasar',
      en: 'Base form',
      my: 'အခြေခံပုံစံ',
    },
    'Menyambung nomina': {
      id: 'Menyambung nomina',
      en: 'Noun connection',
      my: 'နာမ်ဆက်သွယ်မှု',
    },
  };
  return map[label]?.[lang] || label;
};

const getLocalizedRelationType = (type: string, lang: 'id' | 'en' | 'my') => {
  const map: Record<string, Record<string, string>> = {
    'Sinonim': {
      id: 'SINONIM',
      en: 'SYNONYM',
      my: 'အဓိပ္ပာယ်တူ',
    },
    'Lawan Kata': {
      id: 'LAWAN KATA',
      en: 'ANTONYM',
      my: 'ဆန့်ကျင်ဘက်',
    },
    'Asosiasi': {
      id: 'ASOSIASI',
      en: 'ASSOCIATION',
      my: 'ဆက်စပ်စကားလုံး',
    },
    'Collocation': {
      id: 'COLLOCATION',
      en: 'COLLOCATION',
      my: 'တွဲစပ်စကားလုံး',
    },
  };
  return map[type]?.[lang] || type.toUpperCase();
};

export const KotobaDetailModal: React.FC<Props> = ({ kotoba, onClose, onViewKanji }) => {
  const { t, language } = useTranslation();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPlayingSentence, setIsPlayingSentence] = useState(false);
  const [selectedVoice, setSelectedVoice] = useState<'female' | 'child' | 'male'>('female');
  const [showKanjiBreakdown, setShowKanjiBreakdown] = useState(false);

  useEffect(() => {
    return () => {
      stopAudio();
    };
  }, []);

  if (!kotoba) return null;
  const currentKotoba = localizeKotoba(kotoba, language);

  const playAudio = (voice?: 'female' | 'child' | 'male') => {
    const v = voice || selectedVoice;
    const textToSpeak = currentKotoba.kanji || currentKotoba.hiragana;
    playNaturalJapaneseVoice(
      textToSpeak,
      () => setIsPlaying(true),
      () => setIsPlaying(false),
      v
    );
  };

  const playSentenceAudio = () => {
    if (!currentKotoba.example_sentence) return;
    playNaturalJapaneseVoice(
      currentKotoba.example_sentence,
      () => setIsPlayingSentence(true),
      () => setIsPlayingSentence(false),
      selectedVoice
    );
  };

  // Extract individual kanji characters from currentKotoba.kanji
  const kanjiChars = currentKotoba.kanji
    ? Array.from(new Set(currentKotoba.kanji.match(/[\u4e00-\u9faf]/g) || []))
    : [];

  // Generate conjugation table & part of speech
  const conjugations = getWordConjugations(
    currentKotoba.kanji,
    currentKotoba.hiragana,
    currentKotoba.notes || currentKotoba.part_of_speech
  );

  // Get relevant collocation / synonym
  const relevantItem = getRelevantKotoba(
    currentKotoba.kanji,
    currentKotoba.hiragana,
    currentKotoba.notes
  );

  // Render sentence with ruby furigana
  const renderSentenceWithRuby = () => {
    const sentence = currentKotoba.example_sentence || '';
    if (!sentence) return null;

    // Check if sentence already has furigana parens like "この整理(せいり)こそ..."
    const hasParensFurigana = /([\u4E00-\u9FAF]+)[\(（]([\u3040-\u309F]+)[\)）]/.test(sentence);

    if (hasParensFurigana) {
      const parts = sentence.split(/([\u4E00-\u9FAF]+[\(（][\u3040-\u309F]+[\)）])/g);
      return parts.map((part, idx) => {
        const match = part.match(/([\u4E00-\u9FAF]+)[\(（]([\u3040-\u309F]+)[\)）]/);
        if (match) {
          return (
            <ruby key={idx} className="ruby-text">
              {match[1]}
              <rt className="text-[10px] text-stone-500 dark:text-zinc-400 font-sans tracking-tight">{match[2]}</rt>
            </ruby>
          );
        }
        return <span key={idx}>{part}</span>;
      });
    }

    // Common furigana dictionary for sentence components
    const sentenceFuriganaMap: Record<string, string> = {
      '決める': 'きめる',
      '決め': 'きめ',
      '建物': 'たてもの',
      '間隔': 'かんかく',
      '焦げる': 'こげる',
      '防止': 'ぼうし',
      '事故': 'じこ',
      '煙': 'けむり',
      '部屋': 'へや',
      '充満': 'じゅうまん',
      '一部': 'いちぶ',
      '給料': 'きゅうりょう',
      '貯金': 'ちょきん',
      '誤り': 'あやまり',
      '計算': 'けいさん',
      '重なる': 'かさなる',
      '不運': 'ふうん',
      '歩き出す': 'あるきだす',
      '信号': 'しんごう',
      '青': 'あお',
      '出産': 'しゅっさん',
      '無事': 'ぶじ',
      '時間帯': 'じかんたい',
      '混雑': 'こんざつ',
      '避ける': 'さける',
      '瞬間': 'しゅんかん',
      '雷': 'かみなり',
      '短時間': 'たんじかん',
      '長時間': 'ちょうじかん',
    };

    if (currentKotoba.kanji && currentKotoba.hiragana) {
      sentenceFuriganaMap[currentKotoba.kanji] = currentKotoba.hiragana;
    }

    const dictKeys = Object.keys(sentenceFuriganaMap).sort((a, b) => b.length - a.length);
    const regex = new RegExp(`(${dictKeys.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'g');

    const parts = sentence.split(regex);
    return parts.map((part, idx) => {
      if (sentenceFuriganaMap[part]) {
        return (
          <ruby key={idx} className="ruby-text font-jp font-semibold">
            {part}
            <rt className="text-[10px] text-stone-500 dark:text-zinc-400 font-sans tracking-tight">{sentenceFuriganaMap[part]}</rt>
          </ruby>
        );
      }
      return <span key={idx}>{part}</span>;
    });
  };

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          stopAudio();
          onClose();
        }
      }}
      className="fixed inset-0 z-50 bg-black/60 dark:bg-black/80 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 animate-fade-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-[#121824] border border-[#EFEAE2] dark:border-[#232F46] text-stone-900 dark:text-[#F8FAFC] w-full max-w-md rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden animate-slide-up max-h-[92vh] flex flex-col"
      >
        {/* Top Minimal Bar */}
        <div className="px-5 pt-3.5 pb-2 flex items-center justify-between border-b border-[#EFEAE2] dark:border-[#232F46]/70">
          <div className="flex items-center space-x-2">
            <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-800/70">
              JLPT {currentKotoba.jlpt_level}
            </span>
            <span className="text-[11px] font-medium text-stone-500 dark:text-zinc-400">
              {getLocalizedPartOfSpeech(conjugations.partOfSpeechLabel, language)}
            </span>
          </div>
          <button
            onClick={() => {
              stopAudio();
              onClose();
            }}
            className="w-7 h-7 rounded-full bg-stone-100 hover:bg-stone-200 dark:bg-[#1E293B] dark:hover:bg-[#28354D] text-stone-500 hover:text-stone-800 dark:text-zinc-400 dark:hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4 no-scrollbar">
          {/* Main Word Header */}
          <div className="text-center space-y-1 pt-1 pb-1">
            <h2 className="text-4xl sm:text-5xl font-extrabold font-jp tracking-wide text-stone-900 dark:text-white">
              {currentKotoba.kanji || currentKotoba.hiragana}
            </h2>
            <p className="text-sm sm:text-base font-bold text-sky-600 dark:text-sky-400 font-jp tracking-wider pt-0.5">
              {currentKotoba.hiragana}
            </p>
            <p className="text-lg sm:text-xl font-bold text-stone-800 dark:text-zinc-100 leading-snug pt-1">
              {currentKotoba.meaning}
            </p>
          </div>

          {/* CATATAN Section */}
          {currentKotoba.notes && (
            <div className="space-y-1 pt-1">
              <span className="text-[11px] font-bold text-stone-400 dark:text-zinc-400 uppercase tracking-wider block">
                {t.kotobaDetail.notes}
              </span>
              <p className="text-sm text-stone-700 dark:text-zinc-200 leading-relaxed font-normal">
                {currentKotoba.notes}
              </p>
            </div>
          )}

          {/* CONTOH KALIMAT Section */}
          {currentKotoba.example_sentence && (
            <div className="space-y-1.5 pt-1">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-stone-400 dark:text-zinc-400 uppercase tracking-wider">
                  {t.kotobaDetail.exampleSentence}
                </span>
                <button
                  onClick={playSentenceAudio}
                  disabled={isPlayingSentence}
                  className="text-[11px] font-bold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 flex items-center space-x-1 cursor-pointer transition-colors"
                >
                  <Volume2 className={`w-3.5 h-3.5 ${isPlayingSentence ? 'animate-pulse text-sky-500' : ''}`} />
                  <span>{t.kotobaDetail.listenSentence}</span>
                </button>
              </div>

              <div className="bg-stone-50 dark:bg-[#182234] p-3.5 rounded-2xl border border-stone-200/80 dark:border-[#232F46] space-y-1.5">
                <p className="font-jp text-base leading-relaxed text-stone-900 dark:text-zinc-100">
                  {renderSentenceWithRuby()}
                </p>
                {currentKotoba.example_sentence_meaning && (
                  <p className="text-xs text-stone-500 dark:text-zinc-400 leading-relaxed pt-0.5">
                    {currentKotoba.example_sentence_meaning}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* KOTOBA RELEVAN Section */}
          {relevantItem && (
            <div className="space-y-1.5 pt-1">
              <span className="text-[11px] font-bold text-stone-400 dark:text-zinc-400 uppercase tracking-wider block">
                {t.kotobaDetail.relevantWords(getLocalizedRelationType(relevantItem.relationType, language))}
              </span>

              <div className="bg-stone-50 dark:bg-[#182234] p-3 rounded-2xl border border-stone-200/80 dark:border-[#232F46] space-y-0.5">
                <div className="flex items-baseline space-x-2">
                  <span className="font-jp font-bold text-sm sm:text-base text-stone-900 dark:text-white">
                    {relevantItem.word}
                  </span>
                  <span className="font-jp text-xs text-sky-600 dark:text-sky-400">
                    ({relevantItem.reading})
                  </span>
                </div>
                <p className="text-xs text-stone-600 dark:text-zinc-400">
                  {RELEVANT_TRANSLATIONS[relevantItem.meaning]?.[language] || relevantItem.meaning}
                </p>
              </div>
            </div>
          )}

          {/* Conjugation Table Box */}
          {conjugations.forms.length > 0 && (
            <div className="bg-stone-50 dark:bg-[#182234] rounded-2xl p-3.5 border border-stone-200/80 dark:border-[#232F46] divide-y divide-stone-200/70 dark:divide-[#232F46]/60 text-xs">
              {conjugations.forms.map((item, idx) => (
                <div key={idx} className="py-2 first:pt-0 last:pb-0 flex items-center justify-between">
                  <span className="text-stone-500 dark:text-zinc-400 font-medium">
                    {getLocalizedConjugationLabel(item.label, language)}
                  </span>
                  <span className="font-jp font-bold text-stone-800 dark:text-zinc-200 tracking-wide">
                    {item.form}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Kanji breakdown section */}
          {showKanjiBreakdown && kanjiChars.length > 0 && (
            <div className="space-y-1.5 pt-1 bg-stone-50 dark:bg-[#182234] p-3 rounded-2xl border border-stone-200/80 dark:border-[#232F46]">
              <span className="text-[11px] font-bold text-stone-400 dark:text-zinc-400 uppercase tracking-wider block">
                {t.kotobaDetail.kanjiInWord}
              </span>
              <div className="flex flex-wrap gap-2 pt-1">
                {kanjiChars.map((char) => (
                  <button
                    key={char}
                    onClick={() => {
                      stopAudio();
                      onViewKanji?.(char);
                    }}
                    className="flex items-center space-x-1.5 px-3 py-1.5 bg-white dark:bg-[#1E293B] hover:bg-stone-100 dark:hover:bg-[#28354D] text-stone-700 dark:text-zinc-200 hover:text-stone-900 dark:hover:text-white rounded-xl text-xs font-jp border border-stone-200 dark:border-[#232F46] transition-all cursor-pointer"
                  >
                    <Layers className="w-3.5 h-3.5 text-stone-400 dark:text-zinc-400" />
                    <span className="font-bold text-sm text-sky-600 dark:text-sky-400">{char}</span>
                    <span className="text-[10px] text-stone-400 dark:text-zinc-400">{t.kotobaDetail.detail}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Audio Pronunciation Box Matching Screenshot */}
          <div className="pt-2 flex flex-col items-center justify-center space-y-2.5">
            <button
              onClick={() => playAudio(selectedVoice)}
              disabled={isPlaying}
              className="px-6 py-2.5 bg-sky-50 dark:bg-[#1E293B] hover:bg-sky-100 dark:hover:bg-[#28354D] text-sky-700 dark:text-sky-300 font-bold text-sm rounded-xl border border-sky-200 dark:border-sky-500/30 flex items-center justify-center space-x-2 transition-all shadow-xs active:scale-95 cursor-pointer w-full sm:w-auto"
            >
              <Volume2 className={`w-4 h-4 text-sky-600 dark:text-sky-400 ${isPlaying ? 'animate-pulse' : ''}`} />
              <span className="text-stone-800 dark:text-zinc-100">{t.kotobaDetail.listenPronunciation}</span>
            </button>

            {/* 3 Voice Chips */}
            <div className="flex items-center justify-center space-x-2">
              <button
                onClick={() => {
                  setSelectedVoice('female');
                  playAudio('female');
                }}
                className={`px-4 py-1.5 rounded-full text-xs font-jp font-semibold transition-all cursor-pointer ${
                  selectedVoice === 'female'
                    ? 'bg-sky-600 text-white shadow-xs ring-2 ring-sky-400/40'
                    : 'bg-stone-100 dark:bg-[#1E293B] text-stone-600 dark:text-zinc-400 hover:text-stone-900 dark:hover:text-zinc-200 hover:bg-stone-200 dark:hover:bg-[#28354D] border border-stone-200/60 dark:border-transparent'
                }`}
              >
                {t.kotobaDetail.voiceFemale}
              </button>
              <button
                onClick={() => {
                  setSelectedVoice('child');
                  playAudio('child');
                }}
                className={`px-4 py-1.5 rounded-full text-xs font-jp font-semibold transition-all cursor-pointer ${
                  selectedVoice === 'child'
                    ? 'bg-sky-600 text-white shadow-xs ring-2 ring-sky-400/40'
                    : 'bg-stone-100 dark:bg-[#1E293B] text-stone-600 dark:text-zinc-400 hover:text-stone-900 dark:hover:text-zinc-200 hover:bg-stone-200 dark:hover:bg-[#28354D] border border-stone-200/60 dark:border-transparent'
                }`}
              >
                {t.kotobaDetail.voiceChild}
              </button>
              <button
                onClick={() => {
                  setSelectedVoice('male');
                  playAudio('male');
                }}
                className={`px-4 py-1.5 rounded-full text-xs font-jp font-semibold transition-all cursor-pointer ${
                  selectedVoice === 'male'
                    ? 'bg-sky-600 text-white shadow-xs ring-2 ring-sky-400/40'
                    : 'bg-stone-100 dark:bg-[#1E293B] text-stone-600 dark:text-zinc-400 hover:text-stone-900 dark:hover:text-zinc-200 hover:bg-stone-200 dark:hover:bg-[#28354D] border border-stone-200/60 dark:border-transparent'
                }`}
              >
                {t.kotobaDetail.voiceMale}
              </button>
            </div>
          </div>

          {/* Divider Line */}
          <div className="pt-2 border-t border-stone-200 dark:border-[#232F46]/70" />

          {/* Action Buttons: Lihat per kanji & Tutup (Bagikan tipsmu removed) */}
          <div className="space-y-2 pt-1">
            {kanjiChars.length > 0 && (
              <button
                onClick={() => {
                  if (kanjiChars.length === 1 && kanjiChars[0] && onViewKanji) {
                    stopAudio();
                    onViewKanji(kanjiChars[0]);
                  } else {
                    setShowKanjiBreakdown(!showKanjiBreakdown);
                  }
                }}
                className="w-full py-2.5 bg-stone-50 dark:bg-transparent hover:bg-stone-100 dark:hover:bg-[#1E293B]/60 text-stone-700 dark:text-zinc-300 hover:text-stone-900 dark:hover:text-white rounded-xl text-sm font-semibold border border-stone-200 dark:border-[#334155] flex items-center justify-center space-x-2 transition-all active:scale-[0.99] cursor-pointer"
              >
                <PenTool className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                <span>{t.kotobaDetail.viewPerKanji}</span>
              </button>
            )}

            <button
              onClick={() => {
                stopAudio();
                onClose();
              }}
              className="w-full py-2 text-center text-sm font-medium text-stone-500 dark:text-zinc-400 hover:text-stone-800 dark:hover:text-zinc-200 transition-colors cursor-pointer"
            >
              {t.kotobaDetail.close}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
