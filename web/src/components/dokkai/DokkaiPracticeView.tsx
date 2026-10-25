import React, { useState, useEffect, useMemo, useCallback } from 'react';
import type { DokkaiPassage, DokkaiQuestionItem } from '@/types/jlptModules';
import type { JLPTModuleLevel } from '@/types/jlptModules';
import { DOKKAI_PASSAGES } from '@/data/dokkaiData';
import { localizeDokkai } from '@/locales/moduleTranslations';
import { TanyaAiModal } from '@/components/TanyaAiModal';
import { useTranslation } from '@/stores/languageStore';
import { useAuthStore } from '@/stores/authStore';
import { recordDokkaiCompletion, getUserKey } from '@/utils/userProgressHelper';
import { DOKKAI_VOCAB_TRANSLATIONS } from '@/locales/vocabularyTranslations';
import {
  playDokkaiPassage,
  stopAudio,
  pauseAudio,
  resumeAudio,
  isAudioPaused,
  seekAudio,
  setDokkaiPlaybackSpeed,
  getDokkaiTrack,
} from '@/utils/audioPlayer';
import { findQuickLookupEntry, type QuickLookupEntry } from '@/utils/quickLookupDictionary';
import { KanjiLookupPopover } from './KanjiLookupPopover';
import { KotobaDetailModal } from '@/components/KotobaDetailModal';
import { KanjiDetailView } from '@/components/KanjiDetailView';
import { jishoApi } from '@/services/api';
import type { Kotoba, Kanji } from '@/types';
import { KOTOBA_TRANSLATIONS } from '@/locales/vocabularyTranslations';
import {
  Headphones,
  Volume2,
  Play,
  Pause,
  RotateCw,
  Radio,
  BookOpen,
  Clock,
  Check,
  X,
  ChevronRight,
  ArrowLeft,
  Sparkles,
  HelpCircle,
  FileText,
  Lightbulb,
  Award,
  RotateCcw,
  Lock,
  AlertCircle,
} from 'lucide-react';

interface DokkaiPracticeViewProps {
  currentLevel: JLPTModuleLevel;
}

interface CompletedRecord {
  correctCount: number;
  totalCount: number;
  seconds: number;
  completedAt: string;
}

