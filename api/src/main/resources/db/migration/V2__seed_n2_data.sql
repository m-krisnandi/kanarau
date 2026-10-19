-- Kanarau Seed Data V2
-- Default demo user
INSERT INTO users (id, email, password_hash, display_name, current_level, streak, total_xp)
VALUES (1, 'muhamad.krisnandi.22@gmail.com', '$2a$10$4yJp1E5rO4B1V.kL0g6eK.h4lWz2qF6c4M.oP8uL0eQ8x4rL0eQ8x', 'Krisnandi', 'N2', 3, 150);

-- Decks N2 Week 1 (Day 1 - 7)
INSERT INTO decks (id, name, level, day_number, kotoba_count) VALUES
(1, 'DAY 1 N2', 'N2', 1, 35),
(2, 'DAY 2 N2', 'N2', 2, 34),
(3, 'DAY 3 N2', 'N2', 3, 35),
(4, 'DAY 4 N2', 'N2', 4, 34),
(5, 'DAY 5 N2', 'N2', 5, 35),
(6, 'DAY 6 N2', 'N2', 6, 35),
(7, 'DAY 7 N2', 'N2', 7, 35),

-- Decks N2 Week 2 (Day 8 - 11 Unlocked, Day 12 Locked)
(8, 'DAY 8 N2', 'N2', 8, 32),
(9, 'DAY 9 N2', 'N2', 9, 43),
(10, 'DAY 10 N2', 'N2', 10, 36),
(11, 'DAY 11 N2', 'N2', 11, 34),
(12, 'DAY 12 N2', 'N2', 12, 32),

-- Fondasi Decks
(90, 'Bunpou N2', 'N2', 99, 73),

-- N1 Decks
(101, 'DAY 1 N1', 'N1', 1, 30),
(102, 'DAY 2 N1', 'N1', 2, 32),
(103, 'DAY 3 N1', 'N1', 3, 28);

-- Kanji
INSERT INTO kanji (id, character, meaning, on_reading, kun_reading, radical, radical_meaning, stroke_count, grade) VALUES
(1, '間', 'jeda, antara, ruang', 'カン, ケン', 'あいだ, ま', '門 (もんがまえ)', 'mengurung seperti gerbang', 12, 2),
(2, '隔', 'memisahkan, berjarak', 'カク', 'へだ・てる, へだ・たる', '阝 (こざとへん)', 'bukit di sisi kiri', 13, 8),
(3, '焦', 'hangus, tergesa-gesa', 'ショウ', 'こ・げる, あせ・る', '灬 (れんが)', 'api membakar di bawah', 12, 8),
(4, '防', 'mencegah, bertahan', 'ボウ', 'ふせ・ぐ', '阝 (こざとへん)', 'bukit pertahanan', 7, 5),
(5, '止', 'berhenti, menahan', 'シ', 'と・まる, と・める', '止 (とめる)', 'jejak kaki berhenti', 4, 1),
(6, '煙', 'asap', 'エン', 'けむ・る, けむり', '火 (ひへん)', 'api mengeluarkan asap', 13, 8),
(7, '誤', 'kesalahan, keliru', 'ゴ', 'あやま・る, あやま・り', '言 (ごんべん)', 'kata-kata salah', 14, 6),
(8, '重', 'berat, tumpuk', 'ジュウ, チョウ', 'おも・い, かさ・なる', '里 (さと)', 'lapisan bumi bertumpuk', 9, 3),
(9, '幼', 'muda, kecil, kekanak-kanakan', 'ヨウ', 'おさな・い', '幺 (いとがしら)', 'benang kecil halus', 5, 6),
(10, '屋', 'atap, rumah, toko', 'オク', 'や', '尸 (しかばね)', 'atap rumah menaungi', 9, 3),
(11, '根', 'akar, pondasi', 'コン', 'ね', '木 (きへん)', 'kayu berakar kuat', 10, 3),
(12, '訂', 'mengoreksi', 'テイ', '', '言 (ごんべん)', 'kata-kata dibenahi', 9, 6),
(13, '正', 'benar, tepat', 'セイ, ショウ', 'ただ・しい, まさ', '止 (とめる)', 'berjalan ke arah benar', 5, 1),
(14, '歩', 'berjalan', 'ホ, ブ', 'ある・く, あゆ・む', '止 (とめる)', 'langkah kaki', 8, 2),
(15, '出', 'keluar, muncul', 'シュツ', 'で・る, だ・す', '凵 (かんにょう)', 'tunas keluar ke atas', 5, 1),
(16, '産', 'melahirkan, menghasilkan', 'サン', 'う・む, う・まれる', '生 (うまれる)', 'kelahiran hidup baru', 11, 4),
(17, '帯', 'sabuk, rentang waktu', 'タイ', 'お・びる, おび', '巾 (はばへん)', 'kain melingkar', 10, 4),
(18, '瞬', 'sekejap, berkedip', 'シュン', 'またた・く', '目 (めへん)', 'mata berkedip cepat', 18, 8),
(19, '知', 'mengetahui', 'チ', 'し・る', '矢 (やへん)', 'tahu cepat bagai panah', 8, 2),
(20, '短', 'pendek, singkat', 'タン', 'みじか・い', '矢 (やへん)', 'panah pendek', 12, 3),
(21, '長', 'panjang, lama', 'チョウ', 'なが・い', '長 (ながい)', 'rambut panjang terurai', 8, 2),
(22, '区', 'wilayah, membedakan', 'ク', '', '匚 (はこがまえ)', 'kotak pembatas bagian', 4, 3),
(23, '別', 'memisahkan, lain, berbeda', 'ベツ', 'わか・れる', '刂 (りっとう)', 'pisau pemisah', 7, 4),
(24, '煮', 'merebus, mendidihkan', 'シャ', 'に・る, に・える', '灬 (れんが)', 'api memasak di bawah', 12, 8),
(25, '込', 'masuk ke dalam, padat', '', 'こ・む, こ・める', '辶 (しんにょう)', 'masuk bergerak ke dalam', 5, 8);

