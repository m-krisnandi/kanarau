import type { Language } from './translations';

export interface LocalizedDokkaiData {
  title: Record<Language, string>;
  categoryLabel: Record<Language, string>;
  sourceType: Record<Language, string>;
  translation: Record<Language, string>;
}

export const DOKKAI_PASSAGE_TRANSLATIONS: Record<string, LocalizedDokkaiData> = {
  // N5 DOKKAI
  dokkai_n5_1: {
    title: {
      id: 'Pemberitahuan Jam Operasional Kafe Sakura',
      en: 'Notice of Sakura Cafe Business Hours',
      my: 'ဆာကူရာ ကဖေး ဖွင့်လှစ်ချိန် အသိပေးချက်',
    },
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
    translation: {
      id: `Selamat Datang di Kafe Sakura!\n\n[Senin - Jumat]\n- Pukul 08:00 pagi - 19:00 malam\n- Paket Makan Siang (Sandwich + Kopi): 11:30 - 14:00\n\n[Sabtu & Minggu]\n- Pukul 09:00 pagi - 18:00 sore\n\nPerhatian: Setiap hari Rabu LIBUR (tutup).\nKami menanti kehadiran Anda dengan kopi yang nikmat dan kue buatan sendiri.`,
      en: `Welcome to Cafe Sakura!\n\n[Monday - Friday]\n- 8:00 AM - 7:00 PM\n- Lunch Set (Sandwich + Coffee): 11:30 AM - 2:00 PM\n\n[Saturday & Sunday]\n- 9:00 AM - 6:00 PM\n\nNote: Closed every Wednesday.\nWe look forward to welcoming you with delicious coffee and homemade cakes.`,
      my: `ဆာကူရာ ကဖေးမှ ကြိုဆိုပါသည်!\n\n[တနင်္လာ မှ သောကြာ]\n- နံနက် ၈:၀၀ မှ ညနေ ၇:၀၀ ထိ\n- နေ့လယ်စာတွဲ (ဆင်းဒဝှစ်ချ် + ကော်ဖီ)- ၁၁:၃၀ မှ ၁၄:၀၀ ထိ\n\n[စနေ နှင့် တနင်္ဂနွေ]\n- နံနက် ၉:၀၀ မှ ညနေ ၆:၀၀ ထိ\n\nသတိပြုရန်- ဗုဒ္ဓဟူးနေ့တိုင်း ဆိုင်ပိတ်ပါသည်။\nအရသာရှိသော ကော်ဖီနှင့် လက်လုပ် ကိတ်မုန့်များဖြင့် လာရောက်အားပေးမှုကို စောင့်မျှော်နေပါသည်။`,
    },
  },

  dokkai_n5_2: {
    title: {
      id: 'Email dari Tanaka-san (Ajakan Belajar Bersama)',
      en: 'Email from Tanaka-san (Study Invitation)',
      my: 'တနခထံမှ အီးမေးလ် (စာအတူတကွလေ့လာရန် ဖိတ်ခေါ်ချက်)',
    },
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
    translation: {
      id: `Ken-san, halo. Ini Tanaka.\n\nBesok hari Sabtu siang apakah ada waktu senggang?\nDemi persiapan ujian bahasa Jepang minggu depan, saya berencana belajar bersama Mary-san di perpustakaan mulai pukul 13:00.\nPerpustakaannya adalah Perpustakaan Chuo di depan stasiun.\n\nJika Ken-san bisa ikut, tolong kirim email ke saya paling lambat malam ini ya.\nSampai jumpa besok.`,
      en: `Hello Ken-san. This is Tanaka.\n\nDo you have free time tomorrow, Saturday afternoon?\nTo prepare for next week's Japanese exam, I plan to study with Mary-san at the library starting at 1:00 PM.\nThe library is Chuo Library located right in front of the station.\n\nIf you can join us Ken-san, please reply to me by tonight.\nSee you tomorrow.`,
      my: `မင်္ဂလာပါ ကန်စံ။ ကျွန်တော် တနခပါ။\n\nမနက်ဖြန် စနေနေ့ နေ့လယ်ပိုင်း အားလပ်ချိန်ရှိပါသလား။\nလာမည့်အပတ် ဂျပန်စာ စာမေးပွဲအတွက် ပြင်ဆင်ရန် မေရီစံနှင့်အတူ မွန်းလွဲ ၁:၀၀ နာရီမှစ၍ စာကြည့်တိုက်တွင် စာအတူလေ့လာရန် စီစဉ်ထားပါသည်။\nစာကြည့်တိုက်သည် ဘူတာရုံရှေ့ရှိ ချူအို စာကြည့်တိုက် ဖြစ်ပါသည်။\n\nကန်စံ လာရောက်နိုင်ပါက ယနေ့ည နောက်ဆုံးထား၍ ကျွန်တော့်ထံ အီးမေးလ်ပြန်ကြားပေးပါ။\nမနက်ဖြန် တွေ့ကြမည်။`,
    },
  },

  // N4 DOKKAI
  dokkai_n4_1: {
    title: {
      id: 'Aturan Pembuangan Sampah Apartemen',
      en: 'Apartment Waste Disposal Rules',
      my: 'တိုက်ခန်း အမှိုက်စွန့်ပစ်မှု စည်းမျဉ်းများ',
    },
    categoryLabel: {
      id: '情報検索 (Aturan Pemilahan Sampah Apartemen)',
      en: 'Information Search (Apartment Waste Rules)',
      my: '情報検索 (တိုက်ခန်း အမှိုက်ခွဲခြားစွန့်ပစ်မှု စည်းကမ်း)',
    },
    sourceType: {
      id: 'Lembar Pengumuman Apartemen',
      en: 'Apartment Notice Sheet',
      my: 'တိုက်ခန်း အသိပေး ကြေညာချက်',
    },
    translation: {
      id: `Kepada Seluruh Penghuni Apartemen:\n\nSaat membuang sampah, harap selalu mematuhi aturan berikut dan buanglah ke tempat penampungan lantai 1 sebelum pukul 08:30 pagi pada hari yang ditentukan.\n\n1. Sampah Mudah Terbakar (sisa makanan, kertas): Selasa & Jumat ke dalam kantong sampah resmi transparan.\n2. Sampah Daur Ulang (kaleng, botol kaca, botol plastik): Rabu. Harap bilas dengan air dan pisahkan tutupnya.\n3. Sampah Tidak Mudah Terbakar (gelas, logam): Kamis minggu ke-1 & ke-3 setiap bulan.\n\nPerhatian: Jangan membuang sampah pada malam hari sebelumnya.`,
      en: `To All Apartment Residents:\n\nWhen disposing of garbage, please strictly follow the rules below and take it to the 1st floor collection area before 8:30 AM on designated days.\n\n1. Burnable Garbage (food scraps, paper): Tuesdays & Fridays in designated transparent bags.\n2. Recyclable Garbage (cans, glass bottles, PET bottles): Wednesdays. Please rinse with water and remove caps.\n3. Non-Burnable Garbage (glass, metals): 1st & 3rd Thursdays of each month.\n\nNote: Never put garbage out on the previous night.`,
      my: `တိုက်ခန်းနေထိုင်သူများ အားလုံးသို့-\n\nအမှိုက်စွန့်ပစ်ရာတွင် အောက်ပါစည်းမျဉ်းများကို လိုက်နာပြီး သတ်မှတ်ထားသောနေ့များတွင် နံနက် ၈:၃၀ မတိုင်မီ ၁ ထပ်ရှိ စုစည်းရာနေရာသို့ စွန့်ပစ်ပေးကြပါရန်။\n\n၁။ မီးရှို့နိုင်သော အမှိုက်- အင်္ဂါနှင့် သောကြာနေ့။\n၂။ ပြန်လည်အသုံးပြုနိုင်သော အမှိုက် (သံဗူး၊ ဖန်ပုလင်း၊ ပလတ်စတစ်ပုလင်း)- ဗုဒ္ဓဟူးနေ့။ ရေဆေးပြီး အဖုံးခွာ၍ ခွဲခြားထည့်ပါ။\n၃။ မီးမရှို့နိုင်သော အမှိုက်- လစဉ် ၁ နှင့် ၃ ပတ်မြောက် ကြာသပတေးနေ့။\n\nသတိပြုရန်- ယခင်ညကတည်းက ကြိုတင်စွန့်ပစ်ခြင်း လုံးဝမပြုရ။`,
    },
  },

  dokkai_n4_2: {
    title: {
      id: 'Kenangan Menghadiri Festival Musim Panas di Jepang',
      en: 'Memories of Attending a Japanese Summer Festival',
      my: 'ဂျပန်နွေရာသီ ပွဲတော်တက်ရောက်ခဲ့သည့် အမှတ်တရ',
    },
    categoryLabel: {
      id: '短文 (Catatan Harian Budaya)',
      en: 'Short Passage (Cultural Diary)',
      my: '短文 (ယဉ်ကျေးမှုဆိုင်ရာ နေ့စဉ်မှတ်တမ်း)',
    },
    sourceType: {
      id: 'Esai Pengalaman Pribadi',
      en: 'Personal Experience Essay',
      my: 'ကိုယ်တွေ့ အတွေ့အကြုံ စာစီစာကုံး',
    },
    translation: {
      id: `Hari Sabtu minggu lalu, saya pergi bersama teman ke festival musim panas (natsu matsuri) di dekat kota.\n\nBanyak orang mengenakan yukata berwarna-warni. Di sepanjang jalan kuil berderet kedai yakisoba, takoyaki, dan es serut yang sangat meriah. Kami membeli es serut stroberi dan menikmatinya sambil berjalan-jalan.\n\nPukul 20:00 malam, kembang api meluncur ke langit musim panas dengan suara bergemuruh indah. Itu pengalaman pertama saya melihat kembang api sedekat itu di Jepang, kenangan yang tak terlupakan.`,
      en: `Last Saturday, I went with friends to a summer festival (natsu matsuri) near town.\n\nMany people were wearing colorful yukata. Along the shrine path lined vibrant stalls selling yakisoba, takoyaki, and shaved ice. We bought strawberry shaved ice and enjoyed it while walking around.\n\nAt 8:00 PM, fireworks shot into the night sky with breathtaking, thunderous sounds. It was my very first time watching fireworks from so close in Japan, an unforgettable memory.`,
      my: `ပြီးခဲ့သည့် စနေနေ့က ကျွန်တော်သည် သူငယ်ချင်းများနှင့်အတူ မြို့အနီးရှိ နွေရာသီပွဲတော် (နဆွတ် မဆွတ်ရိ) သို့ သွားရောက်ခဲ့ပါသည်။\n\nရောင်စုံ ယူခတ ဝတ်ဆင်ထားသူ အများအပြားကို တွေ့ရပါသည်။ နတ်ကွန်းလမ်းတစ်လျှောက်တွင် ယာခီဆိုဘ၊ တာကိုယာကီနှင့် ရေခဲခြစ် ရောင်းချသော ဈေးဆိုင်တန်းများ စည်ကားသိုက်မြိုက်စွာ ရှိနေပါသည်။ ကျွန်တော်တို့သည် စတော်ဘယ်ရီရေခဲခြစ် စားသောက်ရင်း လမ်းလျှောက်ခဲ့ကြပါသည်။\n\nည ၈:၀၀ နာရီတွင် မီးရှူးမီးပန်းများ ကောင်းကင်ယံသို့ ပစ်လွှတ်တက်သွားသည်မှာ အလွန်လှပလှပါသည်။ ဂျပန်တွင် ဤမျှနီးကပ်စွာ ပထမဆုံး မြင်တွေ့ဖူးခြင်းဖြစ်ပြီး မမေ့နိုင်သော အမှတ်တရတစ်ခု ဖြစ်ပါသည်။`,
    },
  },

  // N3 DOKKAI
  dokkai_n3_1: {
    title: {
      id: 'Komunikasi "Kuuki o Yomu" di Tempat Kerja Jepang',
      en: '"Reading the Air" Communication in the Japanese Workplace',
      my: 'ဂျပန်လုပ်ငန်းခွင်အတွင်း "လေထုကိုဖတ်ရှုခြင်း" (Kuuki o Yomu) ဆက်ဆံရေး',
    },
    categoryLabel: {
      id: '中文 (Wacana Komunikasi Bisnis)',
      en: 'Medium Passage (Business Discourse)',
      my: '中文 (စီးပွားရေးဆိုင်ရာ ဆက်ဆံရေးဆောင်းပါး)',
    },
    sourceType: {
      id: 'Kolom Budaya Kerja Jepang',
      en: 'Japanese Workplace Culture Column',
      my: 'ဂျပန်လုပ်ငန်းခွင် ယဉ်ကျေးမှု ကဏ္ဍဆောင်းပါး',
    },
    translation: {
      id: `Di tempat kerja Jepang, daripada menyampaikan tuntutan secara terang-terangan, kemampuan "membaca suasana (kuuki o yomu)" dari situasi sekitarnya dianggap sangat penting.\n\nMisalnya saat atasan berkata "proyek ini tampaknya agak sulit ya", dalam banyak situasi itu adalah instruksi tersirat untuk mempertimbangkan revisi rencana atau mencari bantuan rekan kerja.\n\nBagi orang asing, budaya tersirat ini terkadang membingungkan. Namun jika memahami bahwa masyarakat Jepang menghargai keharmonisan kelompok (wa) dan menghindari penolakan secara kasar, kita dapat melihat bahwa komunikasi ini adalah wujud kepekaan terhadap perasaan orang lain.`,
      en: `In Japanese workplaces, rather than expressing demands bluntly with direct words, the ability to "read the atmosphere (kuuki o yomu)" from the surrounding situation is considered essential.\n\nFor instance, when a supervisor says "this project seems a bit tough, doesn't it?", in many situations it is an implicit directive to consider revising the plan or seeking teammates' assistance.\n\nFor foreigners, this high-context culture can sometimes feel confusing. However, when we understand that Japanese society deeply cherishes group harmony (wa) and avoids harsh refusal, we can appreciate that this style of communication reflects thoughtful consideration for others' feelings.`,
      my: `ဂျပန်လုပ်ငန်းခွင်များတွင် တောင်းဆိုလိုသောအချက်များကို တိုက်ရိုက်ပွင့်လင်းစွာ ပြောဆိုခြင်းထက် ပတ်ဝန်းကျင်အခြေအနေကို ကြည့်ရှု၍ ရိပ်စားနားလည်နိုင်သော "လေထုကို ဖတ်ရှုခြင်း (Kuuki o Yomu)" စွမ်းရည်ကို အလွန်အရေးကြီးသည်ဟု ယူဆလေ့ရှိပါသည်။\n\nဥပမာအားဖြင့် အထက်လူကြီးက "ဤပရောဂျက်သည် အနည်းငယ် ခက်ခဲပုံရသည်နော်" ဟု ပြောဆိုသည့်အခါ အစီအစဉ်ကို ပြန်လည်သုံးသပ်ရန် သို့မဟုတ် လုပ်ဖော်ကိုင်ဖက်များထံမှ အကူအညီရယူရန် သွယ်ဝိုက်ညွှန်ကြားခြင်းဖြစ်လေ့ရှိပါသည်။\n\nနိုင်ငံခြားသားများအတွက် ဤသို့ သွယ်ဝိုက်သော ဆက်ဆံရေးသည် တစ်ခါတစ်ရံ နားလည်ရခက်ခဲနိုင်ပါသည်။ သို့သော် ဂျပန်လူ့အဖွဲ့အစည်းသည် အုပ်စုတွင်း သဟဇာတဖြစ်မှု (wa) ကို တန်ဖိုးထားပြီး တိုက်ရိုက်ငြင်းပယ်ခြင်းကို ရှောင်ကြဉ်လိုသော သဘောကို နားလည်ပါက အခြားသူများ၏ စိတ်ခံစားချက်အပေါ် ထောက်ထားစာနာမှုဖြစ်ကြောင်း သိမြင်နိုင်ပါသည်။`,
    },
  },

  dokkai_n3_2: {
    title: {
      id: 'Pemberitahuan Pemeliharaan Server Cloud Perusahaan',
      en: 'Company Cloud Server Maintenance Notice',
      my: 'ကုမ္ပဏီ Cloud Server ပြုပြင်ထိန်းသိမ်းမှု အသိပေးချက်',
    },
    categoryLabel: {
      id: '情報検索 (Pemeliharaan Sistem IT)',
      en: 'Information Search (IT Maintenance Notice)',
      my: '情報検索 (IT စနစ် ပြုပြင်ထိန်းသိမ်းမှု အသိပေးချက်)',
    },
    sourceType: {
      id: 'Pemberitahuan Resmi Divisi Sistem',
      en: 'Official Systems Division Notice',
      my: 'စနစ်ဌာနခွဲ တရားဝင် အသိပေးချက်',
    },
    translation: {
      id: `[PENTING] Pemberitahuan Penghentian Sementara Terkait Pembaruan Server Cloud\n\nTerima kasih atas kerja samanya.\nGuna meningkatkan keandalan sistem dan pembaruan patch keamanan, server penyimpanan cloud perusahaan akan dihentikan sementara pada:\n\n- Waktu Penghentian: Minggu, 15 November pukul 01:00 - 05:00 subuh (4 jam).\n- Layanan Terdampak: Sinkronisasi file cloud, drive bersama, dan akses dokumen daring.\n\nSelama rentang waktu ini, seluruh file cloud tidak dapat diakses. Pastikan dokumen penting yang dibutuhkan saat akhir pekan telah diunduh ke komputer lokal Anda sebelum hari Jumat pukul 18:00.`,
      en: `[IMPORTANT] Notice of Temporary Downtime for Regular Cloud Server Updates\n\nThank you for your everyday cooperation.\nTo enhance system reliability and apply critical security patches, the company cloud storage server will be temporarily suspended:\n\n- Downtime: Sunday, November 15, from 1:00 AM to 5:00 AM (4 hours).\n- Affected Services: Cloud file sync, shared drives, and online document access.\n\nDuring this window, cloud files cannot be accessed. Please ensure that critical documents required over the weekend are downloaded to your local computer drive before Friday at 6:00 PM.`,
      my: `[အရေးကြီး] Cloud Server ပုံမှန် အဆင့်မြှင့်တင်ခြင်းကြောင့် ယာယီရပ်ဆိုင်းမည့် အသိပေးချက်\n\nနေ့စဉ် ပူးပေါင်းပါဝင်ဆောင်ရွက်မှုအတွက် ကျေးဇူးတင်ရှိပါသည်။\nစနစ်၏ စိတ်ချရမှုကို မြှင့်တင်ရန်အတွက် ကုမ္ပဏီ၏ Cloud Storage Server ကို အောက်ပါအတိုင်း ယာယီရပ်ဆိုင်းမည်ဖြစ်ပါသည်-\n\n- ရပ်ဆိုင်းမည့်အချိန်- နိုဝင်ဘာ ၁၅ ရက် (တနင်္ဂနွေနေ့) နံနက် ၀၁:၀၀ မှ ၀၅:၀၀ နာရီထိ (၄ နာရီကြာ)။\n- သက်ရောက်မည့် ဝန်ဆောင်မှုများ- Cloud ဖိုင်များ ချိတ်ဆက်ခြင်း၊ မျှဝေထားသော drive များ ဖွင့်ဖတ်ခြင်း။\n\nဤအချိန်အတွင်း Cloud ပေါ်ရှိ ဖိုင်များကို ဝင်ရောက်ကြည့်ရှု၍ မရနိုင်ပါ။ အရေးကြီးစာရွက်စာတမ်းများကို သောကြာနေ့ ညနေ ၆:၀၀ မတိုင်မီ မိမိတို့၏ ကွန်ပျူတာအတွင်း ကြိုတင်ဒေါင်းလုဒ်ဆွဲထားကြပါရန်။`,
    },
  },

  // N2 DOKKAI
  dokkai_n2_1: {
    title: {
      id: 'Pemberitahuan Penghentian Sistem Terkait Pemeliharaan Berkala',
      en: 'System Downtime Notice for Scheduled Maintenance',
      my: 'ပုံမှန်ပြုပြင်ထိန်းသိမ်းမှုကြောင့် စနစ်ယာယီရပ်ဆိုင်းမည့် အသိပေးချက်',
    },
    categoryLabel: {
      id: '情報検索 (Email Pemeliharaan Sistem IT)',
      en: 'Information Search (IT Maintenance Notice)',
      my: '情報検索 (IT စနစ် ပြုပြင်ထိန်းသိမ်းမှု အီးမေးလ်)',
    },
    sourceType: {
      id: 'Surel Resmi Divisi Manajemen IT',
      en: 'Official IT Management Email',
      my: 'IT စီမံခန့်ခွဲမှုဌာန တရားဝင် အီးမေးလ်',
    },
    translation: {
      id: `Kepada Seluruh Karyawan:\n\nPada hari Sabtu minggu depan (24 Oktober) mulai pukul 22:00 hingga Minggu keesokan harinya pukul 06:00 pagi, akan dilakukan penguatan keamanan server inti dan pemeliharaan berkala untuk seluruh perusahaan.\n\nSehubungan dengan hal tersebut, selama rentang waktu tersebut, akses ke jaringan kantor dan koneksi kerja jarak jauh (remote) dari luar akan terputus sepenuhnya. Jika data yang sedang dikerjakan tidak disimpan saat waktu pemeliharaan berlangsung, terdapat risiko hilangnya data. Oleh karena itu, pastikan untuk menyimpan seluruh file pekerjaan dan mematikan daya PC sebelum pulang pada hari Jumat.\n\nSelain itu, meskipun pekerjaan selesai lebih cepat dari jadwal, dimohon untuk tidak melakukan login hingga proses verifikasi selesai pukul 06:00 pagi. Mohon maaf atas ketidaknyamanan ini dan terima kasih atas kerja samanya.\n\nDepartemen Umum - Divisi Manajemen IT`,
      en: `To All Employees:\n\nFrom 10:00 PM next Saturday (October 24) until 6:00 AM the following Sunday morning, core server security enhancements and regular maintenance will be carried out across the company.\n\nAccordingly, during this maintenance period, all access to the office network and external remote connections will be completely disconnected. Any unsaved working data risks being lost. Therefore, please be sure to save all work files and turn off your PC power before leaving the office on Friday.\n\nFurthermore, even if the maintenance finishes ahead of schedule, please refrain from logging in until the verification process completes at 6:00 AM. We apologize for the inconvenience and appreciate your cooperation.\n\nGeneral Affairs Department - IT Management Division`,
      my: `ဝန်ထမ်းများအားလုံးသို့-\n\nလာမည့် စနေနေ့ (အောက်တိုဘာ ၂၄ ရက်) ည ၁၀ နာရီမှ နောက်တစ်နေ့ တနင်္ဂနွေနေ့ နံနက် ၆ နာရီအထိ ကုမ္ပဏီတစ်ခုလုံးရှိ ပင်မဆာဗာ လုံခြုံရေးမြှင့်တင်ခြင်းနှင့် ပုံမှန်ပြုပြင်ထိန်းသိမ်းခြင်း လုပ်ငန်းများကို ဆောင်ရွက်မည်ဖြစ်ပါသည်။\n\nသို့ဖြစ်ပါ၍ ဤအချိန်အတွင်း ကုမ္ပဏီတွင်းကွန်ရက်နှင့် အပြင်မှ အဝေးထိန်းစနစ်ဖြင့် ချိတ်ဆက်ခြင်း (remote access) ကို လုံးဝ အသုံးပြုနိုင်မည်မဟုတ်ပါ။ ပြုပြင်ထိန်းသိမ်းနေစဉ်အတွင်း သိမ်းဆည်းမထားသော အချက်အလက်များ ပျက်စီးဆုံးရှုံးနိုင်သည့် အန္တရာယ်ရှိသောကြောင့် သောကြာနေ့ ရုံးဆင်းချိန်မတိုင်မီ လုပ်ငန်းဆိုင်ရာ ဖိုင်များအားလုံးကို သေချာစွာ သိမ်းဆည်းပြီး ကွန်ပျူတာ ပါဝါကို ပိတ်ထားပေးကြပါရန် အသိပေးအပ်ပါသည်။\n\nထို့အပြင် လုပ်ငန်းသည် သတ်မှတ်ချိန်ထက် စောစီးစွာ ပြီးဆုံးသွားသော်လည်း စစ်ဆေးမှုများ ပြီးစီးမည့် နံနက် ၆ နာရီမတိုင်မီအထိ လော့ဂ်အင် (login) မဝင်ကြပါရန် မေတ္တာရပ်ခံအပ်ပါသည်။ အဆင်မပြေမှုများအတွက် တောင်းပန်အပ်ပြီး ပူးပေါင်းပါဝင်ဆောင်ရွက်ပေးမှုအတွက် ကျေးဇူးတင်ရှိပါသည်။\n\nအထွေထွေစီမံခန့်ခွဲရေးဌာန - IT စီမံခန့်ခွဲမှုဌာနခွဲ`,
    },
  },

  dokkai_n2_2: {
    title: {
      id: 'Aturan Pembuangan Sampah Berukuran Besar di Apartemen',
      en: 'Rules for Oversized Garbage Disposal in Apartments',
      my: 'တိုက်ခန်းအတွင်း အရွယ်အစားကြီးမားသော အမှိုက်များ စွန့်ပစ်မှု စည်းမျဉ်း',
    },
    categoryLabel: {
      id: '短文 (Pengumuman Pengelola Gedung)',
      en: 'Short Passage (Building Management Notice)',
      my: '短文 (အဆောက်အအုံ စီမံခန့်ခွဲရေး အသိပေးချက်)',
    },
    sourceType: {
      id: 'Pemberitahuan Papan Informasi Apartemen',
      en: 'Apartment Notice Board Announcement',
      my: 'တိုက်ခန်း သတင်းသင်ပုန်း အသိပေးချက်',
    },
    translation: {
      id: `Kepada Seluruh Penghuni:\n\nAkhir-akhir ini, banyak terjadi kasus di mana perabot besar dan kasur dibuang ke tempat sampah biasa tanpa pendaftaran terlebih dahulu. Sampah berukuran besar (sodai gomi) tidak dapat diangkut oleh pengumpul sampah biasa.\n\nPenghuni yang ingin membuang barang berukuran besar diwajibkan:\n1. Menghubungi Pusat Layanan Sampah Kota melalui telepon atau situs web untuk melakukan reservasi penjemputan.\n2. Membeli "Stiker Retribusi Sampah Besar" di minimarket terdekat dan menempelkannya pada barang tersebut.\n3. Mengeluarkan barang ke lokasi penjemputan hanya pada pagi hari tanggal yang telah ditentukan.\n\nMohon kerja sama seluruh penghuni demi menjaga kebersihan lingkungan bersama.`,
      en: `To All Residents:\n\nRecently, there have been numerous instances where oversized furniture and mattresses were discarded at the regular collection area without prior registration. Oversized garbage (sodai gomi) cannot be picked up by standard municipal collection.\n\nResidents who wish to dispose of oversized items must:\n1. Contact the Municipal Garbage Collection Center by phone or official website to make a pickup reservation.\n2. Purchase an "Oversized Waste Disposal Ticket" at a nearby convenience store and attach it to the item.\n3. Bring the item to the designated collection spot only on the morning of the reserved date.\n\nWe ask for everyone's cooperation to keep our communal environment clean and pleasant.`,
      my: `တိုက်ခန်းနေထိုင်သူများ အားလုံးသို့-\n\nမကြာသေးမီက ကြိုတင်မှတ်ပုံတင်ခြင်းမပြုဘဲ ပရိဘောဂကြီးများနှင့် မွေ့ရာများကို သာမန်အမှိုက်ပစ်ရာနေရာတွင် စွန့်ပစ်မှုများ ဖြစ်ပွားလျက်ရှိပါသည်။ အရွယ်အစားကြီးမားသော အမှိုက်များ (Sodai Gomi) ကို ပုံမှန်အမှိုက်သိမ်းယာဉ်များက သိမ်းဆည်းပေးမည်မဟုတ်ပါ။\n\nအရွယ်အစားကြီးမားသော ပစ္စည်းများကို စွန့်ပစ်လိုပါက အောက်ပါအတိုင်း ဆောင်ရွက်ရပါမည်-\n၁။ မြို့တော် အမှိုက်သိမ်းဆည်းရေးဌာနသို့ ကြိုတင်ရက်ချိန်းယူပါ။\n၂။ ကွန်ဗီနီယန့်စတိုးတွင် "အရွယ်အစားကြီး အမှိုက်စွန့်ပစ်ခွင့် တံဆိပ်ကတ်ပြား" ဝယ်ယူကပ်ပါ။\n၃။ သတ်မှတ်ထားသောနေ့ နံနက်ပိုင်းတွင်သာ စွန့်ပစ်ရာနေရာသို့ ထုတ်ထားပါ။\n\nပတ်ဝန်းကျင်သန့်ရှင်းသာယာရေးအတွက် အားလုံး ပူးပေါင်းပါဝင်ပေးကြပါရန်။`,
    },
  },

  dokkai_n2_3: {
    title: {
      id: 'Peringatan Batas Waktu Penggantian Biaya Perjalanan Dinas',
      en: 'Reminder: Deadline for Business Travel Expense Reimbursement',
      my: 'လုပ်ငန်းခရီးစရိတ် တောင်းခံမှု နောက်ဆုံးရက် သတိပေးချက်',
    },
    categoryLabel: {
      id: '短文 (Pemberitahuan Internal Keuangan)',
      en: 'Short Passage (Internal Finance Notice)',
      my: '短文 (ဘဏ္ဍာရေးဌာန တွင်းအသိပေးချက်)',
    },
    sourceType: {
      id: 'Surel Kebijakan Keuangan Internal',
      en: 'Internal Financial Policy Email',
      my: 'ဘဏ္ဍာရေးမူဝါဒ တွင်းအီးမေးလ်',
    },
    translation: {
      id: `Kepada Seluruh Karyawan:\n\nSehubungan dengan penutupan buku anggaran periode ini, berikut kami ingatkan batas akhir pengajuan penggantian biaya perjalanan dinas dan transportasi:\n\n- Batas Pengajuan: Jumat, 30 Oktober pukul 17:00.\n- Dokumen yang Dibutuhkan: Formulir klaim daring, struk/tiket asli, dan laporan hasil dinas.\n\nPengajuan yang melewati tenggat waktu tidak akan dapat diproses dalam periode anggaran ini dan pembayarannya akan ditunda hingga bulan berikutnya. Bagi karyawan yang baru kembali dari perjalanan dinas, harap segera menyelesaikan prosedur administrasi.`,
      en: `To All Employees:\n\nIn connection with the fiscal period-end closing, please be reminded of the strict deadline for submitting business travel and transportation expense reimbursements:\n\n- Submission Deadline: Friday, October 30, at 5:00 PM.\n- Required Documents: Online claim form, original receipts/tickets, and business trip report.\n\nSubmissions received after the deadline cannot be processed within this budget cycle and reimbursement will be postponed to the following month. Employees returning from business trips are urged to complete administrative filings promptly.`,
      my: `ဝန်ထမ်းများအားလုံးသို့-\n\nဘဏ္ဍာရေးကာလ စာရင်းပိတ်သိမ်းခြင်းနှင့်စပ်လျဉ်း၍ လုပ်ငန်းခရီးစရိတ်များ တောင်းခံမှု နောက်ဆုံးရက်ကို အောက်ပါအတိုင်း သတိပေးအပ်ပါသည်-\n\n- တင်ပြရမည့် နောက်ဆုံးရက်- အောက်တိုဘာ ၃၀ (သောကြာနေ့) ညနေ ၅:၀၀ နာရီ။\n- လိုအပ်သော စာရွက်စာတမ်းများ- အွန်လိုင်းတောင်းခံလွှာ၊ မူရင်း ပြေစာများနှင့် ခရီးစဉ် အစီရင်ခံစာ။\n\nသတ်မှတ်ရက်ထက် ကျော်လွန်သော တောင်းခံမှုများကို နောက်လသို့ ရွှေ့ဆိုင်းမည်ဖြစ်ပါသည်။ လုပ်ငန်းခရီးမှ ပြန်လည်ရောက်ရှိလာသော ဝန်ထမ်းများသည် စာရွက်စာတမ်းကိစ္စရပ်များကို အမြန်ဆုံး ပြီးစီးအောင် ဆောင်ရွက်ပေးကြပါရန်။`,
    },
  },

  dokkai_n2_4: {
    title: {
      id: 'Psikologi "Menunda-nunda" dan Manajemen Emosi',
      en: 'Psychology of Procrastination and Emotion Management',
      my: '"အချိန်ဆွဲခြင်း" ၏ စိတ်ပညာနှင့် စိတ်ခံစားမှု စီမံခန့်ခွဲခြင်း',
    },
    categoryLabel: {
      id: '中文 (Psikologi & Pengembangan Diri)',
      en: 'Medium Passage (Psychology & Self-Development)',
      my: '中文 (စိတ်ပညာနှင့် ကိုယ်ပိုင်ဖွံ့ဖြိုးတိုးတက်ရေး)',
    },
    sourceType: {
      id: 'Artikel Populer Psikologi Kognitif',
      en: 'Popular Cognitive Psychology Article',
      my: 'သိမြင်မှုစိတ်ပညာ ဆောင်းပါး',
    },
    translation: {
      id: `Ketika kita dihadapkan pada tugas penting, kita sering kali tanpa sengaja menundanya dan berpikir "bisa dikerjakan besok". Secara umum, perilaku "menunda-nunda" (procrastination) kerap dianggap sebagai akibat dari kemalasan atau kurangnya manajemen waktu.\n\nNamun menurut penelitian psikologi kognitif modern, hakikat dari menunda-nunda sebenarnya bukan masalah waktu, melainkan "penghindaran terhadap emosi negatif". Ketika berhadapan dengan tugas yang berisiko tinggi atau rumit, alam bawah sadar merasakan kecemasan, ketakutan akan kegagalan, atau rasa bosan. Untuk melepaskan diri dari perasaan tidak nyaman itu, otak mengalihkan fokus ke aktivitas lain yang memberi rasa puas instan—seperti membersihkan meja atau melihat media sosial.\n\nOleh karena itu, kunci untuk mengatasi kebiasaan menunda bukanlah memaksakan disiplin yang keras, melainkan memecah tugas besar menjadi bagian-bagian sangat kecil agar kecemasan mereda dan langkah pertama terasa mudah.`,
      en: `When confronted with critical tasks, we often put them off, telling ourselves "I can just do it tomorrow." Conventionally, procrastination is commonly diagnosed as laziness or poor time-management skills.\n\nHowever, cognitive psychology reveals that procrastination is not a deficit of time, but rather "the avoidance of negative emotions." Facing high-stakes challenges, our subconscious experiences anxiety, fear of failure, or acute boredom. To temporarily escape those uncomfortable feelings, our brain shifts attention to unrelated activities offering instant micro-gratification—such as tidying up our desk or browsing social media.\n\nConsequently, overcoming procrastination requires breaking monumental tasks into minuscule steps so anxiety dissipates and starting feels effortless.`,
      my: `ကျွန်ုပ်တို့သည် အရေးကြီးသော တာဝန်များနှင့် ရင်ဆိုင်ရသည့်အခါ "မနက်ဖြန်မှ လုပ်လိုက်မည်" ဟု အချိန်ဆွဲမိတတ်ကြပါသည်။ အချိန်ဆွဲခြင်းသည် ပျင်းရိခြင်း သို့မဟုတ် အချိန်စီမံခန့်ခွဲမှု ညံ့ဖျင်းခြင်းကြောင့်ဟု ယူဆလေ့ရှိကြပါသည်။\n\nသို့သော် သိမြင်မှုစိတ်ပညာ သုတေသနများအရ အချိန်ဆွဲခြင်း၏ အဓိကဇစ်မြစ်သည် "မနှစ်မြို့ဖွယ် စိတ်ခံစားချက်များကို ရှောင်လွှဲလိုခြင်း" ဖြစ်သည်ဟု ဆိုပါသည်။ ခက်ခဲသော လုပ်ငန်းများနှင့် ရင်ဆိုင်ရသည့်အခါ စိုးရိမ်ပူပန်မှု၊ ပျင်းရိမှုစသည့် စိတ်ဖိစီးမှုများကို မသိစိတ်က ခံစားရပြီး ထိုမသက်မသာခံစားချက်မှ ထွက်ပြေးရန်အတွက် အခြားအလုပ်များသို့ ဦးနှောက်က လွှဲပြောင်းပေးလိုက်ခြင်း ဖြစ်ပါသည်။\n\nထို့ကြောင့် အချိန်ဆွဲခြင်းကို ကျော်လွှားရန်အတွက် ကြီးမားသော လုပ်ငန်းများကို အလွန်သေးငယ်သော အဆင့်များအဖြစ် ခွဲခြမ်းစိတ်ဖြာ၍ စတင်နိုင်ရန် ဆောင်ရွက်ခြင်းက အဓိကသော့ချက်ဖြစ်ပါသည်။`,
    },
  },

  dokkai_n2_5: {
    title: {
      id: 'Penyebaran Aplikasi Pesan dan Tekanan "Balasan Cepat"',
      en: 'Spread of Messaging Apps and the Pressure of "Instant Replies"',
      my: 'မက်ဆေ့ခ်ျ အက်ပ်များ ခေတ်စားလာခြင်းနှင့် "ချက်ချင်းပြန်ကြားရမည့်" ဖိအား',
    },
    categoryLabel: {
      id: '中文 (Sosiologi Digital & Gaya Hidup)',
      en: 'Medium Passage (Digital Sociology & Lifestyle)',
      my: '中文 (ဒစ်ဂျစ်တယ် လူမှုဗေဒနှင့် နေထိုင်မှုပုံစံ)',
    },
    sourceType: {
      id: 'Esai Opini Transformasi Sosial',
      en: 'Social Transformation Opinion Essay',
      my: 'လူမှုအပြောင်းအလဲ သဘောထား စာစီစာကုံး',
    },
    translation: {
      id: `Dengan maraknya ponsel pintar dan aplikasi pesan instan, kita kini dapat terhubung secara real-time kapan pun dan di mana pun. Kemudahan ini di satu sisi melipatgandakan kecepatan bisnis dan mempererat hubungan personal, namun di sisi lain melahirkan fenomena baru: tekanan psikologis untuk "segera membalas pesan (sokuresu)".\n\nKetika fitur tanda baca menunjukkan pesan telah dibaca, pengirim mulai menaruh harapan bahwa balasan akan segera datang. Akibatnya, penerima merasa terbebani dan cemas jika tidak langsung merespons, khawatir dianggap acuh.\n\nBanyak pakar menyarankan pentingnya menetapkan "batasan digital"—bahwa tidak semua pesan harus dibalas detik itu juga, dan ketenangan pikiran memerlukan waktu hening tanpa notifikasi.`,
      en: `With the ubiquity of smartphones and messaging apps, we can now connect in real time whenever and wherever we are. While this convenience has exponentially accelerated business communication and personal ties, it has simultaneously spawned a modern phenomenon: the psychological pressure of "instant replies (sokuresu)."\n\nWhen read receipts indicate that a message has been opened, senders inevitably harbor implicit expectations for an immediate answer. Consequently, recipients suffer anxious urgency, fearing that delayed responses might be misconstrued as indifference.\n\nExperts increasingly advocate for establishing clear "digital boundaries"—recognizing that not every communication demands instant answers, and that mental tranquility requires protected intervals free from notification pings.`,
      my: `စမတ်ဖုန်းများနှင့် မက်ဆေ့ခ်ျအက်ပ်များ ခေတ်စားလာသည်နှင့်အမျှ ကျွန်ုပ်တို့သည် အချိန်နှင့်တစ်ပြေးညီ ဆက်သွယ်နိုင်လာကြပြီ ဖြစ်ပါသည်။ ဤအဆင်ပြေမှုသည် အခြားတစ်ဖက်တွင် "မက်ဆေ့ခ်ျကို ချက်ချင်းပြန်ကြားရမည် (Sokuresu)" ဟူသော စိတ်ပိုင်းဆိုင်ရာ ဖိအားအသစ်တစ်ခုကို မွေးဖွားပေးခဲ့ပါသည်။\n\nမက်ဆေ့ခ်ျကို ဖတ်ရှုပြီးကြောင်း ပြသသည့် စနစ်များကြောင့် ပေးပို့သူသည် ချက်ချင်းအကြောင်းပြန်ချက်ကို မျှော်လင့်လာတတ်ပါသည်။ ရလဒ်အနေဖြင့် လက်ခံသူသည် ချက်ချင်း အကြောင်းမပြန်ပါက ဂရုမစိုက်ရာရောက်မည်ကို စိုးရိမ်ပြီး ဖိအားများနှင့် ရင်ဆိုင်ရလေ့ရှိပါသည်။\n\nပညာရှင်များက ဒစ်ဂျစ်တယ် ဆက်သွယ်ရေးတွင် သင့်တင့်သော အတိုင်းအတာတစ်ခု သတ်မှတ်ထားရန်နှင့် စိတ်အေးချမ်းသာစွာ အာရုံစူးစိုက်နိုင်ရန် အသိပေးချက်များ (notifications) ကင်းဝေးသည့် အချိန်ယူရန် လိုအပ်ကြောင်း အကြံပြုထားကြပါသည်။`,
    },
  },

  dokkai_n2_6: {
    title: {
      id: 'Panduan Penggunaan Bilik Belajar Mandiri Perpustakaan Pusat',
      en: 'Central City Library Study Booth Usage Guide',
      my: 'ဗဟိုမြို့တော် စာကြည့်တိုက် တစ်ဦးချင်း စာလေ့လာခန်း အသုံးပြုမှု လမ်းညွှန်',
    },
    categoryLabel: {
      id: '長文 (Panduan Fasilitas Publik)',
      en: 'Long Passage (Public Facility Guide)',
      my: '長文 (အများပြည်သူဆိုင်ရာ အဆောက်အအုံ လမ်းညွှန်)',
    },
    sourceType: {
      id: 'Buku Panduan Layanan Perpustakaan',
      en: 'Library Service User Manual',
      my: 'စာကြည့်တိုက် ဝန်ဆောင်မှု အသုံးပြုသူ လက်စွဲ',
    },
    translation: {
      id: `[Panduan Penggunaan Bilik Belajar Mandiri Perpustakaan Pusat Kota (Lantai 2)]\n\n1. Syarat Pengguna:\nHanya berlaku bagi pemegang Kartu Anggota Perpustakaan Pusat Kota minimal siswa SMP.\n\n2. Tata Cara Reservasi:\n- Silakan mendaftar di terminal mesin lantai 2 pada hari kunjungan.\n- Sesi: Pagi (09:30-13:00), Siang (13:30-17:00), Malam (17:30-20:30 hari kerja).\n- Maksimal 1 sesi per hari. Jika bilik kosong setelah 30 menit, perpanjangan dapat diajukan.\n\n3. Aturan Ketertiban:\n- Dilarang keras makan. Minuman diperbolehkan dalam botol tertutup.\n- Penggunaan laptop hanya di bilik 1-10.`,
      en: `[Usage Guide for Individual Study Booths, Central City Library (2nd Floor)]\n\n1. Eligibility:\nAvailable exclusively to Central City Library cardholders who are junior high school students or older.\n\n2. Reservation Procedure:\n- Please register at the 2nd floor automated terminal on the day of your visit.\n- Sessions: Morning (9:30 AM - 1:00 PM), Afternoon (1:30 PM - 5:00 PM), Evening (5:30 PM - 8:30 PM weekdays).\n- Up to 1 session per day. If booths remain vacant after 30 minutes, extensions may be requested.\n\n3. Regulations:\n- Eating is strictly prohibited. Beverages are permitted only in tight lids.\n- Laptop use is restricted to Booths 1-10.`,
      my: `[ဗဟိုမြို့တော် စာကြည့်တိုက် တစ်ဦးချင်း စာလေ့လာခန်း အသုံးပြုမှု လမ်းညွှန် (ဒုတိယထပ်)]\n\n၁။ အသုံးပြုခွင့်ရှိသူများ-\nအလယ်တန်းကျောင်းသားအရွယ်နှင့် အထက်ရှိသော ဗဟိုစာကြည့်တိုက် အသင်းဝင်ကတ် ကိုင်ဆောင်ထားသူများသာ အသုံးပြုနိုင်ပါသည်။\n\n၂။ ကြိုတင်စာရင်းသွင်းခြင်း-\n- ဒုတိယထပ်ရှိ အလိုအလျောက် မှတ်ပုံတင်စက်တွင် စာရင်းသွင်းပါ။\n- အချိန်ပိုင်း- နံနက် (၀၉:၃၀-၁၃:၀၀)၊ နေ့လယ် (၁၃:၃၀-၁၇:၀၀)၊ ညနေ (၁၇:၃၀-၂၀:၃၀ ရုံးဖွင့်ရက်)။\n- လူတစ်ဦးလျှင် တစ်နေ့လျှင် ၁ ကြိမ်သာ အသုံးပြုခွင့်ရှိသည်။ မိနစ် ၃၀ ကြာသည်အထိ နေရာလွတ်ရှိပါက အချိန်တိုးမြှင့်ခွင့် လျှောက်ထားနိုင်သည်။\n\n၃။ စည်းကမ်းချက်များ-\n- အစားအစာစားသောက်ခြင်း လုံးဝမပြုရ။ အဖုံးလုံသော ရေဘူးသာ ခွင့်ပြုသည်။\n- လက်ပ်တော့ပ် အသုံးပြုခြင်းကို အခန်း ၁ မှ ၁၀ သာ ခွင့်ပြုသည်။`,
    },
  },

  // N1 DOKKAI
  dokkai_n1_1: {
    title: {
      id: 'Kemajuan Sains Teknologi dan Agensi Otonom Manusia',
      en: 'Technological Progress and Human Autonomy',
      my: 'သိပ္ပံနည်းပညာ တိုးတက်မှုနှင့် လူသားတို့၏ ကိုယ်ပိုင်ဆုံးဖြတ်နိုင်စွမ်း',
    },
    categoryLabel: {
      id: '短文 (Filsafat Sains & Masyarakat Modern)',
      en: 'Short Passage (Philosophy of Science)',
      my: '短文 (သိပ္ပံအတွေးအခေါ်နှင့် ခေတ်သစ်လူ့အဖွဲ့အစည်း)',
    },
    sourceType: {
      id: 'Esai Kritik Peradaban Kontemporer',
      en: 'Contemporary Civilization Essay',
      my: 'ခေတ်ပြိုင် ယဉ်ကျေးမှု ဝေဖန်ရေး စာစီစာကုံး',
    },
    translation: {
      id: `Di era modern saat kecerdasan buatan berkembang pesat, kita sering kali terpesona oleh kenyamanan algoritma prediktif. Mulai dari rekomendasi informasi hingga keputusan medis dan hukum, mesin semakin mengambil alih pertimbangan manusia.\n\nNamun kemudahan otomatisasi ini membawa konsekuensi: terkikisnya "kemampuan mengambil keputusan secara otonom". Ketika manusia terbiasa menyerahkan pilihan rumit kepada data, kita melupakan proses pergulatan batin dan tanggung jawab etis atas kegagalan.\n\nSains semestinya memperluas horizon kebebasan manusia, bukan menggantikannya. Mempertahankan otonomi berpikir kritis di tengah kepungan otomatisasi adalah ujian eksistensi manusia abad ini.`,
      en: `In the contemporary era where artificial intelligence advances at breakneck speed, we are perpetually captivated by predictive algorithms. From information feeds to medical and legal deliberations, machines progressively usurp human judgment.\n\nYet this seamless automation entails a covert consequence: the gradual atrophy of our "autonomous decision-making capacity." When humans habitually delegate complex dilemmas to statistical data, we slowly forget the profound internal struggle and ethical culpability inherent in failure.\n\nScience ought to expand the horizon of human freedom, not supplant it. Safeguarding critical intellectual autonomy amidst pervasive automation remains the quintessential test of our century.`,
      my: `ဉာဏ်ရည်တု (AI) ကဲ့သို့သော ခေတ်မီနည်းပညာများ အလွန်လျင်မြန်စွာ တိုးတက်လာသည့် မျက်မှောက်ခေတ်တွင် ကျွန်ုပ်တို့သည် အယ်လ်ဂိုရီသမ်များ၏ အဆင်ပြေလွယ်ကူမှုအပေါ် စွဲမက်နေတတ်ကြပါသည်။ သတင်းအချက်အလက်များမှစ၍ ဆေးဘက်ဆိုင်ရာနှင့် ဥပဒေရေးရာ ဆုံးဖြတ်ချက်များအထိ စက်ပစ္စည်းများသည် လူသားတို့၏ နေရာကို တဖြည်းဖြည်း အစားထိုးလာနေကြပါသည်။\n\nသို့သော် ဤအလိုအလျောက်စနစ်နောက်ကွယ်တွင် "ကိုယ်ပိုင်ဆုံးဖြတ်နိုင်စွမ်း လျော့ပါးလာခြင်း" ဟူသော အကျိုးဆက်တစ်ခု ရှိနေပါသည်။ လူသားတို့သည် ရွေးချယ်မှုများကို ကိန်းဂဏန်းများထံ လွှဲပြောင်းပေးလေ့ရှိလာသောအခါ စိတ်ပိုင်းဆိုင်ရာ ရုန်းကန်မှုများနှင့် ကျရှုံးမှုများအပေါ် တာဝန်ယူလိုစိတ်တို့ကို မေ့လျော့လာကြပါသည်။\n\nသိပ္ပံပညာသည် လူသားတို့၏ လွတ်လပ်ခွင့်နယ်ပယ်ကို ချဲ့ထွင်ပေးသင့်ပြီး အစားထိုးခြင်း မဖြစ်သင့်ပါ။ ဝေဖန်ပိုင်းခြားနိုင်သော ကိုယ်ပိုင်ဆုံးဖြတ်နိုင်စွမ်းကို ထိန်းသိမ်းထားခြင်းသည် ဤရာစုနှစ်၏ အကြီးမားဆုံး စိန်ခေါ်မှုတစ်ခု ဖြစ်ပါသည်။`,
    },
  },

  dokkai_n1_2: {
    title: {
      id: 'Estetika "Ma" (Jeda Ruang-Waktu) dalam Budaya Komunikasi Jepang',
      en: 'The Aesthetics of "Ma" (Negative Space) in Japanese Communication',
      my: 'ဂျပန်ဆက်ဆံရေး ယဉ်ကျေးမှုရှိ "Ma" (နေရာလွတ်/အချိန်ပိုင်း) အလှတရား',
    },
    categoryLabel: {
      id: '中文 (Filsafat Budaya & Semiotika)',
      en: 'Medium Passage (Cultural Semiotics)',
      my: '中文 (ယဉ်ကျေးမှု အတွေးအခေါ်နှင့် ဆက်ဆံရေးပညာ)',
    },
    sourceType: {
      id: 'Kajian Komparatif Budaya Timur-Barat',
      en: 'East-West Cultural Comparative Study',
      my: 'အရှေ့-အနောက် ယဉ်ကျေးမှု နှိုင်းယှဉ်လေ့လာချက်',
    },
    translation: {
      id: `Dalam sudut pandang kebahasaan Barat, komunikasi umumnya dipahami sebagai proses pertukaran simbol vokal yang padat dan terstruktur. Keheningan kerap dinilai sebagai kekosongan atau kegagalan artikulasi.\n\nSebaliknya, dalam estetika tradisional Jepang, ruang kosong dan keheningan—dikenal sebagai "Ma (間)"—bukanlah ruang hampa, melainkan ruang bermakna yang sarat resonansi emosional. Dalam seni teater Noh, arsitektur taman Zen, hingga percakapan sehari-hari, "Ma" memberikan ruang bagi lawan bicara untuk mencerna, merasakan kehangatan yang tak terucapkan, dan membiarkan makna mekar tanpa perlu dibombardir kata-kata.\n\nMenghayati "Ma" adalah seni menghargai keheningan sebagai bagian utuh dari dialog manusiawi.`,
      en: `In Western linguistic frameworks, communication is largely conceptualized as an uninterrupted exchange of structured verbal signifiers. Silence is frequently perceived as an awkward vacuum or a breakdown in articulation.\n\nConversely, in traditional Japanese aesthetics, intervals of silence and void—known as "Ma (間)"—are never empty absences, but fertile spaces pregnant with emotional resonance. Across Noh theater, Zen dry gardens, and everyday discourse, "Ma" affords listeners the space to digest, perceive unspoken warmth, and allow significance to blossom without relentless verbal bombardment.\n\nTo appreciate "Ma" is to honor silence not as the negation of speech, but as its profoundest, living counterpart.`,
      my: `အနောက်တိုင်း ဘာသာဗေဒအမြင်တွင် ဆက်ဆံရေးကို စနစ်တကျဖွဲ့စည်းထားသော စကားလုံးများ အပြန်အလှန်ဖလှယ်ခြင်းအဖြစ် နားလည်ထားကြပါသည်။ တိတ်ဆိတ်မှုကို အဆင်မပြေသော ဟာလာဟင်းလင်းဖြစ်မှုအဖြစ် ရှုမြင်လေ့ရှိပါသည်။\n\nဆန့်ကျင်ဘက်အားဖြင့် ဂျပန်ရိုးရာ အလှတရားတွင် "Ma (間)" ဟုခေါ်သော တိတ်ဆိတ်မှုနှင့် နေရာလွတ်များသည် အနှစ်မဲ့ ဗလာနတ္ထိ မဟုတ်ဘဲ နက်နဲသော စိတ်ခံစားမှုများ ပြည့်နှက်နေသည့် နေရာတစ်ခု ဖြစ်ပါသည်။ နို (Noh) ဇာတ်သဘင်မှစ၍ နေ့စဉ်စကားပြောဆိုမှုများအထိ "Ma" သည် တစ်ဖက်လူအား တွေးတောဆင်ခြင်ရန်၊ စကားလုံးဖြင့် ဖော်မပြနိုင်သော နွေးထွေးမှုကို ခံစားရန်နှင့် အဓိပ္ပာယ်ကို ပေါ်လွင်စေရန် အခွင့်အရေးပေးပါသည်။\n\n"Ma" ကို နားလည်ခြင်းသည် တိတ်ဆိတ်မှုကို စကားလုံးများထက် ပိုမိုနက်ရှိုင်းသော ဆက်သွယ်ရေး၏ အစိတ်အပိုင်းတစ်ခုအဖြစ် တန်ဖိုးထားတတ်ခြင်း ဖြစ်ပါသည်။`,
    },
  },
  dokkai_n2_7: {
    title: {
      id: 'Perjalanan Kreativitas dan Kepekaan Manusia di Era AI Generatif',
      en: 'Human Originality and Sensibility in the Age of Generative AI',
      my: 'မျိုးဆက်သစ် AI ခေတ်တွင် လူသားတို့၏ ဖန်တီးနိုင်စွမ်းနှင့် ခံစားမှုရသ ဦးတည်ချက်',
    },
    categoryLabel: {
      id: '中文 (Opini Budaya & Inovasi N2)',
      en: 'Medium Passage (Culture & Innovation N2)',
      my: 'အလယ်အလတ် စာပိုဒ် (ယဉ်ကျေးမှုနှင့် ဆန်းသစ်တီထွင်မှု N2)',
    },
    sourceType: {
      id: 'Opini Budaya & Inovasi N2',
      en: 'Cultural Opinion & Innovation N2',
      my: 'ယဉ်ကျေးမှုနှင့် ဆန်းသစ်တီထွင်မှု အမြင်ဆောင်းပါး N2',
    },
    translation: {
      id: `Dalam beberapa tahun terakhir, dengan evolusi pesat AI generatif, banyak aktivitas kreatif yang sebelumnya dianggap sebagai ranah eksklusif manusia—seperti melukis, menulis teks, bahkan menggubah musik—kini dapat diambil alih oleh mesin. AI yang mempelajari data dalam jumlah masif mampu meniru dan mereproduksi teknik yang biasanya membutuhkan latihan bertahun-tahun oleh manusia hanya dalam sekejap mata.

Namun, apakah hakikat penciptaan semata-mata berlomba menyelesaikan teknik secara sempurna? Motivasi manusia saat melahirkan sebuah karya senantiasa dipicu oleh gejolak emosi yang hanya dimiliki oleh entitas bertubuh dan berjiwa nyata: penderitaan personal, kepedihan kegagalan, serta empati tulus kepada sesama. Justru di dalam ekspresi yang lahir dari pergulatan batin saat menerima ketidaksempurnaan dan kebetulan itulah, bersemayam nilai orisinal yang mampu mengguncang sanubari penikmatnya secara mendalam.

Memanfaatkan AI secara terampil sebagai alat sembari tetap menggenggam erat \"alasan batin (motivasi)\" dan \"tanggung jawab moral\" mengenai apa yang ingin diekspresikan serta mengapa ingin menyampaikannya kepada orang lain. Bukankah hal ini hakikat kreativitas sejati yang dituntut dari manusia di era kecerdasan mesin?`,
      en: `In recent years, with the rapid advancement of generative AI, many creative pursuits previously regarded as exclusive human domains—such as painting, creative writing, and musical composition—have increasingly been undertaken by machines. Trained on massive datasets, AI can replicate complex techniques that humans spend decades honing in mere seconds.

Yet does the essence of artistic creation truly lie in competing for technical perfection? Human artistic motivation is deeply rooted in personal suffering, heartache, resilience, and genuine empathy for others—emotional fluctuations unique to living beings with hearts and mortal bodies. It is precisely through confronting our vulnerabilities and embracing serendipitous imperfections that an artwork acquires its irreplaceable soul and moves the audience deeply.

While leveraging AI as a powerful tool, humans must never surrender the authentic motivation of why we create and the responsibility for what we communicate to society. This, perhaps, is the true meaning of creativity demanded of humankind in the machine age.`,
      my: `မကြာသေးမီနှစ်များအတွင်း မျိုးဆက်သစ် AI နည်းပညာ လျင်မြန်စွာ တိုးတက်လာမှုကြောင့် ပန်းချီဆွဲခြင်း၊ စာပေရေးသားခြင်းနှင့် ဂီတသီကုံးခြင်းစသည့် ယခင်က လူသားများသာ လုပ်ဆောင်နိုင်သည်ဟု ယူဆခဲ့သော ဖန်တီးမှုအလုပ်များကို စက်ပစ္စည်းများက အစားထိုးလုပ်ဆောင်လာနိုင်ခဲ့ပါသည်။ ကြီးမားသော အချက်အလက်များဖြင့် လေ့ကျင့်ထားသော AI သည် လူသားများ နှစ်ပေါင်းများစွာ ကြိုးစားလေ့ကျင့်ရသည့် ကျွမ်းကျင်မှုများကို ချက်ချင်း အတုယူဖော်ပြနိုင်စွမ်း ရှိပါသည်။

သို့သော် အနုပညာဖန်တီးမှု၏ အနှစ်သာရသည် နည်းစနစ်ပိုင်းဆိုင်ရာ ပြီးပြည့်စုံမှုကို ယှဉ်ပြိုင်ခြင်းသာ ဖြစ်ပါသလား။ လူသားတို့၏ ဖန်တီးလိုစိတ်တွင် ကိုယ်ပိုင်အခက်အခဲများ၊ စိတ်ပျက်အားငယ်မှုများနှင့် တစ်ဖက်သားအပေါ် စာနာနားလည်မှုများကဲ့သို့သော သက်ရှိလူသားများသာ ခံစားရသည့် စိတ်ခံစားမှုလှိုင်းများ မရှိမဖြစ် လိုအပ်ပါသည်။ မပြည့်စုံမှုများနှင့် မမျှော်လင့်သော အခြေအနေများကို လက်ခံပြီး မိမိ၏ အတွင်းစိတ်နှင့် ရင်ဆိုင်ဖန်တီးထားသော အနုပညာတွင်သာ ခံစားသူ၏ နှလုံးသားကို လှုပ်ခတ်စေနိုင်သော တန်ဖိုးအစစ်အမှန် တည်ရှိနေပါသည်။

AI ကို အသုံးဝင်သော ကိရိယာတစ်ခုအဖြစ် ကျွမ်းကျင်စွာ အသုံးချနေသော်လည်း အဘယ်ကြောင့် ဖန်တီးသနည်းနှင့် တစ်ဖက်လူထံ မည်သို့သော သတင်းစကား ပေးလိုသနည်းဟူသော စေ့ဆော်မှုနှင့် တာဝန်ယူမှုကို ထိန်းသိမ်းထားရန် လိုအပ်ပါသည်။ ဤအချက်သည်ပင် စက်မှုခေတ်တွင် လူသားတို့ထံမှ လိုအပ်နေသော ဖန်တီးနိုင်စွမ်းအစစ်အမှန် ဖြစ်ပါသည်။`,
    },
  },

  dokkai_n2_8: {
    title: {
      id: 'Dua Perspektif Seputar Pemanfaatan Sumber Daya Hutan dan Konservasi Alam',
      en: 'Two Perspectives on Forest Resource Utilization and Nature Conservation',
      my: 'သစ်တောသယံဇာတ အသုံးချမှုနှင့် သဘာဝပတ်ဝန်းကျင် ထိန်းသိမ်းရေးဆိုင်ရာ အမြင်နှစ်ရပ်',
    },
    categoryLabel: {
      id: '比較 (Perbandingan Dua Pandangan ~500 huruf)',
      en: 'Comparative Reading (Dual Perspectives ~500 chars)',
      my: 'နှိုင်းယှဉ်ဖတ်ရှုခြင်း (အမြင်နှစ်ရပ် နှိုင်းယှဉ်ချက် စာလုံးရေ ၅၀၀ ခန့်)',
    },
    sourceType: {
      id: 'Kolom Editorial Komparatif N2',
      en: 'Comparative Editorial Column N2',
      my: 'နှိုင်းယှဉ် အယ်ဒီတာ့အာဘော်ဆောင်းပါး N2',
    },
    translation: {
      id: `[Pendapat A]
Hutan memainkan peran yang teramat penting dalam pencegahan pemanasan global dan pelestarian keanekaragaman hayati. Menebang pepohonan demi fasilitas wisata atau industri kayu berisiko merusak ekosistem yang terbentuk selama bertahun-tahun. Karena memulihkan lingkungan alam yang terlanjur rusak membutuhkan waktu dan biaya yang sangat besar, campur tangan manusia terhadap hutan alami harus ditekan seminimal mungkin, dan perlindungan ketat sebagai area konservasi harus diprioritaskan utama.

[Pendapat B]
Banyak hutan tanaman di Jepang justru berisiko mengalami pelunakan struktur tanah hingga memicu bencana tanah longsor apabila tidak dilakukan penjarangan pohon (kandatsu) dan pemeliharaan berkala secara teratur. Sekadar membiarkannya terlantar atas nama perlindungan tidak akan mampu mempertahankan kesehatan ekosistem pegunungan. Menghidupkan kembali sektor kehutanan lokal dan membangun sirkulasi ekonomi yang memanfaatkan kayu hasil penjarangan secara proaktif untuk konstruksi dan bahan bakar biomassa justru merupakan jalan paling realistis dalam menjaga kelestarian lingkungan hutan yang berkelanjutan.`,
      en: `[Opinion A]
Forests play a vital role in preventing global warming and preserving biodiversity. Clearing trees for tourist resorts or logging operations risks devastating ecological networks that took centuries to mature. Because restoring damaged natural ecosystems requires immense time and financial resources, human interference in natural forests should be kept to a bare minimum, and strict conservation zones must take utmost priority.

[Opinion B]
Many of Japan's planted forests risk slope destabilization and devastating landslides unless maintained through periodic thinning and brush clearing. Simply leaving forests untouched does not maintain healthy mountain ecosystems. Revitalizing regional forestry and turning thinned timber into economic loops—such as sustainable architecture and biomass fuel—is the most realistic, sustainable pathway to safeguarding forest habitats.`,
      my: `[အမြင် က]
သစ်တောများသည် ကမ္ဘာကြီးပူနွေးလာမှုကို ကာကွယ်ရန်နှင့် ဇီဝမျိုးစုံမျိုးကွဲများကို ထိန်းသိမ်းရန်အတွက် အလွန်အရေးကြီးသော အခန်းကဏ္ဍမှ ပါဝင်နေပါသည်။ ခရီးသွားလုပ်ငန်း သို့မဟုတ် သစ်လုပ်ငန်းအတွက် သစ်ပင်များကို ခုတ်လှဲခြင်းသည် နှစ်ပေါင်းများစွာ ဖြစ်တည်လာခဲ့သော ဂေဟစနစ်ကို ပျက်စီးစေနိုင်ပါသည်။ ပျက်စီးသွားသော သဘာဝပတ်ဝန်းကျင်ကို နဂိုမူလအတိုင်း ပြန်လည်ရရှိရန် အချိန်နှင့် ငွေကြေးများစွာ ကုန်ကျသောကြောင့် သဘာဝသစ်တောများအတွင်းသို့ လူသားတို့၏ ဝင်ရောက်စွက်ဖက်မှုကို အတတ်နိုင်ဆုံး လျှော့ချသင့်ပြီး တင်းကျပ်သော ထိန်းသိမ်းရေးဇုန်အဖြစ် ဦးစားပေး သတ်မှတ်သင့်ပါသည်။

[အမြင် ခ]
ဂျပန်နိုင်ငံရှိ စိုက်ပျိုးသစ်တောအများစုသည် သင့်လျော်သော သစ်ပင်ပါးလွှာခြင်းနှင့် ပြုပြင်ထိန်းသိမ်းမှုများ မပြုလုပ်ပါက မြေဆီလွှာချောင်ချိလာပြီး မြေပြိုခြင်းစသည့် သဘာဝဘေးအန္တရာယ်များကို ဖြစ်ပေါ်စေနိုင်ပါသည်။ သစ်တောများကို မထိမတို့ဘဲ ဒီအတိုင်းထားရှိရုံဖြင့် ကျန်းမာသော သဘာဝတောင်တန်းများကို မထိန်းသိမ်းနိုင်ပါ။ ဒေသတွင်း သစ်တောလုပ်ငန်းကို ပြန်လည်ရှင်သန်စေပြီး ခုတ်လှဲထားသော သစ်များကို ဆောက်လုပ်ရေးနှင့် ဇီဝလောင်စာအဖြစ် စီးပွားဖြစ် အကျိုးရှိရှိ အသုံးချခြင်းသည်သာ ရေရှည်တည်တံ့သော သစ်တောပတ်ဝန်းကျင်ကို ထိန်းသိမ်းစောင့်ရှောက်နိုင်သည့် လက်တွေ့ကျသော နည်းလမ်းဖြစ်ပါသည်။`,
    },
  },

  dokkai_n1_3: {
    title: {
      id: 'Bahasa dan Garis Bentuk Dunia: Melampaui Mitos Wadah Pasif',
      en: 'Language and the Contours of Reality: Transcending the Passive Vessel Myth',
      my: 'ဘာသာစကားနှင့် ကမ္ဘာလောက၏ ဖွဲ့စည်းပုံ - ကြားခံကိရိယာအမြင်ကို ကျော်လွန်ခြင်း',
    },
    categoryLabel: {
      id: '長文 N1 (Kajian Linguistik Kognitif ~700 huruf)',
      en: 'Long Passage N1 (Cognitive Linguistics ~700 chars)',
      my: 'ရှည်လျားသော စာပိုဒ် N1 (သိမြင်မှု ဘာသာဗေဒ စာလုံးရေ ၇၀၀ ခန့်)',
    },
    sourceType: {
      id: 'Kajian Linguistik Kognitif N1',
      en: 'Cognitive Linguistic Inquiry N1',
      my: 'သိမြင်မှု ဘာသာဗေဒ လေ့လာချက် N1',
    },
    translation: {
      id: `Kita sehari-hari cenderung memandang bahasa semata-mata sebagai \"alat eksternal\" untuk menyampaikan pemikiran kita kepada orang lain. Kita percaya bahwa ide yang jelas telah ada terlebih dahulu di dalam diri kita, lalu kita tinggal memilih dan menyusun kosakata yang paling cocok seolah mengambilnya dari kamus.

Namun, pandangan awam ini hanyalah kebenaran sepihak. Sebagaimana telah diungkapkan oleh linguistik dan ilmu kognitif, bahasa bukanlah bejana pasif yang sekadar mengangkut pikiran, melainkan \"kerangka aktif\" yang sejak awal telah membentuk kontur pemikiran itu sendiri. Jika dalam suatu kebudayaan terdapat kekayaan kosakata yang menamai suatu fenomena secara mendalam, maka anggota komunitas bahasa tersebut akan mempersepsikan dunia dengan tingkat resolusi ketajaman tersebut. Sebaliknya, perbedaan halus yang tidak diberi nama akan luput dari jaring persepsi dan terabaikan seolah tidak ada.

Dengan kata lain, dunia yang kita sebut \"realitas\" bukanlah sesuatu yang objektif dan tetap di luar sana, melainkan tersekat-sekat dan direkonstruksi melalui sistem bahasa yang telah kita kuasai. Makna mempelajari bahasa asing dan mengenali batas bahasa ibu terletak pada terbukanya kesempatan untuk membebaskan diri dari sangkar persepsi yang mengekang kita, serta menangkap kembali kekayaan dunia secara berlipat ganda.`,
      en: `In everyday life, we tend to treat language merely as an \"external apparatus\" for delivering pre-existing concepts to other minds. We intuitively assume that crystallized ideas exist within our consciousness prior to speech, whereupon we conveniently pull appropriate vocabulary off the shelf like entries in a catalog.

Yet cognitive linguistics reveals this intuition to be a partial fiction. Language is not an inert courier of thought; it is the constitutive architecture that carves out the contours of cognition itself. When a speech community develops an intricate vocabulary distinguishing subtle facets of an experience, its speakers perceive phenomenal reality with heightened resolution. Conversely, nuanced shades of difference lacking nominal distinction slip unnoticed past the filter of awareness, as though they did not exist.

In essence, what we designate as \"objective reality\" is fundamentally articulated and structured through our internal linguistic matrix. Learning foreign languages and plumbing the outer horizons of our native tongue liberates us from perceptual confinement, awakening us to the multifaceted richness of existence.`,
      my: `ကျွန်ုပ်တို့သည် နေ့စဉ်ဘဝတွင် ဘာသာစကားကို မိမိ၏ အတွေးအခေါ်များကို သူတစ်ပါးထံ လက်ဆင့်ကမ်းရန် \"ပြင်ပကိရိယာ\" အဖြစ်သာ သဘောထားလေ့ရှိကြပါသည်။ စိတ်ထဲတွင် ရှင်းလင်းသော အကြံဉာဏ်များ ကြိုတင်ရှိနှင့်ပြီး သင့်လျော်သော စကားလုံးများကို အဘိဓာန်ထဲမှ ထုတ်ယူအသုံးပြုသကဲ့သို့ ထင်မြင်တတ်ကြပါသည်။

သို့သော် ဤအမြင်သည် တစ်စိတ်တစ်ပိုင်းသာ မှန်ကန်ပါသည်။ ဘာသာဗေဒနှင့် သိမြင်မှုသိပ္ပံတို့အရ ဘာသာစကားသည် အတွေးအခေါ်များကို သယ်ဆောင်ပေးရုံသာမက အတွေးအခေါ်၏ ဘောင်ကို အစကတည်းက ပုံဖော်ပေးနေသည့် \"တက်ကြွသော မူဘောင်\" ဖြစ်ပါသည်။ အကယ်၍ ယဉ်ကျေးမှုတစ်ခုတွင် ဖြစ်စဉ်တစ်ခုအတွက် ကြွယ်ဝသော ဝေါဟာရများ ရှိပါက ထိုဘာသာစကား အသိုက်အဝန်းရှိ လူများသည် ကမ္ဘာလောကကို ပိုမိုတိကျစွာ ခွဲခြားသိမြင်နိုင်ကြပါသည်။ ဆန့်ကျင်ဘက်အားဖြင့် အမည်မတပ်ရသေးသော သိမ်မွေ့သည့် ခြားနားချက်များသည် သတိမပြုမိဘဲ မရှိသကဲ့သို့ ပျောက်ကွယ်သွားတတ်ပါသည်။

ဆိုလိုသည်မှာ ကျွန်ုပ်တို့ မြင်တွေ့နေရသော \"အမှန်တရား\" သည် အပြင်ဘက်တွင် အခိုင်အမာ တည်ရှိနေခြင်း မဟုတ်ဘဲ မိမိတို့ တတ်ကျွမ်းထားသော ဘာသာစကား စနစ်ဖြင့် ပြန်လည်တည်ဆောက်ထားခြင်း ဖြစ်ပါသည်။ နိုင်ငံခြားဘာသာစကားကို လေ့လာခြင်းနှင့် မိခင်ဘာသာစကား၏ ကန့်သတ်ချက်များကို သိရှိခြင်းသည် မိမိတို့အား အမြင်ကျဉ်းမြောင်းမှုမှ လွတ်မြောက်စေပြီး ကမ္ဘာလောက၏ ကြွယ်ဝမှုကို ဘက်ပေါင်းစုံမှ ပြန်လည်နားလည်နိုင်စေပါသည်။`,
    },
  },

  dokkai_n1_4: {
    title: {
      id: 'Anonimitas dan Pergeseran Tanggung Jawab Publik di Ruang Digital',
      en: 'Anonymity and the Mutation of Civic Responsibility in Digital Space',
      my: 'ဒစ်ဂျစ်တယ်နယ်ပယ်ရှိ အမည်ဝှက်စနစ်နှင့် လူထုတာဝန်ယူမှု ပြောင်းလဲလာပုံ',
    },
    categoryLabel: {
      id: '長文 N1 (Analisis Sosial Budaya Modern ~750 huruf)',
      en: 'Long Passage N1 (Digital Sociology ~750 chars)',
      my: 'ရှည်လျားသော စာပိုဒ် N1 (လူမှုရေးနှင့် ယဉ်ကျေးမှု စာလုံးရေ ၇၅၀ ခန့်)',
    },
    sourceType: {
      id: 'Analisis Sosial Budaya Modern N1',
      en: 'Modern Sociocultural Analysis N1',
      my: 'ခေတ်သစ် လူမှုယဉ်ကျေးမှု လေ့လာချက် N1',
    },
    translation: {
      id: `Penyebaran internet dan rutinitas media sosial telah membawa demokratisasi opini dalam skala yang belum pernah terjadi sebelumnya. Tersedianya fondasi di mana siapa pun dapat menyampaikan pandangannya kepada dunia secara instan tanpa terhalang sekat geografis maupun hierarki kelas sosial tak diragukan lagi merupakan pencapaian membahagiakan dari sudut pandang pemberdayaan individu. Tabir anonimitas juga telah menjalankan fungsi positif dalam mendorong pengungkapan penyalahgunaan kekuasaan serta menyuarakan jeritan nyata kelompok rentan.

Akan tetapi, di balik kebebasan ini, yang kian meruncing adalah penipisan dramatis atas tanggung jawab publik yang seharusnya menyertai setiap ucapan. Di ruang tatap muka fisik, seseorang menyentuh perubahan mimik halus dan keheningan lawan bicara, sehingga secara intuitif merasakan rasa sakit yang ditimbulkan oleh kata-katanya dan mampu menahan diri. Sebaliknya, di ruang digital di mana hanya simbol teks yang melayang di balik layar, keberadaan nyata manusiawi pihak lain tereliminasi.

Akibatnya, meski masing-masing individu hanya mengunggah kritikan yang didorong oleh rasa keadilan semu atau kekesalan sepele, hal itu diamplifikasi oleh algoritma dan berubah menjadi badai kekerasan luar biasa yang menimpa sasaran empuk. Difusi tanggung jawab—berlindung di balik alasan \"semua orang juga berkata begitu\" dan \"saya cuma berkomentar satu kalimat saja\"—tiada lain adalah patologi terbesar dalam ruang digital modern saat ini.

Mempertahankan hak berekspresi bebas dan membendung penghakiman massa yang tidak bertanggung jawab bukanlah pilihan hitam-putih yang saling meniadakan. Tanpa upaya gigih setiap individu untuk terus mengasah imajinasi empati bahwa di balik kata-kata tersebut terdapat sosok manusia yang rapuh, kelangsungan ruang publik digital yang sehat mustahil dapat diharapkan.`,
      en: `The ubiquity of the Internet and pervasive social media platforms have democratized public discourse on an unprecedented scale. Bridging geographical and hierarchical chasms to empower any individual to broadcast viewpoints to a global audience represents an extraordinary milestone for human agency. The protective cloak of anonymity has similarly fostered whistleblowing against corruption and amplified the voices of marginalized communities.

Yet alongside this newfound liberty, we witness a dramatic erosion of civic responsibility. In corporeal, face-to-face dialogues, somatic cues—such as subtle micro-expressions and uncomfortable silences—trigger intuitive empathy, naturally tempering aggressive impulses. Within digital spheres where only alphanumeric text flashes across screens, the palpable, vulnerable existence of the human counterpart is stripped away.

Consequently, even when participants post criticisms fueled by casual indignation or self-righteous impulses, algorithms aggregate these into crushing waves of cyberbullying that devastate targets. The dispersion of moral accountability—deflected behind \"everyone is saying it\" or \"I only contributed a single comment\"—constitutes the foremost affliction of the contemporary digital realm.

Defending free expression and checking unrestrained collective retribution are not mutually exclusive mandates. Unless individuals continually exercise moral imagination—remembering that behind every glowing pixel breathes a delicate, vulnerable human being—a sustainable, healthy digital commons cannot survive.`,
      my: `အင်တာနက်နှင့် လူမှုကွန်ရက်များ ကျယ်ပြန့်လာခြင်းသည် လွတ်လပ်စွာ ထုတ်ဖော်ပြောဆိုခွင့်ကို မကြုံစဖူးသော အတိုင်းအတာအထိ ဖွံ့ဖြိုးတိုးတက်စေခဲ့ပါသည်။ ပထဝီဝင်နှင့် လူမှုအဆင့်အတန်း အတားအဆီးများကို ကျော်လွှားပြီး မည်သူမဆို မိမိ၏ သဘောထားကို ကမ္ဘာသို့ ချက်ချင်း မျှဝေနိုင်သည့် အခွင့်အရေး ရရှိလာခြင်းသည် လူတစ်ဦးချင်းစီအတွက် အလွန်ကောင်းမွန်သော ရလဒ်ဖြစ်ပါသည်။ အမည်ဝှက်စနစ်သည်လည်း အာဏာပိုင်များ၏ မတရားမှုကို တိုင်ကြားရန်နှင့် အားနည်းသူများ၏ အသံကို ဖော်ထုတ်ရန်အတွက် အပြုသဘောဆောင်သော အခန်းကဏ္ဍမှ ပါဝင်ခဲ့ပါသည်။

သို့သော် ဤလွတ်လပ်ခွင့်၏ နောက်ကွယ်တွင် စကားလုံးများနှင့်အတူ လိုက်ပါလာရမည့် \"လူထုတာဝန်ယူမှု\" သည် သိသိသာသာ လျော့နည်းလာခဲ့ပါသည်။ လူချင်းတွေ့ဆုံ ပြောဆိုသည့်အခါ တစ်ဖက်လူ၏ မျက်နှာအမူအရာနှင့် တိတ်ဆိတ်မှုများကို မြင်တွေ့ရသဖြင့် မိမိ၏ စကားကြောင့် ဖြစ်ပေါ်လာသော နာကျင်မှုကို နားလည်ပြီး ထိန်းထိန်းသိမ်းသိမ်း ပြောဆိုတတ်ကြပါသည်။ သို့သော် မျက်နှာပြင်ပေါ်တွင် စာလုံးများသာ ပေါ်နေသည့် ဒစ်ဂျစ်တယ်နယ်ပယ်တွင် တစ်ဖက်လူ၏ လူသားဆန်သော တည်ရှိမှုကို သတိမမူမိတော့ပေ။

ရလဒ်အနေဖြင့် တစ်ဦးချင်းစီသည် မလိုမုန်းထားစိတ် မရှိဘဲ သာမန်ဒေါသကြောင့် ဝေဖန်ရေးသားလိုက်ရုံမျှ ဖြစ်သော်လည်း ၎င်းကို အယ်လ်ဂိုရီသမ်က ပိုမိုပျံ့နှံ့စေကာ ပစ်မှတ်ထားခံရသူအပေါ် ကြီးမားသော အကြမ်းဖက်မှုတစ်ခုအဖြစ် သက်ရောက်သွားလေ့ရှိပါသည်။ \"လူတိုင်း ပြောနေကြတာပဲ\" သို့မဟုတ် \"ငါ စာတစ်ကြောင်းတည်း ရေးခဲ့တာပါ\" ဟူသော တာဝန်မဲ့မှုသည် ယနေ့ခေတ် ဒစ်ဂျစ်တယ်နယ်ပယ်၏ အကြီးမားဆုံး ပြဿနာဖြစ်ပါသည်။

လွတ်လပ်စွာ ထုတ်ဖော်ပြောဆိုခွင့်ကို ကာကွယ်ခြင်းနှင့် စုပေါင်းအပြစ်ပေးမှုများကို တားဆီးခြင်းတို့သည် သီးခြားစီ မဟုတ်ပါ။ စာလုံးများ၏ နောက်ကွယ်တွင် နာကျင်လွယ်သော လူသားတစ်ဦး ရှိနေသည်ဟူသော ကိုယ်ချင်းစာစိတ်ကို တစ်ဦးချင်းစီက အစဉ်တစိုက် မလေ့ကျင့်ပါက ကျန်းမာသော ဒစ်ဂျစ်တယ် လူ့ဘောင်အဖွဲ့အစည်းကို မျှော်လင့်နိုင်မည် မဟုတ်ပါ။`,
    },
  },
};


