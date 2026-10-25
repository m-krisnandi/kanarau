// === User & Auth ===
export type JLPTLevel = 'N5' | 'N4' | 'N3' | 'N2' | 'N1';

export interface User {
  id: number | string;
  email: string;
  name: string;
  displayName?: string;
  avatar_url?: string;
  current_level: JLPTLevel;
  role?: string;
  streak: number;
  total_xp: number;
  created_at: string;
  discord_username?: string;
  discord_webhook_url?: string;
  discord_notifications_enabled?: boolean;
}

export interface AuthResponse {
  user: User;
  token: string;
}

// === API Response ===
export interface ApiResponse<T> {
  data: T;
  message?: string;
  status?: number;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  total: number;
  page: number;
  per_page: number;
}

// === Decks & Cards ===
export interface Deck {
  id: number | string;
  name: string;
  jlpt_level: JLPTLevel;
  day_number: number;
  kotoba_count: number;
  total_cards?: number;
  progress_percent?: number;
}

export interface Kotoba {
  id: number | string;
  kanji: string;
  hiragana: string;
  meaning: string;
  romaji?: string;
  jlpt_level: JLPTLevel;
  part_of_speech: string;
  notes?: string;
  example_sentence?: string;
  example_sentence_meaning?: string;
  example_sentence_furigana?: string;
  meaning_id?: string;
  meaning_en?: string;
  meaning_my?: string;
  example_sentence_en?: string;
  example_sentence_my?: string;
  related_kotoba_ids?: string[];
  kanji_ids?: string[];
}

export interface Kanji {
  id: number | string;
  character: string;
  stroke_count: number;
  radical: string;
  radical_name?: string;
  radical_meaning?: string;
  on_reading?: string;
  kun_reading?: string;
  on_readings: string[];
  kun_readings: string[];
  meaning?: string;
  meanings: string[];
  meaning_id?: string;
  meaning_en?: string;
  meaning_my?: string;
  jlpt_level?: JLPTLevel;
  stroke_order_svg?: string;
  related_kotoba_ids?: string[];
  related_kotoba?: Kotoba[];
}

export type AnswerRating = 'again' | 'hard' | 'good' | 'easy';

export interface QuizCard {
  id?: number | string;
  kotoba_id?: number | string;
  kotoba: Kotoba;
  question: string;
  correct_answer: string;
  choices: string[];
  direction: string;
}

export interface QuizAnswer {
  card_id?: number | string;
  kotoba_id: number | string;
  direction?: string;
  selected_answer: string;
  correct_answer?: string;
  is_correct?: boolean;
  response_time_ms: number;
  rating?: AnswerRating;
}

export interface SessionResult {
  session_id?: number;
  deck_id?: number | string;
  total_cards: number;
  cards_studied?: number;
  correct_count?: number;
  cards_correct?: number;
  accuracy_percent: number;
  total_time_ms?: number;
  xp_gained?: number;
  xp_earned?: number;
  new_streak?: number;
  answers?: QuizAnswer[];
  card_ratings?: {
    kotoba_id: number | string;
    rating: AnswerRating;
    response_time_ms: number;
  }[];
}

export interface ReviewStats {
  pending_count: number;
  due_today: number;
  due_tomorrow: number;
  overdue: number;
}

// === Progress & Stats ===
export interface DayStats {
  date: string;
  studied: boolean;
  study_time_minutes: number;
  cards_studied: number;
  cards_reviewed: number;
  accuracy_percent: number;
}

export interface MonthlyCalendar {
  year: number;
  month: number;
  days: DayStats[];
}

export interface OverallStats {
  current_streak: number;
  longest_streak: number;
  total_study_days: number;
  total_study_time_minutes: number;
  total_cards_learned: number;
  average_accuracy: number;
}

export interface DeckProgress {
  deck_id: number;
  deck_name: string;
  day_number: number;
  jlpt_level: JLPTLevel;
  total_kotoba: number;
  learned: number;
  reviewing: number;
  mastered: number;
  progress_percent: number;
}

export interface JLPTCountdown {
  target_date: string;
  days_remaining: number;
  level: JLPTLevel;
}

export interface SearchResult {
  type: 'kotoba' | 'kanji';
  item: Kotoba | Kanji;
}

// === Admin & Feedback ===
export interface DailyActivityItem {
  dayLabel: string;
  date: string;
  cardsStudied: number;
  sessionsCount: number;
}

export interface AdminOverview {
  totalUsers: number;
  activeLearners: number;
  totalStudySessions: number;
  totalCardsStudied: number;
  totalMasteredWords: number;
  totalFeedbacks: number;
  pendingFeedbacks: number;
  levelDistribution: Record<string, number>;
  srsDistribution?: Record<string, number>;
  weeklyActivity?: DailyActivityItem[];
  globalAccuracy?: number;
}

export interface AdminUserStats {
  id: number;
  displayName: string;
  email: string;
  role: string;
  currentLevel: string;
  streak: number;
  totalXp: number;
  totalSessions: number;
  cardsStudied: number;
  masteredCount: number;
  learningCount: number;
  reviewCount: number;
  accuracyRate: number;
  lastActive: string;
  createdAt: string;
  discordUsername?: string | null;
}

export interface AdminUserDetail {
  userStats: AdminUserStats;
  statusBreakdown: Record<string, number>;
  recentSessions: {
    id: number;
    deckId: number;
    cardsStudied: number;
    cardsCorrect: number;
    startedAt: string;
    finishedAt?: string;
  }[];
}

export interface UserFeedbackItem {
  id: number;
  userId?: number;
  userEmail?: string;
  userName?: string;
  category: string;
  description: string;
  status: 'PENDING' | 'REVIEWED' | 'RESOLVED';
  createdAt: string;
}

export interface SubmitFeedbackPayload {
  category: string;
  description: string;
}

export interface LeaderboardEntry {
  rank: number;
  user_id: number;
  display_name: string;
  total_xp: number;
  gamification_level: number;
  level_title: string;
  streak: number;
  jlpt_level: string;
  is_current_user: boolean;
}

export interface LeaderboardData {
  top_users: LeaderboardEntry[];
  current_user_entry?: LeaderboardEntry | null;
  total_learners: number;
}

