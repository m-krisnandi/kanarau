// ─── JLPT Module Level ──────────────────────────────────────
export type JLPTModuleLevel = 'N5' | 'N4' | 'N3' | 'N2' | 'N1';

// ─── JLPT Bunpo (Grammar) Types ─────────────────────────────
export type BunpoQuestionType = 'selection' | 'star';

export interface BunpoQuestion {
  id: string;
  unitId: string;
  level: JLPTModuleLevel;
  type: BunpoQuestionType;
  title: string;
  pattern: string; // Target grammar pattern, e.g. "〜ざるを得ない"
  prompt: string; // The sentence with blanks, e.g. "どんなに困難でも、諦めずに____。"
  // For Star questions
  parts?: string[]; // 4 scrambled fragments, e.g. ["進む", "道を", "模索し", "続け"]
  correctOrder?: number[]; // [1, 2, 3, 4] corresponding to 0-indexed parts
  starPosition?: number; // 0, 1, 2, or 3 (where the star ★ is located)
  // For Selection questions
  choices: string[]; // 4 options
  correctAnswer: string; // Exact matching choice or star fragment
  correctChoiceIndex: number;
  fullSentence: string; // The complete Japanese sentence for speech & study
  translation: string; // Indonesian translation
  setsuzoku: string; // Connection rule, e.g. "V-ない (tanpa ない) + ざるを得ない (する -> せざるを得ない)"
  nuanceExplanation: string; // Clear nuance explanation
  trapNotes?: string; // Why the distractors are wrong
}

export interface BunpoUnit {
  id: string;
  dayNumber?: number;
  title: string;
  level: JLPTModuleLevel;
  theme: string;
  description: string;
  patterns: string[];
  questionsCount: number;
}

// ─── JLPT Dokkai (Reading) Types ────────────────────────────
export type DokkaiCategory = 'tanbun' | 'chuubun' | 'jouhou' | 'hikaku' | 'choubun';

export interface DokkaiQuestionItem {
  id: string;
  question: string;
  choices: string[];
  correctChoiceIndex: number;
  explanation: string;
  paragraphRef?: number;
}

export interface DokkaiPassage {
  id: string;
  dayNumber?: number;
  level: JLPTModuleLevel;
  category: DokkaiCategory;
  categoryLabel: string;
  title: string;
  sourceType: string; // e.g. "Email Bisnis", "Esai Opini", "Brosur Pengumuman"
  estimatedMinutes: number;
  passageText: string;
  translation: string;
  vocabularyHelp: { word: string; reading: string; meaning: string }[];
  questions: DokkaiQuestionItem[];
}

// ─── JLPT Choukai (Listening) Types ─────────────────────────
export type ChoukaiType = 'kadai' | 'point' | 'sokuji';

export interface ChoukaiQuestion {
  id: string;
  dayNumber?: number;
  level: JLPTModuleLevel;
  type: ChoukaiType;
  typeLabel: string; // "課題理解 (Aksi Selanjutnya)", "ポイント理解 (Alasan Utama)", "即時応答 (Respon Cepat)"
  title: string;
  situation: string; // Situation prompt in Indonesian & Japanese
  questionPrompt: string; // The question asked, e.g. "男の人はこのあと、まず何をしますか。"
  audioScript: string; // Full dialog text fed to /api/v1/tts
  translation: string; // Full dialogue translation
  choices: string[]; // 4 choices (or 3 for sokuji)
  correctChoiceIndex: number;
  explanation: string;
  keyPoints: string[];
}
