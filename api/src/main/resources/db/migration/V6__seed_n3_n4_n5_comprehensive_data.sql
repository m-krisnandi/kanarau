-- Kanarau Seed Data V6: Full JLPT N3, N4, and N5 High-Yield Vocabulary, Kanji, & Decks

-- 1. Decks for N3, N4, and N5
INSERT INTO decks (id, name, level, day_number, kotoba_count) VALUES
-- N3 Decks
(301, 'DAY 1 N3', 'N3', 1, 10),
(302, 'DAY 2 N3', 'N3', 2, 10),
(303, 'DAY 3 N3', 'N3', 3, 10),
-- N4 Decks
(401, 'DAY 1 N4', 'N4', 1, 10),
(402, 'DAY 2 N4', 'N4', 2, 10),
(403, 'DAY 3 N4', 'N4', 3, 10),
-- N5 Decks
(501, 'DAY 1 N5', 'N5', 1, 10),
(502, 'DAY 2 N5', 'N5', 2, 10),
(503, 'DAY 3 N5', 'N5', 3, 10);

-- 2. JLPT N5 Vocabulary (IDs 501-530)
INSERT INTO kotoba (id, kanji, hiragana, meaning_id, meaning_en, notes, example_sentence, example_translation, level) VALUES
(501, '食べる', 'たべる', 'makan', 'to eat', 'Kata kerja Golongan 2 (Ichidan). Bentuk sopan: 食べます。', '毎日朝ごはんを食べます。', 'Setiap hari saya makan sarapan.', 'N5'),
(502, '飲む', 'のむ', 'minum', 'to drink', 'Kata kerja Golongan 1 (Godan). Pasangan partikel: 〜を飲む。', '冷たい水を飲みました。', 'Saya meminum air dingin.', 'N5'),
(503, '行く', 'いく', 'pergi', 'to go', 'Kata kerja perpindahan. Partikel tujuan: 〜へ / 〜に行きます。', '明日東京へ行きます。', 'Besok saya pergi ke Tokyo.', 'N5'),
(504, '来る', 'くる', 'datang', 'to come', 'Kata kerja tidak beraturan (Kuru). Bentuk masu: 来ます (kimasu).', '友達がうちに遊びに来ました。', 'Teman datang bermain ke rumah saya.', 'N5'),
(505, '見る', 'みる', 'melihat ; menonton', 'to see; to watch', 'Kata kerja Golongan 2. Menonton film, melihat pemandangan.', '夜テレビで映画を見ます。', 'Malam hari saya menonton film di TV.', 'N5'),
(506, '聞く', 'きく', 'mendengar ; bertanya', 'to listen; to ask', 'Mendengarkan musik (音楽を聞く) atau bertanya ke guru (先生に聞く).', '毎朝日本のラジオを聞きます。', 'Setiap pagi saya mendengarkan radio Jepang.', 'N5'),
(507, '読む', 'よむ', 'membaca', 'to read', 'Kata kerja Godan. Membaca buku, koran, atau pesan.', '図書館で日本語の本を読みます。', 'Saya membaca buku bahasa Jepang di perpustakaan.', 'N5'),
(508, '書く', 'かく', 'menulis', 'to write', 'Menulis surat atau kanji dengan pensil/pena.', '家族に手紙を書きました。', 'Saya telah menulis surat kepada keluarga.', 'N5'),
(509, '話す', 'はなす', 'berbicara ; mengobrol', 'to speak; to talk', 'Berbicara dalam bahasa Jepang: 日本語で話す。', '先生と日本語で話しました。', 'Saya berbicara dengan guru dalam bahasa Jepang.', 'N5'),
(510, '買う', 'かう', 'membeli', 'to buy', 'Membeli barang di toko atau supermarket.', 'スーパーでパンと牛乳を買いました。', 'Saya membeli roti dan susu di supermarket.', 'N5'),
(511, '友達', 'ともだち', 'teman ; sahabat', 'friend', 'Teman dekat atau kawan sebaya.', '週末に友達と映画を見に行きます。', 'Akhir pekan saya pergi menonton film bersama teman.', 'N5'),
(512, '家族', 'かぞく', 'keluarga', 'family', 'Anggota keluarga tercinta.', '私の家族は四人です。', 'Keluarga saya ada empat orang.', 'N5'),
(513, '先生', 'せんせい', 'guru ; pengajar ; dokter', 'teacher; doctor', 'Panggilan hormat untuk pengajar atau praktisi medis.', '先生に質問をしました。', 'Saya mengajukan pertanyaan kepada guru.', 'N5'),
(514, '学校', 'がっこう', 'sekolah', 'school', 'Institusi pendidikan dasar, menengah, hingga tinggi.', '自転車で学校へ通っています。', 'Saya pergi ke sekolah dengan naik sepeda.', 'N5'),
(515, '会社', 'かいしゃ', 'perusahaan ; kantor', 'company; office', 'Tempat bekerja karyawan swasta.', '父は日本の会社で働いています。', 'Ayah bekerja di sebuah perusahaan Jepang.', 'N5'),
(516, '部屋', 'へや', 'kamar ; ruangan', 'room', 'Kamar tidur atau ruang pribadi.', '休みの日は部屋を掃除します。', 'Pada hari libur saya membersihkan kamar.', 'N5'),
(517, '水', 'みず', 'air (dingin/segar)', 'water', 'Air minum biasa (air panas disebut お湯 oyu).', 'コップに水を一杯ください。', 'Tolong segelas air.', 'N5'),
(518, '雨', 'あめ', 'hujan', 'rain', 'Hujan turun: 雨が降る (ame ga furu).', '午後から雨が降り始めました。', 'Hujan mulai turun sejak siang.', 'N5'),
(519, '電車', 'でんしゃ', 'kereta listrik', 'electric train', 'Moda transportasi umum utama di kota-kota Jepang.', '毎朝電車に乗って通勤します。', 'Setiap pagi saya naik kereta listrik pergi bekerja.', 'N5'),
(520, '駅', 'えき', 'stasiun kereta', 'train station', 'Tempat naik dan turun kereta.', '駅の前で友達と待ち合わせをします。', 'Saya janjian bertemu dengan teman di depan stasiun.', 'N5'),
(521, '今日', 'きょう', 'hari ini', 'today', 'Hari saat ini berlangsung.', '今日は天気がとてもいいです。', 'Hari ini cuacanya sangat bagus.', 'N5'),
(522, '明日', 'あした', 'besok', 'tomorrow', 'Hari berikutnya.', '明日の朝八時に出発します。', 'Besok pagi jam delapan kita akan berangkat.', 'N5'),
(523, '時間', 'じかん', 'waktu ; jam durasi', 'time; hour duration', 'Waktu luang atau durasi jam pelajaran.', '今は忙しくて時間がありません。', 'Sekarang saya sibuk dan tidak ada waktu.', 'N5'),
(524, '大きい', 'おおきい', 'besar', 'big; large', 'Kata sifat-i lawan kata dari 小さい (chiisai).', '公園に大きい木があります。', 'Di taman ada pohon yang besar.', 'N5'),
(525, '小さい', 'ちいさい', 'kecil', 'small; little', 'Kata sifat-i lawan kata dari 大きい (ookii).', 'この部屋は少し小さいですが綺麗です。', 'Kamar ini agak kecil tetapi bersih.', 'N5'),
(526, '新しい', 'あたらしい', 'baru', 'new', 'Barang atau informasi yang baru dibuat/didapat.', '新しいパソコンを買いました。', 'Saya telah membeli komputer baru.', 'N5'),
(527, '高い', 'たかい', 'tinggi ; mahal', 'tall; high; expensive', 'Tinggi badan, gunung yang tinggi, atau harga yang mahal.', 'この辞書は質がいいですが高いです。', 'Kamus ini kualitasnya bagus tapi mahal.', 'N5'),
(528, '安い', 'やすい', 'murah', 'cheap; inexpensive', 'Harga yang terjangkau, lawan kata dari 高い (takai).', '駅前の店は果物がとても安いです。', 'Toko di depan stasiun buah-buahannya sangat murah.', 'N5'),
(529, '好き', 'すき', 'suka ; gemar', 'like; fond of', 'Kata sifat-na. Pasangan partikel: 〜が好きです。', '私は日本のアニメが好きです。', 'Saya suka anime Jepang.', 'N5'),
(530, '上手', 'じょうず', 'pandai ; mahir', 'skillful; good at', 'Kata sifat-na. Memuji kepandaian seseorang: 〜が上手。', 'マリアさんは歌がとても上手です。', 'Maria sangat pandai bernyanyi.', 'N5');

