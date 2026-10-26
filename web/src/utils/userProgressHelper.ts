import type { DeckProgress, OverallStats, DayStats } from '@/types';
import { formatLocalYMD } from '@/utils';

export interface LocalDeckProgressItem {
  deck_id: number;
  percent: number;
  learned: number;
  total: number;
  timestamp: number;
  completedDate?: string;
  cardsCorrect?: number;
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
  bunpoCompletedIds?: string[];
  dokkaiCompletedIds?: string[];
  choukaiCompletedIds?: string[];
  timestamp: number;
}

export function getUserKey(user: { id?: number | string | null; email?: string | null } | null | undefined): string {
  if (user?.id) return String(user.id);
  if (user?.email) return user.email.trim().toLowerCase();
  return 'guest';
}

/** Read only the current user's namespaced record; never mix data from another account. */
function readBestMatchingStorage<T>(prefix: string, userKey: string): T | null {
  try {
    const direct = localStorage.getItem(`${prefix}_${userKey}`);
    if (direct) return JSON.parse(direct);
  } catch {}
  return null;
}

function isToday(value: unknown, todayStr: string): boolean {
  if (typeof value === 'number') return formatLocalYMD(new Date(value)) === todayStr;
  if (typeof value !== 'string' || !value) return false;
  return value.slice(0, 10) === todayStr;
}

function recordDate(record: unknown): string | null {
  if (!record || typeof record !== 'object') return null;
  const value = record as Record<string, unknown>;
  const raw = value.completedAt || value.timestamp || value.completedDate;
  if (typeof raw === 'number') return formatLocalYMD(new Date(raw));
  if (typeof raw === 'string') return raw.slice(0, 10);
  return null;
}

