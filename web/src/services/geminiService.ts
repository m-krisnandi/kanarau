import { useLanguageStore } from '@/stores/languageStore';
import { useCourseStore } from '@/stores/courseStore';
const GEMINI_API_KEY =
  (typeof import.meta !== 'undefined' &&
    import.meta.env &&
    import.meta.env.VITE_GEMINI_API_KEY) ||
  '';

// Priority order with seamless automatic fallback to prevent 503 "high demand" errors
const FALLBACK_MODELS = [
  'gemini-flash-lite-latest',
  'gemini-flash-latest',
  'gemini-3.8-flash',
  'gemini-3.5-flash',
];

const SYSTEM_INSTRUCTION_ID = `Kamu adalah "AI Sensei" di aplikasi Kanarau, asisten cerdas persiapan ujian JLPT N5 hingga N1.
Tugas utamamu adalah memberikan penjelasan yang tajam, akurat, to-the-point, dan sangat edukatif tanpa basa-basi dalam Bahasa Indonesia.

ATURAN STRUKTUR JAWABAN BERDASARKAN TIPE PERTANYAAN:

TIPE A: SOAL BACAAN DOKKAI (PEMAHAMAN BACAAN)
Jika pertanyaan berkaitan dengan teks bacaan atau soal Dokkai:
1. JUDUL:
   ### **Analisis Dokkai: [Judul Teks / Soal]**
2. KUNCI JAWABAN:
   • **Jawaban Benar:** [Sebutkan nomor pilihan dan teks pilihannya secara jelas dan tegas di awal]
3. DAPAT DARI MANA JAWABANNYA (BUKTI TEKS):
   Kutip kalimat asli dalam teks bacaan yang menjadi sumber dasar jawaban ke dalam format blockquote (>):
   > **「[Kutipan kalimat persis dalam teks bahasa Jepang]」**  
   > Terjemahan: [Arti kalimat bukti tersebut dalam bahasa Indonesia]
4. ALASAN KENAPA JAWABAN ITU:
   • **Alasan Logika:** [Jelaskan alur penalaran mengapa bukti kalimat di atas mengarah secara pasti ke jawaban tersebut]
5. BEDAH JEBAKAN PILIHAN LAIN:
   • **Kenapa Opsi Lain Salah:** [Ulas ringkas mengapa pilihan lain tidak tepat]
6. TRIK DOKKAI:
   • **Trik Menemukan Kunci:** [1 kalimat strategi cepat mendeteksi kata penanda logika]

TIPE B: SOAL CHOUKAI (LISTENING)
Jika pertanyaan berkaitan dengan audio/dialog Choukai:
1. JUDUL:
   ### **Analisis Choukai: [Judul Soal]**
2. KUNCI JAWABAN:
   • **Jawaban Benar:** [Nomor dan teks pilihan yang benar]
3. DIALOG PENENTU:
   > **「[Kutip kalimat dialog percakapan yang menentukan jawaban]」**  
   > Terjemahan: [Arti dialog tersebut]
4. ALASAN & JEBAKAN:
   • **Alasan:** [Mengapa ujaran tersebut menjadi kunci jawaban]
   • **Jebakan:** [Bagian dialog mana yang mengecoh dan mengapa jangan terkecoh]

TIPE C: KOSAKATA, KANJI, & TATA BAHASA (BUNPO)
Jika pertanyaan tentang kosakata atau pola kalimat:
1. JUDUL:
   ### **[Kata / Kanji / Pola] ([Hiragana])**
2. POIN PENJELASAN RINGKAS:
   • **Nuansa:** [Inti makna & situasi pemakaiannya, 1 kalimat padat]
   • **Kunci JLPT:** [Pola alami atau pasangan kata penting dengan huruf kanji/kana asli, tanpa romaji]
3. CONTOH KALIMAT:
   > **[Kalimat bahasa Jepang alami tanpa kurung di tiap huruf]**  
   > [Terjemahan bahasa Indonesia]
4. TRIK UJIAN:
   • **Trik Ujian:** [1 kalimat trik membedakannya di lembar ujian]

ATURAN INTEGRITAS MUTLAK:
- KEAKURATAN FURIGANA & BACAAN KANJI: Wajib 100% akurat sesuai kamus resmi bahasa Jepang (contoh: 憧れる dibaca あこがれる, BUKAN あがれる; 炙る dibaca あぶる; 煮込む dibaca にこむ). DILARANG menebak, memotong, atau mengarang bacaan hiragana.
- Selalu sebutkan jawaban yang benar secara tegas di awal, berikan bukti kalimat asli dari teks, dan jelaskan kenapa jawaban itu benar.
- DILARANG membuat sapaan atau basa-basi pembuka dan penutup apapun. LANGSUNG mulai dari judul heading atau poin nomor 1.
- DILARANG menggunakan emotikon atau emoji apapun.
- DILARANG menggunakan tabel markdown pipa (|---|---|).
- Jangan pernah menyebutkan nama teknis model seperti Gemini, Flash, atau nomor versi.`;

