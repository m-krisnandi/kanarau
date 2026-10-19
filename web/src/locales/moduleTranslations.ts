import { DOKKAI_PASSAGE_TRANSLATIONS } from './dokkaiTranslations';
import type { Language } from './translations';
import type { ChoukaiQuestion, BunpoUnit, DokkaiPassage } from '@/types/jlptModules';

// ─── CHOUKAI LOCALIZATIONS ──────────────────────────────────
export const CHOUKAI_TRANSLATIONS: Record<string, {
  title: Record<Language, string>;
  typeLabel: Record<Language, string>;
  situation: Record<Language, string>;
  explanation: Record<Language, string>;
  keyPoints: Record<Language, string[]>;
}> = {
  // N5 Choukai
  choukai_n5_1: {
    title: {
      id: 'Kadai Rikai N5: Belanja di Supermarket',
      en: 'Kadai Rikai N5: Supermarket Shopping',
      my: 'Kadai Rikai N5 - ကုန်တိုက်တွင် ဈေးဝယ်ခြင်း',
    },
    typeLabel: {
      id: '課題理解 (Aksi yang Harus Dilakukan)',
      en: 'Task Understanding (Required Action)',
      my: '課題理解 (လုပ်ဆောင်ရမည့် လုပ်ငန်းစဉ်)',
    },
    situation: {
      id: 'Di rumah, ibu dan anak laki-lakinya berbicara tentang barang yang harus dibeli di supermarket.',
      en: 'At home, a mother and her son discuss items to buy at the supermarket.',
      my: 'အိမ်တွင် မိခင်နှင့်သားတို့သည် ကုန်တိုက်တွင် ဝယ်ယူရမည့်ပစ္စည်းများကို ဆွေးနွေးနေကြသည်။',
    },
    explanation: {
      id: 'Ibu meminta membeli 2 botol susu dan 1 pak telur. Roti tidak perlu dibeli karena masih ada. Jawaban yang benar adalah pilihan 1.',
      en: 'The mother requests 2 bottles of milk and 1 pack of eggs. Bread is not needed because there is still some left. Correct answer is option 1.',
      my: 'မိခင်က နို့ ၂ ဘူးနှင့် ကြက်ဥ ၁ ကတ် ဝယ်ရန်ပြောသည်။ ပေါင်မုန့်ကျန်ရှိသေးသဖြင့် မဝယ်ရန်ပြောသည်။ မှန်ကန်သောရွေးချယ်မှုမှာ ရွေးချယ်မှု ၁ ဖြစ်သည်။',
    },
    keyPoints: {
      id: [
        'Hitungan barang: 2 botol (2本 - nihon), 1 pak (1パック - wan pakku).',
        'Barang yang dibatalkan: roti (pan).',
      ],
      en: [
        'Counter words: 2 bottles (2本 - nihon), 1 pack (1パック - wan pakku).',
        'Cancelled item: bread (pan).',
      ],
      my: [
        'အရေအတွက်ပြစကားလုံးများ - နို့ ၂ ဘူး (2本)၊ ကြက်ဥ ၁ ကတ် (1パック)။',
        'ဖျက်သိမ်းလိုက်သောပစ္စည်း - ပေါင်မုန့်။',
      ],
    },
  },
  choukai_n5_2: {
    title: {
      id: 'Point Rikai N5: Janji Bertemu di Stasiun',
      en: 'Point Rikai N5: Meeting Appointment at the Station',
      my: 'Point Rikai N5 - ဘူတာတွင် တွေ့ဆုံရန် ချိန်းဆိုခြင်း',
    },
    typeLabel: {
      id: 'ポイント理解 (Alasan & Informasi Waktu)',
      en: 'Point Understanding (Reason & Time)',
      my: 'ポイント理解 (အကြောင်းရင်းနှင့် အချိန်အချက်အလက်)',
    },
    situation: {
      id: 'Melalui telepon, seorang wanita dan pria membicarakan janji temu nonton film besok.',
      en: 'Over the phone, a woman and a man talk about their movie meeting tomorrow.',
      my: 'ဖုန်းဖြင့် အမျိုးသမီးနှင့် အမျိုးသားတို့ မနက်ဖြန် ရုပ်ရှင်ကြည့်ရန် ချိန်းဆိုမှုကို ဆွေးနွေးနေကြသည်။',
    },
    explanation: {
      id: 'Karena film mulai pukul 14:00 dan besok hujan, mereka sepakat bertemu pukul 13:30 (午後1時半) di depan toko buku stasiun (pilihan 1).',
      en: 'Since the movie starts at 2:00 PM and rain is expected, they agree to meet at 1:30 PM (午後1時半) in front of the station bookstore (Option 1).',
      my: 'ရုပ်ရှင်မှာ နေ့လယ် ၂ နာရီတွင်စတင်ပြီး မိုးရွာမည်ဖြစ်သဖြင့် ၁ နာရီခွဲ (午後1時半) တွင် ဘူတာစာအုပ်ဆိုင်ရှေ့၌ တွေ့ဆုံရန် သဘောတူခဲ့သည် (ရွေးချယ်မှု ၁)။',
    },
    keyPoints: {
      id: [
        'Waktu: film jam 2, janji temu jam 1:30 siang (午後1時半).',
        'Lokasi diubah ke depan toko buku stasiun karena faktor hujan.',
      ],
      en: [
        'Time: movie at 2 PM, meeting at 1:30 PM (午後1時半).',
        'Location changed to the bookstore front due to rain.',
      ],
      my: [
        'အချိန် - ရုပ်ရှင် ၂ နာရီ၊ ချိန်းဆိုချိန် နေ့လယ် ၁ နာရီခွဲ (午後1時半)။',
        'မိုးရွာမည်ဖြစ်သဖြင့် ဘူတာရုံစာအုပ်ဆိုင်ရှေ့သို့ နေရာပြောင်းလဲခဲ့သည်။',
      ],
    },
  },

  // N4 Choukai
  choukai_n4_1: {
    title: {
      id: 'Kadai Rikai N4: Pengiriman Paket di Kantor Pos',
      en: 'Kadai Rikai N4: Parcel Delivery at Post Office',
      my: 'Kadai Rikai N4 - စာတိုက်တွင် ပါဆယ်ထုပ် ပို့ဆောင်ခြင်း',
    },
    typeLabel: {
      id: '課題理解 (Aksi yang Harus Dilakukan)',
      en: 'Task Understanding (Required Action)',
      my: '課題理解 (လုပ်ဆောင်ရမည့် လုပ်ငန်းစဉ်)',
    },
    situation: {
      id: 'Di kantor pos, seorang pria dan petugas pos membicarakan pengiriman paket barang mudah pecah.',
      en: 'At the post office, a man and a postal clerk discuss sending a fragile parcel.',
      my: 'စာတိုက်တွင် အမျိုးသားနှင့် စာတိုက်ဝန်ထမ်းတို့ ကွဲလွယ်သောပစ္စည်းပါဆယ်ထုပ် ပို့ဆောင်ခြင်းကို ဆွေးနွေးနေကြသည်။',
    },
    explanation: {
      id: 'Petugas pos akan menempelkan perangko, namun meminta pria menempelkan stiker merah perhatian barang pecah belah pada paket (pilihan 1).',
      en: 'The clerk handles the stamps, but asks the man to place the red "Fragile Item" sticker on the parcel (Option 1).',
      my: 'စာတိုက်ဝန်ထမ်းက တံဆိပ်ခေါင်းကို ကပ်ပေးမည်ဖြစ်သော်လည်း ပါဆယ်ထုပ်ပေါ်တွင် "ကွဲလွယ်သောပစ္စည်း" အနီရောင်စတစ်ကာကို အမျိုးသားအား ကပ်ခိုင်းသည် (ရွေးချယ်မှု ၁)။',
    },
    keyPoints: {
      id: [
        'Bedakan aksi petugas vs instruksi yang harus dilakukan pengirim.',
        'Kosakata: 「割れ物 (waremono - barang pecah belah)」, 「貼る (haru - menempelkan)」.',
      ],
      en: [
        'Distinguish clerk action vs sender instruction.',
        'Key vocabulary: 「割れ物 (fragile)」, 「貼る (to stick/affix)」.',
      ],
      my: [
        'ဝန်ထမ်း၏လုပ်ဆောင်ချက်နှင့် ပို့သူလုပ်ရမည့်အချက်ကို ခွဲခြားမှတ်သားပါ။',
        'အဓိကဝေါဟာရ - 「割れ物 (ကွဲလွယ်သောပစ္စည်း)」၊ 「貼る (ကပ်သည်)」။',
      ],
    },
  },
  choukai_n4_2: {
    title: {
      id: 'Point Rikai N4: Rencana Akhir Pekan',
      en: 'Point Rikai N4: Weekend Schedule & Exam Study',
      my: 'Point Rikai N4 - စနေတနင်္ဂနွေ အစီအစဉ်နှင့် စာမေးပွဲပြင်ဆင်မှု',
    },
    typeLabel: {
      id: 'ポイント理解 (Alasan Utama Pembicara)',
      en: 'Point Understanding (Speaker Main Reason)',
      my: 'ポイント理解 (ပြောသူ၏ အဓိက အကြောင်းရင်း)',
    },
    situation: {
      id: 'Di ruang kelas, seorang mahasiswa mengajak mahasiswi pergi ke pantai di hari Minggu.',
      en: 'In the classroom, a male student invites a female classmate to the beach on Sunday.',
      my: 'စာသင်ခန်းတွင် ကျောင်းသားက ကျောင်းသူအား တနင်္ဂနွေနေ့၌ ကမ်းခြေသို့ အတူသွားရန် ဖိတ်ခေါ်နေသည်။',
    },
    explanation: {
      id: 'Karena hari Sabtu ada kerja paruh waktu penuh dan Senin pagi ada tes tata bahasa, mahasiswi memilih belajar di rumah pada hari Minggu (pilihan 3).',
      en: 'Since Saturday is filled with part-time work and Monday morning has a grammar test, she decides to study at home on Sunday (Option 3).',
      my: 'စနေနေ့တွင် အချိန်ပိုင်းအလုပ်ရှိပြီး တနင်္လာနေ့နံနက်တွင် သဒ္ဒါစာမေးပွဲရှိသောကြောင့် တနင်္ဂနွေနေ့တွင် အိမ်၌ စာကျက်ရန် ရွေးချယ်ခဲ့သည် (ရွေးချယ်မှု ၃)။',
    },
    keyPoints: {
      id: [
        'Sabtu: kerja paruh waktu penuh (アルバイト).',
        'Minggu: belajar di rumah untuk tes Senin (テスト勉強).',
      ],
      en: [
        'Saturday: full part-time work (アルバイト).',
        'Sunday: study at home for Monday test (テスト勉強).',
      ],
      my: [
        'စနေနေ့ - တစ်နေ့လုံး အချိန်ပိုင်းအလုပ် (アルバイト)။',
        'တနင်္ဂနွေနေ့ - စာမေးပွဲအတွက် အိမ်၌ စာကျက်ခြင်း (テスト勉強)။',
      ],
    },
  },

  // N3 Choukai
  choukai_n3_1: {
    title: {
      id: 'Kadai Rikai N3: Pengumpulan Tugas & Berkas Beasiswa',
      en: 'Kadai Rikai N3: Scholarship Document Submission',
      my: 'Kadai Rikai N3 - ပညာသင်ဆု လျှောက်ထားလွှာ တင်သွင်းခြင်း',
    },
    typeLabel: {
      id: '課題理解 (Aksi yang Harus Dilakukan)',
      en: 'Task Understanding (Required Action)',
      my: '課題理解 (လုပ်ဆောင်ရမည့် လုပ်ငန်းစဉ်)',
    },
    situation: {
      id: 'Di kantor urusan mahasiswa internasional, staf wanita memeriksa berkas beasiswa seorang mahasiswa.',
      en: 'At the international student office, a female staff member checks a student scholarship application.',
      my: 'နိုင်ငံတကာကျောင်းသားရေးရာရုံးတွင် အမျိုးသမီးဝန်ထမ်းက ကျောင်းသားတစ်ဦး၏ ပညာသင်ဆုစာရွက်စာတမ်းများကို စစ်ဆေးနေသည်။',
    },
    explanation: {
      id: 'Salinan surat domisili sudah kadaluarsa (harus dalam 3 bulan terakhir). Mahasiswa harus segera pergi ke kelurahan mengambil surat domisili baru (pilihan 1).',
      en: 'The residence certificate copy was expired (must be within 3 months). The student must immediately go to city hall to get a new one (Option 1).',
      my: 'နေထိုင်ခွင့်လက်မှတ်မိတ္တူ သက်တမ်းကုန်နေသဖြင့် (၃ လအတွင်းဖြစ်ရမည်) ကျောင်းသားသည် မြို့တော်ခန်းမသို့ချက်ချင်းသွား၍ အသစ်ထုတ်ယူရမည် (ရွေးချယ်မှု ၁)။',
    },
    keyPoints: {
      id: [
        'Aksi utama pertama: 「市役所へすぐ行ってきます」-> pergi ke kantor kelurahan.',
        'Syarat dokumen: surat domisili harus diterbitkan dalam 3 bulan terakhir.',
      ],
      en: [
        'Primary immediate action: 「市役所へすぐ行ってきます」-> visit city hall.',
        'Document requirement: certificate must be issued within 3 months.',
      ],
      my: [
        'ပထမဆုံးလုပ်ရမည့်အရာ - မြို့တော်ခန်းမသို့သွား၍ နေထိုင်ခွင့်လက်မှတ် အသစ်ထုတ်ယူခြင်း။',
        'စာရွက်စာတမ်းသတ်မှတ်ချက် - ၃ လအတွင်း ထုတ်ယူထားသော နေထိုင်ခွင့်လက်မှတ်ဖြစ်ရမည်။',
      ],
    },
  },
  choukai_n3_2: {
    title: {
      id: 'Point Rikai N3: Memilih Tiket Kereta Liburan',
      en: 'Point Rikai N3: Selecting Vacation Shinkansen Ticket',
      my: 'Point Rikai N3 - ခရီးသွား ရှင်ကန်းဆန် ရထားလက်မှတ် ရွေးချယ်ခြင်း',
    },
    typeLabel: {
      id: 'ポイント理解 (Alasan Utama Pembicara)',
      en: 'Point Understanding (Speaker Main Reason)',
      my: 'ポイント理解 (ပြောသူ၏ အဓိက အကြောင်းရင်း)',
    },
    situation: {
      id: 'Di agen perjalanan, seorang pria memilih jenis kursi Shinkansen untuk liburan keluarga.',
      en: 'At a travel agency, a man chooses the Shinkansen seat category for a family trip.',
      my: 'ခရီးသွားအေဂျင်စီတွင် အမျိုးသားတစ်ဦး မိသားစုခရီးစဉ်အတွက် ရှင်ကန်းဆန်ထိုင်ခုံအမျိုးအစားကို ရွေးချယ်နေသည်။',
    },
    explanation: {
      id: 'Pria memilih kursi reserved biasa baris depan karena ruang kaki luas dan menghemat lebih dari 10.000 yen untuk 4 anggota keluarga (pilihan 2).',
      en: 'The man chooses regular front-row reserved seats because they offer ample legroom and save over 10,000 yen for 4 family members (Option 2).',
      my: 'အမျိုးသားသည် ရှေ့ဆုံးတန်းရိုးရိုးသီးသန့်ခုံတွင် ခြေထောက်ချရန် နေရာကျယ်ဝန်းပြီး မိသားစု ၄ ဦးအတွက် ငွေ ၁ သောင်းကျော် သက်သာသောကြောင့် ရွေးချယ်ခဲ့သည် (ရွေးချယ်မှု ၂)။',
    },
    keyPoints: {
      id: [
        'Kenyamanan vs hemat biaya: baris depan kursi biasa sudah sangat lega dan jauh lebih hemat.',
        'Opsi kelas eksekutif Green Car dibatalkan karena harganya lebih tinggi.',
      ],
      en: [
        'Comfort vs budget: front-row standard seats are spacious and cost-effective.',
        'Green Car executive class is declined due to extra cost.',
      ],
      my: [
        'သက်တောင့်သက်သာရှိမှုနှင့် ကုန်ကျစရိတ် - ရှေ့ဆုံးတန်းရိုးရိုးခုံသည် နေရာကျယ်ပြီး ကုန်ကျစရိတ်သက်သာသည်။',
        'Green Car အထူးတန်းကို ကုန်ကျစရိတ်များသဖြင့် ပယ်ဖျက်ခဲ့သည်။',
      ],
    },
  },

  // N2 Choukai
  choukai_1: {
    title: {
      id: 'Kadai Rikai 1: Persiapan Seminar Bisnis',
      en: 'Kadai Rikai 1: Business Seminar Preparation',
      my: 'Kadai Rikai 1 - လုပ်ငန်းဆိုင်ရာ ဆွေးနွေးပွဲ ပြင်ဆင်မှု',
    },
    typeLabel: {
      id: '課題理解 (Aksi yang Harus Dilakukan)',
      en: 'Task Understanding (Required Action)',
      my: '課題理解 (လုပ်ဆောင်ရမည့် လုပ်ငန်းစဉ်)',
    },
    situation: {
      id: 'Di kantor, atasan wanita dan bawahan pria sedang membicarakan persiapan seminar minggu depan.',
      en: 'At the office, a female supervisor and a male subordinate are discussing preparations for next week\'s seminar.',
      my: 'ရုံးတွင် အမျိုးသမီး အထက်လူကြီးနှင့် အမျိုးသား လက်အောက်ငယ်သားတို့ လာမည့်အပတ် ဆွေးနွေးပွဲ ပြင်ဆင်မှုအကြောင်း ဆွေးနွေးနေကြသည်။',
    },
    explanation: {
      id: 'Atasan berkata: 「印刷はいったん止めて」(Hentikan cetak dokumen dulu), dan bawahan merespons: 「すぐ印刷をストップします」lalu「印刷機を止めた後、機材の確認に行ってまいります」. Jadi tindakan PERTAMA yang harus dilakukan adalah mematikan mesin cetak (pilihan 2).',
      en: 'The supervisor says: 「印刷はいったん止めて」(Stop printing the documents for now), and the subordinate responds: 「すぐ印刷をストップします」then「印刷機を止めた後、機材の確認に行ってまいります」. Therefore, the FIRST action to take is stopping the printer (Option 2).',
      my: 'အထက်လူကြီးက 「印刷はいったん止めて」(စာရွက်စာတမ်း ပရင့်ထုတ်ခြင်းကို ခေတ္တရပ်ထားပါ) ဟု ပြောပြီး လက်အောက်ငယ်သားက 「すぐ印刷をストップします」ထို့နောက် 「印刷機を止めた後、機材の確認に行ってまいります」ဟု ပြန်လည်ဖြေကြားသည်။ ထို့ကြောင့် ပထမဆုံး လုပ်ဆောင်ရမည့်အရာမှာ ပရင့်စက်ကို ရပ်တန့်ခြင်း ဖြစ်သည် (ရွေးချယ်မှု ၂)။',
    },
    keyPoints: {
      id: [
        'Perhatikan kata kunci urutan waktu: 「まず (pertama-tama)」vs 「〜た後で (setelah itu)」',
        'Atasan meminta: 「印刷はいったん止めて」-> Aksi mendesak utama',
      ],
      en: [
        'Notice temporal sequence keywords: 「まず (first of all)」vs 「〜た後で (after that)」',
        'Supervisor requests: 「印刷はいったん止めて」-> Primary urgent action',
      ],
      my: [
        'အချိန်အစီအစဉ်ပြ စကားလုံးများကို သတိပြုပါ - 「まず (ပထမဆုံး)」နှင့် 「〜た後で (ထိုနောက်)」',
        'အထက်လူကြီး တောင်းဆိုချက် - 「印刷はいったん止めて」-> အဓိက အရေးတကြီး လုပ်ဆောင်ချက်',
      ],
    },
  },
  choukai_2: {
    title: {
      id: 'Point Rikai 2: Memilih Laptop Kerja',
      en: 'Point Rikai 2: Choosing a Work Laptop',
      my: 'Point Rikai 2 - အလုပ်သုံး လက်ပ်တော့ပ် ရွေးချယ်ခြင်း',
    },
    typeLabel: {
      id: 'ポイント理解 (Alasan Utama Pembicara)',
      en: 'Point Understanding (Speaker\'s Main Reason)',
      my: 'ポイント理解 (ပြောသူ၏ အဓိက အကြောင်းရင်း)',
    },
    situation: {
      id: 'Di toko elektronik, seorang pelanggan wanita dan staf toko sedang membicarakan laptop.',
      en: 'At an electronics store, a female customer and a store clerk are discussing laptop computers.',
      my: 'လျှပ်စစ်ပစ္စည်းအရောင်းဆိုင်တွင် အမျိုးသမီးဖောက်သည်နှင့် အရောင်းဝန်ထမ်းတို့ လက်ပ်တော့ပ်အကြောင်း ဆွေးနွေးနေကြသည်။',
    },
    explanation: {
      id: 'Pelanggan wanita menekankan: 「毎日営業で持ち歩くので、重いのは困る」(karena dibawa sales harian, keberatan jika berat) dan begitu ditawari laptop 800g dia berkata: 「あ、すごく軽いですね！これにします」. Alasan utamanya adalah bobot yang sangat ringan untuk mobilitas kerja.',
      en: 'The female customer emphasizes: 「毎日営業で持ち歩くので、重いのは困る」(since I carry it for sales daily, heavy is problematic) and upon being offered the 800g laptop she says: 「あ、すごく軽いですね！これにします」. The primary reason is its lightweight portability.',
      my: 'အမျိုးသမီးဖောက်သည်က 「毎日営業で持ち歩くので、重いのは困る」(နေ့စဉ် အရောင်းအလုပ်အတွက် သယ်ယူရသဖြင့် လေးလံပါက အဆင်မပြေပါ) ဟု ပြောပြီး ၈၀၀ ဂရမ်ရှိသော လက်ပ်တော့ပ်ကို ညွှန်းသောအခါ 「あ、すごく軽いですね！これにします」ဟု ပြောသည်။ အဓိက အကြောင်းရင်းမှာ သယ်ယူရလွယ်ကူသော အလွန်ပေါ့ပါးသည့် အလေးချိန်ကြောင့် ဖြစ်သည်။',
    },
    keyPoints: {
      id: [
        'Jebakan CPU tinggi adalah milik laptop hitam, bukan laptop putih yang akhirnya dibeli.',
        'Fokus pertanyaan adalah "alasan memilih laptop putih".',
      ],
      en: [
        'The high CPU trap refers to the black laptop, not the white one she ultimately purchased.',
        'Question focus is "reason for choosing the white laptop".',
      ],
      my: [
        'မြင့်မားသော CPU စွမ်းဆောင်ရည်သည် အနက်ရောင်လက်ပ်တော့ပ်၏ အချက်ဖြစ်ပြီး သူမဝယ်ယူသည့် အဖြူရောင်လက်ပ်တော့ပ် မဟုတ်ပါ။',
        'မေးခွန်း၏ အဓိကအချက်မှာ "အဖြူရောင်လက်ပ်တော့ပ်ကို ရွေးချယ်ရသည့် အကြောင်းရင်း" ဖြစ်သည်။',
      ],
    },
  },
  choukai_3: {
    title: {
      id: 'Sokuji Outou 3: Keigo Sopan Menawarkan Diri',
      en: 'Sokuji Outou 3: Polite Keigo for Volunteering',
      my: 'Sokuji Outou 3 - စေတနာအလျောက် ကူညီရန် ယဉ်ကျေးစွာ ကမ်းလှမ်းခြင်း',
    },
    typeLabel: {
      id: '即時応答 (Respon Cepat)',
      en: 'Quick Response (Immediate Reply)',
      my: '即時応答 (ချက်ချင်း တုံ့ပြန်မှု)',
    },
    situation: {
      id: 'Di kantor, seorang bawahan menawarkan diri kepada atasan untuk menangani suatu tugas.',
      en: 'At the office, a subordinate volunteers to handle a task for their supervisor.',
      my: 'ရုံးတွင် လက်အောက်ငယ်သားတစ်ဦးက အထက်လူကြီးထံ လုပ်ငန်းတာဝန် ယူဆောင်ရန် ကမ်းလှမ်းနေသည်။',
    },
    explanation: {
      id: 'Pola 「〜させていただけないでしょうか」adalah bentuk sopan tingkat tinggi (kenjougo) untuk meminta izin melakukan sesuatu (menawarkan diri). Balasan atasan yang alami menerima tawaran bawahan adalah 「そうか、じゃあ君に頼んでもいいかな」(pilihan 2).',
      en: 'The pattern 「〜させていただけないでしょうか」is high-level humble keigo (kenjougo) asking permission to do something (volunteering). The natural response from a supervisor accepting the offer is 「そうか、じゃあ君に頼んでもいいかな」(Option 2).',
      my: '「〜させていただけないでしょうか」သဒ္ဒါပုံစံသည် တစ်စုံတစ်ခု လုပ်ဆောင်ရန် ခွင့်ပြုချက်တောင်းခံသည့် (စေတနာအလျောက် တာဝန်ယူသည့်) အဆင့်မြင့် ယဉ်ကျေးသော kenjougo ပုံစံဖြစ်သည်။ အထက်လူကြီးက သဘောတူ လက်ခံသည့် သဘာဝကျသော တုံ့ပြန်မှုမှာ 「そうか、じゃあ君に頼んでもいいかな」ဖြစ်သည်။',
    },
    keyPoints: {
      id: [
        '「お〜させていただけないでしょうか」= Meminta izin untuk mengerjakan',
        'Respon yang tepat dari atasan: memberikan izin / tugas kepada bawahan',
      ],
      en: [
        '「お〜させていただけないでしょうか」= Requesting permission to handle the task',
        'Appropriate supervisor response: granting permission / delegating the task',
      ],
      my: [
        '「お〜させていただけないでしょうか」= တာဝန်ယူ လုပ်ဆောင်ခွင့် တောင်းခံခြင်း',
        'အထက်လူကြီး၏ သင့်လျော်သော တုံ့ပြန်မှု - ခွင့်ပြုချက်ပေးခြင်း / တာဝန်ပေးအပ်ခြင်း',
      ],
    },
  },
  choukai_4: {
    title: {
      id: 'Point Rikai 4: Kebiasaan Bekerja Jarak Jauh (Telework)',
      en: 'Point Rikai 4: Teleworking Habits & Focus',
      my: 'Point Rikai 4 - အိမ်မှအလုပ်လုပ်ခြင်း အလေ့အကျင့်နှင့် အာရုံစိုက်မှု',
    },
    typeLabel: {
      id: 'ポイント理解 (Tujuan Utama & Poin Penting)',
      en: 'Point Understanding (Main Purpose & Key Point)',
      my: 'ポイント理解 (အဓိကရည်ရွယ်ချက်နှင့် အဓိကအချက်)',
    },
    situation: {
      id: 'Di program TV, seorang pakar berbicara tentang menjaga konsentrasi saat kerja jarak jauh (WFH).',
      en: 'On a TV program, an expert talks about maintaining concentration during telework.',
      my: 'တီဗွီအစီအစဉ်တွင် ကျွမ်းကျင်သူတစ်ဦးက အိမ်မှအလုပ်လုပ်စဉ် အာရုံစူးစိုက်မှုထိန်းသိမ်းခြင်းအကြောင်း ဆွေးနွေးနေသည်။',
    },
    explanation: {
      id: 'Pakar mengatakan hal paling efektif adalah membagi batasan waktu secara tegas antara kerja dan kehidupan pribadi (pilihan 3).',
      en: 'The expert states the most effective measure is setting a clear temporal boundary between work and private life (Option 3).',
      my: 'ကျွမ်းကျင်သူက အထိရောက်ဆုံးအရာမှာ အလုပ်ချိန်နှင့် ကိုယ်ပိုင်ဘဝကို အချိန်အားဖြင့် တိကျစွာ ခွဲခြားသတ်မှတ်ခြင်းဖြစ်သည်ဟု ဆိုသည် (ရွေးချယ်မှု ၃)။',
    },
    keyPoints: {
      id: [
        'Pola pembicara: menyebut alternatif lalu menegaskan yang paling efektif.',
        'Kata kunci: 「時間的メリハリ (ritme ketegasan waktu)」.',
      ],
      en: [
        'Speaker pattern: mention alternatives then emphasize the most effective method.',
        'Key term: 「時間的メリハリ (temporal distinction)」.',
      ],
      my: [
        'ပြောသူ၏ပုံစံ - အခြားနည်းလမ်းများကို ဖော်ပြပြီးနောက် အထိရောက်ဆုံးအချက်ကို အလေးပေးဖော်ပြသည်။',
        'အဓိကဝေါဟာရ - 「時間的メリハリ (အချိန်တိကျစွာ ပိုင်းခြားမှု)」။',
      ],
    },
  },
  choukai_5: {
    title: {
      id: 'Sokuji Outou 5: Tanggapan terhadap Keterlambatan',
      en: 'Sokuji Outou 5: Response to Train Delay Notice',
      my: 'Sokuji Outou 5 - ရထားနောက်ကျကြောင်း အကြောင်းကြားချက်အပေါ် တုံ့ပြန်မှု',
    },
    typeLabel: {
      id: '即時応答 (Respon Cepat)',
      en: 'Quick Response (Immediate Reply)',
      my: '即時応答 (ချက်ချင်း တုံ့ပြန်မှု)',
    },
    situation: {
      id: 'Di tempat kerja, respon saat menerima kabar keterlambatan dari rekan kerja karena kendala kereta.',
      en: 'At the workplace, responding to a colleague reporting a train delay.',
      my: 'လုပ်ငန်းခွင်တွင် ရထားပြဿနာကြောင့် နောက်ကျမည်ဟု လုပ်ဖော်ကိုင်ဖက်က အကြောင်းကြားလာသည့်အခါ တုံ့ပြန်ပုံ။',
    },
    explanation: {
      id: 'Respon empati yang santun saat rekan terlambat karena kecelakaan adalah menenangkan dengan 「慌てなくていいですから、気をつけて来てください」(pilihan 1).',
      en: 'Polite empathetic response when a coworker is delayed by an accident: 「慌てなくていいですから、気をつけて来てください」(Option 1).',
      my: 'မတော်တဆမှုကြောင့် လုပ်ဖော်ကိုင်ဖက် နောက်ကျသည့်အခါ ယဉ်ကျေးစွာ စာနာတုံ့ပြန်မှုမှာ 「慌てなくていいですから、気をつけて来てください」ဖြစ်သည်။',
    },
    keyPoints: {
      id: [
        '「間に合いそうにない」= sepertinya tidak keburu.',
        'Respon empati: menenangkan dan mendoakan keselamatan perjalanan.',
      ],
      en: [
        '「間に合いそうにない」= unlikely to make it on time.',
        'Empathetic response: reassure and encourage a safe trip.',
      ],
      my: [
        '「間に合いそうにない」= အချိန်မီမည်မထင်ပါ။',
        'စာနာမှုရှိသော တုံ့ပြန်မှု - စိတ်အေးအေးထားပြီး ဘေးကင်းစွာ လာရန်အားပေးခြင်း။',
      ],
    },
  },

  // N1 Choukai
  choukai_n1_1: {
    title: {
      id: 'Kadai Rikai N1: Strategi Rebranding Produk',
      en: 'Kadai Rikai N1: Product Rebranding Strategy',
      my: 'Kadai Rikai N1 - ထုတ်ကုန် အသွင်သစ်ဖော်ဆောင်မှု မဟာဗျူဟာ',
    },
    typeLabel: {
      id: '課題理解 N1 (Keputusan & Aksi Lanjutan)',
      en: 'Task Understanding N1 (Decisions & Next Action)',
      my: '課題理解 N1 (ဆုံးဖြတ်ချက်နှင့် နောက်ဆက်တွဲ လုပ်ဆောင်ချက်)',
    },
    situation: {
      id: 'Di rapat perencanaan, kepala departemen dan staf wanita mendiskusikan strategi promosi produk baru.',
      en: 'In a planning meeting, the department head and a female staff discuss the promotional strategy for a new product.',
      my: 'အစီအစဉ်ရေးဆွဲရေး အစည်းအဝေးတွင် ဌာနမှူးနှင့် အမျိုးသမီးဝန်ထမ်းတို့ ထုတ်ကုန်အသစ် မိတ်ဆက်ရေး မဟာဗျူဟာကို ဆွေးနွေးနေကြသည်။',
    },
    explanation: {
      id: 'Kepala departemen menegaskan bahwa tugas pertama bawahan adalah menghubungi desainer eksternal untuk penundaan tenggat waktu (pilihan 2).',
      en: 'The department head clarifies that the subordinate\'s first task is to contact the external designer regarding the deadline extension (Option 2).',
      my: 'ဌာနမှူးက လက်အောက်ငယ်သား၏ ပထမဆုံးတာဝန်မှာ ပြင်ပဒီဇိုင်နာထံ အချိန်ရွှေ့ဆိုင်းရန် အကြောင်းကြားခြင်းဖြစ်ကြောင်း အတည်ပြုသည် (ရွေးချယ်မှု ၂)။',
    },
    keyPoints: {
      id: [
        'Pemisahan tugas atasan vs bawahan: atasan mengurus akunting, bawahan menghubungi desainer eksternal.',
        'Kata kunci penentu: 「君はまず (kamu pertama-tama)」.',
      ],
      en: [
        'Separation of duties: supervisor handles accounting, subordinate contacts the designer.',
        'Key phrase: 「君はまず (you first of all)」.',
      ],
      my: [
        'တာဝန်ခွဲဝေမှု - အထက်လူကြီးက စာရင်းကိုင်နှင့် ညှိနှိုင်းပြီး လက်အောက်ငယ်သားက ဒီဇိုင်နာကို ဆက်သွယ်သည်။',
        'အဓိက စကားလုံး - 「君はまず (မင်း အရင်ဆုံး)」။',
      ],
    },
  },
  choukai_n1_2: {
    title: {
      id: 'Sokuji Outou N1: Respon Keigo Tingkat Lanjut',
      en: 'Sokuji Outou N1: Advanced Keigo Response',
      my: 'Sokuji Outou N1 - အဆင့်မြင့် Keigo တုံ့ပြန်မှု',
    },
    typeLabel: {
      id: '即時応答 N1 (Respon Spontan Tingkat Mahir)',
      en: 'Quick Response N1 (Advanced Spontaneous Reply)',
      my: '即時応答 N1 (အဆင့်မြင့် ချက်ချင်းတုံ့ပြန်မှု)',
    },
    situation: {
      id: 'Di jamuan makan dengan klien bisnis, menerima salam sapaan dari eksekutif mitra.',
      en: 'At a business dinner with a client, receiving greetings from a partner company executive.',
      my: 'လုပ်ငန်းရှင်များနှင့် ညစာစားပွဲတွင် မိတ်ဖက်ကုမ္ပဏီ အကြီးအကဲထံမှ နှုတ်ခွန်းဆက်စကားကို လက်ခံရယူခြင်း ဖြစ်သည်။',
    },
    explanation: {
      id: 'Ungkapan 「お運びいただき恐縮に存じます」adalah ucapan terima kasih tuan rumah atas kehadiran tamu kehormatan. Balasan yang santun dari tamu adalah merendahkan diri dengan 「とんでもございません。こちらこそお招きいただき、心より感謝申し上げます」(Pilihan 1).',
      en: 'The phrase 「お運びいただき恐縮に存じます」expresses the host\'s gratitude for an honored guest\'s arrival. The proper humble reply from the guest is 「とんでもございません。こちらこそお招きいただき、心より感謝申し上げます」(Option 1).',
      my: '「お運びいただき恐縮に存じます」စကားရပ်သည် ဧည့်သည်တော် ကြွရောက်လာခြင်းအတွက် အိမ်ရှင်က ကျေးဇူးတင်ခြင်း ဖြစ်သည်။ ဧည့်သည်၏ နှိမ့်ချယဉ်ကျေးသော တုံ့ပြန်မှုမှာ 「とんでもございません。こちらこそお招きいただき、心より感謝申し上げます」ဖြစ်သည်။',
    },
    keyPoints: {
      id: [
        '「お運びいただく」= datang berkunjung (sonkeigo untuk tamu).',
        'Jawaban standar tamu: menolak kesopanan berlebihan lalu berterima kasih atas undangannya.',
      ],
      en: [
        '「お運びいただく」= to attend / visit (honorific for guests).',
        'Standard guest response: politely deflect excess praise and thank for the invitation.',
      ],
      my: [
        '「お運びいただく」= ကြွရောက်လာသည် (ဧည့်သည်အတွက် ချီးကျူးစကား)။',
        'ဧည့်သည်၏ ပုံမှန်တုံ့ပြန်မှု - ဖိတ်ကြားမှုအတွက် အထူးကျေးဇူးတင်ကြောင်း ဖော်ပြခြင်း။',
      ],
    },
  },
  choukai_n1_3: {
    title: {
      id: 'Point Rikai N1: Evaluasi Restrukturisasi Perusahaan',
      en: 'Point Rikai N1: Corporate Restructuring Evaluation',
      my: 'Point Rikai N1 - ကုမ္ပဏီ ပြန်လည်ဖွဲ့စည်းမှု သုံးသပ်ချက်',
    },
    typeLabel: {
      id: 'ポイント理解 N1 (Analisis Keputusan Organisasi)',
      en: 'Point Understanding N1 (Organizational Decision Analysis)',
      my: 'ポイント理解 N1 (အဖွဲ့အစည်း ဆုံးဖြတ်ချက် သုံးသပ်ချက်)',
    },
    situation: {
      id: 'Di program berita ekonomi, seorang analis menjelaskan restrukturisasi organisasi sebuah perusahaan besar.',
      en: 'On an economic news program, an analyst explains the organizational restructuring of a major corporation.',
      my: 'စီးပွားရေးသတင်း အစီအစဉ်တစ်ခုတွင် သုံးသပ်သူတစ်ဦးက ကုမ္ပဏီကြီးတစ်ခု၏ ဖွဲ့စည်းပုံ ပြင်ဆင်ပြောင်းလဲမှုအကြောင်း ရှင်းပြနေသည်။',
    },
    explanation: {
      id: 'Analis menyatakan tujuan restrukturisasi adalah meruntuhkan struktur kaku demi mempercepat pengambilan keputusan dan melahirkan inovasi (pilihan 3).',
      en: 'The analyst states that restructuring aims to flatten siloed departments to dramatically accelerate decision-making and foster innovation (Option 3).',
      my: 'သုံးသပ်သူက ဖွဲ့စည်းပုံပြင်ဆင်ခြင်း၏ ရည်ရွယ်ချက်မှာ ဆုံးဖြတ်ချက်မြန်ဆန်စေရန်နှင့် တီထွင်ဆန်းသစ်မှု ဖော်ဆောင်ရန် အကန့်အသတ်များကို ဖြိုဖျက်ခြင်းဖြစ်သည်ဟု ဆိုသည် (ရွေးချယ်မှု ၃)။',
    },
    keyPoints: {
      id: [
        'Kata kunci: 「意思決定のスピード (kecepatan keputusan)」, 「イノベーション創出 (kelahiran inovasi)」.',
      ],
      en: [
        'Key phrases: 「意思決定のスピード (decision speed)」, 「イノベーション創出 (innovation creation)」.',
      ],
      my: [
        'အဓိက စကားလုံး - 「意思決定のスピード (ဆုံးဖြတ်ချက် အရှိန်)」၊ 「イノベーション創出 (တီထွင်ဆန်းသစ်မှု ဖန်တီးခြင်း)」။',
      ],
    },
  },

  choukai_n2_6: {
    title: {
      id: 'Kadai Rikai N2: Prioritas Tugas Sebelum Peluncuran Produk',
      en: 'Kadai Rikai N2: Task Priority Before Product Launch',
      my: 'Kadai Rikai N2 - ပစ္စည်းသစ် မိတ်မဆက်မီ ဦးစားပေး လုပ်ဆောင်ရမည့် အရာ',
    },
    typeLabel: {
      id: '課題理解 (Instruksi Rapat Kerja)',
      en: 'Task Understanding (Work Meeting Instruction)',
      my: '課題理解 (အလုပ်အစည်းအဝေး ညွှန်ကြားချက်)',
    },
    situation: {
      id: 'Di kantor, kepala seksi dan karyawan wanita membicarakan jadwal rilis produk baru.',
      en: 'In the office, a section chief and female employee discuss the new product launch schedule.',
      my: 'ရုံးခန်းအတွင်း ဌာနခွဲမှူးနှင့် အမျိုးသမီးဝန်ထမ်းတို့သည် ထုတ်ကုန်သစ် မိတ်ဆက်မည့် အချိန်ဇယားကို ဆွေးနွေးနေကြသည်။',
    },
    explanation: {
      id: 'Kepala seksi menegaskan bahwa penyesuaian siaran pers akan ditangani sendiri, dan karyawan wanita diminta segera menghubungi agensi produksi video (pilihan 2).',
      en: 'The section chief confirms he will handle press release adjustments, while the female employee is directed to immediately instruct video production revisions (Option 2).',
      my: 'ဌာနခွဲမှူးက သတင်းထုတ်ပြန်ချက်ကို မိမိကိုယ်တိုင် ကိုင်တွယ်မည်ဖြစ်ပြီး အမျိုးသမီးဝန်ထမ်းအား ဗီဒီယိုထုတ်လုပ်ရေးကုမ္ပဏီသို့ ချက်ချင်းအကြောင်းကြားရန် ညွှန်ကြားခဲ့သည် (ရွေးချယ်မှု ၂)။',
    },
    keyPoints: {
      id: [
        'Pemisahan tugas atasan vs bawahan.',
        'Kata penentu waktu: 「直ちに制作会社へ修正箇所の差し替えを指示してくれ」.',
      ],
      en: [
        'Division of responsibilities: manager handles PR, subordinate calls production studio.',
        'Decision phrase: 「直ちに制作会社へ修正箇所の差し替えを指示してくれ」.',
      ],
      my: [
        'တာဝန်ခွဲဝေမှု - အထက်လူကြီးက သတင်းထုတ်ပြန်ချက် ကိုင်တွယ်ပြီး ဝန်ထမ်းက ထုတ်လုပ်ရေးသို့ ဆက်သွယ်ရမည်။',
        'အဓိက စကားလုံး - 「直ちに制作会社へ修正箇所の差し替えを指示してくれ」။',
      ],
    },
  },
  choukai_n2_7: {
    title: {
      id: 'Point Rikai N2: Keberhasilan Toko Cerdas Tanpa Kasir',
      en: 'Point Rikai N2: Success of Cashierless Smart Stores',
      my: 'Point Rikai N2 - ငွေကိုင်မပါသော စမတ်အရောင်းဆိုင်များ အောင်မြင်ရသည့် အကြောင်းရင်း',
    },
    typeLabel: {
      id: 'ポイント理解 (Analisis Strategi Bisnis)',
      en: 'Point Understanding (Business Strategy Analysis)',
      my: 'ポイント理解 (စီးပွားရေး မဟာဗျူဟာ သုံးသပ်ချက်)',
    },
    situation: {
      id: 'Di radio, konsultan manajemen membicarakan penyebaran toko pembayaran tanpa kasir.',
      en: 'On the radio, a management consultant discusses the spread of cashierless automated stores.',
      my: 'ရေဒီယိုတွင် စီမံခန့်ခွဲမှု အကြံပေးပုဂ္ဂိုလ်က ငွေကိုင်မပါသော အရောင်းဆိုင်များ ခေတ်စားလာခြင်းအကြောင်း ဆွေးနွေးနေသည်။',
    },
    explanation: {
      id: 'Faktor paling diapresiasi oleh pembeli tetap adalah pemangkasan waktu luar biasa tanpa perlu antre di kasir (pilihan 2).',
      en: 'The factor most valued by repeat customers is immense time savings with zero checkout queuing (Option 2).',
      my: 'ပုံမှန်ဖောက်သည်များ အနှစ်သက်ဆုံး အချက်မှာ ငွေရှင်းကောင်တာတွင် တန်းစီစောင့်ဆိုင်းရန်မလိုဘဲ အချိန်ကုန် အလွန်သက်သာခြင်း ဖြစ်သည် (ရွေးချယ်မှု ၂)။',
    },
    keyPoints: {
      id: [
        'Membedakan asumsi penghematan biaya toko dengan nilai riil waktu konsumen.',
        'Frasa kunci: 「リピーターが最も評価しているのは…圧倒的な時間短縮です」.',
      ],
      en: [
        'Distinguish vendor cost-saving from real consumer value proposition.',
        'Core phrase: 「リピーターが最も評価しているのは…圧倒的な時間短縮です」.',
      ],
      my: [
        'ဆိုင်ဘက်မှ ကုန်ကျစရိတ် လျှော့ချမှုနှင့် စားသုံးသူများ၏ အမှန်တကယ် လိုအပ်ချက်ကို ခွဲခြားနားလည်ခြင်း။',
        'အဓိက စကားစု - 「リピーターが最も評価しているのは…圧倒的な時間短縮です」။',
      ],
    },
  },
  choukai_n1_4: {
    title: {
      id: 'Sokuji Outou N1: Menghadapi Komplain Keterlambatan Pasokan',
      en: 'Sokuji Outou N1: Handling Supply Delay Business Complaints',
      my: 'Sokuji Outou N1 - ပစ္စည်းပေးပို့မှု နောက်ကျခြင်းအပေါ် တိုင်ကြားချက် ဖြေရှင်းမှု',
    },
    typeLabel: {
      id: '即時応答 N1 (Respon Komplain Formal)',
      en: 'Quick Response N1 (Formal Complaint Handling)',
      my: '即時応答 N1 (တရားဝင် တိုင်ကြားချက် ချက်ချင်းတုံ့ပြန်မှု)',
    },
    situation: {
      id: 'Mendapat keluhan keras dari pimpinan mitra terkait keterlambatan pengiriman pasokan.',
      en: 'Receiving a stern complaint from a client executive regarding shipment delays.',
      my: 'ကုန်ပစ္စည်းပေးပို့မှု နောက်ကျခြင်းနှင့် ပတ်သက်၍ လုပ်ငန်းမိတ်ဖက် လူကြီးထံမှ ပြင်းထန်သော တိုင်ကြားချက်ကို လက်ခံရရှိသည်။',
    },
    explanation: {
      id: 'Dalam etika bisnis Jepang, respon terbaik adalah permohonan maaf tulus diikuti investigasi dan pelaporan langsung secara tatap muka hari itu juga (Pilihan 1).',
      en: 'In Japanese business etiquette, the premier response is sincere apology followed by immediate investigation and same-day in-person reporting (Option 1).',
      my: 'ဂျပန်စီးပွားရေး ကျင့်ဝတ်အရ အကောင်းဆုံး တုံ့ပြန်မှုမှာ စိတ်ရင်းမှန်ဖြင့် တောင်းပန်ပြီး ယနေ့အတွင်း အကြောင်းရင်း ရှာဖွေကာ လူကိုယ်တိုင် သွားရောက် အစီရင်ခံခြင်း ဖြစ်သည် (ရွေးချယ်မှု ၁)။',
    },
    keyPoints: {
      id: [
        'Menghindari dalih atau menyalahkan pihak logistik.',
        'Ungkapan sopan: 「ご報告にあがります」.',
      ],
      en: [
        'Avoid making excuses or deflecting blame onto logistics.',
        'Humilific business phrase: 「ご報告にあがります」.',
      ],
      my: [
        'ဆင်ခြေပေးခြင်းနှင့် ပို့ဆောင်ရေးသမားများကို အပြစ်ပုံချခြင်းကို ရှောင်ကြဉ်ခြင်း။',
        'ယဉ်ကျေးသော စကားအသုံးအနှုန်း - 「ご報告にあがります」။',
      ],
    },
  },
  choukai_n1_5: {
    title: {
      id: 'Point Rikai N1: Konsep Fleksibilitas Struktur Tahan Gempa',
      en: 'Point Rikai N1: Flexibility Paradigm in Earthquake Engineering',
      my: 'Point Rikai N1 - ငလျင်ဒဏ်ခံ အဆောက်အအုံများတွင် လိုက်လျောညီထွေရှိမှု သဘောတရား',
    },
    typeLabel: {
      id: 'ポイント理解 N1 (Rekonstruksi Arsitektur Tahan Gempa)',
      en: 'Point Understanding N1 (Seismic Architecture Reconstruction)',
      my: 'ポイント理解 N1 (ငလျင်ဒဏ်ခံ ဗိသုကာ သုံးသပ်ချက်)',
    },
    situation: {
      id: 'Di simposium teknik sipil, pakar arsitektur memaparkan filosofi konstruksi tahan gempa.',
      en: 'At a civil engineering symposium, an architectural expert explains earthquake design philosophies.',
      my: 'မြို့ပြအင်ဂျင်နီယာ နှီးနှောဖလှယ်ပွဲတွင် ဗိသုကာပညာရှင်က ငလျင်ဒဏ်ခံ အဆောက်အအုံ ဒီဇိုင်းအတွေးအခေါ်ကို ရှင်းလင်းတင်ပြသည်။',
    },
    explanation: {
      id: 'Desainer menekankan bahwa ketahanan gempa sejati terletak pada fleksibilitas menyerap energi goyangan secara lentur (pilihan 3).',
      en: 'The structural engineer stresses that true resilience lies in flexible deformation dissipating seismic kinetic energy (Option 3).',
      my: 'ဗိသုကာပညာရှင်က စစ်မှန်သော ငလျင်ဒဏ်ခံနိုင်စွမ်းမှာ ငလျင်လှုပ်ခါမှု စွမ်းအင်ကို လိုက်လျောညီထွေ လျှော့ချစုပ်ယူနိုင်ခြင်းတွင် တည်ရှိသည်ဟု အလေးပေးပြောကြားခဲ့သည် (ရွေးချယ်မှု ၃)။',
    },
    keyPoints: {
      id: [
        'Pergeseran konsep kekakuan mutlak (剛) menuju kelenturan adaptif (柔).',
        'Kata kunci: 「揺れを受け流しエネルギーを分散吸収する」.',
      ],
      en: [
        'Shift from rigid resistance to adaptive dissipation.',
        'Core expression: 「揺れを受け流しエネルギーを分散吸収する」.',
      ],
      my: [
        'တင်းကျပ်သော ခုခံမှုမှ လိုက်လျောညီထွေ စုပ်ယူမှုသဘောတရားသို့ ကူးပြောင်းခြင်း။',
        'အဓိက စကားစု - 「揺れを受け流しエネルギーを分散吸収する」။',
      ],
    },
  },
};