export const DokkaiPracticeView: React.FC<DokkaiPracticeViewProps> = ({ currentLevel }) => {
  const [selectedPassageId, setSelectedPassageId] = useState<string | null>(null);
  const [selectedChoices, setSelectedChoices] = useState<Record<string, number>>({});
  const [showVocabHelp, setShowVocabHelp] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [lockedAlert, setLockedAlert] = useState<string | null>(null);
  // Dokkai Audio Player state
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [audioTime, setAudioTime] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);
  const [audioSpeed, setAudioSpeed] = useState(1.0);
  const [isScrubbing, setIsScrubbing] = useState(false);

  // Quick Kanji/Word Lookup Popover state
  const [lookupEntry, setLookupEntry] = useState<QuickLookupEntry | null>(null);
  const [activeKotoba, setActiveKotoba] = useState<Kotoba | null>(null);
  const [activeKanjiChar, setActiveKanjiChar] = useState<string | null>(null);

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const { t, language } = useTranslation();

  const user = useAuthStore((state) => state.user);
  const userKey = user?.id ? String(user.id) : (user?.email || 'guest');
  const storageKey = `kanarau_dokkai_results_${userKey}`;

  // Completed records from localStorage scoped to user
  const [completedRecords, setCompletedRecords] = useState<Record<string, CompletedRecord>>({});

  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      setCompletedRecords(saved ? JSON.parse(saved) : {});
    } catch {
      setCompletedRecords({});
    }
  }, [storageKey]);

  // AI Modal
  const [aiModalOpen, setAiModalOpen] = useState(false);
  const [aiInitialPrompt, setAiInitialPrompt] = useState('');
  const [aiInitialDisplay, setAiInitialDisplay] = useState('');

  const handleCloseAiModal = useCallback(() => {
    setAiModalOpen(false);
    setAiInitialPrompt('');
    setAiInitialDisplay('');
  }, []);

  // Passages filtered by current level
  const levelPassages = useMemo(() => {
    return DOKKAI_PASSAGES.filter((p) => p.level === currentLevel).map((p) => localizeDokkai(p, language));
  }, [currentLevel, language]);

  // Passages filtered by active category tab
  const displayedPassages = useMemo(() => {
    if (activeCategory === 'all') return levelPassages;
    return levelPassages.filter((p) => p.category === activeCategory);
  }, [levelPassages, activeCategory]);

  const activePassage = levelPassages.find((p) => p.id === selectedPassageId);

  // Auto-load neural studio audio duration when active passage loads
  useEffect(() => {
    if (activePassage) {
      const track = getDokkaiTrack(activePassage.id);
      if (track) {
        setAudioDuration(track.totalDuration);
      }
    }
  }, [activePassage]);

  const handleSpeedChange = (newSpeed: number) => {
    setAudioSpeed(newSpeed);
    setDokkaiPlaybackSpeed(newSpeed);
  };

  // Index of active passage within levelPassages
  const activeIndex = levelPassages.findIndex((p) => p.id === selectedPassageId);
  const nextPassage = activeIndex !== -1 && activeIndex < levelPassages.length - 1 ? levelPassages[activeIndex + 1] : null;

  // Timer effect when a passage is active
  useEffect(() => {
    stopAudio();
    setIsAudioPlaying(false);
    setAudioTime(0);
    setAudioDuration(0);
    setLookupEntry(null);
    if (!selectedPassageId) {
      setSecondsElapsed(0);
      return;
    }
    const timer = setInterval(() => {
      setSecondsElapsed((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [selectedPassageId]);

  const handleSelectPassage = (passage: DokkaiPassage, isLocked: boolean = false) => {
    if (isLocked) {
      const prevDay = (passage.dayNumber || 1) - 1;
      setLockedAlert(
        language === 'en'
          ? `Passage ${passage.title} is locked. Please complete DAY ${prevDay} first.`
          : language === 'my'
          ? `စာဖတ် ${passage.title} ပိတ်ထားဆဲဖြစ်ပါသည်။ ကျေးဇူးပြု၍ DAY ${prevDay} အရင်ပြီးဆုံးအောင်လုပ်ပါ။`
          : `Bacaan ${passage.title} masih terkunci. Selesaikan DAY ${prevDay} terlebih dahulu.`
      );
      return;
    }
    setSelectedPassageId(passage.id);
    setSelectedChoices({});
    setShowVocabHelp(false);
    setShowTranslation(false);
    setSecondsElapsed(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToList = () => {
    setSelectedPassageId(null);
    setSelectedChoices({});
    setShowVocabHelp(false);
    setShowTranslation(false);
    setSecondsElapsed(0);
  };

  const handleAnswerQuestion = (questionId: string, choiceIndex: number) => {
    if (!activePassage || selectedChoices[questionId] !== undefined) return;

    const nextChoices = { ...selectedChoices, [questionId]: choiceIndex };
    setSelectedChoices(nextChoices);

    // Check if all questions in this passage are now answered
    const allAnswered = activePassage.questions.every((q) => nextChoices[q.id] !== undefined);
    if (allAnswered) {
      const correctCount = activePassage.questions.filter((q) => nextChoices[q.id] === q.correctChoiceIndex).length;
      const record: CompletedRecord = {
        correctCount,
        totalCount: activePassage.questions.length,
        seconds: secondsElapsed,
        completedAt: new Date().toISOString(),
      };
      const updated = { ...completedRecords, [activePassage.id]: record };
      setCompletedRecords(updated);
      try {
        localStorage.setItem(storageKey, JSON.stringify(updated));
      } catch (e) {}
      recordDokkaiCompletion(userKey, activePassage.id, secondsElapsed, correctCount, activePassage.questions.length);
    }
  };

  const handleNextPassage = () => {
    if (nextPassage) {
      handleSelectPassage(nextPassage, false);
    } else {
      handleBackToList();
    }
  };

  const formatTimer = (totalSeconds: number) => {
    const m = Math.floor(totalSeconds / 60);
    const s = totalSeconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const formatAudioTime = (seconds: number): string => {
    if (isNaN(seconds) || seconds < 0) return '00:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleToggleDokkaiAudio = () => {
    if (!activePassage) return;

    if (isAudioPlaying) {
      pauseAudio();
      setIsAudioPlaying(false);
      return;
    }

    if (isAudioPaused()) {
      resumeAudio(audioSpeed);
      setIsAudioPlaying(true);
      return;
    }

    let startTime = audioTime;
    if (audioDuration > 0 && audioTime >= audioDuration - 0.5) {
      startTime = 0;
      setAudioTime(0);
    }

    playDokkaiPassage(
      activePassage.passageText,
      () => setIsAudioPlaying(true),
      () => {
        setIsAudioPlaying(false);
        setAudioTime(0);
      },
      audioSpeed,
      (curTime, dur) => {
        if (!isScrubbing) {
          setAudioTime(curTime);
          if (dur > 0) setAudioDuration(dur);
        }
      },
      startTime,
      activePassage.id
    );
  };

  const handleScrubAudio = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setAudioTime(newTime);
  };

  const handleCommitScrub = () => {
    setIsScrubbing(false);
    seekAudio(audioTime);
  };

  const handleJumpAudio = (delta: number) => {
    const maxDur = audioDuration || 60;
    const newTime = Math.max(0, Math.min(maxDur, audioTime + delta));
    setAudioTime(newTime);
    seekAudio(newTime);
  };

  const handleRestartDokkaiAudio = () => {
    setAudioTime(0);
    seekAudio(0);
  };

  const triggerWordLookup = async (text: string) => {
    const clean = text.trim();
    if (!clean) return;

    // 1. Check quickLookupDictionary
    const staticEntry = findQuickLookupEntry(clean);
    if (staticEntry) {
      setLookupEntry(staticEntry);
      return;
    }

    // 2. Check current passage vocabularyHelp
    if (activePassage) {
      const v = activePassage.vocabularyHelp.find(
        (vh) => vh.word === clean || clean.includes(vh.word) || vh.word.includes(clean)
      );
      if (v) {
        const trans = DOKKAI_VOCAB_TRANSLATIONS[v.word];
        setLookupEntry({
          term: v.word,
          reading: v.reading,
          meanings: {
            id: [trans?.id || v.meaning],
            en: [trans?.en || trans?.id || v.meaning],
            my: [trans?.my || trans?.en || v.meaning],
          },
        });
        return;
      }
    }

    // 3. Search database via jishoApi.search(clean)
    try {
      const res = await jishoApi.search(clean);
      if (res && res.data && res.data.length > 0) {
        // Look for exact or relevant kotoba match
        const kotobaMatch =
          res.data.find(
            (item) =>
              item.type === 'kotoba' &&
              ((item.item as Kotoba).kanji === clean || (item.item as Kotoba).hiragana === clean)
          ) || res.data.find((item) => item.type === 'kotoba');

        if (kotobaMatch) {
          const k = kotobaMatch.item as Kotoba;
          const trans = KOTOBA_TRANSLATIONS[k.kanji || k.hiragana];
          const mId = k.meaning_id || k.meaning || trans?.meaning.id || '';
          const mEn = k.meaning_en || trans?.meaning.en || mId;
          const mMy = (k as any).meaning_my || trans?.meaning.my || mEn;

          setLookupEntry({
            term: k.kanji || k.hiragana,
            reading: k.hiragana,
            meanings: {
              id: [mId],
              en: [mEn],
              my: [mMy],
            },
            rawKotoba: k,
          });
          return;
        }

        // Look for kanji match
        const kanjiMatch =
          res.data.find(
            (item) => item.type === 'kanji' && (item.item as Kanji).character === clean
          ) || res.data.find((item) => item.type === 'kanji');

        if (kanjiMatch) {
          const kj = kanjiMatch.item as Kanji;
          const readingStr = [
            ...(kj.kun_readings || []),
            ...(kj.on_readings || []),
          ].filter(Boolean).join(' / ') || kj.character;

          const mId = kj.meanings?.[0] || '';
          const mEn = (kj as any).meaning_en || mId;
          const mMy = (kj as any).meaning_my || mEn;

          setLookupEntry({
            term: kj.character,
            reading: readingStr,
            meanings: {
              id: [mId],
              en: [mEn],
              my: [mMy],
            },
            rawKanjiChar: kj.character,
          });
          return;
        }
      }
    } catch (err) {
      console.warn('Jisho lookup error in Dokkai:', err);
    }

    // 4. Check KOTOBA_TRANSLATIONS
    if (KOTOBA_TRANSLATIONS[clean]) {
      const kt = KOTOBA_TRANSLATIONS[clean];
      setLookupEntry({
        term: clean,
        reading: clean,
        meanings: {
          id: [kt.meaning.id],
          en: [kt.meaning.en],
          my: [kt.meaning.my],
        },
      });
      return;
    }

    // 5. Default entry with audio pronounce
    setLookupEntry({
      term: clean,
      reading: clean,
      meanings: {
        id: ["Ketuk speaker di atas untuk mendengar pengucapan audio kata ini"],
        en: ["Tap the speaker button above to hear audio pronunciation"],
        my: ["ဤစာလုံး၏ အသံထွက်ကို နားထောင်ရန် အထက်ပါ စပီကာခလုတ်ကို နှိပ်ပါ"],
      },
    });
  };

  const handlePassageSelect = () => {
    const selection = window.getSelection();
    const text = selection ? selection.toString().trim() : '';
    if (text && text.length <= 15) {
      triggerWordLookup(text);
    }
  };

  const handleAskAiAboutPassage = () => {
    if (!activePassage) return;
    const questionsSummary = activePassage.questions
      .map((q, idx) => {
        const userChoice = selectedChoices[q.id];
        return language === 'my'
          ? `[မေးခွန်း ${idx + 1}]: ${q.question}
ရွေးချယ်စရာများ:
${q.choices.map((c, ci) => `  ${ci + 1}. ${c}`).join('\n')}
မှန်ကန်သောအဖြေ: ရွေးချယ်စရာ ${q.correctChoiceIndex + 1} (${q.choices[q.correctChoiceIndex]})
အသုံးပြုသူ အခြေအနေ: ${userChoice !== undefined ? `ရွေးချယ်စရာ ${userChoice + 1} ကို ရွေးချယ်ထားသည်` : 'မဖြေဆိုရသေးပါ'}
ရှင်းလင်းချက်: ${q.explanation}`
          : language === 'en'
          ? `[Question ${idx + 1}]: ${q.question}
Choices:
${q.choices.map((c, ci) => `  ${ci + 1}. ${c}`).join('\n')}
Correct Key: Choice ${q.correctChoiceIndex + 1} (${q.choices[q.correctChoiceIndex]})
User Status: ${userChoice !== undefined ? `Selected choice ${userChoice + 1}` : 'Not answered'}
Brief Explanation: ${q.explanation}`
          : `[Pertanyaan ${idx + 1}]: ${q.question}
Pilihan:
${q.choices.map((c, ci) => `  ${ci + 1}. ${c}`).join('\n')}
Kunci Jawaban Benar: Pilihan ${q.correctChoiceIndex + 1} (${q.choices[q.correctChoiceIndex]})
Status Pengguna: ${userChoice !== undefined ? `Memilih pilihan ${userChoice + 1}` : 'Belum dijawab'}
Penjelasan Singkat: ${q.explanation}`;
      })
      .join('\n\n');

    const langDirective =
      language === 'my'
        ? '[STRICT LANGUAGE DIRECTIVE: You must respond 100% in MYANMAR (BURMESE) language only. Absolutely NO Indonesian language allowed. Quotes from Japanese text must be explained in Myanmar script.]\n\n'
        : language === 'en'
        ? '[STRICT LANGUAGE DIRECTIVE: You must respond 100% in ENGLISH language only. Absolutely NO Indonesian language allowed. Quotes from Japanese text must be explained in English.]\n\n'
        : '[PETUNJUK BAHASA: Berikan penjelasan 100% dalam BAHASA INDONESIA. Kutipan kalimat teks bahasa Jepang dijelaskan artinya dalam Bahasa Indonesia.]\n\n';

    const prompt =
      langDirective +
      (language === 'my'
        ? `အောက်ပါ JLPT ${currentLevel} စာဖတ်နားလည်မှု (Dokkai) စာပိုဒ်ကို အသေးစိတ် ခွဲခြမ်းစိတ်ဖြာ ရှင်းပြပေးပါ:

ခေါင်းစဉ်: ${activePassage.title}
ကဏ္ဍ: ${activePassage.categoryLabel}
ရင်းမြစ်: ${activePassage.sourceType}

=== ဂျပန်စာဖတ်ပိုဒ် အပြည့်အစုံ ===
${activePassage.passageText}

=== မေးခွန်းများနှင့် အဖြေရွေးချယ်စရာများ ===
${questionsSummary}

ဆရာ AI အတွက် လမ်းညွှန်ချက်:
မေးခွန်းတစ်ခုစီအတွက်:
၁။ မှန်ကန်သောအဖြေ နံပါတ်နှင့် စာသားကို တိကျစွာဖော်ပြပါ။
၂။ အဖြေရရှိသည့် အထောက်အထား: ဂျပန်စာဖတ်ပိုဒ်ထဲမှ အထောက်အထားစာကြောင်းကို ကိုးကားဖော်ပြပြီး မြန်မာပြန်ပေးပါ။
၃။ အကြောင်းပြချက်: အဘယ်ကြောင့် ဤအဖြေမှန်ရသည်ကို ယုတ္တိကျကျ ရှင်းပြပါ။
၄။ ကျန်အဖြေများ အဘယ်ကြောင့်မှားသည်ကို ရှင်းပြပေးပါ။ (မြန်မာဘာသာဖြင့်သာ ရေးသားဖြေကြားပေးပါ)`
        : language === 'en'
        ? `Analyze and thoroughly explain the following JLPT ${currentLevel} Dokkai passage:

Title: ${activePassage.title}
Category: ${activePassage.categoryLabel}
Source: ${activePassage.sourceType}

=== FULL JAPANESE TEXT ===
${activePassage.passageText}

=== QUESTIONS & CHOICES ===
${questionsSummary}

INSTRUCTIONS FOR AI SENSEI:
For each question:
1. Clearly state the correct answer number and choice text.
2. EVIDENCE: Quote the exact sentence from the Japanese text that proves the answer, with English translation.
3. REASONING: Explain the logic of why that sentence leads to the correct answer.
4. TRAPS: Explain briefly why other choices are wrong.`
        : `Bedah dan analisis tuntas teks bacaan Dokkai JLPT ${currentLevel} berikut:

Judul: ${activePassage.title}
Kategori: ${activePassage.categoryLabel}
Sumber: ${activePassage.sourceType}

=== TEKS BACAAN JEPANG LENGKAP ===
${activePassage.passageText}

=== SOAL & PILIHAN JAWABAN ===
${questionsSummary}

INSTRUKSI WAJIB UNTUK AI SENSEI:
Untuk setiap pertanyaan:
1. Sebutkan secara tegas nomor dan isi kunci jawaban yang benar.
2. DAPAT DARI MANA JAWABANNYA: Kutip kalimat persis dalam teks bacaan bahasa Jepang yang menjadi dasar bukti ke dalam blockquote (>) beserta arti bahasa Indonesianya.
3. Jelaskan ALASAN LOGIKA mengapa kalimat bukti tersebut mengarah ke jawaban benar.
4. Bedah secara ringkas kenapa opsi-opsi lainnya salah (jebakan pilihan salah).`);

    setAiInitialPrompt(prompt);
    setAiInitialDisplay(
      language === 'my'
        ? `စာဖတ်နားလည်မှု ${currentLevel}: ${activePassage.title}`
        : language === 'en'
        ? `Ask Dokkai ${currentLevel}: ${activePassage.title}`
        : `Tanya Dokkai ${currentLevel}: ${activePassage.title}`
    );
    setAiModalOpen(true);
  };

  const handleAskAiAboutQuestion = (q: DokkaiQuestionItem, qIndex: number) => {
    if (!activePassage) return;
    const userChoice = selectedChoices[q.id];
    const userChoiceStatus =
      userChoice !== undefined
        ? language === 'my'
          ? `အသုံးပြုသူသည် ရွေးချယ်စရာ ${userChoice + 1} (${userChoice === q.correctChoiceIndex ? 'မှန်ပါသည်' : 'မှားပါသည်'}) ကို ရွေးချယ်ထားသည်`
          : language === 'en'
          ? `User selected Choice ${userChoice + 1} (${userChoice === q.correctChoiceIndex ? 'Correct' : 'Incorrect'})`
          : `Pengguna memilih Pilihan ${userChoice + 1} (${userChoice === q.correctChoiceIndex ? 'Benar' : 'Salah'})`
        : language === 'my'
        ? 'အသုံးပြုသူ အဖြေမရွေးချယ်ရသေးပါ'
        : language === 'en'
        ? 'User has not selected an answer yet'
        : 'Pengguna belum memilih jawaban';

    const langDirective =
      language === 'my'
        ? '[STRICT LANGUAGE DIRECTIVE: You must respond 100% in MYANMAR (BURMESE) language only. Absolutely NO Indonesian language allowed. Quotes from Japanese text must be explained in Myanmar script.]\n\n'
        : language === 'en'
        ? '[STRICT LANGUAGE DIRECTIVE: You must respond 100% in ENGLISH language only. Absolutely NO Indonesian language allowed. Quotes from Japanese text must be explained in English.]\n\n'
        : '[PETUNJUK BAHASA: Berikan penjelasan 100% dalam BAHASA INDONESIA. Kutipan kalimat teks bahasa Jepang dijelaskan artinya dalam Bahasa Indonesia.]\n\n';

    const prompt =
      langDirective +
      (language === 'my'
        ? `အောက်ပါ JLPT ${currentLevel} စာဖတ်နားလည်မှု မေးခွန်းကို အသေးစိတ် ခွဲခြမ်းစိတ်ဖြာ ရှင်းပြပေးပါ:

စာပိုဒ် ခေါင်းစဉ်: ${activePassage.title}
ကဏ္ဍ: ${activePassage.categoryLabel}

=== ဂျပန်စာဖတ်ပိုဒ် မူရင်း ===
${activePassage.passageText}

=== မေးခွန်း (နံပါတ် ${qIndex + 1}) ===
${q.question}

=== ရွေးချယ်စရာများ ===
${q.choices.map((c, ci) => `${ci + 1}. ${c}`).join('\n')}

မှန်ကန်သောအဖြေ: ရွေးချယ်စရာ ${q.correctChoiceIndex + 1} (${q.choices[q.correctChoiceIndex]})
အသုံးပြုသူ အခြေအနေ: ${userChoiceStatus}
ရှင်းလင်းချက်: ${q.explanation}

ဆရာ AI အတွက် လမ်းညွှန်ချက်:
၁။ မှန်ကန်သောအဖြေ နံပါတ်နှင့် စာသားကို တိကျစွာ အစပိုင်းတွင် ဖော်ပြပါ။
၂။ အဖြေရရှိသည့် အထောက်အထား: အထက်ပါ ဂျပန်စာဖတ်ပိုဒ်ထဲမှ အထောက်အထားစာကြောင်းကို ကိုးကားဖော်ပြပြီး မြန်မာပြန်ပေးပါ။
၃။ အကြောင်းပြချက်: အဘယ်ကြောင့် ဤအဖြေမှန်ရသည်ကို ယုတ္တိကျကျ ရှင်းပြပါ။
၄။ ကျန်အဖြေများ အဘယ်ကြောင့်မှားသည်ကို ရှင်းပြပေးပါ။ (မြန်မာဘာသာဖြင့်သာ ရေးသားဖြေကြားပေးပါ)`
        : language === 'en'
        ? `Analyze and explain the following JLPT ${currentLevel} Dokkai question in depth:

Passage Title: ${activePassage.title}
Category: ${activePassage.categoryLabel}

=== JAPANESE PASSAGE ===
${activePassage.passageText}

=== QUESTION (${qIndex + 1}) ===
${q.question}

=== CHOICES ===
${q.choices.map((c, ci) => `${ci + 1}. ${c}`).join('\n')}

Correct Key: Choice ${q.correctChoiceIndex + 1} (${q.choices[q.correctChoiceIndex]})
User Choice Status: ${userChoiceStatus}
Explanation: ${q.explanation}

INSTRUCTIONS FOR AI SENSEI:
1. State the correct choice number and text clearly.
2. EVIDENCE: Quote the exact sentence from the Japanese text that proves the answer, with English translation.
3. REASONING: Explain the logic clearly and concisely.
4. TRAPS: Explain why each incorrect option is wrong.`
        : `Bedah dan jelaskan secara mendalam soal Dokkai JLPT ${currentLevel} berikut:

Judul Bacaan: ${activePassage.title}
Kategori: ${activePassage.categoryLabel}

=== TEKS BACAAN JEPANG ASLI ===
${activePassage.passageText}

=== PERTANYAAN (SOAL KE-${qIndex + 1}) ===
${q.question}

=== OPSI PILIHAN JAWABAN ===
${q.choices.map((c, ci) => `${ci + 1}. ${c}`).join('\n')}

Kunci Jawaban Sebenarnya: Pilihan ${q.correctChoiceIndex + 1} (${q.choices[q.correctChoiceIndex]})
Status Pilihan Pengguna: ${userChoiceStatus}
Penjelasan Kunci Soal: ${q.explanation}

INSTRUKSI MUTLAK UNTUK AI SENSEI:
1. Sebutkan secara tegas di baris awal kunci jawaban yang benar (Nomor & Teks pilihan).
2. DAPAT DARI MANA JAWABANNYA: Kutip kalimat persis dari teks bacaan bahasa Jepang di atas yang membuktikan kebenaran jawaban tersebut ke dalam blockquote (>), lalu berikan terjemahan bahasa Indonesianya.
3. ALASAN KENAPA JAWABAN ITU: Jelaskan alur penalaran dan logika maknanya secara padat dan mudah dipahami.
4. KENAPA OPSI LAIN SALAH: Bedah secara spesifik kenapa pilihan-pilihan lainnya salah atau bagian mana dari pilihan tersebut yang merupakan jebakan bagi peserta ujian.`);

    setAiInitialPrompt(prompt);
    setAiInitialDisplay(
      language === 'my'
        ? `မေးခွန်း ${qIndex + 1}: ${q.question.slice(0, 30)}...`
        : language === 'en'
        ? `Question ${qIndex + 1}: ${q.question.slice(0, 30)}...`
        : `Tanya Soal ${qIndex + 1}: ${q.question.slice(0, 40)}...`
    );
    setAiModalOpen(true);
  };
  // ─────────────────────────────────────────────────────────────
  // VIEW 1: Passage Selection List
  // ─────────────────────────────────────────────────────────────
  if (!selectedPassageId || !activePassage) {
    const completedCount = levelPassages.filter((p) => completedRecords[p.id]).length;

    return (
      <div className="space-y-4 animate-fade-in">
        {/* Banner Card */}
        <div className="card-washi rounded-2xl p-4 bg-gradient-to-br from-emerald-50/70 via-white to-sky-50/30 border border-emerald-100/80 shadow-xs">
          <div className="flex items-center space-x-2.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-xs shrink-0">
              <FileText className="w-5 h-5 fill-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-bold font-mincho text-[#1E1B18]">
                  {t.modules.dokkai.title}
                </h2>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                  {t.modules.dokkai.completedCount(completedCount, levelPassages.length)}
                </span>
              </div>
              <p className="text-[11px] text-[#78716C] leading-relaxed mt-0.5">
                {t.modules.dokkai.desc(currentLevel)}
              </p>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center space-x-1.5 overflow-x-auto no-scrollbar py-0.5">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap transition-all shadow-2xs ${
              activeCategory === 'all'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-white hover:bg-stone-50 text-[#78716C] border border-[#EFEAE2]'
            }`}
          >
            {t.modules.dokkai.allTexts(levelPassages.length)}
          </button>
          <button
            onClick={() => setActiveCategory('tanbun')}
            className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap transition-all shadow-2xs ${
              activeCategory === 'tanbun'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-white hover:bg-stone-50 text-[#78716C] border border-[#EFEAE2]'
            }`}
          >
            短文 Tanbun
          </button>
          <button
            onClick={() => setActiveCategory('chuubun')}
            className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap transition-all shadow-2xs ${
              activeCategory === 'chuubun'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-white hover:bg-stone-50 text-[#78716C] border border-[#EFEAE2]'
            }`}
          >
            中文 Chuubun
          </button>
          <button
            onClick={() => setActiveCategory('jouhou')}
            className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap transition-all shadow-2xs ${
              activeCategory === 'jouhou'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-white hover:bg-stone-50 text-[#78716C] border border-[#EFEAE2]'
            }`}
          >
            情報検索 Info
          </button>
        </div>

        {/* Locked Alert Banner */}
        {lockedAlert && (
          <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-start space-x-2 animate-fade-in shadow-2xs">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="font-semibold">{lockedAlert}</p>
            </div>
            <button
              onClick={() => setLockedAlert(null)}
              className="text-amber-500 hover:text-amber-800 text-xs font-bold cursor-pointer"
            >
              ✕
            </button>
          </div>
        )}

        {/* Passages List */}
        <div className="space-y-3">
          {displayedPassages.map((passage, idx) => {
            const record = completedRecords[passage.id];
            const isCompleted = !!record;
            const accuracy = record ? Math.round((record.correctCount / record.totalCount) * 100) : 0;
            const prevPassage = levelPassages.find(
              (p) => (p.dayNumber || 1) === (passage.dayNumber || 1) - 1
            );
            const isLocked =
              (passage.dayNumber || 1) > 1 && prevPassage
                ? !completedRecords[prevPassage.id]
                : false;
            const isToday = !isCompleted && !isLocked;

            return (
              <div key={passage.id}
                onClick={() => handleSelectPassage(passage, isLocked)}
                className={`card-washi rounded-2xl p-4 border cursor-pointer transition-all flex flex-col justify-between ${
                  isLocked
                    ? 'border-[#E5DFD5] bg-[#F7F5F0]/60 opacity-75'
                    : isCompleted
                    ? 'border-emerald-200/90 bg-gradient-to-r from-emerald-50/20 via-white to-white hover:border-emerald-300'
                    : isToday
                    ? 'border-indigo-200/90 bg-white ring-1 ring-indigo-200/50 shadow-xs hover:border-indigo-300'
                    : 'border-[#EFEAE2] bg-white hover:border-emerald-300'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-1 pr-2 flex-1">
                    <div className="flex items-center space-x-2 flex-wrap gap-y-1">
                      {passage.dayNumber && (
                        <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full border ${
                          isLocked
                            ? 'bg-stone-100 text-stone-500 border-stone-200'
                            : isToday
                            ? 'text-indigo-700 bg-indigo-50 border-indigo-200'
                            : 'text-[#1E1B18] bg-stone-50 border-[#EFEAE2]'
                        }`}>
                          DAY {passage.dayNumber}
                        </span>
                      )}

                      {/* Status Badges */}
                      {isCompleted ? (
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center space-x-1 ${
                          accuracy >= 80
                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                            : 'bg-amber-100 text-amber-800 border border-amber-200'
                        }`}>
                          <Check className="w-3 h-3 text-emerald-700" />
                          <span>{t.modules.dokkai.scoreResult(record.correctCount, record.totalCount, accuracy)}</span>
                        </span>
                      ) : isToday ? (
                        <span className="text-[10px] font-extrabold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-200">
                          {language === 'en' ? "Today's Target" : language === 'my' ? 'ယနေ့ပန်းတိုင်' : 'Target Hari Ini'}
                        </span>
                      ) : isLocked ? (
                        <span className="text-[10px] font-bold text-stone-500 bg-stone-100 px-2 py-0.5 rounded-full border border-stone-200 flex items-center space-x-1">
                          <Lock className="w-3 h-3 text-stone-400" />
                          <span>{language === 'en' ? `Locked (DAY ${(passage.dayNumber || 1) - 1})` : language === 'my' ? `သော့ခတ်ထားဆဲ (DAY ${(passage.dayNumber || 1) - 1})` : `Terkunci (DAY ${(passage.dayNumber || 1) - 1})`}</span>
                        </span>
                      ) : null}

                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                        {passage.categoryLabel}
                      </span>
                      <span className="text-[11px] text-[#78716C] flex items-center space-x-1">
                        <Clock className="w-3 h-3 text-stone-400" />
                        <span>{t.modules.dokkai.minutes(passage.estimatedMinutes)}</span>
                      </span>
                    </div>

                    <h3 className="font-bold text-sm text-[#1E1B18] pt-0.5 font-jp line-clamp-2">
                      {idx + 1}. {passage.title}
                    </h3>

                    <div className="flex items-center justify-between pt-1">
                      <p className="text-xs text-[#78716C]">
                        {passage.sourceType} · {t.modules.dokkai.questions(passage.questions.length)}
                      </p>
                      {isCompleted && (
                        <span className="text-[10px] text-stone-400">
                          {t.modules.dokkai.completedIn(formatTimer(record.seconds))}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="w-8 h-8 rounded-xl bg-[#FAF8F5] border border-[#EFEAE2] flex items-center justify-center text-[#78716C] shrink-0 mt-1">
                    {isLocked ? (
                      <Lock className="w-4 h-4 text-[#8C827A]" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────
  // VIEW 2: Active Passage Reading & Quiz View
  // ─────────────────────────────────────────────────────────────
  const allAnswered = activePassage.questions.every((q) => selectedChoices[q.id] !== undefined);
  const correctCount = activePassage.questions.filter((q) => selectedChoices[q.id] === q.correctChoiceIndex).length;
  const accuracy = Math.round((correctCount / activePassage.questions.length) * 100);

  return (
    <>
      <div className="space-y-4 animate-fade-in pb-20">
        {/* Top Action Bar & Timer */}
        <div className="flex items-center justify-between px-1">
          <button
            onClick={handleBackToList}
            className="flex items-center space-x-1 text-xs font-bold text-[#57534E] hover:text-[#1E1B18] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t.modules.dokkai.backToList} ({activeIndex + 1}/{levelPassages.length})</span>
          </button>

          <div className="flex items-center space-x-2">
            <span
              className={`inline-flex items-center space-x-1 text-xs font-bold px-2.5 py-1 rounded-full border shadow-2xs transition-colors ${
                secondsElapsed > activePassage.estimatedMinutes * 60
                  ? 'text-amber-800 bg-amber-50 border-amber-200'
                  : 'text-indigo-700 bg-indigo-50 border-indigo-200'
              }`}
              title={language === 'my' ? 'ဤစာပိုဒ်အတွက် JLPT စာမေးပွဲ ပစ်မှတ်အချိန်' : language === 'en' ? 'JLPT target time for this passage' : 'Target waktu ujian JLPT untuk teks ini'}
            >
              <Clock className="w-3.5 h-3.5" />
              <span>{formatTimer(secondsElapsed)} / {t.modules.dokkai.minutes(activePassage.estimatedMinutes)}</span>
            </span>

            <button
              onClick={handleAskAiAboutPassage}
              className="inline-flex items-center space-x-1 text-xs font-bold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 px-2.5 py-1 rounded-full border border-indigo-200 transition-colors shadow-2xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              <span>{t.studySession.askAi}</span>
            </button>
          </div>
        </div>

        {/* Reading Passage Card */}
        <div className="card-washi rounded-2xl p-5 border border-[#EFEAE2] bg-white shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-[#F2ECE3] pb-2.5">
            <div>
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                {activePassage.categoryLabel}
              </span>
              <h2 className="text-sm font-bold font-jp text-[#1E1B18] mt-1">
                {activePassage.title}
              </h2>
            </div>

            <button
              onClick={() => setShowVocabHelp(!showVocabHelp)}
              className="text-xs font-bold text-amber-800 bg-amber-50 hover:bg-amber-100 px-2.5 py-1 rounded-full border border-amber-200 transition-colors shrink-0 flex items-center space-x-1"
            >
              <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
              <span>{t.modules.dokkai.vocabHelp}</span>
            </button>
          </div>

          {/* Vocabulary Help Drawer */}
          {showVocabHelp && (
            <div className="p-3 bg-amber-50/80 rounded-xl border border-amber-200 space-y-1.5 animate-fade-in text-xs">
              <span className="font-bold text-amber-900 block text-[11px] uppercase tracking-wider">
                {t.modules.dokkai.keyVocab}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {activePassage.vocabularyHelp.map((v, i) => (
                  <div key={i} onClick={() => triggerWordLookup(v.word)} className="flex items-baseline space-x-1.5 bg-white/70 hover:bg-white p-1.5 rounded-lg border border-amber-100 hover:border-amber-300 transition-colors cursor-pointer" title={language === 'my' ? 'အဘိဓာန်ကြည့်ရန် နှိပ်ပါ' : language === 'en' ? 'Click to view dictionary' : 'Klik untuk lihat kamus'}>
                    <span className="font-jp font-bold text-[#1E1B18]">{v.word}</span>
                    <span className="font-jp text-indigo-700 text-[11px]">({v.reading})</span>
                    <span className="text-[#57534E] text-[11px] line-clamp-1">— {DOKKAI_VOCAB_TRANSLATIONS[v.word]?.[language] || v.meaning}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Dokkai Audio Player Card with Scrubber Slider */}
          <div className="bg-gradient-to-br from-emerald-50/60 via-white to-sky-50/30 rounded-2xl p-4 border border-emerald-100/90 shadow-2xs space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1.5 text-xs font-bold text-emerald-800 dark:text-emerald-300">
                <Headphones className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  {language === 'my'
                    ? 'တိုကျို မူရင်းအသံဖြင့် နားထောင်ရန်'
                    : language === 'en'
                    ? 'Listen to Native Tokyo Audio Narration'
                     : t.common.audioListen}
                </span>
              </div>

              {/* Speed Buttons */}
              <div className="flex items-center space-x-1 bg-white/90 dark:bg-stone-800 p-0.5 rounded-full border border-stone-200">
                {[
                  { val: 1.0, label: '1.0x' },
                  { val: 1.15, label: '1.15x' },
                  { val: 1.25, label: '1.25x' },
                ].map((spd) => (
                  <button
                    key={spd.val}
                    onClick={() => handleSpeedChange(spd.val)}
                    className={`px-2 py-0.5 rounded-full text-[10px] font-bold transition-all ${
                      audioSpeed === spd.val
                        ? 'bg-emerald-600 text-white shadow-2xs'
                        : 'text-stone-500 hover:text-stone-900'
                    }`}
                  >
                    {spd.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Play Controls Row: -5s, Play/Pause, +5s */}
            <div className="flex items-center justify-center space-x-4 pt-1">
              <button
                type="button"
                onClick={() => handleJumpAudio(-5)}
                className="w-9 h-9 rounded-full bg-white hover:bg-stone-50 text-stone-700 border border-stone-200 flex flex-col items-center justify-center transition-all shadow-2xs active:scale-95 cursor-pointer"
                title={language === 'my' ? '၅ စက္ကန့် နောက်သို့' : language === 'en' ? 'Rewind 5s' : 'Mundur 5 detik'}
              >
                <RotateCcw className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-[8px] font-bold -mt-0.5">-5s</span>
              </button>

              <button
                type="button"
                onClick={handleToggleDokkaiAudio}
                className={`w-14 h-14 rounded-full flex items-center justify-center transition-all shadow-md active:scale-95 cursor-pointer ${
                  isAudioPlaying
                    ? 'bg-rose-600 text-white ring-4 ring-rose-100 animate-pulse'
                    : 'bg-emerald-600 hover:bg-emerald-700 text-white ring-4 ring-emerald-100'
                }`}
                title={
                  isAudioPlaying
                    ? language === 'my'
                      ? 'အသံ ခေတ္တရပ်ရန်'
                      : language === 'en'
                      ? 'Pause Audio'
                      : 'Jeda Audio'
                    : language === 'my'
                    ? 'အသံဖွင့်ရန်'
                    : language === 'en'
                    ? 'Play Audio'
                    : 'Putar Audio'
                }
              >
                {isAudioPlaying ? (
                  <Pause className="w-6 h-6 fill-white" />
                ) : (
                  <Play className="w-6 h-6 fill-white ml-0.5" />
                )}
              </button>

              <button
                type="button"
                onClick={() => handleJumpAudio(5)}
                className="w-9 h-9 rounded-full bg-white hover:bg-stone-50 text-stone-700 border border-stone-200 flex flex-col items-center justify-center transition-all shadow-2xs active:scale-95 cursor-pointer"
                title={language === 'my' ? '၅ စက္ကန့် ရှေ့သို့' : language === 'en' ? 'Forward 5s' : 'Maju 5 detik'}
              >
                <RotateCw className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-[8px] font-bold -mt-0.5">+5s</span>
              </button>
            </div>

            {/* Slider Scrubber */}
            <div className="space-y-1 pt-1">
              <div className="flex items-center justify-between text-[11px] font-mono font-bold text-stone-600 px-0.5">
                <span className="flex items-center space-x-1">
                  <Radio className="w-3 h-3 text-emerald-600 animate-pulse" />
                  <span>{formatAudioTime(audioTime)}</span>
                </span>
                <div className="flex items-center space-x-1.5">
                  <button
                    type="button"
                    onClick={handleRestartDokkaiAudio}
                    className="text-[10px] font-bold text-emerald-700 hover:text-emerald-900 bg-emerald-50 hover:bg-emerald-100 px-1.5 py-0.5 rounded border border-emerald-200 transition-colors cursor-pointer"
                  >
                    {language === 'my' ? 'ပြန်စပါ' : language === 'en' ? 'Replay' : 'Ulang'}
                  </button>
                  <span className="text-stone-300">/</span>
                  <span>{formatAudioTime(audioDuration || 60)}</span>
                </div>
              </div>

              <div className="relative flex items-center group py-0.5">
                <input
                  type="range"
                  min={0}
                  max={audioDuration || 60}
                  step={0.1}
                  value={audioTime}
                  onChange={handleScrubAudio}
                  onMouseDown={() => setIsScrubbing(true)}
                  onTouchStart={() => setIsScrubbing(true)}
                  onMouseUp={handleCommitScrub}
                  onTouchEnd={handleCommitScrub}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer accent-emerald-600 focus:outline-hidden"
                  style={{
                    background: `linear-gradient(to right, #059669 0%, #059669 ${
                      audioDuration > 0 ? (audioTime / audioDuration) * 100 : 0
                    }%, #E7E5E4 ${
                      audioDuration > 0 ? (audioTime / audioDuration) * 100 : 0
                    }%, #E7E5E4 100%)`,
                  }}
                  aria-label="Dokkai audio scrubber"
                />
              </div>

              <p className="text-[10px] text-stone-500 text-center">
                {language === 'my'
                  ? 'အသံကို ပြန်နားထောင်လိုသော နေရာသို့ ဆွဲရွှေ့ပါ'
                  : language === 'en'
                  ? 'Drag slider to replay any part of the passage narration'
                  : 'Geser slider untuk memutar ulang kalimat atau kanji yang ingin didengar'}
              </p>
            </div>
          </div>

          {/* Passage Japanese Text Display with Text Selection & Kanji Lookup */}
          <div className="space-y-1">
            <div
              onMouseUp={handlePassageSelect}
              onTouchEnd={handlePassageSelect}
              className="pt-2 font-jp text-sm sm:text-base leading-loose text-[#1E1B18] whitespace-pre-line tracking-wide bg-[#FAF8F5] p-4 rounded-xl border border-[#EFEAE2] select-text cursor-text"
            >
              {activePassage.passageText}
            </div>
            <p className="text-[10px] text-stone-500 italic px-1">
              {language === 'my'
                ? 'အကြံပြုချက်- အဓိပ္ပာယ် ကြည့်ရှုရန် မည်သည့် ခန်းဂျီး / စာလုံးကိုမဆို ဖိ၍ မှတ်သားပါ (Block/Highlight)'
                : language === 'en'
                ? 'Tip: Highlight or select any kanji / word to instantly view its reading & meaning'
                : 'Tips: Blok atau sorot kata/kanji mana saja untuk langsung melihat arti dan cara bacanya'}
            </p>
          </div>

          {/* Toggle Translation Button */}
          <div className="pt-1 flex items-center justify-between text-xs">
            <button
              onClick={() => setShowTranslation(!showTranslation)}
              className="text-[#78716C] hover:text-[#1E1B18] underline font-medium transition-colors"
            >
              {showTranslation ? t.modules.dokkai.hideTranslation : t.modules.dokkai.showTranslation}
            </button>
          </div>

          {showTranslation && (
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs text-[#57534E] leading-relaxed whitespace-pre-line animate-fade-in">
              {activePassage.translation}
            </div>
          )}
        </div>

        {/* Questions Section */}
        <div className="space-y-4 pt-1">
          <h3 className="text-xs font-bold text-[#1E1B18] tracking-wider uppercase font-mincho px-1">
            {t.modules.dokkai.comprehensionQuestions(activePassage.questions.length)}
          </h3>

          {activePassage.questions.map((q, qIndex) => {
            const chosenAnswer = selectedChoices[q.id];
            const isAnswered = chosenAnswer !== undefined;
            const isCorrect = isAnswered && chosenAnswer === q.correctChoiceIndex;

            return (
              <div
                key={q.id}
                className="card-washi rounded-2xl p-5 border border-[#EFEAE2] bg-white space-y-3 shadow-xs"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-start space-x-2 flex-1">
                    <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 border border-emerald-100">
                      {qIndex + 1}
                    </span>
                    <h4 className="font-bold text-sm font-jp text-[#1E1B18] leading-relaxed">
                      {q.question}
                    </h4>
                  </div>

                  <button
                    onClick={() => handleAskAiAboutQuestion(q, qIndex)}
                    className="inline-flex items-center space-x-1 text-[11px] font-bold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 px-2.5 py-1 rounded-full border border-indigo-200 transition-colors shadow-2xs shrink-0"
                    title={language === 'my' ? 'AI ကိုမေးပါ - စာပိုဒ်အထောက်အထားနှင့် အဖြေသုံးသပ်ချက်' : language === 'en' ? 'Ask AI: Text evidence & answer analysis' : 'Tanya AI: Bukti kalimat teks dan analisis kunci jawaban'}
                  >
                    <Sparkles className="w-3 h-3 text-indigo-600" />
                    <span>{t.studySession.askAi}</span>
                  </button>
                </div>

                {/* 4 Choices */}
                <div className="space-y-2 pt-1">
                  {q.choices.map((choice, cIndex) => {
                    const isSelected = chosenAnswer === cIndex;
                    const isChoiceCorrect = cIndex === q.correctChoiceIndex;
                    const isHighlightedCorrect = isAnswered && isChoiceCorrect;
                    const isWrongSelected = isAnswered && isSelected && !isChoiceCorrect;

                    return (
                      <button
                        key={cIndex}
                        disabled={isAnswered}
                        onClick={() => handleAnswerQuestion(q.id, cIndex)}
                        className={`w-full py-3 px-3.5 rounded-xl text-left text-xs sm:text-sm font-medium transition-all border flex items-center justify-between ${
                          isHighlightedCorrect
                            ? 'border-2 border-emerald-500 bg-emerald-50 text-emerald-900 font-bold shadow-xs'
                            : isWrongSelected
                            ? 'border-2 border-rose-500 bg-rose-50 text-rose-900 font-bold shadow-xs'
                            : isAnswered
                            ? 'bg-white/60 border-[#EFEAE2] text-[#A8A29E] opacity-60'
                            : 'bg-[#FAF8F5] hover:bg-white border-[#EFEAE2] text-[#1E1B18] shadow-2xs'
                        }`}
                      >
                        <div className="flex items-center space-x-2.5">
                          <span
                            className={`w-4 text-center font-bold text-xs ${
                              isHighlightedCorrect
                                ? 'text-emerald-700'
                                : isWrongSelected
                                ? 'text-rose-700'
                                : 'text-[#A8A29E]'
                            }`}
                          >
                            {cIndex + 1}
                          </span>
                          <span className="font-jp">{choice}</span>
                        </div>

                        {isHighlightedCorrect && (
                          <div className="flex items-center space-x-1 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold shrink-0">
                            <Check className="w-3 h-3" />
                            <span>{t.modules.dokkai.correct}</span>
                          </div>
                        )}
                        {isWrongSelected && (
                          <div className="flex items-center space-x-1 px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 text-xs font-bold shrink-0">
                            <X className="w-3 h-3" />
                            <span>{t.modules.dokkai.yourChoice}</span>
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation Card when Answered */}
                {isAnswered && (
                  <div className="p-3.5 bg-emerald-50/70 rounded-xl border border-emerald-200/90 text-xs space-y-2 animate-slide-up">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1.5 text-emerald-900 font-bold">
                        <Lightbulb className="w-4 h-4 text-emerald-600" />
                        <span>{t.modules.dokkai.explanationLabel}</span>
                      </div>
                      <button
                        onClick={() => handleAskAiAboutQuestion(q, qIndex)}
                        className="inline-flex items-center space-x-1 text-[10px] font-bold text-indigo-700 hover:text-indigo-900 underline transition-colors"
                      >
                        <Sparkles className="w-3 h-3 text-indigo-600" />
                        <span>{t.modules.dokkai.askAiQuestion}</span>
                      </button>
                    </div>
                    <p className="text-emerald-950 leading-relaxed pl-1">
                      {q.explanation}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ─── COMPLETION & NEXT PASSAGE BANNER (WHEN ALL QUESTIONS ANSWERED) ─── */}
        {allAnswered && (
          <div className="card-washi rounded-2xl p-5 border border-emerald-200 bg-gradient-to-br from-emerald-50/90 via-white to-indigo-50/40 space-y-4 shadow-md animate-slide-up">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-xs shrink-0">
                <Award className="w-6 h-6 fill-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <h4 className="font-bold text-sm text-[#1E1B18] font-mincho">
                    {t.modules.dokkai.finishedTitle}
                  </h4>
                  <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                    {t.modules.dokkai.saved}
                  </span>
                </div>
                <p className="text-xs text-[#57534E] mt-0.5">
                  {t.modules.dokkai.scoreResult(correctCount, activePassage.questions.length, accuracy)} · {t.modules.dokkai.completedIn(formatTimer(secondsElapsed))}
                </p>
              </div>
            </div>

            {/* Action Buttons: Next Passage vs Back to List */}
            <div className="pt-1 flex flex-col sm:flex-row gap-2">
              {nextPassage ? (
                <button
                  onClick={handleNextPassage}
                  className="flex-1 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs sm:text-sm flex items-center justify-center space-x-1.5 shadow-md transition-all active:scale-[0.99]"
                >
                  <span>{t.modules.dokkai.nextText}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : null}

              <button
                onClick={handleBackToList}
                className={`py-3 px-4 font-bold rounded-xl text-xs sm:text-sm transition-all shadow-xs active:scale-[0.99] ${
                  nextPassage
                    ? 'bg-white hover:bg-[#FAF8F5] text-[#44403C] border border-[#EFEAE2]'
                    : 'w-full bg-[#1E1B18] hover:bg-black text-white'
                }`}
              >
                {t.modules.dokkai.backToList}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Instant Kanji / Word Lookup Popover */}
      {lookupEntry && (
        <KanjiLookupPopover
          entry={lookupEntry}
          onClose={() => setLookupEntry(null)}
          onOpenDetail={(entry) => {
            if (entry.rawKotoba) {
              setActiveKotoba(entry.rawKotoba);
            } else if (entry.rawKanjiChar) {
              setActiveKanjiChar(entry.rawKanjiChar);
            } else if (entry.term.length === 1 && !entry.reading) {
              setActiveKanjiChar(entry.term);
            } else {
              const adHocKotoba: Kotoba = {
                id: 'dokkai_' + entry.term,
                kanji: entry.term,
                hiragana: entry.reading || entry.term,
                meaning: entry.meanings.id?.[0] || entry.term,
                meaning_id: entry.meanings.id?.[0] || '',
                meaning_en: entry.meanings.en?.[0] || '',
                jlpt_level: (currentLevel.toUpperCase() as any) || 'N2',
                part_of_speech: language === 'en' ? 'Noun' : language === 'my' ? 'နာမ်' : 'Kata benda',
                notes: '',
                example_sentence: '',
                example_sentence_meaning: '',
              };
              setActiveKotoba(adHocKotoba);
            }
          }}
          onAskAi={(term) => {
            const prompt =
              language === 'en'
                ? `Explain the Japanese word/kanji "${term}" in detail, including pronunciation, meanings, JLPT nuances, and practical example sentences.`
                : language === 'my'
                ? `ဂျပန်စာလုံး "${term}" ၏ အသံထွက်၊ အဓိပ္ပာယ်၊ JLPT စာမေးပွဲ သုံးစွဲပုံ နည်းလမ်းများနှင့် ဥပမာ ဝါကျများကို အသေးစိတ် ရှင်းပြပေးပါ။`
                : `Jelaskan secara mendalam kosakata atau kanji "${term}" beserta cara baca, arti, nuansa JLPT, dan contoh kalimat penggunaannya.`;
            setAiInitialPrompt(prompt);
            setAiInitialDisplay(term);
            setAiModalOpen(true);
          }}
        />
      )}

      {/* Kotoba Detail Modal */}
      {activeKotoba && (
        <KotobaDetailModal
          kotoba={activeKotoba}
          onClose={() => setActiveKotoba(null)}
          onViewKanji={(kChar) => {
            setActiveKotoba(null);
            setActiveKanjiChar(kChar);
          }}
        />
      )}

      {/* Kanji Detail Modal */}
      {activeKanjiChar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden max-h-[90vh] flex flex-col">
            <KanjiDetailView
              character={activeKanjiChar}
              onClose={() => setActiveKanjiChar(null)}
              onSelectKotoba={(k) => {
                setActiveKanjiChar(null);
                setActiveKotoba(k);
              }}
            />
          </div>
        </div>
      )}

      {/* Tanya AI Modal */}
      <TanyaAiModal
        isOpen={aiModalOpen}
        onClose={handleCloseAiModal}
        initialPrompt={aiInitialPrompt}
        initialDisplayText={aiInitialDisplay}
      />
    </>
  );
};
