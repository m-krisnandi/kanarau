import type { ChoukaiQuestion } from '@/types/jlptModules';

export const CHOUKAI_QUESTIONS: ChoukaiQuestion[] = [
  // ─── N5 LISTENING QUESTIONS (聴解) ──────────────────────────
  {
    id: 'choukai_n5_1',
    level: 'N5',
    dayNumber: 1,
    type: 'kadai',
    typeLabel: '課題理解 (Aksi yang Harus Dilakukan)',
    title: 'Kadai Rikai N5: Belanja di Supermarket',
    situation: '家で、お母さんと男の子が話しています。男の子はスーパーで何を買ってきますか。',
    questionPrompt: '男の子は、何を買ってきますか。',
    audioScript: `母：たけし、今から近くのスーパーに行って、牛乳を2本買ってきてくれない？
男の子：うん、いいよ。パンも買ってくる？
母：パンはまだあるからいいわ。あ、でも、卵がもう1個もないから、卵も1パックお願いね。
男の子：わかった。牛乳2本と卵1パックね。行ってきます！`,
    translation: `Ibu: Takeshi, bisakah kamu pergi ke supermarket dekat sini sekarang dan membeli 2 botol susu?
Anak Laki-laki: Ya, boleh. Beli roti juga tidak?
Ibu: Roti masih ada jadi tidak usah. Ah, tapi telur sudah habis sama sekali, jadi tolong beli telur 1 pak juga ya.
Anak Laki-laki: Mengerti. Susu 2 botol dan telur 1 pak ya. Berangkat dulu!`,
    choices: [
      '牛乳2本と卵1パック。',
      '牛乳2本とパン。',
      '卵1パックとパン。',
      '牛乳1本と卵2パック。',
    ],
    correctChoiceIndex: 0,
    explanation: 'Ibu meminta membeli 2 botol susu (牛乳を2本). Roti tidak perlu dibeli karena masih ada (パンはまだあるからいいわ). Lalu ibu menambahkan untuk membeli 1 pak telur (卵も1パック). Jadi yang dibeli adalah susu 2 botol dan telur 1 pak (pilihan 1).',
    keyPoints: [
      'Hitungan barang: 2 botol (2本 - nihon), 1 pak (1パック - wan pakku).',
      'Barang yang dibatalkan: roti (pan).',
    ],
  },
  {
    id: 'choukai_n5_2',
    level: 'N5',
    dayNumber: 2,
    type: 'point',
    typeLabel: 'ポイント理解 (Alasan & Informasi Waktu)',
    title: 'Point Rikai N5: Janji Bertemu di Stasiun',
    situation: '電話で、女の人と男の人が明日の約束について話しています。',
    questionPrompt: '二人は、明日何時にどこで会いますか。',
    audioScript: `女：もしもし、田中さん。明日の映画、何時に会いますか。
男：映画は午後2時からだから、1時半はどうですか。
女：1時半ですね。どこで会いましょうか。駅の改札口ですか。
男：明日は雨が降るそうだから、駅の中の本屋さんの前はどうですか。
女：いいですね。じゃあ、明日の午後1時半に駅の本屋さんの前で会いましょう。`,
    translation: `Wanita: Halo, Tanaka-san. Film besok, jam berapa kita bertemu?
Pria: Karena film mulai jam 2 siang, bagaimana kalau jam 1:30?
Wanita: Jam 1:30 ya. Di mana kita bertemu? Di gerbang tiket stasiun?
Pria: Karena besok katanya hujan, bagaimana kalau di depan toko buku di dalam stasiun?
Wanita: Ide bagus. Kalau begitu besok jam 1:30 siang di depan toko buku stasiun ya.`,
    choices: [
      '午後1時半に、駅の本屋さんの前。',
      '午後2時に、駅の改札口。',
      '午後1時半に、駅の改札口。',
      '午後2時に、映画館の前。',
    ],
    correctChoiceIndex: 0,
    explanation: 'Mereka sepakat bertemu pukul 1:30 siang (午後1時半) di depan toko buku stasiun (駅の本屋さんの前) karena besok diperkirakan hujan (pilihan 1).',
    keyPoints: [
      'Waktu: film jam 2, tapi janji temu 1:30 (1時半 - ichiji han).',
      'Tempat: awalnya tiket gate diusulkan, lalu disepakati toko buku stasiun karena hujan.',
    ],
  },

  // ─── N4 LISTENING QUESTIONS (聴解) ──────────────────────────
  {
    id: 'choukai_n4_1',
    level: 'N4',
    dayNumber: 1,
    type: 'kadai',
    typeLabel: '課題理解 (Aksi yang Harus Dilakukan)',
    title: 'Kadai Rikai N4: Pengiriman Paket di Kantor Pos',
    situation: '郵便局で、男の人と局員が話しています。',
    questionPrompt: '男の人は荷物に何を貼らなければなりませんか。',
    audioScript: `局員：いらっしゃいませ。このお荷物ですね。
男：はい、北海道の友達に送りたいです。
局員：わかりました。まずこちらの伝票に、送り先の住所とあなたの名前を書いてください。
男：書きました。切手は必要ですか。
局員：切手はこちらでお貼りしますので大丈夫です。ただ、壊れやすい物が入っていますか。
男：はい、ガラスのコップが入っています。
局員：それでしたら、こちらの「割れ物注意」の赤いシールを荷物の右上に貼ってください。
男：はい、わかりました。`,
    translation: `Petugas Pos: Selamat datang. Mau mengirim paket ini ya.
Pria: Ya, saya mau kirim ke teman di Hokkaido.
Petugas Pos: Baik. Pertama tolong tulis alamat tujuan dan nama Anda di slip pengiriman ini.
Pria: Sudah saya tulis. Apakah perlu perangko?
Petugas Pos: Perangko akan kami tempelkan di sini jadi tidak apa-apa. Tapi, apakah ada barang yang mudah pecah di dalamnya?
Pria: Ya, ada gelas kaca di dalamnya.
Petugas Pos: Kalau begitu, tolong tempelkan stiker merah "Perhatian Barang Pecah Belah" ini di bagian kanan atas paket.
Pria: Baik, saya mengerti.`,
    choices: [
      '「割れ物注意」の赤いシール。',
      '新しい郵便切手。',
      '友達の顔写真。',
      '速達の青いシール。',
    ],
    correctChoiceIndex: 0,
    explanation: 'Petugas pos berkata perangko akan ditempel oleh petugas, tetapi karena ada gelas kaca, pria diminta menempelkan stiker merah tanda barang pecah belah 「割れ物注意」 (pilihan 1).',
    keyPoints: [
      'Bedakan aksi petugas (menempel perangko) vs instruksi kepada pelanggan (menempel stiker merah).',
      'Kosakata: 「割れ物 (waremono - barang pecah belah)」, 「貼る (haru - menempelkan)」.',
    ],
  },
  {
    id: 'choukai_n4_2',
    level: 'N4',
    dayNumber: 2,
    type: 'point',
    typeLabel: 'ポイント理解 (Alasan Utama Pembicara)',
    title: 'Point Rikai N4: Rencana Akhir Pekan',
    situation: '教室で、男の学生と女の学生が今週末の予定について話しています。',
    questionPrompt: '女の学生は、今週の日曜日に何をしますか。',
    audioScript: `男：田中さん、今週の日曜日、みんなで海にバーベキューに行くんだけど、一緒に行かない？
女：えっ、いいな！海、行きたい！……でも、日曜日だよね。実は月曜日の朝に日本語の文法テストがあるんだ。
男：あ、そうだったね。でも土曜日に勉強すれば間に合うんじゃない？
女：土曜日は一日中アルバイトが入っているの。だから日曜日は家でしっかりテスト勉強をしなきゃ。
男：そっか、残念。じゃあまた今度誘うね。`,
    translation: `Pria: Tanaka-san, hari Minggu ini kita mau pergi bakar-bakar (BBQ) ke pantai ramai-ramai, mau ikut tidak?
Wanita: Wah, asyik ya! Mau banget ke pantai! ...Tapi, hari Minggu ya. Sebenarnya Senin pagi ada tes tata bahasa Jepang.
Pria: Ah, betul juga ya. Tapi kalau belajar hari Sabtu bukannya keburu?
Wanita: Hari Sabtu ada kerja paruh waktu (arubaito) seharian penuh. Jadi hari Minggu aku harus belajar giat di rumah untuk tes.
Pria: Begitu ya, sayang sekali. Kalau begitu lain kali kuajak lagi ya.`,
    choices: [
      '友達と海へバーベキューに行く。',
      '一日中アルバイトをする。',
      '家で日本語のテスト勉強をする。',
      '先生の部屋へ質問に行く。',
    ],
    correctChoiceIndex: 2,
    explanation: 'Mahasiswi tersebut harus bekerja paruh waktu hari Sabtu, sehingga hari Minggu ia harus belajar di rumah untuk tes tata bahasa Jepang hari Senin (pilihan 3).',
    keyPoints: [
      'Sabtu: kerja paruh waktu penuh (アルバイト).',
      'Minggu: belajar di rumah untuk tes (テスト勉強).',
    ],
  },

  // ─── N3 LISTENING QUESTIONS (聴解) ──────────────────────────
  {
    id: 'choukai_n3_1',
    level: 'N3',
    dayNumber: 1,
    type: 'kadai',
    typeLabel: '課題理解 (Aksi yang Harus Dilakukan)',
    title: 'Kadai Rikai N3: Pengumpulan Tugas & Berkas Beasiswa',
    situation: '大学の事務室で、留学生の男の人と職員の女の人が話しています。',
    questionPrompt: '男の学生はこのあと、まず何をしなければなりませんか。',
    audioScript: `女：はい、留学生支援課です。
男：すみません、来期の奨学金申請の書類を持ってきたんですが。
女：あ、山田さんですね。ちょっと見せてくださいね。……うん、申請書と推薦書は揃っていますね。ただ、住民票のコピーが最新のものではありませんね。3か月以内に発行されたものが必要です。
男：あ、そうでしたか！うっかりしていました。
女：今日中に市役所へ行って、新しい住民票を取ってきてください。そのあと、この受付番号表と一緒に提出してくださいね。
男：わかりました。市役所へすぐ行ってきます。`,
    translation: `Wanita (Petugas): Ya, bagian pendukung mahasiswa asing.
Pria (Mahasiswa): Permisi, saya membawa berkas pendaftaran beasiswa untuk semester depan.
Wanita: Ah, Yamada-san ya. Boleh saya periksa sebentar. ...Ya, formulir dan surat rekomendasi sudah lengkap. Hanya saja, salinan surat domisili (Juminhyo) ini bukan yang terbaru. Dibutuhkan yang diterbitkan dalam 3 bulan terakhir.
Pria: Ah, begitu ya! Saya tidak teliti.
Wanita: Sebelum hari ini berakhir tolong pergi ke kantor kelurahan (Shiyakusho) dan ambil surat domisili yang baru. Setelah itu, kumpulkan bersama lembar nomor antrean ini ya.
Pria: Baik. Saya akan langsung berangkat ke kantor kelurahan sekarang.`,
    choices: [
      '市役所へ行って新しい住民票を取ってくる。',
      '奨学金申請書をもう一度最初から書き直す。',
      '教授に新しい推薦書の作成を依頼する。',
      '受付番号表だけを先に提出する。',
    ],
    correctChoiceIndex: 0,
    explanation: 'Petugas kantor meminta: 「今日中に市役所へ行って、新しい住民票を取ってきてください」(Tolong pergi ke kantor kelurahan hari ini dan ambil surat domisili baru), dan mahasiswa menjawab: 「市役所へすぐ行ってきます」(Saya langsung pergi sekarang). Jadi aksi pertama adalah ke kantor kelurahan mengambil surat domisili baru (pilihan 1).',
    keyPoints: [
      'Kata kunci penentu aksi awal: 「まず〜しなければならないか」vs respon 「市役所へすぐ行ってきます」.',
      'Persyaratan beasiswa: surat domisili harus dalam 3 bulan terakhir.',
    ],
  },
  {
    id: 'choukai_n3_2',
    level: 'N3',
    dayNumber: 2,
    type: 'point',
    typeLabel: 'ポイント理解 (Alasan Utama Pembicara)',
    title: 'Point Rikai N3: Memilih Tiket Kereta Liburan',
    situation: '旅行会社で、男の客と店員が新幹線の切符について話しています。',
    questionPrompt: '男の人は、どうして最終的にグリーン車ではなく普通車の指定席を選びましたか。',
    audioScript: `店員：いらっしゃいませ。京都までの新幹線ですね。
男：はい。せっかくの家族旅行なので、グリーン車にしようか迷っているんですが、普通車とどれくらい違いますか。
店員：グリーン車は座席が広くて静かですが、お一人様あたり3,000円ほど高くなります。ただ、こちらの普通車の指定席でも、最前列なら足元が十分広くて荷物もゆったり置けますよ。
男：あ、最前列が空いているんですか。それなら家族4人分だと1万円以上浮きますし、足元が広ければ十分満足です。普通車の指定席にしてください。`,
    translation: `Petugas: Selamat datang. Tiket Shinkansen ke Kyoto ya.
Pria (Pelanggan): Ya. Karena ini liburan keluarga, saya bingung apakah mau naik Green Car (kelas eksekutif), perbedaannya seberapa ya?
Petugas: Green Car kursinya lebih luas dan tenang, tapi per orang sekitar 3.000 yen lebih mahal. Namun, untuk kursi reguler reserved (shiteiseki) ini, baris paling depan ruang kakinya cukup luas dan bagasi bisa ditaruh dengan leluasa.
Pria: Wah, baris paling depan masih kosong ya. Kalau begitu untuk 4 orang kami bisa hemat lebih dari 10.000 yen, dan ruang kaki luas sudah cukup puas. Tolong tiket kursi reserved biasa saja.`,
    choices: [
      'グリーン車が満席で予約できなかったから。',
      '普通車の最前列なら足元が広く、料金も節約できるから。',
      '旅行の出発時間が予定より早まったから。',
      '家族が静かな車両を嫌がったから。',
    ],
    correctChoiceIndex: 1,
    explanation: 'Pria tersebut memilih kursi biasa reserved baris depan karena ruang kakinya cukup luas dan menghemat biaya lebih dari 10.000 yen untuk 4 orang keluarga (pilihan 2).',
    keyPoints: [
      'Alasan keputusan: kombinasi kenyamanan (ruang kaki luas di baris depan) dan penghematan biaya keluarga.',
      'Opsi Green car dibatalkan secara sadar karena selisih harga.',
    ],
  },

  // ─── N2 LISTENING QUESTIONS (聴解) ──────────────────────────
  {
    id: 'choukai_1',
    level: 'N2',
    dayNumber: 1,
    type: 'kadai',
    typeLabel: '課題理解 (Aksi yang Harus Dilakukan)',
    title: 'Kadai Rikai 1: Persiapan Seminar Bisnis',
    situation: '会社で、女性の上司と男性の部下が来週のセミナーの準備について話しています。',
    questionPrompt: '男の人はこのあと、まず何をしなければなりませんか。',
    audioScript: `女：田中くん、来週の新製品セミナーの準備、進んでる？
男：はい、会場の手配と参加者への案内メールは完了しました。いま、配布資料の印刷をしているところです。
女：あ、資料なんだけど、さっき開発部から最新データの差し替え依頼が届いたのよ。だから印刷はいったん止めて。
男：わかりました。すぐ印刷をストップします。
女：ありがとう。それでね、最新のデータを差し替えたら、私が見直すから。田中くんは先に、プロジェクターとマイクの動作確認を頼める？
男：承知いたしました。では印刷機を止めた後、機材の確認に行ってまいります。`,
    translation: `Wanita (Atasan): Tanaka-kun, bagaimana progres persiapan seminar produk baru minggu depan?
Pria (Bawahan): Baik, reservasi ruangan dan email undangan peserta sudah selesai. Sekarang saya sedang mencetak dokumen materi yang akan dibagikan.
Wanita: Ah, soal materi itu, barusan ada permintaan dari divisi riset untuk mengganti data ke angka terbaru. Jadi tolong hentikan dulu cetakannya.
Pria: Baik. Segera saya hentikan pencetakannya.
Wanita: Terima kasih. Nanti setelah data terbaru diganti, saya akan memeriksanya lagi. Tanaka-kun tolong periksa dulu apakah proyektor dan mik berfungsi dengan baik?
Pria: Dimengerti. Kalau begitu setelah mematikan mesin cetak, saya akan segera pergi mengecek peralatan.`,
    choices: [
      '配布資料の印刷をそのまま最後まで続ける。',
      '配布資料の印刷機をすぐに停止させる。',
      '開発部へ最新データを受け取りに行く。',
      'プロジェクターとマイクの確認を一番最初に行う。',
    ],
    correctChoiceIndex: 1,
    explanation: 'Atasan berkata: 「印刷はいったん止めて」(Hentikan cetak dokumen dulu), dan bawahan merespons: 「すぐ印刷をストップします」lalu「印刷機を止めた後、機材の確認に行ってまいります」. Jadi tindakan PERTAMA yang harus dilakukan adalah mematikan mesin cetak (pilihan 2).',
    keyPoints: [
      'Perhatikan kata kunci urutan waktu: 「まず (pertama-tama)」vs 「〜た後で (setelah itu)」',
      'Atasan meminta: 「印刷はいったん止めて」-> Aksi mendesak utama',
    ],
  },
  {
    id: 'choukai_2',
    level: 'N2',
    dayNumber: 2,
    type: 'point',
    typeLabel: 'ポイント理解 (Alasan Utama Pembicara)',
    title: 'Point Rikai 2: Memilih Laptop Kerja',
    situation: '家電量販店で、女性の客と店員がノートパソコンについて話しています。',
    questionPrompt: '女の人は、どうして最終的にこの白いパソコンを選びましたか。',
    audioScript: `女：すみません、仕事用のノートパソコンを探しているんですが。
店員：いらっしゃいませ。こちらの黒いモデルは最新のCPUを搭載していて、動画編集もサクサク動きますよ。
女：うーん、性能は魅力的なんですが、毎日営業で持ち歩くので、重いのはちょっと困るんです。
店員：それでしたら、こちらの白いモデルはいかがでしょうか。画面は少し小さめですが、重さがわずか800グラムで、バッテリーも15時間持ちます。
女：あ、すごく軽いですね！これなら肩への負担も少なそうです。デザインもすっきりしていて気に入りました。これにします。`,
    translation: `Wanita (Pelanggan): Permisi, saya sedang mencari laptop untuk keperluan kerja.
Pegawai Toko: Selamat datang. Model warna hitam ini dilengkapi CPU terbaru dan sangat lancar untuk editing video.
Wanita: Hmm, performanya memang menarik, tapi karena saya harus membawanya setiap hari untuk urusan penjualan (sales), saya keberatan jika terlalu berat.
Pegawai Toko: Kalau begitu, bagaimana dengan model warna putih ini? Layarnya memang sedikit lebih kecil, tapi bobotnya hanya 800 gram dan baterainya tahan 15 jam.
Wanita: Wah, ringan sekali! Kalau begini beban pundak saya tidak akan berat. Desainnya juga bersih dan saya suka. Saya ambil yang ini.`,
    choices: [
      '動画編集ができるほどCPUの処理性能が非常に高いから。',
      '画面サイズがとても大きくて文字が見やすいから。',
      '800グラムと非常に軽量で、毎日の持ち運びに負担が少ないから。',
      '値段が他のモデルに比べて圧倒的に安かったから。',
    ],
    correctChoiceIndex: 2,
    explanation: 'Pelanggan wanita menekankan: 「毎日営業で持ち歩くので、重いのは困る」(karena dibawa sales harian, keberatan jika berat) dan begitu ditawari laptop 800g dia berkata: 「あ、すごく軽いですね！これにします」. Alasan utamanya adalah bobot yang sangat ringan untuk mobilitas kerja.',
    keyPoints: [
      'Jebakan CPU tinggi adalah milik laptop hitam, bukan laptop putih yang akhirnya dibeli.',
      'Fokus pertanyaan adalah "alasan memilih laptop putih".',
    ],
  },
  {
    id: 'choukai_3',
    level: 'N2',
    dayNumber: 3,
    type: 'sokuji',
    typeLabel: '即時応答 (Respon Cepat)',
    title: 'Sokuji Outou 3: Keigo Sopan Menawarkan Diri',
    situation: '会社で、部下が上司に対して仕事の担当を申し出ています。',
    questionPrompt: `次の発言に対して、最も適切な返答を1〜3の中から選んでください。\n「部長、先ほどの会議の案件、私にお引き受けさせていただけないでしょうか。」`,
    audioScript: `男：部長、先ほどの会議の案件、私にお引き受けさせていただけないでしょうか。
1：ええ、喜んで伺います。
2：そうか、じゃあ君に頼んでもいいかな。
3：いえ、遠慮せずに引き受けてください。`,
    translation: `Pria (Bawahan): "Kepala Departemen, perihal proyek di rapat tadi, apakah Bapak berkenan mengizinkan saya untuk menanganinya?"
Pilihan 1: "Ya, dengan senang hati saya akan datang berkunjung." (Salah konteks)
Pilihan 2: "Begitu ya, kalau begitu bolehkah saya percayakan padamu?" (Benar)
Pilihan 3: "Tidak, jangan sungkan dan terimalah." (Salah tata bahasa keigo)`,
    choices: [
      '1. 「ええ、喜んで伺います。」',
      '2. 「そうか、じゃあ君に頼んでもいいかな。」',
      '3. 「いえ、遠慮せずに引き受けてください。」',
    ],
    correctChoiceIndex: 1,
    explanation: 'Pola 「〜させていただけないでしょうか」adalah bentuk sopan tingkat tinggi (kenjougo) untuk meminta izin melakukan sesuatu (menawarkan diri). Balasan atasan yang alami menerima tawaran bawahan adalah 「そうか、じゃあ君に頼んでもいいかな」(pilihan 2). Pilihan 1 memakai 「伺います」(salah situasi), pilihan 3 tidak masuk akal karena bawahan yang meminta.',
    keyPoints: [
      '「お〜させていただけないでしょうか」= Meminta izin untuk mengerjakan',
      'Respon yang tepat dari atasan: memberikan izin / tugas kepada bawahan',
    ],
  },
  {
    id: 'choukai_4',
    level: 'N2',
    dayNumber: 4,
    type: 'point',
    typeLabel: 'ポイント理解 (Tujuan Utama & Poin Penting)',
    title: 'Point Rikai 4: Kebiasaan Bekerja Jarak Jauh (Telework)',
    situation: 'テレビ番組で、専門家が在宅勤務（テレワーク）における集中力の維持について話しています。',
    questionPrompt: '専門家は、在宅勤務で集中力を保つために、何が一番大切だと言っていますか。',
    audioScript: `男：在宅勤務が定着するにつれ、集中が途切れるという悩みをよく耳にします。オフィスと違って周囲の目がないため、ついつい気が散ってしまうんですね。解決策として、高価なオフィスチェアを揃えたり、部屋の模様替えをする人もいますが、実は最も効果的なのは「時間で仕事と私生活を明確に区切ること」なのです。例えば、始業前には必ず着替える、昼休みはパソコンを完全に閉じる、そして終業時刻が来たら作業環境から離れる。こうした小さな時間的メリハリこそが、脳の集中スイッチを切り替える決定打となります。`,
    translation: `Pria (Pakar): Seiring berjalannya kerja jarak jauh (WFH), kita sering mendengar keluhan susahnya menjaga fokus. Karena tidak ada pandangan orang lain seperti di kantor, pikiran mudah buyar. Sebagai solusi, ada yang membeli kursi kantor mahal atau merombak tata ruang kamar, namun yang sebenarnya paling efektif adalah "membagi batasan waktu secara tegas antara kerja dan kehidupan pribadi". Contohnya, selalu berganti pakaian sebelum mulai kerja, menutup total laptop saat jam makan siang, dan segera menjauhi area kerja begitu jam selesai tiba. Ritme waktu yang jelas seperti inilah yang menjadi kunci menyalakan sakelar fokus otak.`,
    choices: [
      '高性能なオフィスチェアやデスクなどの家具を揃えること。',
      '部屋のインテリアや模様替えを定期的に行うこと。',
      '時間によって仕事と私生活のメリハリを明確につけること。',
      '同僚と常にオンライン通話を繋ぎながら作業すること。',
    ],
    correctChoiceIndex: 2,
    explanation: 'Pakar mengatakan: 「実は最も効果的なのは『時間で仕事と私生活を明確に区切ること』なのです」(Sebenarnya yang paling efektif adalah membagi waktu kerja dan privasi secara jelas). Ini sinonim dengan 「メリハリを明確につける」(pilihan 3).',
    keyPoints: [
      'Pola pembicara: menyebut opsi lain (furnitur, tata ruang) lalu menegaskan 「実は最も効果的なのは〜」.',
      'Kata kunci: 「時間的メリハリ (ritme ketegasan waktu)」.',
    ],
  },
  {
    id: 'choukai_5',
    level: 'N2',
    dayNumber: 5,
    type: 'sokuji',
    typeLabel: '即時応答 (Respon Cepat)',
    title: 'Sokuji Outou 5: Tanggapan terhadap Keterlambatan',
    situation: '職場で、同僚から電車遅延の連絡を受けたときの返答です。',
    questionPrompt: `次の発言に対して、最も適切な返答を1〜3の中から選んでください。\n「すみません、人身事故で電車が止まってしまって、始業に間に合いそうにないんです。」`,
    audioScript: `女：すみません、人身事故で電車が止まってしまって、始業に間に合いそうにないんです。
1：そうですか。慌てなくていいですから、気をつけて来てください。
2：じゃあ、これからは事故が起きないように気をつけてね。
3：間に合って本当によかったですね。安心しました。`,
    translation: `Wanita (Rekan Kerja): "Maaf, kereta berhenti karena ada kecelakaan penumpang, sepertinya saya tidak sempat sampai sebelum jam masuk kerja dimulai."
Pilihan 1: "Begitu ya. Tidak usah panik terburu-buru, hati-hati di jalan ya." (Benar)
Pilihan 2: "Kalau begitu, mulai sekarang hati-hati agar kecelakaan tidak terjadi lagi ya." (Salah konteks tidak masuk akal)
Pilihan 3: "Baguslah kalau sempat sampai. Saya lega mendengarnya." (Salah pemahaman)`,
    choices: [
      '1. 「そうですか。慌てなくていいですから、気をつけて来てください。」',
      '2. 「じゃあ、これからは事故が起きないように気をつけてね。」',
      '3. 「間に合って本当によかったですね。安心しました。」',
    ],
    correctChoiceIndex: 0,
    explanation: 'Ketika seseorang mengabarkan keterlambatan karena faktor di luar kendali (kereta anjlok/kecelakaan), etika Jepang adalah menenangkan dengan 「慌てなくていいですから、気をつけて来てください」(pilihan 1). Pilihan 2 menyalahkan rekan atas kecelakaan kereta, dan pilihan 3 bertolak belakang karena pembicara mengatakan tidak sempat (間に合いそうにない).',
    keyPoints: [
      '「間に合いそうにない」= sepertinya tidak keburu / terlambat.',
      'Respon empati: 「慌てなくていい (tidak usah tergesa-gesa)」.',
    ],
  },

  // ═════════════════════════════════════════════════════════════
  // N1 LISTENING QUESTIONS (聴解)
  // ═════════════════════════════════════════════════════════════
  {
    id: 'choukai_n1_1',
    level: 'N1',
    dayNumber: 1,
    type: 'kadai',
    typeLabel: '課題理解 N1 (Keputusan & Aksi Lanjutan)',
    title: 'Kadai Rikai N1: Strategi Rebranding Produk',
    situation: '企画会議で、部長と担当の女性社員が新商品のプロモーション戦略について議論しています。',
    questionPrompt: '女の人はこの後、まずどの業務に着手しなければなりませんか。',
    audioScript: `男：先日の役員会で、秋の新作スイーツの販売方針が決まったよ。ターゲット層を若年層から働く女性全般に広げることになった。
女：承知いたしました。そうなりますと、現在進めているパッケージデザインの刷新と、Web広告のキャッチコピーの再検討が必要ですね。
男：そうだね。ただ、パッケージの最終決定には予算の再配分が確定しないと進められないんだ。経理部との調整は僕が引き受けるから、君はまず、外部のデザイナーへ納期の延期を連絡してスケジュールを確保してくれないか。
女：わかりました。すぐデザイナーに連絡を入れます。広告代理店との打ち合わせ資料の修正はそのあとでよろしいでしょうか。
男：うん、それで頼むよ。`,
    translation: `Pria (Kepala Departemen): Pada rapat dewan direksi kemarin, arah penjualan produk hidangan penutup baru musim gugur telah diputuskan. Target pasar akan diperluas dari kalangan muda menjadi seluruh wanita pekerja.
Wanita: Dimengerti. Jika demikian, maka pembaruan desain kemasan yang sedang berjalan serta peninjauan ulang slogan iklan web perlu dilakukan.
Pria: Betul. Hanya saja, keputusan akhir kemasan tidak dapat berjalan sebelum alokasi ulang anggaran dipastikan. Penyesuaian dengan divisi akunting biar saya yang tangani, jadi kamu tolong hubungi desainer eksternal terlebih dahulu untuk mengabarkan penundaan tenggat waktu agar jadwal aman.
Wanita: Baik. Segera saya hubungi pihak desainer. Untuk revisi dokumen rapat dengan agensi periklanan apakah boleh dikerjakan setelah itu?
Pria: Ya, tolong begitu ya.`,
    choices: [
      '経理部へ出向いて予算の再配分について交渉する。',
      '外部のデザイナーへ連絡し、納期の変更と日程の調整を行う。',
      'パッケージデザインの修正作業を直ちに開始する。',
      '広告代理店との打ち合わせ資料をその場ですぐ修正する。',
    ],
    correctChoiceIndex: 1,
    explanation: 'Kepala departemen menegaskan: 「経理部との調整は僕が引き受けるから、君はまず、外部のデザイナーへ納期の延期を連絡してスケジュールを確保してくれないか」(Penyesuaian akunting biar saya yang tangani, kamu pertama-tama hubungi desainer eksternal untuk penundaan tenggat waktu). Tindakan PERTAMA adalah pilihan 2.',
    keyPoints: [
      'Pemisahan tugas atasan vs bawahan: atasan mengurus akunting, bawahan menghubungi desainer eksternal.',
      'Kata kunci penentu: 「君はまず (kamu pertama-tama)」.',
    ],
  },
  {
    id: 'choukai_n1_2',
    level: 'N1',
    dayNumber: 2,
    type: 'sokuji',
    typeLabel: '即時応答 N1 (Respon Spontan Tingkat Mahir)',
    title: 'Sokuji Outou N1: Respon Keigo Tingkat Lanjut',
    situation: '取引先との会食の席で、相手方の役員から挨拶を受けました。',
    questionPrompt: `次の発言に対して、最も適切な返答を1〜3の中から選んでください。\n「本日はご多忙の折、私どものためにお運びいただき、恐縮に存じます。」`,
    audioScript: `男：本日はご多忙の折、私どものためにお運びいただき、恐縮に存じます。
1：とんでもございません。こちらこそお招きいただき、心より感謝申し上げます。
2：ええ、お忙しいところ恐縮ですが、どうぞお入りください。
3：私どもとしても、お運びいただくのは当然のことでございます。`,
    translation: `Pria (Mitra Bisnis): "Di tengah kesibukan Anda hari ini, kami sangat berterima kasih dan merasa terhormat atas kesediaan Bapak/Ibu untuk berkenan hadir menemui kami."
Pilihan 1: "Sama sekali tidak merepotkan. Justru kamilah yang mengucapkan terima kasih setulus hati atas undangannya." (Benar - etika bisnis Jepang sempurna)
Pilihan 2: "Ya, di tengah kesibukan mohon maaf, silakan masuk." (Salah - membalikkan posisi tuan rumah/tamu)
Pilihan 3: "Bagi kami pun sudah sewajarnya Anda hadir." (Salah - sangat kasar dan arogan)`,
    choices: [
      '1. 「とんでもございません。こちらこそお招きいただき、心より感謝申し上げます。」',
      '2. 「ええ、お忙しいところ恐縮ですが、どうぞお入りください。」',
      '3. 「私どもとしても、お運びいただくのは当然のことでございます。」',
    ],
    correctChoiceIndex: 0,
    explanation: 'Ungkapan 「お運びいただき恐縮に存じます」adalah ucapan terima kasih tuan rumah atas kehadiran tamu kehormatan. Balasan yang santun dan tepat dari tamu adalah merendahkan diri dengan 「とんでもございません。こちらこそお招きいただき感謝申し上げます」(Pilihan 1).',
    keyPoints: [
      '「お運びいただく」= datang berkunjung (sonkeigo untuk tamu).',
      'Jawaban standar tamu undangan: menyangkal kerendahan hati tuan rumah dengan 「とんでもございません」lalu mengucapkan terima kasih atas undangannya.',
    ],
  },
  {
    id: 'choukai_n1_3',
    level: 'N1',
    dayNumber: 3,
    type: 'point',
    typeLabel: 'ポイント理解 N1 (Analisis Keputusan Organisasi)',
    title: 'Point Rikai N1: Evaluasi Restrukturisasi Perusahaan',
    situation: '経済ニュース番組で、アナリストがある大手企業の組織改編について解説しています。',
    questionPrompt: 'アナリストによると、今回の組織改編で最も大きな狙いとされているのは何ですか。',
    audioScript: `男：今回発表されたA社の組織改編は、単なるコスト削減にとどまらない深い戦略が込められています。これまで縦割り構造だった各開発部門をフラットに統合し、意思決定のスピードを劇的に高めることが狙いです。市場の変化が著しい現代において、現場の意見が経営陣へ届くまでのタイムラグは致命傷になりかねません。部門間の壁を取り払うことで、迅速なイノベーション創出を狙っていると考えられます。`,
    translation: `Pria (Analis): Restrukturisasi organisasi Perusahaan A yang diumumkan kali ini mengandung strategi mendalam yang tidak sekadar pemotongan biaya. Tujuannya adalah mengintegrasikan departemen riset yang sebelumnya kaku terpisah menjadi struktur datar, guna meningkatkan kecepatan pengambilan keputusan secara dramatis. Di era modern dengan perubahan pasar yang pesat, kelambatan sampainya pendapat lapangan ke jajaran direksi bisa berakibat fatal. Dengan meruntuhkan dinding antardepartemen, mereka menargetkan lahirnya inovasi secara cepat.`,
    choices: [
      '人件費とオフィス維持費を大幅に圧縮すること。',
      '各開発部門の権限をさらに細分化し管理を強化すること。',
      '縦割り構造を解消し、迅速な意思決定とイノベーションを可能にすること。',
      '現場の意見を介さず、経営陣のみで全ての事業方針を決定すること。',
    ],
    correctChoiceIndex: 2,
    explanation: 'Analis menyatakan: 「縦割り構造だった各開発部門をフラットに統合し、意思決定のスピードを劇的に高めることが狙い」「部門間の壁を取り払うことで、迅速なイノベーション創出を狙っている」(meruntuhkan sekat struktur kaku demi percepatan keputusan dan inovasi). Hal ini tepat sesuai pilihan 3.',
    keyPoints: [
      'Pola pembicara: membantah anggapan umum 「単なるコスト削減にとどまらない」.',
      'Kata kunci: 「意思決定のスピード」「縦割り構造の解消」「イノベーション創出」.',
    ],
  },
  // ─── N2 Extra Questions ──────────────────────────────────
  {
    id: 'choukai_n2_6',
    level: 'N2',
    dayNumber: 6,
    type: 'kadai',
    typeLabel: '課題理解 (Instruksi Rapat Kerja)',
    title: 'Kadai Rikai N2: Prioritas Tugas Sebelum Peluncuran Produk',
    situation: 'オフィスで、課長と女性社員が新商品の発売に向けたスケジュールについて話しています。女性社員はまず何をしなければなりませんか。',
    questionPrompt: '女性社員は、まず何をしなければなりませんか。',
    audioScript: `課長：来月発売の新商品だけど、PR資料の最終チェックはどこまで進んでいる？
女性：はい、印刷会社へのデータ入稿は完了していますが、Webサイトに掲載する商品紹介動画のテロップに一部誤字が見つかりました。
課長：そうか。動画の公開は来週月曜日だったね。修正はすぐにできそう？
女性：制作会社に連絡すれば、今日の夕方までには差し替え可能だと思います。ただ、プレスリリースの文面も広報部から確認の差し戻しが来ておりまして…。
課長：プレスリリースは僕の方で文面を調整して広報部と連絡を取っておくよ。動画の修正が遅れるとWeb公開全体に影響が出るから、君は直ちに制作会社へ修正箇所の差し替えを指示してくれ。
女性：承知いたしました。すぐに連絡します。`,
    translation: `Kepala Seksi: Mengenai produk baru yang akan rilis bulan depan, sejauh mana pemeriksaan akhir materi PR?
Karyawan Wanita: Ya, penyerahan data ke percetakan sudah selesai, tetapi ada beberapa salah ketik pada teks subtitle video pengenalan produk di situs web.
Kepala Seksi: Begitu ya. Penayangan video dijadwalkan Senin depan kan. Apakah revisinya bisa segera diselesaikan?
Karyawan Wanita: Kalau kita hubungi agensi produksi, saya rasa sore ini penggantian sudah bisa selesai. Hanya saja, draf siaran pers juga dikembalikan oleh departemen PR untuk dicek ulang...
Kepala Seksi: Siaran pers biar saya yang sesuaikan drafnya dan koordinasikan dengan departemen PR. Kalau revisi video terlambat akan berdampak pada jadwal rilis web, jadi kamu segera instruksikan penggantian bagian revisi ke agensi produksi sekarang.
Karyawan Wanita: Baik, saya mengerti. Saya akan segera menghubungi mereka.`,
    choices: [
      '印刷会社へ連絡して入稿データの再確認を行う。',
      '制作会社へ直ちに連絡し、動画テロップの修正を指示する。',
      '広報部へ行き、プレスリリースの文面調整を行う。',
      '来月発売の新商品の販売スケジュール全体を見直す。',
    ],
    correctChoiceIndex: 1,
    explanation: 'Kepala seksi menegaskan bahwa penyesuaian siaran pers akan ditangani sendiri olehnya, sedangkan karyawan wanita diminta segera menghubungi agensi produksi untuk penggantian teks video (pilihan 2).',
    keyPoints: [
      'Pemisahan tugas atasan vs bawahan: atasan mengurus siaran pers, bawahan menghubungi agensi video.',
      'Kata penentu waktu: 「直ちに制作会社へ修正箇所の差し替えを指示してくれ (segera instruksikan penggantian ke agensi produksi)」.',
    ],
  },
  {
    id: 'choukai_n2_7',
    level: 'N2',
    dayNumber: 7,
    type: 'point',
    typeLabel: 'ポイント理解 (Analisis Strategi Bisnis)',
    title: 'Point Rikai N2: Keberhasilan Toko Cerdas Tanpa Kasir',
    situation: 'ラジオで、経営コンサルタントが無人決済店舗の普及について話しています。店舗が消費者に最も支持されている要因は何ですか。',
    questionPrompt: '無人決済店舗が消費者に最も支持されている要因は何ですか。',
    audioScript: `男性：最近、駅ナカなどを中心に無人決済店舗が急速に増えています。当初は人件費削減という店舗側のメリットばかりが注目されていましたが、実際に利用客へのアンケートを行うと、全く別の理由が浮かび上がってきました。
もちろん商品の珍しさやハイテク技術への好奇心もありますが、リピーターが最も評価しているのは、朝の通勤ラッシュ時でも一切レジに並ぶことなく、商品を手に取ってそのまま店を出られるという圧倒的な時間短縮です。セルフレジでのバーコード読み取りすら不要なスムーズな体験が、忙しい現代人のライフスタイルに合致したと言えます。`,
    translation: `Pria (Konsultan Manajemen): Belakangan ini toko pembayaran otomatis tanpa kasir bertambah pesat terutama di stasiun. Awalnya perhatian hanya tertuju pada keuntungan pihak toko dalam memangkas biaya tenaga kerja, tetapi saat survei riil dilakukan terhadap para pengunjung, terungkap alasan yang sama sekali berbeda.
Tentu ada rasa penasaran pada keunikan produk atau teknologi tinggi, tetapi faktor yang paling dinilai tinggi oleh para pelanggan tetap adalah pemangkasan waktu luar biasa—di mana saat jam sibuk pagi hari sekalipun, mereka sama sekali tidak perlu antre di kasir dan bisa langsung keluar setelah mengambil barang. Pengalaman mulus tanpa perlu memindai kode batang di kasir mandiri terbukti sangat cocok dengan gaya hidup masyarakat modern yang sibuk.`,
    choices: [
      '店舗側の大幅な人件費削減によって商品の販売価格が安くなったこと。',
      'レジ待ちの列に並ぶ必要がなく、圧倒的な時間短縮ができること。',
      '他店では手に入らない珍しいハイテク家電が販売されていること。',
      '店員と会話を楽しみながらゆっくり買い物ができること。',
    ],
    correctChoiceIndex: 1,
    explanation: 'Konsultan menyatakan bahwa faktor yang paling dinilai tinggi oleh pelanggan tetap adalah pemangkasan waktu di mana pembeli tidak perlu antre sama sekali di kasir saat jam sibuk (pilihan 2).',
    keyPoints: [
      'Membedakan asumsi awal (pemotongan biaya toko) dengan kenyataan survei konsumen.',
      'Kata penentu: 「リピーターが最も評価しているのは…圧倒的な時間短縮です (yang paling dinilai pelanggan setia adalah pemangkasan waktu luar biasa)」.',
    ],
  },

  // ─── N1 Extra Questions ──────────────────────────────────
  {
    id: 'choukai_n1_4',
    level: 'N1',
    dayNumber: 4,
    type: 'sokuji',
    typeLabel: '即時応答 N1 (Respon Komplain Formal)',
    title: 'Sokuji Outou N1: Menghadapi Komplain Keterlambatan Pasokan',
    situation: '取引先の部長から、納品スケジュールの遅延について強い口調で苦情を受けました。',
    questionPrompt: `次の発言に対して、最も適切な返答を1〜3の中から選んでください。\n「お宅の度重なる納期遅れで、こちらの生産ラインが止まりかねない事態になっているんだが、どう責任を取るおつもりですか。」`,
    audioScript: `男：お宅の度重なる納期遅れで、こちらの生産ラインが止まりかねない事態になっているんだが、どう責任を取るおつもりですか。
1：誠に申し訳ございません。直ちに原因を究明し、本日中に代替品の緊急手配と今後の改善策をご報告にあがります。
2：こちらの生産ラインが止まってしまうのは、誠に遺憾に存じます。
3：納期が遅れたのは弊社の責任ばかりとは言えず、配送業者の事情もございます。`,
    translation: `Pria (Pimpinan Mitra): "Keterlambatan pengiriman dari pihak Anda yang berulang kali hampir membuat lini produksi kami terhenti total. Bagaimana Anda berniat mempertanggungjawabkannya?!"
Pilihan 1: "Kami memohon maaf yang sebesar-besarnya. Kami akan segera menyelidiki penyebabnya, dan hari ini juga kami akan menghadap untuk melaporkan pengadaan darurat pasokan pengganti serta langkah perbaikan ke depan." (Benar - penanganan komplain krisis bisnis Jepang sempurna)
Pilihan 2: "Sangat disayangkan jika lini produksi Anda terhenti." (Salah - seperti mengomentari masalah orang lain)
Pilihan 3: "Keterlambatan ini bukan semata kesalahan kami, ada kendala pihak logistik juga." (Salah fatal - melempar tanggung jawab)`,
    choices: [
      '1. 「誠に申し訳ございません。直ちに原因を究明し、本日中に代替品の緊急手配と今後の改善策をご報告にあがります。」',
      '2. 「こちらの生産ラインが止まってしまうのは、誠に遺憾に存じます。」',
      '3. 「納期が遅れたのは弊社の責任ばかりとは言えず、配送業者の事情もございます。」',
    ],
    correctChoiceIndex: 0,
    explanation: 'Dalam etika bisnis Jepang menghadapi komplain darurat atas keterlambatan pengiriman yang mengancam produksi klien, langkah pertama adalah meminta maaf secara tulus tanpa berdalih, lalu mengajukan solusi konkret segera (mengatur pasokan pengganti darurat dan menghadap hari itu juga). Pilihan 1 tepat.',
    keyPoints: [
      'Tata krama menghadapi krisis: Apologize sincere -> Immediate remedial action -> Report in person.',
      'Ekspresi Keigo: 「ご報告にあがります (saya akan menghadap untuk melapor)」.',
    ],
  },
  {
    id: 'choukai_n1_5',
    level: 'N1',
    dayNumber: 5,
    type: 'point',
    typeLabel: 'ポイント理解 N1 (Rekonstruksi Arsitektur Tahan Gempa)',
    title: 'Point Rikai N1: Konsep Fleksibilitas dalam Struktur Tahan Gempa',
    situation: '建築学会のシンポジウムで、著名な構造設計者が最新の耐震建築思想について講演しています。設計者が強調する「真の耐震性」とは何ですか。',
    questionPrompt: '設計者が強調する「真の耐震性」とはどのようなものですか。',
    audioScript: `男性：従来の耐震設計思想は、巨大な地震エネルギーに対して構造体をどこまでも頑丈に固め、力でねじ伏せようとする「剛」の思想が主流でした。しかし、想定を超える規模の直下型地震に直面した際、硬すぎる構造体は限界を超えた瞬間に脆く破断してしまう危険性を孕んでいます。
そこで現代の先駆的な免震・制振技術が目指しているのは、五重塔の心柱に見られるような、揺れを受け流しエネルギーを分散吸収する「柔」の思想です。建物を強固に固定するのではなく、むしろしなやかに変形を許容することで致命的な倒壊を防ぐ。固執を捨てて自然の巨大な力と共生することこそが、私たちが到達した真の耐震思想なのです。`,
    translation: `Pria (Perancang Struktur): Pemikiran desain tahan gempa konvensional arus utama adalah konsep 'Kekakuan' (Rigiditas), yang berupaya mengeraskan struktur sekuat mungkin demi menaklukkan energi gempa raksasa dengan kekerasan material. Akan tetapi, saat berhadapan dengan gempa darat dangkal yang skalanya melampaui estimasi, struktur yang terlalu kaku menyimpan bahaya retak getas seketika saat melampaui ambang batasnya.
Oleh karena itu, yang dibidik oleh teknologi isolasi dan peredam gempa mutakhir modern adalah konsep 'Kelenturan'—seperti halnya pilar tengah (Shinbashira) pada Pagoda Lima Tingkat tradisional yang mengalirkan goyangan serta menyerap dan menyebarkan energi gempa. Bukannya mengunci bangunan secara kaku, melainkan mengizinkan deformasi lentur demi mencegah keruntuhan fatal. Menanggalkan kekakuan dan berdampingan secara fleksibel dengan kekuatan dahsyat alam adalah hakikat pemikiran tahan gempa sejati yang berhasil kita capai.`,
    choices: [
      '想定外の地震にも耐えうるよう、コンクリートと鉄骨を極限まで硬く固定すること。',
      '建物の変形を一切許さず、すべての地震エネルギーを力で跳ね返すこと。',
      '硬さによる対抗を避け、揺れをしなやかに受け流してエネルギーを分散吸収させること。',
      '伝統的な木造建築を完全に取りやめ、最新の免震ゴムのみに依存すること。',
    ],
    correctChoiceIndex: 2,
    explanation: 'Perancang struktur menekankan bahwa pemikiran tahan gempa sejati bukan mengeraskan struktur secara kaku, melainkan mengalirkan dan menyerap energi gempa secara lentur (柔の思想) seperti pilar Pagoda tradisional (pilihan 3).',
    keyPoints: [
      'Pergeseran paradigma: dari rigiditas kaku (剛) menuju kelenturan menyerap energi (柔).',
      'Analogi pagoda tradisional: 「揺れを受け流しエネルギーを分散吸収する (mengalirkan goyangan dan menyerap energi)」.',
    ],
  },

];
