/**
 * Natural Japanese Audio Player for Kanarau
 * Features studio-grade native Japanese audio tracks with genuine multi-speaker
 * human intonation (Nanami & Keita Neural), authentic JLPT pacing, and instant
 * on-the-fly speed adjustment (1.0x, 1.15x, 1.25x) without playback restarts or resets.
 */

import { CHOUKAI_AUDIO_MANIFEST, type ChoukaiQuestionAudioTrack } from '@/data/choukaiAudioManifest';
import { DOKKAI_AUDIO_MANIFEST, getDokkaiTrack, type DokkaiAudioTrack } from '@/data/dokkaiAudioManifest';

export function hasJapaneseText(text: string): boolean {
  return /[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]/.test(text);
}

export function cleanFuriganaToKanji(text: string): string {
  // Converts "彼 (かれ) は" -> "彼は"
  return text.replace(/([\u4E00-\u9FAF]+)\s*[\(\（]([\u3040-\u309F\u30A0-\u30FF]+)[\)\）]\s*/g, '$1');
}

/**
 * Pre-warm speech synthesis voices (crucial for Chrome / Android / Safari)
 */
if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  window.speechSynthesis.getVoices();
  window.speechSynthesis.onvoiceschanged = () => {
    window.speechSynthesis.getVoices();
  };
}

export interface JapaneseVoicesCatalog {
  maleVoices: SpeechSynthesisVoice[];
  femaleVoices: SpeechSynthesisVoice[];
  allJaVoices: SpeechSynthesisVoice[];
}

export function getJapaneseVoicesCatalog(): JapaneseVoicesCatalog {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return { maleVoices: [], femaleVoices: [], allJaVoices: [] };
  }

  const voices = window.speechSynthesis.getVoices();
  const allJaVoices = voices.filter(
    (v) => v.lang === 'ja-JP' || v.lang.startsWith('ja') || v.lang.includes('ja_')
  );

  const maleNames = ['otoya', 'ichiro', 'keita', 'kenji', 'takumi', 'naoki', 'daichi', 'reed', 'rocko', 'grandpa', 'male', 'man', 'hattori'];
  const femaleNames = ['nanami', 'kyoko', 'haruka', 'ayumi', 'sayaka', 'o-ren', 'flo', 'sandy', 'shelley', 'grandma', 'female', 'woman', 'yuna', 'siri'];

  const maleVoices = allJaVoices.filter((v) =>
    maleNames.some((m) => v.name.toLowerCase().includes(m))
  );

  const femaleVoices = allJaVoices.filter((v) =>
    femaleNames.some((f) => v.name.toLowerCase().includes(f))
  );

  return { maleVoices, femaleVoices, allJaVoices };
}

/**
 * Finds the highest quality native Japanese voice available in the current browser/OS
 */
function getBestJapaneseVoice(preferGender?: 'male' | 'female'): SpeechSynthesisVoice | null {
  const catalog = getJapaneseVoicesCatalog();
  if (preferGender === 'male' && catalog.maleVoices.length > 0) {
    return catalog.maleVoices[0] || null;
  }
  if (preferGender === 'female' && catalog.femaleVoices.length > 0) {
    return catalog.femaleVoices[0] || null;
  }

  const preferred = catalog.allJaVoices.find(
    (v) =>
      v.name.includes('Nanami') ||
      v.name.includes('Keita') ||
      v.name.includes('Kyoko') ||
      v.name.includes('Otoya') ||
      v.name.includes('Google') ||
      v.name.includes('Haruka') ||
      v.name.includes('Ayumi') ||
      v.name.includes('Reed') ||
      v.name.includes('Siri')
  );

  return preferred || catalog.allJaVoices[0] || null;
}

/**
 * Represents one turn in a Choukai dialogue
 */
export interface ChoukaiTurn {
  speakerTag: string;
  cleanText: string;
  role: 'female_1' | 'female_2' | 'male_1' | 'male_2' | 'child_boy' | 'child_girl' | 'elder_male' | 'elder_female' | 'neutral';
  pitch: number;
  rate: number;
  voice: SpeechSynthesisVoice | null;
}

