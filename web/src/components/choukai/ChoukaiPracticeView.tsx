import React, { useState, useEffect, useMemo, useCallback } from 'react';
import type { ChoukaiQuestion } from '@/types/jlptModules';
import type { JLPTModuleLevel } from '@/types/jlptModules';
import { CHOUKAI_QUESTIONS } from '@/data/choukaiData';
import { localizeChoukai } from '@/locales/moduleTranslations';
import {
  playChoukaiDialogue,
  setChoukaiPlaybackSpeed,
  stopAudio,
  pauseAudio,
  resumeAudio,
  isAudioPaused,
  seekAudio,
  jumpAudioRelative,
  getChoukaiTrack,
} from '@/utils/audioPlayer';
import { TanyaAiModal } from '@/components/TanyaAiModal';
import { useTranslation } from '@/stores/languageStore';
import { useAuthStore } from '@/stores/authStore';
import { recordChoukaiCompletion, getUserKey } from '@/utils/userProgressHelper';
import {
  Headphones,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Check,
  X,
  ChevronRight,
  ArrowLeft,
  Sparkles,
  HelpCircle,
  FileText,
  Lightbulb,
  Radio,
  Award,
  RotateCcw,
  RotateCw,
  SkipBack,
  SkipForward,
  Lock,
  AlertCircle,
  Zap,
} from 'lucide-react';

interface ChoukaiPracticeViewProps {
  currentLevel: JLPTModuleLevel;
}

interface ChoukaiCompletedRecord {
  selectedChoice: number;
  isCorrect: boolean;
  completedAt: string;
}

