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
  hasRealStudySession?: boolean;
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

export interface ActiveStudySession {
  deckId: string | number;
  studyMode?: string | null;
  currentIndex: number;
  totalCards: number;
  cards: any[];
  initialCards: any[];
  retryKotobaIds: (number | string)[];
  answers: any[];
  percent: number;
  timestamp: number;
}

export function getActiveSessionKey(userKey: string, deckId: string | number, studyMode?: string | null): string {
  const modeKey = studyMode ? `_${studyMode}` : '';
  return `kanarau_active_session_${userKey}_${deckId}${modeKey}`;
}

export function saveActiveStudySession(
  userKey: string,
  session: ActiveStudySession
) {
  try {
    const key = getActiveSessionKey(userKey, session.deckId, session.studyMode);
    localStorage.setItem(key, JSON.stringify(session));

    // Also update in-progress percentage in kanarau_local_progress if percent > 0 and deck not already 100% complete
    const deckKey = `kanarau_local_progress_${userKey}`;
    const existingDecks: Record<string, LocalDeckProgressItem> = JSON.parse(
      localStorage.getItem(deckKey) || '{}'
    );
    const prev = existingDecks[String(session.deckId)];
    if (!prev || (prev.percent || 0) < 100) {
      existingDecks[String(session.deckId)] = {
        deck_id: Number(session.deckId) || 1,
        percent: session.percent,
        learned: Math.min(session.totalCards, session.currentIndex),
        total: session.totalCards,
        timestamp: Date.now(),
        cardsCorrect: session.answers.filter((a) => a.is_correct).length,
      };
      localStorage.setItem(deckKey, JSON.stringify(existingDecks));
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('kanarau_progress_updated'));
      }
    }
  } catch (err) {
    console.error('Failed to save active study session', err);
  }
}

export function getActiveStudySession(
  userKey: string,
  deckId: string | number,
  studyMode?: string | null
): ActiveStudySession | null {
  try {
    const key = getActiveSessionKey(userKey, deckId, studyMode);
    const data = localStorage.getItem(key);
    if (!data) return null;
    const parsed: ActiveStudySession = JSON.parse(data);
    if (
      parsed &&
      Array.isArray(parsed.cards) &&
      parsed.cards.length > 0 &&
      typeof parsed.currentIndex === 'number' &&
      parsed.currentIndex >= 0 &&
      parsed.currentIndex < parsed.cards.length
    ) {
      return parsed;
    }
  } catch {}
  return null;
}

