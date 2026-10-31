import React, { useState, useEffect } from 'react';
import { useCourseStore } from '@/stores/courseStore';
import { useLanguageStore } from '@/stores/languageStore';
import {
  Timer,
  Play,
  Pause,
  RotateCcw,
  CheckCircle2,
  Circle,
  Sparkles,
  BookOpen,
  MessageSquare,
  Volume2,
  ChevronRight,
  Flame,
  Award,
} from 'lucide-react';

interface DailyFocusRoutineCardProps {
  onStartStudy?: () => void;
  onOpenAi?: () => void;
  onOpenCourseModal?: () => void;
}

export const DailyFocusRoutineCard: React.FC<DailyFocusRoutineCardProps> = ({
  onStartStudy,
  onOpenAi,
  onOpenCourseModal,
}) => {
  const { targetLanguage, activeTrack, activeLevel, dailyPillars, togglePillar } = useCourseStore();
  const currentLanguage = useLanguageStore((state) => state.language);

  // 30-minute countdown timer state (1800 seconds)
  const [secondsLeft, setSecondsLeft] = useState<number>(1800);
  const [timerRunning, setTimerRunning] = useState<boolean>(false);

  useEffect(() => {
    let interval: any = null;
    if (timerRunning && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
    } else if (secondsLeft === 0) {
      setTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [timerRunning, secondsLeft]);

  const toggleTimer = () => setTimerRunning((prev) => !prev);
  const resetTimer = () => {
    setTimerRunning(false);
    setSecondsLeft(1800);
  };

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const timeFormatted = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  const completedCount = dailyPillars.filter((p) => p.completed).length;
  const progressPercent = Math.round((completedCount / dailyPillars.length) * 100);

  const isMyanmarLang = currentLanguage === 'my';
  const isEnLang = currentLanguage === 'en';

  // Dynamic badge and text for current track
  const trackFlag = targetLanguage === 'id' ? '🇮🇩' : targetLanguage === 'my' ? '🇲🇲' : targetLanguage === 'ja' ? '🇯🇵' : '🇬🇧';
  const trackName = targetLanguage === 'id'
    ? 'Bahasa Indonesia (BIPA)'
    : targetLanguage === 'my'
    ? 'Bahasa Myanmar (Burmese)'
    : targetLanguage === 'ja'
    ? 'Bahasa Jepang (JLPT)'
    : 'Bahasa Inggris (TOEIC/IELTS)';

  return (
    <div className="bg-white dark:bg-[#151D2E] rounded-3xl p-4 sm:p-5 border border-stone-200/90 dark:border-[#232F46] shadow-md space-y-4">
      {/* Header with Track Badge and 30-Min Tag */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center space-x-2.5">
          <div className="w-9 h-9 rounded-2xl bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-lg shadow-xs">
            {trackFlag}
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-extrabold text-sm text-stone-900 dark:text-white leading-tight">
                {trackName}
              </span>
              <button
                type="button"
                onClick={onOpenCourseModal}
                className="px-2 py-0.5 text-[10px] font-bold rounded-md bg-stone-100 dark:bg-slate-800 text-stone-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-stone-200/70 transition-colors cursor-pointer"
              >
                {activeLevel} · {isMyanmarLang ? 'ပြောင်းမည်' : isEnLang ? 'Change' : 'Ubah'}
              </button>
            </div>
            <p className="text-[11px] text-stone-500 dark:text-slate-400">
              {isMyanmarLang
                ? 'တစ်နေ့ ၃၀ မိနစ် အာရုံစိုက် လေ့လာမှု အစီအစဉ်'
                : isEnLang
                ? '30-Minute Daily Best Practice Routine'
                : 'Target Belajar Harian 30 Menit Tanpa Bosan'}
            </p>
          </div>
        </div>

        {/* Live Timer Widget */}
        <div className="flex items-center space-x-2 bg-stone-50 dark:bg-[#0B0F19] px-3 py-1.5 rounded-2xl border border-stone-200/70 dark:border-[#1E293B]">
          <Timer className={`w-4 h-4 ${timerRunning ? 'text-indigo-600 dark:text-indigo-400 animate-pulse' : 'text-stone-400'}`} />
          <span className="font-mono font-extrabold text-xs text-stone-800 dark:text-slate-200">
            {timeFormatted}
          </span>
          <button
            type="button"
            onClick={toggleTimer}
            className="p-1 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-all cursor-pointer shadow-2xs"
            title={timerRunning ? 'Pause' : 'Start'}
          >
            {timerRunning ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 fill-white" />}
          </button>
          <button
            type="button"
            onClick={resetTimer}
            className="p-1 rounded-lg text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 transition-colors cursor-pointer"
            title="Reset"
          >
            <RotateCcw className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-xs">
          <span className="text-[11px] font-bold text-stone-600 dark:text-slate-400 flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-amber-500" />
            {isMyanmarLang ? 'ယနေ့ လေ့လာမှု တိုးတက်မှု' : isEnLang ? 'Today Routine Progress' : 'Capaian Rutinitas Hari Ini'}
          </span>
          <span className="text-[11px] font-extrabold text-indigo-600 dark:text-indigo-400">
            {completedCount} / {dailyPillars.length} ({progressPercent}%)
          </span>
        </div>
        <div className="w-full h-2 rounded-full bg-stone-100 dark:bg-slate-800 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* 4 Interactive Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {dailyPillars.map((pillar, idx) => {
          const isDone = pillar.completed;
          return (
            <div
              key={pillar.id}
              onClick={() => togglePillar(pillar.id)}
              className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                isDone
                  ? 'border-emerald-300 dark:border-emerald-800 bg-emerald-50/50 dark:bg-emerald-950/20'
                  : 'border-stone-200/80 dark:border-[#232F46] bg-stone-50/40 dark:bg-[#0B0F19]/40 hover:bg-stone-100/60 dark:hover:bg-slate-800/40'
              }`}
            >
              <div className="flex items-center space-x-3">
                <button
                  type="button"
                  className="shrink-0 text-stone-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  {isDone ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 fill-emerald-100 dark:fill-emerald-950" />
                  ) : (
                    <Circle className="w-5 h-5 text-stone-300 dark:text-slate-600" />
                  )}
                </button>
                <div>
                  <div className="flex items-center space-x-1.5">
                    <span className={`text-xs font-bold leading-tight ${isDone ? 'line-through text-stone-400 dark:text-slate-500' : 'text-stone-900 dark:text-white'}`}>
                      {pillar.title}
                    </span>
                    <span className="text-[10px] font-extrabold px-1.5 py-0.2 rounded-md bg-stone-100 dark:bg-slate-800 text-stone-500 dark:text-slate-400">
                      {pillar.minutes}m
                    </span>
                  </div>
                  <p className="text-[10px] text-stone-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                    {pillar.subtitle}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Action Buttons: Belajar Sekarang & Tanya AI Sensei */}
      <div className="flex items-center gap-2 pt-1">
        <button
          type="button"
          onClick={onStartStudy}
          className="flex-1 py-2.5 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-extrabold text-xs transition-all shadow-sm shadow-indigo-500/20 flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <BookOpen className="w-4 h-4" />
          <span>{isMyanmarLang ? 'ယနေ့ လေ့လာမှု စတင်ပါ' : isEnLang ? 'Start Daily Routine' : 'Mulai Belajar Sekarang'}</span>
        </button>

        <button
          type="button"
          onClick={onOpenAi}
          className="py-2.5 px-3.5 rounded-xl bg-purple-50 dark:bg-purple-950/60 hover:bg-purple-100 dark:hover:bg-purple-900/60 text-purple-700 dark:text-purple-300 border border-purple-200/80 dark:border-purple-800/60 font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer"
        >
          <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
          <span>{isMyanmarLang ? 'AI ဆရာမေးရန်' : isEnLang ? 'Ask AI Tutor' : 'Tanya AI Sensei'}</span>
        </button>
      </div>
    </div>
  );
};
