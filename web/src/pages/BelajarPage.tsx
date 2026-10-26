import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuthStore } from '@/stores/authStore';
import { useTranslation } from '@/stores/languageStore';
import { localizeKotoba } from '@/locales/vocabularyTranslations';
import { deckApi, progressApi } from '@/services/api';
import type { Deck, Kotoba, JLPTLevel } from '@/types';
import { KotobaDetailModal } from '@/components/KotobaDetailModal';
import { KanjiDetailView } from '@/components/KanjiDetailView';
import { BunpoPracticeView } from '@/components/bunpo/BunpoPracticeView';
import { DokkaiPracticeView } from '@/components/dokkai/DokkaiPracticeView';
import { ChoukaiPracticeView } from '@/components/choukai/ChoukaiPracticeView';
import { getUserKey } from '@/utils/userProgressHelper';
import {
  ArrowLeft,
  ChevronDown,
  ChevronRight,
  Lock,
  Play,
  List,
  BookOpen,
  ArrowUpDown,
  AlertCircle,
  Layers,
  FileText,
  Headphones,
} from 'lucide-react';

export const BelajarPage: React.FC = () => {
  const navigate = useNavigate();
  const { t, language } = useTranslation();
  const user = useAuthStore((state) => state.user);
  const storeLevel = useAuthStore((state) => state.currentLevel);
  const currentLevel = (storeLevel || user?.current_level || 'N2') as JLPTLevel;

  const [searchParams, setSearchParams] = useSearchParams();
  const urlTab = searchParams.get('tab') as 'goi' | 'bunpo' | 'dokkai' | 'choukai' | null;
  const [activeTab, setActiveTab] = useState<'goi' | 'bunpo' | 'dokkai' | 'choukai'>(urlTab || 'goi');

  const handleTabChange = (tab: 'goi' | 'bunpo' | 'dokkai' | 'choukai') => {
    setActiveTab(tab);
    setSearchParams({ tab });
  };

  useEffect(() => {
    if (urlTab && ['goi', 'bunpo', 'dokkai', 'choukai'].includes(urlTab)) {
      setActiveTab(urlTab);
    }
  }, [urlTab]);

  const [decks, setDecks] = useState<Deck[]>([]);
  const [loading, setLoading] = useState(true);
  const [openWeeks, setOpenWeeks] = useState<Record<number, boolean>>({});

  const toggleWeek = (weekNum: number) => {
    setOpenWeeks((prev) => ({ ...prev, [weekNum]: !prev[weekNum] }));
  };
  const [sortAsc, setSortAsc] = useState(true);
  const [lockedAlert, setLockedAlert] = useState<string | null>(null);

  // For viewing words in a deck
  const [activeDeckModal, setActiveDeckModal] = useState<Deck | null>(null);
  const [deckKotobas, setDeckKotobas] = useState<Kotoba[]>([]);
  const [loadingCards, setLoadingCards] = useState(false);
  const [activeKotoba, setActiveKotoba] = useState<Kotoba | null>(null);
  const [activeKanjiChar, setActiveKanjiChar] = useState<string | null>(null);

  const [currentTodayDay, setCurrentTodayDay] = useState<number>(1);
  const [maxUnlockedDay, setMaxUnlockedDay] = useState<number>(1);

  useEffect(() => {
    async function loadCurriculum() {
      setLoading(true);
      try {
        const [decksRes, progressRes, countdownRes] = await Promise.allSettled([
          deckApi.list(currentLevel),
          progressApi.getDeckProgress(),
          progressApi.getJLPTCountdown(),
        ]);

        const progressMap = new Map<string, number>();
        if (progressRes.status === 'fulfilled' && progressRes.value?.data && Array.isArray(progressRes.value.data)) {
          progressRes.value.data.forEach((dp) => {
            progressMap.set(String(dp.deck_id), dp.progress_percent ?? 0);
          });
        }

        const rawDecks: Deck[] = (decksRes.status === 'fulfilled' && decksRes.value?.data) ? decksRes.value.data : [];
        const userKey = getUserKey(user);
        let localSaved: Record<string, any> = {};
        try {
          const direct = localStorage.getItem(`kanarau_local_progress_${userKey}`);
          if (direct && direct !== '{}') {
            localSaved = JSON.parse(direct);
          } else {
            for (let i = 0; i < localStorage.length; i++) {
              const k = localStorage.key(i);
              if (k && k.startsWith('kanarau_local_progress')) {
                const val = localStorage.getItem(k);
                if (val && val !== '{}') {
                  localSaved = JSON.parse(val);
                  break;
                }
              }
            }
          }
        } catch {}

        const enriched = rawDecks.map((d) => {
          let prog = progressMap.has(String(d.id))
            ? progressMap.get(String(d.id))!
            : (d.progress_percent ?? 0);
          const local = localSaved[d.id];
          if (local && local.percent > prog) {
            prog = local.percent;
          }
          return {
            ...d,
            progress_percent: prog,
          };
        });

        setDecks(enriched);

        // Only unlock sequential days:
        // Day 1 is always unlocked.
        // Day N is unlocked ONLY if Day N-1 is completed (100%).
        const highestCompleted = enriched
          .filter((d) => (d.progress_percent || 0) >= 100)
          .reduce((max, d) => Math.max(max, d.day_number), 0);

        const unlockedDayLimit = Math.max(1, highestCompleted + 1);
        setMaxUnlockedDay(unlockedDayLimit);

        // Find active day: the first incomplete day
        const sorted = [...enriched].sort((a, b) => a.day_number - b.day_number);
        const firstIncomplete = sorted.find((d) => (d.progress_percent || 0) < 100);
        const activeDay = firstIncomplete ? firstIncomplete.day_number : (highestCompleted || 1);
        setCurrentTodayDay(activeDay);

        const activeWeek = Math.max(1, Math.ceil(activeDay / 7));
        setOpenWeeks({ [activeWeek]: true });
      } catch (err) {
        console.error('Error loading decks', err);
      } finally {
        setLoading(false);
      }
    }

    loadCurriculum();

    const handleProgressUpdate = () => void loadCurriculum();
    window.addEventListener('kanarau_progress_updated', handleProgressUpdate);
    return () => window.removeEventListener('kanarau_progress_updated', handleProgressUpdate);
  }, [currentLevel, user]);

  const handleOpenDeck = (deck: Deck) => {
    if (deck.day_number > maxUnlockedDay && deck.day_number < 90) {
      setLockedAlert(
        t.belajar.lockedDeckJump(deck.name, maxUnlockedDay, currentLevel)
      );
      return;
    }
    navigate(`/study-session/${deck.id}`);
  };

  const handlePreviewDeck = async (e: React.MouseEvent, deck: Deck) => {
    e.stopPropagation();
    if (deck.day_number > maxUnlockedDay && deck.day_number < 90) {
      setLockedAlert(
        t.belajar.lockedDeckPreview(deck.name, maxUnlockedDay, currentLevel)
      );
      return;
    }

    setActiveDeckModal(deck);
    setLoadingCards(true);
    try {
      const res = await deckApi.getKotoba(deck.id);
      setDeckKotobas(res.data);
    } catch (err) {
      console.error('Error loading deck kotoba', err);
    } finally {
      setLoadingCards(false);
    }
  };

  // Group decks dynamically into weeks of 7 days each
  const standardDecks = decks.filter(
    (d) => d.day_number < 90 && d.jlpt_level === currentLevel
  );
  const foundationDecks = decks.filter(
    (d) => d.day_number >= 90 && d.jlpt_level === currentLevel
  );

  const maxDay = standardDecks.length > 0 ? Math.max(...standardDecks.map((d) => d.day_number)) : 7;
  const totalWeeks = Math.max(1, Math.ceil(maxDay / 7));

  const weekGroups = Array.from({ length: totalWeeks }, (_, idx) => {
    const weekNum = idx + 1;
    const startDay = (weekNum - 1) * 7 + 1;
    const endDay = weekNum * 7;
    const weekDecks = standardDecks.filter(
      (d) => d.day_number >= startDay && d.day_number <= endDay
    );
    const totalWords = weekDecks.reduce((acc, d) => acc + (d.kotoba_count || 0), 0);
    const learnedWords = weekDecks.reduce(
      (acc, d) => acc + Math.round(((d.progress_percent || 0) / 100) * (d.kotoba_count || 0)),
      0
    );
    const percent = totalWords > 0 ? (learnedWords / totalWords) * 100 : 0;
    const isCompleted = weekDecks.length > 0 && weekDecks.every((d) => (d.progress_percent || 0) >= 100);
    const isActive = currentTodayDay >= startDay && currentTodayDay <= endDay;
    const minDay = weekDecks.length > 0 ? Math.min(...weekDecks.map((d) => d.day_number)) : startDay;
    const actualMaxDay = weekDecks.length > 0 ? Math.max(...weekDecks.map((d) => d.day_number)) : endDay;

    return {
      weekNum,
      startDay: minDay,
      endDay: actualMaxDay,
      decks: weekDecks,
      totalWords,
      learnedWords,
      percent,
      isCompleted,
      isActive,
    };
  }).filter((w) => w.decks.length > 0);

  const sortDecks = (items: Deck[]) => {
    return [...items].sort((a, b) =>
      sortAsc ? a.day_number - b.day_number : b.day_number - a.day_number
    );
  };

  const renderDeckCard = (deck: Deck) => {
    const isLocked = deck.day_number > maxUnlockedDay && deck.day_number < 90;
    const isToday = deck.day_number === currentTodayDay;
    const progress = deck.progress_percent || 0;

    return (
      <div
        key={deck.id}
        onClick={() => handleOpenDeck(deck)}
        className={`card-washi rounded-2xl p-3.5 border transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between ${
          isLocked
            ? 'bg-[#F7F5F0]/60 border-[#E5DFD5] opacity-75'
            : isToday
            ? 'bg-white border-indigo-200 ring-1 ring-indigo-200/50 shadow-xs hover:border-indigo-300'
            : 'bg-white border-[#EFEAE2] hover:border-amber-300'
        }`}
      >
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-3">
            <div
              className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                isLocked
                  ? 'bg-[#EAE4D9] text-[#8C827A]'
                  : isToday
                  ? 'bg-indigo-50 text-indigo-600 border border-indigo-100'
                  : 'bg-amber-50 text-amber-700 border border-amber-100'
              }`}
            >
              {isLocked ? (
                <Lock className="w-4 h-4" />
              ) : (
                <BookOpen className="w-4 h-4" />
              )}
            </div>

            <div className="space-y-0.5">
              <div className="flex items-center space-x-2">
                <h3 className="font-bold text-sm text-[#1E1B18]">
                  {deck.name}
                </h3>
                {isToday && (
                  <span className="text-[9px] font-extrabold text-indigo-700 bg-indigo-50 px-1.5 py-0.5 rounded-sm border border-indigo-100">
                    {t.belajar.todayBadge}
                  </span>
                )}
              </div>
              <p className="text-[11px] text-[#78716C]">
                {t.belajar.targetsSummary(
                  deck.kotoba_count || 0,
                  progress.toFixed(0),
                  3
                )}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-1">
            {!isLocked && (
              <button
                onClick={(e) => handlePreviewDeck(e, deck)}
                title={t.belajar.viewWordList}
                className="w-7 h-7 rounded-lg hover:bg-[#FAF8F5] text-[#78716C] hover:text-indigo-600 flex items-center justify-center transition-colors cursor-pointer"
              >
                <List className="w-4 h-4" />
              </button>
            )}
            <div className="w-7 h-7 rounded-lg flex items-center justify-center text-[#A8A29E]">
              {isLocked ? (
                <Lock className="w-3.5 h-3.5" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </div>
          </div>
        </div>

        <div className="mt-2.5 w-full bg-[#EFEAE2] h-1 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all ${
              isToday
                ? 'bg-indigo-500'
                : progress > 50
                ? 'bg-emerald-500'
                : progress > 0
                ? 'bg-amber-500'
                : 'bg-transparent'
            }`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-4 pb-24 max-w-md mx-auto">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between pt-1 px-1">
        <button
          onClick={() => navigate('/')}
          className="flex items-center space-x-1.5 text-xs font-bold text-[#44403C] hover:text-[#1E1B18] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="font-mincho text-sm">{t.common.back}</span>
        </button>

        <span className="text-base font-bold font-mincho text-[#1E1B18]">
          {t.belajar.pageTitle(currentLevel)}
        </span>

        <div className="w-16" />
      </div>

      {/* 4 JLPT Pillars Tab Navigation Bar */}
      <div className="p-1 bg-[#EFEAE2]/60 rounded-2xl border border-[#E5DFD5] grid grid-cols-4 gap-1 shadow-inner">
        {/* Tab 1: Goi */}
        <button
          onClick={() => handleTabChange('goi')}
          className={`py-2 px-1 rounded-xl text-center transition-all flex flex-col items-center justify-center space-y-0.5 cursor-pointer ${
            activeTab === 'goi'
              ? 'bg-white text-indigo-700 font-bold shadow-xs'
              : 'text-[#78716C] hover:text-[#1E1B18]'
          }`}
        >
          <div className="flex items-center space-x-1">
            <BookOpen className="w-3.5 h-3.5" />
            <span className="text-xs">語彙</span>
          </div>
          <span className="text-[10px] tracking-tight">Goi</span>
        </button>

        {/* Tab 2: Bunpo */}
        <button
          onClick={() => handleTabChange('bunpo')}
          className={`py-2 px-1 rounded-xl text-center transition-all flex flex-col items-center justify-center space-y-0.5 cursor-pointer ${
            activeTab === 'bunpo'
              ? 'bg-white text-indigo-700 font-bold shadow-xs'
              : 'text-[#78716C] hover:text-[#1E1B18]'
          }`}
        >
          <div className="flex items-center space-x-1">
            <Layers className="w-3.5 h-3.5" />
            <span className="text-xs">文法</span>
          </div>
          <span className="text-[10px] tracking-tight">Bunpo ★</span>
        </button>

        {/* Tab 3: Dokkai */}
        <button
          onClick={() => handleTabChange('dokkai')}
          className={`py-2 px-1 rounded-xl text-center transition-all flex flex-col items-center justify-center space-y-0.5 cursor-pointer ${
            activeTab === 'dokkai'
              ? 'bg-white text-emerald-700 font-bold shadow-xs'
              : 'text-[#78716C] hover:text-[#1E1B18]'
          }`}
        >
          <div className="flex items-center space-x-1">
            <FileText className="w-3.5 h-3.5" />
            <span className="text-xs">読解</span>
          </div>
          <span className="text-[10px] tracking-tight">Dokkai</span>
        </button>

        {/* Tab 4: Choukai */}
        <button
          onClick={() => handleTabChange('choukai')}
          className={`py-2 px-1 rounded-xl text-center transition-all flex flex-col items-center justify-center space-y-0.5 cursor-pointer ${
            activeTab === 'choukai'
              ? 'bg-white text-violet-700 font-bold shadow-xs'
              : 'text-[#78716C] hover:text-[#1E1B18]'
          }`}
        >
          <div className="flex items-center space-x-1">
            <Headphones className="w-3.5 h-3.5" />
            <span className="text-xs">聴解</span>
          </div>
          <span className="text-[10px] tracking-tight">Choukai</span>
        </button>
      </div>

      {/* Locked Alert Banner */}
      {lockedAlert && (
        <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-start space-x-2 animate-fade-in shadow-2xs">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="font-semibold">{lockedAlert}</p>
          </div>
          <button
            onClick={() => setLockedAlert(null)}
            className="text-amber-500 hover:text-amber-800 text-xs font-bold"
          >
            ✕
          </button>
        </div>
      )}

      {/* TAB CONTENT 2: BUNPO */}
      {activeTab === 'bunpo' && (
        <BunpoPracticeView currentLevel={currentLevel} />
      )}

      {/* TAB CONTENT 3: DOKKAI */}
      {activeTab === 'dokkai' && (
        <DokkaiPracticeView currentLevel={currentLevel} />
      )}

      {/* TAB CONTENT 4: CHOUKAI */}
      {activeTab === 'choukai' && (
        <ChoukaiPracticeView currentLevel={currentLevel} />
      )}

      {/* TAB CONTENT 1: GOI */}
      {activeTab === 'goi' && (
        <div className="space-y-4">
          {/* Header Action: Sort order */}
           <div className="flex items-center justify-between px-1 gap-2">
             <span className="text-xs font-bold text-[#78716C] uppercase tracking-wider font-mono">
               {t.belajar.curriculumTitle(currentLevel)}
             </span>
             <div className="flex items-center gap-2 shrink-0">
               {standardDecks.length > 0 && (
                 <>
                   <button
                     onClick={() => {
                       const firstDeck = standardDecks.find((d) => d.day_number === currentTodayDay) || standardDecks[0];
                       if (firstDeck) navigate(`/study-session/${firstDeck.id}?mode=diagnostic`);
                     }}
                     className="text-[10px] font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 px-2 py-1 rounded-lg cursor-pointer"
                   >
                     {t.studySession.diagnosticMode}
                   </button>
                   <button
                     onClick={() => {
                       const firstDeck = standardDecks.find((d) => d.day_number === currentTodayDay) || standardDecks[0];
                       if (firstDeck) navigate(`/study-session/${firstDeck.id}?mode=exam`);
                     }}
                     className="text-[10px] font-bold text-rose-700 bg-rose-50 border border-rose-200 px-2 py-1 rounded-lg cursor-pointer"
                   >
                     {t.studySession.examMode}
                   </button>
                 </>
               )}
               <button
                 onClick={() => setSortAsc(!sortAsc)}
                 className="flex items-center space-x-1 text-xs text-[#78716C] hover:text-[#1E1B18] transition-colors cursor-pointer"
               >
                 <ArrowUpDown className="w-3.5 h-3.5" />
                 <span>{sortAsc ? t.belajar.sortOldest : t.belajar.sortNewest}</span>
               </button>
             </div>
           </div>

          {loading ? (
            <div className="text-center py-12 text-[#78716C] text-sm font-mincho">
              {t.belajar.loadingCurriculum}
            </div>
          ) : (
            <div className="space-y-3">
              {(sortAsc ? weekGroups : [...weekGroups].reverse()).map((wg) => {
                const isOpen = !!openWeeks[wg.weekNum];
                return (
                  <div key={wg.weekNum} className="space-y-2">
                    <div
                      onClick={() => toggleWeek(wg.weekNum)}
                      className={`card-washi rounded-2xl p-3.5 border cursor-pointer flex flex-col space-y-1.5 shadow-2xs transition-colors ${
                        wg.isActive
                          ? "border-indigo-200/90 bg-indigo-50/30 hover:border-indigo-300"
                          : "border-[#EFEAE2] hover:border-stone-300"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span
                            className={`w-5 h-5 rounded-md flex items-center justify-center ${
                              wg.isActive
                                ? "bg-indigo-100 text-indigo-700"
                                : "bg-stone-100 text-stone-700"
                            }`}
                          >
                            {isOpen ? (
                              <ChevronDown className="w-3.5 h-3.5" />
                            ) : (
                              <ChevronRight className="w-3.5 h-3.5" />
                            )}
                          </span>
                          <span className="font-bold text-sm text-[#1E1B18] font-mincho">
                             {`${t.common.week} ${wg.weekNum} · ${t.common.day} ${wg.startDay}–${wg.endDay}`}
                          </span>
                        </div>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                            wg.isCompleted
                              ? "text-emerald-700 bg-emerald-50 border-emerald-100"
                              : wg.isActive
                              ? "text-indigo-700 bg-indigo-50 border-indigo-200"
                              : "text-stone-600 bg-stone-50 border-stone-200"
                          }`}
                        >
                          {wg.isCompleted
                            ? t.belajar.completedBadge
                            : wg.isActive
                            ? t.belajar.activeNowBadge
                            : t.belajar.upcomingBadge}
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-[11px] text-[#78716C] px-1">
                        <span>
                          {t.belajar.wordsMastered(wg.totalWords, wg.percent.toFixed(2))}
                        </span>
                      </div>

                      <div className="w-full bg-[#EFEAE2] h-1 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all ${
                            wg.isCompleted
                              ? "bg-emerald-600"
                              : wg.isActive
                              ? "bg-indigo-600"
                              : "bg-stone-400"
                          }`}
                          style={{ width: `${Math.min(100, Math.max(0, wg.percent))}%` }}
                        />
                      </div>
                    </div>

                    {isOpen && (
                      <div className="space-y-2 pl-2 animate-slide-down">
                        {sortDecks(wg.decks).map((deck) => renderDeckCard(deck))}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Foundation / Special Decks */}
              {foundationDecks.length > 0 && (
                <div className="pt-2 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 font-mono px-1">
                    Fondasi & Kurikulum Tambahan
                  </span>
                  {foundationDecks.map((deck) => renderDeckCard(deck))}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Preview Kotoba Modal for a Deck */}
      {activeDeckModal && (
        <div onClick={(e) => { if (e.target === e.currentTarget) setActiveDeckModal(null); }} className="fixed inset-0 z-50 overflow-hidden flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/40 backdrop-blur-[2px]">
          <div onClick={(e) => e.stopPropagation()} className="bg-[#FAF8F5] rounded-t-3xl sm:rounded-2xl max-w-md w-full max-h-[85vh] flex flex-col overflow-hidden border border-[#EFEAE2] shadow-2xl animate-slide-up">
            <div className="p-4 border-b border-[#EFEAE2] flex items-center justify-between bg-white">
              <div>
                <h3 className="font-bold text-base font-mincho text-[#1E1B18]">
                  {activeDeckModal.name}
                </h3>
                <p className="text-xs text-[#78716C]">
                  {t.belajar.previewModal.wordsCount(deckKotobas.length)}
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => {
                    navigate(`/study-session/${activeDeckModal.id}`);
                  }}
                  className="px-3 py-1.5 bg-[#1E1B18] text-white text-xs font-bold rounded-xl flex items-center space-x-1.5 shadow-sm cursor-pointer active:scale-95"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>{t.belajar.previewModal.start}</span>
                </button>
                <button
                  onClick={() => setActiveDeckModal(null)}
                  className="w-8 h-8 rounded-full bg-[#EFEAE2]/60 hover:bg-[#E2DDD5] text-[#57534E] flex items-center justify-center text-xs font-bold cursor-pointer"
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="p-4 overflow-y-auto space-y-2 flex-1">
              {loadingCards ? (
                <div className="text-center py-10 text-xs text-[#78716C]">
                  {t.belajar.previewModal.loading}
                </div>
              ) : deckKotobas.length === 0 ? (
                <div className="text-center py-10 text-xs text-[#78716C]">
                  {t.belajar.previewModal.empty}
                </div>
              ) : (
                deckKotobas.map((rawK) => {
                  const k = localizeKotoba(rawK, language);
                  return (
                    <div
                      key={k.id}
                      onClick={() => setActiveKotoba(k)}
                      className="card-washi rounded-xl p-3 border border-[#EFEAE2] hover:border-indigo-300 cursor-pointer flex items-center justify-between"
                    >
                      <div>
                        <div className="flex items-baseline space-x-2">
                          <span className="font-bold font-jp text-base text-[#1E1B18]">
                            {k.kanji || k.hiragana}
                          </span>
                          <span className="text-xs font-jp text-indigo-600 font-semibold">
                            {k.hiragana}
                          </span>
                        </div>
                        <p className="text-xs text-[#57534E] line-clamp-1">{k.meaning}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-[#A8A29E]" />
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      )}

      {/* Kotoba & Kanji Detail Modals */}
      <KotobaDetailModal
        kotoba={activeKotoba}
        onClose={() => setActiveKotoba(null)}
        onViewKanji={(char) => {
          setActiveKotoba(null);
          setActiveKanjiChar(char);
        }}
      />

      {activeKanjiChar && (
        <KanjiDetailView
          character={activeKanjiChar}
          onClose={() => setActiveKanjiChar(null)}
          onSelectKotoba={(k) => setActiveKotoba(k)}
        />
      )}
    </div>
  );
};