export function clearActiveStudySession(
  userKey: string,
  deckId: string | number,
  studyMode?: string | null
) {
  try {
    const key = getActiveSessionKey(userKey, deckId, studyMode);
    localStorage.removeItem(key);
  } catch {}
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
    existingDecks[String(deckId)] = {
      deck_id: deckId,
      percent: 100,
      learned: totalCards,
      total: totalCards,
      timestamp: Date.now(),
      completedDate: todayStr,
      cardsCorrect: totalCards,
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
      hasRealStudySession: true,
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
      hasRealStudySession: true,
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
      hasRealStudySession: true,
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
      hasRealStudySession: true,
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
      hasRealStudySession: true,
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
      hasRealStudySession: true,
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
    const todayStr = formatLocalYMD();

    // Verify today's record: ONLY keep today if there was an actual study session or module completed today!
    // Simply opening the app must NEVER count as studying today or invent 15 minutes!
    const todayRecord = activities[todayStr];
    if (todayRecord) {
      const localBunpo = readBestMatchingStorage<Record<string, any>>('kanarau_bunpo_results', userKey) || {};
      const localDokkai = readBestMatchingStorage<Record<string, any>>('kanarau_dokkai_results', userKey) || {};
      const localChoukai = readBestMatchingStorage<Record<string, any>>('kanarau_choukai_results', userKey) || {};

      const hasBunpoToday = Object.values(localBunpo).some((record) => recordDate(record) === todayStr);
      const hasDokkaiToday = Object.values(localDokkai).some((record) => recordDate(record) === todayStr);
      const hasChoukaiToday = Object.values(localChoukai).some((record) => recordDate(record) === todayStr);
      const hasReviewToday = Boolean(todayRecord.reviewCompleted && (todayRecord.cardsReviewed || 0) > 0);
      const hasRealStudySession = Boolean(todayRecord.hasRealStudySession);

      // If todayRecord does not have any confirmed study action, purge it so opening the app doesn't fake 15 mins!
      if (!hasRealStudySession && !hasBunpoToday && !hasDokkaiToday && !hasChoukaiToday && !hasReviewToday) {
        delete activities[todayStr];
        try {
          localStorage.setItem(activityKey, JSON.stringify(activities));
        } catch {}
      }
    }

    // Backfill past deck activities ONLY to their respective PAST completed dates (never today)
    const localDecks = readBestMatchingStorage<Record<string, LocalDeckProgressItem>>(
      'kanarau_local_progress',
      userKey
    ) || {};

    Object.values(localDecks).forEach((d) => {
      if ((d.percent && d.percent > 0) || (d.learned && d.learned > 0)) {
        const dDate = d.completedDate || (d.timestamp ? formatLocalYMD(new Date(d.timestamp)) : null);
        // Only backfill for PAST dates that are missing, never fabricate today's activity on app open
        if (!dDate || dDate === todayStr) return;
        if (!activities[dDate]) {
          activities[dDate] = {
            date: dDate,
            studied: true,
            minutes: Math.max(1, Math.ceil(((d.learned || 0) * 20) / 60)),
            cardsStudied: d.learned || 0,
            cardsCorrect: d.cardsCorrect ?? Math.round((d.learned || 0) * ((d.percent || 0) / 100)),
            accuracy: d.percent || 100,
            goiCompleted: true,
            hasRealStudySession: true,
            timestamp: d.timestamp || Date.now(),
          };
        }
      }
    });

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

    return Math.max(apiStreak || 0, streak);
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

export function getLocalTotalCardsLearned(userKey: string): number {
  try {
    const localDecks = readBestMatchingStorage<Record<string, LocalDeckProgressItem>>(
      'kanarau_local_progress',
      userKey
    ) || {};
    return Object.values(localDecks).reduce(
      (acc, item) => acc + (item.learned || 0),
      0
    );
  } catch {
    return 0;
  }
}

export function getEffectiveUserXp(
  user: { id?: number | string | null; email?: string | null; total_xp?: number } | null | undefined,
  stats?: OverallStats | null
): number {
  const userKey = getUserKey(user);
  const localLearned = getLocalTotalCardsLearned(userKey);
  const totalCards = Math.max(stats?.total_cards_learned || 0, localLearned);
  const xpFromCards = totalCards * 10;
  return Math.max(user?.total_xp ?? 0, xpFromCards);
}

export function mergeOverallStats(stats: OverallStats | null, userKey: string): OverallStats {
  try {
    const localActivities = getLocalDailyActivity(userKey);
    const todayStr = formatLocalYMD();

    const localTotalLearned = getLocalTotalCardsLearned(userKey);
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

    let hasToday = false;
    const updated = days.map((d) => {
      if (d.date === todayStr) hasToday = true;
      const act = localActivities[d.date];
      if (act && act.studied) {
        return {
          ...d,
          studied: true,
          study_time_minutes: Math.max(d.study_time_minutes || 0, act.minutes || 1),
          cards_studied: Math.max(d.cards_studied || 0, act.cardsStudied || 0),
          cards_reviewed: Math.max(d.cards_reviewed || 0, act.cardsReviewed || 0),
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
          study_time_minutes: todayAct.minutes || 1,
          cards_studied: todayAct.cardsStudied || 0,
          cards_reviewed: todayAct.cardsReviewed || 0,
          accuracy_percent: todayAct.accuracy || 100,
        });
      }
    }

    Object.keys(localActivities).forEach((dateStr) => {
      const act = localActivities[dateStr];
      if (act && act.studied && !updated.some((d) => d.date === dateStr)) {
        updated.push({
          date: dateStr,
          studied: true,
          study_time_minutes: act.minutes || 1,
          cards_studied: act.cardsStudied || 0,
          cards_reviewed: act.cardsReviewed || 0,
          accuracy_percent: act.accuracy || 100,
        });
      }
    });

    return updated;
  } catch {
    return days;
  }
}