export const DOKKAI_QUESTION_TRANSLATIONS: Record<string, { explanation: Record<Language, string> }> = {
  dq_n2_1_1: {
    explanation: {
      id: 'Di paragraf ke-2 tertulis jelas: 「金曜日の退勤時までに必ずすべての業務ファイルを保存し、PCの電源をお切りください」 (Sebelum pulang Jumat, pastikan menyimpan semua file dan mematikan PC).',
      en: 'Paragraph 2 clearly states: "金曜日の退勤時までに必ずすべての業務ファイルを保存し、PCの電源をお切りください" (Before leaving work on Friday, be sure to save all work files and turn off PC power).',
      my: 'ဒုတိယစာပိုဒ်တွင် ရှင်းလင်းစွာ ဖော်ပြထားသည်- "金曜日の退勤時までに必ずすべての業務ファイルを保存し、PCの電源をお切りください" (သောကြာနေ့ အလုပ်ဆင်းချိန်မတိုင်မီ လုပ်ငန်းဖိုင်အားလုံးကို မဖြစ်မနေ သိမ်းဆည်းပြီး ကွန်ပျူတာပါဝါ ပိတ်ထားပါ)။',
    },
  },
  dq_n2_2_1: {
    explanation: {
      id: 'Di paragraf ke-3 tertulis tegas: Kulkas, mesin cuci, TV, dan AC adalah barang daur ulang elektronik yang 「市の粗大ゴミとしては回収できません。買い替え先の販売店または指定引き取り場所へ直接処分をご依頼くださいますよう」.',
      en: 'Paragraph 3 firmly states: Refrigerators, washing machines, TVs, and air conditioners are designated recyclable appliances and "cannot be collected as municipal bulky trash. Please request disposal from the replacement retailer or designated drop-off location."',
      my: 'တတိယစာပိုဒ်တွင် တိကျစွာ ဖော်ပြထားသည်- ရေခဲသေတ္တာ၊ အဝတ်လျှော်စက်၊ တီဗီနှင့် လေအေးပေးစက်များသည် အီလက်ထရွန်နစ် ပြန်လည်အသုံးပြုပစ္စည်းများဖြစ်သဖြင့် "မြို့တော်၏ အမှိုက်ကြီးအဖြစ် ကောက်ယူ၍မရပါ။ အသစ်ဝယ်ယူသည့်ဆိုင် သို့မဟုတ် သတ်မှတ်ထားသော လက်ခံနေရာတွင် တိုက်ရိုက်စွန့်ပစ်ပါ"။',
    },
  },
  dq_n2_3_1: {
    explanation: {
      id: 'Di paragraf ke-2 tertulis: 「期日を過ぎた場合、今期中の経費としての処理が認められず、精算金の支払いが翌々月以降に大幅に遅れる場合がございます」.',
      en: 'Paragraph 2 states: "If the deadline passes, expense processing for the current period will not be approved, and reimbursement payment may be substantially delayed until the month after next or later."',
      my: 'ဒုတိယစာပိုဒ်တွင် ဖော်ပြထားသည်- "သတ်မှတ်ရက် ကျော်လွန်ပါက ယခုကာလအတွက် ကုန်ကျစရိတ်စာရင်းအဖြစ် လက်ခံမည်မဟုတ်ဘဲ ပြန်လည်ထုတ်ပေးမည့်ငွေ ပေးချေမှုသည် နောက်လဆန်းပိုင်းအထိ သိသာစွာ ကြန့်ကြာနိုင်သည်"။',
    },
  },
  dq_n2_4_1: {
    explanation: {
      id: 'Di paragraf ke-2 dijelaskan: 「先延ばしの本質は時間の問題ではなく、ネガティブな感情の回避にある」.',
      en: 'Paragraph 2 explains: "The essence of procrastination is not a problem of time management, but rather the avoidance of negative emotions."',
      my: 'ဒုတိယစာပိုဒ်တွင် ရှင်းပြထားသည်- "အလုပ်ရွှေ့ဆိုင်းခြင်း၏ အဓိကအရင်းအမြစ်မှာ အချိန်ပြဿနာမဟုတ်ဘဲ မနှစ်မြို့ဖွယ် စိတ်ခံစားချက်များကို ရှောင်လွှဲလိုခြင်းကြောင့် ဖြစ်သည်"။',
    },
  },
  dq_n2_4_2: {
    explanation: {
      id: 'Di paragraf terakhir tertulis: 「課題を『最初の5分間だけ手をつける』といった極めて小さな行動単位に分解して、心理的抵抗を減らすことこそが重要なのだ」.',
      en: 'The final paragraph states: "Breaking the task down into an extremely small action unit such as \'working on it for just the first 5 minutes\' to reduce psychological resistance is what matters most."',
      my: 'နောက်ဆုံးစာပိုဒ်တွင် ဖော်ပြထားသည်- "စိတ်ပိုင်းဆိုင်ရာ တွန့်ဆုတ်မှုကို လျှော့ချရန်အတွက် အလုပ်တာဝန်ကို \'ပထမ ၅ မိနစ်ခန့်သာ စတင်လုပ်ဆောင်ကြည့်ခြင်း\' ကဲ့သို့သော အလွန်သေးငယ်သည့် လုပ်ဆောင်မှုယူနစ်အဖြစ် ခွဲခြမ်းလိုက်ခြင်းသည် အလွန်အရေးကြီးသည်"။',
    },
  },
  dq_n2_5_1: {
    explanation: {
      id: 'Di paragraf ke-2 tertulis: 「既読機能の存在によって、『読んだのに返信しないのは失礼ではないか』『無視していると誤解されるのではないか』という不安が生じ」.',
      en: 'Paragraph 2 states: "The existence of read receipts generates anxiety, with people worrying \'Is it rude not to reply when they know I read it?\' or \'Will they misunderstand that I am ignoring them?\'"',
      my: 'ဒုတိယစာပိုဒ်တွင် ဖော်ပြထားသည်- "မက်ဆေ့ဂျ်ဖတ်ပြီးကြောင်းပြသသည့်စနစ်ကြောင့် \'ဖတ်ပြီး မပြန်ပါက ယဉ်ကျေးမှုမရှိရာရောက်မလား\'၊ \'ဥပေက္ခာပြုသည်ဟု အထင်လွဲခံရမလား\' ဟူသော စိုးရိမ်ပူပန်မှုများ ဖြစ်ပေါ်လာစေသည်"။',
    },
  },
  dq_n2_5_2: {
    explanation: {
      id: 'Di kalimat terakhir tertulis jelas: 「便利さに振り回されることなく、時には意識的に通信を遮断し、自分自身の時間を取り戻す知恵が、現代人にこそ求められている」.',
      en: 'The final sentence clearly concludes: "Modern people need the wisdom not to be swayed by convenience, to consciously disconnect from communications at times, and to reclaim their own time."',
      my: 'နောက်ဆုံးစာကြောင်းတွင် ရှင်းလင်းစွာ ဖော်ပြထားသည်- "အဆင်ပြေလွယ်ကူမှု၏ လွှမ်းမိုးမှုကို မခံရစေဘဲ တစ်ခါတစ်ရံ ဆက်သွယ်ရေးကို သတိပြုလျက် ဖြတ်တောက်ကာ မိမိကိုယ်ပိုင်အချိန်ကို ပြန်လည်ရယူနိုင်သည့် ဉာဏ်ပညာသည် ယနေ့ခေတ်လူသားများအတွက် အမှန်တကယ် လိုအပ်သည်"။',
    },
  },
  dq_n2_6_1: {
    explanation: {
      id: 'Lihat poin 3: Pada hari Sabtu/Minggu/Libur, sistemnya adalah 「完全事前Web予約制（前日20:00までに要予約）」 dan tidak melayani pendaftaran langsung di tempat hari-H.',
      en: 'See Point 3: On Saturdays, Sundays, and holidays, the system requires "Strictly Advance Online Reservation (booking required by 20:00 the prior day)" and same-day on-site registration is not accepted.',
      my: 'အချက် ၃ ကို ကြည့်ပါ- စနေ၊ တနင်္ဂနွေနှင့် အစိုးရရုံးပိတ်ရက်များတွင် "အွန်လိုင်းမှ ကြိုတင်စာရင်းသွင်းသည့်စနစ် (ယခင်နေ့ ၂၀:၀၀ မတိုင်မီ စာရင်းသွင်းရန် လိုအပ်သည်)" ဖြစ်ပြီး ထိုနေ့တွင် နေရာ၌ တိုက်ရိုက်လျှောက်ထားမှုကို လက်မခံပါ။',
    },
  },
  dq_n2_7_1: {
    explanation: {
      id: 'Di paragraf 2 dan 3 penulis menegaskan: karya manusia berharga karena lahir dari gejolak batin, penderitaan, dan empati, serta manusia harus tetap memegang motivasi dan tanggung jawab tentang apa yang ingin disampaikan (pilihan 2).',
      en: 'In paragraphs 2 and 3, the author emphasizes: Human work is valuable because it arises from inner conflict, suffering, and empathy, and humans must preserve the core motivation and accountability for what they wish to convey (Option 2).',
      my: 'စာပိုဒ် ၂ နှင့် ၃ တွင် စာရေးသူက အလေးပေးဖော်ပြထားသည်- လူသားတို့၏ ဖန်တီးမှုသည် စိတ်တွင်းရုန်းကန်မှု၊ ခံစားမှုနှင့် စာနာနားလည်မှုတို့မှ မွေးဖွားလာခြင်းကြောင့် တန်ဖိုးရှိပြီး လူသားသည် မိမိဖော်ပြလိုသည့်အရာအတွက် ရည်ရွယ်ချက်နှင့် တာဝန်ယူမှုကို ဆက်လက်ထိန်းသိမ်းထားရမည် (ရွေးချယ်မှု ၂)။',
    },
  },
  dq_n2_8_1: {
    explanation: {
      id: 'A berargumen bahwa campur tangan manusia harus diminimalisir demi konservasi murni, sedangkan B berargumen bahwa pembiaran justru berbahaya dan hutan butuh perawatan berkala serta perputaran ekonomi industri kehutanan yang sehat (pilihan 1).',
      en: 'Author A argues that human intervention should be minimized for pure conservation, while Author B argues that neglect is dangerous and forests require periodic maintenance and a healthy forestry economic cycle (Option 1).',
      my: 'စာရေးသူ A က သဘာဝထိန်းသိမ်းရေးအတွက် လူသားတို့၏ ဝင်ရောက်စွက်ဖက်မှုကို အတတ်နိုင်ဆုံး လျှော့ချသင့်သည်ဟု ယူဆပြီး စာရေးသူ B ကမူ လျစ်လျူရှုထားခြင်းသည် အန္တရာယ်ရှိသဖြင့် သစ်တောများကို ပုံမှန်ပြုစုထိန်းသိမ်းမှုနှင့် ကျန်းမာသော သစ်တောစီးပွားရေးလည်ပတ်မှု လိုအပ်သည်ဟု ဆိုသည် (ရွေးချယ်မှု ၁)။',
    },
  },
  dq_n1_1_1: {
    explanation: {
      id: 'Di paragraf ke-2 penulis menegaskan: 「人間が自らの価値観に基づいて下す決断の過程そのものにこそ、人間としての実存的な尊厳が宿っている」「効率性の追求の果てに自律的な思考を放棄してしまえば、道具に依存する客体へと転落しかねない」.',
      en: 'In paragraph 2, the author asserts: "Existential human dignity resides in the very decision-making process where individuals make choices based on their own values" and "If we surrender autonomous thinking in pursuit of efficiency, we risk declining into mere passive objects dependent on tools."',
      my: 'ဒုတိယစာပိုဒ်တွင် စာရေးသူက အခိုင်အမာဆိုထားသည်- "လူသားတစ်ဦးသည် မိမိကိုယ်ပိုင်တန်ဖိုးစံနှုန်းများအပေါ် အခြေခံ၍ ဆုံးဖြတ်ချက်ချသည့် လုပ်ငန်းစဉ်ကိုယ်တိုင်၌သာ လူသားဖြစ်တည်မှုဆိုင်ရာ ဂုဏ်သိက္ခာ ကိန်းအောင်းနေသည်" နှင့် "ထိရောက်မှုကို လိုက်စားရင်း ကိုယ်ပိုင်တွေးခေါ်မှုကို စွန့်လွှတ်လိုက်ပါက ကိရိယာတန်ဆာပလာများကိုသာ မှီခိုနေရသည့် အရာဝတ္ထုအဆင့်သို့ ကျဆင်းသွားနိုင်သည်"။',
    },
  },
  dq_n1_2_1: {
    explanation: {
      id: 'Di paragraf ke-2 dan ke-3 dijelaskan bahwa jeda ("Ma") bukan ketidakramahan atau kekurangan, melainkan bentuk etika yang mempercayai kepekaan lawan bicara dan mampu menyampaikan rasa yang lebih dalam melampaui kata-kata.',
      en: 'Paragraphs 2 and 3 explain that the pause ("Ma") is neither coldness nor insufficiency, but a form of etiquette that trusts the conversational partner\'s sensitivity and conveys deeper sentiment beyond words.',
      my: 'ဒုတိယနှင့် တတိယစာပိုဒ်များတွင် ရှင်းပြထားသည်- တိတ်ဆိတ်ရပ်နားမှု ("Ma") သည် မဖော်ရွေခြင်း သို့မဟုတ် ချို့ယွင်းချက်မဟုတ်ဘဲ စကားပြောဖော်၏ ခံစားသိရှိနိုင်စွမ်းကို ယုံကြည်လေးစားသည့် ယဉ်ကျေးမှုပုံစံတစ်ရပ်ဖြစ်ပြီး စကားလုံးများထက် ပိုမိုနက်နဲသောအဓိပ္ပာယ်ကို သယ်ဆောင်ပေးသည်"။',
    },
  },
  dq_n1_2_2: {
    explanation: {
      id: 'Di paragraf ke-3 tertulis: 「相手の感受性を信頼し尊重する礼節の一形態なのである。文脈や場の空気を共有することで言葉を補完し合う」.',
      en: 'Paragraph 3 states: "It is a form of courtesy that trusts and respects the other party\'s sensitivity. By sharing context and situational atmosphere, words complement each other."',
      my: 'တတိယစာပိုဒ်တွင် ဖော်ပြထားသည်- "တစ်ဖက်သား၏ ခံစားသိရှိနိုင်စွမ်းကို ယုံကြည်လေးစားသော ယဉ်ကျေးမှုတစ်မျိုးဖြစ်ပြီး အခြေအနေနှင့် ပတ်ဝန်းကျင်ကို အတူတကွ မျှဝေနားလည်ခြင်းဖြင့် စကားလုံးများကို ဖြည့်ဆည်းပေးသည်"။',
    },
  },
  dq_n1_3_1: {
    explanation: {
      id: 'Di paragraf ke-2 dan 3 penulis menegaskan: bahasa bukan wadah pasif melainkan kerangka aktif yang sejak awal membagi dan membentuk kontur cara manusia memandang realitas (pilihan 3).',
      en: 'In paragraphs 2 and 3, the author asserts: Language is not a passive vessel but an active framework that segments and shapes the very contours of how humans perceive reality (Option 3).',
      my: 'စာပိုဒ် ၂ နှင့် ၃ တွင် စာရေးသူက အတည်ပြုသည်- ဘာသာစကားသည် အဓိပ္ပာယ်ကို ထည့်သွင်းထားသော တုံ့ပြန်မှုမဲ့ခွက်တစ်ခုမဟုတ်ဘဲ လူသားတို့ လက်တွေ့ဘဝကို ရှုမြင်ပုံနယ်နိမိတ်ကို စတင်ပိုင်းခြားပုံဖော်ပေးသည့် တက်ကြွသော မူဘောင်ဖြစ်သည် (ရွေးချယ်မှု ၃)။',
    },
  },
  dq_n1_4_1: {
    explanation: {
      id: 'Di paragraf ke-2 penulis menjelaskan bahwa di dunia fisik orang melihat mimik dan merasakan luka perkataan sehingga mampu menahan diri, sedangkan di layar digital keberadaan nyata (実存的な生々しさ) terhapus (pilihan 2).',
      en: 'In paragraph 2, the author explains that in the physical world people see facial expressions and feel the sting of words, prompting restraint, whereas digital screens erase the existential vividness of living presence (Option 2).',
      my: 'ဒုတိယစာပိုဒ်တွင် စာရေးသူက ရှင်းပြသည်- လက်တွေ့လောကတွင် လူတို့သည် မျက်နှာအမူအရာကို တွေ့မြင်နိုင်ပြီး စကားလုံးများ၏ နာကျင်မှုကို ခံစားမိသဖြင့် မိမိကိုယ်ကို ထိန်းချုပ်နိုင်ကြသော်လည်း ဒစ်ဂျစ်တယ်ဖန်သားပြင်များပေါ်တွင်မူ အမှန်တကယ်တည်ရှိနေမှု၏ သက်ဝင်လှုပ်ရှားမှုမှာ ပျောက်ကွယ်သွားသည် (ရွေးချယ်မှု ၂)။',
    },
  },
  dq_n1_4_2: {
    explanation: {
      id: 'Di paragraf penutup penulis menyatakan bahwa kuncinya adalah mengasah daya imajinasi bahwa di balik teks ada satu manusia yang bisa terluka (pilihan 3).',
      en: 'In the closing paragraph, the author states that the key is cultivating imagination to realize that behind each screen and text is a living human being who can be hurt (Option 3).',
      my: 'နိဂုံးချုပ်စာပိုဒ်တွင် စာရေးသူက အဓိကသော့ချက်မှာ စာသားများ၏ နောက်ကွယ်တွင် နာကျင်ခံစားရနိုင်သော လူသားတစ်ဦး တကယ်ရှိနေသည်ဟူသော စိတ်ကူးတွေးတောနိုင်စွမ်းကို မွေးမြူခြင်းဖြစ်သည်ဟု ဖော်ပြထားသည် (ရွေးချယ်မှု ၃)။',
    },
  },
  dq_n3_1_1: {
    explanation: {
      id: 'Di paragraf terakhir ditegaskan: 「日本の伝統的な気配りを大切にしつつも、重要な連絡事項や業務の目的は明確な言葉で共有し合うという『二つのバランス』が強く求められています」. Jawaban yang tepat adalah pilihan 2.',
      en: 'The final paragraph stresses: "While valuing traditional Japanese attentiveness, sharing critical communications and work goals in clear words—maintaining this dual balance—is strongly demanded." The correct answer is Option 2.',
      my: 'နောက်ဆုံးစာပိုဒ်တွင် အလေးထားဖော်ပြထားသည်- "ဂျပန်ရိုးရာ အပြန်အလှန်ဂရုစိုက်မှုကို တန်ဖိုးထားဆဲဖြစ်သော်လည်း အရေးကြီးသောအချက်အလက်များနှင့် လုပ်ငန်းရည်မှန်းချက်များကို ရှင်းလင်းပြတ်သားသော စကားလုံးများဖြင့် မျှဝေနားလည်စေသည့် \'ဟန်ချက်နှစ်ခု\' ကို အလေးအနက် တောင်းဆိုထားပါသည်"။ မှန်ကန်သောအဖြေမှာ ရွေးချယ်မှု ၂ ဖြစ်သည်။',
    },
  },
  dq_n3_2_1: {
    explanation: {
      id: 'Pada bagian catatan (※ 注意事項) tertulis: 「万が一作業が午前5:00より延長する場合は、午前4:30までに社内緊急連絡掲示板にてお知らせいたします」. Pilihan 2 paling akurat.',
      en: 'In the notice section (※ Notes), it states: "In the unlikely event that work extends past 5:00 AM, an announcement will be posted on the internal emergency bulletin board by 4:30 AM." Option 2 is most accurate.',
      my: 'မှတ်ချက်အပိုင်း (※ သတိပြုရန်) တွင် ဖော်ပြထားသည်- "လုပ်ငန်းသည် နံနက် ၅:၀၀ ထက် ကျော်လွန်သွားပါက နံနက် ၄:၃၀ မတိုင်မီ ရုံးတွင်း အရေးပေါ်ဆက်သွယ်ရေး ကြော်ငြာသင်ပုန်းတွင် အသိပေးကြေညာပါမည်"။ ရွေးချယ်မှု ၂ သည် အတိကျဆုံးဖြစ်သည်။',
    },
  },
  dq_n4_1_1: {
    explanation: {
      id: 'Pada poin nomor 3 tertulis: 「中を水できれいに洗ってから、専用のかごに入れてください」. Tindakan pertama adalah mencucinya dengan air (pilihan 3).',
      en: 'In Point 3 it states: "Wash the inside cleanly with water, then place it in the designated basket." The first action is washing with water (Option 3).',
      my: 'အချက် ၃ တွင် ဖော်ပြထားသည်- "အတွင်းပိုင်းကို ရေဖြင့် သန့်စင်အောင် ဆေးကြောပြီးနောက် သတ်မှတ်ထားသော ခြင်းတောင်းထဲသို့ ထည့်ပါ"။ ပထမဆုံး လုပ်ဆောင်ရမည့်အရာမှာ ရေဖြင့်ဆေးကြောခြင်းဖြစ်သည် (ရွေးချယ်မှု ၃)။',
    },
  },
  dq_n4_2_1: {
    explanation: {
      id: 'Penulis mengenakan pakaian tradisional yukata dan menikmati keindahan kembang api musim panas bersama teman (pilihan 2).',
      en: 'The author wore traditional yukata and enjoyed the beauty of summer fireworks with friends (Option 2).',
      my: 'စာရေးသူသည် ရိုးရာယုခတအဝတ်အစားကို ဝတ်ဆင်ကာ နွေရာသီ မီးရှူးမီးပန်းများ၏ လှပမှုကို သူငယ်ချင်းများနှင့်အတူ ခံစားခဲ့သည် (ရွေးချယ်မှု ၂)။',
    },
  },
  dq_n5_1_1: {
    explanation: {
      id: 'Pada bagian catatan tertulis: 「※ 毎週水曜日はお休みです」. Jadi hari libur toko adalah hari Rabu (pilihan 2).',
      en: 'In the notice it states: "※ Closed every Wednesday." Therefore, the shop\'s regular closing day is Wednesday (Option 2).',
      my: 'သတိပြုရန်အပိုင်းတွင် ဖော်ပြထားသည်- "※ ဗုဒ္ဓဟူးနေ့တိုင်း ဆိုင်ပိတ်ပါသည်"။ ထို့ကြောင့် ဆိုင်ပိတ်ရက်မှာ ဗုဒ္ဓဟူးနေ့ဖြစ်သည် (ရွေးချယ်မှု ၂)။',
    },
  },
  dq_n5_2_1: {
    explanation: {
      id: 'Tanaka menulis: 「来週の日本語のテストのために、図書館で一緒に勉強しませんか」 (Mau belajar bersama demi ujian bahasa Jepang minggu depan?). Jawaban tepat pilihan 2.',
      en: 'Tanaka writes: "Why don\'t we study together at the library for next week\'s Japanese exam?" (Option 2 is correct).',
      my: 'တာနာခက ရေးသားခဲ့သည်- "လာမည့်အပတ် ဂျပန်စာမေးပွဲအတွက် စာကြည့်တိုက်မှာ အတူတူ စာမလေ့လာချင်ဘူးလား" (ရွေးချယ်မှု ၂ သည် မှန်ကန်သည်)။',
    },
  },
};
