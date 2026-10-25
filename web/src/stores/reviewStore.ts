import { create } from 'zustand';
import type { QuizCard, QuizAnswer, SessionResult } from '@/types';
import { rateByTime, calculateXP } from '@/utils';

interface ReviewState {
  queue: QuizCard[];
  currentIndex: number;
  answers: QuizAnswer[];
  sessionResult: SessionResult | null;
  cardStartTime: number;
  isReviewActive: boolean;
  pendingCount: number;

  // Actions
  startReview: (cards: QuizCard[]) => void;
  answerCard: (selectedAnswer: string) => void;
  nextCard: () => void;
  finishReview: () => void;
  resetReview: () => void;
  setPendingCount: (count: number) => void;
  getCurrentCard: () => QuizCard | null;
}

export const useReviewStore = create<ReviewState>()((set, get) => ({
  queue: [],
  currentIndex: 0,
  answers: [],
  sessionResult: null,
  cardStartTime: 0,
  isReviewActive: false,
  pendingCount: 0,

  startReview: (cards) => {
    const sanitizedQueue = (cards || []).filter(
      (c) => c && c.question && c.correct_answer && c.question.trim().toLowerCase() !== c.correct_answer.trim().toLowerCase()
    );
    set({
      queue: sanitizedQueue,
      currentIndex: 0,
      answers: [],
      sessionResult: null,
      cardStartTime: Date.now(),
      isReviewActive: true,
    });
  },

  answerCard: (selectedAnswer) => {
    const { queue, currentIndex, answers, cardStartTime } = get();
    const card = queue[currentIndex];
    if (!card) return;

    const responseTimeMs = Date.now() - cardStartTime;
    const isCorrect = selectedAnswer === card.correct_answer;
    const rating = rateByTime(responseTimeMs, isCorrect);

    const answer: QuizAnswer = {
      card_id: card.id,
      kotoba_id: card.kotoba.id,
      selected_answer: selectedAnswer,
      correct_answer: card.correct_answer,
      is_correct: isCorrect,
      response_time_ms: responseTimeMs,
      rating,
    };

    set({ answers: [...answers, answer] });
  },

  nextCard: () => {
    const { currentIndex, queue } = get();
    if (currentIndex < queue.length - 1) {
      set({
        currentIndex: currentIndex + 1,
        cardStartTime: Date.now(),
      });
    }
  },

  finishReview: () => {
    const { queue, answers } = get();
    const correctCount = answers.filter((a) => a.is_correct).length;
    const totalTimeMs = answers.reduce((sum, a) => sum + a.response_time_ms, 0);
    const accuracy = queue.length > 0 ? Math.round((correctCount / queue.length) * 100) : 0;

    const result: SessionResult = {
      total_cards: queue.length,
      correct_count: correctCount,
      accuracy_percent: accuracy,
      total_time_ms: totalTimeMs,
      xp_gained: calculateXP(correctCount, queue.length),
      answers,
    };

    set({ sessionResult: result, isReviewActive: false });
  },

  resetReview: () => {
    set({
      queue: [],
      currentIndex: 0,
      answers: [],
      sessionResult: null,
      cardStartTime: 0,
      isReviewActive: false,
    });
  },

  setPendingCount: (count) => set({ pendingCount: count }),

  getCurrentCard: () => {
    const { queue, currentIndex } = get();
    return queue[currentIndex] ?? null;
  },
}));