export const ChoukaiPracticeView: React.FC<ChoukaiPracticeViewProps> = ({ currentLevel }) => {
  const [selectedQuestionId, setSelectedQuestionId] = useState<string | null>(null);
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showScript, setShowScript] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [audioSpeed, setAudioSpeed] = useState<number>(1.0);
  const [activeSpeakerTag, setActiveSpeakerTag] = useState<string | null>(null);
  const [activeTurnIndex, setActiveTurnIndex] = useState<number>(-1);
  const [lockedAlert, setLockedAlert] = useState<string | null>(null);
  const [audioCurrentTime, setAudioCurrentTime] = useState<number>(0);
  const [audioDuration, setAudioDuration] = useState<number>(0);
  const [isScrubbing, setIsScrubbing] = useState<boolean>(false);

  const { t, language } = useTranslation();

  const getSpeakerDisplayName = (tag: string): string => {
    const spk = t.modules.choukai.speakers;
    if (tag === '女' || tag === '女性') return spk.woman;
    if (tag === '男' || tag === '男性') return spk.man;
    if (tag === '店員') return spk.storeClerk;
    if (tag === '客') return spk.customer;
    if (tag === '男の子') return spk.boy;
    if (tag === '女の子') return spk.girl;
    if (tag === 'お母さん' || tag === '母') return spk.mother;
    if (tag === 'お父さん' || tag === '父') return spk.father;
    if (tag === 'おばあさん' || tag === 'おばあちゃん') return spk.grandmother;
    if (tag === 'おじいさん' || tag === 'おじいちゃん') return spk.grandfather;
    if (tag === 'お姉さん' || tag === '姉') return spk.sister;
    if (tag === 'お兄さん' || tag === '兄') return spk.brother;
    if (tag === '部長') return spk.buchou;
    if (tag === '課長') return spk.kachou;
    if (tag === '田中') return spk.tanaka;
    if (/^[123]$/.test(tag)) return spk.choice(tag);
    return tag;
  };

  const user = useAuthStore((state) => state.user);
  const userKey = getUserKey(user);
  const storageKey = `kanarau_choukai_results_${userKey}`;

  // Completed records from localStorage scoped to user
  const [completedRecords, setCompletedRecords] = useState<Record<string, ChoukaiCompletedRecord>>({});

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

  // Questions filtered by current level
  const levelQuestions = useMemo(() => {
    return CHOUKAI_QUESTIONS.filter((q) => q.level === currentLevel).map((q) => localizeChoukai(q, language));
  }, [currentLevel, language]);

  // Questions filtered by category
  const displayedQuestions = useMemo(() => {
    if (activeCategory === 'all') return levelQuestions;
    return levelQuestions.filter((q) => q.type === activeCategory);
  }, [levelQuestions, activeCategory]);

  const activeQuestion = levelQuestions.find((q) => q.id === selectedQuestionId);

  const activeTrack = useMemo(() => {
    return activeQuestion ? getChoukaiTrack(activeQuestion.id) : null;
  }, [activeQuestion]);

  useEffect(() => {
    if (activeTrack) {
      setAudioDuration(activeTrack.totalDuration);
    } else {
      setAudioDuration(0);
    }
    setAudioCurrentTime(0);
  }, [activeTrack, selectedQuestionId]);

  // Index of active question within levelQuestions
  const activeIndex = levelQuestions.findIndex((q) => q.id === selectedQuestionId);
  const nextQuestion = activeIndex !== -1 && activeIndex < levelQuestions.length - 1 ? levelQuestions[activeIndex + 1] : null;

  // Stop audio on unmount or question switch
  useEffect(() => {
    return () => {
      stopAudio();
    };
  }, [selectedQuestionId]);

  const formatAudioTime = (seconds: number): string => {
    if (isNaN(seconds) || seconds < 0) return '00:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleScrubChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setAudioCurrentTime(newTime);
    if (activeTrack) {
      const cue = activeTrack.cues.find((cu) => newTime >= cu.start && newTime <= cu.end);
      if (cue) {
        setActiveSpeakerTag(cue.speakerTag);
        setActiveTurnIndex(cue.turnIndex);
      }
    }
  };

  const handleScrubStart = () => {
    setIsScrubbing(true);
  };

  const handleScrubEnd = () => {
    setIsScrubbing(false);
    seekAudio(audioCurrentTime);
  };

  const handleJumpBack = (seconds: number = 5) => {
    const newTime = Math.max(0, audioCurrentTime - seconds);
    setAudioCurrentTime(newTime);
    seekAudio(newTime);
    if (activeTrack) {
      const cue = activeTrack.cues.find((cu) => newTime >= cu.start && newTime <= cu.end);
      if (cue) {
        setActiveSpeakerTag(cue.speakerTag);
        setActiveTurnIndex(cue.turnIndex);
      }
    }
  };

  const handleJumpForward = (seconds: number = 5) => {
    const maxDur = audioDuration || (activeTrack?.totalDuration || 60);
    const newTime = Math.min(maxDur, audioCurrentTime + seconds);
    setAudioCurrentTime(newTime);
    seekAudio(newTime);
    if (activeTrack) {
      const cue = activeTrack.cues.find((cu) => newTime >= cu.start && newTime <= cu.end);
      if (cue) {
        setActiveSpeakerTag(cue.speakerTag);
        setActiveTurnIndex(cue.turnIndex);
      }
    }
  };

  const handleRestartAudio = () => {
    setAudioCurrentTime(0);
    seekAudio(0);
    if (activeTrack && activeTrack.cues.length > 0) {
      if (activeTrack.cues[0]) setActiveSpeakerTag(activeTrack.cues[0].speakerTag);
      setActiveTurnIndex(0);
    }
  };

  const handleSelectQuestion = (q: ChoukaiQuestion, isLocked: boolean = false) => {
    if (isLocked) {
      const prevDay = (q.dayNumber || 1) - 1;
      setLockedAlert(
        language === 'en'
          ? `Audio ${q.title} is locked. Please complete DAY ${prevDay} first.`
          : language === 'my'
          ? `အသံ ${q.title} ပိတ်ထားဆဲဖြစ်ပါသည်။ ကျေးဇူးပြု၍ DAY ${prevDay} အရင်ပြီးဆုံးအောင်လုပ်ပါ။`
          : `Materi audio ${q.title} masih terkunci. Selesaikan DAY ${prevDay} terlebih dahulu.`
      );
      return;
    }
    stopAudio();
    setIsPlaying(false);
    setActiveSpeakerTag(null);
    setActiveTurnIndex(-1);
    setSelectedQuestionId(q.id);
    setSelectedChoice(null);
    setShowScript(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToList = () => {
    stopAudio();
    setIsPlaying(false);
    setActiveSpeakerTag(null);
    setActiveTurnIndex(-1);
    setSelectedQuestionId(null);
    setSelectedChoice(null);
    setShowScript(false);
    setAudioCurrentTime(0);
    setIsScrubbing(false);
  };

  const handleTogglePlay = () => {
    if (!activeQuestion) return;

    if (isPlaying) {
      pauseAudio();
      setIsPlaying(false);
      return;
    }

    if (isAudioPaused()) {
      resumeAudio(audioSpeed);
      setIsPlaying(true);
      return;
    }

    let startTime = audioCurrentTime;
    if (audioDuration > 0 && audioCurrentTime >= audioDuration - 0.5) {
      startTime = 0;
      setAudioCurrentTime(0);
    }

    // Play studio-quality multi-speaker audio track with genuine native voices (Nanami & Keita)
    playChoukaiDialogue(
      activeQuestion.audioScript,
      () => setIsPlaying(true),
      () => {
        setIsPlaying(false);
        setActiveSpeakerTag(null);
        setActiveTurnIndex(-1);
      },
      audioSpeed,
      (turnIdx, speaker) => {
        setActiveTurnIndex(turnIdx);
        setActiveSpeakerTag(speaker);
      },
      activeQuestion.id,
      (curTime, dur) => {
        if (!isScrubbing) {
          setAudioCurrentTime(curTime);
          if (dur > 0) {
            setAudioDuration(dur);
          }
        }
      },
      startTime
    );
  };

  const handleAnswerChoice = (choiceIndex: number) => {
    if (selectedChoice !== null || !activeQuestion) return;
    setSelectedChoice(choiceIndex);

    const isCorrect = choiceIndex === activeQuestion.correctChoiceIndex;
    const record: ChoukaiCompletedRecord = {
      selectedChoice: choiceIndex,
      isCorrect,
      completedAt: new Date().toISOString(),
    };

    const updated = { ...completedRecords, [activeQuestion.id]: record };
    setCompletedRecords(updated);
    try {
      localStorage.setItem(storageKey, JSON.stringify(updated));
    } catch (e) {}
    recordChoukaiCompletion(userKey, activeQuestion.id, isCorrect);
  };

  const handleNextQuestion = () => {
    if (nextQuestion) {
      handleSelectQuestion(nextQuestion, false);
    } else {
      handleBackToList();
    }
  };

  const handleResetCurrentQuestion = () => {
    stopAudio();
    setIsPlaying(false);
    setActiveSpeakerTag(null);
    setActiveTurnIndex(-1);
    setSelectedChoice(null);
    setShowScript(false);
    setAudioCurrentTime(0);
    setIsScrubbing(false);
  };

  const handleAskAiAboutChoukai = () => {
    if (!activeQuestion) return;
    const userChoiceText =
      selectedChoice !== null
        ? language === 'my'
          ? `အသုံးပြုသူ ရွေးချယ်မှု နံပါတ် ${selectedChoice + 1} (${selectedChoice === activeQuestion.correctChoiceIndex ? 'မှန်ပါသည်' : 'မှားပါသည်'})`
          : language === 'en'
          ? `User selected Choice ${selectedChoice + 1} (${selectedChoice === activeQuestion.correctChoiceIndex ? 'Correct' : 'Incorrect'})`
          : `Pengguna memilih nomor ${selectedChoice + 1} (${selectedChoice === activeQuestion.correctChoiceIndex ? 'Benar' : 'Salah'})`
        : language === 'my'
        ? 'အသုံးပြုသူ အဖြေမရွေးချယ်ရသေးပါ'
        : language === 'en'
        ? 'User has not selected an answer yet'
        : 'Pengguna belum menjawab';

    const langDirective =
      language === 'my'
        ? '[STRICT LANGUAGE DIRECTIVE: You must respond 100% in MYANMAR (BURMESE) language only. Absolutely NO Indonesian language allowed. Quotes from Japanese audio must be explained in Myanmar script.]\n\n'
        : language === 'en'
        ? '[STRICT LANGUAGE DIRECTIVE: You must respond 100% in ENGLISH language only. Absolutely NO Indonesian language allowed. Quotes from Japanese audio must be explained in English.]\n\n'
        : '[PETUNJUK BAHASA: Berikan penjelasan 100% dalam BAHASA INDONESIA. Kutipan dialog bahasa Jepang dijelaskan artinya dalam Bahasa Indonesia.]\n\n';

    const prompt =
      langDirective +
      (language === 'my'
        ? `အောက်ပါ JLPT ${currentLevel} နားထောင်မှု (${activeQuestion.typeLabel}) မေးခွန်းကို အသေးစိတ် ခွဲခြမ်းစိတ်ဖြာ ရှင်းပြပေးပါ:

ခေါင်းစဉ်: ${activeQuestion.title}
အခြေအနေ: ${activeQuestion.situation}

=== မေးခွန်း (質問) ===
${activeQuestion.questionPrompt}

=== မူရင်း ဂျပန်အသံဖိုင် စာသား ===
${activeQuestion.audioScript}

=== မြန်မာဘာသာပြန် ===
${activeQuestion.translation}

=== ရွေးချယ်စရာများ ===
${activeQuestion.choices.map((c, i) => `${i + 1}. ${c}`).join('\n')}

မှန်ကန်သော အဖြေ: ရွေးချယ်စရာ ${activeQuestion.correctChoiceIndex + 1} (${activeQuestion.choices[activeQuestion.correctChoiceIndex]})
အသုံးပြုသူ အခြေအနေ: ${userChoiceText}
အခြေခံ ရှင်းလင်းချက်: ${activeQuestion.explanation}

AI ဆရာအတွက် ညွှန်ကြားချက်:
၁။ ပထမစာကြောင်းတွင် မှန်ကန်သော အဖြေ (နံပါတ်နှင့် စာသား) ကို ရှင်းလင်းစွာ ဖော်ပြပါ။
၂။ အထောက်အထား: အထက်ပါ ဂျပန်စကားပြော စာသားမှ အဖြေကို သက်သေပြနိုင်သည့် စာကြောင်းကို blockquote (>) ဖြင့် ကိုးကားပြီး မြန်မာပြန်ဆိုချက် ပေးပါ။
၃။ အကြောင်းပြချက်နှင့် အဓိက သော့ချက်: စကားပြောဆိုမှု အစီအစဉ်နှင့် အဖြေမှန်ဖြစ်စေသော အဓိက နားထောင်မှု စကားလုံးများကို ရှင်းပြပါ။
၄။ လှည့်ကွက် သုံးသပ်ချက်: စာမေးပွဲဖြေဆိုသူကို လှည့်စားရန် ထည့်သွင်းထားသော အချက်များနှင့် အခြားရွေးချယ်စရာများ အဘယ်ကြောင့် မှားယွင်းရခြင်းကို ရှင်းပြပါ။`
        : language === 'en'
        ? `Analyze and break down this JLPT ${currentLevel} Listening (${activeQuestion.typeLabel}) question:

Title: ${activeQuestion.title}
Situation: ${activeQuestion.situation}

=== QUESTION (質問) ===
${activeQuestion.questionPrompt}

=== JAPANESE AUDIO SCRIPT ===
${activeQuestion.audioScript}

=== ENGLISH TRANSLATION ===
${activeQuestion.translation}

=== CHOICES ===
${activeQuestion.choices.map((c, i) => `${i + 1}. ${c}`).join('\n')}

Correct Answer: Choice ${activeQuestion.correctChoiceIndex + 1} (${activeQuestion.choices[activeQuestion.correctChoiceIndex]})
User Status: ${userChoiceText}
Explanation: ${activeQuestion.explanation}

INSTRUCTIONS FOR AI SENSEI:
1. Clearly state the correct answer number and choice text on the first line.
2. EVIDENCE: Quote the exact Japanese dialogue lines that determine the answer in blockquote (>), with English translation.
3. KEYWORDS & REASONING: Explain dialogue flow and key listening signals (transitions, tone changes, keigo expressions).
4. TRAPS: Dissect dialogue traps designed to mislead exam takers and explain why other choices are wrong.`
        : `Bedah dan analisis tuntas soal Choukai (Listening) JLPT ${currentLevel} tipe ${activeQuestion.typeLabel}:

Judul: ${activeQuestion.title}
Situasi: ${activeQuestion.situation}

=== PERTANYAAN (質問) ===
${activeQuestion.questionPrompt}

=== TRANSKRIP AUDIO DIALOG JEPANG ASLI ===
${activeQuestion.audioScript}

=== TERJEMAHAN BAHASA INDONESIA ===
${activeQuestion.translation}

=== PILIHAN JAWABAN ===
${activeQuestion.choices.map((c, i) => `${i + 1}. ${c}`).join('\n')}

Kunci Jawaban Sebenarnya: Pilihan ${activeQuestion.correctChoiceIndex + 1} (${activeQuestion.choices[activeQuestion.correctChoiceIndex]})
Status Pengguna: ${userChoiceText}
Penjelasan Dasar: ${activeQuestion.explanation}

INSTRUKSI WAJIB UNTUK AI SENSEI:
1. Sebutkan secara tegas di baris awal kunci jawaban yang benar (Nomor & Teks pilihan).
2. DAPAT DARI MANA JAWABANNYA: Kutip baris dialog percakapan asli bahasa Jepang di atas yang menjadi bukti penentu jawaban ke dalam format blockquote (>) beserta artinya dalam bahasa Indonesia.
3. ALASAN & KATA KUNCI: Jelaskan alur percakapan dan kata kunci pendengaran (seperti kata sambung, perubahan intonasi, ekspresi sopan/keigo) yang membuktikan kebenaran jawaban tersebut.
4. BEDAH JEBAKAN PERCAKAPAN: Ulas bagian mana dari dialog yang sengaja dipasang untuk mengecoh peserta ujian dan kenapa opsi lainnya salah.`);

    setAiInitialPrompt(prompt);
    setAiInitialDisplay(
      language === 'my'
        ? `နားထောင်မှု ${currentLevel}: ${activeQuestion.title}`
        : language === 'en'
        ? `Ask Choukai ${currentLevel}: ${activeQuestion.title}`
        : `Tanya Choukai ${currentLevel}: ${activeQuestion.title}`
    );
    setAiModalOpen(true);
  };

  // ─────────────────────────────────────────────────────────────
  // VIEW 1: Choukai Questions List
  // ─────────────────────────────────────────────────────────────
  if (!selectedQuestionId || !activeQuestion) {
    const completedCount = levelQuestions.filter((q) => completedRecords[q.id]).length;
    const correctCount = levelQuestions.filter((q) => completedRecords[q.id]?.isCorrect).length;

    return (
      <div className="space-y-4 animate-fade-in">
        {/* Banner Card */}
        <div className="card-washi rounded-2xl p-4 bg-gradient-to-br from-violet-50/70 via-white to-sky-50/30 border border-violet-100/80 shadow-xs">
          <div className="flex items-center space-x-2.5">
            <div className="w-10 h-10 rounded-xl bg-violet-600 text-white flex items-center justify-center shadow-xs shrink-0">
              <Headphones className="w-5 h-5 fill-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-bold font-mincho text-[#1E1B18]">
                  {t.modules.choukai.title}
                </h2>
                <span className="text-[10px] font-bold text-violet-700 bg-violet-50 px-2 py-0.5 rounded-full border border-violet-100">
                  {t.modules.choukai.completedSummary(completedCount, levelQuestions.length, correctCount)}
                </span>
              </div>
              <p className="text-[11px] text-[#78716C] leading-relaxed mt-0.5">
                {t.modules.choukai.desc(currentLevel)}
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
                ? 'bg-violet-600 text-white shadow-xs'
                : 'bg-white hover:bg-stone-50 text-[#78716C] border border-[#EFEAE2]'
            }`}
          >
            {t.modules.choukai.allQuestions(levelQuestions.length)}
          </button>
          <button
            onClick={() => setActiveCategory('kadai')}
            className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap transition-all shadow-2xs ${
              activeCategory === 'kadai'
                ? 'bg-violet-600 text-white shadow-xs'
                : 'bg-white hover:bg-stone-50 text-[#78716C] border border-[#EFEAE2]'
            }`}
          >
            課題理解 Kadai Rikai
          </button>
          <button
            onClick={() => setActiveCategory('point')}
            className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap transition-all shadow-2xs ${
              activeCategory === 'point'
                ? 'bg-violet-600 text-white shadow-xs'
                : 'bg-white hover:bg-stone-50 text-[#78716C] border border-[#EFEAE2]'
            }`}
          >
            ポイント理解 Point Rikai
          </button>
          <button
            onClick={() => setActiveCategory('sokuji')}
            className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap transition-all shadow-2xs ${
              activeCategory === 'sokuji'
                ? 'bg-violet-600 text-white shadow-xs'
                : 'bg-white hover:bg-stone-50 text-[#78716C] border border-[#EFEAE2]'
            }`}
          >
            即時応答 Sokuji Outou
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

        {/* List of Choukai Exercises */}
        <div className="space-y-3">
          {displayedQuestions.map((item) => {
            const record = completedRecords[item.id];
            const isCompleted = !!record;
            const prevQ = levelQuestions.find(
              (q) => (q.dayNumber || 1) === (item.dayNumber || 1) - 1
            );
            const isLocked =
              (item.dayNumber || 1) > 1 && prevQ
                ? !completedRecords[prevQ.id]
                : false;
            const isToday = !isCompleted && !isLocked;

            return (
              <div
                key={item.id}
                onClick={() => handleSelectQuestion(item, isLocked)}
                className={`card-washi rounded-2xl p-4 border cursor-pointer transition-all flex flex-col justify-between ${
                  isLocked
                    ? 'bg-stone-50/80 border-dashed border-stone-300 opacity-75 hover:border-stone-400'
                    : isToday
                    ? 'card-washi-hover border-violet-300 ring-2 ring-violet-500/10 bg-white'
                    : 'card-washi-hover border-[#EFEAE2] bg-white'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-1 pr-2 flex-1">
                    <div className="flex items-center space-x-2 flex-wrap gap-y-1">
                      {item.dayNumber && (
                        <span
                          className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full border ${
                            isLocked
                              ? 'text-stone-500 bg-stone-100 border-stone-200'
                              : 'text-violet-700 bg-violet-50 border-violet-200'
                          }`}
                        >
                          DAY {item.dayNumber}
                        </span>
                      )}
                      <span className="text-[10px] font-bold text-violet-700 bg-violet-50 px-2 py-0.5 rounded-full border border-violet-100">
                        {item.typeLabel}
                      </span>
                      <span className="text-[11px] text-[#A8A29E] flex items-center space-x-1">
                        <Radio className="w-3 h-3 text-violet-500" />
                        <span>{t.modules.choukai.nativeAudio}</span>
                      </span>

                      {/* Locked Badge */}
                      {isLocked && (
                        <span className="text-[10px] font-bold text-stone-500 bg-stone-100 px-2 py-0.5 rounded-full border border-stone-300 inline-flex items-center space-x-1">
                          <Lock className="w-3 h-3" />
                          <span>{t.modules.choukai.lockedBadge((item.dayNumber || 1) - 1)}</span>
                        </span>
                      )}

                      {/* Today Target Badge */}
                      {isToday && (
                        <span className="text-[10px] font-bold text-violet-700 bg-violet-100/70 px-2 py-0.5 rounded-full border border-violet-300 inline-flex items-center space-x-1 animate-pulse">
                          <span>{t.modules.choukai.todayTargetBadge}</span>
                        </span>
                      )}

                      {/* Completed Badge */}
                      {record && (
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full border inline-flex items-center space-x-1 ${
                            record.isCorrect
                              ? 'text-emerald-700 bg-emerald-50 border-emerald-200'
                              : 'text-amber-700 bg-amber-50 border-amber-200'
                          }`}
                        >
                          {record.isCorrect ? (
                            <>
                              <Check className="w-3 h-3" />
                              <span>{t.modules.choukai.correctlyAnswered}</span>
                            </>
                          ) : (
                            <>
                              <RotateCcw className="w-3 h-3" />
                              <span>{t.modules.choukai.needsPractice}</span>
                            </>
                          )}
                        </span>
                      )}
                    </div>

                    <h3 className={`font-bold text-sm pt-0.5 ${isLocked ? 'text-stone-500' : 'text-[#1E1B18]'}`}>
                      {item.title}
                    </h3>

                    <p className="text-xs text-[#78716C] line-clamp-1">
                      {item.situation}
                    </p>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-xl border flex items-center justify-center shrink-0 mt-1 ${
                      isLocked
                        ? 'bg-stone-100 border-stone-200 text-stone-400'
                        : 'bg-[#FAF8F5] border-[#EFEAE2] text-[#78716C]'
                    }`}
                  >
                    {isLocked ? <Lock className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
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
  // VIEW 2: Active Choukai Audio Session
  // ─────────────────────────────────────────────────────────────
  const isAnswered = selectedChoice !== null;
  const isChoiceCorrect = isAnswered && selectedChoice === activeQuestion.correctChoiceIndex;

  return (
    <>
      <div className="space-y-4 animate-fade-in pb-16">
        {/* Navigation Bar */}
        <div className="flex items-center justify-between px-1">
          <button
            onClick={handleBackToList}
            className="flex items-center space-x-1 text-xs font-bold text-[#57534E] hover:text-[#1E1B18] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t.modules.choukai.selectQuestion}</span>
          </button>

          <button
            onClick={handleAskAiAboutChoukai}
            className="inline-flex items-center space-x-1 text-xs font-bold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 px-2.5 py-1 rounded-full border border-indigo-200 transition-colors shadow-2xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>{t.modules.choukai.askAiBtn}</span>
          </button>
        </div>

        {/* Audio Player Card */}
        <div className="card-washi rounded-2xl p-6 border border-violet-100/90 bg-gradient-to-br from-violet-50/50 via-white to-indigo-50/20 text-center space-y-4 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-violet-700 bg-violet-50 px-2.5 py-0.5 rounded-full border border-violet-100">
              {activeQuestion.typeLabel}
            </span>

            {/* Speed Selector Pills (Smooth, Instant Rate Adjustment without Audio Replay) */}
            <div className="flex items-center space-x-1 bg-white/80 p-0.5 rounded-full border border-stone-200">
              {[
                { val: 1.0, label: '1.0x' },
                { val: 1.15, label: '1.15x' },
                { val: 1.25, label: '1.25x' },
              ].map((spd) => (
                <button
                  key={spd.val}
                  onClick={() => {
                    setAudioSpeed(spd.val);
                    setChoukaiPlaybackSpeed(spd.val);
                  }}
                  className={`px-2 py-0.5 rounded-full text-[10px] font-bold transition-all ${
                    audioSpeed === spd.val
                      ? 'bg-violet-600 text-white shadow-2xs'
                      : 'text-stone-500 hover:text-stone-900'
                  }`}
                  title={spd.val > 1.0 ? (language === 'my' ? 'နားထောင်မှု လေ့ကျင့်ရန် မြန်နှုန်းမြင့်' : language === 'en' ? 'Fast pace to train listening reflexes' : 'Tempo cepat untuk melatih respon telinga tanpa ngantuk') : (language === 'my' ? 'ပုံမှန် မြန်နှုန်း' : language === 'en' ? 'Normal tempo' : 'Tempo normal')}
                >
                  {spd.label}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Player Controls: -5s Rewind, Play/Pause, +5s Skip */}
          <div className="pt-1 pb-2 flex flex-col items-center space-y-3">
            <div className="flex items-center justify-center space-x-5">
              {/* Rewind 5s Button */}
              <button
                type="button"
                onClick={() => handleJumpBack(5)}
                className="w-11 h-11 rounded-full bg-white hover:bg-stone-50 text-stone-700 hover:text-stone-900 border border-stone-200 flex flex-col items-center justify-center transition-all shadow-xs active:scale-95 cursor-pointer group"
                title={t.modules.choukai.rewindTitle}
              >
                <RotateCcw className="w-4 h-4 text-violet-600 group-hover:scale-110 transition-transform" />
                <span className="text-[9px] font-extrabold text-stone-600 -mt-0.5">-5s</span>
              </button>

              {/* Big Central Play/Pause Button */}
              <button
                type="button"
                onClick={handleTogglePlay}
                className={`w-18 h-18 rounded-full flex items-center justify-center transition-all shadow-lg active:scale-95 cursor-pointer ${
                  isPlaying
                    ? 'bg-rose-600 text-white animate-pulse ring-4 ring-rose-200'
                    : 'bg-violet-600 hover:bg-violet-700 text-white ring-4 ring-violet-100'
                }`}
                title={isPlaying ? t.modules.choukai.pauseTitle : t.modules.choukai.playTitle}
              >
                {isPlaying ? (
                  <Pause className="w-7 h-7 fill-white" />
                ) : (
                  <Play className="w-7 h-7 fill-white ml-1" />
                )}
              </button>

              {/* Forward 5s Button */}
              <button
                type="button"
                onClick={() => handleJumpForward(5)}
                className="w-11 h-11 rounded-full bg-white hover:bg-stone-50 text-stone-700 hover:text-stone-900 border border-stone-200 flex flex-col items-center justify-center transition-all shadow-xs active:scale-95 cursor-pointer group"
                title={t.modules.choukai.forwardTitle}
              >
                <RotateCw className="w-4 h-4 text-violet-600 group-hover:scale-110 transition-transform" />
                <span className="text-[9px] font-extrabold text-stone-600 -mt-0.5">+5s</span>
              </button>
            </div>

            {/* Speaker Tag or Status */}
            {isPlaying && activeSpeakerTag ? (
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-950/70 text-violet-900 dark:text-violet-200 text-xs font-bold animate-pulse shadow-2xs border border-violet-200 dark:border-violet-800">
                <Volume2 className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
                <span>{t.modules.choukai.speaking(getSpeakerDisplayName(activeSpeakerTag))}</span>
              </div>
            ) : (
              <p className="text-xs font-bold text-[#1E1B18] dark:text-slate-200">
                {isPlaying ? t.modules.choukai.playingAudio : (audioCurrentTime > 0 ? t.modules.choukai.pausedStatus : t.modules.choukai.tapToPlay)}
              </p>
            )}

            <p className="text-[11px] text-[#78716C] max-w-md mx-auto">
              {activeQuestion.situation}
            </p>
          </div>

          {/* Interactive Progress Slider & Scrubber */}
          <div className="bg-white/90 dark:bg-stone-800/80 p-3 rounded-xl border border-stone-200/80 dark:border-stone-700 shadow-2xs space-y-2">
            <div className="flex items-center justify-between text-[11px] font-mono font-bold text-stone-600 dark:text-stone-300 px-0.5">
              <span className="flex items-center space-x-1">
                <Radio className="w-3 h-3 text-violet-600 animate-pulse" />
                <span>{formatAudioTime(audioCurrentTime)}</span>
              </span>
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  onClick={handleRestartAudio}
                  className="text-[10px] font-bold text-violet-600 hover:text-violet-800 bg-violet-50 hover:bg-violet-100 px-1.5 py-0.5 rounded border border-violet-200 transition-colors cursor-pointer"
                  title={t.modules.choukai.restartTitle}
                >
                  {language === 'en' ? 'Replay' : language === 'my' ? 'ပြန်ဖွင့်' : 'Ulang'}
                </button>
                <span className="text-stone-400">/</span>
                <span>{formatAudioTime(audioDuration || (activeTrack?.totalDuration || 0))}</span>
              </div>
            </div>

            {/* Range Slider Track */}
            <div className="relative flex items-center group py-1">
              <input
                type="range"
                min={0}
                max={audioDuration || (activeTrack?.totalDuration || 60)}
                step={0.1}
                value={audioCurrentTime}
                onChange={handleScrubChange}
                onMouseDown={handleScrubStart}
                onTouchStart={handleScrubStart}
                onMouseUp={handleScrubEnd}
                onTouchEnd={handleScrubEnd}
                className="w-full h-2.5 rounded-full appearance-none cursor-pointer accent-violet-600 focus:outline-hidden transition-all"
                style={{
                  background: `linear-gradient(to right, #7C3AED 0%, #7C3AED ${
                    audioDuration > 0 ? (audioCurrentTime / audioDuration) * 100 : 0
                  }%, #E7E5E4 ${
                    audioDuration > 0 ? (audioCurrentTime / audioDuration) * 100 : 0
                  }%, #E7E5E4 100%)`,
                }}
                aria-label="Audio progress slider"
              />
            </div>

            <div className="flex items-center justify-between text-[10px] text-stone-500 dark:text-stone-400 px-0.5">
              <span>{t.modules.choukai.sliderHint}</span>
              <span className="font-semibold text-violet-700 dark:text-violet-400">
                {audioDuration > 0
                  ? `${Math.round((audioCurrentTime / audioDuration) * 100)}%`
                  : '0%'}
              </span>
            </div>
          </div>

          {/* Prompt Question */}
          <div className="p-3 bg-white rounded-xl border border-[#EFEAE2] text-left">
            <span className="text-[10px] font-bold text-[#A8A29E] uppercase tracking-wider block">
              {t.modules.choukai.promptLabel}
            </span>
            <p className="font-jp font-bold text-sm text-[#1E1B18] mt-0.5 whitespace-pre-line">
              {activeQuestion.questionPrompt}
            </p>
          </div>
        </div>

        {/* Multiple Choice Options */}
        <div className="space-y-2.5">
          <span className="text-[11px] font-bold text-[#78716C] px-1">
            {t.modules.choukai.chooseAnswer}
          </span>

          {activeQuestion.choices.map((choice, cIndex) => {
            const isSelected = selectedChoice === cIndex;
            const isThisCorrect = cIndex === activeQuestion.correctChoiceIndex;
            const isHighlightedCorrect = isAnswered && isThisCorrect;
            const isWrongSelected = isAnswered && isSelected && !isThisCorrect;

            return (
              <button
                key={cIndex}
                disabled={isAnswered}
                onClick={() => handleAnswerChoice(cIndex)}
                className={`w-full py-3.5 px-4 rounded-2xl text-left font-medium text-sm transition-all border flex items-center justify-between ${
                  isHighlightedCorrect
                    ? 'border-2 border-emerald-500 bg-emerald-50 text-emerald-900 font-bold shadow-xs'
                    : isWrongSelected
                    ? 'border-2 border-rose-500 bg-rose-50 text-rose-900 font-bold shadow-xs'
                    : isAnswered
                    ? 'bg-white/60 border-[#EFEAE2] text-[#A8A29E] opacity-60'
                    : 'bg-white hover:bg-[#FAF8F5] border-[#EFEAE2] text-[#1E1B18] shadow-2xs'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span
                    className={`w-5 text-center text-xs font-bold ${
                      isHighlightedCorrect
                        ? 'text-emerald-700'
                        : isWrongSelected
                        ? 'text-rose-700'
                        : 'text-[#A8A29E]'
                    }`}
                  >
                    {cIndex + 1}
                  </span>
                  <span className="font-jp text-sm sm:text-base">{choice}</span>
                </div>

                {isHighlightedCorrect && (
                  <div className="flex items-center space-x-1 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                    <Check className="w-3.5 h-3.5" />
                    <span>{t.modules.choukai.correct}</span>
                  </div>
                )}
                {isWrongSelected && (
                  <div className="flex items-center space-x-1 px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 text-xs font-bold">
                    <X className="w-3.5 h-3.5" />
                    <span>{t.modules.choukai.yourChoice}</span>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Detailed Explanation & Transcript when Answered */}
        {isAnswered && (
          <div className="card-washi rounded-2xl p-5 border border-[#EFEAE2] bg-white space-y-4 shadow-sm animate-slide-up">
            <div className="flex items-center justify-between border-b border-[#F2ECE3] pb-2.5">
              <div className="flex items-center space-x-2">
                <span className={`inline-flex items-center space-x-1 text-xs font-bold px-2.5 py-1 rounded-full ${
                  isChoiceCorrect
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                    : 'bg-rose-50 text-rose-700 border border-rose-200'
                }`}>
                  {isChoiceCorrect ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />}
                  <span>{isChoiceCorrect ? t.modules.choukai.answerCorrect : t.modules.choukai.answerIncorrect}</span>
                </span>
                {isChoiceCorrect && (
                  <span className="inline-flex items-center space-x-1 text-xs font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200 shadow-2xs">
                    <Zap className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    <span>+20 EXP</span>
                  </span>
                )}
              </div>

              <button
                onClick={() => setShowScript(!showScript)}
                className="text-xs font-bold text-violet-700 bg-violet-50 hover:bg-violet-100 px-3 py-1 rounded-full border border-violet-200 transition-colors"
              >
                {showScript ? t.modules.choukai.closeTranscript : t.modules.choukai.openTranscript}
              </button>
            </div>

            {/* Transcript Drawer */}
            {showScript && (
              <div className="p-3.5 bg-stone-50 dark:bg-[#0B0F19] rounded-xl border border-stone-200 dark:border-slate-800 text-xs space-y-2 animate-fade-in">
                <span className="font-bold text-[#1E1B18] dark:text-slate-100 block uppercase tracking-wider text-[10px]">
                  {t.modules.choukai.transcriptTitle}
                </span>
                <div className="space-y-1.5 pl-0.5">
                  {activeQuestion.audioScript.split('\n').filter(Boolean).map((line, idx) => {
                    const m = line.match(/^([^：:\s]+)[：:]\s*(.+)$/);
                    const tag = (m && m[1]) ? m[1].trim() : '';
                    const content = (m && m[2]) ? m[2].trim() : line;
                    const isTurnActive = isPlaying && activeTurnIndex === idx;

                    return (
                      <div
                        key={idx}
                        className={`p-2.5 rounded-xl transition-all border ${
                          isTurnActive
                            ? 'bg-violet-50 dark:bg-violet-950/60 border-violet-300 dark:border-violet-700 shadow-2xs'
                            : 'bg-white dark:bg-[#151D2E] border-stone-200/70 dark:border-slate-800'
                        }`}
                      >
                        <div className="flex items-start space-x-2">
                          {tag && (
                            <span
                              className={`text-[10px] font-bold px-2 py-0.5 rounded-md shrink-0 border ${
                                tag.includes('女') || tag.includes('母') || tag.includes('姉') || tag.includes('娘')
                                  ? 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/50 dark:text-rose-300 dark:border-rose-900'
                                  : tag.includes('男') || tag.includes('父') || tag.includes('兄') || tag.includes('田中') || tag.includes('部')
                                  ? 'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/50 dark:text-indigo-300 dark:border-indigo-900'
                                  : 'bg-stone-100 text-stone-700 border-stone-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700'
                              }`}
                            >
                              {getSpeakerDisplayName(tag)}
                            </span>
                          )}
                          <p className="font-jp text-xs sm:text-sm text-[#1E1B18] dark:text-slate-100 leading-relaxed flex-1">
                            {content}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="pt-2 border-t border-stone-200 dark:border-slate-800">
                  <span className="font-bold text-[#78716C] dark:text-slate-400 block uppercase tracking-wider text-[10px]">
                    {t.modules.choukai.translationTitle}
                  </span>
                  <p className="text-[#57534E] dark:text-slate-300 leading-relaxed whitespace-pre-line pl-1 pt-1">
                    {activeQuestion.translation}
                  </p>
                </div>
              </div>
            )}

            {/* Key Explanation */}
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-violet-900 bg-violet-50 px-2 py-0.5 rounded-md border border-violet-100 inline-block">
                {t.modules.choukai.understandingKey}
              </span>
              <p className="text-xs text-[#44403C] leading-relaxed pl-1">
                {activeQuestion.explanation}
              </p>
            </div>

            {/* Key Points */}
            <div className="p-3 bg-amber-50/80 rounded-xl border border-amber-200 space-y-1 text-xs text-amber-950">
              <div className="flex items-center space-x-1 font-bold text-amber-900">
                <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
                <span>{t.modules.choukai.examPoints}</span>
              </div>
              <ul className="list-disc pl-4 space-y-0.5 text-[11px]">
                {activeQuestion.keyPoints.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </div>

            {/* ACTION CARD: Lanjut Soal Berikutnya / Kembali ke Daftar */}
            <div className="pt-3 border-t border-[#F2ECE3] flex flex-col sm:flex-row gap-2">
              {nextQuestion ? (
                <button
                  onClick={handleNextQuestion}
                  className="flex-1 py-3 px-4 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-bold text-xs flex items-center justify-center space-x-1.5 shadow-sm active:scale-98 transition-all"
                >
                  <span>{t.modules.choukai.nextQuestion}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleBackToList}
                  className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center space-x-1.5 shadow-sm active:scale-98 transition-all"
                >
                  <Award className="w-4 h-4" />
                  <span>{t.modules.choukai.allFinished}</span>
                </button>
              )}

              <div className="flex gap-2">
                <button
                  onClick={handleResetCurrentQuestion}
                  className="py-3 px-3.5 rounded-xl border border-[#E5E0D8] hover:bg-[#FAF8F5] text-[#57534E] font-bold text-xs flex items-center justify-center space-x-1 transition-all"
                  title={t.modules.choukai.retryTitle}
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{t.modules.choukai.retry}</span>
                </button>

                <button
                  onClick={handleBackToList}
                  className="py-3 px-3.5 rounded-xl border border-[#E5E0D8] hover:bg-[#FAF8F5] text-[#57534E] font-bold text-xs flex items-center justify-center space-x-1 transition-all"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>{t.modules.choukai.questionList}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

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