export function recordLocalStudySession(
  userKey: string,
  deckId: number,
  cardsStudied: number,
  cardsCorrect: number,
  durationMs: number,
  deckTotalCards: number = cardsStudied
) {
  try {
    const todayStr = formatLocalYMD();
    const durationMinutes = Math.max(1, Math.round(durationMs / 60000));

    // 1. Update deck progress
    const deckKey = `kanarau_local_progress_${userKey}`;
    const existingDecks: Record<string, LocalDeckProgressItem> = JSON.parse(
      localStorage.getItem(deckKey) || '{}'
    );
    const previousDeck = existingDecks[String(deckId)];
    const totalCards = Math.max(previousDeck?.total || 0, deckTotalCards, cardsStudied);
    const learnedCards = Math.max(previousDeck?.learned || 0, cardsStudied);
    existingDecks[String(deckId)] = {
      deck_id: deckId,
      percent: Math.max(previousDeck?.percent || 0, Math.min(100, Math.round((learnedCards / totalCards) * 100))),
      learned: learnedCards,
      total: totalCards,
      timestamp: Date.now(),
      completedDate: todayStr,
      cardsCorrect: Math.max(previousDeck?.cardsCorrect || 0, cardsCorrect),
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
    existingBunpo[unitId] = { completedAt: new Date().toISOString() };
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

    const completedIds = prevToday.bunpoCompletedIds || [];
    const isDuplicateToday = completedIds.includes(unitId);
    existingActivities[todayStr] = {
      ...prevToday,
      studied: true,
      minutes: prevToday.minutes + (isDuplicateToday ? 0 : durationMinutes),
      cardsStudied: prevToday.cardsStudied + (isDuplicateToday ? 0 : questionCount),
      cardsCorrect: prevToday.cardsCorrect + (isDuplicateToday ? 0 : questionCount),
      bunpoCompleted: true,
      bunpoCompletedIds: isDuplicateToday ? completedIds : [...completedIds, unitId],
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

    const completedIds = prevToday.dokkaiCompletedIds || [];
    const isDuplicateToday = completedIds.includes(passageId);
    existingActivities[todayStr] = {
      ...prevToday,
      studied: true,
      minutes: prevToday.minutes + (isDuplicateToday ? 0 : durationMinutes),
      cardsStudied: prevToday.cardsStudied + (isDuplicateToday ? 0 : totalCount),
      cardsCorrect: prevToday.cardsCorrect + (isDuplicateToday ? 0 : correctCount),
      dokkaiCompleted: true,
      dokkaiCompletedIds: isDuplicateToday ? completedIds : [...completedIds, passageId],
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

    const completedIds = prevToday.choukaiCompletedIds || [];
    const isDuplicateToday = completedIds.includes(questionId);
    existingActivities[todayStr] = {
      ...prevToday,
      studied: true,
      minutes: prevToday.minutes + (isDuplicateToday ? 0 : 3),
      cardsStudied: prevToday.cardsStudied + (isDuplicateToday ? 0 : 1),
      cardsCorrect: prevToday.cardsCorrect + (isDuplicateToday ? 0 : (isCorrect ? 1 : 0)),
      choukaiCompleted: true,
      choukaiCompletedIds: isDuplicateToday ? completedIds : [...completedIds, questionId],
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

    // Backfill past deck activities to their respective completed dates
    Object.values(localDecks).forEach((d) => {
      if ((d.percent && d.percent > 0) || (d.learned && d.learned > 0)) {
        const dDate = d.completedDate || (d.timestamp ? formatLocalYMD(new Date(d.timestamp)) : null);
        if (!dDate) return;
        if (!activities[dDate]) {
          activities[dDate] = {
            date: dDate,
            studied: true,
            minutes: Math.max(1, Math.ceil(((d.learned || 0) * 20) / 60)),
            cardsStudied: d.learned || 0,
            cardsCorrect: d.cardsCorrect ?? Math.round((d.learned || 0) * ((d.percent || 0) / 100)),
            accuracy: d.percent || 0,
            goiCompleted: true,
            timestamp: d.timestamp || Date.now(),
          };
        }
      }
    });

    const hasGoiToday = Object.values(localDecks).some((d) => {
      if (!d.percent || d.percent <= 0) return false;
      if (d.completedDate) return d.completedDate === todayStr;
      if (d.timestamp) return formatLocalYMD(new Date(d.timestamp)) === todayStr;
      return false;
    });
    const hasBunpoToday = Object.values(localBunpo).some((record) => recordDate(record) === todayStr);
    const hasDokkaiToday = Object.values(localDokkai).some((record) => recordDate(record) === todayStr);
    const hasChoukaiToday = Object.values(localChoukai).some((record) => recordDate(record) === todayStr);

    const existingToday = activities[todayStr];
    const hasReviewToday = Boolean(existingToday?.reviewCompleted && isToday(existingToday.timestamp, todayStr));
    const hasAnyActivityToday = hasGoiToday || hasBunpoToday || hasDokkaiToday || hasChoukaiToday || hasReviewToday;

    if (!hasAnyActivityToday && existingToday) {
      delete activities[todayStr];
    }

    if (hasAnyActivityToday) {
      const goiCards = hasGoiToday
        ? (Object.values(localDecks)
            .filter((deck) => (deck.completedDate || (deck.timestamp ? formatLocalYMD(new Date(deck.timestamp)) : null)) === todayStr)
            .reduce((sum, d) => sum + (d.learned || 0), 0) || 30)
        : 0;
      const bunpoQuestions = hasBunpoToday ? Object.values(localBunpo).filter((record) => recordDate(record) === todayStr).length * 6 : 0;
      const totalCards = goiCards + bunpoQuestions;

      let totalMinutes = 0;
      if (hasGoiToday) totalMinutes += 15;
      if (hasBunpoToday) totalMinutes += Object.values(localBunpo).filter((record) => recordDate(record) === todayStr).length * 5;
      if (hasDokkaiToday) totalMinutes += Object.values(localDokkai).filter((record) => recordDate(record) === todayStr).length * 10;
      if (hasChoukaiToday) totalMinutes += Object.values(localChoukai).filter((record) => recordDate(record) === todayStr).length * 5;
      totalMinutes = Math.max(1, totalMinutes);

      if (!existingToday) {
        activities[todayStr] = {
          date: todayStr,
          studied: true,
          minutes: totalMinutes,
          cardsStudied: totalCards,
          cardsCorrect: totalCards,
          accuracy: 100,
          goiCompleted: hasGoiToday,
          bunpoCompleted: hasBunpoToday,
          dokkaiCompleted: hasDokkaiToday,
          choukaiCompleted: hasChoukaiToday,
          reviewCompleted: hasReviewToday,
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
    }

    const hasStudiedToday = Boolean(activities[todayStr]?.studied);
    return hasStudiedToday ? Math.max(streak, apiStreak || 0) : 0;
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
        const isComplete = local.percent >= 100;
        const totalWords = d.total_kotoba || 30;
        const effectiveLearned = isComplete
          ? Math.max(d.learned || 0, local.learned || 0, totalWords - (d.mastered || 0) - (d.reviewing || 0))
          : Math.max(d.learned || 0, local.learned || 0);

        return {
          ...d,
          progress_percent: Math.max(d.progress_percent || 0, local.percent),
          learned: effectiveLearned,
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
    const hasAuthoritativeApiStats = stats !== null;
    const totalLearned = hasAuthoritativeApiStats ? stats!.total_cards_learned : Math.max(localTotalLearned, localActivities[todayStr]?.cardsStudied || 0);
    const totalMinutes = hasAuthoritativeApiStats ? stats!.total_study_time_minutes : Math.max(localTotalMinutes, hasStudiedToday ? 1 : 0);
    const totalDays = hasAuthoritativeApiStats ? stats!.total_study_days : Math.max(localStudyDays, hasStudiedToday ? 1 : 0);
    const longestStreak = hasAuthoritativeApiStats ? stats!.longest_streak : streak;
    const accuracy = hasAuthoritativeApiStats ? stats!.average_accuracy : (totalLearned > 0 ? 100 : 0);

    return {
      current_streak: streak,
      longest_streak: longestStreak,
      total_study_days: totalDays,
      total_study_time_minutes: totalMinutes,
      total_cards_learned: totalLearned,
      average_accuracy: totalLearned > 0 ? accuracy : 0,
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
      if (act && act.studied && !d.studied) {
        return {
          ...d,
          studied: true,
          study_time_minutes: act.minutes || 1,
          cards_studied: act.cardsStudied || 0,
          cards_reviewed: act.cardsReviewed || 0,
          accuracy_percent: act.accuracy || 0,
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
           study_time_minutes: todayAct.minutes || 1,
           cards_studied: todayAct.cardsStudied || 0,
          cards_reviewed: todayAct.cardsReviewed || 0,
           accuracy_percent: todayAct.accuracy || 0,
        });
      }
    }

    return updated;
  } catch {
    return days;
  }
}