-- 3. JLPT N4 Vocabulary (IDs 401-430)
INSERT INTO kotoba (id, kanji, hiragana, meaning_id, meaning_en, notes, example_sentence, example_translation, level) VALUES
(401, '案内', 'あんない', 'memandu ; memandu arah ; informasi', 'guidance; showing around', 'Memandu tamu atau pengunjung: 〜を案内する。', '市内を観光客に案内しました。', 'Saya memandu wisatawan mengelilingi kota.', 'N4'),
(402, '連絡', 'れんらく', 'menghubungi ; komunikasi', 'contact; communication', 'Menghubungi via telepon/pesan: 〜に連絡する。', '予定が変わったらすぐに連絡してください。', 'Jika jadwal berubah tolong segera hubungi saya.', 'N4'),
(403, '準備', 'じゅんび', 'persiapan', 'preparation', 'Mempersiapkan ujian, perjalanan, atau pertemuan.', '旅行の準備をそろそろ始めましょう。', 'Mari mulai bersiap-siap untuk perjalanan.', 'N4'),
(404, '約束', 'やくそく', 'janji', 'promise; appointment', 'Membuat janji: 約束をする。Menepati janji: 約束を守る。', '友達と週末に会う約束をしました。', 'Saya berjanji bertemu teman pada akhir pekan.', 'N4'),
(405, '予定', 'よてい', 'rencana ; jadwal', 'schedule; plan', 'Jadwal yang telah diagendakan sebelumnya.', '来週の出張の予定を確認します。', 'Saya memastikan jadwal dinas luar kota minggu depan.', 'N4'),
(406, '招待', 'しょうたい', 'undangan', 'invitation', 'Mengundang ke pesta atau jamuan makan: 〜に招待する。', '結婚式に友達を招待しました。', 'Saya mengundang teman ke pesta pernikahan.', 'N4'),
(407, '相談', 'そうだん', 'berkonsultasi ; berdiskusi', 'consultation; discussion', 'Meminta saran atau berunding: 先生に相談する。', '進路について親と相談しました。', 'Saya berkonsultasi dengan orang tua tentang rencana masa depan.', 'N4'),
(408, '遠慮', 'えんりょ', 'sungkan ; menahan diri', 'restraint; hesitation', 'Jangan sungkan: ご遠慮なく。', 'どうぞ遠慮しないでたくさん食べてください。', 'Silakan jangan sungkan, makanlah yang banyak.', 'N4'),
(409, '経験', 'けいけん', 'pengalaman', 'experience', 'Pengalaman hidup atau kerja: 経験がある。', '海外で一人暮らしをした経験があります。', 'Saya punya pengalaman tinggal sendiri di luar negeri.', 'N4'),
(410, '故障', 'こしょう', 'kerusakan mesin ; macet', 'breakdown; malfunction', 'Kendaraan atau mesin rusak: 〜が故障する。', 'エレベーターが故障して階段を使いました。', 'Lift rusak sehingga saya menggunakan tangga.', 'N4'),
(411, '注意', 'ちゅうい', 'perhatian ; peringatan ; berhati-hati', 'caution; attention', 'Memperhatikan: 注意する。Waspada bahaya.', '車が多いですから足元に注意してください。', 'Karena banyak mobil, harap berhati-hati melangkah.', 'N4'),
(412, '心配', 'しんぱい', 'khawatir ; cemas', 'worry; concern', 'Jangan khawatir: 心配しないでください。', 'テストの結果をとても心配しています。', 'Saya sangat mengkhawatirkan hasil tes.', 'N4'),
(413, '複雑', 'ふくざつ', 'rumit ; berbelit-belit', 'complex; complicated', 'Kata sifat-na. Lawan kata dari 簡単 (kantan).', 'この機械の使い方は少し複雑です。', 'Cara penggunaan mesin ini agak rumit.', 'N4'),
(414, '簡単', 'かんたん', 'mudah ; sederhana', 'simple; easy', 'Kata sifat-na. Lawan kata dari 複雑 (fukuzatsu).', '簡単な日本語で説明してください。', 'Tolong jelaskan dengan bahasa Jepang yang sederhana.', 'N4'),
(415, '危険', 'きけん', 'berbahaya', 'danger; perilous', 'Kata sifat-na. Tempat atau tindakan rawan celaka.', '夜遅くに一人で歩くのは危険です。', 'Berjalan sendirian larut malam itu berbahaya.', 'N4'),
(416, '安全', 'あんぜん', 'aman', 'safety; secure', 'Lawan kata dari 危険 (kiken). Terjaga dari mara bahaya.', 'シートベルトを締めて安全に運転します。', 'Mengenakan sabuk pengaman untuk berkendara dengan aman.', 'N4'),
(417, '習慣', 'しゅうかん', 'kebiasaan ; adat tradisi', 'custom; habit', 'Kebiasaan hidup atau norma budaya.', '早起きをする習慣を身につけました。', 'Saya membiasakan diri untuk bangun pagi.', 'N4'),
(418, '理由', 'りゆう', 'alasan ; latar belakang', 'reason', 'Sebab terjadinya suatu peristiwa.', '学校に遅刻した理由を正直に話しました。', 'Saya menceritakan alasan terlambat ke sekolah secara jujur.', 'N4'),
(419, '試合', 'しあい', 'pertandingan ; laga olahraga', 'match; game', 'Pertandingan sepak bola, bisbol, atau tenis.', '明日のサッカーの試合が楽しみです。', 'Saya menantikan pertandingan sepak bola besok.', 'N4'),
(420, '優勝', 'ゆうしょう', 'juara pertama ; kemenangan turnamen', 'championship; overall win', 'Meraih peringkat pertama dalam kompetisi.', '私たちのチームが大会で優勝しました。', 'Tim kami berhasil menjadi juara dalam turnamen.', 'N4'),
(421, '届ける', 'とどける', 'mengantarkan ; menyampaikan surat/barang', 'to deliver', 'Mengirimkan dokumen atau paket ke tujuan.', '隣の家に荷物を届けに行きました。', 'Saya pergi mengantarkan paket ke rumah sebelah.', 'N4'),
(422, '運ぶ', 'はこぶ', 'mengangkut ; memindahkan beban', 'to carry; transport', 'Membawa barang berat bersama-sama.', '重い荷物を二人で二階へ運びました。', 'Kami berdua mengangkut barang berat ke lantai dua.', 'N4'),
(423, '直す', 'なおす', 'memperbaiki ; membetulkan', 'to repair; to fix', 'Memperbaiki kesalahan atau perkakas rusak.', '作文の間違いを先生に直してもらいました。', 'Esai saya yang salah telah diperbaiki oleh guru.', 'N4'),
(424, '届く', 'とどく', 'sampai ; tiba (surat/paket)', 'to reach; arrive', 'Barang kiriman sampai di tempat tujuan.', '注文した商品が昨夜無事に届きました。', 'Barang yang saya pesan tiba dengan selamat kemarin malam.', 'N4'),
(425, '伝える', 'つたえる', 'menyampaikan pesan', 'to convey; report', 'Menitipkan amanat kepada orang lain.', '課長に明日の会議の時間を伝えておきます。', 'Saya akan menyampaikan waktu rapat besok kepada kepala seksi.', 'N4'),
(426, '迎える', 'むかえる', 'menjemput ; menyambut kedatangan', 'to welcome; greet', 'Menjemput tamu di bandara atau stasiun.', '空港まで両親を車で迎えに行きました。', 'Saya pergi menjemput orang tua ke bandara dengan mobil.', 'N4'),
(427, '決める', 'きめる', 'memutuskan ; menetapkan', 'to decide', 'Memilih dan menetapkan pilihan final.', '旅行に行く日程をみんなで決めました。', 'Kami bersama-sama memutuskan jadwal keberangkatan liburan.', 'N4'),
(428, '育てる', 'そだてる', 'membesarkan ; merawat hingga tumbuh', 'to raise; bring up', 'Mengasuh anak atau menumbuhkan tanaman.', '庭でトマトとハーブを大切に育てています。', 'Saya merawat tomat dan rempah dengan cermat di halaman.', 'N4'),
(429, '落ちる', 'おちる', 'jatuh ; gugur ; gagal ujian', 'to fall; fail', 'Benda jatuh ke bawah atau gagal ujian.', '木から黄色い葉がたくさん落ちました。', 'Banyak daun kuning yang gugur dari pohon.', 'N4'),
(430, '倒れる', 'たおれる', 'tumbang ; roboh ; pingsan', 'to collapse; fall down', 'Pohon tumbang karena angin kencang.', '強い風で庭の大きな木が倒れました。', 'Pohon besar di halaman tumbang akibat angin kencang.', 'N4');

