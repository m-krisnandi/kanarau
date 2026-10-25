import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { progressApi, deckApi } from '@/services/api';
import type { OverallStats, DeckProgress, MonthlyCalendar, JLPTCountdown, JLPTLevel, Kotoba } from '@/types';
import { StudyCalendar } from '@/components/StudyCalendar';
import { Flame, Clock, Award, CheckCircle, ShieldCheck, AlertTriangle, BookOpen, FileText, Headphones, Trophy, ChevronRight, Play, X, Volume2 } from 'lucide-react';
import { DOKKAI_PASSAGES } from '@/data/dokkaiData';
import { CHOUKAI_QUESTIONS } from '@/data/choukaiData';
import { useTranslation } from '@/stores/languageStore';
import { useAuthStore } from '@/stores/authStore';
import { LeaderboardModal } from '@/components/LeaderboardModal';
import { KotobaDetailModal } from '@/components/KotobaDetailModal';
import { KanjiDetailView } from '@/components/KanjiDetailView';
import { localizeKotoba } from '@/locales/vocabularyTranslations';
import { calculateUserLevel } from '@/utils/levelHelper';
import {
  getUserKey,
  mergeDeckProgress,
  mergeOverallStats,
  mergeCalendarDays,
} from '@/utils/userProgressHelper';

