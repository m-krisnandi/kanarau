import React, { useEffect, useState } from 'react';
import { reviewApi } from '@/services/api';
import type { QuizCard, QuizAnswer, ReviewStats, Kotoba } from '@/types';
import { rateByTime } from '@/utils';
import { RotateCcw, Play, Check, X, ArrowLeft, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from '@/stores/languageStore';
import { localizeQuizCard, localizeKotoba } from '@/locales/vocabularyTranslations';
import { KotobaDetailModal } from '@/components/KotobaDetailModal';
import { KanjiDetailView } from '@/components/KanjiDetailView';

export const ReviewPage: React.FC = () => {
  const navigate = useNavigate();
  const { t, language } = useTranslation();
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

  useEffect(() => {
    async function loadData() {
      try {
        const [statsRes, queueRes] = await Promise.all([
          reviewApi.getStats(),
          reviewApi.getQueue(),
        ]);
        setStats(statsRes.data);
        setQueue(queueRes.data || []);
      } catch (err) {
        console.error('Error loading review queue', err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const startReviewSession = () => {
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
      setIsFinished(true);
      try {
        await reviewApi.submitReview(answers);
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
            SRS Spaced Review
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
          {currentCard?.choices.map((choice, i) => {
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
            {stats?.due_tomorrow ?? 4}
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
    </div>
  );
};