-- 4. JLPT N3 Vocabulary (IDs 301-330)
INSERT INTO kotoba (id, kanji, hiragana, meaning_id, meaning_en, notes, example_sentence, example_translation, level) VALUES
(301, '解決', 'かいけつ', 'penyelesaian ; pemecahan masalah', 'solution; resolution', 'Menemukan jalan keluar persoalan rumit.', '両国間の紛争がついに平和的に解決した。', 'Perselisihan antarkedua negara akhirnya terselesaikan secara damai.', 'N3'),
(302, '影響', 'えいきょう', 'pengaruh ; dampak', 'influence; effect', 'Dampak positif atau negatif: 〜に影響を与える。', '親の読書習慣が子供に大きな影響を与える。', 'Kebiasaan membaca orang tua memberi pengaruh besar bagi anak.', 'N3'),
(303, '担当', 'たんとう', 'penanggung jawab ; memegang tugas', 'being in charge; responsible', 'PIC suatu proyek atau wilayah penjualan.', '私がこの新規プロジェクトの広報を担当します。', 'Saya yang bertanggung jawab atas hubungan masyarakat proyek baru ini.', 'N3'),
(304, '延期', 'えんき', 'penundaan jadwal', 'postponement; deferral', 'Menggeser jadwal ke waktu mendatang karena kendala.', '雨天のため野外イベントは来週に延期された。', 'Acara luar ruangan ditunda ke minggu depan karena cuaca hujan.', 'N3'),
(305, '観察', 'かんさつ', 'pengamatan ; observasi mendalam', 'observation; survey', 'Memperhatikan secara teliti perkembangan objek.', '植物の成長の様子を毎日ノートに観察記録した。', 'Saya mencatat pengamatan kondisi pertumbuhan tanaman di buku setiap hari.', 'N3'),
(306, '節約', 'せつやく', 'penghematan anggaran/daya', 'economizing; saving', 'Mengurangi pemborosan listrik, air, atau uang.', '電気代を節約するためにエアコンの設定温度を見直す。', 'Meninjau ulang setelan suhu AC demi menghemat tagihan listrik.', 'N3'),
(307, '協力', 'きょうりょく', 'kerja sama ; sinergi', 'cooperation; collaboration', 'Bahu-membahu mencapai tujuan bersama.', '地域住民が協力して公園の清掃活動を行った。', 'Warga setempat bekerja sama melakukan kegiatan pembersihan taman.', 'N3'),
(308, '限界', 'げんかい', 'batas maksimal kemampuan/daya tahan', 'limit; bound', 'Mencapai titik batas teratas: 限界に達する。', '体力の限界を感じてマラソンを途中で棄権した。', 'Merasa telah mencapai batas stamina, ia mengundurkan diri di tengah maraton.', 'N3'),
(309, '発揮', 'はっき', 'memperlihatkan kebolehan ; unjuk bakat', 'exhibition; display (power)', 'Menunjukkan potensi atau keterampilan optimal.', '本番の試合で日頃の練習の成果を存分に発揮した。', 'Dalam pertandingan sesungguhnya, ia memperlihatkan sepenuhnya hasil latihan.', 'N3'),
(310, '支援', 'しえん', 'dukungan ; bantuan materiil/moral', 'support; backing', 'Menopang pemulihan korban bencana atau usaha rintisan.', '被災地の復興に向けて国内外から温かい支援が集まった。', 'Bantuan hangat dari dalam dan luar negeri terkumpul demi pemulihan wilayah bencana.', 'N3'),
(311, '判断', 'はんだん', 'penilaian ; keputusan logika', 'judgment; decision', 'Menimbang data sebelum menetapkan kesimpulan.', '現場の状況を冷静に見極めて迅速な判断を下した。', 'Menilai situasi lapangan dengan tenang dan mengambil keputusan dengan cepat.', 'N3'),
(312, '考慮', 'こうりょ', 'pertimbangan mendalam', 'consideration; taking into account', 'Memperhitungkan faktor risiko: 〜を考慮に入れる。', '周囲の住環境への影響を十分に考慮して建設を進める。', 'Melanjutkan pembangunan dengan mempertimbangkan penuh dampaknya ke warga sekitar.', 'N3'),
(313, '反映', 'はんえい', 'mencerminkan ; merefleksikan', 'reflection (influence)', 'Opini publik yang tercermin dalam kebijakan baru.', '顧客からの要望を新製品の機能設計に素早く反映させた。', 'Permintaan pelanggan segera direfleksikan ke dalam desain fitur produk baru.', 'N3'),
(314, '充実', 'じゅうじつ', 'kelimpahan kepuasan ; bermakna padat', 'enrichment; fulfillment', 'Menjalani hari-hari yang bermakna dan penuh gairah.', '留学生活は大変だったが非常に充実した毎日だった。', 'Kehidupan studi di luar negeri memang berat namun hari-harinya sangat bermakna.', 'N3'),
(315, '納得', 'なっとく', 'dapat memahami dan menerima alasan', 'consent; understanding', 'Puas dan menerima penjelasan setelah dijelaskan tuntas.', '上司の丁寧な説明を聞いてようやく納得がいった。', 'Mendengar penjelasan saksama dari atasan, akhirnya saya dapat memahaminya.', 'N3'),
(316, '警戒', 'けいかい', 'kewaspadaan ketat ; siaga bahaya', 'vigilance; precaution', 'Menjaga keamanan dari kemungkinan banjir atau pencurian.', '台風の接近に伴い河川の氾濫に対して厳重な警戒を呼びかけた。', 'Seiring mendekatnya taifun, imbauan kewaspadaan ketat atas luapan sungai diserukan.', 'N3'),
(317, '慎重', 'しんちょう', 'hati-hati penuh perhitungan ; prudent', 'prudent; cautious', 'Kata sifat-na. Tidak gegabah dalam mengambil tindakan.', '契約を結ぶ前に条項の細部まで慎重に確認するべきだ。', 'Sebelum menandatangani kontrak, seluruh rincian pasal harus diperiksa dengan hati-hati.', 'N3'),
(318, '曖昧', 'あいまい', 'rancu ; ambigu ; tidak jelas samar-samar', 'vague; ambiguous', 'Pernyataan yang abu-abu dan tidak tegas.', '曖昧な返事をすると相手に誤解を与えてしまう恐れがある。', 'Jika memberikan jawaban ambigu, dikhawatirkan dapat menimbulkan salah paham.', 'N3'),
(319, '誠実', 'せいじつ', 'tulus jujur ; berintegritas tinggi', 'sincere; honest', 'Sikap bekerja yang dapat dipercaya sepenuhnya.', '彼はどんな仕事にも誠実に向き合う信頼できる社員だ。', 'Ia adalah karyawan terpercaya yang menghadapi pekerjaan apa pun dengan tulus.', 'N3'),
(320, '柔軟', 'じゅうなん', 'fleksibel ; luwes tidak kaku', 'flexible; pliant', 'Mampu beradaptasi dengan situasi yang dinamis.', '状況の変化に応じて柔軟に対応できる組織作りを目指す。', 'Menargetkan pembentukan organisasi yang mampu merespons secara fleksibel.', 'N3'),
(321, '促す', 'うながす', 'mendesak ; merangsang percepatan', 'to urge; stimulate', 'Mengimbau warga agar segera evakuasi atau melunasi.', '避難指示を出して住民に早めの避難行動を強く促した。', 'Menerbitkan perintah evakuasi dan mendesak warga segera mengungsi lebih awal.', 'N3'),
(322, '補う', 'おぎなう', 'menambal kekurangan ; mengompensasi', 'to supplement; make up for', 'Menambah asupan vitamin atau mengganti waktu yang hilang.', '不足しがちな栄養分を毎日のサプリメントで補っている。', 'Menambal kekurangan nutrisi harian dengan suplemen kesehatan.', 'N3'),
(323, '偏る', 'かたよる', 'condong sepihak ; tidak seimbang', 'to be biased; unbalanced', 'Gizi yang timpang atau pandangan yang berat sebelah.', '栄養が偏らないように野菜を多く食べるよう心がけている。', 'Berupaya makan banyak sayur agar asupan gizi tidak timpang sebelah.', 'N3'),
(324, '怠る', 'おこたる', 'lalai ; mengabaikan kewajiban', 'to neglect; fail to do', 'Lengah dalam pemeliharaan atau latihan.', '日々の健康管理を怠ると重大な病気につながる。', 'Mengabaikan pemeliharaan kesehatan harian dapat memicu penyakit serius.', 'N3'),
(325, '抱える', 'かかえる', 'memikul beban ; merengkuh masalah', 'to hold in arms; have (problems)', 'Membawa masalah pelik atau menggendong kardus.', '多額の負債を抱えながらも新規事業の立ち上げに奮闘した。', 'Meski memikul utang besar, ia berjuang keras merintis usaha baru.', 'N3'),
(326, '捉える', 'とらえる', 'menangkap makna inti ; memandang situasi', 'to grasp; perceive', 'Menangkap esensi pasar atau peluang emas.', '時代の変化をチャンスとして前向きに捉える姿勢が不可欠だ。', 'Sikap menangkap perubahan zaman sebagai peluang emas adalah hal yang mutlak.', 'N3'),
(327, '招く', 'まねく', 'mengundang bencana/akibat buruk', 'to invite; bring about (misfortune)', 'Kecerobohan yang mendatangkan kerugian besar.', '確認を怠った軽率なミスが思わぬ大事故を招いてしまった。', 'Kecerobohan mengabaikan pengecekan telah mendatangkan kecelakaan besar tak terduga.', 'N3'),
(328, '遡る', 'さかのぼる', 'menelusuri kembali ke masa lalu', 'to go back in time; trace back', 'Menelusuri sejarah peradaban ke abad kuno.', 'この伝統行事の起源は江戸時代初期まで遡ることができる。', 'Asal-usul tradisi ini dapat ditelusuri kembali hingga awal zaman Edo.', 'N3'),
(329, '携わる', 'たずさわる', 'berkecimpung dalam bidang kerja', 'to participate; be involved in', 'Terlibat aktif dalam industri pendidikan atau medis.', '長年にわたって最先端の宇宙開発プロジェクトに携わってきた。', 'Selama bertahun-tahun ia telah berkecimpung dalam proyek antariksa terdepan.', 'N3'),
(330, '見合わせる', 'みあわせる', 'menangguhkan sementara ; menunda eksekusi', 'to postpone; suspend', 'Menahan diri untuk tidak berangkat karena badai salju.', '大雪の影響で電車の運行を一時的に見合わせている。', 'Dampak salju lebat, operasional kereta listrik untuk sementara ditangguhkan.', 'N3');

