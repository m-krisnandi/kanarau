import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Theme = 'light' | 'dark';

interface ThemeState {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const applyThemeToDocument = (theme: Theme) => {
  if (typeof document !== 'undefined') {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: 'light',

      toggleTheme: () => {
        const next = get().theme === 'light' ? 'dark' : 'light';
        applyThemeToDocument(next);
        set({ theme: next });
      },

      setTheme: (theme: Theme) => {
        applyThemeToDocument(theme);
        set({ theme });
      },
    }),
    {
      name: 'kanarau-theme',
      onRehydrateStorage: () => (state) => {
        if (state) {
          applyThemeToDocument(state.theme);
        }
      },
    }
  )
);

// Initial application on file load
if (typeof window !== 'undefined') {
  try {
    const stored = localStorage.getItem('kanarau-theme');
    if (stored) {
      const parsed = JSON.parse(stored);
      applyThemeToDocument(parsed.state?.theme || 'light');
    }
  } catch {}
}
