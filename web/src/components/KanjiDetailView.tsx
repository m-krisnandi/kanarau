import React, { useEffect, useState, useRef } from 'react';
import type { Kanji, Kotoba } from '@/types';
import { jishoApi } from '@/services/api';
import { X, ArrowLeft, Volume2, Square, Play } from 'lucide-react';
import { useTranslation } from '@/stores/languageStore';
import { localizeKanji, localizeKotoba } from '@/locales/vocabularyTranslations';
import { KanjiStrokeAnimator } from '@/components/kanji/KanjiStrokeAnimator';
import { playNaturalJapaneseVoice, stopAudio } from '@/utils/audioPlayer';

interface Props {
  character: string;
  onClose: () => void;
  onSelectKotoba?: (kotoba: Kotoba) => void;
}

export const KanjiDetailView: React.FC<Props> = ({ character, onClose, onSelectKotoba }) => {
  const { t, language } = useTranslation();
  const [rawKanji, setKanji] = useState<Kanji | null>(null);
  const kanji = rawKanji ? localizeKanji(rawKanji, language) : null;
  const [relatedKotobas, setRelatedKotobas] = useState<Kotoba[]>([]);
  const [loading, setLoading] = useState(true);
  const [playingReading, setPlayingReading] = useState<string | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  const autoPlayCancelRef = useRef(false);
  const autoPlayTimerRef = useRef<any>(null);

  const stopAllAudio = () => {
    autoPlayCancelRef.current = true;
    if (autoPlayTimerRef.current) {
      clearTimeout(autoPlayTimerRef.current);
      autoPlayTimerRef.current = null;
    }
    stopAudio();
    setIsAutoPlaying(false);
    setPlayingReading(null);
  };

  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      stopAllAudio();
      document.body.style.overflow = original;
    };
  }, []);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        const res = await jishoApi.search(character, language);
        const match = res.data.find(
          (item) => item.type === 'kanji' && (item.item as Kanji).character === character
        );
        if (match) {
          const k = match.item as Kanji;
          setKanji(k);
          // Load related words
          const relRes = await jishoApi.search(character, language);
          const kotobas = relRes.data
            .filter((item) => item.type === 'kotoba')
            .map((item) => item.item as Kotoba);
          setRelatedKotobas(kotobas);
        } else {
          setKanji({
            id: 'kanji_' + character,
            character,
            jlpt_level: 'N2',
            stroke_count: 0,
            on_readings: [],
            kun_readings: [],
            meanings: [character],
            radical: character,
            radical_meaning: `Karakter kanji ${character}`,
            related_kotoba_ids: [],
          });
        }
      } catch {
        setKanji({
          id: 'kanji_' + character,
          character,
          jlpt_level: 'N2',
          stroke_count: 0,
          on_readings: [],
          kun_readings: [],
          meanings: [character],
          radical: character,
          radical_meaning: `Karakter kanji ${character}`,
          related_kotoba_ids: [],
        });
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [character, language]);

  const playReadingAudio = (reading: string) => {
    stopAllAudio();

    // Clean okurigana dots and dashes e.g. "めぐ・む" -> "めぐむ", "さず・ける" -> "さずける"
    const textToSpeak = reading.replace(/[・\.\-]/g, '').trim();
    if (!textToSpeak) return;

    setPlayingReading(reading);
    playNaturalJapaneseVoice(
      textToSpeak,
      () => setPlayingReading(reading),
      () => setPlayingReading(null),
      'female'
    );
  };

  const playAllReadingsSequentially = () => {
    if (isAutoPlaying) {
      stopAllAudio();
      return;
    }

    const sequence: { raw: string; spoken: string; type: 'on' | 'kun' }[] = [];
    kanji?.on_readings?.forEach((r) => {
      const clean = r.replace(/[・\.\-]/g, '').trim();
      if (clean && clean !== '-') sequence.push({ raw: r, spoken: clean, type: 'on' });
    });
    kanji?.kun_readings?.forEach((r) => {
      const clean = r.replace(/[・\.\-]/g, '').trim();
      if (clean && clean !== '-') sequence.push({ raw: r, spoken: clean, type: 'kun' });
    });

    if (sequence.length === 0) return;

    stopAllAudio();
    autoPlayCancelRef.current = false;
    setIsAutoPlaying(true);

    const playStep = (idx: number) => {
      if (autoPlayCancelRef.current || idx >= sequence.length) {
        setIsAutoPlaying(false);
        setPlayingReading(null);
        return;
      }
      const current = sequence[idx];
      if (!current) {
        setIsAutoPlaying(false);
        setPlayingReading(null);
        return;
      }

      setPlayingReading(current.raw);
      playNaturalJapaneseVoice(
        current.spoken,
        () => setPlayingReading(current.raw),
        () => {
          if (autoPlayCancelRef.current) {
            setIsAutoPlaying(false);
            setPlayingReading(null);
            return;
          }
          if (idx + 1 < sequence.length) {
            autoPlayTimerRef.current = setTimeout(() => {
              if (!autoPlayCancelRef.current) {
                playStep(idx + 1);
              }
            }, 450);
          } else {
            setIsAutoPlaying(false);
            setPlayingReading(null);
          }
        },
        'female'
      );
    };

    playStep(0);
  };

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          stopAllAudio();
          onClose();
        }
      }}
      className="fixed inset-0 z-50 bg-black/60 dark:bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-[#151D2E] border border-[#EFEAE2] dark:border-[#232F46] w-full max-w-md rounded-2xl shadow-xl overflow-hidden animate-slide-up max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="px-5 py-3 border-b border-[#EFEAE2] dark:border-[#232F46] flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => {
                stopAllAudio();
                onClose();
              }}
              className="p-1 rounded-full text-stone-500 hover:text-stone-800 dark:text-zinc-400 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-[#1E293B] transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h3 className="font-semibold text-stone-900 dark:text-white text-sm">{t.kanjiDetail.title}</h3>
          </div>
          <button
            onClick={() => {
              stopAllAudio();
              onClose();
            }}
            className="p-1 rounded-full text-stone-400 hover:text-stone-700 dark:text-zinc-400 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-[#1E293B] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {loading ? (
            <div className="text-center py-10 text-stone-400 dark:text-zinc-500 text-sm">{t.kanjiDetail.loading}</div>
          ) : kanji ? (
            <>
              {/* Kanji Box & Stroke Animator */}
              <div className="flex flex-col items-center">
                <KanjiStrokeAnimator
                  character={kanji.character}
                  fallbackStrokeCount={kanji.stroke_count}
                  onStrokeCountDetected={(count) => {
                    if (!rawKanji?.stroke_count || rawKanji.stroke_count === 0) {
                      setKanji((prev) => (prev ? { ...prev, stroke_count: count } : null));
                    }
                  }}
                />

                <div className="mt-3 text-center">
                  <div className="flex items-center justify-center space-x-2">
                    <h2 className="text-xl font-bold text-stone-900 dark:text-white">
                      {kanji.meanings ? kanji.meanings.join(', ') : (language === 'my' ? 'အဓိပ္ပာယ်' : language === 'en' ? 'meaning' : 'makna')}
                    </h2>
                    <button
                      onClick={playAllReadingsSequentially}
                      className={`p-1.5 rounded-full transition-all cursor-pointer ${
                        isAutoPlaying
                          ? 'bg-indigo-600 text-white shadow-xs scale-105'
                          : 'text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 dark:hover:bg-indigo-950/60'
                      }`}
                      title={isAutoPlaying ? ((t.kanjiDetail as any).stopAudioTooltip || "Hentikan audio") : ((t.kanjiDetail as any).playAllTooltip || "Putar berurutan semua bacaan On & Kun")}
                    >
                      {isAutoPlaying ? (
                        <Square className="w-4 h-4 fill-current animate-pulse" />
                      ) : (
                        <Volume2 className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                  <div className="flex items-center justify-center space-x-2 mt-1">
                    <span className="text-xs px-2 py-0.5 bg-stone-100 dark:bg-[#1E293B] text-stone-600 dark:text-zinc-300 rounded-md font-medium">
                      {t.kanjiDetail.strokes(kanji.stroke_count)}
                    </span>
                    <span className="text-xs px-2 py-0.5 bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 rounded-md font-medium border border-indigo-100 dark:border-indigo-800/70">
                      {kanji.jlpt_level || 'N2'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Cara Baca with Auto Play & Individual Audio Playback */}
              <div className="bg-stone-50 dark:bg-[#0F172A] rounded-xl p-4 border border-[#EFEAE2] dark:border-[#232F46] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-stone-500 dark:text-zinc-400 uppercase tracking-wider block">
                    {t.kanjiDetail.readings}
                  </span>
                  <button
                    onClick={playAllReadingsSequentially}
                    className={`inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold transition-all cursor-pointer ${
                      isAutoPlaying
                        ? 'bg-indigo-600 text-white shadow-xs'
                        : 'bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/60'
                    }`}
                  >
                    {isAutoPlaying ? (
                      <>
                        <Square className="w-3 h-3 fill-current" />
                        <span>{(t.kanjiDetail as any).stopAudio || "Hentikan"}</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3 h-3 fill-current" />
                        <span>{(t.kanjiDetail as any).playAll || "Putar Semua"}</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="space-y-2.5">
                  {/* On Readings */}
                  <div className="flex items-start gap-2.5 text-sm">
                    <span className="text-xs font-bold text-indigo-600 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/70 px-2 py-1 rounded text-center shrink-0">
                      On
                    </span>
                    <div className="flex flex-wrap items-center gap-1.5 flex-1 pt-0.5">
                      {kanji.on_readings && kanji.on_readings.length > 0 && kanji.on_readings[0] !== '-' ? (
                        kanji.on_readings.map((r, idx) => {
                          const isCurrentlyPlaying = playingReading === r;
                          return (
                            <button
                              key={`on_${idx}`}
                              onClick={() => playReadingAudio(r)}
                              className={`inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-lg border text-xs font-jp font-medium transition-all cursor-pointer ${
                                isCurrentlyPlaying
                                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs scale-105 ring-2 ring-indigo-300'
                                  : 'bg-white dark:bg-[#1E293B] text-stone-800 dark:text-zinc-200 border-stone-200 dark:border-stone-700 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400'
                              }`}
                              title={`${t.common.audioListen} ${t.common.onReading} ${r}`}
                            >
                              <span>{r}</span>
                              <Volume2 className={`w-3.5 h-3.5 ${isCurrentlyPlaying ? 'text-white animate-pulse' : 'text-indigo-500 opacity-70'}`} />
                            </button>
                          );
                        })
                      ) : (
                        <span className="font-jp text-stone-400 text-xs">-</span>
                      )}
                    </div>
                  </div>

                  {/* Kun Readings */}
                  <div className="flex items-start gap-2.5 text-sm">
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/70 px-2 py-1 rounded text-center shrink-0">
                      Kun
                    </span>
                    <div className="flex flex-wrap items-center gap-1.5 flex-1 pt-0.5">
                      {kanji.kun_readings && kanji.kun_readings.length > 0 && kanji.kun_readings[0] !== '-' ? (
                        kanji.kun_readings.map((r, idx) => {
                          const isCurrentlyPlaying = playingReading === r;
                          return (
                            <button
                              key={`kun_${idx}`}
                              onClick={() => playReadingAudio(r)}
                              className={`inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-lg border text-xs font-jp font-medium transition-all cursor-pointer ${
                                isCurrentlyPlaying
                                  ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs scale-105 ring-2 ring-emerald-300'
                                  : 'bg-white dark:bg-[#1E293B] text-stone-800 dark:text-zinc-200 border-stone-200 dark:border-stone-700 hover:border-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-400'
                              }`}
                              title={`${t.common.audioListen} ${t.common.kunReading} ${r}`}
                            >
                              <span>{r}</span>
                              <Volume2 className={`w-3.5 h-3.5 ${isCurrentlyPlaying ? 'text-white animate-pulse' : 'text-emerald-500 opacity-70'}`} />
                            </button>
                          );
                        })
                      ) : (
                        <span className="font-jp text-stone-400 text-xs">-</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Radical / Bushu */}
              {kanji.radical && (
                <div className="bg-emerald-50/40 dark:bg-emerald-950/20 rounded-xl p-4 border border-emerald-100/80 dark:border-emerald-900/40">
                  <span className="text-[11px] font-bold text-emerald-800 dark:text-emerald-400 uppercase tracking-wider block mb-1">
                    {t.kanjiDetail.radical}
                  </span>
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl font-jp font-bold text-emerald-900 dark:text-emerald-300">
                      {kanji.radical}
                    </span>
                    <div className="text-xs text-stone-700 dark:text-zinc-300">
                      <p className="font-medium text-stone-900 dark:text-white">{kanji.radical_meaning}</p>
                      <p className="text-stone-500 dark:text-zinc-400 text-[11px]">{t.kanjiDetail.radicalDesc}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Kotoba in your curriculum */}
              <div>
                <span className="text-[11px] font-bold text-stone-500 dark:text-zinc-400 uppercase tracking-wider block mb-2">
                  {t.kanjiDetail.relatedKotoba(relatedKotobas.length)}
                </span>
                <div className="space-y-1.5">
                  {relatedKotobas.length === 0 ? (
                    <p className="text-xs text-stone-400 dark:text-zinc-500">{t.kanjiDetail.noRelated}</p>
                  ) : (
                    relatedKotobas.map((rawK) => {
                      const k = localizeKotoba(rawK, language);
                      return (
                      <div key={k.id}
                        onClick={() => {
                          stopAllAudio();
                          onClose();
                          onSelectKotoba?.(k);
                        }}
                        className="p-2.5 bg-white dark:bg-[#1E293B]/70 border border-[#EFEAE2] dark:border-[#232F46] hover:border-indigo-300 dark:hover:border-indigo-500 rounded-lg flex items-center justify-between cursor-pointer transition-all hover:bg-indigo-50/30 dark:hover:bg-indigo-950/30"
                      >
                        <div>
                          <div className="flex items-baseline space-x-2">
                            <span className="font-jp font-bold text-stone-900 dark:text-white text-sm">
                              {k.kanji || k.hiragana}
                            </span>
                            <span className="font-jp text-xs text-indigo-600 dark:text-indigo-400">
                              {k.hiragana}
                            </span>
                          </div>
                          <p className="text-xs text-stone-600 dark:text-zinc-400 line-clamp-1">{k.meaning}</p>
                        </div>
                        <span className="text-[10px] px-1.5 py-0.5 bg-stone-100 dark:bg-[#0F172A] text-stone-600 dark:text-zinc-300 rounded">
                          {k.jlpt_level}
                        </span>
                      </div>
                    );
                  })
                  )}
                </div>
              </div>
            </>
          ) : null}
        </div>

        {/* Footer */}
        <div className="p-3 bg-stone-50 dark:bg-[#0F172A] border-t border-[#EFEAE2] dark:border-[#232F46] text-center text-[10px] text-stone-400 dark:text-zinc-500">
          {t.kanjiDetail.credits}
        </div>
      </div>
    </div>
  );
};
