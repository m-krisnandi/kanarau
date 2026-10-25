import type { DeckProgress, OverallStats, DayStats } from '@/types';
import { formatLocalYMD } from '@/utils';

export interface LocalDeckProgressItem {
  deck_id: number;
  percent: number;
  learned: number;
  total: number;
  timestamp: number;
  completedDate?: string;
}

export interface LocalDailyActivityItem {
  date: string;
  studied: boolean;
  minutes: number;
  cardsStudied: number;
  cardsCorrect: number;
  accuracy: number;
  goiCompleted?: boolean;
  bunpoCompleted?: boolean;
  timestamp: number;
}

export function getUserKey(user: { id?: number | string | null; email?: string | null } | null | undefined): string {
  if (user?.id) return String(user.id);
  if (user?.email) return user.email.trim().toLowerCase();
  return 'guest';
}

export function recordLocalStudySession(
  userKey: string,
  deckId: number,
  cardsStudied: number,
  cardsCorrect: number,
  durationMs: number,
  accuracyPercent: number = 100
) {
  try {
    const todayStr = formatLocalYMD();
    const durationMinutes = Math.max(1, Math.round(durationMs / 60000));

    // 1. Update deck progress
    const deckKey = `kanarau_local_progress_${userKey}`;
    const existingDecks: Record<string, LocalDeckProgressItem> = JSON.parse(
      localStorage.getItem(deckKey) || '{}'
    );
    existingDecks[String(deckId)] = {
      deck_id: deckId,
      percent: accuracyPercent >= 100 ? 100 : Math.round(accuracyPercent),
      learned: cardsStudied,
      total: cardsStudied,
      timestamp: Date.now(),
      completedDate: todayStr,
    };
    localStorage.setItem(deckKey, JSON.stringify(existingDecks));

    // 2. Update daily activity
    const activityKey = `kanarau_daily_activity_${userKey}`;
    const existingActivities: Record<string, LocalDailyActivityItem> = JSON.parse(
      localStorage.getItem(activityKey) || '{}'
    );
    const prevToday = existingActivities[todayStr] || {
      date: todayStr,
      studied: true,
      minutes: 0,
      cardsStudied: 0,
      cardsCorrect: 0,
      accuracy: 100,
      goiCompleted: true,
      timestamp: Date.now(),
    };

    const newCardsStudied = prevToday.cardsStudied + cardsStudied;
    const newCardsCorrect = prevToday.cardsCorrect + cardsCorrect;
    const newAccuracy = newCardsStudied > 0 ? Math.round((newCardsCorrect / newCardsStudied) * 100) : 100;

    existingActivities[todayStr] = {
      ...prevToday,
      studied: true,
      minutes: prevToday.minutes + durationMinutes,
      cardsStudied: newCardsStudied,
      cardsCorrect: newCardsCorrect,
      accuracy: newAccuracy,
      goiCompleted: true,
      timestamp: Date.now(),
    };
    localStorage.setItem(activityKey, JSON.stringify(existingActivities));

    // 3. Dispatch event for instant reactive UI sync
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('kanarau_progress_updated'));
    }
  } catch (err) {
    console.error('Failed to record local study activity', err);
  }
}

export function getLocalDailyActivity(userKey: string): Record<string, LocalDailyActivityItem> {
  try {
    const activityKey = `kanarau_daily_activity_${userKey}`;
    return JSON.parse(localStorage.getItem(activityKey) || '{}');
  } catch {
    return {};
  }
}

export function computeLocalStreak(userKey: string, apiStreak?: number): number {
  try {
    const activities = getLocalDailyActivity(userKey);
    const today = new Date();
    const todayStr = formatLocalYMD(today);

    let streak = 0;
    const checkDate = new Date(today);

    // If today is not yet studied, check if yesterday was studied to maintain unbroken streak
    if (!activities[todayStr]?.studied) {
      checkDate.setDate(checkDate.getDate() - 1);
    }

    while (true) {
      const dateStr = formatLocalYMD(checkDate);
      if (activities[dateStr]?.studied) {
        streak++;
        checkDate.setDate(checkDate.getDate() - 1);
      } else {
        break;
      }
    }

    const hasStudiedToday = Boolean(activities[todayStr]?.studied);
    return Math.max(apiStreak || 0, streak, hasStudiedToday ? 1 : 0);
  } catch {
    return apiStreak || 0;
  }
}

