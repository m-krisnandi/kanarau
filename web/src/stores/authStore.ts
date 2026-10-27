import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User, JLPTLevel } from '@/types';
import { authApi, setAuthToken } from '@/services/api';

function getInitialLevel(): JLPTLevel {
  try {
    const saved = localStorage.getItem('kanarau_level');
    if (saved === 'N1' || saved === 'N2' || saved === 'N3' || saved === 'N4' || saved === 'N5') {
      return saved as JLPTLevel;
    }
  } catch {}
  return 'N2';
}

interface AuthState {
  user: User | null;
  currentLevel: JLPTLevel;
  token: string | null;
  isLoading: boolean;
  error: string | null;

  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  fetchUser: () => Promise<void>;
  setLevel: (level: JLPTLevel) => Promise<void>;
  updateProfile: (name: string) => void;
  updateDiscord: (username?: string | null, webhookUrl?: string | null, enabled?: boolean) => Promise<void>;
  disconnectDiscord: () => Promise<void>;
  clearError: () => void;
}

try {
  // Clean legacy un-scoped keys
  localStorage.removeItem('kanarau_dokkai_results');
  localStorage.removeItem('kanarau_choukai_results');
  const storedAuth = localStorage.getItem('kanarau-auth');
  if (storedAuth) {
    const parsed = JSON.parse(storedAuth);
    if (parsed?.state?.token) {
      setAuthToken(parsed.state.token);
    }
  }
} catch {}

const initialLevel = getInitialLevel();

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      currentLevel: initialLevel,
      token: null,
      isLoading: false,
      error: null,

      login: async (email, password) => {
        set({ isLoading: true, error: null });
        try {
          const res = await authApi.login(email.trim(), password);
          const userLevel = res.data.user.current_level || 'N2';
          try {
            localStorage.setItem('kanarau_level', userLevel);
          } catch {}
          setAuthToken(res.data.token);
          set({
            user: res.data.user,
            currentLevel: userLevel,
            token: res.data.token,
            isLoading: false,
          });
        } catch (err) {
          set({
            error: err instanceof Error ? err.message : 'Login gagal',
            isLoading: false,
          });
          throw err;
        }
      },

      register: async (name, email, password) => {
        set({ isLoading: true, error: null });
        try {
          const res = await authApi.register(name.trim(), email.trim(), password);
          const userLevel = res.data.user.current_level || 'N2';
          try {
            localStorage.setItem('kanarau_level', userLevel);
          } catch {}
          setAuthToken(res.data.token);
          set({
            user: res.data.user,
            currentLevel: userLevel,
            token: res.data.token,
            isLoading: false,
          });
        } catch (err) {
          set({
            error: err instanceof Error ? err.message : 'Registrasi gagal',
            isLoading: false,
          });
          throw err;
        }
      },

      logout: () => {
        setAuthToken(null);
        try {
          localStorage.removeItem('kanarau-auth');
          localStorage.removeItem('kanarau_dokkai_results');
          localStorage.removeItem('kanarau_choukai_results');
        } catch {}
        set({ user: null, token: null, error: null });
      },

      fetchUser: async () => {
        const { token } = get();
        if (!token) {
          set({ user: null });
          return;
        }
        try {
          const res = await authApi.me();
          if (res?.data) {
            set((state) => {
              const lvl = res.data.current_level || state.currentLevel || 'N2';
              try {
                localStorage.setItem('kanarau_level', lvl);
              } catch {}
              const effectiveXp = Math.max(res.data.total_xp ?? 0, state.user?.total_xp ?? 0);
              return {
                user: {
                  ...res.data,
                  total_xp: effectiveXp,
                },
                currentLevel: lvl,
              };
            });
          }
        } catch (err: any) {
          const errMsg = err?.message || '';
          if (errMsg.includes('401') || errMsg.toLowerCase().includes('unauthorized')) {
            setAuthToken(null);
            set({ user: null, token: null });
            try {
              localStorage.removeItem('kanarau-auth');
            } catch {}
          }
        }
      },

      setLevel: async (level: JLPTLevel) => {
        try {
          localStorage.setItem('kanarau_level', level);
        } catch {}

        const currentUser = get().user;
        const updatedUser: User | null = currentUser
          ? { ...currentUser, current_level: level }
          : null;

        set({ user: updatedUser, currentLevel: level });

        if (currentUser && get().token) {
          try {
            const res = await authApi.updateLevel(level);
            if (res?.data) {
              set((state) => ({
                user: state.user ? { ...state.user, ...res.data, current_level: level } : res.data,
                currentLevel: level,
              }));
            }
          } catch (err) {
            console.warn('Could not sync level with backend:', err);
          }
        }
      },

      updateProfile: (name: string) => {
        const currentUser = get().user;
        if (currentUser) {
          set({ user: { ...currentUser, name } });
        }
      },

      updateDiscord: async (username, webhookUrl, enabled) => {
        const currentUser = get().user;
        if (currentUser) {
          set({
            user: {
              ...currentUser,
              discord_username: username ?? undefined,
              discord_webhook_url: webhookUrl ?? undefined,
              discord_notifications_enabled: enabled ?? false,
            },
          });
        }
        try {
          const res = await authApi.updateDiscord(username, webhookUrl, enabled);
          if (res?.data) {
            set({ user: res.data });
          }
        } catch (err) {
          console.warn('Could not sync discord with backend:', err);
        }
      },

      disconnectDiscord: async () => {
        const currentUser = get().user;
        if (currentUser) {
          set({
            user: {
              ...currentUser,
              discord_username: undefined,
              discord_webhook_url: undefined,
              discord_notifications_enabled: false,
            },
          });
        }
        try {
          const res = await authApi.updateDiscord(null, null, false);
          if (res?.data) {
            set({ user: res.data });
          }
        } catch (err) {
          console.warn('Could not disconnect discord in backend:', err);
        }
      },

      clearError: () => set({ error: null }),
    }),
    {
      name: 'kanarau-auth',
      partialize: (state) => ({
        user: state.token ? state.user : null,
        currentLevel: state.currentLevel,
        token: state.token,
      }),
      onRehydrateStorage: () => (state) => {
        if (state?.token) {
          setAuthToken(state.token);
        } else if (state) {
          state.user = null;
          setAuthToken(null);
        }
      },
    }
  )
);
