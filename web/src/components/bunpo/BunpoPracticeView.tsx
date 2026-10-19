import React, { useState, useMemo } from 'react';
import type { BunpoQuestion, BunpoUnit } from '@/types/jlptModules';
import type { JLPTModuleLevel } from '@/types/jlptModules';
import { BUNPO_UNITS, BUNPO_QUESTIONS } from '@/data/bunpoData';
import { localizeBunpo } from '@/locales/moduleTranslations';
import {
  playNaturalJapaneseVoice,
  stopAudio,
} from '@/utils/audioPlayer';
import { TanyaAiModal } from '@/components/TanyaAiModal';
import { useAuthStore } from '@/stores/authStore';
import { useTranslation } from '@/stores/languageStore';
import {
  Layers,
  Sparkles,
  Check,
  X,
  Volume2,
  ChevronRight,
  ArrowLeft,
  RotateCcw,
  Star,
  BookOpen,
  HelpCircle,
  Lightbulb,
  Lock,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';

interface BunpoPracticeViewProps {
  currentLevel: JLPTModuleLevel;
}

function localizePattern(pattern: string, lang: string): string {
  if (pattern.includes('Susun Kalimat') || pattern.includes('Susunan Kalimat')) {
    if (lang === 'my') {
      if (pattern.includes('N1')) return '★ N1 အဆင့်မြင့် ဝါကျစီစဉ်မှု လေ့ကျင့်ခန်း';
      if (pattern.includes('N2')) return '★ N2 ကြယ်ပွင့် ဝါကျစီစဉ်မှု လေ့ကျင့်ခန်း';
      if (pattern.includes('N3')) return '★ N3 ကြယ်ပွင့် ဝါကျစီစဉ်မှု လေ့ကျင့်ခန်း';
      if (pattern.includes('N4')) return '★ N4 ကြယ်ပွင့် ဝါကျစီစဉ်မှု လေ့ကျင့်ခန်း';
      return '★ N5 ဝါကျအစီအစဉ် ပေါင်းစပ်လေ့ကျင့်ခန်း';
    }
    if (lang === 'en') {
      if (pattern.includes('N1')) return '★ N1 Complex Sentence Rearrangement';
      if (pattern.includes('N2')) return '★ N2 Star Sentence Rearrangement';
      if (pattern.includes('N3')) return '★ N3 Star Sentence Rearrangement';
      if (pattern.includes('N4')) return '★ N4 Star Sentence Rearrangement';
      return '★ N5 Star Sentence Rearrangement';
    }
    return pattern;
  }
  if (pattern.includes('Kausatif')) {
    if (lang === 'my') return '〜させる (စေခိုင်းပြကြိယာ)';
    if (lang === 'en') return '〜させる (Causative)';
    return '〜させる (Kausatif)';
  }
  if (pattern.includes('Pasif')) {
    if (lang === 'my') return '〜られる (ခံပြကြိယာ)';
    if (lang === 'en') return '〜られる (Passive)';
    return '〜られる (Pasif)';
  }
  if (pattern === 'Partikel で') {
    if (lang === 'my') return 'ဝိဘတ် で';
    if (lang === 'en') return 'Particle で';
    return 'Partikel で';
  }
  return pattern;
}

export const BunpoPracticeView: React.FC<BunpoPracticeViewProps> = ({ currentLevel }) => {
  const { t, language } = useTranslation();
  const user = useAuthStore((state) => state.user);
  const userKey = user?.id ? String(user.id) : (user?.email || "guest");
  const storageKey = `kanarau_bunpo_results_${userKey}`;
  const [completedUnits, setCompletedUnits] = useState<Record<string, boolean>>({});
  const [lockedAlert, setLockedAlert] = useState<string | null>(null);

  React.useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      setCompletedUnits(saved ? JSON.parse(saved) : {});
    } catch {
      setCompletedUnits({});
    }
  }, [storageKey]);
  const [selectedUnitId, setSelectedUnitId] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Selection question state
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  // Star question state: array of 4 indices or null
  const [placedSlots, setPlacedSlots] = useState<(number | null)[]>([null, null, null, null]);

  // Audio & AI state
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [aiModalOpen, setAiModalOpen] = useState(false);
  const [aiInitialPrompt, setAiInitialPrompt] = useState('');
  const [aiInitialDisplay, setAiInitialDisplay] = useState('');

  // Questions for the active unit
  const activeQuestions = useMemo(() => {
    if (!selectedUnitId) return [];
    return BUNPO_QUESTIONS.filter((q) => q.unitId === selectedUnitId);
  }, [selectedUnitId]);

  const currentQ: BunpoQuestion | undefined = activeQuestions[currentQuestionIndex];

  // Reset question state when moving to next question
  const resetQuestionState = () => {
    setSelectedChoice(null);
    setIsAnswered(false);
    setPlacedSlots([null, null, null, null]);
    stopAudio();
    setIsPlayingAudio(false);
  };

  const handleSelectUnit = (unit: BunpoUnit, isLocked: boolean) => {
    if (isLocked) {
      const prevDay = (unit.dayNumber || 1) - 1;
      setLockedAlert(
        language === "en"
          ? `Unit ${unit.title} is locked. Please complete DAY ${prevDay} first.`
          : language === "my"
          ? `ယူနစ် ${unit.title} ပိတ်ထားဆဲဖြစ်ပါသည်။ ကျေးဇူးပြု၍ DAY ${prevDay} အရင်ပြီးဆုံးအောင်လုပ်ပါ။`
          : `Unit ${unit.title} masih terkunci. Selesaikan DAY ${prevDay} terlebih dahulu.`
      );
      return;
    }
    setSelectedUnitId(unit.id);
    setCurrentQuestionIndex(0);
    resetQuestionState();
  };

  const handleBackToUnits = () => {
    stopAudio();
    setSelectedUnitId(null);
    resetQuestionState();
  };

  const handleFinishUnit = () => {
    if (selectedUnitId) {
      const updated = { ...completedUnits, [selectedUnitId]: true };
      setCompletedUnits(updated);
      try {
        localStorage.setItem(storageKey, JSON.stringify(updated));
      } catch (err) {
        console.error("Failed to save bunpo completion", err);
      }
    }
    handleBackToUnits();
  };

  // Selection Logic
  const handleAnswerSelection = (choice: string) => {
    if (isAnswered) return;
    setSelectedChoice(choice);
    setIsAnswered(true);
  };

  // Star Question Logic
  const handleChipClick = (partIndex: number) => {
    if (isAnswered) return;
    if (placedSlots.includes(partIndex)) return;
    const firstEmpty = placedSlots.indexOf(null);
    if (firstEmpty === -1) return;
    const nextSlots = [...placedSlots];
    nextSlots[firstEmpty] = partIndex;
    setPlacedSlots(nextSlots);
  };

  const handleSlotClick = (slotIndex: number) => {
    if (isAnswered) return;
    if (placedSlots[slotIndex] === null) return;
    const nextSlots = [...placedSlots];
    nextSlots[slotIndex] = null;
    setPlacedSlots(nextSlots);
  };

  const handleCheckStarAnswer = () => {
    if (placedSlots.includes(null) || isAnswered || !currentQ) return;
    setIsAnswered(true);
  };

  // Audio Handler
  const handlePlayAudio = (sentence: string) => {
    if (isPlayingAudio) {
      stopAudio();
      setIsPlayingAudio(false);
      return;
    }
    playNaturalJapaneseVoice(
      sentence,
      () => setIsPlayingAudio(true),
      () => setIsPlayingAudio(false)
    );
  };

  // AI Question Handler
  const handleAskAiAboutCurrent = () => {
    if (!currentQ) return;
    const prompt = language === 'my'
      ? `ကျွန်ုပ်သည် JLPT ${currentLevel} သဒ္ဒါ "${currentQ.pattern}" ကို လေ့လာနေပါသည်။\n\nမေးခွန်း:\n"${currentQ.prompt}"\n\nမှန်ကန်သော ဝါကျ: "${currentQ.fullSentence}" (${currentQ.translation}).\n\nအောက်ပါတို့ကို တိုတိုရှင်းရှင်း ရှင်းပြပါ:\n1. ${currentQ.pattern} ဝါကျပုံစံ၏ အဓိပ္ပာယ်နှင့် သုံးစွဲပုံ နားလည်မှု\n2. အဘယ်ကြောင့် ဤအဖြေ မှန်ကန်ရခြင်း အဓိကအချက်\n3. JLPT စာမေးပွဲတွင် မကြာခဏ တွေ့ရသော လှည့်ကွက်များ`
      : language === 'en'
      ? `I am studying JLPT ${currentLevel} grammar pattern "${currentQ.pattern}".\n\nQuestion:\n"${currentQ.prompt}"\n\nCorrect sentence: "${currentQ.fullSentence}" (${currentQ.translation}).\n\nExplain concisely and to the point:\n1. Meaning and nuance of pattern ${currentQ.pattern}\n2. Key reasons why this answer is correct\n3. Common traps in the JLPT exam`
      : `Saya sedang belajar tata bahasa (bunpo) JLPT ${currentLevel} untuk pola "${currentQ.pattern}".\n\nSoal:\n"${currentQ.prompt}"\n\nKalimat benar: "${currentQ.fullSentence}" (${currentQ.translation}).\n\nJelaskan secara ringkas to-the-point:\n1. Makna dan nuansa pola kalimat ${currentQ.pattern}\n2. Kunci mengapa jawaban tersebut tepat\n3. Jebakan yang sering muncul di JLPT`;
    setAiInitialPrompt(prompt);
    setAiInitialDisplay(
      language === 'my'
        ? `သဒ္ဒါ ${currentLevel} မေးမြန်းရန်: ${currentQ.pattern}`
        : language === 'en'
        ? `Ask Bunpo ${currentLevel}: ${currentQ.pattern}`
        : `Tanya Bunpo ${currentLevel}: ${currentQ.pattern}`
    );
    setAiModalOpen(true);
  };

  // ─── VIEW 1: UNIT LIST (Daftar Unit Bunpo) ─────────────────────────
  if (!selectedUnitId) {
    return (
      <div className="space-y-4 animate-fade-in">
        {/* Banner Card */}
        <div className="card-washi rounded-2xl p-4 bg-gradient-to-br from-indigo-50/70 via-white to-sky-50/30 border border-indigo-100/80 shadow-xs">
          <div className="flex items-center space-x-2.5">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-xs shrink-0">
              <Layers className="w-5 h-5 fill-white" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-sm font-bold font-mincho text-[#1E1B18]">
                  {t.modules.bunpo.title}
                </h2>
                <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-100">
                  {t.modules.bunpo.target(currentLevel)}
                </span>
              </div>
              <p className="text-[11px] text-[#78716C] leading-relaxed mt-0.5">
                {t.modules.bunpo.desc}
              </p>
            </div>
          </div>
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

        {/* Unit Cards List */}
        <div className="space-y-3">
          {BUNPO_UNITS.filter((u) => u.level === currentLevel)
            .sort((a, b) => (a.dayNumber || 1) - (b.dayNumber || 1))
            .map((rawUnit, _idx, allUnits) => {
              const unit = localizeBunpo(rawUnit, language);
              const isStarUnit = unit.id === 'unit_star' || unit.id.startsWith('unit_star');
              const isCompleted = !!completedUnits[unit.id];
              const prevUnit = allUnits.find(
                (u) => (u.dayNumber || 1) === (unit.dayNumber || 1) - 1
              );
              const isLocked =
                (unit.dayNumber || 1) > 1 && prevUnit
                  ? !completedUnits[prevUnit.id]
                  : false;
              const isToday = !isCompleted && !isLocked;

              return (
                <div
                  key={unit.id}
                  onClick={() => handleSelectUnit(unit, isLocked)}
                  className={`card-washi rounded-2xl p-4 border transition-all flex flex-col justify-between cursor-pointer ${
                    isLocked
                      ? 'border-[#E5DFD5] bg-[#F7F5F0]/60 opacity-75'
                      : isCompleted
                      ? 'border-emerald-200/90 bg-emerald-50/20 hover:border-emerald-300'
                      : isToday
                      ? 'border-indigo-200/90 bg-white ring-1 ring-indigo-200/50 shadow-xs hover:border-indigo-300'
                      : isStarUnit
                      ? 'border-amber-200/90 bg-gradient-to-r from-amber-50/50 via-white to-white'
                      : 'border-[#EFEAE2] bg-white hover:border-amber-300'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="space-y-1 pr-2">
                      <div className="flex items-center space-x-2 flex-wrap gap-y-1">
                        {unit.dayNumber && (
                          <span
                            className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full border ${
                              isLocked
                                ? 'bg-stone-100 text-stone-500 border-stone-200'
                                : isToday
                                ? 'text-indigo-700 bg-indigo-50 border-indigo-200'
                                : 'text-[#1E1B18] bg-stone-50 border-[#EFEAE2]'
                            }`}
                          >
                            DAY {unit.dayNumber}
                          </span>
                        )}

                        {isCompleted && (
                          <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 flex items-center space-x-1">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                            <span>
                              {language === 'en'
                                ? 'Completed'
                                : language === 'my'
                                ? 'ပြီးစီး'
                                : 'Selesai'}
                            </span>
                          </span>
                        )}

                        {isToday && (
                          <span className="text-[10px] font-extrabold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-200">
                            {language === 'en'
                              ? "Today's Target"
                              : language === 'my'
                              ? 'ယနေ့ပန်းတိုင်'
                              : 'Target Hari Ini'}
                          </span>
                        )}

                        {isLocked && (
                          <span className="text-[10px] font-bold text-stone-500 bg-stone-100 px-2 py-0.5 rounded-full border border-stone-200 flex items-center space-x-1">
                            <Lock className="w-3 h-3 text-stone-400" />
                            <span>
                              {language === 'en'
                                ? `Locked (DAY ${(unit.dayNumber || 1) - 1})`
                                : language === 'my'
                                ? 'သော့ခတ်ထားဆဲ'
                                : `Terkunci (DAY ${(unit.dayNumber || 1) - 1})`}
                            </span>
                          </span>
                        )}

                        {isStarUnit ? (
                          <span className="text-[10px] font-extrabold text-amber-800 bg-amber-100/90 px-2 py-0.5 rounded-full flex items-center space-x-1">
                            <Star className="w-3 h-3 text-amber-600 fill-amber-500" />
                            <span>{t.modules.bunpo.specialStar}</span>
                          </span>
                        ) : (
                          <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-100">
                            {unit.theme}
                          </span>
                        )}
                        <span className="text-[11px] text-[#A8A29E]">
                          {t.modules.bunpo.questionsCount(unit.questionsCount)}
                        </span>
                      </div>

                      <h3 className="font-bold text-sm text-[#1E1B18] pt-0.5">
                        {unit.title}
                      </h3>
                      <p className="text-xs text-[#78716C] leading-relaxed">
                        {unit.description}
                      </p>

                      {/* Pattern Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {unit.patterns.map((p, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 bg-[#FAF8F5] border border-[#EFEAE2] rounded-md font-jp text-[11px] font-semibold text-[#44403C]"
                          >
                            {localizePattern(p, language)}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="w-7 h-7 rounded-lg flex items-center justify-center text-[#A8A29E] shrink-0 mt-1">
                      {isLocked ? (
                        <Lock className="w-4 h-4 text-[#8C827A]" />
                      ) : isCompleted ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-[#A8A29E]" />
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

  // ─── VIEW 2: INTERACTIVE PRACTICE SCREEN ───────────────────────────
  if (!currentQ) {
    return (
      <div className="text-center py-12 space-y-3">
        <p className="text-xs text-[#78716C]">{language === 'my' ? 'ဤယူနစ်တွင် လေ့ကျင့်ရန် မေးခွန်းများ မရှိသေးပါ။' : language === 'en' ? 'This unit does not have practice questions yet.' : 'Unit ini belum memiliki soal latihan.'}</p>
        <button onClick={handleBackToUnits} className="px-4 py-2 bg-[#1E1B18] text-white rounded-xl text-xs font-bold cursor-pointer">
          {t.common.back}
        </button>
      </div>
    );
  }

  const isStar = currentQ.type === 'star';

  // Check if answer is correct
  let isAnswerCorrect = false;
  if (isAnswered) {
    if (isStar && currentQ.parts) {
      const chosenStarPartIndex = placedSlots[currentQ.starPosition!];
      const correctStarPartIdx = currentQ.correctOrder && currentQ.starPosition !== undefined
        ? currentQ.correctOrder[currentQ.starPosition]
        : currentQ.correctChoiceIndex;
      isAnswerCorrect = chosenStarPartIndex === correctStarPartIdx;
    } else {
      isAnswerCorrect = selectedChoice === currentQ.correctAnswer;
    }
  }

  const progressPercent = Math.round(((currentQuestionIndex + 1) / activeQuestions.length) * 100);

  return (
    <>
      <div className="space-y-4 animate-fade-in pb-16">
        {/* Navigation & Progress Bar */}
        <div className="flex items-center justify-between px-1">
          <button
            onClick={handleBackToUnits}
            className="flex items-center space-x-1 text-xs font-bold text-[#57534E] hover:text-[#1E1B18] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t.modules.bunpo.pickUnit}</span>
          </button>

          <div className="text-right flex flex-col items-end">
            <span className="text-xs font-bold text-[#1E1B18]">
              {t.modules.bunpo.questionProgress(currentQuestionIndex + 1, activeQuestions.length)}
            </span>
            <div className="w-20 bg-[#EFEAE2] h-1.5 rounded-full overflow-hidden mt-1">
              <div
                className="bg-indigo-600 h-full rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Question Header Card */}
        <div className="card-washi rounded-2xl p-5 border border-[#EFEAE2] shadow-xs space-y-3 bg-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {isStar ? (
                <span className="text-[10px] font-extrabold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200 flex items-center space-x-1">
                  <Star className="w-3 h-3 text-amber-600 fill-amber-500" />
                  <span>{t.modules.bunpo.orderStar}</span>
                </span>
              ) : (
                <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-100">
                  {localizePattern(currentQ.pattern, language)}
                </span>
              )}
            </div>

            {/* Tanya AI Sensei Button */}
            <button
              onClick={handleAskAiAboutCurrent}
              className="inline-flex items-center space-x-1.5 text-xs font-semibold text-indigo-700 hover:text-indigo-800 bg-indigo-50 hover:bg-indigo-100 px-3 py-1 rounded-full border border-indigo-200 transition-colors shadow-2xs cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              <span>{t.ai.title}</span>
            </button>
          </div>

          {/* Sentence Prompt */}
          <div className="py-2 text-left">
            <p className="text-[11px] text-[#78716C] font-semibold mb-1">
              {isStar
                ? t.modules.bunpo.orderInstruction
                : t.modules.bunpo.starInstruction}
            </p>
            <h2 className="text-lg sm:text-xl font-bold font-jp text-[#1E1B18] leading-relaxed select-none">
              {currentQ.prompt}
            </h2>
          </div>
        </div>

        {/* MODE 1: STAR QUESTION INTERACTIVE SLOTS */}
        {isStar && currentQ.parts && (
          <div className="space-y-3">
            {/* 4 Empty Slots */}
            <div className="card-washi rounded-2xl p-4 border border-[#EFEAE2] bg-[#FAF8F5] space-y-2">
              <span className="text-[10px] font-bold text-[#A8A29E] uppercase tracking-wider block">
                {t.modules.bunpo.orderInstruction}
              </span>

              <div className="grid grid-cols-4 gap-2">
                {[0, 1, 2, 3].map((slotIdx) => {
                  const placedPartIdx = placedSlots[slotIdx];
                  const hasWord = placedPartIdx !== null;
                  const isStarSlot = slotIdx === currentQ.starPosition;

                  return (
                    <button
                      key={slotIdx}
                      disabled={isAnswered}
                      onClick={() => handleSlotClick(slotIdx)}
                      className={`min-h-[58px] p-2 rounded-xl text-center flex flex-col items-center justify-center transition-all border cursor-pointer ${
                        hasWord
                          ? 'bg-white border-indigo-300 shadow-xs'
                          : isStarSlot
                          ? 'bg-amber-50/80 border-dashed border-2 border-amber-400'
                          : 'bg-stone-100/60 border-dashed border-2 border-stone-300'
                      }`}
                    >
                      <span className="text-[9px] font-bold text-[#A8A29E] flex items-center space-x-0.5">
                        {isStarSlot && <Star className="w-3 h-3 text-amber-500 fill-amber-500 inline mr-0.5" />}
                        <span>Slot {slotIdx + 1}</span>
                      </span>

                      {hasWord ? (
                        <span className="font-jp text-xs sm:text-sm font-bold text-indigo-900 mt-1 line-clamp-2">
                          {currentQ.parts![placedPartIdx!]}
                        </span>
                      ) : (
                        <span className="text-xs font-jp text-stone-400 font-medium mt-1">
                          {isStarSlot ? '★' : '___'}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Chips to pick from */}
            <div className="space-y-1.5">
              <div className="grid grid-cols-2 gap-2">
                {currentQ.parts.map((part, partIdx) => {
                  const isUsed = placedSlots.includes(partIdx);

                  return (
                    <button
                      key={partIdx}
                      disabled={isUsed || isAnswered}
                      onClick={() => handleChipClick(partIdx)}
                      className={`p-3 rounded-xl border text-center font-jp text-sm font-bold transition-all shadow-2xs cursor-pointer ${
                        isUsed
                          ? 'bg-stone-100 border-stone-200 text-stone-400 opacity-40 cursor-not-allowed'
                          : 'bg-white hover:bg-indigo-50/50 border-[#EFEAE2] hover:border-indigo-300 text-[#1E1B18] active:scale-95'
                      }`}
                    >
                      <span className="text-xs text-[#A8A29E] mr-1.5">({partIdx + 1})</span>
                      <span>{part}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Check Button for Star Question */}
            {!isAnswered && (
              <button
                disabled={placedSlots.includes(null)}
                onClick={handleCheckStarAnswer}
                className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white font-bold rounded-xl text-sm transition-all shadow-md active:scale-[0.99] mt-2 cursor-pointer"
              >
                {t.modules.bunpo.orderStar}
              </button>
            )}
          </div>
        )}

        {/* MODE 2: SELECTION QUESTION CHOICES */}
        {!isStar && (
          <div className="space-y-2.5">
            {currentQ.choices.map((choice, i) => {
              const choiceNumber = i + 1;
              const isSelected = selectedChoice === choice;
              const isCorrectAnswer = choice === currentQ.correctAnswer;
              const isHighlightedCorrect = isAnswered && isCorrectAnswer;
              const isWrongSelected = isAnswered && isSelected && !isCorrectAnswer;

              return (
                <button
                  key={choice + i}
                  disabled={isAnswered}
                  onClick={() => handleAnswerSelection(choice)}
                  className={`w-full py-3.5 px-4 rounded-2xl text-left font-medium text-sm transition-all border flex items-center justify-between active:scale-[0.99] cursor-pointer ${
                    isHighlightedCorrect
                      ? 'border-2 border-emerald-500 bg-emerald-50 text-emerald-900 font-bold shadow-xs'
                      : isWrongSelected
                      ? 'border-2 border-rose-500 bg-rose-50 text-rose-900 font-bold shadow-xs'
                      : isAnswered
                      ? 'bg-white/60 border-[#EFEAE2] text-[#A8A29E] opacity-60'
                      : 'bg-white hover:bg-[#FAF8F5] border-[#EFEAE2] text-[#1E1B18] shadow-2xs'
                  }`}
                >
                  <div className="flex items-center space-x-3.5">
                    <span
                      className={`w-5 text-center text-xs font-bold ${
                        isHighlightedCorrect
                          ? 'text-emerald-700'
                          : isWrongSelected
                          ? 'text-rose-700'
                          : 'text-[#A8A29E]'
                      }`}
                    >
                      {choiceNumber}
                    </span>
                    <span className="font-jp text-sm sm:text-base">{choice}</span>
                  </div>

                  {isHighlightedCorrect && (
                    <div className="flex items-center space-x-1.5 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                      <Check className="w-3.5 h-3.5" />
                      <span className="text-[10px]">{t.studySession.correctBadge}</span>
                    </div>
                  )}
                  {isWrongSelected && (
                    <div className="flex items-center space-x-1.5 px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 text-xs font-bold">
                      <X className="w-3.5 h-3.5" />
                      <span className="text-[10px]">{t.studySession.yourPickBadge}</span>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        )}

        {/* Feedback Section */}
        {isAnswered && (
          <div className="card-washi rounded-2xl p-5 border border-[#EFEAE2] space-y-3.5 bg-white shadow-xs animate-slide-up">
            <div className="flex items-center justify-between">
              <div>
                {isAnswerCorrect ? (
                  <span className="inline-flex items-center space-x-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    <Check className="w-3.5 h-3.5" />
                    <span>{t.studySession.bottomCorrect}</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center space-x-1 text-xs font-bold text-rose-700 bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">
                    <X className="w-3.5 h-3.5" />
                    <span>{t.studySession.bottomWrong}</span>
                  </span>
                )}
              </div>

              <button
                onClick={() => handlePlayAudio(currentQ.fullSentence)}
                className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all shadow-2xs cursor-pointer ${
                  isPlayingAudio
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200'
                }`}
              >
                <Volume2 className={`w-3.5 h-3.5 ${isPlayingAudio ? 'animate-pulse text-white' : 'text-indigo-600'}`} />
                <span>{isPlayingAudio ? t.modules.bunpo.playing : t.modules.bunpo.listenSentence}</span>
              </button>
            </div>

            {/* Full Assembled Japanese Sentence Callout */}
            <div className="p-3.5 bg-gradient-to-r from-indigo-50/80 to-purple-50/40 border-l-4 border-l-indigo-600 rounded-r-xl space-y-1">
              <span className="text-[10px] font-bold text-indigo-700 uppercase tracking-wider block">
                {t.modules.bunpo.fullSentenceLabel}
              </span>
              <p className="font-jp font-bold text-sm sm:text-base text-[#1E1B18] leading-relaxed">
                {currentQ.fullSentence}
              </p>
              <p className="text-xs text-[#57534E] pt-1">
                {currentQ.translation}
              </p>
            </div>

            {/* Connection Rule (Setsuzoku) */}
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-indigo-900 bg-indigo-50/80 px-2 py-0.5 rounded-md border border-indigo-100 inline-block">
                {t.modules.bunpo.formulaLabel}
              </span>
              <p className="text-xs text-[#44403C] font-semibold pl-1">
                {currentQ.setsuzoku}
              </p>
            </div>

            {/* Nuance & Reason */}
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-[#1E1B18] block">
                {t.modules.bunpo.keyExplanation}
              </span>
              <p className="text-xs text-[#57534E] leading-relaxed pl-1">
                {currentQ.nuanceExplanation}
              </p>
            </div>

            {/* Trap Notes */}
            {currentQ.trapNotes && (
              <div className="p-2.5 bg-amber-50/80 rounded-xl border border-amber-200 text-xs text-amber-900 leading-relaxed flex items-start space-x-2">
                <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block">{t.modules.bunpo.examTrap}</span>
                  <span>{currentQ.trapNotes}</span>
                </div>
              </div>
            )}

            {/* Next Question / Finish Button */}
            <div className="pt-2">
              {currentQuestionIndex < activeQuestions.length - 1 ? (
                <button
                  onClick={() => {
                    setCurrentQuestionIndex((prev) => prev + 1);
                    resetQuestionState();
                  }}
                  className="w-full py-3.5 bg-[#1E1B18] hover:bg-black text-white font-bold rounded-xl text-sm flex items-center justify-center space-x-1.5 shadow-md transition-all active:scale-[0.99] cursor-pointer"
                >
                  <span>{t.modules.bunpo.nextQuestion}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleFinishUnit}
                  className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-sm transition-all shadow-md active:scale-[0.99] cursor-pointer"
                >
                  {t.modules.bunpo.finishUnit}
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Tanya AI Modal */}
      <TanyaAiModal
        isOpen={aiModalOpen}
        onClose={() => setAiModalOpen(false)}
        initialPrompt={aiInitialPrompt}
        initialDisplayText={aiInitialDisplay}
      />
    </>
  );
};
