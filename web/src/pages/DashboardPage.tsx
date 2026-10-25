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
import { reviewApi, progressApi } from '@/services/api';
import type { OverallStats, DayStats } from '@/types';
import { TanyaAiModal } from '@/components/TanyaAiModal';
import { LeaderboardModal } from '@/components/LeaderboardModal';
import { calculateUserLevel } from '@/utils/levelHelper';
import { DOKKAI_PASSAGES } from '@/data/dokkaiData';
import { CHOUKAI_QUESTIONS } from '@/data/choukaiData';
import { formatLocalYMD } from '@/utils';
import {
  getUserKey,
  mergeDeckProgress,
  mergeOverallStats,
  mergeCalendarDays,
  computeLocalStreak,
  getLocalDailyActivity,
} from '@/utils/userProgressHelper';

export const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const currentLevel = useAuthStore((state) => state.currentLevel) || user?.current_level || 'N2';
  const { pendingCount, setPendingCount } = useReviewStore();
  const { t, language } = useTranslation();
  const [aiModalOpen, setAiModalOpen] = useState(false);
  const [leaderboardOpen, setLeaderboardOpen] = useState(false);
  const [dokkaiDone, setDokkaiDone] = useState(false);
  const [choukaiDone, setChoukaiDone] = useState(false);
  const [bunpoDone, setBunpoDone] = useState(false);
  const [overallStats, setOverallStats] = useState<OverallStats | null>(null);
  const [calendarDays, setCalendarDays] = useState<DayStats[]>([]);

  const level = currentLevel;
  const userLvl = calculateUserLevel(user?.total_xp ?? 0, language);
  const [activeDay, setActiveDay] = useState(1);
  const [targetWordsCount, setTargetWordsCount] = useState(30);
  const [countdownDays, setCountdownDays] = useState<number>(49);

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

  const userKey = getUserKey(user);

  useEffect(() => {
    async function loadDeckProgress() {
      try {
        const res = await progressApi.getDeckProgress();
        const rawDecks = res?.data || [];
        const mergedDecks = mergeDeckProgress(rawDecks, userKey);
        if (mergedDecks.length > 0) {
          const levelDecks = mergedDecks.filter((d) => d.jlpt_level === level);
          const firstIncomplete = levelDecks.find((d) => (d.progress_percent || 0) < 100);
          if (firstIncomplete) {
            setActiveDay(firstIncomplete.day_number);
            setTargetWordsCount(firstIncomplete.total_kotoba || 30);
          } else if (levelDecks.length > 0 && levelDecks[levelDecks.length - 1]) {
            const lastDeck = levelDecks[levelDecks.length - 1]!;
            setActiveDay(lastDeck.day_number);
            setTargetWordsCount(lastDeck.total_kotoba || 30);
          }
        }
      } catch {
        setActiveDay(1);
        setTargetWordsCount(30);
      }
    }
    loadDeckProgress();

    const handleProgressUpdate = () => void loadDeckProgress();
    window.addEventListener('kanarau_progress_updated', handleProgressUpdate);
    return () => window.removeEventListener('kanarau_progress_updated', handleProgressUpdate);
  }, [level, user, userKey]);

  // Level-specific progress evaluation for Bunpo, Dokkai & Choukai (user-isolated & completed today)
  useEffect(() => {
    function loadModuleCompletion() {
      try {
        const todayStr = formatLocalYMD();

        let isBunpo = false;
        const bSaved = localStorage.getItem(`kanarau_bunpo_results_${userKey}`);
        if (bSaved) {
          const parsed = JSON.parse(bSaved);
          isBunpo = Boolean(parsed && Object.keys(parsed).some((k) => Boolean(parsed[k])));
        }
        setBunpoDone(isBunpo);

        let isDokkaiDone = false;
        const dSaved = localStorage.getItem(`kanarau_dokkai_results_${userKey}`);
        if (dSaved) {
          const parsed = JSON.parse(dSaved);
          isDokkaiDone = DOKKAI_PASSAGES.some((p) => {
            if (p.level !== level) return false;
            const rec = parsed[p.id];
            if (!rec) return false;
            const recDate = (rec.completedAt || rec.timestamp || '').slice(0, 10);
            return recDate === todayStr;
          });
        }
        setDokkaiDone(isDokkaiDone);

        let isChoukaiDone = false;
        const cSaved = localStorage.getItem(`kanarau_choukai_results_${userKey}`);
        if (cSaved) {
          const parsed = JSON.parse(cSaved);
          isChoukaiDone = CHOUKAI_QUESTIONS.some((q) => {
            if (q.level !== level) return false;
            const rec = parsed[q.id];
            if (!rec) return false;
            const recDate = (rec.completedAt || rec.timestamp || '').slice(0, 10);
            return recDate === todayStr;
          });
        }
        setChoukaiDone(isChoukaiDone);
      } catch {
        setBunpoDone(false);
        setDokkaiDone(false);
        setChoukaiDone(false);
      }
    }
    loadModuleCompletion();

    const handleProgressUpdate = () => loadModuleCompletion();
    window.addEventListener('kanarau_progress_updated', handleProgressUpdate);
    return () => window.removeEventListener('kanarau_progress_updated', handleProgressUpdate);
  }, [level, user, userKey]);

  useEffect(() => {
    async function loadStatsData() {
      try {
        const now = new Date();
        const [statsRes, calRes] = await Promise.all([
          progressApi.getOverallStats(),
          progressApi.getCalendar(now.getFullYear(), now.getMonth() + 1),
        ]);
        const mergedStats = mergeOverallStats(statsRes?.data || null, userKey);
        setOverallStats(mergedStats);

        const rawCalDays = calRes?.data?.days || [];
        const mergedCalDays = mergeCalendarDays(rawCalDays, userKey);
        setCalendarDays(mergedCalDays);
      } catch (err) {
        console.warn('Could not load weekly stats:', err);
        const fallbackStats = mergeOverallStats(null, userKey);
        setOverallStats(fallbackStats);
        const fallbackCalDays = mergeCalendarDays([], userKey);
        setCalendarDays(fallbackCalDays);
      }
    }
    loadStatsData();

    const handleProgressUpdate = () => void loadStatsData();
    window.addEventListener('kanarau_progress_updated', handleProgressUpdate);
    return () => window.removeEventListener('kanarau_progress_updated', handleProgressUpdate);
  }, [user, userKey]);

  const todayStr = formatLocalYMD();
  const dailyActivities = getLocalDailyActivity(userKey);
  const currentStreak = computeLocalStreak(userKey, overallStats?.current_streak ?? user?.streak);
  const isGoiDoneToday = Boolean(
    dailyActivities[todayStr]?.goiCompleted ||
    (activeDay > 1) ||
    (calendarDays.find((d) => d.date === todayStr)?.studied)
  );
  const isBunpoDoneToday = Boolean(
    bunpoDone ||
    dailyActivities[todayStr]?.bunpoCompleted
  );
  const isReviewDoneToday = Boolean(
    dailyActivities[todayStr]?.reviewCompleted ||
    (dailyActivities[todayStr]?.cardsReviewed || 0) > 0
  );

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
              <span className="text-[10px] sm:text-[11px] font-extrabold text-indigo-700 bg-indigo-50 dark:bg-indigo-950/70 dark:text-indigo-300 dark:border-indigo-800/60 px-2 sm:px-2.5 py-0.5 rounded-full border border-indigo-100/80">
                 {t.common.level} {level}
              </span>
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

            <div className="text-right shrink-0">
              <span className="text-[9px] sm:text-[10px] font-bold text-amber-800 bg-amber-50 dark:bg-amber-950/70 dark:text-amber-300 dark:border-amber-800/60 px-2 sm:px-2.5 py-0.5 rounded-lg border border-amber-200 block shadow-2xs">
                {t.dashboard.countdown(countdownDays)}
              </span>
            </div>
          </div>

          <div className="mt-1.5 flex items-baseline justify-between">
            <h1 className="text-sm sm:text-base font-bold font-mincho text-[#1E1B18] dark:text-slate-100 tracking-tight truncate">
              {t.dashboard.greeting((user?.name || (user?.email ? user.email.split('@')[0] : '')) || 'Pembelajar')}
            </h1>
            <p className="text-[11px] sm:text-xs text-[#78716C] dark:text-slate-400 shrink-0 ml-2">
              {t.dashboard.focusPrefix} <strong className="text-[#1E1B18] dark:text-slate-100 font-bold">DAY {activeDay} {level}</strong>
            </p>
          </div>

          {/* Quick Launch Strip */}
          <div className="mt-1.5 pt-1.5 border-t border-[#F2ECE3] dark:border-[#232F46] flex items-center justify-between">
            <div className="flex items-center space-x-1.5 text-[11px] sm:text-xs text-[#57534E] dark:text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{t.dashboard.todayTarget(targetWordsCount)}</span>
            </div>
            <button
              onClick={() => navigate('/belajar')}
              className="flex items-center space-x-1 text-[11px] sm:text-xs font-bold text-indigo-700 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors cursor-pointer active:scale-95 py-0.5"
            >
              <span>{t.dashboard.startDay(activeDay)}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Papan Peringkat / Leaderboard Competitive Card */}
        <div
          onClick={() => setLeaderboardOpen(true)}
          className="card-washi rounded-2xl px-3 py-2 sm:py-2.5 border border-amber-200/80 dark:border-amber-800/50 bg-gradient-to-r from-amber-50/80 via-white to-indigo-50/40 dark:from-[#151D2E] dark:via-[#151D2E] dark:to-amber-950/20 cursor-pointer flex items-center justify-between shadow-2xs hover:border-amber-300 dark:hover:border-amber-500 transition-all group active:scale-98"
        >
          <div className="flex items-center space-x-2.5 min-w-0">
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white flex items-center justify-center shadow-xs shrink-0">
              <Trophy className="w-3.5 h-3.5 fill-amber-200" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center space-x-2">
                <h4 className="font-bold text-xs sm:text-sm text-[#1E1B18] dark:text-slate-100 font-mincho leading-tight">
                  {t.leaderboard?.title || 'Papan Peringkat'}
                </h4>
                <span className="text-[9px] font-extrabold px-1.5 py-0.2 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-300">
                  Lv. {userLvl.level} · {userLvl.title}
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-[#78716C] dark:text-slate-400 truncate mt-0.5">
                {t.leaderboard?.subtitle || 'Bandingkan level dan bersaing dengan pembelajar lain'}
              </p>
            </div>
          </div>
          <ChevronRight className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 group-hover:translate-x-0.5 transition-transform shrink-0 ml-2" />
        </div>

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
                {t.dashboard.tanyaAiTitle}
              </h4>
              <p className="text-[10px] sm:text-[11px] text-[#78716C] dark:text-slate-400 truncate mt-0.5">
                {t.dashboard.tanyaAiDesc}
              </p>
            </div>
          </div>
          <ChevronRight className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 group-hover:translate-x-0.5 transition-transform shrink-0 ml-2" />
        </div>

        {/* Pola 2 Sesi Harian: Pagi 15 Menit + Malam 15 Menit Card */}
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
                <p className="text-[9px] sm:text-[10px] text-[#78716C] dark:text-slate-400 leading-tight truncate">
                  {t.dashboard.routineSubShort(level)}
                </p>
              </div>
            </div>
            <span className="text-[8px] sm:text-[9px] font-bold text-indigo-700 bg-indigo-50 dark:bg-indigo-950/80 dark:text-indigo-300 dark:border-indigo-800/60 px-2 py-0.5 rounded-full border border-indigo-200 shrink-0 ml-1">
              {t.dashboard.routineBadge}
            </span>
          </div>

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
                  onClick={() => navigate('/belajar?tab=goi')}
                  className={`p-1.5 sm:p-2 rounded-lg border cursor-pointer transition-all flex items-center justify-between shadow-2xs group active:scale-95 ${
                    isGoiDoneToday
                      ? 'bg-emerald-50/80 border-emerald-200 dark:bg-emerald-950/40 dark:border-emerald-800/60'
                      : 'bg-white dark:bg-[#0B0F19] border-amber-100 dark:border-slate-800 hover:border-amber-300 dark:hover:border-amber-500/50'
                  }`}
                >
                  <div className="flex items-center space-x-1.5 min-w-0">
                    <span
                      className={`w-4 h-4 rounded text-[8px] sm:text-[9px] font-bold flex items-center justify-center shrink-0 ${
                        isGoiDoneToday
                          ? 'bg-emerald-600 text-white'
                          : 'bg-amber-100 dark:bg-amber-950 dark:text-amber-400 text-amber-800'
                      }`}
                    >
                      {isGoiDoneToday ? '✓' : '1'}
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center space-x-1">
                        <p
                          className={`font-bold text-[10px] sm:text-[11px] truncate ${
                            isGoiDoneToday
                              ? 'text-emerald-900 dark:text-emerald-200'
                              : 'text-[#1E1B18] dark:text-slate-100'
                          }`}
                        >
                          語彙 Goi: D{isGoiDoneToday ? (activeDay > 1 ? activeDay - 1 : activeDay) : activeDay}
                        </p>
                        {isGoiDoneToday && (
                          <span className="text-[7.5px] font-extrabold text-emerald-800 bg-emerald-100 dark:bg-emerald-900/80 dark:text-emerald-300 px-1 py-0.2 rounded shrink-0">
                            ✓ {t.dashboard.practiceDoneShort || 'Selesai'}
                          </span>
                        )}
                      </div>
                      <p className="text-[8px] sm:text-[9px] text-[#78716C] dark:text-slate-400 truncate">
                        {isGoiDoneToday ? t.dashboard.practiceDoneShort : t.dashboard.goiDescShort(targetWordsCount)}
                      </p>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-3 h-3 shrink-0 transition-colors ${
                      isGoiDoneToday
                        ? 'text-emerald-600 dark:text-emerald-400'
                        : 'text-stone-400 dark:text-slate-500 group-hover:text-amber-700 dark:group-hover:text-amber-400'
                    }`}
                  />
                </div>

                <div
                  onClick={() => navigate('/belajar?tab=bunpo')}
                  className={`p-1.5 sm:p-2 rounded-lg border cursor-pointer transition-all flex items-center justify-between shadow-2xs group active:scale-95 ${
                    isBunpoDoneToday
                      ? 'bg-emerald-50/80 border-emerald-200 dark:bg-emerald-950/40 dark:border-emerald-800/60'
                      : 'bg-white dark:bg-[#0B0F19] border-amber-100 dark:border-slate-800 hover:border-amber-300 dark:hover:border-amber-500/50'
                  }`}
                >
                  <div className="flex items-center space-x-1.5 min-w-0">
                    <span
                      className={`w-4 h-4 rounded text-[8px] sm:text-[9px] font-bold flex items-center justify-center shrink-0 ${
                        isBunpoDoneToday
                          ? 'bg-emerald-600 text-white'
                          : 'bg-amber-100 dark:bg-amber-950 dark:text-amber-400 text-amber-800'
                      }`}
                    >
                      {isBunpoDoneToday ? '✓' : '2'}
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center space-x-1">
                        <p
                          className={`font-bold text-[10px] sm:text-[11px] truncate ${
                            isBunpoDoneToday
                              ? 'text-emerald-900 dark:text-emerald-200'
                              : 'text-[#1E1B18] dark:text-slate-100'
                          }`}
                        >
                          文法 Bunpo ★
                        </p>
                        {isBunpoDoneToday && (
                          <span className="text-[7.5px] font-extrabold text-emerald-800 bg-emerald-100 dark:bg-emerald-900/80 dark:text-emerald-300 px-1 py-0.2 rounded shrink-0">
                            ✓ {t.dashboard.practiceDoneShort || 'Selesai'}
                          </span>
                        )}
                      </div>
                      <p className="text-[8px] sm:text-[9px] text-[#78716C] dark:text-slate-400 truncate">
                        {isBunpoDoneToday ? t.dashboard.practiceDoneShort : t.dashboard.bunpoDescShort(level)}
                      </p>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-3 h-3 shrink-0 transition-colors ${
                      isBunpoDoneToday
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
                  onClick={() => navigate(dokkaiDone ? '/belajar?tab=choukai' : '/belajar?tab=dokkai')}
                  className={`p-1.5 sm:p-2 rounded-lg border cursor-pointer transition-all flex items-center justify-between shadow-2xs group active:scale-95 ${
                    dokkaiDone || choukaiDone
                      ? 'bg-emerald-50/80 border-emerald-200 dark:bg-emerald-950/40 dark:border-emerald-800/60'
                      : 'bg-white dark:bg-[#0B0F19] border-indigo-100 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-500/50'
                  }`}
                >
                  <div className="flex items-center space-x-1.5 min-w-0">
                    <span
                      className={`w-4 h-4 rounded text-[8px] sm:text-[9px] font-bold flex items-center justify-center shrink-0 ${
                        dokkaiDone || choukaiDone
                          ? 'bg-emerald-600 text-white'
                          : 'bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-400'
                      }`}
                    >
                      {dokkaiDone || choukaiDone ? '✓' : '3'}
                    </span>
                    <div className="min-w-0">
                      <p
                        className={`font-bold text-[10px] sm:text-[11px] truncate ${
                          dokkaiDone || choukaiDone
                            ? 'text-emerald-900 dark:text-emerald-200'
                            : 'text-[#1E1B18] dark:text-slate-100'
                        }`}
                      >
                        読解 / 聴解
                      </p>
                      <p className="text-[8px] sm:text-[9px] text-[#78716C] dark:text-slate-400 truncate">
                        {dokkaiDone || choukaiDone ? t.dashboard.practiceDoneShort : t.dashboard.practicePendingShort(level)}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-3 h-3 text-stone-400 dark:text-slate-500 group-hover:text-indigo-700 dark:group-hover:text-indigo-400 transition-colors shrink-0" />
                </div>

                <div
                  onClick={() => navigate('/review')}
                  className={`p-1.5 sm:p-2 rounded-lg border cursor-pointer transition-all flex items-center justify-between shadow-2xs group active:scale-95 ${
                    pendingCount > 0
                      ? 'bg-amber-50/90 dark:bg-amber-950/40 border-amber-300 dark:border-amber-700/70 ring-1 ring-amber-200 dark:ring-amber-800/40'
                      : isReviewDoneToday
                      ? 'bg-emerald-50/80 border-emerald-200 dark:bg-emerald-950/40 dark:border-emerald-800/60'
                      : 'bg-white dark:bg-[#0B0F19] border-indigo-100 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-500/50'
                  }`}
                >
                  <div className="flex items-center space-x-1.5 min-w-0">
                    <span
                      className={`w-4 h-4 rounded text-[8px] sm:text-[9px] font-bold flex items-center justify-center shrink-0 ${
                        pendingCount > 0
                          ? 'bg-amber-500 text-white animate-pulse'
                          : isReviewDoneToday
                          ? 'bg-emerald-600 text-white'
                          : 'bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-400'
                      }`}
                    >
                      {isReviewDoneToday ? '✓' : '4'}
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center space-x-1">
                        <p
                          className={`font-bold text-[10px] sm:text-[11px] truncate ${
                            isReviewDoneToday
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
                        ) : isReviewDoneToday ? (
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
                          : isReviewDoneToday
                          ? (t.dashboard.practiceDoneShort || 'Selesai')
                          : t.dashboard.srsUpToDateShort}
                      </p>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-3 h-3 shrink-0 transition-colors ${
                      isReviewDoneToday
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
