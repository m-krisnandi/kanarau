import type {
  AuthResponse,
  Deck,
  Kotoba,
  Kanji,
  ReviewStats,
  SessionResult,
  OverallStats,
  MonthlyCalendar,
  DeckProgress,
  JLPTCountdown,
  SearchResult,
  QuizCard,
  QuizAnswer,
  ApiResponse,
  User,
  AdminOverview,
  AdminUserStats,
  AdminUserDetail,
  UserFeedbackItem,
  SubmitFeedbackPayload,
  LeaderboardData,
} from '@/types';

const API_BASE = (import.meta.env.VITE_API_BASE || '').replace(/\/$/, '');
const BASE_URL = `${API_BASE}/api/v1`;

let inMemoryToken: string | null = null;
const PENDING_STUDY_SESSIONS_KEY = 'kanarau-pending-study-sessions';
const PENDING_REVIEWS_KEY = 'kanarau-pending-reviews';

export const setAuthToken = (token: string | null) => {
  inMemoryToken = token;
};

export function getToken(): string | null {
  if (inMemoryToken) return inMemoryToken;
  try {
    const stored = localStorage.getItem('kanarau-auth');
    if (stored) {
      const parsed = JSON.parse(stored);
      const t = parsed?.state?.token ?? null;
      if (t) {
        inMemoryToken = t;
        return t;
      }
    }
  } catch {
    // ignore
  }
  return null;
}

function readQueue<T>(key: string): T[] {
  try {
    const raw = localStorage.getItem(key);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function enqueue<T>(key: string, payload: T) {
  try {
    const queue = readQueue<T>(key);
    queue.push(payload);
    localStorage.setItem(key, JSON.stringify(queue.slice(-20)));
  } catch {
    // Offline persistence is best-effort and must never block the study flow.
  }
}

export async function flushPendingStudyData() {
  if (typeof navigator !== 'undefined' && !navigator.onLine) return;

  const sessions = readQueue<SessionResult>(PENDING_STUDY_SESSIONS_KEY);
  const reviews = readQueue<QuizAnswer[]>(PENDING_REVIEWS_KEY);

  for (const session of sessions) {
    try {
      await request<ApiResponse<{ xp_gained: number }>>('/study/submit', {
        method: 'POST',
        body: JSON.stringify(session),
      });
      sessions.shift();
      localStorage.setItem(PENDING_STUDY_SESSIONS_KEY, JSON.stringify(sessions));
    } catch {
      break;
    }
  }

  for (const review of reviews) {
    try {
      await request<ApiResponse<{ xp_gained: number }>>('/review/submit', {
        method: 'POST',
        body: JSON.stringify({ answers: review }),
      });
      reviews.shift();
      localStorage.setItem(PENDING_REVIEWS_KEY, JSON.stringify(reviews));
    } catch {
      break;
    }
  }
}

if (typeof window !== 'undefined') {
  window.addEventListener('online', () => void flushPendingStudyData());
}

async function request<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const token = getToken();
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...((options.headers as Record<string, string>) ?? {}),
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    throw new Error(
      (errorBody as { error?: string }).error ??
        `Request failed: ${response.status}`
    );
  }

  return response.json() as Promise<T>;
}

// ─── Auth ────────────────────────────────────────────────────────────
export const authApi = {
  login(email: string, password: string) {
    return request<ApiResponse<AuthResponse>>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  },

  register(name: string, email: string, password: string) {
    return request<ApiResponse<AuthResponse>>('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
    });
  },

  forgotPassword(email: string, newPassword: string) {
    return request<ApiResponse<string>>('/auth/forgot-password', {
      method: 'POST',
      body: JSON.stringify({ email, newPassword }),
    });
  },

  me() {
    return request<ApiResponse<AuthResponse['user']>>('/auth/me');
  },

  updateLevel(level: string) {
    return request<ApiResponse<User>>('/auth/level', {
      method: 'PUT',
      body: JSON.stringify({ level }),
    });
  },

  changePassword(newPassword: string) {
    return request<ApiResponse<string>>('/auth/password', {
      method: 'PUT',
      body: JSON.stringify({ newPassword }),
    });
  },

  updateDiscord(
    discordUsername?: string | null,
    discordWebhookUrl?: string | null,
    discordNotificationsEnabled?: boolean
  ) {
    return request<ApiResponse<User>>('/auth/discord', {
      method: 'PUT',
      body: JSON.stringify({
        discordUsername,
        discordWebhookUrl,
        discordNotificationsEnabled,
      }),
    });
  },

  testDiscordNotification(discordWebhookUrl?: string | null) {
    return request<ApiResponse<{ sent: boolean; message: string; mode?: string }>>(
      '/auth/discord/test',
      {
        method: 'POST',
        body: JSON.stringify({ discordWebhookUrl }),
      }
    );
  },

  testDiscord(discordWebhookUrl?: string | null) {
    return this.testDiscordNotification(discordWebhookUrl);
  },
};

// ─── Decks ───────────────────────────────────────────────────────────
export const deckApi = {
  list(level?: string) {
    const query = level ? '?level=' + encodeURIComponent(level) : '';
    return request<ApiResponse<Deck[]>>('/decks' + query);
  },

  get(id: string) {
    return request<ApiResponse<Deck>>(`/decks/${id}`);
  },

  getCards(deckId: string | number, lang?: string) {
    const query = lang ? `?lang=${encodeURIComponent(lang)}` : '';
    return request<ApiResponse<QuizCard[]>>(`/decks/${deckId}/cards${query}`);
  },

  getKotoba(deckId: string | number) {
    return request<ApiResponse<Kotoba[]>>(`/decks/${deckId}/kotoba`);
  },
};

