/**
 * Japanese Conjugation & Linguistics Utility for Kanarau
 * Generates accurate JLPT N2/N1 conjugation tables, part of speech tags,
 * furigana ruby markup, and high-yield relevant vocabulary / collocations.
 */

export interface ConjugationForm {
  label: string;
  form: string;
  romaji?: string;
}

export interface ConjugationResult {
  partOfSpeechLabel: string;
  isConjugable: boolean;
  forms: ConjugationForm[];
}

export interface RelevantKotobaItem {
  word: string;
  reading: string;
  meaning: string;
  relationType: 'Sinonim' | 'Asosiasi' | 'Lawan Kata' | 'Collocation';
}

/**
 * High-yield curated pairings for N2 and N1 vocabulary
 */
const HIGH_YIELD_RELEVANT: Record<string, RelevantKotobaItem> = {
  '定着': {
    word: '身につく',
    reading: 'みにつく',
    meaning: 'melekat pada diri (kebiasaan / kecakapan)',
    relationType: 'Asosiasi',
  },
  '防止': {
    word: '未然に防ぐ',
    reading: 'みぜんにふせぐ',
    meaning: 'mencegah sebelum terjadi (collocation penting N2)',
    relationType: 'Collocation',
  },
  '間隔': {
    word: '間隔を空ける',
    reading: 'かんかくをあける',
    meaning: 'memberi jeda / jarak',
    relationType: 'Collocation',
  },
  '焦げる': {
    word: '煮込む',
    reading: 'にこむ',
    meaning: 'merebus lama hingga bumbu meresap',
    relationType: 'Asosiasi',
  },
  '重なる': {
    word: '積み重なる',
    reading: 'つみかさなる',
    meaning: 'bertumpuk-tumpuk / berakumulasi',
    relationType: 'Sinonim',
  },
  '幼い': {
    word: '未熟',
    reading: 'みじゅく',
    meaning: 'belum matang / masih mentah',
    relationType: 'Sinonim',
  },
  '訂正': {
    word: '修正',
    reading: 'しゅうせい',
    meaning: 'merevisi / memperbaiki sebagian',
    relationType: 'Sinonim',
  },
  '誤る': {
    word: '見誤る',
    reading: 'みあやまる',
    meaning: 'keliru menilai / salah menaksir situasi',
    relationType: 'Asosiasi',
  },
  '煙': {
    word: '煙幕',
    reading: 'えんまく',
    meaning: 'tabir asap / pengalihan isu',
    relationType: 'Asosiasi',
  },
  '一部': {
    word: '全体',
    reading: 'ぜんたい',
    meaning: 'keseluruhan (lawan kata dari 一部)',
    relationType: 'Lawan Kata',
  },
  '短時間': {
    word: '長時間',
    reading: 'ちょうじかん',
    meaning: 'waktu yang lama (lawan kata)',
    relationType: 'Lawan Kata',
  },
  '長時間': {
    word: '短時間',
    reading: 'たんじかん',
    meaning: 'waktu singkat (lawan kata)',
    relationType: 'Lawan Kata',
  },
  '出産': {
    word: '育児',
    reading: 'いくじ',
    meaning: 'pengasuhan anak',
    relationType: 'Asosiasi',
  },
  '瞬間': {
    word: '刹那',
    reading: 'せつな',
    meaning: 'detik yang sangat singkat (ragam bahasa tulis N1)',
    relationType: 'Sinonim',
  },
};

/**
 * Detects part of speech and generates conjugation tables
 */