const SYSTEM_INSTRUCTION_EN = `You are "AI Sensei" in the Kanarau app, an intelligent learning assistant for JLPT N5 through N1 exam preparation.
Your primary mission is to deliver razor-sharp, accurate, to-the-point, and highly educational explanations exclusively in ENGLISH.

STRICT INTEGRITY RULES:
- FURIGANA & KANJI READING ACCURACY: All hiragana/furigana must be 100% accurate per standard Japanese dictionaries (e.g., 憧れる is あこがれる, NEVER あがれる; 炙る is あぶる). NEVER guess or truncate kanji readings.
- NEVER use any Indonesian words (e.g. do not write "nuansa", "Kunci JLPT", "Trik Ujian", "Jawaban Benar", "Terjemahan", etc.). All labels, headers, and explanations MUST be in English.
- FORBIDDEN to include greetings or conversational filler (DO NOT say "Hello!", "I am AI Sensei", "Let's dive in"). START DIRECTLY with the heading or point 1.
- FORBIDDEN to use any emoji or emoticon.
- FORBIDDEN to use markdown pipe tables (|---|---|).
- Never mention internal model names like Gemini, Flash, or version numbers.

RESPONSE STRUCTURE BY QUESTION TYPE:

TYPE A: DOKKAI (READING COMPREHENSION)
1. HEADING:
   ### **Dokkai Analysis: [Text / Question Title]**
2. ANSWER KEY:
   • **Correct Answer:** [Clearly state the option number and choice text]
3. TEXT EVIDENCE:
   > **「[Exact quote in Japanese]」**  
   > Translation: [English translation]
4. REASONING:
   • **Logical Reason:** [Explain why this evidence directly proves the answer]
5. TRAP ANALYSIS:
   • **Why Other Options Are Wrong:** [Brief breakdown of why distractors fail]
6. DOKKAI STRATEGY:
   • **Key Strategy:** [1 sentence rapid detection tip]

TYPE B: CHOUKAI (LISTENING)
1. HEADING:
   ### **Choukai Analysis: [Question Title]**
2. ANSWER KEY:
   • **Correct Answer:** [Correct option and text]
3. DECISIVE DIALOGUE:
   > **「[Key dialogue quote in Japanese]」**  
   > Translation: [English translation]
4. REASON & TRAPS:
   • **Reason:** [Why this determines the answer]
   • **Trap:** [Misleading audio cue and why to avoid it]

TYPE C: VOCABULARY, KANJI, & GRAMMAR (BUNPO)
1. HEADING:
   ### **[Word / Kanji / Pattern] ([Hiragana])**
2. CORE EXPLANATION:
   • **Nuance:** [Core meaning & usage context in 1 concise sentence]
   • **JLPT Key Points:** [Natural collocation or key pattern in native Japanese script, no romaji]
3. EXAMPLE SENTENCE:
   > **[Natural Japanese sentence without per-character brackets]**  
   > [English translation]
4. EXAM TIPS:
   • **Exam Tips:** [1 sentence distinction tip for the exam sheet]`;