export function mergeDeckProgress(decks: DeckProgress[], userKey: string): DeckProgress[] {
  try {
    const deckKey = `kanarau_local_progress_${userKey}`;
    const localSaved: Record<string, LocalDeckProgressItem> = JSON.parse(
      localStorage.getItem(deckKey) || '{}'
    );
    if (!localSaved || Object.keys(localSaved).length === 0) return decks;

    return decks.map((d) => {
      const local = localSaved[String(d.deck_id)];
      if (local && (local.percent > (d.progress_percent || 0) || (local.learned || 0) > (d.learned || 0))) {
        return {
          ...d,
          progress_percent: Math.max(d.progress_percent || 0, local.percent),
          // In SRS, cards newly studied in a daily session start in "Belajar" (Learning), NOT "Mastered"!
          learned: Math.max(d.learned || 0, local.learned || 0),
        };
      }
      return d;
    });
  } catch {
    return decks;
  }
}

export function mergeOverallStats(stats: OverallStats | null, userKey: string): OverallStats {
  try {
    const deckKey = `kanarau_local_progress_${userKey}`;
    const localDecks: Record<string, LocalDeckProgressItem> = JSON.parse(
      localStorage.getItem(deckKey) || '{}'
    );
    const localActivities = getLocalDailyActivity(userKey);

    const localTotalLearned = Object.values(localDecks).reduce(
      (acc, item) => acc + (item.learned || 0),
      0
    );
    const localTotalMinutes = Object.values(localActivities).reduce(
      (acc, item) => acc + (item.minutes || 0),
      0
    );
    const localStudyDays = Object.values(localActivities).filter((item) => item.studied).length;
    const streak = computeLocalStreak(userKey, stats?.current_streak);

    const totalLearned = Math.max(stats?.total_cards_learned || 0, localTotalLearned);
    const totalMinutes = Math.max(stats?.total_study_time_minutes || 0, localTotalMinutes);
    const totalDays = Math.max(stats?.total_study_days || 0, localStudyDays);
    const longestStreak = Math.max(stats?.longest_streak || 0, streak);
    const accuracy = stats && stats.average_accuracy > 0 ? stats.average_accuracy : 100;

    return {
      current_streak: streak,
      longest_streak: longestStreak,
      total_study_days: totalDays,
      total_study_time_minutes: totalMinutes,
      total_cards_learned: totalLearned,
      average_accuracy: totalLearned > 0 ? accuracy : (stats?.average_accuracy || 0),
    };
  } catch {
    return (
      stats || {
        current_streak: 0,
        longest_streak: 0,
        total_study_days: 0,
        total_study_time_minutes: 0,
        total_cards_learned: 0,
        average_accuracy: 0,
      }
    );
  }
}

export function mergeCalendarDays(days: DayStats[], userKey: string): DayStats[] {
  try {
    const localActivities = getLocalDailyActivity(userKey);
    const todayStr = formatLocalYMD();

    // Check if day exists in days list, or if days is empty
    const updated = days.map((d) => {
      const act = localActivities[d.date];
      if (act && act.studied) {
        return {
          ...d,
          studied: true,
          study_time_minutes: Math.max(d.study_time_minutes || 0, act.minutes || 15),
          cards_studied: Math.max(d.cards_studied || 0, act.cardsStudied || 0),
          accuracy_percent: Math.max(d.accuracy_percent || 0, act.accuracy || 100),
        };
      }
      return d;
    });

    // If today is studied locally but not yet present in days list, ensure today is marked
    const todayEntry = updated.find((d) => d.date === todayStr);
    if (todayEntry && localActivities[todayStr]?.studied) {
      todayEntry.studied = true;
    }

    return updated;
  } catch {
    return days;
  }
}
