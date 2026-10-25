import React, { useEffect, useMemo, useState } from 'react';
import { reviewApi } from '@/services/api';
import type { QuizCard, QuizAnswer, ReviewStats, Kotoba } from '@/types';
import { rateByTime } from '@/utils';
import { RotateCcw, Play, Check, X, ArrowLeft, BookOpen, Zap, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from '@/stores/languageStore';
import { localizeQuizCard, localizeKotoba } from '@/locales/vocabularyTranslations';
import { KotobaDetailModal } from '@/components/KotobaDetailModal';
import { KanjiDetailView } from '@/components/KanjiDetailView';
import { useMistakesStore } from '@/stores/mistakesStore';
import { useAuthStore } from '@/stores/authStore';

export const ReviewPage: React.FC = () => {
  const navigate = useNavigate();
  const { t, language } = useTranslation();
  const currentLevel = useAuthStore((state) => state.currentLevel || state.user?.current_level || 'N2');
  const [stats, setStats] = useState<ReviewStats | null>(null);
  const [queue, setQueue] = useState<QuizCard[]>([]);
  const [isReviewing, setIsReviewing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [cardStartTime, setCardStartTime] = useState<number>(Date.now());
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [loading, setLoading] = useState(true);

  // Detail Modal State
  const [activeKotoba, setActiveKotoba] = useState<Kotoba | null>(null);
  const [activeKanjiChar, setActiveKanjiChar] = useState<string | null>(null);
  const mistakes = useMistakesStore((state) => state.mistakes);
  const weakWords = useMemo(
    () => [...mistakes].sort((a, b) => b.count - a.count || b.timestamp - a.timestamp).slice(0, 5),
    [mistakes]
  );

  useEffect(() => {
    async function loadData() {
      try {
        const [statsRes, queueRes] = await Promise.all([
          reviewApi.getStats(),
          reviewApi.getQueue(language),
        ]);
        const rawQueue = queueRes.data || [];
        const sanitizedQueue = rawQueue.filter((card) => {
          if (!card || !card.question || !card.correct_answer) return false;
          return card.question.trim().toLowerCase() !== card.correct_answer.trim().toLowerCase();
        });
        setQueue(sanitizedQueue);
      } catch (err) {
        console.error('Error loading review queue', err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [language]);

  const startReviewSession = () => {
    setIsReviewing(true);
    setCurrentIndex(0);
    setAnswers([]);
    setSelectedChoice(null);
    setIsAnswered(false);
    setIsFinished(false);
    setCardStartTime(Date.now());
  };

  const startWeaknessReview = () => {
    if (weakWords.length === 0) return;

    const poolMeanings = [
      'pembedaan ; pemisahan',
      'merebus lama hingga meresap',
      'kewalahan, menguasai secara mutlak',
      'memberitahukan, mengabarkan',
      'tenggelam, terbengkalai',
      'seperti biasa, sama saja',
      'merasakan, menikmati',
      'tidak jelas, ambigu',
    ];
    const poolReadings = ['にこむ', 'くべつ', 'あっとう', 'つげる', 'しずむ', 'あいかわらず', 'あじわう', 'あいまい'];

    const weakCards: QuizCard[] = weakWords.map((m, idx) => {
      const kotobaObj: Kotoba = {
        id: idx + 9100,
        kanji: m.kanji,
        hiragana: m.hiragana,
        meaning: m.meaning,
        jlpt_level: (m.level as any) || 'N2',
        part_of_speech: '',
      };
      const localized = localizeKotoba(kotobaObj, language);
      const isReading = m.correctAnswer === m.hiragana;
      const question = m.kanji || m.hiragana;
      const correctAnswer = isReading ? m.hiragana : localized.meaning;

      const distractorPool = isReading ? poolReadings : poolMeanings;
      const randomDistractors = distractorPool.filter((d) => d !== correctAnswer).slice(0, 3);
      const choices = Array.from(
        new Set([correctAnswer, m.wrongAnswer || randomDistractors[0] || '', ...randomDistractors])
      ).filter(Boolean).slice(0, 4);

      for (let i = choices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [choices[i], choices[j]] = [choices[j]!, choices[i]!];
      }

      return {
        id: `weak_${m.id}_${idx}`,
        kotoba: localized,
        direction: isReading ? 'kanji_to_hiragana' : 'kanji_to_meaning',
        question,
        correct_answer: correctAnswer,
        choices,
      };
    });

    setQueue(weakCards);
    setIsReviewing(true);
    setCurrentIndex(0);
    setAnswers([]);
    setSelectedChoice(null);
    setIsAnswered(false);
    setIsFinished(false);
    setCardStartTime(Date.now());
  };

  const rawCurrentCard = queue[currentIndex];
  const currentCard = rawCurrentCard ? localizeQuizCard(rawCurrentCard, language) : null;

  const handleSelectChoice = (choice: string) => {
    if (isAnswered || !currentCard) return;

    const responseTimeMs = Date.now() - cardStartTime;
    const isCorrect = choice === currentCard.correct_answer;
    const rating = rateByTime(responseTimeMs, isCorrect);

    const answer: QuizAnswer = {
      card_id: currentCard.id,
      kotoba_id: currentCard.kotoba.id,
      selected_answer: choice,
      correct_answer: currentCard.correct_answer,
      is_correct: isCorrect,
      response_time_ms: responseTimeMs,
      rating,
    };

    setSelectedChoice(choice);
    setIsAnswered(true);
    setAnswers((prev) => [...prev, answer]);
  };

  const handleNext = async () => {
    if (currentIndex < queue.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedChoice(null);
      setIsAnswered(false);
      setCardStartTime(Date.now());
    } else {
      const finalAnswers = answers;
      setIsFinished(true);
      try {
        await reviewApi.submitReview(finalAnswers);
      } catch (err) {
        console.error('Failed to submit reviews', err);
      }
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center text-[#78716C] text-xs">{t.review.preparing}</div>
      </div>
    );
  }

  // --- REVIEW ACTIVE QUIZ ---
  if (isReviewing && !isFinished) {
    const progressPercent = Math.round((currentIndex / queue.length) * 100);

    return (
      <div className="space-y-5 pb-24 max-w-md mx-auto animate-fade-in">
        <div className="flex items-center justify-between pt-1">
          <button
            onClick={() => setIsReviewing(false)}
            className="flex items-center space-x-1.5 text-xs font-bold text-[#57534E] hover:text-[#1E1B18] cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t.review.exitReview}</span>
          </button>
          <span className="text-xs font-bold text-[#78716C]">
            {currentIndex + 1} / {queue.length}
          </span>
          <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-100">
             {t.common.spacedReview}
          </span>
        </div>

        <div className="w-full bg-[#EFEAE2] h-1.5 rounded-full overflow-hidden">
          <div
            className="bg-indigo-600 h-full transition-all duration-300 rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div className="card-washi rounded-2xl p-8 text-center space-y-2 min-h-[170px] flex flex-col justify-center border border-[#EFEAE2] shadow-xs">
          <span className="text-[10px] font-bold text-[#A8A29E] uppercase tracking-wider">
            {t.review.whatIsMeaning}
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold font-jp text-[#1E1B18] tracking-wide select-none">
            {currentCard?.question}
          </h1>
          {currentCard?.kotoba.hiragana && (
            <p className="text-xs font-jp text-indigo-600 font-semibold">
              {currentCard?.kotoba.hiragana}
            </p>
          )}
        </div>

        <div className="space-y-2.5">
          {currentCard?.choices
            .filter((choice) => {
              if (choice === currentCard.correct_answer) return true;
              return choice.trim().toLowerCase() !== currentCard.question.trim().toLowerCase();
            })
            .map((choice, i) => {
            const isSelected = selectedChoice === choice;
            const isCorrectAnswer = isAnswered && choice === currentCard.correct_answer;
            const isWrongSelected = isAnswered && isSelected && !isCorrectAnswer;

            return (
              <button
                key={choice + i}
                disabled={isAnswered}
                onClick={() => handleSelectChoice(choice)}
                className={`w-full p-4 rounded-xl text-left font-medium text-xs sm:text-sm transition-all border flex items-center justify-between cursor-pointer ${
                  isCorrectAnswer
                    ? 'bg-emerald-50 border-emerald-400 text-emerald-900 font-bold shadow-xs'
                    : isWrongSelected
                    ? 'bg-rose-50 border-rose-400 text-rose-900 shadow-xs'
                    : 'card-washi card-washi-hover text-[#292524] hover:bg-[#FAF8F5]'
                }`}
              >
                <span className="font-jp text-sm sm:text-base">{choice}</span>
                {isCorrectAnswer && <Check className="w-4 h-4 text-emerald-600 shrink-0" />}
                {isWrongSelected && <X className="w-4 h-4 text-rose-500 shrink-0" />}
              </button>
            );
          })}
        </div>

        {isAnswered && (
          <div className="space-y-2 pt-1 animate-slide-up">
            {/* View Word Detail Button */}
            {currentCard?.kotoba && (
              <button
                onClick={() => setActiveKotoba(currentCard.kotoba)}
                className="w-full py-2.5 bg-indigo-50/80 hover:bg-indigo-100/80 text-indigo-800 font-bold rounded-xl border border-indigo-200/80 transition-colors text-xs flex items-center justify-center space-x-1.5 cursor-pointer shadow-2xs"
              >
                <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
                <span>{t.review.openDetail}</span>
              </button>
            )}

            <button
              onClick={handleNext}
              className="w-full py-3.5 bg-[#1E1B18] hover:bg-black text-white font-bold rounded-xl shadow-md transition-all text-xs cursor-pointer active:scale-98"
            >
              {currentIndex < queue.length - 1 ? t.review.nextQuestion : t.review.finishReview}
            </button>
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
  }

  // --- REVIEW FINISHED ---
  if (isFinished) {
    const accuracy = Math.round(
      (answers.filter((a) => a.is_correct).length / queue.length) * 100
    );

    return (
      <div className="space-y-5 pb-24 text-center max-w-md mx-auto pt-8 animate-fade-in">
        <div className="w-16 h-16 bg-indigo-50 text-indigo-700 rounded-2xl mx-auto flex items-center justify-center border border-indigo-100 shadow-xs">
          <RotateCcw className="w-8 h-8" />
        </div>

        <div className="space-y-1">
          <h2 className="text-xl font-bold font-mincho text-[#1E1B18]">{t.review.completedTitle}</h2>
          <p className="text-xs text-[#78716C]">
            {t.review.completedDesc}
          </p>
        </div>

        <div className="card-washi rounded-2xl p-5 border border-[#EFEAE2] max-w-xs mx-auto">
          <div className="text-3xl font-extrabold text-indigo-700 font-mincho">{accuracy}%</div>
          <p className="text-xs text-[#78716C] mt-0.5">{t.review.accuracy}</p>
        </div>

        <button
          onClick={() => {
            setIsReviewing(false);
            setIsFinished(false);
            navigate('/');
          }}
          className="px-6 py-3 bg-[#1E1B18] hover:bg-black text-white font-bold rounded-xl text-xs shadow-md cursor-pointer active:scale-98"
        >
          {t.review.backToDashboard}
        </button>
      </div>
    );
  }

  // --- OVERVIEW SCREEN ---
  return (
    <div className="space-y-5 pb-24 max-w-md mx-auto">
      <div className="text-center pt-1">
        <h1 className="text-xl font-bold font-mincho text-[#1E1B18] tracking-tight">{t.review.title}</h1>
        <p className="text-xs text-[#78716C] mt-1">
          {t.review.subtitle}
        </p>
      </div>

      <div className="card-washi rounded-2xl p-5 sm:p-6 border border-[#EFEAE2] text-center space-y-4 shadow-xs">
        <div className="w-14 h-14 bg-indigo-50 text-indigo-700 rounded-2xl mx-auto flex items-center justify-center border border-indigo-100">
          <RotateCcw className="w-7 h-7" />
        </div>

        <div>
          <span className="text-3xl sm:text-4xl font-extrabold font-mincho text-[#1E1B18]">
            {queue.length}
          </span>
          <p className="text-xs text-[#78716C] mt-1">
            {t.review.dueDesc}
          </p>
        </div>

        <button
          onClick={startReviewSession}
          disabled={queue.length === 0}
          className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-bold rounded-xl shadow-md transition-all flex items-center justify-center space-x-2 text-xs cursor-pointer active:scale-98"
        >
          <Play className="w-4 h-4 fill-white" />
          <span>{t.review.startBtn}</span>
        </button>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="card-washi rounded-2xl p-3.5 text-center border border-[#EFEAE2]">
          <span className="text-base font-bold text-emerald-700">
            {stats?.due_today ?? queue.length}
          </span>
          <p className="text-[10px] text-[#78716C] mt-0.5">{t.review.today}</p>
        </div>
        <div className="card-washi rounded-2xl p-3.5 text-center border border-[#EFEAE2]">
          <span className="text-base font-bold text-amber-700">
             {stats?.due_tomorrow ?? 0}
          </span>
          <p className="text-[10px] text-[#78716C] mt-0.5">{t.review.tomorrow}</p>
        </div>
        <div className="card-washi rounded-2xl p-3.5 text-center border border-[#EFEAE2]">
          <span className="text-base font-bold text-rose-700">
            {stats?.overdue ?? 0}
          </span>
          <p className="text-[10px] text-[#78716C] mt-0.5">{t.review.overdue}</p>
        </div>
      </div>

      {weakWords.length > 0 && (
        <div className="card-washi rounded-2xl p-4 border border-rose-100 bg-rose-50/30 space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xs font-bold text-rose-900">{t.ai.weakLabel(currentLevel)}</h2>
              <p className="text-[10px] text-rose-700/80">{t.ai.weakDesc}</p>
            </div>
            <span className="text-[10px] font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded-full">{weakWords.length}</span>
          </div>

          <button
            onClick={startWeaknessReview}
            className="w-full py-2.5 px-4 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl text-xs flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-xs active:scale-[0.99]"
          >
            <Zap className="w-4 h-4 fill-white" />
            <span>{t.review.practiceWeaknessBtn(weakWords.length)}</span>
          </button>

          <div className="space-y-1.5">
            {weakWords.map((mistake) => (
              <div
                key={mistake.id}
                onClick={() =>
                  setActiveKotoba(
                    localizeKotoba(
                      {
                        id: mistake.id,
                        kanji: mistake.kanji,
                        hiragana: mistake.hiragana,
                        meaning: mistake.meaning,
                        jlpt_level: mistake.level as any,
                        part_of_speech: '',
                      },
                      language
                    )
                  )
                }
                className="flex items-center justify-between rounded-xl bg-white/90 dark:bg-slate-900 border border-rose-100 dark:border-rose-950/60 hover:border-rose-300 dark:hover:border-rose-800 px-3 py-2 cursor-pointer group transition-all"
                title={t.studySession.detailAndConjugation}
              >
                <div className="min-w-0 pr-2">
                  <div className="flex items-center space-x-2">
                    <span className="font-jp font-bold text-sm text-stone-900 dark:text-white">{mistake.kanji}</span>
                    <span className="text-[10px] text-indigo-600 dark:text-indigo-400 font-jp">{mistake.hiragana}</span>
                  </div>
                  <p className="text-[10px] text-stone-500 dark:text-slate-400 truncate">
                    {
                      localizeKotoba(
                        {
                          id: mistake.id,
                          kanji: mistake.kanji,
                          hiragana: mistake.hiragana,
                          meaning: mistake.meaning,
                          jlpt_level: mistake.level as any,
                          part_of_speech: '',
                        },
                        language
                      ).meaning
                    }
                  </p>
                </div>
                <div className="flex items-center space-x-2 shrink-0">
                  <span className="text-[10px] font-bold text-rose-700 bg-rose-50 dark:bg-rose-950/60 px-1.5 py-0.5 rounded">×{mistake.count}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-stone-300 group-hover:text-rose-600 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Kotoba Detail & Conjugation Modal */}
      <KotobaDetailModal
        kotoba={activeKotoba}
        onClose={() => setActiveKotoba(null)}
        onViewKanji={(char) => setActiveKanjiChar(char)}
      />

      {/* Kanji Detail Modal */}
      {activeKanjiChar && (
        <KanjiDetailView
          character={activeKanjiChar}
          onClose={() => setActiveKanjiChar(null)}
        />
      )}
    </div>
  );
};
