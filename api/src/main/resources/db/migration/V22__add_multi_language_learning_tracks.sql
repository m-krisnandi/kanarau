-- ====================================================================
-- Migration V22: Multi-Language Learning Tracks & Universal Curriculum
-- Enables bidirectional language learning:
--   - Myanmar Native -> Learning Bahasa Indonesia (BIPA 1 - 5)
--   - Indonesian Native -> Learning Bahasa Myanmar (Alphabet & MLT 1 - 4)
--   - Universal -> Learning Japanese (JLPT N5 - N1)
--   - Extensible -> English (TOEIC / IELTS / CEFR)
-- ====================================================================

-- 1. Extend users table for target language and track level
ALTER TABLE users ADD COLUMN IF NOT EXISTS target_language VARCHAR(10) DEFAULT 'ja' NOT NULL;
ALTER TABLE users ADD COLUMN IF NOT EXISTS current_track_level VARCHAR(30) DEFAULT 'N2' NOT NULL;

-- 2. Course Tracks metadata table
CREATE TABLE IF NOT EXISTS course_tracks (
    code VARCHAR(20) PRIMARY KEY,
    title_id VARCHAR(100) NOT NULL,
    title_en VARCHAR(100) NOT NULL,
    title_my VARCHAR(100) NOT NULL,
    target_language VARCHAR(10) NOT NULL,
    icon VARCHAR(20) NOT NULL,
    description_id TEXT,
    description_en TEXT,
    description_my TEXT,
    is_active BOOLEAN DEFAULT TRUE NOT NULL
);

-- 3. Course Levels metadata table
CREATE TABLE IF NOT EXISTS course_levels (
    track_code VARCHAR(20) NOT NULL REFERENCES course_tracks(code) ON DELETE CASCADE,
    level_code VARCHAR(30) NOT NULL,
    level_name VARCHAR(100) NOT NULL,
    description_id TEXT,
    description_en TEXT,
    description_my TEXT,
    sort_order INT NOT NULL,
    PRIMARY KEY (track_code, level_code)
);