// ─── BUNPO LOCALIZATIONS ────────────────────────────────────
export const BUNPO_TRANSLATIONS: Record<string, {
  title: Record<Language, string>;
  theme: Record<Language, string>;
  description: Record<Language, string>;
}> = {
  // N5 Bunpo Units
  unit_n5_1: {
    title: {
      id: 'Unit 1: Predikat Dasar & Partikel Inti Kalimat',
      en: 'Unit 1: Basic Predicates & Core Sentence Particles',
      my: 'ယူနစ် ၁ - အခြေခံကြိယာနှင့် ဝါကျအဓိက ဝိဘတ်များ',
    },
    theme: {
      id: 'Partikel & Struktur Dasar',
      en: 'Particles & Basic Structure',
      my: 'ဝိဘတ်များနှင့် အခြေခံတည်ဆောက်ပုံ',
    },
    description: {
      id: 'Fondasi utama bahasa Jepang: penggunaan partikel wa, mo, no, ni, de, dan wo yang tepat.',
      en: 'Core Japanese foundations: accurate usage of particles wa, mo, no, ni, de, and wo.',
      my: 'ဂျပန်ဘာသာစကား၏ အဓိကအခြေခံ - wa, mo, no, ni, de, wo ဝိဘတ်များကို တိကျစွာအသုံးပြုခြင်း။',
    },
  },
  unit_n5_2: {
    title: {
      id: 'Unit 2: Bentuk Te, Permohonan & Izin Santun',
      en: 'Unit 2: Te-Form, Requests & Polite Permissions',
      my: 'ယူနစ် ၂ - Te-Form၊ တောင်းဆိုမှုနှင့် ခွင့်ပြုချက်များ',
    },
    theme: {
      id: 'Bentuk Te & Izin',
      en: 'Te-Form & Permissions',
      my: 'Te-Form နှင့် ခွင့်ပြုချက်',
    },
    description: {
      id: 'Menguasai pembentukan bentuk Te untuk meminta tolong, meminta izin, dan larangan sopan.',
      en: 'Mastering the Te-form for requests, asking permissions, and polite prohibitions.',
      my: 'အကူအညီတောင်းခြင်း၊ ခွင့်ပြုချက်တောင်းခြင်းနှင့် ယဉ်ကျေးစွာတားမြစ်ခြင်းအတွက် Te-form ကို ကျွမ်းကျင်စွာအသုံးချခြင်း။',
    },
  },
  unit_n5_3: {
    title: {
      id: 'Unit 3: Keinginan, Pengalaman & Kemampuan',
      en: 'Unit 3: Desires, Experiences & Capabilities',
      my: 'ယူနစ် ၃ - ဆန္ဒ၊ အတွေ့အကြုံနှင့် စွမ်းဆောင်ရည်',
    },
    theme: {
      id: 'Keinginan & Pengalaman',
      en: 'Desires & Experiences',
      my: 'ဆန္ဒနှင့် အတွေ့အကြုံ',
    },
    description: {
      id: 'Mengekspresikan hal yang ingin dicapai, hobi, dan pengalaman masa lampau.',
      en: 'Expressing aspirations, hobbies, past experiences, and potentials.',
      my: 'ရည်မှန်းချက်များ၊ ဝါသနာများ၊ အတိတ်အတွေ့အကြုံများနှင့် စွမ်းရည်များကို ဖော်ပြခြင်း။',
    },
  },
  unit_star_n5: {
    title: {
      id: 'Spesial: Bank Soal Susun Bintang (Mondai 8 N5)',
      en: 'Special: Star Arrangement Question Bank (Mondai 8 N5)',
      my: 'အထူး - ကြယ်ပွင့် အစီအစဉ် မေးခွန်းများ (Mondai 8 N5)',
    },
    theme: {
      id: 'Mondai 8 N5',
      en: 'Mondai 8 N5',
      my: 'Mondai 8 N5',
    },
    description: {
      id: 'Kunci latihan soal bintang Mondai 8 JLPT N5 untuk pemula agar lancar menyusun urutan kata.',
      en: 'Targeted star questions for beginners to master particle ordering and word structure.',
      my: 'ဝိဘတ်နှင့် ဝါကျတည်ဆောက်ပုံ အစီအစဉ်မှန်ကန်စေရန် အစပြုသူများအတွက် ကြယ်ပွင့်မေးခွန်း လေ့ကျင့်ခန်းများ။',
    },
  },

  // N4 Bunpo Units
  unit_n4_1: {
    title: {
      id: 'Unit 1: Syarat & Pengandaian Kondisional',
      en: 'Unit 1: Conditional Clauses & Prerequisites',
      my: 'ယူနစ် ၁ - အခြေအနေပြနှင့် သတ်မှတ်ချက် သဒ္ဒါများ',
    },
    theme: {
      id: 'Kondisional & Syarat',
      en: 'Conditionals & Prerequisites',
      my: 'အခြေအနေပြနှင့် သတ်မှတ်ချက်',
    },
    description: {
      id: 'Perbedaan penggunaan pola pengandaian tara, ba, nara, dan demo yang menjadi kunci kelulusan N4.',
      en: 'Mastering the differences between tara, ba, nara, and demo conditionals crucial for N4.',
      my: 'N4 အောင်မြင်ရန် အရေးပါသော tara, ba, nara နှင့် demo အခြေအနေပြသဒ္ဒါ ကွာခြားချက်များကို ကျွမ်းကျင်ခြင်း။',
    },
  },
  unit_n4_2: {
    title: {
      id: 'Unit 2: Derajat Berlebih, Kemudahan & Upaya',
      en: 'Unit 2: Excess Degree, Facility & Conscious Effort',
      my: 'ယူနစ် ၂ - အတိုင်းအတာလွန်ကဲမှု၊ လွယ်ကူမှုနှင့် ကြိုးပမ်းမှု',
    },
    theme: {
      id: 'Tingkat & Pola Aksi',
      en: 'Degree & Action Patterns',
      my: 'အတိုင်းအတာနှင့် လုပ်ဆောင်မှုပုံစံ',
    },
    description: {
      id: 'Pola menyatakan hal berlebihan, tingkat kesulitan, serta komitmen membiasakan diri.',
      en: 'Patterns expressing excessiveness, ease or difficulty, and behavioral commitments.',
      my: 'လွန်ကဲမှု၊ လုပ်ဆောင်ရလွယ်ကူ/ခက်ခဲမှုနှင့် အလေ့အကျင့်ပြုလုပ်ရန် ကြိုးပမ်းမှု သဒ္ဒါပုံစံများ။',
    },
  },
  unit_n4_3: {
    title: {
      id: 'Unit 3: Kalimat Pasif, Kausatif & Berbalas Budi',
      en: 'Unit 3: Passive, Causative & Favor Exchanges',
      my: 'ယူနစ် ၃ - Passive၊ Causative နှင့် အပြန်အလှန်ကူညီမှု',
    },
    theme: {
      id: 'Ukemi, Shieki & Juju',
      en: 'Passive, Causative & Benefactives',
      my: 'Ukemi, Shieki နှင့် Juju',
    },
    description: {
      id: 'Struktur gramatikal relasi sosial: bentuk pasif (ukemi), kausatif (shieki), dan penerimaan bantuan.',
      en: 'Social interaction grammar: passive forms, causative constructions, and giving/receiving favors.',
      my: 'လူမှုဆက်ဆံရေး သဒ္ဒါတည်ဆောက်ပုံ - ခံရသူပြ (ukemi)၊ စေခိုင်းပြ (shieki) နှင့် အကူအညီပေးကမ်းမှုများ။',
    },
  },
  unit_star_n4: {
    title: {
      id: 'Spesial: Bank Soal Susun Bintang (Mondai 8 N4)',
      en: 'Special: Star Arrangement Question Bank (Mondai 8 N4)',
      my: 'အထူး - ကြယ်ပွင့် အစီအစဉ် မေးခွန်းများ (Mondai 8 N4)',
    },
    theme: {
      id: 'Mondai 8 N4',
      en: 'Mondai 8 N4',
      my: 'Mondai 8 N4',
    },
    description: {
      id: 'Latihan menyusun partikel dan konjugasi kata kerja soal bintang Mondai 8 JLPT N4.',
      en: 'Targeted star questions practicing verb conjugations and particle links for N4.',
      my: 'ကြိယာပြောင်းလဲမှုများနှင့် ဝိဘတ်ဆက်သွယ်မှုများကို စနစ်တကျ လေ့ကျင့်နိုင်သော N4 ကြယ်ပွင့်မေးခွန်းများ။',
    },
  },

  // N3 Bunpo Units
  unit_n3_1: {
    title: {
      id: 'Unit 1: Alasan Logis & Batasan Pertimbangan',
      en: 'Unit 1: Logical Reasons & Moral Constraints',
      my: 'ယူနစ် ၁ - ယုတ္တိကျသောအကြောင်းပြချက်နှင့် စဉ်းစားဆင်ခြင်မှု အကန့်အသတ်',
    },
    theme: {
      id: 'Logika & Pertimbangan',
      en: 'Logic & Deliberation',
      my: 'ယုတ္တိနှင့် စဉ်းစားဆင်ခြင်မှု',
    },
    description: {
      id: 'Pola yang paling sering keluar untuk menguji batasan etika kerja dan kepastian logika di N3.',
      en: 'High-frequency grammar patterns evaluating workplace ethics and logical certainty.',
      my: 'လုပ်ငန်းခွင်ကျင့်ဝတ်နှင့် ယုတ္တိကျသော သေချာမှုများကို စစ်ဆေးသည့် N3 အဓိကသဒ္ဒါပုံစံများ။',
    },
  },
  unit_n3_2: {
    title: {
      id: 'Unit 2: Rentang Waktu, Peluang & Prediksi Resiko',
      en: 'Unit 2: Time Windows, Opportunities & Risk Warnings',
      my: 'ယူနစ် ၂ - အချိန်အပိုင်းအခြား၊ အခွင့်အလမ်းနှင့် စိုးရိမ်ရသည့်အန္တရာယ်',
    },
    theme: {
      id: 'Waktu & Resiko',
      en: 'Time & Risk',
      my: 'အချိန်နှင့် စွန့်စားရမှု',
    },
    description: {
      id: 'Pola rentang peluang sebelum kondisi berubah dan kekhawatiran akibat buruk.',
      en: 'Patterns covering opportunity windows before conditions shift and apprehension of negative outcomes.',
      my: 'အခြေအနေမပြောင်းလဲမီ အခွင့်အလမ်းရယူမှုနှင့် မလိုလားအပ်သောအကျိုးဆက်ကို စိုးရိမ်မှုသဒ္ဒါများ။',
    },
  },
  unit_n3_3: {
    title: {
      id: 'Unit 3: Sudut Pandang, Hubungan & Perantara',
      en: 'Unit 3: Perspectives, Relations & Intermediaries',
      my: 'ယူနစ် ၃ - ရှုထောင့်၊ ဆက်ဆံရေးနှင့် ကြားခံဆက်သွယ်မှု',
    },
    theme: {
      id: 'Relasi & Sudut Pandang',
      en: 'Relations & Perspectives',
      my: 'ဆက်ဆံရေးနှင့် ရှုထောင့်',
    },
    description: {
      id: 'Pola memandang suatu hal dari perspektif tertentu atau melalui media perantara.',
      en: 'Grammar patterns examining situations from specific viewpoints or via intermediary mediums.',
      my: 'သတ်မှတ်ထားသော ရှုထောင့်မှကြည့်ရှုခြင်း သို့မဟုတ် ကြားခံအရာများမှတစ်ဆင့် ဆက်သွယ်ခြင်း သဒ္ဒါများ။',
    },
  },
  unit_star_n3: {
    title: {
      id: 'Spesial: Bank Soal Susun Bintang (Mondai 8 N3)',
      en: 'Special: Star Arrangement Question Bank (Mondai 8 N3)',
      my: 'အထူး - ကြယ်ပွင့် အစီအစဉ် မေးခွန်းများ (Mondai 8 N3)',
    },
    theme: {
      id: 'Mondai 8 N3',
      en: 'Mondai 8 N3',
      my: 'Mondai 8 N3',
    },
    description: {
      id: 'Latihan intensif menyusun susunan kata bintang Mondai 8 standar ujian JLPT N3.',
      en: 'Intensive practice for ordering sentence structures and particles in JLPT N3 Mondai 8.',
      my: 'JLPT N3 စံနှုန်းမီ Mondai 8 ကြယ်ပွင့် ဝါကျတည်ဆောက်ပုံ အစီအစဉ် လေ့ကျင့်ခန်းများ။',
    },
  },

  // N2 Bunpo Units
  unit_1: {
    title: {
      id: 'Unit 1: Keharusan, Etika & Batasan Sosial',
      en: 'Unit 1: Necessity, Ethics & Social Norms',
      my: 'ယူနစ် ၁ - မဖြစ်မနေ လုပ်ဆောင်ရမှု၊ ကျင့်ဝတ်နှင့် လူမှုစည်းကမ်းများ',
    },
    theme: {
      id: 'Obligasi & Penolakan',
      en: 'Obligation & Refusal',
      my: 'တာဝန်နှင့် ငြင်းပယ်မှု',
    },
    description: {
      id: 'Pola yang paling sering keluar untuk menguji apakah tindakan terpaksa dilakukan atau melanggar norma sosial.',
      en: 'Grammar patterns testing whether an action is compulsory or contrary to social norms.',
      my: 'လုပ်ရပ်တစ်ခုကို မလွှဲမရှောင်သာ လုပ်ဆောင်ရခြင်း သို့မဟုတ် လူမှုကျင့်ဝတ်နှင့် ဆန့်ကျင်ခြင်း ရှိမရှိ စစ်ဆေးသည့် သဒ္ဒါပုံစံများ။',
    },
  },
  unit_2: {
    title: {
      id: 'Unit 2: Dua Sisi, Kontras & Kejutan',
      en: 'Unit 2: Dual Sides, Contrast & Surprise',
      my: 'ယူနစ် ၂ - ရှုထောင့်နှစ်ဖက်၊ နှိုင်းယှဉ်ချက်နှင့် မထင်မှတ်သော အရာများ',
    },
    theme: {
      id: 'Perbandingan & Kontras',
      en: 'Comparison & Contrast',
      my: 'နှိုင်းယှဉ်မှုနှင့် ကွဲပြားမှု',
    },
    description: {
      id: 'Pola membandingkan dua sisi berlawanan atau situasi yang bertolak belakang dengan harapan.',
      en: 'Patterns comparing two opposing sides or situations contrary to expectations.',
      my: 'ဆန့်ကျင်ဘက် ရှုထောင့်နှစ်ခု သို့မဟုတ် မျှော်လင့်ထားသည်နှင့် ဆန့်ကျင်ဘက် အခြေအနေများကို နှိုင်းယှဉ်သည့် သဒ္ဒါပုံစံများ။',
    },
  },
  unit_3: {
    title: {
      id: 'Unit 3: Momentum, Sebab & Proses Waktu',
      en: 'Unit 3: Momentum, Cause & Time Progression',
      my: 'ယူနစ် ၃ - အချိန်ကိုက်အခွင့်အရေး၊ အကြောင်းရင်းနှင့် အချိန်ဖြစ်စဉ်',
    },
    theme: {
      id: 'Alasan & Perubahan',
      en: 'Reason & Progression',
      my: 'အကြောင်းရင်းနှင့် ပြောင်းလဲမှု',
    },
    description: {
      id: 'Pola penegasan alasan utama, titik tolak perubahan, dan proses perubahan bertahap.',
      en: 'Patterns emphasizing primary reasons, turning points of change, and gradual progression.',
      my: 'အဓိက အကြောင်းရင်း၊ အလှည့်အပြောင်းနှင့် တဖြည်းဖြည်း ပြောင်းလဲမှု ဖြစ်စဉ်များကို အလေးပေးဖော်ပြသည့် ပုံစံများ။',
    },
  },
  unit_4: {
    title: {
      id: 'Unit 4: Batasan, Kondisi & Nuansa Perasaan',
      en: 'Unit 4: Limits, Conditions & Emotional Nuances',
      my: 'ယူနစ် ၄ - ကန့်သတ်ချက်များ၊ အခြေအနေနှင့် စိတ်ခံစားမှု သဘောသဘာဝ',
    },
    theme: {
      id: 'Kondisi & Batasan',
      en: 'Conditions & Limits',
      my: 'အခြေအနေနှင့် ကန့်သတ်ချက်',
    },
    description: {
      id: 'Pola yang menguji nuansa kondisi khusus, kecenderungan rasa, dan ketuntasan suatu aksi.',
      en: 'Patterns testing special condition nuances, feelings/inclinations, and action completion.',
      my: 'ထူးခြားသော အခြေအနေ၊ စိတ်ခံစားမှု အလားအလာနှင့် လုပ်ဆောင်ချက် ပြီးမြောက်မှုကို စစ်ဆေးသော ပုံစံများ။',
    },
  },
  unit_star_n2: {
    title: {
      id: 'Spesial: Bank Soal Susun Bintang (Mondai 8 N2)',
      en: 'Special: Star Arrangement Question Bank (Mondai 8 N2)',
      my: 'အထူး - ကြယ်ပွင့် အစီအစဉ် မေးခွန်းများ (Mondai 8 N2)',
    },
    theme: {
      id: 'Mondai 8 N2',
      en: 'Mondai 8 N2',
      my: 'Mondai 8 N2',
    },
    description: {
      id: 'Strategi merangkai partikel, pola tata bahasa, dan posisi kata kunci untuk menaklukkan soal bintang.',
      en: 'Strategies for ordering particles, grammar patterns, and key words to ace star questions.',
      my: 'ကြယ်ပွင့်မေးခွန်းများကို အောင်မြင်စွာ ဖြေဆိုရန် ဝိဘတ်များ၊ သဒ္ဒါပုံစံများနှင့် စကားလုံး အထားအသို နည်းဗျူဟာများ။',
    },
  },

  unit_n2_6: {
    title: {
      id: 'Unit 6: Hubungan Sebab Akibat Formal & Penegasan Mutlak',
      en: 'Unit 6: Formal Causality & Absolute Affirmation',
      my: 'ယူနစ် ၆ - တရားဝင် အကြောင်းရင်းနှင့် ပြတ်သားသော အတည်ပြုချက်များ',
    },
    theme: {
      id: 'Sebab Akibat Formal N2',
      en: 'Formal Causality N2',
      my: 'တရားဝင် အကြောင်းရင်း N2',
    },
    description: {
      id: 'Pola bahasa formal untuk menegaskan alasan tunggal tak terbantahkan dan konsekuensi mutlak.',
      en: 'Formal patterns for emphasizing undeniable single causes and definitive consequences.',
      my: 'ငြင်းဆို၍မရသော တစ်ခုတည်းသော အကြောင်းရင်းနှင့် မဖြစ်မနေ ရလဒ်များကို အလေးပေးဖော်ပြသည့် ပုံစံများ။',
    },
  },
  unit_n2_7: {
    title: {
      id: 'Unit 7: Landasan, Perantara & Ruang Lingkup Luas',
      en: 'Unit 7: Basis, Medium & Broad Scope',
      my: 'ယူနစ် ၇ - အခြေခံအချက်၊ ကြားခံနှင့် ကျယ်ပြန့်သော နယ်ပယ်',
    },
    theme: {
      id: 'Landasan & Media N2',
      en: 'Basis & Medium N2',
      my: 'အခြေခံနှင့် ကြားခံ N2',
    },
    description: {
      id: 'Pola menyatakan dasar pijakan suatu keputusan dan rentang waktu atau media perantara resmi.',
      en: 'Patterns expressing the foundation for decisions, extended spans, and formal intermediaries.',
      my: 'ဆုံးဖြတ်ချက်တစ်ခု၏ အခြေခံနှင့် ကာလအပိုင်းအခြား သို့မဟုတ် တရားဝင် ကြားခံကို ဖော်ပြသည့် ပုံစံများ။',
    },
  },
  unit_n2_8: {
    title: {
      id: 'Unit 8: Emosi Tersirat, Kecenderungan Rasa & Nuansa Ujian',
      en: 'Unit 8: Implied Emotion, Tendency & Subtle Nuances',
      my: 'ယူနစ် ၈ - စိတ်ခံစားမှု အရိပ်အယောင်၊ ဖြစ်လေ့ဖြစ်ထနှင့် သိမ်မွေ့သော သဘောသဘာဝ',
    },
    theme: {
      id: 'Kecenderungan & Kesan N2',
      en: 'Tendency & Impression N2',
      my: 'ဖြစ်လေ့ဖြစ်ထနှင့် အထင်အမြင် N2',
    },
    description: {
      id: 'Pola mengekspresikan tanda-tanda emosi luar, kecenderungan negatif ringan, dan kesan subjektif.',
      en: 'Patterns expressing external emotional cues, slight negative tendencies, and subjective impressions.',
      my: 'အပြင်ပန်း စိတ်ခံစားမှု အရိပ်အယောင်၊ အနည်းငယ် မလိုလားအပ်သော ဖြစ်လေ့ဖြစ်ထနှင့် ခံစားချက်ဆိုင်ရာ ပုံစံများ။',
    },
  },
  // N1 Bunpo Units
  unit_n1_1: {
    title: {
      id: 'Unit 1 N1: Titik Ekstrem & Batas Tertinggi',
      en: 'Unit 1 N1: Extreme Points & Utmost Limits',
      my: 'ယူနစ် ၁ N1 - အမြင့်ဆုံး အတိုင်းအတာနှင့် အကန့်အသတ်',
    },
    theme: {
      id: 'Batas & Penegasan N1',
      en: 'Limits & Assertion N1',
      my: 'ကန့်သတ်ချက်နှင့် အခိုင်အမာဖော်ပြမှု N1',
    },
    description: {
      id: 'Pola bahasa tulis tingkat tinggi untuk menyatakan situasi ekstrem, batas kemampuan, dan konsekuensi tak terelakkan.',
      en: 'High-level written patterns expressing extreme situations, limits of ability, and inevitable consequences.',
      my: 'အလွန်အမင်း အခြေအနေ၊ စွမ်းရည် ကန့်သတ်ချက်နှင့် မလွှဲမရှောင်သာသော အကျိုးဆက်များကို ဖော်ပြသည့် အဆင့်မြင့် စာရေးပုံစံများ။',
    },
  },
  unit_n1_2: {
    title: {
      id: 'Unit 2 N1: Sebab Akibat Formal & Ironi',
      en: 'Unit 2 N1: Formal Causality & Irony',
      my: 'ယူနစ် ၂ N1 - တရားဝင် အကြောင်းအကျိုးနှင့် သရော်မှု',
    },
    theme: {
      id: 'Kausalitas Formal N1',
      en: 'Formal Causality N1',
      my: 'တရားဝင် အကြောင်းအကျိုး N1',
    },
    description: {
      id: 'Pola untuk artikel opini, editorial, dan pidato resmi yang menyatakan ironi dan relasi sebab-akibat mendalam.',
      en: 'Patterns for opinion articles, editorials, and formal speeches expressing irony and deep causal links.',
      my: 'သဘောထားဆောင်းပါးများ၊ အယ်ဒီတာ့အာဘော်များနှင့် တရားဝင် မိန့်ခွန်းများတွင် သုံးသော အကြောင်းအကျိုး ဆက်စပ်မှု ပုံစံများ။',
    },
  },
  unit_n1_3: {
    title: {
      id: 'Unit 3 N1: Sikap Batin, Kritik & Ketetapan Hati',
      en: 'Unit 3 N1: Inner Stance, Critique & Determination',
      my: 'ယူနစ် ၃ N1 - စိတ်သဘောထား၊ ဝေဖန်မှုနှင့် ပြတ်သားသော ဆုံးဖြတ်ချက်',
    },
    theme: {
      id: 'Sikap Mental & Tekad N1',
      en: 'Mental Attitude & Resolve N1',
      my: 'စိတ်ပိုင်းဆိုင်ရာ ရပ်တည်ချက် N1',
    },
    description: {
      id: 'Pola mengekspresikan kritik sosial, tekad bulat tanpa kompromi, dan pertimbangan batin penulis.',
      en: 'Patterns expressing social critique, uncompromising resolve, and authorial reflections.',
      my: 'လူမှုရေး ဝေဖန်ချက်၊ မယိမ်းယိုင်သော သန္နိဋ္ဌာန်နှင့် စာရေးသူ၏ အတွင်းစိတ် သဘောထားများကို ဖော်ပြသည့် ပုံစံများ။',
    },
  },
  unit_n1_4: {
    title: {
      id: 'Unit 4 N1: Pengandaian Ekstrem & Tak Terelakkan',
      en: 'Unit 4 N1: Extreme Hypotheses & Inevitabilities',
      my: 'ယူနစ် ၄ N1 - အစွန်းရောက် ယူဆချက်နှင့် မလွှဲမရှောင်သာသော အခြေအနေ',
    },
    theme: {
      id: 'Kondisi Ekstrem N1',
      en: 'Extreme Conditions N1',
      my: 'အစွန်းရောက် အခြေအနေ N1',
    },
    description: {
      id: 'Pola pengandaian hipotesis tingkat tinggi dalam sastra dan wacana akademis.',
      en: 'High-level hypothetical condition patterns used in literature and academic discourse.',
      my: 'စာပေနှင့် ပညာရပ်ဆိုင်ရာ စာပေများတွင် သုံးသော အဆင့်မြင့် ယူဆချက် သဒ္ဒါပုံစံများ။',
    },
  },
  unit_star_n1: {
    title: {
      id: 'Spesial: Bank Soal Susun Bintang (Mondai 8 N1)',
      en: 'Special: Star Arrangement Question Bank (Mondai 8 N1)',
      my: 'အထူး - ကြယ်ပွင့် အစီအစဉ် မေးခွန်းများ (Mondai 8 N1)',
    },
    theme: {
      id: 'Mondai 8 N1',
      en: 'Mondai 8 N1',
      my: 'Mondai 8 N1',
    },
    description: {
      id: 'Latihan intensif susun kalimat bintang N1 dengan gramatika kompleks dan kata sambung formal.',
      en: 'Intensive practice for N1 star sentence arrangement with complex grammar and formal conjunctions.',
      my: 'ရှုပ်ထွေးသော သဒ္ဒါနှင့် တရားဝင် စကားစပ်များ ပါဝင်သည့် N1 ကြယ်ပွင့် မေးခွန်း အထူးလေ့ကျင့်ခန်း။',
    },
  },

  unit_n1_6: {
    title: {
      id: 'Unit 6: Sinergi Kuat, Larangan Keras & Kepantasan Moral',
      en: 'Unit 6: Strong Synergy, Strict Prohibition & Moral Propriety',
      my: 'ယူနစ် ၆ - အကျိုးသက်ရောက်မှု၊ တင်းကျပ်သော တားမြစ်ချက်နှင့် ကိုယ်ကျင့်တရား',
    },
    theme: {
      id: 'Etika & Penegasan Kakikotoba N1',
      en: 'Ethics & High Formal Kakikotoba N1',
      my: 'ကျင့်ဝတ်နှင့် အဆင့်မြင့် စာရေးဟန် N1',
    },
    description: {
      id: 'Pola bahasa tulis tingkat tinggi (kakikotoba) menyatakan sinergi dua faktor, larangan mutlak dan etika profesi.',
      en: 'High-level written patterns (kakikotoba) expressing dual-factor synergy, absolute prohibitions, and professional ethics.',
      my: 'အကြောင်းရင်းနှစ်ခု ပေါင်းစပ်မှု၊ တင်းကျပ်သော တားမြစ်ချက်နှင့် လုပ်ငန်းခွင် ကျင့်ဝတ်များကို ဖော်ပြသည့် အဆင့်မြင့် စာရေးဟန် ပုံစံများ။',
    },
  },
  unit_n1_7: {
    title: {
      id: 'Unit 7: Keunikan Khas, Prasyarat Mutlak & Titik Puncak',
      en: 'Unit 7: Distinctive Uniqueness, Absolute Prerequisite & Zenith',
      my: 'ယူနစ် ၇ - သီးသန့် ထူးခြားချက်၊ မရှိမဖြစ် လိုအပ်ချက်နှင့် အထွတ်အထိပ်',
    },
    theme: {
      id: 'Prasyarat & Konsekuensi Ekstrim N1',
      en: 'Prerequisites & Extreme Consequences N1',
      my: 'လိုအပ်ချက်နှင့် အဆုံးစွန် ရလဒ်များ N1',
    },
    description: {
      id: 'Pola menonjolkan keunikan sejati yang tiada duanya, prasyarat tanpa alternatif, dan titik akhir.',
      en: 'Patterns highlighting peerless uniqueness, non-negotiable prerequisites, and climax endpoints.',
      my: 'တုနှိုင်းမဲ့ သီးသန့် ထူးခြားချက်၊ အစားထိုးမရသော လိုအပ်ချက်နှင့် နောက်ဆုံးအခြေအနေကို ဖော်ပြသည့် ပုံစံများ။',
    },
  },
  unit_n1_8: {
    title: {
      id: 'Unit 8: Pengandaian Ekstrim, Penegasan Kuat & Konsesi Formal',
      en: 'Unit 8: Extreme Hypotheses, Strong Affirmations & Formal Concessions',
      my: 'ယူနစ် ၈ - အဆုံးစွန် ယူဆချက်၊ ခိုင်မာသော အတည်ပြုချက်နှင့် တရားဝင် လျှော့ပေါ့ချက်',
    },
    theme: {
      id: 'Pengandaian & Penegasan N1',
      en: 'Hypotheses & Affirmations N1',
      my: 'ယူဆချက်နှင့် အတည်ပြုချက် N1',
    },
    description: {
      id: 'Pola konsesi resmi tanpa pandang bulu, motivasi tekad membara, dan penegasan syarat sejati.',
      en: 'Formal concession patterns without exception, resolute motivation, and authentic conditional emphasis.',
      my: 'ခြွင်းချက်မရှိ တရားဝင် လျှော့ပေါ့ချက်၊ ခိုင်မာသော စိတ်ပိုင်းဖြတ်မှုနှင့် စစ်မှန်သော အခြေအနေကို အလေးပေးဖော်ပြသည့် ပုံစံများ။',
    },
  },
};