-- 5. Map Kotoba to Decks
-- N5 Day 1 (501-510), Day 2 (511-520), Day 3 (521-530)
INSERT INTO deck_kotoba (id, deck_id, kotoba_id, sort_order) VALUES
(501, 501, 501, 1), (502, 501, 502, 2), (503, 501, 503, 3), (504, 501, 504, 4), (505, 501, 505, 5),
(506, 501, 506, 6), (507, 501, 507, 7), (508, 501, 508, 8), (509, 501, 509, 9), (510, 501, 510, 10),
(511, 502, 511, 1), (512, 502, 512, 2), (513, 502, 513, 3), (514, 502, 514, 4), (515, 502, 515, 5),
(516, 502, 516, 6), (517, 502, 517, 7), (518, 502, 518, 8), (519, 502, 519, 9), (520, 502, 520, 10),
(521, 503, 521, 1), (522, 503, 522, 2), (523, 503, 523, 3), (524, 503, 524, 4), (525, 503, 525, 5),
(526, 503, 526, 6), (527, 503, 527, 7), (528, 503, 528, 8), (529, 503, 529, 9), (530, 503, 530, 10),

-- N4 Day 1 (401-410), Day 2 (411-420), Day 3 (421-430)
(401, 401, 401, 1), (402, 401, 402, 2), (403, 401, 403, 3), (404, 401, 404, 4), (405, 401, 405, 5),
(406, 401, 406, 6), (407, 401, 407, 7), (408, 401, 408, 8), (409, 401, 409, 9), (410, 401, 410, 10),
(411, 402, 411, 1), (412, 402, 412, 2), (413, 402, 413, 3), (414, 402, 414, 4), (415, 402, 415, 5),
(416, 402, 416, 6), (417, 402, 417, 7), (418, 402, 418, 8), (419, 402, 419, 9), (420, 402, 420, 10),
(421, 403, 421, 1), (422, 403, 422, 2), (423, 403, 423, 3), (424, 403, 424, 4), (425, 403, 425, 5),
(426, 403, 426, 6), (427, 403, 427, 7), (428, 403, 428, 8), (429, 403, 429, 9), (430, 403, 430, 10),