-- 4. Course Decks table
CREATE TABLE IF NOT EXISTS course_decks (
    id BIGSERIAL PRIMARY KEY,
    track_code VARCHAR(20) NOT NULL REFERENCES course_tracks(code) ON DELETE CASCADE,
    level_code VARCHAR(30) NOT NULL,
    day_number INT NOT NULL,
    title_target VARCHAR(150) NOT NULL,
    title_id VARCHAR(150) NOT NULL,
    title_en VARCHAR(150) NOT NULL,
    title_my VARCHAR(150) NOT NULL,
    item_count INT DEFAULT 0 NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_course_decks_track_level ON course_decks(track_code, level_code);

-- 5. Course Items table (vocabulary, alphabet characters, grammar patterns)
CREATE TABLE IF NOT EXISTS course_items (
    id BIGSERIAL PRIMARY KEY,
    deck_id BIGINT REFERENCES course_decks(id) ON DELETE CASCADE,
    track_code VARCHAR(20) NOT NULL,
    level_code VARCHAR(30) NOT NULL,
    target_text VARCHAR(255) NOT NULL,
    romanization VARCHAR(255),
    item_type VARCHAR(50) DEFAULT 'VOCABULARY', -- 'ALPHABET', 'VOCABULARY', 'GRAMMAR', 'EXPRESSION'
    meaning_id TEXT NOT NULL,
    meaning_en TEXT NOT NULL,
    meaning_my TEXT NOT NULL,
    notes_id TEXT,
    notes_en TEXT,
    notes_my TEXT,
    example_target TEXT,
    example_meaning_id TEXT,
    example_meaning_en TEXT,
    example_meaning_my TEXT,
    sort_order INT DEFAULT 0 NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_course_items_deck ON course_items(deck_id);
CREATE INDEX IF NOT EXISTS idx_course_items_track_level ON course_items(track_code, level_code);

-- 6. Insert Supported Tracks
INSERT INTO course_tracks (code, title_id, title_en, title_my, target_language, icon, description_id, description_en, description_my)
VALUES
('JA', 'Bahasa Jepang', 'Japanese', 'ဂျပန်ဘာသာစကား', 'ja', '🇯🇵', 
 'Kuasai kosakata, kanji, tata bahasa, dan simulasi JLPT dari N5 hingga N1.',
 'Master Japanese vocabulary, kanji, grammar, and JLPT exams from N5 to N1.',
 'N5 မှ N1 အထိ ဂျပန်ဝေါဟာရ၊ ခန်ဂျီ၊ သဒ္ဒါနှင့် စာမေးပွဲများကို လေ့လာပါ။'),

('ID', 'Bahasa Indonesia', 'Indonesian', 'အင်ဒိုနီးရှားဘာသာစကား', 'id', '🇮🇩',
 'Pelajari Bahasa Indonesia dari percakapan dasar hingga standar kemahiran BIPA & UKBI.',
 'Learn Indonesian from daily essentials to advanced BIPA and UKBI proficiency.',
 'အခြေခံနှုတ်ဆက်စကားများမှ အဆင့်မြင့် BIPA နှင့် UKBI စာမေးပွဲအထိ အင်ဒိုနီးရှားစကားကို လေ့လာပါ။'),

('MY', 'Bahasa Myanmar', 'Burmese (Myanmar)', 'မြန်မာဘာသာစကား', 'my', '🇲🇲',
 'Kuasai aksara Burma 33 konsonan, vokal, sistem nada, hingga percakapan dan ujian MLT.',
 'Master 33 Burmese consonants, vowels, tone system, daily phrases, and MLT proficiency.',
 'အခြေခံဗျည်း၊ သရ၊ အသံထွက်မှ နေ့စဉ်သုံးစကားနှင့် MLT စာမေးပွဲအထိ လေ့လာပါ။'),

('EN', 'Bahasa Inggris', 'English', 'အင်္ဂလိပ်ဘာသာစကား', 'en', '🇬🇧',
 'Tingkatkan kemampuan bahasa Inggris untuk komunikasi global, persiapan kerja, TOEIC, dan IELTS.',
 'Enhance English communication, workplace fluency, and prep for TOEIC and IELTS.',
 'အပြည်ပြည်ဆိုင်ရာ ဆက်သွယ်ရေး၊ အလုပ်ခွင်သုံးနှင့် TOEIC/IELTS အတွက် အင်္ဂလိပ်စကားကို လေ့လာပါ။')
ON CONFLICT (code) DO UPDATE SET
    title_id = EXCLUDED.title_id,
    title_en = EXCLUDED.title_en,
    title_my = EXCLUDED.title_my,
    description_id = EXCLUDED.description_id,
    description_en = EXCLUDED.description_en,
    description_my = EXCLUDED.description_my;

-- 7. Insert Levels for Tracks
-- JA Levels (matches JLPT)
INSERT INTO course_levels (track_code, level_code, level_name, description_id, description_en, description_my, sort_order)
VALUES
('JA', 'N5', 'JLPT N5', 'Tingkat Pemula Dasar', 'Beginner Level', 'အခြေခံစတင်သူအဆင့်', 1),
('JA', 'N4', 'JLPT N4', 'Tingkat Dasar Lanjutan', 'Elementary Level', 'အခြေခံအဆင့်မြင့်', 2),
('JA', 'N3', 'JLPT N3', 'Tingkat Menengah', 'Intermediate Level', 'အလယ်အလတ်အဆင့်', 3),
('JA', 'N2', 'JLPT N2', 'Tingkat Menengah Atas', 'Upper-Intermediate Level', 'အထက်တန်းအလယ်အလတ်', 4),
('JA', 'N1', 'JLPT N1', 'Tingkat Mahir', 'Advanced Level', 'ကျွမ်းကျင်အဆင့်', 5),

-- ID Levels (BIPA / UKBI)
('ID', 'BIPA-1', 'BIPA 1 (A1)', 'Pemula: Salam, Angka, Kosakata Esensial & Pelafalan', 'Beginner: Greetings, Numbers & Essentials', 'အခြေခံ- နှုတ်ဆက်ခြင်း၊ ဂဏန်းများနှင့် အခြေခံစကားလုံးများ', 1),
('ID', 'BIPA-2', 'BIPA 2 (A2)', 'Dasar: Kehidupan Sehari-hari, Arah & Belanja', 'Elementary: Daily Life, Directions & Shopping', 'အခြေခံအဆင့်- နေ့စဉ်ဘဝ၊ လမ်းညွှန်ချက်များနှင့် ဈေးဝယ်ခြင်း', 2),
('ID', 'BIPA-3', 'BIPA 3 (B1)', 'Menengah: Pola Kalimat & Imbuhan me-, ber-, di-', 'Intermediate: Sentence Patterns & Affixes', 'အလယ်အလတ်- ဝါကျတည်ဆောက်ပုံနှင့် ရှေ့ဆက်စကားလုံးများ', 3),
('ID', 'BIPA-4', 'BIPA 4 (B2)', 'Menengah Atas: Percakapan Kerja, Sosial & Budaya', 'Upper-Intermediate: Workplace & Society', 'အထက်တန်း- လုပ်ငန်းခွင်နှင့် လူမှုဆက်ဆံရေးစကားပြော', 4),
('ID', 'BIPA-5', 'BIPA 5 (C1)', 'Mahir: Wacana Formal, Esai & Standar UKBI', 'Advanced: Formal Discourse & UKBI Standard', 'ကျွမ်းကျင်- တရားဝင်ရေးသားပြောဆိုမှုနှင့် UKBI စာမေးပွဲအဆင့်', 5),

-- MY Levels (Burmese Alphabet & MLT)
('MY', 'FOUNDATION', 'Fondasi Huruf', '33 Konsonan Akshara & Vokal Dasar', '33 Burmese Consonants & Core Vowels', 'အခြေခံဗျည်း ၃၃ လုံးနှင့် သရများ', 1),
('MY', 'MLT-1', 'MLT 1 (Dasar)', 'Aturan Nada, Medial Ya-Pin/Wa-Hswe & Kata Esensial', 'Tone Rules, Medials & Everyday Words', 'အသံထွက်စည်းမျဉ်းများနှင့် နေ့စဉ်သုံးစကားလုံးများ', 2),
('MY', 'MLT-2', 'MLT-2 (Menengah)', 'Pola Kalimat SOV, Partikel Penghubung & Situasi Nyata', 'SOV Sentence Pattern, Particles & Dialogues', 'ဝါကျတည်ဆောက်ပုံနှင့် လက်တွေ့စကားပြော', 3),
('MY', 'MLT-3', 'MLT-3 (Lanjutan)', 'Teks Bacaan Menengah & Percakapan Sosial', 'Reading Comprehension & Social Interaction', 'စာဖတ်စွမ်းရည်နှင့် လူမှုဆက်ဆံရေး', 4),
('MY', 'MLT-4', 'MLT-4 (Mahir)', 'Bahasa Tulis Baku, Formal & Sastra Myanmar', 'Literary Burmese & Advanced Proficiency', 'အဆင့်မြင့် စာပေဘာသာစကားနှင့် ရေးသားချက်များ', 5),

-- EN Levels (CEFR / TOEIC)
('EN', 'CEFR-A2', 'Elementary (A2)', 'Percakapan Praktis & Kosakata Sehari-hari (TOEIC 400+)', 'Practical English & Basics (TOEIC 400+)', 'လက်တွေ့သုံး အင်္ဂလိပ်စကားပြောနှင့် အခြေခံများ', 1),
('EN', 'CEFR-B1', 'Intermediate (B1)', 'Bahasa Inggris Kerja & Percakapan Lancar (TOEIC 550+)', 'Workplace & Conversational English (TOEIC 550+)', 'အလုပ်ခွင်သုံး အင်္ဂလိပ်စကားပြော (TOEIC 550+)', 2),
('EN', 'CEFR-B2', 'Upper-Int (B2)', 'Negosiasi, Presentasi & Persiapan IELTS 6.5+', 'Business Fluency & IELTS 6.5+ Prep', 'စီးပွားရေးသုံးနှင့် IELTS 6.5+ ပြင်ဆင်မှု', 3),
('EN', 'CEFR-C1', 'Advanced (C1)', 'Komunikasi Profesional & Akademik Tingkat Tinggi', 'Professional & Academic Fluency', 'အဆင့်မြင့် ပရော်ဖက်ရှင်နယ် အင်္ဂလိပ်စာ', 4)
ON CONFLICT (track_code, level_code) DO NOTHING;

-- 8. Seed Sample Decks for Indonesian (BIPA-1) tailored for Burmese Speakers
INSERT INTO course_decks (id, track_code, level_code, day_number, title_target, title_id, title_en, title_my, item_count)
VALUES
(1001, 'ID', 'BIPA-1', 1, 'Salam & Ungkapan Sehari-hari', 'Salam & Ungkapan Sehari-hari', 'Greetings & Daily Expressions', 'နှုတ်ဆက်စကားများနှင့် နေ့စဉ်သုံးအသုံးအနှုန်းများ', 8),
(1002, 'ID', 'BIPA-1', 2, 'Kata Ganti Orang & Perkenalan', 'Kata Ganti Orang & Perkenalan', 'Pronouns & Self-Introduction', 'နာမ်စားများနှင့် မိမိကိုယ်ကိုမိတ်ဆက်ခြင်း', 8),
(1003, 'ID', 'BIPA-1', 3, 'Angka, Berhitung & Waktu', 'Angka, Berhitung & Waktu', 'Numbers, Counting & Time', 'ဂဏန်းသင်္ချာ၊ ရေတွက်ခြင်းနှင့် အချိန်နာရီ', 8),
(1004, 'ID', 'BIPA-1', 4, 'Aktivitas Harian & Kata Kerja Dasar', 'Aktivitas Harian & Kata Kerja Dasar', 'Daily Activities & Core Verbs', 'နေ့စဉ်လုပ်ငန်းဆောင်တာများနှင့် အခြေခံကြိယာများ', 8)
ON CONFLICT (id) DO NOTHING;

-- 9. Seed Course Items for Indonesian (BIPA-1) with explanations in Burmese and English
INSERT INTO course_items (deck_id, track_code, level_code, target_text, romanization, item_type, meaning_id, meaning_en, meaning_my, notes_id, notes_en, notes_my, example_target, example_meaning_id, example_meaning_en, example_meaning_my, sort_order)
VALUES
-- Day 1
(1001, 'ID', 'BIPA-1', 'Halo', 'ha-lo', 'EXPRESSION', 'Halo / Hai', 'Hello / Hi', 'မင်္ဂလာပါ / ဟယ်လို', 
 'Dipakai untuk menyapa siapa saja secara santai maupun umum.', 'Used for casual or general greetings.', 'မည်သူ့ကိုမဆို ရင်းနှီးစွာ သို့မဟုတ် ယေဘုယျအားဖြင့် နှုတ်ဆက်ရာတွင် အသုံးပြုသည်။',
 'Halo! Apa kabar?', 'Halo! Apa kabar?', 'Hello! How are you?', 'မင်္ဂလာပါ! နေကောင်းရဲ့လား?', 1),

(1001, 'ID', 'BIPA-1', 'Selamat pagi', 'se-la-mat pa-gi', 'EXPRESSION', 'Selamat pagi', 'Good morning', 'မင်္ဂလာနံနက်ခင်းပါ',
 'Diucapkan pada pagi hari (sekitar pukul 06.00 hingga 11.00).', 'Greeting used in the morning (around 6 AM to 11 AM).', 'နံနက်ခင်းအချိန် (၆ နာရီမှ ၁၁ နာရီဝန်းကျင်) တွင် နှုတ်ဆက်ရာတွင် အသုံးပြုသည်။',
 'Selamat pagi, Pak Budi!', 'Selamat pagi, Pak Budi!', 'Good morning, Mr. Budi!', 'မင်္ဂလာနံနက်ခင်းပါ ဆရာဘူဒီ!', 2),

(1001, 'ID', 'BIPA-1', 'Selamat siang', 'se-la-mat si-ang', 'EXPRESSION', 'Selamat siang', 'Good afternoon', 'မင်္ဂလာနေ့လယ်ခင်းပါ',
 'Diucapkan saat tengah hari (sekitar pukul 11.00 hingga 15.00).', 'Greeting used around mid-day (11 AM to 3 PM).', 'နေ့လယ်အချိန် (၁၁ နာရီမှ ၃ နာရီဝန်းကျင်) တွင် နှုတ်ဆက်ရာတွင် အသုံးပြုသည်။',
 'Selamat siang semuanya.', 'Selamat siang semuanya.', 'Good afternoon, everyone.', 'အားလုံးပဲ မင်္ဂလာနေ့လယ်ခင်းပါ။', 3),

(1001, 'ID', 'BIPA-1', 'Selamat malam', 'se-la-mat ma-lam', 'EXPRESSION', 'Selamat malam', 'Good evening / Good night', 'မင်္ဂလာညချမ်းပါ',
 'Diucapkan setelah matahari terbenam (sekitar pukul 18.00 ke atas).', 'Greeting used after sunset or in the evening.', 'နေဝင်ပြီးနောက် သို့မဟုတ် ညအချိန်တွင် နှုတ်ဆက်ရာတွင် အသုံးပြုသည်။',
 'Selamat malam, sampai jumpa besok.', 'Selamat malam, sampai jumpa besok.', 'Good night, see you tomorrow.', 'မင်္ဂလာညချမ်းပါ၊ မနက်ဖြန်မှ တွေ့ကြမယ်။', 4),

(1001, 'ID', 'BIPA-1', 'Terima kasih', 'te-ri-ma ka-sih', 'EXPRESSION', 'Terima kasih', 'Thank you', 'ကျေးဇူးတင်ပါတယ်',
 'Ungkapan rasa syukur paling penting di Indonesia.', 'The most essential expression of gratitude in Indonesian.', 'အင်ဒိုနီးရှားတွင် အရေးကြီးဆုံး ကျေးဇူးတင်စကားဖြစ်သည်။',
 'Terima kasih banyak atas bantuannya.', 'Terima kasih banyak atas bantuannya.', 'Thank you very much for your help.', 'ကူညီပေးတဲ့အတွက် အရမ်းကျေးဇူးတင်ပါတယ်။', 5),

(1001, 'ID', 'BIPA-1', 'Sama-sama', 'sa-ma sa-ma', 'EXPRESSION', 'Sama-sama / Kembali', 'You are welcome', 'ရပါတယ် / ကိစ္စမရှိပါဘူး',
 'Jawaban sopan untuk membalas "Terima kasih".', 'Polite response to "Terima kasih".', '"ကျေးဇူးတင်ပါတယ်" ဟု ပြောဆိုသည့်အခါ ယဉ်ကျေးစွာ ပြန်လည်ဖြေကြားသည့်စကားဖြစ်သည်။',
 'Sama-sama, senang bisa membantu.', 'Sama-sama, senang bisa membantu.', 'You are welcome, happy to help.', 'ရပါတယ်၊ ကူညီခွင့်ရတာ ဝမ်းသာပါတယ်။', 6),

(1001, 'ID', 'BIPA-1', 'Permisi', 'per-mi-si', 'EXPRESSION', 'Permisi / Maaf lewat', 'Excuse me', 'ခွင့်ပြုပါ / အားနာပါတယ်',
 'Dipakai saat lewat di depan orang atau memotong pembicaraan dengan sopan.', 'Used when excusing oneself or asking permission politely.', 'လူရှေ့မှ ဖြတ်သွားသည့်အခါ သို့မဟုတ် စကားဖြတ်ပြောသည့်အခါ ယဉ်ကျေးစွာ သုံးသည်။',
 'Permisi, boleh saya bertanya?', 'Permisi, boleh saya bertanya?', 'Excuse me, may I ask a question?', 'ခွင့်ပြုပါ၊ ကျွန်တော် မေးခွန်းတစ်ခုလောက် မေးလို့ရမလားခင်ဗျာ?', 7),

(1001, 'ID', 'BIPA-1', 'Maaf', 'ma-af', 'EXPRESSION', 'Maaf / Permohonan maaf', 'Sorry / Pardon', 'တောင်းပန်ပါတယ် / ခွင့်လွှတ်ပါ',
 'Dipakai untuk meminta maaf atas kesalahan atau ketidaknyamanan.', 'Used to apologize for mistakes or inconvenience.', 'အမှားတစ်ခုခုအတွက် သို့မဟုတ် အဆင်မပြေမှုအတွက် တောင်းပန်ရာတွင် အသုံးပြုသည်။',
 'Maaf, saya terlambat hari ini.', 'Maaf, saya terlambat hari ini.', 'Sorry, I am late today.', 'တောင်းပန်ပါတယ်၊ ဒီနေ့ ကျွန်တော် နောက်ကျသွားတယ်။', 8),

-- Day 2: Pronouns & Intro
(1002, 'ID', 'BIPA-1', 'Saya', 'sa-ya', 'VOCABULARY', 'Saya (kata ganti orang pertama tunggal)', 'I / Me', 'ကျွန်တော် / ကျွန်မ',
 'Bentuk sopan untuk menyebut diri sendiri dalam situasi apa saja.', 'Polite pronoun for "I/me" in all formal and daily situations.', 'မည်သည့်အခြေအနေတွင်မဆို မိမိကိုယ်ကို ယဉ်ကျေးစွာ ညွှန်းဆိုသည့် နာမ်စားဖြစ်သည်။',
 'Saya berasal dari Myanmar.', 'Saya berasal dari Myanmar.', 'I come from Myanmar.', 'ကျွန်တော် မြန်မာနိုင်ငံက လာတာပါ။', 1),

(1002, 'ID', 'BIPA-1', 'Anda', 'an-da', 'VOCABULARY', 'Anda (kata ganti orang kedua sopan)', 'You (polite/formal)', 'ခင်ဗျား / ရှင်',
 'Kata ganti kedua formal dan sopan, sering dipakai di tempat kerja atau publik.', 'Formal and polite pronoun for "you".', 'ယဉ်ကျေး၍ တရားဝင်သော "သင်/ခင်ဗျား/ရှင်" ဟူသော နာမ်စားဖြစ်သည်။',
 'Apakah Anda sudah makan siang?', 'Apakah Anda sudah makan siang?', 'Have you had lunch?', 'ခင်ဗျား နေ့လယ်စာ စားပြီးပြီလား?', 2),

(1002, 'ID', 'BIPA-1', 'Dia', 'di-a', 'VOCABULARY', 'Dia (kata ganti orang ketiga)', 'He / She / They (singular)', 'သူ / သူငယ်ချင်း',
 'Dapat merujuk pada laki-laki maupun perempuan tanpa pembedaan gender.', 'Gender-neutral third person pronoun ("he" or "she").', 'ကျား/မ ခွဲခြားမှုမရှိဘဲ တတိယလူ (သူ) ကို ရည်ညွှန်းသည်။',
 'Dia adalah teman sekantor saya.', 'Dia adalah teman sekantor saya.', 'He/She is my coworker.', 'သူက ကျွန်တော့်ရဲ့ ရုံးလုပ်ဖော်ကိုင်ဖက်ပါ။', 3),

(1002, 'ID', 'BIPA-1', 'Kami', 'ka-mi', 'VOCABULARY', 'Kami (kita tanpa lawan bicara)', 'We / Us (exclusive)', 'ကျွန်တော်တို့ (နားထောင်သူမပါ)',
 'Menyebut rombongan pembicara, lawan bicara tidak termasuk.', 'Exclusive "we" (does not include the listener).', 'နားထောင်သူ မပါဝင်သော "ကျွန်တော်တို့" ဟု ပြောဆိုရာတွင် သုံးသည်။',
 'Kami sedang belajar Bahasa Indonesia.', 'Kami sedang belajar Bahasa Indonesia.', 'We are learning Indonesian.', 'ကျွန်တော်တို့ အင်ဒိုနီးရှားစာ လေ့လာနေပါတယ်။', 4),

(1002, 'ID', 'BIPA-1', 'Kita', 'ki-ta', 'VOCABULARY', 'Kita (semua termasuk lawan bicara)', 'We / Us (inclusive)', 'တို့ / ကျွန်ုပ်တို့ (နားထောင်သူပါ)',
 'Menyebut rombongan pembicara dan lawan bicara ikut serta.', 'Inclusive "we" (includes the listener).', 'နားထောင်သူပါ ပါဝင်သော "တို့/ကျွန်ုပ်တို့" ဟု ပြောဆိုရာတွင် သုံးသည်။',
 'Mari kita mulai belajar sekarang.', 'Mari kita mulai belajar sekarang.', 'Let us start studying now.', 'ကဲ အခုပဲ အတူတူ စတင်လေ့လာကြစို့။', 5),

(1002, 'ID', 'BIPA-1', 'Nama', 'na-ma', 'VOCABULARY', 'Nama', 'Name', 'နာမည်',
 'Kata benda untuk identitas seseorang atau sesuatu.', 'Noun meaning "name".', 'နာမည် ဟု အဓိပ္ပာယ်ရသော နာမ်စကားလုံးဖြစ်သည်။',
 'Siapa nama Anda?', 'Siapa nama Anda?', 'What is your name?', 'ခင်ဗျားရဲ့ နာမည်က ဘယ်သူပါလဲ?', 6),

(1002, 'ID', 'BIPA-1', 'Senang', 'se-nang', 'VOCABULARY', 'Senang / Gembira', 'Happy / Glad', 'ဝမ်းသာသော / ပျော်ရွှင်သော',
 'Kata sifat yang menyatakan rasa gembira atau puas.', 'Adjective meaning glad or pleased.', 'ပျော်ရွှင်ခြင်း သို့မဟုတ် ဝမ်းသာခြင်းကို ဖော်ပြသော နာမဝိသေသနဖြစ်သည်။',
 'Senang berkenalan dengan Anda.', 'Senang berkenalan dengan Anda.', 'Pleased to meet you.', 'ခင်ဗျားနဲ့ သိကျွမ်းရတာ ဝမ်းသာပါတယ်။', 7),

(1002, 'ID', 'BIPA-1', 'Tinggal', 'ting-gal', 'VOCABULARY', 'Tinggal / Menetap', 'To live / Reside', 'နေထိုင်သည်',
 'Kata kerja dasar untuk tempat tinggal seseorang.', 'Verb meaning to live or reside somewhere.', 'တစ်နေရာရာတွင် နေထိုင်သည်ဟု အဓိပ္ပာယ်ရသော ကြိယာဖြစ်သည်။',
 'Saya tinggal di Jakarta Selatan.', 'Saya tinggal di Jakarta Selatan.', 'I live in South Jakarta.', 'ကျွန်တော် တောင်ပိုင်းဂျကာတာမှာ နေထိုင်ပါတယ်။', 8)
ON CONFLICT (id) DO NOTHING;

-- 10. Seed Sample Decks for Myanmar (Foundation Alphabet) tailored for Indonesian Speakers
INSERT INTO course_decks (id, track_code, level_code, day_number, title_target, title_id, title_en, title_my, item_count)
VALUES
(2001, 'MY', 'FOUNDATION', 1, 'အက္ခရာ က ကြီး မှ င (Grup 1)', 'Konsonan Dasar Grup 1 (Ka s.d. Nga)', 'Basic Consonants Group 1 (Ka to Nga)', 'ဗျည်း ၅ လုံး က မှ င အထိ', 5),
(2002, 'MY', 'FOUNDATION', 2, 'အက္ခရာ စ လုံး မှ ည (Grup 2)', 'Konsonan Dasar Grup 2 (Ca s.d. Nya)', 'Basic Consonants Group 2 (Ca to Nya)', 'ဗျည်း ၅ လုံး စ မှ ည အထိ', 5),
(2003, 'MY', 'FOUNDATION', 3, 'နှုတ်ဆက်စကားများ', 'Ungkapan Salam & Sehari-hari', 'Greetings & Essential Phrases', 'မင်္ဂလာပါ နှင့် နေ့စဉ်သုံးနှုတ်ဆက်စကားများ', 8)
ON CONFLICT (id) DO NOTHING;

-- 11. Seed Course Items for Myanmar (Burmese Alphabet & Phrases) with Indonesian phonetics & explanations
INSERT INTO course_items (deck_id, track_code, level_code, target_text, romanization, item_type, meaning_id, meaning_en, meaning_my, notes_id, notes_en, notes_my, example_target, example_meaning_id, example_meaning_en, example_meaning_my, sort_order)
VALUES
-- Burmese Consonants Group 1
(2001, 'MY', 'FOUNDATION', 'က', 'ka gyi / ka', 'ALPHABET', 'Konsonan "Ka" (Ka-Gyi)', 'Consonant "Ka" (Ka-Gyi)', 'က ကြီး',
 'Konsonan pertama abjad Burma. Pelafalan seperti bunyi [k] lembut pada kata "kopi".', 'First consonant of the Burmese alphabet. Pronounced like soft [k].', 'မြန်မာဗျည်းများ၏ ပထမဆုံးအက္ခရာ။',
 'ကလောင်', 'Kalaung (Pena/Pulpen)', 'Pen', 'ကလောင်တံ', 1),

(2001, 'MY', 'FOUNDATION', 'ခ', 'kha gway / kha', 'ALPHABET', 'Konsonan "Kha" (Kha-Gwe)', 'Consonant "Kha" (Kha-Gway)', 'ခ ခွေး',
 'Konsonan berhembus (aspirated) [kʰ]. Dilafalkan dengan hembusan napas seperti "kh".', 'Aspirated [kʰ] sound with a puff of air.', 'အသက်ပါသောအသံ ခ ခွေး။',
 'ခွေး', 'Khway (Anjing)', 'Dog', 'ခွေးလေး', 2),

(2001, 'MY', 'FOUNDATION', 'ဂ', 'ga nge / ga', 'ALPHABET', 'Konsonan "Ga" (Ga-Nge)', 'Consonant "Ga" (Ga-Nge)', 'ဂ ငယ်',
 'Konsonan bersuara [g]. Dilafalkan seperti huruf "g" pada kata "gula".', 'Voiced consonant [g] like "go".', 'အသံထွက် ဂ ငယ်။',
 'ဂဏန်း', 'Ganan (Angka / Kepiting)', 'Number / Crab', 'ဂဏန်းသင်္ချာ', 3),

(2001, 'MY', 'FOUNDATION', 'ဃ', 'gha gyi / gha', 'ALPHABET', 'Konsonan "Gha" (Gha-Gyi)', 'Consonant "Gha" (Gha-Gyi)', 'ဃ ကြီး',
 'Bentuk huruf besar dari Ga, jarang dipakai kecuali pada kata serapan Pali.', 'Rare Pali loanword consonant.', 'ပါဠိသက်ဝေါဟာရများတွင် အဓိကသုံးသည်။',
 'ဃရာဝါသ', 'Gharawatha (Kehidupan Berkeluarga)', 'Household life', 'ဃရာဝါသဘဝ', 4),

(2001, 'MY', 'FOUNDATION', 'င', 'nga', 'ALPHABET', 'Konsonan "Nga" (Nga)', 'Consonant "Nga"', 'င',
 'Konsonan sengau [ŋ]. Dilafalkan seperti bunyi "ng" pada kata "ngantuk" atau "tangan".', 'Velar nasal [ŋ] like "sing".', 'နှာခေါင်းသံ င။',
 'ငါး', 'Nga (Ikan / Angka Lima)', 'Fish / Number Five', 'ငါးဟင်း', 5),

-- Burmese Greetings
(2003, 'MY', 'FOUNDATION', 'မင်္ဂလာပါ', 'ming-ga-la-ba', 'EXPRESSION', 'Halo / Salam sejahtera (Mingalaba)', 'Hello / Greetings (Mingalaba)', 'မင်္ဂလာပါ',
 'Salam paling umum dan sopan dalam bahasa Burma, dapat digunakan kapan saja sepanjang hari.', 'The universal and most polite greeting in Burmese.', 'မြန်မာဘာသာတွင် အသုံးအများဆုံးနှင့် ယဉ်ကျေးဆုံး နှုတ်ဆက်စကားဖြစ်သည်။',
 'မင်္ဂလာပါ ဆရာ။', 'Mingalaba sayar (Halo Guru/Pak).', 'Hello, teacher.', 'မင်္ဂလာပါ ဆရာ။', 1),

(2003, 'MY', 'FOUNDATION', 'နေကောင်းရဲ့လား', 'nei-kaung-ye-la', 'EXPRESSION', 'Apa kabar? (Nei kaung ye la?)', 'How are you? (Nei kaung ye la?)', 'နေကောင်းရဲ့လား',
 'Dipakai untuk menanyakan kabar atau kondisi kesehatan seseorang.', 'Used to ask about someone’s well-being or health.', 'တစ်ဖက်သား၏ ကျန်းမာရေးနှင့် သုခကို မေးမြန်းရာတွင် သုံးသည်။',
 'နေကောင်းပါတယ်၊ ကျေးဇူးတင်ပါတယ်။', 'Nei kaung ba de, kye-zu tin ba de (Kabar baik, terima kasih).', 'I am fine, thank you.', 'နေကောင်းပါတယ်၊ ကျေးဇူးတင်ပါတယ်။', 2),

(2003, 'MY', 'FOUNDATION', 'ကျေးဇူးတင်ပါတယ်', 'kye-zu-tin-ba-de', 'EXPRESSION', 'Terima kasih (Kye-zu tin ba de)', 'Thank you (Kye-zu tin ba de)', 'ကျေးဇူးတင်ပါတယ်',
 'Ucapan terima kasih resmi dan sopan dalam bahasa Myanmar.', 'Polite and standard "Thank you" in Burmese.', 'အထူးကျေးဇူးတင်ရှိကြောင်း ယဉ်ကျေးစွာ ဖော်ပြသည့်စကား။',
 'အများကြီး ကျေးဇူးတင်ပါတယ်။', 'Amyar gyi kye-zu tin ba de (Terima kasih banyak).', 'Thank you very much.', 'အများကြီး ကျေးဇူးတင်ပါတယ်။', 3),

(2003, 'MY', 'FOUNDATION', 'ရပါတယ်', 'ya-ba-de', 'EXPRESSION', 'Sama-sama / Tidak apa-apa (Ya ba de)', 'You are welcome / It is fine (Ya ba de)', 'ရပါတယ် / ကိစ္စမရှိပါဘူး',
 'Jawaban sopan atas ucapan terima kasih atau permintaan maaf.', 'Polite response meaning "you are welcome" or "no problem".', 'ကျေးဇူးတင်စကားကိုဖြစ်စေ၊ တောင်းပန်စကားကိုဖြစ်စေ ပြန်လည်ဖြေကြားသည့်စကား။',
 'ရပါတယ်၊ စိတ်မရှိပါနဲ့။', 'Ya ba de, seik ma shi ba ne (Tidak apa-apa, jangan sungkan).', 'No problem, please do not worry.', 'ရပါတယ်၊ စိတ်မရှိပါနဲ့။', 4),

(2003, 'MY', 'FOUNDATION', 'သွားပါဦးမယ်', 'thwa-ba-u-me', 'EXPRESSION', 'Saya pamit dulu / Sampai jumpa (Thwa ba u me)', 'Goodbye / I must go now (Thwa ba u me)', 'သွားပါဦးမယ်',
 'Diucapkan saat hendak berpisah atau pamitan pulang dengan sopan.', 'Polite expression when parting ways or taking leave.', 'ပြန်ခါနီး သို့မဟုတ် နှုတ်ဆက်ခွဲခွာရာတွင် ယဉ်ကျေးစွာ ပြောသည့်စကား။',
 'နောက်မှ ပြန်တွေ့မယ်နော်။', 'Nauk hma pyan twei me naw (Nanti jumpa lagi ya).', 'See you again later.', 'နောက်မှ ပြန်တွေ့မယ်နော်။', 5)
ON CONFLICT (id) DO NOTHING;
