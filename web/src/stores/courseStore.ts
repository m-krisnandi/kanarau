import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { courseApi } from '@/services/api';
import { useLanguageStore } from '@/stores/languageStore';
import { useAuthStore } from '@/stores/authStore';
import type { CourseTrackDto, CourseLevelDto, CourseDeckDto } from '@/types';
import type { Language } from '@/locales/translations';

export type TargetLanguage = 'ja' | 'id' | 'my' | 'en';
export type TrackCode = 'JA' | 'ID' | 'MY' | 'EN';

export interface RoutinePillar {
  id: 'vocab' | 'grammar' | 'practice' | 'ai';
  title: string;
  subtitle: string;
  minutes: number;
  completed: boolean;
}

interface CourseState {
  myLanguage: Language;
  targetLanguage: TargetLanguage;
  activeTrack: TrackCode;
  activeLevel: string;
  tracks: CourseTrackDto[];
  levels: CourseLevelDto[];
  decks: CourseDeckDto[];
  loadingTracks: boolean;
  loadingDecks: boolean;
  isModalOpen: boolean;
  dailyPillars: RoutinePillar[];

  setModalOpen: (open: boolean) => void;
  loadTracks: () => Promise<void>;
  loadLevels: (trackCode?: TrackCode) => Promise<void>;
  loadDecks: () => Promise<void>;
  switchCourse: (
    newTargetLang: TargetLanguage,
    newMyLang: Language,
    newTrackCode: TrackCode,
    newLevelCode: string
  ) => Promise<void>;
  togglePillar: (pillarId: RoutinePillar['id']) => void;
  resetDailyPillars: () => void;
}

function getInitialTarget(): TargetLanguage {
  if (typeof window === 'undefined') return 'ja';
  try {
    const direct = localStorage.getItem('kanarau_target_lang');
    if (direct === 'ja' || direct === 'id' || direct === 'my' || direct === 'en') {
      return direct as TargetLanguage;
    }
  } catch {}
  return 'ja';
}

function getInitialTrack(): TrackCode {
  if (typeof window === 'undefined') return 'JA';
  try {
    const direct = localStorage.getItem('kanarau_active_track');
    if (direct === 'JA' || direct === 'ID' || direct === 'MY' || direct === 'EN') {
      return direct as TrackCode;
    }
  } catch {}
  return 'JA';
}

function getInitialLevel(): string {
  if (typeof window === 'undefined') return 'N2';
  try {
    const direct = localStorage.getItem('kanarau_active_level');
    if (direct && direct.trim().length > 0) {
      return direct.trim();
    }
  } catch {}
  return 'N2';
}

export const useCourseStore = create<CourseState>()(
  persist(
    (set, get) => ({
      myLanguage: 'en',
      targetLanguage: getInitialTarget(),
      activeTrack: getInitialTrack(),
      activeLevel: getInitialLevel(),
      tracks: [],
      levels: [],
      decks: [],
      loadingTracks: false,
      loadingDecks: false,
      isModalOpen: false,
      dailyPillars: [
        {
          id: 'vocab',
          title: 'Fondasi & Kosakata Harian',
          subtitle: 'Pengenalan kata & huruf dengan audio native',
          minutes: 8,
          completed: false,
        },
        {
          id: 'grammar',
          title: 'Tata Bahasa & Pola Kalimat',
          subtitle: 'Kuasai aturan kalimat & perbedaan esensial',
          minutes: 8,
          completed: false,
        },
        {
          id: 'practice',
          title: 'Latihan Konteks & Dialog Nyata',
          subtitle: 'Simulasi percakapan sehari-hari & kuis',
          minutes: 7,
          completed: false,
        },
        {
          id: 'ai',
          title: 'AI Sensei Partner Bicara',
          subtitle: 'Tanya jawab interaktif & koreksi langsung',
          minutes: 7,
          completed: false,
        },
      ],

      setModalOpen: (open: boolean) => set({ isModalOpen: open }),

      loadTracks: async () => {
        const lang = useLanguageStore.getState().language;
        set({ loadingTracks: true });
        try {
          const res = await courseApi.getTracks(lang);
          if (res?.data) {
            set({ tracks: res.data, loadingTracks: false });
          }
        } catch {
          set({ loadingTracks: false });
        }
      },

      loadLevels: async (trackCode?: TrackCode) => {
        const targetTrack = trackCode || get().activeTrack;
        const lang = useLanguageStore.getState().language;
        try {
          const res = await courseApi.getLevels(targetTrack, lang);
          if (res?.data) {
            set({ levels: res.data });
          }
        } catch (err) {
          console.warn('Failed to load levels:', err);
        }
      },

      loadDecks: async () => {
        const { activeTrack, activeLevel } = get();
        const lang = useLanguageStore.getState().language;
        set({ loadingDecks: true });
        try {
          const res = await courseApi.getDecks(activeTrack, activeLevel, lang);
          if (res?.data) {
            set({ decks: res.data, loadingDecks: false });
          } else {
            set({ decks: [], loadingDecks: false });
          }
        } catch {
          set({ decks: [], loadingDecks: false });
        }
      },

      switchCourse: async (newTargetLang, newMyLang, newTrackCode, newLevelCode) => {
        // 1. Double persist locally
        try {
          localStorage.setItem('kanarau_target_lang', newTargetLang);
          localStorage.setItem('kanarau_active_track', newTrackCode);
          localStorage.setItem('kanarau_active_level', newLevelCode);
          localStorage.setItem('kanarau_lang', newMyLang);
        } catch {}

        // 2. Sync languageStore
        useLanguageStore.getState().setLanguage(newMyLang, false);

        // 3. Update store state
        set({
          targetLanguage: newTargetLang,
          myLanguage: newMyLang,
          activeTrack: newTrackCode,
          activeLevel: newLevelCode,
          isModalOpen: false,
        });

        // 4. If Japanese track, also sync authStore level
        if (newTrackCode === 'JA' && (newLevelCode.startsWith('N'))) {
          try {
            useAuthStore.getState().setLevel(newLevelCode as any);
          } catch {}
        }

        // 5. Sync with backend API if logged in
        try {
          const token = localStorage.getItem('kanarau-auth');
          if (token && token.includes('"token"')) {
            await courseApi.switchCourse({
              my_language: newMyLang,
              target_language: newTargetLang,
              track_code: newTrackCode,
              level_code: newLevelCode,
            });
          }
        } catch (err) {
          console.warn('Failed to sync course switch with backend:', err);
        }

        // 6. Reload tracks & decks
        get().loadTracks();
        get().loadLevels(newTrackCode);
        get().loadDecks();
      },

      togglePillar: (pillarId) => {
        set((state) => ({
          dailyPillars: state.dailyPillars.map((p) =>
            p.id === pillarId ? { ...p, completed: !p.completed } : p
          ),
        }));
      },

      resetDailyPillars: () => {
        set((state) => ({
          dailyPillars: state.dailyPillars.map((p) => ({ ...p, completed: false })),
        }));
      },
    }),
    {
      name: 'kanarau-course',
      partialize: (state) => ({
        targetLanguage: state.targetLanguage,
        activeTrack: state.activeTrack,
        activeLevel: state.activeLevel,
        dailyPillars: state.dailyPillars,
      }),
      onRehydrateStorage: () => (state) => {
        if (state) {
          try {
            localStorage.setItem('kanarau_target_lang', state.targetLanguage);
            localStorage.setItem('kanarau_active_track', state.activeTrack);
            localStorage.setItem('kanarau_active_level', state.activeLevel);
          } catch {}
        }
      },
    }
  )
);
