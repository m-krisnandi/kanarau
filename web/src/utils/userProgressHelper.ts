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
  cardsReviewed?: number;
  accuracy: number;
  goiCompleted?: boolean;
  bunpoCompleted?: boolean;
  dokkaiCompleted?: boolean;
  choukaiCompleted?: boolean;
  reviewCompleted?: boolean;
  timestamp: number;
}

export function getUserKey(user: { id?: number | string | null; email?: string | null } | null | undefined): string {
  if (user?.id) return String(user.id);
  if (user?.email) return user.email.trim().toLowerCase();
  return 'guest';
}

/**
 * Scan all possible keys in localStorage matching a prefix for the user (handles userKey, ID, email, or guest fallback)
 */
function readBestMatchingStorage<T>(prefix: string, userKey: string): T | null {
  try {
    const direct = localStorage.getItem(`${prefix}_${userKey}`);
    if (direct) return JSON.parse(direct);

    // Look for any key starting with prefix
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith(prefix)) {
        const val = localStorage.getItem(key);
        if (val && val !== '{}' && val !== '[]') {
          return JSON.parse(val);
        }
      }
    }
  } catch {}
  return null;
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

export function recordBunpoCompletion(
  userKey: string,
  unitId: string,
  questionCount: number = 6,
  durationMinutes: number = 5
) {
  try {
    const todayStr = formatLocalYMD();

    // 1. Update Bunpo results
    const bunpoKey = `kanarau_bunpo_results_${userKey}`;
    const existingBunpo = JSON.parse(localStorage.getItem(bunpoKey) || '{}');
    existingBunpo[unitId] = true;
    localStorage.setItem(bunpoKey, JSON.stringify(existingBunpo));

    // 2. Update Daily Activity
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
      bunpoCompleted: true,
      timestamp: Date.now(),
    };

    existingActivities[todayStr] = {
      ...prevToday,
      studied: true,
      minutes: prevToday.minutes + durationMinutes,
      cardsStudied: prevToday.cardsStudied + questionCount,
      cardsCorrect: prevToday.cardsCorrect + questionCount,
      bunpoCompleted: true,
      timestamp: Date.now(),
    };
    localStorage.setItem(activityKey, JSON.stringify(existingActivities));

    // 3. Dispatch event
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('kanarau_progress_updated'));
    }
  } catch (err) {
    console.error('Failed to record bunpo completion', err);
  }
}

export function recordReviewCompletion(
  userKey: string,
  cardsReviewed: number,
  durationMs: number = 60000
) {
  try {
    const todayStr = formatLocalYMD();
    const durationMinutes = Math.max(1, Math.round(durationMs / 60000));
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
      timestamp: Date.now(),
    };

    existingActivities[todayStr] = {
      ...prevToday,
      studied: true,
      minutes: prevToday.minutes + durationMinutes,
      cardsReviewed: (prevToday.cardsReviewed || 0) + cardsReviewed,
      reviewCompleted: true,
      timestamp: Date.now(),
    };
    localStorage.setItem(activityKey, JSON.stringify(existingActivities));

    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('kanarau_progress_updated'));
    }
  } catch (err) {
    console.error('Failed to record review completion', err);
  }
}

export function recordDokkaiCompletion(
  userKey: string,
  passageId: string,
  seconds: number,
  correctCount: number,
  totalCount: number
) {
  try {
    const todayStr = formatLocalYMD();
    const durationMinutes = Math.max(1, Math.round(seconds / 60));
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
      timestamp: Date.now(),
    };

    existingActivities[todayStr] = {
      ...prevToday,
      studied: true,
      minutes: prevToday.minutes + durationMinutes,
      cardsStudied: prevToday.cardsStudied + totalCount,
      cardsCorrect: prevToday.cardsCorrect + correctCount,
      dokkaiCompleted: true,
      timestamp: Date.now(),
    };
    localStorage.setItem(activityKey, JSON.stringify(existingActivities));

    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('kanarau_progress_updated'));
    }
  } catch (err) {
    console.error('Failed to record dokkai completion', err);
  }
}

export function recordChoukaiCompletion(
  userKey: string,
  questionId: string,
  isCorrect: boolean
) {
  try {
    const todayStr = formatLocalYMD();
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
      timestamp: Date.now(),
    };

    existingActivities[todayStr] = {
      ...prevToday,
      studied: true,
      minutes: prevToday.minutes + 3,
      cardsStudied: prevToday.cardsStudied + 1,
      cardsCorrect: prevToday.cardsCorrect + (isCorrect ? 1 : 0),
      choukaiCompleted: true,
      timestamp: Date.now(),
    };
    localStorage.setItem(activityKey, JSON.stringify(existingActivities));

    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('kanarau_progress_updated'));
    }
  } catch (err) {
    console.error('Failed to record choukai completion', err);
  }
}

