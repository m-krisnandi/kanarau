import React, { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Sun,
  Moon,
  ChevronRight,
  Flame,
  Target,
  Sparkles,
  BookOpen,
  Layers,
  FileText,
  Headphones,
  TrendingUp,
  Trophy,
  Check,
} from 'lucide-react';
import { useAuthStore } from '@/stores/authStore';
import { useReviewStore } from '@/stores/reviewStore';
import { useTranslation } from '@/stores/languageStore';
import { reviewApi, progressApi, courseApi } from '@/services/api';
import type { OverallStats, DayStats } from '@/types';
import { useCourseStore } from '@/stores/courseStore';
import { DailyFocusRoutineCard } from '@/components/DailyFocusRoutineCard';
import { TanyaAiModal } from '@/components/TanyaAiModal';
import { LeaderboardModal } from '@/components/LeaderboardModal';
import { calculateUserLevel } from '@/utils/levelHelper';
import { BUNPO_UNITS } from '@/data/bunpoData';
import { DOKKAI_PASSAGES } from '@/data/dokkaiData';
import { CHOUKAI_QUESTIONS } from '@/data/choukaiData';
import { formatLocalYMD } from '@/utils';
import {
  getUserKey,
  mergeDeckProgress,
  mergeOverallStats,
  mergeCalendarDays,
  computeLocalStreak,
  computeTrackLocalStreak,
  getLocalDailyActivity,
  getEffectiveUserXp,
  getTrackUserXp,
  mergeTrackDeckProgress,
  mergeTrackOverallStats,
  mergeTrackCalendarDays,
} from '@/utils/userProgressHelper';

