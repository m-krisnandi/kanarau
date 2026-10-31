import React, { useEffect, useState, useCallback, useRef } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { deckApi, studyApi, courseApi } from '@/services/api';
import type { QuizCard, QuizAnswer, SessionResult } from '@/types';
import { rateByTime } from '@/utils';
import { playUniversalAudio } from '@/utils/audioPlayer';
import { useCourseStore } from '@/stores/courseStore';
import { TanyaAiModal } from '@/components/TanyaAiModal';
import { KotobaDetailModal } from '@/components/KotobaDetailModal';
import { CourseCardDetailModal, type CourseCardDetailItem } from '@/components/CourseCardDetailModal';
import { KanjiDetailView } from '@/components/KanjiDetailView';
import type { Kotoba } from '@/types';
import { useAuthStore } from '@/stores/authStore';
import { useMistakesStore } from '@/stores/mistakesStore';
import { useTranslation } from '@/stores/languageStore';
import { localizeQuizCard, localizeKotoba } from '@/locales/vocabularyTranslations';
import { getCardHintDetails } from '@/utils/hintHelper';
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
  Trophy,
  RotateCcw,
  Volume2,
} from 'lucide-react';
import { LeaderboardModal } from '@/components/LeaderboardModal';
import { calculateUserLevel } from '@/utils/levelHelper';
import {
  recordLocalStudySession,
  getUserKey,
  getActiveStudySession,
  saveActiveStudySession,
  clearActiveStudySession,
} from '@/utils/userProgressHelper';