-- N3 Day 1 (301-310), Day 2 (311-320), Day 3 (321-330)
(301, 301, 301, 1), (302, 301, 302, 2), (303, 301, 303, 3), (304, 301, 304, 4), (305, 301, 305, 5),
(306, 301, 306, 6), (307, 301, 307, 7), (308, 301, 308, 8), (309, 301, 309, 9), (310, 301, 310, 10),
(311, 302, 311, 1), (312, 302, 312, 2), (313, 302, 313, 3), (314, 302, 314, 4), (315, 302, 315, 5),
(316, 302, 316, 6), (317, 302, 317, 7), (318, 302, 318, 8), (319, 302, 319, 9), (320, 302, 320, 10),
(321, 303, 321, 1), (322, 303, 322, 2), (323, 303, 323, 3), (324, 303, 324, 4), (325, 303, 325, 5),
(326, 303, 326, 6), (327, 303, 327, 7), (328, 303, 328, 8), (329, 303, 329, 9), (330, 303, 330, 10);

-- 6. Kanji for N5, N4, and N3
INSERT INTO kanji (id, character, meaning, on_reading, kun_reading, radical, radical_meaning, stroke_count, grade) VALUES
-- N5 Kanji
(501, '食', 'makan, makanan', 'ショク, ジキ', 'た・べる, く・う', '食 (しょくへん)', 'makanan pokok', 9, 2),
(502, '飲', 'minum', 'イン', 'の・む', '食 (しょくへん)', 'makanan dan minuman', 12, 3),
(503, '行', 'pergi, baris', 'コウ, ギョウ', 'い・く, ゆ・く, おこな・う', '行 (ぎょうがまえ)', 'persimpangan jalan', 6, 2),
(504, '来', 'datang, masa depan', 'ライ', 'く・る, きた・る', '木 (き)', 'datang dari kejauhan', 7, 2),
(505, '見', 'melihat, memandang', 'ケン', 'み・る, み・える, み・せる', '見 (みる)', 'mata menatap', 7, 1),
(506, '聞', 'mendengar, bertanya', 'ブン, モン', 'き・く, き・こえる', '耳 (みみ)', 'telinga di pintu', 14, 2),
(507, '読', 'membaca', 'ドク, トク', 'よ・む', '言 (ごんべん)', 'kata-kata tertulis dibaca', 14, 2),
(508, '書', 'menulis, buku dokumen', 'ショ', 'か・く', '曰 (いわく)', 'kuas menggores tulisan', 10, 2),
(509, '話', 'berbicara, cerita', 'ワ', 'はな・す, はなし', '言 (ごんべん)', 'kata-kata diucapkan', 13, 2),
(510, '買', 'membeli', 'バイ', 'か・う', '貝 (かい)', 'kerang mata uang kuno', 12, 2),