export const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const currentLevel = useAuthStore((state) => state.currentLevel) || user?.current_level || 'N2';
  const { pendingCount, setPendingCount } = useReviewStore();
  const { t, language } = useTranslation();
  const { activeTrack, activeLevel, targetLanguage, setModalOpen } = useCourseStore();
  const [aiModalOpen, setAiModalOpen] = useState(false);
  const [leaderboardOpen, setLeaderboardOpen] = useState(false);
  const [overallStats, setOverallStats] = useState<OverallStats | null>(null);
  const [calendarDays, setCalendarDays] = useState<DayStats[]>([]);
  const [countdownDays, setCountdownDays] = useState<number>(49);

  // Raw decks and module records loaded from progress API / localStorage
  const [mergedDecks, setMergedDecks] = useState<any[]>([]);
  const [bunpoResults, setBunpoResults] = useState<Record<string, any>>({});
  const [dokkaiResults, setDokkaiResults] = useState<Record<string, any>>({});
  const [choukaiResults, setChoukaiResults] = useState<Record<string, any>>({});
  const [advanceDayTrigger, setAdvanceDayTrigger] = useState(0);

  const level = currentLevel;
  const effectiveUserXp = getTrackUserXp(user, activeTrack, overallStats);
  const userLvl = calculateUserLevel(effectiveUserXp, language);
  const userKey = getUserKey(user);

  useEffect(() => {
    async function loadCountdown() {
      try {
        const res = await progressApi.getJLPTCountdown();
        if (res?.data?.days_remaining !== undefined) {
          setCountdownDays(res.data.days_remaining);
        }
      } catch {
        const today = new Date();
        const nextExam = new Date(2026, 11, 6);
        const diff = Math.max(0, Math.ceil((nextExam.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)));
        setCountdownDays(diff);
      }
    }
    loadCountdown();
  }, []);

  useEffect(() => {
    async function loadDeckProgress() {
      try {
        if (activeTrack !== 'JA') {
          const res = await courseApi.getDecks(activeTrack, activeLevel, language);
          const rawDecks = (res?.data || []).map((cd: any) => ({
            id: cd.id,
            deck_id: cd.id,
            deck_name: cd.title || cd.title_target,
            name: cd.title || cd.title_target,
            day_number: cd.day_number,
            jlpt_level: activeLevel,
            total_kotoba: cd.item_count,
            kotoba_count: cd.item_count,
            progress_percent: cd.progress_percent || 0,
          }));
          const merged = mergeTrackDeckProgress(rawDecks, userKey, activeTrack);
          setMergedDecks(merged);
          return;
        }
        const res = await progressApi.getDeckProgress();
        const rawDecks = res?.data || [];
        const merged = mergeTrackDeckProgress(rawDecks, userKey, 'JA');
        setMergedDecks(merged);
      } catch {
        setMergedDecks(mergeTrackDeckProgress([], userKey, activeTrack));
      }
    }
    loadDeckProgress();

    const handleProgressUpdate = () => void loadDeckProgress();
    window.addEventListener('kanarau_progress_updated', handleProgressUpdate);
    return () => window.removeEventListener('kanarau_progress_updated', handleProgressUpdate);
  }, [user, userKey, activeTrack, activeLevel, language]);

  useEffect(() => {
    function loadModuleResults() {
      try {
        const bSaved = localStorage.getItem(`kanarau_bunpo_results_${userKey}`);
        setBunpoResults(bSaved ? JSON.parse(bSaved) : {});
      } catch {
        setBunpoResults({});
      }
      try {
        const dSaved = localStorage.getItem(`kanarau_dokkai_results_${userKey}`);
        setDokkaiResults(dSaved ? JSON.parse(dSaved) : {});
      } catch {
        setDokkaiResults({});
      }
      try {
        const cSaved = localStorage.getItem(`kanarau_choukai_results_${userKey}`);
        setChoukaiResults(cSaved ? JSON.parse(cSaved) : {});
      } catch {
        setChoukaiResults({});
      }
    }
    loadModuleResults();

    const handleProgressUpdate = () => loadModuleResults();
    window.addEventListener('kanarau_progress_updated', handleProgressUpdate);
    return () => window.removeEventListener('kanarau_progress_updated', handleProgressUpdate);
  }, [userKey]);

  useEffect(() => {
    async function loadStatsData() {
      try {
        try {
          await useAuthStore.getState().fetchUser();
        } catch {}
        const [statsRes, calRes] = await Promise.all([
          progressApi.getOverallStats(activeTrack),
          progressApi.getCalendar(undefined, undefined, activeTrack),
        ]);
        const mergedStats = mergeTrackOverallStats(statsRes?.data || null, userKey, activeTrack);
        setOverallStats(mergedStats);

        const rawCalDays = calRes?.data?.days || [];
        const mergedCalDays = mergeTrackCalendarDays(rawCalDays, userKey, activeTrack);
        setCalendarDays(mergedCalDays);
      } catch (err) {
        console.warn('Could not load weekly stats:', err);
        const fallbackStats = mergeTrackOverallStats(null, userKey, activeTrack);
        setOverallStats(fallbackStats);
        const fallbackCalDays = mergeTrackCalendarDays([], userKey, activeTrack);
        setCalendarDays(fallbackCalDays);
      }
    }
    loadStatsData();

    const handleProgressUpdate = () => void loadStatsData();
    window.addEventListener('kanarau_progress_updated', handleProgressUpdate);
    return () => window.removeEventListener('kanarau_progress_updated', handleProgressUpdate);
  }, [user, userKey, activeTrack]);

  const todayStr = formatLocalYMD();
  const dailyActivities = getLocalDailyActivity(userKey, activeTrack);
  const currentStreak = computeTrackLocalStreak(userKey, activeTrack, overallStats?.current_streak);

  // Cycle Mastery: Calculate active target day and module completion status across the level
  const cycleInfo = useMemo(() => {
    const levelDecks = mergedDecks
      .filter((d) => d.jlpt_level === level)
      .sort((a, b) => (a.day_number || 1) - (b.day_number || 1));

    const levelBunpo = BUNPO_UNITS.filter((u) => u.level === level);
    const levelDokkai = DOKKAI_PASSAGES.filter((p) => p.level === level);
    const levelChoukai = CHOUKAI_QUESTIONS.filter((q) => q.level === level);

    const maxDays = Math.max(
      30,
      ...levelDecks.map((d) => d.day_number || 1),
      ...levelBunpo.map((u) => u.dayNumber || 1),
      ...levelDokkai.map((p) => p.dayNumber || 1),
      ...levelChoukai.map((q) => q.dayNumber || 1)
    );

    // Find the first day where lesson content (Goi, Bunpo, Dokkai/Choukai) is not 100% completed
    const completedDaysKey = `kanarau_cycle_completed_days_${userKey}_${level}`;
    let savedCompleted: Record<number, any> = {};
    try {
      const raw = localStorage.getItem(completedDaysKey);
      if (raw) savedCompleted = JSON.parse(raw);
    } catch {}

    const isAlreadyAdvanced = (d: number): boolean => {
      const val = savedCompleted[d];
      if (!val) return false;
      if (val === true) return true;
      if (typeof val === 'object') {
        if (val.advanced) return true;
        if (val.completedAt && val.completedAt < todayStr) return true;
      }
      return false;
    };

    const newlyCompletedDays: number[] = [];

    // Find the first day where the 4-pillar package is not yet fully completed
    let activeDay = 1;
    let foundActive = false;

    for (let d = 1; d <= maxDays; d++) {
      if (isAlreadyAdvanced(d)) {
        continue;
      }

      const goiDeck = levelDecks.find((deck) => deck.day_number === d);
      const isGoiDone = Boolean(goiDeck && (goiDeck.progress_percent || 0) >= 100);

      const bunpoUnit = levelBunpo.find((u) => (u.dayNumber || 1) === d);
      const isBunpoDone = bunpoUnit ? Boolean(bunpoResults && bunpoResults[bunpoUnit.id]) : true;

      const dokkaiPassage = levelDokkai.find((p) => (p.dayNumber || 1) === d);
      const choukaiQuestion = levelChoukai.find((q) => (q.dayNumber || 1) === d);
      const hasReadingOrListening = Boolean(dokkaiPassage || choukaiQuestion);
      const isDokkaiDone = Boolean(dokkaiPassage && dokkaiResults && dokkaiResults[dokkaiPassage.id]);
      const isChoukaiDone = Boolean(choukaiQuestion && choukaiResults && choukaiResults[choukaiQuestion.id]);
      const isDokkaiChoukaiDone = hasReadingOrListening ? (isDokkaiDone || isChoukaiDone) : true;

      const isLessonContentDone = isGoiDone && isBunpoDone && isDokkaiChoukaiDone;
      const isReviewDone = pendingCount === 0 || Boolean(
        dailyActivities[todayStr]?.reviewCompleted || (dailyActivities[todayStr]?.cardsReviewed || 0) > 0
      );

      // If all 4 pillars are done for day d:
      if (isLessonContentDone && isReviewDone) {
        newlyCompletedDays.push(d);
        const existingRec = savedCompleted[d];
        const completedDate = typeof existingRec === 'object' && existingRec?.completedAt ? existingRec.completedAt : todayStr;
        // If it was completed in a past calendar day, automatically roll forward
        if (completedDate < todayStr && d < maxDays) {
          continue;
        }
      }

      activeDay = d;
      foundActive = true;
      break;
    }

    if (!foundActive) {
      activeDay = maxDays;
    }

    // Evaluate the 4 pillars for activeDay
    const activeGoiDeck = levelDecks.find((d) => d.day_number === activeDay);
    const activeDeckId = activeGoiDeck?.deck_id || activeDay;
    const targetWordsCount = activeGoiDeck?.total_kotoba || 30;
    const isGoiDoneInCycle = Boolean(activeGoiDeck && (activeGoiDeck.progress_percent || 0) >= 100);

    const activeBunpoUnit = levelBunpo.find((u) => (u.dayNumber || 1) === activeDay);
    const isBunpoDoneInCycle = activeBunpoUnit ? Boolean(bunpoResults && bunpoResults[activeBunpoUnit.id]) : true;

    const activeDokkaiPassage = levelDokkai.find((p) => (p.dayNumber || 1) === activeDay);
    const activeChoukaiQuestion = levelChoukai.find((q) => (q.dayNumber || 1) === activeDay);
    const isDokkaiDoneInCycle = Boolean(activeDokkaiPassage && dokkaiResults && dokkaiResults[activeDokkaiPassage.id]);
    const isChoukaiDoneInCycle = Boolean(activeChoukaiQuestion && choukaiResults && choukaiResults[activeChoukaiQuestion.id]);
    const hasReadingOrListening = Boolean(activeDokkaiPassage || activeChoukaiQuestion);
    const isDokkaiChoukaiDoneInCycle = hasReadingOrListening ? (isDokkaiDoneInCycle || isChoukaiDoneInCycle) : true;

    // Review is complete if 0 cards pending or user completed a review session today
    const isReviewDoneInCycle = pendingCount === 0 || Boolean(
      dailyActivities[todayStr]?.reviewCompleted || (dailyActivities[todayStr]?.cardsReviewed || 0) > 0
    );

    const completedCount =
      (isGoiDoneInCycle ? 1 : 0) +
      (isBunpoDoneInCycle ? 1 : 0) +
      (isDokkaiChoukaiDoneInCycle ? 1 : 0) +
      (isReviewDoneInCycle ? 1 : 0);

    const isDayFullyComplete = completedCount === 4;

    const prevDay = activeDay > 1 ? activeDay - 1 : null;
    const isPrevDayCompleted = Boolean(
      prevDay && (
        savedCompleted[prevDay] ||
        dailyActivities[todayStr]?.hasRealStudySession ||
        dailyActivities[todayStr]?.dokkaiCompleted ||
        dailyActivities[todayStr]?.bunpoCompleted ||
        dailyActivities[todayStr]?.goiCompleted ||
        dailyActivities[todayStr]?.reviewCompleted
      )
    );

    return {
      activeDay,
      maxDays,
      activeDeckId,
      targetWordsCount,
      isGoiDoneInCycle,
      isBunpoDoneInCycle,
      isDokkaiChoukaiDoneInCycle,
      isDokkaiDoneInCycle,
      isChoukaiDoneInCycle,
      isReviewDoneInCycle,
      completedCount,
      isDayFullyComplete,
      prevDay,
      isPrevDayCompleted,
      newlyCompletedDays,
    };
  }, [mergedDecks, level, bunpoResults, dokkaiResults, choukaiResults, pendingCount, dailyActivities, todayStr, userKey, advanceDayTrigger]);

  useEffect(() => {
    if (cycleInfo.newlyCompletedDays && cycleInfo.newlyCompletedDays.length > 0) {
      try {
        const key = `kanarau_cycle_completed_days_${userKey}_${level}`;
        const existing = JSON.parse(localStorage.getItem(key) || '{}');
        let changed = false;
        cycleInfo.newlyCompletedDays.forEach((d) => {
          if (!existing[d]) {
            existing[d] = { completedAt: todayStr, advanced: false };
            changed = true;
          }
        });
        if (changed) {
          localStorage.setItem(key, JSON.stringify(existing));
        }
      } catch {}
    }
  }, [cycleInfo.newlyCompletedDays, userKey, level, todayStr]);

  const advanceToNextDay = (day: number) => {
    try {
      const key = `kanarau_cycle_completed_days_${userKey}_${level}`;
      const existing = JSON.parse(localStorage.getItem(key) || '{}');
      existing[day] = { completedAt: todayStr, advanced: true };
      localStorage.setItem(key, JSON.stringify(existing));
      setAdvanceDayTrigger((prev) => prev + 1);
    } catch {}
  };

  const handleQuickLaunch = () => {
    if (activeTrack !== 'JA') {
      navigate('/belajar');
      return;
    }
    if (cycleInfo.isDayFullyComplete && cycleInfo.activeDay < cycleInfo.maxDays) {
      advanceToNextDay(cycleInfo.activeDay);
      return;
    }
    if (!cycleInfo.isGoiDoneInCycle) {
      navigate(cycleInfo.activeDeckId ? `/study-session/${cycleInfo.activeDeckId}` : '/belajar?tab=goi');
    } else if (!cycleInfo.isBunpoDoneInCycle) {
      navigate('/belajar?tab=bunpo');
    } else if (!cycleInfo.isDokkaiChoukaiDoneInCycle) {
      if (!cycleInfo.isDokkaiDoneInCycle) {
        navigate('/belajar?tab=dokkai');
      } else {
        navigate('/belajar?tab=choukai');
      }
    } else if (pendingCount > 0) {
      navigate('/review');
    } else {
      navigate('/belajar');
    }
  };

  const quickLaunchLabel = useMemo(() => {
    if (activeTrack !== 'JA') {
      if (language === 'my') {
        return `DAY ${cycleInfo.activeDay} လေ့လာမှု စတင်ရန်`;
      } else if (language === 'en') {
        return `Start DAY ${cycleInfo.activeDay} Study`;
      }
      return `Mulai Belajar DAY ${cycleInfo.activeDay}`;
    }
    if (cycleInfo.isDayFullyComplete) {
      return cycleInfo.activeDay < cycleInfo.maxDays
        ? `Lanjut DAY ${cycleInfo.activeDay + 1} →`
        : `Kurikulum Selesai ✓`;
    }
    if (!cycleInfo.isGoiDoneInCycle) {
      return `Mulai Goi DAY ${cycleInfo.activeDay}`;
    }
    if (!cycleInfo.isBunpoDoneInCycle) {
      return `Lanjut Bunpo DAY ${cycleInfo.activeDay}`;
    }
    if (!cycleInfo.isDokkaiChoukaiDoneInCycle) {
      return `Lanjut Dokkai DAY ${cycleInfo.activeDay}`;
    }
    if (pendingCount > 0) {
      return `Review SRS (${pendingCount})`;
    }
    return `DAY ${cycleInfo.activeDay} Tuntas ✓`;
  }, [activeTrack, language, cycleInfo, pendingCount]);

  const weekDays = useMemo(() => {
    const today = new Date();
    const todayYMD = formatLocalYMD(today);

    const dayOfWeek = today.getDay(); // 0 is Sunday
    const mondayDiff = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
    const monday = new Date(today);
    monday.setDate(today.getDate() + mondayDiff);

    const labels = t.dashboard.weekDaysShort;

    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(monday);
      d.setDate(monday.getDate() + i);
      const dateYMD = formatLocalYMD(d);
      const isToday = dateYMD === todayYMD;
      const isPast = dateYMD < todayYMD;
      const isFuture = dateYMD > todayYMD;

      const statDay = calendarDays.find((cd) => cd.date === dateYMD);
      // Strictly prevent future dates from showing studied = true
      const hasStudied = !isFuture && Boolean(statDay?.studied);

      return {
        label: labels[i] || '',
        dayNum: d.getDate(),
        dateYMD,
        isToday,
        isPast,
        isFuture,
        hasStudied,
      };
    });
  }, [calendarDays, t.dashboard.weekDaysShort]);

  return (
    <>
      <div className="space-y-2 sm:space-y-2.5 pb-[calc(3.5rem+env(safe-area-inset-bottom,0px))] max-w-md mx-auto w-full">
        {/* Authentic Welcoming Dashboard Header */}
        <div className="card-washi rounded-2xl p-2.5 sm:p-3 border border-[#EFEAE2] dark:border-[#232F46] relative overflow-hidden bg-gradient-to-br from-white via-white to-indigo-50/20 dark:from-[#151D2E] dark:via-[#151D2E] dark:to-indigo-950/30 shadow-xs">
          <div className="flex items-center justify-between">
            <div className="flex items-center flex-wrap gap-1.5">
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="text-[10px] sm:text-[11px] font-extrabold text-indigo-700 bg-indigo-50 dark:bg-indigo-950/70 dark:text-indigo-300 dark:border-indigo-800/60 px-2 sm:px-2.5 py-0.5 rounded-full border border-indigo-100/80 cursor-pointer hover:bg-indigo-100 transition-colors flex items-center space-x-1"
                title="Ganti Program Belajar"
              >
                <span>{targetLanguage === 'id' ? '🇮🇩' : targetLanguage === 'my' ? '🇲🇲' : targetLanguage === 'en' ? '🇬🇧' : '🇯🇵'}</span>
                <span>{activeTrack === 'JA' ? `${t.common.level} ${level}` : `${activeTrack} ${activeLevel}`}</span>
              </button>
              <span className="text-[10px] sm:text-[11px] text-[#78716C] dark:text-slate-400 flex items-center space-x-1">
                <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                <span>{t.dashboard.streak(currentStreak)}</span>
              </span>
              {/* Gamification User Level Badge */}
              <button
                type="button"
                onClick={() => setLeaderboardOpen(true)}
                className="inline-flex items-center space-x-1 text-[10px] sm:text-[11px] font-bold text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/70 px-2 py-0.5 rounded-full border border-amber-200/80 dark:border-amber-800/60 hover:bg-amber-100 dark:hover:bg-amber-900/60 transition-colors shadow-2xs cursor-pointer active:scale-95"
                title={`${userLvl.title} (${userLvl.totalXp} XP)`}
              >
                <Trophy className="w-3 h-3 text-amber-500 fill-amber-400" />
                <span>Lv. {userLvl.level}</span>
                <span className="text-[9px] opacity-75 font-normal">({userLvl.totalXp} XP)</span>
              </button>
            </div>

            {activeTrack === 'JA' ? (
              <div className="text-right shrink-0">
                <span className="text-[9px] sm:text-[10px] font-bold text-amber-800 bg-amber-50 dark:bg-amber-950/70 dark:text-amber-300 dark:border-amber-800/60 px-2 sm:px-2.5 py-0.5 rounded-lg border border-amber-200 block shadow-2xs">
                  {t.dashboard.countdown(countdownDays)}
                </span>
              </div>
            ) : (
              <div className="text-right shrink-0">
                <span className="text-[9px] sm:text-[10px] font-bold text-indigo-700 bg-indigo-50 dark:bg-indigo-950/70 dark:text-indigo-300 dark:border-indigo-800/60 px-2 sm:px-2.5 py-0.5 rounded-lg border border-indigo-200 block shadow-2xs">
                  {activeTrack} {activeLevel}
                </span>
              </div>
            )}
          </div>

          <div className="mt-1.5 flex items-baseline justify-between">
            <h1 className="text-sm sm:text-base font-bold font-mincho text-[#1E1B18] dark:text-slate-100 tracking-tight truncate">
              {t.dashboard.greeting((user?.name || (user?.email ? user.email.split('@')[0] : '')) || 'Pembelajar')}
            </h1>
            <p className="text-[11px] sm:text-xs text-[#78716C] dark:text-slate-400 shrink-0 ml-2">
              {t.dashboard.focusPrefix} <strong className="text-[#1E1B18] dark:text-slate-100 font-bold">DAY {cycleInfo.activeDay} {activeTrack === 'JA' ? level : activeLevel}</strong>
            </p>
          </div>

          {/* Quick Launch Strip */}
          <div className="mt-1.5 pt-1.5 border-t border-[#F2ECE3] dark:border-[#232F46] flex items-center justify-between">
            <div className="flex items-center space-x-1.5 text-[11px] sm:text-xs text-[#57534E] dark:text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{t.dashboard.todayTarget(cycleInfo.targetWordsCount)}</span>
            </div>
            <button
              onClick={handleQuickLaunch}
              className="flex items-center space-x-1 text-[11px] sm:text-xs font-bold text-indigo-700 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors cursor-pointer active:scale-95 py-0.5"
            >
              <span>{quickLaunchLabel}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 30-Minute Daily Focus Routine Card */}
        <DailyFocusRoutineCard
          onStartStudy={handleQuickLaunch}
          onOpenAi={() => setAiModalOpen(true)}
          onOpenCourseModal={() => setModalOpen(true)}
        />

        {/* Tanya AI Card */}
        <div
          onClick={() => setAiModalOpen(true)}
          className="card-washi rounded-2xl px-3 py-2 sm:py-2.5 border border-indigo-100/90 dark:border-indigo-900/50 bg-gradient-to-r from-indigo-50/70 via-white to-amber-50/30 dark:from-[#151D2E] dark:via-[#151D2E] dark:to-purple-950/20 cursor-pointer flex items-center justify-between shadow-2xs hover:border-indigo-300 dark:hover:border-indigo-500 transition-all group active:scale-98"
        >
          <div className="flex items-center space-x-2.5 min-w-0">
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 text-white flex items-center justify-center shadow-xs shrink-0">
              <Sparkles className="w-3.5 h-3.5 fill-white" />
            </div>
            <div className="min-w-0">
              <h4 className="font-bold text-xs sm:text-sm text-[#1E1B18] dark:text-slate-100 font-mincho leading-tight">
                {activeTrack === 'JA'
                  ? t.dashboard.tanyaAiTitle
                  : language === 'my'
                  ? 'AI ဆရာကို မေးမြန်းပါ'
                  : language === 'en'
                  ? 'Ask AI Tutor'
                  : 'Tanya AI'}
              </h4>
              <p className="text-[10px] sm:text-[11px] text-[#78716C] dark:text-slate-400 truncate mt-0.5">
                {activeTrack === 'JA'
                  ? t.dashboard.tanyaAiDesc
                  : language === 'my'
                  ? 'စကားပြောဆိုမှု၊ သဒ္ဒါနှင့် အသုံးအနှုန်းများကို AI ဆရာအား မေးမြန်းပါ'
                  : language === 'en'
                  ? 'Ask AI tutor about grammar, vocabulary and conversation.'
                  : 'Tanyakan tata bahasa, percakapan, dan kosakata ke AI.'}
              </p>
            </div>
          </div>
          <ChevronRight className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 group-hover:translate-x-0.5 transition-transform shrink-0 ml-2" />
        </div>

        {/* Pola 2 Sesi Harian & 4 Pilar Ujian (Exclusively for Japanese JLPT track) */}
        {activeTrack === 'JA' && (
          <>
            <div className="card-washi rounded-2xl p-2.5 sm:p-3 border border-indigo-200/90 dark:border-indigo-900/60 bg-gradient-to-br from-indigo-50/40 via-white to-amber-50/20 dark:from-[#151D2E] dark:via-[#151D2E] dark:to-slate-900 shadow-xs space-y-1.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1.5 min-w-0">
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-indigo-600 text-white flex items-center justify-center shadow-xs shrink-0">
                <Target className="w-3 h-3 fill-white" />
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-xs sm:text-sm text-[#1E1B18] dark:text-slate-100 font-mincho leading-tight truncate">
                  {t.dashboard.routineTitle}
                </h3>
                <p className="text-[9px] sm:text-[10px] text-indigo-700 dark:text-indigo-300 font-medium leading-tight truncate">
                  {t.dashboard.packageCycleSub(cycleInfo.activeDay, cycleInfo.completedCount)}
                </p>
              </div>
            </div>
            <span className={`text-[8px] sm:text-[9px] font-bold px-2 py-0.5 rounded-full border shrink-0 ml-1 ${
              cycleInfo.isDayFullyComplete
                ? 'text-emerald-700 bg-emerald-50 border-emerald-200 dark:bg-emerald-950/80 dark:text-emerald-300 dark:border-emerald-800/60'
                : 'text-indigo-700 bg-indigo-50 dark:bg-indigo-950/80 dark:text-indigo-300 dark:border-indigo-800/60 border-indigo-200'
            }`}>
              {cycleInfo.isDayFullyComplete ? t.dashboard.packageCompleteBadge(cycleInfo.activeDay) : `DAY ${cycleInfo.activeDay}`}
            </span>
          </div>

          {/* Celebratory Banner if package completed or prev day finished today */}
          {cycleInfo.isDayFullyComplete ? (
            <div className="px-2.5 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-between shadow-2xs">
              <span className="text-[10px] sm:text-[11px] font-bold text-emerald-800 dark:text-emerald-200">
                {t.dashboard.cycleCelebration(cycleInfo.activeDay)}
              </span>
              {cycleInfo.activeDay < cycleInfo.maxDays ? (
                <button
                  onClick={() => advanceToNextDay(cycleInfo.activeDay)}
                  className="text-[9px] font-extrabold text-emerald-900 bg-emerald-200/90 hover:bg-emerald-300 px-2 py-0.5 rounded-md cursor-pointer transition-colors shrink-0 ml-2"
                >
                  Mulai DAY {cycleInfo.activeDay + 1} →
                </button>
              ) : (
                <button
                  onClick={() => navigate('/belajar')}
                  className="text-[9px] font-extrabold text-emerald-900 bg-emerald-200/90 hover:bg-emerald-300 px-2 py-0.5 rounded-md cursor-pointer transition-colors shrink-0 ml-2"
                >
                  Lihat Semua
                </button>
              )}
            </div>
          ) : cycleInfo.isPrevDayCompleted && cycleInfo.prevDay ? (
            <div className="px-2.5 py-1 rounded-lg bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/70 dark:border-emerald-800/40 text-[9.5px] font-semibold text-emerald-800 dark:text-emerald-300 shadow-2xs">
              {t.dashboard.cycleCelebration(cycleInfo.prevDay)}
            </div>
          ) : null}

          <div className="grid grid-cols-2 gap-2 sm:gap-2.5 pt-0.5">
            {/* BLOK 1: SESI PAGI (Input Materi Baru) */}
            <div className="p-1.5 sm:p-2 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-800/40 space-y-1 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1 text-amber-900 dark:text-amber-300 font-bold text-[10px] sm:text-xs min-w-0">
                  <Sun className="w-3 h-3 text-amber-600 dark:text-amber-400 fill-amber-500 shrink-0" />
                  <span className="truncate">{t.dashboard.morningShort}</span>
                </div>
                <span className="text-[8px] font-bold text-amber-800 bg-white dark:bg-amber-950/80 dark:text-amber-300 dark:border-amber-800/60 px-1 py-0.2 rounded border border-amber-200 shrink-0">
                  {t.dashboard.morningTag}
                </span>
              </div>

              <div className="space-y-1">
                <div
                  onClick={() => navigate(cycleInfo.isGoiDoneInCycle ? '/belajar?tab=goi' : (cycleInfo.activeDeckId ? `/study-session/${cycleInfo.activeDeckId}` : '/belajar?tab=goi'))}
                  className={`p-1.5 sm:p-2 rounded-lg border cursor-pointer transition-all flex items-center justify-between shadow-2xs group active:scale-95 ${
                    cycleInfo.isGoiDoneInCycle
                      ? 'bg-emerald-50/80 border-emerald-200 dark:bg-emerald-950/40 dark:border-emerald-800/60'
                      : 'bg-white dark:bg-[#0B0F19] border-amber-100 dark:border-slate-800 hover:border-amber-300 dark:hover:border-amber-500/50'
                  }`}
                >
                  <div className="flex items-center space-x-1.5 min-w-0">
                    <span
                      className={`w-4 h-4 rounded text-[8px] sm:text-[9px] font-bold flex items-center justify-center shrink-0 ${
                        cycleInfo.isGoiDoneInCycle
                          ? 'bg-emerald-600 text-white'
                          : 'bg-amber-100 dark:bg-amber-950 dark:text-amber-400 text-amber-800'
                      }`}
                    >
                      {cycleInfo.isGoiDoneInCycle ? '✓' : '1'}
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center space-x-1">
                        <p
                          className={`font-bold text-[10px] sm:text-[11px] truncate ${
                            cycleInfo.isGoiDoneInCycle
                              ? 'text-emerald-900 dark:text-emerald-200'
                              : 'text-[#1E1B18] dark:text-slate-100'
                          }`}
                        >
                          語彙 Goi: D{cycleInfo.activeDay}
                        </p>
                        {cycleInfo.isGoiDoneInCycle && (
                          <span className="text-[7.5px] font-extrabold text-emerald-800 bg-emerald-100 dark:bg-emerald-900/80 dark:text-emerald-300 px-1 py-0.2 rounded shrink-0">
                            ✓ {t.dashboard.practiceDoneShort || 'Selesai'}
                          </span>
                        )}
                      </div>
                      <p className="text-[8px] sm:text-[9px] text-[#78716C] dark:text-slate-400 truncate">
                        {cycleInfo.isGoiDoneInCycle ? `✓ ${cycleInfo.targetWordsCount} kata tuntas` : t.dashboard.goiDescShort(cycleInfo.targetWordsCount)}
                      </p>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-3 h-3 shrink-0 transition-colors ${
                      cycleInfo.isGoiDoneInCycle
                        ? 'text-emerald-600 dark:text-emerald-400'
                        : 'text-stone-400 dark:text-slate-500 group-hover:text-amber-700 dark:group-hover:text-amber-400'
                    }`}
                  />
                </div>

                <div
                  onClick={() => navigate('/belajar?tab=bunpo')}
                  className={`p-1.5 sm:p-2 rounded-lg border cursor-pointer transition-all flex items-center justify-between shadow-2xs group active:scale-95 ${
                    cycleInfo.isBunpoDoneInCycle
                      ? 'bg-emerald-50/80 border-emerald-200 dark:bg-emerald-950/40 dark:border-emerald-800/60'
                      : 'bg-white dark:bg-[#0B0F19] border-amber-100 dark:border-slate-800 hover:border-amber-300 dark:hover:border-amber-500/50'
                  }`}
                >
                  <div className="flex items-center space-x-1.5 min-w-0">
                    <span
                      className={`w-4 h-4 rounded text-[8px] sm:text-[9px] font-bold flex items-center justify-center shrink-0 ${
                        cycleInfo.isBunpoDoneInCycle
                          ? 'bg-emerald-600 text-white'
                          : 'bg-amber-100 dark:bg-amber-950 dark:text-amber-400 text-amber-800'
                      }`}
                    >
                      {cycleInfo.isBunpoDoneInCycle ? '✓' : '2'}
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center space-x-1">
                        <p
                          className={`font-bold text-[10px] sm:text-[11px] truncate ${
                            cycleInfo.isBunpoDoneInCycle
                              ? 'text-emerald-900 dark:text-emerald-200'
                              : 'text-[#1E1B18] dark:text-slate-100'
                          }`}
                        >
                          文法 Bunpo ★: D{cycleInfo.activeDay}
                        </p>
                        {cycleInfo.isBunpoDoneInCycle && (
                          <span className="text-[7.5px] font-extrabold text-emerald-800 bg-emerald-100 dark:bg-emerald-900/80 dark:text-emerald-300 px-1 py-0.2 rounded shrink-0">
                            ✓ {t.dashboard.practiceDoneShort || 'Selesai'}
                          </span>
                        )}
                      </div>
                      <p className="text-[8px] sm:text-[9px] text-[#78716C] dark:text-slate-400 truncate">
                        {cycleInfo.isBunpoDoneInCycle ? '✓ Pola kalimat tuntas' : t.dashboard.bunpoDescShort(level)}
                      </p>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-3 h-3 shrink-0 transition-colors ${
                      cycleInfo.isBunpoDoneInCycle
                        ? 'text-emerald-600 dark:text-emerald-400'
                        : 'text-stone-400 dark:text-slate-500 group-hover:text-amber-700 dark:group-hover:text-amber-400'
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* BLOK 2: SESI MALAM (Aplikasi & Review) */}
            <div className="p-1.5 sm:p-2 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-200/80 dark:border-indigo-800/40 space-y-1 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1 text-indigo-900 dark:text-indigo-300 font-bold text-[10px] sm:text-xs min-w-0">
                  <Moon className="w-3 h-3 text-indigo-600 dark:text-indigo-400 fill-indigo-500 shrink-0" />
                  <span className="truncate">{t.dashboard.nightShort}</span>
                </div>
                <span className="text-[8px] font-bold text-indigo-800 bg-white dark:bg-indigo-950/80 dark:text-indigo-300 dark:border-indigo-800/60 px-1 py-0.2 rounded border border-indigo-200 shrink-0">
                  {t.dashboard.nightTag}
                </span>
              </div>

              <div className="space-y-1">
                <div
                  onClick={() => navigate(cycleInfo.isDokkaiDoneInCycle ? '/belajar?tab=choukai' : '/belajar?tab=dokkai')}
                  className={`p-1.5 sm:p-2 rounded-lg border cursor-pointer transition-all flex items-center justify-between shadow-2xs group active:scale-95 ${
                    cycleInfo.isDokkaiChoukaiDoneInCycle
                      ? 'bg-emerald-50/80 border-emerald-200 dark:bg-emerald-950/40 dark:border-emerald-800/60'
                      : 'bg-white dark:bg-[#0B0F19] border-indigo-100 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-500/50'
                  }`}
                >
                  <div className="flex items-center space-x-1.5 min-w-0">
                    <span
                      className={`w-4 h-4 rounded text-[8px] sm:text-[9px] font-bold flex items-center justify-center shrink-0 ${
                        cycleInfo.isDokkaiChoukaiDoneInCycle
                          ? 'bg-emerald-600 text-white'
                          : 'bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-400'
                      }`}
                    >
                      {cycleInfo.isDokkaiChoukaiDoneInCycle ? '✓' : '3'}
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center space-x-1">
                        <p
                          className={`font-bold text-[10px] sm:text-[11px] truncate ${
                            cycleInfo.isDokkaiChoukaiDoneInCycle
                              ? 'text-emerald-900 dark:text-emerald-200'
                              : 'text-[#1E1B18] dark:text-slate-100'
                          }`}
                        >
                          読解 / 聴解: D{cycleInfo.activeDay}
                        </p>
                        {cycleInfo.isDokkaiChoukaiDoneInCycle && (
                          <span className="text-[7.5px] font-extrabold text-emerald-800 bg-emerald-100 dark:bg-emerald-900/80 dark:text-emerald-300 px-1 py-0.2 rounded shrink-0">
                            ✓ {t.dashboard.practiceDoneShort || 'Selesai'}
                          </span>
                        )}
                      </div>
                      <p className="text-[8px] sm:text-[9px] text-[#78716C] dark:text-slate-400 truncate">
                        {cycleInfo.isDokkaiChoukaiDoneInCycle
                          ? (cycleInfo.isDokkaiDoneInCycle && cycleInfo.isChoukaiDoneInCycle ? '✓ Dokkai & Choukai tuntas' : '✓ 1 Latihan tuntas')
                          : t.dashboard.practicePendingShort(level)}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className={`w-3 h-3 shrink-0 transition-colors ${
                    cycleInfo.isDokkaiChoukaiDoneInCycle
                      ? 'text-emerald-600 dark:text-emerald-400'
                      : 'text-stone-400 dark:text-slate-500 group-hover:text-indigo-700 dark:group-hover:text-indigo-400'
                  }`} />
                </div>

                <div
                  onClick={() => navigate('/review')}
                  className={`p-1.5 sm:p-2 rounded-lg border cursor-pointer transition-all flex items-center justify-between shadow-2xs group active:scale-95 ${
                    pendingCount > 0
                      ? 'bg-amber-50/90 dark:bg-amber-950/40 border-amber-300 dark:border-amber-700/70 ring-1 ring-amber-200 dark:ring-amber-800/40'
                      : cycleInfo.isReviewDoneInCycle
                      ? 'bg-emerald-50/80 border-emerald-200 dark:bg-emerald-950/40 dark:border-emerald-800/60'
                      : 'bg-white dark:bg-[#0B0F19] border-indigo-100 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-500/50'
                  }`}
                >
                  <div className="flex items-center space-x-1.5 min-w-0">
                    <span
                      className={`w-4 h-4 rounded text-[8px] sm:text-[9px] font-bold flex items-center justify-center shrink-0 ${
                        pendingCount > 0
                          ? 'bg-amber-500 text-white animate-pulse'
                          : cycleInfo.isReviewDoneInCycle
                          ? 'bg-emerald-600 text-white'
                          : 'bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-400'
                      }`}
                    >
                      {pendingCount > 0 ? '4' : (cycleInfo.isReviewDoneInCycle ? '✓' : '4')}
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center space-x-1">
                        <p
                          className={`font-bold text-[10px] sm:text-[11px] truncate ${
                            cycleInfo.isReviewDoneInCycle && pendingCount === 0
                              ? 'text-emerald-900 dark:text-emerald-200'
                              : 'text-[#1E1B18] dark:text-slate-100'
                          }`}
                        >
                          {t.common.reviewSrs}
                        </p>
                        {pendingCount > 0 ? (
                          <span className="text-[8px] font-extrabold text-amber-800 bg-amber-100 dark:bg-amber-900/80 dark:text-amber-200 px-1 rounded-full border border-amber-300 shrink-0">
                            {pendingCount}
                          </span>
                        ) : cycleInfo.isReviewDoneInCycle ? (
                          <span className="text-[7.5px] font-extrabold text-emerald-800 bg-emerald-100 dark:bg-emerald-900/80 dark:text-emerald-300 px-1 py-0.2 rounded shrink-0">
                            ✓ {t.dashboard.practiceDoneShort || 'Selesai'}
                          </span>
                        ) : (
                          <span className="text-[7.5px] font-semibold text-slate-500 bg-slate-100 dark:bg-slate-800 dark:text-slate-400 px-1 py-0.2 rounded shrink-0">
                            {t.dashboard.srsUpToDateShort}
                          </span>
                        )}
                      </div>
                      <p className="text-[8px] sm:text-[9px] text-[#78716C] dark:text-slate-400 truncate">
                        {pendingCount > 0
                          ? t.dashboard.srsPendingShort(pendingCount)
                          : cycleInfo.isReviewDoneInCycle
                          ? '✓ Semua kartu up to date'
                          : t.dashboard.srsUpToDateShort}
                      </p>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-3 h-3 shrink-0 transition-colors ${
                      cycleInfo.isReviewDoneInCycle && pendingCount === 0
                        ? 'text-emerald-600 dark:text-emerald-400'
                        : 'text-stone-400 dark:text-slate-500 group-hover:text-indigo-700 dark:group-hover:text-indigo-400'
                    }`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pilar Ujian JLPT Strip (Quick Category Launcher) */}
        <div className="card-washi rounded-2xl p-2 sm:p-2.5 border border-[#EFEAE2] dark:border-[#232F46] bg-white dark:bg-[#151D2E] shadow-2xs space-y-1.5">
          <div className="flex items-center justify-between px-0.5">
            <span className="text-[10px] sm:text-[11px] font-bold text-[#A8A29E] dark:text-slate-400 uppercase tracking-wider font-mincho">
              {t.dashboard.pillarsTitle(level)}
            </span>
            <span className="text-[8px] sm:text-[9px] font-bold text-indigo-700 bg-indigo-50 dark:bg-indigo-950/80 dark:text-indigo-300 dark:border-indigo-800/60 px-2.5 py-0.5 rounded-full border border-indigo-100">
              {t.dashboard.pillarsBadge}
            </span>
          </div>

          <div className="grid grid-cols-4 gap-1.5 sm:gap-2 pt-0.5">
            <button
              onClick={() => navigate('/belajar?tab=goi')}
              className="py-1.5 px-1 sm:py-2 rounded-xl bg-[#FAF8F5] dark:bg-[#0B0F19] hover:bg-indigo-50/60 dark:hover:bg-indigo-950/30 border border-[#EFEAE2] dark:border-slate-800 hover:border-indigo-200 dark:hover:border-indigo-500/40 transition-all text-center flex flex-col items-center justify-center space-y-1 active:scale-95 shadow-2xs cursor-pointer"
            >
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                <BookOpen className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </div>
              <span className="text-[9px] sm:text-[10px] font-bold text-[#1E1B18] dark:text-slate-200 tracking-tight">
                {t.dashboard.pillarGoi}
              </span>
            </button>

            <button
              onClick={() => navigate('/belajar?tab=bunpo')}
              className="py-1.5 px-1 sm:py-2 rounded-xl bg-[#FAF8F5] dark:bg-[#0B0F19] hover:bg-indigo-50/60 dark:hover:bg-indigo-950/30 border border-[#EFEAE2] dark:border-slate-800 hover:border-indigo-200 dark:hover:border-indigo-500/40 transition-all text-center flex flex-col items-center justify-center space-y-1 active:scale-95 shadow-2xs cursor-pointer"
            >
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                <Layers className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </div>
              <span className="text-[9px] sm:text-[10px] font-bold text-[#1E1B18] dark:text-slate-200 tracking-tight">
                {t.dashboard.pillarBunpo}
              </span>
            </button>

            <button
              onClick={() => navigate('/belajar?tab=dokkai')}
              className="py-1.5 px-1 sm:py-2 rounded-xl bg-[#FAF8F5] dark:bg-[#0B0F19] hover:bg-emerald-50/60 dark:hover:bg-emerald-950/30 border border-[#EFEAE2] dark:border-slate-800 hover:border-emerald-200 dark:hover:border-emerald-500/40 transition-all text-center flex flex-col items-center justify-center space-y-1 active:scale-95 shadow-2xs cursor-pointer"
            >
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-emerald-50 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <FileText className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </div>
              <span className="text-[9px] sm:text-[10px] font-bold text-[#1E1B18] dark:text-slate-200 tracking-tight">
                {t.dashboard.pillarDokkai}
              </span>
            </button>

            <button
              onClick={() => navigate('/belajar?tab=choukai')}
              className="py-1.5 px-1 sm:py-2 rounded-xl bg-[#FAF8F5] dark:bg-[#0B0F19] hover:bg-violet-50/60 dark:hover:bg-violet-950/30 border border-[#EFEAE2] dark:border-slate-800 hover:border-violet-200 dark:hover:border-violet-500/40 transition-all text-center flex flex-col items-center justify-center space-y-1 active:scale-95 shadow-2xs cursor-pointer"
            >
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-violet-50 dark:bg-violet-950/80 text-violet-600 dark:text-violet-400 flex items-center justify-center">
                <Headphones className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </div>
              <span className="text-[9px] sm:text-[10px] font-bold text-[#1E1B18] dark:text-slate-200 tracking-tight">
                {t.dashboard.pillarChoukai}
              </span>
            </button>
          </div>
        </div>
      </>
    )}

    {/* 5. Aktivitas Belajar Minggu Ini & Ringkasan Progres */}
        <div
          onClick={() => navigate('/progress')}
          className="card-washi rounded-2xl p-2.5 sm:p-3 border border-[#EFEAE2] dark:border-[#232F46] bg-white dark:bg-[#151D2E] shadow-2xs space-y-1.5 cursor-pointer hover:border-indigo-300 dark:hover:border-indigo-600/50 transition-all group active:scale-98"
        >
          <div className="flex items-center justify-between px-0.5">
            <div className="flex items-center space-x-1.5">
              <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-md bg-amber-50 dark:bg-amber-950/70 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                <Flame className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-500 text-amber-500" />
              </div>
              <span className="text-[10px] sm:text-[11px] font-bold text-[#1E1B18] dark:text-slate-100 font-mincho">
                {t.dashboard.weeklyActivityTitle}
              </span>
            </div>
            <div className="flex items-center space-x-0.5 text-[9px] sm:text-[10px] text-indigo-600 dark:text-indigo-400 font-bold group-hover:translate-x-0.5 transition-transform">
              <span>{t.dashboard.detailLink}</span>
              <ChevronRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
            </div>
          </div>

          {/* 7-Day Streak Pills */}
          <div className="grid grid-cols-7 gap-1 pt-0.5">
            {weekDays.map((day) => (
              <div
                key={day.dateYMD}
                className={`flex flex-col items-center py-1.5 px-0.5 rounded-xl border text-center transition-all ${
                  day.isToday
                    ? day.hasStudied
                      ? 'ring-1.5 ring-amber-500 border-amber-400 bg-amber-50/80 dark:bg-amber-950/60 font-bold'
                      : 'ring-1.5 ring-indigo-500 border-indigo-400 bg-indigo-50/70 dark:bg-indigo-950/50 font-bold'
                    : day.hasStudied
                    ? 'bg-amber-50/70 dark:bg-amber-950/30 border-amber-200/80 dark:border-amber-800/50'
                    : 'bg-stone-50/60 dark:bg-[#0B0F19] border-stone-200/60 dark:border-slate-800 opacity-70'
                }`}
              >
                <span className="text-[8px] sm:text-[9px] font-medium text-stone-500 dark:text-slate-400 truncate w-full">
                  {day.label}
                </span>
                <div className="my-0.5 flex items-center justify-center h-3.5">
                  {day.hasStudied ? (
                    <Flame className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-500 fill-amber-500" />
                  ) : day.isToday ? (
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-indigo-500 animate-pulse" />
                  ) : (
                    <span className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full ${day.isFuture ? 'bg-stone-200 dark:bg-slate-700' : 'bg-stone-300 dark:bg-slate-600'}`} />
                  )}
                </div>
                <span
                  className={`text-[9px] sm:text-[10px] font-bold ${
                    day.isToday
                      ? day.hasStudied
                        ? 'text-amber-800 dark:text-amber-300'
                        : 'text-indigo-600 dark:text-indigo-400'
                      : day.hasStudied
                      ? 'text-amber-800 dark:text-amber-300'
                      : 'text-stone-400 dark:text-slate-500'
                  }`}
                >
                  {day.dayNum}
                </span>
              </div>
            ))}
          </div>

          {/* Mini Stats Summary Pill Strip */}
          <div className="grid grid-cols-3 gap-1 pt-1 border-t border-[#F2ECE3] dark:border-[#232F46]/80 text-center">
            <div className="bg-[#FAF8F5] dark:bg-[#0B0F19] py-0.5 px-1 rounded-lg border border-stone-100 dark:border-slate-800/80">
              <div className="text-[8px] sm:text-[9px] text-[#78716C] dark:text-slate-400 truncate leading-tight">{t.dashboard.statsWordsLearned}</div>
              <div className="text-[11px] sm:text-xs font-bold text-indigo-700 dark:text-indigo-400 font-sans leading-tight">
                {overallStats?.total_cards_learned ?? 0}
              </div>
            </div>
            <div className="bg-[#FAF8F5] dark:bg-[#0B0F19] py-0.5 px-1 rounded-lg border border-stone-100 dark:border-slate-800/80">
              <div className="text-[8px] sm:text-[9px] text-[#78716C] dark:text-slate-400 truncate leading-tight">{t.dashboard.statsAvgAccuracy}</div>
              <div className="text-[11px] sm:text-xs font-bold text-emerald-600 dark:text-emerald-400 font-sans leading-tight">
                {Math.round(overallStats?.average_accuracy ?? 0)}%
              </div>
            </div>
            <div className="bg-[#FAF8F5] dark:bg-[#0B0F19] py-0.5 px-1 rounded-lg border border-stone-100 dark:border-slate-800/80">
              <div className="text-[8px] sm:text-[9px] text-[#78716C] dark:text-slate-400 truncate leading-tight">{t.dashboard.statsStudyTime}</div>
              <div className="text-[11px] sm:text-xs font-bold text-amber-600 dark:text-amber-400 font-sans leading-tight">
                {overallStats?.total_study_time_minutes ?? 0} <span className="text-[8px] sm:text-[9px] font-normal">{t.dashboard.unitMinutes}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tanya AI Modal */}
      <TanyaAiModal
        isOpen={aiModalOpen}
        onClose={() => setAiModalOpen(false)}
      />

      {/* Leaderboard Modal */}
      <LeaderboardModal
        isOpen={leaderboardOpen}
        onClose={() => setLeaderboardOpen(false)}
      />
    </>
  );
};