// ─── DOKKAI LOCALIZATIONS ───────────────────────────────────
export const DOKKAI_TRANSLATIONS: Record<string, {
  categoryLabel: Record<Language, string>;
  sourceType: Record<Language, string>;
}> = {
  // N5 Dokkai
  dokkai_n5_1: {
    categoryLabel: {
      id: '情報検索 (Pemberitahuan Kafe Sakura)',
      en: 'Information Search (Sakura Cafe Notice)',
      my: '情報検索 (ဆာကူရာ ကဖေး အသိပေးချက်)',
    },
    sourceType: {
      id: 'Pemberitahuan Papan Toko',
      en: 'Shop Notice Board',
      my: 'ဆိုင်ကြော်ငြာသင်ပုန်း အသိပေးချက်',
    },
  },
  dokkai_n5_2: {
    categoryLabel: {
      id: '短文 (Email Mengajak Belajar)',
      en: 'Short Passage (Study Invitation Email)',
      my: '短文 (စာလေ့လာရန် ဖိတ်ခေါ်အီးမေးလ်)',
    },
    sourceType: {
      id: 'Surel Pribadi Singkat',
      en: 'Short Personal Email',
      my: 'ကိုယ်ရေးကိုယ်တာ အီးမေးလ်တို',
    },
  },

  // N4 Dokkai
  dokkai_n4_1: {
    categoryLabel: {
      id: '情報検索 (Aturan Pemilahan Sampah Apartemen)',
      en: 'Information Search (Apartment Waste Rules)',
      my: '情報検索 (တိုက်ခန်း အမှိုက်ခွဲခြားစွန့်ပစ်မှု စည်းကမ်းများ)',
    },
    sourceType: {
      id: 'Pemberitahuan Warga Apartemen',
      en: 'Apartment Residents Notice',
      my: 'တိုက်ခန်းနေထိုင်သူများသို့ အသိပေးစာ',
    },
  },
  dokkai_n4_2: {
    categoryLabel: {
      id: '短文 (Catatan Pengalaman Festival Musim Panas)',
      en: 'Short Passage (Summer Festival Experience)',
      my: '短文 (နွေရာသီပွဲတော် အတွေ့အကြုံ မှတ်တမ်း)',
    },
    sourceType: {
      id: 'Buku Harian / Esai Pengalaman',
      en: 'Diary / Experiential Essay',
      my: 'ဒိုင်ယာရီ / အတွေ့အကြုံ စာစီစာကုံး',
    },
  },

  // N3 Dokkai
  dokkai_n3_1: {
    categoryLabel: {
      id: '中文 (Artikel Budaya Kerja ~400 huruf)',
      en: 'Medium Passage (Workplace Culture ~400 chars)',
      my: '中文 (လုပ်ငန်းခွင်ယဉ်ကျေးမှု စာပိုဒ် ~စာလုံး ၄၀၀)',
    },
    sourceType: {
      id: 'Artikel Budaya Kerja',
      en: 'Workplace Culture Column',
      my: 'လုပ်ငန်းခွင်ယဉ်ကျေးမှု ဆောင်းပါး',
    },
  },
  dokkai_n3_2: {
    categoryLabel: {
      id: '情報検索 (Pengumuman Pemeliharaan Server Cloud)',
      en: 'Information Search (Cloud Server Maintenance)',
      my: '情報検索 (Cloud Server ထိန်းသိမ်းရေး အသိပေးချက်)',
    },
    sourceType: {
      id: 'Pemberitahuan Resmi IT',
      en: 'Official IT Announcement',
      my: 'တရားဝင် IT အသိပေးချက်',
    },
  },

  // N2 Dokkai
  dokkai_n2_1: {
    categoryLabel: {
      id: '短文 (Teks Pendek ~200 huruf)',
      en: 'Short Passage (~200 chars)',
      my: '短文 (စာပိုဒ်တို ~စာလုံး ၂၀၀)',
    },
    sourceType: {
      id: 'Pemberitahuan Internal Kantor',
      en: 'Office Internal Notice',
      my: 'ရုံးတွင်း အသိပေးချက်',
    },
  },
  dokkai_n2_2: {
    categoryLabel: {
      id: '短文 (Teks Pendek ~200 huruf)',
      en: 'Short Passage (~200 chars)',
      my: '短文 (စာပိုဒ်တို ~စာလုံး ၂၀၀)',
    },
    sourceType: {
      id: 'Esai / Opini Penulis',
      en: 'Essay / Author Opinion',
      my: 'စာစီစာကုံး / စာရေးသူ၏ အမြင်',
    },
  },
  dokkai_n2_3: {
    categoryLabel: {
      id: '中文 (Teks Menengah ~500 huruf)',
      en: 'Medium Passage (~500 chars)',
      my: '中文 (အလယ်အလတ် စာပိုဒ် ~စာလုံး ၅၀၀)',
    },
    sourceType: {
      id: 'Kolom Bisnis & Psikologi Kerja',
      en: 'Business & Workplace Psychology Column',
      my: 'စီးပွားရေးနှင့် လုပ်ငန်းခွင် စိတ်ပညာ',
    },
  },
  dokkai_n2_4: {
    categoryLabel: {
      id: '中文 (Teks Menengah ~500 huruf)',
      en: 'Medium Passage (~500 chars)',
      my: '中文 (အလယ်အလတ် စာပိုဒ် ~စာလုံး ၅၀၀)',
    },
    sourceType: {
      id: 'Artikel Sains Populer & Ekologi',
      en: 'Popular Science & Ecology Article',
      my: 'သိပ္ပံနှင့် ဂေဟစနစ် ဆောင်းပါး',
    },
  },
  dokkai_n2_5: {
    categoryLabel: {
      id: '情報検索 (Pencarian Informasi / Iklan)',
      en: 'Information Search / Brochure',
      my: '情報検索 (အချက်အလက် ရှာဖွေခြင်း / လက်ကမ်းစာစောင်)',
    },
    sourceType: {
      id: 'Brosur Informasi & Ketentuan Reservasi',
      en: 'Information Brochure & Booking Terms',
      my: 'အချက်အလက် လက်ကမ်းစာစောင်နှင့် ဘိုကင် စည်းမျဉ်းများ',
    },
  },
  dokkai_n2_6: {
    categoryLabel: {
      id: '長文 (Teks Panjang ~900 huruf)',
      en: 'Long Passage (~900 chars)',
      my: '長文 (စာပိုဒ်ရှည် ~စာလုံး ၉၀၀)',
    },
    sourceType: {
      id: 'Kritik Budaya Modern & Filsafat Waktu',
      en: 'Modern Culture & Time Philosophy Critique',
      my: 'ခေတ်သစ် ယဉ်ကျေးမှုနှင့် ဒဿန ဝေဖန်ချက်',
    },
  },

  // N1 Dokkai
  dokkai_n1_1: {
    categoryLabel: {
      id: '短文 N1 (Opini Kritis & Filsafat Bahasa)',
      en: 'Short Passage N1 (Critical Opinion & Language Philosophy)',
      my: '短文 N1 (ဝေဖန်ဆန်းစစ်ချက်နှင့် ဘာသာစကား ဒဿန)',
    },
    sourceType: {
      id: 'Esai Kritik Sastra Kontemporer',
      en: 'Contemporary Literary Criticism Essay',
      my: 'ခေတ်ပြိုင် စာပေဝေဖန်ရေး စာစီစာကုံး',
    },
  },
  dokkai_n1_2: {
    categoryLabel: {
      id: '中文 N1 (Wacana Sosial & Etika AI)',
      en: 'Medium Passage N1 (Social Discourse & AI Ethics)',
      my: '中文 N1 (လူမှုရေး ဆွေးနွေးချက်နှင့် AI ကျင့်ဝတ်)',
    },
    sourceType: {
      id: 'Jurnal Analisis Tren Teknologi & Humaniora',
      en: 'Tech Trends & Humanities Analysis Journal',
      my: 'နည်းပညာလမ်းကြောင်းနှင့် လူမှုရေးဂျာနယ်',
    },
  },
};