export function getLocalDailyActivity(userKey: string): Record<string, LocalDailyActivityItem> {
  try {
    const activityKey = `kanarau_daily_activity_${userKey}`;
    let activities: Record<string, LocalDailyActivityItem> = JSON.parse(
      localStorage.getItem(activityKey) || '{}'
    );

    // Auto-backfill & synchronize with any existing local progress (Goi, Bunpo, Dokkai, Choukai)
    const todayStr = formatLocalYMD();
    const localDecks = readBestMatchingStorage<Record<string, LocalDeckProgressItem>>(
      'kanarau_local_progress',
      userKey
    ) || {};
    const localBunpo = readBestMatchingStorage<Record<string, any>>(
      'kanarau_bunpo_results',
      userKey
    ) || {};
    const localDokkai = readBestMatchingStorage<Record<string, any>>(
      'kanarau_dokkai_results',
      userKey
    ) || {};
    const localChoukai = readBestMatchingStorage<Record<string, any>>(
      'kanarau_choukai_results',
      userKey
    ) || {};

    const hasGoi = Object.values(localDecks).some((d) => (d.percent && d.percent > 0) || (d.learned && d.learned > 0));
    const hasBunpo = Object.keys(localBunpo).length > 0;
    const hasDokkai = Object.keys(localDokkai).length > 0;
    const hasChoukai = Object.keys(localChoukai).length > 0;

    if (hasGoi || hasBunpo || hasDokkai || hasChoukai) {
      const existingToday = activities[todayStr];
      const goiCards = Object.values(localDecks).reduce((sum, d) => sum + (d.learned || 0), 0) || (hasGoi ? 30 : 0);
      const bunpoQuestions = Object.keys(localBunpo).length * 6;
      const totalCards = goiCards + bunpoQuestions;

      let totalMinutes = 0;
      if (hasGoi) totalMinutes += 15;
      if (hasBunpo) totalMinutes += Object.keys(localBunpo).length * 5;
      if (hasDokkai) totalMinutes += Object.keys(localDokkai).length * 10;
      if (hasChoukai) totalMinutes += Object.keys(localChoukai).length * 5;
      totalMinutes = Math.max(15, totalMinutes);

      if (!existingToday || existingToday.minutes < totalMinutes || existingToday.cardsStudied < totalCards) {
        activities[todayStr] = {
          date: todayStr,
          studied: true,
          minutes: Math.max(existingToday?.minutes || 0, totalMinutes),
          cardsStudied: Math.max(existingToday?.cardsStudied || 0, totalCards),
          cardsCorrect: Math.max(existingToday?.cardsCorrect || 0, totalCards),
          accuracy: 100,
          goiCompleted: hasGoi,
          bunpoCompleted: hasBunpo,
          dokkaiCompleted: hasDokkai,
          choukaiCompleted: hasChoukai,
          reviewCompleted: Boolean(existingToday?.reviewCompleted),
          timestamp: Date.now(),
        };
        try {
          localStorage.setItem(activityKey, JSON.stringify(activities));
        } catch {}
      }
    }

    return activities;
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

    // If today is studied, start streak at 1 and inspect backward
    if (activities[todayStr]?.studied) {
      streak = 1;
      checkDate.setDate(checkDate.getDate() - 1);
      while (true) {
        const dateStr = formatLocalYMD(checkDate);
        if (activities[dateStr]?.studied) {
          streak++;
          checkDate.setDate(checkDate.getDate() - 1);
        } else {
          break;
        }
      }
    } else {
      // If today is not yet studied, check if yesterday was studied to maintain unbroken previous streak
      checkDate.setDate(checkDate.getDate() - 1);
      while (true) {
        const dateStr = formatLocalYMD(checkDate);
        if (activities[dateStr]?.studied) {
          streak++;
          checkDate.setDate(checkDate.getDate() - 1);
        } else {
          break;
        }
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
    const localSaved = readBestMatchingStorage<Record<string, LocalDeckProgressItem>>(
      'kanarau_local_progress',
      userKey
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
    const localDecks = readBestMatchingStorage<Record<string, LocalDeckProgressItem>>(
      'kanarau_local_progress',
      userKey
    ) || {};
    const localActivities = getLocalDailyActivity(userKey);
    const todayStr = formatLocalYMD();

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

    const hasStudiedToday = Boolean(localActivities[todayStr]?.studied);
    const totalLearned = Math.max(stats?.total_cards_learned || 0, localTotalLearned, localActivities[todayStr]?.cardsStudied || 0);
    const totalMinutes = Math.max(stats?.total_study_time_minutes || 0, localTotalMinutes, hasStudiedToday ? 15 : 0);
    const totalDays = Math.max(stats?.total_study_days || 0, localStudyDays, hasStudiedToday ? 1 : 0);
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

    let hasToday = false;
    const updated = days.map((d) => {
      if (d.date === todayStr) hasToday = true;
      const act = localActivities[d.date];
      if (act && act.studied) {
        return {
          ...d,
          studied: true,
          study_time_minutes: Math.max(d.study_time_minutes || 0, act.minutes || 15),
          cards_studied: Math.max(d.cards_studied || 0, act.cardsStudied || 30),
          accuracy_percent: Math.max(d.accuracy_percent || 0, act.accuracy || 100),
        };
      }
      return d;
    });

    const todayAct = localActivities[todayStr];
    if (todayAct && todayAct.studied) {
      if (!hasToday) {
        updated.push({
          date: todayStr,
          studied: true,
          study_time_minutes: todayAct.minutes || 15,
          cards_studied: todayAct.cardsStudied || 30,
          cards_reviewed: todayAct.cardsReviewed || 0,
          accuracy_percent: todayAct.accuracy || 100,
        });
      }
    }

    return updated;
  } catch {
    return days;
  }
}
