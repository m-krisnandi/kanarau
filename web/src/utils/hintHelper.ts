import type { Language } from '@/locales/translations';
import type { QuizCard } from '@/types';
import { ALL_KANJI_TRANSLATIONS } from '@/locales/kanjiTranslationsManifest';
import { KANJI_TRANSLATIONS, localizeKotoba } from '@/locales/vocabularyTranslations';

export interface CardHintDetails {
  primaryClue: {
    label: string;
    value: string;
  };
  exampleSentence?: string;
  exampleTranslation?: string;
  partOfSpeech?: string;
  kanjiClues?: {
    char: string;
    meaning?: string;
  }[];
  notes?: string;
}

const POS_LABELS: Record<string, Record<Language, string>> = {
  v1: {
    id: 'Kata Kerja Gol. 1 (Ichidan)',
    en: 'Ichidan Verb (Group 1)',
    my: 'ကြိယာ (Ichidan)',
  },
  v5: {
    id: 'Kata Kerja Gol. 2 (Godan)',
    en: 'Godan Verb (Group 2)',
    my: 'ကြိယာ (Godan)',
  },
  v5r: {
    id: 'Kata Kerja Gol. 2 (-ru)',
    en: 'Godan Verb (-ru)',
    my: 'ကြိယာ Godan (-ru)',
  },
  v5s: {
    id: 'Kata Kerja Gol. 2 (-su)',
    en: 'Godan Verb (-su)',
    my: 'ကြိယာ Godan (-su)',
  },
  v5u: {
    id: 'Kata Kerja Gol. 2 (-u)',
    en: 'Godan Verb (-u)',
    my: 'ကြိယာ Godan (-u)',
  },
  v5k: {
    id: 'Kata Kerja Gol. 2 (-ku)',
    en: 'Godan Verb (-ku)',
    my: 'ကြိယာ Godan (-ku)',
  },
  v5m: {
    id: 'Kata Kerja Gol. 2 (-mu)',
    en: 'Godan Verb (-mu)',
    my: 'ကြိယာ Godan (-mu)',
  },
  v5g: {
    id: 'Kata Kerja Gol. 2 (-gu)',
    en: 'Godan Verb (-gu)',
    my: 'ကြိယာ Godan (-gu)',
  },
  v5b: {
    id: 'Kata Kerja Gol. 2 (-bu)',
    en: 'Godan Verb (-bu)',
    my: 'ကြိယာ Godan (-bu)',
  },
  v5t: {
    id: 'Kata Kerja Gol. 2 (-tsu)',
    en: 'Godan Verb (-tsu)',
    my: 'ကြိယာ Godan (-tsu)',
  },
  vi: {
    id: 'Intransitif (Jidoushi)',
    en: 'Intransitive',
    my: 'အကမ္မကကြိယာ',
  },
  vt: {
    id: 'Transitif (Tadoushi)',
    en: 'Transitive',
    my: 'သကမ္မကကြိယာ',
  },
  vs: {
    id: 'Kata Kerja する (Suru)',
    en: 'Suru-verb',
    my: 'Suru ကြိယာ',
  },
  vk: {
    id: 'Kata Kerja 来る (Kuru)',
    en: 'Kuru-verb',
    my: 'Kuru ကြိယာ',
  },
  n: {
    id: 'Kata Benda (Nomina)',
    en: 'Noun',
    my: 'နာမ်',
  },
  'adj-i': {
    id: 'Kata Sifat -i',
    en: 'I-Adjective',
    my: 'နာမဝိသေသန -i',
  },
  'adj-na': {
    id: 'Kata Sifat -na',
    en: 'Na-Adjective',
    my: 'နာမဝိသေသန -na',
  },
  'adj-no': {
    id: 'Kata Benda Penjelas (+ の)',
    en: 'No-Adjective (Noun + no)',
    my: 'နာမဝိသေသန -no',
  },
  adv: {
    id: 'Kata Keterangan (Adverbia)',
    en: 'Adverb',
    my: 'ကြိယာဝိသေသန',
  },
  'adv-to': {
    id: 'Kata Keterangan (+ と)',
    en: 'Adverb (+ to)',
    my: 'ကြိယာဝိသေသန (+ to)',
  },
  pn: {
    id: 'Kata Ganti (Pronomina)',
    en: 'Pronoun',
    my: 'နာမ်စား',
  },
  conj: {
    id: 'Kata Hubung (Konjungsi)',
    en: 'Conjunction',
    my: 'စကားစပ်',
  },
  exp: {
    id: 'Ungkapan / Frasa',
    en: 'Expression / Idiom',
    my: 'အသုံးအနှုန်း',
  },
  suf: {
    id: 'Akhiran (Sufiks)',
    en: 'Suffix',
    my: 'နောက်ဆက်',
  },
  'n-suf': {
    id: 'Akhiran Kata Benda',
    en: 'Noun Suffix',
    my: 'နာမ်နောက်ဆက်',
  },
  pref: {
    id: 'Awalan (Prefiks)',
    en: 'Prefix',
    my: 'ရှေ့ဆက်',
  },
  num: {
    id: 'Bilangan (Numeralia)',
    en: 'Number / Numeric',
    my: 'ဂဏန်းသင်္ချာ',
  },
  prt: {
    id: 'Partikel',
    en: 'Particle',
    my: 'ဝိဘတ်',
  },
};