-- N4 Kanji
(401, '案', 'rencana, memandu', 'アン', '', '木 (き)', 'meja kerja memikirkan ide', 10, 4),
(402, '内', 'dalam, urusan rumah', 'ナイ, ダイ', 'うち', '冂 (けいがまえ)', 'ruang dalam batas', 4, 2),
(403, '連', 'terhubung, membawa', 'レン', 'つら・なる, つ・れる', '辶 (しんにょう)', 'gerobak beriringan', 10, 4),
(404, '絡', 'menjalin, terlilit', 'ラク', 'から・む, から・まる', '糸 (いとへん)', 'benang saling terikat', 12, 4),
(405, '準', 'standar, persiapan', 'ジュン', '', '氵 (さんずい)', 'air perata datar', 13, 5),
(406, '備', 'menyediakan, perlengkapan', 'ビ', 'そな・える, そな・わる', '亻 (にんべん)', 'orang mempersiapkan panah', 12, 5),
(407, '約', 'janji, ringkasan', 'ヤク', '', '糸 (いとへん)', 'benang pengikat kesepakatan', 9, 4),
(408, '束', 'seikat, mengikat', 'ソク', 'たば, たば・ねる', '木 (き)', 'kayu dibungkus seikat', 7, 4),
(409, '予', 'sebelumnya, estimasi', 'ヨ', '', '亅 (はねぼう)', 'memberi tahu di muka', 4, 3),
(410, '定', 'pasti, menetapkan', 'テイ, ジョウ', 'さだ・める, さだ・まる', '宀 (うかんむり)', 'atap pondasi kokoh', 8, 3),

