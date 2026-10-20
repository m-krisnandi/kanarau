import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from '@/stores/languageStore';
import { useThemeStore } from '@/stores/themeStore';
import { LANGUAGE_OPTIONS } from '@/locales/translations';
import {
  BookOpen,
  Sparkles,
  Layers,
  Headphones,
  CheckCircle,
  ArrowRight,
  Sun,
  Moon,
  Clock,
  Flame,
  Award,
  Volume2,
  FileText,
  ShieldCheck,
  ChevronRight,
  Calendar,
} from 'lucide-react';
import { playNaturalJapaneseVoice } from '@/utils/audioPlayer';

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const { t, language, setLanguage } = useTranslation();
  const { theme, toggleTheme } = useThemeStore();
  const isDark = theme === "dark";
  const [selectedOption, setSelectedOption] = React.useState<number | null>(0);

  const quizOptions = [
    t.landing.previewOption1,
    t.landing.previewOption2,
    t.landing.previewOption3,
    t.landing.previewOption4,
  ];

  const handlePlaySampleAudio = (text: string) => {
    playNaturalJapaneseVoice(text, undefined, undefined, 1.0);
  };

  return (
    <div className="min-h-screen bg-warm-50 dark:bg-[#0B0F19] text-warm-900 dark:text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* ─── Top Navigation Bar ─── */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-warm-50/90 dark:bg-[#0B0F19]/90 border-b border-warm-200/80 dark:border-[#1E293B] px-4 py-3">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          {/* Brand */}
          <div className="flex items-center space-x-2.5">
            <span className="text-2xl font-extrabold font-jp tracking-tight text-indigo-700 dark:text-indigo-400">
              仮習う
            </span>
            <div className="flex items-center space-x-1.5">
              <span className="font-extrabold text-sm text-stone-900 dark:text-white tracking-tight">
                Kanarau
              </span>
              <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                N5 - N1
              </span>
            </div>
          </div>

          {/* Right Controls: Language Selector + Theme Toggle + Login / Register */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Language Selector Pills */}
            <div className="flex items-center bg-stone-100 dark:bg-[#1E293B] p-0.5 rounded-xl border border-stone-200 dark:border-[#232F46]">
              {LANGUAGE_OPTIONS.map((opt) => (
                <button
                  key={opt.code}
                  onClick={() => setLanguage(opt.code)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    language === opt.code
                      ? 'bg-white dark:bg-[#0B0F19] text-indigo-700 dark:text-indigo-400 shadow-2xs'
                      : 'text-stone-500 dark:text-zinc-400 hover:text-stone-800 dark:hover:text-zinc-200'
                  }`}
                  title={opt.name}
                >
                  {opt.nativeName}
                </button>
              ))}
            </div>

            {/* Dark/Light Mode */}
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 dark:bg-[#1E293B] dark:hover:bg-[#28354D] text-stone-600 dark:text-zinc-300 transition-colors cursor-pointer"
              title="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-stone-600" />}
            </button>

            {/* Auth Action Buttons */}
            <button
              onClick={() => navigate('/login')}
              className="px-3 py-1.5 rounded-xl text-xs font-bold text-stone-700 dark:text-zinc-200 hover:bg-stone-200/70 dark:hover:bg-[#1E293B] transition-colors cursor-pointer"
            >
              {t.landing.loginBtn}
            </button>

            <button
              onClick={() => navigate('/login?tab=register')}
              className="hidden sm:inline-flex items-center space-x-1 px-3.5 py-1.5 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-xs transition-all cursor-pointer active:scale-98"
            >
              <span>{t.landing.startFreeBtn}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* ─── Hero Section ─── */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Hero Chip */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
            <span>{t.landing.heroBadge}</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-stone-900 dark:text-white font-mincho leading-tight max-w-3xl mx-auto">
            {t.landing.heroTitle}
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-stone-600 dark:text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            {t.landing.heroSubtitle}
          </p>

          {/* CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => navigate('/login?tab=register')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md flex items-center justify-center space-x-2 transition-all active:scale-98 cursor-pointer"
            >
              <span>{t.landing.startFreeBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => navigate('/login')}
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-white dark:bg-[#151D2E] hover:bg-stone-50 dark:hover:bg-[#1E293B] text-stone-800 dark:text-zinc-200 border border-stone-200 dark:border-[#232F46] font-bold text-sm shadow-2xs transition-all cursor-pointer"
            >
              {t.landing.loginBtn}
            </button>
          </div>

          {/* Key Metrics Chips */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs font-semibold text-stone-600 dark:text-zinc-400">
            <span className="flex items-center space-x-1.5 px-3 py-1.5 bg-white dark:bg-[#151D2E] rounded-xl border border-stone-200/80 dark:border-[#232F46] shadow-2xs">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>{t.landing.curriculumStats}</span>
            </span>
            <span className="flex items-center space-x-1.5 px-3 py-1.5 bg-white dark:bg-[#151D2E] rounded-xl border border-stone-200/80 dark:border-[#232F46] shadow-2xs">
              <CheckCircle className="w-3.5 h-3.5 text-indigo-600" />
              <span>{t.landing.activeLevels}</span>
            </span>
            <span className="flex items-center space-x-1.5 px-3 py-1.5 bg-white dark:bg-[#151D2E] rounded-xl border border-stone-200/80 dark:border-[#232F46] shadow-2xs">
              <Clock className="w-3.5 h-3.5 text-amber-600" />
              <span>{t.landing.dailyMethod}</span>
            </span>
          </div>

          {/* Interactive Card Preview */}
          <div className="pt-8 max-w-md mx-auto text-left">
            <div className="card-washi rounded-3xl p-6 bg-white dark:bg-[#151D2E] border-2 border-indigo-100 dark:border-indigo-950/80 shadow-xl space-y-4">
              <div className="flex items-center justify-between border-b border-stone-100 dark:border-[#1E293B] pb-3">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  {t.landing.previewCardTitle}
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                  {t.landing.previewCardBadge}
                </span>
              </div>

              {/* Main Word */}
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-baseline space-x-2">
                    <h3 className="text-3xl font-extrabold text-stone-900 dark:text-white font-jp">
                      知能
                    </h3>
                    <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400 font-jp">
                      {t.landing.previewReading}
                    </span>
                  </div>
                  <p className="text-xs text-stone-700 dark:text-zinc-300 font-medium mt-1">
                    {t.landing.previewMeaning}
                  </p>
                </div>

                <button
                  onClick={() => handlePlaySampleAudio('知能')}
                  className="w-10 h-10 rounded-2xl bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950 dark:hover:bg-indigo-900 text-indigo-700 dark:text-indigo-300 flex items-center justify-center transition-colors shadow-2xs cursor-pointer"
                  title="Dengar Audio"
                >
                  <Volume2 className="w-5 h-5" />
                </button>
              </div>

              {/* Example Sentence */}
              <div className="p-3 bg-stone-50 dark:bg-[#0B0F19] rounded-xl border border-stone-100 dark:border-[#1E293B] space-y-1 text-xs">
                <p className="font-bold text-stone-800 dark:text-zinc-200 font-jp">
                  {t.landing.previewSentence}
                </p>
                <p className="text-[11px] text-stone-500 dark:text-zinc-400">
                  {t.landing.previewSentenceTrans}
                </p>
              </div>

              {/* Interactive 4-Choice Drill */}
              <div className="space-y-2 pt-1">
                <div className="flex items-center justify-between text-[11px] font-bold text-stone-600 dark:text-zinc-400">
                  <span>{t.landing.previewQuizPrompt}</span>
                  <span className="text-[10px] font-semibold text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/60">
                    JLPT N2
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  {quizOptions.map((opt, idx) => {
                    const isCorrect = idx === 0;
                    const isSelected = selectedOption === idx;

                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSelectedOption(idx)}
                        className={`p-2.5 rounded-xl border text-left font-medium transition-all duration-150 cursor-pointer flex items-center justify-between ${
                          isSelected
                            ? isCorrect
                              ? "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-800 dark:text-emerald-200 ring-2 ring-emerald-500/20"
                              : "bg-rose-50 dark:bg-rose-950/40 border-rose-400 text-rose-800 dark:text-rose-200"
                            : "bg-stone-50/80 hover:bg-stone-100 dark:bg-[#0B0F19] dark:hover:bg-[#1E293B] border-stone-200 dark:border-[#1E293B] text-stone-700 dark:text-zinc-300"
                        }`}
                      >
                        <span className="truncate">{opt}</span>
                        {isSelected && isCorrect && (
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 ml-1.5" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Intelligent Auto-Evaluation Note */}
                <div className="flex items-center space-x-2 px-3 py-2 bg-indigo-50/70 dark:bg-indigo-950/30 rounded-xl border border-indigo-100 dark:border-indigo-900/40 text-[11px] text-indigo-900 dark:text-indigo-200">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 shrink-0" />
                  <p className="leading-tight">
                    {t.landing.previewFeedbackCorrect}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4 Pillars of JLPT Section ─── */}
      <section className="py-12 bg-white dark:bg-[#121824] border-y border-stone-200/80 dark:border-[#1E293B] px-4">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-white font-mincho">
              {t.landing.pillarsTitle}
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 dark:text-zinc-400 max-w-xl mx-auto">
              {t.landing.pillarsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Pillar 1 */}
            <div className="p-5 rounded-2xl bg-stone-50 dark:bg-[#182234] border border-stone-200/80 dark:border-[#232F46] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 flex items-center justify-center font-bold">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-stone-900 dark:text-white">
                {t.landing.pillar1Title}
              </h3>
              <p className="text-xs text-stone-600 dark:text-zinc-400 leading-relaxed">
                {t.landing.pillar1Desc}
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-5 rounded-2xl bg-stone-50 dark:bg-[#182234] border border-stone-200/80 dark:border-[#232F46] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 flex items-center justify-center font-bold">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-stone-900 dark:text-white">
                {t.landing.pillar2Title}
              </h3>
              <p className="text-xs text-stone-600 dark:text-zinc-400 leading-relaxed">
                {t.landing.pillar2Desc}
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-5 rounded-2xl bg-stone-50 dark:bg-[#182234] border border-stone-200/80 dark:border-[#232F46] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 flex items-center justify-center font-bold">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-stone-900 dark:text-white">
                {t.landing.pillar3Title}
              </h3>
              <p className="text-xs text-stone-600 dark:text-zinc-400 leading-relaxed">
                {t.landing.pillar3Desc}
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="p-5 rounded-2xl bg-stone-50 dark:bg-[#182234] border border-stone-200/80 dark:border-[#232F46] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 flex items-center justify-center font-bold">
                <Headphones className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-stone-900 dark:text-white">
                {t.landing.pillar4Title}
              </h3>
              <p className="text-xs text-stone-600 dark:text-zinc-400 leading-relaxed">
                {t.landing.pillar4Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Platform Features Grid ─── */}
      <section className="py-12 px-4 max-w-5xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-white font-mincho">
            {t.landing.featuresTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 bg-white dark:bg-[#151D2E] rounded-2xl border border-stone-200 dark:border-[#232F46] shadow-xs space-y-2.5">
            <div className="w-9 h-9 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
              <Clock className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-sm text-stone-900 dark:text-white">
              {t.landing.feature1Title}
            </h4>
            <p className="text-xs text-stone-500 dark:text-zinc-400 leading-relaxed">
              {t.landing.feature1Desc}
            </p>
          </div>

          <div className="p-5 bg-white dark:bg-[#151D2E] rounded-2xl border border-stone-200 dark:border-[#232F46] shadow-xs space-y-2.5">
            <div className="w-9 h-9 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-sm text-stone-900 dark:text-white">
              {t.landing.feature2Title}
            </h4>
            <p className="text-xs text-stone-500 dark:text-zinc-400 leading-relaxed">
              {t.landing.feature2Desc}
            </p>
          </div>

          <div className="p-5 bg-white dark:bg-[#151D2E] rounded-2xl border border-stone-200 dark:border-[#232F46] shadow-xs space-y-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <CheckCircle className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-sm text-stone-900 dark:text-white">
              {t.landing.feature3Title}
            </h4>
            <p className="text-xs text-stone-500 dark:text-zinc-400 leading-relaxed">
              {t.landing.feature3Desc}
            </p>
          </div>
        </div>
      </section>

      {/* ─── Bottom CTA Banner ─── */}
      <section className="py-12 px-4 max-w-4xl mx-auto w-full">
        <div className="relative overflow-hidden rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-950 text-white text-center space-y-6 shadow-2xl border border-indigo-800/40">
          {/* Subtle background glow effect */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-4">
            <span className="text-2xl sm:text-3xl font-extrabold font-jp tracking-tight block text-indigo-300">
              仮習う Kanarau
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold font-mincho text-white max-w-xl mx-auto leading-tight">
              {t.landing.ctaTitle}
            </h3>
            <p className="text-xs sm:text-base text-indigo-100 max-w-lg mx-auto leading-relaxed">
              {t.landing.ctaSubtitle}
            </p>
            <div className="pt-3 flex justify-center">
              <button
                onClick={() => navigate('/login?tab=register')}
                className="px-8 py-3.5 rounded-2xl bg-white hover:bg-indigo-50 text-indigo-950 font-bold text-sm shadow-xl hover:shadow-2xl transition-all active:scale-98 cursor-pointer flex items-center space-x-2.5"
              >
                <span>{t.landing.ctaButton}</span>
                <ArrowRight className="w-4 h-4 text-indigo-900" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="mt-auto py-6 border-t border-stone-200 dark:border-[#1E293B] px-4 text-xs text-stone-500 dark:text-zinc-500 text-center space-y-2">
        <div className="flex items-center justify-center space-x-4">
          <span>Kanarau JLPT System</span>
          <span>·</span>
          <span>Spaced Repetition</span>
          <span>·</span>
          <span>v1.0.0</span>
        </div>
        <p className="text-[11px] opacity-75">
          Tokyo Pronunciation Audio · OpenJLPT Curriculum
        </p>
      </footer>
    </div>
  );
};
