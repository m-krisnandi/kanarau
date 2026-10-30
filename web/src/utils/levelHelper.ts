import type { Language } from '@/locales/translations';

export interface UserLevelInfo {
  level: number;
  title: string;
  totalXp: number;
  currentLevelXp: number;
  nextLevelXp: number;
  xpInCurrentLevel: number;
  xpNeededForNext: number;
  progressPercent: number;
}

const LEVEL_TITLES: Record<number, Record<Language, string>> = {
  1: { id: 'Pemula', en: 'Beginner', my: 'အစပြုသူ' },
  2: { id: 'Pejuang Kana', en: 'Kana Fighter', my: 'ခါနတိုက်ခိုက်ရေးသမား' },
  3: { id: 'Penjelajah Kanji', en: 'Kanji Explorer', my: 'ခန်ဂျီစူးစမ်းသူ' },
  4: { id: 'Ahli Kosakata', en: 'Vocab Scholar', my: 'စကားလုံးပညာရှင်' },
  5: { id: 'Pendekar JLPT', en: 'JLPT Warrior', my: 'JLPT သူရဲကောင်း' },
  6: { id: 'Pakar Tatabahasa', en: 'Grammar Sage', my: 'သဒ္ဒါကျွမ်းကျင်သူ' },
  7: { id: 'Penguasa Dokkai', en: 'Reading Ace', my: 'စာဖတ်အထူးကျွမ်းကျင်သူ' },
  8: { id: 'Jawara Choukai', en: 'Listening Champ', my: 'နားထောင်ခြင်းချန်ပီယံ' },
  9: { id: 'Master JLPT', en: 'JLPT Master', my: 'JLPT ဆရာသခင်' },
  10: { id: 'Sensei Legendaris', en: 'Legendary Sensei', my: 'ဒဏ္ဍာရီဆန်သောဆရာ' },
};

/**
 * Calculates user gamification level, level title, and progress toward the next level based on total XP.
 */
export function calculateUserLevel(totalXp: number = 0, lang: Language = 'en'): UserLevelInfo {
  const xp = Math.max(0, totalXp);

  const thresholds = [
    0,     // Lv 1
    100,   // Lv 2
    250,   // Lv 3
    450,   // Lv 4
    700,   // Lv 5
    1000,  // Lv 6
    1350,  // Lv 7
    1750,  // Lv 8
    2200,  // Lv 9
    2700,  // Lv 10
  ];

  let level = 1;
  while (level < thresholds.length && xp >= thresholds[level]!) {
    level++;
  }

  // Beyond Level 10, each level requires +600 XP
  if (level >= 10 && xp >= thresholds[9]!) {
    const extraXp = xp - thresholds[9]!;
    const extraLevels = Math.floor(extraXp / 600);
    level = 10 + extraLevels;
  }

  let currentLevelXp = 0;
  let nextLevelXp = 100;

  if (level < 10) {
    currentLevelXp = thresholds[level - 1] ?? 0;
    nextLevelXp = thresholds[level] ?? 100;
  } else {
    currentLevelXp = thresholds[9]! + (level - 10) * 600;
    nextLevelXp = currentLevelXp + 600;
  }

  const xpInCurrentLevel = Math.max(0, xp - currentLevelXp);
  const xpNeededForNext = Math.max(1, nextLevelXp - currentLevelXp);
  const progressPercent = Math.min(100, Math.round((xpInCurrentLevel / xpNeededForNext) * 100));

  const cappedKey = Math.min(level, 10);
  const title = LEVEL_TITLES[cappedKey]?.[lang] || LEVEL_TITLES[10]?.[lang] || 'Sensei';

  return {
    level,
    title,
    totalXp: xp,
    currentLevelXp,
    nextLevelXp,
    xpInCurrentLevel,
    xpNeededForNext,
    progressPercent,
  };
}
