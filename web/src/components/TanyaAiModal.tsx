import React, { useState, useRef, useEffect, useMemo } from 'react';
import { askGemini, type ChatMessage } from '@/services/geminiService';
import { useAuthStore } from '@/stores/authStore';
import { useCourseStore } from '@/stores/courseStore';
import { useMistakesStore } from '@/stores/mistakesStore';
import { useTranslation } from '@/stores/languageStore';
import {
  playNaturalJapaneseVoice,
  playUniversalAudio,
  stopAudio,
  hasJapaneseText,
} from '@/utils/audioPlayer';
import { MarkdownView } from './MarkdownView';
import {
  X,
  Send,
  Sparkles,
  Bot,
  User,
  Volume2,
  Copy,
  Check,
  HelpCircle,
} from 'lucide-react';

interface TanyaAiModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPrompt?: string;
  initialDisplayText?: string;
}

const TanyaAiModalComponent: React.FC<TanyaAiModalProps> = ({
  isOpen,
  onClose,
  initialPrompt,
  initialDisplayText,
}) => {
  const user = useAuthStore((state) => state.user);
  const storeLevel = useAuthStore((state) => state.currentLevel);
  const currentLevel = storeLevel || user?.current_level || 'N2';
  const targetLanguage = useCourseStore((state) => state.targetLanguage) || 'ja';
  const activeLevel = useCourseStore((state) => state.activeLevel) || 'BIPA-1';
  const mistakes = useMistakesStore((state) => state.mistakes);
  const { language, t } = useTranslation();

  const weakWords = useMemo(() => {
    const filtered = currentLevel
      ? mistakes.filter((m) => m.level.toUpperCase() === currentLevel.toUpperCase())
      : mistakes;
    return [...filtered].sort((a, b) => b.count - a.count || b.timestamp - a.timestamp);
  }, [mistakes, currentLevel]);

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const messagesContainerRef = useRef<HTMLDivElement | null>(null);
  const initialHandledRef = useRef<string | null>(null);

  // Stop any active audio when modal closes
  useEffect(() => {
    return () => {
      stopAudio();
    };
  }, []);

  // Lock body scroll when modal is open to prevent background jumping or flashing
  useEffect(() => {
    if (isOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [isOpen]);

  // Initialize welcome message tailored to user level and learning track
  useEffect(() => {
    let welcomeText = t.ai.welcome(currentLevel);
    if (targetLanguage === 'id') {
      if (language === 'my') {
        welcomeText = `မင်္ဂလာပါ! ကျွန်ုပ်သည် Kanarau AI ဆရာ ဖြစ်ပါသည်။ အင်ဒိုနီးရှားဘာသာစကား (${activeLevel}) ဝေါဟာရ၊ သဒ္ဒါနှင့် နေ့စဉ်စကားပြောခန်းများကို မေးမြန်းနိုင်ပါသည်။`;
      } else if (language === 'en') {
        welcomeText = `Hello! I am your Kanarau AI Tutor. Ask me anything about Indonesian (${activeLevel}) vocabulary, sentence structures, and daily expressions!`;
      } else {
        welcomeText = `Halo! Saya AI Tutor Kanarau. Silakan tanyakan kosakata, tata bahasa BIPA (${activeLevel}), dan percakapan bahasa Indonesia!`;
      }
    } else if (targetLanguage === 'my') {
      if (language === 'id') {
        welcomeText = `Halo! Saya AI Tutor Kanarau. Silakan tanyakan huruf abjad Myanmar (${activeLevel}), sistem nada, kosakata, atau percakapan sehari-hari bahasa Myanmar!`;
      } else if (language === 'en') {
        welcomeText = `Hello! I am your Kanarau AI Tutor. Ask me anything about Burmese (${activeLevel}) alphabet, tone rules, vocabulary, and phrases!`;
      } else {
        welcomeText = `မင်္ဂလာပါ! မြန်မာဘာသာစကား (${activeLevel}) အက္ခရာ၊ အသံထွက်နှင့် နေ့စဉ်သုံးစကားများကို မေးမြန်းနိုင်ပါသည်။`;
      }
    } else if (targetLanguage === 'en') {
      if (language === 'my') {
        welcomeText = `မင်္ဂလာပါ! အင်္ဂလိပ်စာ (${activeLevel}) ဝေါဟာရ၊ သဒ္ဒါနှင့် စကားပြောလေ့ကျင့်ခန်းများကို မေးမြန်းနိုင်ပါသည်။`;
      } else if (language === 'id') {
        welcomeText = `Halo! Silakan tanyakan kosakata, tata bahasa bahasa Inggris (${activeLevel}), atau persiapan percakapan kerja.`;
      } else {
        welcomeText = `Hello! I am your AI Tutor. Ask me anything about English (${activeLevel}) vocabulary, grammar, and fluency!`;
      }
    }

    setMessages((prev) => {
      if (prev.length === 0 || prev.every((m) => m.id === 'welcome')) {
        return [
          {
            id: 'welcome',
            role: 'assistant',
            content: welcomeText,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          },
        ];
      }
      return prev;
    });
  }, [currentLevel, targetLanguage, activeLevel, language, t]);

  // Dynamic suggestions tailored to active track, level, and user mistakes
  const quickPrompts = useMemo(() => {
    const list: string[] = [];

    // Track-specific questions
    if (targetLanguage === 'id') {
      if (language === 'my') {
        list.push(
          'အခြေခံ ဝါကျဖွဲ့စည်းပုံ (S-V-O vs S-O-V) ကွာခြားချက်နှင့် ဥပမာများ',
          'အင်ဒိုနီးရှားတွင် ကြိယာ (Verb) နှင့် ကံ (Object) အစီအစဉ် ပြောင်းပြန်ဖြစ်ပုံ',
          'အင်ဒိုနီးရှား နာမ်စား "Kami" နှင့် "Kita" ခွဲခြားနည်း',
          '"Selamat pagi" နှင့် "Selamat siang" အသုံးပြုပုံ ကွာခြားချက်',
          'အင်ဒိုနီးရှား ဝါကျအစိတ်အပိုင်းများ (Subject, Verb, Object, Modifier) အသုံးပြုပုံ'
        );
      } else if (language === 'en') {
        list.push(
          'Indonesian Word Order (S-P-O vs S-O-V) and sentence structure',
          'Difference between "Kami" and "Kita"',
          'When to use "Selamat pagi" vs "Selamat siang"',
          'Basic Subjek, Predikat, Objek, Keterangan breakdown'
        );
      } else {
        list.push(
          'Pola dasar kalimat S-P-O Bahasa Indonesia vs S-O-V',
          'Perbedaan kata ganti kami dan kita dalam konteks formal',
          'Contoh pembagian Subjek, Predikat, Objek, Keterangan',
          'Aturan imbuhan me- dan ber- dalam percakapan'
        );
      }
      return list.slice(0, 5);
    }

    if (targetLanguage === 'my') {
      if (language === 'id') {
        list.push(
          'Cara membedakan konsonan က (Ka-Gyi) dan ခ (Kha-Gwe)',
          'Penjelasan 3 sistem nada dalam Bahasa Myanmar',
          'Contoh ungkapan salam sehari-hari di Myanmar',
          'Struktur kalimat dasar Burma (S-O-V)'
        );
      } else if (language === 'en') {
        list.push(
          'How to pronounce Burmese consonants က and ခ',
          'Explanation of the 3 tones in Burmese language',
          'Daily greeting phrases in Myanmar',
          'Basic Burmese sentence structure (SOV)'
        );
      } else {
        list.push(
          'အခြေခံ ဗျည်း ၃၃ လုံး အသံထွက် ကွာခြားချက်',
          'အခြေခံ ဝါကျတည်ဆောက်ပုံ (SOV) ဥပမာများ',
          'နေ့စဉ်သုံး နှုတ်ဆက်စကား လေ့ကျင့်ခန်း'
        );
      }
      return list.slice(0, 4);
    }

    // 1. Prioritize weak kanji from user actual mistakes
    if (weakWords.length > 0) {
      weakWords.slice(0, 2).forEach((w) => {
        if (w.wrongAnswer && w.wrongAnswer !== w.kanji) {
          if (language === 'my') {
            list.push(`မှားတတ်သော ကန်ဂျီနှိုင်းယှဉ်ချက်: ${w.kanji} နှင့် ${w.wrongAnswer}`);
          } else if (language === 'en') {
            list.push(`Compare commonly confused kanji: ${w.kanji} vs ${w.wrongAnswer}`);
          } else {
            list.push(`Bahas kanji yang sering keliru: ${w.kanji} vs ${w.wrongAnswer}`);
          }
        } else {
          if (language === 'my') {
            list.push(`မကြာခဏ မှားတတ်သော ${currentLevel} ကန်ဂျီ မှတ်သားနည်း: ${w.kanji}`);
          } else if (language === 'en') {
            list.push(`Tips for remembering difficult ${currentLevel} kanji: ${w.kanji}`);
          } else {
            list.push(`Tips mengingat kanji ${currentLevel} yang sering salah: ${w.kanji}`);
          }
        }
      });
    }

    // 2. Add level-specific questions (supported across all 5 JLPT levels)
    if (currentLevel === 'N1') {
      if (language === 'my') {
        list.push(
          'N1 အဓိပ္ပာယ် ကွဲပြားမှု - 圧倒 (attou) နှင့် 凌駕 (ryouga)',
          'N1 သဒ္ဒါပုံစံ - 〜であれ〜であれ',
          'N1 သုံးစွဲပုံ ဥပမာ - 著しい (いちじるしい)',
          'ဆင်တူသော N1 ခန်းဂျီး ခွဲခြားနည်း - 紛らわしい'
        );
      } else if (language === 'en') {
        list.push(
          'Nuance diff N1: 圧倒 (attou) vs 凌駕 (ryouga)',
          'Grammar pattern N1: 〜であれ〜であれ',
          'Usage example N1: 著しい (いちじるしい)',
          'Distinguish similar N1 kanji: 紛らわしい'
        );
      } else {
        list.push(
          'Beda nuansa N1: 圧倒 (attou) vs 凌駕 (ryouga)',
          'Pola kalimat N1: 〜であれ〜であれ',
          'Contoh pemakaian N1: 著しい (いちじるしい)',
          'Cara bedakan kanji N1 yang mirip: 紛らわしい'
        );
      }
    } else if (currentLevel === 'N2') {
      if (language === 'my') {
        list.push(
          'N2 အဓိပ္ပာယ် ကွဲပြားမှု - 区別 vs 相違 vs 違い',
          'N2 သဒ္ဒါပုံစံ - 〜にほかならない',
          'N2 သုံးစွဲပုံ ဥပမာ - 焦げる (こげる)',
          'ခွဲခြားနည်း - 誤る နှင့် 謝る'
        );
      } else if (language === 'en') {
        list.push(
          'Nuance diff N2: 区別 vs 相違 vs 違い',
          'Grammar pattern N2: 〜にほかならない',
          'Usage example N2: 焦げる (こげる)',
          'How to distinguish: 誤る vs 謝る'
        );
      } else {
        list.push(
          'Beda nuansa N2: 区別 vs 相違 vs 違い',
          'Pola kalimat N2: 〜にほかならない',
          'Contoh pemakaian N2: 焦げる (こげる)',
          'Cara membedakan: 誤る vs 謝る'
        );
      }
    } else if (currentLevel === 'N3') {
      if (language === 'my') {
        list.push(
          'N3 အဓိပ္ပာယ် ကွဲပြားမှု - 〜わけにはいかない vs 〜わけがない',
          'N3 အချိန်ပြသဒ္ဒါ - 〜うちに vs 〜あいだに',
          'N3 သုံးစွဲပုံ ဥပမာ - 〜に対して vs 〜にとって',
          'N3 စိုးရိမ်မှု ဖော်ပြချက် - 〜おそれがある'
        );
      } else if (language === 'en') {
        list.push(
          'Nuance diff N3: 〜わけにはいかない vs 〜わけがない',
          'Time grammar N3: 〜うちに vs 〜あいだに',
          'Usage example N3: 〜に対して vs 〜にとって',
          'Risk pattern N3: 〜おそれがある'
        );
      } else {
        list.push(
          'Beda nuansa N3: 〜わけにはいかない vs 〜わけがない',
          'Pola waktu N3: 〜うちに vs 〜あいだに',
          'Contoh pemakaian N3: 〜に対して vs 〜にとって',
          'Pola resiko N3: 〜おそれがある'
        );
      }
    } else if (currentLevel === 'N4') {
      if (language === 'my') {
        list.push(
          'N4 အခြေအနေပြသဒ္ဒါ - 〜たら vs 〜ば vs 〜なら',
          'N4 သဒ္ဒါပုံစံ - 〜すぎる vs 〜やすい',
          'N4 ခံရသူပြပုံစံ - 〜られる (Ukemi)',
          'N4 သုံးစွဲပုံ ဥပမာ - 〜ようにする vs 〜ことになる'
        );
      } else if (language === 'en') {
        list.push(
          'Conditionals N4: 〜たら vs 〜ば vs 〜なら',
          'Grammar pattern N4: 〜すぎる vs 〜やすい',
          'Passive form N4: 〜られる (Ukemi)',
          'Usage example N4: 〜ようにする vs 〜ことになる'
        );
      } else {
        list.push(
          'Beda pengandaian N4: 〜たら vs 〜ば vs 〜なら',
          'Pola kalimat N4: 〜すぎる vs 〜やすい',
          'Bentuk pasif N4: 〜られる (Ukemi)',
          'Contoh pemakaian N4: 〜ようにする vs 〜ことになる'
        );
      }
    } else {
      // N5
      if (language === 'my') {
        list.push(
          'N5 ဝိဘတ်ကွဲပြားမှု - に vs で vs へ',
          'N5 သဒ္ဒါပုံစံ - 〜てください vs 〜ないでください',
          'N5 သုံးစွဲပုံ ဥပမာ - 食べる နှင့် 飲む',
          'On နှင့် Kun အသံထွက် - 水 နှင့် 火'
        );
      } else if (language === 'en') {
        list.push(
          'Particles N5: に vs で vs へ',
          'Grammar pattern N5: 〜てください vs 〜ないでください',
          'Usage example N5: 食べる and 飲む',
          'On vs Kun readings: 水 and 火'
        );
      } else {
        list.push(
          'Beda partikel N5: に vs で vs へ',
          'Pola kalimat N5: 〜てください vs 〜ないでください',
          'Contoh pemakaian N5: 食べる dan 飲む',
          'Cara baca On vs Kun: 水 dan 火'
        );
      }
    }

    return list.slice(0, 5);
  }, [currentLevel, weakWords, language]);

  const handleSend = async (textToSend?: string, displayText?: string) => {
    const text = textToSend || input.trim();
    if (!text || loading) return;

    const userMessage: ChatMessage = {
      id: 'usr_' + Date.now(),
      role: 'user',
      content: displayText || text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInput('');
    setLoading(true);

    try {
      const reply = await askGemini(text, messages);
      const botMessage: ChatMessage = {
        id: 'bot_' + Date.now(),
        role: 'assistant',
        content: reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err: any) {
      const errorMessage: ChatMessage = {
        id: 'err_' + Date.now(),
        role: 'assistant',
        content: t.ai.errorFallback(err.message),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (initialPrompt && isOpen && initialHandledRef.current !== initialPrompt) {
      initialHandledRef.current = initialPrompt;
      handleSend(initialPrompt, initialDisplayText);
    }
    if (!isOpen) {
      initialHandledRef.current = null;
    }
  }, [initialPrompt, isOpen, initialDisplayText]);

  // Direct internal scroll inside chat container without moving window/page
  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages, loading]);

  if (!isOpen) return null;

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handlePlaySpeech = (id: string, text: string) => {
    if (playingId === id) {
      stopAudio();
      setPlayingId(null);
      return;
    }

    setPlayingId(id);
    playUniversalAudio(
      text,
      targetLanguage,
      1.0,
      () => setPlayingId(null)
    );
  };

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          stopAudio();
          onClose();
        }
      }}
      className="fixed inset-0 z-50 overflow-hidden flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/50 backdrop-blur-xs transition-opacity"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#FAF8F5] dark:bg-[#151D2E] rounded-t-3xl sm:rounded-2xl max-w-lg w-full h-[88vh] flex flex-col overflow-hidden border border-[#EFEAE2] dark:border-[#232F46] shadow-2xl"
      >
        {/* Header */}
        <div className="p-4 border-b border-[#EFEAE2] dark:border-[#232F46] bg-white dark:bg-[#121824] flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-2.5">
            <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-xs">
              <Sparkles className="w-4 h-4 fill-white" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-bold text-sm text-[#1E1B18] dark:text-slate-100 font-mincho">
                  {t.ai.title}
                </h3>
                <span className="text-[10px] font-bold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/70 px-2 py-0.5 rounded-full border border-indigo-100 dark:border-indigo-800">
                  {targetLanguage === 'id'
                    ? `🇮🇩 ${activeLevel}`
                    : targetLanguage === 'my'
                    ? `🇲🇲 ${activeLevel}`
                    : targetLanguage === 'en'
                    ? `🇬🇧 ${activeLevel}`
                    : `${t.common.level} ${currentLevel}`}
                </span>
              </div>
              <p className="text-[11px] text-[#78716C] dark:text-zinc-400">
                {t.ai.subtitle}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              stopAudio();
              onClose();
            }}
            className="w-8 h-8 rounded-full bg-[#EFEAE2]/60 hover:bg-[#E2DDD5] dark:bg-[#1E293B] dark:hover:bg-[#28354D] text-[#57534E] dark:text-zinc-300 hover:text-[#1E1B18] flex items-center justify-center text-xs font-bold transition-colors cursor-pointer"
             aria-label={t.common.close}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Dynamic Level & Weakness-based Suggestion Chips - Clean Flex Layout */}
        <div className="bg-[#FAF8F5] dark:bg-[#151D2E] px-3.5 py-2.5 border-b border-[#EFEAE2] dark:border-[#232F46] shrink-0 space-y-2">
          <div className="flex items-center space-x-1.5 text-[10px] font-bold text-[#A8A29E] dark:text-zinc-400 uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
            <span>
              {targetLanguage === 'id'
                ? language === 'my'
                  ? `အကြံပြုထားသော ခေါင်းစဉ်များ (${activeLevel})-`
                  : language === 'en'
                  ? `Recommended Topics (${activeLevel}):`
                  : `Rekomendasi Topik (${activeLevel}):`
                : targetLanguage === 'my'
                ? language === 'id'
                  ? `Rekomendasi Topik (${activeLevel}):`
                  : `အကြံပြုထားသော ခေါင်းစဉ်များ (${activeLevel})-`
                : targetLanguage === 'en'
                ? `Recommended Topics (${activeLevel}):`
                : weakWords.length > 0
                ? t.ai.weakLabel(currentLevel)
                : t.ai.suggestionLabel(currentLevel)}
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto no-scrollbar">
            {quickPrompts.map((prompt, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleSend(prompt)}
                className="text-[11px] font-medium text-[#44403C] dark:text-slate-200 hover:text-indigo-700 dark:hover:text-indigo-300 bg-white dark:bg-[#1E293B] hover:bg-indigo-50/50 dark:hover:bg-indigo-900/40 border border-[#EFEAE2] dark:border-[#28354D] hover:border-indigo-200 dark:hover:border-indigo-600 px-3 py-1 rounded-full text-left shadow-2xs transition-colors cursor-pointer"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>

        {/* Message Container */}
        <div
          ref={messagesContainerRef}
          className="p-4 overflow-y-auto space-y-3.5 flex-1 bg-gradient-to-b from-[#FAF8F5] to-white dark:from-[#151D2E] dark:to-[#121824]"
        >
          {messages.map((msg) => {
            const isUser = msg.role === 'user';
            const hasJapanese = hasJapaneseText(msg.content);

            return (
              <div
                key={msg.id}
                className={`flex items-start space-x-2.5 ${
                  isUser ? 'flex-row-reverse space-x-reverse' : 'flex-row'
                }`}
              >
                {/* Avatar */}
                <div
                  className={`w-7 h-7 rounded-xl flex items-center justify-center shrink-0 text-xs font-bold shadow-2xs ${
                    isUser
                      ? 'bg-[#1E1B18] dark:bg-indigo-600 text-white'
                      : 'bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800'
                  }`}
                >
                  {isUser ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                </div>

                {/* Bubble */}
                <div
                  className={`max-w-[85%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed shadow-2xs relative group ${
                    isUser
                      ? 'bg-indigo-600 text-white rounded-tr-xs'
                      : 'bg-white dark:bg-[#1A2234] border border-[#EFEAE2] dark:border-[#232F46] text-[#292524] dark:text-slate-100 rounded-tl-xs'
                  }`}
                >
                  {isUser ? (
                    <p className="whitespace-pre-line font-medium leading-relaxed font-jp">
                      {msg.content}
                    </p>
                  ) : (
                    <MarkdownView content={msg.content} />
                  )}

                  {/* Actions for Assistant reply */}
                  {!isUser && (
                    <div className="pt-2.5 mt-3 border-t border-[#F2ECE3] dark:border-[#28354D] flex items-center justify-between text-[11px] text-[#A8A29E] dark:text-zinc-400">
                      <span>{msg.timestamp}</span>
                      <div className="flex items-center space-x-2">
                        {/* Audio speaker shown for Japanese or non-Japanese speech */}
                        {(hasJapanese || targetLanguage !== 'ja') && (
                          <button
                            type="button"
                            onClick={() => handlePlaySpeech(msg.id, msg.content)}
                            title={
                              playingId === msg.id
                                ? t.ai.audioStop
                                : t.ai.audioListen
                            }
                            className={`inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                              playingId === msg.id
                                ? 'bg-indigo-600 text-white shadow-xs'
                                : 'bg-[#F4F1EA] dark:bg-[#232F46] hover:bg-indigo-50 dark:hover:bg-indigo-900/40 text-[#57534E] dark:text-slate-300 hover:text-indigo-700 dark:hover:text-indigo-300'
                            }`}
                          >
                            <Volume2
                              className={`w-3.5 h-3.5 ${
                                playingId === msg.id ? 'animate-pulse text-white' : 'text-indigo-600 dark:text-indigo-400'
                              }`}
                            />
                            <span>{playingId === msg.id ? t.ai.audioPlaying : t.ai.audioListen}</span>
                          </button>
                        )}
                        <button
                          type="button"
                          onClick={() => handleCopy(msg.id, msg.content)}
                           title={t.common.copyText}
                          className="p-1 hover:bg-[#FAF8F5] dark:hover:bg-[#232F46] rounded-md text-[#78716C] dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer"
                        >
                          {copiedId === msg.id ? (
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </div>
                  )}

                  {isUser && (
                    <span className="text-[9px] text-white/70 block text-right mt-1">
                      {msg.timestamp}
                    </span>
                  )}
                </div>
              </div>
            );
          })}

          {loading && (
            <div className="flex items-start space-x-2.5 animate-pulse">
              <div className="w-7 h-7 rounded-xl bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 flex items-center justify-center shrink-0">
                <Bot className="w-3.5 h-3.5" />
              </div>
              <div className="bg-white dark:bg-[#1A2234] border border-[#EFEAE2] dark:border-[#232F46] rounded-2xl rounded-tl-xs p-3.5 text-xs text-[#78716C] dark:text-zinc-400 shadow-2xs flex items-center space-x-2">
                <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 animate-spin" />
                <span>{t.common.loading}</span>
              </div>
            </div>
          )}
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-white dark:bg-[#121824] border-t border-[#EFEAE2] dark:border-[#232F46] shrink-0">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center space-x-2"
          >
            <input
              type="text"
              autoFocus
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={
                targetLanguage === 'id'
                  ? language === 'my'
                    ? 'အင်ဒိုနီးရှား ဝေါဟာရ၊ ဝါကျဖွဲ့စည်းပုံ (S-V-O) သို့မဟုတ် သဒ္ဒါကို မေးမြန်းပါ...'
                    : language === 'en'
                    ? 'Ask about Indonesian vocabulary, SVO sentence structure, or grammar...'
                    : 'Tanyakan kosakata, struktur kalimat S-P-O, atau tata bahasa BIPA...'
                  : targetLanguage === 'my'
                  ? language === 'id'
                    ? 'Tanyakan aksara Burma, sistem nada, atau pola kalimat SOV...'
                    : 'မြန်မာ အက္ခရာ၊ သဒ္ဒါ သို့မဟုတ် စကားပြောကို မေးမြန်းပါ...'
                  : targetLanguage === 'en'
                  ? 'Ask about English vocabulary, grammar, or conversation...'
                  : t.ai.placeholder(currentLevel)
              }
              disabled={loading}
              className="flex-1 px-4 py-2.5 bg-[#FAF8F5] dark:bg-[#151D2E] rounded-xl border border-[#EFEAE2] dark:border-[#232F46] text-xs sm:text-sm text-[#1E1B18] dark:text-slate-100 placeholder:text-[#A8A29E] dark:placeholder:text-zinc-500 focus:outline-hidden focus:border-indigo-500 focus:bg-white dark:focus:bg-[#151D2E] transition-all shadow-inner"
            />
            <button
              type="submit"
              disabled={!input.trim() || loading}
              className="w-10 h-10 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white flex items-center justify-center transition-all shadow-md active:scale-95 shrink-0 cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export const TanyaAiModal = React.memo(TanyaAiModalComponent);
