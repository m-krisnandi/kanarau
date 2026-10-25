import { create } from 'zustand';
import type { QuizCard, QuizAnswer, SessionResult, Deck } from '@/types';
import { rateByTime, calculateXP } from '@/utils';

interface StudyState {
  // Current session
  currentDeck: Deck | null;
  cards: QuizCard[];
  currentIndex: number;
  answers: QuizAnswer[];
  sessionResult: SessionResult | null;

  // Timer
  cardStartTime: number;
  isSessionActive: boolean;

  // Actions
  startSession: (deck: Deck, cards: QuizCard[]) => void;
  answerCard: (selectedAnswer: string) => void;
  nextCard: () => void;
  finishSession: () => void;
  resetSession: () => void;
  getCurrentCard: () => QuizCard | null;
}

export const useStudyStore = create<StudyState>()((set, get) => ({
  currentDeck: null,
  cards: [],
  currentIndex: 0,
  answers: [],
  sessionResult: null,
  cardStartTime: 0,
  isSessionActive: false,

  startSession: (deck, cards) => {
    const sanitizedCards = (cards || []).filter(
      (c) => c && c.question && c.correct_answer && c.question.trim().toLowerCase() !== c.correct_answer.trim().toLowerCase()
    );
    set({
      currentDeck: deck,
      cards: sanitizedCards,
      currentIndex: 0,
      answers: [],
      sessionResult: null,
      cardStartTime: Date.now(),
      isSessionActive: true,
    });
  },

  answerCard: (selectedAnswer) => {
    const { cards, currentIndex, answers, cardStartTime } = get();
    const card = cards[currentIndex];
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
    const { currentIndex, cards } = get();
    if (currentIndex < cards.length - 1) {
      set({
        currentIndex: currentIndex + 1,
        cardStartTime: Date.now(),
      });
    }
  },

  finishSession: () => {
    const { currentDeck, cards, answers } = get();
    const correctCount = answers.filter((a) => a.is_correct).length;
    const totalTimeMs = answers.reduce((sum, a) => sum + a.response_time_ms, 0);
    const accuracy = cards.length > 0 ? Math.round((correctCount / cards.length) * 100) : 0;

    const result: SessionResult = {
      deck_id: currentDeck?.id,
      total_cards: cards.length,
      correct_count: correctCount,
      accuracy_percent: accuracy,
      total_time_ms: totalTimeMs,
      xp_gained: calculateXP(correctCount, cards.length),
      answers,
    };

    set({ sessionResult: result, isSessionActive: false });
  },

  resetSession: () => {
    set({
      currentDeck: null,
      cards: [],
      currentIndex: 0,
      answers: [],
      sessionResult: null,
      cardStartTime: 0,
      isSessionActive: false,
    });
  },

  getCurrentCard: () => {
    const { cards, currentIndex } = get();
    return cards[currentIndex] ?? null;
  },
}));
