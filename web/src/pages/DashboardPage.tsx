import React, { useEffect, useState } from 'react';
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
} from 'lucide-react';
import { useAuthStore } from '@/stores/authStore';
import { useReviewStore } from '@/stores/reviewStore';
import { useTranslation } from '@/stores/languageStore';
import { reviewApi, progressApi } from '@/services/api';
import { TanyaAiModal } from '@/components/TanyaAiModal';
import { DOKKAI_PASSAGES } from '@/data/dokkaiData';
import { CHOUKAI_QUESTIONS } from '@/data/choukaiData';

export const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const currentLevel = useAuthStore((state) => state.currentLevel) || user?.current_level || 'N2';
  const { pendingCount, setPendingCount } = useReviewStore();
  const { t } = useTranslation();
  const [aiModalOpen, setAiModalOpen] = useState(false);
  const [dokkaiDone, setDokkaiDone] = useState(false);
  const [choukaiDone, setChoukaiDone] = useState(false);

  const level = currentLevel;
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

  useEffect(() => {
    async function loadDeckProgress() {
      try {
        const res = await progressApi.getDeckProgress();
        if (res?.data && res.data.length > 0) {
          const levelDecks = res.data.filter((d) => d.jlpt_level === level);
          const firstIncomplete = levelDecks.find((d) => d.progress_percent < 100);
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
  }, [level, user]);

  // Level-specific progress evaluation for Dokkai & Choukai (user-isolated & completed today)
  useEffect(() => {
    try {
      const todayStr = new Date().toISOString().slice(0, 10);
      const userKey = user?.id ? String(user.id) : (user?.email || 'guest');

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
      setDokkaiDone(false);
      setChoukaiDone(false);
    }
  }, [level, user]);

  useEffect(() => {
    async function loadData() {
      try {
        const statsRes = await reviewApi.getStats();
        setPendingCount(statsRes.data.pending_count);
      } catch (err) {
        console.error('Error loading dashboard data', err);
      }
    }
    loadData();
  }, [setPendingCount]);

  return (
    <>
      <div className="space-y-3 pb-16 max-w-md mx-auto">
        {/* Authentic Welcoming Dashboard Header */}
        <div className="card-washi rounded-2xl p-4 sm:p-5 border border-[#EFEAE2] dark:border-[#232F46] relative overflow-hidden bg-gradient-to-br from-white via-white to-indigo-50/20 dark:from-[#151D2E] dark:via-[#151D2E] dark:to-indigo-950/30 shadow-xs">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-bold text-indigo-700 bg-indigo-50 dark:bg-indigo-950/70 dark:text-indigo-300 dark:border-indigo-800/60 px-2 py-0.5 rounded-full border border-indigo-100/80">
                  Level {level}
                </span>
                <span className="text-[11px] text-[#78716C] dark:text-slate-400 flex items-center space-x-1">
                  <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  <span>{t.dashboard.streak(user?.streak ?? 0)}</span>
                </span>
              </div>
              <h1 className="text-base sm:text-lg font-bold font-mincho text-[#1E1B18] dark:text-slate-100 tracking-tight">
                {t.dashboard.greeting((user?.name || (user?.email ? user.email.split('@')[0] : '')) || 'Pembelajar')}
              </h1>
              <p className="text-xs text-[#78716C] dark:text-slate-400 leading-relaxed">
                {t.dashboard.focusPrefix}
                <span className="font-bold text-[#1E1B18] dark:text-slate-100">
                  DAY {activeDay} {level}
                </span>{' '}
                {t.dashboard.focusSuffix}
              </p>
            </div>

            <div className="text-right">
              <span className="text-[10px] font-bold text-amber-800 bg-amber-50 dark:bg-amber-950/70 dark:text-amber-300 dark:border-amber-800/60 px-2 py-1 rounded-lg border border-amber-200 block shadow-2xs">
                {t.dashboard.countdown(countdownDays)}
              </span>
            </div>
          </div>

          {/* Quick Launch Button to Today's Deck */}
          <div className="mt-3 pt-3 border-t border-[#F2ECE3] dark:border-[#232F46] flex items-center justify-between">
            <div className="flex items-center space-x-2 text-xs text-[#57534E] dark:text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{t.dashboard.todayTarget(targetWordsCount)}</span>
            </div>
            <button
              onClick={() => navigate('/belajar')}
              className="flex items-center space-x-1 text-xs font-bold text-indigo-700 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors cursor-pointer"
            >
              <span>{t.dashboard.startDay(activeDay)}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tanya AI Card */}
        <div
          onClick={() => setAiModalOpen(true)}
          className="card-washi rounded-2xl p-3 border border-indigo-100/90 dark:border-indigo-900/50 bg-gradient-to-r from-indigo-50/70 via-white to-amber-50/30 dark:from-[#151D2E] dark:via-[#151D2E] dark:to-purple-950/20 cursor-pointer flex items-center justify-between shadow-2xs hover:border-indigo-300 dark:hover:border-indigo-500 transition-all group"
        >
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 text-white flex items-center justify-center shadow-xs">
              <Sparkles className="w-4 h-4 fill-white" />
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <h4 className="font-bold text-xs text-[#1E1B18] dark:text-slate-100 font-mincho">
                  {t.dashboard.tanyaAiTitle}
                </h4>
              </div>
              <p className="text-[11px] text-[#78716C] dark:text-slate-400">
                {t.dashboard.tanyaAiDesc}
              </p>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-indigo-600 dark:text-indigo-400 group-hover:translate-x-0.5 transition-transform" />
        </div>

        {/* Pola 2 Sesi Harian: Pagi 15 Menit + Malam 15 Menit Card */}
        <div className="card-washi rounded-2xl p-4 border border-indigo-200/90 dark:border-indigo-900/60 bg-gradient-to-br from-indigo-50/40 via-white to-amber-50/20 dark:from-[#151D2E] dark:via-[#151D2E] dark:to-slate-900 shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-xs">
                <Target className="w-4 h-4 fill-white" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-[#1E1B18] dark:text-slate-100 font-mincho">
                  {t.dashboard.routineTitle}
                </h3>
                <p className="text-[11px] text-[#78716C] dark:text-slate-400">
                  {t.dashboard.routineSub(level)}
                </p>
              </div>
            </div>
            <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 dark:bg-indigo-950/80 dark:text-indigo-300 dark:border-indigo-800/60 px-2.5 py-1 rounded-full border border-indigo-200">
              {t.dashboard.routineBadge}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-0.5">
            {/* BLOK 1: SESI PAGI (Input Materi Baru - Otak Segar) */}
            <div className="p-3 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-800/40 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1.5 text-amber-900 dark:text-amber-300 font-bold text-xs">
                  <Sun className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 fill-amber-500" />
                  <span>{t.dashboard.morningTitle}</span>
                </div>
                <span className="text-[9px] font-bold text-amber-800 bg-white dark:bg-amber-950/80 dark:text-amber-300 dark:border-amber-800/60 px-1.5 py-0.5 rounded border border-amber-200">
                  {t.dashboard.morningBadge}
                </span>
              </div>

              <div className="space-y-1.5">
                <div
                  onClick={() => navigate('/belajar?tab=goi')}
                  className="p-2 rounded-lg bg-white dark:bg-[#0B0F19] border border-amber-100 dark:border-slate-800 hover:border-amber-300 dark:hover:border-amber-500/50 cursor-pointer transition-all flex items-center justify-between shadow-2xs group"
                >
                  <div className="flex items-center space-x-2">
                    <span className="w-5 h-5 rounded bg-amber-100 dark:bg-amber-950 dark:text-amber-400 text-amber-800 text-[10px] font-bold flex items-center justify-center">
                      1
                    </span>
                    <div>
                      <p className="font-bold text-xs text-[#1E1B18] dark:text-slate-100">
                        {t.dashboard.goiItem(activeDay)}
                      </p>
                      <p className="text-[10px] text-[#78716C] dark:text-slate-400">
                        {t.dashboard.goiDesc(targetWordsCount)}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-stone-400 dark:text-slate-500 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors" />
                </div>

                <div
                  onClick={() => navigate('/belajar?tab=bunpo')}
                  className="p-2 rounded-lg bg-white dark:bg-[#0B0F19] border border-amber-100 dark:border-slate-800 hover:border-amber-300 dark:hover:border-amber-500/50 cursor-pointer transition-all flex items-center justify-between shadow-2xs group"
                >
                  <div className="flex items-center space-x-2">
                    <span className="w-5 h-5 rounded bg-amber-100 dark:bg-amber-950 dark:text-amber-400 text-amber-800 text-[10px] font-bold flex items-center justify-center">
                      2
                    </span>
                    <div>
                      <p className="font-bold text-xs text-[#1E1B18] dark:text-slate-100">
                        {t.dashboard.bunpoItem(level === 'N1' ? '1 N1' : '1')}
                      </p>
                      <p className="text-[10px] text-[#78716C] dark:text-slate-400">
                        {level === 'N1' ? t.dashboard.bunpoDescN1 : t.dashboard.bunpoDescN2}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-stone-400 dark:text-slate-500 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors" />
                </div>
              </div>
            </div>

            {/* BLOK 2: SESI MALAM (Aplikasi & Review Sebelum Tidur) */}
            <div className="p-3 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-200/80 dark:border-indigo-800/40 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1.5 text-indigo-900 dark:text-indigo-300 font-bold text-xs">
                  <Moon className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 fill-indigo-500" />
                  <span>{t.dashboard.nightTitle}</span>
                </div>
                <span className="text-[9px] font-bold text-indigo-800 bg-white dark:bg-indigo-950/80 dark:text-indigo-300 dark:border-indigo-800/60 px-1.5 py-0.5 rounded border border-indigo-200">
                  {t.dashboard.nightBadge}
                </span>
              </div>

              <div className="space-y-1.5">
                <div
                  onClick={() => navigate(dokkaiDone ? '/belajar?tab=choukai' : '/belajar?tab=dokkai')}
                  className={`p-2 rounded-lg border cursor-pointer transition-all flex items-center justify-between shadow-2xs group ${
                    dokkaiDone || choukaiDone
                      ? 'bg-emerald-50/80 border-emerald-200 dark:bg-emerald-950/40 dark:border-emerald-800/60'
                      : 'bg-white dark:bg-[#0B0F19] border-indigo-100 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-500/50'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <span
                      className={`w-5 h-5 rounded text-[10px] font-bold flex items-center justify-center ${
                        dokkaiDone || choukaiDone
                          ? 'bg-emerald-600 text-white'
                          : 'bg-indigo-100 dark:bg-indigo-950 dark:text-indigo-400 text-indigo-800'
                      }`}
                    >
                      {dokkaiDone || choukaiDone ? '✓' : '3'}
                    </span>
                    <div>
                      <p
                        className={`font-bold text-xs ${
                          dokkaiDone || choukaiDone
                            ? 'text-emerald-900 dark:text-emerald-200'
                            : 'text-[#1E1B18] dark:text-slate-100'
                        }`}
                      >
                        {t.dashboard.practiceItem(level)}
                      </p>
                      <p
                        className={`text-[10px] ${
                          dokkaiDone || choukaiDone
                            ? 'text-emerald-700 dark:text-emerald-300/80'
                            : 'text-[#78716C] dark:text-slate-400'
                        }`}
                      >
                        {dokkaiDone || choukaiDone
                          ? t.dashboard.practiceDone
                          : t.dashboard.practicePending(level)}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-stone-400 dark:text-slate-500 group-hover:text-indigo-700 dark:group-hover:text-indigo-400 transition-colors" />
                </div>

                <div
                  onClick={() => navigate('/review')}
                  className={`p-2 rounded-lg border cursor-pointer transition-all flex items-center justify-between shadow-2xs group ${
                    pendingCount > 0
                      ? 'bg-amber-50/90 dark:bg-amber-950/40 border-amber-300 dark:border-amber-700/70 ring-1 ring-amber-200 dark:ring-amber-800/40'
                      : 'bg-white dark:bg-[#0B0F19] border-indigo-100 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-500/50'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <span
                      className={`w-5 h-5 rounded text-[10px] font-bold flex items-center justify-center ${
                        pendingCount > 0
                          ? 'bg-amber-500 text-white animate-pulse'
                          : 'bg-indigo-100 dark:bg-indigo-950 dark:text-indigo-400 text-indigo-800'
                      }`}
                    >
                      4
                    </span>
                    <div>
                      <div className="flex items-center space-x-1.5">
                        <p className="font-bold text-xs text-[#1E1B18] dark:text-slate-100">
                          {t.dashboard.srsItem}
                        </p>
                        {pendingCount > 0 && (
                          <span className="text-[9px] font-extrabold text-amber-800 bg-amber-100 dark:bg-amber-900/80 dark:text-amber-200 px-1.5 py-0.2 rounded-full border border-amber-300">
                            {(t.dashboard as any).reviewDueTag ? (t.dashboard as any).reviewDueTag(pendingCount) : `${pendingCount} perlu review`}
                          </span>
                        )}
                      </div>
                      <p className="text-[10px] text-[#78716C] dark:text-slate-400">
                        {pendingCount > 0
                          ? ((t.dashboard as any).reviewPriorityHint || 'Selesaikan antrean review sebelum menambah materi baru.')
                          : t.dashboard.srsDesc}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-stone-400 dark:text-slate-500 group-hover:text-indigo-700 dark:group-hover:text-indigo-400 transition-colors" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pilar Ujian JLPT Strip (Quick Category Launcher) */}
        <div className="card-washi rounded-2xl p-3 border border-[#EFEAE2] dark:border-[#232F46] bg-white dark:bg-[#151D2E] shadow-2xs space-y-2">
          <div className="flex items-center justify-between px-1">
            <span className="text-[10px] font-bold text-[#A8A29E] dark:text-slate-400 uppercase tracking-wider font-mincho">
              {t.dashboard.pillarsTitle(level)}
            </span>
            <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 dark:bg-indigo-950/80 dark:text-indigo-300 dark:border-indigo-800/60 px-2 py-0.5 rounded-full border border-indigo-100">
              {t.dashboard.pillarsBadge}
            </span>
          </div>

          <div className="grid grid-cols-4 gap-2 pt-0.5">
            <button
              onClick={() => navigate('/belajar?tab=goi')}
              className="p-2 rounded-xl bg-[#FAF8F5] dark:bg-[#0B0F19] hover:bg-indigo-50/60 dark:hover:bg-indigo-950/30 border border-[#EFEAE2] dark:border-slate-800 hover:border-indigo-200 dark:hover:border-indigo-500/40 transition-all text-center flex flex-col items-center justify-center space-y-1 active:scale-95 shadow-2xs cursor-pointer"
            >
              <div className="w-7 h-7 rounded-lg bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                <BookOpen className="w-3.5 h-3.5" />
              </div>
              <span className="text-[10px] font-bold text-[#1E1B18] dark:text-slate-200 tracking-tight">
                {t.dashboard.pillarGoi}
              </span>
            </button>

            <button
              onClick={() => navigate('/belajar?tab=bunpo')}
              className="p-2 rounded-xl bg-[#FAF8F5] dark:bg-[#0B0F19] hover:bg-indigo-50/60 dark:hover:bg-indigo-950/30 border border-[#EFEAE2] dark:border-slate-800 hover:border-indigo-200 dark:hover:border-indigo-500/40 transition-all text-center flex flex-col items-center justify-center space-y-1 active:scale-95 shadow-2xs cursor-pointer"
            >
              <div className="w-7 h-7 rounded-lg bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                <Layers className="w-3.5 h-3.5" />
              </div>
              <span className="text-[10px] font-bold text-[#1E1B18] dark:text-slate-200 tracking-tight">
                {t.dashboard.pillarBunpo}
              </span>
            </button>

            <button
              onClick={() => navigate('/belajar?tab=dokkai')}
              className="p-2 rounded-xl bg-[#FAF8F5] dark:bg-[#0B0F19] hover:bg-emerald-50/60 dark:hover:bg-emerald-950/30 border border-[#EFEAE2] dark:border-slate-800 hover:border-emerald-200 dark:hover:border-emerald-500/40 transition-all text-center flex flex-col items-center justify-center space-y-1 active:scale-95 shadow-2xs cursor-pointer"
            >
              <div className="w-7 h-7 rounded-lg bg-emerald-50 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <FileText className="w-3.5 h-3.5" />
              </div>
              <span className="text-[10px] font-bold text-[#1E1B18] dark:text-slate-200 tracking-tight">
                {t.dashboard.pillarDokkai}
              </span>
            </button>

            <button
              onClick={() => navigate('/belajar?tab=choukai')}
              className="p-2 rounded-xl bg-[#FAF8F5] dark:bg-[#0B0F19] hover:bg-violet-50/60 dark:hover:bg-violet-950/30 border border-[#EFEAE2] dark:border-slate-800 hover:border-violet-200 dark:hover:border-violet-500/40 transition-all text-center flex flex-col items-center justify-center space-y-1 active:scale-95 shadow-2xs cursor-pointer"
            >
              <div className="w-7 h-7 rounded-lg bg-violet-50 dark:bg-violet-950/80 text-violet-600 dark:text-violet-400 flex items-center justify-center">
                <Headphones className="w-3.5 h-3.5" />
              </div>
              <span className="text-[10px] font-bold text-[#1E1B18] dark:text-slate-200 tracking-tight">
                {t.dashboard.pillarChoukai}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Tanya AI Modal */}
      <TanyaAiModal
        isOpen={aiModalOpen}
        onClose={() => setAiModalOpen(false)}
      />
    </>
  );
};