/**
 * Converts raw part-of-speech codes (e.g. "Kelas kata: v1, vi") into human-friendly descriptions.
 */
export function formatHumanPartOfSpeech(rawNotes?: string, lang: Language = 'id'): string {
  if (!rawNotes || !rawNotes.trim()) return '';

  const clean = rawNotes.trim();
  const match = clean.match(/(?:Kelas kata|Part of speech|ဝါစင်္ဂ):\s*([^;.]+)/i);
  if (!match) {
    return clean;
  }

  const matchedGroup = match[1];
  if (!matchedGroup) {
    return clean;
  }

  const rawTags = matchedGroup
    .split(/[,/]\s*/)
    .map((p) => p.trim().toLowerCase())
    .filter(Boolean);

  const formatted = rawTags
    .map((tag) => POS_LABELS[tag]?.[lang] || tag)
    .filter(Boolean);

  return formatted.length > 0 ? formatted.join(' • ') : clean;
}

/**
 * Extracts extra notes beyond the standard "Kelas kata: ..." declaration.
 */
export function extractExtraNotes(rawNotes?: string): string | undefined {
  if (!rawNotes) return undefined;
  const extra = rawNotes.replace(/(?:Kelas kata|Part of speech|ဝါစင်္ဂ):\s*[^;.]+[;.]?\s*/i, '').trim();
  return extra.length > 0 ? extra : undefined;
}

/**
 * Builds rich, contextual hint details for any QuizCard.
 */
export function getCardHintDetails(
  card: QuizCard,
  lang: Language,
  labels: {
    hintMeaning: string;
    hintReading: string;
  }
): CardHintDetails {
  const kotoba = localizeKotoba(card.kotoba, lang);
  const direction = card.direction;

  // 1. Primary Clue
  let primaryClue: { label: string; value: string };
  if (direction === 'kanji_to_hiragana') {
    primaryClue = {
      label: labels.hintMeaning,
      value: kotoba.meaning || '',
    };
  } else if (direction === 'kanji_to_meaning') {
    primaryClue = {
      label: labels.hintReading,
      value: kotoba.hiragana || '',
    };
  } else {
    // meaning_to_kanji
    primaryClue = {
      label: labels.hintReading,
      value: kotoba.hiragana || '',
    };
  }

  // 2. Example Sentence & Translation
  const exampleSentence = kotoba.example_sentence?.trim() || undefined;
  const exampleTranslation =
    kotoba.example_sentence_meaning?.trim() ||
    (kotoba as any).example_translation?.trim() ||
    undefined;

  // 3. Human Part of Speech
  const partOfSpeech = formatHumanPartOfSpeech(kotoba.notes || kotoba.part_of_speech, lang) || undefined;

  // 4. Kanji Clues
  const kanjiChars = kotoba.kanji
    ? Array.from(new Set(kotoba.kanji.match(/[\u4e00-\u9faf]/g) || []))
    : [];

  const kanjiClues = kanjiChars.map((char) => {
    // First try kanji_details from API
    const detail = (kotoba as any).kanji_details?.find((k: any) => k.character === char);
    if (detail && detail.meaning) {
      return { char, meaning: detail.meaning };
    }

    // Next try static manifest
    const trans = ALL_KANJI_TRANSLATIONS[char] || KANJI_TRANSLATIONS[char];
    if (trans && trans.meanings) {
      const meaning = trans.meanings[lang]?.[0] || trans.meanings.id?.[0];
      if (meaning) {
        return { char, meaning };
      }
    }

    return { char };
  });

  // 5. Extra linguistic notes (synonyms, collocations, associations)
  const notes = extractExtraNotes(kotoba.notes);

  return {
    primaryClue,
    exampleSentence,
    exampleTranslation,
    partOfSpeech,
    kanjiClues: kanjiClues.length > 0 ? kanjiClues : undefined,
    notes,
  };
}