/**
 * Parses Choukai dialogue into distinct speaker turns.
 * Completely strips speaker labels ("女：", "男：") from spoken text so labels are NEVER pronounced aloud.
 */
export function parseChoukaiDialogue(rawScript: string, baseSpeed: number = 1.0): ChoukaiTurn[] {
  if (!rawScript || !hasJapaneseText(rawScript)) return [];

  const lines = rawScript
    .split(/[\r\n]+/)
    .map((l) => l.trim())
    .filter(Boolean);

  const catalog = getJapaneseVoicesCatalog();
  const turns: ChoukaiTurn[] = [];

  let firstSpeakerGender: 'female' | 'male' = 'female';
  let hasRecordedFirstSpeaker = false;
  let femaleSpeakerCount = 0;
  let maleSpeakerCount = 0;
  const knownSpeakerRoles = new Map<string, ChoukaiTurn['role']>();

  for (const rawLine of lines) {
    const match = rawLine.match(/^([^：:\s]+)[：:]\s*(.+)$/);
    let speakerTag = 'ナレーション';
    let text = rawLine;

    if (match && match[1] && match[2]) {
      speakerTag = match[1].trim();
      text = match[2].trim();
    }

    const cleanContent = cleanFuriganaToKanji(
      text.replace(/^[>#\*\-]+\s*/, '').replace(/[*_`]/g, '')
    ).trim();

    if (!cleanContent) continue;

    // For numbered choices (Sokuji Outou), announce choice naturally: "1番。テキスト..."
    let spokenText = cleanContent;
    if (/^[123]$/.test(speakerTag)) {
      spokenText = `${speakerTag}番。${cleanContent}`;
    }

    let role: ChoukaiTurn['role'] = 'neutral';
    let pitch = 1.0;
    let rate = 1.0 * baseSpeed;
    let voice: SpeechSynthesisVoice | null = null;

    if (knownSpeakerRoles.has(speakerTag)) {
      role = knownSpeakerRoles.get(speakerTag)!;
    } else {
      const isFemale = /(女|女性|母|姉|妹|娘|妻|彼女|おばさん|おばあ)/.test(speakerTag);
      const isMale = /(男|男性|父|兄|弟|息子|夫|彼|おじさん|おじい|田中|部長|課長|先生|店員)/.test(speakerTag);

      if (/^[123]$/.test(speakerTag)) {
        role = firstSpeakerGender === 'female' ? 'male_1' : 'female_1';
      } else if (isFemale) {
        if (femaleSpeakerCount > 0) {
          role = 'female_2';
        } else {
          role = 'female_1';
          femaleSpeakerCount++;
        }
      } else if (isMale) {
        if (maleSpeakerCount > 0) {
          role = 'male_2';
        } else {
          role = 'male_1';
          maleSpeakerCount++;
        }
      } else {
        role = 'neutral';
      }

      knownSpeakerRoles.set(speakerTag, role);
      if (!hasRecordedFirstSpeaker && (isFemale || isMale)) {
        firstSpeakerGender = isFemale ? 'female' : 'male';
        hasRecordedFirstSpeaker = true;
      }
    }

    switch (role) {
      case 'female_1':
      case 'female_2':
        pitch = 1.0;
        rate = 1.0 * baseSpeed;
        voice = catalog.femaleVoices[0] || getBestJapaneseVoice('female');
        break;
      case 'male_1':
      case 'male_2':
        pitch = 1.0;
        rate = 0.98 * baseSpeed;
        voice = catalog.maleVoices[0] || getBestJapaneseVoice('male');
        break;
      default:
        pitch = 1.0;
        rate = 1.0 * baseSpeed;
        voice = getBestJapaneseVoice();
    }

    turns.push({
      speakerTag,
      cleanText: spokenText,
      role,
      pitch,
      rate,
      voice,
    });
  }

  return turns;
}

let activeAudio: HTMLAudioElement | null = null;
let isPlaybackCancelled = false;
let interTurnTimeout: any = null;
let currentChoukaiSpeed = 1.0;
let dokkaiProgressTimer: any = null;
let currentDokkaiSpeed = 1.0;

/**
 * Changes Choukai playback speed on-the-fly without restarting or replaying audio.
 */
export function setChoukaiPlaybackSpeed(newSpeed: number): void {
  currentChoukaiSpeed = newSpeed;
  if (activeAudio) {
    activeAudio.playbackRate = newSpeed;
  }
}

/**
 * Changes Dokkai playback speed on-the-fly without restarting or replaying audio.
 */
export function setDokkaiPlaybackSpeed(newSpeed: number): void {
  currentDokkaiSpeed = newSpeed;
  if (activeAudio) {
    activeAudio.playbackRate = newSpeed;
  }
}

/**
 * Pauses active audio playback
 */
export function pauseAudio(): void {
  if (activeAudio && !activeAudio.paused) {
    activeAudio.pause();
  } else if (typeof window !== 'undefined' && 'speechSynthesis' in window && window.speechSynthesis.speaking) {
    window.speechSynthesis.pause();
  }
}

/**
 * Resumes active audio playback smoothly
 */
export function resumeAudio(speed?: number): void {
  if (speed !== undefined) {
    setChoukaiPlaybackSpeed(speed);
    setDokkaiPlaybackSpeed(speed);
  }
  if (activeAudio && activeAudio.paused) {
    activeAudio.playbackRate = currentDokkaiSpeed || currentChoukaiSpeed;
    activeAudio.play().catch(() => {});
  } else if (typeof window !== 'undefined' && 'speechSynthesis' in window && window.speechSynthesis.paused) {
    window.speechSynthesis.resume();
  }
}

/**
 * Checks if audio is currently in a paused state
 */
export function isAudioPaused(): boolean {
  if (activeAudio) {
    return activeAudio.paused && activeAudio.currentTime > 0 && !activeAudio.ended;
  }
  return false;
}


/**
 * Seek active audio to a specific timestamp in seconds
 */
export function seekAudio(targetSeconds: number): void {
  if (activeAudio) {
    const dur = activeAudio.duration || 9999;
    activeAudio.currentTime = Math.max(0, Math.min(dur, targetSeconds));
  }
}

/**
 * Jumps active audio forward or backward by deltaSeconds (e.g. -5s or +5s)
 */
export function jumpAudioRelative(deltaSeconds: number): number {
  if (activeAudio) {
    const cur = activeAudio.currentTime;
    const dur = activeAudio.duration || 9999;
    const target = Math.max(0, Math.min(dur, cur + deltaSeconds));
    activeAudio.currentTime = target;
    return target;
  }
  return 0;
}

/**
 * Gets the current playback time of the active audio track in seconds
 */
export function getAudioCurrentTime(): number {
  return activeAudio ? activeAudio.currentTime : 0;
}

/**
 * Gets the total duration of the active audio track in seconds
 */
export function getAudioDuration(): number {
  return activeAudio && !isNaN(activeAudio.duration) && activeAudio.duration > 0
    ? activeAudio.duration
    : 0;
}

export function getChoukaiTrack(questionId: string): ChoukaiQuestionAudioTrack | null {
  return CHOUKAI_AUDIO_MANIFEST[questionId] || null;
}

export { getDokkaiTrack };
export type { DokkaiAudioTrack };

/**
 * Plays Choukai multi-speaker dialogue.
 * Automatically loads studio-grade pre-rendered master tracks (Nanami & Keita Neural)
 * with authentic multi-speaker dialogue sequencing and zero label recitation.
 * Speed changes adjust HTML5 playbackRate seamlessly in real-time without restarting!
 */
export function playChoukaiDialogue(
  rawScript: string,
  onStart?: () => void,
  onEnd?: () => void,
  speed: number = 1.0,
  onTurnChange?: (turnIndex: number, speakerTag: string) => void,
  questionId?: string,
  onProgress?: (currentTime: number, duration: number) => void,
  initialTime?: number
): void {
  stopAudio();
  isPlaybackCancelled = false;
  currentChoukaiSpeed = speed;

  // 1. Check if high-quality neural studio audio is available for this question
  const track = questionId ? getChoukaiTrack(questionId) : null;
  if (track) {
    const audio = new Audio(track.audioUrl);
    activeAudio = audio;
    audio.playbackRate = currentChoukaiSpeed;

    if (initialTime !== undefined && initialTime > 0) {
      audio.currentTime = initialTime;
    }

    audio.ontimeupdate = () => {
      if (isPlaybackCancelled) return;
      const cur = audio.currentTime;
      const dur = audio.duration || track.totalDuration || 0;
      onProgress?.(cur, dur);
      const cue = track.cues.find((c) => cur >= c.start && cur <= c.end);
      if (cue) {
        onTurnChange?.(cue.turnIndex, cue.speakerTag);
      }
    };

    audio.onloadedmetadata = () => {
      if (isPlaybackCancelled) return;
      const dur = audio.duration || track.totalDuration || 0;
      onProgress?.(audio.currentTime, dur);
    };

    audio.onplay = () => {
      onStart?.();
    };

    audio.onended = () => {
      const dur = audio.duration || track.totalDuration || 0;
      onProgress?.(dur, dur);
      activeAudio = null;
      onEnd?.();
    };

    audio.onerror = () => {
      if (isPlaybackCancelled) return;
      activeAudio = null;
      fallbackPlayChoukaiDialogue(rawScript, onStart, onEnd, onTurnChange, onProgress);
    };

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        if (isPlaybackCancelled) return;
        activeAudio = null;
        fallbackPlayChoukaiDialogue(rawScript, onStart, onEnd, onTurnChange, onProgress);
      });
    }
    return;
  }

  // 2. Fallback to turn-by-turn dialogue player
  fallbackPlayChoukaiDialogue(rawScript, onStart, onEnd, onTurnChange, onProgress);
}

