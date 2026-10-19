import React, { useState, useRef, useEffect, useMemo } from 'react';
import { askGemini, type ChatMessage } from '@/services/geminiService';
import { useAuthStore } from '@/stores/authStore';
import { useMistakesStore } from '@/stores/mistakesStore';
import { useTranslation } from '@/stores/languageStore';
import {
  playNaturalJapaneseVoice,
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

export const TanyaAiModal: React.FC<TanyaAiModalProps> = ({
  isOpen,
  onClose,
  initialPrompt,
  initialDisplayText,
}) => {
  const user = useAuthStore((state) => state.user);
  const storeLevel = useAuthStore((state) => state.currentLevel);
  const currentLevel = storeLevel || user?.current_level || 'N2';
  const { getWeakWords } = useMistakesStore();
  const { language, t } = useTranslation();
  const weakWords = getWeakWords(currentLevel);

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Stop any active audio when modal closes
  useEffect(() => {
    return () => {
      stopAudio();
    };
  }, []);

  // Initialize welcome message tailored to user level
  useEffect(() => {
    setMessages([
      {
        id: 'welcome',
        role: 'assistant',
        content: t.ai.welcome(currentLevel),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  }, [currentLevel, t]);

  // Dynamic suggestions tailored to user level and weak kanji mistakes
  const quickPrompts = useMemo(() => {
    const list: string[] = [];

    // 1. Prioritize weak kanji from user actual mistakes
    if (weakWords.length > 0) {
      weakWords.slice(0, 2).forEach((w) => {
        if (w.wrongAnswer && w.wrongAnswer !== w.kanji) {
          if (language === 'my') {
            list.push(`မှားတတ်သော ကန်ဂျီ နှိုင်းယှဉ်ချက်: ${w.kanji} နှင့် ${w.wrongAnswer}`);
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
          'N3 စိုးရိမ်ရမှု ဖော်ပြချက် - 〜おそれがある'
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

  useEffect(() => {
    if (initialPrompt && isOpen) {
      handleSend(initialPrompt, initialDisplayText);
    }
  }, [initialPrompt, isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  if (!isOpen) return null;

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

    playNaturalJapaneseVoice(
      text,
      () => setPlayingId(id),
      () => setPlayingId(null)
    );
  };

  return (
    <div onClick={(e) => { if (e.target === e.currentTarget) onClose(); }} className="fixed inset-0 z-50 overflow-hidden flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/45 backdrop-blur-[2px] animate-fade-in">
      <div onClick={(e) => e.stopPropagation()} className="bg-[#FAF8F5] rounded-t-3xl sm:rounded-2xl max-w-lg w-full h-[88vh] flex flex-col overflow-hidden border border-[#EFEAE2] shadow-2xl animate-slide-up">
        {/* Header */}
        <div className="p-4 border-b border-[#EFEAE2] bg-white flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-2.5">
            <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-xs">
              <Sparkles className="w-4 h-4 fill-white" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-bold text-sm text-[#1E1B18] font-mincho">
                  {t.ai.title}
                </h3>
                <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-100">
                  Level {currentLevel}
                </span>
              </div>
              <p className="text-[11px] text-[#78716C]">
                {t.ai.subtitle}
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              stopAudio();
              onClose();
            }}
            className="w-8 h-8 rounded-full bg-[#EFEAE2]/60 hover:bg-[#E2DDD5] text-[#57534E] hover:text-[#1E1B18] flex items-center justify-center text-xs font-bold transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Dynamic Level & Weakness-based Suggestion Chips */}
        <div className="bg-[#FAF8F5] px-3.5 py-2.5 border-b border-[#EFEAE2] overflow-x-auto no-scrollbar flex items-center space-x-2 shrink-0">
          <span className="text-[10px] font-bold text-[#A8A29E] uppercase tracking-wider shrink-0 flex items-center space-x-1">
            <HelpCircle className="w-3 h-3 text-indigo-500" />
            <span>
              {weakWords.length > 0
                ? t.ai.weakLabel(currentLevel)
                : t.ai.suggestionLabel(currentLevel)}
            </span>
          </span>
          {quickPrompts.map((prompt, i) => (
            <button
              key={i}
              onClick={() => handleSend(prompt)}
              className="text-[11px] font-medium text-[#44403C] hover:text-indigo-700 bg-white hover:bg-indigo-50/50 border border-[#EFEAE2] hover:border-indigo-200 px-3 py-1 rounded-full whitespace-nowrap shadow-2xs transition-colors shrink-0 cursor-pointer"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Message Container */}
        <div className="p-4 overflow-y-auto space-y-3.5 flex-1 bg-gradient-to-b from-[#FAF8F5] to-white">
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
                      ? 'bg-[#1E1B18] text-white'
                      : 'bg-indigo-100 text-indigo-700 border border-indigo-200/60'
                  }`}
                >
                  {isUser ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                </div>

                {/* Bubble */}
                <div
                  className={`max-w-[85%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed shadow-2xs relative group ${
                    isUser
                      ? 'bg-[#1E1B18] text-white rounded-tr-xs'
                      : 'bg-white text-[#1E1B18] border border-[#EFEAE2] rounded-tl-xs'
                  }`}
                >
                  {isUser ? (
                    <div className="whitespace-pre-wrap font-sans font-medium">{msg.content}</div>
                  ) : (
                    <MarkdownView content={msg.content} />
                  )}

                  {/* Actions for Assistant reply */}
                  {!isUser && (
                    <div className="pt-2.5 mt-3 border-t border-[#F2ECE3] flex items-center justify-between text-[11px] text-[#A8A29E]">
                      <span>{msg.timestamp}</span>
                      <div className="flex items-center space-x-2">
                        {/* Audio speaker only shown when message contains Japanese text to pronounce */}
                        {hasJapanese && (
                          <button
                            onClick={() => handlePlaySpeech(msg.id, msg.content)}
                            title={
                              playingId === msg.id
                                ? t.ai.audioStop
                                : t.ai.audioListen
                            }
                            className={`inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                              playingId === msg.id
                                ? 'bg-indigo-600 text-white shadow-xs'
                                : 'bg-[#F4F1EA] hover:bg-indigo-50 text-[#57534E] hover:text-indigo-700'
                            }`}
                          >
                            <Volume2
                              className={`w-3.5 h-3.5 ${
                                playingId === msg.id ? 'animate-pulse text-white' : 'text-indigo-600'
                              }`}
                            />
                            <span>{playingId === msg.id ? t.ai.audioPlaying : t.ai.audioListen}</span>
                          </button>
                        )}
                        <button
                          onClick={() => handleCopy(msg.id, msg.content)}
                          title="Salin Teks"
                          className="p-1 hover:bg-[#FAF8F5] rounded-md text-[#78716C] hover:text-indigo-600 transition-colors cursor-pointer"
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
                    <span className="text-[9px] text-stone-400 block text-right mt-1">
                      {msg.timestamp}
                    </span>
                  )}
                </div>
              </div>
            );
          })}

          {loading && (
            <div className="flex items-start space-x-2.5 animate-pulse">
              <div className="w-7 h-7 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
                <Bot className="w-3.5 h-3.5" />
              </div>
              <div className="bg-white border border-[#EFEAE2] rounded-2xl rounded-tl-xs p-3.5 text-xs text-[#78716C] shadow-2xs flex items-center space-x-2">
                <Sparkles className="w-3.5 h-3.5 text-indigo-600 animate-spin" />
                <span>{t.common.loading}</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-white border-t border-[#EFEAE2] shrink-0">
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
              placeholder={t.ai.placeholder(currentLevel)}
              disabled={loading}
              className="flex-1 px-4 py-2.5 bg-[#FAF8F5] rounded-xl border border-[#EFEAE2] text-xs sm:text-sm text-[#1E1B18] placeholder:text-[#A8A29E] focus:outline-hidden focus:border-indigo-500 focus:bg-white transition-all shadow-inner"
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