// ─── Study ───────────────────────────────────────────────────────────
export const studyApi = {
  async submitSession(result: SessionResult) {
    try {
      return await request<ApiResponse<{ xp_gained: number }>>('/study/submit', {
        method: 'POST',
        body: JSON.stringify(result),
      });
    } catch (err) {
      if ((typeof navigator !== 'undefined' && !navigator.onLine) || err instanceof TypeError) {
        enqueue(PENDING_STUDY_SESSIONS_KEY, result);
      }
      throw err;
    }
  },

  submitAnswer(answer: QuizAnswer) {
    return request<ApiResponse<void>>('/study/answer', {
      method: 'POST',
      body: JSON.stringify(answer),
    });
  },
};

// ─── Review ──────────────────────────────────────────────────────────
export const reviewApi = {
  getStats() {
    return request<ApiResponse<ReviewStats>>('/review/stats');
  },

  getQueue(lang?: string) {
    const query = lang ? `?lang=${encodeURIComponent(lang)}` : '';
    return request<ApiResponse<QuizCard[]>>(`/review/queue${query}`);
  },

  async submitReview(answers: QuizAnswer[]) {
    try {
      return await request<ApiResponse<{ xp_gained: number }>>('/review/submit', {
        method: 'POST',
        body: JSON.stringify({ answers }),
      });
    } catch (err) {
      if ((typeof navigator !== 'undefined' && !navigator.onLine) || err instanceof TypeError) {
        enqueue(PENDING_REVIEWS_KEY, answers);
      }
      throw err;
    }
  },
};

// ─── Dictionary ──────────────────────────────────────────────────────
export const jishoApi = {
  search(query: string, lang?: string, level?: string) {
    const langParam = lang ? `&lang=${encodeURIComponent(lang)}` : '';
    const levelParam = level && level !== 'all' ? `&level=${encodeURIComponent(level)}` : '';
    return request<ApiResponse<SearchResult[]>>(
      `/jisho/search?q=${encodeURIComponent(query)}${langParam}${levelParam}`
    );
  },

  getKotoba(id: string | number, lang?: string) {
    const query = lang ? `?lang=${encodeURIComponent(lang)}` : '';
    return request<ApiResponse<Kotoba>>(`/jisho/kotoba/${id}${query}`);
  },

  getKanji(id: string | number, lang?: string) {
    const query = lang ? `?lang=${encodeURIComponent(lang)}` : '';
    return request<ApiResponse<Kanji>>(`/jisho/kanji/${id}${query}`);
  },

  getRelatedKotoba(kanjiId: string, lang?: string) {
    const query = lang ? `?lang=${encodeURIComponent(lang)}` : '';
    return request<ApiResponse<Kotoba[]>>(`/jisho/kanji/${kanjiId}/kotoba${query}`);
  },
};

// ─── Progress ────────────────────────────────────────────────────────
export const progressApi = {
  getOverallStats() {
    return request<ApiResponse<OverallStats>>('/progress/stats');
  },

  getCalendar(year: number, month: number) {
    return request<ApiResponse<MonthlyCalendar>>(
      `/progress/calendar?year=${year}&month=${month}`
    );
  },

  getDeckProgress() {
    return request<ApiResponse<DeckProgress[]>>('/progress/decks');
  },

  getJLPTCountdown() {
    return request<ApiResponse<JLPTCountdown>>('/progress/jlpt-countdown');
  },
};

// ─── Feedback ────────────────────────────────────────────────────────
export const feedbackApi = {
  submit(payload: SubmitFeedbackPayload) {
    return request<ApiResponse<UserFeedbackItem>>("/feedback", {
      method: "POST",
      body: JSON.stringify(payload),
    });
  },
};

// ─── Admin ───────────────────────────────────────────────────────────
export const adminApi = {
  getOverview() {
    return request<ApiResponse<AdminOverview>>("/admin/overview");
  },

  getUsers() {
    return request<ApiResponse<AdminUserStats[]>>("/admin/users");
  },

  getUserDetail(userId: number | string) {
    return request<ApiResponse<AdminUserDetail>>("/admin/users/" + userId);
  },

  updateUserRole(userId: number | string, role: 'ADMIN' | 'USER') {
    return request<ApiResponse<AdminUserStats>>("/admin/users/" + userId + "/role", {
      method: 'PATCH',
      body: JSON.stringify({ role }),
    });
  },

  createOrPromoteAdmin(payload: { email: string; name?: string; password?: string }) {
    return request<ApiResponse<AdminUserStats>>('/admin/users/admin', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  },

  getFeedbacks() {
    return request<ApiResponse<UserFeedbackItem[]>>("/admin/feedbacks");
  },

  updateFeedbackStatus(id: number, status: "PENDING" | "REVIEWED" | "RESOLVED") {
    return request<ApiResponse<UserFeedbackItem>>("/admin/feedbacks/" + id + "/status", {
      method: "PATCH",
      body: JSON.stringify({ status }),
    });
  },

  deleteFeedback(id: number) {
    return request<ApiResponse<string>>("/admin/feedbacks/" + id, {
      method: "DELETE",
    });
  },
};

// ─── Leaderboard ───────────────────────────────────────────────────────
export const leaderboardApi = {
  getLeaderboard() {
    return request<ApiResponse<LeaderboardData>>('/leaderboard');
  },
};