function fallbackPlayChoukaiDialogue(
  rawScript: string,
  onStart?: () => void,
  onEnd?: () => void,
  onTurnChange?: (turnIndex: number, speakerTag: string) => void,
  onProgress?: (currentTime: number, duration: number) => void
): void {
  const turns = parseChoukaiDialogue(rawScript, 1.0);
  if (turns.length === 0) {
    onEnd?.();
    return;
  }

  let currentTurnIndex = 0;
  let hasStarted = false;

  function speakNextTurn() {
    if (isPlaybackCancelled || currentTurnIndex >= turns.length) {
      if (!isPlaybackCancelled) {
        onEnd?.();
      }
      return;
    }

    const turn = turns[currentTurnIndex];
    if (!turn) {
      if (!isPlaybackCancelled) {
        onEnd?.();
      }
      return;
    }
    onTurnChange?.(currentTurnIndex, turn.speakerTag);

    // Try backend /api/v1/tts stream first for authentic natural Japanese speech
    try {
      const encoded = encodeURIComponent(turn.cleanText);
      const audioUrl = `/api/v1/tts?text=${encoded}`;
      const audio = new Audio(audioUrl);
      activeAudio = audio;
      audio.playbackRate = currentChoukaiSpeed;

      audio.onplay = () => {
        if (!hasStarted) {
          hasStarted = true;
          onStart?.();
        }
      };

      audio.onended = () => {
        if (isPlaybackCancelled) return;
        currentTurnIndex++;
        if (currentTurnIndex < turns.length) {
          interTurnTimeout = setTimeout(() => {
            if (!isPlaybackCancelled) {
              speakNextTurn();
            }
          }, 450);
        } else {
          onEnd?.();
        }
      };

      audio.onerror = () => {
        if (isPlaybackCancelled) return;
        speakTurnViaSynthesis(turn);
      };

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          if (isPlaybackCancelled) return;
          speakTurnViaSynthesis(turn);
        });
      }
    } catch {
      speakTurnViaSynthesis(turn);
    }
  }

  function speakTurnViaSynthesis(turn: ChoukaiTurn) {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      currentTurnIndex++;
      speakNextTurn();
      return;
    }

    const utterance = new SpeechSynthesisUtterance(turn.cleanText);
    utterance.lang = 'ja-JP';
    utterance.pitch = turn.pitch;
    utterance.rate = Math.min(2.0, Math.max(0.5, turn.rate * currentChoukaiSpeed));

    if (turn.voice) {
      utterance.voice = turn.voice;
    }

    utterance.onstart = () => {
      if (!hasStarted) {
        hasStarted = true;
        onStart?.();
      }
    };

    utterance.onend = () => {
      if (isPlaybackCancelled) return;
      currentTurnIndex++;
      if (currentTurnIndex < turns.length) {
        interTurnTimeout = setTimeout(() => {
          if (!isPlaybackCancelled) {
            speakNextTurn();
          }
        }, 450);
      } else {
        onEnd?.();
      }
    };

    utterance.onerror = () => {
      if (isPlaybackCancelled) return;
      currentTurnIndex++;
      speakNextTurn();
    };

    window.speechSynthesis.speak(utterance);
  }

  speakNextTurn();
}