-- Kotoba
INSERT INTO kotoba (id, kanji, hiragana, meaning_id, meaning_en, notes, example_sentence, example_translation, level) VALUES
(1, '間隔', 'かんかく', 'jarak ; sela', 'space; interval', '※ Dipakai untuk jarak ruang maupun waktu.', '決めるのは、建物と建物の間隔だ。', 'Yang menentukan adalah jarak antara satu bangunan dengan bangunan lainnya.', 'N2'),
(2, '焦げる', 'こげる', 'hangus ; gosong', 'to burn; to scorch', '※ Terbakar hingga gosong/berwarna hitam karena panas.', '魚が真っ黒に焦げてしまった。', 'Ikannya hangus menghitam.', 'N2'),
(3, '防止', 'ぼうし', 'pencegahan', 'prevention; check', '※ Mencegah terjadinya hal yang tidak diinginkan.', '事故の防止に努める。', 'Berupaya keras dalam pencegahan kecelakaan.', 'N2'),
(4, '煙', 'けむり', 'asap', 'smoke; fumes', '※ Asap yang membubung dari kebakaran atau rokok.', '部屋に煙が立ち込めている。', 'Asap memenuhi seluruh ruangan.', 'N2'),
(5, '一部', 'いちぶ', 'sebagian ; satu bagian', 'part; portion', '※ Bagian dari keseluruhan.', '給料の一部を貯金に回す。', 'Mengalihkan sebagian gaji ke tabungan.', 'N2'),
(6, '誤り', 'あやまり', 'kesalahan ; kekeliruan', 'error; mistake', '※ Kesalahan yang tidak disengaja.', '計算に誤りがあった。', 'Ada kesalahan dalam perhitungan.', 'N2'),
(7, '重なる', 'かさなる', 'bertumpuk ; tumpang tindih', 'to pile up; overlap', '※ Jadwal atau barang bertumpuk secara bersamaan.', '悪いことがいくつも重なった。', 'Beberapa hal buruk bertumpuk terjadi bersamaan.', 'N2'),
(8, '歩き出す', 'あるきだす', 'mulai berjalan', 'to start walking', '※ Gerakan melangkah dan mulai berjalan.', '信号が青になると、一斉に歩き出した。', 'Begitu lampu hijau, semua orang mulai berjalan serentak.', 'N2'),
(9, '出産', 'しゅっさん', 'persalinan ; kelahiran anak', 'childbirth; delivery', '※ Proses melahirkan bayi.', '無事に男の子を出産した。', 'Melahirkan bayi laki-laki dengan selamat.', 'N2'),
(10, '幼い', 'おさない', 'masih kecil ; belia', 'very young; childish', '※ Usia masih belia atau sifat kekanak-kanakan.', '幼い頃の記憶がよみがえる。', 'Ingatan masa kecil kembali terbayang.', 'N2'),
(11, '屋根', 'やね', 'atap', 'roof', '※ Atap bangunan.', '屋根の上に鳥がとまっている。', 'Seekor burung hinggap di atas atap.', 'N2'),
(12, '訂正', 'ていせい', 'koreksi ; revisi', 'correction; revision', '※ Memperbaiki teks, data, atau ucapan yang keliru.', '誤字を訂正してください。', 'Tolong koreksi salah ketik.', 'N2'),
(13, '誤る', 'あやまる', 'keliru ; salah langkah', 'to make a mistake; err', '※ Berbeda dengan 謝る (minta maaf), ini berarti salah bertindak.', '判断を誤ると大変なことになる。', 'Jika salah menilai keputusan, akan jadi masalah besar.', 'N2'),
(14, 'みたす', 'みたす', 'memenuhi (syarat, standar)', 'to satisfy; fulfill', '※ Memenuhi standar, kualifikasi atau kebutuhan batin.', '合格基準を満たしている。', 'Memenuhi kriteria kelulusan.', 'N2'),
(15, 'もとめる', 'もとめる', 'meminta ; menginginkan ; mencari', 'to seek; request', '※ Mengharapkan bantuan atau mencari solusi.', '平和を求める人々の声。', 'Suara orang-orang yang menginginkan perdamaian.', 'N2'),
(16, '時間帯', 'じかんたい', 'rentang waktu dalam sehari', 'time slot; time zone', '※ Periode jam tertentu.', '混雑する時間帯を避ける。', 'Menghindari rentang waktu yang ramai padat.', 'N2'),
(17, '瞬間', 'しゅんかん', 'detik itu juga ; sesaat', 'moment; instant', '※ Waktu yang sangat singkat sekejap mata.', 'その瞬間、雷が落ちた。', 'Pada detik itu juga, petir menyambar.', 'N2'),
(18, '知らぬ間に', 'しらぬまに', 'tanpa disadari', 'before one knows it', '※ Tanpa disadari waktu atau situasi berubah.', '知らぬ間に日が暮れていた。', 'Tanpa disadari hari sudah senja.', 'N2'),
(19, '短時間', 'たんじかん', 'waktu singkat', 'short time', '※ Durasi waktu yang pendek.', '短時間で効率よく学ぶ。', 'Belajar efisien dalam waktu singkat.', 'N2'),
(20, '長時間', 'ちょうじかん', 'waktu yang lama ; berjam-jam', 'long time; hours', '※ Berlangsung berjam-jam.', '長時間の手術が終わった。', 'Operasi yang berlangsung lama telah selesai.', 'N2'),
(21, '区別', 'くべつ', 'pembedaan ; pemisahan', 'distinction; differentiation', '※ 区別 → tindakan MEMISAHKAN dua hal (区別がつく) .\n※ Perbedaannya sendiri → 相違 atau 違い。', '善悪の区別をつける。', 'Membedakan antara yang baik dan buruk.', 'N2'),
(22, '煮込む', 'にこむ', 'merebus lama hingga meresap', 'to stew; simmer', '※ 込む di sini berarti lama dan sampai ke dalam — bukan sekadar 煮る。', 'スープをじっくり煮込む。', 'Merebus sup secara perlahan hingga meresap.', 'N2'),
(23, '染み込む', 'しみこむ', 'meresap ; menyerap ke dalam', 'to soak into; permeate', '※ Cairan meresap ke dalam kain, tanah, atau hati.', '調味料の味が染み込む。', 'Rasa bumbu meresap ke dalam masakan.', 'N2'),
(24, '編む', 'あむ', 'merajut ; menganyam', 'to knit; braid', '※ Menganyam benang atau rambut.', 'セーターを編む。', 'Merajut baju hangat.', 'N2'),
(25, '緩む', 'ゆるむ', 'mengendur ; melonggar', 'to become loose; slacken', '※ Tali atau ketegangan menjadi kendur.', 'ロープが緩んでいる。', 'Talinya mengendur.', 'N2');