-- N3 Kanji
(301, '解', 'melepas, memecahkan, paham', 'カイ, ゲ', 'と・く, と・かす, わかる', '角 (つの)', 'membelah tanduk memahami struktur', 13, 5),
(302, '決', 'memutuskan, menetapkan', 'ケツ', 'き・める, き・まる', '氵 (さんずい)', 'arus air menentukan aliran', 7, 3),
(303, '影', 'bayangan, pengaruh', 'エイ', 'かげ', '彡 (さんづくり)', 'cahaya matahari membentuk bayang', 15, 8),
(304, '響', 'bergema, dampak', 'キョウ', 'ひび・く', '音 (おと)', 'suara bergema di kota', 20, 8),
(305, '担', 'memikul, mengemban tugas', 'タン', 'かつ・ぐ, にな・う', '扌 (てへん)', 'tangan memikul beban', 8, 6),
(306, '当', 'tepat, mengena, menghadapi', 'トウ', 'あ・たる, あ・てる', '小 (しょう)', 'mengenai sasaran', 6, 2),
(307, '延', 'memperpanjang, menunda', 'エン', 'の・びる, の・べる', '廴 (えんにょう)', 'melangkah jauh ke depan', 8, 6),
(308, '期', 'periode, tenggat waktu', 'キ, ゴ', '', '月 (つき)', 'siklus peredaran bulan', 12, 3),
(309, '観', 'mengamati, pemandangan', 'カン', 'み・る', '見 (みる)', 'mata tajam mengamati burung bangau', 18, 4),
(310, '察', 'menebak, menyelidiki cermat', 'サツ', '', '宀 (うかんむり)', 'atap pengamatan cermat', 14, 4);

