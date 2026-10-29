import ALL_CURRICULUM_MEANINGS from "@/data/allCurriculumMeanings.json";
import EXAMPLE_SENTENCE_TRANSLATIONS from "@/data/exampleSentenceTranslations.json";
import { ALL_KANJI_TRANSLATIONS } from './kanjiTranslationsManifest';
import type { Kotoba, Kanji, QuizCard } from '@/types';
import type { Language } from '@/locales/translations';

export interface LocalizedWordData {
  meaning: Record<Language, string>;
  notes?: Record<Language, string>;
  exampleTranslation?: Record<Language, string>;
}

export interface LocalizedKanjiData {
  meanings: Record<Language, string[]>;
  radicalMeaning: Record<Language, string>;
}

export const KOTOBA_TRANSLATIONS: Record<string, LocalizedWordData> = {
  "間隔": {
    "meaning": {
      "id": "jarak ; sela",
      "en": "space; interval",
      "my": "ကြားအကွာအဝေး ၊ အချိန်ပိုင်း"
    },
    "notes": {
      "id": "※ Dipakai untuk jarak ruang maupun waktu.",
      "en": "※ Used for intervals of space and time.",
      "my": "※ နေရာလွတ်နှင့် အချိန်ပိုင်းခြားမှု နှစ်မျိုးလုံးအတွက် သုံးသည်။"
    },
    "exampleTranslation": {
      "id": "Yang menentukan adalah jarak antara satu bangunan dengan bangunan lainnya.",
      "en": "What matters is the distance between one building and another.",
      "my": "အဓိကဆုံးဖြတ်သည်မှာ အဆောက်အအုံတစ်ခုနှင့်တစ်ခုကြား အကွာအဝေးဖြစ်သည်။"
    }
  },
  "焦げる": {
    "meaning": {
      "id": "hangus ; gosong",
      "en": "to burn; to scorch",
      "my": "ကျွမ်းသည် ၊ တူးသည်"
    },
    "notes": {
      "id": "※ Terbakar hingga gosong/berwarna hitam karena panas.",
      "en": "※ Burnt until blackened from heat.",
      "my": "※ အပူကြောင့် မဲတူးသွားသည်အထိ ကျွမ်းလောင်ခြင်း။"
    },
    "exampleTranslation": {
      "id": "Ikannya hangus menghitam.",
      "en": "The fish got completely burnt black.",
      "my": "ငါးသည် မည်းနက်သွားအောင် တူးသွားသည်။"
    }
  },
  "防止": {
    "meaning": {
      "id": "pencegahan",
      "en": "prevention; check",
      "my": "ကာကွယ်တားဆီးခြင်း"
    },
    "notes": {
      "id": "※ Mencegah terjadinya hal yang tidak diinginkan.",
      "en": "※ Preventing undesirable incidents.",
      "my": "※ မလိုလားအပ်သော အရာများ မဖြစ်ပွားအောင် ကြိုတင်ကာကွယ်ခြင်း။"
    },
    "exampleTranslation": {
      "id": "Berupaya keras dalam pencegahan kecelakaan.",
      "en": "Strive hard in accident prevention.",
      "my": "မတော်တဆမှုများ ကာကွယ်တားဆီးရေးတွင် အထူးကြိုးပမ်းသည်။"
    }
  },
  "煙": {
    "meaning": {
      "id": "asap",
      "en": "smoke; fumes",
      "my": "မီးခိုး"
    },
    "notes": {
      "id": "※ Asap yang membubung dari kebakaran atau rokok.",
      "en": "※ Smoke rising from fires or tobacco.",
      "my": "※ မီးလောင်မှု သို့မဟုတ် စီးကရက်မှ ထွက်လာသော မီးခိုးငွေ့။"
    },
    "exampleTranslation": {
      "id": "Asap memenuhi seluruh ruangan.",
      "en": "Smoke filled the entire room.",
      "my": "အခန်းတစ်ခုလုံး မီးခိုးများ ဖုံးလွှမ်းနေသည်။"
    }
  },
  "一部": {
    "meaning": {
      "id": "sebagian ; satu bagian",
      "en": "part; portion",
      "my": "တစ်စိတ်တစ်ပိုင်း"
    },
    "notes": {
      "id": "※ Bagian dari keseluruhan.",
      "en": "※ Part of the whole.",
      "my": "※ အလုံးစုံ၏ တစ်စိတ်တစ်ပိုင်း။"
    },
    "exampleTranslation": {
      "id": "Mengalihkan sebagian gaji ke tabungan.",
      "en": "Allocating part of the salary to savings.",
      "my": "လစာ၏ တစ်စိတ်တစ်ပိုင်းကို စုဆောင်းငွေအဖြစ် ထည့်ထားသည်။"
    }
  },
  "誤り": {
    "meaning": {
      "id": "kesalahan ; kekeliruan",
      "en": "error; mistake",
      "my": "အမှား ၊ လွဲချော်မှု"
    },
    "notes": {
      "id": "※ Kesalahan yang tidak disengaja.",
      "en": "※ Unintentional error.",
      "my": "※ ရည်ရွယ်ချက်မပါဘဲ မှားယွင်းသွားသောအမှား။"
    },
    "exampleTranslation": {
      "id": "Ada kesalahan dalam perhitungan.",
      "en": "There was an error in the calculation.",
      "my": "တွက်ချက်မှုတွင် အမှားအယွင်း ရှိခဲ့သည်။"
    }
  },
  "重なる": {
    "meaning": {
      "id": "bertumpuk ; tumpang tindih",
      "en": "to pile up; overlap",
      "my": "ထပ်နေသည် ၊ တစ်ပြိုင်နက်ဖြစ်ပွားသည်"
    },
    "notes": {
      "id": "※ Jadwal atau barang bertumpuk secara bersamaan.",
      "en": "※ Schedules or items overlapping simultaneously.",
      "my": "※ အချိန်ဇယား သို့မဟုတ် ပစ္စည်းများ တစ်ပြိုင်နက် ထပ်နေခြင်း။"
    },
    "exampleTranslation": {
      "id": "Beberapa hal buruk bertumpuk terjadi bersamaan.",
      "en": "Several bad things happened together at once.",
      "my": "မကောင်းသောအရာများ တစ်ခုပြီးတစ်ခု ဆက်တိုက်ထပ်ဖြစ်ခဲ့သည်။"
    }
  },
  "歩き出す": {
    "meaning": {
      "id": "mulai berjalan",
      "en": "to start walking",
      "my": "စတင်လမ်းလျှောက်သည်"
    },
    "notes": {
      "id": "※ Gerakan melangkah dan mulai berjalan.",
      "en": "※ Initiating movement by walking forward.",
      "my": "※ ခြေလှမ်းစတင်လှမ်းပြီး လမ်းလျှောက်ခြင်း။"
    },
    "exampleTranslation": {
      "id": "Begitu lampu hijau, semua orang mulai berjalan serentak.",
      "en": "As soon as the light turned green, everyone started walking at once.",
      "my": "မီးစိမ်းသည်နှင့် လူအားလုံး တစ်ပြိုင်နက် စတင်လမ်းလျှောက်ကြသည်။"
    }
  },
  "出産": {
    "meaning": {
      "id": "persalinan ; kelahiran anak",
      "en": "childbirth; delivery",
      "my": "ကလေးမွေးဖွားခြင်း"
    },
    "notes": {
      "id": "※ Proses melahirkan bayi.",
      "en": "※ Process of giving birth to a baby.",
      "my": "※ ရင်သွေးငယ်ကို မွေးဖွားပေးသည့် ဖြစ်စဉ်။"
    },
    "exampleTranslation": {
      "id": "Melahirkan bayi laki-laki dengan selamat.",
      "en": "Safely gave birth to a baby boy.",
      "my": "သားယောက်ျားလေးကို ဘေးကင်းချောမွေ့စွာ မွေးဖွားခဲ့သည်။"
    }
  },
  "幼い": {
    "meaning": {
      "id": "masih kecil ; belia",
      "en": "very young; childish",
      "my": "ငယ်ရွယ်သော ၊ ကလေးဆန်သော"
    },
    "notes": {
      "id": "※ Usia masih belia atau sifat kekanak-kanakan.",
      "en": "※ Tender age or childish innocence.",
      "my": "※ အသက်အရွယ် နုနယ်ငယ်ရွယ်ခြင်း သို့မဟုတ် ကလေးစိတ်မပျောက်ခြင်း။"
    },
    "exampleTranslation": {
      "id": "Ingatan masa kecil kembali terbayang.",
      "en": "Memories from childhood come flooding back.",
      "my": "ကလေးဘဝက အမှတ်တရများ ပြန်လည်ပေါ်ပေါက်လာသည်။"
    }
  },
  "屋根": {
    "meaning": {
      "id": "atap",
      "en": "roof",
      "my": "ခေါင်မိုး"
    },
    "notes": {
      "id": "※ Atap bangunan.",
      "en": "※ Roof of a building.",
      "my": "※ အဆောက်အအုံ၏ အပေါ်ခေါင်မိုး။"
    },
    "exampleTranslation": {
      "id": "Seekor burung hinggap di atas atap.",
      "en": "A bird is perched on top of the roof.",
      "my": "ခေါင်မိုးပေါ်တွင် ငှက်တစ်ကောင် နားနေသည်။"
    }
  },
  "訂正": {
    "meaning": {
      "id": "koreksi ; revisi",
      "en": "correction; revision",
      "my": "ပြင်ဆင်ချက် ၊ အမှားပြင်ခြင်း"
    },
    "notes": {
      "id": "※ Memperbaiki teks, data, atau ucapan yang keliru.",
      "en": "※ Rectifying incorrect text, data, or words.",
      "my": "※ မှားယွင်းနေသော စာသား၊ အချက်အလက် သို့မဟုတ် စကားကို ပြင်ဆင်ခြင်း။"
    },
    "exampleTranslation": {
      "id": "Tolong koreksi salah ketik.",
      "en": "Please correct the typo.",
      "my": "စာလုံးပေါင်းမှားယွင်းမှုကို ကျေးဇူးပြု၍ ပြင်ဆင်ပေးပါ။"
    }
  },
  "誤る": {
    "meaning": {
      "id": "keliru ; salah langkah",
      "en": "to make a mistake; err",
      "my": "မှားယွင်းသည် ၊ လမ်းမှားသွားသည်"
    },
    "notes": {
      "id": "※ Berbeda dengan 謝る (minta maaf), ini berarti salah bertindak.",
      "en": "※ Unlike 謝る (to apologize), this means to make an erroneous decision.",
      "my": "※ 謝る (တောင်းပန်သည်) နှင့်မတူဘဲ၊ လုပ်ရပ်မှားယွင်းသွားခြင်းကို ဆိုလိုသည်။"
    },
    "exampleTranslation": {
      "id": "Jika salah menilai keputusan, akan jadi masalah besar.",
      "en": "If you make a mistaken judgment, it will become a serious issue.",
      "my": "ဆုံးဖြတ်ချက် လွဲမှားသွားပါက ပြဿနာကြီး ဖြစ်လာလိမ့်မည်။"
    }
  },
  "みたす": {
    "meaning": {
      "id": "memenuhi (syarat, standar)",
      "en": "to satisfy; fulfill",
      "my": "ပြည့်မီသည် ၊ ကျေနပ်စေသည်"
    },
    "notes": {
      "id": "※ Memenuhi standar, kualifikasi atau kebutuhan batin.",
      "en": "※ Fulfilling standards, qualifications, or personal needs.",
      "my": "※ စံချိန်စံညွှန်း၊ သတ်မှတ်ချက် သို့မဟုတ် လိုအပ်ချက်ကို ပြည့်မီစေခြင်း။"
    },
    "exampleTranslation": {
      "id": "Memenuhi kriteria kelulusan.",
      "en": "Meets all passing criteria.",
      "my": "အောင်မြင်မှု သတ်မှတ်ချက်များကို ပြည့်မီသည်။"
    }
  },
  "もとめる": {
    "meaning": {
      "id": "meminta ; menginginkan ; mencari",
      "en": "to seek; request",
      "my": "တောင်းဆိုသည် ၊ လိုလားသည် ၊ ရှာဖွေသည်"
    },
    "notes": {
      "id": "※ Mengharapkan bantuan atau mencari solusi.",
      "en": "※ Seeking assistance or solutions.",
      "my": "※ အကူအညီတောင်းခံခြင်း သို့မဟုတ် ဖြေရှင်းချက်ရှာဖွေခြင်း။"
    },
    "exampleTranslation": {
      "id": "Suara orang-orang yang menginginkan perdamaian.",
      "en": "The voices of people seeking peace.",
      "my": "ငြိမ်းချမ်းရေးကို လိုလားသော ပြည်သူတို့၏ အသံ။"
    }
  },
  "時間帯": {
    "meaning": {
      "id": "rentang waktu dalam sehari",
      "en": "time slot; time zone",
      "my": "တစ်နေ့တာအတွင်း အချိန်အပိုင်းအခြား"
    },
    "notes": {
      "id": "※ Periode jam tertentu.",
      "en": "※ A specific period of hours in a day.",
      "my": "※ တစ်နေ့တာအတွင်း သတ်မှတ်ထားသော အချိန်ကာလအပိုင်းအခြား။"
    },
    "exampleTranslation": {
      "id": "Menghindari rentang waktu yang ramai padat.",
      "en": "Avoid crowded peak hours.",
      "my": "လူရှုပ်ထွေးသော အချိန်ပိုင်းကို ရှောင်ကြဉ်သည်။"
    }
  },
  "瞬間": {
    "meaning": {
      "id": "detik itu juga ; sesaat",
      "en": "moment; instant",
      "my": "ချက်ချင်းအခိုက်အတန့် ၊ ခေတ္တခဏ"
    },
    "notes": {
      "id": "※ Waktu yang sangat singkat sekejap mata.",
      "en": "※ An extremely brief instant in the blink of an eye.",
      "my": "※ မျက်စိတစ်မှိတ်အတွင်း အလွန်တိုတောင်းသော အခိုက်အတန့်။"
    },
    "exampleTranslation": {
      "id": "Pada detik itu juga, petir menyambar.",
      "en": "At that very instant, lightning struck.",
      "my": "ထိုအခိုက်အတန့်၌ပင် မိုးကြိုးပစ်ချခဲ့သည်။"
    }
  },
  "知らぬ間に": {
    "meaning": {
      "id": "tanpa disadari",
      "en": "before one knows it",
      "my": "သတိမထားမိဘဲ ၊ မသိလိုက်ဘဲ"
    },
    "notes": {
      "id": "※ Tanpa disadari waktu atau situasi berubah.",
      "en": "※ Time or circumstances passing unnoticed.",
      "my": "※ မိမိကိုယ်ကို သတိမပြုမိလိုက်ဘဲ အချိန်ကုန်လွန်သွားခြင်း။"
    },
    "exampleTranslation": {
      "id": "Tanpa disadari hari sudah senja.",
      "en": "Before I knew it, night had already fallen.",
      "my": "မသိလိုက်ဘဲ နေဝင်ရီတရော ရောက်ရှိသွားခဲ့ပြီ။"
    }
  },
  "短時間": {
    "meaning": {
      "id": "waktu singkat",
      "en": "short time",
      "my": "အချိန်တိုတို"
    },
    "notes": {
      "id": "※ Durasi waktu yang pendek.",
      "en": "※ A brief length of duration.",
      "my": "※ အချိန်တိုတောင်းသော ကာလ။"
    },
    "exampleTranslation": {
      "id": "Belajar efisien dalam waktu singkat.",
      "en": "Study efficiently within a short time.",
      "my": "အချိန်တိုတိုအတွင်း ထိရောက်စွာ လေ့လာသည်။"
    }
  },
  "長時間": {
    "meaning": {
      "id": "waktu yang lama ; berjam-jam",
      "en": "long time; hours",
      "my": "အချိန်ကြာမြင့်စွာ ၊ နာရီပေါင်းများစွာ"
    },
    "notes": {
      "id": "※ Berlangsung berjam-jam.",
      "en": "※ Lasting for several hours.",
      "my": "※ နာရီပေါင်းများစွာ ကြာမြင့်စွာ ဖြစ်ပွားခြင်း။"
    },
    "exampleTranslation": {
      "id": "Operasi yang berlangsung lama telah selesai.",
      "en": "The lengthy operation was finally completed.",
      "my": "အချိန်ကြာမြင့်စွာ ပြုလုပ်ခဲ့သော ခွဲစိတ်မှု ပြီးဆုံးသွားသည်။"
    }
  },
  "区別": {
    "meaning": {
      "id": "pembedaan ; pemisahan",
      "en": "distinction; differentiation",
      "my": "ခွဲခြားခြင်း ၊ သီးခြားခွဲထုတ်ခြင်း"
    },
    "notes": {
      "id": "※ 区別 → tindakan MEMISAHKAN dua hal (区別がつく) .\n※ Perbedaannya sendiri → 相違 atau 違い。",
      "en": "※ 区別 → the act of separating/distinguishing two items.\n※ The difference itself → 相違 or 違い.",
      "my": "※ 区別 → အရာနှစ်ခုကို ခွဲခြားသိမြင်သော လုပ်ဆောင်ချက်။\n※ ၎င်းကွာခြားချက်ကိုယ်တိုင် → 相違 သို့မဟုတ် 違い။"
    },
    "exampleTranslation": {
      "id": "Membedakan antara yang baik dan buruk.",
      "en": "Distinguish between right and wrong.",
      "my": "အကောင်းနှင့် အဆိုးကို ခွဲခြားသိမြင်သည်။"
    }
  },
  "煮込む": {
    "meaning": {
      "id": "merebus lama hingga meresap",
      "en": "to stew; simmer",
      "my": "ဟင်းရည်အရသာစိမ့်ဝင်အောင် ချက်ပြုတ်သည်"
    },
    "notes": {
      "id": "※ 込む di sini berarti lama dan sampai ke dalam — bukan sekadar 煮る。",
      "en": "※ 込む denotes deep, sustained simmering — beyond simple 煮る.",
      "my": "※ 込む သည် ရိုးရိုးပြုတ်ရုံသာမက အတွင်းထိ စိမ့်ဝင်အောင် အချိန်ကြာကြာ ချက်ပြုတ်ခြင်းကို ပြသည်။"
    },
    "exampleTranslation": {
      "id": "Merebus sup secara perlahan hingga meresap.",
      "en": "Slowly simmer the soup until flavors blend thoroughly.",
      "my": "ဟင်းရည်ကို အေးအေးဆေးဆေး စိမ့်ဝင်အောင် ချက်ပြုတ်သည်။"
    }
  },
  "染み込む": {
    "meaning": {
      "id": "meresap ; menyerap ke dalam",
      "en": "to soak into; permeate",
      "my": "စိမ့်ဝင်သည် ၊ စုပ်ယူသည်"
    },
    "notes": {
      "id": "※ Cairan meresap ke dalam kain, tanah, atau hati.",
      "en": "※ Liquids soaking deep into cloth, soil, or emotions.",
      "my": "※ အရည်သည် အဝတ်၊ မြေကြီး သို့မဟုတ် စိတ်နှလုံးထဲသို့ စိမ့်ဝင်သွားခြင်း။"
    },
    "exampleTranslation": {
      "id": "Rasa bumbu meresap ke dalam masakan.",
      "en": "The seasoning flavors soaked deeply into the dish.",
      "my": "ဟင်းခတ်အမွှေးအကြိုင်အရသာသည် ဟင်းထဲသို့ စိမ့်ဝင်သွားသည်။"
    }
  },
  "編む": {
    "meaning": {
      "id": "merajut ; menganyam",
      "en": "to knit; braid",
      "my": "သိုးမွှေးထိုးသည် ၊ ကျစ်သည်"
    },
    "notes": {
      "id": "※ Menganyam benang atau rambut.",
      "en": "※ Knitting yarn or braiding strands.",
      "my": "※ သိုးမွှေးချည် ထိုးခြင်း သို့မဟုတ် ဆံပင်ကျစ်ခြင်း။"
    },
    "exampleTranslation": {
      "id": "Merajut baju hangat.",
      "en": "Knit a warm sweater.",
      "my": "ဆွယ်တာအင်္ကျီကို သိုးမွှေးထိုးသည်။"
    }
  },
  "緩む": {
    "meaning": {
      "id": "mengendur ; melonggar",
      "en": "to become loose; slacken",
      "my": "လျော့ရဲသည်"
    },
    "notes": {
      "id": "※ Tali atau ketegangan menjadi kendur.",
      "en": "※ Ropes or tension growing slack.",
      "my": "※ ကြိုး သို့မဟုတ် တင်းမာမှု လျော့ရဲသွားခြင်း။"
    },
    "exampleTranslation": {
      "id": "Talinya mengendur.",
      "en": "The rope has become loose.",
      "my": "ကြိုးသည် လျော့ရဲနေသည်။"
    }
  },
  "圧倒": {
    "meaning": {
      "id": "menguasai sepenuhnya ; mengalahkan telak",
      "en": "overwhelm; overpower",
      "my": "အပြတ်အသတ်အနိုင်ရသည် ၊ လွှမ်းမိုးသည်"
    },
    "notes": {
      "id": "※ Ungkapan kekuatan atau keunggulan yang jauh melampaui lawan.",
      "en": "※ Overwhelming strength vastly surpassing the rival.",
      "my": "※ ပြိုင်ဘက်ထက် အဆပေါင်းများစွာ သာလွန်သော အင်အားကို ဖော်ပြခြင်း။"
    },
    "exampleTranslation": {
      "id": "Mengalahkan tim lawan dengan keunggulan yang mutlak.",
      "en": "Defeated the opponent team with overwhelming prowess.",
      "my": "ပြိုင်ဘက်အသင်းကို အပြတ်အသတ် အသာစီးဖြင့် အနိုင်ယူခဲ့သည်။"
    }
  },
  "著しい": {
    "meaning": {
      "id": "sangat mencolok ; signifikan",
      "en": "remarkable; striking",
      "my": "သိသိသာသာဖြစ်သော ၊ ထင်ရှားသော"
    },
    "notes": {
      "id": "※ Perubahan atau kemajuan yang sangat terlihat jelas oleh mata.",
      "en": "※ Conspicuous change or remarkable progress.",
      "my": "※ မျက်မြင်ထင်ရှားသော တိုးတက်ပြောင်းလဲမှု။"
    },
    "exampleTranslation": {
      "id": "Dalam beberapa tahun terakhir, kemajuan teknologi sangat pesat dan mencolok.",
      "en": "In recent years, technological progress has been remarkable.",
      "my": "မကြာသေးမီနှစ်များအတွင်း နည်းပညာတိုးတက်မှုသည် သိသိသာသာ ထင်ရှားလာသည်။"
    }
  },
  "紛らわしい": {
    "meaning": {
      "id": "membingungkan ; rancu (mirip sehingga susah dibedakan)",
      "en": "confusing; misleading",
      "my": "ရှုပ်ထွေးစေသော ၊ ထင်ယောင်ထင်မှားဖြစ်စေသော"
    },
    "notes": {
      "id": "※ Dua hal yang begitu mirip sehingga rawan membuat salah sangka.",
      "en": "※ Items so similar they easily cause misunderstanding.",
      "my": "※ အလွန်ဆင်တူသဖြင့် အထင်မှားစေနိုင်သောအရာ။"
    },
    "exampleTranslation": {
      "id": "Namanya sangat mirip sehingga membingungkan.",
      "en": "The names are so alike that it is confusing.",
      "my": "နာမည်များ ဆင်တူလွန်းသဖြင့် ရှုပ်ထွေးစေသည်။"
    }
  },
  "相違": {
    "meaning": {
      "id": "perbedaan ; ketidakcocokan fakta",
      "en": "difference; discrepancy",
      "my": "ကွဲပြားခြားနားမှု ၊ မကိုက်ညီမှု"
    },
    "notes": {
      "id": "※ Perbedaan resmi/formal antara data atau kesaksian.",
      "en": "※ Formal discrepancy between testimonies or datasets.",
      "my": "※ အချက်အလက်များ သို့မဟုတ် သက်သေထွက်ဆိုချက်များအကြား ကွဲလွဲမှု။"
    },
    "exampleTranslation": {
      "id": "Terdapat perbedaan besar dalam klaim kedua belah pihak.",
      "en": "There is a major discrepancy between both claims.",
      "my": "နှစ်ဖက်စလုံး၏ အခိုင်အမာပြောဆိုချက်များအကြား ကြီးမားသောကွဲလွဲမှု ရှိသည်။"
    }
  },
  "是正": {
    "meaning": {
      "id": "koreksi ; pelurusan (keadaan buruk menjadi benar)",
      "en": "correction; rectification",
      "my": "တည့်မတ်ပြင်ဆင်ခြင်း"
    },
    "notes": {
      "id": "※ Memperbaiki ketimpangan, ketidakadilan, atau kesalahan sistemik.",
      "en": "※ Correcting inequalities or systemic defects.",
      "my": "※ မညီမျှမှု သို့မဟုတ် စနစ်ပိုင်းဆိုင်ရာ ချို့ယွင်းချက်ကို ပြင်ဆင်ခြင်း။"
    },
    "exampleTranslation": {
      "id": "Mengambil langkah-langkah untuk meluruskan kesenjangan.",
      "en": "Taking active measures to rectify the disparity.",
      "my": "ကွာဟချက်ကို တည့်မတ်ပြင်ဆင်ရန် အစီအမံများ ဆောင်ရွက်သည်။"
    }
  },
  "妥協": {
    "meaning": {
      "id": "kompromi ; jalan tengah",
      "en": "compromise; concession",
      "my": "အပြန်အလှန်လိုက်လျောမှု ၊ အပေးအယူလုပ်ခြင်း"
    },
    "notes": {
      "id": "※ Mengalah sedikit demi mencapai kesepakatan bersama.",
      "en": "※ Mutual concession to reach agreement.",
      "my": "※ အားလုံးသဘောတူညီမှုရရှိရန် အပြန်အလှန် လိုက်လျောအပေးအယူလုပ်ခြင်း။"
    },
    "exampleTranslation": {
      "id": "Kedua pihak saling mendekat dan mencapai kompromi.",
      "en": "Both parties moved toward each other and reached a compromise.",
      "my": "နှစ်ဦးနှစ်ဖက် ညှိနှိုင်းပြီး အပြန်အလှန်လိုက်လျောမှု ရရှိခဲ့သည်။"
    }
  },
  "模索": {
    "meaning": {
      "id": "mencari-cari jalan keluar ; meraba-raba solusi",
      "en": "groping; searching for a way",
      "my": "လမ်းစရှာဖွေခြင်း ၊ စမ်းတဝါးဝါးရှာသည်"
    },
    "notes": {
      "id": "※ Berusaha keras menemukan solusi dalam kegelapan/ketidakpastian.",
      "en": "※ Exploring solutions amidst uncertainty.",
      "my": "※ မသေချာမရေရာမှုများကြားမှ နည်းလမ်းရှာဖွေရန် ကြိုးပမ်းခြင်း။"
    },
    "exampleTranslation": {
      "id": "Sedang mencari-cari model bisnis baru.",
      "en": "Currently exploring new business models.",
      "my": "စီးပွားရေးပုံစံသစ်တစ်ခုကို စမ်းတဝါးဝါး ရှာဖွေနေသည်။"
    }
  },
  "享受": {
    "meaning": {
      "id": "menikmati ; menerima anugerah/manfaat",
      "en": "enjoyment; reception",
      "my": "ခံစားရယူသည် ၊ အကျိုးကျေးဇူးရရှိသည်"
    },
    "notes": {
      "id": "※ Menerima dan menikmati keuntungan, hak, atau alam bebas.",
      "en": "※ Receiving and relishing rights or blessings.",
      "my": "※ အခွင့်အရေး သို့မဟုတ် ကောင်းချီးအကျိုးကျေးဇူးများကို ခံစားရယူခြင်း။"
    },
    "exampleTranslation": {
      "id": "Menikmati sepenuhnya berkah dari perdamaian.",
      "en": "Fully enjoy the blessings of peace.",
      "my": "ငြိမ်းချမ်းရေး၏ အကျိုးကျေးဇူးများကို အပြည့်အဝ ခံစားရရှိသည်။"
    }
  },
  "遮断": {
    "meaning": {
      "id": "pemutusan ; isolasi ; pemblokiran",
      "en": "interception; isolation",
      "my": "ဖြတ်တောက်ခြင်း ၊ ပိတ်ဆို့ခြင်း"
    },
    "notes": {
      "id": "※ Memutus aliran listrik, informasi, atau lalu lintas.",
      "en": "※ Cutting off power, data, or traffic.",
      "my": "※ လျှပ်စစ်၊ သတင်းအချက်အလက် သို့မဟုတ် ယာဉ်ကြောကို ဖြတ်တောက်ခြင်း။"
    },
    "exampleTranslation": {
      "id": "Memutus arus lalu lintas pada saat darurat.",
      "en": "Cut off traffic flow during emergencies.",
      "my": "အရေးပေါ်အခြေအနေတွင် ယာဉ်ကြောကို ဖြတ်တောက်လိုက်သည်။"
    }
  },
  "崩壊": {
    "meaning": {
      "id": "runtuh ; ambruknya sistem/bangunan",
      "en": "collapse; breakdown",
      "my": "ပြိုလဲပျက်စီးခြင်း"
    },
    "notes": {
      "id": "※ Runtuhnya tatanan, ekonomi, atau struktur fisik.",
      "en": "※ Collapse of economic systems or physical structures.",
      "my": "※ စီးပွားရေး သို့မဟုတ် ရုပ်ပိုင်းဆိုင်ရာ အဆောက်အအုံ ပြိုလဲပျက်စီးခြင်း။"
    },
    "exampleTranslation": {
      "id": "Runtuhnya ekonomi gelembung telah dimulai.",
      "en": "The collapse of the bubble economy has begun.",
      "my": "ပူဖောင်းစီးပွားရေး ပြိုလဲမှု စတင်ခဲ့ပြီ။"
    }
  },
  "蓄積": {
    "meaning": {
      "id": "akumulasi ; penimbunan ; penumpukan",
      "en": "accumulation; store",
      "my": "စုဆောင်းမိခြင်း ၊ စုပုံလာခြင်း"
    },
    "notes": {
      "id": "※ Menumpuknya kelelahan, modal, atau pengalaman dari waktu ke waktu.",
      "en": "※ Build-up of fatigue, capital, or knowledge over time.",
      "my": "※ အချိန်ကြာလာသည်နှင့်အမျှ ပင်ပန်းနွမ်းနယ်မှု သို့မဟုတ် အတွေ့အကြုံ စုပုံလာခြင်း။"
    },
    "exampleTranslation": {
      "id": "Rasa lelah sehari-hari telah menumpuk.",
      "en": "Daily fatigue has accumulated heavily.",
      "my": "နေ့စဉ် ပင်ပန်းနွမ်းနယ်မှုများ စုပုံနေပြီဖြစ်သည်။"
    }
  },
  "促進": {
    "meaning": {
      "id": "akselerasi ; mendorong percepatan",
      "en": "promotion; acceleration",
      "my": "အရှိန်မြှင့်တင်ခြင်း ၊ တွန်းအားပေးခြင်း"
    },
    "notes": {
      "id": "※ Mempercepat kemajuan proyek, metabolisme, atau perdagangan.",
      "en": "※ Accelerating projects, trade, or physical processes.",
      "my": "※ စီမံကိန်း သို့မဟုတ် ကုန်သွယ်ရေး တိုးတက်မှုကို အရှိန်မြှင့်တင်ပေးခြင်း။"
    },
    "exampleTranslation": {
      "id": "Mendorong percepatan pertukaran ekonomi kedua negara.",
      "en": "Promote economic exchanges between both nations.",
      "my": "နှစ်နိုင်ငံအကြား စီးပွားရေး ဖလှယ်မှုကို အရှိန်မြှင့်တင်ပေးသည်။"
    }
  },
  "抑制": {
    "meaning": {
      "id": "penekanan ; pengendalian diri ; meredam",
      "en": "control; suppression",
      "my": "ထိန်းချုပ်ခြင်း ၊ ဖိနှိပ်ထိန်းသိမ်းခြင်း"
    },
    "notes": {
      "id": "※ Menahan emosi, inflasi, atau pertumbuhan bakteri.",
      "en": "※ Restraining emotion, inflation, or bacterial growth.",
      "my": "※ စိတ်ခံစားမှု၊ ငွေကြေးဖောင်းပွမှု သို့မဟုတ် ဘက်တီးရီးယားကို ထိန်းချုပ်ခြင်း။"
    },
    "exampleTranslation": {
      "id": "Meredam emosi dan berbicara dengan tenang.",
      "en": "Suppressed emotions and spoke calmly.",
      "my": "စိတ်ခံစားမှုကို ထိန်းချုပ်ပြီး အေးဆေးစွာ ပြောဆိုသည်။"
    }
  },
  "緩和": {
    "meaning": {
      "id": "pelonggaran ; peredaan ketegangan",
      "en": "relaxation; relief",
      "my": "လျှော့ပေါ့သက်သာစေခြင်း"
    },
    "notes": {
      "id": "※ Meringankan regulasi, rasa sakit, atau ketegangan politik.",
      "en": "※ Easing regulations, discomfort, or geopolitical strain.",
      "my": "※ စည်းမျဉ်းများ၊ နာကျင်မှု သို့မဟုတ် တင်းမာမှုကို လျှော့ပေါ့သက်သာစေခြင်း။"
    },
    "exampleTranslation": {
      "id": "Meminum obat untuk meredakan rasa sakit.",
      "en": "Take medicine to relieve the pain.",
      "my": "နာကျင်မှုကို သက်သာစေရန် ဆေးသောက်သည်။"
    }
  },
  "把握": {
    "meaning": {
      "id": "pemahaman mendalam ; menggenggam situasi",
      "en": "grasp; comprehension",
      "my": "သဘောပေါက်နားလည်ခြင်း ၊ အခြေအနေကိုဆုပ်ကိုင်မိခြင်း"
    },
    "notes": {
      "id": "※ Memahami kondisi atau inti masalah dengan jelas dan akurat.",
      "en": "※ Firmly understanding core facts or realities.",
      "my": "※ အခြေအနေ သို့မဟုတ် ပြဿနာ၏ အနှစ်သာရကို တိကျစွာ သဘောပေါက်ခြင်း။"
    },
    "exampleTranslation": {
      "id": "Sangat penting untuk memahami situasi saat ini dengan tepat.",
      "en": "It is crucial to accurately grasp the current state.",
      "my": "လက်ရှိအခြေအနေကို တိကျစွာ နားလည်သဘောပေါက်ရန် အလွန်အရေးကြီးသည်။"
    }
  },
  "該当": {
    "meaning": {
      "id": "relevan ; memenuhi syarat kriteria",
      "en": "corresponding to; falling under",
      "my": "ကိုက်ညီမှုရှိသော ၊ အကျုံးဝင်သော"
    },
    "notes": {
      "id": "※ Cocok dengan pasal, syarat, atau kondisi tertentu.",
      "en": "※ Matching specific clauses or qualifications.",
      "my": "※ သတ်မှတ်ထားသော စည်းကမ်းချက်နှင့် ကိုက်ညီအကျုံးဝင်ခြင်း။"
    },
    "exampleTranslation": {
      "id": "Hanya mereka yang memenuhi kriteria yang dapat mendaftar.",
      "en": "Only those who meet the qualifications may apply.",
      "my": "သတ်မှတ်ချက်နှင့် ကိုက်ညီသူများသာ လျှောက်ထားနိုင်သည်။"
    }
  },
  "妥当": {
    "meaning": {
      "id": "wajar ; tepat ; masuk akal",
      "en": "proper; reasonable",
      "my": "သင့်လျော်မှန်ကန်သော ၊ ကျိုးကြောင်းဆီလျော်သော"
    },
    "notes": {
      "id": "※ Keputusan atau kesimpulan yang pantas dan dapat diterima akal sehat.",
      "en": "※ Judgments deemed sound and justifiable.",
      "my": "※ ကျိုးကြောင်းဆီလျော်ပြီး လက်ခံနိုင်ဖွယ်ရှိသော ဆုံးဖြတ်ချက်။"
    },
    "exampleTranslation": {
      "id": "Keputusan itu dapat dikatakan sangat wajar dan tepat.",
      "en": "That conclusion can be considered very reasonable.",
      "my": "ထိုဆုံးဖြတ်ချက်သည် အလွန်သင့်လျော်မှန်ကန်သည်ဟု ဆိုနိုင်သည်။"
    }
  },
  "抜擢": {
    "meaning": {
      "id": "promosi khusus ; pengangkatan luar biasa",
      "en": "selection; promotion",
      "my": "အထူးရာထူးတိုးမြှင့်ခြင်း"
    },
    "notes": {
      "id": "※ Memilih seseorang yang berprestasi melompati urutan senioritas.",
      "en": "※ Promoting exceptional talent over seniority.",
      "my": "※ ဝါစဉ်ကို ကျော်လွန်၍ အရည်အချင်းရှိသူကို ရာထူးတိုးမြှင့်ခြင်း။"
    },
    "exampleTranslation": {
      "id": "Karyawan muda dipromosikan secara istimewa memegang peran besar.",
      "en": "A young employee was promoted to an important role.",
      "my": "လူငယ်ဝန်ထမ်းတစ်ဦးသည် အရေးကြီးတာဝန်အတွက် အထူးရာထူးတိုးပေးခြင်း ခံရသည်။"
    }
  },
  "克服": {
    "meaning": {
      "id": "menaklukkan ; mengatasi rintangan",
      "en": "conquest; overcoming",
      "my": "ကျော်လွှားအောင်မြင်သည်"
    },
    "notes": {
      "id": "※ Menang atas kelemahan diri, trauma, atau penyakit.",
      "en": "※ Overcoming personal weaknesses or illness.",
      "my": "※ မိမိ၏အားနည်းချက် သို့မဟုတ် ရောဂါဝေဒနာကို ကျော်လွှားအောင်မြင်ခြင်း။"
    },
    "exampleTranslation": {
      "id": "Mengatasi kelemahan diri dan meraih kemenangan.",
      "en": "Overcame weaknesses and seized victory.",
      "my": "အားနည်းချက်များကို ကျော်လွှားပြီး အောင်ပွဲဆွတ်ခူးခဲ့သည်။"
    }
  },
  "兆候": {
    "meaning": {
      "id": "tanda-tanda awal ; gelagat",
      "en": "sign; symptom",
      "my": "ရှေ့ပြေးလက္ခဏာ ၊ အရိပ်အယောင်"
    },
    "notes": {
      "id": "※ Gejala awal sebelum peristiwa besar atau penyakit terjadi.",
      "en": "※ Early symptoms preceding events or disease.",
      "my": "※ အဖြစ်အပျက်ကြီး မဖြစ်မီ ပေါ်ပေါက်လာသော ရှေ့ပြေးအရိပ်အယောင်။"
    },
    "exampleTranslation": {
      "id": "Tanda-tanda pemulihan ekonomi mulai tampak.",
      "en": "Signs of economic recovery are beginning to show.",
      "my": "စီးပွားရေး ပြန်လည်ဦးမော့လာမည့် အရိပ်အယောင်များ စတင်တွေ့မြင်ရသည်။"
    }
  },
  "破綻": {
    "meaning": {
      "id": "bangkrut ; hancur berantakan",
      "en": "failure; bankruptcy",
      "my": "ပျက်စီးဆုတ်ယုတ်ခြင်း ၊ ဒေဝါလီခံရခြင်း"
    },
    "notes": {
      "id": "※ Runtuhnya keuangan atau gagalnya rencana secara telak.",
      "en": "※ Collapse of fiscal plans or complete failure.",
      "my": "※ ငွေရေးကြေးရေး ပျက်စီးခြင်း သို့မဟုတ် အစီအစဉ်များ အလုံးစုံပျက်စီးခြင်း။"
    },
    "exampleTranslation": {
      "id": "Kondisi finansial berada di ambang kebangkrutan.",
      "en": "Finances are teetering on the verge of collapse.",
      "my": "ဘဏ္ဍာရေးအခြေအနေသည် ဒေဝါလီခံရမည့် အန္တရာယ်နှင့် ရင်ဆိုင်နေရသည်။"
    }
  },
  "概ね": {
    "meaning": {
      "id": "pada umumnya ; garis besarnya",
      "en": "generally; mostly",
      "my": "ယေဘုယျအားဖြင့် ၊ အကြမ်းဖျင်းအားဖြင့်"
    },
    "notes": {
      "id": "※ Sebagian besar atau secara garis umum sudah sesuai rencana.",
      "en": "※ Largely following plans on the whole.",
      "my": "※ အကြမ်းဖျင်းအားဖြင့် အစီအစဉ်အတိုင်း ချောမွေ့စွာ သွားနေခြင်း။"
    },
    "exampleTranslation": {
      "id": "Rencana secara garis besar berjalan lancar.",
      "en": "The project is mostly proceeding smoothly.",
      "my": "အစီအစဉ်သည် ယေဘုယျအားဖြင့် ချောမွေ့စွာ ဆောင်ရွက်လျက်ရှိသည်။"
    }
  },
  "予め": {
    "meaning": {
      "id": "sebelumnya ; di awal waktu",
      "en": "beforehand; in advance",
      "my": "ကြိုတင်၍ ၊ ကြိုတင်ကာလတွင်"
    },
    "notes": {
      "id": "※ Melakukan persiapan atau pemberitahuan sebelum peristiwa terjadi.",
      "en": "※ Preparing or notifying well in advance.",
      "my": "※ ကိစ္စမတိုင်မီ ကြိုတင်ပြင်ဆင်မှု သို့မဟုတ် အသိပေးမှု ပြုလုပ်ခြင်း။"
    },
    "exampleTranslation": {
      "id": "Menghitung biayanya terlebih dahulu di awal.",
      "en": "Calculate the estimated costs beforehand.",
      "my": "ကုန်ကျစရိတ်ကို ကြိုတင်တွက်ချက်ထားသည်။"
    }
  },
  "専ら": {
    "meaning": {
      "id": "semata-mata ; melulu fokus pada",
      "en": "entirely; solely",
      "my": "သက်သက်သာ ၊ အဓိကအားဖြင့်"
    },
    "notes": {
      "id": "※ Hampir seluruh waktu atau energinya dialokasikan hanya untuk hal itu.",
      "en": "※ Devoting almost all energy or time solely to one endeavor.",
      "my": "※ အချိန်နှင့် လုပ်အားအားလုံးကို အရာတစ်ခုတည်းအတွက်သာ အသုံးပြုခြင်း။"
    },
    "exampleTranslation": {
      "id": "Hari libur semata-mata kuhabiskan untuk membaca buku.",
      "en": "I spend my holidays solely reading books.",
      "my": "အားလပ်ရက်များကို စာဖတ်ခြင်းသက်သက်ဖြင့်သာ ကုန်လွန်စေသည်။"
    }
  },
  "果たして": {
    "meaning": {
      "id": "apakah benar-benar (keraguan / pembuktian)",
      "en": "really; as expected",
      "my": "တကယ်ပဲလား ၊ ထင်ထားသည့်အတိုင်း"
    },
    "notes": {
      "id": "※ Sering dipakai dalam kalimat tanya keraguan atau kesesuaian prediksi.",
      "en": "※ Questioning whether reality matches predictions.",
      "my": "※ သံသယမေးခွန်း သို့မဟုတ် ခန့်မှန်းချက် မှန်မမှန် စစ်ဆေးရာတွင် သုံးသည်။"
    },
    "exampleTranslation": {
      "id": "Apakah hal yang dia katakan benar-benar nyata?",
      "en": "Could what he said really be true?",
      "my": "သူပြောခဲ့သောအရာသည် အမှန်တကယ်ပဲ ဖြစ်နိုင်ပါ့မလား။"
    }
  },
  "凌駕": {
    "meaning": {
      "id": "mengungguli jauh ; melampaui kehebatan",
      "en": "surpassing; outstripping",
      "my": "သာလွန်သွားသည် ၊ ကျော်တက်သည်"
    },
    "notes": {
      "id": "※ Prestasi atau kemampuan yang jauh melewati standar orang lain.",
      "en": "※ Excellence vastly exceeding predecessors.",
      "my": "※ အခြားသူများ၏ စံနှုန်းထက် အဆပေါင်းများစွာ သာလွန်ထူးချွန်ခြင်း။"
    },
    "exampleTranslation": {
      "id": "Bakatnya jauh mengungguli pendahulunya.",
      "en": "His talent far surpasses that of his predecessors.",
      "my": "သူ့ပါရမီသည် ယခင်လူများထက် များစွာသာလွန်နေသည်။"
    }
  },
  "委ねる": {
    "meaning": {
      "id": "mempercayakan penuh wewenang ; menyerahkan",
      "en": "to entrust; abandon to",
      "my": "လွှဲအပ်သည် ၊ အပ်နှင်းသည်"
    },
    "notes": {
      "id": "※ Menyerahkan nasib atau keputusan akhir kepada orang lain.",
      "en": "※ Entrusting final destiny or discretion to others.",
      "my": "※ ဆုံးဖြတ်ပိုင်ခွင့် သို့မဟုတ် ကံကြမ္မာကို အခြားသူထံ လွှဲအပ်ခြင်း။"
    },
    "exampleTranslation": {
      "id": "Menyerahkan seluruh keputusan kepada sang pakar.",
      "en": "Entrust all decisions entirely to the specialist.",
      "my": "ဆုံးဖြတ်ချက်အားလုံးကို ကျွမ်းကျင်သူထံ လွှဲအပ်ထားသည်။"
    }
  },
  "醸し出す": {
    "meaning": {
      "id": "memancarkan suasana ; menciptakan aura",
      "en": "to create (an atmosphere); exude",
      "my": "ခံစားမှုလေထု ဖန်တီးပေးသည်"
    },
    "notes": {
      "id": "※ Memancarkan kesan atau atmosfer khas tertentu secara alami.",
      "en": "※ Naturally exuding a distinct ambiance.",
      "my": "※ ထူးခြားသော ခံစားမှု သို့မဟုတ် အငွေ့အသက်ကို သဘာဝကျစွာ ထုတ်ဖော်ပေးခြင်း။"
    },
    "exampleTranslation": {
      "id": "Memancarkan suasana tenang yang sangat khas.",
      "en": "Exudes a uniquely serene atmosphere.",
      "my": "ထူးခြားငြိမ်သက်သော အငွေ့အသက်ကို ဖန်တီးပေးထားသည်။"
    }
  },
  "汲み取る": {
    "meaning": {
      "id": "memahami maksud tersirat ; berempati",
      "en": "to understand; surmise",
      "my": "ရည်ရွယ်ချက်ကို ရိပ်မိနားလည်သည်"
    },
    "notes": {
      "id": "※ Menangkap perasaan atau konteks tanpa perlu diucapkan terang-terangan.",
      "en": "※ Grasping unspoken sentiments intuitively.",
      "my": "※ ပွင့်လင်းစွာ မပြောသော်လည်း စိတ်ခံစားမှု သို့မဟုတ် ရည်ရွယ်ချက်ကို ရိပ်မိခြင်း။"
    },
    "exampleTranslation": {
      "id": "Memahami maksud tersirat lawan bicara dengan tepat.",
      "en": "Accurately surmised the speaker's true intentions.",
      "my": "စကားပြောဖော်၏ မဖော်ပြသော ရည်ရွယ်ချက်ကို တိကျစွာ ရိပ်မိနားလည်သည်။"
    }
  },
  "怠惰": {
    "meaning": {
      "id": "kemalasan ; bermalas-malasan",
      "en": "laziness; sloth",
      "my": "ပျင်းရိခြင်း ၊ အပျင်းကြီးခြင်း"
    },
    "notes": {
      "id": "※ Sifat malas yang membiarkan kewajiban terbengkalai.",
      "en": "※ Slothful negligence of responsibilities.",
      "my": "※ တာဝန်ဝတ္တရားများကို လျစ်လျူရှုစေသော အပျင်းကြီးသည့် အလေ့အထ။"
    },
    "exampleTranslation": {
      "id": "Memperingatkan dengan tegas sikap hidup yang malas.",
      "en": "Sternly admonish a slothful lifestyle.",
      "my": "ပျင်းရိသော နေထိုင်မှုပုံစံကို ပြင်းထန်စွာ သတိပေးဆုံးမသည်။"
    }
  },
  "欠如": {
    "meaning": {
      "id": "ketiadaan ; defisit ; kurangnya suatu hal",
      "en": "lack; absence",
      "my": "ချို့တဲ့ခြင်း ၊ ကင်းမဲ့ခြင်း"
    },
    "notes": {
      "id": "※ Hilangnya moral, rasa tanggung jawab, atau kesadaran.",
      "en": "※ Absence of ethics, responsibility, or awareness.",
      "my": "※ တာဝန်သိစိတ် သို့မဟုတ် သတိရှိမှု ကင်းမဲ့ချို့တဲ့ခြင်း။"
    },
    "exampleTranslation": {
      "id": "Ketiadaan kesadaran manajemen risiko telah memicu kecelakaan.",
      "en": "A lack of risk management awareness caused the accident.",
      "my": "အန္တရာယ်စီမံခန့်ခွဲမှု သတိကင်းမဲ့ခြင်းကြောင့် မတော်တဆမှု ဖြစ်ပွားခဲ့သည်။"
    }
  },
  "喚起": {
    "meaning": {
      "id": "membangkitkan ; menggugah perhatian",
      "en": "arousing; awakening",
      "my": "အာရုံစိုက်လာအောင် နှိုးဆွပေးခြင်း"
    },
    "notes": {
      "id": "※ Menggugah kesadaran masyarakat atau rasa simpati.",
      "en": "※ Awakening public attention or sympathy.",
      "my": "※ လူထု၏ အာရုံစိုက်မှု သို့မဟုတ် စာနာမှုကို နှိုးဆွပေးခြင်း။"
    },
    "exampleTranslation": {
      "id": "Menggugah perhatian dari opini publik luas.",
      "en": "Arouse the attention of public opinion.",
      "my": "အများပြည်သူ၏ အာရုံစိုက်မှုကို နှိုးဆွပေးသည်။"
    }
  },
  "措置": {
    "meaning": {
      "id": "tindakan penanganan ; langkah darurat",
      "en": "measure; step",
      "my": "ဆောင်ရွက်ချက် ၊ အရေးယူဆောင်ရွက်မှု"
    },
    "notes": {
      "id": "※ Keputusan kebijakan resmi untuk menanggulangi situasi krisis.",
      "en": "※ Official policy steps to address crises.",
      "my": "※ အကျပ်အတည်းကို ဖြေရှင်းရန် တရားဝင် ချမှတ်သောအရေးယူဆောင်ရွက်မှု။"
    },
    "exampleTranslation": {
      "id": "Segera memberlakukan tindakan pengamanan darurat.",
      "en": "Promptly enacted emergency security measures.",
      "my": "အရေးပေါ် လုံခြုံရေး အစီအမံများကို ချက်ချင်းချမှတ်ခဲ့သည်။"
    }
  },
  "戒める": {
    "meaning": {
      "id": "memperingatkan keras ; menasihati agar waspada",
      "en": "to warn; admonish",
      "my": "သတိပေးဆုံးမသည်"
    },
    "notes": {
      "id": "※ Menegur atau mengingatkan diri sendiri agar tidak lengah.",
      "en": "※ Warning oneself against complacency.",
      "my": "※ သတိမပေါ့ဆစေရန် မိမိကိုယ်ကို သတိပေးဆုံးမခြင်း။"
    },
    "exampleTranslation": {
      "id": "Mengingatkan diri sendiri agar tidak lengah sedikit pun.",
      "en": "Admonish oneself not to let down one's guard.",
      "my": "ပေါ့ဆမှုမရှိစေရန် မိမိကိုယ်ကို သတိပေးဆင်ခြင်သည်။"
    }
  },
  "覆す": {
    "meaning": {
      "id": "menjungkirbalikkan ; membalikkan keadaan",
      "en": "to overturn; upset",
      "my": "ဇောက်ထိုးလှန်ပစ်သည် ၊ ပြောင်းပြန်လှန်သည်"
    },
    "notes": {
      "id": "※ Membalikkan vonis pengadilan, teori lama, atau dugaan.",
      "en": "※ Overturning established verdicts or conventional beliefs.",
      "my": "※ တရားရုံးစီရင်ချက် သို့မဟုတ် သမားရိုးကျအယူအဆကို ပြောင်းပြန်လှန်ပစ်ခြင်း။"
    },
    "exampleTranslation": {
      "id": "Telah ditemukan penemuan besar yang menjungkirbalikkan akal sehat.",
      "en": "A breakthrough discovery that overturns conventional wisdom.",
      "my": "သမားရိုးကျအတွေးအခေါ်ကို ဇောက်ထိုးလှန်ပစ်နိုင်သော တွေ့ရှိချက်ကြီးတစ်ခု ပေါ်ထွက်လာသည်။"
    }
  },
  "阻む": {
    "meaning": {
      "id": "merintangi ; menghalangi laju jalan",
      "en": "to obstruct; prevent",
      "my": "အတားအဆီးပြုသည် ၊ ဟန့်တားသည်"
    },
    "notes": {
      "id": "※ Menghambat kemajuan atau laju seseorang.",
      "en": "※ Obstructing advance or progress.",
      "my": "※ ရှေ့သို့ဆက်သွားမှုကို တားဆီးပိတ်ပင်ခြင်း။"
    },
    "exampleTranslation": {
      "id": "Dinding batu raksasa yang merintangi arah perjalanan.",
      "en": "A massive rock wall obstructing the route.",
      "my": "ခရီးလမ်းကို ဟန့်တားထားသော ဧရာမ ကျောက်တံတိုင်းကြီး။"
    }
  },
  "促す": {
    "meaning": {
      "id": "mendorong agar bertindak ; mendesak",
      "en": "to urge; prompt",
      "my": "တိုက်တွန်းနှိုးဆော်သည်"
    },
    "notes": {
      "id": "※ Meminta atau memotivasi orang lain untuk segera mengambil langkah.",
      "en": "※ Prompting others to take timely action.",
      "my": "※ အခြားသူများ အမြန်ဆုံး အရေးယူဆောင်ရွက်ရန် တိုက်တွန်းခြင်း။"
    },
    "exampleTranslation": {
      "id": "Memasang papan peringatan untuk mendorong kehati-hatian.",
      "en": "Erected signs to urge cautious behavior.",
      "my": "သတိထားဆင်ခြင်ရန် တိုက်တွန်းသော ဆိုင်းဘုတ်ကို စိုက်ထူထားသည်။"
    }
  },
  "免れる": {
    "meaning": {
      "id": "luput dari ; lolos dari marabahaya",
      "en": "to escape; avoid",
      "my": "လွတ်မြောက်သည် ၊ ကင်းလွတ်ခွင့်ရသည်"
    },
    "notes": {
      "id": "※ Selamat dari hukuman, bencana, atau jeratan maut.",
      "en": "※ Escaping penalties, disaster, or fatality.",
      "my": "※ ပြစ်ဒဏ်၊ ဘေးအန္တရာယ် သို့မဟုတ် သေဘေးမှ လွတ်မြောက်ခြင်း။"
    },
    "exampleTranslation": {
      "id": "Secara ajaib berhasil luput dari kematian.",
      "en": "Miraculously escaped death.",
      "my": "အံ့ဩဖွယ်ရာ သေဘေးမှ လွတ်မြောက်ခဲ့သည်။"
    }
  },
  "巧み": {
    "meaning": {
      "id": "lihai ; terampil penuh kecerdikan",
      "en": "skillful; clever",
      "my": "ကျွမ်းကျင်ပါးနပ်သော"
    },
    "notes": {
      "id": "※ Keterampilan teknik atau kepandaian berbicara yang sangat halus.",
      "en": "※ Subtle artistry or clever rhetoric.",
      "my": "※ စကားပြောပါးနပ်မှု သို့မဟုတ် လက်မှုပညာ အထူးကျွမ်းကျင်ခြင်း။"
    },
    "exampleTranslation": {
      "id": "Meyakinkan lawan bicara dengan pilihan kata yang lihai.",
      "en": "Persuaded the listener with skillful phrasing.",
      "my": "ပါးနပ်သော စကားအသုံးအနှုန်းဖြင့် တစ်ဖက်လူကို နားချနိုင်ခဲ့သည်။"
    }
  },
  "厳粛": {
    "meaning": {
      "id": "khidmat ; hening penuh kesakralan",
      "en": "solemn; grave",
      "my": "လေးနက်တည်ကြည်သော"
    },
    "notes": {
      "id": "※ Suasana upacara yang sakral dan membuat orang tertunduk hormat.",
      "en": "※ Sacred, solemn ceremonial gravity.",
      "my": "※ မြင့်မြတ်တည်ကြည်ပြီး လေးစားမှုဖြစ်စေသော အခမ်းအနား အငွေ့အသက်။"
    },
    "exampleTranslation": {
      "id": "Upacara diselenggarakan dalam suasana yang khidmat.",
      "en": "The ceremony was held in a solemn atmosphere.",
      "my": "အခမ်းအနားကို လေးနက်တည်ကြည်သော အငွေ့အသက်ဖြင့် ကျင်းပခဲ့သည်။"
    }
  },

  "食べる": {
      "meaning": {
          "id": "makan",
          "en": "to eat",
          "my": "စားသည်"
      },
      "notes": {
          "id": "※ Kata kerja Golongan 2 (Ichidan). Bentuk sopan: 食べます。",
          "en": "※ Group 2 verb (Ichidan). Polite: 食べます。",
          "my": "※ အုပ်စု (၂) ကြိယာ။ ယဉ်ကျေးသောပုံစံ- 食べます။"
      },
      "exampleTranslation": {
          "id": "Setiap hari saya makan sarapan.",
          "en": "I eat breakfast every day.",
          "my": "နေ့တိုင်း မနက်စာ စားပါသည်။"
      }
  },
  "飲む": {
      "meaning": {
          "id": "minum",
          "en": "to drink",
          "my": "သောက်သည်"
      },
      "notes": {
          "id": "※ Kata kerja Golongan 1 (Godan). Pasangan: 〜を飲む。",
          "en": "※ Group 1 verb (Godan). Pattern: 〜を飲む。",
          "my": "※ အုပ်စု (၁) ကြိယာ။ ပုံစံ- 〜を飲む။"
      },
      "exampleTranslation": {
          "id": "Saya meminum air dingin.",
          "en": "I drank cold water.",
          "my": "ရေအေး သောက်ခဲ့ပါသည်။"
      }
  },
  "行く": {
      "meaning": {
          "id": "pergi",
          "en": "to go",
          "my": "သွားသည်"
      },
      "notes": {
          "id": "※ Kata kerja perpindahan. Partikel arah: 〜へ / 〜に行きます。",
          "en": "※ Direction particle: 〜へ / 〜に。",
          "my": "※ ဦးတည်ရာ ဝိဘတ်- 〜へ / 〜に။"
      },
      "exampleTranslation": {
          "id": "Besok saya pergi ke Tokyo.",
          "en": "I will go to Tokyo tomorrow.",
          "my": "မနက်ဖြန် တိုကျိုသို့ သွားမည်။"
      }
  },
  "来る": {
      "meaning": {
          "id": "datang",
          "en": "to come",
          "my": "လာသည်"
      },
      "notes": {
          "id": "※ Kata kerja tidak beraturan. Bentuk masu: 来ます (kimasu).",
          "en": "※ Irregular verb. Masu form: 来ます (kimasu).",
          "my": "※ ပုံမှန်မဟုတ်သော ကြိယာ။ masu ပုံစံ- 来ます (kimasu)။"
      },
      "exampleTranslation": {
          "id": "Teman datang bermain ke rumah saya.",
          "en": "A friend came to hang out at my house.",
          "my": "သူငယ်ချင်းသည် အိမ်သို့ လာလည်ခဲ့သည်။"
      }
  },
  "見る": {
      "meaning": {
          "id": "melihat ; menonton",
          "en": "to see; to watch",
          "my": "ကြည့်သည်"
      },
      "notes": {
          "id": "※ Kata kerja Golongan 2. Menonton film atau melihat objek.",
          "en": "※ Group 2 verb. Watching movies or looking at objects.",
          "my": "※ ရုပ်ရှင်ကြည့်ခြင်း သို့မဟုတ် အရာဝတ္ထုကို ကြည့်ခြင်း။"
      },
      "exampleTranslation": {
          "id": "Malam hari saya menonton film di TV.",
          "en": "At night I watch movies on TV.",
          "my": "ညဘက်တွင် ရုပ်မြင်သံကြားမှ ရုပ်ရှင်ကြည့်သည်။"
      }
  },
  "聞く": {
      "meaning": {
          "id": "mendengar ; bertanya",
          "en": "to listen; to ask",
          "my": "နားထောင်သည် ၊ မေးမြန်းသည်"
      },
      "notes": {
          "id": "※ Mendengarkan musik (音楽を聞く) atau bertanya ke guru (先生に聞く).",
          "en": "※ Listening to music or asking a teacher.",
          "my": "※ သီချင်းနားထောင်ခြင်း သို့မဟုတ် ဆရာ့ကို မေးမြန်းခြင်း။"
      },
      "exampleTranslation": {
          "id": "Setiap pagi saya mendengarkan radio Jepang.",
          "en": "Every morning I listen to Japanese radio.",
          "my": "မနက်တိုင်း ဂျပန်ရေဒီယို နားထောင်ပါသည်။"
      }
  },
  "読む": {
      "meaning": {
          "id": "membaca",
          "en": "to read",
          "my": "ဖတ်သည်"
      },
      "notes": {
          "id": "※ Kata kerja Godan. Membaca buku, koran, atau pesan.",
          "en": "※ Group 1 verb. Reading books or newspapers.",
          "my": "※ စာအုပ် သို့မဟုတ် သတင်းစာ ဖတ်ရှုခြင်း။"
      },
      "exampleTranslation": {
          "id": "Saya membaca buku bahasa Jepang di perpustakaan.",
          "en": "I read Japanese books at the library.",
          "my": "စာကြည့်တိုက်တွင် ဂျပန်စာအုပ် ဖတ်ပါသည်။"
      }
  },
  "書く": {
      "meaning": {
          "id": "menulis",
          "en": "to write",
          "my": "ရေးသည်"
      },
      "notes": {
          "id": "※ Menulis surat atau kanji dengan alat tulis.",
          "en": "※ Writing letters or kanji.",
          "my": "※ စာ သို့မဟုတ် ခန်းဂျီး ရေးသားခြင်း။"
      },
      "exampleTranslation": {
          "id": "Saya telah menulis surat kepada keluarga.",
          "en": "I wrote a letter to my family.",
          "my": "မိသားစုထံသို့ စာရေးခဲ့ပါသည်။"
      }
  },
  "話す": {
      "meaning": {
          "id": "berbicara ; mengobrol",
          "en": "to speak; to talk",
          "my": "ပြောဆိုသည် ၊ စကားပြောသည်"
      },
      "notes": {
          "id": "※ Berbicara bahasa: 日本語で話す。",
          "en": "※ Speaking in a language: 日本語で話す。",
          "my": "※ ဘာသာစကားဖြင့် ပြောဆိုခြင်း- 日本語で話す။"
      },
      "exampleTranslation": {
          "id": "Saya berbicara dengan guru dalam bahasa Jepang.",
          "en": "I spoke with the teacher in Japanese.",
          "my": "ဆရာနှင့် ဂျပန်ဘာသာဖြင့် စကားပြောခဲ့သည်။"
      }
  },
  "買う": {
      "meaning": {
          "id": "membeli",
          "en": "to buy",
          "my": "ဝယ်သည်"
      },
      "notes": {
          "id": "※ Membeli barang belanjaan.",
          "en": "※ Purchasing goods or items.",
          "my": "※ ပစ္စည်း သို့မဟုတ် ကုန်ပစ္စည်း ဝယ်ယူခြင်း။"
      },
      "exampleTranslation": {
          "id": "Saya membeli roti dan susu di supermarket.",
          "en": "I bought bread and milk at the supermarket.",
          "my": "စူပါမားကတ်တွင် ပေါင်မုန့်နှင့် နို့ ဝယ်ခဲ့သည်။"
      }
  },
  "友達": {
      "meaning": {
          "id": "teman ; sahabat",
          "en": "friend",
          "my": "သူငယ်ချင်း"
      },
      "notes": {
          "id": "※ Teman sebaya atau kawan akrab.",
          "en": "※ Close friend or acquaintance.",
          "my": "※ ရင်းနှီးသော မိတ်ဆွေ သူငယ်ချင်း။"
      },
      "exampleTranslation": {
          "id": "Akhir pekan saya pergi menonton film bersama teman.",
          "en": "On weekends I go watch movies with friends.",
          "my": "စနေတနင်္ဂနွေတွင် သူငယ်ချင်းနှင့် ရုပ်ရှင်သွားကြည့်သည်။"
      }
  },
  "家族": {
      "meaning": {
          "id": "keluarga",
          "en": "family",
          "my": "မိသားစု"
      },
      "notes": {
          "id": "※ Anggota keluarga terdekat.",
          "en": "※ Family members.",
          "my": "※ မိသားစုဝင်များ။"
      },
      "exampleTranslation": {
          "id": "Keluarga saya ada empat orang.",
          "en": "There are four people in my family.",
          "my": "ကျွန်ုပ်၏ မိသားစုတွင် ၄ ယောက် ရှိသည်။"
      }
  },
  "先生": {
      "meaning": {
          "id": "guru ; pengajar ; dokter",
          "en": "teacher; doctor",
          "my": "ဆရာ ၊ ဆရာမ ၊ ဆရာဝန်"
      },
      "notes": {
          "id": "※ Panggilan kehormatan untuk pengajar atau dokter.",
          "en": "※ Respectful title for instructors or doctors.",
          "my": "※ ဆရာ သို့မဟုတ် ဆရာဝန်များအတွက် လေးစားခေါ်ဝေါ်မှု။"
      },
      "exampleTranslation": {
          "id": "Saya mengajukan pertanyaan kepada guru.",
          "en": "I asked the teacher a question.",
          "my": "ဆရာ့ကို မေးခွန်း မေးမြန်းခဲ့သည်။"
      }
  },
  "学校": {
      "meaning": {
          "id": "sekolah",
          "en": "school",
          "my": "ကျောင်း"
      },
      "notes": {
          "id": "※ Tempat menuntut ilmu.",
          "en": "※ Educational institution.",
          "my": "※ ပညာသင်ကြားရာ ကျောင်း။"
      },
      "exampleTranslation": {
          "id": "Saya pergi ke sekolah dengan naik sepeda.",
          "en": "I commute to school by bicycle.",
          "my": "စက်ဘီးဖြင့် ကျောင်းသို့ သွားသည်။"
      }
  },
  "会社": {
      "meaning": {
          "id": "perusahaan ; kantor",
          "en": "company; office",
          "my": "ကုမ္ပဏီ ၊ ရုံး"
      },
      "notes": {
          "id": "※ Tempat kerja korporasi.",
          "en": "※ Business corporation or office.",
          "my": "※ လုပ်ငန်းခွင် ကုမ္ပဏီ။"
      },
      "exampleTranslation": {
          "id": "Ayah bekerja di sebuah perusahaan Jepang.",
          "en": "My father works at a Japanese company.",
          "my": "ဖခင်သည် ဂျပန်ကုမ္ပဏီတစ်ခုတွင် အလုပ်လုပ်နေသည်။"
      }
  },
  "部屋": {
      "meaning": {
          "id": "kamar ; ruangan",
          "en": "room",
          "my": "အခန်း"
      },
      "notes": {
          "id": "※ Kamar pribadi atau ruangan bangunan.",
          "en": "※ Private room or interior chamber.",
          "my": "※ ကိုယ်ပိုင်အခန်း သို့မဟုတ် အဆောက်အအုံတွင်း အခန်း။"
      },
      "exampleTranslation": {
          "id": "Pada hari libur saya membersihkan kamar.",
          "en": "On days off I clean my room.",
          "my": "အားလပ်ရက်တွင် အခန်းကို သန့်ရှင်းရေးလုပ်သည်။"
      }
  },
  "水": {
      "meaning": {
          "id": "air (dingin/segar)",
          "en": "water",
          "my": "ရေ"
      },
      "notes": {
          "id": "※ Air segar/dingin. Air panas disebut お湯 (oyu).",
          "en": "※ Cold/cool water (hot water is お湯 oyu).",
          "my": "※ ရေအေး (ရေနွေးကို お湯 oyu ဟုခေါ်သည်)။"
      },
      "exampleTranslation": {
          "id": "Tolong segelas air.",
          "en": "A glass of water, please.",
          "my": "ရေတစ်ခွက် ကျေးဇူးပြု၍ ပေးပါ။"
      }
  },
  "雨": {
      "meaning": {
          "id": "hujan",
          "en": "rain",
          "my": "မိုး"
      },
      "notes": {
          "id": "※ Turun hujan: 雨が降る (ame ga furu).",
          "en": "※ Rain falls: 雨が降る (ame ga furu).",
          "my": "※ မိုးရွာသည်- 雨が降る (ame ga furu)။"
      },
      "exampleTranslation": {
          "id": "Hujan mulai turun sejak siang.",
          "en": "It started raining from the afternoon.",
          "my": "မွန်းလွဲပိုင်းမှစ၍ မိုးရွာလာသည်။"
      }
  },
  "電車": {
      "meaning": {
          "id": "kereta listrik",
          "en": "electric train",
          "my": "လျှပ်စစ်ရထား"
      },
      "notes": {
          "id": "※ Transportasi umum rel di Jepang.",
          "en": "※ Electric train transport.",
          "my": "※ လျှပ်စစ်ရထား သယ်ယူပို့ဆောင်ရေး။"
      },
      "exampleTranslation": {
          "id": "Setiap pagi saya naik kereta listrik pergi bekerja.",
          "en": "Every morning I ride the electric train to work.",
          "my": "မနက်တိုင်း လျှပ်စစ်ရထားစီး၍ အလုပ်သွားသည်။"
      }
  },
  "駅": {
      "meaning": {
          "id": "stasiun kereta",
          "en": "train station",
          "my": "ရထားဘူတာ"
      },
      "notes": {
          "id": "※ Titik naik/turun kereta.",
          "en": "※ Railway station.",
          "my": "※ ရထားဘူတာရုံ။"
      },
      "exampleTranslation": {
          "id": "Saya janjian bertemu dengan teman di depan stasiun.",
          "en": "I am meeting my friend in front of the station.",
          "my": "ဘူတာရုံရှေ့တွင် သူငယ်ချင်းနှင့် ချိန်းတွေ့သည်။"
      }
  },
  "今日": {
      "meaning": {
          "id": "hari ini",
          "en": "today",
          "my": "ယနေ့"
      },
      "notes": {
          "id": "※ Waktu saat ini.",
          "en": "※ Present day.",
          "my": "※ ယခုလက်ရှိနေ့။"
      },
      "exampleTranslation": {
          "id": "Hari ini cuacanya sangat bagus.",
          "en": "The weather is very nice today.",
          "my": "ယနေ့ ရာသီဥတု အလွန်ကောင်းသည်။"
      }
  },
  "明日": {
      "meaning": {
          "id": "besok",
          "en": "tomorrow",
          "my": "မနက်ဖြန်"
      },
      "notes": {
          "id": "※ Hari berikutnya.",
          "en": "※ The next day.",
          "my": "※ နောက်တစ်နေ့။"
      },
      "exampleTranslation": {
          "id": "Besok pagi jam delapan kita akan berangkat.",
          "en": "We will depart tomorrow morning at eight.",
          "my": "မနက်ဖြန် မနက် ၈ နာရီတွင် ထွက်ခွာပါမည်။"
      }
  },
  "時間": {
      "meaning": {
          "id": "waktu ; jam durasi",
          "en": "time; hour duration",
          "my": "အချိန် ၊ နာရီကြာချိန်"
      },
      "notes": {
          "id": "※ Waktu luang atau durasi jam.",
          "en": "※ Free time or hour duration.",
          "my": "※ အားလပ်ချိန် သို့မဟုတ် နာရီ ကြာချိန်။"
      },
      "exampleTranslation": {
          "id": "Sekarang saya sibuk dan tidak ada waktu.",
          "en": "Right now I am busy and have no time.",
          "my": "ယခု အလုပ်များနေသဖြင့် အချိန်မရှိပါ။"
      }
  },
  "大きい": {
      "meaning": {
          "id": "besar",
          "en": "big; large",
          "my": "ကြီးသော"
      },
      "notes": {
          "id": "※ Lawan kata dari 小さい (chiisai).",
          "en": "※ Antonym of 小さい (chiisai).",
          "my": "※ 小さい ၏ ဆန့်ကျင်ဘက်။"
      },
      "exampleTranslation": {
          "id": "Di taman ada pohon yang besar.",
          "en": "There is a big tree in the park.",
          "my": "ပန်းခြံထဲတွင် ကြီးမားသော သစ်ပင်တစ်ပင် ရှိသည်။"
      }
  },
  "小さい": {
      "meaning": {
          "id": "kecil",
          "en": "small; little",
          "my": "သေးငယ်သော"
      },
      "notes": {
          "id": "※ Lawan kata dari 大きい (ookii).",
          "en": "※ Antonym of 大きい (ookii).",
          "my": "※ 大きい ၏ ဆန့်ကျင်ဘက်။"
      },
      "exampleTranslation": {
          "id": "Kamar ini agak kecil tetapi bersih.",
          "en": "This room is a bit small but clean.",
          "my": "ဤအခန်းသည် အနည်းငယ် သေးသော်လည်း သန့်ရှင်းသည်။"
      }
  },
  "新しい": {
      "meaning": {
          "id": "baru",
          "en": "new",
          "my": "သစ်သော"
      },
      "notes": {
          "id": "※ Lawan kata dari 古い (furui).",
          "en": "※ Antonym of 古い (furui).",
          "my": "※ 古い ၏ ဆန့်ကျင်ဘက်။"
      },
      "exampleTranslation": {
          "id": "Saya telah membeli komputer baru.",
          "en": "I bought a new computer.",
          "my": "ကွန်ပျူတာအသစ်တစ်လုံး ဝယ်ခဲ့သည်။"
      }
  },
  "高い": {
      "meaning": {
          "id": "tinggi ; mahal",
          "en": "tall; high; expensive",
          "my": "မြင့်သော ၊ ဈေးကြီးသော"
      },
      "notes": {
          "id": "※ Tinggi fisik atau harga mahal.",
          "en": "※ Physical height or high price.",
          "my": "※ အရပ်အမြင့် သို့မဟုတ် ကုန်ဈေးနှုန်း ကြီးမြင့်မှု။"
      },
      "exampleTranslation": {
          "id": "Kamus ini kualitasnya bagus tapi mahal.",
          "en": "This dictionary is good quality but expensive.",
          "my": "ဤအဘိဓာန်သည် အရည်အသွေး ကောင်းသော်လည်း ဈေးကြီးသည်။"
      }
  },
  "安い": {
      "meaning": {
          "id": "murah",
          "en": "cheap; inexpensive",
          "my": "ဈေးသက်သာသော"
      },
      "notes": {
          "id": "※ Lawan kata dari 高い (takai).",
          "en": "※ Antonym of 高い (takai).",
          "my": "※ 高い ၏ ဆန့်ကျင်ဘက်။"
      },
      "exampleTranslation": {
          "id": "Toko di depan stasiun buah-buahannya sangat murah.",
          "en": "The fruit at the store in front of the station is very cheap.",
          "my": "ဘူတာရုံရှေ့ဆိုင်မှ သစ်သီးများသည် အလွန် ဈေးသက်သာသည်။"
      }
  },
  "好き": {
      "meaning": {
          "id": "suka ; gemar",
          "en": "like; fond of",
          "my": "နှစ်သက်သော ၊ ကြိုက်သော"
      },
      "notes": {
          "id": "※ Pasangan: 〜が好きです。",
          "en": "※ Pattern: 〜が好きです。",
          "my": "※ ပုံစံ- 〜が好きです။"
      },
      "exampleTranslation": {
          "id": "Saya suka anime Jepang.",
          "en": "I like Japanese anime.",
          "my": "ဂျပန်အန်နီမေးကို နှစ်သက်ပါသည်။"
      }
  },
  "上手": {
      "meaning": {
          "id": "pandai ; mahir",
          "en": "skillful; good at",
          "my": "ကျွမ်းကျင်သော ၊ တော်သော"
      },
      "notes": {
          "id": "※ Memuji kepandaian: 〜が上手。",
          "en": "※ Praising skills: 〜が上手。",
          "my": "※ ကျွမ်းကျင်မှုကို ချီးကျူးခြင်း- 〜が上手။"
      },
      "exampleTranslation": {
          "id": "Maria sangat pandai bernyanyi.",
          "en": "Maria is very good at singing.",
          "my": "မာရီယာသည် သီချင်းဆို အလွန်တော်သည်။"
      }
  },
  "案内": {
      "meaning": {
          "id": "memandu ; pemandu arah ; informasi",
          "en": "guidance; showing around",
          "my": "လမ်းညွှန်ပြသခြင်း"
      },
      "notes": {
          "id": "※ Memandu turis atau tamu: 〜を案内する。",
          "en": "※ Showing visitors around: 〜を案内する。",
          "my": "※ ဧည့်သည်များအား လမ်းညွှန်ပြသခြင်း။"
      },
      "exampleTranslation": {
          "id": "Saya memandu wisatawan mengelilingi kota.",
          "en": "I showed the tourists around the city.",
          "my": "ခရီးသွားများအား မြို့တွင်း လမ်းညွှန်ပြသခဲ့သည်။"
      }
  },
  "連絡": {
      "meaning": {
          "id": "menghubungi ; komunikasi",
          "en": "contact; communication",
          "my": "ဆက်သွယ်ခြင်း"
      },
      "notes": {
          "id": "※ Berkomunikasi kabar penting: 〜に連絡する。",
          "en": "※ Contacting someone: 〜に連絡する。",
          "my": "※ ဆက်သွယ်အကြောင်းကြားခြင်း- 〜に連絡する။"
      },
      "exampleTranslation": {
          "id": "Jika jadwal berubah tolong segera hubungi saya.",
          "en": "Please contact me immediately if the schedule changes.",
          "my": "အစီအစဉ် ပြောင်းလဲပါက ချက်ချင်း ဆက်သွယ်ပါ။"
      }
  },
  "準備": {
      "meaning": {
          "id": "persiapan",
          "en": "preparation",
          "my": "ပြင်ဆင်ခြင်း"
      },
      "notes": {
          "id": "※ Bersiap menghadapi acara: 準備をする。",
          "en": "※ Preparing for events: 準備をする。",
          "my": "※ ကြိုတင်ပြင်ဆင်ခြင်း- 準備をする။"
      },
      "exampleTranslation": {
          "id": "Mari mulai bersiap-siap untuk perjalanan.",
          "en": "Let's start preparing for the trip.",
          "my": "ခရီးစဉ်အတွက် စတင် ပြင်ဆင်ကြပါစို့။"
      }
  },
  "約束": {
      "meaning": {
          "id": "janji ; perjanjian",
          "en": "promise; appointment",
          "my": "ကတိ ၊ ချိန်းဆိုချက်"
      },
      "notes": {
          "id": "※ Membuat janji: 約束をする。Menepati: 約束を守る。",
          "en": "※ Making an appointment: 約束をする。",
          "my": "※ ချိန်းဆိုခြင်း- 約束をする။ ကတိတည်ခြင်း- 約束を守る။"
      },
      "exampleTranslation": {
          "id": "Saya berjanji bertemu teman pada akhir pekan.",
          "en": "I promised to meet a friend on the weekend.",
          "my": "စနေတနင်္ဂနွေတွင် သူငယ်ချင်းနှင့် တွေ့ဆုံရန် ချိန်းဆိုခဲ့သည်။"
      }
  },
  "予定": {
      "meaning": {
          "id": "rencana ; jadwal",
          "en": "schedule; plan",
          "my": "အစီအစဉ် ၊ အချိန်ဇယား"
      },
      "notes": {
          "id": "※ Agenda yang direncanakan: 〜の予定。",
          "en": "※ Planned schedule: 〜の予定。",
          "my": "※ လျာထားသော အစီအစဉ်- 〜の予定။"
      },
      "exampleTranslation": {
          "id": "Saya memastikan jadwal dinas luar kota minggu depan.",
          "en": "I am confirming the business trip schedule for next week.",
          "my": "နောက်အပတ် ခရီးသွားအစီအစဉ်ကို စစ်ဆေးအတည်ပြုသည်။"
      }
  },
  "招待": {
      "meaning": {
          "id": "undangan",
          "en": "invitation",
          "my": "ဖိတ်ကြားခြင်း"
      },
      "notes": {
          "id": "※ Mengundang pesta atau jamuan: 〜に招待する。",
          "en": "※ Inviting to an event: 〜に招待する。",
          "my": "※ ပွဲသို့ ဖိတ်ကြားခြင်း- 〜に招待する။"
      },
      "exampleTranslation": {
          "id": "Saya mengundang teman ke pesta pernikahan.",
          "en": "I invited my friends to the wedding.",
          "my": "မင်္ဂလာဆောင်သို့ သူငယ်ချင်းများကို ဖိတ်ကြားခဲ့သည်။"
      }
  },
  "相談": {
      "meaning": {
          "id": "berkonsultasi ; berdiskusi",
          "en": "consultation; discussion",
          "my": "တိုင်ပင်ဆွေးနွေးခြင်း"
      },
      "notes": {
          "id": "※ Meminta saran: 〜に相談する。",
          "en": "※ Seeking advice: 〜に相談する。",
          "my": "※ အကြံဉာဏ် တောင်းခံတိုင်ပင်ခြင်း- 〜に相談する။"
      },
      "exampleTranslation": {
          "id": "Saya berkonsultasi dengan orang tua tentang rencana masa depan.",
          "en": "I consulted with my parents about my career path.",
          "my": "ရှေ့ဆက်ရမည့် လမ်းကြောင်းအတွက် မိဘများနှင့် တိုင်ပင်ခဲ့သည်။"
      }
  },
  "遠慮": {
      "meaning": {
          "id": "sungkan ; menahan diri",
          "en": "restraint; hesitation",
          "my": "အားနာခြင်း ၊ တွန့်ဆုတ်ခြင်း"
      },
      "notes": {
          "id": "※ Jangan sungkan: ご遠慮なく。",
          "en": "※ Feel free / without hesitation: ご遠慮なく。",
          "my": "※ အားမနာပါနှင့်- ご遠慮なく။"
      },
      "exampleTranslation": {
          "id": "Silakan jangan sungkan, makanlah yang banyak.",
          "en": "Please don't hesitate, eat as much as you like.",
          "my": "အားမနာဘဲ အများကြီး စားသုံးပါ။"
      }
  },
  "経験": {
      "meaning": {
          "id": "pengalaman",
          "en": "experience",
          "my": "အတွေ့အကြုံ"
      },
      "notes": {
          "id": "※ Pernah mengalami: 経験がある。",
          "en": "※ Having experience: 経験がある。",
          "my": "※ အတွေ့အကြုံရှိခြင်း- 経験がある။"
      },
      "exampleTranslation": {
          "id": "Saya punya pengalaman tinggal sendiri di luar negeri.",
          "en": "I have experience living alone abroad.",
          "my": "နိုင်ငံခြားတွင် တစ်ကိုယ်တည်း နေထိုင်ခဲ့သည့် အတွေ့အကြုံ ရှိသည်။"
      }
  },
  "故障": {
      "meaning": {
          "id": "kerusakan mesin ; macet",
          "en": "breakdown; malfunction",
          "my": "စက်ပျက်စီးခြင်း"
      },
      "notes": {
          "id": "※ Mesin atau lift rusak: 〜が故障する。",
          "en": "※ Mechanical breakdown: 〜が故障する。",
          "my": "※ စက်ယန္တရား ပျက်စီးခြင်း- 〜が故障する။"
      },
      "exampleTranslation": {
          "id": "Lift rusak sehingga saya menggunakan tangga.",
          "en": "The elevator was out of order so I used the stairs.",
          "my": "ဓာတ်လှေကား ပျက်သဖြင့် လှေကားကို အသုံးပြုခဲ့သည်။"
      }
  },
  "解決": {
      "meaning": {
          "id": "penyelesaian ; pemecahan masalah",
          "en": "solution; resolution",
          "my": "ပြဿနာ ဖြေရှင်းခြင်း"
      },
      "notes": {
          "id": "※ Menyelesaikan perkara rumit: 問題を解決する。",
          "en": "※ Resolving issues: 問題を解決する。",
          "my": "※ ပြဿနာကို အောင်မြင်စွာ ဖြေရှင်းခြင်း- 問題を解決する။"
      },
      "exampleTranslation": {
          "id": "Perselisihan antarkedua negara akhirnya terselesaikan secara damai.",
          "en": "The dispute between both countries was finally settled peacefully.",
          "my": "နှစ်နိုင်ငံကြား အငြင်းပွားမှုသည် နောက်ဆုံးတွင် ငြိမ်းချမ်းစွာ ပြေလည်သွားခဲ့သည်။"
      }
  },
  "影響": {
      "meaning": {
          "id": "pengaruh ; dampak",
          "en": "influence; effect",
          "my": "လွှမ်းမိုးမှု ၊ သက်ရောက်မှု"
      },
      "notes": {
          "id": "※ Memberi pengaruh: 〜に影響を与える。",
          "en": "※ Having an effect: 〜に影響を与える。",
          "my": "※ သက်ရောက်မှု ပေးခြင်း- 〜に影響を与える။"
      },
      "exampleTranslation": {
          "id": "Kebiasaan membaca orang tua memberi pengaruh besar bagi anak.",
          "en": "Parents' reading habits greatly influence their children.",
          "my": "မိဘများ၏ စာဖတ်သည့် အလေ့အထသည် ကလေးများအပေါ် ကြီးမားသော သက်ရောက်မှု ရှိသည်။"
      }
  },
  "担当": {
      "meaning": {
          "id": "penanggung jawab ; memegang tugas",
          "en": "being in charge; responsible",
          "my": "တာဝန်ခံခြင်း"
      },
      "notes": {
          "id": "※ Bertanggung jawab atas tugas: 〜を担当する。",
          "en": "※ Handling responsibilities: 〜を担当する。",
          "my": "※ လုပ်ငန်းတာဝန်ကို တာဝန်ယူဆောင်ရွက်ခြင်း။"
      },
      "exampleTranslation": {
          "id": "Saya yang bertanggung jawab atas hubungan masyarakat proyek baru ini.",
          "en": "I am in charge of public relations for this new project.",
          "my": "ဤစီမံကိန်းအသစ်၏ ပြန်ကြားရေးတာဝန်ကို ကျွန်ုပ် တာဝန်ယူပါသည်။"
      }
  },
  "延期": {
      "meaning": {
          "id": "penundaan jadwal",
          "en": "postponement; deferral",
          "my": "ရွှေ့ဆိုင်းခြင်း"
      },
      "notes": {
          "id": "※ Menggeser jadwal: 試合を延期する。",
          "en": "※ Postponing an event: 試合を延期する。",
          "my": "※ အချိန်ဇယား ရွှေ့ဆိုင်းခြင်း။"
      },
      "exampleTranslation": {
          "id": "Acara luar ruangan ditunda ke minggu depan karena cuaca hujan.",
          "en": "The outdoor event was postponed to next week due to rain.",
          "my": "မိုးရွာသဖြင့် ပြင်ပပွဲကို နောက်တစ်ပတ်သို့ ရွှေ့ဆိုင်းခဲ့သည်။"
      }
  },
  "観察": {
      "meaning": {
          "id": "pengamatan ; observasi mendalam",
          "en": "observation; survey",
          "my": "စောင့်ကြည့်လေ့လာခြင်း"
      },
      "notes": {
          "id": "※ Mengamati detail: 〜を観察する。",
          "en": "※ Carefully surveying: 〜を観察する。",
          "my": "※ အနီးကပ် စောင့်ကြည့်လေ့လာခြင်း။"
      },
      "exampleTranslation": {
          "id": "Saya mencatat pengamatan kondisi pertumbuhan tanaman di buku setiap hari.",
          "en": "I recorded my daily observations of plant growth in a notebook.",
          "my": "အပင်ကြီးထွားမှု အခြေအနေကို နေ့စဉ် မှတ်စုစာအုပ်တွင် မှတ်တမ်းတင်ခဲ့သည်။"
      }
  },
  "節約": {
      "meaning": {
          "id": "penghematan anggaran/daya",
          "en": "economizing; saving",
          "my": "ချွေတာခြင်း"
      },
      "notes": {
          "id": "※ Menghemat uang/listrik: お金／電気を節約する。",
          "en": "※ Saving resources: お金／電気を節約する。",
          "my": "※ ငွေကြေး သို့မဟုတ် လျှပ်စစ်ကို ချွေတာသုံးစွဲခြင်း။"
      },
      "exampleTranslation": {
          "id": "Meninjau ulang setelan suhu AC demi menghemat tagihan listrik.",
          "en": "Adjusting AC temperature to economize on electricity bills.",
          "my": "မီးဖိုး ချွေတာရန်အတွက် အဲကွန်း အပူချိန်သတ်မှတ်ချက်ကို ပြန်လည်ညှိသည်။"
      }
  },
  "協力": {
      "meaning": {
          "id": "kerja sama ; sinergi",
          "en": "cooperation; collaboration",
          "my": "ပူးပေါင်းဆောင်ရွက်ခြင်း"
      },
      "notes": {
          "id": "※ Bekerja sama: 〜に協力する。",
          "en": "※ Collaborating: 〜に協力する。",
          "my": "※ ပူးပေါင်းဆောင်ရွက်ခြင်း- 〜に協力する။"
      },
      "exampleTranslation": {
          "id": "Warga setempat bekerja sama melakukan kegiatan pembersihan taman.",
          "en": "Local residents cooperated to clean up the park.",
          "my": "ဒေသခံပြည်သူများ ပူးပေါင်း၍ ပန်းခြံသန့်ရှင်းရေး ပြုလုပ်ခဲ့ကြသည်။"
      }
  },
  "限界": {
      "meaning": {
          "id": "batas maksimal kemampuan/daya tahan",
          "en": "limit; bound",
          "my": "အကန့်အသတ် ၊ အဆုံးစွန်စည်း"
      },
      "notes": {
          "id": "※ Titik batas: 限界に達する。",
          "en": "※ Reaching one's limit: 限界に達する。",
          "my": "※ စွမ်းဆောင်ရည် အဆုံးအစွန်သို့ ရောက်ရှိခြင်း။"
      },
      "exampleTranslation": {
          "id": "Merasa telah mencapai batas stamina, ia mengundurkan diri di tengah maraton.",
          "en": "Feeling he had reached his physical limit, he withdrew midway through the marathon.",
          "my": "ခွန်အား ကုန်ဆုံးပြီဟု ခံစားရသဖြင့် မာရသွန်ပြေးပွဲ အလယ်တွင် လက်လျှော့ခဲ့သည်။"
      }
  },
  "発揮": {
      "meaning": {
          "id": "memperlihatkan kebolehan ; unjuk bakat",
          "en": "exhibition; display (power)",
          "my": "စွမ်းရည်ထုတ်ဖော်ပြသခြင်း"
      },
      "notes": {
          "id": "※ Menunjukkan kemampuan: 力を発揮する。",
          "en": "※ Exhibiting full potential: 力を発揮する。",
          "my": "※ အစွမ်းအစ အပြည့်အဝ ထုတ်ဖော်ပြသခြင်း။"
      },
      "exampleTranslation": {
          "id": "Dalam pertandingan sesungguhnya, ia memperlihatkan sepenuhnya hasil latihan.",
          "en": "In the actual match, he fully demonstrated the results of his training.",
          "my": "အမှန်တကယ် ပွဲစဉ်တွင် လေ့ကျင့်ထားသော ရလဒ်များကို အပြည့်အဝ ထုတ်ဖော်ပြသခဲ့သည်။"
      }
  },
  "支援": {
      "meaning": {
          "id": "dukungan ; bantuan materiil/moral",
          "en": "support; backing",
          "my": "ထောက်ပံ့ကူညီခြင်း"
      },
      "notes": {
          "id": "※ Membantu pemulihan: 支援を行う。",
          "en": "※ Providing relief: 支援を行う。",
          "my": "※ ကူညီထောက်ပံ့မှုများ ပေးအပ်ခြင်း။"
      },
      "exampleTranslation": {
          "id": "Bantuan hangat dari dalam dan luar negeri terkumpul demi pemulihan wilayah bencana.",
          "en": "Warm support from home and abroad poured in for the recovery of the disaster area.",
          "my": "သဘာဝဘေးဒဏ်သင့်ဒေသ ပြန်လည်ထူထောင်ရေးအတွက် ပြည်တွင်းပြည်ပမှ အကူအညီများ စုစည်းရရှိခဲ့သည်။"
      }
  },
  "判断": {
    meaning: {"id": "penilaian ; keputusan logika", "en": "judgment; decision", "my": "ဆုံးဖြတ်ချက် ၊ ဆင်ခြင်သုံးသပ်မှု"},
    notes: {"id": "※ Menilai keadaan secara rasional untuk mengambil kesimpulan.", "en": "※ Rationally evaluating facts to reach conclusions.", "my": "※ အချက်အလက်များကို ဆင်ခြင်သုံးသပ်၍ ဆုံးဖြတ်ခြင်း။"},
    exampleTranslation: {"id": "Keputusan itu diambil berdasarkan bukti yang jelas.", "en": "That judgment was made based on clear evidence.", "my": "ထိုဆုံးဖြတ်ချက်ကို ရှင်းလင်းသော သက်သေများအပေါ် အခြေခံ၍ ချမှတ်ခဲ့သည်။"}
  },
  "考慮": {
    meaning: {"id": "pertimbangan mendalam", "en": "consideration; taking into account", "my": "လေးနက်စွာ ထည့်သွင်းစဉ်းစားခြင်း"},
    notes: {"id": "※ Memperhatikan berbagai faktor sebelum bertindak.", "en": "※ Taking various factors into account before acting.", "my": "※ မဆုံးဖြတ်မီ အချက်အလက်များစွာကို ထည့်သွင်းစဉ်းစားခြင်း။"},
    exampleTranslation: {"id": "Perlu mempertimbangkan kondisi cuaca.", "en": "Weather conditions must be taken into consideration.", "my": "ရာသီဥတုအခြေအနေကို ထည့်သွင်းစဉ်းစားရန် လိုအပ်ပါသည်။"}
  },
  "反映": {
    meaning: {"id": "mencerminkan ; merefleksikan", "en": "reflection (influence)", "my": "ထင်ဟပ်စေခြင်း ၊ ရောင်ပြန်ဟပ်ခြင်း"},
    notes: {"id": "※ Pendapat atau situasi yang terpantul pada hasil kerja.", "en": "※ Reflecting public voice or conditions into outcomes.", "my": "※ သဘောထားအမြင်များကို လက်တွေ့ရလဒ်တွင် ထင်ဟပ်စေခြင်း။"},
    exampleTranslation: {"id": "Mencerminkan suara masyarakat ke dalam kebijakan.", "en": "Reflecting citizen feedback into public policy.", "my": "ပြည်သူလူထု၏ အသံကို မူဝါဒတွင် ထင်ဟပ်စေသည်။"}
  },
  "充実": {
    meaning: {"id": "kelimpahan kepuasan ; bermakna padat", "en": "enrichment; fulfillment", "my": "ပြည့်စုံကြွယ်ဝခြင်း ၊ ကျေနပ်ဖွယ်ဖြစ်ခြင်း"},
    notes: {"id": "※ Hidup atau fasilitas yang lengkap dan bermakna.", "en": "※ Fulfilling life or well-equipped facilities.", "my": "※ စုံလင်ပြည့်စုံပြီး အဓိပ္ပာယ်ရှိသော ဘဝ။"},
    exampleTranslation: {"id": "Menghabiskan hari libur yang sangat bermakna.", "en": "Spent a deeply fulfilling holiday.", "my": "အလွန်ပြည့်စုံကျေနပ်ဖွယ်ကောင်းသော အားလပ်ရက်ကို ကုန်လွန်စေခဲ့သည်။"}
  },
  "納得": {
    meaning: {"id": "dapat memahami dan menerima alasan", "en": "consent; understanding", "my": "သဘောပေါက်လက်ခံခြင်း"},
    notes: {"id": "※ Mengerti sepenuhnya penjelasan orang lain.", "en": "※ Fully understanding and accepting an explanation.", "my": "※ ရှင်းပြချက်ကို အပြည့်အဝ နားလည်သဘောပေါက်၍ လက်ခံခြင်း။"},
    exampleTranslation: {"id": "Semua orang dapat menerima penjelasan tersebut.", "en": "Everyone was fully convinced by the explanation.", "my": "ရှင်းပြချက်ကို လူတိုင်းက သဘောပေါက်လက်ခံနိုင်ခဲ့ကြသည်။"}
  },
  "警戒": {
    meaning: {"id": "kewaspadaan ketat ; siaga bahaya", "en": "vigilance; precaution", "my": "သတိထားစောင့်ကြည့်ခြင်း ၊ ကြိုတင်သတိပြုခြင်း"},
    notes: {"id": "※ Menjaga kewaspadaan terhadap bahaya atau bencana.", "en": "※ Staying alert against disasters or hazards.", "my": "※ ဘေးအန္တရာယ်များကို အထူးသတိထား စောင့်ကြည့်ခြင်း။"},
    exampleTranslation: {"id": "Memperketat kewaspadaan terhadap datangnya topan.", "en": "Tightening vigilance against the approaching typhoon.", "my": "တိုင်ဖွန်းမုန်တိုင်း ကျရောက်မည့်အရေးကို ကြိုတင်သတိပြု စောင့်ကြည့်နေသည်။"}
  },
  "慎重": {
    meaning: {"id": "hati-hati penuh perhitungan ; prudent", "en": "prudent; cautious", "my": "သတိကြီးစွာထားသော ၊ အလေးအနက်ထားသော"},
    notes: {"id": "※ Bertindak dengan penuh kehati-hatian agar tidak salah langkah.", "en": "※ Acting with deep prudence to avoid mistakes.", "my": "※ အမှားအယွင်းမရှိစေရန် သတိကြီးစွာထား၍ ဆောင်ရွက်ခြင်း။"},
    exampleTranslation: {"id": "Mengambil keputusan secara hati-hati dan matang.", "en": "Making decisions with great prudence and care.", "my": "ဆုံးဖြတ်ချက်ကို သတိကြီးစွာထား၍ စဉ်းစားချမှတ်သည်။"}
  },
  "曖昧": {
    meaning: {"id": "rancu ; ambigu ; tidak jelas samar-samar", "en": "vague; ambiguous", "my": "မသဲကွဲသော ၊ မရေရာသော"},
    notes: {"id": "※ Makna yang mendua atau pernyataan yang samar.", "en": "※ Vague statement or ambiguous response.", "my": "※ တိကျပြတ်သားမှုမရှိဘဲ ဝိုးတဝါးဖြစ်နေသော စကား။"},
    exampleTranslation: {"id": "Menolak dengan jawaban yang ambigu.", "en": "Declined with an ambiguous answer.", "my": "မရေရာသော အဖြေဖြင့် ငြင်းပယ်ခဲ့သည်။"}
  },
  "誠実": {
    meaning: {"id": "tulus jujur ; berintegritas tinggi", "en": "sincere; honest", "my": "ရိုးသားဖြောင့်မတ်သော ၊ သစ္စာရှိသော"},
    notes: {"id": "※ Sikap jujur tanpa kepalsuan.", "en": "※ Sincere and genuine uprightness.", "my": "※ စစ်မှန်သော ရိုးသားမှုနှင့် သစ္စာရှိသည့် စိတ်နေစိတ်ထား။"},
    exampleTranslation: {"id": "Dia adalah rekan kerja yang sangat jujur dan tulus.", "en": "He is a very honest and sincere colleague.", "my": "သူသည် အလွန်ရိုးသားဖြောင့်မတ်သော လုပ်ဖော်ကိုင်ဖက်တစ်ဦးဖြစ်သည်။"}
  },
  "柔軟": {
    meaning: {"id": "fleksibel ; luwes tidak kaku", "en": "flexible; pliant", "my": "ပျော့ပျောင်းသော ၊ အခြေအနေနှင့်လိုက်လျောညီထွေရှိသော"},
    notes: {"id": "※ Keluwesan otot tubuh atau fleksibilitas pemikiran.", "en": "※ Flexible body or adaptable mindset.", "my": "※ ခန္ဓာကိုယ် ပျော့ပျောင်းမှု သို့မဟုတ် လိုက်လျောညီထွေရှိသော တွေးခေါ်ပုံ။"},
    exampleTranslation: {"id": "Menghadapi perubahan dengan pemikiran yang fleksibel.", "en": "Adapting to changes with a flexible mindset.", "my": "အပြောင်းအလဲများကို လိုက်လျောညီထွေရှိသော အတွေးအခေါ်ဖြင့် ရင်ဆိုင်သည်။"}
  },
  "補う": {
    meaning: {"id": "menambal kekurangan ; mengompensasi", "en": "to supplement; make up for", "my": "ဖြည့်ဆည်းသည် ၊ အစားထိုးသည်"},
    notes: {"id": "※ Menambahkan sesuatu yang kurang agar genap.", "en": "※ Adding what is lacking to make whole.", "my": "※ လိုအပ်ချက်ကို ပြည့်စုံအောင် ဖြည့်စွက်ပေးခြင်း။"},
    exampleTranslation: {"id": "Mengonsumsi suplemen untuk menambal kekurangan vitamin.", "en": "Taking supplements to make up for vitamin shortage.", "my": "ဗီတာမင်ချို့တဲ့မှုကို ဖြည့်ဆည်းရန် ဖြည့်စွက်စာ သောက်သုံးသည်။"}
  },
  "偏る": {
    meaning: {"id": "condong sepihak ; tidak seimbang", "en": "to be biased; unbalanced", "my": "ဘက်လိုက်သည် ၊ မညီမမျှဖြစ်သည်"},
    notes: {"id": "※ Pemikiran atau nutrisi yang berat sebelah.", "en": "※ Unbalanced nutrition or biased opinion.", "my": "※ ဘက်လိုက်သော သဘောထား သို့မဟုတ် အာဟာရမမျှတမှု။"},
    exampleTranslation: {"id": "Pola makan yang tidak seimbang buruk bagi kesehatan.", "en": "An unbalanced diet is bad for health.", "my": "အာဟာရမညီမျှသော စားသောက်မှုပုံစံသည် ကျန်းမာရေးအတွက် မကောင်းပါ။"}
  },
  "怠る": {
    meaning: {"id": "lalai ; mengabaikan kewajiban", "en": "to neglect; fail to do", "my": "လျစ်လျူရှုသည် ၊ ပေါ့ဆသည်"},
    notes: {"id": "※ Lalai dalam menjalankan tugas atau latihan.", "en": "※ Neglecting duty, vigilance, or daily practice.", "my": "※ တာဝန်ဝတ္တရား သို့မဟုတ် လေ့ကျင့်မှုကို ပေါ့ဆခြင်း။"},
    exampleTranslation: {"id": "Jangan pernah lalai dalam menjaga keselamatan.", "en": "Never neglect safety precautions.", "my": "ဘေးကင်းလုံခြုံရေးကို ဘယ်တော့မှ မပေါ့ဆပါနှင့်။"}
  },
  "抱える": {
    meaning: {"id": "memikul beban ; merengkuh masalah", "en": "to hold in arms; have (problems)", "my": "ပွေ့ပိုက်သည် ၊ ပြဿနာရင်ဆိုင်ရသည်"},
    notes: {"id": "※ Membawa barang di tangan atau memikul masalah berat.", "en": "※ Holding in arms or bearing heavy issues.", "my": "※ လက်တွင် ပွေ့ပိုက်ထားခြင်း သို့မဟုတ် ပြဿနာကို ရင်ဆိုင်နေရခြင်း။"},
    exampleTranslation: {"id": "Dia sedang memikul masalah keluarga yang berat.", "en": "He is currently facing serious family problems.", "my": "သူသည် လေးနက်သော မိသားစုပြဿနာများကို ရင်ဆိုင်နေရသည်။"}
  },
  "捉える": {
    meaning: {"id": "menangkap makna inti ; memandang situasi", "en": "to grasp; perceive", "my": "ဖမ်းဆုပ်သည် ၊ သဘောပေါက်နားလည်သည်"},
    notes: {"id": "※ Menangkap inti persoalan atau peluang.", "en": "※ Grasping the core essence or seizing opportunity.", "my": "※ ပြဿနာ၏ အနှစ်သာရ သို့မဟုတ် အခွင့်အလမ်းကို ဖမ်းဆုပ်ခြင်း။"},
    exampleTranslation: {"id": "Menangkap peluang perubahan zaman dengan cepat.", "en": "Quickly seizing the opportunities of changing times.", "my": "ခေတ်ပြောင်းလဲမှု၏ အခွင့်အလမ်းများကို လျင်မြန်စွာ ဖမ်းဆုပ်သည်။"}
  },
  "招く": {
    meaning: {"id": "mengundang bencana/akibat buruk", "en": "to invite; bring about (misfortune)", "my": "ဖိတ်ခေါ်သည် ၊ အန္တရာယ်ဖြစ်စေသည်"},
    notes: {"id": "※ Menyebabkan terjadinya kesalahpahaman atau bahaya.", "en": "※ Inadvertently causing misunderstandings or trouble.", "my": "※ နားလည်မှုလွဲမှားခြင်း သို့မဟုတ် အန္တရာယ်ကို ဖိတ်ခေါ်သကဲ့သို့ဖြစ်စေခြင်း။"},
    exampleTranslation: {"id": "Kecerobohan kecil dapat mengundang kecelakaan besar.", "en": "Carelessness can bring about a major accident.", "my": "ပေါ့ဆမှု အနည်းငယ်က ကြီးမားသော မတော်တဆမှုကို ဖြစ်စေနိုင်သည်။"}
  },
  "遡る": {
    meaning: {"id": "menelusuri kembali ke masa lalu", "en": "to go back in time; trace back", "my": "အချိန်နောက်ပြန်လိုက်သည် ၊ မူလသို့ခြေရာခံသည်"},
    notes: {"id": "※ Menelusuri sejarah atau asal mula ke masa lampau.", "en": "※ Tracing back history or stream upstream.", "my": "※ သမိုင်း သို့မဟုတ် မူလအစကို နောက်ကြောင်းပြန်၍ ခြေရာခံခြင်း။"},
    exampleTranslation: {"id": "Sejarah tradisi ini berakar menelusuri ratusan tahun lalu.", "en": "The history of this tradition traces back hundreds of years.", "my": "ဤဓလေ့၏ သမိုင်းကြောင်းသည် လွန်ခဲ့သော နှစ်ပေါင်းရာချီသို့ ပြန်လည်ခြေရာခံနိုင်သည်။"}
  },
  "携わる": {
    meaning: {"id": "berkecimpung dalam bidang kerja", "en": "to participate; be involved in", "my": "ပါဝင်ဆောင်ရွက်သည် ၊ ပါဝင်ပတ်သက်သည်"},
    notes: {"id": "※ Terlibat langsung dalam suatu profesi atau proyek.", "en": "※ Being actively engaged in a profession or endeavor.", "my": "※ လုပ်ငန်းနယ်ပယ် သို့မဟုတ် ပရောဂျက်တစ်ခုတွင် တိုက်ရိုက်ပါဝင်ဆောင်ရွက်ခြင်း။"},
    exampleTranslation: {"id": "Sudah lama saya berkecimpung dalam pengembangan perangkat lunak.", "en": "I have long been involved in software development.", "my": "ဆော့ဖ်ဝဲလ် ရေးသားထုတ်လုပ်ရေး လုပ်ငန်းတွင် ပါဝင်ဆောင်ရွက်နေခဲ့သည်မှာ ကြာပါပြီ။"}
  },
  "見合わせる": {
    meaning: {"id": "menangguhkan sementara ; menunda eksekusi", "en": "to postpone; suspend", "my": "ရွှေ့ဆိုင်းသည် ၊ ဆိုင်းငံ့ထားသည်"},
    notes: {"id": "※ Menunda rencana sambil melihat perkembangan situasi.", "en": "※ Suspending operations while observing circumstances.", "my": "※ အခြေအနေကို စောင့်ကြည့်ရင်း ယာယီဆိုင်းငံ့ထားခြင်း။"},
    exampleTranslation: {"id": "Perjalanan kereta ditangguhkan sementara karena angin ribut.", "en": "Train departures were suspended temporarily due to the gale.", "my": "မုန်တိုင်းပြင်းထန်သဖြင့် ရထားခရီးစဉ်များကို ယာယီဆိုင်းငံ့ထားသည်။"}
  },
  "注意": {
    meaning: {"id": "perhatian ; peringatan ; berhati-hati", "en": "caution; attention", "my": "သတိထားခြင်း ၊ ဂရုပြုခြင်း"},
    notes: {"id": "※ Berhati-hati terhadap bahaya atau memusatkan fokus.", "en": "※ Paying careful attention to avoid risks.", "my": "※ ဘေးအန္တရာယ်ကို သတိပြုခြင်း သို့မဟုတ် အာရုံစိုက်ခြင်း။"},
    exampleTranslation: {"id": "Harap berhati-hati saat melangkah di tangga.", "en": "Please watch your step on the stairs.", "my": "လှေကားထစ်များတွင် ကျေးဇူးပြု၍ ခြေလှမ်းသတိထားပါ။"}
  },
  "心配": {
    meaning: {"id": "khawatir ; cemas", "en": "worry; concern", "my": "စိုးရိမ်ပူပန်ခြင်း"},
    notes: {"id": "※ Merasa gelisah terhadap masa depan atau orang tersayang.", "en": "※ Feeling anxious or concerned about someone.", "my": "※ တစ်စုံတစ်ယောက် သို့မဟုတ် အနာဂတ်အတွက် စိတ်ပူပန်ခြင်း။"},
    exampleTranslation: {"id": "Ibu selalu mencemaskan kesehatan anak-anaknya.", "en": "Mother is always worried about her children's health.", "my": "မိခင်သည် သားသမီးများ၏ ကျန်းမာရေးအတွက် အမြဲစိုးရိမ်ပူပန်တတ်သည်။"}
  },
  "複雑": {
    meaning: {"id": "rumit ; berbelit-belit", "en": "complex; complicated", "my": "ရှုပ်ထွေးသော"},
    notes: {"id": "※ Banyak cabang atau faktor sehingga sulit dipahami.", "en": "※ Highly intricate and hard to untangle.", "my": "※ အစိတ်အပိုင်းများပြားပြီး နားလည်ရန် ခက်ခဲရှုပ်ထွေးခြင်း။"},
    exampleTranslation: {"id": "Struktur mesin ini sangat rumit.", "en": "The structure of this machine is very complicated.", "my": "ဤစက်၏ ဖွဲ့စည်းတည်ဆောက်ပုံမှာ အလွန်ရှုပ်ထွေးပါသည်။"}
  },
  "簡単": {
    meaning: {"id": "mudah ; sederhana", "en": "simple; easy", "my": "လွယ်ကူရိုးရှင်းသော"},
    notes: {"id": "※ Tidak berbelit-belit dan gampang diselesaikan.", "en": "※ Straightforward and effortless.", "my": "※ ရှုပ်ထွေးမှုမရှိဘဲ လွယ်လွယ်ကူကူ ပြီးမြောက်နိုင်ခြင်း။"},
    exampleTranslation: {"id": "Soal ujian ini sangat mudah dikerjakan.", "en": "This exam question is very easy to solve.", "my": "ဤစာမေးပွဲ မေးခွန်းမှာ အလွန်လွယ်ကူပါသည်။"}
  },
  "危険": {
    meaning: {"id": "berbahaya", "en": "danger; perilous", "my": "အန္တရာယ်ရှိသော"},
    notes: {"id": "※ Mengandung risiko luka, celaka, atau kerugian besar.", "en": "※ Involving high risk or peril.", "my": "※ ထိခိုက်နစ်နာမှု သို့မဟုတ် ဘေးဖြစ်စေနိုင်သော အခြေအနေ။"},
    exampleTranslation: {"id": "Sangat berbahaya bermain di dekat rel kereta api.", "en": "It is extremely dangerous to play near train tracks.", "my": "မီးရထားသံလမ်းအနီးတွင် ကစားခြင်းသည် အလွန်အန္တရာယ်ရှိသည်။"}
  },
  "安全": {
    meaning: {"id": "aman", "en": "safety; secure", "my": "ဘေးကင်းလုံခြုံသော"},
    notes: {"id": "※ Bebas dari ancaman bahaya.", "en": "※ Free from hazards or risk.", "my": "※ ဘေးအန္တရာယ် ကင်းဝေး၍ လုံခြုံမှုရှိခြင်း။"},
    exampleTranslation: {"id": "Kota ini sangat aman ditinggali.", "en": "This town is very safe to live in.", "my": "ဤမြို့သည် နေထိုင်ရန် အလွန်ဘေးကင်းလုံခြုံပါသည်။"}
  },
  "習慣": {
    meaning: {"id": "kebiasaan ; adat tradisi", "en": "custom; habit", "my": "အလေ့အထ ၊ ဓလေ့ထုံးတမ်း"},
    notes: {"id": "※ Rutinitas pribadi atau norma yang diulang sehari-hari.", "en": "※ Regular personal habit or societal custom.", "my": "※ နေ့စဉ်ပြုလုပ်နေကျ အလေ့အကျင့် သို့မဟုတ် လူ့အဖွဲ့အစည်း၏ ဓလေ့။"},
    exampleTranslation: {"id": "Bangun pagi sudah menjadi kebiasaan saya.", "en": "Waking up early has become my daily habit.", "my": "မနက်စောစောထခြင်းသည် ကျွန်ုပ်၏ အလေ့အထတစ်ခု ဖြစ်လာခဲ့သည်။"}
  },
  "理由": {
    meaning: {"id": "alasan ; latar belakang", "en": "reason", "my": "အကြောင်းပြချက် ၊ အကြောင်းရင်း"},
    notes: {"id": "※ Dasar mengapa suatu hal dilakukan atau terjadi.", "en": "※ The rationale behind an action or event.", "my": "※ ကိစ္စတစ်ခု ဖြစ်ပွားရခြင်း၏ အခြေခံအကြောင်းရင်း။"},
    exampleTranslation: {"id": "Tolong jelaskan alasan keterlambatan Anda.", "en": "Please explain the reason for your delay.", "my": "ကျေးဇူးပြု၍ နောက်ကျရသည့် အကြောင်းရင်းကို ရှင်းပြပေးပါ။"}
  },
  "試合": {
    meaning: {"id": "pertandingan ; laga olahraga", "en": "match; game", "my": "ပြိုင်ပွဲ ၊ ပွဲစဉ်"},
    notes: {"id": "※ Laga antar regu olahraga.", "en": "※ Sports contest or game match.", "my": "※ အသင်းများအကြား အားကစားပြိုင်ပွဲ။"},
    exampleTranslation: {"id": "Menonton pertandingan sepak bola yang seru bersama teman.", "en": "Watched an exciting soccer match with friends.", "my": "သူငယ်ချင်းများနှင့်အတူ စိတ်လှုပ်ရှားဖွယ် ဘောလုံးပွဲကို ကြည့်ရှုခဲ့သည်။"}
  },
  "優勝": {
    meaning: {"id": "juara pertama ; kemenangan turnamen", "en": "championship; overall win", "my": "ပထမဆုရရှိခြင်း ၊ ဗိုလ်စွဲခြင်း"},
    notes: {"id": "※ Meraih peringkat tertinggi dalam turnamen.", "en": "※ Achieving first place in a tournament.", "my": "※ ပြိုင်ပွဲတွင် ထိပ်ဆုံးပထမဆုကို ဆွတ်ခူးရရှိခြင်း။"},
    exampleTranslation: {"id": "Tim kami akhirnya berhasil meraih juara pertama.", "en": "Our team finally won the championship.", "my": "ကျွန်ုပ်တို့အသင်းသည် နောက်ဆုံးတွင် ဗိုလ်စွဲနိုင်ခဲ့သည်။"}
  },
  "届ける": {
    meaning: {"id": "mengantarkan ; menyampaikan surat/barang", "en": "to deliver", "my": "ပို့ဆောင်ပေးသည်"},
    notes: {"id": "※ Membawa paket atau melapor ke kantor polisi.", "en": "※ Delivering parcels or reporting to authorities.", "my": "※ ပါဆယ်ပစ္စည်းကို ပို့ဆောင်ပေးခြင်း သို့မဟုတ် သတင်းပို့ခြင်း။"},
    exampleTranslation: {"id": "Kurir mengantarkan paket tepat waktu.", "en": "The courier delivered the package on time.", "my": "ပို့ဆောင်ရေးသမားသည် ပါဆယ်ထုပ်ကို အချိန်မီ ပို့ဆောင်ပေးခဲ့သည်။"}
  },
  "運ぶ": {
    meaning: {"id": "mengangkut ; memindahkan beban", "en": "to carry; transport", "my": "သယ်ယူပို့ဆောင်သည်"},
    notes: {"id": "※ Memindahkan barang berat dari satu tempat ke tempat lain.", "en": "※ Transporting freight or heavy items.", "my": "※ ပစ္စည်းများကို တစ်နေရာမှ တစ်နေရာသို့ သယ်ယူရွှေ့ပြောင်းခြင်း။"},
    exampleTranslation: {"id": "Bersama-sama mengangkut perabot rumah tangga.", "en": "Carrying household furniture together.", "my": "အိမ်သုံးပရိဘောဂများကို အတူတကွ သယ်ယူကြသည်။"}
  },
  "直す": {
    meaning: {"id": "memperbaiki ; membetulkan", "en": "to repair; to fix", "my": "ပြုပြင်သည် ၊ ပြင်ဆင်သည်"},
    notes: {"id": "※ Membetulkan barang rusak atau mengoreksi tulisan.", "en": "※ Repairing broken items or correcting text.", "my": "※ ပျက်စီးနေသောပစ္စည်းကို ပြင်ဆင်ခြင်း သို့မဟုတ် စာလုံးပေါင်းပြင်ခြင်း။"},
    exampleTranslation: {"id": "Tukang reparasi memperbaiki jam tangan saya.", "en": "The technician fixed my wristwatch.", "my": "ပြင်ဆင်သူသည် ကျွန်ုပ်၏ လက်ပတ်နာရီကို ပြင်ဆင်ပေးခဲ့သည်။"}
  },
  "届く": {
    meaning: {"id": "sampai ; tiba (surat/paket)", "en": "to reach; arrive", "my": "ရောက်ရှိသည် (စာ/ပါဆယ်)"},
    notes: {"id": "※ Surat atau paket sampai ke tangan penerima.", "en": "※ Mail or goods arriving at destination.", "my": "※ စာ သို့မဟုတ် ပါဆယ်ပစ္စည်း လက်ခံသူထံ ရောက်ရှိလာခြင်း။"},
    exampleTranslation: {"id": "Surat dari keluarga telah tiba kemarin.", "en": "The letter from my family arrived yesterday.", "my": "မိသားစုထံမှ စာသည် မနေ့က ရောက်ရှိလာခဲ့သည်။"}
  },
  "伝える": {
    meaning: {"id": "menyampaikan pesan", "en": "to convey; report", "my": "သတင်းစကားပါးသည် ၊ အကြောင်းကြားသည်"},
    notes: {"id": "※ Memberitahukan pesan atau meneruskan tradisi.", "en": "※ Relaying a message or transmitting heritage.", "my": "※ သတင်းစကားကို အခြားသူထံသို့ တစ်ဆင့်ပြောပြခြင်း။"},
    exampleTranslation: {"id": "Tolong sampaikan pesan terima kasih saya kepada beliau.", "en": "Please convey my gratitude to him.", "my": "ကျေးဇူးပြု၍ သူ၏ထံသို့ ကျွန်ုပ်၏ ကျေးဇူးတင်စကားကို ပါးပေးပါ။"}
  },
  "迎える": {
    meaning: {"id": "menjemput ; menyambut kedatangan", "en": "to welcome; greet", "my": "ကြိုဆိုသည် ၊ သွားရောက်ကြိုဆိုသည်"},
    notes: {"id": "※ Menyambut tamu di stasiun atau menyongsong tahun baru.", "en": "※ Greeting visitors or ushering in the new year.", "my": "※ ဧည့်သည်ကို ဘူတာတွင် ကြိုဆိုခြင်း သို့မဟုတ် နှစ်သစ်ကို ကြိုဆိုခြင်း။"},
    exampleTranslation: {"id": "Pergi ke bandara untuk menjemput sahabat.", "en": "Going to the airport to welcome a close friend.", "my": "သူငယ်ချင်းကောင်းကို ကြိုဆိုရန် လေဆိပ်သို့ သွားသည်။"}
  },
  "決める": {
    meaning: {"id": "memutuskan ; menetapkan", "en": "to decide", "my": "ဆုံးဖြတ်သည် ၊ သတ်မှတ်သည်"},
    notes: {"id": "※ Menetapkan pilihan hati atau aturan.", "en": "※ Deciding on an option or setting rules.", "my": "※ ရွေးချယ်မှု သို့မဟုတ် စည်းမျဉ်းကို အတည်ပြုသတ်မှတ်ခြင်း။"},
    exampleTranslation: {"id": "Saya telah memutuskan rencana masa depan.", "en": "I have decided on my future plans.", "my": "ကျွန်ုပ်သည် အနာဂတ်အစီအစဉ်ကို ဆုံးဖြတ်ပြီးပါပြီ။"}
  },
  "育てる": {
    meaning: {"id": "membesarkan ; merawat hingga tumbuh", "en": "to raise; bring up", "my": "ပြုစုပျိုးထောင်သည် ၊ မွေးမြူသည်"},
    notes: {"id": "※ Merawat anak atau membudidayakan tanaman.", "en": "※ Nurturing children or cultivating crops.", "my": "※ ကလေးများကို ပြုစုပျိုးထောင်ခြင်း သို့မဟုတ် အပင်များကို စိုက်ပျိုးမွေးမြူခြင်း။"},
    exampleTranslation: {"id": "Membesarkan anak dengan penuh kasih sayang.", "en": "Raising children with abundant love.", "my": "ကလေးများကို ချစ်ခြင်းမေတ္တာအပြည့်ဖြင့် ပြုစုပျိုးထောင်သည်။"}
  },
  "落ちる": {
    meaning: {"id": "jatuh ; gugur ; gagal ujian", "en": "to fall; fail", "my": "ပြုတ်ကျသည် ၊ စာမေးပွဲကျရှုံးသည်"},
    notes: {"id": "※ Daun gugur ke tanah atau tidak lulus ujian.", "en": "※ Dropping to the ground or failing tests.", "my": "※ အရာဝတ္ထု အောက်သို့ ပြုတ်ကျခြင်း သို့မဟုတ် စာမေးပွဲကျရှုံးခြင်း။"},
    exampleTranslation: {"id": "Daun-daun kuning gugur dari pohon.", "en": "Yellow leaves fall from the trees.", "my": "သစ်ရွက်ဝါများသည် သစ်ပင်မှ ပြုတ်ကျကုန်သည်။"}
  },
  "倒れる": {
    meaning: {"id": "tumbang ; roboh ; pingsan", "en": "to collapse; fall down", "my": "လဲကျသည် ၊ ပြိုကျသည်"},
    notes: {"id": "※ Pohon tumbang terkena badai atau orang pingsan.", "en": "※ Trees toppling over or people collapsing from fatigue.", "my": "※ သစ်ပင်လဲပြိုကျခြင်း သို့မဟုတ် မူးလဲသွားခြင်း။"},
    exampleTranslation: {"id": "Pohon besar tumbang karena angin kencang.", "en": "The large tree collapsed due to strong winds.", "my": "လေပြင်းတိုက်ခတ်မှုကြောင့် သစ်ပင်ကြီး လဲကျသွားသည်။"}
  },
  "昨日": {
    meaning: {"id": "kemarin", "en": "yesterday", "my": "မနေ့က"},
    notes: {"id": "※ Hari sebelum hari ini.", "en": "※ The day before today.", "my": "※ ယနေ့မတိုင်မီ လွန်ခဲ့သောနေ့။"},
    exampleTranslation: {"id": "Kemarin saya belajar kanji sepanjang sore.", "en": "Yesterday I studied kanji all afternoon.", "my": "မနေ့က တစ်မွန်းလွဲလုံး ခန်းဂျီး စာကျက်ခဲ့သည်။"}
  },
  "日本": {
    meaning: {"id": "Jepang", "en": "Japan", "my": "ဂျပန်နိုင်ငံ"},
    notes: {"id": "※ Negara kepulauan di Asia Timur.", "en": "※ East Asian island nation.", "my": "※ အရှေ့အာရှရှိ ဂျပန်ကျွန်းနိုင်ငံ။"},
    exampleTranslation: {"id": "Tahun depan saya berencana pergi ke Jepang.", "en": "Next year I plan to visit Japan.", "my": "နောက်နှစ်တွင် ဂျပန်နိုင်ငံသို့ သွားရောက်ရန် စီစဉ်ထားသည်။"}
  },
  "学生": {
    meaning: {"id": "murid ; pelajar ; mahasiswa", "en": "student", "my": "ကျောင်းသား / ကျောင်းသူ"},
    notes: {"id": "※ Orang yang sedang menuntut ilmu di sekolah/kampus.", "en": "※ Person studying at school or university.", "my": "※ ကျောင်း သို့မဟုတ် တက္ကသိုလ်တွင် ပညာသင်ကြားနေသူ။"},
    exampleTranslation: {"id": "Dia adalah seorang mahasiswa universitas.", "en": "She is a university student.", "my": "သူမသည် တက္ကသိုလ်ကျောင်းသူတစ်ဦးဖြစ်သည်။"}
  },
  "名前": {
    meaning: {"id": "nama panggilan / nama lengkap", "en": "name", "my": "အမည် ၊ နာမည်"},
    notes: {"id": "※ Identitas sebutan diri seseorang.", "en": "※ The designation of a person or object.", "my": "※ လူတစ်ဦး သို့မဟုတ် အရာဝတ္ထုတစ်ခု၏ ခေါ်ဝေါ်သမုတ်သောအမည်။"},
    exampleTranslation: {"id": "Silakan tulis nama Anda di sini.", "en": "Please write your name here.", "my": "ကျေးဇူးပြု၍ ဤနေရာတွင် သင့်နာမည်ကို ရေးပေးပါ။"}
  },
  "車": {
    meaning: {"id": "mobil ; kendaraan bermotor", "en": "car; vehicle", "my": "ကား ၊ မော်တော်ယာဉ်"},
    notes: {"id": "※ Kendaraan roda empat bermotor.", "en": "※ Automobile or wheeled vehicle.", "my": "※ မော်တော်ကား သို့မဟုတ် ဘီးတပ်ယာဉ်။"},
    exampleTranslation: {"id": "Ayah saya mengendarai mobil ke kantor.", "en": "My father drives a car to work.", "my": "ဖခင်သည် ရုံးသို့ ကားမောင်း၍ သွားသည်။"}
  },
  "本": {
    meaning: {"id": "buku bacaan", "en": "book", "my": "စာအုပ်"},
    notes: {"id": "※ Kumpulan lembaran tulisan yang dijilid.", "en": "※ Bound printed reading volume.", "my": "※ ဖတ်ရှုရန် စာအုပ်။"},
    exampleTranslation: {"id": "Membaca buku di perpustakaan yang tenang.", "en": "Reading books in a quiet library.", "my": "တိတ်ဆိတ်သော စာကြည့်တိုက်တွင် စာအုပ်ဖတ်သည်။"}
  },
  "お金": {
    meaning: {"id": "uang kas / dana", "en": "money; cash", "my": "ငွေကြေး ၊ ပိုက်ဆံ"},
    notes: {"id": "※ Alat pembayaran resmi tunai atau tabungan.", "en": "※ Currency and cash funds.", "my": "※ ကုန်စည်ဝယ်ယူရာတွင် သုံးစွဲသော ငွေကြေး။"},
    exampleTranslation: {"id": "Menabung uang untuk masa depan.", "en": "Saving money for the future.", "my": "အနာဂတ်အတွက် ငွေစုဆောင်းသည်။"}
  },
  "天気": {
    meaning: {"id": "cuaca hari ini", "en": "weather", "my": "ရာသီဥတု"},
    notes: {"id": "※ Kondisi atmosfer harian seperti cerah atau hujan.", "en": "※ Daily atmospheric conditions.", "my": "※ နေ့စဉ် ရာသီဥတု အခြေအနေ။"},
    exampleTranslation: {"id": "Hari ini cuacanya sangat cerah dan sejuk.", "en": "Today the weather is very clear and cool.", "my": "ယနေ့ ရာသီဥတုမှာ အလွန်သာယာကြည်လင်သည်။"}
  },
  "山": {
    meaning: {"id": "gunung", "en": "mountain", "my": "တောင်"},
    notes: {"id": "※ Dataran tinggi alami seperti Gunung Fuji.", "en": "※ High natural elevation like Mt. Fuji.", "my": "※ သဘာဝအတိုင်း မြင့်မားနေသော တောင်ကုန်းတောင်တန်း။"},
    exampleTranslation: {"id": "Mendaki gunung pada liburan musim panas.", "en": "Climbing mountains during summer vacation.", "my": "နွေရာသီ အားလပ်ရက်တွင် တောင်တက်သည်။"}
  },
  "川": {
    meaning: {"id": "sungai ; kali", "en": "river; stream", "my": "မြစ် ၊ ချောင်း"},
    notes: {"id": "※ Aliran air alami dari gunung menuju laut.", "en": "※ Natural flowing waterway.", "my": "※ သဘာဝအတိုင်း စီးဆင်းနေသော မြစ်ချောင်း။"},
    exampleTranslation: {"id": "Air sungai ini sangat jernih dan bersih.", "en": "The water in this river is very clear and clean.", "my": "ဤမြစ်၏ ရေသည် အလွန်ကြည်လင်သန့်ရှင်းပါသည်။"}
  },
  "旅行": {
    meaning: {"id": "wisata ; bepergian jauh", "en": "travel; trip", "my": "ခရီးသွားခြင်း"},
    notes: {"id": "※ Bepergian mengunjungi tempat wisata.", "en": "※ Journey for vacation or sightseeing.", "my": "※ အပန်းဖြေခရီး သို့မဟုတ် လည်ပတ်ခရီး သွားရောက်ခြင်း။"},
    exampleTranslation: {"id": "Pergi berwisata ke Kyoto bersama keluarga.", "en": "Traveled to Kyoto with family.", "my": "မိသားစုနှင့်အတူ ကျိုတိုမြို့သို့ ခရီးသွားခဲ့သည်။"}
  },
  "映画": {
    meaning: {"id": "film bioskop / sinema", "en": "movie; film", "my": "ရုပ်ရှင်"},
    notes: {"id": "※ Karya sinema yang ditonton di layar.", "en": "※ Cinematic motion picture.", "my": "※ ရုပ်ရှင်ရုံတွင် ကြည့်ရှုသော ရုပ်ရှင်ဇာတ်ကား။"},
    exampleTranslation: {"id": "Menonton film terbaru di bioskop akhir pekan ini.", "en": "Watching the latest movie in theater this weekend.", "my": "ယခုသီတင်းပတ်ကုန်တွင် ရုပ်ရှင်ရုံ၌ ရုပ်ရှင်အသစ် ကြည့်မည်။"}
  },
  "写真": {
    meaning: {"id": "foto ; potret kamera", "en": "photo; picture", "my": "ဓာတ်ပုံ"},
    notes: {"id": "※ Gambar yang diambil menggunakan kamera.", "en": "※ Photograph captured via camera.", "my": "※ ကင်မရာဖြင့် ရိုက်ကူးထားသော ဓာတ်ပုံ။"},
    exampleTranslation: {"id": "Mengambil banyak foto kenangan yang indah.", "en": "Took many beautiful memorial photos.", "my": "လှပသောအမှတ်တရ ဓာတ်ပုံများစွာကို ရိုက်ကူးခဲ့သည်။"}
  },
  "音楽": {
    meaning: {"id": "musik ; lagu instrumen", "en": "music", "my": "ဂီတ ၊ တေးဂီတ"},
    notes: {"id": "※ Nada dan lagu yang didengarkan.", "en": "※ Audio melody and songs.", "my": "※ သံစဉ်တေးသွားနှင့် သီချင်းများ။"},
    exampleTranslation: {"id": "Mendengarkan musik klasik untuk relaksasi.", "en": "Listening to classical music for relaxation.", "my": "စိတ်အပန်းဖြေရန် ဂန္ထဝင်တေးဂီတကို နားထောင်သည်။"}
  },
  "勉強": {
    meaning: {"id": "belajar tekun ; studi mandiri", "en": "study; diligent learning", "my": "စာကျက်ခြင်း ၊ လေ့လာသင်ယူခြင်း"},
    notes: {"id": "※ Belajar mandiri mengasah ilmu pengetahuan.", "en": "※ Diligent academic studying.", "my": "※ အသိပညာတိုးပွားစေရန် စာပေလေ့လာသင်ယူခြင်း။"},
    exampleTranslation: {"id": "Setiap hari saya belajar bahasa Jepang selama dua jam.", "en": "Every day I study Japanese for two hours.", "my": "နေ့တိုင်း ဂျပန်စာကို ၂ နာရီကြာ လေ့လာသင်ယူပါသည်။"}
  },
  "両親": {
    meaning: {"id": "kedua orang tua", "en": "parents", "my": "မိဘနှစ်ပါး"},
    notes: {"id": "※ Ayah dan ibu kandung.", "en": "※ Both father and mother.", "my": "※ ဖခင်နှင့် မိခင် နှစ်ဦးစလုံး။"},
    exampleTranslation: {"id": "Saya sangat menyayangi dan menghormati kedua orang tua saya.", "en": "I deeply love and respect my parents.", "my": "ကျွန်ုပ်သည် မိဘနှစ်ပါးကို အလွန်ချစ်ခင်လေးစားပါသည်။"}
  },
  "質問": {
    meaning: {"id": "pertanyaan ; tanda tanya", "en": "question; inquiry", "my": "မေးခွန်း"},
    notes: {"id": "※ Pertanyaan yang diajukan untuk meminta kejelasan.", "en": "※ Inquiry seeking clarification.", "my": "※ သိရှိလိုသည်များကို မေးမြန်းသော မေးခွန်း။"},
    exampleTranslation: {"id": "Jika ada pertanyaan silakan angkat tangan.", "en": "If you have any questions, please raise your hand.", "my": "မေးခွန်းရှိပါက ကျေးဇူးပြု၍ လက်ထောင်ပါ။"}
  },
  "住所": {
    meaning: {"id": "alamat tempat tinggal", "en": "address", "my": "နေရပ်လိပ်စာ"},
    notes: {"id": "※ Lokasi resmi tempat bermukim.", "en": "※ Official residential domicile.", "my": "※ နေထိုင်ရာ အရပ်ဒေသ လိပ်စာ။"},
    exampleTranslation: {"id": "Tolong tuliskan alamat tempat tinggal Anda saat ini.", "en": "Please write down your current address.", "my": "ကျေးဇူးပြု၍ သင့်လက်ရှိ နေရပ်လိပ်စာကို ရေးပေးပါ။"}
  },
  "都合": {
    meaning: {"id": "kesiapan waktu ; kecocokan jadwal", "en": "convenience; schedule availability", "my": "အချိန်အဆင်ပြေမှု ၊ အခြေအနေ"},
    notes: {"id": "※ Kecocokan waktu untuk bertemu: 都合がいい.", "en": "※ Schedule convenience for an appointment.", "my": "※ ချိန်းဆိုမှုအတွက် အချိန်အဆင်ပြေမှု။"},
    exampleTranslation: {"id": "Hari apa yang paling cocok bagi jadwal Anda?", "en": "Which day is most convenient for you?", "my": "မည်သည့်နေ့က သင့်အတွက် အချိန်အဆင်ပြေဆုံးဖြစ်ပါသလဲ။"}
  },
  "経済": {
    meaning: {"id": "perekonomian ; keuangan pasar", "en": "economy; finance", "my": "စီးပွားရေး"},
    notes: {"id": "※ Tatanan produksi, konsumsi, dan pasar.", "en": "※ Macroeconomics and financial systems.", "my": "※ ထုတ်လုပ်မှုနှင့် ကုန်သွယ်စီးပွားရေး စနစ်။"},
    exampleTranslation: {"id": "Pemulihan perekonomian global menunjukkan sinyal positif.", "en": "Global economic recovery is showing positive signals.", "my": "ကမ္ဘာ့စီးပွားရေး ပြန်လည်ဦးမော့လာမှုမှာ ကောင်းမွန်သော လက္ခဏာများ ပြသနေသည်။"}
  },
  "政治": {
    meaning: {"id": "politik ; kebijakan negara", "en": "politics; government policy", "my": "နိုင်ငံရေး"},
    notes: {"id": "※ Tata kelola pemerintahan dan kebijakan negara.", "en": "※ Governance and public political administration.", "my": "※ နိုင်ငံတော် အုပ်ချုပ်ရေးနှင့် မူဝါဒရေးရာများ။"},
    exampleTranslation: {"id": "Generasi muda mulai menaruh minat besar pada isu politik.", "en": "Younger generations are taking great interest in politics.", "my": "လူငယ်မျိုးဆက်သစ်များသည် နိုင်ငံရေးကိစ္စများတွင် စိတ်ဝင်စားမှု တိုးပွားလာသည်။"}
  },
  "環境": {
    meaning: {"id": "lingkungan hidup sekitar", "en": "environment; surroundings", "my": "ပတ်ဝန်းကျင်"},
    notes: {"id": "※ Alam sekitar atau kondisi ekosistem.", "en": "※ Natural environment or ecological conditions.", "my": "※ သဘာဝပတ်ဝန်းကျင် သို့မဟုတ် ဂေဟစနစ်။"},
    exampleTranslation: {"id": "Penting menjaga kelestarian lingkungan hidup bagi masa depan.", "en": "It is vital to protect the environment for future generations.", "my": "အနာဂတ်အတွက် သဘာဝပတ်ဝန်းကျင်ကို ထိန်းသိမ်းစောင့်ရှောက်ရန် အရေးကြီးသည်။"}
  },
  "貿易": {
    meaning: {"id": "perdagangan luar negeri", "en": "foreign trade; commerce", "my": "နိုင်ငံခြားကုန်သွယ်ရေး"},
    notes: {"id": "※ Ekspor impor barang antarnegara.", "en": "※ International export and import commerce.", "my": "※ နိုင်ငံများအကြား ပို့ကုန်သွင်းကုန် ကုန်သွယ်မှု။"},
    exampleTranslation: {"id": "Perdagangan luar negeri kedua negara berkembang pesat.", "en": "Foreign trade between the two countries expanded rapidly.", "my": "နှစ်နိုင်ငံအကြား နိုင်ငံခြားကုန်သွယ်ရေးမှာ လျင်မြန်စွာ တိုးတက်လာခဲ့သည်။"}
  },
  "紹介": {
    meaning: {"id": "perkenalan ; rekomendasi orang", "en": "introduction; referral", "my": "မိတ်ဆက်ပေးခြင်း"},
    notes: {"id": "※ Memperkenalkan teman atau produk baru.", "en": "※ Introducing persons or recommending goods.", "my": "※ လူပုဂ္ဂိုလ် သို့မဟုတ် ပစ္စည်းကို မိတ်ဆက်ပေးခြင်း။"},
    exampleTranslation: {"id": "Saya diperkenalkan kepada manajer baru oleh rekan kerja.", "en": "I was introduced to the new manager by my colleague.", "my": "လုပ်ဖော်ကိုင်ဖက်က ကျွန်ုပ်အား မန်နေဂျာအသစ်နှင့် မိတ်ဆက်ပေးခဲ့သည်။"}
  },
  "技術": {
    meaning: {"id": "teknologi ; teknik keahlian", "en": "technology; technical skill", "my": "နည်းပညာ ၊ ကျွမ်းကျင်မှု"},
    notes: {"id": "※ Rekayasa sains atau keahlian teknis khusus.", "en": "※ Engineering methods and technical mastery.", "my": "※ အင်ဂျင်နီယာနှင့် အဆင့်မြင့် နည်းပညာ ကျွမ်းကျင်မှု။"},
    exampleTranslation: {"id": "Perkembangan teknologi kecerdasan buatan sangat pesat.", "en": "The development of AI technology is remarkably rapid.", "my": "ဉာဏ်ရည်တု နည်းပညာ တိုးတက်မှုမှာ အလွန်လျင်မြန်ပါသည်။"}
  },
  "発表": {
    meaning: {"id": "presentasi ; pengumuman resmi", "en": "presentation; announcement", "my": "ထုတ်ပြန်ကြေညာခြင်း ၊ တင်ပြခြင်း"},
    notes: {"id": "※ Menyampaikan hasil riset atau merilis berita resmi.", "en": "※ Public announcement or research presentation.", "my": "※ သုတေသနရလဒ် တင်ပြခြင်း သို့မဟုတ် တရားဝင် ကြေညာခြင်း။"},
    exampleTranslation: {"id": "Peneliti mengumumkan hasil temuan terbarunya di konferensi.", "en": "Researchers presented their latest findings at the conference.", "my": "သုတေသီများသည် ညီလာခံတွင် နောက်ဆုံးတွေ့ရှိချက်များကို တင်ပြခဲ့ကြသည်။"}
  },
  "結婚": {
    meaning: {"id": "pernikahan ; membina rumah tangga", "en": "marriage; wedding", "my": "ထိမ်းမြားလက်ထပ်ခြင်း"},
    notes: {"id": "※ Ikatan perkawinan suami istri.", "en": "※ Matrimony and wedding celebration.", "my": "※ ဇနီးမောင်နှံအဖြစ် ပေါင်းသင်းမင်္ဂလာဆောင်ခြင်း။"},
    exampleTranslation: {"id": "Sahabat saya melangsungkan pesta pernikahan yang meriah.", "en": "My close friend held a joyful wedding celebration.", "my": "ကျွန်ုပ်၏ သူငယ်ချင်းသည် စည်ကားသော မင်္ဂလာပွဲကို ကျင်းပခဲ့သည်။"}
  },
  "資格": {
    meaning: {"id": "sertifikasi keahlian ; kualifikasi resmi", "en": "qualification; certificate", "my": "အရည်အချင်းလက်မှတ် ၊ အရည်အချင်းသတ်မှတ်ချက်"},
    notes: {"id": "※ Ijazah lisensi profesi atau kelayakan hukum.", "en": "※ Official certification or professional credentials.", "my": "※ တရားဝင် အသိအမှတ်ပြု အရည်အချင်း သို့မဟုတ် လက်မှတ်။"},
    exampleTranslation: {"id": "Belajar giat demi meraih sertifikasi keahlian profesional.", "en": "Studying hard to obtain professional certification.", "my": "ကျွမ်းကျင်မှုလက်မှတ် ရရှိရန်အတွက် ကြိုးစားလေ့လာနေသည်။"}
  },
  "予算": {
    meaning: {"id": "anggaran biaya rencana", "en": "budget; estimated cost", "my": "ဘတ်ဂျက်ငွေ ၊ လျာထားစရိတ်"},
    notes: {"id": "※ Perkiraan alokasi dana proyek ke depan.", "en": "※ Financial budget allocation.", "my": "※ စီမံကိန်းအတွက် ခန့်မှန်းလျာထားသော ကုန်ကျစရိတ်။"},
    exampleTranslation: {"id": "Menyusun anggaran biaya untuk proyek kuartal depan.", "en": "Formulating the project budget for the next quarter.", "my": "နောက်သုံးလပတ် စီမံကိန်းအတွက် ဘတ်ဂျက်စရိတ်ကို ရေးဆွဲသည်။"}
  },
  "効率": {
    meaning: {"id": "efisiensi kerja ; produktivitas rasio", "en": "efficiency; performance ratio", "my": "လုပ်ငန်းစွမ်းဆောင်ရည် ၊ ထိရောက်မှု"},
    notes: {"id": "※ Rasio hasil yang dicapai dibandingkan tenaga/waktu.", "en": "※ Operational efficiency ratio.", "my": "※ အချိန်နှင့် လုပ်အား အနည်းဆုံးဖြင့် အကျိုးရလဒ် ထွက်ပေါ်မှု။"},
    exampleTranslation: {"id": "Meningkatkan efisiensi kerja kantor melalui otomatisasi.", "en": "Improving office work efficiency through automation.", "my": "အလိုအလျောက်စနစ်ဖြင့် ရုံးလုပ်ငန်း ထိရောက်မှုကို မြှင့်တင်သည်။"}
  },
  "需要": {
    meaning: {"id": "permintaan pasar ; kebutuhan konsumen", "en": "market demand; consumer need", "my": "ဝယ်လိုအား ၊ လိုအပ်ချက်"},
    notes: {"id": "※ Besarnya keinginan pasar untuk membeli.", "en": "※ Economic demand from consumers.", "my": "※ ဈေးကွက်အတွင်း ဝယ်ယူလိုသော ဆန္ဒနှင့် လိုအပ်ချက်။"},
    exampleTranslation: {"id": "Permintaan terhadap kendaraan ramah lingkungan melonjak tinggi.", "en": "Demand for eco-friendly vehicles surged dramatically.", "my": "သဘာဝပတ်ဝန်းကျင်ထိန်းသိမ်းရေး ကားများအပေါ် ဝယ်လိုအား အလွန်မြင့်တက်လာသည်။"}
  },
  "供給": {
    meaning: {"id": "penawaran ; pasokan stok barang", "en": "supply; provision", "my": "ရောင်းလိုအား ၊ ပံ့ပိုးပေးမှု"},
    notes: {"id": "※ Ketersediaan pasokan barang untuk didistribusikan.", "en": "※ Material provision or market supply.", "my": "※ ဈေးကွက်သို့ ကုန်ပစ္စည်း ပံ့ပိုးဖြန့်ဖြူးပေးမှု။"},
    exampleTranslation: {"id": "Memastikan kelancaran pasokan bahan baku makanan.", "en": "Ensuring a steady supply of food raw materials.", "my": "စားသောက်ကုန် ကုန်ကြမ်းပစ္စည်းများ ထောက်ပံ့မှုကို တည်ငြိမ်စေသည်။"}
  },
  "提携": {
    meaning: {"id": "kemitraan strategis ; aliansi bisnis", "en": "business partnership; strategic alliance", "my": "မဟာဗျူဟာမြောက် မိတ်ဖက်ပူးပေါင်းမှု"},
    notes: {"id": "※ Dua perusahaan yang berkolaborasi dalam bisnis.", "en": "※ Strategic corporate partnership or alliance.", "my": "※ စီးပွားရေးလုပ်ငန်းများအကြား မဟာဗျူဟာမြောက် ပူးပေါင်းဆောင်ရွက်ခြင်း။"},
    exampleTranslation: {"id": "Kedua perusahaan menjalin kemitraan strategis untuk teknologi baru.", "en": "Both companies entered a strategic partnership for new tech.", "my": "ကုမ္ပဏီနှစ်ခုသည် နည်းပညာသစ်အတွက် မဟာဗျူဟာမြောက် မိတ်ဖက်ပူးပေါင်းခဲ့ကြသည်။"}
  },
  "懸念": {
    meaning: {"id": "kekhawatiran mendalam ; rasa waswas", "en": "deep concern; apprehension", "my": "စိုးရိမ်မကင်းဖြစ်မှု ၊ သံသယ"},
    notes: {"id": "※ Rasa cemas bahwa sesuatu yang buruk akan terjadi.", "en": "※ Grave anxiety or deep apprehension.", "my": "※ မကောင်းသောအရာ ဖြစ်လာမည်ကို လေးနက်စွာ စိုးရိမ်ပူပန်ခြင်း။"},
    exampleTranslation: {"id": "Muncul kekhawatiran atas lonjakan harga komoditas pangan.", "en": "Deep concerns arose over soaring food prices.", "my": "စားသောက်ကုန်ဈေးနှုန်းများ မြင့်တက်လာမှုအပေါ် စိုးရိမ်မကင်းမှုများ ပေါ်ပေါက်လာခဲ့သည်။"}
  },
};

export const KANJI_TRANSLATIONS: Record<string, LocalizedKanjiData> = {
  "間": {
    "meanings": {
      "id": [
        "jeda",
        "antara",
        "ruang"
      ],
      "en": [
        "interval",
        "space",
        "between"
      ],
      "my": [
        "ကြား",
        "အကွာအဝေး",
        "နေရာလွတ်"
      ]
    },
    "radicalMeaning": {
      "id": "mengurung seperti gerbang",
      "en": "enclosing like a gate",
      "my": "တံခါးကဲ့သို့ ပိတ်ဆို့ထားခြင်း"
    }
  },
  "隔": {
    "meanings": {
      "id": [
        "memisahkan",
        "berjarak"
      ],
      "en": [
        "isolate",
        "distance",
        "separate"
      ],
      "my": [
        "ခွဲခြားသည်",
        "အကွာအဝေးရှိသည်"
      ]
    },
    "radicalMeaning": {
      "id": "bukit di sisi kiri",
      "en": "hill on the left",
      "my": "ဘယ်ဘက်ရှိ တောင်ကုန်း"
    }
  },
  "焦": {
    "meanings": {
      "id": [
        "hangus",
        "tergesa-gesa"
      ],
      "en": [
        "burn",
        "scorch",
        "hurry"
      ],
      "my": [
        "ကျွမ်းသည်",
        "စိုးရိမ်တကြီးဖြစ်သည်"
      ]
    },
    "radicalMeaning": {
      "id": "api membakar di bawah",
      "en": "fire burning below",
      "my": "အောက်ဘက်မှ မီးလောင်ကျွမ်းခြင်း"
    }
  },
  "防": {
    "meanings": {
      "id": [
        "mencegah",
        "bertahan"
      ],
      "en": [
        "prevent",
        "protect",
        "defend"
      ],
      "my": [
        "ကာကွယ်သည်",
        "ခုခံသည်"
      ]
    },
    "radicalMeaning": {
      "id": "bukit pertahanan",
      "en": "defensive hill",
      "my": "ကာကွယ်ရေး တောင်ကုန်း"
    }
  },
  "止": {
    "meanings": {
      "id": [
        "berhenti",
        "menahan"
      ],
      "en": [
        "stop",
        "halt"
      ],
      "my": [
        "ရပ်တန့်သည်"
      ]
    },
    "radicalMeaning": {
      "id": "jejak kaki berhenti",
      "en": "footstep stopping",
      "my": "ခြေရာ ရပ်တန့်ခြင်း"
    }
  },
  "煙": {
    "meanings": {
      "id": [
        "asap"
      ],
      "en": [
        "smoke",
        "fumes"
      ],
      "my": [
        "မီးခိုး"
      ]
    },
    "radicalMeaning": {
      "id": "api mengeluarkan asap",
      "en": "fire giving off smoke",
      "my": "မီးခိုးထွက်သော မီး"
    }
  },
  "誤": {
    "meanings": {
      "id": [
        "kesalahan",
        "keliru"
      ],
      "en": [
        "mistake",
        "error",
        "wrong"
      ],
      "my": [
        "အမှား",
        "လွဲမှားခြင်း"
      ]
    },
    "radicalMeaning": {
      "id": "kata-kata salah",
      "en": "faulty words",
      "my": "စကားလုံး အမှား"
    }
  },
  "重": {
    "meanings": {
      "id": [
        "berat",
        "tumpuk"
      ],
      "en": [
        "heavy",
        "pile up",
        "important"
      ],
      "my": [
        "လေးလံသော",
        "ထပ်နေသော"
      ]
    },
    "radicalMeaning": {
      "id": "lapisan bumi bertumpuk",
      "en": "earth layers piled up",
      "my": "မြေလွှာများ ထပ်နေခြင်း"
    }
  },
  "幼": {
    "meanings": {
      "id": [
        "muda",
        "kecil",
        "kekanak-kanakan"
      ],
      "en": [
        "infancy",
        "childhood",
        "very young"
      ],
      "my": [
        "ငယ်ရွယ်သော",
        "ကလေးဆန်သော"
      ]
    },
    "radicalMeaning": {
      "id": "benang kecil halus",
      "en": "fine small threads",
      "my": "နုနယ်သော ချည်မျှင်လေးများ"
    }
  },
  "屋": {
    "meanings": {
      "id": [
        "atap",
        "rumah",
        "toko"
      ],
      "en": [
        "roof",
        "house",
        "shop"
      ],
      "my": [
        "ခေါင်မိုး",
        "အိမ်",
        "ဆိုင်"
      ]
    },
    "radicalMeaning": {
      "id": "atap rumah menaungi",
      "en": "sheltering roof",
      "my": "အကာအကွယ် ခေါင်မိုး"
    }
  },
  "根": {
    "meanings": {
      "id": [
        "akar",
        "pondasi"
      ],
      "en": [
        "root",
        "foundation"
      ],
      "my": [
        "အမြစ်",
        "အခြေခံ"
      ]
    },
    "radicalMeaning": {
      "id": "kayu berakar kuat",
      "en": "deep wooden roots",
      "my": "မြဲမြံသော သစ်သားအမြစ်"
    }
  },
  "訂": {
    "meanings": {
      "id": [
        "mengoreksi"
      ],
      "en": [
        "revise",
        "correct"
      ],
      "my": [
        "ပြင်ဆင်သည်"
      ]
    },
    "radicalMeaning": {
      "id": "kata-kata dibenahi",
      "en": "corrected words",
      "my": "စကားလုံးများ ပြင်ဆင်ခြင်း"
    }
  },
  "正": {
    "meanings": {
      "id": [
        "benar",
        "tepat"
      ],
      "en": [
        "correct",
        "righteous",
        "exact"
      ],
      "my": [
        "မှန်ကန်သော",
        "တိကျသော"
      ]
    },
    "radicalMeaning": {
      "id": "berjalan ke arah benar",
      "en": "walking in the right path",
      "my": "မှန်ကန်သော လမ်းကြောင်းသို့ လျှောက်လှမ်းခြင်း"
    }
  },
  "歩": {
    "meanings": {
      "id": [
        "berjalan"
      ],
      "en": [
        "walk",
        "step"
      ],
      "my": [
        "လမ်းလျှောက်သည်"
      ]
    },
    "radicalMeaning": {
      "id": "langkah kaki",
      "en": "footsteps",
      "my": "ခြေလှမ်းများ"
    }
  },
  "出": {
    "meanings": {
      "id": [
        "keluar",
        "muncul"
      ],
      "en": [
        "exit",
        "emerge",
        "go out"
      ],
      "my": [
        "ထွက်သည်",
        "ပေါ်ထွက်သည်"
      ]
    },
    "radicalMeaning": {
      "id": "tunas keluar ke atas",
      "en": "sprout emerging upward",
      "my": "အထက်သို့ ပေါက်ထွက်လာသော အညွန့်"
    }
  },
  "産": {
    "meanings": {
      "id": [
        "melahirkan",
        "menghasilkan"
      ],
      "en": [
        "give birth",
        "produce"
      ],
      "my": [
        "မွေးဖွားသည်",
        "ထုတ်လုပ်သည်"
      ]
    },
    "radicalMeaning": {
      "id": "kelahiran hidup baru",
      "en": "birth of new life",
      "my": "အသက်အသစ် မွေးဖွားခြင်း"
    }
  },
  "帯": {
    "meanings": {
      "id": [
        "sabuk",
        "rentang waktu"
      ],
      "en": [
        "belt",
        "band",
        "time zone"
      ],
      "my": [
        "ခါးပတ်",
        "အချိန်အပိုင်းအခြား"
      ]
    },
    "radicalMeaning": {
      "id": "kain melingkar",
      "en": "wrapped cloth",
      "my": "ပတ်ရစ်ထားသော အထည်"
    }
  },
  "瞬": {
    "meanings": {
      "id": [
        "sekejap",
        "berkedip"
      ],
      "en": [
        "blink",
        "instant",
        "moment"
      ],
      "my": [
        "မျက်စိတစ်မှိတ်",
        "ခေတ္တခဏ"
      ]
    },
    "radicalMeaning": {
      "id": "mata berkedip cepat",
      "en": "rapidly blinking eye",
      "my": "မျက်စိ အမြန်မှိတ်ခြင်း"
    }
  },
  "知": {
    "meanings": {
      "id": [
        "mengetahui"
      ],
      "en": [
        "know",
        "wisdom"
      ],
      "my": [
        "သိရှိသည်"
      ]
    },
    "radicalMeaning": {
      "id": "tahu cepat bagai panah",
      "en": "swift as an arrow",
      "my": "မြှားကဲ့သို့ လျင်မြန်စွာ သိခြင်း"
    }
  },
  "短": {
    "meanings": {
      "id": [
        "pendek",
        "singkat"
      ],
      "en": [
        "short",
        "brief"
      ],
      "my": [
        "တိုတောင်းသော"
      ]
    },
    "radicalMeaning": {
      "id": "panah pendek",
      "en": "short arrow",
      "my": "တိုသော မြှား"
    }
  },
  "長": {
    "meanings": {
      "id": [
        "panjang",
        "lama"
      ],
      "en": [
        "long",
        "leader"
      ],
      "my": [
        "ရှည်လျားသော",
        "ခေါင်းဆောင်"
      ]
    },
    "radicalMeaning": {
      "id": "rambut panjang terurai",
      "en": "flowing long hair",
      "my": "ရှည်လျားသော ဆံနွယ်"
    }
  },
  "区": {
    "meanings": {
      "id": [
        "wilayah",
        "membedakan"
      ],
      "en": [
        "district",
        "ward",
        "divide"
      ],
      "my": [
        "ရပ်ကွက်",
        "ခွဲခြားသည်"
      ]
    },
    "radicalMeaning": {
      "id": "kotak pembatas bagian",
      "en": "boxed partition",
      "my": "သေတ္တာအပိုင်းအခြား"
    }
  },
  "別": {
    "meanings": {
      "id": [
        "memisahkan",
        "lain",
        "berbeda"
      ],
      "en": [
        "separate",
        "another",
        "different"
      ],
      "my": [
        "ခွဲထုတ်သည်",
        "သီးခြား",
        "အခြား"
      ]
    },
    "radicalMeaning": {
      "id": "pisau pemisah",
      "en": "dividing knife",
      "my": "ခွဲခြမ်းသော ဓား"
    }
  },
  "煮": {
    "meanings": {
      "id": [
        "merebus",
        "mendidihkan"
      ],
      "en": [
        "boil",
        "cook",
        "simmer"
      ],
      "my": [
        "ပြုတ်သည်",
        "ချက်သည်"
      ]
    },
    "radicalMeaning": {
      "id": "api memasak di bawah",
      "en": "cooking with fire below",
      "my": "အောက်ဘက်မှ မီးဖြင့်ချက်ပြုတ်ခြင်း"
    }
  },
  "込": {
    "meanings": {
      "id": [
        "masuk ke dalam",
        "padat"
      ],
      "en": [
        "crowded",
        "into",
        "include"
      ],
      "my": [
        "ထည့်သွင်းသည်",
        "ပြည့်ကြပ်သည်"
      ]
    },
    "radicalMeaning": {
      "id": "masuk bergerak ke dalam",
      "en": "moving inwards",
      "my": "အတွင်းသို့ ရွေ့လျားဝင်ရောက်ခြင်း"
    }
  }
,
  
};
// Also index by ID for direct lookup
export const KOTOBA_BY_ID: Record<string, LocalizedWordData> = {
  "1": {
    "meaning": {
      "id": "jarak ; sela",
      "en": "space; interval",
      "my": "ကြားအကွာအဝေး ၊ အချိန်ပိုင်း"
    },
    "notes": {
      "id": "※ Dipakai untuk jarak ruang maupun waktu.",
      "en": "※ Used for intervals of space and time.",
      "my": "※ နေရာလွတ်နှင့် အချိန်ပိုင်းခြားမှု နှစ်မျိုးလုံးအတွက် သုံးသည်။"
    },
    "exampleTranslation": {
      "id": "Yang menentukan adalah jarak antara satu bangunan dengan bangunan lainnya.",
      "en": "What matters is the distance between one building and another.",
      "my": "အဓိကဆုံးဖြတ်သည်မှာ အဆောက်အအုံတစ်ခုနှင့်တစ်ခုကြား အကွာအဝေးဖြစ်သည်။"
    }
  },
  "2": {
    "meaning": {
      "id": "hangus ; gosong",
      "en": "to burn; to scorch",
      "my": "ကျွမ်းသည် ၊ တူးသည်"
    },
    "notes": {
      "id": "※ Terbakar hingga gosong/berwarna hitam karena panas.",
      "en": "※ Burnt until blackened from heat.",
      "my": "※ အပူကြောင့် မဲတူးသွားသည်အထိ ကျွမ်းလောင်ခြင်း။"
    },
    "exampleTranslation": {
      "id": "Ikannya hangus menghitam.",
      "en": "The fish got completely burnt black.",
      "my": "ငါးသည် မည်းနက်သွားအောင် တူးသွားသည်။"
    }
  },
  "3": {
    "meaning": {
      "id": "pencegahan",
      "en": "prevention; check",
      "my": "ကာကွယ်တားဆီးခြင်း"
    },
    "notes": {
      "id": "※ Mencegah terjadinya hal yang tidak diinginkan.",
      "en": "※ Preventing undesirable incidents.",
      "my": "※ မလိုလားအပ်သော အရာများ မဖြစ်ပွားအောင် ကြိုတင်ကာကွယ်ခြင်း။"
    },
    "exampleTranslation": {
      "id": "Berupaya keras dalam pencegahan kecelakaan.",
      "en": "Strive hard in accident prevention.",
      "my": "မတော်တဆမှုများ ကာကွယ်တားဆီးရေးတွင် အထူးကြိုးပမ်းသည်။"
    }
  },
  "4": {
    "meaning": {
      "id": "asap",
      "en": "smoke; fumes",
      "my": "မီးခိုး"
    },
    "notes": {
      "id": "※ Asap yang membubung dari kebakaran atau rokok.",
      "en": "※ Smoke rising from fires or tobacco.",
      "my": "※ မီးလောင်မှု သို့မဟုတ် စီးကရက်မှ ထွက်လာသော မီးခိုးငွေ့။"
    },
    "exampleTranslation": {
      "id": "Asap memenuhi seluruh ruangan.",
      "en": "Smoke filled the entire room.",
      "my": "အခန်းတစ်ခုလုံး မီးခိုးများ ဖုံးလွှမ်းနေသည်။"
    }
  },
  "5": {
    "meaning": {
      "id": "sebagian ; satu bagian",
      "en": "part; portion",
      "my": "တစ်စိတ်တစ်ပိုင်း"
    },
    "notes": {
      "id": "※ Bagian dari keseluruhan.",
      "en": "※ Part of the whole.",
      "my": "※ အလုံးစုံ၏ တစ်စိတ်တစ်ပိုင်း။"
    },
    "exampleTranslation": {
      "id": "Mengalihkan sebagian gaji ke tabungan.",
      "en": "Allocating part of the salary to savings.",
      "my": "လစာ၏ တစ်စိတ်တစ်ပိုင်းကို စုဆောင်းငွေအဖြစ် ထည့်ထားသည်။"
    }
  },
  "6": {
    "meaning": {
      "id": "kesalahan ; kekeliruan",
      "en": "error; mistake",
      "my": "အမှား ၊ လွဲချော်မှု"
    },
    "notes": {
      "id": "※ Kesalahan yang tidak disengaja.",
      "en": "※ Unintentional error.",
      "my": "※ ရည်ရွယ်ချက်မပါဘဲ မှားယွင်းသွားသောအမှား။"
    },
    "exampleTranslation": {
      "id": "Ada kesalahan dalam perhitungan.",
      "en": "There was an error in the calculation.",
      "my": "တွက်ချက်မှုတွင် အမှားအယွင်း ရှိခဲ့သည်။"
    }
  },
  "7": {
    "meaning": {
      "id": "bertumpuk ; tumpang tindih",
      "en": "to pile up; overlap",
      "my": "ထပ်နေသည် ၊ တစ်ပြိုင်နက်ဖြစ်ပွားသည်"
    },
    "notes": {
      "id": "※ Jadwal atau barang bertumpuk secara bersamaan.",
      "en": "※ Schedules or items overlapping simultaneously.",
      "my": "※ အချိန်ဇယား သို့မဟုတ် ပစ္စည်းများ တစ်ပြိုင်နက် ထပ်နေခြင်း။"
    },
    "exampleTranslation": {
      "id": "Beberapa hal buruk bertumpuk terjadi bersamaan.",
      "en": "Several bad things happened together at once.",
      "my": "မကောင်းသောအရာများ တစ်ခုပြီးတစ်ခု ဆက်တိုက်ထပ်ဖြစ်ခဲ့သည်။"
    }
  },
  "8": {
    "meaning": {
      "id": "mulai berjalan",
      "en": "to start walking",
      "my": "စတင်လမ်းလျှောက်သည်"
    },
    "notes": {
      "id": "※ Gerakan melangkah dan mulai berjalan.",
      "en": "※ Initiating movement by walking forward.",
      "my": "※ ခြေလှမ်းစတင်လှမ်းပြီး လမ်းလျှောက်ခြင်း။"
    },
    "exampleTranslation": {
      "id": "Begitu lampu hijau, semua orang mulai berjalan serentak.",
      "en": "As soon as the light turned green, everyone started walking at once.",
      "my": "မီးစိမ်းသည်နှင့် လူအားလုံး တစ်ပြိုင်နက် စတင်လမ်းလျှောက်ကြသည်။"
    }
  },
  "9": {
    "meaning": {
      "id": "persalinan ; kelahiran anak",
      "en": "childbirth; delivery",
      "my": "ကလေးမွေးဖွားခြင်း"
    },
    "notes": {
      "id": "※ Proses melahirkan bayi.",
      "en": "※ Process of giving birth to a baby.",
      "my": "※ ရင်သွေးငယ်ကို မွေးဖွားပေးသည့် ဖြစ်စဉ်။"
    },
    "exampleTranslation": {
      "id": "Melahirkan bayi laki-laki dengan selamat.",
      "en": "Safely gave birth to a baby boy.",
      "my": "သားယောက်ျားလေးကို ဘေးကင်းချောမွေ့စွာ မွေးဖွားခဲ့သည်။"
    }
  },
  "10": {
    "meaning": {
      "id": "masih kecil ; belia",
      "en": "very young; childish",
      "my": "ငယ်ရွယ်သော ၊ ကလေးဆန်သော"
    },
    "notes": {
      "id": "※ Usia masih belia atau sifat kekanak-kanakan.",
      "en": "※ Tender age or childish innocence.",
      "my": "※ အသက်အရွယ် နုနယ်ငယ်ရွယ်ခြင်း သို့မဟုတ် ကလေးစိတ်မပျောက်ခြင်း။"
    },
    "exampleTranslation": {
      "id": "Ingatan masa kecil kembali terbayang.",
      "en": "Memories from childhood come flooding back.",
      "my": "ကလေးဘဝက အမှတ်တရများ ပြန်လည်ပေါ်ပေါက်လာသည်။"
    }
  },
  "11": {
    "meaning": {
      "id": "atap",
      "en": "roof",
      "my": "ခေါင်မိုး"
    },
    "notes": {
      "id": "※ Atap bangunan.",
      "en": "※ Roof of a building.",
      "my": "※ အဆောက်အအုံ၏ အပေါ်ခေါင်မိုး။"
    },
    "exampleTranslation": {
      "id": "Seekor burung hinggap di atas atap.",
      "en": "A bird is perched on top of the roof.",
      "my": "ခေါင်မိုးပေါ်တွင် ငှက်တစ်ကောင် နားနေသည်။"
    }
  },
  "12": {
    "meaning": {
      "id": "koreksi ; revisi",
      "en": "correction; revision",
      "my": "ပြင်ဆင်ချက် ၊ အမှားပြင်ခြင်း"
    },
    "notes": {
      "id": "※ Memperbaiki teks, data, atau ucapan yang keliru.",
      "en": "※ Rectifying incorrect text, data, or words.",
      "my": "※ မှားယွင်းနေသော စာသား၊ အချက်အလက် သို့မဟုတ် စကားကို ပြင်ဆင်ခြင်း။"
    },
    "exampleTranslation": {
      "id": "Tolong koreksi salah ketik.",
      "en": "Please correct the typo.",
      "my": "စာလုံးပေါင်းမှားယွင်းမှုကို ကျေးဇူးပြု၍ ပြင်ဆင်ပေးပါ။"
    }
  },
  "13": {
    "meaning": {
      "id": "keliru ; salah langkah",
      "en": "to make a mistake; err",
      "my": "မှားယွင်းသည် ၊ လမ်းမှားသွားသည်"
    },
    "notes": {
      "id": "※ Berbeda dengan 謝る (minta maaf), ini berarti salah bertindak.",
      "en": "※ Unlike 謝る (to apologize), this means to make an erroneous decision.",
      "my": "※ 謝る (တောင်းပန်သည်) နှင့်မတူဘဲ၊ လုပ်ရပ်မှားယွင်းသွားခြင်းကို ဆိုလိုသည်။"
    },
    "exampleTranslation": {
      "id": "Jika salah menilai keputusan, akan jadi masalah besar.",
      "en": "If you make a mistaken judgment, it will become a serious issue.",
      "my": "ဆုံးဖြတ်ချက် လွဲမှားသွားပါက ပြဿနာကြီး ဖြစ်လာလိမ့်မည်။"
    }
  },
  "14": {
    "meaning": {
      "id": "memenuhi (syarat, standar)",
      "en": "to satisfy; fulfill",
      "my": "ပြည့်မီသည် ၊ ကျေနပ်စေသည်"
    },
    "notes": {
      "id": "※ Memenuhi standar, kualifikasi atau kebutuhan batin.",
      "en": "※ Fulfilling standards, qualifications, or personal needs.",
      "my": "※ စံချိန်စံညွှန်း၊ သတ်မှတ်ချက် သို့မဟုတ် လိုအပ်ချက်ကို ပြည့်မီစေခြင်း။"
    },
    "exampleTranslation": {
      "id": "Memenuhi kriteria kelulusan.",
      "en": "Meets all passing criteria.",
      "my": "အောင်မြင်မှု သတ်မှတ်ချက်များကို ပြည့်မီသည်။"
    }
  },
  "15": {
    "meaning": {
      "id": "meminta ; menginginkan ; mencari",
      "en": "to seek; request",
      "my": "တောင်းဆိုသည် ၊ လိုလားသည် ၊ ရှာဖွေသည်"
    },
    "notes": {
      "id": "※ Mengharapkan bantuan atau mencari solusi.",
      "en": "※ Seeking assistance or solutions.",
      "my": "※ အကူအညီတောင်းခံခြင်း သို့မဟုတ် ဖြေရှင်းချက်ရှာဖွေခြင်း။"
    },
    "exampleTranslation": {
      "id": "Suara orang-orang yang menginginkan perdamaian.",
      "en": "The voices of people seeking peace.",
      "my": "ငြိမ်းချမ်းရေးကို လိုလားသော ပြည်သူတို့၏ အသံ။"
    }
  },
  "16": {
    "meaning": {
      "id": "rentang waktu dalam sehari",
      "en": "time slot; time zone",
      "my": "တစ်နေ့တာအတွင်း အချိန်အပိုင်းအခြား"
    },
    "notes": {
      "id": "※ Periode jam tertentu.",
      "en": "※ A specific period of hours in a day.",
      "my": "※ တစ်နေ့တာအတွင်း သတ်မှတ်ထားသော အချိန်ကာလအပိုင်းအခြား။"
    },
    "exampleTranslation": {
      "id": "Menghindari rentang waktu yang ramai padat.",
      "en": "Avoid crowded peak hours.",
      "my": "လူရှုပ်ထွေးသော အချိန်ပိုင်းကို ရှောင်ကြဉ်သည်။"
    }
  },
  "17": {
    "meaning": {
      "id": "detik itu juga ; sesaat",
      "en": "moment; instant",
      "my": "ချက်ချင်းအခိုက်အတန့် ၊ ခေတ္တခဏ"
    },
    "notes": {
      "id": "※ Waktu yang sangat singkat sekejap mata.",
      "en": "※ An extremely brief instant in the blink of an eye.",
      "my": "※ မျက်စိတစ်မှိတ်အတွင်း အလွန်တိုတောင်းသော အခိုက်အတန့်။"
    },
    "exampleTranslation": {
      "id": "Pada detik itu juga, petir menyambar.",
      "en": "At that very instant, lightning struck.",
      "my": "ထိုအခိုက်အတန့်၌ပင် မိုးကြိုးပစ်ချခဲ့သည်။"
    }
  },
  "18": {
    "meaning": {
      "id": "tanpa disadari",
      "en": "before one knows it",
      "my": "သတိမထားမိဘဲ ၊ မသိလိုက်ဘဲ"
    },
    "notes": {
      "id": "※ Tanpa disadari waktu atau situasi berubah.",
      "en": "※ Time or circumstances passing unnoticed.",
      "my": "※ မိမိကိုယ်ကို သတိမပြုမိလိုက်ဘဲ အချိန်ကုန်လွန်သွားခြင်း။"
    },
    "exampleTranslation": {
      "id": "Tanpa disadari hari sudah senja.",
      "en": "Before I knew it, night had already fallen.",
      "my": "မသိလိုက်ဘဲ နေဝင်ရီတရော ရောက်ရှိသွားခဲ့ပြီ။"
    }
  },
  "19": {
    "meaning": {
      "id": "waktu singkat",
      "en": "short time",
      "my": "အချိန်တိုတို"
    },
    "notes": {
      "id": "※ Durasi waktu yang pendek.",
      "en": "※ A brief length of duration.",
      "my": "※ အချိန်တိုတောင်းသော ကာလ။"
    },
    "exampleTranslation": {
      "id": "Belajar efisien dalam waktu singkat.",
      "en": "Study efficiently within a short time.",
      "my": "အချိန်တိုတိုအတွင်း ထိရောက်စွာ လေ့လာသည်။"
    }
  },
  "20": {
    "meaning": {
      "id": "waktu yang lama ; berjam-jam",
      "en": "long time; hours",
      "my": "အချိန်ကြာမြင့်စွာ ၊ နာရီပေါင်းများစွာ"
    },
    "notes": {
      "id": "※ Berlangsung berjam-jam.",
      "en": "※ Lasting for several hours.",
      "my": "※ နာရီပေါင်းများစွာ ကြာမြင့်စွာ ဖြစ်ပွားခြင်း။"
    },
    "exampleTranslation": {
      "id": "Operasi yang berlangsung lama telah selesai.",
      "en": "The lengthy operation was finally completed.",
      "my": "အချိန်ကြာမြင့်စွာ ပြုလုပ်ခဲ့သော ခွဲစိတ်မှု ပြီးဆုံးသွားသည်။"
    }
  },
  "21": {
    "meaning": {
      "id": "pembedaan ; pemisahan",
      "en": "distinction; differentiation",
      "my": "ခွဲခြားခြင်း ၊ သီးခြားခွဲထုတ်ခြင်း"
    },
    "notes": {
      "id": "※ 区別 → tindakan MEMISAHKAN dua hal (区別がつく) .\n※ Perbedaannya sendiri → 相違 atau 違い。",
      "en": "※ 区別 → the act of separating/distinguishing two items.\n※ The difference itself → 相違 or 違い.",
      "my": "※ 区別 → အရာနှစ်ခုကို ခွဲခြားသိမြင်သော လုပ်ဆောင်ချက်။\n※ ၎င်းကွာခြားချက်ကိုယ်တိုင် → 相違 သို့မဟုတ် 違い။"
    },
    "exampleTranslation": {
      "id": "Membedakan antara yang baik dan buruk.",
      "en": "Distinguish between right and wrong.",
      "my": "အကောင်းနှင့် အဆိုးကို ခွဲခြားသိမြင်သည်။"
    }
  },
  "22": {
    "meaning": {
      "id": "merebus lama hingga meresap",
      "en": "to stew; simmer",
      "my": "ဟင်းရည်အရသာစိမ့်ဝင်အောင် ချက်ပြုတ်သည်"
    },
    "notes": {
      "id": "※ 込む di sini berarti lama dan sampai ke dalam — bukan sekadar 煮る。",
      "en": "※ 込む denotes deep, sustained simmering — beyond simple 煮る.",
      "my": "※ 込む သည် ရိုးရိုးပြုတ်ရုံသာမက အတွင်းထိ စိမ့်ဝင်အောင် အချိန်ကြာကြာ ချက်ပြုတ်ခြင်းကို ပြသည်။"
    },
    "exampleTranslation": {
      "id": "Merebus sup secara perlahan hingga meresap.",
      "en": "Slowly simmer the soup until flavors blend thoroughly.",
      "my": "ဟင်းရည်ကို အေးအေးဆေးဆေး စိမ့်ဝင်အောင် ချက်ပြုတ်သည်။"
    }
  },
  "23": {
    "meaning": {
      "id": "meresap ; menyerap ke dalam",
      "en": "to soak into; permeate",
      "my": "စိမ့်ဝင်သည် ၊ စုပ်ယူသည်"
    },
    "notes": {
      "id": "※ Cairan meresap ke dalam kain, tanah, atau hati.",
      "en": "※ Liquids soaking deep into cloth, soil, or emotions.",
      "my": "※ အရည်သည် အဝတ်၊ မြေကြီး သို့မဟုတ် စိတ်နှလုံးထဲသို့ စိမ့်ဝင်သွားခြင်း။"
    },
    "exampleTranslation": {
      "id": "Rasa bumbu meresap ke dalam masakan.",
      "en": "The seasoning flavors soaked deeply into the dish.",
      "my": "ဟင်းခတ်အမွှေးအကြိုင်အရသာသည် ဟင်းထဲသို့ စိမ့်ဝင်သွားသည်။"
    }
  },
  "24": {
    "meaning": {
      "id": "merajut ; menganyam",
      "en": "to knit; braid",
      "my": "သိုးမွှေးထိုးသည် ၊ ကျစ်သည်"
    },
    "notes": {
      "id": "※ Menganyam benang atau rambut.",
      "en": "※ Knitting yarn or braiding strands.",
      "my": "※ သိုးမွှေးချည် ထိုးခြင်း သို့မဟုတ် ဆံပင်ကျစ်ခြင်း။"
    },
    "exampleTranslation": {
      "id": "Merajut baju hangat.",
      "en": "Knit a warm sweater.",
      "my": "ဆွယ်တာအင်္ကျီကို သိုးမွှေးထိုးသည်။"
    }
  },
  "25": {
    "meaning": {
      "id": "mengendur ; melonggar",
      "en": "to become loose; slacken",
      "my": "လျော့ရဲသည်"
    },
    "notes": {
      "id": "※ Tali atau ketegangan menjadi kendur.",
      "en": "※ Ropes or tension growing slack.",
      "my": "※ ကြိုး သို့မဟုတ် တင်းမာမှု လျော့ရဲသွားခြင်း။"
    },
    "exampleTranslation": {
      "id": "Talinya mengendur.",
      "en": "The rope has become loose.",
      "my": "ကြိုးသည် လျော့ရဲနေသည်။"
    }
  },
  "101": {
    "meaning": {
      "id": "menguasai sepenuhnya ; mengalahkan telak",
      "en": "overwhelm; overpower",
      "my": "အပြတ်အသတ်အနိုင်ရသည် ၊ လွှမ်းမိုးသည်"
    },
    "notes": {
      "id": "※ Ungkapan kekuatan atau keunggulan yang jauh melampaui lawan.",
      "en": "※ Overwhelming strength vastly surpassing the rival.",
      "my": "※ ပြိုင်ဘက်ထက် အဆပေါင်းများစွာ သာလွန်သော အင်အားကို ဖော်ပြခြင်း။"
    },
    "exampleTranslation": {
      "id": "Mengalahkan tim lawan dengan keunggulan yang mutlak.",
      "en": "Defeated the opponent team with overwhelming prowess.",
      "my": "ပြိုင်ဘက်အသင်းကို အပြတ်အသတ် အသာစီးဖြင့် အနိုင်ယူခဲ့သည်။"
    }
  },
  "102": {
    "meaning": {
      "id": "sangat mencolok ; signifikan",
      "en": "remarkable; striking",
      "my": "သိသိသာသာဖြစ်သော ၊ ထင်ရှားသော"
    },
    "notes": {
      "id": "※ Perubahan atau kemajuan yang sangat terlihat jelas oleh mata.",
      "en": "※ Conspicuous change or remarkable progress.",
      "my": "※ မျက်မြင်ထင်ရှားသော တိုးတက်ပြောင်းလဲမှု။"
    },
    "exampleTranslation": {
      "id": "Dalam beberapa tahun terakhir, kemajuan teknologi sangat pesat dan mencolok.",
      "en": "In recent years, technological progress has been remarkable.",
      "my": "မကြာသေးမီနှစ်များအတွင်း နည်းပညာတိုးတက်မှုသည် သိသိသာသာ ထင်ရှားလာသည်။"
    }
  },
  "103": {
    "meaning": {
      "id": "membingungkan ; rancu (mirip sehingga susah dibedakan)",
      "en": "confusing; misleading",
      "my": "ရှုပ်ထွေးစေသော ၊ ထင်ယောင်ထင်မှားဖြစ်စေသော"
    },
    "notes": {
      "id": "※ Dua hal yang begitu mirip sehingga rawan membuat salah sangka.",
      "en": "※ Items so similar they easily cause misunderstanding.",
      "my": "※ အလွန်ဆင်တူသဖြင့် အထင်မှားစေနိုင်သောအရာ။"
    },
    "exampleTranslation": {
      "id": "Namanya sangat mirip sehingga membingungkan.",
      "en": "The names are so alike that it is confusing.",
      "my": "နာမည်များ ဆင်တူလွန်းသဖြင့် ရှုပ်ထွေးစေသည်။"
    }
  },
  "104": {
    "meaning": {
      "id": "perbedaan ; ketidakcocokan fakta",
      "en": "difference; discrepancy",
      "my": "ကွဲပြားခြားနားမှု ၊ မကိုက်ညီမှု"
    },
    "notes": {
      "id": "※ Perbedaan resmi/formal antara data atau kesaksian.",
      "en": "※ Formal discrepancy between testimonies or datasets.",
      "my": "※ အချက်အလက်များ သို့မဟုတ် သက်သေထွက်ဆိုချက်များအကြား ကွဲလွဲမှု။"
    },
    "exampleTranslation": {
      "id": "Terdapat perbedaan besar dalam klaim kedua belah pihak.",
      "en": "There is a major discrepancy between both claims.",
      "my": "နှစ်ဖက်စလုံး၏ အခိုင်အမာပြောဆိုချက်များအကြား ကြီးမားသောကွဲလွဲမှု ရှိသည်။"
    }
  },
  "105": {
    "meaning": {
      "id": "koreksi ; pelurusan (keadaan buruk menjadi benar)",
      "en": "correction; rectification",
      "my": "တည့်မတ်ပြင်ဆင်ခြင်း"
    },
    "notes": {
      "id": "※ Memperbaiki ketimpangan, ketidakadilan, atau kesalahan sistemik.",
      "en": "※ Correcting inequalities or systemic defects.",
      "my": "※ မညီမျှမှု သို့မဟုတ် စနစ်ပိုင်းဆိုင်ရာ ချို့ယွင်းချက်ကို ပြင်ဆင်ခြင်း။"
    },
    "exampleTranslation": {
      "id": "Mengambil langkah-langkah untuk meluruskan kesenjangan.",
      "en": "Taking active measures to rectify the disparity.",
      "my": "ကွာဟချက်ကို တည့်မတ်ပြင်ဆင်ရန် အစီအမံများ ဆောင်ရွက်သည်။"
    }
  },
  "106": {
    "meaning": {
      "id": "kompromi ; jalan tengah",
      "en": "compromise; concession",
      "my": "အပြန်အလှန်လိုက်လျောမှု ၊ အပေးအယူလုပ်ခြင်း"
    },
    "notes": {
      "id": "※ Mengalah sedikit demi mencapai kesepakatan bersama.",
      "en": "※ Mutual concession to reach agreement.",
      "my": "※ အားလုံးသဘောတူညီမှုရရှိရန် အပြန်အလှန် လိုက်လျောအပေးအယူလုပ်ခြင်း။"
    },
    "exampleTranslation": {
      "id": "Kedua pihak saling mendekat dan mencapai kompromi.",
      "en": "Both parties moved toward each other and reached a compromise.",
      "my": "နှစ်ဦးနှစ်ဖက် ညှိနှိုင်းပြီး အပြန်အလှန်လိုက်လျောမှု ရရှိခဲ့သည်။"
    }
  },
  "107": {
    "meaning": {
      "id": "mencari-cari jalan keluar ; meraba-raba solusi",
      "en": "groping; searching for a way",
      "my": "လမ်းစရှာဖွေခြင်း ၊ စမ်းတဝါးဝါးရှာသည်"
    },
    "notes": {
      "id": "※ Berusaha keras menemukan solusi dalam kegelapan/ketidakpastian.",
      "en": "※ Exploring solutions amidst uncertainty.",
      "my": "※ မသေချာမရေရာမှုများကြားမှ နည်းလမ်းရှာဖွေရန် ကြိုးပမ်းခြင်း။"
    },
    "exampleTranslation": {
      "id": "Sedang mencari-cari model bisnis baru.",
      "en": "Currently exploring new business models.",
      "my": "စီးပွားရေးပုံစံသစ်တစ်ခုကို စမ်းတဝါးဝါး ရှာဖွေနေသည်။"
    }
  },
  "108": {
    "meaning": {
      "id": "menikmati ; menerima anugerah/manfaat",
      "en": "enjoyment; reception",
      "my": "ခံစားရယူသည် ၊ အကျိုးကျေးဇူးရရှိသည်"
    },
    "notes": {
      "id": "※ Menerima dan menikmati keuntungan, hak, atau alam bebas.",
      "en": "※ Receiving and relishing rights or blessings.",
      "my": "※ အခွင့်အရေး သို့မဟုတ် ကောင်းချီးအကျိုးကျေးဇူးများကို ခံစားရယူခြင်း။"
    },
    "exampleTranslation": {
      "id": "Menikmati sepenuhnya berkah dari perdamaian.",
      "en": "Fully enjoy the blessings of peace.",
      "my": "ငြိမ်းချမ်းရေး၏ အကျိုးကျေးဇူးများကို အပြည့်အဝ ခံစားရရှိသည်။"
    }
  },
  "109": {
    "meaning": {
      "id": "pemutusan ; isolasi ; pemblokiran",
      "en": "interception; isolation",
      "my": "ဖြတ်တောက်ခြင်း ၊ ပိတ်ဆို့ခြင်း"
    },
    "notes": {
      "id": "※ Memutus aliran listrik, informasi, atau lalu lintas.",
      "en": "※ Cutting off power, data, or traffic.",
      "my": "※ လျှပ်စစ်၊ သတင်းအချက်အလက် သို့မဟုတ် ယာဉ်ကြောကို ဖြတ်တောက်ခြင်း။"
    },
    "exampleTranslation": {
      "id": "Memutus arus lalu lintas pada saat darurat.",
      "en": "Cut off traffic flow during emergencies.",
      "my": "အရေးပေါ်အခြေအနေတွင် ယာဉ်ကြောကို ဖြတ်တောက်လိုက်သည်။"
    }
  },
  "110": {
    "meaning": {
      "id": "runtuh ; ambruknya sistem/bangunan",
      "en": "collapse; breakdown",
      "my": "ပြိုလဲပျက်စီးခြင်း"
    },
    "notes": {
      "id": "※ Runtuhnya tatanan, ekonomi, atau struktur fisik.",
      "en": "※ Collapse of economic systems or physical structures.",
      "my": "※ စီးပွားရေး သို့မဟုတ် ရုပ်ပိုင်းဆိုင်ရာ အဆောက်အအုံ ပြိုလဲပျက်စီးခြင်း။"
    },
    "exampleTranslation": {
      "id": "Runtuhnya ekonomi gelembung telah dimulai.",
      "en": "The collapse of the bubble economy has begun.",
      "my": "ပူဖောင်းစီးပွားရေး ပြိုလဲမှု စတင်ခဲ့ပြီ။"
    }
  },
  "111": {
    "meaning": {
      "id": "akumulasi ; penimbunan ; penumpukan",
      "en": "accumulation; store",
      "my": "စုဆောင်းမိခြင်း ၊ စုပုံလာခြင်း"
    },
    "notes": {
      "id": "※ Menumpuknya kelelahan, modal, atau pengalaman dari waktu ke waktu.",
      "en": "※ Build-up of fatigue, capital, or knowledge over time.",
      "my": "※ အချိန်ကြာလာသည်နှင့်အမျှ ပင်ပန်းနွမ်းနယ်မှု သို့မဟုတ် အတွေ့အကြုံ စုပုံလာခြင်း။"
    },
    "exampleTranslation": {
      "id": "Rasa lelah sehari-hari telah menumpuk.",
      "en": "Daily fatigue has accumulated heavily.",
      "my": "နေ့စဉ် ပင်ပန်းနွမ်းနယ်မှုများ စုပုံနေပြီဖြစ်သည်။"
    }
  },
  "112": {
    "meaning": {
      "id": "akselerasi ; mendorong percepatan",
      "en": "promotion; acceleration",
      "my": "အရှိန်မြှင့်တင်ခြင်း ၊ တွန်းအားပေးခြင်း"
    },
    "notes": {
      "id": "※ Mempercepat kemajuan proyek, metabolisme, atau perdagangan.",
      "en": "※ Accelerating projects, trade, or physical processes.",
      "my": "※ စီမံကိန်း သို့မဟုတ် ကုန်သွယ်ရေး တိုးတက်မှုကို အရှိန်မြှင့်တင်ပေးခြင်း။"
    },
    "exampleTranslation": {
      "id": "Mendorong percepatan pertukaran ekonomi kedua negara.",
      "en": "Promote economic exchanges between both nations.",
      "my": "နှစ်နိုင်ငံအကြား စီးပွားရေး ဖလှယ်မှုကို အရှိန်မြှင့်တင်ပေးသည်။"
    }
  },
  "113": {
    "meaning": {
      "id": "penekanan ; pengendalian diri ; meredam",
      "en": "control; suppression",
      "my": "ထိန်းချုပ်ခြင်း ၊ ဖိနှိပ်ထိန်းသိမ်းခြင်း"
    },
    "notes": {
      "id": "※ Menahan emosi, inflasi, atau pertumbuhan bakteri.",
      "en": "※ Restraining emotion, inflation, or bacterial growth.",
      "my": "※ စိတ်ခံစားမှု၊ ငွေကြေးဖောင်းပွမှု သို့မဟုတ် ဘက်တီးရီးယားကို ထိန်းချုပ်ခြင်း။"
    },
    "exampleTranslation": {
      "id": "Meredam emosi dan berbicara dengan tenang.",
      "en": "Suppressed emotions and spoke calmly.",
      "my": "စိတ်ခံစားမှုကို ထိန်းချုပ်ပြီး အေးဆေးစွာ ပြောဆိုသည်။"
    }
  },
  "114": {
    "meaning": {
      "id": "pelonggaran ; peredaan ketegangan",
      "en": "relaxation; relief",
      "my": "လျှော့ပေါ့သက်သာစေခြင်း"
    },
    "notes": {
      "id": "※ Meringankan regulasi, rasa sakit, atau ketegangan politik.",
      "en": "※ Easing regulations, discomfort, or geopolitical strain.",
      "my": "※ စည်းမျဉ်းများ၊ နာကျင်မှု သို့မဟုတ် တင်းမာမှုကို လျှော့ပေါ့သက်သာစေခြင်း။"
    },
    "exampleTranslation": {
      "id": "Meminum obat untuk meredakan rasa sakit.",
      "en": "Take medicine to relieve the pain.",
      "my": "နာကျင်မှုကို သက်သာစေရန် ဆေးသောက်သည်။"
    }
  },
  "115": {
    "meaning": {
      "id": "pemahaman mendalam ; menggenggam situasi",
      "en": "grasp; comprehension",
      "my": "သဘောပေါက်နားလည်ခြင်း ၊ အခြေအနေကိုဆုပ်ကိုင်မိခြင်း"
    },
    "notes": {
      "id": "※ Memahami kondisi atau inti masalah dengan jelas dan akurat.",
      "en": "※ Firmly understanding core facts or realities.",
      "my": "※ အခြေအနေ သို့မဟုတ် ပြဿနာ၏ အနှစ်သာရကို တိကျစွာ သဘောပေါက်ခြင်း။"
    },
    "exampleTranslation": {
      "id": "Sangat penting untuk memahami situasi saat ini dengan tepat.",
      "en": "It is crucial to accurately grasp the current state.",
      "my": "လက်ရှိအခြေအနေကို တိကျစွာ နားလည်သဘောပေါက်ရန် အလွန်အရေးကြီးသည်။"
    }
  },
  "116": {
    "meaning": {
      "id": "relevan ; memenuhi syarat kriteria",
      "en": "corresponding to; falling under",
      "my": "ကိုက်ညီမှုရှိသော ၊ အကျုံးဝင်သော"
    },
    "notes": {
      "id": "※ Cocok dengan pasal, syarat, atau kondisi tertentu.",
      "en": "※ Matching specific clauses or qualifications.",
      "my": "※ သတ်မှတ်ထားသော စည်းကမ်းချက်နှင့် ကိုက်ညီအကျုံးဝင်ခြင်း။"
    },
    "exampleTranslation": {
      "id": "Hanya mereka yang memenuhi kriteria yang dapat mendaftar.",
      "en": "Only those who meet the qualifications may apply.",
      "my": "သတ်မှတ်ချက်နှင့် ကိုက်ညီသူများသာ လျှောက်ထားနိုင်သည်။"
    }
  },
  "117": {
    "meaning": {
      "id": "wajar ; tepat ; masuk akal",
      "en": "proper; reasonable",
      "my": "သင့်လျော်မှန်ကန်သော ၊ ကျိုးကြောင်းဆီလျော်သော"
    },
    "notes": {
      "id": "※ Keputusan atau kesimpulan yang pantas dan dapat diterima akal sehat.",
      "en": "※ Judgments deemed sound and justifiable.",
      "my": "※ ကျိုးကြောင်းဆီလျော်ပြီး လက်ခံနိုင်ဖွယ်ရှိသော ဆုံးဖြတ်ချက်။"
    },
    "exampleTranslation": {
      "id": "Keputusan itu dapat dikatakan sangat wajar dan tepat.",
      "en": "That conclusion can be considered very reasonable.",
      "my": "ထိုဆုံးဖြတ်ချက်သည် အလွန်သင့်လျော်မှန်ကန်သည်ဟု ဆိုနိုင်သည်။"
    }
  },
  "118": {
    "meaning": {
      "id": "promosi khusus ; pengangkatan luar biasa",
      "en": "selection; promotion",
      "my": "အထူးရာထူးတိုးမြှင့်ခြင်း"
    },
    "notes": {
      "id": "※ Memilih seseorang yang berprestasi melompati urutan senioritas.",
      "en": "※ Promoting exceptional talent over seniority.",
      "my": "※ ဝါစဉ်ကို ကျော်လွန်၍ အရည်အချင်းရှိသူကို ရာထူးတိုးမြှင့်ခြင်း။"
    },
    "exampleTranslation": {
      "id": "Karyawan muda dipromosikan secara istimewa memegang peran besar.",
      "en": "A young employee was promoted to an important role.",
      "my": "လူငယ်ဝန်ထမ်းတစ်ဦးသည် အရေးကြီးတာဝန်အတွက် အထူးရာထူးတိုးပေးခြင်း ခံရသည်။"
    }
  },
  "119": {
    "meaning": {
      "id": "menaklukkan ; mengatasi rintangan",
      "en": "conquest; overcoming",
      "my": "ကျော်လွှားအောင်မြင်သည်"
    },
    "notes": {
      "id": "※ Menang atas kelemahan diri, trauma, atau penyakit.",
      "en": "※ Overcoming personal weaknesses or illness.",
      "my": "※ မိမိ၏အားနည်းချက် သို့မဟုတ် ရောဂါဝေဒနာကို ကျော်လွှားအောင်မြင်ခြင်း။"
    },
    "exampleTranslation": {
      "id": "Mengatasi kelemahan diri dan meraih kemenangan.",
      "en": "Overcame weaknesses and seized victory.",
      "my": "အားနည်းချက်များကို ကျော်လွှားပြီး အောင်ပွဲဆွတ်ခူးခဲ့သည်။"
    }
  },
  "120": {
    "meaning": {
      "id": "tanda-tanda awal ; gelagat",
      "en": "sign; symptom",
      "my": "ရှေ့ပြေးလက္ခဏာ ၊ အရိပ်အယောင်"
    },
    "notes": {
      "id": "※ Gejala awal sebelum peristiwa besar atau penyakit terjadi.",
      "en": "※ Early symptoms preceding events or disease.",
      "my": "※ အဖြစ်အပျက်ကြီး မဖြစ်မီ ပေါ်ပေါက်လာသော ရှေ့ပြေးအရိပ်အယောင်။"
    },
    "exampleTranslation": {
      "id": "Tanda-tanda pemulihan ekonomi mulai tampak.",
      "en": "Signs of economic recovery are beginning to show.",
      "my": "စီးပွားရေး ပြန်လည်ဦးမော့လာမည့် အရိပ်အယောင်များ စတင်တွေ့မြင်ရသည်။"
    }
  },
  "121": {
    "meaning": {
      "id": "bangkrut ; hancur berantakan",
      "en": "failure; bankruptcy",
      "my": "ပျက်စီးဆုတ်ယုတ်ခြင်း ၊ ဒေဝါလီခံရခြင်း"
    },
    "notes": {
      "id": "※ Runtuhnya keuangan atau gagalnya rencana secara telak.",
      "en": "※ Collapse of fiscal plans or complete failure.",
      "my": "※ ငွေရေးကြေးရေး ပျက်စီးခြင်း သို့မဟုတ် အစီအစဉ်များ အလုံးစုံပျက်စီးခြင်း။"
    },
    "exampleTranslation": {
      "id": "Kondisi finansial berada di ambang kebangkrutan.",
      "en": "Finances are teetering on the verge of collapse.",
      "my": "ဘဏ္ဍာရေးအခြေအနေသည် ဒေဝါလီခံရမည့် အန္တရာယ်နှင့် ရင်ဆိုင်နေရသည်။"
    }
  },
  "122": {
    "meaning": {
      "id": "pada umumnya ; garis besarnya",
      "en": "generally; mostly",
      "my": "ယေဘုယျအားဖြင့် ၊ အကြမ်းဖျင်းအားဖြင့်"
    },
    "notes": {
      "id": "※ Sebagian besar atau secara garis umum sudah sesuai rencana.",
      "en": "※ Largely following plans on the whole.",
      "my": "※ အကြမ်းဖျင်းအားဖြင့် အစီအစဉ်အတိုင်း ချောမွေ့စွာ သွားနေခြင်း။"
    },
    "exampleTranslation": {
      "id": "Rencana secara garis besar berjalan lancar.",
      "en": "The project is mostly proceeding smoothly.",
      "my": "အစီအစဉ်သည် ယေဘုယျအားဖြင့် ချောမွေ့စွာ ဆောင်ရွက်လျက်ရှိသည်။"
    }
  },
  "123": {
    "meaning": {
      "id": "sebelumnya ; di awal waktu",
      "en": "beforehand; in advance",
      "my": "ကြိုတင်၍ ၊ ကြိုတင်ကာလတွင်"
    },
    "notes": {
      "id": "※ Melakukan persiapan atau pemberitahuan sebelum peristiwa terjadi.",
      "en": "※ Preparing or notifying well in advance.",
      "my": "※ ကိစ္စမတိုင်မီ ကြိုတင်ပြင်ဆင်မှု သို့မဟုတ် အသိပေးမှု ပြုလုပ်ခြင်း။"
    },
    "exampleTranslation": {
      "id": "Menghitung biayanya terlebih dahulu di awal.",
      "en": "Calculate the estimated costs beforehand.",
      "my": "ကုန်ကျစရိတ်ကို ကြိုတင်တွက်ချက်ထားသည်။"
    }
  },
  "124": {
    "meaning": {
      "id": "semata-mata ; melulu fokus pada",
      "en": "entirely; solely",
      "my": "သက်သက်သာ ၊ အဓိကအားဖြင့်"
    },
    "notes": {
      "id": "※ Hampir seluruh waktu atau energinya dialokasikan hanya untuk hal itu.",
      "en": "※ Devoting almost all energy or time solely to one endeavor.",
      "my": "※ အချိန်နှင့် လုပ်အားအားလုံးကို အရာတစ်ခုတည်းအတွက်သာ အသုံးပြုခြင်း။"
    },
    "exampleTranslation": {
      "id": "Hari libur semata-mata kuhabiskan untuk membaca buku.",
      "en": "I spend my holidays solely reading books.",
      "my": "အားလပ်ရက်များကို စာဖတ်ခြင်းသက်သက်ဖြင့်သာ ကုန်လွန်စေသည်။"
    }
  },
  "125": {
    "meaning": {
      "id": "apakah benar-benar (keraguan / pembuktian)",
      "en": "really; as expected",
      "my": "တကယ်ပဲလား ၊ ထင်ထားသည့်အတိုင်း"
    },
    "notes": {
      "id": "※ Sering dipakai dalam kalimat tanya keraguan atau kesesuaian prediksi.",
      "en": "※ Questioning whether reality matches predictions.",
      "my": "※ သံသယမေးခွန်း သို့မဟုတ် ခန့်မှန်းချက် မှန်မမှန် စစ်ဆေးရာတွင် သုံးသည်။"
    },
    "exampleTranslation": {
      "id": "Apakah hal yang dia katakan benar-benar nyata?",
      "en": "Could what he said really be true?",
      "my": "သူပြောခဲ့သောအရာသည် အမှန်တကယ်ပဲ ဖြစ်နိုင်ပါ့မလား။"
    }
  },
  "151": {
    "meaning": {
      "id": "mengungguli jauh ; melampaui kehebatan",
      "en": "surpassing; outstripping",
      "my": "သာလွန်သွားသည် ၊ ကျော်တက်သည်"
    },
    "notes": {
      "id": "※ Prestasi atau kemampuan yang jauh melewati standar orang lain.",
      "en": "※ Excellence vastly exceeding predecessors.",
      "my": "※ အခြားသူများ၏ စံနှုန်းထက် အဆပေါင်းများစွာ သာလွန်ထူးချွန်ခြင်း။"
    },
    "exampleTranslation": {
      "id": "Bakatnya jauh mengungguli pendahulunya.",
      "en": "His talent far surpasses that of his predecessors.",
      "my": "သူ့ပါရမီသည် ယခင်လူများထက် များစွာသာလွန်နေသည်။"
    }
  },
  "152": {
    "meaning": {
      "id": "mempercayakan penuh wewenang ; menyerahkan",
      "en": "to entrust; abandon to",
      "my": "လွှဲအပ်သည် ၊ အပ်နှင်းသည်"
    },
    "notes": {
      "id": "※ Menyerahkan nasib atau keputusan akhir kepada orang lain.",
      "en": "※ Entrusting final destiny or discretion to others.",
      "my": "※ ဆုံးဖြတ်ပိုင်ခွင့် သို့မဟုတ် ကံကြမ္မာကို အခြားသူထံ လွှဲအပ်ခြင်း။"
    },
    "exampleTranslation": {
      "id": "Menyerahkan seluruh keputusan kepada sang pakar.",
      "en": "Entrust all decisions entirely to the specialist.",
      "my": "ဆုံးဖြတ်ချက်အားလုံးကို ကျွမ်းကျင်သူထံ လွှဲအပ်ထားသည်။"
    }
  },
  "153": {
    "meaning": {
      "id": "memancarkan suasana ; menciptakan aura",
      "en": "to create (an atmosphere); exude",
      "my": "ခံစားမှုလေထု ဖန်တီးပေးသည်"
    },
    "notes": {
      "id": "※ Memancarkan kesan atau atmosfer khas tertentu secara alami.",
      "en": "※ Naturally exuding a distinct ambiance.",
      "my": "※ ထူးခြားသော ခံစားမှု သို့မဟုတ် အငွေ့အသက်ကို သဘာဝကျစွာ ထုတ်ဖော်ပေးခြင်း။"
    },
    "exampleTranslation": {
      "id": "Memancarkan suasana tenang yang sangat khas.",
      "en": "Exudes a uniquely serene atmosphere.",
      "my": "ထူးခြားငြိမ်သက်သော အငွေ့အသက်ကို ဖန်တီးပေးထားသည်။"
    }
  },
  "154": {
    "meaning": {
      "id": "memahami maksud tersirat ; berempati",
      "en": "to understand; surmise",
      "my": "ရည်ရွယ်ချက်ကို ရိပ်မိနားလည်သည်"
    },
    "notes": {
      "id": "※ Menangkap perasaan atau konteks tanpa perlu diucapkan terang-terangan.",
      "en": "※ Grasping unspoken sentiments intuitively.",
      "my": "※ ပွင့်လင်းစွာ မပြောသော်လည်း စိတ်ခံစားမှု သို့မဟုတ် ရည်ရွယ်ချက်ကို ရိပ်မိခြင်း။"
    },
    "exampleTranslation": {
      "id": "Memahami maksud tersirat lawan bicara dengan tepat.",
      "en": "Accurately surmised the speaker's true intentions.",
      "my": "စကားပြောဖော်၏ မဖော်ပြသော ရည်ရွယ်ချက်ကို တိကျစွာ ရိပ်မိနားလည်သည်။"
    }
  },
  "155": {
    "meaning": {
      "id": "kemalasan ; bermalas-malasan",
      "en": "laziness; sloth",
      "my": "ပျင်းရိခြင်း ၊ အပျင်းကြီးခြင်း"
    },
    "notes": {
      "id": "※ Sifat malas yang membiarkan kewajiban terbengkalai.",
      "en": "※ Slothful negligence of responsibilities.",
      "my": "※ တာဝန်ဝတ္တရားများကို လျစ်လျူရှုစေသော အပျင်းကြီးသည့် အလေ့အထ။"
    },
    "exampleTranslation": {
      "id": "Memperingatkan dengan tegas sikap hidup yang malas.",
      "en": "Sternly admonish a slothful lifestyle.",
      "my": "ပျင်းရိသော နေထိုင်မှုပုံစံကို ပြင်းထန်စွာ သတိပေးဆုံးမသည်။"
    }
  },
  "156": {
    "meaning": {
      "id": "ketiadaan ; defisit ; kurangnya suatu hal",
      "en": "lack; absence",
      "my": "ချို့တဲ့ခြင်း ၊ ကင်းမဲ့ခြင်း"
    },
    "notes": {
      "id": "※ Hilangnya moral, rasa tanggung jawab, atau kesadaran.",
      "en": "※ Absence of ethics, responsibility, or awareness.",
      "my": "※ တာဝန်သိစိတ် သို့မဟုတ် သတိရှိမှု ကင်းမဲ့ချို့တဲ့ခြင်း။"
    },
    "exampleTranslation": {
      "id": "Ketiadaan kesadaran manajemen risiko telah memicu kecelakaan.",
      "en": "A lack of risk management awareness caused the accident.",
      "my": "အန္တရာယ်စီမံခန့်ခွဲမှု သတိကင်းမဲ့ခြင်းကြောင့် မတော်တဆမှု ဖြစ်ပွားခဲ့သည်။"
    }
  },
  "157": {
    "meaning": {
      "id": "membangkitkan ; menggugah perhatian",
      "en": "arousing; awakening",
      "my": "အာရုံစိုက်လာအောင် နှိုးဆွပေးခြင်း"
    },
    "notes": {
      "id": "※ Menggugah kesadaran masyarakat atau rasa simpati.",
      "en": "※ Awakening public attention or sympathy.",
      "my": "※ လူထု၏ အာရုံစိုက်မှု သို့မဟုတ် စာနာမှုကို နှိုးဆွပေးခြင်း။"
    },
    "exampleTranslation": {
      "id": "Menggugah perhatian dari opini publik luas.",
      "en": "Arouse the attention of public opinion.",
      "my": "အများပြည်သူ၏ အာရုံစိုက်မှုကို နှိုးဆွပေးသည်။"
    }
  },
  "158": {
    "meaning": {
      "id": "tindakan penanganan ; langkah darurat",
      "en": "measure; step",
      "my": "ဆောင်ရွက်ချက် ၊ အရေးယူဆောင်ရွက်မှု"
    },
    "notes": {
      "id": "※ Keputusan kebijakan resmi untuk menanggulangi situasi krisis.",
      "en": "※ Official policy steps to address crises.",
      "my": "※ အကျပ်အတည်းကို ဖြေရှင်းရန် တရားဝင် ချမှတ်သောအရေးယူဆောင်ရွက်မှု။"
    },
    "exampleTranslation": {
      "id": "Segera memberlakukan tindakan pengamanan darurat.",
      "en": "Promptly enacted emergency security measures.",
      "my": "အရေးပေါ် လုံခြုံရေး အစီအမံများကို ချက်ချင်းချမှတ်ခဲ့သည်။"
    }
  },
  "159": {
    "meaning": {
      "id": "memperingatkan keras ; menasihati agar waspada",
      "en": "to warn; admonish",
      "my": "သတိပေးဆုံးမသည်"
    },
    "notes": {
      "id": "※ Menegur atau mengingatkan diri sendiri agar tidak lengah.",
      "en": "※ Warning oneself against complacency.",
      "my": "※ သတိမပေါ့ဆစေရန် မိမိကိုယ်ကို သတိပေးဆုံးမခြင်း။"
    },
    "exampleTranslation": {
      "id": "Mengingatkan diri sendiri agar tidak lengah sedikit pun.",
      "en": "Admonish oneself not to let down one's guard.",
      "my": "ပေါ့ဆမှုမရှိစေရန် မိမိကိုယ်ကို သတိပေးဆင်ခြင်သည်။"
    }
  },
  "160": {
    "meaning": {
      "id": "menjungkirbalikkan ; membalikkan keadaan",
      "en": "to overturn; upset",
      "my": "ဇောက်ထိုးလှန်ပစ်သည် ၊ ပြောင်းပြန်လှန်သည်"
    },
    "notes": {
      "id": "※ Membalikkan vonis pengadilan, teori lama, atau dugaan.",
      "en": "※ Overturning established verdicts or conventional beliefs.",
      "my": "※ တရားရုံးစီရင်ချက် သို့မဟုတ် သမားရိုးကျအယူအဆကို ပြောင်းပြန်လှန်ပစ်ခြင်း။"
    },
    "exampleTranslation": {
      "id": "Telah ditemukan penemuan besar yang menjungkirbalikkan akal sehat.",
      "en": "A breakthrough discovery that overturns conventional wisdom.",
      "my": "သမားရိုးကျအတွေးအခေါ်ကို ဇောက်ထိုးလှန်ပစ်နိုင်သော တွေ့ရှိချက်ကြီးတစ်ခု ပေါ်ထွက်လာသည်။"
    }
  },
  "161": {
    "meaning": {
      "id": "merintangi ; menghalangi laju jalan",
      "en": "to obstruct; prevent",
      "my": "အတားအဆီးပြုသည် ၊ ဟန့်တားသည်"
    },
    "notes": {
      "id": "※ Menghambat kemajuan atau laju seseorang.",
      "en": "※ Obstructing advance or progress.",
      "my": "※ ရှေ့သို့ဆက်သွားမှုကို တားဆီးပိတ်ပင်ခြင်း။"
    },
    "exampleTranslation": {
      "id": "Dinding batu raksasa yang merintangi arah perjalanan.",
      "en": "A massive rock wall obstructing the route.",
      "my": "ခရီးလမ်းကို ဟန့်တားထားသော ဧရာမ ကျောက်တံတိုင်းကြီး။"
    }
  },
  "162": {
    "meaning": {
      "id": "mendorong agar bertindak ; mendesak",
      "en": "to urge; prompt",
      "my": "တိုက်တွန်းနှိုးဆော်သည်"
    },
    "notes": {
      "id": "※ Meminta atau memotivasi orang lain untuk segera mengambil langkah.",
      "en": "※ Prompting others to take timely action.",
      "my": "※ အခြားသူများ အမြန်ဆုံး အရေးယူဆောင်ရွက်ရန် တိုက်တွန်းခြင်း။"
    },
    "exampleTranslation": {
      "id": "Memasang papan peringatan untuk mendorong kehati-hatian.",
      "en": "Erected signs to urge cautious behavior.",
      "my": "သတိထားဆင်ခြင်ရန် တိုက်တွန်းသော ဆိုင်းဘုတ်ကို စိုက်ထူထားသည်။"
    }
  },
  "163": {
    "meaning": {
      "id": "luput dari ; lolos dari marabahaya",
      "en": "to escape; avoid",
      "my": "လွတ်မြောက်သည် ၊ ကင်းလွတ်ခွင့်ရသည်"
    },
    "notes": {
      "id": "※ Selamat dari hukuman, bencana, atau jeratan maut.",
      "en": "※ Escaping penalties, disaster, or fatality.",
      "my": "※ ပြစ်ဒဏ်၊ ဘေးအန္တရာယ် သို့မဟုတ် သေဘေးမှ လွတ်မြောက်ခြင်း။"
    },
    "exampleTranslation": {
      "id": "Secara ajaib berhasil luput dari kematian.",
      "en": "Miraculously escaped death.",
      "my": "အံ့ဩဖွယ်ရာ သေဘေးမှ လွတ်မြောက်ခဲ့သည်။"
    }
  },
  "164": {
    "meaning": {
      "id": "lihai ; terampil penuh kecerdikan",
      "en": "skillful; clever",
      "my": "ကျွမ်းကျင်ပါးနပ်သော"
    },
    "notes": {
      "id": "※ Keterampilan teknik atau kepandaian berbicara yang sangat halus.",
      "en": "※ Subtle artistry or clever rhetoric.",
      "my": "※ စကားပြောပါးနပ်မှု သို့မဟုတ် လက်မှုပညာ အထူးကျွမ်းကျင်ခြင်း။"
    },
    "exampleTranslation": {
      "id": "Meyakinkan lawan bicara dengan pilihan kata yang lihai.",
      "en": "Persuaded the listener with skillful phrasing.",
      "my": "ပါးနပ်သော စကားအသုံးအနှုန်းဖြင့် တစ်ဖက်လူကို နားချနိုင်ခဲ့သည်။"
    }
  },
  "165": {
    "meaning": {
      "id": "khidmat ; hening penuh kesakralan",
      "en": "solemn; grave",
      "my": "လေးနက်တည်ကြည်သော"
    },
    "notes": {
      "id": "※ Suasana upacara yang sakral dan membuat orang tertunduk hormat.",
      "en": "※ Sacred, solemn ceremonial gravity.",
      "my": "※ မြင့်မြတ်တည်ကြည်ပြီး လေးစားမှုဖြစ်စေသော အခမ်းအနား အငွေ့အသက်။"
    },
    "exampleTranslation": {
      "id": "Upacara diselenggarakan dalam suasana yang khidmat.",
      "en": "The ceremony was held in a solemn atmosphere.",
      "my": "အခမ်းအနားကို လေးနက်တည်ကြည်သော အငွေ့အသက်ဖြင့် ကျင်းပခဲ့သည်။"
    }
  },
  "311": {
    meaning: {"id": "penilaian ; keputusan logika", "en": "judgment; decision", "my": "ဆုံးဖြတ်ချက် ၊ ဆင်ခြင်သုံးသပ်မှု"},
    notes: {"id": "※ Menilai keadaan secara rasional untuk mengambil kesimpulan.", "en": "※ Rationally evaluating facts to reach conclusions.", "my": "※ အချက်အလက်များကို ဆင်ခြင်သုံးသပ်၍ ဆုံးဖြတ်ခြင်း။"},
    exampleTranslation: {"id": "Keputusan itu diambil berdasarkan bukti yang jelas.", "en": "That judgment was made based on clear evidence.", "my": "ထိုဆုံးဖြတ်ချက်ကို ရှင်းလင်းသော သက်သေများအပေါ် အခြေခံ၍ ချမှတ်ခဲ့သည်။"}
  },
  "312": {
    meaning: {"id": "pertimbangan mendalam", "en": "consideration; taking into account", "my": "လေးနက်စွာ ထည့်သွင်းစဉ်းစားခြင်း"},
    notes: {"id": "※ Memperhatikan berbagai faktor sebelum bertindak.", "en": "※ Taking various factors into account before acting.", "my": "※ မဆုံးဖြတ်မီ အချက်အလက်များစွာကို ထည့်သွင်းစဉ်းစားခြင်း။"},
    exampleTranslation: {"id": "Perlu mempertimbangkan kondisi cuaca.", "en": "Weather conditions must be taken into consideration.", "my": "ရာသီဥတုအခြေအနေကို ထည့်သွင်းစဉ်းစားရန် လိုအပ်ပါသည်။"}
  },
  "313": {
    meaning: {"id": "mencerminkan ; merefleksikan", "en": "reflection (influence)", "my": "ထင်ဟပ်စေခြင်း ၊ ရောင်ပြန်ဟပ်ခြင်း"},
    notes: {"id": "※ Pendapat atau situasi yang terpantul pada hasil kerja.", "en": "※ Reflecting public voice or conditions into outcomes.", "my": "※ သဘောထားအမြင်များကို လက်တွေ့ရလဒ်တွင် ထင်ဟပ်စေခြင်း။"},
    exampleTranslation: {"id": "Mencerminkan suara masyarakat ke dalam kebijakan.", "en": "Reflecting citizen feedback into public policy.", "my": "ပြည်သူလူထု၏ အသံကို မူဝါဒတွင် ထင်ဟပ်စေသည်။"}
  },
  "314": {
    meaning: {"id": "kelimpahan kepuasan ; bermakna padat", "en": "enrichment; fulfillment", "my": "ပြည့်စုံကြွယ်ဝခြင်း ၊ ကျေနပ်ဖွယ်ဖြစ်ခြင်း"},
    notes: {"id": "※ Hidup atau fasilitas yang lengkap dan bermakna.", "en": "※ Fulfilling life or well-equipped facilities.", "my": "※ စုံလင်ပြည့်စုံပြီး အဓိပ္ပာယ်ရှိသော ဘဝ။"},
    exampleTranslation: {"id": "Menghabiskan hari libur yang sangat bermakna.", "en": "Spent a deeply fulfilling holiday.", "my": "အလွန်ပြည့်စုံကျေနပ်ဖွယ်ကောင်းသော အားလပ်ရက်ကို ကုန်လွန်စေခဲ့သည်။"}
  },
  "315": {
    meaning: {"id": "dapat memahami dan menerima alasan", "en": "consent; understanding", "my": "သဘောပေါက်လက်ခံခြင်း"},
    notes: {"id": "※ Mengerti sepenuhnya penjelasan orang lain.", "en": "※ Fully understanding and accepting an explanation.", "my": "※ ရှင်းပြချက်ကို အပြည့်အဝ နားလည်သဘောပေါက်၍ လက်ခံခြင်း။"},
    exampleTranslation: {"id": "Semua orang dapat menerima penjelasan tersebut.", "en": "Everyone was fully convinced by the explanation.", "my": "ရှင်းပြချက်ကို လူတိုင်းက သဘောပေါက်လက်ခံနိုင်ခဲ့ကြသည်။"}
  },
  "316": {
    meaning: {"id": "kewaspadaan ketat ; siaga bahaya", "en": "vigilance; precaution", "my": "သတိထားစောင့်ကြည့်ခြင်း ၊ ကြိုတင်သတိပြုခြင်း"},
    notes: {"id": "※ Menjaga kewaspadaan terhadap bahaya atau bencana.", "en": "※ Staying alert against disasters or hazards.", "my": "※ ဘေးအန္တရာယ်များကို အထူးသတိထား စောင့်ကြည့်ခြင်း။"},
    exampleTranslation: {"id": "Memperketat kewaspadaan terhadap datangnya topan.", "en": "Tightening vigilance against the approaching typhoon.", "my": "တိုင်ဖွန်းမုန်တိုင်း ကျရောက်မည့်အရေးကို ကြိုတင်သတိပြု စောင့်ကြည့်နေသည်။"}
  },
  "317": {
    meaning: {"id": "hati-hati penuh perhitungan ; prudent", "en": "prudent; cautious", "my": "သတိကြီးစွာထားသော ၊ အလေးအနက်ထားသော"},
    notes: {"id": "※ Bertindak dengan penuh kehati-hatian agar tidak salah langkah.", "en": "※ Acting with deep prudence to avoid mistakes.", "my": "※ အမှားအယွင်းမရှိစေရန် သတိကြီးစွာထား၍ ဆောင်ရွက်ခြင်း။"},
    exampleTranslation: {"id": "Mengambil keputusan secara hati-hati dan matang.", "en": "Making decisions with great prudence and care.", "my": "ဆုံးဖြတ်ချက်ကို သတိကြီးစွာထား၍ စဉ်းစားချမှတ်သည်။"}
  },
  "318": {
    meaning: {"id": "rancu ; ambigu ; tidak jelas samar-samar", "en": "vague; ambiguous", "my": "မသဲကွဲသော ၊ မရေရာသော"},
    notes: {"id": "※ Makna yang mendua atau pernyataan yang samar.", "en": "※ Vague statement or ambiguous response.", "my": "※ တိကျပြတ်သားမှုမရှိဘဲ ဝိုးတဝါးဖြစ်နေသော စကား။"},
    exampleTranslation: {"id": "Menolak dengan jawaban yang ambigu.", "en": "Declined with an ambiguous answer.", "my": "မရေရာသော အဖြေဖြင့် ငြင်းပယ်ခဲ့သည်။"}
  },
  "319": {
    meaning: {"id": "tulus jujur ; berintegritas tinggi", "en": "sincere; honest", "my": "ရိုးသားဖြောင့်မတ်သော ၊ သစ္စာရှိသော"},
    notes: {"id": "※ Sikap jujur tanpa kepalsuan.", "en": "※ Sincere and genuine uprightness.", "my": "※ စစ်မှန်သော ရိုးသားမှုနှင့် သစ္စာရှိသည့် စိတ်နေစိတ်ထား။"},
    exampleTranslation: {"id": "Dia adalah rekan kerja yang sangat jujur dan tulus.", "en": "He is a very honest and sincere colleague.", "my": "သူသည် အလွန်ရိုးသားဖြောင့်မတ်သော လုပ်ဖော်ကိုင်ဖက်တစ်ဦးဖြစ်သည်။"}
  },
  "320": {
    meaning: {"id": "fleksibel ; luwes tidak kaku", "en": "flexible; pliant", "my": "ပျော့ပျောင်းသော ၊ အခြေအနေနှင့်လိုက်လျောညီထွေရှိသော"},
    notes: {"id": "※ Keluwesan otot tubuh atau fleksibilitas pemikiran.", "en": "※ Flexible body or adaptable mindset.", "my": "※ ခန္ဓာကိုယ် ပျော့ပျောင်းမှု သို့မဟုတ် လိုက်လျောညီထွေရှိသော တွေးခေါ်ပုံ။"},
    exampleTranslation: {"id": "Menghadapi perubahan dengan pemikiran yang fleksibel.", "en": "Adapting to changes with a flexible mindset.", "my": "အပြောင်းအလဲများကို လိုက်လျောညီထွေရှိသော အတွေးအခေါ်ဖြင့် ရင်ဆိုင်သည်။"}
  },
  "322": {
    meaning: {"id": "menambal kekurangan ; mengompensasi", "en": "to supplement; make up for", "my": "ဖြည့်ဆည်းသည် ၊ အစားထိုးသည်"},
    notes: {"id": "※ Menambahkan sesuatu yang kurang agar genap.", "en": "※ Adding what is lacking to make whole.", "my": "※ လိုအပ်ချက်ကို ပြည့်စုံအောင် ဖြည့်စွက်ပေးခြင်း။"},
    exampleTranslation: {"id": "Mengonsumsi suplemen untuk menambal kekurangan vitamin.", "en": "Taking supplements to make up for vitamin shortage.", "my": "ဗီတာမင်ချို့တဲ့မှုကို ဖြည့်ဆည်းရန် ဖြည့်စွက်စာ သောက်သုံးသည်။"}
  },
  "323": {
    meaning: {"id": "condong sepihak ; tidak seimbang", "en": "to be biased; unbalanced", "my": "ဘက်လိုက်သည် ၊ မညီမမျှဖြစ်သည်"},
    notes: {"id": "※ Pemikiran atau nutrisi yang berat sebelah.", "en": "※ Unbalanced nutrition or biased opinion.", "my": "※ ဘက်လိုက်သော သဘောထား သို့မဟုတ် အာဟာရမမျှတမှု။"},
    exampleTranslation: {"id": "Pola makan yang tidak seimbang buruk bagi kesehatan.", "en": "An unbalanced diet is bad for health.", "my": "အာဟာရမညီမျှသော စားသောက်မှုပုံစံသည် ကျန်းမာရေးအတွက် မကောင်းပါ။"}
  },
  "324": {
    meaning: {"id": "lalai ; mengabaikan kewajiban", "en": "to neglect; fail to do", "my": "လျစ်လျူရှုသည် ၊ ပေါ့ဆသည်"},
    notes: {"id": "※ Lalai dalam menjalankan tugas atau latihan.", "en": "※ Neglecting duty, vigilance, or daily practice.", "my": "※ တာဝန်ဝတ္တရား သို့မဟုတ် လေ့ကျင့်မှုကို ပေါ့ဆခြင်း။"},
    exampleTranslation: {"id": "Jangan pernah lalai dalam menjaga keselamatan.", "en": "Never neglect safety precautions.", "my": "ဘေးကင်းလုံခြုံရေးကို ဘယ်တော့မှ မပေါ့ဆပါနှင့်။"}
  },
  "325": {
    meaning: {"id": "memikul beban ; merengkuh masalah", "en": "to hold in arms; have (problems)", "my": "ပွေ့ပိုက်သည် ၊ ပြဿနာရင်ဆိုင်ရသည်"},
    notes: {"id": "※ Membawa barang di tangan atau memikul masalah berat.", "en": "※ Holding in arms or bearing heavy issues.", "my": "※ လက်တွင် ပွေ့ပိုက်ထားခြင်း သို့မဟုတ် ပြဿနာကို ရင်ဆိုင်နေရခြင်း။"},
    exampleTranslation: {"id": "Dia sedang memikul masalah keluarga yang berat.", "en": "He is currently facing serious family problems.", "my": "သူသည် လေးနက်သော မိသားစုပြဿနာများကို ရင်ဆိုင်နေရသည်။"}
  },
  "326": {
    meaning: {"id": "menangkap makna inti ; memandang situasi", "en": "to grasp; perceive", "my": "ဖမ်းဆုပ်သည် ၊ သဘောပေါက်နားလည်သည်"},
    notes: {"id": "※ Menangkap inti persoalan atau peluang.", "en": "※ Grasping the core essence or seizing opportunity.", "my": "※ ပြဿနာ၏ အနှစ်သာရ သို့မဟုတ် အခွင့်အလမ်းကို ဖမ်းဆုပ်ခြင်း။"},
    exampleTranslation: {"id": "Menangkap peluang perubahan zaman dengan cepat.", "en": "Quickly seizing the opportunities of changing times.", "my": "ခေတ်ပြောင်းလဲမှု၏ အခွင့်အလမ်းများကို လျင်မြန်စွာ ဖမ်းဆုပ်သည်။"}
  },
  "327": {
    meaning: {"id": "mengundang bencana/akibat buruk", "en": "to invite; bring about (misfortune)", "my": "ဖိတ်ခေါ်သည် ၊ အန္တရာယ်ဖြစ်စေသည်"},
    notes: {"id": "※ Menyebabkan terjadinya kesalahpahaman atau bahaya.", "en": "※ Inadvertently causing misunderstandings or trouble.", "my": "※ နားလည်မှုလွဲမှားခြင်း သို့မဟုတ် အန္တရာယ်ကို ဖိတ်ခေါ်သကဲ့သို့ဖြစ်စေခြင်း။"},
    exampleTranslation: {"id": "Kecerobohan kecil dapat mengundang kecelakaan besar.", "en": "Carelessness can bring about a major accident.", "my": "ပေါ့ဆမှု အနည်းငယ်က ကြီးမားသော မတော်တဆမှုကို ဖြစ်စေနိုင်သည်။"}
  },
  "328": {
    meaning: {"id": "menelusuri kembali ke masa lalu", "en": "to go back in time; trace back", "my": "အချိန်နောက်ပြန်လိုက်သည် ၊ မူလသို့ခြေရာခံသည်"},
    notes: {"id": "※ Menelusuri sejarah atau asal mula ke masa lampau.", "en": "※ Tracing back history or stream upstream.", "my": "※ သမိုင်း သို့မဟုတ် မူလအစကို နောက်ကြောင်းပြန်၍ ခြေရာခံခြင်း။"},
    exampleTranslation: {"id": "Sejarah tradisi ini berakar menelusuri ratusan tahun lalu.", "en": "The history of this tradition traces back hundreds of years.", "my": "ဤဓလေ့၏ သမိုင်းကြောင်းသည် လွန်ခဲ့သော နှစ်ပေါင်းရာချီသို့ ပြန်လည်ခြေရာခံနိုင်သည်။"}
  },
  "329": {
    meaning: {"id": "berkecimpung dalam bidang kerja", "en": "to participate; be involved in", "my": "ပါဝင်ဆောင်ရွက်သည် ၊ ပါဝင်ပတ်သက်သည်"},
    notes: {"id": "※ Terlibat langsung dalam suatu profesi atau proyek.", "en": "※ Being actively engaged in a profession or endeavor.", "my": "※ လုပ်ငန်းနယ်ပယ် သို့မဟုတ် ပရောဂျက်တစ်ခုတွင် တိုက်ရိုက်ပါဝင်ဆောင်ရွက်ခြင်း။"},
    exampleTranslation: {"id": "Sudah lama saya berkecimpung dalam pengembangan perangkat lunak.", "en": "I have long been involved in software development.", "my": "ဆော့ဖ်ဝဲလ် ရေးသားထုတ်လုပ်ရေး လုပ်ငန်းတွင် ပါဝင်ဆောင်ရွက်နေခဲ့သည်မှာ ကြာပါပြီ။"}
  },
  "330": {
    meaning: {"id": "menangguhkan sementara ; menunda eksekusi", "en": "to postpone; suspend", "my": "ရွှေ့ဆိုင်းသည် ၊ ဆိုင်းငံ့ထားသည်"},
    notes: {"id": "※ Menunda rencana sambil melihat perkembangan situasi.", "en": "※ Suspending operations while observing circumstances.", "my": "※ အခြေအနေကို စောင့်ကြည့်ရင်း ယာယီဆိုင်းငံ့ထားခြင်း။"},
    exampleTranslation: {"id": "Perjalanan kereta ditangguhkan sementara karena angin ribut.", "en": "Train departures were suspended temporarily due to the gale.", "my": "မုန်တိုင်းပြင်းထန်သဖြင့် ရထားခရီးစဉ်များကို ယာယီဆိုင်းငံ့ထားသည်။"}
  },
  "411": {
    meaning: {"id": "perhatian ; peringatan ; berhati-hati", "en": "caution; attention", "my": "သတိထားခြင်း ၊ ဂရုပြုခြင်း"},
    notes: {"id": "※ Berhati-hati terhadap bahaya atau memusatkan fokus.", "en": "※ Paying careful attention to avoid risks.", "my": "※ ဘေးအန္တရာယ်ကို သတိပြုခြင်း သို့မဟုတ် အာရုံစိုက်ခြင်း။"},
    exampleTranslation: {"id": "Harap berhati-hati saat melangkah di tangga.", "en": "Please watch your step on the stairs.", "my": "လှေကားထစ်များတွင် ကျေးဇူးပြု၍ ခြေလှမ်းသတိထားပါ။"}
  },
  "412": {
    meaning: {"id": "khawatir ; cemas", "en": "worry; concern", "my": "စိုးရိမ်ပူပန်ခြင်း"},
    notes: {"id": "※ Merasa gelisah terhadap masa depan atau orang tersayang.", "en": "※ Feeling anxious or concerned about someone.", "my": "※ တစ်စုံတစ်ယောက် သို့မဟုတ် အနာဂတ်အတွက် စိတ်ပူပန်ခြင်း။"},
    exampleTranslation: {"id": "Ibu selalu mencemaskan kesehatan anak-anaknya.", "en": "Mother is always worried about her children's health.", "my": "မိခင်သည် သားသမီးများ၏ ကျန်းမာရေးအတွက် အမြဲစိုးရိမ်ပူပန်တတ်သည်။"}
  },
  "413": {
    meaning: {"id": "rumit ; berbelit-belit", "en": "complex; complicated", "my": "ရှုပ်ထွေးသော"},
    notes: {"id": "※ Banyak cabang atau faktor sehingga sulit dipahami.", "en": "※ Highly intricate and hard to untangle.", "my": "※ အစိတ်အပိုင်းများပြားပြီး နားလည်ရန် ခက်ခဲရှုပ်ထွေးခြင်း။"},
    exampleTranslation: {"id": "Struktur mesin ini sangat rumit.", "en": "The structure of this machine is very complicated.", "my": "ဤစက်၏ ဖွဲ့စည်းတည်ဆောက်ပုံမှာ အလွန်ရှုပ်ထွေးပါသည်။"}
  },
  "414": {
    meaning: {"id": "mudah ; sederhana", "en": "simple; easy", "my": "လွယ်ကူရိုးရှင်းသော"},
    notes: {"id": "※ Tidak berbelit-belit dan gampang diselesaikan.", "en": "※ Straightforward and effortless.", "my": "※ ရှုပ်ထွေးမှုမရှိဘဲ လွယ်လွယ်ကူကူ ပြီးမြောက်နိုင်ခြင်း။"},
    exampleTranslation: {"id": "Soal ujian ini sangat mudah dikerjakan.", "en": "This exam question is very easy to solve.", "my": "ဤစာမေးပွဲ မေးခွန်းမှာ အလွန်လွယ်ကူပါသည်။"}
  },
  "415": {
    meaning: {"id": "berbahaya", "en": "danger; perilous", "my": "အန္တရာယ်ရှိသော"},
    notes: {"id": "※ Mengandung risiko luka, celaka, atau kerugian besar.", "en": "※ Involving high risk or peril.", "my": "※ ထိခိုက်နစ်နာမှု သို့မဟုတ် ဘေးဖြစ်စေနိုင်သော အခြေအနေ။"},
    exampleTranslation: {"id": "Sangat berbahaya bermain di dekat rel kereta api.", "en": "It is extremely dangerous to play near train tracks.", "my": "မီးရထားသံလမ်းအနီးတွင် ကစားခြင်းသည် အလွန်အန္တရာယ်ရှိသည်။"}
  },
  "416": {
    meaning: {"id": "aman", "en": "safety; secure", "my": "ဘေးကင်းလုံခြုံသော"},
    notes: {"id": "※ Bebas dari ancaman bahaya.", "en": "※ Free from hazards or risk.", "my": "※ ဘေးအန္တရာယ် ကင်းဝေး၍ လုံခြုံမှုရှိခြင်း။"},
    exampleTranslation: {"id": "Kota ini sangat aman ditinggali.", "en": "This town is very safe to live in.", "my": "ဤမြို့သည် နေထိုင်ရန် အလွန်ဘေးကင်းလုံခြုံပါသည်။"}
  },
  "417": {
    meaning: {"id": "kebiasaan ; adat tradisi", "en": "custom; habit", "my": "အလေ့အထ ၊ ဓလေ့ထုံးတမ်း"},
    notes: {"id": "※ Rutinitas pribadi atau norma yang diulang sehari-hari.", "en": "※ Regular personal habit or societal custom.", "my": "※ နေ့စဉ်ပြုလုပ်နေကျ အလေ့အကျင့် သို့မဟုတ် လူ့အဖွဲ့အစည်း၏ ဓလေ့။"},
    exampleTranslation: {"id": "Bangun pagi sudah menjadi kebiasaan saya.", "en": "Waking up early has become my daily habit.", "my": "မနက်စောစောထခြင်းသည် ကျွန်ုပ်၏ အလေ့အထတစ်ခု ဖြစ်လာခဲ့သည်။"}
  },
  "418": {
    meaning: {"id": "alasan ; latar belakang", "en": "reason", "my": "အကြောင်းပြချက် ၊ အကြောင်းရင်း"},
    notes: {"id": "※ Dasar mengapa suatu hal dilakukan atau terjadi.", "en": "※ The rationale behind an action or event.", "my": "※ ကိစ္စတစ်ခု ဖြစ်ပွားရခြင်း၏ အခြေခံအကြောင်းရင်း။"},
    exampleTranslation: {"id": "Tolong jelaskan alasan keterlambatan Anda.", "en": "Please explain the reason for your delay.", "my": "ကျေးဇူးပြု၍ နောက်ကျရသည့် အကြောင်းရင်းကို ရှင်းပြပေးပါ။"}
  },
  "419": {
    meaning: {"id": "pertandingan ; laga olahraga", "en": "match; game", "my": "ပြိုင်ပွဲ ၊ ပွဲစဉ်"},
    notes: {"id": "※ Laga antar regu olahraga.", "en": "※ Sports contest or game match.", "my": "※ အသင်းများအကြား အားကစားပြိုင်ပွဲ။"},
    exampleTranslation: {"id": "Menonton pertandingan sepak bola yang seru bersama teman.", "en": "Watched an exciting soccer match with friends.", "my": "သူငယ်ချင်းများနှင့်အတူ စိတ်လှုပ်ရှားဖွယ် ဘောလုံးပွဲကို ကြည့်ရှုခဲ့သည်။"}
  },
  "420": {
    meaning: {"id": "juara pertama ; kemenangan turnamen", "en": "championship; overall win", "my": "ပထမဆုရရှိခြင်း ၊ ဗိုလ်စွဲခြင်း"},
    notes: {"id": "※ Meraih peringkat tertinggi dalam turnamen.", "en": "※ Achieving first place in a tournament.", "my": "※ ပြိုင်ပွဲတွင် ထိပ်ဆုံးပထမဆုကို ဆွတ်ခူးရရှိခြင်း။"},
    exampleTranslation: {"id": "Tim kami akhirnya berhasil meraih juara pertama.", "en": "Our team finally won the championship.", "my": "ကျွန်ုပ်တို့အသင်းသည် နောက်ဆုံးတွင် ဗိုလ်စွဲနိုင်ခဲ့သည်။"}
  },
  "421": {
    meaning: {"id": "mengantarkan ; menyampaikan surat/barang", "en": "to deliver", "my": "ပို့ဆောင်ပေးသည်"},
    notes: {"id": "※ Membawa paket atau melapor ke kantor polisi.", "en": "※ Delivering parcels or reporting to authorities.", "my": "※ ပါဆယ်ပစ္စည်းကို ပို့ဆောင်ပေးခြင်း သို့မဟုတ် သတင်းပို့ခြင်း။"},
    exampleTranslation: {"id": "Kurir mengantarkan paket tepat waktu.", "en": "The courier delivered the package on time.", "my": "ပို့ဆောင်ရေးသမားသည် ပါဆယ်ထုပ်ကို အချိန်မီ ပို့ဆောင်ပေးခဲ့သည်။"}
  },
  "422": {
    meaning: {"id": "mengangkut ; memindahkan beban", "en": "to carry; transport", "my": "သယ်ယူပို့ဆောင်သည်"},
    notes: {"id": "※ Memindahkan barang berat dari satu tempat ke tempat lain.", "en": "※ Transporting freight or heavy items.", "my": "※ ပစ္စည်းများကို တစ်နေရာမှ တစ်နေရာသို့ သယ်ယူရွှေ့ပြောင်းခြင်း။"},
    exampleTranslation: {"id": "Bersama-sama mengangkut perabot rumah tangga.", "en": "Carrying household furniture together.", "my": "အိမ်သုံးပရိဘောဂများကို အတူတကွ သယ်ယူကြသည်။"}
  },
  "423": {
    meaning: {"id": "memperbaiki ; membetulkan", "en": "to repair; to fix", "my": "ပြုပြင်သည် ၊ ပြင်ဆင်သည်"},
    notes: {"id": "※ Membetulkan barang rusak atau mengoreksi tulisan.", "en": "※ Repairing broken items or correcting text.", "my": "※ ပျက်စီးနေသောပစ္စည်းကို ပြင်ဆင်ခြင်း သို့မဟုတ် စာလုံးပေါင်းပြင်ခြင်း။"},
    exampleTranslation: {"id": "Tukang reparasi memperbaiki jam tangan saya.", "en": "The technician fixed my wristwatch.", "my": "ပြင်ဆင်သူသည် ကျွန်ုပ်၏ လက်ပတ်နာရီကို ပြင်ဆင်ပေးခဲ့သည်။"}
  },
  "424": {
    meaning: {"id": "sampai ; tiba (surat/paket)", "en": "to reach; arrive", "my": "ရောက်ရှိသည် (စာ/ပါဆယ်)"},
    notes: {"id": "※ Surat atau paket sampai ke tangan penerima.", "en": "※ Mail or goods arriving at destination.", "my": "※ စာ သို့မဟုတ် ပါဆယ်ပစ္စည်း လက်ခံသူထံ ရောက်ရှိလာခြင်း။"},
    exampleTranslation: {"id": "Surat dari keluarga telah tiba kemarin.", "en": "The letter from my family arrived yesterday.", "my": "မိသားစုထံမှ စာသည် မနေ့က ရောက်ရှိလာခဲ့သည်။"}
  },
  "425": {
    meaning: {"id": "menyampaikan pesan", "en": "to convey; report", "my": "သတင်းစကားပါးသည် ၊ အကြောင်းကြားသည်"},
    notes: {"id": "※ Memberitahukan pesan atau meneruskan tradisi.", "en": "※ Relaying a message or transmitting heritage.", "my": "※ သတင်းစကားကို အခြားသူထံသို့ တစ်ဆင့်ပြောပြခြင်း။"},
    exampleTranslation: {"id": "Tolong sampaikan pesan terima kasih saya kepada beliau.", "en": "Please convey my gratitude to him.", "my": "ကျေးဇူးပြု၍ သူ၏ထံသို့ ကျွန်ုပ်၏ ကျေးဇူးတင်စကားကို ပါးပေးပါ။"}
  },
  "426": {
    meaning: {"id": "menjemput ; menyambut kedatangan", "en": "to welcome; greet", "my": "ကြိုဆိုသည် ၊ သွားရောက်ကြိုဆိုသည်"},
    notes: {"id": "※ Menyambut tamu di stasiun atau menyongsong tahun baru.", "en": "※ Greeting visitors or ushering in the new year.", "my": "※ ဧည့်သည်ကို ဘူတာတွင် ကြိုဆိုခြင်း သို့မဟုတ် နှစ်သစ်ကို ကြိုဆိုခြင်း။"},
    exampleTranslation: {"id": "Pergi ke bandara untuk menjemput sahabat.", "en": "Going to the airport to welcome a close friend.", "my": "သူငယ်ချင်းကောင်းကို ကြိုဆိုရန် လေဆိပ်သို့ သွားသည်။"}
  },
  "427": {
    meaning: {"id": "memutuskan ; menetapkan", "en": "to decide", "my": "ဆုံးဖြတ်သည် ၊ သတ်မှတ်သည်"},
    notes: {"id": "※ Menetapkan pilihan hati atau aturan.", "en": "※ Deciding on an option or setting rules.", "my": "※ ရွေးချယ်မှု သို့မဟုတ် စည်းမျဉ်းကို အတည်ပြုသတ်မှတ်ခြင်း။"},
    exampleTranslation: {"id": "Saya telah memutuskan rencana masa depan.", "en": "I have decided on my future plans.", "my": "ကျွန်ုပ်သည် အနာဂတ်အစီအစဉ်ကို ဆုံးဖြတ်ပြီးပါပြီ။"}
  },
  "428": {
    meaning: {"id": "membesarkan ; merawat hingga tumbuh", "en": "to raise; bring up", "my": "ပြုစုပျိုးထောင်သည် ၊ မွေးမြူသည်"},
    notes: {"id": "※ Merawat anak atau membudidayakan tanaman.", "en": "※ Nurturing children or cultivating crops.", "my": "※ ကလေးများကို ပြုစုပျိုးထောင်ခြင်း သို့မဟုတ် အပင်များကို စိုက်ပျိုးမွေးမြူခြင်း။"},
    exampleTranslation: {"id": "Membesarkan anak dengan penuh kasih sayang.", "en": "Raising children with abundant love.", "my": "ကလေးများကို ချစ်ခြင်းမေတ္တာအပြည့်ဖြင့် ပြုစုပျိုးထောင်သည်။"}
  },
  "429": {
    meaning: {"id": "jatuh ; gugur ; gagal ujian", "en": "to fall; fail", "my": "ပြုတ်ကျသည် ၊ စာမေးပွဲကျရှုံးသည်"},
    notes: {"id": "※ Daun gugur ke tanah atau tidak lulus ujian.", "en": "※ Dropping to the ground or failing tests.", "my": "※ အရာဝတ္ထု အောက်သို့ ပြုတ်ကျခြင်း သို့မဟုတ် စာမေးပွဲကျရှုံးခြင်း။"},
    exampleTranslation: {"id": "Daun-daun kuning gugur dari pohon.", "en": "Yellow leaves fall from the trees.", "my": "သစ်ရွက်ဝါများသည် သစ်ပင်မှ ပြုတ်ကျကုန်သည်။"}
  },
  "430": {
    meaning: {"id": "tumbang ; roboh ; pingsan", "en": "to collapse; fall down", "my": "လဲကျသည် ၊ ပြိုကျသည်"},
    notes: {"id": "※ Pohon tumbang terkena badai atau orang pingsan.", "en": "※ Trees toppling over or people collapsing from fatigue.", "my": "※ သစ်ပင်လဲပြိုကျခြင်း သို့မဟုတ် မူးလဲသွားခြင်း။"},
    exampleTranslation: {"id": "Pohon besar tumbang karena angin kencang.", "en": "The large tree collapsed due to strong winds.", "my": "လေပြင်းတိုက်ခတ်မှုကြောင့် သစ်ပင်ကြီး လဲကျသွားသည်။"}
  },
  "803": {
    meaning: {"id": "kemarin", "en": "yesterday", "my": "မနေ့က"},
    notes: {"id": "※ Hari sebelum hari ini.", "en": "※ The day before today.", "my": "※ ယနေ့မတိုင်မီ လွန်ခဲ့သောနေ့။"},
    exampleTranslation: {"id": "Kemarin saya belajar kanji sepanjang sore.", "en": "Yesterday I studied kanji all afternoon.", "my": "မနေ့က တစ်မွန်းလွဲလုံး ခန်းဂျီး စာကျက်ခဲ့သည်။"}
  },
  "804": {
    meaning: {"id": "Jepang", "en": "Japan", "my": "ဂျပန်နိုင်ငံ"},
    notes: {"id": "※ Negara kepulauan di Asia Timur.", "en": "※ East Asian island nation.", "my": "※ အရှေ့အာရှရှိ ဂျပန်ကျွန်းနိုင်ငံ။"},
    exampleTranslation: {"id": "Tahun depan saya berencana pergi ke Jepang.", "en": "Next year I plan to visit Japan.", "my": "နောက်နှစ်တွင် ဂျပန်နိုင်ငံသို့ သွားရောက်ရန် စီစဉ်ထားသည်။"}
  },
  "807": {
    meaning: {"id": "murid ; pelajar ; mahasiswa", "en": "student", "my": "ကျောင်းသား / ကျောင်းသူ"},
    notes: {"id": "※ Orang yang sedang menuntut ilmu di sekolah/kampus.", "en": "※ Person studying at school or university.", "my": "※ ကျောင်း သို့မဟုတ် တက္ကသိုလ်တွင် ပညာသင်ကြားနေသူ။"},
    exampleTranslation: {"id": "Dia adalah seorang mahasiswa universitas.", "en": "She is a university student.", "my": "သူမသည် တက္ကသိုလ်ကျောင်းသူတစ်ဦးဖြစ်သည်။"}
  },
  "810": {
    meaning: {"id": "nama panggilan / nama lengkap", "en": "name", "my": "အမည် ၊ နာမည်"},
    notes: {"id": "※ Identitas sebutan diri seseorang.", "en": "※ The designation of a person or object.", "my": "※ လူတစ်ဦး သို့မဟုတ် အရာဝတ္ထုတစ်ခု၏ ခေါ်ဝေါ်သမုတ်သောအမည်။"},
    exampleTranslation: {"id": "Silakan tulis nama Anda di sini.", "en": "Please write your name here.", "my": "ကျေးဇူးပြု၍ ဤနေရာတွင် သင့်နာမည်ကို ရေးပေးပါ။"}
  },
  "813": {
    meaning: {"id": "mobil ; kendaraan bermotor", "en": "car; vehicle", "my": "ကား ၊ မော်တော်ယာဉ်"},
    notes: {"id": "※ Kendaraan roda empat bermotor.", "en": "※ Automobile or wheeled vehicle.", "my": "※ မော်တော်ကား သို့မဟုတ် ဘီးတပ်ယာဉ်။"},
    exampleTranslation: {"id": "Ayah saya mengendarai mobil ke kantor.", "en": "My father drives a car to work.", "my": "ဖခင်သည် ရုံးသို့ ကားမောင်း၍ သွားသည်။"}
  },
  "814": {
    meaning: {"id": "buku bacaan", "en": "book", "my": "စာအုပ်"},
    notes: {"id": "※ Kumpulan lembaran tulisan yang dijilid.", "en": "※ Bound printed reading volume.", "my": "※ ဖတ်ရှုရန် စာအုပ်။"},
    exampleTranslation: {"id": "Membaca buku di perpustakaan yang tenang.", "en": "Reading books in a quiet library.", "my": "တိတ်ဆိတ်သော စာကြည့်တိုက်တွင် စာအုပ်ဖတ်သည်။"}
  },
  "816": {
    meaning: {"id": "uang kas / dana", "en": "money; cash", "my": "ငွေကြေး ၊ ပိုက်ဆံ"},
    notes: {"id": "※ Alat pembayaran resmi tunai atau tabungan.", "en": "※ Currency and cash funds.", "my": "※ ကုန်စည်ဝယ်ယူရာတွင် သုံးစွဲသော ငွေကြေး။"},
    exampleTranslation: {"id": "Menabung uang untuk masa depan.", "en": "Saving money for the future.", "my": "အနာဂတ်အတွက် ငွေစုဆောင်းသည်။"}
  },
  "817": {
    meaning: {"id": "cuaca hari ini", "en": "weather", "my": "ရာသီဥတု"},
    notes: {"id": "※ Kondisi atmosfer harian seperti cerah atau hujan.", "en": "※ Daily atmospheric conditions.", "my": "※ နေ့စဉ် ရာသီဥတု အခြေအနေ။"},
    exampleTranslation: {"id": "Hari ini cuacanya sangat cerah dan sejuk.", "en": "Today the weather is very clear and cool.", "my": "ယနေ့ ရာသီဥတုမှာ အလွန်သာယာကြည်လင်သည်။"}
  },
  "818": {
    meaning: {"id": "gunung", "en": "mountain", "my": "တောင်"},
    notes: {"id": "※ Dataran tinggi alami seperti Gunung Fuji.", "en": "※ High natural elevation like Mt. Fuji.", "my": "※ သဘာဝအတိုင်း မြင့်မားနေသော တောင်ကုန်းတောင်တန်း။"},
    exampleTranslation: {"id": "Mendaki gunung pada liburan musim panas.", "en": "Climbing mountains during summer vacation.", "my": "နွေရာသီ အားလပ်ရက်တွင် တောင်တက်သည်။"}
  },
  "819": {
    meaning: {"id": "sungai ; kali", "en": "river; stream", "my": "မြစ် ၊ ချောင်း"},
    notes: {"id": "※ Aliran air alami dari gunung menuju laut.", "en": "※ Natural flowing waterway.", "my": "※ သဘာဝအတိုင်း စီးဆင်းနေသော မြစ်ချောင်း။"},
    exampleTranslation: {"id": "Air sungai ini sangat jernih dan bersih.", "en": "The water in this river is very clear and clean.", "my": "ဤမြစ်၏ ရေသည် အလွန်ကြည်လင်သန့်ရှင်းပါသည်။"}
  },
  "851": {
    meaning: {"id": "wisata ; bepergian jauh", "en": "travel; trip", "my": "ခရီးသွားခြင်း"},
    notes: {"id": "※ Bepergian mengunjungi tempat wisata.", "en": "※ Journey for vacation or sightseeing.", "my": "※ အပန်းဖြေခရီး သို့မဟုတ် လည်ပတ်ခရီး သွားရောက်ခြင်း။"},
    exampleTranslation: {"id": "Pergi berwisata ke Kyoto bersama keluarga.", "en": "Traveled to Kyoto with family.", "my": "မိသားစုနှင့်အတူ ကျိုတိုမြို့သို့ ခရီးသွားခဲ့သည်။"}
  },
  "852": {
    meaning: {"id": "film bioskop / sinema", "en": "movie; film", "my": "ရုပ်ရှင်"},
    notes: {"id": "※ Karya sinema yang ditonton di layar.", "en": "※ Cinematic motion picture.", "my": "※ ရုပ်ရှင်ရုံတွင် ကြည့်ရှုသော ရုပ်ရှင်ဇာတ်ကား။"},
    exampleTranslation: {"id": "Menonton film terbaru di bioskop akhir pekan ini.", "en": "Watching the latest movie in theater this weekend.", "my": "ယခုသီတင်းပတ်ကုန်တွင် ရုပ်ရှင်ရုံ၌ ရုပ်ရှင်အသစ် ကြည့်မည်။"}
  },
  "853": {
    meaning: {"id": "foto ; potret kamera", "en": "photo; picture", "my": "ဓာတ်ပုံ"},
    notes: {"id": "※ Gambar yang diambil menggunakan kamera.", "en": "※ Photograph captured via camera.", "my": "※ ကင်မရာဖြင့် ရိုက်ကူးထားသော ဓာတ်ပုံ။"},
    exampleTranslation: {"id": "Mengambil banyak foto kenangan yang indah.", "en": "Took many beautiful memorial photos.", "my": "လှပသောအမှတ်တရ ဓာတ်ပုံများစွာကို ရိုက်ကူးခဲ့သည်။"}
  },
  "854": {
    meaning: {"id": "musik ; lagu instrumen", "en": "music", "my": "ဂီတ ၊ တေးဂီတ"},
    notes: {"id": "※ Nada dan lagu yang didengarkan.", "en": "※ Audio melody and songs.", "my": "※ သံစဉ်တေးသွားနှင့် သီချင်းများ။"},
    exampleTranslation: {"id": "Mendengarkan musik klasik untuk relaksasi.", "en": "Listening to classical music for relaxation.", "my": "စိတ်အပန်းဖြေရန် ဂန္ထဝင်တေးဂီတကို နားထောင်သည်။"}
  },
  "855": {
    meaning: {"id": "belajar tekun ; studi mandiri", "en": "study; diligent learning", "my": "စာကျက်ခြင်း ၊ လေ့လာသင်ယူခြင်း"},
    notes: {"id": "※ Belajar mandiri mengasah ilmu pengetahuan.", "en": "※ Diligent academic studying.", "my": "※ အသိပညာတိုးပွားစေရန် စာပေလေ့လာသင်ယူခြင်း။"},
    exampleTranslation: {"id": "Setiap hari saya belajar bahasa Jepang selama dua jam.", "en": "Every day I study Japanese for two hours.", "my": "နေ့တိုင်း ဂျပန်စာကို ၂ နာရီကြာ လေ့လာသင်ယူပါသည်။"}
  },
  "857": {
    meaning: {"id": "kedua orang tua", "en": "parents", "my": "မိဘနှစ်ပါး"},
    notes: {"id": "※ Ayah dan ibu kandung.", "en": "※ Both father and mother.", "my": "※ ဖခင်နှင့် မိခင် နှစ်ဦးစလုံး။"},
    exampleTranslation: {"id": "Saya sangat menyayangi dan menghormati kedua orang tua saya.", "en": "I deeply love and respect my parents.", "my": "ကျွန်ုပ်သည် မိဘနှစ်ပါးကို အလွန်ချစ်ခင်လေးစားပါသည်။"}
  },
  "858": {
    meaning: {"id": "pertanyaan ; tanda tanya", "en": "question; inquiry", "my": "မေးခွန်း"},
    notes: {"id": "※ Pertanyaan yang diajukan untuk meminta kejelasan.", "en": "※ Inquiry seeking clarification.", "my": "※ သိရှိလိုသည်များကို မေးမြန်းသော မေးခွန်း။"},
    exampleTranslation: {"id": "Jika ada pertanyaan silakan angkat tangan.", "en": "If you have any questions, please raise your hand.", "my": "မေးခွန်းရှိပါက ကျေးဇူးပြု၍ လက်ထောင်ပါ။"}
  },
  "859": {
    meaning: {"id": "alamat tempat tinggal", "en": "address", "my": "နေရပ်လိပ်စာ"},
    notes: {"id": "※ Lokasi resmi tempat bermukim.", "en": "※ Official residential domicile.", "my": "※ နေထိုင်ရာ အရပ်ဒေသ လိပ်စာ။"},
    exampleTranslation: {"id": "Tolong tuliskan alamat tempat tinggal Anda saat ini.", "en": "Please write down your current address.", "my": "ကျေးဇူးပြု၍ သင့်လက်ရှိ နေရပ်လိပ်စာကို ရေးပေးပါ။"}
  },
  "860": {
    meaning: {"id": "kesiapan waktu ; kecocokan jadwal", "en": "convenience; schedule availability", "my": "အချိန်အဆင်ပြေမှု ၊ အခြေအနေ"},
    notes: {"id": "※ Kecocokan waktu untuk bertemu: 都合がいい.", "en": "※ Schedule convenience for an appointment.", "my": "※ ချိန်းဆိုမှုအတွက် အချိန်အဆင်ပြေမှု။"},
    exampleTranslation: {"id": "Hari apa yang paling cocok bagi jadwal Anda?", "en": "Which day is most convenient for you?", "my": "မည်သည့်နေ့က သင့်အတွက် အချိန်အဆင်ပြေဆုံးဖြစ်ပါသလဲ။"}
  },
  "901": {
    meaning: {"id": "perekonomian ; keuangan pasar", "en": "economy; finance", "my": "စီးပွားရေး"},
    notes: {"id": "※ Tatanan produksi, konsumsi, dan pasar.", "en": "※ Macroeconomics and financial systems.", "my": "※ ထုတ်လုပ်မှုနှင့် ကုန်သွယ်စီးပွားရေး စနစ်။"},
    exampleTranslation: {"id": "Pemulihan perekonomian global menunjukkan sinyal positif.", "en": "Global economic recovery is showing positive signals.", "my": "ကမ္ဘာ့စီးပွားရေး ပြန်လည်ဦးမော့လာမှုမှာ ကောင်းမွန်သော လက္ခဏာများ ပြသနေသည်။"}
  },
  "902": {
    meaning: {"id": "politik ; kebijakan negara", "en": "politics; government policy", "my": "နိုင်ငံရေး"},
    notes: {"id": "※ Tata kelola pemerintahan dan kebijakan negara.", "en": "※ Governance and public political administration.", "my": "※ နိုင်ငံတော် အုပ်ချုပ်ရေးနှင့် မူဝါဒရေးရာများ။"},
    exampleTranslation: {"id": "Generasi muda mulai menaruh minat besar pada isu politik.", "en": "Younger generations are taking great interest in politics.", "my": "လူငယ်မျိုးဆက်သစ်များသည် နိုင်ငံရေးကိစ္စများတွင် စိတ်ဝင်စားမှု တိုးပွားလာသည်။"}
  },
  "903": {
    meaning: {"id": "lingkungan hidup sekitar", "en": "environment; surroundings", "my": "ပတ်ဝန်းကျင်"},
    notes: {"id": "※ Alam sekitar atau kondisi ekosistem.", "en": "※ Natural environment or ecological conditions.", "my": "※ သဘာဝပတ်ဝန်းကျင် သို့မဟုတ် ဂေဟစနစ်။"},
    exampleTranslation: {"id": "Penting menjaga kelestarian lingkungan hidup bagi masa depan.", "en": "It is vital to protect the environment for future generations.", "my": "အနာဂတ်အတွက် သဘာဝပတ်ဝန်းကျင်ကို ထိန်းသိမ်းစောင့်ရှောက်ရန် အရေးကြီးသည်။"}
  },
  "904": {
    meaning: {"id": "perdagangan luar negeri", "en": "foreign trade; commerce", "my": "နိုင်ငံခြားကုန်သွယ်ရေး"},
    notes: {"id": "※ Ekspor impor barang antarnegara.", "en": "※ International export and import commerce.", "my": "※ နိုင်ငံများအကြား ပို့ကုန်သွင်းကုန် ကုန်သွယ်မှု။"},
    exampleTranslation: {"id": "Perdagangan luar negeri kedua negara berkembang pesat.", "en": "Foreign trade between the two countries expanded rapidly.", "my": "နှစ်နိုင်ငံအကြား နိုင်ငံခြားကုန်သွယ်ရေးမှာ လျင်မြန်စွာ တိုးတက်လာခဲ့သည်။"}
  },
  "906": {
    meaning: {"id": "perkenalan ; rekomendasi orang", "en": "introduction; referral", "my": "မိတ်ဆက်ပေးခြင်း"},
    notes: {"id": "※ Memperkenalkan teman atau produk baru.", "en": "※ Introducing persons or recommending goods.", "my": "※ လူပုဂ္ဂိုလ် သို့မဟုတ် ပစ္စည်းကို မိတ်ဆက်ပေးခြင်း။"},
    exampleTranslation: {"id": "Saya diperkenalkan kepada manajer baru oleh rekan kerja.", "en": "I was introduced to the new manager by my colleague.", "my": "လုပ်ဖော်ကိုင်ဖက်က ကျွန်ုပ်အား မန်နေဂျာအသစ်နှင့် မိတ်ဆက်ပေးခဲ့သည်။"}
  },
  "907": {
    meaning: {"id": "teknologi ; teknik keahlian", "en": "technology; technical skill", "my": "နည်းပညာ ၊ ကျွမ်းကျင်မှု"},
    notes: {"id": "※ Rekayasa sains atau keahlian teknis khusus.", "en": "※ Engineering methods and technical mastery.", "my": "※ အင်ဂျင်နီယာနှင့် အဆင့်မြင့် နည်းပညာ ကျွမ်းကျင်မှု။"},
    exampleTranslation: {"id": "Perkembangan teknologi kecerdasan buatan sangat pesat.", "en": "The development of AI technology is remarkably rapid.", "my": "ဉာဏ်ရည်တု နည်းပညာ တိုးတက်မှုမှာ အလွန်လျင်မြန်ပါသည်။"}
  },
  "908": {
    meaning: {"id": "presentasi ; pengumuman resmi", "en": "presentation; announcement", "my": "ထုတ်ပြန်ကြေညာခြင်း ၊ တင်ပြခြင်း"},
    notes: {"id": "※ Menyampaikan hasil riset atau merilis berita resmi.", "en": "※ Public announcement or research presentation.", "my": "※ သုတေသနရလဒ် တင်ပြခြင်း သို့မဟုတ် တရားဝင် ကြေညာခြင်း။"},
    exampleTranslation: {"id": "Peneliti mengumumkan hasil temuan terbarunya di konferensi.", "en": "Researchers presented their latest findings at the conference.", "my": "သုတေသီများသည် ညီလာခံတွင် နောက်ဆုံးတွေ့ရှိချက်များကို တင်ပြခဲ့ကြသည်။"}
  },
  "909": {
    meaning: {"id": "pernikahan ; membina rumah tangga", "en": "marriage; wedding", "my": "ထိမ်းမြားလက်ထပ်ခြင်း"},
    notes: {"id": "※ Ikatan perkawinan suami istri.", "en": "※ Matrimony and wedding celebration.", "my": "※ ဇနီးမောင်နှံအဖြစ် ပေါင်းသင်းမင်္ဂလာဆောင်ခြင်း။"},
    exampleTranslation: {"id": "Sahabat saya melangsungkan pesta pernikahan yang meriah.", "en": "My close friend held a joyful wedding celebration.", "my": "ကျွန်ုပ်၏ သူငယ်ချင်းသည် စည်ကားသော မင်္ဂလာပွဲကို ကျင်းပခဲ့သည်။"}
  },
  "951": {
    meaning: {"id": "sertifikasi keahlian ; kualifikasi resmi", "en": "qualification; certificate", "my": "အရည်အချင်းလက်မှတ် ၊ အရည်အချင်းသတ်မှတ်ချက်"},
    notes: {"id": "※ Ijazah lisensi profesi atau kelayakan hukum.", "en": "※ Official certification or professional credentials.", "my": "※ တရားဝင် အသိအမှတ်ပြု အရည်အချင်း သို့မဟုတ် လက်မှတ်။"},
    exampleTranslation: {"id": "Belajar giat demi meraih sertifikasi keahlian profesional.", "en": "Studying hard to obtain professional certification.", "my": "ကျွမ်းကျင်မှုလက်မှတ် ရရှိရန်အတွက် ကြိုးစားလေ့လာနေသည်။"}
  },
  "952": {
    meaning: {"id": "anggaran biaya rencana", "en": "budget; estimated cost", "my": "ဘတ်ဂျက်ငွေ ၊ လျာထားစရိတ်"},
    notes: {"id": "※ Perkiraan alokasi dana proyek ke depan.", "en": "※ Financial budget allocation.", "my": "※ စီမံကိန်းအတွက် ခန့်မှန်းလျာထားသော ကုန်ကျစရိတ်။"},
    exampleTranslation: {"id": "Menyusun anggaran biaya untuk proyek kuartal depan.", "en": "Formulating the project budget for the next quarter.", "my": "နောက်သုံးလပတ် စီမံကိန်းအတွက် ဘတ်ဂျက်စရိတ်ကို ရေးဆွဲသည်။"}
  },
  "953": {
    meaning: {"id": "efisiensi kerja ; produktivitas rasio", "en": "efficiency; performance ratio", "my": "လုပ်ငန်းစွမ်းဆောင်ရည် ၊ ထိရောက်မှု"},
    notes: {"id": "※ Rasio hasil yang dicapai dibandingkan tenaga/waktu.", "en": "※ Operational efficiency ratio.", "my": "※ အချိန်နှင့် လုပ်အား အနည်းဆုံးဖြင့် အကျိုးရလဒ် ထွက်ပေါ်မှု။"},
    exampleTranslation: {"id": "Meningkatkan efisiensi kerja kantor melalui otomatisasi.", "en": "Improving office work efficiency through automation.", "my": "အလိုအလျောက်စနစ်ဖြင့် ရုံးလုပ်ငန်း ထိရောက်မှုကို မြှင့်တင်သည်။"}
  },
  "954": {
    meaning: {"id": "permintaan pasar ; kebutuhan konsumen", "en": "market demand; consumer need", "my": "ဝယ်လိုအား ၊ လိုအပ်ချက်"},
    notes: {"id": "※ Besarnya keinginan pasar untuk membeli.", "en": "※ Economic demand from consumers.", "my": "※ ဈေးကွက်အတွင်း ဝယ်ယူလိုသော ဆန္ဒနှင့် လိုအပ်ချက်။"},
    exampleTranslation: {"id": "Permintaan terhadap kendaraan ramah lingkungan melonjak tinggi.", "en": "Demand for eco-friendly vehicles surged dramatically.", "my": "သဘာဝပတ်ဝန်းကျင်ထိန်းသိမ်းရေး ကားများအပေါ် ဝယ်လိုအား အလွန်မြင့်တက်လာသည်။"}
  },
  "955": {
    meaning: {"id": "penawaran ; pasokan stok barang", "en": "supply; provision", "my": "ရောင်းလိုအား ၊ ပံ့ပိုးပေးမှု"},
    notes: {"id": "※ Ketersediaan pasokan barang untuk didistribusikan.", "en": "※ Material provision or market supply.", "my": "※ ဈေးကွက်သို့ ကုန်ပစ္စည်း ပံ့ပိုးဖြန့်ဖြူးပေးမှု။"},
    exampleTranslation: {"id": "Memastikan kelancaran pasokan bahan baku makanan.", "en": "Ensuring a steady supply of food raw materials.", "my": "စားသောက်ကုန် ကုန်ကြမ်းပစ္စည်းများ ထောက်ပံ့မှုကို တည်ငြိမ်စေသည်။"}
  },
  "957": {
    meaning: {"id": "kemitraan strategis ; aliansi bisnis", "en": "business partnership; strategic alliance", "my": "မဟာဗျူဟာမြောက် မိတ်ဖက်ပူးပေါင်းမှု"},
    notes: {"id": "※ Dua perusahaan yang berkolaborasi dalam bisnis.", "en": "※ Strategic corporate partnership or alliance.", "my": "※ စီးပွားရေးလုပ်ငန်းများအကြား မဟာဗျူဟာမြောက် ပူးပေါင်းဆောင်ရွက်ခြင်း။"},
    exampleTranslation: {"id": "Kedua perusahaan menjalin kemitraan strategis untuk teknologi baru.", "en": "Both companies entered a strategic partnership for new tech.", "my": "ကုမ္ပဏီနှစ်ခုသည် နည်းပညာသစ်အတွက် မဟာဗျူဟာမြောက် မိတ်ဖက်ပူးပေါင်းခဲ့ကြသည်။"}
  },
  "958": {
    meaning: {"id": "kekhawatiran mendalam ; rasa waswas", "en": "deep concern; apprehension", "my": "စိုးရိမ်မကင်းဖြစ်မှု ၊ သံသယ"},
    notes: {"id": "※ Rasa cemas bahwa sesuatu yang buruk akan terjadi.", "en": "※ Grave anxiety or deep apprehension.", "my": "※ မကောင်းသောအရာ ဖြစ်လာမည်ကို လေးနက်စွာ စိုးရိမ်ပူပန်ခြင်း။"},
    exampleTranslation: {"id": "Muncul kekhawatiran atas lonjakan harga komoditas pangan.", "en": "Deep concerns arose over soaring food prices.", "my": "စားသောက်ကုန်ဈေးနှုန်းများ မြင့်တက်လာမှုအပေါ် စိုးရိမ်မကင်းမှုများ ပေါ်ပေါက်လာခဲ့သည်။"}
  },
};

// Reverse index from Indonesian meaning string to word data for quiz choices
export const MEANING_LOOKUP: Record<string, LocalizedWordData> = {
  "jarak ; sela": {
    "meaning": {
      "id": "jarak ; sela",
      "en": "space; interval",
      "my": "ကြားအကွာအဝေး ၊ အချိန်ပိုင်း"
    },
    "notes": {
      "id": "※ Dipakai untuk jarak ruang maupun waktu.",
      "en": "※ Used for intervals of space and time.",
      "my": "※ နေရာလွတ်နှင့် အချိန်ပိုင်းခြားမှု နှစ်မျိုးလုံးအတွက် သုံးသည်။"
    },
    "exampleTranslation": {
      "id": "Yang menentukan adalah jarak antara satu bangunan dengan bangunan lainnya.",
      "en": "What matters is the distance between one building and another.",
      "my": "အဓိကဆုံးဖြတ်သည်မှာ အဆောက်အအုံတစ်ခုနှင့်တစ်ခုကြား အကွာအဝေးဖြစ်သည်။"
    }
  },
  "hangus ; gosong": {
    "meaning": {
      "id": "hangus ; gosong",
      "en": "to burn; to scorch",
      "my": "ကျွမ်းသည် ၊ တူးသည်"
    },
    "notes": {
      "id": "※ Terbakar hingga gosong/berwarna hitam karena panas.",
      "en": "※ Burnt until blackened from heat.",
      "my": "※ အပူကြောင့် မဲတူးသွားသည်အထိ ကျွမ်းလောင်ခြင်း။"
    },
    "exampleTranslation": {
      "id": "Ikannya hangus menghitam.",
      "en": "The fish got completely burnt black.",
      "my": "ငါးသည် မည်းနက်သွားအောင် တူးသွားသည်။"
    }
  },
  "pencegahan": {
    "meaning": {
      "id": "pencegahan",
      "en": "prevention; check",
      "my": "ကာကွယ်တားဆီးခြင်း"
    },
    "notes": {
      "id": "※ Mencegah terjadinya hal yang tidak diinginkan.",
      "en": "※ Preventing undesirable incidents.",
      "my": "※ မလိုလားအပ်သော အရာများ မဖြစ်ပွားအောင် ကြိုတင်ကာကွယ်ခြင်း။"
    },
    "exampleTranslation": {
      "id": "Berupaya keras dalam pencegahan kecelakaan.",
      "en": "Strive hard in accident prevention.",
      "my": "မတော်တဆမှုများ ကာကွယ်တားဆီးရေးတွင် အထူးကြိုးပမ်းသည်။"
    }
  },
  "asap": {
    "meaning": {
      "id": "asap",
      "en": "smoke; fumes",
      "my": "မီးခိုး"
    },
    "notes": {
      "id": "※ Asap yang membubung dari kebakaran atau rokok.",
      "en": "※ Smoke rising from fires or tobacco.",
      "my": "※ မီးလောင်မှု သို့မဟုတ် စီးကရက်မှ ထွက်လာသော မီးခိုးငွေ့။"
    },
    "exampleTranslation": {
      "id": "Asap memenuhi seluruh ruangan.",
      "en": "Smoke filled the entire room.",
      "my": "အခန်းတစ်ခုလုံး မီးခိုးများ ဖုံးလွှမ်းနေသည်။"
    }
  },
  "sebagian ; satu bagian": {
    "meaning": {
      "id": "sebagian ; satu bagian",
      "en": "part; portion",
      "my": "တစ်စိတ်တစ်ပိုင်း"
    },
    "notes": {
      "id": "※ Bagian dari keseluruhan.",
      "en": "※ Part of the whole.",
      "my": "※ အလုံးစုံ၏ တစ်စိတ်တစ်ပိုင်း။"
    },
    "exampleTranslation": {
      "id": "Mengalihkan sebagian gaji ke tabungan.",
      "en": "Allocating part of the salary to savings.",
      "my": "လစာ၏ တစ်စိတ်တစ်ပိုင်းကို စုဆောင်းငွေအဖြစ် ထည့်ထားသည်။"
    }
  },
  "kesalahan ; kekeliruan": {
    "meaning": {
      "id": "kesalahan ; kekeliruan",
      "en": "error; mistake",
      "my": "အမှား ၊ လွဲချော်မှု"
    },
    "notes": {
      "id": "※ Kesalahan yang tidak disengaja.",
      "en": "※ Unintentional error.",
      "my": "※ ရည်ရွယ်ချက်မပါဘဲ မှားယွင်းသွားသောအမှား။"
    },
    "exampleTranslation": {
      "id": "Ada kesalahan dalam perhitungan.",
      "en": "There was an error in the calculation.",
      "my": "တွက်ချက်မှုတွင် အမှားအယွင်း ရှိခဲ့သည်။"
    }
  },
  "bertumpuk ; tumpang tindih": {
    "meaning": {
      "id": "bertumpuk ; tumpang tindih",
      "en": "to pile up; overlap",
      "my": "ထပ်နေသည် ၊ တစ်ပြိုင်နက်ဖြစ်ပွားသည်"
    },
    "notes": {
      "id": "※ Jadwal atau barang bertumpuk secara bersamaan.",
      "en": "※ Schedules or items overlapping simultaneously.",
      "my": "※ အချိန်ဇယား သို့မဟုတ် ပစ္စည်းများ တစ်ပြိုင်နက် ထပ်နေခြင်း။"
    },
    "exampleTranslation": {
      "id": "Beberapa hal buruk bertumpuk terjadi bersamaan.",
      "en": "Several bad things happened together at once.",
      "my": "မကောင်းသောအရာများ တစ်ခုပြီးတစ်ခု ဆက်တိုက်ထပ်ဖြစ်ခဲ့သည်။"
    }
  },
  "mulai berjalan": {
    "meaning": {
      "id": "mulai berjalan",
      "en": "to start walking",
      "my": "စတင်လမ်းလျှောက်သည်"
    },
    "notes": {
      "id": "※ Gerakan melangkah dan mulai berjalan.",
      "en": "※ Initiating movement by walking forward.",
      "my": "※ ခြေလှမ်းစတင်လှမ်းပြီး လမ်းလျှောက်ခြင်း။"
    },
    "exampleTranslation": {
      "id": "Begitu lampu hijau, semua orang mulai berjalan serentak.",
      "en": "As soon as the light turned green, everyone started walking at once.",
      "my": "မီးစိမ်းသည်နှင့် လူအားလုံး တစ်ပြိုင်နက် စတင်လမ်းလျှောက်ကြသည်။"
    }
  },
  "persalinan ; kelahiran anak": {
    "meaning": {
      "id": "persalinan ; kelahiran anak",
      "en": "childbirth; delivery",
      "my": "ကလေးမွေးဖွားခြင်း"
    },
    "notes": {
      "id": "※ Proses melahirkan bayi.",
      "en": "※ Process of giving birth to a baby.",
      "my": "※ ရင်သွေးငယ်ကို မွေးဖွားပေးသည့် ဖြစ်စဉ်။"
    },
    "exampleTranslation": {
      "id": "Melahirkan bayi laki-laki dengan selamat.",
      "en": "Safely gave birth to a baby boy.",
      "my": "သားယောက်ျားလေးကို ဘေးကင်းချောမွေ့စွာ မွေးဖွားခဲ့သည်။"
    }
  },
  "masih kecil ; belia": {
    "meaning": {
      "id": "masih kecil ; belia",
      "en": "very young; childish",
      "my": "ငယ်ရွယ်သော ၊ ကလေးဆန်သော"
    },
    "notes": {
      "id": "※ Usia masih belia atau sifat kekanak-kanakan.",
      "en": "※ Tender age or childish innocence.",
      "my": "※ အသက်အရွယ် နုနယ်ငယ်ရွယ်ခြင်း သို့မဟုတ် ကလေးစိတ်မပျောက်ခြင်း။"
    },
    "exampleTranslation": {
      "id": "Ingatan masa kecil kembali terbayang.",
      "en": "Memories from childhood come flooding back.",
      "my": "ကလေးဘဝက အမှတ်တရများ ပြန်လည်ပေါ်ပေါက်လာသည်။"
    }
  },
  "atap": {
    "meaning": {
      "id": "atap",
      "en": "roof",
      "my": "ခေါင်မိုး"
    },
    "notes": {
      "id": "※ Atap bangunan.",
      "en": "※ Roof of a building.",
      "my": "※ အဆောက်အအုံ၏ အပေါ်ခေါင်မိုး။"
    },
    "exampleTranslation": {
      "id": "Seekor burung hinggap di atas atap.",
      "en": "A bird is perched on top of the roof.",
      "my": "ခေါင်မိုးပေါ်တွင် ငှက်တစ်ကောင် နားနေသည်။"
    }
  },
  "koreksi ; revisi": {
    "meaning": {
      "id": "koreksi ; revisi",
      "en": "correction; revision",
      "my": "ပြင်ဆင်ချက် ၊ အမှားပြင်ခြင်း"
    },
    "notes": {
      "id": "※ Memperbaiki teks, data, atau ucapan yang keliru.",
      "en": "※ Rectifying incorrect text, data, or words.",
      "my": "※ မှားယွင်းနေသော စာသား၊ အချက်အလက် သို့မဟုတ် စကားကို ပြင်ဆင်ခြင်း။"
    },
    "exampleTranslation": {
      "id": "Tolong koreksi salah ketik.",
      "en": "Please correct the typo.",
      "my": "စာလုံးပေါင်းမှားယွင်းမှုကို ကျေးဇူးပြု၍ ပြင်ဆင်ပေးပါ။"
    }
  },
  "keliru ; salah langkah": {
    "meaning": {
      "id": "keliru ; salah langkah",
      "en": "to make a mistake; err",
      "my": "မှားယွင်းသည် ၊ လမ်းမှားသွားသည်"
    },
    "notes": {
      "id": "※ Berbeda dengan 謝る (minta maaf), ini berarti salah bertindak.",
      "en": "※ Unlike 謝る (to apologize), this means to make an erroneous decision.",
      "my": "※ 謝る (တောင်းပန်သည်) နှင့်မတူဘဲ၊ လုပ်ရပ်မှားယွင်းသွားခြင်းကို ဆိုလိုသည်။"
    },
    "exampleTranslation": {
      "id": "Jika salah menilai keputusan, akan jadi masalah besar.",
      "en": "If you make a mistaken judgment, it will become a serious issue.",
      "my": "ဆုံးဖြတ်ချက် လွဲမှားသွားပါက ပြဿနာကြီး ဖြစ်လာလိမ့်မည်။"
    }
  },
  "memenuhi (syarat, standar)": {
    "meaning": {
      "id": "memenuhi (syarat, standar)",
      "en": "to satisfy; fulfill",
      "my": "ပြည့်မီသည် ၊ ကျေနပ်စေသည်"
    },
    "notes": {
      "id": "※ Memenuhi standar, kualifikasi atau kebutuhan batin.",
      "en": "※ Fulfilling standards, qualifications, or personal needs.",
      "my": "※ စံချိန်စံညွှန်း၊ သတ်မှတ်ချက် သို့မဟုတ် လိုအပ်ချက်ကို ပြည့်မီစေခြင်း။"
    },
    "exampleTranslation": {
      "id": "Memenuhi kriteria kelulusan.",
      "en": "Meets all passing criteria.",
      "my": "အောင်မြင်မှု သတ်မှတ်ချက်များကို ပြည့်မီသည်။"
    }
  },
  "meminta ; menginginkan ; mencari": {
    "meaning": {
      "id": "meminta ; menginginkan ; mencari",
      "en": "to seek; request",
      "my": "တောင်းဆိုသည် ၊ လိုလားသည် ၊ ရှာဖွေသည်"
    },
    "notes": {
      "id": "※ Mengharapkan bantuan atau mencari solusi.",
      "en": "※ Seeking assistance or solutions.",
      "my": "※ အကူအညီတောင်းခံခြင်း သို့မဟုတ် ဖြေရှင်းချက်ရှာဖွေခြင်း။"
    },
    "exampleTranslation": {
      "id": "Suara orang-orang yang menginginkan perdamaian.",
      "en": "The voices of people seeking peace.",
      "my": "ငြိမ်းချမ်းရေးကို လိုလားသော ပြည်သူတို့၏ အသံ။"
    }
  },
  "rentang waktu dalam sehari": {
    "meaning": {
      "id": "rentang waktu dalam sehari",
      "en": "time slot; time zone",
      "my": "တစ်နေ့တာအတွင်း အချိန်အပိုင်းအခြား"
    },
    "notes": {
      "id": "※ Periode jam tertentu.",
      "en": "※ A specific period of hours in a day.",
      "my": "※ တစ်နေ့တာအတွင်း သတ်မှတ်ထားသော အချိန်ကာလအပိုင်းအခြား။"
    },
    "exampleTranslation": {
      "id": "Menghindari rentang waktu yang ramai padat.",
      "en": "Avoid crowded peak hours.",
      "my": "လူရှုပ်ထွေးသော အချိန်ပိုင်းကို ရှောင်ကြဉ်သည်။"
    }
  },
  "detik itu juga ; sesaat": {
    "meaning": {
      "id": "detik itu juga ; sesaat",
      "en": "moment; instant",
      "my": "ချက်ချင်းအခိုက်အတန့် ၊ ခေတ္တခဏ"
    },
    "notes": {
      "id": "※ Waktu yang sangat singkat sekejap mata.",
      "en": "※ An extremely brief instant in the blink of an eye.",
      "my": "※ မျက်စိတစ်မှိတ်အတွင်း အလွန်တိုတောင်းသော အခိုက်အတန့်။"
    },
    "exampleTranslation": {
      "id": "Pada detik itu juga, petir menyambar.",
      "en": "At that very instant, lightning struck.",
      "my": "ထိုအခိုက်အတန့်၌ပင် မိုးကြိုးပစ်ချခဲ့သည်။"
    }
  },
  "tanpa disadari": {
    "meaning": {
      "id": "tanpa disadari",
      "en": "before one knows it",
      "my": "သတိမထားမိဘဲ ၊ မသိလိုက်ဘဲ"
    },
    "notes": {
      "id": "※ Tanpa disadari waktu atau situasi berubah.",
      "en": "※ Time or circumstances passing unnoticed.",
      "my": "※ မိမိကိုယ်ကို သတိမပြုမိလိုက်ဘဲ အချိန်ကုန်လွန်သွားခြင်း။"
    },
    "exampleTranslation": {
      "id": "Tanpa disadari hari sudah senja.",
      "en": "Before I knew it, night had already fallen.",
      "my": "မသိလိုက်ဘဲ နေဝင်ရီတရော ရောက်ရှိသွားခဲ့ပြီ။"
    }
  },
  "waktu singkat": {
    "meaning": {
      "id": "waktu singkat",
      "en": "short time",
      "my": "အချိန်တိုတို"
    },
    "notes": {
      "id": "※ Durasi waktu yang pendek.",
      "en": "※ A brief length of duration.",
      "my": "※ အချိန်တိုတောင်းသော ကာလ။"
    },
    "exampleTranslation": {
      "id": "Belajar efisien dalam waktu singkat.",
      "en": "Study efficiently within a short time.",
      "my": "အချိန်တိုတိုအတွင်း ထိရောက်စွာ လေ့လာသည်။"
    }
  },
  "waktu yang lama ; berjam-jam": {
    "meaning": {
      "id": "waktu yang lama ; berjam-jam",
      "en": "long time; hours",
      "my": "အချိန်ကြာမြင့်စွာ ၊ နာရီပေါင်းများစွာ"
    },
    "notes": {
      "id": "※ Berlangsung berjam-jam.",
      "en": "※ Lasting for several hours.",
      "my": "※ နာရီပေါင်းများစွာ ကြာမြင့်စွာ ဖြစ်ပွားခြင်း။"
    },
    "exampleTranslation": {
      "id": "Operasi yang berlangsung lama telah selesai.",
      "en": "The lengthy operation was finally completed.",
      "my": "အချိန်ကြာမြင့်စွာ ပြုလုပ်ခဲ့သော ခွဲစိတ်မှု ပြီးဆုံးသွားသည်။"
    }
  },
  "pembedaan ; pemisahan": {
    "meaning": {
      "id": "pembedaan ; pemisahan",
      "en": "distinction; differentiation",
      "my": "ခွဲခြားခြင်း ၊ သီးခြားခွဲထုတ်ခြင်း"
    },
    "notes": {
      "id": "※ 区別 → tindakan MEMISAHKAN dua hal (区別がつく) .\n※ Perbedaannya sendiri → 相違 atau 違い。",
      "en": "※ 区別 → the act of separating/distinguishing two items.\n※ The difference itself → 相違 or 違い.",
      "my": "※ 区別 → အရာနှစ်ခုကို ခွဲခြားသိမြင်သော လုပ်ဆောင်ချက်။\n※ ၎င်းကွာခြားချက်ကိုယ်တိုင် → 相違 သို့မဟုတ် 違い။"
    },
    "exampleTranslation": {
      "id": "Membedakan antara yang baik dan buruk.",
      "en": "Distinguish between right and wrong.",
      "my": "အကောင်းနှင့် အဆိုးကို ခွဲခြားသိမြင်သည်။"
    }
  },
  "merebus lama hingga meresap": {
    "meaning": {
      "id": "merebus lama hingga meresap",
      "en": "to stew; simmer",
      "my": "ဟင်းရည်အရသာစိမ့်ဝင်အောင် ချက်ပြုတ်သည်"
    },
    "notes": {
      "id": "※ 込む di sini berarti lama dan sampai ke dalam — bukan sekadar 煮る。",
      "en": "※ 込む denotes deep, sustained simmering — beyond simple 煮る.",
      "my": "※ 込む သည် ရိုးရိုးပြုတ်ရုံသာမက အတွင်းထိ စိမ့်ဝင်အောင် အချိန်ကြာကြာ ချက်ပြုတ်ခြင်းကို ပြသည်။"
    },
    "exampleTranslation": {
      "id": "Merebus sup secara perlahan hingga meresap.",
      "en": "Slowly simmer the soup until flavors blend thoroughly.",
      "my": "ဟင်းရည်ကို အေးအေးဆေးဆေး စိမ့်ဝင်အောင် ချက်ပြုတ်သည်။"
    }
  },
  "meresap ; menyerap ke dalam": {
    "meaning": {
      "id": "meresap ; menyerap ke dalam",
      "en": "to soak into; permeate",
      "my": "စိမ့်ဝင်သည် ၊ စုပ်ယူသည်"
    },
    "notes": {
      "id": "※ Cairan meresap ke dalam kain, tanah, atau hati.",
      "en": "※ Liquids soaking deep into cloth, soil, or emotions.",
      "my": "※ အရည်သည် အဝတ်၊ မြေကြီး သို့မဟုတ် စိတ်နှလုံးထဲသို့ စိမ့်ဝင်သွားခြင်း။"
    },
    "exampleTranslation": {
      "id": "Rasa bumbu meresap ke dalam masakan.",
      "en": "The seasoning flavors soaked deeply into the dish.",
      "my": "ဟင်းခတ်အမွှေးအကြိုင်အရသာသည် ဟင်းထဲသို့ စိမ့်ဝင်သွားသည်။"
    }
  },
  "merajut ; menganyam": {
    "meaning": {
      "id": "merajut ; menganyam",
      "en": "to knit; braid",
      "my": "သိုးမွှေးထိုးသည် ၊ ကျစ်သည်"
    },
    "notes": {
      "id": "※ Menganyam benang atau rambut.",
      "en": "※ Knitting yarn or braiding strands.",
      "my": "※ သိုးမွှေးချည် ထိုးခြင်း သို့မဟုတ် ဆံပင်ကျစ်ခြင်း။"
    },
    "exampleTranslation": {
      "id": "Merajut baju hangat.",
      "en": "Knit a warm sweater.",
      "my": "ဆွယ်တာအင်္ကျီကို သိုးမွှေးထိုးသည်။"
    }
  },
  "mengendur ; melonggar": {
    "meaning": {
      "id": "mengendur ; melonggar",
      "en": "to become loose; slacken",
      "my": "လျော့ရဲသည်"
    },
    "notes": {
      "id": "※ Tali atau ketegangan menjadi kendur.",
      "en": "※ Ropes or tension growing slack.",
      "my": "※ ကြိုး သို့မဟုတ် တင်းမာမှု လျော့ရဲသွားခြင်း။"
    },
    "exampleTranslation": {
      "id": "Talinya mengendur.",
      "en": "The rope has become loose.",
      "my": "ကြိုးသည် လျော့ရဲနေသည်။"
    }
  },
  "menguasai sepenuhnya ; mengalahkan telak": {
    "meaning": {
      "id": "menguasai sepenuhnya ; mengalahkan telak",
      "en": "overwhelm; overpower",
      "my": "အပြတ်အသတ်အနိုင်ရသည် ၊ လွှမ်းမိုးသည်"
    },
    "notes": {
      "id": "※ Ungkapan kekuatan atau keunggulan yang jauh melampaui lawan.",
      "en": "※ Overwhelming strength vastly surpassing the rival.",
      "my": "※ ပြိုင်ဘက်ထက် အဆပေါင်းများစွာ သာလွန်သော အင်အားကို ဖော်ပြခြင်း။"
    },
    "exampleTranslation": {
      "id": "Mengalahkan tim lawan dengan keunggulan yang mutlak.",
      "en": "Defeated the opponent team with overwhelming prowess.",
      "my": "ပြိုင်ဘက်အသင်းကို အပြတ်အသတ် အသာစီးဖြင့် အနိုင်ယူခဲ့သည်။"
    }
  },
  "sangat mencolok ; signifikan": {
    "meaning": {
      "id": "sangat mencolok ; signifikan",
      "en": "remarkable; striking",
      "my": "သိသိသာသာဖြစ်သော ၊ ထင်ရှားသော"
    },
    "notes": {
      "id": "※ Perubahan atau kemajuan yang sangat terlihat jelas oleh mata.",
      "en": "※ Conspicuous change or remarkable progress.",
      "my": "※ မျက်မြင်ထင်ရှားသော တိုးတက်ပြောင်းလဲမှု။"
    },
    "exampleTranslation": {
      "id": "Dalam beberapa tahun terakhir, kemajuan teknologi sangat pesat dan mencolok.",
      "en": "In recent years, technological progress has been remarkable.",
      "my": "မကြာသေးမီနှစ်များအတွင်း နည်းပညာတိုးတက်မှုသည် သိသိသာသာ ထင်ရှားလာသည်။"
    }
  },
  "membingungkan ; rancu (mirip sehingga susah dibedakan)": {
    "meaning": {
      "id": "membingungkan ; rancu (mirip sehingga susah dibedakan)",
      "en": "confusing; misleading",
      "my": "ရှုပ်ထွေးစေသော ၊ ထင်ယောင်ထင်မှားဖြစ်စေသော"
    },
    "notes": {
      "id": "※ Dua hal yang begitu mirip sehingga rawan membuat salah sangka.",
      "en": "※ Items so similar they easily cause misunderstanding.",
      "my": "※ အလွန်ဆင်တူသဖြင့် အထင်မှားစေနိုင်သောအရာ။"
    },
    "exampleTranslation": {
      "id": "Namanya sangat mirip sehingga membingungkan.",
      "en": "The names are so alike that it is confusing.",
      "my": "နာမည်များ ဆင်တူလွန်းသဖြင့် ရှုပ်ထွေးစေသည်။"
    }
  },
  "perbedaan ; ketidakcocokan fakta": {
    "meaning": {
      "id": "perbedaan ; ketidakcocokan fakta",
      "en": "difference; discrepancy",
      "my": "ကွဲပြားခြားနားမှု ၊ မကိုက်ညီမှု"
    },
    "notes": {
      "id": "※ Perbedaan resmi/formal antara data atau kesaksian.",
      "en": "※ Formal discrepancy between testimonies or datasets.",
      "my": "※ အချက်အလက်များ သို့မဟုတ် သက်သေထွက်ဆိုချက်များအကြား ကွဲလွဲမှု။"
    },
    "exampleTranslation": {
      "id": "Terdapat perbedaan besar dalam klaim kedua belah pihak.",
      "en": "There is a major discrepancy between both claims.",
      "my": "နှစ်ဖက်စလုံး၏ အခိုင်အမာပြောဆိုချက်များအကြား ကြီးမားသောကွဲလွဲမှု ရှိသည်။"
    }
  },
  "koreksi ; pelurusan (keadaan buruk menjadi benar)": {
    "meaning": {
      "id": "koreksi ; pelurusan (keadaan buruk menjadi benar)",
      "en": "correction; rectification",
      "my": "တည့်မတ်ပြင်ဆင်ခြင်း"
    },
    "notes": {
      "id": "※ Memperbaiki ketimpangan, ketidakadilan, atau kesalahan sistemik.",
      "en": "※ Correcting inequalities or systemic defects.",
      "my": "※ မညီမျှမှု သို့မဟုတ် စနစ်ပိုင်းဆိုင်ရာ ချို့ယွင်းချက်ကို ပြင်ဆင်ခြင်း။"
    },
    "exampleTranslation": {
      "id": "Mengambil langkah-langkah untuk meluruskan kesenjangan.",
      "en": "Taking active measures to rectify the disparity.",
      "my": "ကွာဟချက်ကို တည့်မတ်ပြင်ဆင်ရန် အစီအမံများ ဆောင်ရွက်သည်။"
    }
  },
  "kompromi ; jalan tengah": {
    "meaning": {
      "id": "kompromi ; jalan tengah",
      "en": "compromise; concession",
      "my": "အပြန်အလှန်လိုက်လျောမှု ၊ အပေးအယူလုပ်ခြင်း"
    },
    "notes": {
      "id": "※ Mengalah sedikit demi mencapai kesepakatan bersama.",
      "en": "※ Mutual concession to reach agreement.",
      "my": "※ အားလုံးသဘောတူညီမှုရရှိရန် အပြန်အလှန် လိုက်လျောအပေးအယူလုပ်ခြင်း။"
    },
    "exampleTranslation": {
      "id": "Kedua pihak saling mendekat dan mencapai kompromi.",
      "en": "Both parties moved toward each other and reached a compromise.",
      "my": "နှစ်ဦးနှစ်ဖက် ညှိနှိုင်းပြီး အပြန်အလှန်လိုက်လျောမှု ရရှိခဲ့သည်။"
    }
  },
  "mencari-cari jalan keluar ; meraba-raba solusi": {
    "meaning": {
      "id": "mencari-cari jalan keluar ; meraba-raba solusi",
      "en": "groping; searching for a way",
      "my": "လမ်းစရှာဖွေခြင်း ၊ စမ်းတဝါးဝါးရှာသည်"
    },
    "notes": {
      "id": "※ Berusaha keras menemukan solusi dalam kegelapan/ketidakpastian.",
      "en": "※ Exploring solutions amidst uncertainty.",
      "my": "※ မသေချာမရေရာမှုများကြားမှ နည်းလမ်းရှာဖွေရန် ကြိုးပမ်းခြင်း။"
    },
    "exampleTranslation": {
      "id": "Sedang mencari-cari model bisnis baru.",
      "en": "Currently exploring new business models.",
      "my": "စီးပွားရေးပုံစံသစ်တစ်ခုကို စမ်းတဝါးဝါး ရှာဖွေနေသည်။"
    }
  },
  "menikmati ; menerima anugerah/manfaat": {
    "meaning": {
      "id": "menikmati ; menerima anugerah/manfaat",
      "en": "enjoyment; reception",
      "my": "ခံစားရယူသည် ၊ အကျိုးကျေးဇူးရရှိသည်"
    },
    "notes": {
      "id": "※ Menerima dan menikmati keuntungan, hak, atau alam bebas.",
      "en": "※ Receiving and relishing rights or blessings.",
      "my": "※ အခွင့်အရေး သို့မဟုတ် ကောင်းချီးအကျိုးကျေးဇူးများကို ခံစားရယူခြင်း။"
    },
    "exampleTranslation": {
      "id": "Menikmati sepenuhnya berkah dari perdamaian.",
      "en": "Fully enjoy the blessings of peace.",
      "my": "ငြိမ်းချမ်းရေး၏ အကျိုးကျေးဇူးများကို အပြည့်အဝ ခံစားရရှိသည်။"
    }
  },
  "pemutusan ; isolasi ; pemblokiran": {
    "meaning": {
      "id": "pemutusan ; isolasi ; pemblokiran",
      "en": "interception; isolation",
      "my": "ဖြတ်တောက်ခြင်း ၊ ပိတ်ဆို့ခြင်း"
    },
    "notes": {
      "id": "※ Memutus aliran listrik, informasi, atau lalu lintas.",
      "en": "※ Cutting off power, data, or traffic.",
      "my": "※ လျှပ်စစ်၊ သတင်းအချက်အလက် သို့မဟုတ် ယာဉ်ကြောကို ဖြတ်တောက်ခြင်း။"
    },
    "exampleTranslation": {
      "id": "Memutus arus lalu lintas pada saat darurat.",
      "en": "Cut off traffic flow during emergencies.",
      "my": "အရေးပေါ်အခြေအနေတွင် ယာဉ်ကြောကို ဖြတ်တောက်လိုက်သည်။"
    }
  },
  "runtuh ; ambruknya sistem/bangunan": {
    "meaning": {
      "id": "runtuh ; ambruknya sistem/bangunan",
      "en": "collapse; breakdown",
      "my": "ပြိုလဲပျက်စီးခြင်း"
    },
    "notes": {
      "id": "※ Runtuhnya tatanan, ekonomi, atau struktur fisik.",
      "en": "※ Collapse of economic systems or physical structures.",
      "my": "※ စီးပွားရေး သို့မဟုတ် ရုပ်ပိုင်းဆိုင်ရာ အဆောက်အအုံ ပြိုလဲပျက်စီးခြင်း။"
    },
    "exampleTranslation": {
      "id": "Runtuhnya ekonomi gelembung telah dimulai.",
      "en": "The collapse of the bubble economy has begun.",
      "my": "ပူဖောင်းစီးပွားရေး ပြိုလဲမှု စတင်ခဲ့ပြီ။"
    }
  },
  "akumulasi ; penimbunan ; penumpukan": {
    "meaning": {
      "id": "akumulasi ; penimbunan ; penumpukan",
      "en": "accumulation; store",
      "my": "စုဆောင်းမိခြင်း ၊ စုပုံလာခြင်း"
    },
    "notes": {
      "id": "※ Menumpuknya kelelahan, modal, atau pengalaman dari waktu ke waktu.",
      "en": "※ Build-up of fatigue, capital, or knowledge over time.",
      "my": "※ အချိန်ကြာလာသည်နှင့်အမျှ ပင်ပန်းနွမ်းနယ်မှု သို့မဟုတ် အတွေ့အကြုံ စုပုံလာခြင်း။"
    },
    "exampleTranslation": {
      "id": "Rasa lelah sehari-hari telah menumpuk.",
      "en": "Daily fatigue has accumulated heavily.",
      "my": "နေ့စဉ် ပင်ပန်းနွမ်းနယ်မှုများ စုပုံနေပြီဖြစ်သည်။"
    }
  },
  "akselerasi ; mendorong percepatan": {
    "meaning": {
      "id": "akselerasi ; mendorong percepatan",
      "en": "promotion; acceleration",
      "my": "အရှိန်မြှင့်တင်ခြင်း ၊ တွန်းအားပေးခြင်း"
    },
    "notes": {
      "id": "※ Mempercepat kemajuan proyek, metabolisme, atau perdagangan.",
      "en": "※ Accelerating projects, trade, or physical processes.",
      "my": "※ စီမံကိန်း သို့မဟုတ် ကုန်သွယ်ရေး တိုးတက်မှုကို အရှိန်မြှင့်တင်ပေးခြင်း။"
    },
    "exampleTranslation": {
      "id": "Mendorong percepatan pertukaran ekonomi kedua negara.",
      "en": "Promote economic exchanges between both nations.",
      "my": "နှစ်နိုင်ငံအကြား စီးပွားရေး ဖလှယ်မှုကို အရှိန်မြှင့်တင်ပေးသည်။"
    }
  },
  "penekanan ; pengendalian diri ; meredam": {
    "meaning": {
      "id": "penekanan ; pengendalian diri ; meredam",
      "en": "control; suppression",
      "my": "ထိန်းချုပ်ခြင်း ၊ ဖိနှိပ်ထိန်းသိမ်းခြင်း"
    },
    "notes": {
      "id": "※ Menahan emosi, inflasi, atau pertumbuhan bakteri.",
      "en": "※ Restraining emotion, inflation, or bacterial growth.",
      "my": "※ စိတ်ခံစားမှု၊ ငွေကြေးဖောင်းပွမှု သို့မဟုတ် ဘက်တီးရီးယားကို ထိန်းချုပ်ခြင်း။"
    },
    "exampleTranslation": {
      "id": "Meredam emosi dan berbicara dengan tenang.",
      "en": "Suppressed emotions and spoke calmly.",
      "my": "စိတ်ခံစားမှုကို ထိန်းချုပ်ပြီး အေးဆေးစွာ ပြောဆိုသည်။"
    }
  },
  "pelonggaran ; peredaan ketegangan": {
    "meaning": {
      "id": "pelonggaran ; peredaan ketegangan",
      "en": "relaxation; relief",
      "my": "လျှော့ပေါ့သက်သာစေခြင်း"
    },
    "notes": {
      "id": "※ Meringankan regulasi, rasa sakit, atau ketegangan politik.",
      "en": "※ Easing regulations, discomfort, or geopolitical strain.",
      "my": "※ စည်းမျဉ်းများ၊ နာကျင်မှု သို့မဟုတ် တင်းမာမှုကို လျှော့ပေါ့သက်သာစေခြင်း။"
    },
    "exampleTranslation": {
      "id": "Meminum obat untuk meredakan rasa sakit.",
      "en": "Take medicine to relieve the pain.",
      "my": "နာကျင်မှုကို သက်သာစေရန် ဆေးသောက်သည်။"
    }
  },
  "pemahaman mendalam ; menggenggam situasi": {
    "meaning": {
      "id": "pemahaman mendalam ; menggenggam situasi",
      "en": "grasp; comprehension",
      "my": "သဘောပေါက်နားလည်ခြင်း ၊ အခြေအနေကိုဆုပ်ကိုင်မိခြင်း"
    },
    "notes": {
      "id": "※ Memahami kondisi atau inti masalah dengan jelas dan akurat.",
      "en": "※ Firmly understanding core facts or realities.",
      "my": "※ အခြေအနေ သို့မဟုတ် ပြဿနာ၏ အနှစ်သာရကို တိကျစွာ သဘောပေါက်ခြင်း။"
    },
    "exampleTranslation": {
      "id": "Sangat penting untuk memahami situasi saat ini dengan tepat.",
      "en": "It is crucial to accurately grasp the current state.",
      "my": "လက်ရှိအခြေအနေကို တိကျစွာ နားလည်သဘောပေါက်ရန် အလွန်အရေးကြီးသည်။"
    }
  },
  "relevan ; memenuhi syarat kriteria": {
    "meaning": {
      "id": "relevan ; memenuhi syarat kriteria",
      "en": "corresponding to; falling under",
      "my": "ကိုက်ညီမှုရှိသော ၊ အကျုံးဝင်သော"
    },
    "notes": {
      "id": "※ Cocok dengan pasal, syarat, atau kondisi tertentu.",
      "en": "※ Matching specific clauses or qualifications.",
      "my": "※ သတ်မှတ်ထားသော စည်းကမ်းချက်နှင့် ကိုက်ညီအကျုံးဝင်ခြင်း။"
    },
    "exampleTranslation": {
      "id": "Hanya mereka yang memenuhi kriteria yang dapat mendaftar.",
      "en": "Only those who meet the qualifications may apply.",
      "my": "သတ်မှတ်ချက်နှင့် ကိုက်ညီသူများသာ လျှောက်ထားနိုင်သည်။"
    }
  },
  "wajar ; tepat ; masuk akal": {
    "meaning": {
      "id": "wajar ; tepat ; masuk akal",
      "en": "proper; reasonable",
      "my": "သင့်လျော်မှန်ကန်သော ၊ ကျိုးကြောင်းဆီလျော်သော"
    },
    "notes": {
      "id": "※ Keputusan atau kesimpulan yang pantas dan dapat diterima akal sehat.",
      "en": "※ Judgments deemed sound and justifiable.",
      "my": "※ ကျိုးကြောင်းဆီလျော်ပြီး လက်ခံနိုင်ဖွယ်ရှိသော ဆုံးဖြတ်ချက်။"
    },
    "exampleTranslation": {
      "id": "Keputusan itu dapat dikatakan sangat wajar dan tepat.",
      "en": "That conclusion can be considered very reasonable.",
      "my": "ထိုဆုံးဖြတ်ချက်သည် အလွန်သင့်လျော်မှန်ကန်သည်ဟု ဆိုနိုင်သည်။"
    }
  },
  "promosi khusus ; pengangkatan luar biasa": {
    "meaning": {
      "id": "promosi khusus ; pengangkatan luar biasa",
      "en": "selection; promotion",
      "my": "အထူးရာထူးတိုးမြှင့်ခြင်း"
    },
    "notes": {
      "id": "※ Memilih seseorang yang berprestasi melompati urutan senioritas.",
      "en": "※ Promoting exceptional talent over seniority.",
      "my": "※ ဝါစဉ်ကို ကျော်လွန်၍ အရည်အချင်းရှိသူကို ရာထူးတိုးမြှင့်ခြင်း။"
    },
    "exampleTranslation": {
      "id": "Karyawan muda dipromosikan secara istimewa memegang peran besar.",
      "en": "A young employee was promoted to an important role.",
      "my": "လူငယ်ဝန်ထမ်းတစ်ဦးသည် အရေးကြီးတာဝန်အတွက် အထူးရာထူးတိုးပေးခြင်း ခံရသည်။"
    }
  },
  "menaklukkan ; mengatasi rintangan": {
    "meaning": {
      "id": "menaklukkan ; mengatasi rintangan",
      "en": "conquest; overcoming",
      "my": "ကျော်လွှားအောင်မြင်သည်"
    },
    "notes": {
      "id": "※ Menang atas kelemahan diri, trauma, atau penyakit.",
      "en": "※ Overcoming personal weaknesses or illness.",
      "my": "※ မိမိ၏အားနည်းချက် သို့မဟုတ် ရောဂါဝေဒနာကို ကျော်လွှားအောင်မြင်ခြင်း။"
    },
    "exampleTranslation": {
      "id": "Mengatasi kelemahan diri dan meraih kemenangan.",
      "en": "Overcame weaknesses and seized victory.",
      "my": "အားနည်းချက်များကို ကျော်လွှားပြီး အောင်ပွဲဆွတ်ခူးခဲ့သည်။"
    }
  },
  "tanda-tanda awal ; gelagat": {
    "meaning": {
      "id": "tanda-tanda awal ; gelagat",
      "en": "sign; symptom",
      "my": "ရှေ့ပြေးလက္ခဏာ ၊ အရိပ်အယောင်"
    },
    "notes": {
      "id": "※ Gejala awal sebelum peristiwa besar atau penyakit terjadi.",
      "en": "※ Early symptoms preceding events or disease.",
      "my": "※ အဖြစ်အပျက်ကြီး မဖြစ်မီ ပေါ်ပေါက်လာသော ရှေ့ပြေးအရိပ်အယောင်။"
    },
    "exampleTranslation": {
      "id": "Tanda-tanda pemulihan ekonomi mulai tampak.",
      "en": "Signs of economic recovery are beginning to show.",
      "my": "စီးပွားရေး ပြန်လည်ဦးမော့လာမည့် အရိပ်အယောင်များ စတင်တွေ့မြင်ရသည်။"
    }
  },
  "bangkrut ; hancur berantakan": {
    "meaning": {
      "id": "bangkrut ; hancur berantakan",
      "en": "failure; bankruptcy",
      "my": "ပျက်စီးဆုတ်ယုတ်ခြင်း ၊ ဒေဝါလီခံရခြင်း"
    },
    "notes": {
      "id": "※ Runtuhnya keuangan atau gagalnya rencana secara telak.",
      "en": "※ Collapse of fiscal plans or complete failure.",
      "my": "※ ငွေရေးကြေးရေး ပျက်စီးခြင်း သို့မဟုတ် အစီအစဉ်များ အလုံးစုံပျက်စီးခြင်း။"
    },
    "exampleTranslation": {
      "id": "Kondisi finansial berada di ambang kebangkrutan.",
      "en": "Finances are teetering on the verge of collapse.",
      "my": "ဘဏ္ဍာရေးအခြေအနေသည် ဒေဝါလီခံရမည့် အန္တရာယ်နှင့် ရင်ဆိုင်နေရသည်။"
    }
  },
  "pada umumnya ; garis besarnya": {
    "meaning": {
      "id": "pada umumnya ; garis besarnya",
      "en": "generally; mostly",
      "my": "ယေဘုယျအားဖြင့် ၊ အကြမ်းဖျင်းအားဖြင့်"
    },
    "notes": {
      "id": "※ Sebagian besar atau secara garis umum sudah sesuai rencana.",
      "en": "※ Largely following plans on the whole.",
      "my": "※ အကြမ်းဖျင်းအားဖြင့် အစီအစဉ်အတိုင်း ချောမွေ့စွာ သွားနေခြင်း။"
    },
    "exampleTranslation": {
      "id": "Rencana secara garis besar berjalan lancar.",
      "en": "The project is mostly proceeding smoothly.",
      "my": "အစီအစဉ်သည် ယေဘုယျအားဖြင့် ချောမွေ့စွာ ဆောင်ရွက်လျက်ရှိသည်။"
    }
  },
  "sebelumnya ; di awal waktu": {
    "meaning": {
      "id": "sebelumnya ; di awal waktu",
      "en": "beforehand; in advance",
      "my": "ကြိုတင်၍ ၊ ကြိုတင်ကာလတွင်"
    },
    "notes": {
      "id": "※ Melakukan persiapan atau pemberitahuan sebelum peristiwa terjadi.",
      "en": "※ Preparing or notifying well in advance.",
      "my": "※ ကိစ္စမတိုင်မီ ကြိုတင်ပြင်ဆင်မှု သို့မဟုတ် အသိပေးမှု ပြုလုပ်ခြင်း။"
    },
    "exampleTranslation": {
      "id": "Menghitung biayanya terlebih dahulu di awal.",
      "en": "Calculate the estimated costs beforehand.",
      "my": "ကုန်ကျစရိတ်ကို ကြိုတင်တွက်ချက်ထားသည်။"
    }
  },
  "semata-mata ; melulu fokus pada": {
    "meaning": {
      "id": "semata-mata ; melulu fokus pada",
      "en": "entirely; solely",
      "my": "သက်သက်သာ ၊ အဓိကအားဖြင့်"
    },
    "notes": {
      "id": "※ Hampir seluruh waktu atau energinya dialokasikan hanya untuk hal itu.",
      "en": "※ Devoting almost all energy or time solely to one endeavor.",
      "my": "※ အချိန်နှင့် လုပ်အားအားလုံးကို အရာတစ်ခုတည်းအတွက်သာ အသုံးပြုခြင်း။"
    },
    "exampleTranslation": {
      "id": "Hari libur semata-mata kuhabiskan untuk membaca buku.",
      "en": "I spend my holidays solely reading books.",
      "my": "အားလပ်ရက်များကို စာဖတ်ခြင်းသက်သက်ဖြင့်သာ ကုန်လွန်စေသည်။"
    }
  },
  "apakah benar-benar (keraguan / pembuktian)": {
    "meaning": {
      "id": "apakah benar-benar (keraguan / pembuktian)",
      "en": "really; as expected",
      "my": "တကယ်ပဲလား ၊ ထင်ထားသည့်အတိုင်း"
    },
    "notes": {
      "id": "※ Sering dipakai dalam kalimat tanya keraguan atau kesesuaian prediksi.",
      "en": "※ Questioning whether reality matches predictions.",
      "my": "※ သံသယမေးခွန်း သို့မဟုတ် ခန့်မှန်းချက် မှန်မမှန် စစ်ဆေးရာတွင် သုံးသည်။"
    },
    "exampleTranslation": {
      "id": "Apakah hal yang dia katakan benar-benar nyata?",
      "en": "Could what he said really be true?",
      "my": "သူပြောခဲ့သောအရာသည် အမှန်တကယ်ပဲ ဖြစ်နိုင်ပါ့မလား။"
    }
  },
  "mengungguli jauh ; melampaui kehebatan": {
    "meaning": {
      "id": "mengungguli jauh ; melampaui kehebatan",
      "en": "surpassing; outstripping",
      "my": "သာလွန်သွားသည် ၊ ကျော်တက်သည်"
    },
    "notes": {
      "id": "※ Prestasi atau kemampuan yang jauh melewati standar orang lain.",
      "en": "※ Excellence vastly exceeding predecessors.",
      "my": "※ အခြားသူများ၏ စံနှုန်းထက် အဆပေါင်းများစွာ သာလွန်ထူးချွန်ခြင်း။"
    },
    "exampleTranslation": {
      "id": "Bakatnya jauh mengungguli pendahulunya.",
      "en": "His talent far surpasses that of his predecessors.",
      "my": "သူ့ပါရမီသည် ယခင်လူများထက် များစွာသာလွန်နေသည်။"
    }
  },
  "mempercayakan penuh wewenang ; menyerahkan": {
    "meaning": {
      "id": "mempercayakan penuh wewenang ; menyerahkan",
      "en": "to entrust; abandon to",
      "my": "လွှဲအပ်သည် ၊ အပ်နှင်းသည်"
    },
    "notes": {
      "id": "※ Menyerahkan nasib atau keputusan akhir kepada orang lain.",
      "en": "※ Entrusting final destiny or discretion to others.",
      "my": "※ ဆုံးဖြတ်ပိုင်ခွင့် သို့မဟုတ် ကံကြမ္မာကို အခြားသူထံ လွှဲအပ်ခြင်း။"
    },
    "exampleTranslation": {
      "id": "Menyerahkan seluruh keputusan kepada sang pakar.",
      "en": "Entrust all decisions entirely to the specialist.",
      "my": "ဆုံးဖြတ်ချက်အားလုံးကို ကျွမ်းကျင်သူထံ လွှဲအပ်ထားသည်။"
    }
  },
  "memancarkan suasana ; menciptakan aura": {
    "meaning": {
      "id": "memancarkan suasana ; menciptakan aura",
      "en": "to create (an atmosphere); exude",
      "my": "ခံစားမှုလေထု ဖန်တီးပေးသည်"
    },
    "notes": {
      "id": "※ Memancarkan kesan atau atmosfer khas tertentu secara alami.",
      "en": "※ Naturally exuding a distinct ambiance.",
      "my": "※ ထူးခြားသော ခံစားမှု သို့မဟုတ် အငွေ့အသက်ကို သဘာဝကျစွာ ထုတ်ဖော်ပေးခြင်း။"
    },
    "exampleTranslation": {
      "id": "Memancarkan suasana tenang yang sangat khas.",
      "en": "Exudes a uniquely serene atmosphere.",
      "my": "ထူးခြားငြိမ်သက်သော အငွေ့အသက်ကို ဖန်တီးပေးထားသည်။"
    }
  },
  "memahami maksud tersirat ; berempati": {
    "meaning": {
      "id": "memahami maksud tersirat ; berempati",
      "en": "to understand; surmise",
      "my": "ရည်ရွယ်ချက်ကို ရိပ်မိနားလည်သည်"
    },
    "notes": {
      "id": "※ Menangkap perasaan atau konteks tanpa perlu diucapkan terang-terangan.",
      "en": "※ Grasping unspoken sentiments intuitively.",
      "my": "※ ပွင့်လင်းစွာ မပြောသော်လည်း စိတ်ခံစားမှု သို့မဟုတ် ရည်ရွယ်ချက်ကို ရိပ်မိခြင်း။"
    },
    "exampleTranslation": {
      "id": "Memahami maksud tersirat lawan bicara dengan tepat.",
      "en": "Accurately surmised the speaker's true intentions.",
      "my": "စကားပြောဖော်၏ မဖော်ပြသော ရည်ရွယ်ချက်ကို တိကျစွာ ရိပ်မိနားလည်သည်။"
    }
  },
  "kemalasan ; bermalas-malasan": {
    "meaning": {
      "id": "kemalasan ; bermalas-malasan",
      "en": "laziness; sloth",
      "my": "ပျင်းရိခြင်း ၊ အပျင်းကြီးခြင်း"
    },
    "notes": {
      "id": "※ Sifat malas yang membiarkan kewajiban terbengkalai.",
      "en": "※ Slothful negligence of responsibilities.",
      "my": "※ တာဝန်ဝတ္တရားများကို လျစ်လျူရှုစေသော အပျင်းကြီးသည့် အလေ့အထ။"
    },
    "exampleTranslation": {
      "id": "Memperingatkan dengan tegas sikap hidup yang malas.",
      "en": "Sternly admonish a slothful lifestyle.",
      "my": "ပျင်းရိသော နေထိုင်မှုပုံစံကို ပြင်းထန်စွာ သတိပေးဆုံးမသည်။"
    }
  },
  "ketiadaan ; defisit ; kurangnya suatu hal": {
    "meaning": {
      "id": "ketiadaan ; defisit ; kurangnya suatu hal",
      "en": "lack; absence",
      "my": "ချို့တဲ့ခြင်း ၊ ကင်းမဲ့ခြင်း"
    },
    "notes": {
      "id": "※ Hilangnya moral, rasa tanggung jawab, atau kesadaran.",
      "en": "※ Absence of ethics, responsibility, or awareness.",
      "my": "※ တာဝန်သိစိတ် သို့မဟုတ် သတိရှိမှု ကင်းမဲ့ချို့တဲ့ခြင်း။"
    },
    "exampleTranslation": {
      "id": "Ketiadaan kesadaran manajemen risiko telah memicu kecelakaan.",
      "en": "A lack of risk management awareness caused the accident.",
      "my": "အန္တရာယ်စီမံခန့်ခွဲမှု သတိကင်းမဲ့ခြင်းကြောင့် မတော်တဆမှု ဖြစ်ပွားခဲ့သည်။"
    }
  },
  "membangkitkan ; menggugah perhatian": {
    "meaning": {
      "id": "membangkitkan ; menggugah perhatian",
      "en": "arousing; awakening",
      "my": "အာရုံစိုက်လာအောင် နှိုးဆွပေးခြင်း"
    },
    "notes": {
      "id": "※ Menggugah kesadaran masyarakat atau rasa simpati.",
      "en": "※ Awakening public attention or sympathy.",
      "my": "※ လူထု၏ အာရုံစိုက်မှု သို့မဟုတ် စာနာမှုကို နှိုးဆွပေးခြင်း။"
    },
    "exampleTranslation": {
      "id": "Menggugah perhatian dari opini publik luas.",
      "en": "Arouse the attention of public opinion.",
      "my": "အများပြည်သူ၏ အာရုံစိုက်မှုကို နှိုးဆွပေးသည်။"
    }
  },
  "tindakan penanganan ; langkah darurat": {
    "meaning": {
      "id": "tindakan penanganan ; langkah darurat",
      "en": "measure; step",
      "my": "ဆောင်ရွက်ချက် ၊ အရေးယူဆောင်ရွက်မှု"
    },
    "notes": {
      "id": "※ Keputusan kebijakan resmi untuk menanggulangi situasi krisis.",
      "en": "※ Official policy steps to address crises.",
      "my": "※ အကျပ်အတည်းကို ဖြေရှင်းရန် တရားဝင် ချမှတ်သောအရေးယူဆောင်ရွက်မှု။"
    },
    "exampleTranslation": {
      "id": "Segera memberlakukan tindakan pengamanan darurat.",
      "en": "Promptly enacted emergency security measures.",
      "my": "အရေးပေါ် လုံခြုံရေး အစီအမံများကို ချက်ချင်းချမှတ်ခဲ့သည်။"
    }
  },
  "memperingatkan keras ; menasihati agar waspada": {
    "meaning": {
      "id": "memperingatkan keras ; menasihati agar waspada",
      "en": "to warn; admonish",
      "my": "သတိပေးဆုံးမသည်"
    },
    "notes": {
      "id": "※ Menegur atau mengingatkan diri sendiri agar tidak lengah.",
      "en": "※ Warning oneself against complacency.",
      "my": "※ သတိမပေါ့ဆစေရန် မိမိကိုယ်ကို သတိပေးဆုံးမခြင်း။"
    },
    "exampleTranslation": {
      "id": "Mengingatkan diri sendiri agar tidak lengah sedikit pun.",
      "en": "Admonish oneself not to let down one's guard.",
      "my": "ပေါ့ဆမှုမရှိစေရန် မိမိကိုယ်ကို သတိပေးဆင်ခြင်သည်။"
    }
  },
  "menjungkirbalikkan ; membalikkan keadaan": {
    "meaning": {
      "id": "menjungkirbalikkan ; membalikkan keadaan",
      "en": "to overturn; upset",
      "my": "ဇောက်ထိုးလှန်ပစ်သည် ၊ ပြောင်းပြန်လှန်သည်"
    },
    "notes": {
      "id": "※ Membalikkan vonis pengadilan, teori lama, atau dugaan.",
      "en": "※ Overturning established verdicts or conventional beliefs.",
      "my": "※ တရားရုံးစီရင်ချက် သို့မဟုတ် သမားရိုးကျအယူအဆကို ပြောင်းပြန်လှန်ပစ်ခြင်း။"
    },
    "exampleTranslation": {
      "id": "Telah ditemukan penemuan besar yang menjungkirbalikkan akal sehat.",
      "en": "A breakthrough discovery that overturns conventional wisdom.",
      "my": "သမားရိုးကျအတွေးအခေါ်ကို ဇောက်ထိုးလှန်ပစ်နိုင်သော တွေ့ရှိချက်ကြီးတစ်ခု ပေါ်ထွက်လာသည်။"
    }
  },
  "merintangi ; menghalangi laju jalan": {
    "meaning": {
      "id": "merintangi ; menghalangi laju jalan",
      "en": "to obstruct; prevent",
      "my": "အတားအဆီးပြုသည် ၊ ဟန့်တားသည်"
    },
    "notes": {
      "id": "※ Menghambat kemajuan atau laju seseorang.",
      "en": "※ Obstructing advance or progress.",
      "my": "※ ရှေ့သို့ဆက်သွားမှုကို တားဆီးပိတ်ပင်ခြင်း။"
    },
    "exampleTranslation": {
      "id": "Dinding batu raksasa yang merintangi arah perjalanan.",
      "en": "A massive rock wall obstructing the route.",
      "my": "ခရီးလမ်းကို ဟန့်တားထားသော ဧရာမ ကျောက်တံတိုင်းကြီး။"
    }
  },
  "mendorong agar bertindak ; mendesak": {
    "meaning": {
      "id": "mendorong agar bertindak ; mendesak",
      "en": "to urge; prompt",
      "my": "တိုက်တွန်းနှိုးဆော်သည်"
    },
    "notes": {
      "id": "※ Meminta atau memotivasi orang lain untuk segera mengambil langkah.",
      "en": "※ Prompting others to take timely action.",
      "my": "※ အခြားသူများ အမြန်ဆုံး အရေးယူဆောင်ရွက်ရန် တိုက်တွန်းခြင်း။"
    },
    "exampleTranslation": {
      "id": "Memasang papan peringatan untuk mendorong kehati-hatian.",
      "en": "Erected signs to urge cautious behavior.",
      "my": "သတိထားဆင်ခြင်ရန် တိုက်တွန်းသော ဆိုင်းဘုတ်ကို စိုက်ထူထားသည်။"
    }
  },
  "luput dari ; lolos dari marabahaya": {
    "meaning": {
      "id": "luput dari ; lolos dari marabahaya",
      "en": "to escape; avoid",
      "my": "လွတ်မြောက်သည် ၊ ကင်းလွတ်ခွင့်ရသည်"
    },
    "notes": {
      "id": "※ Selamat dari hukuman, bencana, atau jeratan maut.",
      "en": "※ Escaping penalties, disaster, or fatality.",
      "my": "※ ပြစ်ဒဏ်၊ ဘေးအန္တရာယ် သို့မဟုတ် သေဘေးမှ လွတ်မြောက်ခြင်း။"
    },
    "exampleTranslation": {
      "id": "Secara ajaib berhasil luput dari kematian.",
      "en": "Miraculously escaped death.",
      "my": "အံ့ဩဖွယ်ရာ သေဘေးမှ လွတ်မြောက်ခဲ့သည်။"
    }
  },
  "lihai ; terampil penuh kecerdikan": {
    "meaning": {
      "id": "lihai ; terampil penuh kecerdikan",
      "en": "skillful; clever",
      "my": "ကျွမ်းကျင်ပါးနပ်သော"
    },
    "notes": {
      "id": "※ Keterampilan teknik atau kepandaian berbicara yang sangat halus.",
      "en": "※ Subtle artistry or clever rhetoric.",
      "my": "※ စကားပြောပါးနပ်မှု သို့မဟုတ် လက်မှုပညာ အထူးကျွမ်းကျင်ခြင်း။"
    },
    "exampleTranslation": {
      "id": "Meyakinkan lawan bicara dengan pilihan kata yang lihai.",
      "en": "Persuaded the listener with skillful phrasing.",
      "my": "ပါးနပ်သော စကားအသုံးအနှုန်းဖြင့် တစ်ဖက်လူကို နားချနိုင်ခဲ့သည်။"
    }
  },
  "khidmat ; hening penuh kesakralan": {
    "meaning": {
      "id": "khidmat ; hening penuh kesakralan",
      "en": "solemn; grave",
      "my": "လေးနက်တည်ကြည်သော"
    },
    "notes": {
      "id": "※ Suasana upacara yang sakral dan membuat orang tertunduk hormat.",
      "en": "※ Sacred, solemn ceremonial gravity.",
      "my": "※ မြင့်မြတ်တည်ကြည်ပြီး လေးစားမှုဖြစ်စေသော အခမ်းအနား အငွေ့အသက်။"
    },
    "exampleTranslation": {
      "id": "Upacara diselenggarakan dalam suasana yang khidmat.",
      "en": "The ceremony was held in a solemn atmosphere.",
      "my": "အခမ်းအနားကို လေးနက်တည်ကြည်သော အငွေ့အသက်ဖြင့် ကျင်းပခဲ့သည်။"
    }
  }
};

export const RELEVANT_TRANSLATIONS: Record<string, Record<Language, string>> = {
  "melekat pada diri (kebiasaan / kecakapan)": {
    "id": "melekat pada diri (kebiasaan / kecakapan)",
    "en": "firmly ingrained (habits / skills)",
    "my": "မိမိကိုယ်တွင်း စွဲမြဲသွားခြင်း (အလေ့အကျင့် / ကျွမ်းကျင်မှု)"
  },
  "mencegah sebelum terjadi (collocation penting N2)": {
    "id": "mencegah sebelum terjadi (collocation penting N2)",
    "en": "prevent before it occurs (high-yield N2 collocation)",
    "my": "မဖြစ်မီက ကြိုတင်ကာကွယ်ခြင်း (အရေးကြီး N2 စကားတွဲ)"
  },
  "memberi jeda / jarak": {
    "id": "memberi jeda / jarak",
    "en": "leave a gap / maintain distance",
    "my": "ကြားအကွာအဝေး ချန်ထားသည်"
  },
  "merebus lama hingga bumbu meresap": {
    "id": "merebus lama hingga bumbu meresap",
    "en": "simmer long until seasonings permeate",
    "my": "အရသာစိမ့်ဝင်အောင် အချိန်ကြာကြာ ချက်သည်"
  },
  "bertumpuk-tumpuk / berakumulasi": {
    "id": "bertumpuk-tumpuk / berakumulasi",
    "en": "piling up / accumulating",
    "my": "ထပ်ဆင့်စုပုံလာခြင်း"
  },
  "belum matang / masih mentah": {
    "id": "belum matang / masih mentah",
    "en": "immature / not yet ripe",
    "my": "မရင့်ကျက်သေးသော ၊ မမှည့်သေးသော"
  },
  "merevisi / memperbaiki sebagian": {
    "id": "merevisi / memperbaiki sebagian",
    "en": "revise / partially correct",
    "my": "တည်းဖြတ်ပြင်ဆင်ခြင်း"
  },
  "keliru menilai / salah menaksir situasi": {
    "id": "keliru menilai / salah menaksir situasi",
    "en": "misjudge / misread the situation",
    "my": "အကဲဖြတ်မှု လွဲချော်ခြင်း"
  },
  "tabir asap / pengalihan isu": {
    "id": "tabir asap / pengalihan isu",
    "en": "smokescreen / diversion",
    "my": "မီးခိုးအကာအရံ ၊ အာရုံလွှဲခြင်း"
  },
  "keseluruhan (lawan kata dari 一部)": {
    "id": "keseluruhan (lawan kata dari 一部)",
    "en": "the whole / entirety (antonym of 一部)",
    "my": "တစ်ခုလုံး အလုံးစုံ (一部 ၏ ဆန့်ကျင်ဘက်)"
  },
  "waktu yang lama (lawan kata)": {
    "id": "waktu yang lama (lawan kata)",
    "en": "a long time (antonym)",
    "my": "အချိန်ကြာမြင့်စွာ (ဆန့်ကျင်ဘက်)"
  },
  "waktu singkat (lawan kata)": {
    "id": "waktu singkat (lawan kata)",
    "en": "a short time (antonym)",
    "my": "အချိန်တိုတို (ဆန့်ကျင်ဘက်)"
  },
  "pengasuhan anak": {
    "id": "pengasuhan anak",
    "en": "child rearing / parenting",
    "my": "ကလေးပြုစုပျိုးထောင်ခြင်း"
  },
  "detik yang sangat singkat (ragam bahasa tulis N1)": {
    "id": "detik yang sangat singkat (ragam bahasa tulis N1)",
    "en": "a fleeting split second (formal N1 written register)",
    "my": "မျက်စိတစ်မှိတ် စက္ကန့်ပိုင်း (N1 စာအသုံး)"
  }
};

/**
 * Returns localized Kotoba object with meaning, notes and example translation in the active language.
 */
/**
 * Translates notes and part of speech strings (e.g. 'Kelas kata: v')
 */
export function localizeNotes(notes: string | null | undefined, lang: Language): string {
  if (!notes) return '';
  if (lang === 'id') return notes;

  let translated = notes.replace(/Kelas kata:\s*([a-zA-Z0-9\-_]+)/gi, (_match, pos) => {
    const p = pos.toLowerCase();
    if (lang === 'en') {
      const posMap: Record<string, string> = {
        n: 'Noun',
        v: 'Verb',
        v1: 'Ichidan Verb',
        v5: 'Godan Verb',
        'adj-i': 'I-Adjective',
        'adj-na': 'Na-Adjective',
        adv: 'Adverb',
        conj: 'Conjunction',
        exp: 'Expression',
        num: 'Numeric',
        prt: 'Particle',
      };
      return 'Part of speech: ' + (posMap[p] || pos);
    }
    if (lang === 'my') {
      const posMap: Record<string, string> = {
        n: 'နာမ် (Noun)',
        v: 'ကြိယာ (Verb)',
        v1: 'ကြိယာ (Ichidan Verb)',
        v5: 'ကြိယာ (Godan Verb)',
        'adj-i': 'နာမဝိသေသန (I-Adj)',
        'adj-na': 'နာမဝိသေသန (Na-Adj)',
        adv: 'ကြိယာဝိသေသန (Adverb)',
        conj: 'စကားစပ် (Conjunction)',
        exp: 'အသုံးအနှုန်း (Expression)',
        num: 'ဂဏန်းသင်္ချာ (Numeric)',
        prt: 'ဝိဘတ် (Particle)',
      };
      return 'စကားရပ်အမျိုးအစား- ' + (posMap[p] || pos);
    }
    return notes;
  });

  // Instead of dropping notes into 'Translation unavailable', translate common Indonesian patterns cleanly
  if (lang === 'en') {
    translated = translated
      .replace(/dipakai untuk|digunakan untuk/gi, 'used for')
      .replace(/berbeda dengan/gi, 'different from')
      .replace(/kesalahan umum/gi, 'common mistake')
      .replace(/bentuk/gi, 'form')
      .replace(/contoh/gi, 'example')
      .replace(/bagian/gi, 'part')
      .replace(/khusus/gi, 'special')
      .replace(/perhatikan/gi, 'note');
  } else if (lang === 'my') {
    translated = translated
      .replace(/dipakai untuk|digunakan untuk/gi, 'အတွက် အသုံးပြုသည်')
      .replace(/berbeda dengan/gi, 'နှင့် ကွဲပြားသည်')
      .replace(/kesalahan umum/gi, 'အမှားများ')
      .replace(/bentuk/gi, 'ပုံစံ')
      .replace(/contoh/gi, 'ဥပမာ')
      .replace(/bagian/gi, 'အစိတ်အပိုင်း')
      .replace(/khusus/gi, 'အထူး')
      .replace(/perhatikan/gi, 'သတိပြုရန်');
  }

  return translated;
}

export function localizeKotoba(k: Kotoba, lang: Language): Kotoba {
  if (lang === 'id' || !k) return k;

  const key = k.kanji || k.hiragana;
  const trans: LocalizedWordData | undefined = 
    (k.id ? KOTOBA_BY_ID[String(k.id)] : undefined) || 
    (key ? KOTOBA_TRANSLATIONS[key] : undefined) || 
    (k.meaning ? MEANING_LOOKUP[k.meaning] : undefined);

  let localizedMeaning = trans?.meaning?.[lang];
  if (!localizedMeaning) {
    if (lang === 'my') {
      const mMy = (k as any).meaning_my || (k as any).meaningMy;
      if (mMy && typeof mMy === 'string' && mMy.trim().length > 0 && /[\u1000-\u109F]/.test(mMy)) {
        localizedMeaning = mMy.trim();
      }
    } else if (lang === 'en') {
      const mEn = k.meaning_en || (k as any).meaningEn || (k as any).meaning_en;
      if (mEn && typeof mEn === 'string' && mEn.trim().length > 0 && !/[\u1000-\u109F]/.test(mEn)) {
        localizedMeaning = mEn.trim();
      }
    }

    // Check ALL_CURRICULUM_MEANINGS by kanji or hiragana
    if (!localizedMeaning && key) {
      const curMatch = (ALL_CURRICULUM_MEANINGS as Record<string, { en: string; my: string }>)[key];
      if (curMatch) {
        const val = lang === 'en' ? curMatch.en : curMatch.my;
        if (val) localizedMeaning = val;
      }
    }

    if (!localizedMeaning && k.meaning) {
      const translated = translateMeaningString(k.meaning, lang);
      if (translated && translated !== k.meaning) {
        localizedMeaning = translated;
      }
    }
  }

  const rawNotes = trans?.notes?.[lang] || k.notes;
  const localizedNotes = rawNotes ? localizeNotes(rawNotes, lang) : rawNotes;
  
  let localizedExample = trans?.exampleTranslation?.[lang];
  if (!localizedExample && k.example_sentence) {
    const sMap = (EXAMPLE_SENTENCE_TRANSLATIONS as Record<string, Record<string, string>>)[k.example_sentence.trim()];
    if (sMap && sMap[lang]) {
      localizedExample = sMap[lang];
    } else if (lang === 'my' && sMap && sMap.my) {
      localizedExample = sMap.my;
    }
  }

  // Ensure fallback is clean: never leak Indonesian into Myanmar if English is available as cleaner intermediate
  const fallbackMeaning = lang === 'en' 
    ? ((k as any)?.meaning_en || (k as any)?.meaningEn || k.meaning) 
    : (lang === 'my' 
        ? ((k as any)?.meaning_my || (k as any)?.meaningMy || (k as any)?.meaning_en || (k as any)?.meaningEn || k.meaning) 
        : k.meaning);

  return {
    ...k,
    meaning: localizedMeaning || fallbackMeaning,
    notes: localizedNotes,
    example_sentence_meaning: localizedExample || undefined,
  };
}

/**
 * Returns localized Kanji object with meanings and radical meaning in the active language.
 */
export function localizeKanji(k: Kanji, lang: Language): Kanji {
  if (lang === 'id' || !k) return k;

  const trans = KANJI_TRANSLATIONS[k.character] || ALL_KANJI_TRANSLATIONS[k.character];
  if (trans) {
    return {
      ...k,
      meanings: trans.meanings[lang] || k.meanings,
      radical_meaning: trans.radicalMeaning[lang] || k.radical_meaning,
    };
  }

  // Check character direct match in ALL_CURRICULUM_MEANINGS
  const charCurriculum = (ALL_CURRICULUM_MEANINGS as Record<string, { en: string; my: string }>)[k.character];
  if (charCurriculum) {
    const val = lang === 'en' ? charCurriculum.en : charCurriculum.my;
    if (val && !val.includes('unavailable')) {
      const list = val.split(/[,;]\s*/).map((s) => s.trim()).filter(Boolean);
      if (list.length > 0) {
        return { ...k, meanings: list };
      }
    }
  }

  if (lang === 'my') {
    const mMy = (k as any).meaning_my || (k as any).meaningMy;
    if (mMy && typeof mMy === 'string' && mMy.trim().length > 0 && !mMy.includes('unavailable')) {
      const list = mMy.split(/[,;]\s*/).map((s) => s.trim()).filter(Boolean);
      return { ...k, meanings: list };
    }
    // Fall back to translating existing meanings
    if (Array.isArray(k.meanings) && k.meanings.length > 0) {
      const translatedList = k.meanings
        .map((m) => ({ orig: m, trans: translateMeaningString(m, 'my') }))
        .filter((item) => Boolean(item.trans && item.trans !== item.orig))
        .map((item) => item.trans);
      if (translatedList.length > 0) {
        return { ...k, meanings: translatedList };
      }
    }
  }

  if (lang === 'en') {
    const mEn = (k as any).meaning_en || (k as any).meaningEn;
    if (mEn && typeof mEn === 'string' && mEn.trim().length > 0 && !mEn.includes('unavailable')) {
      const list = mEn.split(/[,;]\s*/).map((s) => s.trim()).filter(Boolean);
      return { ...k, meanings: list };
    }
    // Fall back to translating existing meanings
    if (Array.isArray(k.meanings) && k.meanings.length > 0) {
      const translatedList = k.meanings.map((m) => translateMeaningString(m, 'en')).filter(Boolean);
      if (translatedList.length > 0) {
        return { ...k, meanings: translatedList };
      }
    }
  }

  // Never return 'Translation unavailable' if original meanings exist
  return {
    ...k,
    meanings: (Array.isArray(k.meanings) && k.meanings.length > 0) ? k.meanings : [k.meaning || ''],
  };
}

/**
 * Translates an Indonesian meaning string to English or Myanmar.
 */
export function translateMeaningString(str: string, lang: Language): string {
  if (lang === 'id' || !str) return str;
  const trimmed = str.trim();

  // Helper to validate that translation is in the intended script
  const isValidLang = (val: string | undefined): boolean => {
    if (!val || typeof val !== 'string') return false;
    const v = val.trim();
    if (!v || v === 'Translation unavailable' || v === 'အဓိပ္ပာယ် ဘာသာပြန်မရရှိသေးပါ') return false;
    if (lang === 'en') {
      // Must NOT contain Burmese script or Japanese Katakana
      return !/[\u1000-\u109F]/.test(v) && !/^[\u30A0-\u30FF\s,]+$/.test(v);
    }
    if (lang === 'my') {
      // Must contain Burmese script
      return /[\u1000-\u109F]/.test(v);
    }
    return true;
  };

  // 1. Direct exact match in ALL_CURRICULUM_MEANINGS (32,622 comprehensive items)
  const curriculumMatch = (ALL_CURRICULUM_MEANINGS as Record<string, { en: string; my: string }>)[trimmed];
  if (curriculumMatch) {
    const val = lang === 'en' ? curriculumMatch.en : curriculumMatch.my;
    if (isValidLang(val)) return val;
  }

  // 2. Direct exact match in MEANING_LOOKUP
  if (MEANING_LOOKUP[trimmed]) {
    const val = MEANING_LOOKUP[trimmed].meaning[lang];
    if (isValidLang(val)) return val;
  }

  // 3. Direct match in KOTOBA_TRANSLATIONS (by Japanese key or meaning)
  if (KOTOBA_TRANSLATIONS[trimmed]?.meaning?.[lang]) {
    const val = KOTOBA_TRANSLATIONS[trimmed].meaning[lang];
    if (isValidLang(val)) return val;
  }

  // 4. Normalized match
  for (const [idKey, item] of Object.entries(MEANING_LOOKUP)) {
    if (trimmed.includes(idKey) || idKey.includes(trimmed)) {
      const val = item.meaning[lang];
      if (isValidLang(val)) return val;
    }
  }

  return str;
}

/**
 * Localizes an entire QuizCard (question, choices, correct_answer and kotoba)
 */
export function localizeQuizCard(card: QuizCard, lang: Language): QuizCard {
  if (!card) return card;
  if (lang === 'id') return card;

  const localizedKotoba = localizeKotoba(card.kotoba, lang);
  const isMeaningQuestion = card.direction === 'meaning_to_kanji';
  const isMeaningChoices = card.direction === 'kanji_to_meaning' || card.direction === 'hiragana_to_meaning';

  let question = card.question;
  if (isMeaningQuestion) {
    if (localizedKotoba.meaning && localizedKotoba.meaning.trim().length > 0) {
      question = localizedKotoba.meaning;
    } else {
      const transQ = translateMeaningString(card.question, lang);
      question = transQ && transQ !== 'Translation unavailable' ? transQ : card.question;
    }
  }

  let correctAnswer = card.correct_answer;
  if (isMeaningChoices) {
    if (localizedKotoba.meaning && localizedKotoba.meaning.trim().length > 0) {
      correctAnswer = localizedKotoba.meaning;
    } else {
      const transAns = translateMeaningString(card.correct_answer, lang);
      correctAnswer = transAns && transAns !== 'Translation unavailable' ? transAns : card.correct_answer;
    }
  }

  const choices = isMeaningChoices
    ? card.choices.map((c) => {
        if (!c) return c;
        if (c === 'Translation unavailable' || c === 'အဓိပ္ပာယ် ဘာသာပြန်မရရှိသေးပါ') return c;
        if (
          card.kotoba &&
          (c === card.kotoba.meaning ||
            c === (card.kotoba as any)?.meaning_id ||
            c === (card.kotoba as any)?.meaningId ||
            c === (card.kotoba as any)?.meaning_en ||
            c === (card.kotoba as any)?.meaningEn ||
            c === (card.kotoba as any)?.meaning_my ||
            c === (card.kotoba as any)?.meaningMy)
        ) {
          return localizedKotoba.meaning || c;
        }
        const translated = translateMeaningString(c, lang);
        if (!translated || translated === 'Translation unavailable' || translated === 'အဓိပ္ပာယ် ဘာသာပြန်မရရှိသေးပါ') {
          return c;
        }
        return translated;
      })
    : card.choices;

  return {
    ...card,
    kotoba: localizedKotoba,
    question,
    correct_answer: correctAnswer,
    choices,
  };
}

export const DOKKAI_VOCAB_TRANSLATIONS: Record<string, Record<Language, string>> = {
  "人為的": {
    "id": "artifisial / buatan manusia",
    "en": "artificial / man-made",
    "my": "လူတို့ပြုလုပ်သော / သဘာဝမဟုတ်သော"
  },
  "伐採": {
    "id": "penebangan pohon / deforestasi",
    "en": "tree felling / logging",
    "my": "သစ်ပင်ခုတ်လှဲခြင်း / သစ်ခုတ်ခြင်း"
  },
  "分節": {
    "id": "artikulasi / segmentasi konsep",
    "en": "segmentation / conceptual articulation",
    "my": "အပိုင်းပိုင်းခွဲခြားသတ်မှတ်ခြင်း / အဓိပ္ပာယ်ခွဲခြမ်းခြင်း"
  },
  "希薄化": {
    "id": "penipisan / pelemahan hubungan",
    "en": "dilution / weakening of presence",
    "my": "ပါးလွှာလျော့နည်းသွားခြင်း / အားနည်းသွားခြင်း"
  },
  "病理": {
    "id": "patologi / gejala kerusakan sosial",
    "en": "pathology / social dysfunction",
    "my": "ရောဂါသဘောသဘာဝ / လူမှုရေးချို့ယွင်းချက်"
  },
  "輪郭": {
    "id": "garis luar / kontur realitas",
    "en": "outline / contour of reality",
    "my": "အပြင်ဘက်အနားသတ် / ပုံကြမ်းလက္ခဏာ"
  },
  "間伐": {
    "id": "penjarangan pohon hutan",
    "en": "forest thinning / selective cutting",
    "my": "သစ်တောရှင်းလင်းအပင်ခုတ်ခြင်း"
  },
  "切実": {
    "id": "mendesak / sungguh-sungguh",
    "en": "urgent / pressing / heartfelt",
    "my": "အရေးတကြီးဖြစ်သော / လေးနက်သော"
  },
  "多元的": {
    "id": "pluralistik / beragam perspektif",
    "en": "pluralistic / multidimensional",
    "my": "ဘက်ပေါင်းစုံ / အမြင်စုံလင်သော"
  },
  "対峙": {
    "id": "konfrontasi / berhadapan langsung",
    "en": "confrontation / facing directly",
    "my": "မျက်နှာချင်းဆိုင်ရင်ဆိုင်ခြင်း"
  },
  "二者択一": {
    "id": "dilema dua pilihan / salah satu dari dua",
    "en": "either-or choice / binary dilemma",
    "my": "နှစ်ခုအနက်တစ်ခုရွေးချယ်ရခြင်း"
  },
  "持続可能": {
    "id": "berkelanjutan / lestari",
    "en": "sustainable",
    "my": "ရေရှည်တည်တံ့နိုင်သော"
  },
  "解像度": {
    "id": "resolusi ketajaman pemahaman",
    "en": "resolution / cognitive clarity",
    "my": "ပြတ်သားမှုအတိုင်းအတာ / ရှင်းလင်းမှု"
  },
  "捨象": {
    "id": "abstraksi / mengesampingkan hal sekunder",
    "en": "abstraction / omission of non-essentials",
    "my": "အရေးမကြီးသောအချက်များကိုချန်လှပ်ခြင်း"
  },
  "肩代わり": {
    "id": "mengambil alih beban / menanggung gantian",
    "en": "taking over burdens / assuming proxy",
    "my": "အစားထိုးတာဝန်ယူပေးခြင်း"
  },
  "修練": {
    "id": "disiplin latihan mendalam",
    "en": "rigorous training / practice discipline",
    "my": "လေ့ကျင့်ဆည်းပူးခြင်း / စိတ်ကိုယဉ်ပါးစေခြင်း"
  },
  "営業時間": {
    "id": "jam operasional / jam buka toko",
    "en": "business hours / opening hours",
    "my": "ဆိုင်ဖွင့်ချိန် / လုပ်ငန်းလည်ပတ်ချိန်"
  },
  "お休み": {
    "id": "hari libur / hari tutup toko",
    "en": "closed / day off / holiday",
    "my": "ပိတ်ရက် / အနားယူရက်"
  },
  "手作り": {
    "id": "buatan tangan / buatan sendiri",
    "en": "handmade / homemade",
    "my": "လက်လုပ် / အိမ်လုပ်"
  },
  "午後": {
    "id": "sore / petang (p.m.)",
    "en": "afternoon / p.m.",
    "my": "မွန်းလွဲပိုင်း / ညနေ (p.m.)"
  },
  "図書館": {
    "id": "perpustakaan umum / perpustakaan kota",
    "en": "library / public library",
    "my": "စာကြည့်တိုက် / မြို့နယ်စာကြည့်တိုက်"
  },
  "一緒": {
    "id": "bersama-sama / serempak",
    "en": "together / along with",
    "my": "အတူတူ / အတူတကွ"
  },
  "察する": {
    "id": "meraba / menebak perasaan orang lain",
    "en": "sense / guess someone's feelings",
    "my": "အကဲခတ်ရိပ်မိခြင်း / စိတ်ကို နားလည်ပေးခြင်း"
  },
  "助け舟": {
    "id": "bantuan darurat penyelamat",
    "en": "helping hand / lifesaver",
    "my": "ကယ်ဆယ်ရေး အကူအညီ / အရေးပေါ် ကူညီစောင့်ရှောက်မှု"
  },
  "指示待ち": {
    "id": "pasif menunggu arahan atasan",
    "en": "passively waiting for instructions",
    "my": "ညွှန်ကြားချက်ကို ငြိမ်ခံစောင့်ဆိုင်းခြင်း"
  },
  "気配り": {
    "id": "kepekaan / perhatian halus",
    "en": "attentiveness / consideration for others",
    "my": "အလိုက်သိဂရုစိုက်မှု / အကြင်နာတရား"
  },
  "平素": {
    "id": "selama ini / sehari-hari",
    "en": "regular / ordinary times / continuous support",
    "my": "ပုံမှန်အားဖြင့် / နေ့စဉ်နှင့်အမျှ"
  },
  "安定性": {
    "id": "kestabilan performa",
    "en": "stability / reliability",
    "my": "တည်ငြိမ်မှု / ခိုင်ခံ့မှု"
  },
  "掲示板": {
    "id": "papan pengumuman",
    "en": "bulletin board / notice board",
    "my": "ကြော်ငြာသင်ပုန်း"
  },
  "住人": {
    "id": "penghuni apartemen / warga",
    "en": "resident / tenant",
    "my": "နေထိုင်သူ / တိုက်ခန်းနေလူထု"
  },
  "燃えるごみ": {
    "id": "sampah mudah terbakar / organik",
    "en": "burnable / combustible garbage",
    "my": "မီးရှို့နိုင်သော အမှိုက်"
  },
  "透明": {
    "id": "transparan / bening",
    "en": "transparent / clear",
    "my": "ကြည်လင်သော / အလင်းပေါက်သော"
  },
  "神社": {
    "id": "kuil Shinto",
    "en": "Shinto shrine",
    "my": "ရှင်းတို နတ်ကျောင်း"
  },
  "屋台": {
    "id": "kedai gerobak makanan kaki lima",
    "en": "food stall / street stand",
    "my": "လမ်းဘေး အစားအသောက်ဆိုင် / ဆိုင်တွန်းလှည်း"
  },
  "歓声": {
    "id": "sorak-sorai kegembiraan",
    "en": "cheers / joyful shouting",
    "my": "ဝမ်းသာအားရ အော်ဟစ်သံ / သောင်းသောင်းဖျဖျ ကြိုဆိုသံ"
  },
  "基幹": {
    "id": "inti / pokok (infrastruktur utama)",
    "en": "core / essential (main infrastructure)",
    "my": "အဓိက / အရင်းခံ (ပင်မ အခြေခံအဆောက်အအုံ)"
  },
  "遮断": {
    "id": "pemutusan / blokir total",
    "en": "interception / complete block",
    "my": "ဖြတ်တောက်ခြင်း / အလုံးစုံပိတ်ဆို့ခြင်း"
  },
  "消失": {
    "id": "hilang musnah / lenyap",
    "en": "disappearance / vanished",
    "my": "ပျောက်ကွယ်ပျက်စီးခြင်း"
  },
  "退勤": {
    "id": "jam pulang kerja kantor",
    "en": "leaving the office / clocking out",
    "my": "အလုပ်မှ ပြန်ချိန်"
  },
  "粗大ゴミ": {
    "id": "sampah ukuran besar (perabot, kasur)",
    "en": "oversized bulky garbage (furniture, mattress)",
    "my": "အရွယ်အစားကြီး အမှိုက် (ပရိဘောဂ၊ မွေ့ရာ)"
  },
  "集積所": {
    "id": "tempat penampungan/pembuangan sampah",
    "en": "garbage collection site",
    "my": "အမှိုက်ပုံ / အမှိုက်စုစည်းရာနေရာ"
  },
  "苦慮": {
    "id": "merasa sangat cemas / repot / terbebani",
    "en": "greatly distressed / burdened",
    "my": "အလွန်စိုးရိမ်သောကရောက်ခြင်း / ဝန်ထုပ်ဝန်ပိုးဖြစ်ခြင်း"
  },
  "貼付": {
    "id": "menempelkan (stiker/label)",
    "en": "affixing (sticker/label)",
    "my": "ကပ်ခြင်း (စတစ်ကာ/တံဆိပ်)"
  },
  "決算": {
    "id": "tutup buku keuangan / laporan rugi-laba",
    "en": "financial settlement / fiscal closing",
    "my": "ငွေစာရင်းရှင်းတမ်း / နှစ်ချုပ်စာရင်းပိတ်ခြင်း"
  },
  "精算": {
    "id": "klaim pembayaran / pelunasan pengeluaran",
    "en": "expense settlement / fare adjustment",
    "my": "ကုန်ကျစရိတ် ပြန်လည်ရှင်းလင်းခြင်း"
  },
  "領収書": {
    "id": "kuitansi / nota bukti pembayaran resmi",
    "en": "receipt / proof of payment",
    "my": "ငွေလက်ခံဖြတ်ပိုင်း / တရားဝင်ပြေစာ"
  },
  "鮮明": {
    "id": "jelas, tajam, terbaca terang",
    "en": "clear, vivid, legible",
    "my": "ရှင်းလင်းထင်ရှားသော"
  },
  "直面": {
    "id": "berhadapan langsung (dengan masalah)",
    "en": "confronting directly (a problem)",
    "my": "တိုက်ရိုက်ရင်ဆိုင်ရခြင်း (ပြဿနာနှင့်)"
  },
  "怠惰": {
    "id": "kemalasan / malas",
    "en": "laziness / sloth",
    "my": "ပျင်းရိခြင်း"
  },
  "欠如": {
    "id": "ketiadaan / kurangnya suatu hal",
    "en": "lack / absence",
    "my": "ကင်းမဲ့ချို့တဲ့ခြင်း"
  },
  "逃避": {
    "id": "pelarian / kabur dari kenyataan",
    "en": "escape / reality avoidance",
    "my": "လက်တွေ့ဘဝမှ ထွက်ပြေးတိမ်းရှောင်ခြင်း"
  },
  "克服": {
    "id": "menaklukkan / mengatasi rintangan",
    "en": "overcoming / conquering obstacles",
    "my": "အခက်အခဲများကို ကျော်လွှားအောင်မြင်ခြင်း"
  },
  "恩恵": {
    "id": "berkah / anugerah / manfaat besar",
    "en": "blessing / benefit / grace",
    "my": "ကောင်းချီး / အကျိုးကျေးဇူးကြီးမားမှု"
  },
  "強迫観念": {
    "id": "obsesi pikiran yang menghantui / rasa tertekan",
    "en": "obsessive thoughts / mental obsession",
    "my": "ခြောက်လှန့်နေသော အတွေးစွဲလန်းမှု"
  },
  "侵食": {
    "id": "menggerogoti / mengikis secara perlahan",
    "en": "gradual erosion / eating away",
    "my": "တဖြည်းဖြည်း တိုက်စားသွားခြင်း"
  },
  "脆弱": {
    "id": "rapuh / rentan rusak",
    "en": "fragile / vulnerable",
    "my": "ကျိုးပဲ့လွယ်သော / ထိခိုက်လွယ်သော"
  },
  "先着順": {
    "id": "urutan kedatangan (siapa cepat dia dapat)",
    "en": "first-come, first-served order",
    "my": "ဦးရာလူစနစ် / အလျင်ရောက်သူ ဦးစားပေးစနစ်"
  },
  "枠": {
    "id": "slot / kuota sesi waktu",
    "en": "slot / quota / time window",
    "my": "အချိန်ကွက်လပ် / သတ်မှတ်ခွဲတမ်း"
  },
  "空き枠": {
    "id": "slot waktu yang masih kosong",
    "en": "available vacant slot",
    "my": "လစ်လပ်နေသော အချိန်ကွက်လပ်"
  },
  "主体性": {
    "id": "subjektivitas / kemandirian bertindak",
    "en": "independence / proactive agency",
    "my": "ကိုယ်ပိုင်လွတ်လပ်စွာ ဆောင်ရွက်နိုင်မှု"
  },
  "享受": {
    "id": "menikmati fasilitas / anugerah",
    "en": "enjoying benefits / privileges",
    "my": "အကျိုးခံစားခွင့်များ ရယူခံစားခြင်း"
  },
  "委ねる": {
    "id": "menyerahkan / mempercayakan wewenang",
    "en": "entrusting / delegating authority",
    "my": "တာဝန်လွှဲအပ်ခြင်း / အပ်နှင်းခြင်း"
  },
  "自律的": {
    "id": "otonom / mandiri atas kehendak sendiri",
    "en": "autonomous / self-disciplined",
    "my": "ကိုယ်ပိုင်ဆန္ဒဖြင့် လွတ်လပ်စွာလုပ်ကိုင်ခြင်း"
  },
  "余白": {
    "id": "ruang kosong / margin / celah",
    "en": "blank space / margin / breathing room",
    "my": "နေရာလွတ် / အနားသတ် / ခြားနားချက်"
  },
  "喚起": {
    "id": "membangkitkan (minat/kesadaran/ingatan)",
    "en": "awakening (interest/awareness)",
    "my": "နှိုးဆွပေးခြင်း (စိတ်ဝင်စားမှု/သတိ)"
  },
  "醸し出す": {
    "id": "menciptakan suasana / memancarkan aura",
    "en": "creating an atmosphere / exuding",
    "my": "အငွေ့အသက် ဖန်တီးပေးခြင်း"
  },
  "汲み取る": {
    "id": "menangkap maksud tersirat / memahami perasaan orang",
    "en": "grasping implicit meaning / understanding feelings",
    "my": "မဖော်ပြသော ရည်ရွယ်ချက်ကို ရိပ်မိခြင်း"
  }
};
