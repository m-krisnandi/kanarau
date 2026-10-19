import type { AnswerRating } from '@/types';

/**
 * Rate an answer based on response time (in ms)
 * - Easy: < 3 seconds
 * - Good: 3-8 seconds
 * - Hard: > 8 seconds
 */
export function rateByTime(responseTimeMs: number, isCorrect: boolean): AnswerRating {
  if (!isCorrect) return 'hard';
  if (responseTimeMs < 3000) return 'easy';
  if (responseTimeMs < 8000) return 'good';
  return 'hard';
}

/**
 * Format milliseconds to human readable string
 */
export function formatTime(ms: number): string {
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  if (minutes === 0) return `${remainingSeconds}d`;
  return `${minutes}m ${remainingSeconds}d`;
}

/**
 * Format a date to Indonesian locale
 */
export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Format date to short form
 */
export function formatDateShort(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'short',
  });
}

/**
 * Get days until a target date
 */
export function daysUntil(targetDate: string): number {
  const target = new Date(targetDate);
  const now = new Date();
  const diff = target.getTime() - now.getTime();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

/**
 * Get today's date string in YYYY-MM-DD
 */
export function todayStr(): string {
  return new Date().toISOString().split('T')[0]!;
}

/**
 * Check if a date is today
 */
export function isToday(date: string): boolean {
  return date === todayStr();
}

/**
 * Check if a date is a weekend
 */
export function isWeekend(date: Date): boolean {
  const day = date.getDay();
  return day === 0 || day === 6;
}

/**
 * Get calendar days for a given month
 */
export function getCalendarDays(year: number, month: number): Date[] {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const days: Date[] = [];

  // Add padding days from previous month for alignment
  const startDow = firstDay.getDay(); // 0=Sun
  for (let i = startDow - 1; i >= 0; i--) {
    const d = new Date(year, month, -i);
    days.push(d);
  }

  // Current month days
  for (let d = 1; d <= lastDay.getDate(); d++) {
    days.push(new Date(year, month, d));
  }

  // Pad to complete the last week
  const remaining = 7 - (days.length % 7);
  if (remaining < 7) {
    for (let d = 1; d <= remaining; d++) {
      days.push(new Date(year, month + 1, d));
    }
  }

  return days;
}

/**
 * Shuffle array (Fisher-Yates)
 */
export function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j]!, arr[i]!];
  }
  return arr;
}

/**
 * Clamp number between min and max
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Generate a simple XP value based on accuracy and cards
 */
export function calculateXP(correctCount: number, totalCards: number): number {
  const accuracy = totalCards > 0 ? correctCount / totalCards : 0;
  const baseXP = correctCount * 10;
  const bonus = accuracy >= 0.9 ? 20 : accuracy >= 0.7 ? 10 : 0;
  return baseXP + bonus;
}

/**
 * cn - merge class names (simple utility, no clsx dependency)
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}