-- Map Kotoba to Deck 11 (Today's deck: puts 区別 & 煮込む prominently)
INSERT INTO deck_kotoba (id, deck_id, kotoba_id, sort_order) VALUES
(1, 11, 21, 1),
(2, 11, 22, 2),
(3, 11, 12, 3),
(4, 11, 6, 4),
(5, 11, 15, 5),
(6, 11, 1, 6),
(7, 11, 2, 7),
(8, 11, 3, 8),
(9, 11, 4, 9),
(10, 11, 5, 10),
(11, 11, 7, 11),
(12, 11, 8, 12),
(13, 11, 9, 13),
(14, 11, 10, 14),
(15, 11, 11, 15),
(16, 11, 13, 16),
(17, 11, 14, 17),
(18, 11, 16, 18),
(19, 11, 17, 19),
(20, 11, 18, 20),
(21, 11, 19, 21),
(22, 11, 20, 22),

-- Decks 8, 9, 10, 2 Kotoba mapping
(23, 2, 22, 1), (24, 2, 23, 2), (25, 2, 24, 3), (26, 2, 25, 4),
(27, 10, 1, 1), (28, 10, 2, 2), (29, 10, 3, 3), (30, 10, 4, 4),
(31, 9, 5, 1), (32, 9, 6, 2), (33, 9, 7, 3), (34, 9, 8, 4),
(35, 8, 9, 1), (36, 8, 10, 2), (37, 8, 11, 3), (38, 8, 12, 4),
(39, 1, 13, 1), (40, 1, 14, 2), (41, 1, 15, 3),
(42, 90, 1, 1), (43, 90, 3, 2), (44, 90, 5, 3), (45, 90, 7, 4),
(46, 101, 1, 1), (47, 101, 3, 2), (48, 101, 7, 3), (49, 101, 16, 4);

-- Map Kotoba to Kanji
INSERT INTO kotoba_kanji (kotoba_id, kanji_id) VALUES
(1, 1), (1, 2),
(2, 3),
(3, 4), (3, 5),
(4, 6),
(6, 7),
(7, 8),
(8, 14), (8, 15),
(9, 15), (9, 16),
(10, 9),
(11, 10), (11, 11),
(12, 12), (12, 13),
(13, 7),
(16, 1), (16, 17),
(17, 18), (17, 1),
(18, 19), (18, 1),
(19, 20), (19, 1),
(20, 21), (20, 1),
(21, 22), (21, 23),
(22, 24), (22, 25);

-- Seed initial user progress
INSERT INTO user_progress (id, user_id, kotoba_id, direction, status, ease_factor, interval_days, next_review, review_count, last_reviewed) VALUES
(1, 1, 1, 'KANJI_TO_HIRAGANA', 'MASTERED', 2.5, 7.0, CURRENT_TIMESTAMP, 3, CURRENT_TIMESTAMP),
(2, 1, 1, 'KANJI_TO_MEANING', 'MASTERED', 2.6, 7.0, CURRENT_TIMESTAMP, 3, CURRENT_TIMESTAMP),
(3, 1, 2, 'KANJI_TO_MEANING', 'MASTERED', 2.5, 6.0, CURRENT_TIMESTAMP, 3, CURRENT_TIMESTAMP),
(4, 1, 3, 'KANJI_TO_MEANING', 'MASTERED', 2.5, 6.0, CURRENT_TIMESTAMP, 3, CURRENT_TIMESTAMP),
(5, 1, 4, 'KANJI_TO_HIRAGANA', 'MASTERED', 2.5, 6.0, CURRENT_TIMESTAMP, 3, CURRENT_TIMESTAMP),
(6, 1, 5, 'KANJI_TO_MEANING', 'MASTERED', 2.5, 6.0, CURRENT_TIMESTAMP, 3, CURRENT_TIMESTAMP),
(7, 1, 6, 'KANJI_TO_HIRAGANA', 'MASTERED', 2.5, 6.0, CURRENT_TIMESTAMP, 3, CURRENT_TIMESTAMP),
(8, 1, 7, 'KANJI_TO_MEANING', 'MASTERED', 2.5, 6.0, CURRENT_TIMESTAMP, 3, CURRENT_TIMESTAMP),
(9, 1, 8, 'KANJI_TO_HIRAGANA', 'MASTERED', 2.5, 6.0, CURRENT_TIMESTAMP, 3, CURRENT_TIMESTAMP),
(10, 1, 9, 'KANJI_TO_MEANING', 'MASTERED', 2.5, 6.0, CURRENT_TIMESTAMP, 3, CURRENT_TIMESTAMP),
(11, 1, 10, 'KANJI_TO_HIRAGANA', 'MASTERED', 2.8, 7.0, CURRENT_TIMESTAMP, 4, CURRENT_TIMESTAMP);
