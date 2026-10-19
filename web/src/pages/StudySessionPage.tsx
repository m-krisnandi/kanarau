import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { deckApi, studyApi } from '@/services/api';
import type { QuizCard, QuizAnswer, SessionResult } from '@/types';
import { rateByTime } from '@/utils';
import { TanyaAiModal } from '@/components/TanyaAiModal';
import { KotobaDetailModal } from '@/components/KotobaDetailModal';
import { KanjiDetailView } from '@/components/KanjiDetailView';
import type { Kotoba } from '@/types';
import { useAuthStore } from '@/stores/authStore';
import { useMistakesStore } from '@/stores/mistakesStore';
import { useTranslation } from '@/stores/languageStore';
import { localizeQuizCard, localizeKotoba } from '@/locales/vocabularyTranslations';
import {
  ArrowLeft,
  Check,
  X,
  Zap,
  Lightbulb,
  Sparkles,
  ChevronRight,
  AlertCircle,
  Award,
  BookOpen,
} from 'lucide-react';

export const StudySessionPage: React.FC = () => {
  const { deckId } = useParams<{ deckId: string }>();
  const navigate = useNavigate();
  const { t, language } = useTranslation();
  const user = useAuthStore((state) => state.user);
  const storeLevel = useAuthStore((state) => state.currentLevel);
  const currentLevel = storeLevel || user?.current_level || 'N2';

  const [cards, setCards] = useState<QuizCard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [cardStartTime, setCardStartTime] = useState<number>(Date.now());
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [loading, setLoading] = useState(true);

  // Tanya AI modal state
  const [aiModalOpen, setAiModalOpen] = useState(false);
  const [aiInitialPrompt, setAiInitialPrompt] = useState('');
  const [aiInitialDisplay, setAiInitialDisplay] = useState('');
  const [selectedKotobaForDetail, setSelectedKotobaForDetail] = useState<Kotoba | null>(null);
  const [selectedKanjiChar, setSelectedKanjiChar] = useState<string | null>(null);
  const [deckTitle, setDeckTitle] = useState<string>("");

  useEffect(() => {
    async function loadCards() {
      try {
        const id = deckId || '1';
        const [cardsRes, deckRes] = await Promise.allSettled([
          deckApi.getCards(id),
          deckApi.get(id),
        ]);
        if (cardsRes.status === 'fulfilled' && cardsRes.value.data && cardsRes.value.data.length > 0) {
          const sessionCards = cardsRes.value.data.slice(0, 15);
          setCards(sessionCards);
          setCardStartTime(Date.now());
        }
        if (deckRes.status === 'fulfilled' && deckRes.value.data?.name) {
          setDeckTitle(deckRes.value.data.name);
        } else {
          setDeckTitle(`DAY ${id} ${currentLevel}`);
        }
      } catch (err) {
        console.error('Error loading cards', err);
      } finally {
        setLoading(false);
      }
    }
    loadCards();
  }, [deckId]);

  const rawCurrentCard = cards[currentIndex];
  const currentCard = rawCurrentCard ? localizeQuizCard(rawCurrentCard, language) : null;
  const lastAnswer = answers[answers.length - 1];
  const isLastAnswerCorrect = lastAnswer?.is_correct;

  const handleSelectChoice = (choice: string) => {
    if (isAnswered || !currentCard) return;

    const responseTimeMs = Date.now() - cardStartTime;
    const isCorrect = choice === currentCard.correct_answer;
    const rating = rateByTime(responseTimeMs, isCorrect);

    const answer: QuizAnswer = {
      card_id: currentCard.id,
      kotoba_id: currentCard.kotoba.id,
      selected_answer: choice,
      correct_answer: currentCard.correct_answer,
      is_correct: isCorrect,
      response_time_ms: responseTimeMs,
      rating,
    };

    // Record mistake to store so Tanya AI suggestions adapt to user's real weaknesses
    if (!isCorrect) {
      useMistakesStore.getState().recordMistake({
        kanji: currentCard.kotoba.kanji || currentCard.kotoba.hiragana,
        hiragana: currentCard.kotoba.hiragana,
        meaning: currentCard.kotoba.meaning,
        level: currentCard.kotoba.jlpt_level || currentLevel,
        wrongAnswer: choice,
        correctAnswer: currentCard.correct_answer,
      });
    }

    setSelectedChoice(choice);
    setIsAnswered(true);
    setAnswers((prev) => [...prev, answer]);
  };

  const handleNext = useCallback(() => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedChoice(null);
      setIsAnswered(false);
      setShowHint(false);
      setCardStartTime(Date.now());
    } else {
      finishSession();
    }
  }, [currentIndex, cards.length]);

  // Keyboard shortcut: Press Enter or Space to go Next when answered
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isAnswered && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault();
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAnswered, handleNext]);

  const finishSession = async () => {
    setIsFinished(true);
    const correctCount = answers.filter((a) => a.is_correct).length;
    const totalTimeMs = answers.reduce((sum, a) => sum + a.response_time_ms, 0);
    const accuracy = cards.length > 0 ? Math.round((correctCount / cards.length) * 100) : 0;
    const xpGained = correctCount * 10 + 20;

    const result: SessionResult = {
      deck_id: deckId,
      total_cards: cards.length,
      correct_count: correctCount,
      accuracy_percent: accuracy,
      total_time_ms: totalTimeMs,
      xp_gained: xpGained,
      answers,
    };

    try {
      await studyApi.submitSession(result);
    } catch (err) {
      console.error('Failed to submit session to backend', err);
    }
  };

  const handleAskAiAboutCurrent = () => {
    if (!currentCard) return;
    const word = currentCard.kotoba.kanji || currentCard.kotoba.hiragana;
    const reading = currentCard.kotoba.hiragana;
    const cardLevel = currentCard.kotoba.jlpt_level || currentLevel;
    const prompt = language === 'my'
      ? `JLPT ${cardLevel} ဝေါဟာရ "${word}" (${reading}) အကြောင်းကို အကျဉ်းချုပ်ရှင်းပြပါ။ သုံးစွဲပုံ အဓိပ္ပာယ်၊ JLPT အဓိကအချက်များ၊ လက်တွေ့ကျသော ဥပမာစာကြောင်း ၁ ကြောင်းနှင့် စာမေးပွဲလှည့်ကွက်များကို ရှင်းပြပါ။`
      : language === 'en'
      ? `Briefly explain the JLPT ${cardLevel} vocabulary "${word}" (${reading}). Provide usage nuances, JLPT key collocations, 1 practical example sentence with translation, and exam tips.`
      : `Jelaskan secara ringkas kosakata "${word}" (${reading}) untuk JLPT ${cardLevel}. Berikan nuansa pemakaian, kunci JLPT (pasangan kata / lawan kata), 1 contoh kalimat praktis beserta terjemahannya, dan trik ujian.`;
    setAiInitialPrompt(prompt);
    setAiInitialDisplay(language === 'my' ? `ဝေါဟာရ မေးမြန်းရန် (${cardLevel}) - ${word} (${reading})` : language === 'en' ? `Ask Vocabulary (${cardLevel}): ${word} (${reading})` : `Tanya kosakata ${cardLevel}: ${word} (${reading})`);
    setAiModalOpen(true);
  };

  const handleAskAiWhyWrong = () => {
    if (!currentCard || !selectedChoice) return;
    const word = currentCard.question;
    const cardLevel = currentCard.kotoba.jlpt_level || currentLevel;
    const prompt = language === 'my'
      ? `ကျွန်ုပ်သည် JLPT ${cardLevel} မေးခွန်း "${word}" ကို ဖြေဆိုခဲ့သည်။ ကျွန်ုပ်၏ ရွေးချယ်မှုမှာ "${selectedChoice}" ဖြစ်ပြီး မှန်ကန်သောအဖြေမှာ "${currentCard.correct_answer}" ဖြစ်သည်။ ကျွန်ုပ်ရွေးချယ်မှု အဘယ်ကြောင့် မှားယွင်းရသနည်း၊ အဓိပ္ပာယ်ကွဲပြားပုံနှင့် စာမေးပွဲအတွက် မှတ်သားနည်းကို တိုတိုရှင်းရှင်း ရှင်းပြပါ။`
      : language === 'en'
      ? `I answered a JLPT ${cardLevel} question about "${word}". I chose "${selectedChoice}", but the correct answer is "${currentCard.correct_answer}". Briefly explain why my choice was incorrect, the nuance difference, and memory tips for the exam.`
      : `Saya menjawab soal JLPT ${cardLevel} tentang "${word}". Pilihan saya "${selectedChoice}", jawaban yang benar adalah "${currentCard.correct_answer}". Jelaskan secara singkat to-the-point mengapa pilihan saya keliru, apa perbedaan nuansanya, dan trik mengingatnya untuk ujian.`;
    setAiInitialPrompt(prompt);
    setAiInitialDisplay(language === 'my' ? `အဘယ်ကြောင့် မှားယွင်းသနည်း "${selectedChoice}"? အဖြေမှန် - "${currentCard.correct_answer}"` : language === 'en' ? `Why is "${selectedChoice}" wrong? Correct answer: "${currentCard.correct_answer}"` : `Kenapa keliru "${selectedChoice}"? Jawaban benar: "${currentCard.correct_answer}"`);
    setAiModalOpen(true);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center text-[#78716C] text-xs">{t.studySession.loading}</div>
      </div>
    );
  }

  if (cards.length === 0) {
    return (
      <div className="text-center py-16 space-y-4 max-w-sm mx-auto">
        <p className="text-sm text-[#78716C]">{t.studySession.empty}</p>
        <button
          onClick={() => navigate('/belajar')}
          className="px-5 py-2.5 bg-[#1E1B18] text-white rounded-xl text-xs font-bold cursor-pointer"
        >
          {t.studySession.backToBelajar}
        </button>
      </div>
    );
  }

  // --- RESULTS SCREEN ---
  if (isFinished) {
    const accuracy = Math.round(
      (answers.filter((a) => a.is_correct).length / cards.length) * 100
    );

    return (
      <div className="space-y-5 pb-24 max-w-md mx-auto animate-fade-in pt-1">
        {/* Header */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate('/belajar')}
            className="flex items-center space-x-1.5 text-xs font-bold text-[#57534E] hover:text-[#1E1B18] cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-mincho">{t.common.back}</span>
          </button>
          <span className="text-xs font-bold text-[#1E1B18] font-mincho">{t.studySession.resultsTitle}</span>
          <div className="w-12" />
        </div>

        {/* Celebration Banner Card */}
        <div className="card-washi rounded-2xl p-6 text-center space-y-2 border border-[#EFEAE2] shadow-xs">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-700 shadow-2xs">
            <Award className="w-7 h-7" />
          </div>
          <h2 className="text-lg font-bold font-mincho text-[#1E1B18]">{t.studySession.sessionFinished}</h2>
          <p className="text-xs text-[#78716C]">
            {t.studySession.retentionTip}
          </p>

          <div className="flex items-center justify-center space-x-3 pt-2">
            <span className="text-3xl font-extrabold text-emerald-600 font-mincho">
              {accuracy}%
            </span>
            <span className="text-xs font-bold text-indigo-800 bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-200 flex items-center space-x-1">
              <Zap className="w-3.5 h-3.5 text-indigo-600 fill-indigo-600" />
              <span>+30 EXP</span>
            </span>
          </div>
        </div>

        {/* Breakdown List */}
        <div className="space-y-2">
          <p className="text-[11px] font-bold text-[#A8A29E] uppercase tracking-wider px-1">
            {t.studySession.answerBreakdown(answers.length)}
          </p>

          <div className="space-y-1.5">
            {answers.map((ans, idx) => {
              const matchedCard = cards[idx];
              const kotoba = matchedCard?.kotoba;
              const seconds = (ans.response_time_ms / 1000).toFixed(1);

              return (
                <div key={ans.card_id || idx}
                  onClick={() => kotoba && setSelectedKotobaForDetail(kotoba)}
                  className="card-washi card-washi-hover rounded-xl p-3 flex items-center justify-between border border-[#EFEAE2] cursor-pointer transition-all"
                  title={t.studySession.detailAndConjugation}
                >
                  <div className="space-y-0.5 pr-2">
                    <span className="font-jp font-bold text-[#1E1B18] text-sm">
                      {kotoba?.kanji || kotoba?.hiragana || ans.correct_answer}
                    </span>
                    <p className="text-xs text-[#78716C] line-clamp-1">
                      {kotoba?.meaning || ans.correct_answer}
                    </p>
                  </div>

                  <div className="shrink-0">
                    {ans.is_correct ? (
                      <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200/60">
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span>{t.studySession.correctWithTime(seconds)}</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-bold border border-rose-200/60">
                        <X className="w-3 h-3 text-rose-600" />
                        <span>{t.studySession.wrongWithTime(seconds)}</span>
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <button
            onClick={() => navigate('/belajar')}
            className="w-full py-3.5 bg-[#1E1B18] hover:bg-black text-white font-bold rounded-xl shadow-md transition-all active:scale-[0.99] text-xs cursor-pointer"
          >
            {t.studySession.backToDeckList}
          </button>
        </div>
      </div>
    );
  }

  // --- ACTIVE QUIZ SCREEN ---
  const currentPercent = ((currentIndex / cards.length) * 100).toFixed(2);
  const activeDeckTitle = deckTitle || `DAY ${deckId || '1'} ${currentLevel}`;

  const hintContent =
    currentCard?.kotoba?.notes ||
    (currentCard?.kotoba?.example_sentence
      ? (language === 'my'
          ? `ဥပမာ အသုံးပြုပုံ- ${currentCard.kotoba.example_sentence}\nအဓိပ္ပာယ်- ${currentCard.kotoba.example_sentence_meaning || ''}`
          : language === 'en'
          ? `Example Usage: ${currentCard.kotoba.example_sentence}\nMeaning: ${currentCard.kotoba.example_sentence_meaning || ''}`
          : `Contoh Penggunaan: ${currentCard.kotoba.example_sentence}\nTerjemahan: ${currentCard.kotoba.example_sentence_meaning || ''}`)
      : (language === 'my'
          ? 'ဤစကားလုံး၏ အဓိပ္ပာယ်ကို မှတ်မိရန် ခန်းဂျီးပုံစံနှင့် အရင်းခံဖွဲ့စည်းမှုကို သတိပြုပါ။'
          : language === 'en'
          ? 'Observe the kanji pattern and radicals to recall the meaning of this word.'
          : 'Perhatikan pola kanji dan radikal pembentuknya untuk mengingat makna kata ini.'));

  const directionLabel =
    currentCard?.direction === 'kanji_to_hiragana'
      ? t.studySession.pickHiragana
      : currentCard?.direction === 'kanji_to_meaning'
      ? t.studySession.pickMeaning
      : t.studySession.pickKanji;

  return (
    <>
      <div className="space-y-4 pb-28 max-w-md mx-auto">
        {/* Top Bar */}
        <div className="flex items-center justify-between pt-1 px-1">
          <button
            onClick={() => navigate('/belajar')}
            className="flex items-center space-x-1.5 text-xs font-bold text-[#44403C] hover:text-[#1E1B18] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-mincho text-sm">{t.common.back}</span>
          </button>

          <span className="text-base font-bold font-mincho text-[#1E1B18]">
            {t.studySession.pageTitle}
          </span>

          {/* Progress percent & deck tag */}
          <div className="text-right flex flex-col items-end">
            <div className="w-20 bg-[#EFEAE2] h-1.5 rounded-full overflow-hidden mb-1">
              <div
                className="bg-amber-500 h-full rounded-full transition-all duration-300"
                style={{ width: `${currentPercent}%` }}
              />
            </div>
            <span className="text-[10px] font-bold text-[#1E1B18] leading-none">
              {currentPercent}%
            </span>
            <span className="text-[9px] text-[#A8A29E] uppercase leading-tight font-medium">
              {activeDeckTitle}
            </span>
          </div>
        </div>

        {/* Main Question Container Card */}
        <div className="card-washi rounded-2xl p-6 sm:p-7 text-center relative border border-[#EFEAE2] shadow-xs space-y-3 bg-white">
          {/* Top Tag / Pill */}
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-rose-700 bg-rose-50/90 px-2.5 py-0.5 rounded-full border border-rose-200/60 shadow-2xs">
              {t.studySession.newKotobaBadge}
            </span>

            <span className="text-[10px] font-semibold text-[#A8A29E]">
              {currentIndex + 1} / {cards.length}
            </span>
          </div>

          {/* Center Huge Kanji */}
          <div className="py-2">
            <h1 className="text-4xl sm:text-5xl font-bold font-jp text-[#1E1B18] tracking-wider select-none leading-tight">
              {currentCard?.question}
            </h1>
            <p className="text-xs text-[#78716C] mt-2 font-medium">
              {directionLabel}
            </p>
          </div>

          {/* Hint & Tanya AI Action Buttons */}
          <div className="flex items-center justify-center space-x-2">
            <button
              onClick={() => setShowHint(!showHint)}
              className="inline-flex items-center space-x-1.5 text-xs font-semibold text-amber-800 hover:text-amber-900 bg-amber-50 hover:bg-amber-100 px-3 py-1 rounded-full border border-amber-200 transition-colors shadow-2xs cursor-pointer"
            >
              <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
              <span>{t.studySession.hint}</span>
            </button>

            <button
              onClick={handleAskAiAboutCurrent}
              className="inline-flex items-center space-x-1.5 text-xs font-semibold text-indigo-700 hover:text-indigo-800 bg-indigo-50 hover:bg-indigo-100 px-3 py-1 rounded-full border border-indigo-200 transition-colors shadow-2xs cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              <span>{t.studySession.askAi}</span>
            </button>
          </div>

          {/* Expanded Soft Amber Hint Box */}
          {showHint && (
            <div className="mt-3 p-3.5 bg-[#FFF9ED] border border-[#FDE68A] rounded-xl text-left text-xs text-[#92400E] leading-relaxed shadow-2xs animate-fade-in whitespace-pre-line font-jp">
              {hintContent}
            </div>
          )}
        </div>

        {/* Numbered Choices List 1, 2, 3, 4 */}
        <div className="space-y-2.5">
          {currentCard?.choices.map((choice, i) => {
            const choiceNumber = i + 1;
            const isSelected = selectedChoice === choice;
            const isCorrectAnswer = choice === currentCard.correct_answer;
            const isWrongSelected = isAnswered && isSelected && !isCorrectAnswer;
            const isHighlightedCorrect = isAnswered && isCorrectAnswer;

            return (
              <button
                key={choice + i}
                disabled={isAnswered}
                onClick={() => handleSelectChoice(choice)}
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
                  <span
                    className={`font-jp text-sm sm:text-base ${
                      isHighlightedCorrect
                        ? 'text-emerald-800'
                        : isWrongSelected
                        ? 'text-rose-800'
                        : 'text-[#1E1B18]'
                    }`}
                  >
                    {choice}
                  </span>
                </div>

                {/* Right Badge Icon */}
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

        {/* Detailed Correction Callout when Wrong */}
        {isAnswered && !isLastAnswerCorrect && currentCard && (
          <div className="p-3.5 bg-rose-50/80 border border-rose-200/90 rounded-2xl space-y-2 animate-fade-in shadow-2xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-rose-800">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span className="text-xs font-bold">{t.studySession.correctionTitle}</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <button
                  onClick={() => currentCard && setSelectedKotobaForDetail(currentCard.kotoba)}
                  className="inline-flex items-center space-x-1 text-[10px] font-bold text-stone-700 bg-white hover:bg-stone-50 px-2 py-0.5 rounded-full border border-stone-200 shadow-2xs transition-colors cursor-pointer"
                >
                  <BookOpen className="w-3 h-3 text-stone-600" />
                  <span>{t.studySession.detailAndConjugation}</span>
                </button>
                <button
                  onClick={handleAskAiWhyWrong}
                  className="inline-flex items-center space-x-1 text-[10px] font-bold text-indigo-700 bg-white hover:bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-200 shadow-2xs transition-colors cursor-pointer"
                >
                  <Sparkles className="w-3 h-3 text-indigo-600" />
                  <span>{t.studySession.askAi}</span>
                </button>
              </div>
            </div>

            <div className="text-xs text-rose-950 space-y-1">
              <p>
                {t.studySession.correctAnswerLabel}{' '}
                <span className="font-bold font-jp text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded-md border border-emerald-200">
                  {currentCard.correct_answer}
                </span>
              </p>
              <p className="text-[11px] text-[#57534E] leading-relaxed">
                {t.studySession.meaningLabel} <span className="font-semibold">{currentCard.kotoba.meaning}</span>
              </p>
              {currentCard.kotoba.notes && (
                <p className="text-[11px] text-[#78716C] font-jp bg-white/70 p-2 rounded-xl border border-rose-100">
                  {currentCard.kotoba.notes}
                </p>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Sticky Bottom Feedback Bar */}
      {isAnswered && (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#EFEAE2] shadow-lg animate-slide-up">
          <div className="max-w-md mx-auto px-4 py-3 flex items-center justify-between">
            <div>
              {isLastAnswerCorrect ? (
                <div className="flex items-center space-x-1.5 text-sm font-bold text-emerald-700">
                  <Check className="w-4 h-4" />
                  <span>{t.studySession.bottomCorrect}</span>
                </div>
              ) : (
                <div className="flex items-center space-x-1.5 text-sm font-bold text-rose-700">
                  <X className="w-4 h-4" />
                  <span>{t.studySession.bottomWrong}</span>
                </div>
              )}
            </div>

            <button
              onClick={handleNext}
              className="py-2.5 px-6 bg-[#1E1B18] hover:bg-black active:scale-95 text-white font-bold rounded-xl text-xs sm:text-sm flex items-center space-x-1 shadow-md transition-all cursor-pointer"
            >
              <span>{t.studySession.nextBtn}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Kotoba Detail & Conjugation Modal */}
      <KotobaDetailModal
        kotoba={selectedKotobaForDetail}
        onClose={() => setSelectedKotobaForDetail(null)}
        onViewKanji={(char) => setSelectedKanjiChar(char)}
      />

      {/* Kanji Detail Modal */}
      {selectedKanjiChar && (
        <KanjiDetailView
          character={selectedKanjiChar}
          onClose={() => setSelectedKanjiChar(null)}
        />
      )}

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