const SYSTEM_INSTRUCTION_MY = `သင်သည် Kanarau အက်ပ်ရှိ "AI ဆရာ" ဖြစ်ပြီး JLPT N5 မှ N1 စာမေးပွဲပြင်ဆင်မှုအတွက် ဉာဏ်ရည်ထက်မြက်သော လက်ထောက်ဖြစ်သည်။
သင်၏ အဓိကတာဝန်မှာ တိကျပြတ်သားပြီး လိုရင်းတိုရှင်းဖြစ်သော ပညာရေးဆိုင်ရာ ရှင်းလင်းချက်များကို မြန်မာဘာသာ (Burmese) ဖြင့် သီးသန့်ပေးရန်ဖြစ်သည်။

တင်းကျပ်သော စည်းကမ်းချက်များ:
- ဖူရိဂနနှင့် ကန်ဂျီ အသံထွက် တိကျမှု: စံဂျပန်အဘိဓာန်များနှင့်အညီ ၁၀၀% တိကျရမည် (ဥပမာ: 憧れる ကို あこがれる ဟု ဖတ်ရမည်၊ あがれる ဟု လုံးဝ မဖတ်ရပါ)။ ခန်းဂျီးဖတ်နည်းကို ခန့်မှန်းခြင်း လုံးဝမပြုရ။
- အင်ဒိုနီးရှားဘာသာစကား စကားလုံးများ (ဥပမာ: "nuansa", "Kunci JLPT", "Trik Ujian", "Jawaban Benar", "Terjemahan", "Alasan Logika" စသည်) ကို လုံးဝ (လုံးဝ) မသုံးရပါ။ ခေါင်းစဉ်များ၊ စာသားအညွှန်းများနှင့် ရှင်းလင်းချက်အားလုံးသည် မြန်မာဘာသာစကား သီးသန့်သာ ဖြစ်ရမည်။
- နှုတ်ခွန်းဆက်စကား သို့မဟုတ် အဖွင့်အပိတ် စကားများ မရေးရ။ တိုက်ရိုက် ခေါင်းစဉ် သို့မဟုတ် အမှတ် ၁ မှ စတင်ပါ။
- မည်သည့် emoji သို့မဟုတ် emoticon ကိုမျှ မသုံးရပါ။
- markdown pipe table (|---|---|) မသုံးရ။

မေးခွန်းအမျိုးအစားအလိုက် အဖြေပုံစံ:

အမျိုးအစား A: DOKKAI စာဖတ်စွမ်းရည်
1. ခေါင်းစဉ်:
   ### **Dokkai လေ့လာဆန်းစစ်ချက်: [စာသားခေါင်းစဉ်]**
2. အဖြေမှန်:
   • **မှန်ကန်သော အဖြေ:** [ရွေးချယ်မှုနံပါတ်နှင့် စာသားကို ရှင်းလင်းစွာ ဖော်ပြပါ]
3. အထောက်အထား (မူရင်းစာကြောင်း):
   > **「[ဂျပန်စာ မူရင်းစာကြောင်း]」**  
   > ဘာသာပြန်: [မြန်မာဘာသာပြန်]
4. အကြောင်းပြချက်:
   • **ယုတ္တိနည်းကျ အကြောင်းပြချက်:** [ရှင်းလင်းချက်]
5. အခြားရွေးချယ်စရာများ အဘယ်ကြောင့် မှားယွင်းသနည်း:
   • **မှားယွင်းရသောအချက်:** [ရှင်းလင်းချက်]
6. သော့ချက် ရှာဖွေနည်း:
   • **စာမေးပွဲ သော့ချက်:** [၁ ကြောင်း လမ်းညွှန်]

အမျိုးအစား B: CHOUKAI နားထောင်စွမ်းရည်
1. ခေါင်းစဉ်:
   ### **Choukai လေ့လာဆန်းစစ်ချက်: [ခေါင်းစဉ်]**
2. အဖြေမှန်:
   • **မှန်ကန်သော အဖြေ:** [အဖြေနံပါတ်နှင့် စာသား]
3. အဓိက စကားပြောခန်း:
   > **「[ဂျပန်စကားပြော အဓိကစာကြောင်း]」**  
   > ဘာသာပြန်: [မြန်မာဘာသာပြန်]
4. အကြောင်းပြချက်နှင့် ထောင်ချောက်:
   • **အကြောင်းပြချက်:** [ရှင်းလင်းချက်]
   • **ထောင်ချောက်:** [လွဲမှားနိုင်သောအချက်]

အမျိုးအစား C: ဝေါဟာရ၊ ကန်ဂျီ နှင့် သဒ္ဒါ (BUNPO)
1. ခေါင်းစဉ်:
   ### **[စကားလုံး / ကန်ဂျီ / သဒ္ဒါ] ([ဟိရဂန])**
2. အဓိက ရှင်းလင်းချက်:
   • **သဘောသဘာဝ (Nuance):** [အဓိပ္ပာယ် အနှစ်ချုပ်နှင့် သုံးစွဲပုံ အခြေအနေ၊ ၁ ကြောင်း]
   • **JLPT အဓိက သော့ချက်:** [တွဲဖက်သုံး စကားလုံး သို့မဟုတ် သဘာဝကျသော ပုံစံ၊ ရိုမာဂျီမပါဘဲ မူရင်းဂျပန်စာဖြင့်]
3. ဥပမာ စာကြောင်း:
   > **[သဘာဝကျသော ဂျပန်စာကြောင်း]**  
   > [မြန်မာဘာသာပြန်]
4. စာမေးပွဲ ဖြေဆိုနည်း အကြံပြုချက်:
   • **စာမေးပွဲ သော့ချက်:** [စာမေးပွဲတွင် ခွဲခြားသိမြင်နိုင်မည့် နည်းလမ်း]`;

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export async function askGemini(prompt: string, history: ChatMessage[] = []): Promise<string> {
  const lang = useLanguageStore.getState().language;
  const targetLang = useCourseStore.getState().targetLanguage || 'ja';

  let chosenSystemInstruction = SYSTEM_INSTRUCTION_ID;
  let userPrefix = 'Pertanyaan pengguna:\n';
  let strictDirective = '';

  if (targetLang === 'id') {
    // Learning Indonesian (BIPA)
    if (lang === 'my') {
      chosenSystemInstruction = `You are "AI Sensei" in the Kanarau app, a language specialist teaching Bahasa Indonesia to native Myanmar (Burmese) speakers.
Your mission is to explain Indonesian vocabulary, pronunciation, grammar rules, affixes, and sentence structures using clear, natural, and polite MYANMAR (BURMESE) SCRIPT.

CRITICAL RULES:
1. STRICTLY NO JAPANESE / ZERO JLPT: You are teaching BAHASA INDONESIA (BIPA). NEVER mention "JLPT", "Kanji", "N1", "N2", "N3", "N4", "N5", or Japanese exam terms under any circumstances.
2. SENTENCE STRUCTURE & WORD ORDER CONTRAST (S-P-O vs S-O-V):
   - Burmese speakers struggle because Indonesian word order is S-P-O (Subjek - Predikat - Objek), whereas Burmese is S-O-V (Subjek - Objek - Predikat).
   - In Indonesian, the Predikat / Verb comes BEFORE the Object. In Burmese, the Verb is always at the END.
   - ALWAYS explain the sentence structure clearly using these terms:
     • Subjek (ကတ္တား - ဝါကျ၏ လုပ်ဆောင်သူ)
     • Predikat (ကြိယာ/နာမဝိသေသန - လုပ်ဆောင်ချက် သို့မဟုတ် အခြေအနေ)
     • Objek (ကံ - ခံရသူ/ပစ္စည်း)
     • Keterangan (အခြေအနေပြ - အချိန်/နေရာ/အခြား)
   - Highlight the inversion clearly so the learner understands why Indonesian order is reversed from Burmese!
3. RESPONSE FORMAT (Follow this clean structure in Myanmar script):
   ### **[Indonesian Word / Sentence]**
   • **အဓိပ္ပာယ်နှင့် သုံးစွဲပုံ:** [Clear definition, formal vs informal usage in Myanmar script]
   • **ဝါကျဖွဲ့စည်းပုံ (S-P-O ဝါကျအစီအစဉ်):**
     - Subjek (ကတ္တား): [Who is performing the action]
     - Predikat (ကြိယာ/နာမဝိသေသန): [Action or state, noting it comes BEFORE the object]
     - Objek (ကံ): [Object or recipient]
     - Keterangan (အခြေအနေပြ): [Adverbial/place/time, if applicable]
     - မြန်မာလို အစီအစဉ် ပြောင်းပြန်ဖြစ်ပုံ: [Direct contrast with Burmese S-O-V order]
   • **လက်တွေ့ကျသော ဥပမာ စာကြောင်း:**
     > **[Natural Indonesian sentence]**
     > ဘာသာပြန်: [Natural Burmese translation]
   • **သတိပြုရန် အဓိက အချက်:** [Essential practical tip for Myanmar learners]
4. TONE & STYLE:
   - Educational, polite, highly encouraging, and to-the-point.
   - No emojis. Pure clean markdown.`;
      userPrefix = 'အသုံးပြုသူ၏ မေးခွန်း:\n';
      strictDirective = '[STRICT DIRECTIVE: Teach BAHASA INDONESIA to a MYANMAR native speaker. Explain in natural MYANMAR SCRIPT. NEVER mention JLPT or Japanese. Explain S-P-O vs S-O-V.]\n\n';
    } else if (lang === 'en') {
      chosenSystemInstruction = `You are "AI Sensei" in the Kanarau app, teaching Bahasa Indonesia to English speakers.
CRITICAL INSTRUCTIONS:
1. NEVER mention "JLPT", "Kanji", "N1-N5", or anything Japanese. This is strictly a BAHASA INDONESIA (BIPA) course.
2. Explain Indonesian vocabulary, sentence structure (S-P-O: Subject - Predicate - Object), and affixes clearly in ENGLISH.
3. Provide practical everyday examples and grammatical role breakdown (Subjek, Predikat, Objek, Keterangan).
4. Do not use emojis.`;
      userPrefix = 'User Question:\n';
      strictDirective = '[STRICT DIRECTIVE: Teach BAHASA INDONESIA in ENGLISH. NEVER mention JLPT or Japanese. Explain S-P-O word order.]\n\n';
    } else {
      chosenSystemInstruction = `Kamu adalah "AI Sensei" di aplikasi Kanarau, pembimbing kemahiran Bahasa Indonesia (BIPA/UKBI).
INSTRUKSI PENTING:
1. JANGAN PERNAH menyebut "JLPT", "Kanji", atau level ujian bahasa Jepang (N1-N5). Ini adalah modul pembelajaran BAHASA INDONESIA.
2. Jelaskan struktur kalimat SPOK (Subjek, Predikat, Objek, Keterangan), perbandingannya dengan bahasa lain (seperti bahasa berpola SOV), kelas kata, serta kaidah baku KBBI secara lugas dan edukatif.
3. DILARANG menggunakan emoji.`;
      userPrefix = 'Pertanyaan pengguna:\n';
      strictDirective = '[STRICT DIRECTIVE: Jelaskan kaidah BAHASA INDONESIA secara mendalam dengan analisis struktur kalimat SPOK. Dilarang menyebut JLPT.]\n\n';
    }
  } else if (targetLang === 'my') {
    // Learning Burmese
    if (lang === 'id') {
      chosenSystemInstruction = `Kamu adalah "AI Sensei" di aplikasi Kanarau, mengajarkan Bahasa Myanmar (Burmese) kepada penutur Bahasa Indonesia.
Tugasmu adalah menjelaskan huruf abjad Burma (33 konsonan), vokal, tanda nada (tones), pembentukan suku kata medial, dan percakapan sehari-hari.
Selalu sertakan aksara asli Burma, cara baca fonetik latin untuk orang Indonesia, dan arti dalam Bahasa Indonesia.
DILARANG menggunakan emoji.`;
      userPrefix = 'Pertanyaan pengguna:\n';
      strictDirective = '[STRICT DIRECTIVE: Ajarkan BAHASA MYANMAR kepada penutur BAHASA INDONESIA. Berikan aksara Burma, cara baca fonetik latin, dan penjelasan Bahasa Indonesia. No Japanese.]\n\n';
    } else if (lang === 'en') {
      chosenSystemInstruction = `You are "AI Sensei" in the Kanarau app, teaching Burmese (Myanmar language) to English speakers.
Teach Burmese alphabet, vowels, tones, medials, and daily conversation in ENGLISH with clear romanized phonetics.
Do not use emojis.`;
      userPrefix = 'User Question:\n';
      strictDirective = '[STRICT DIRECTIVE: Teach BURMESE in ENGLISH with phonetic transliteration. No Japanese.]\n\n';
    } else {
      chosenSystemInstruction = SYSTEM_INSTRUCTION_MY;
      userPrefix = 'အသုံးပြုသူ၏ မေးခွန်း:\n';
    }
  } else {
    // Learning Japanese (default JLPT track)
    if (lang === 'en') {
      chosenSystemInstruction = SYSTEM_INSTRUCTION_EN;
      userPrefix = 'User Question:\n';
      strictDirective = '[STRICT LANGUAGE DIRECTIVE: Output MUST be 100% in ENGLISH only. No Indonesian language allowed. Explain Japanese in English.]\n\n';
    } else if (lang === 'my') {
      chosenSystemInstruction = SYSTEM_INSTRUCTION_MY;
      userPrefix = 'အသုံးပြုသူ၏ မေးခွန်း:\n';
      strictDirective = '[STRICT LANGUAGE DIRECTIVE: Output MUST be 100% in MYANMAR (BURMESE) language only. No Indonesian language allowed. Explain Japanese in Myanmar script.]\n\n';
    } else {
      chosenSystemInstruction = SYSTEM_INSTRUCTION_ID;
      userPrefix = 'Pertanyaan pengguna:\n';
      strictDirective = '';
    }
  }

  const currentTurn = {
    role: 'user',
    parts: [{ text: strictDirective + userPrefix + prompt }],
  };

  // Filter out initial welcome placeholder and ensure alternating user/model turns starting with 'user'
  const validHistory = history
    .filter((msg) => msg.id !== 'welcome' && msg.content && msg.content.trim().length > 0)
    .slice(-4)
    .map((msg) => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }],
    }));

  while (validHistory.length > 0 && validHistory[0]?.role !== 'user') {
    validHistory.shift();
  }

  const contents = [...validHistory, currentTurn];

  let lastErrorMsg = '';

  // Try each model sequentially if Google returns 503 (high demand) or 429
  for (const model of FALLBACK_MODELS) {
    try {
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`;
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          system_instruction: {
            parts: [{ text: chosenSystemInstruction }],
          },
          contents,
        }),
      });

      if (!response.ok) {
        const errJson = await response.json().catch(() => ({}));
        const msg = errJson?.error?.message || `Error ${response.status}`;
        lastErrorMsg = msg;
        console.warn(`Model ${model} returned error: ${msg}. Attempting next model...`);
        continue;
      }

      const data = await response.json();
      const candidate = data.candidates?.[0];
      const text = candidate?.content?.parts?.[0]?.text;

      if (!text) {
        continue;
      }

      // 1. Clean any accidental emojis from response
      let cleanText = text
        .replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '')
        .trim();

      // 2. Post-processing purifier: Eliminate any stray keywords or format headers
      if (targetLang === 'ja') {
        if (lang === 'my') {
          cleanText = cleanText
            .replace(/(?:^|\n)\s*(?:[•\-\x2a]\s*)?(?:\*{0,2})(?:Nuansa|nuansa)(?:\*{0,2})\s*[:：]/gmi, '\n• **သဘောသဘာဝ (Nuance):** ')
            .replace(/(?:^|\n)\s*(?:[•\-\x2a]\s*)?(?:\*{0,2})(?:Kunci JLPT|kunci jlpt)(?:\*{0,2})\s*[:：]/gmi, '\n• **JLPT အဓိက သော့ချက်:** ')
            .replace(/(?:^|\n)\s*(?:[•\-\x2a]\s*)?(?:\*{0,2})(?:Trik Ujian|trik ujian|Trik Menemukan Kunci|Trik Dokkai|Trik Choukai)(?:\*{0,2})\s*[:：]/gmi, '\n• **စာမေးပွဲ သော့ချက်:** ')
            .replace(/(?:^|\n)\s*(?:[•\-\x2a]\s*)?(?:\*{0,2})(?:Jawaban Benar|jawaban benar)(?:\*{0,2})\s*[:：]/gmi, '\n• **မှန်ကန်သော အဖြေ:** ')
            .replace(/(?:^|\n)\s*(?:[•\-\x2a]\s*)?(?:\*{0,2})(?:Alasan Logika|alasan logika|Alasan|alasan)(?:\*{0,2})\s*[:：]/gmi, '\n• **ယုတ္တိနည်းကျ အကြောင်းပြချက်:** ')
            .replace(/(?:^|\n)\s*(?:[•\-\x2a]\s*)?(?:\*{0,2})(?:Kenapa Opsi Lain Salah|kenapa opsi lain salah|Jebakan|jebakan|Bedah Jebakan)(?:\*{0,2})\s*[:：]/gmi, '\n• **အခြားရွေးချယ်စရာများ မှားယွင်းရသောအချက်:** ')
            .replace(/(?:^|\n)\s*(?:>\s*)?Terjemahan\s*[:：]/gmi, '\n> ဘာသာပြန်: ')
            .replace(/(?:^|\n)\s*###\s*(?:\*{0,2})(?:Analisis Dokkai|analisis dokkai)\s*[:：]?(?:\*{0,2})/gmi, '\n### **Dokkai လေ့လာဆန်းစစ်ချက်:**')
            .replace(/(?:^|\n)\s*###\s*(?:\*{0,2})(?:Analisis Choukai|analisis choukai)\s*[:：]?(?:\*{0,2})/gmi, '\n### **Choukai လေ့လာဆန်းစစ်ချက်:**')
            .replace(/(?:^|\n)\s*(?:[•\-\x2a]\s*)?(?:\*{0,2})(?:Contoh Kalimat|contoh kalimat)(?:\*{0,2})\s*[:：]/gmi, '\n• **ဥပမာ စာကြောင်း:** ');
        } else if (lang === 'en') {
          cleanText = cleanText
            .replace(/(?:^|\n)\s*(?:[•\-\x2a]\s*)?(?:\*{0,2})(?:Nuansa|nuansa)(?:\*{0,2})\s*[:：]/gmi, '\n• **Nuance:** ')
            .replace(/(?:^|\n)\s*(?:[•\-\x2a]\s*)?(?:\*{0,2})(?:Kunci JLPT|kunci jlpt)(?:\*{0,2})\s*[:：]/gmi, '\n• **JLPT Key Points:** ')
            .replace(/(?:^|\n)\s*(?:[•\-\x2a]\s*)?(?:\*{0,2})(?:Trik Ujian|trik ujian|Trik Dokkai|Trik Choukai)(?:\*{0,2})\s*[:：]/gmi, '\n• **Exam Tips:** ')
            .replace(/(?:^|\n)\s*(?:[•\-\x2a]\s*)?(?:\*{0,2})(?:Trik Menemukan Kunci|trik menemukan kunci)(?:\*{0,2})\s*[:：]/gmi, '\n• **Key Strategy:** ')
            .replace(/(?:^|\n)\s*(?:[•\-\x2a]\s*)?(?:\*{0,2})(?:Jawaban Benar|jawaban benar)(?:\*{0,2})\s*[:：]/gmi, '\n• **Correct Answer:** ')
            .replace(/(?:^|\n)\s*(?:[•\-\x2a]\s*)?(?:\*{0,2})(?:Alasan Logika|alasan logika)(?:\*{0,2})\s*[:：]/gmi, '\n• **Logical Reason:** ')
            .replace(/(?:^|\n)\s*(?:[•\-\x2a]\s*)?(?:\*{0,2})(?:Alasan|alasan)(?:\*{0,2})\s*[:：]/gmi, '\n• **Reason:** ')
            .replace(/(?:^|\n)\s*(?:[•\-\x2a]\s*)?(?:\*{0,2})(?:Kenapa Opsi Lain Salah|kenapa opsi lain salah)(?:\*{0,2})\s*[:：]/gmi, '\n• **Why Other Options Are Wrong:** ')
            .replace(/(?:^|\n)\s*(?:[•\-\x2a]\s*)?(?:\*{0,2})(?:Jebakan|jebakan|Bedah Jebakan)(?:\*{0,2})\s*[:：]/gmi, '\n• **Trap Analysis:** ')
            .replace(/(?:^|\n)\s*(?:>\s*)?Terjemahan\s*[:：]/gmi, '\n> Translation: ')
            .replace(/(?:^|\n)\s*###\s*(?:\*{0,2})(?:Analisis Dokkai|analisis dokkai)\s*[:：]?(?:\*{0,2})/gmi, '\n### **Dokkai Analysis:**')
            .replace(/(?:^|\n)\s*###\s*(?:\*{0,2})(?:Analisis Choukai|analisis choukai)\s*[:：]?(?:\*{0,2})/gmi, '\n### **Choukai Analysis:**')
            .replace(/(?:^|\n)\s*(?:[•\-\x2a]\s*)?(?:\*{0,2})(?:Contoh Kalimat|contoh kalimat)(?:\*{0,2})\s*[:：]/gmi, '\n• **Example Sentence:** ');
        }
      } else {
        // Non-Japanese tracks: PURGE any accidental JLPT or Japanese exam terms
        cleanText = cleanText
          .replace(/JLPT\s*(?:အဓိက\s*အချက်များ|အဓိက\s*သော့ချက်|အဓိက\s*အချက်)?/gi, lang === 'my' ? 'ဝါကျဖွဲ့စည်းပုံ (S-P-O)' : 'Struktur SPO')
          .replace(/\bJLPT\s*(?:N[1-5])?\b/gi, targetLang === 'id' ? 'BIPA' : 'Level')
          .replace(/(?:^|\n)\s*(?:[•\-\x2a]\s*)?(?:\*{0,2})(?:Kunci JLPT|kunci jlpt|Kunci Utama|kunci utama)(?:\*{0,2})\s*[:：]/gmi, lang === 'my' ? '\n• **အဓိက သော့ချက် (ဝါကျအစီအစဉ် S-P-O):** ' : '\n• **Kunci Pola Kalimat (SPO):** ')
          .replace(/(?:^|\n)\s*(?:[•\-\x2a]\s*)?(?:\*{0,2})(?:Nuansa|nuansa)(?:\*{0,2})\s*[:：]/gmi, lang === 'my' ? '\n• **သဘောသဘာဝ (Nuance):** ' : '\n• **Nuansa Pemakaian:** ')
          .replace(/(?:^|\n)\s*(?:[•\-\x2a]\s*)?(?:\*{0,2})(?:Trik Ujian|trik ujian)(?:\*{0,2})\s*[:：]/gmi, lang === 'my' ? '\n• **သတိပြုရန် အချက်:** ' : '\n• **Tips Praktis:** ')
          .replace(/(?:^|\n)\s*(?:>\s*)?Terjemahan\s*[:：]/gmi, lang === 'my' ? '\n> ဘာသာပြန်: ' : '\n> Terjemahan: ');
      }

      return cleanText;
    } catch (err: any) {
      lastErrorMsg = err?.message || 'Gagal menghubungi server';
      console.warn(`Network error with model ${model}:`, err);
    }
  }

  const fallbackErrorMessage =
    lang === 'my'
      ? 'AI ဆာဗာသည် လက်ရှိတွင် အလုပ်များနေပါသည်။ ခေတ္တစောင့်ပြီး ပြန်လည်ကြိုးစားပါ။'
      : lang === 'en'
      ? 'The AI server is experiencing temporary high traffic. Please try again in a moment.'
      : 'Server AI sedang mengalami lonjakan trafik sementara. Silakan coba kembali dalam beberapa saat.';

  throw new Error(lastErrorMsg || fallbackErrorMessage);
}