export const ProgressPage: React.FC = () => {
  const navigate = useNavigate();
  const { t, language } = useTranslation();
  const user = useAuthStore((state) => state.user);
  const storeLevel = useAuthStore((state) => state.currentLevel);
  const currentLevel = (storeLevel || user?.current_level || 'N2') as JLPTLevel;

  const [selectedLevel, setSelectedLevel] = useState<JLPTLevel>(currentLevel);
  const [stats, setStats] = useState<OverallStats | null>(null);
  const [deckProgress, setDeckProgress] = useState<DeckProgress[]>([]);
  const [countdown, setCountdown] = useState<JLPTCountdown | null>(null);
  const [calendar, setCalendar] = useState<MonthlyCalendar | null>(null);
  const [leaderboardOpen, setLeaderboardOpen] = useState(false);

  // Deck Kotobas Detail Modal State
  const [selectedDeckForDetail, setSelectedDeckForDetail] = useState<DeckProgress | null>(null);
  const [deckKotobas, setDeckKotobas] = useState<Kotoba[]>([]);
  const [loadingDeckKotobas, setLoadingDeckKotobas] = useState(false);
  const [activeKotobaForDetail, setActiveKotobaForDetail] = useState<Kotoba | null>(null);
  const [activeKanjiForDetail, setActiveKanjiForDetail] = useState<string | null>(null);

  const userLvl = calculateUserLevel(user?.total_xp ?? 0, language);
  const initialDate = new Date();
  const [year, setYear] = useState(initialDate.getFullYear());
  const [month, setMonth] = useState(initialDate.getMonth() + 1);
  const [loading, setLoading] = useState(true);

  // User storage key for local completion tracking
  const userKey = user?.id ? String(user.id) : (user?.email || 'guest');

  // Sync selectedLevel if user changes currentLevel in settings/store
  useEffect(() => {
    setSelectedLevel(currentLevel);
  }, [currentLevel]);

  useEffect(() => {
    async function loadData() {
      try {
        const [statsRes, decksRes, countRes, calRes] = await Promise.all([
          progressApi.getOverallStats(),
          progressApi.getDeckProgress(),
          progressApi.getJLPTCountdown(),
          progressApi.getCalendar(year, month),
        ]);

        const rawDecks: DeckProgress[] = decksRes.data || [];
        const mergedDecks = mergeDeckProgress(rawDecks, userKey);
        const mergedStats = mergeOverallStats(statsRes.data || null, userKey);

        const rawCalDays = calRes?.data?.days || [];
        const mergedCalDays = mergeCalendarDays(rawCalDays, userKey);
        const mergedCalendar = calRes?.data
          ? {
              ...calRes.data,
              days: mergedCalDays,
            }
          : null;

        setStats(mergedStats);
        setDeckProgress(mergedDecks);
        setCountdown(countRes.data);
        setCalendar(mergedCalendar);
      } catch (err) {
        console.error('Error loading progress stats', err);
        const fallbackStats = mergeOverallStats(null, userKey);
        setStats(fallbackStats);
      } finally {
        setLoading(false);
      }
    }
    loadData();

    const handleProgressUpdate = () => void loadData();
    window.addEventListener('kanarau_progress_updated', handleProgressUpdate);
    return () => window.removeEventListener('kanarau_progress_updated', handleProgressUpdate);
  }, [year, month, userKey]);

  const handleOpenDeckDetail = async (dp: DeckProgress) => {
    setSelectedDeckForDetail(dp);
    setLoadingDeckKotobas(true);
    try {
      const res = await deckApi.getKotoba(dp.deck_id);
      setDeckKotobas(res.data || []);
    } catch (err) {
      console.error('Error loading deck kotobas in progress', err);
      setDeckKotobas([]);
    } finally {
      setLoadingDeckKotobas(false);
    }
  };

  const totalMinutes = stats?.total_study_time_minutes ?? 0;
  const hours = Math.floor(totalMinutes / 60);
  const mins = totalMinutes % 60;


  // 1. Seksi Pengetahuan Bahasa (Goi & Bunpo): max 60
  const levelDecks = deckProgress.filter((d) => d.jlpt_level === selectedLevel);
  const totalLevelWords = levelDecks.reduce((sum, d) => sum + (d.total_kotoba || 0), 0);
  const weightedLearned = levelDecks.reduce(
    (sum, d) => sum + (d.mastered || 0) + (d.reviewing || 0) * 0.7 + (d.learned || 0) * 0.4,
    0
  );
  const goiRatio = totalLevelWords > 0 ? Math.min(1, weightedLearned / totalLevelWords) : 0;
  const accFactor = (stats?.average_accuracy ?? 75) / 100;
  const goiScore = Math.min(60, Math.round(goiRatio * 52 + (goiRatio > 0 ? 8 * accFactor : 0)));

  // 2. Seksi Dokkai (Bacaan): max 60
  let dokkaiScore = 0;
  try {
    const dSaved = localStorage.getItem(`kanarau_dokkai_results_${userKey}`);
    const dMap = dSaved ? JSON.parse(dSaved) : {};
    const levelPassages = DOKKAI_PASSAGES.filter((p) => p.level === selectedLevel);
    if (levelPassages.length > 0) {
      let correctCount = 0;
      levelPassages.forEach((p) => {
        const res = dMap[p.id];
        const storedCorrect = typeof res?.correctCount === 'number'
          ? res.correctCount
          : typeof res?.score === 'number'
          ? res.score
          : null;
        const storedTotal = typeof res?.totalCount === 'number'
          ? res.totalCount
          : p.questions?.length || 0;
        if (storedCorrect !== null && storedTotal > 0) {
          correctCount += (storedCorrect / storedTotal);
        }
      });
      dokkaiScore = Math.min(60, Math.round((correctCount / levelPassages.length) * 60));
    }
  } catch {
    dokkaiScore = 0;
  }

  // 3. Seksi Choukai (Pendengaran): max 60
  let choukaiScore = 0;
  try {
    const cSaved = localStorage.getItem(`kanarau_choukai_results_${userKey}`);
    const cMap = cSaved ? JSON.parse(cSaved) : {};
    const levelQuestions = CHOUKAI_QUESTIONS.filter((q) => q.level === selectedLevel);
    if (levelQuestions.length > 0) {
      let correctChoukai = 0;
      levelQuestions.forEach((q) => {
        const res = cMap[q.id];
        if (res && res.isCorrect) {
          correctChoukai += 1;
        }
      });
      choukaiScore = Math.min(60, Math.round((correctChoukai / levelQuestions.length) * 60));
    }
  } catch {
    choukaiScore = 0;
  }

  const PASSING_TARGETS: Record<JLPTLevel, number> = {
    N5: 80,
    N4: 90,
    N3: 95,
    N2: 90,
    N1: 100,
  };

  const passingScore = PASSING_TARGETS[selectedLevel] || 90;
  const totalScore = goiScore + dokkaiScore + choukaiScore;
  const isOverallPassed = totalScore >= passingScore && goiScore >= 19 && dokkaiScore >= 19 && choukaiScore >= 19;

    const filteredDecks = deckProgress.filter((dp) => dp.jlpt_level === selectedLevel);
  const levels: JLPTLevel[] = ['N5', 'N4', 'N3', 'N2', 'N1'];

  return (
    <div className="space-y-5 pb-24 max-w-md mx-auto">
      {/* Header */}
      <div className="pt-1 text-center">
        <h1 className="text-xl font-bold font-mincho text-[#1E1B18] tracking-tight">{t.progress.title}</h1>
        <p className="text-xs text-[#78716C] mt-0.5">
          {t.progress.subtitle}
        </p>
      </div>

      {/* Gamification Level & Leaderboard Card */}
      <div
        onClick={() => setLeaderboardOpen(true)}
        className="card-washi rounded-2xl p-3.5 border border-amber-200/90 dark:border-amber-800/60 bg-gradient-to-r from-amber-50/70 via-white to-orange-50/40 dark:from-[#151D2E] dark:via-[#151D2E] dark:to-amber-950/20 shadow-xs cursor-pointer hover:border-amber-300 dark:hover:border-amber-500 transition-all group active:scale-98"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white flex items-center justify-center shadow-xs shrink-0">
              <Trophy className="w-5 h-5 fill-amber-200" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-bold text-amber-800 dark:text-amber-300 bg-amber-100/80 dark:bg-amber-900/60 px-2 py-0.5 rounded-full">
                  Level {userLvl.level}
                </span>
                <span className="text-sm font-bold font-mincho text-[#1E1B18] dark:text-slate-100">
                  {userLvl.title}
                </span>
              </div>
              <p className="text-[11px] text-[#78716C] dark:text-slate-400 mt-0.5">
                {userLvl.totalXp} XP · {userLvl.progressPercent}% menuju Level {userLvl.level + 1}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-1 text-xs font-bold text-amber-700 dark:text-amber-400 group-hover:translate-x-0.5 transition-transform shrink-0 ml-2">
            <span>{t.leaderboard?.title || 'Papan Peringkat'}</span>
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>
        <div className="w-full bg-amber-100 dark:bg-amber-950/60 h-1.5 rounded-full overflow-hidden mt-3">
          <div
            className="bg-gradient-to-r from-amber-500 to-orange-500 h-full rounded-full transition-all duration-500"
            style={{ width: `${userLvl.progressPercent}%` }}
          />
        </div>
      </div>

      {/* 4 Summary Badges */}
      <div className="grid grid-cols-2 gap-2.5">
        <div className="card-washi rounded-2xl p-4 border border-[#EFEAE2] space-y-1">
          <div className="flex items-center space-x-1.5 text-amber-500">
            <Flame className="w-4 h-4 fill-amber-500" />
            <span className="text-[11px] font-bold text-[#78716C]">{t.progress.streak}</span>
          </div>
          <div className="text-2xl font-bold font-mincho text-[#1E1B18]">
            {stats?.current_streak ?? 0} {t.progress.days}
          </div>
          <p className="text-[10px] text-[#A8A29E]">{t.progress.longestStreak(stats?.longest_streak ?? 0)}</p>
        </div>

        <div className="card-washi rounded-2xl p-4 border border-[#EFEAE2] space-y-1">
          <div className="flex items-center space-x-1.5 text-indigo-500">
            <Clock className="w-4 h-4" />
            <span className="text-[11px] font-bold text-[#78716C]">{t.progress.totalTime}</span>
          </div>
          <div className="text-2xl font-bold font-mincho text-[#1E1B18]">
            {t.progress.formatTotalTime(hours, mins)}
          </div>
          <p className="text-[10px] text-[#A8A29E]">{t.progress.allSessions}</p>
        </div>

        <div className="card-washi rounded-2xl p-4 border border-[#EFEAE2] space-y-1">
          <div className="flex items-center space-x-1.5 text-emerald-600">
            <CheckCircle className="w-4 h-4" />
            <span className="text-[11px] font-bold text-[#78716C]">{t.progress.masteredWords}</span>
          </div>
          <div className="text-2xl font-bold font-mincho text-[#1E1B18]">
            {stats?.total_cards_learned ?? 0} {t.progress.words}
          </div>
          <p className="text-[10px] text-[#A8A29E]">{t.progress.accuracy(stats?.average_accuracy ?? 0)}</p>
        </div>

        <div className="card-washi rounded-2xl p-4 border border-[#EFEAE2] space-y-1">
          <div className="flex items-center space-x-1.5 text-rose-500">
            <Award className="w-4 h-4" />
            <span className="text-[11px] font-bold text-[#78716C]">{t.progress.jlptTarget}</span>
          </div>
          <div className="text-2xl font-bold font-mincho text-[#1E1B18]">
            H-{countdown?.days_remaining ?? 49}
          </div>
          <p className="text-[10px] text-[#A8A29E]">{t.progress.level(countdown?.level || currentLevel)}</p>
        </div>
      </div>

      {/* JLPT 3-Section Exam Readiness Card (Min. 19/60 Tiap Seksi) */}
      <div className="card-washi rounded-2xl p-4 border border-indigo-200/80 dark:border-indigo-900/60 bg-gradient-to-br from-indigo-50/40 via-white to-amber-50/20 dark:from-[#151D2E] dark:via-[#151D2E] dark:to-slate-900 shadow-xs space-y-3.5">
        <div className="flex items-start justify-between">
          <div className="space-y-0.5">
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 dark:bg-indigo-950/80 dark:text-indigo-300 dark:border-indigo-800/60 px-2 py-0.5 rounded-full border border-indigo-200">
                JLPT {selectedLevel}
              </span>
              <h2 className="text-xs font-bold font-mincho text-[#1E1B18] dark:text-slate-100">
                {(t.progress as any).sectionalReadinessTitle || 'Kesiapan 3 Seksi Ujian JLPT'}
              </h2>
            </div>
            <p className="text-[11px] text-[#78716C] dark:text-slate-400">
              {(t.progress as any).sectionalReadinessSub
                ? (t.progress as any).sectionalReadinessSub(selectedLevel)
                : `Target kelulusan ${selectedLevel}: Minimal 19/60 poin di tiap seksi`}
            </p>
          </div>

          <span
            className={`text-[10px] font-bold px-2 py-1 rounded-lg border flex items-center space-x-1 shrink-0 ${
              isOverallPassed
                ? 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/70 dark:text-emerald-300 dark:border-emerald-800'
                : 'bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-950/70 dark:text-amber-300 dark:border-amber-800'
            }`}
          >
            {isOverallPassed ? (
              <>
                <ShieldCheck className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                <span>{(t.progress as any).targetAchieved || "Target Tercapai"}</span>
              </>
            ) : (
              <>
                <AlertTriangle className="w-3 h-3 text-amber-600 dark:text-amber-400" />
                <span>{(t.progress as any).targetNotAchieved || "Target Belum Tercapai"}</span>
              </>
            )}
          </span>
        </div>

        {/* 3 Section Gauges */}
        <div className="space-y-2.5 pt-1">
          {/* Section 1: Goi & Bunpo */}
          <div className="p-2.5 rounded-xl bg-white/90 dark:bg-[#0B0F19] border border-stone-200/70 dark:border-slate-800 space-y-1.5 shadow-2xs">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center space-x-1.5">
                <BookOpen className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                <span className="font-bold text-[#1E1B18] dark:text-slate-200">
                  {(t.progress as any).sectionGoiBunpo || 'Pengetahuan Bahasa (Goi & Bunpo)'}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span
                  className={`text-[9px] font-bold px-1.5 py-0.2 rounded border ${
                    goiScore >= 19
                      ? 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300'
                      : 'bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-950/60 dark:text-amber-300'
                  }`}
                >
                  {goiScore >= 19
                    ? (t.progress as any).statusSafe || 'Aman (>= 19)'
                    : (t.progress as any).statusWarning || 'Perlu Latihan (< 19)'}
                </span>
                <span className="font-extrabold text-[#1E1B18] dark:text-white font-mono">
                  {goiScore} / 60
                </span>
              </div>
            </div>
            <div className="relative w-full h-2 bg-stone-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div
                style={{ width: `${Math.round((goiScore / 60) * 100)}%` }}
                className={`h-full rounded-full transition-all duration-500 ${
                  goiScore >= 19 ? 'bg-indigo-600 dark:bg-indigo-500' : 'bg-amber-500'
                }`}
              />
              {/* Threshold 19 line (31.67%) */}
              <div
                className="absolute top-0 bottom-0 w-[1.5px] bg-red-400/80 z-10"
                style={{ left: '31.67%' }}
                title={(t.progress as any).sectionalCutoffTitle || "Batas Minimal Lulus Seksi (19 Poin)"}
              />
            </div>
          </div>

          {/* Section 2: Dokkai */}
          <div className="p-2.5 rounded-xl bg-white/90 dark:bg-[#0B0F19] border border-stone-200/70 dark:border-slate-800 space-y-1.5 shadow-2xs">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center space-x-1.5">
                <FileText className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span className="font-bold text-[#1E1B18] dark:text-slate-200">
                  {(t.progress as any).sectionDokkai || 'Pemahaman Bacaan (Dokkai)'}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span
                  className={`text-[9px] font-bold px-1.5 py-0.2 rounded border ${
                    dokkaiScore >= 19
                      ? 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300'
                      : 'bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-950/60 dark:text-amber-300'
                  }`}
                >
                  {dokkaiScore >= 19
                    ? (t.progress as any).statusSafe || 'Aman (>= 19)'
                    : (t.progress as any).statusWarning || 'Perlu Latihan (< 19)'}
                </span>
                <span className="font-extrabold text-[#1E1B18] dark:text-white font-mono">
                  {dokkaiScore} / 60
                </span>
              </div>
            </div>
            <div className="relative w-full h-2 bg-stone-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div
                style={{ width: `${Math.round((dokkaiScore / 60) * 100)}%` }}
                className={`h-full rounded-full transition-all duration-500 ${
                  dokkaiScore >= 19 ? 'bg-emerald-600 dark:bg-emerald-500' : 'bg-amber-500'
                }`}
              />
              <div
                className="absolute top-0 bottom-0 w-[1.5px] bg-red-400/80 z-10"
                style={{ left: '31.67%' }}
                title={(t.progress as any).sectionalCutoffTitle || "Batas Minimal Lulus Seksi (19 Poin)"}
              />
            </div>
          </div>

          {/* Section 3: Choukai */}
          <div className="p-2.5 rounded-xl bg-white/90 dark:bg-[#0B0F19] border border-stone-200/70 dark:border-slate-800 space-y-1.5 shadow-2xs">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center space-x-1.5">
                <Headphones className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
                <span className="font-bold text-[#1E1B18] dark:text-slate-200">
                  {(t.progress as any).sectionChoukai || 'Pemahaman Mendengar (Choukai)'}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span
                  className={`text-[9px] font-bold px-1.5 py-0.2 rounded border ${
                    choukaiScore >= 19
                      ? 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300'
                      : 'bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-950/60 dark:text-amber-300'
                  }`}
                >
                  {choukaiScore >= 19
                    ? (t.progress as any).statusSafe || 'Aman (>= 19)'
                    : (t.progress as any).statusWarning || 'Perlu Latihan (< 19)'}
                </span>
                <span className="font-extrabold text-[#1E1B18] dark:text-white font-mono">
                  {choukaiScore} / 60
                </span>
              </div>
            </div>
            <div className="relative w-full h-2 bg-stone-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div
                style={{ width: `${Math.round((choukaiScore / 60) * 100)}%` }}
                className={`h-full rounded-full transition-all duration-500 ${
                  choukaiScore >= 19 ? 'bg-violet-600 dark:bg-violet-500' : 'bg-amber-500'
                }`}
              />
              <div
                className="absolute top-0 bottom-0 w-[1.5px] bg-red-400/80 z-10"
                style={{ left: '31.67%' }}
                title={(t.progress as any).sectionalCutoffTitle || "Batas Minimal Lulus Seksi (19 Poin)"}
              />
            </div>
          </div>
        </div>

        {/* Footer Score Total & JLPT Rule Reminder */}
        <div className="pt-2 border-t border-stone-200/80 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-[11px]">
          <div className="flex items-center space-x-2">
            <span className="text-stone-500 dark:text-slate-400">
              {(t.progress as any).projectedTotal || 'Estimasi Total Skor'}:
            </span>
            <span className="font-extrabold text-stone-900 dark:text-white font-mono text-xs">
              {totalScore} / 180
            </span>
            <span className="text-[10px] text-stone-400 dark:text-slate-500">
              (Target: {passingScore}/180)
            </span>
          </div>
          <p className="text-[10px] text-stone-400 dark:text-slate-500 leading-tight">
            {(t.progress as any).passingTargetNote
              ? (t.progress as any).passingTargetNote(selectedLevel, passingScore)
              : `Standar kelulusan JLPT ${selectedLevel}: minimal ${passingScore}/180 poin & tidak ada seksi di bawah 19 poin.`}
          </p>
        </div>
      </div>


      {/* Monthly Calendar Section */}
      <div className="space-y-2 pt-1">
        <h2 className="text-xs font-bold text-[#1E1B18] tracking-wider uppercase font-mincho px-1">
          {t.progress.activityCalendar}
        </h2>
        <StudyCalendar
          calendar={calendar}
          currentYear={year}
          currentMonth={month}
          streak={stats?.current_streak ?? 0}
          countdownDays={countdown?.days_remaining ?? 49}
          onPrevMonth={() => {
            if (month === 1) {
              setMonth(12);
              setYear((y) => y - 1);
            } else {
              setMonth((m) => m - 1);
            }
          }}
          onNextMonth={() => {
            if (month === 12) {
              setMonth(1);
              setYear((y) => y + 1);
            } else {
              setMonth((m) => m + 1);
            }
          }}
        />
      </div>

      {/* Spaced Repetition Mastery per Deck */}
      <div className="space-y-3 pt-1">
        <div className="flex items-center justify-between px-1">
          <div>
            <h2 className="text-xs font-bold text-[#1E1B18] tracking-wider uppercase font-mincho">
              {t.progress.deckMastery}
            </h2>
            <p className="text-[11px] text-[#78716C] mt-0.5">
              {t.progress.deckMasterySubtitle(selectedLevel)}
            </p>
          </div>

          {/* Level Filter Pills */}
          <div className="flex items-center bg-[#EFEAE2]/60 p-0.5 rounded-lg border border-[#E5DFD5]">
            {levels.map((lvl) => (
              <button
                key={lvl}
                onClick={() => setSelectedLevel(lvl)}
                className={`px-2 py-0.5 text-[10px] font-bold rounded-md transition-colors cursor-pointer ${
                  selectedLevel === lvl
                    ? 'bg-white text-indigo-700 shadow-2xs'
                    : 'text-[#78716C] hover:text-[#1E1B18]'
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          {filteredDecks.length === 0 ? (
            <div className="card-washi rounded-xl p-6 text-center text-xs text-[#78716C] border border-[#EFEAE2]">
              {(t.progress as any).noDecks ? (t.progress as any).noDecks(selectedLevel) : `Belum ada dek untuk tingkat ${selectedLevel}.`}
            </div>
          ) : (
            filteredDecks.map((dp) => {
              const total = dp.total_kotoba || 0;
              const mastered = dp.mastered || 0;
              const reviewing = dp.reviewing || 0;
              const learning = dp.learned || 0;
              const masteredPct = total > 0 ? (mastered / total) * 100 : 0;
              const reviewingPct = total > 0 ? (reviewing / total) * 100 : 0;
              const learningPct = total > 0 ? (learning / total) * 100 : 0;

              return (
                <div
                  key={dp.deck_id}
                  onClick={() => handleOpenDeckDetail(dp)}
                  className="card-washi card-washi-hover rounded-xl p-3.5 border border-[#EFEAE2] hover:border-indigo-300 dark:hover:border-indigo-600 transition-all cursor-pointer space-y-2.5 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-xs text-[#1E1B18] group-hover:text-indigo-600 transition-colors">{dp.deck_name}</span>
                      <span className="text-[10px] text-[#78716C]">
                        {t.progress.totalWordsTag(total)}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <span className="text-xs font-bold text-indigo-700 font-mono">
                        {(dp.progress_percent ?? 0).toFixed(0)}%
                      </span>
                      <ChevronRight className="w-4 h-4 text-stone-300 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </div>

                  {/* Multi-segment SRS Progress Bar */}
                  <div className="w-full bg-[#EFEAE2] h-1.5 rounded-full overflow-hidden flex">
                    <div
                      className="bg-emerald-500 h-full transition-all"
                      style={{ width: `${masteredPct}%` }}
                      title={`${mastered} ${t.progress.masteredTag}`}
                    />
                    <div
                      className="bg-amber-500 h-full transition-all"
                      style={{ width: `${reviewingPct}%` }}
                      title={`${reviewing} ${t.progress.reviewingTag}`}
                    />
                    <div
                      className="bg-indigo-500 h-full transition-all"
                      style={{ width: `${learningPct}%` }}
                      title={`${learning} ${t.progress.learningTag}`}
                    />
                  </div>

                  {/* SRS Breakdown Badges */}
                  <div className="flex items-center space-x-2 text-[10px]">
                    <span className="px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-100 font-medium">
                      {mastered} {t.progress.masteredTag}
                    </span>
                    <span className="px-1.5 py-0.5 rounded-md bg-amber-50 text-amber-700 border border-amber-100 font-medium">
                      {reviewing} {t.progress.reviewingTag}
                    </span>
                    <span className="px-1.5 py-0.5 rounded-md bg-indigo-50 text-indigo-700 border border-indigo-100 font-medium">
                      {learning} {t.progress.learningTag}
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Deck Words Detail Modal */}
      {selectedDeckForDetail && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedDeckForDetail(null);
          }}
          className="fixed inset-0 z-50 overflow-hidden flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/50 backdrop-blur-xs animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#FAF8F5] dark:bg-[#121824] rounded-t-3xl sm:rounded-2xl max-w-md w-full max-h-[85vh] flex flex-col overflow-hidden border border-[#EFEAE2] dark:border-[#232F46] shadow-2xl animate-slide-up"
          >
            {/* Header */}
            <div className="p-4 border-b border-[#EFEAE2] dark:border-[#232F46] flex items-center justify-between bg-white dark:bg-[#151D2E]">
              <div>
                <h3 className="font-bold text-base font-mincho text-[#1E1B18] dark:text-white">
                  {t.progress.deckWordsDetailTitle
                    ? t.progress.deckWordsDetailTitle(selectedDeckForDetail.deck_name)
                    : `Rincian Kosakata - ${selectedDeckForDetail.deck_name}`}
                </h3>
                <p className="text-xs text-[#78716C] dark:text-slate-400 mt-0.5">
                  {t.progress.deckWordsDetailSub
                    ? t.progress.deckWordsDetailSub(deckKotobas.length, Math.round(selectedDeckForDetail.progress_percent || 0))
                    : `${deckKotobas.length} Kosakata · ${Math.round(selectedDeckForDetail.progress_percent || 0)}% Selesai`}
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => {
                    navigate(`/study-session/${selectedDeckForDetail.deck_id}`);
                  }}
                  className="px-3 py-1.5 bg-[#1E1B18] dark:bg-indigo-600 hover:bg-black dark:hover:bg-indigo-700 text-white text-xs font-bold rounded-xl flex items-center space-x-1.5 shadow-sm cursor-pointer active:scale-95 transition-all"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>{t.progress.studyThisDeck || 'Pelajari Deck Ini'}</span>
                </button>
                <button
                  onClick={() => setSelectedDeckForDetail(null)}
                  className="w-8 h-8 rounded-full bg-[#EFEAE2]/70 dark:bg-[#1E293B] hover:bg-[#E2DDD5] dark:hover:bg-[#28354D] text-[#57534E] dark:text-slate-300 flex items-center justify-center text-xs font-bold cursor-pointer transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Instruction Tip */}
            <div className="px-4 py-2 bg-indigo-50/70 dark:bg-indigo-950/40 border-b border-indigo-100 dark:border-indigo-900/60 text-[11px] text-indigo-700 dark:text-indigo-300 flex items-center justify-between">
              <span>{t.progress.clickForDetail || 'Klik kosakata untuk melihat detail lengkap & konjugasi'}</span>
            </div>

            {/* Word List */}
            <div className="p-4 overflow-y-auto space-y-2 flex-1">
              {loadingDeckKotobas ? (
                <div className="text-center py-12 text-xs text-[#78716C] dark:text-slate-400">
                  {t.belajar.previewModal.loading}
                </div>
              ) : deckKotobas.length === 0 ? (
                <div className="text-center py-12 text-xs text-[#78716C] dark:text-slate-400">
                  {t.belajar.previewModal.empty}
                </div>
              ) : (
                deckKotobas.map((rawK) => {
                  const k = localizeKotoba(rawK, language);
                  return (
                    <div
                      key={k.id}
                      onClick={() => setActiveKotobaForDetail(k)}
                      className="card-washi rounded-xl p-3 border border-[#EFEAE2] dark:border-[#232F46] hover:border-indigo-300 dark:hover:border-indigo-600 cursor-pointer flex items-center justify-between transition-all group active:scale-[0.99]"
                    >
                      <div className="min-w-0 pr-2">
                        <div className="flex items-baseline space-x-2">
                          <span className="font-bold font-jp text-base text-[#1E1B18] dark:text-white group-hover:text-indigo-600 transition-colors">
                            {k.kanji || k.hiragana}
                          </span>
                          {k.kanji && (
                            <span className="text-xs font-jp text-indigo-600 dark:text-indigo-400 font-semibold">
                              {k.hiragana}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-[#57534E] dark:text-slate-300 line-clamp-1 mt-0.5">{k.meaning}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-[#A8A29E] group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-all shrink-0" />
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      )}

      {/* Kotoba Detail & Kanji Breakdown Modals */}
      <KotobaDetailModal
        kotoba={activeKotobaForDetail}
        onClose={() => setActiveKotobaForDetail(null)}
        onViewKanji={(char) => {
          setActiveKotobaForDetail(null);
          setActiveKanjiForDetail(char);
        }}
      />

      {activeKanjiForDetail && (
        <KanjiDetailView
          character={activeKanjiForDetail}
          onClose={() => setActiveKanjiForDetail(null)}
        />
      )}

      {/* Leaderboard Modal */}
      <LeaderboardModal
        isOpen={leaderboardOpen}
        onClose={() => setLeaderboardOpen(false)}
      />
    </div>
  );
};
