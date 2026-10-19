import type { DokkaiPassage } from '@/types/jlptModules';

export const DOKKAI_PASSAGES: DokkaiPassage[] = [
  // ═════════════════════════════════════════════════════════════════
  // JLPT N2 PASSAGES (読解)
  // ═════════════════════════════════════════════════════════════════

  // ─── N2 Tanbun 1: IT / Pemberitahuan Kantor ─────────────────────
  {
    id: 'dokkai_n2_1',
    level: 'N2',
    dayNumber: 1,
    category: 'tanbun',
    categoryLabel: '短文 (Teks Pendek ~200 huruf)',
    title: '社内システムの定期メンテナンスに伴う利用停止について',
    sourceType: 'Pemberitahuan Internal Kantor',
    estimatedMinutes: 3,
    passageText: `社員各位

来週の土曜日（10月24日）の22時から翌日日曜日の午前6時にかけて、全社基幹サーバーのセキュリティ強化および定期メンテナンスを実施いたします。

つきましては、当該時間帯は社内ネットワークへのアクセスおよび外部からのリモートワーク接続が一切遮断されます。作業時間中に作成中のデータを保存していない場合、データが消失する恐れがありますので、金曜日の退勤時までに必ずすべての業務ファイルを保存し、PCの電源をお切りください。

なお、作業が予定より早く終了した場合でも、確認作業が完了する午前6時まではログインを行わないようお願い申し上げます。ご不便をおかけしますが、ご協力のほどよろしくお願いいたします。

総務部 IT管理課`,
    translation: `Kepada Seluruh Karyawan:

Pada hari Sabtu minggu depan (24 Oktober) mulai pukul 22:00 hingga Minggu keesokan harinya pukul 06:00 pagi, akan dilakukan penguatan keamanan server inti dan pemeliharaan berkala untuk seluruh perusahaan.

Sehubungan dengan hal tersebut, selama rentang waktu tersebut, akses ke jaringan kantor dan koneksi kerja jarak jauh (remote) dari luar akan terputus sepenuhnya. Jika data yang sedang dikerjakan tidak disimpan saat waktu pemeliharaan berlangsung, terdapat risiko hilangnya data. Oleh karena itu, pastikan untuk menyimpan seluruh file pekerjaan dan mematikan daya PC sebelum pulang pada hari Jumat.

Selain itu, meskipun pekerjaan selesai lebih cepat dari jadwal, dimohon untuk tidak melakukan login hingga proses verifikasi selesai pukul 06:00 pagi. Mohon maaf atas ketidaknyamanan ini dan terima kasih atas kerja samanya.

Departemen Umum - Divisi Manajemen IT`,
    vocabularyHelp: [
      { word: '基幹', reading: 'きかん', meaning: 'inti / pokok (infrastruktur utama)' },
      { word: '遮断', reading: 'しゃだん', meaning: 'pemutusan / blokir total' },
      { word: '消失', reading: 'しょうしつ', meaning: 'hilang musnah / lenyap' },
      { word: '退勤', reading: 'たいきん', meaning: 'jam pulang kerja kantor' },
    ],
    questions: [
      {
        id: 'dq_n2_1_1',
        question: 'このメールで、社員が金曜日の退勤前に「必ずしなければならないこと」は何ですか。',
        choices: [
          '土曜日の22時までにリモート接続でログインし直すこと。',
          'すべての業務ファイルを保存し、PCの電源を完全に切ること。',
          '日曜日の午前6時ちょうどにシステムの動作確認を行うこと。',
          '作業が早く終わった場合に備えて、自宅で待機しておくこと。',
        ],
        correctChoiceIndex: 1,
        explanation: 'Di paragraf ke-2 tertulis jelas: 「金曜日の退勤時までに必ずすべての業務ファイルを保存し、PCの電源をお切りください」 (Sebelum pulang Jumat, pastikan menyimpan semua file dan mematikan PC).',
      },
    ],
  },

  // ─── N2 Tanbun 2: Aturan Apartemen & Pembuangan Sampah ──────────
  {
    id: 'dokkai_n2_2',
    level: 'N2',
    dayNumber: 2,
    category: 'tanbun',
    categoryLabel: '短文 (Teks Pendek ~200 huruf)',
    title: 'マンション居住者の皆様へ：粗大ゴミの排出ルールについて',
    sourceType: 'Surat Edaran Pengelola Apartemen',
    estimatedMinutes: 3,
    passageText: `居住者の皆様へ

最近、ゴミ集積所に事前の連絡や処理券の貼付がないまま大型家具や家電製品が放置されるケースが多発しており、大変苦慮しております。

机や椅子、布団などの「粗大ゴミ」を処分される際は、必ず事前に市役所の粗大ゴミ受付センターへ電話またはWebにて収集の申し込みを行い、指定の粗大ゴミ処理手数料券（シール）を購入して貼り付けてください。

なお、冷蔵庫、洗濯機、テレビ、エアコンの4品目につきましては家電リサイクル法の対象となるため、市の粗大ゴミとしては回収できません。買い替え先の販売店または指定引き取り場所へ直接処分をご依頼くださいますようお願い申し上げます。

グランドハイツ管理組合`,
    translation: `Kepada Seluruh Penghuni:

Akhir-akhir ini, banyak terjadi kasus di mana perabot besar dan alat elektronik ditinggalkan begitu saja di tempat pembuangan sampah tanpa pemberitahuan sebelumnya dan tanpa stiker retribusi sampah, yang sangat menyulitkan pihak pengelola.

Saat hendak membuang "sampah berukuran besar (sodai gomi)" seperti meja, kursi, kasur lipat (futon), pastikan untuk terlebih dahulu menghubungi Pusat Pengurusan Sampah Kasar Kantor Kota via telepon atau web untuk mendaftar jadwal penjemputan, lalu beli dan tempelkan stiker biaya penanganan resmi yang ditentukan.

Adapun untuk 4 jenis barang: kulkas, mesin cuci, televisi, dan AC, karena masuk dalam ketentuan Undang-Undang Daur Ulang Elektronik Rumah Tangga, TIDAK BISA diambil sebagai sampah kasar pemerintah kota. Harap serahkan langsung ke toko tempat Anda membeli barang baru atau lokasi penampungan daur ulang khusus.

Badan Pengelola Apartemen Grand Heights`,
    vocabularyHelp: [
      { word: '粗大ゴミ', reading: 'そだいごみ', meaning: 'sampah ukuran besar (perabot, kasur)' },
      { word: '集積所', reading: 'しゅうせきじょ', meaning: 'tempat penampungan/pembuangan sampah' },
      { word: '苦慮', reading: 'くりょ', meaning: 'merasa sangat cemas / repot / terbebani' },
      { word: '貼付', reading: 'ちょうふ', meaning: 'menempelkan (stiker/label)' },
    ],
    questions: [
      {
        id: 'dq_n2_2_1',
        question: 'このお知らせによると、古い「洗濯機」を処分したい場合、どのように手続きしなければなりませんか。',
        choices: [
          '市の粗大ゴミ受付センターに電話し、手数料シールを貼って集積所に出す。',
          '市の粗大ゴミとしては出せないため、家電の販売店や指定引き取り場所に依頼する。',
          '管理組合に事前に連絡すれば、平日の通常ゴミ回収時に無料で引き取ってもらえる。',
          '粗大ゴミ手数料券を購入した上で、土曜日の朝に集積所に置いておく。',
        ],
        correctChoiceIndex: 1,
        explanation: 'Di paragraf ke-3 tertulis tegas: Kulkas, mesin cuci, TV, dan AC adalah barang daur ulang elektronik yang 「市の粗大ゴミとしては回収できません。買い替え先の販売店または指定引き取り場所へ直接処分をご依頼くださいますよう」.',
      },
    ],
  },

  // ─── N2 Tanbun 3: HR & Batas Waktu Klaim Transportasi ──────────
  {
    id: 'dokkai_n2_3',
    level: 'N2',
    dayNumber: 3,
    category: 'tanbun',
    categoryLabel: '短文 (Teks Pendek ~200 huruf)',
    title: '出張旅費および交通費の精算期日に関する注意喚起',
    sourceType: 'Pemberitahuan HR & Keuangan Kantor',
    estimatedMinutes: 3,
    passageText: `全社員の皆様へ

今期の決算処理に伴い、9月度および10月前半に発生した国内・海外出張の旅費精算についてご案内いたします。

領収書を添付した交通費精算申請書は、原則として【10月31日（金）17:00】までに社内ワークフローにて申請を完了させてください。期日を過ぎた場合、今期中の経費としての処理が認められず、精算金の支払いが翌々月以降に大幅に遅れる場合がございます。

また、電子マネーの利用履歴明細を添付する場合、乗車区間と日付が鮮明に印字されていることを必ずご確認ください。

経理部 出納課`,
    translation: `Kepada Seluruh Karyawan:

Sehubungan dengan penutupan buku anggaran periode ini, berikut kami sampaikan perihal klaim biaya perjalanan dinas dalam dan luar negeri untuk bulan September dan paruh awal Oktober.

Formulir permohonan klaim biaya transportasi beserta lampiran kuitansi/bukti pembayaran, secara prinsip wajib diselesaikan melalui sistem alur kerja internal (workflow) paling lambat pada 【Jumat, 31 Oktober, pukul 17:00】. Jika melewati tenggat waktu tersebut, permohonan tidak dapat diproses sebagai beban biaya periode ini, dan pembayaran dana penggantian dapat tertunda jauh hingga dua bulan berikutnya atau lebih.

Selain itu, jika melampirkan riwayat transaksi uang elektronik (IC Card), pastikan rute perjalanan dan tanggal tercetak dengan sangat jelas.

Departemen Keuangan - Seksi Kasir`,
    vocabularyHelp: [
      { word: '決算', reading: 'けっさん', meaning: 'tutup buku keuangan / laporan rugi-laba' },
      { word: '精算', reading: 'せいさん', meaning: 'klaim pembayaran / pelunasan pengeluaran' },
      { word: '領収書', reading: 'りょうしゅうしょ', meaning: 'kuitansi / nota bukti pembayaran resmi' },
      { word: '鮮明', reading: 'せんめい', meaning: 'jelas, tajam, terbaca terang' },
    ],
    questions: [
      {
        id: 'dq_n2_3_1',
        question: '交通費の精算申請が10月31日の17時を過ぎてしまった場合、どうなりますか。',
        choices: [
          '申請そのものが完全に却下され、交通費は一切支給されなくなる。',
          '領収書を紙で再提出すれば、翌週の月曜日に即座に現金で精算される。',
          '今期の経費処理とならず、費用の支払いが翌々月以降に遅れる可能性がある。',
          '電子マネーの利用明細書を別途郵送すれば、通常通り翌月に振り込まれる。',
        ],
        correctChoiceIndex: 2,
        explanation: 'Di paragraf ke-2 tertulis: 「期日を過ぎた場合、今期中の経費としての処理が認められず、精算金の支払いが翌々月以降に大幅に遅れる場合がございます」.',
      },
    ],
  },

  // ─── N2 Chuubun 1: Psikologi Prokrastinasi ──────────────────────
  {
    id: 'dokkai_n2_4',
    level: 'N2',
    dayNumber: 4,
    category: 'chuubun',
    categoryLabel: '中文 (Teks Sedang ~500 huruf)',
    title: '「先延ばし」の心理と感情のマネジメント',
    sourceType: 'Esai Psikologi & Produktivitas',
    estimatedMinutes: 6,
    passageText: `私たちは重要な課題や仕事に直面したとき、つい「明日やればいい」と後回しにしてしまうことがある。一般的に、この「先延ばし（プロクラスティネーション）」は、怠惰や時間管理能力の欠如が原因だと考えられがちである。

しかし近年の認知心理学の研究によれば、先延ばしの本質は時間の問題ではなく、「ネガティブな感情の回避」にあるという。難易度の高い仕事や失敗が許されない課題を前にしたとき、人は無意識のうちに「うまくできなかったらどうしよう」という不安や恐怖、あるいは退屈さといったストレスを感じる。そして、その不快な感情から一時的に逃れるために、掃除を始めたりSNSを眺めたりといった、すぐに小さな達成感を得られる無関係な行動に逃避してしまうのである。

したがって、先延ばしを克服するために最も効果的なのは、単にスケジュール帳を細かく埋めることではない。まず自分が課題に対してどんな恐怖やプレッシャーを感じているのかを自覚し、課題を「最初の5分間だけ手をつける」といった極めて小さな行動単位に分解して、心理的抵抗を減らすことこそが重要なのだ。`,
    translation: `Ketika kita dihadapkan pada tugas atau pekerjaan penting, kita sering kali tanpa sengaja menundanya dengan berpikir "dikerjakan besok saja". Umumnya, "menunda-nunda" (procrastination) ini kerap dianggap timbul akibat kemalasan atau kurangnya kemampuan manajemen waktu.

Namun menurut riset psikologi kognitif terkini, hakikat menunda-nunda bukanlah masalah waktu, melainkan "penghindaran terhadap emosi negatif". Saat berhadapan dengan pekerjaan sulit atau tugas yang tak boleh gagal, manusia tanpa sadar merasakan kecemasan, ketakutan ("bagaimana jika saya gagal?"), atau stres berupa kebosanan. Demi melarikan diri sesaat dari emosi tak nyaman tersebut, seseorang melarikan diri ke aktivitas lain yang memberi rasa puas instan, seperti membersihkan kamar atau membuka media sosial.

Oleh karena itu, cara paling efektif untuk mengatasi penundaan bukanlah dengan sekadar mengisi jadwal secara padat. Hal terpenting adalah menyadari terlebih dahulu rasa takut atau tekanan apa yang sedang kita rasakan terhadap tugas tersebut, lalu memecah tugas menjadi unit tindakan yang sangat kecil—seperti "cukup sentuh selama 5 menit pertama saja"—untuk menurunkan resistensi psikologis kita.`,
    vocabularyHelp: [
      { word: '直面', reading: 'ちょくめん', meaning: 'berhadapan langsung (dengan masalah)' },
      { word: '怠惰', reading: 'たいだ', meaning: 'kemalasan / malas' },
      { word: '欠如', reading: 'けつじょ', meaning: 'ketiadaan / kurangnya suatu hal' },
      { word: '逃避', reading: 'とうひ', meaning: 'pelarian / kabur dari kenyataan' },
      { word: '克服', reading: 'こくふく', meaning: 'menaklukkan / mengatasi rintangan' },
    ],
    questions: [
      {
        id: 'dq_n2_4_1',
        question: '筆者によると、人が仕事を「先延ばし」にしてしまう本当の原因は何ですか。',
        choices: [
          '時間管理のスキルが根本的に不足していること。',
          '仕事に対する責任感や意欲が全く持てないこと。',
          '課題に取り組むことで生じる不安やストレスなどの不快な感情から逃れようとすること。',
          '掃除やSNSなど、他に優先してやるべき大切な用事が重なってしまうこと。',
        ],
        correctChoiceIndex: 2,
        explanation: 'Di paragraf ke-2 dijelaskan: 「先延ばしの本質は時間の問題ではなく、ネガティブな感情の回避にある」.',
      },
      {
        id: 'dq_n2_4_2',
        question: '先延ばしを防ぐために、筆者が最も推奨しているアプローチはどれですか。',
        choices: [
          'スケジュール帳に毎日の行動予定を分単位で厳密に書き込むこと。',
          '課題を非常に小さなステップに分け、心理的な負担を減らして着手すること。',
          '失敗したときの罰則をあらかじめ決めて、自分に強いプレッシャーをかけること。',
          '気分が完全に前向きになるまで、無理に課題に手をつけないこと。',
        ],
        correctChoiceIndex: 1,
        explanation: 'Di paragraf terakhir tertulis: 「課題を『最初の5分間だけ手をつける』といった極めて小さな行動単位に分解して、心理的抵抗を減らすことこそが重要なのだ」.',
      },
    ],
  },

  // ─── N2 Chuubun 2: Budaya Komunikasi Digital ───────────────────
  {
    id: 'dokkai_n2_5',
    level: 'N2',
    dayNumber: 5,
    category: 'chuubun',
    categoryLabel: '中文 (Teks Sedang ~500 huruf)',
    title: 'メッセージアプリの普及と「即レス」の重圧',
    sourceType: 'Esai Sosiologi Budaya Modern',
    estimatedMinutes: 6,
    passageText: `スマートフォンやチャットツールの普及によって、私たちはいつでもどこでも他者と瞬時につながることができるようになった。連絡の効率化や情報共有のスピード向上という点で、この技術革新が社会にもたらした恩恵は計り知れない。

しかし一方で、この「常時接続」の環境は、人々の精神に新たなストレスを生み出している。その代表的な例が、受信したメッセージに対して即座に返信しなければならないと感じる「即レス（即座のレスポンス）」の強迫観念である。既読機能の存在によって、「メッセージを読んだのに返信しないのは失礼ではないか」「無視していると誤解されるのではないか」という不安が生じ、結果として私生活の休息時間までもが他者への配慮に侵食されてしまう。

重要なのは、即座に返信することだけが誠実さの証ではないと認識し直すことである。真の信頼関係とは、数時間の返信の遅れによって崩れるほど脆弱なものではないはずだ。便利さに振り回されることなく、時には意識的に通信を遮断し、自分自身の時間を取り戻す知恵が、現代人にこそ求められている。`,
    translation: `Dengan maraknya ponsel pintar dan aplikasi pesan instan, kita kini dapat terhubung secara instan dengan orang lain kapan pun dan di mana pun. Dari sudut pandang efisiensi komunikasi dan peningkatan kecepatan berbagi informasi, berkah yang dibawa oleh inovasi teknologi ini bagi masyarakat sungguh tak terhitung besarnya.

Namun di sisi lain, lingkungan yang "selalu terhubung setiap saat" ini melahirkan bentuk stres baru dalam psikologis manusia. Salah satu contoh utamanya adalah obsesi "sokuresu (respon instan)", di mana seseorang merasa harus membalas pesan seketika saat pesan diterima. Akibat adanya fitur tanda pesan terbaca (read receipt), timbul kecemasan seperti "apakah tidak sopan jika sudah membaca tapi belum membalas?" atau "apakah saya akan disalahpahami mengabaikannya?", sehingga waktu istirahat dalam kehidupan pribadi pun tergerogoti oleh keharusan menjaga perasaan orang lain.

Hal terpenting adalah menyadari kembali bahwa membalas seketika bukanlah satu-satunya bukti ketulusan. Hubungan saling percaya yang sejati semestinya tidaklah begitu rapuh hingga hancur hanya karena keterlambatan balasan selama beberapa jam. Tanpa diperbudak oleh kepraktisan teknologi, kearifan untuk terkadang secara sadar memutus komunikasi dan merebut kembali waktu pribadi kita justru sangat dibutuhkan oleh manusia modern saat ini.`,
    vocabularyHelp: [
      { word: '恩恵', reading: 'おんけい', meaning: 'berkah / anugerah / manfaat besar' },
      { word: '強迫観念', reading: 'きょうはくかんねん', meaning: 'obsesi pikiran yang menghantui / rasa tertekan' },
      { word: '侵食', reading: 'しんしょく', meaning: 'menggerogoti / mengikis secara perlahan' },
      { word: '脆弱', reading: 'ぜいじゃく', meaning: 'rapuh / rentan rusak' },
    ],
    questions: [
      {
        id: 'dq_n2_5_1',
        question: '本文で述べられている「即レスの重圧」が生じる最大の要因は何ですか。',
        choices: [
          'スマートフォンの通信速度が遅く、返信の送信エラーが頻発するから。',
          'メッセージを読んだことが相手に伝わるため、返信が遅れると相手に不快感や誤解を与えると不安になるから。',
          '仕事の連絡を1分以内に返信しないと、会社の規則で減給処分になるから。',
          'アプリの利用料金が利用時間に応じて高額になる仕組みになっているから。',
        ],
        correctChoiceIndex: 1,
        explanation: 'Di paragraf ke-2 tertulis: 「既読機能の存在によって、『読んだのに返信しないのは失礼ではないか』『無視していると誤解されるのではないか』という不安が生じ」.',
      },
      {
        id: 'dq_n2_5_2',
        question: '筆者が考える「現代人に求められる知恵」とは何ですか。',
        choices: [
          'より返信が早くなるよう、短文の定型文やスタンプを多用すること。',
          '信頼関係を保つために、夜間であっても必ず即座に返信し続けること。',
          'テクノロジーの便利さに振り回されず、時には通信を断って自分の時間を確保すること。',
          'メッセージアプリの使用を法律で全面的に禁止すること。',
        ],
        correctChoiceIndex: 2,
        explanation: 'Di kalimat terakhir tertulis jelas: 「便利さに振り回されることなく、時には意識的に通信を遮断し、自分自身の時間を取り戻す知恵が、現代人にこそ求められている」.',
      },
    ],
  },

  // ─── N2 Jouhou Kensaku: Perpustakaan ────────────────────────────
  {
    id: 'dokkai_n2_6',
    level: 'N2',
    dayNumber: 6,
    category: 'jouhou',
    categoryLabel: '情報検索 (Pencarian Informasi Brosur/Aturan)',
    title: '中央市立図書館 個人学習ブース利用案内',
    sourceType: 'Tabel Aturan Fasilitas Publik',
    estimatedMinutes: 4,
    passageText: `【中央市立図書館 個人学習ブース（2階）利用案内】

1. 利用対象：
・当館の利用カード（青または緑）をお持ちの方。
※ 期限切れのカードでは予約・利用できません。カウンターで更新（無料）してください。

2. 利用時間帯：
・午前枠：09:30 〜 13:00
・午後枠：13:30 〜 17:00
・夜間枠：17:30 〜 20:30（※平日のみ。土・日・祝日は夜間枠なし）
※ 1人につき1日最大2枠まで連続利用可能。

3. 予約方法：
・【平日】事前Web予約、または当日カウンターでの先着順受付。
・【土・日・祝日】完全事前Web予約制（前日20:00までに要予約）。当日の空き枠受付は行いません。

4. 注意事項：
・ブース内での飲食はフタ付きの飲み物（水筒・ペットボトル）のみ可。食事は一切不可。
・開始時間から20分以上遅刻した場合、予約は自動的にキャンセルとなります。`,
    translation: `[Panduan Penggunaan Bilik Belajar Mandiri Perpustakaan Pusat Kota (Lantai 2)]

1. Syarat Pengguna:
- Pemegang kartu perpustakaan (warna biru atau hijau).
* Kartu yang sudah kedaluwarsa tidak dapat dipakai untuk reservasi. Harap perpanjang di loket (gratis).

2. Sesi Waktu Penggunaan:
- Sesi Pagi: 09:30 - 13:00
- Sesi Siang: 13:30 - 17:00
- Sesi Malam: 17:30 - 20:30 (*Hanya hari kerja biasa. Hari Sabtu, Minggu & Libur Nasional TIDAK ADA sesi malam).
* Maksimal 2 sesi berurutan per orang dalam 1 hari.

3. Cara Reservasi:
- [Hari Kerja Biasa / Senin-Jumat]: Reservasi Web sebelumnya ATAU pendaftaran langsung di loket (first-come, first-served).
- [Sabtu, Minggu & Libur Nasional]: WAJIB reservasi Web penuh (paling lambat H-1 pukul 20:00). Tidak melayani pendaftaran langsung di tempat pada hari-H.

4. Catatan Penting:
- Minuman di dalam bilik HANYA diperbolehkan yang memiliki tutup rapat (botol minum/tumbler). Makanan dilarang keras.
- Jika terlambat 20 menit atau lebih dari waktu mulai sesi, reservasi otomatis BATAL.`,
    vocabularyHelp: [
      { word: '先着順', reading: 'せんちゃくじゅん', meaning: 'urutan kedatangan (siapa cepat dia dapat)' },
      { word: '枠', reading: 'わく', meaning: 'slot / kuota sesi waktu' },
      { word: '空き枠', reading: 'あきわく', meaning: 'slot waktu yang masih kosong' },
    ],
    questions: [
      {
        id: 'dq_n2_6_1',
        question: '留学生のキムさんは「日曜日の午後」に学習ブースを利用したいと考えています。利用条件として正しいものはどれですか。',
        choices: [
          '日曜日当日の午後13:30に直接図書館カウンターへ行き、先着順で申し込む。',
          '前日の土曜日20:00までに、Webサイトから利用予約を完了させておく必要がある。',
          '日曜日は午後枠がないため、夜間枠（17:30〜20:30）に予約する。',
          '有効期限が切れたカードでも、当日のカウンターで提示すれば日曜日も利用できる。',
        ],
        correctChoiceIndex: 1,
        explanation: 'Lihat poin 3: Pada hari Sabtu/Minggu/Libur, sistemnya adalah 「完全事前Web予約制（前日20:00までに要予約）」 dan tidak melayani pendaftaran langsung di tempat hari-H.',
      },
    ],
  },

  // ═════════════════════════════════════════════════════════════════

  // ─── N2 Chuubun 7: AI & Human Creativity ───────────────────
  {
    id: 'dokkai_n2_7',
    level: 'N2',
    dayNumber: 7,
    category: 'chuubun',
    categoryLabel: '中文 (Teks Menengah ~500 huruf)',
    title: '生成AI時代における人間の独創性と感性の行方',
    sourceType: 'Opini Budaya & Inovasi N2',
    estimatedMinutes: 5,
    passageText: `近年、生成AIの急速な進化により、絵画の制作や文章の執筆、さらには音楽の作曲に至るまで、従来は人間固有の領域と考えられていた創作活動の多くを機械が肩代わりできるようになった。膨大なデータを学習したAIは、人間が何年も修練を積まなければ到達できない技巧を、瞬時に再現してみせる。

しかし、創作の本質とは単に技巧の完成度を競うことにあるのだろうか。人間が作品を生み出す動機には、個人的な苦悩や挫折、他者への切実な共感といった、生きている身体と心を持つ存在ならではの感情の揺らぎが不可欠である。不完全さや偶然性を受け入れながら、自らの内面と対峙して生み出された表現にこそ、受け手の心を深く揺さぶる独自の価値が宿る。

AIを道具として巧みに活用しつつも、何を表現し、なぜそれを他者に伝えたいのかという「動機」と「責任」を持ち続けること。これこそが、機械の時代において人間に求められる真の創造性ではないだろうか。`,
    translation: `Dalam beberapa tahun terakhir, dengan evolusi pesat AI generatif, banyak aktivitas kreatif yang sebelumnya dianggap sebagai ranah eksklusif manusia—seperti melukis, menulis teks, bahkan menggubah musik—kini dapat diambil alih oleh mesin. AI yang mempelajari data dalam jumlah masif mampu meniru dan mereproduksi teknik yang biasanya membutuhkan latihan bertahun-tahun oleh manusia hanya dalam sekejap mata.

Namun, apakah hakikat penciptaan semata-mata berlomba menyelesaikan teknik secara sempurna? Motivasi manusia saat menghasilkan sebuah karya tak terpisahkan dari gejolak emosi seperti penderitaan pribadi, kegagalan, dan empati mendalam terhadap orang lain—hal-hal yang hanya dimiliki oleh makhluk bertubuh dan berjiwa nyata. Justru di dalam ekspresi yang lahir dari menghadapi batin sendiri sembari menerima ketidaksempurnaan dan kebetulan itulah bersemayam nilai unik yang mampu menggugah hati penikmatnya secara mendalam.

Sembari memanfaatkan AI secara lihai sebagai alat, tetap memegang teguh motivasi dan tanggung jawab mengenai "apa yang ingin diekspresikan dan mengapa ingin menyampaikannya kepada orang lain". Bukankah hal inilah kreativitas sejati yang dituntut dari manusia di era mesin?`,
    vocabularyHelp: [
      { word: '肩代わり', reading: 'かたがわり', meaning: 'mengambil alih beban / peran' },
      { word: '修練', reading: 'しゅうれん', meaning: 'latihan disiplin tekun' },
      { word: '切実', reading: 'せつじつ', meaning: 'sangat mendesak / sungguh-sungguh terasa' },
      { word: '対峙', reading: 'たいじ', meaning: 'berhadapan langsung / konfrontasi diri' },
    ],
    questions: [
      {
        id: 'dq_n2_7_1',
        question: '筆者によると、生成AIの時代に「人間に求められる真の創造性」とはどのようなものか。',
        choices: [
          'AIが学習していない全く新しい技法を開発し、機械の計算能力を上回ること。',
          '自らの内面や感情の揺らぎに向き合い、何をなぜ表現したいのかという動機と責任を持つこと。',
          '不完全な作品の制作をやめ、AIにすべての創作工程を任せて効率を高めること。',
          '他者との共感や苦悩を排除し、客観的で完璧な完成度をひたすら追求すること。',
        ],
        correctChoiceIndex: 1,
        explanation: 'Di paragraf 2 dan 3 penulis menegaskan: karya manusia berharga karena lahir dari gejolak batin, penderitaan, dan empati, serta manusia harus tetap memegang motivasi dan tanggung jawab tentang apa yang ingin disampaikan (pilihan 2).',
      },
    ],
  },

  // ─── N2 Hikaku 8: Two Opinions on Forest Conservation ──────
  {
    id: 'dokkai_n2_8',
    level: 'N2',
    dayNumber: 8,
    category: 'hikaku',
    categoryLabel: '比較 (Perbandingan Dua Pandangan ~500 huruf)',
    title: '森林資源の利用と自然保護をめぐる二つの視点',
    sourceType: 'Kolom Editorial Komparatif N2',
    estimatedMinutes: 5,
    passageText: `【Aの意見】
森林は地球温暖化の防止や生物多様性の保全において極めて重要な役割を果たしている。樹木を伐採して観光施設や木材産業に利用することは、長年かけて形成された生態系を破壊する恐れがある。一度失われた自然環境を元の状態に戻すには莫大な時間と費用を要する以上、自然林への人為的な介入は最小限に抑え、厳重な保護区域として保全することを最優先にすべきである。

【Bの意見】
日本の人工林の多くは、適切な間伐や手入れを行わなければ逆に地盤が緩み、土砂崩れなどの自然災害を引き起こす危険性がある。ただ放置して保護するだけでは健康な山を維持することはできない。地元の林業を活性化させ、間伐材を積極的に建築やバイオマス燃料として活用する経済的循環を作ることこそが、結果として持続可能な森林環境を守る現実的な道である。`,
    translation: `[Pendapat A]
Hutan memainkan peran yang teramat penting dalam pencegahan pemanasan global dan pelestarian keanekaragaman hayati. Menebang pepohonan demi fasilitas wisata atau industri kayu berisiko merusak ekosistem yang terbentuk selama bertahun-tahun. Karena memulihkan lingkungan alam yang terlanjur rusak membutuhkan waktu dan biaya yang sangat besar, campur tangan manusia terhadap hutan alami harus ditekan seminimal mungkin, dan perlindungan ketat sebagai area konservasi harus diprioritaskan utama.

[Pendapat B]
Banyak hutan tanaman di Jepang justru berisiko mengalami penurunan stabilitas tanah dan memicu tanah longsor jika tidak dilakukan penjarangan (pemotongan dahan/pohon berkala) dan perawatan yang tepat. Sekadar membiarkan dan melindunginya tanpa campur tangan tidak akan bisa menjaga kesehatan gunung. Menggerakkan kembali industri kehutanan lokal dan menciptakan siklus ekonomi dengan memanfaatkan kayu hasil penjarangan untuk konstruksi dan bahan bakar biomassa justru merupakan jalan realistis untuk melindungi lingkungan hutan secara berkelanjutan.`,
    vocabularyHelp: [
      { word: '伐採', reading: 'ばっさい', meaning: 'penebangan pohon hutan' },
      { word: '人為的', reading: 'じんいてき', meaning: 'campur tangan buatan manusia' },
      { word: '間伐', reading: 'かんばつ', meaning: 'penjarangan pohon berkala' },
      { word: '持続可能', reading: 'じぞくかのう', meaning: 'berkelanjutan (sustainable)' },
    ],
    questions: [
      {
        id: 'dq_n2_8_1',
        question: '森林の維持管理について、AとBの主張の共通点または相違点として最も適切なものはどれか。',
        choices: [
          'Aは人為的な介入を排した保護を重視し、Bは適切な管理と経済循環を通じた保全を主張している。',
          'AもBも森林への立ち入りを一切禁止し、厳重な法律で観光開発を規制すべきだと一致している。',
          'Aは土砂崩れなどの災害防止を第一とし、Bは地球温暖化の防止のみを最優先課題としている。',
          'Aは木材の積極的な産業利用を推奨し、Bは自然林をそのまま放置すべきだと述べている。',
        ],
        correctChoiceIndex: 0,
        explanation: 'A berargumen bahwa campur tangan manusia harus diminimalisir demi konservasi murni, sedangkan B berargumen bahwa pembiaran justru berbahaya dan hutan butuh perawatan berkala serta perputaran ekonomi industri kehutanan yang sehat (pilihan 1).',
      },
    ],
  },
  // JLPT N1 PASSAGES (読解)
  // ═════════════════════════════════════════════════════════════════
  {
    id: 'dokkai_n1_1',
    level: 'N1',
    dayNumber: 1,
    category: 'tanbun',
    categoryLabel: '短文 N1 (Teks Pendek ~200 huruf)',
    title: '科学技術の進歩と人間の主体性',
    sourceType: 'Esai Filsafat & Teknologi N1',
    estimatedMinutes: 3,
    passageText: `人工知能をはじめとする先端技術が急速に発展する現代において、私たちは利便性を享受する一方で、知らず知らずのうちに判断の主体性を機械に委ねつつある。アルゴリズムが提示する最適な選択肢を疑うことなく受容し続けることは、一見すると合理的であり無駄を省く行為に思える。

しかし、人間が試行錯誤の中で迷い、自らの価値観に基づいて下す決断の過程そのものにこそ、人間としての実存的な尊厳が宿っているのではないだろうか。効率性の追求の果てに自律的な思考を放棄してしまえば、私たちは道具を使う主体から、道具に依存する客体へと転落しかねない。`,
    translation: `Di era modern saat teknologi mutakhir seperti kecerdasan buatan berkembang sangat pesat, di satu sisi kita menikmati kepraktisan, namun di sisi lain tanpa disadari kita mulai menyerahkan subjektivitas pengambilan keputusan kepada mesin. Terus menerima tanpa ragu pilihan paling optimal yang disodorkan oleh algoritma tampak sekilas seperti tindakan rasional yang memangkas kesia-siaan.

Namun, bukankah dalam proses perjuangan manusia saat bimbang dalam coba-gagal, lalu mengambil keputusan berdasarkan nilai-nilai pribadinya itulah justru martabat eksistensial sebagai manusia bersemayam? Jika di akhir pengejaran efisiensi kita justru melepaskan pemikiran mandiri yang otonom, kita berisiko jatuh dari subjek yang menggunakan alat menjadi objek yang bergantung pada alat.`,
    vocabularyHelp: [
      { word: '主体性', reading: 'しゅたいせい', meaning: 'subjektivitas / kemandirian bertindak' },
      { word: '享受', reading: 'きょうじゅ', meaning: 'menikmati fasilitas / anugerah' },
      { word: '委ねる', reading: 'ゆだねる', meaning: 'menyerahkan / mempercayakan wewenang' },
      { word: '自律的', reading: 'じりつてき', meaning: 'otonom / mandiri atas kehendak sendiri' },
    ],
    questions: [
      {
        id: 'dq_n1_1_1',
        question: '筆者がこの文章で最も強く主張したいことは何ですか。',
        choices: [
          '人工知能のアルゴリズムは不完全であるため、日常生活で利用するべきではない。',
          '効率性ばかりを追求して機械に判断を任せきりにすると、人間本来の自律的思考や尊厳が損なわれる。',
          '試行錯誤の過程は無駄が多いため、すべての意思決定を最新技術に委ねるのが合理的である。',
          '先端技術の進歩は人間に無用な迷いやストレスをもたらすため、開発を規制すべきである。',
        ],
        correctChoiceIndex: 1,
        explanation: 'Di paragraf ke-2 penulis menegaskan: 「人間が自らの価値観に基づいて下す決断の過程そのものにこそ、人間としての実存的な尊厳が宿っている」「効率性の追求の果てに自律的な思考を放棄してしまえば、道具に依存する客体へと転落しかねない」.',
      },
    ],
  },
  {
    id: 'dokkai_n1_2',
    level: 'N1',
    dayNumber: 2,
    category: 'chuubun',
    categoryLabel: '中文 N1 (Teks Menengah ~500 huruf)',
    title: '「間（ま）」の美学と日本文化のコミュニケーション',
    sourceType: 'Kritik Budaya & Linguistik N1',
    estimatedMinutes: 6,
    passageText: `西洋的な言語観において、コミュニケーションとは主に論理的な言葉の明確なやり取りによって成立するものと捉えられる。言葉を発しない沈黙は、多くの場合、無知や合意の欠如、あるいは意思疎通の断絶とみなされがちである。

それに対して日本文化においては、言葉と言葉の狭間に存在する「間（ま）」や余白が、極めて高度な意味伝達の役割を果たしてきた。例えば伝統芸能である能や狂言において、演者が静止し一切の台詞を排する一瞬の「間」こそが、観客の想像力を喚起し、言葉以上の深い情念や緊張感を醸し出す。

この「間」の感覚は、日常の言語行動にも深く息づいている。あえてすべてを言葉にし尽くさず、相手が汲み取るべき余韻を残すことは、不親切なのではなく、相手の感受性を信頼し尊重する礼節の一形態なのである。文脈や場の空気を共有することで言葉を補完し合うこのコミュニケーション様式は、多文化共生の現代において「曖昧で非論理的」と批判されることもあるが、そこには他者への繊細な配慮と、言葉の限界を自覚した豊かな知恵が潜んでいると言えよう。`,
    translation: `Dalam sudut pandang kebahasaan Barat, komunikasi umumnya dipahami sebagai sesuatu yang tercipta melalui pertukaran kata-kata logis yang eksplisit dan jelas. Keheningan tanpa kata kerap dianggap sebagai ketidaktahuan, ketiadaan kesepakatan, atau putusnya komunikasi.

Sebaliknya dalam kebudayaan Jepang, "Ma" (jeda/keheningan ruang dan waktu) yang hadir di sela-sela kata memegang peranan penyampaian makna yang sangat mendalam. Sebagai contoh dalam seni teater tradisional Noh atau Kyogen, momen jeda singkat saat pemain diam mematung tanpa mengucapkan dialog apa pun justru membangkitkan imajinasi penonton serta memancarkan emosi batin dan tensi yang jauh melampaui kata-kata.

Rasa terhadap "Ma" ini berakar mendalam pula dalam perilaku berbahasa sehari-hari. Sengaja tidak mengutarakan segalanya hingga tuntas dengan kata-kata, melainkan menyisakan ruang resonansi untuk dipahami lawan bicara, bukanlah bentuk ketidakramahan. Justru sebaliknya, itu adalah bentuk etika santun yang mempercayai dan menghargai kepekaan lawan bicara. Pola komunikasi yang saling melengkapi kata melalui pemahaman konteks bersama ini memang terkadang dikritik sebagai hal yang "ambigu dan tidak logis", namun di dalamnya tersimpan kearifan kaya yang menyadari keterbatasan kata serta kepedulian yang halus terhadap orang lain.`,
    vocabularyHelp: [
      { word: '余白', reading: 'よはく', meaning: 'ruang kosong / margin / celah' },
      { word: '喚起', reading: 'かんき', meaning: 'membangkitkan (minat/kesadaran/ingatan)' },
      { word: '醸し出す', reading: 'かもしだす', meaning: 'menciptakan suasana / memancarkan aura' },
      { word: '汲み取る', reading: 'くみとる', meaning: 'menangkap maksud tersirat / memahami perasaan orang' },
    ],
    questions: [
      {
        id: 'dq_n1_2_1',
        question: '日本の伝統芸能や日常会話における「間（ま）」について、筆者はどのように捉えていますか。',
        choices: [
          '言いたいことを正確に伝えられないときに生じる、避けるべき沈黙である。',
          '言葉以上に豊かな感情や配慮を伝え、相手の想像力や感受性を信頼する重要な表現である。',
          '西洋の論理的な会話法に劣る、曖昧で非効率な古い慣習にすぎない。',
          '相手に対して発言を促し、会話の主導権を握るための心理的駆け引きである。',
        ],
        correctChoiceIndex: 1,
        explanation: 'Di paragraf ke-2 dan ke-3 dijelaskan bahwa jeda ("Ma") bukan ketidakramahan atau kekurangan, melainkan bentuk etika yang mempercayai kepekaan lawan bicara dan mampu menyampaikan rasa yang lebih dalam melampaui kata-kata.',
      },
      {
        id: 'dq_n1_2_2',
        question: '日本文化であえてすべてを言葉にし尽くさない理由として、本文の内容と合致するものはどれですか。',
        choices: [
          '相手の感受性を尊重し、文脈を通じてお互いに気持ちを補完し合う配慮があるから。',
          '自分の本心を相手に悟られないよう、自己防衛を図るため。',
          '多文化共生社会において批判されるのを防ぐため。',
          '言葉数が多ければ多いほど、誤解を生みやすいことが科学的に証明されているから。',
        ],
        correctChoiceIndex: 0,
        explanation: 'Di paragraf ke-3 tertulis: 「相手の感受性を信頼し尊重する礼節の一形態なのである。文脈や場の空気を共有することで言葉を補完し合う」.',
      },
    ],
  },

  // ═════════════════════════════════════════════════════════════════

  // ─── N1 Chuubun 3: Language and Cognition ──────────────────
  {
    id: 'dokkai_n1_3',
    level: 'N1',
    dayNumber: 3,
    category: 'chuubun',
    categoryLabel: '中文 N1 (Teks Menengah ~550 huruf)',
    title: '言語の構造が規定する世界認識の枠組み',
    sourceType: 'Wacana Filsafat Bahasa N1',
    estimatedMinutes: 5,
    passageText: `私たちは普段、言葉を自らの思考を他者に伝達するための単なる「外的な道具」と見なしがちである。あらかじめ自分の中に明確な考えが存在し、それに最も合致する語彙を辞書から取り出すように選んで並べていると信じている。

だが、この常識的な見解は一面的な真理にすぎない。言語学や認知科学が明らかにしてきたように、言語とは思考を運ぶ受動的な器ではなく、思考そのものの輪郭をあらかじめ形作る「能動的な枠組み」である。ある文化において特定の現象を細やかに指し示す語彙が豊富に存在するならば、その言語共同体の人々は世界をその解像度で知覚するようになる。逆に、名づけられていない微細な差異は、認識の網の目からすり抜け、存在しないものとして見過ごされてしまう。

つまり、私たちが「現実」と呼んでいる世界は、あらかじめ客観的にそこに固定されているのではなく、自らが獲得した言語の体系を通じて分節され、再構成されたものにほかならない。母語の限界を認識し、異質な言語体系に触れることの意義は、まさに自分を縛り付けている認識の檻から自らを解放し、世界の豊かさを多元的に捉え直す契機を得る点にある。`,
    translation: `Kita sehari-hari cenderung memandang bahasa semata-mata sebagai "alat eksternal" untuk menyampaikan pemikiran kita kepada orang lain. Kita percaya bahwa ide yang jelas telah ada terlebih dahulu di dalam diri kita, lalu kita tinggal memilih dan menyusun kosakata yang paling cocok seolah mengambilnya dari kamus.

Namun, pandangan awam ini hanyalah kebenaran sepihak. Sebagaimana telah diungkapkan oleh linguistik dan ilmu kognitif, bahasa bukanlah bejana pasif yang sekadar mengangkut pikiran, melainkan "kerangka aktif" yang sejak awal telah membentuk kontur pemikiran itu sendiri. Jika dalam suatu kebudayaan terdapat kekayaan kosakata yang menamai suatu fenomena secara mendalam, maka anggota komunitas bahasa tersebut akan mempersepsikan dunia dengan tingkat resolusi ketajaman tersebut. Sebaliknya, perbedaan halus yang tidak diberi nama akan luput dari jaring persepsi dan terabaikan seolah tidak ada.

Dengan kata lain, dunia yang kita sebut "realitas" bukanlah sesuatu yang objektif dan tetap di luar sana, melainkan tersekat-sekat dan direkonstruksi melalui sistem bahasa yang telah kita kuasai. Makna mempelajari bahasa asing dan mengenali batas bahasa ibu terletak pada terbukanya kesempatan untuk membebaskan diri dari sangkar persepsi yang mengekang kita, serta menangkap kembali kekayaan dunia secara berlipat ganda.`,
    vocabularyHelp: [
      { word: '輪郭', reading: 'りんかく', meaning: 'garis batas luar / kontur bentuk' },
      { word: '分節', reading: 'ぶんせつ', meaning: 'artikulasi pemisahan konsep' },
      { word: '多元的', reading: 'たげんてき', meaning: 'multidimensional / majemuk' },
      { word: '解像度', reading: 'かいぞうど', meaning: 'resolusi ketajaman detail' },
    ],
    questions: [
      {
        id: 'dq_n1_3_1',
        question: '筆者は「言語」と「人間の思考や世界認識」の関係をどのように捉えているか。',
        choices: [
          '言語は頭の中にあらかじめ存在する明確な思考を正確に外へ伝えるための単なる道具である。',
          '世界は客観的に誰にとっても共通であり、言語の違いが人々の現実認識に影響を与えることはない。',
          '言語は単なる伝達手段にとどまらず、人々が世界を認識し思考する枠組みそのものを能動的に形作っている。',
          '母語の語彙が少ない言語体系ほど、余計な先入観にとらわれず客観的な真理に到達しやすい。',
        ],
        correctChoiceIndex: 2,
        explanation: 'Di paragraf ke-2 dan 3 penulis menegaskan: bahasa bukan wadah pasif melainkan kerangka aktif yang sejak awal membagi dan membentuk kontur cara manusia memandang realitas (pilihan 3).',
      },
    ],
  },

  // ─── N1 Choubun 4: Digital Ethics & Collective Responsibility
  {
    id: 'dokkai_n1_4',
    level: 'N1',
    dayNumber: 4,
    category: 'choubun',
    categoryLabel: '長文 N1 (Teks Panjang ~750 huruf)',
    title: 'デジタル空間における匿名性と公共的責任の変容',
    sourceType: 'Analisis Sosial Budaya Modern N1',
    estimatedMinutes: 7,
    passageText: `インターネットの普及とSNSの日常化は、かつてない規模で言論の民主化をもたらした。地理的・階層的な障壁を軽々と超え、誰しもが自らの意見を瞬時に世界に向けて発信できる基盤が整ったことは、個人のエンパワーメントという観点から見れば疑いようもなく喜ばしい成果である。匿名性という隠れ蓑は、権力への告発や社会的弱者の生の声の可視化を後押しする積極的な機能も果たしてきた。

しかしながら、この自由の裏側で深刻化しているのは、発言に伴うべき「公共的責任」の劇的な希薄化である。肉体を伴う対面的な空間であれば、相手の微細な表情の変化や沈黙に触れ、自らの言葉が引き起こす痛みを直感的に感知して自制が働く。これに対し、画面越しに文字記号だけが飛び交うデジタル空間では、他者の実存的な生々しさが捨象されてしまう。

その結果、個々人は悪意のない正義感や些細な苛立ちに駆られて批判の言葉を投稿したにすぎないにもかかわらず、それがアルゴリズムによって増幅され、標的となった個人に対しては圧倒的な暴力となって降り注ぐという事態が日常的に発生している。「皆が言っているから」「自分はほんの一言述べただけだ」という責任の分散こそが、現代のデジタル空間における最大の病理にほかならない。

自由な発信権を擁護することと、無責任な集団的制裁に歯止めをかけることは決して二者択一ではない。匿名性の恩恵を享受しつつも、言葉の向こう側に傷つきやすい一人の人間が存在しているという想像力を個々人が不断に鍛え直すことなしには、健全なデジタル公共圏の存続は望み得ないだろう。`,
    translation: `Penyebaran internet dan rutinitas media sosial telah membawa demokratisasi opini dalam skala yang belum pernah terjadi sebelumnya. Tersedianya fondasi di mana siapa pun dapat menyampaikan pandangannya kepada dunia secara instan tanpa terhalang sekat geografis maupun hierarki kelas sosial tak diragukan lagi merupakan pencapaian membahagiakan dari sudut pandang pemberdayaan individu. Tabir anonimitas juga telah menjalankan fungsi positif dalam mendorong pengungkapan penyalahgunaan kekuasaan serta menyuarakan jeritan nyata kelompok rentan.

Akan tetapi, di balik kebebasan ini, yang kian meruncing adalah penipisan dramatis atas tanggung jawab publik yang seharusnya menyertai setiap ucapan. Di ruang tatap muka fisik, seseorang menyentuh perubahan mimik halus dan keheningan lawan bicara, sehingga secara intuitif merasakan rasa sakit yang ditimbulkan oleh kata-katanya dan mampu menahan diri. Sebaliknya, di ruang digital di mana hanya simbol teks yang melayang di balik layar, keberadaan nyata manusiawi pihak lain tereliminasi.

Akibatnya, meski masing-masing individu hanya mengunggah kritikan yang didorong oleh rasa keadilan semu atau kekesalan sepele, hal itu diamplifikasi oleh algoritma dan berubah menjadi badai kekerasan luar biasa yang menimpa sasaran empuk. Difusi tanggung jawab—berlindung di balik alasan "semua orang juga berkata begitu" dan "saya cuma berkomentar satu kalimat saja"—tiada lain adalah patologi terbesar dalam ruang digital modern saat ini.

Mempertahankan hak berekspresi bebas dan membendung penghakiman massa yang tidak bertanggung jawab bukanlah pilihan hitam-putih yang saling meniadakan. Tanpa upaya gigih setiap individu untuk terus mengasah imajinasi empati bahwa di balik kata-kata tersebut terdapat sosok manusia yang rapuh, kelangsungan ruang publik digital yang sehat mustahil dapat diharapkan.`,
    vocabularyHelp: [
      { word: '希薄化', reading: 'きはくか', meaning: 'penipisan / memudarnya konsentrasi nilai' },
      { word: '捨象', reading: 'しゃしょう', meaning: 'mengabaikan / mengeliminasi aspek tertentu' },
      { word: '二者択一', reading: 'にしゃたくいつ', meaning: 'pilihan dikotomi hitam-putih' },
      { word: '病理', reading: 'びょうり', meaning: 'gejala penyakit patologis sosial' },
    ],
    questions: [
      {
        id: 'dq_n1_4_1',
        question: '対面的な空間と比べたとき、デジタル空間において人々が自制心を失いやすい理由として、筆者は何を挙げているか。',
        choices: [
          '文字の入力速度が遅いため、感情を十分に表現しきれないもどかしさがあるから。',
          '相手の表情や息遣いといった実存的な生々しさが消え、言葉がもたらす痛みを直感しにくくなるから。',
          '匿名性が完全に剥奪され、すべての個人情報が国家権力に監視されているから。',
          'アルゴリズムが特定の意見だけを偏向して遮断し、議論の機会が奪われているから。',
        ],
        correctChoiceIndex: 1,
        explanation: 'Di paragraf ke-2 penulis menjelaskan bahwa di dunia fisik orang melihat mimik dan merasakan luka perkataan sehingga mampu menahan diri, sedangkan di layar digital keberadaan nyata (実存的な生々しさ) terhapus (pilihan 2).',
      },
      {
        id: 'dq_n1_4_2',
        question: 'この文章で筆者が訴えている「健全なデジタル公共圏の存続」のために最も不可欠な条件はどれか。',
        choices: [
          'インターネット上の匿名性を全面禁止し、すべての投稿を実名制に移行すること。',
          '個人の自由な発信を規制し、公的機関がすべての発言内容を事前審査すること。',
          '発言の向こう側に傷つきやすい一人の人間がいるという想像力を個々人が絶えず持ち続けること。',
          '個人の責任を追及することをあきらめ、すべてをAIの自動巡回システムに委ねること。',
        ],
        correctChoiceIndex: 2,
        explanation: 'Di paragraf penutup penulis menyatakan bahwa kuncinya adalah mengasah daya imajinasi bahwa di balik teks ada satu manusia yang bisa terluka (pilihan 3).',
      },
    ],
  },
  // JLPT N3 PASSAGES (読解)
  // ═════════════════════════════════════════════════════════════════
  {
    id: 'dokkai_n3_1',
    level: 'N3',
    dayNumber: 1,
    category: 'chuubun',
    categoryLabel: '中文 (Artikel Budaya Kerja ~400 huruf)',
    title: '日本のビジネス環境における「空気を読む」コミュニケーション',
    sourceType: 'Artikel Budaya Kerja',
    estimatedMinutes: 5,
    passageText: `日本の職場では、言葉に出してはっきりと要求を伝えることよりも、「周囲の状況や相手の気持ちを察して自発的に動くこと」が高く評価される傾向があります。これはいわゆる「空気を読む」と呼ばれるコミュニケーションのあり方です。

例えば、会議中に誰かが困った表情を見せたり、発言に迷ったりしている時、周囲の同僚がその意図を汲み取ってさりげなく助け舟を出すことが期待されます。全てを言葉で指示されなければ動けない社員は、時に「指示待ち」と見なされてしまうこともあります。

しかし一方で、近年では多様な国籍や背景を持つ人々が共に働く職場が増えています。文脈や察する文化だけに頼りすぎると、思わぬ誤解や業務上のトラブルを生む原因にもなりかねません。現代のビジネスにおいては、日本の伝統的な気配りを大切にしつつも、重要な連絡事項や業務の目的は明確な言葉で共有し合うという「二つのバランス」が強く求められています。`,
    translation: `Di tempat kerja Jepang, daripada menyampaikan tuntutan secara terang-terangan dengan kata-kata, terdapat kecenderungan bahwa "memahami situasi sekitar dan perasaan orang lain lalu bergerak atas inisiatif sendiri" lebih dihargai tinggi. Ini adalah cara komunikasi yang dikenal sebagai "kuuki o yomu" (membaca suasana).

Misalnya, saat rapat seseorang menunjukkan raut wajah bingung atau ragu dalam berbicara, rekan kerja di sekitarnya diharapkan menangkap maksud tersebut dan memberikan bantuan secara halus tanpa diminta. Karyawan yang tidak bisa bergerak jika tidak diinstruksikan semuanya dengan kata-kata kadang dianggap sebagai "pasif menunggu perintah".

Namun di sisi lain, dalam beberapa tahun terakhir tempat kerja dengan latar belakang multinasional semakin bertambah. Jika terlalu bergantung pada budaya saling menebak konteks, hal itu bisa memicu kesalahpahaman atau kendala operasional. Dalam dunia bisnis modern, sangat dituntut adanya "keseimbangan di antara keduanya": tetap menjaga kepekaan khas Jepang, sembari menyampaikan hal-hal penting dan tujuan tugas dalam kata-kata yang jelas.`,
    vocabularyHelp: [
      { word: '察する', reading: 'さっする', meaning: 'meraba / menebak perasaan orang lain' },
      { word: '助け舟', reading: 'たすけぶね', meaning: 'bantuan darurat penyelamat' },
      { word: '指示待ち', reading: 'しじまち', meaning: 'pasif menunggu arahan atasan' },
      { word: '気配り', reading: 'きくばり', meaning: 'kepekaan / perhatian halus' },
    ],
    questions: [
      {
        id: 'dq_n3_1_1',
        question: '筆者によると、現代の日本の職場において特に求められていることは何ですか。',
        choices: [
          'すべてを言葉にせず、察する文化だけに徹底して従うこと。',
          '伝統的な気配りと、大事な情報を明確な言葉で伝えることのバランス。',
          '指示があるまで自分の判断で行動しないようにすること。',
          '外国籍の社員に対して日本の古い仕事のやり方を無理に教え込むこと。',
        ],
        correctChoiceIndex: 1,
        explanation: 'Di paragraf terakhir ditegaskan: 「日本の伝統的な気配りを大切にしつつも、重要な連絡事項や業務の目的は明確な言葉で共有し合うという『二つのバランス』が強く求められています」. Jawaban yang tepat adalah pilihan 2.',
      },
    ],
  },
  {
    id: 'dokkai_n3_2',
    level: 'N3',
    dayNumber: 2,
    category: 'jouhou',
    categoryLabel: '情報検索 (Pengumuman Pemeliharaan Server Cloud)',
    title: 'クラウドサーバー定期更新に伴う一時停止のお知らせ',
    sourceType: 'Pemberitahuan Resmi IT',
    estimatedMinutes: 4,
    passageText: `【重要】クラウドサーバー定期更新に伴う一時停止のお知らせ

平素は社内クラウドをご利用いただき誠にありがとうございます。
システムの安定性向上とセキュリティ強化のため、下記の日程で定期更新作業を実施いたします。

■ 停止日時：
11月15日（日）午前1:00 〜 午前5:00（予定）

■ 影響範囲：
・社内共有ドライブへのアクセス不可
・リモートワーク用ポータルのログイン停止

※ 注意事項：
作業開始の30分前までに、編集中のファイルを必ず保存して閉じてください。
万が一作業が午前5:00より延長する場合は、午前4:30までに社内緊急連絡掲示板にてお知らせいたします。`,
    translation: `[PENTING] Pemberitahuan Penghentian Sementara Terkait Pembaruan Berkala Server Cloud

Terima kasih atas penggunaan cloud internal kantor kami.
Demi meningkatkan kestabilan sistem dan penguatan keamanan, pembaruan berkala akan diselenggarakan pada jadwal berikut:

- Waktu Penghentian:
15 November (Minggu) pukul 01:00 dini hari - 05:00 pagi (rencana).

- Area yang Terdampak:
Akses ke shared drive kantor tidak tersedia.
Login portal kerja jarak jauh (remote work) dihentikan sementara.

Poin Perhatian:
Paling lambat 30 menit sebelum pekerjaan dimulai, pastikan untuk menyimpan dan menutup file yang sedang diedit.
Jika ada kemungkinan perpanjangan waktu setelah pukul 05:00 pagi, pengumuman akan disampaikan melalui papan informasi darurat kantor sebelum pukul 04:30 pagi.`,
    vocabularyHelp: [
      { word: '平素', reading: 'へいそ', meaning: 'selama ini / sehari-hari' },
      { word: '安定性', reading: 'あんていせい', meaning: 'kestabilan performa' },
      { word: '掲示板', reading: 'けいじばん', meaning: 'papan pengumuman' },
    ],
    questions: [
      {
        id: 'dq_n3_2_1',
        question: '作業が予定の時間（午前5:00）より長引く可能性がある場合、社員はどうやってそれを知ることができますか。',
        choices: [
          '午前5:00ちょうどに送られるメールを確認する。',
          '午前4:30までに社内の緊急連絡掲示板に掲載されるお知らせを見る。',
          '日曜日の昼12:00まで何もしないで待つ。',
          'IT管理担当者に直接電話をかけて確認する。',
        ],
        correctChoiceIndex: 1,
        explanation: 'Pada bagian catatan (※ 注意事項) tertulis: 「万が一作業が午前5:00より延長する場合は、午前4:30までに社内緊急連絡掲示板にてお知らせいたします」. Pilihan 2 paling akurat.',
      },
    ],
  },

  // ═════════════════════════════════════════════════════════════════
  // JLPT N4 PASSAGES (読解)
  // ═════════════════════════════════════════════════════════════════
  {
    id: 'dokkai_n4_1',
    level: 'N4',
    dayNumber: 1,
    category: 'jouhou',
    categoryLabel: '情報検索 (Aturan Pemilahan Sampah Apartemen)',
    title: 'アパートのごみの出し方ルールについて',
    sourceType: 'Pemberitahuan Warga Apartemen',
    estimatedMinutes: 3,
    passageText: `アパートの住人のみなさまへ

ごみを出すときは、以下の決まりを必ず守ってください。

1. 燃えるごみ（生ごみ、紙くずなど）：
　・収集日：毎週火曜日と金曜日の朝8:30まで
　・指定の黄色い袋に入れて、口をしっかり結んで出してください。

2. 燃えないごみ（ガラス、金属など）：
　・収集日：第2・第4水曜日
　・透明な袋に入れて出してください。

3. ペットボトル・缶：
　・中を水できれいに洗ってから、専用のかごに入れてください。

※ 前の日の夜にごみを出すと、カラスや猫が散らかして近所の迷惑になります。必ず当日の朝8:30までに出してください。`,
    translation: `Kepada Seluruh Penghuni Apartemen:

Saat membuang sampah, harap selalu mematuhi aturan berikut ini:

1. Sampah Mudah Terbakar (sampah dapur, kertas, dll):
- Hari Pengumpulan: Setiap Selasa dan Jumat sebelum jam 08:30 pagi.
- Masukkan ke kantong kuning yang ditentukan dan ikat rapat.

2. Sampah Tidak Mudah Terbakar (kaca, logam, dll):
- Hari Pengumpulan: Rabu ke-2 dan ke-4 setiap bulan.
- Masukkan ke kantong transparan (bening).

3. Botol Plastik & Kaleng:
- Cuci bersih bagian dalamnya dengan air, lalu masukkan ke keranjang khusus.

Perhatian: Jika membuang sampah pada malam hari sebelumnya, burung gagak atau kucing akan mengacak-acaknya sehingga mengganggu tetangga. Pastikan membuang pada hari H sebelum pukul 08:30 pagi.`,
    vocabularyHelp: [
      { word: '住人', reading: 'じゅうにん', meaning: 'penghuni apartemen' },
      { word: '燃えるごみ', reading: 'もえるごみ', meaning: 'sampah mudah terbakar / organik' },
      { word: '透明', reading: 'とうめい', meaning: 'transparan / bening' },
    ],
    questions: [
      {
        id: 'dq_n4_1_1',
        question: 'ペットボトルや缶を捨てるとき、最初に何をしなければなりませんか。',
        choices: [
          '黄色い指定のごみ袋に入れる。',
          '前の日の夜にアパートの前に置いておく。',
          '中を水できれいに洗う。',
          '火曜日か金曜日の朝に出す。',
        ],
        correctChoiceIndex: 2,
        explanation: 'Pada poin nomor 3 tertulis: 「中を水できれいに洗ってから、専用のかごに入れてください」. Tindakan pertama adalah mencucinya dengan air (pilihan 3).',
      },
    ],
  },
  {
    id: 'dokkai_n4_2',
    level: 'N4',
    dayNumber: 2,
    category: 'tanbun',
    categoryLabel: '短文 (Catatan Pengalaman Festival Musim Panas)',
    title: '日本の夏祭りに参加した思い出',
    sourceType: 'Buku Harian / Esai Pengalaman',
    estimatedMinutes: 3,
    passageText: `先週の土曜日、近所の神社で行われた夏祭りに友達と一緒に行きました。

会場にはたくさんの屋台が並んでいて、たこ焼きや焼きそばのいい匂いがしていました。私は初めて浴衣を着て歩いたので、少し歩きにくかったですが、とても特別な気分でした。

夜の8時になると、近くの川からきれいな花火が打ち上げられました。空いっぱいに広がる色とりどりの光を見て、周りの人たちからも大きな歓声が上がっていました。日本の夏を感じることができて、本当に素晴らしい思い出になりました。`,
    translation: `Hari Sabtu minggu lalu, saya pergi bersama teman ke festival musim panas (natsu matsuri) yang diadakan di kuil dekat rumah.

Di lokasi acara berjejer banyak kedai makanan (yatai), dan tercium aroma lezat dari takoyaki dan yakisoba. Karena ini pertama kalinya saya mengenakan yukata, agak sedikit sulit untuk berjalan, tetapi rasanya sangat istimewa.

Tepat pukul 8 malam, kembang api yang indah dinyalakan dari sungai terdekat. Melihat cahaya warna-warni yang menyebar di angkasa, sorak-sorai gembira terdengar dari orang-orang di sekitar. Saya bisa merasakan musim panas khas Jepang dan menjadi kenangan yang sangat berharga.`,
    vocabularyHelp: [
      { word: '神社', reading: 'じんじゃ', meaning: 'kuil Shinto' },
      { word: '屋台', reading: 'やたい', meaning: 'kedai gerobak makanan kaki lima' },
      { word: '歓声', reading: 'かんせい', meaning: 'sorak-sorai kegembiraan' },
    ],
    questions: [
      {
        id: 'dq_n4_2_1',
        question: '筆者は夏祭りで何が一番特別だと感じましたか。',
        choices: [
          'たこ焼きを一人で全部食べたこと。',
          '浴衣を着て友達と花火を見た体験。',
          '歩きやすくて便利な靴を買ったこと。',
          '川で泳いで魚を捕まえたこと。',
        ],
        correctChoiceIndex: 1,
        explanation: 'Penulis mengenakan pakaian tradisional yukata dan menikmati keindahan kembang api musim panas bersama teman (pilihan 2).',
      },
    ],
  },

  // ═════════════════════════════════════════════════════════════════
  // JLPT N5 PASSAGES (読解)
  // ═════════════════════════════════════════════════════════════════
  {
    id: 'dokkai_n5_1',
    level: 'N5',
    dayNumber: 1,
    category: 'jouhou',
    categoryLabel: '情報検索 (Pemberitahuan Kafe Sakura)',
    title: 'カフェさくら 営業時間のお知らせ',
    sourceType: 'Pemberitahuan Papan Toko',
    estimatedMinutes: 2,
    passageText: `カフェさくらへ ようこそ！

【月曜日 〜 金曜日】
・午前 8:00 〜 午後 7:00
・ランチセット（サンドイッチ ＋ コーヒー）：11:30 〜 14:00

【土曜日・日曜日】
・午前 9:00 〜 午後 6:00

※ 毎週水曜日はお休みです。
おいしいコーヒーと手作りのケーキを用意してお待ちしています。`,
    translation: `Selamat Datang di Kafe Sakura!

[Senin - Jumat]
- Pukul 08:00 pagi - 19:00 malam
- Paket Makan Siang (Sandwich + Kopi): 11:30 - 14:00

[Sabtu & Minggu]
- Pukul 09:00 pagi - 18:00 sore

Perhatian: Setiap hari Rabu LIBUR (tutup).
Kami menanti kehadiran Anda dengan kopi yang nikmat dan kue buatan sendiri.`,
    vocabularyHelp: [
      { word: '営業時間', reading: 'えいぎょうじかん', meaning: 'jam operasional toko' },
      { word: 'お休み', reading: 'おやすみ', meaning: 'hari libur toko' },
      { word: '手作り', reading: 'てづくり', meaning: 'buatan tangan / homemade' },
    ],
    questions: [
      {
        id: 'dq_n5_1_1',
        question: 'カフェさくらが閉まっている（休み）の日はいつですか。',
        choices: [
          '日曜日',
          '水曜日',
          '土曜日',
          '月曜日',
        ],
        correctChoiceIndex: 1,
        explanation: 'Pada bagian catatan tertulis: 「※ 毎週水曜日はお休みです」. Jadi hari libur toko adalah hari Rabu (pilihan 2).',
      },
    ],
  },
  {
    id: 'dokkai_n5_2',
    level: 'N5',
    dayNumber: 2,
    category: 'tanbun',
    categoryLabel: '短文 (Email Mengajak Belajar)',
    title: '田中さんからのメール',
    sourceType: 'Surel Pribadi Singkat',
    estimatedMinutes: 2,
    passageText: `ケンさん、こんにちは。田中です。

明日の土曜日の午後、時間がありますか。
来週の日本語のテストのために、図書館で一緒に勉強しませんか。
私は午後2時から4時まで図書館にいます。
もし来ることができたら、メールをください。待っています。`,
    translation: `Ken-san, halo. Ini Tanaka.

Besok hari Sabtu siang apakah ada waktu senggang?
Demi persiapan ujian bahasa Jepang minggu depan, maukah belajar bersama di perpustakaan?
Saya ada di perpustakaan dari jam 2 sampai jam 4 sore.
Kalau kamu bisa datang, tolong kirimi saya email ya. Saya tunggu.`,
    vocabularyHelp: [
      { word: '午後', reading: 'ごご', meaning: 'siang / sore (p.m.)' },
      { word: '図書館', reading: 'としょかん', meaning: 'perpustakaan' },
      { word: '一緒', reading: 'いっしょ', meaning: 'bersama-sama' },
    ],
    questions: [
      {
        id: 'dq_n5_2_1',
        question: '田中さんは何のためにケンさんを誘っていますか。',
        choices: [
          '映画を見に行くため。',
          'テストの勉強を一緒にするため。',
          'カフェでケーキを食べるため。',
          '新しい本を買うため。',
        ],
        correctChoiceIndex: 1,
        explanation: 'Tanaka menulis: 「来週の日本語のテストのために、図書館で一緒に勉強しませんか」 (Mau belajar bersama demi ujian bahasa Jepang minggu depan?). Jawaban tepat pilihan 2.',
      },
    ],
  },
];