/**
 * Extracts authentic Japanese sentences and vocabulary titles.
 * Completely excludes Indonesian translation, explanations, and markdown artifacts.
 */
export function extractJapaneseSpeechText(rawText: string, isFullDialogue: boolean = false): string {
  if (!rawText || !hasJapaneseText(rawText)) return '';

  const trimmedRaw = rawText.trim();
  // Pure Japanese short reading, single kana, or kanji word (e.g. "エ", "む", "ケイ", "めぐむ", "めぐ・む")
  const pureJp = trimmedRaw.replace(/[・\.\-\s]/g, '');
  if (/^[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]+$/.test(pureJp) && pureJp.length <= 25) {
    return pureJp;
  }

  const isDialogue = isFullDialogue || /^[\u5973\u7537AB\u5e97\u54e1\u5148\u751f\u5b66\u751f1234567890\d][\uff1a:]/m.test(rawText);
  const lines = rawText.split('\n');
  const vocabularyTitles: string[] = [];
  const exampleSentences: string[] = [];

  for (const line of lines) {
    let trimmed = line.trim();
    if (!trimmed) continue;

    // Strip list markers, bullets, and numbers
    trimmed = trimmed.replace(/^([>#\u2022\-*]+|\d+[\.\)])\s*/, '').trim();
    if (!trimmed) continue;

    const unwrapped = trimmed.replace(/^(\**|`)|(\**|`)$/g, '').trim();

    // Skip section headers in ID, EN, or MY
    if (/^(Nuansa|Kunci JLPT|Trik Ujian|Tips|Rangkuman|Catatan|Arti|Penjelasan|CONTOH|Nuance|JLPT Key|Exam Tips|Explanation|Correct Answer|Logical Reason|Dokkai Analysis|သဘောသဘာဝ|JLPT အဓိက သော့ချက်|စာမေးပွဲ သော့ချက်|မှန်ကန်သော အဖြေ|ယုတ္တိနည်းကျ|အဓိက ရှင်းလင်းချက်|ဥပမာ စာကြောင်း|စာမေးပွဲ ဖြေဆိုနည်း|အဘယ်ကြောင့်|မှားယွင်းရသောအချက်)/i.test(unwrapped)) {
      continue;
    }

    // Skip pure parenthetical translation lines
    if (/^[\(\（][^\)\）]+[\)\）]$/.test(unwrapped)) {
      continue;
    }

    // Extract title word + reading: e.g. 扇ぐ（あおぐ） or 扇ぐ (あおぐ)
    const titleMatch = unwrapped.match(
      /^([\u4E00-\u9FAF\u3040-\u309F\u30A0-\u30FF]+)\s*[\(\（]([\u3040-\u309F\u30A0-\u30FF]+)[\)\）]/
    );
    if (!isDialogue && titleMatch && titleMatch[1] && titleMatch[2]) {
      vocabularyTitles.push(`${titleMatch[1]}、${titleMatch[2]}。`);
      continue;
    }

    // Strip speaker labels
    const strippedSpeaker = unwrapped.replace(/^([^：:\s]+)[：:]\s*/, '').trim();

    // Strictly skip any line containing Myanmar characters (explanations in Burmese)
    if (/[\u1000-\u109F]/.test(strippedSpeaker)) {
      continue;
    }

    // Strip parenthetical text (e.g. embedded translation or remarks)
    const cleanNoParens = strippedSpeaker.replace(/[\(\（][^\)\）]+[\)\）]/g, '').trim();

    if (/[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]/.test(cleanNoParens)) {
      const jpChars = (cleanNoParens.match(/[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]/g) || []).length;
      const latinChars = (cleanNoParens.match(/[a-zA-Z]/g) || []).length;
      const meaningfulLen = cleanNoParens.replace(/[\s\d\.\,\(\)\/\"\'\:\：\-\w\*\~\=\+]+/g, '').length;
      const jpRatio = meaningfulLen > 0 ? jpChars / meaningfulLen : 0;

      // Authentic Japanese sentence must have at least 2 Japanese characters, at most 2 Latin characters, and be >= 70% Japanese
      if (jpChars >= 2 && latinChars <= 2 && jpRatio >= 0.7) {
        const cleanSentence = cleanFuriganaToKanji(cleanNoParens.replace(/[*_`]/g, '')).trim();
        if (cleanSentence) {
          const punctuation = /[。\！？\?]$/.test(cleanSentence) ? '' : '。';
          exampleSentences.push(cleanSentence + punctuation);
        }
      }
    }
  }

  if ((isDialogue || isFullDialogue) && exampleSentences.length > 0) {
    return exampleSentences.join('\n');
  }

  const combined = [
    ...vocabularyTitles.slice(0, 1),
    ...(isFullDialogue ? exampleSentences : exampleSentences.slice(0, 2)),
  ];
  if (combined.length > 0) {
    return combined.join(' ');
  }

  return '';
}

export function playNaturalJapaneseVoice(
  rawText: string,
  onStart?: () => void,
  onEnd?: () => void,
  speedOrVoice: number | 'female' | 'child' | 'male' = 1.0,
  isFullDialogue: boolean = false,
  voiceTypeParam?: 'female' | 'child' | 'male'
): void {
  let speed = 1.0;
  let voiceType: 'female' | 'child' | 'male' = 'female';

  if (typeof speedOrVoice === 'string') {
    voiceType = speedOrVoice;
  } else {
    speed = speedOrVoice;
    if (voiceTypeParam) {
      voiceType = voiceTypeParam;
    }
  }
  stopAudio();
  isPlaybackCancelled = false;

  const textToSpeak = extractJapaneseSpeechText(rawText, isFullDialogue);
  if (!textToSpeak) {
    onEnd?.();
    return;
  }

  onStart?.();

  try {
    const encoded = encodeURIComponent(textToSpeak);
    const audioUrl = `/api/v1/tts?text=${encoded}&voice=${voiceType}`;
    const audio = new Audio(audioUrl);
    activeAudio = audio;

    audio.playbackRate = speed;
    audio.onended = () => {
      activeAudio = null;
      onEnd?.();
    };

    audio.onerror = () => {
      if (isPlaybackCancelled) return;
      activeAudio = null;
      playViaSpeechSynthesis(textToSpeak, onStart, onEnd, speed, voiceType === 'male' ? 'male' : 'female', voiceType === 'child' ? 1.4 : 1.0);
    };

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        if (isPlaybackCancelled) return;
        activeAudio = null;
        playViaSpeechSynthesis(textToSpeak, onStart, onEnd, speed, voiceType === 'male' ? 'male' : 'female', voiceType === 'child' ? 1.4 : 1.0);
      });
    }
  } catch {
    playViaSpeechSynthesis(textToSpeak, onStart, onEnd, speed, voiceType === 'male' ? 'male' : 'female', voiceType === 'child' ? 1.4 : 1.0);
  }
}

function playViaSpeechSynthesis(
  textToSpeak: string,
  onStart?: () => void,
  onEnd?: () => void,
  speed: number = 1.0,
  preferGender?: 'male' | 'female',
  customPitch: number = 1.0
): void {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    onEnd?.();
    return;
  }

  const chunks = textToSpeak
    .split(/[\r\n]+/)
    .map((s) => s.trim())
    .filter(Boolean);

  if (chunks.length === 0) {
    onEnd?.();
    return;
  }

  const bestVoice = getBestJapaneseVoice(preferGender);
  let currentIndex = 0;
  let hasStarted = false;

  function speakNextChunk() {
    if (isPlaybackCancelled || currentIndex >= chunks.length) {
      if (!isPlaybackCancelled) {
        onEnd?.();
      }
      return;
    }

    const currentText = chunks[currentIndex];
    const utterance = new SpeechSynthesisUtterance(currentText);
    utterance.lang = 'ja-JP';
    utterance.rate = Math.min(2.0, Math.max(0.5, 1.02 * speed));
    utterance.pitch = 1.0;

    if (bestVoice) {
      utterance.voice = bestVoice;
    }

    utterance.onstart = () => {
      if (!hasStarted) {
        hasStarted = true;
        onStart?.();
      }
    };

    utterance.onend = () => {
      currentIndex++;
      speakNextChunk();
    };

    utterance.onerror = () => {
      currentIndex++;
      speakNextChunk();
    };

    window.speechSynthesis.speak(utterance);
  }

  speakNextChunk();
}

export function stopAudio(): void {
  isPlaybackCancelled = true;
  if (dokkaiProgressTimer) {
    clearInterval(dokkaiProgressTimer);
    dokkaiProgressTimer = null;
  }
  if (interTurnTimeout) {
    clearTimeout(interTurnTimeout);
    interTurnTimeout = null;
  }
  if (activeAudio) {
    activeAudio.pause();
    activeAudio.currentTime = 0;
    activeAudio = null;
  }
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}


/**
 * Plays a full Dokkai Japanese reading passage.
 * Uses high-fidelity SpeechSynthesis / TTS with Japanese Tokyo native voices.
 * Provides on-the-fly continuous progress tracking and seekable scrubber support.
 */
export function playDokkaiPassage(
  passageText: string,
  onStart?: () => void,
  onEnd?: () => void,
  speed: number = 1.0,
  onProgress?: (currentTime: number, duration: number) => void,
  initialTime?: number,
  passageId?: string
): void {
  stopAudio();
  isPlaybackCancelled = false;
  currentDokkaiSpeed = speed;

  // 1. Primary: Use studio-grade pre-rendered neural tracks (Nanami/Keita Neural)
  const track = passageId ? getDokkaiTrack(passageId) : null;
  if (track) {
    const audio = new Audio(track.audioUrl);
    activeAudio = audio;
    audio.playbackRate = currentDokkaiSpeed;

    if (initialTime !== undefined && initialTime > 0) {
      audio.currentTime = initialTime;
    }

    audio.ontimeupdate = () => {
      if (isPlaybackCancelled) return;
      const cur = audio.currentTime;
      const dur = audio.duration || track.totalDuration || 0;
      onProgress?.(cur, dur);
    };

    audio.onloadedmetadata = () => {
      if (isPlaybackCancelled) return;
      const dur = audio.duration || track.totalDuration || 0;
      onProgress?.(audio.currentTime, dur);
    };

    audio.onplay = () => {
      onStart?.();
    };

    audio.onended = () => {
      const dur = audio.duration || track.totalDuration || 0;
      onProgress?.(dur, dur);
      activeAudio = null;
      onEnd?.();
    };

    audio.onerror = () => {
      if (isPlaybackCancelled) return;
      activeAudio = null;
      fallbackPlayDokkaiViaTTS(passageText, onStart, onEnd, speed, onProgress, initialTime);
    };

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        if (isPlaybackCancelled) return;
        activeAudio = null;
        fallbackPlayDokkaiViaTTS(passageText, onStart, onEnd, speed, onProgress, initialTime);
      });
    }
    return;
  }

  // 2. Fallback to sentence-by-sentence TTS
  fallbackPlayDokkaiViaTTS(passageText, onStart, onEnd, speed, onProgress, initialTime);
}

function fallbackPlayDokkaiViaTTS(
  passageText: string,
  onStart?: () => void,
  onEnd?: () => void,
  speed: number = 1.0,
  onProgress?: (currentTime: number, duration: number) => void,
  initialTime?: number
): void {
  stopAudio();
  isPlaybackCancelled = false;
  currentDokkaiSpeed = speed;

  const cleanText = extractJapaneseSpeechText(passageText, true) || passageText;
  const estimatedDuration = Math.max(10, Math.round(cleanText.length / (5.0 * speed)));

  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    onEnd?.();
    return;
  }

  const sentences = cleanText
    .split(/(?<=[。！？\n])/)
    .map((s) => s.trim())
    .filter(Boolean);

  if (sentences.length === 0) {
    onEnd?.();
    return;
  }

  const bestVoice = getBestJapaneseVoice();
  let currentIndex = 0;
  let hasStarted = false;
  let elapsed = initialTime || 0;

  if (dokkaiProgressTimer) {
    clearInterval(dokkaiProgressTimer);
  }

  dokkaiProgressTimer = setInterval(() => {
    if (isPlaybackCancelled) {
      clearInterval(dokkaiProgressTimer);
      return;
    }
    elapsed += 0.25 * currentDokkaiSpeed;
    if (elapsed > estimatedDuration) elapsed = estimatedDuration;
    onProgress?.(elapsed, estimatedDuration);
  }, 250);

  function speakNextSentence() {
    if (isPlaybackCancelled || currentIndex >= sentences.length) {
      if (dokkaiProgressTimer) clearInterval(dokkaiProgressTimer);
      if (!isPlaybackCancelled) {
        onProgress?.(estimatedDuration, estimatedDuration);
        onEnd?.();
      }
      return;
    }

    const currentSentence = sentences[currentIndex];
    const utterance = new SpeechSynthesisUtterance(currentSentence);
    utterance.lang = 'ja-JP';
    utterance.rate = Math.min(2.0, Math.max(0.6, 1.0 * currentDokkaiSpeed));
    utterance.pitch = 1.0;

    if (bestVoice) {
      utterance.voice = bestVoice;
    }

    utterance.onstart = () => {
      if (!hasStarted) {
        hasStarted = true;
        onStart?.();
      }
    };

    utterance.onend = () => {
      if (isPlaybackCancelled) return;
      currentIndex++;
      if (currentIndex < sentences.length) {
        interTurnTimeout = setTimeout(() => {
          if (!isPlaybackCancelled) speakNextSentence();
        }, 300);
      } else {
        if (dokkaiProgressTimer) clearInterval(dokkaiProgressTimer);
        onProgress?.(estimatedDuration, estimatedDuration);
        onEnd?.();
      }
    };

    utterance.onerror = () => {
      if (isPlaybackCancelled) return;
      currentIndex++;
      speakNextSentence();
    };

    window.speechSynthesis.speak(utterance);
  }

  speakNextSentence();
}

/**
 * Universal Audio Player supporting multiple learning targets (Indonesian, Burmese, English, Japanese)
 */
export function playUniversalAudio(
  text: string,
  targetLanguage: string = 'ja',
  speed: number = 1.0,
  onEnd?: () => void
): void {
  stopAudio();
  isPlaybackCancelled = false;

  const cleanText = text
    .replace(/^([>#\u2022\-*]+|\d+[\.\)])\s*/, '')
    .replace(/[*_`]/g, '')
    .trim();

  if (!cleanText) {
    onEnd?.();
    return;
  }

  const lang = targetLanguage.toLowerCase();

  // If Japanese or contains Japanese characters, use the dedicated Japanese neural / TTS engine
  if (lang === 'ja' || hasJapaneseText(cleanText)) {
    playNaturalJapaneseVoice(cleanText, undefined, onEnd, speed);
    return;
  }

  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    onEnd?.();
    return;
  }

  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.rate = Math.min(2.0, Math.max(0.5, speed));
  utterance.pitch = 1.0;

  const voices = window.speechSynthesis.getVoices();

  if (lang === 'id') {
    utterance.lang = 'id-ID';
    const idVoice = voices.find((v) => v.lang === 'id-ID' || v.lang.startsWith('id') || v.name.toLowerCase().includes('indonesia'));
    if (idVoice) utterance.voice = idVoice;
  } else if (lang === 'my') {
    utterance.lang = 'my-MM';
    const myVoice = voices.find((v) => v.lang === 'my-MM' || v.lang.startsWith('my') || v.name.toLowerCase().includes('myanmar') || v.name.toLowerCase().includes('burmese'));
    if (myVoice) utterance.voice = myVoice;
  } else if (lang === 'en') {
    utterance.lang = 'en-US';
    const enVoice = voices.find((v) => v.lang === 'en-US' || v.lang.startsWith('en'));
    if (enVoice) utterance.voice = enVoice;
  } else {
    utterance.lang = lang;
  }

  utterance.onend = () => {
    onEnd?.();
  };

  utterance.onerror = () => {
    onEnd?.();
  };

  window.speechSynthesis.speak(utterance);
}
