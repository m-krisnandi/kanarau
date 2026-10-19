import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface MistakeRecord {
  id: string;
  kanji: string;
  hiragana: string;
  meaning: string;
  level: string; // N1, N2, etc.
  wrongAnswer: string;
  correctAnswer: string;
  timestamp: number;
  count: number;
}

interface MistakesState {
  mistakes: MistakeRecord[];
  recordMistake: (data: {
    kanji: string;
    hiragana: string;
    meaning: string;
    level: string;
    wrongAnswer: string;
    correctAnswer: string;
  }) => void;
  getWeakWords: (level?: string) => MistakeRecord[];
  clearMistakes: () => void;
}

export const useMistakesStore = create<MistakesState>()(
  persist(
    (set, get) => ({
      mistakes: [
        // Seed default initial weak kanji based on user's recent study
        {
          id: 'm_seed_1',
          kanji: '煮込む',
          hiragana: 'にこむ',
          meaning: 'merebus lama hingga meresap',
          level: 'N2',
          wrongAnswer: 'しみこむ',
          correctAnswer: 'にこむ',
          timestamp: Date.now() - 3600000,
          count: 2,
        },
        {
          id: 'm_seed_2',
          kanji: '区別',
          hiragana: 'くべつ',
          meaning: 'pembedaan ; pemisahan',
          level: 'N2',
          wrongAnswer: 'ていせい',
          correctAnswer: 'くべつ',
          timestamp: Date.now() - 7200000,
          count: 1,
        },
        {
          id: 'm_seed_3',
          kanji: '圧倒',
          hiragana: 'あっとう',
          meaning: 'kewalahan, menguasai secara mutlak',
          level: 'N1',
          wrongAnswer: 'りょうが',
          correctAnswer: 'あっとう',
          timestamp: Date.now() - 10000000,
          count: 2,
        },
        {
          id: 'm_seed_4',
          kanji: '促す',
          hiragana: 'うながす',
          meaning: 'mendesak, mendorong untuk bertindak',
          level: 'N1',
          wrongAnswer: 'おかす',
          correctAnswer: 'うながす',
          timestamp: Date.now() - 14000000,
          count: 2,
        },
      ],

      recordMistake: (data) => {
        const { mistakes } = get();
        const existingIndex = mistakes.findIndex(
          (m) => m.kanji === data.kanji && m.level === data.level
        );

        if (existingIndex >= 0 && mistakes[existingIndex]) {
          const current = mistakes[existingIndex]!;
          const updated = [...mistakes];
          updated[existingIndex] = {
            ...current,
            count: current.count + 1,
            wrongAnswer: data.wrongAnswer,
            timestamp: Date.now(),
          };
          set({ mistakes: updated });
        } else {
          const newRecord: MistakeRecord = {
            id: 'm_' + Date.now(),
            kanji: data.kanji,
            hiragana: data.hiragana,
            meaning: data.meaning,
            level: data.level,
            wrongAnswer: data.wrongAnswer,
            correctAnswer: data.correctAnswer,
            timestamp: Date.now(),
            count: 1,
          };
          set({ mistakes: [newRecord, ...mistakes].slice(0, 50) });
        }
      },

      getWeakWords: (level?: string) => {
        const { mistakes } = get();
        const filtered = level
          ? mistakes.filter((m) => m.level.toUpperCase() === level.toUpperCase())
          : mistakes;
        return [...filtered].sort((a, b) => b.count - a.count || b.timestamp - a.timestamp);
      },

      clearMistakes: () => set({ mistakes: [] }),
    }),
    {
      name: 'kanarau-mistakes',
    }
  )
);