export function getWordConjugations(
  kanji: string,
  hiragana: string,
  posHint?: string
): ConjugationResult {
  const word = kanji || hiragana;
  const kana = hiragana || kanji;
  const pos = (posHint || '').toLowerCase();

  // 1. Explicit or implicit Suru-verb (Kata benda + する)
  const isSuru =
    pos.includes('suru') ||
    pos.includes('benda + する') ||
    ['定着', '防止', '訂正', '出産', '延長', '維持', '集中', '完了', '特定'].includes(word);

  if (isSuru) {
    return {
      partOfSpeechLabel: 'Kata benda + する',
      isConjugable: true,
      forms: [
        { label: 'Bentuk kamus', form: `${word}する` },
        { label: 'Bentuk ます', form: `${word}します` },
        { label: 'Bentuk て', form: `${word}して` },
        { label: 'Bentuk ない', form: `${word}しない` },
      ],
    };
  }

  // 2. I-Adjective (Kata sifat -i)
  if (pos.includes('sifat -i') || pos.includes('i-adj') || (kana.endsWith('い') && !kana.endsWith('きらい') && (pos.includes('sifat') || ['幼い', '著しい', '紛らわしい', '惜しい'].includes(word)))) {
    const stem = word.slice(0, -1);
    return {
      partOfSpeechLabel: 'Kata sifat -i',
      isConjugable: true,
      forms: [
        { label: 'Bentuk kamus', form: word },
        { label: 'Bentuk です', form: `${word}です` },
        { label: 'Bentuk て', form: `${stem}くて` },
        { label: 'Bentuk ない', form: `${stem}くない` },
      ],
    };
  }

  // 3. Verb detection by ending
  const isVerb =
    pos.includes('kerja') ||
    pos.includes('verb') ||
    pos.includes('v1') ||
    pos.includes('v5') ||
    pos.includes('ကြိယာ') ||
    pos.includes('ichidan') ||
    pos.includes('godan') ||
    ['焦げる', '重なる', '誤る', '求める', '満たす', '歩き出す', '及ぼす', '憧れる'].includes(word);

  if (isVerb) {
    // Ichidan verbs (ending in -iru or -eru)
    const isIchidan =
      word === '焦げる' ||
      word === '求める' ||
      word === '憧れる' ||
      pos.includes('ichidan') ||
      pos.includes('v1') ||
      pos.includes('golongan 2') ||
      (kana.endsWith('る') && /[いきしちにひみりえけせてねへめれ]る$/.test(kana));

    if (isIchidan) {
      const stem = word.slice(0, -1);
      return {
        partOfSpeechLabel: 'Kata kerja Golongan 2 (Ichidan)',
        isConjugable: true,
        forms: [
          { label: 'Bentuk kamus', form: word },
          { label: 'Bentuk ます', form: `${stem}ます` },
          { label: 'Bentuk て', form: `${stem}て` },
          { label: 'Bentuk ない', form: `${stem}ない` },
        ],
      };
    }

    // Godan verbs
    let stemMasu = word;
    let teForm = word;
    let naiForm = word;
    let groupLabel = 'Kata kerja Golongan 1 (Godan)';

    if (word.endsWith('る')) {
      const base = word.slice(0, -1);
      stemMasu = `${base}り`;
      teForm = `${base}って`;
      naiForm = `${base}ら`;
    } else if (word.endsWith('す')) {
      const base = word.slice(0, -1);
      stemMasu = `${base}し`;
      teForm = `${base}して`;
      naiForm = `${base}さ`;
    } else if (word.endsWith('く')) {
      const base = word.slice(0, -1);
      stemMasu = `${base}き`;
      teForm = `${base}いて`;
      naiForm = `${base}か`;
    } else if (word.endsWith('ぐ')) {
      const base = word.slice(0, -1);
      stemMasu = `${base}ぎ`;
      teForm = `${base}いで`;
      naiForm = `${base}が`;
    } else if (word.endsWith('む') || word.endsWith('ぶ') || word.endsWith('ぬ')) {
      const base = word.slice(0, -1);
      stemMasu = `${base}み`;
      teForm = `${base}んで`;
      naiForm = `${base}ま`;
    } else if (word.endsWith('う')) {
      const base = word.slice(0, -1);
      stemMasu = `${base}い`;
      teForm = `${base}って`;
      naiForm = `${base}わ`;
    }

    return {
      partOfSpeechLabel: groupLabel,
      isConjugable: true,
      forms: [
        { label: 'Bentuk kamus', form: word },
        { label: 'Bentuk ます', form: `${stemMasu}ます` },
        { label: 'Bentuk て', form: teForm },
        { label: 'Bentuk ない', form: `${naiForm}ない` },
      ],
    };
  }

  // 4. Na-Adjective (Kata sifat -na)
  if (pos.includes('sifat -na') || pos.includes('na-adj')) {
    return {
      partOfSpeechLabel: 'Kata sifat -na',
      isConjugable: true,
      forms: [
        { label: 'Bentuk dasar', form: `${word}だ` },
        { label: 'Menyambung nomina', form: `${word}な` },
        { label: 'Bentuk です', form: `${word}です` },
        { label: 'Bentuk て', form: `${word}で` },
      ],
    };
  }

  // 5. Default Noun (Kata benda)
  return {
    partOfSpeechLabel: posHint || 'Kata benda (Nomina)',
    isConjugable: false,
    forms: [
      { label: 'Bentuk kamus', form: word },
      { label: 'Bentuk sopan', form: `${word}です` },
      { label: 'Partikel kepemilikan', form: `${word}の` },
    ],
  };
}

/**
 * Gets high-yield relevant words / collocations
 */
export function getRelevantKotoba(kanji: string, hiragana: string, notes?: string): RelevantKotobaItem | null {
  const directMatch = HIGH_YIELD_RELEVANT[kanji] || HIGH_YIELD_RELEVANT[hiragana];
  if (directMatch) return directMatch;

  // Extract from notes if notes contain pattern like "Sinonim: X" or "Lawan kata: Y"
  if (notes) {
    const match = notes.match(/(Sinonim|Lawan kata|Asosiasi|Pasangan)[:：]\s*([\u4E00-\u9FAF\u3040-\u309F\u30A0-\u30FF]+)(?:\s*[\(（]([^\)）]+)[\)）])?(?:\s*[-—]\s*(.+))?/i);
    if (match) {
      return {
        relationType: (match[1] as any) || 'Asosiasi',
        word: match[2] || '',
        reading: match[3] || match[2] || '',
        meaning: match[4] || 'kata terkait dalam konteks ujian JLPT',
      };
    }
  }

  return null;
}