export const StudySessionPage: React.FC = () => {
  const { deckId } = useParams<{ deckId: string }>();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { t, language } = useTranslation();
  const user = useAuthStore((state) => state.user);
  const storeLevel = useAuthStore((state) => state.currentLevel);
  const currentLevel = storeLevel || user?.current_level || 'N2';
  const studyMode = searchParams.get('mode');
  const trackParam = searchParams.get('track');
  const { activeTrack: storeTrack, targetLanguage, activeLevel } = useCourseStore();
  const track = trackParam || storeTrack || 'JA';
  const isExamMode = studyMode === 'exam' || studyMode === 'diagnostic';

  const [cards, setCards] = useState<QuizCard[]>([]);
  const [initialCards, setInitialCards] = useState<QuizCard[]>([]);
  const [retryKotobaIds, setRetryKotobaIds] = useState<Set<number | string>>(new Set());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const answersRef = useRef<QuizAnswer[]>([]);
  const [cardStartTime, setCardStartTime] = useState<number>(Date.now());
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [loading, setLoading] = useState(true);
  const [resumedToast, setResumedToast] = useState<string | null>(null);

  // Tanya AI modal state
  const [aiModalOpen, setAiModalOpen] = useState(false);
  const [aiInitialPrompt, setAiInitialPrompt] = useState('');
  const [aiInitialDisplay, setAiInitialDisplay] = useState('');
  const [selectedKotobaForDetail, setSelectedKotobaForDetail] = useState<Kotoba | null>(null);
  const [selectedCourseItemForDetail, setSelectedCourseItemForDetail] = useState<CourseCardDetailItem | null>(null);
  const [selectedKanjiChar, setSelectedKanjiChar] = useState<string | null>(null);
  const [deckTitle, setDeckTitle] = useState<string>("");
  const [deckTotalCards, setDeckTotalCards] = useState<number>(0);
  const [earnedXp, setEarnedXp] = useState<number>(0);
  const [sessionAccuracy, setSessionAccuracy] = useState<number>(0);
  const [totalXpAfterSession, setTotalXpAfterSession] = useState<number | null>(null);
  const [leaderboardOpen, setLeaderboardOpen] = useState<boolean>(false);

  useEffect(() => {
    if (resumedToast) {
      const timer = setTimeout(() => setResumedToast(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [resumedToast]);

  useEffect(() => {
    async function loadCards() {
      try {
        const id = deckId || '1';
        const userKey = getUserKey(user);

        // 1. Check if there is an in-progress session to resume
        const activeSession = getActiveStudySession(userKey, id, studyMode);
        if (
          activeSession &&
          activeSession.cards &&
          activeSession.cards.length > 0 &&
          activeSession.currentIndex < activeSession.cards.length
        ) {
          setCards(activeSession.cards);
          setInitialCards(activeSession.initialCards || activeSession.cards);
          setCurrentIndex(activeSession.currentIndex);
          setAnswers(activeSession.answers || []);
          answersRef.current = activeSession.answers || [];
          setRetryKotobaIds(new Set(activeSession.retryKotobaIds || []));
          setDeckTotalCards(activeSession.totalCards);
          setCardStartTime(Date.now());
          setResumedToast(
            t.studySession.resumedSessionToast(activeSession.currentIndex + 1, activeSession.cards.length)
          );

          try {
            const deckRes = await deckApi.get(id);
            if (deckRes?.data?.name) {
              setDeckTitle(deckRes.data.name);
            } else {
              setDeckTitle(`DAY ${id} ${currentLevel}`);
            }
          } catch {
            setDeckTitle(`DAY ${id} ${currentLevel}`);
          }
          setLoading(false);
          return;
        }

        if (track !== 'JA') {
          const [cardsRes, decksRes] = await Promise.allSettled([
            courseApi.getCards(track, id, language),
            courseApi.getDecks(track, undefined, language),
          ]);
          if (cardsRes.status === 'fulfilled' && cardsRes.value?.data && cardsRes.value.data.length > 0) {
            const mappedCards: QuizCard[] = cardsRes.value.data.map((c) => ({
              id: c.id,
              kotoba_id: c.id,
              question: c.target_text,
              correct_answer: c.meaning,
              choices: c.choices && c.choices.length > 0 ? c.choices : [c.meaning],
              direction: c.item_type || 'vocab',
              kotoba: {
                id: c.id,
                kanji: c.target_text,
                hiragana: c.reading || '',
                meaning: c.meaning,
                jlpt_level: track as any,
                part_of_speech: c.item_type || 'vocab',
                example_sentence: c.example_sentence,
                example_sentence_meaning: c.example_meaning,
                notes: c.notes,
                isCourseItem: true,
                track_code: track,
                target_text: c.target_text,
                romanization: c.reading || '',
                item_type: c.item_type,
              } as any,
            }));
            setCards(mappedCards);
            setInitialCards(mappedCards);
            setDeckTotalCards(mappedCards.length);

            if (decksRes.status === 'fulfilled' && decksRes.value?.data) {
              const foundDeck = decksRes.value.data.find((d) => String(d.id) === String(id));
              if (foundDeck) {
                setDeckTitle(foundDeck.title || foundDeck.title_target);
              } else {
                setDeckTitle(`Deck ${id}`);
              }
            } else {
              setDeckTitle(`Deck ${id}`);
            }
            setLoading(false);
            return;
          }
        }

        const [cardsRes, deckRes] = await Promise.allSettled([
          deckApi.getCards(id, language),
          deckApi.get(id),
        ]);
        if (cardsRes.status === 'fulfilled' && cardsRes.value.data && cardsRes.value.data.length > 0) {
          const sanitizedCards = cardsRes.value.data.filter((card) => {
            if (!card || !card.question || !card.correct_answer) return false;
            const q = card.question.trim().toLowerCase();
            const a = card.correct_answer.trim().toLowerCase();
            if (q === a) return false;
            if (card.direction === 'kanji_to_hiragana' && !/[\u4e00-\u9faf]/.test(card.question)) {
              return false;
            }
            return true;
          });

           const deckWordCount = (deckRes.status === 'fulfilled' && deckRes.value.data?.kotoba_count)
             ? deckRes.value.data.kotoba_count
             : 30;
           setDeckTotalCards(deckWordCount);
          const maxCards = studyMode === 'exam' ? 30 : studyMode === 'diagnostic' ? 20 : deckWordCount;

          // Pick 1 card per unique kotoba first to ensure complete deck coverage
          const uniqueKotobaCards: typeof sanitizedCards = [];
          const seenKotobaIds = new Set<string | number>();
          for (const c of sanitizedCards) {
            const kId = c.kotoba.id;
            if (kId && !seenKotobaIds.has(kId)) {
              seenKotobaIds.add(kId);
              uniqueKotobaCards.push(c);
              if (uniqueKotobaCards.length >= maxCards) break;
            }
          }

          const sessionCards = uniqueKotobaCards.length > 0 ? uniqueKotobaCards : sanitizedCards.slice(0, maxCards);
          setCards(sessionCards);
          setInitialCards(sessionCards);
          setRetryKotobaIds(new Set());
          answersRef.current = [];
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
  }, [deckId, language, studyMode]);

  const rawCurrentCard = cards[currentIndex];
  const currentCard = rawCurrentCard ? localizeQuizCard(rawCurrentCard, language) : null;
  const lastAnswer = answers[answers.length - 1];
  const isLastAnswerCorrect = lastAnswer?.is_correct;

  const handleSelectChoice = (choice: string) => {
    if (isAnswered || !currentCard) return;

    const responseTimeMs = Date.now() - cardStartTime;
    const isCorrect = choice === currentCard.correct_answer;
    const rating = rateByTime(responseTimeMs, isCorrect);
    const kotobaId = currentCard.kotoba.id;

    const answer: QuizAnswer = {
      card_id: currentCard.id,
      kotoba_id: kotobaId,
      selected_answer: choice,
      correct_answer: currentCard.correct_answer,
      is_correct: isCorrect,
      response_time_ms: responseTimeMs,
      rating,
    };

    let updatedCards = cards;
    let updatedRetries = retryKotobaIds;

    // If answer is incorrect, record mistake and queue card for repetition until mastered
    if (!isCorrect) {
      updatedRetries = new Set(retryKotobaIds).add(kotobaId);
      setRetryKotobaIds(updatedRetries);

      useMistakesStore.getState().recordMistake({
        kotobaId: currentCard.kotoba.id,
        kanji: currentCard.kotoba.kanji || currentCard.kotoba.hiragana,
        hiragana: currentCard.kotoba.hiragana,
        meaning: currentCard.kotoba.meaning,
        level: currentCard.kotoba.jlpt_level || currentLevel,
        wrongAnswer: choice,
        correctAnswer: currentCard.correct_answer,
      });

      // Append retry card to queue so user must get it right before finishing
      if (rawCurrentCard) {
        const retryCard: QuizCard = {
          ...rawCurrentCard,
          id: `${rawCurrentCard.id}_retry_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
        };
        updatedCards = [...cards, retryCard];
        setCards(updatedCards);
      }
    }

    setSelectedChoice(choice);
    setIsAnswered(true);
    answersRef.current.push(answer);
    setAnswers((prev) => [...prev, answer]);

    const userKey = getUserKey(user);
    const pct = Math.round(((currentIndex + 1) / updatedCards.length) * 100);
    saveActiveStudySession(userKey, {
      deckId: String(deckId || 1),
      studyMode,
      currentIndex,
      totalCards: updatedCards.length,
      cards: updatedCards,
      initialCards,
      retryKotobaIds: Array.from(updatedRetries),
      answers: answersRef.current,
      percent: pct,
      timestamp: Date.now(),
    });
  };

  const finishSession = useCallback(async (sessionAnswers: QuizAnswer[] = answers) => {
    setIsFinished(true);
    const totalUniqueCards = initialCards.length > 0 ? initialCards.length : (cards.length > 0 ? cards.length : 15);
    const accuracy = 100;
    const xpGained = totalUniqueCards * 10 + 20;
    setSessionAccuracy(100);
    setEarnedXp(xpGained);

    // Clear in-progress active session now that session is completed
    const userKey = getUserKey(useAuthStore.getState().user);
    clearActiveStudySession(userKey, String(deckId || 1), studyMode);

    // Optimistically update total_xp in authStore immediately so results screen reflects it
    useAuthStore.setState((state) => {
      if (!state.user) return state;
      return {
        ...state,
        user: {
          ...state.user,
          total_xp: (state.user.total_xp || 0) + xpGained,
        },
      };
    });

    const effectiveAnswers = answersRef.current.length > 0
      ? answersRef.current
      : (sessionAnswers.length > 0 ? sessionAnswers : answers);
    const totalTimeMs = effectiveAnswers.reduce((sum, a) => sum + (a.response_time_ms || 3000), 0);
    const numericDeckId = (deckId && !isNaN(Number(deckId))) ? Number(deckId) : 1;

    // Submit the latest answer per unique word so retries update SRS correctly.
    const uniqueKotobaAnswers: QuizAnswer[] = [];
    const seenKotobas = new Set<number | string>();
    for (let i = effectiveAnswers.length - 1; i >= 0; i--) {
      const ans = effectiveAnswers[i]!;
      if (ans.kotoba_id && !seenKotobas.has(ans.kotoba_id)) {
        seenKotobas.add(ans.kotoba_id);
        uniqueKotobaAnswers.unshift({
          ...ans,
          is_correct: true,
        });
      }
    }

    const finalAnswers = uniqueKotobaAnswers.length > 0 ? uniqueKotobaAnswers : effectiveAnswers;

    const result: SessionResult = {
      deck_id: numericDeckId,
      total_cards: totalUniqueCards,
      correct_count: totalUniqueCards,
      accuracy_percent: 100,
      total_time_ms: totalTimeMs,
      xp_gained: xpGained,
      answers: finalAnswers,
    };

    // Save immediate local progress & daily activity so streak & stats never show 0%
    try {
      const localUser = useAuthStore.getState().user;
      const uKey = getUserKey(localUser);
      recordLocalStudySession(
        uKey,
        numericDeckId,
        totalUniqueCards,
        totalUniqueCards,
        totalTimeMs,
        deckTotalCards || totalUniqueCards
      );
    } catch {}

    try {
      await studyApi.submitSession(result);
      await useAuthStore.getState().fetchUser();
      setTotalXpAfterSession(useAuthStore.getState().user?.total_xp ?? null);
    } catch (err) {
      console.error('Failed to submit session to backend', err);
    }
  }, [answers, initialCards.length, cards.length, deckId, studyMode]);

  const handleNext = useCallback(() => {
    if (currentIndex < cards.length - 1) {
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);
      setSelectedChoice(null);
      setIsAnswered(false);
      setShowHint(false);
      setCardStartTime(Date.now());

      const userKey = getUserKey(user);
      const pct = Math.round((nextIdx / cards.length) * 100);
      saveActiveStudySession(userKey, {
        deckId: String(deckId || 1),
        studyMode,
        currentIndex: nextIdx,
        totalCards: cards.length,
        cards,
        initialCards,
        retryKotobaIds: Array.from(retryKotobaIds),
        answers: answersRef.current,
        percent: pct,
        timestamp: Date.now(),
      });
    } else {
      void finishSession();
    }
  }, [currentIndex, cards, initialCards, retryKotobaIds, deckId, studyMode, user, finishSession]);

  const handleBack = () => {
    if (currentIndex > 0 && !isFinished && cards.length > 0) {
      const userKey = getUserKey(user);
      const nextUnanswered = isAnswered ? Math.min(cards.length - 1, currentIndex + 1) : currentIndex;
      const pct = Math.round((nextUnanswered / cards.length) * 100);
      saveActiveStudySession(userKey, {
        deckId: String(deckId || 1),
        studyMode,
        currentIndex: nextUnanswered,
        totalCards: cards.length,
        cards,
        initialCards,
        retryKotobaIds: Array.from(retryKotobaIds),
        answers: answersRef.current,
        percent: pct,
        timestamp: Date.now(),
      });
    }
    navigate('/belajar');
  };

  const handleRestartSession = () => {
    if (window.confirm(t.studySession.confirmRestart)) {
      const userKey = getUserKey(user);
      clearActiveStudySession(userKey, String(deckId || 1), studyMode);
      setCurrentIndex(0);
      setSelectedChoice(null);
      setIsAnswered(false);
      setShowHint(false);
      setAnswers([]);
      answersRef.current = [];
      setRetryKotobaIds(new Set());
      setCards(initialCards);
      setCardStartTime(Date.now());
      setResumedToast(null);
    }
  };

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

  const handleAskAiAboutCurrent = () => {
    if (!currentCard) return;
    const word = currentCard.kotoba.kanji || currentCard.kotoba.hiragana || currentCard.question;
    const reading = currentCard.kotoba.hiragana || (currentCard.kotoba as any).romanization || '';
    const cardLevel = currentCard.kotoba.jlpt_level || activeLevel || currentLevel;

    let prompt = '';
    let display = '';

    if (targetLanguage === 'id') {
      prompt = language === 'my'
        ? `အင်ဒိုနီးရှားဘာသာ (${activeLevel}) ဝေါဟာရ "${word}" အကြောင်းကို ရှင်းပြပေးပါ။\n၁။ အဓိပ္ပာယ်နှင့် သုံးစွဲပုံ (ဖော်မလ်/အလွတ်သဘော)\n၂။ ဝါကျဖွဲ့စည်းပုံ (S-P-O vs S-O-V): အင်ဒိုနီးရှားတွင် ကြိယာသည် ကံရှေ့တွင်လာပြီး မြန်မာစကားနှင့် အစီအစဉ် ပြောင်းပြန်ဖြစ်ပုံ\n၃။ လက်တွေ့ကျသော ဥပမာစာကြောင်း ၁ ကြောင်းနှင့် မြန်မာဘာသာပြန်\nကျေးဇူးပြု၍ JLPT သို့မဟုတ် ဂျပန်စာနှင့် ပတ်သက်သောအရာများ လုံးဝမထည့်ပါနှင့်။`
        : language === 'en'
        ? `Explain the Indonesian (${activeLevel}) word "${word}". Provide meaning, sentence structure breakdown (SPO order vs SOV), and 1 practical example with translation. Do not mention JLPT or Japanese.`
        : `Jelaskan secara ringkas kosakata Bahasa Indonesia (${activeLevel}) "${word}". Berikan nuansa pemakaian, analisis pola kalimat (SPO), dan 1 contoh praktis kalimat.`;
      display = language === 'my'
        ? `"${word}" ဝါကျဖွဲ့စည်းပုံ (S-P-O) နှင့် အဓိပ္ပာယ်`
        : language === 'en'
        ? `"${word}" Meaning & SPO Sentence Structure`
        : `Arti & Pola SPO "${word}"`;
    } else if (targetLanguage === 'my') {
      prompt = language === 'id'
        ? `Jelaskan kosakata / huruf Myanmar (${activeLevel}) "${word}". Berikan cara baca fonetik latin untuk orang Indonesia, arti, dan pola kalimat dasar Burma (S-O-V). Jangan sebutkan JLPT.`
        : language === 'en'
        ? `Explain the Burmese (${activeLevel}) word/letter "${word}". Provide romanized pronunciation, meaning, and SOV sentence pattern. Do not mention JLPT.`
        : `မြန်မာစကားလုံး "${word}" ၏ အဓိပ္ပာယ်၊ အသံထွက်နှင့် သုံးစွဲပုံကို ရှင်းပြပါ။`;
      display = language === 'id' ? `Tanya bahasa Myanmar: ${word}` : `Ask Burmese: ${word}`;
    } else {
      prompt = language === 'my'
        ? `JLPT ${cardLevel} ဝေါဟာရ "${word}" (${reading}) အကြောင်းကို အကျဉ်းချုပ်ရှင်းပြပါ။ သုံးစွဲပုံ အဓိပ္ပာယ်၊ JLPT အဓိကအချက်များ၊ လက်တွေ့ကျသော ဥပမာစာကြောင်း ၁ ကြောင်းနှင့် စာမေးပွဲလှည့်ကွက်များကို ရှင်းပြပါ။`
        : language === 'en'
        ? `Briefly explain the JLPT ${cardLevel} vocabulary "${word}" (${reading}). Provide usage nuances, JLPT key collocations, 1 practical example sentence with translation, and exam tips.`
        : `Jelaskan secara ringkas kosakata "${word}" (bacaan hiragana baku: "${reading}") untuk JLPT ${cardLevel}. Berikan nuansa pemakaian, kunci JLPT (pasangan kata / lawan kata), 1 contoh kalimat praktis beserta terjemahannya, dan trik ujian.`;
      display = language === 'my' ? `ဝေါဟာရ မေးမြန်းရန် (${cardLevel}) - ${word} (${reading})` : language === 'en' ? `Ask Vocabulary (${cardLevel}): ${word} (${reading})` : `Tanya kosakata ${cardLevel}: ${word} (${reading})`;
    }

    setAiInitialPrompt(prompt);
    setAiInitialDisplay(display);
    setAiModalOpen(true);
  };

  const handleAskAiWhyWrong = () => {
    if (!currentCard || !selectedChoice) return;
    const word = currentCard.question;
    const reading = currentCard.kotoba.hiragana || (currentCard.kotoba as any).romanization || '';
    const meaning = currentCard.kotoba.meaning;
    const cardLevel = currentCard.kotoba.jlpt_level || activeLevel || currentLevel;

    let prompt = '';
    let display = '';

    if (targetLanguage === 'id') {
      prompt = language === 'my'
        ? `ကျွန်ုပ်သည် အင်ဒိုနီးရှားဘာသာ (${activeLevel}) မေးခွန်း "${word}" (အဓိပ္ပာယ်: "${meaning}") ကို ဖြေဆိုခဲ့သည်။ ကျွန်ုပ်၏ ရွေးချယ်မှုမှာ "${selectedChoice}" ဖြစ်ပြီး မှန်ကန်သောအဖြေမှာ "${currentCard.correct_answer}" ဖြစ်သည်။ ကျွန်ုပ်ရွေးချယ်မှု အဘယ်ကြောင့် မှားယွင်းရသနည်း၊ အဓိပ္ပာယ်နှင့် ဝါကျဖွဲ့စည်းပုံ (S-P-O) ကွာခြားချက်ကို မြန်မာဘာသာဖြင့် တိုတိုရှင်းရှင်း ရှင်းပြပေးပါ။ (JLPT သို့မဟုတ် ဂျပန်စာနှင့် ပတ်သက်သောအရာများ လုံးဝမထည့်ပါနှင့်)`
        : language === 'en'
        ? `I answered an Indonesian (${activeLevel}) question about "${word}". I chose "${selectedChoice}", but the correct answer is "${currentCard.correct_answer}". Briefly explain why my choice was wrong and the usage/SPO word order difference.`
        : `Saya menjawab soal Bahasa Indonesia (${activeLevel}) tentang "${word}". Pilihan saya "${selectedChoice}", jawaban benar "${currentCard.correct_answer}". Jelaskan singkat mengapa pilihan saya keliru dan apa perbedaannya.`;
      display = language === 'my'
        ? `အဘယ်ကြောင့် မှားယွင်းသနည်း "${selectedChoice}"? အဖြေမှန် - "${currentCard.correct_answer}"`
        : language === 'en'
        ? `Why is "${selectedChoice}" wrong? Correct answer: "${currentCard.correct_answer}"`
        : `Kenapa keliru "${selectedChoice}"? Jawaban benar: "${currentCard.correct_answer}"`;
    } else if (targetLanguage === 'my') {
      prompt = language === 'id'
        ? `Saya menjawab soal bahasa Myanmar (${activeLevel}) "${word}". Pilihan saya "${selectedChoice}", jawaban benar "${currentCard.correct_answer}". Jelaskan singkat letak kekeliruan dan cara mengingatnya.`
        : `I answered a Burmese (${activeLevel}) question about "${word}". I chose "${selectedChoice}", correct answer is "${currentCard.correct_answer}". Explain why it is wrong.`;
      display = `Koreksi Pilihan: "${selectedChoice}" vs "${currentCard.correct_answer}"`;
    } else {
      prompt = language === 'my'
        ? `ကျွန်ုပ်သည် JLPT ${cardLevel} မေးခွန်း "${word}" (အသံထွက်: ${reading}, အဓိပ္ပာယ်: "${meaning}") ကို ဖြေဆိုခဲ့သည်။ ကျွန်ုပ်၏ ရွေးချယ်မှုမှာ "${selectedChoice}" ဖြစ်ပြီး မှန်ကန်သောအဖြေမှာ "${currentCard.correct_answer}" ဖြစ်သည်။ ကျွန်ုပ်ရွေးချယ်မှု အဘယ်ကြောင့် မှားယွင်းရသနည်း၊ အဓိပ္ပာယ်ကွဲပြားပုံနှင့် စာမေးပွဲအတွက် မှတ်သားနည်းကို တိုတိုရှင်းရှင်း ရှင်းပြပါ။ (ကျေးဇူးပြု၍ furigana/hiragana မှန်ကန်မှုရှိစေရန် သတိပြုပါ)`
        : language === 'en'
        ? `I answered a JLPT ${cardLevel} question about "${word}" (reading: ${reading}, meaning: "${meaning}"). I chose "${selectedChoice}", but the correct answer is "${currentCard.correct_answer}". Briefly explain why my choice was incorrect, the nuance difference, and memory tips for the exam. Ensure all Japanese furigana/hiragana readings are strictly accurate.`
        : `Saya menjawab soal JLPT ${cardLevel} tentang "${word}" (bacaan hiragana baku: "${reading}", arti: "${meaning}"). Pilihan saya "${selectedChoice}", jawaban yang benar adalah "${currentCard.correct_answer}". Jelaskan secara singkat to-the-point mengapa pilihan saya keliru, apa perbedaan nuansanya, dan trik mengingatnya untuk ujian. Pastikan furigana / hiragana kanji 100% akurat sesuai kamus baku (misal: 憧れる dibaca あこがれる, bukan あがれる).`;
      display = language === 'my' ? `အဘယ်ကြောင့် မှားယွင်းသနည်း "${selectedChoice}"? အဖြေမှန် - "${currentCard.correct_answer}"` : language === 'en' ? `Why is "${selectedChoice}" wrong? Correct answer: "${currentCard.correct_answer}"` : `Kenapa keliru "${selectedChoice}"? Jawaban benar: "${currentCard.correct_answer}"`;
    }

    setAiInitialPrompt(prompt);
    setAiInitialDisplay(display);
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
    const displayCards = initialCards.length > 0 ? initialCards : cards.slice(0, 15);
    const effectiveXp = Math.max(user?.total_xp ?? 0, totalXpAfterSession ?? 0, earnedXp);

    return (
      <>
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
          <div className="card-washi rounded-2xl p-5 text-center space-y-2 border border-[#EFEAE2] shadow-xs">
            <div className="w-13 h-13 mx-auto rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-700 shadow-2xs">
              <Award className="w-7 h-7" />
            </div>
            <h2 className="text-lg font-bold font-mincho text-[#1E1B18]">{t.studySession.sessionFinished}</h2>
            <p className="text-xs text-[#78716C]">
              {t.studySession.retentionTip}
            </p>

            <div className="flex items-center justify-center space-x-3 pt-1">
              <span className="text-3xl font-extrabold text-emerald-600 font-mincho">
                 {sessionAccuracy}%
              </span>
              <span className="text-xs font-bold text-indigo-800 bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-200 flex items-center space-x-1">
                <Zap className="w-3.5 h-3.5 text-indigo-600 fill-indigo-600" />
                 <span>+{earnedXp} {t.common.exp}</span>
              </span>
            </div>

            {/* User Level & XP Bar */}
            {(() => {
              const userLvl = calculateUserLevel(effectiveXp, language);
              return (
                <div className="bg-stone-50/80 dark:bg-slate-900/60 rounded-xl p-3 border border-stone-200/80 dark:border-slate-800 text-left space-y-1.5 mt-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-indigo-700 dark:text-indigo-400">
                      Lv. {userLvl.level} · {userLvl.title}
                    </span>
                    <span className="text-[10px] text-stone-500 dark:text-slate-400 font-sans font-bold">
                      {userLvl.totalXp} EXP
                    </span>
                  </div>
                  <div className="w-full bg-stone-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-indigo-600 dark:bg-indigo-500 h-full rounded-full transition-all duration-500"
                      style={{ width: `${userLvl.progressPercent}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[9px] text-stone-400 dark:text-slate-500">
                    <span>{t.leaderboard.levelProgress}</span>
                    <span>{userLvl.xpInCurrentLevel} / {userLvl.xpNeededForNext} EXP ({userLvl.progressPercent}%)</span>
                  </div>
                </div>
              );
            })()}

            {/* Quick Leaderboard Button */}
            <button
              onClick={() => setLeaderboardOpen(true)}
              className="w-full mt-2 py-2 px-3 bg-amber-50 hover:bg-amber-100 text-amber-900 dark:bg-amber-950/40 dark:text-amber-200 border border-amber-200 dark:border-amber-800/60 rounded-xl text-xs font-bold flex items-center justify-center space-x-1.5 transition-all cursor-pointer shadow-2xs"
            >
              <Trophy className="w-4 h-4 text-amber-600 fill-amber-500" />
              <span>{t.studySession.viewLeaderboard}</span>
            </button>
          </div>

          {/* Breakdown List */}
          <div className="space-y-2">
            <p className="text-[11px] font-bold text-[#A8A29E] uppercase tracking-wider px-1">
              {t.studySession.answerBreakdown(displayCards.length)}
            </p>

            <div className="space-y-1.5">
              {displayCards.map((card, idx) => {
                const rawKotoba = card.kotoba;
                const kotoba = rawKotoba ? localizeKotoba(rawKotoba, language) : null;
                const hadMistake = retryKotobaIds.has(card.kotoba.id);
                const matchedAnswers = answers.filter((a) => a.kotoba_id === card.kotoba.id);
                const lastAnswerForCard = matchedAnswers[matchedAnswers.length - 1];
                const seconds = ((lastAnswerForCard?.response_time_ms || 3500) / 1000).toFixed(1);

                return (
                  <div
                    key={card.id || idx}
                    onClick={() => {
                      if (!kotoba) return;
                      if (track !== 'JA' || (kotoba as any)?.isCourseItem) {
                        setSelectedCourseItemForDetail({
                          id: kotoba.id,
                          target_text: (kotoba as any).target_text || kotoba.kanji,
                          romanization: (kotoba as any).romanization || kotoba.hiragana,
                          meaning: kotoba.meaning,
                          notes: kotoba.notes,
                          example_target: kotoba.example_sentence,
                          example_meaning: kotoba.example_sentence_meaning,
                          item_type: (kotoba as any).item_type || kotoba.part_of_speech,
                          track_code: track,
                          level_code: activeLevel,
                        });
                      } else {
                        setSelectedKotobaForDetail(kotoba);
                      }
                    }}
                    className="card-washi card-washi-hover rounded-xl p-3 flex items-center justify-between border border-[#EFEAE2] cursor-pointer transition-all hover:border-indigo-300 dark:hover:border-indigo-700 group active:scale-[0.99]"
                    title={t.studySession.detailAndConjugation}
                  >
                    <div className="space-y-0.5 pr-2 min-w-0">
                      <div className="flex items-center space-x-2">
                        <span className="font-jp font-bold text-[#1E1B18] text-sm">
                          {kotoba?.kanji || kotoba?.hiragana || card.correct_answer}
                        </span>
                        {kotoba?.kanji && (
                          <span className="text-[10px] text-indigo-600 font-jp">
                            {kotoba.hiragana}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#78716C] line-clamp-1">
                        {kotoba?.meaning || card.correct_answer}
                      </p>
                    </div>

                    <div className="flex items-center space-x-2 shrink-0">
                      {hadMistake ? (
                        <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold border border-amber-200/80">
                          <Check className="w-3 h-3 text-amber-600" />
                          <span>{t.studySession.masteredAfterRetry(seconds)}</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200/60">
                          <Check className="w-3 h-3 text-emerald-600" />
                          <span>{t.studySession.correctWithTime(seconds)}</span>
                        </span>
                      )}
                      <ChevronRight className="w-4 h-4 text-stone-300 group-hover:text-indigo-600 transition-colors" />
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

        {/* Kotoba & Course Detail Modals */}
        {track === 'JA' ? (
          <KotobaDetailModal
            kotoba={selectedKotobaForDetail}
            onClose={() => setSelectedKotobaForDetail(null)}
            onViewKanji={(char) => setSelectedKanjiChar(char)}
          />
        ) : (
          <CourseCardDetailModal
            item={selectedCourseItemForDetail}
            onClose={() => setSelectedCourseItemForDetail(null)}
            targetLanguage={targetLanguage}
            myLanguage={language}
            onAskAi={(prompt, display) => {
              setAiInitialPrompt(prompt);
              setAiInitialDisplay(display);
              setAiModalOpen(true);
            }}
          />
        )}

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

        {/* Leaderboard Modal */}
        <LeaderboardModal
          isOpen={leaderboardOpen}
          onClose={() => setLeaderboardOpen(false)}
        />
      </>
    );
  }

  // --- ACTIVE QUIZ SCREEN ---
  const currentPercent = ((currentIndex / cards.length) * 100).toFixed(2);
  const activeDeckTitle = deckTitle || `DAY ${deckId || '1'} ${currentLevel}`;

  const hintDetails = currentCard
    ? getCardHintDetails(currentCard, language, {
        hintMeaning: t.studySession.hintMeaning,
        hintReading: t.studySession.hintReading,
      })
    : null;

  const hasKanji = (text?: string) => !!text && /[\u4e00-\u9faf]/.test(text);

  const directionLabel =
    currentCard?.direction === 'kanji_to_hiragana'
      ? t.studySession.pickHiragana
      : currentCard?.direction === 'kanji_to_meaning'
      ? t.studySession.pickMeaning
      : hasKanji(currentCard?.correct_answer)
      ? t.studySession.pickKanji
      : t.studySession.pickWord;

  return (
    <>
      <div className="space-y-4 pb-28 max-w-md mx-auto">
        {/* Top Bar */}
        <div className="flex items-center justify-between pt-1 px-1">
          <button
            onClick={handleBack}
            className="flex items-center space-x-1.5 text-xs font-bold text-[#44403C] hover:text-[#1E1B18] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-mincho text-sm">{t.common.back}</span>
          </button>

           <span className="text-base font-bold font-mincho text-[#1E1B18]">
             {studyMode === 'exam' ? t.studySession.examMode : studyMode === 'diagnostic' ? t.studySession.diagnosticMode : t.studySession.pageTitle}
          </span>

          {/* Progress percent & deck tag */}
          <div className="text-right flex flex-col items-end">
            <div className="w-20 bg-[#EFEAE2] h-1.5 rounded-full overflow-hidden mb-1">
              <div
                className="bg-amber-500 h-full rounded-full transition-all duration-300"
                style={{ width: `${currentPercent}%` }}
              />
            </div>
            <div className="flex items-center space-x-1.5">
              {currentIndex > 0 && (
                <button
                  onClick={handleRestartSession}
                  title={t.studySession.restart}
                  className="text-[9px] text-[#A8A29E] hover:text-stone-700 underline cursor-pointer"
                >
                  {t.studySession.restart}
                </button>
              )}
              <span className="text-[10px] font-bold text-[#1E1B18] leading-none">
                {currentPercent}%
              </span>
            </div>
            <span className="text-[9px] text-[#A8A29E] uppercase leading-tight font-medium">
              {activeDeckTitle}
            </span>
          </div>
        </div>

        {/* Resumed session toast banner */}
        {resumedToast && (
          <div className="bg-amber-50 border border-amber-200 text-amber-800 text-[11px] font-medium px-3 py-1.5 rounded-xl flex items-center justify-between animate-fade-in shadow-2xs">
            <div className="flex items-center space-x-1.5">
              <RotateCcw className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span>{resumedToast}</span>
            </div>
            <button
              onClick={() => setResumedToast(null)}
              className="text-amber-500 hover:text-amber-800 ml-2 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

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

          {/* Center Huge Question Word */}
          <div className="py-2">
            <h1 className="text-4xl sm:text-5xl font-bold font-jp text-[#1E1B18] tracking-wider select-none leading-tight">
              {currentCard?.question}
            </h1>
            {currentCard?.kotoba?.hiragana && currentCard.kotoba.hiragana !== currentCard.question && (
              <p className="text-xs font-semibold text-indigo-600 font-jp mt-1">
                {currentCard.kotoba.hiragana}
              </p>
            )}
            <div className="flex items-center justify-center space-x-2 mt-2.5">
              <button
                type="button"
                onClick={() => playUniversalAudio(currentCard?.question || '', targetLanguage)}
                className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/70 dark:hover:bg-indigo-900 text-indigo-700 dark:text-indigo-300 text-xs font-bold transition-all active:scale-95 cursor-pointer shadow-2xs border border-indigo-200/60 dark:border-indigo-800/60"
                title="Dengarkan Pengucapan / Listen"
              >
                <Volume2 className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                <span>Audio</span>
              </button>
            </div>
            <p className="text-xs text-[#78716C] mt-2 font-medium">
              {directionLabel}
            </p>
          </div>

          {/* Hint & Tanya AI Action Buttons */}
           {!isExamMode && <div className="flex items-center justify-center space-x-2">
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
           </div>}

          {/* Expanded Rich Amber Hint Box */}
          {showHint && !isExamMode && hintDetails && (
            <div className="mt-3 p-4 bg-gradient-to-br from-[#FFFDF9] to-[#FFF9ED] border border-[#FDE68A] rounded-2xl text-left text-xs shadow-xs animate-fade-in space-y-2.5">
              {/* Hint Title Header */}
              <div className="flex items-center space-x-1.5 text-amber-900 font-bold border-b border-amber-200/70 pb-1.5">
                <Lightbulb className="w-4 h-4 text-amber-600 shrink-0" />
                <span className="text-[11px] uppercase tracking-wider">{t.studySession.hintTitle}</span>
              </div>

              {/* Primary Clue: Meaning for reading quiz, or Reading for meaning quiz */}
              {hintDetails.primaryClue?.value && (
                <div className="bg-amber-100/70 rounded-xl p-2.5 border border-amber-200/80">
                  <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wide block mb-0.5">
                    {hintDetails.primaryClue.label}
                  </span>
                  <span className="font-semibold text-amber-950 text-sm leading-snug block">
                    {hintDetails.primaryClue.value}
                  </span>
                </div>
              )}

              {/* Context: Example Sentence & Translation */}
              {hintDetails.exampleSentence && (
                <div className="space-y-1 bg-white/80 rounded-xl p-2.5 border border-amber-200/50">
                  <div className="text-[10px] font-bold text-amber-800 uppercase tracking-wide flex items-center space-x-1">
                    <BookOpen className="w-3 h-3 text-amber-600 shrink-0" />
                    <span>{t.studySession.hintExample}</span>
                  </div>
                  <p className="font-jp text-xs sm:text-sm text-[#1E1B18] font-medium leading-relaxed">
                    {hintDetails.exampleSentence}
                  </p>
                  {hintDetails.exampleTranslation && (
                    <p className="text-[11px] text-[#57534E] leading-normal pt-1 border-t border-amber-100/80 italic">
                      "{hintDetails.exampleTranslation}"
                    </p>
                  )}
                </div>
              )}

              {/* Tags: Part of speech and Kanji clues */}
              {(hintDetails.partOfSpeech || (hintDetails.kanjiClues && hintDetails.kanjiClues.length > 0)) && (
                <div className="flex flex-wrap items-center gap-1.5 pt-0.5 text-[10px]">
                  {hintDetails.partOfSpeech && (
                    <div className="flex items-center space-x-1 text-amber-900 bg-amber-100/70 px-2 py-0.5 rounded-md border border-amber-200/70">
                      <span className="font-bold text-amber-800">{t.studySession.hintPartOfSpeech}:</span>
                      <span>{hintDetails.partOfSpeech}</span>
                    </div>
                  )}
                  {hintDetails.kanjiClues && hintDetails.kanjiClues.length > 0 && (
                    <div className="flex items-center space-x-1 text-amber-900 bg-amber-100/70 px-2 py-0.5 rounded-md border border-amber-200/70">
                      <span className="font-bold text-amber-800">{t.studySession.hintKanjiClue}:</span>
                      <span>
                        {hintDetails.kanjiClues.map((kc) => `${kc.char}${kc.meaning ? ` (${kc.meaning})` : ''}`).join(', ')}
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* Extra Notes if any */}
              {hintDetails.notes && (
                <p className="text-[11px] text-[#78716C] italic pt-1 border-t border-amber-200/40">
                  {hintDetails.notes}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Numbered Choices List 1, 2, 3, 4 */}
        <div className="space-y-2.5">
          {currentCard?.choices
            .filter((choice) => {
              if (choice === currentCard.correct_answer) return true;
              return choice.trim().toLowerCase() !== currentCard.question.trim().toLowerCase();
            })
            .map((choice, i) => {
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
                  onClick={() => {
                    if (!currentCard?.kotoba) return;
                    const k = currentCard.kotoba;
                    if (track !== 'JA' || (k as any)?.isCourseItem) {
                      setSelectedCourseItemForDetail({
                        id: k.id,
                        target_text: (k as any).target_text || k.kanji,
                        romanization: (k as any).romanization || k.hiragana,
                        meaning: k.meaning,
                        notes: k.notes,
                        example_target: k.example_sentence,
                        example_meaning: k.example_sentence_meaning,
                        item_type: (k as any).item_type || k.part_of_speech,
                        track_code: track,
                        level_code: activeLevel,
                      });
                    } else {
                      setSelectedKotobaForDetail(k);
                    }
                  }}
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
               {hintDetails?.partOfSpeech && (
                 <p className="text-[11px] text-[#78716C] bg-white/70 p-2 rounded-xl border border-rose-100 flex items-center space-x-1">
                   <span className="font-bold text-[#57534E]">{t.studySession.hintPartOfSpeech}:</span>
                   <span>{hintDetails.partOfSpeech}</span>
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

      {/* Kotoba & Course Detail Modals */}
      {track === 'JA' ? (
        <KotobaDetailModal
          kotoba={selectedKotobaForDetail}
          onClose={() => setSelectedKotobaForDetail(null)}
          onViewKanji={(char) => setSelectedKanjiChar(char)}
        />
      ) : (
        <CourseCardDetailModal
          item={selectedCourseItemForDetail}
          onClose={() => setSelectedCourseItemForDetail(null)}
          targetLanguage={targetLanguage}
          myLanguage={language}
          onAskAi={(prompt, display) => {
            setAiInitialPrompt(prompt);
            setAiInitialDisplay(display);
            setAiModalOpen(true);
          }}
        />
      )}

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

      {/* Leaderboard Modal */}
      <LeaderboardModal
        isOpen={leaderboardOpen}
        onClose={() => setLeaderboardOpen(false)}
      />
    </>
  );
};
