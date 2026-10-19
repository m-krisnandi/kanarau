import { create } from 'zustand';
import type {
  OverallStats,
  MonthlyCalendar,
  DeckProgress,
  JLPTCountdown,
  DayStats,
} from '@/types';

interface ProgressState {
  stats: OverallStats | null;
  calendar: MonthlyCalendar | null;
  deckProgress: DeckProgress[];
  jlptCountdown: JLPTCountdown | null;
  isLoading: boolean;

  // Actions
  setStats: (stats: OverallStats) => void;
  setCalendar: (calendar: MonthlyCalendar) => void;
  setDeckProgress: (progress: DeckProgress[]) => void;
  setJLPTCountdown: (countdown: JLPTCountdown) => void;
  setLoading: (loading: boolean) => void;
  getDayStats: (date: string) => DayStats | undefined;
}

export const useProgressStore = create<ProgressState>()((set, get) => ({
  stats: null,
  calendar: null,
  deckProgress: [],
  jlptCountdown: null,
  isLoading: false,

  setStats: (stats) => set({ stats }),
  setCalendar: (calendar) => set({ calendar }),
  setDeckProgress: (progress) => set({ deckProgress: progress }),
  setJLPTCountdown: (countdown) => set({ jlptCountdown: countdown }),
  setLoading: (loading) => set({ isLoading: loading }),

  getDayStats: (date) => {
    const { calendar } = get();
    return calendar?.days.find((d) => d.date === date);
  },
}));