// ─── HELPER FUNCTIONS ───────────────────────────────────────
export function localizeChoukai(item: ChoukaiQuestion, lang: Language): ChoukaiQuestion {
  const trans = CHOUKAI_TRANSLATIONS[item.id];
  if (!trans) return item;
  return {
    ...item,
    title: trans.title[lang] || item.title,
    typeLabel: trans.typeLabel[lang] || item.typeLabel,
    situation: trans.situation[lang] || item.situation,
    explanation: trans.explanation[lang] || item.explanation,
    keyPoints: trans.keyPoints[lang] || item.keyPoints,
  };
}

export function localizeBunpo(item: BunpoUnit, lang: Language): BunpoUnit {
  const trans = BUNPO_TRANSLATIONS[item.id];
  if (!trans) return item;
  return {
    ...item,
    title: trans.title[lang] || item.title,
    theme: trans.theme[lang] || item.theme,
    description: trans.description[lang] || item.description,
  };
}

export function localizeDokkai(item: DokkaiPassage, lang: Language): DokkaiPassage {
  const trans = DOKKAI_PASSAGE_TRANSLATIONS[item.id] || (DOKKAI_TRANSLATIONS as any)[item.id];
  if (!trans) return item;
  return {
    ...item,
    title: trans.title?.[lang] || item.title,
    categoryLabel: trans.categoryLabel?.[lang] || item.categoryLabel,
    sourceType: trans.sourceType?.[lang] || item.sourceType,
    translation: trans.translation?.[lang] || item.translation,
  };
}
