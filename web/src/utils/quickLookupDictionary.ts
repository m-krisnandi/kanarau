import type { Language } from '@/locales/translations';

export interface QuickLookupEntry {
  term: string;
  reading: string;
  romaji?: string;
  meanings: Record<Language, string[]>;
  kanjiInfo?: {
    strokes?: number;
    onReadings?: string[];
    kunReadings?: string[];
    radical?: string;
  };
  rawKotoba?: any;
  rawKanjiChar?: string;
}

export const QUICK_LOOKUP_ENTRIES: Record<string, QuickLookupEntry> = {
  // 営業時間 (eigyōjikan)
  "営業時間": {
    term: "営業時間",
    reading: "えいぎょうじかん",
    romaji: "eigyoujikan",
    meanings: {
      id: [
        "jam operasional; jam buka kantor/toko",
        "waktu pelayanan usaha",
      ],
      en: [
        "business hours; opening hours",
        "service operating hours",
      ],
      my: [
        "ဆိုင်ဖွင့်ချိန် ၊ လုပ်ငန်းလည်ပတ်ချိန်",
        "ဝန်ဆောင်မှုပေးချိန်",
      ],
    },
  },

  // お休み (oyasumi)
  "お休み": {
    term: "お休み",
    reading: "おやすみ",
    romaji: "oyasumi",
    meanings: {
      id: [
        "hari libur; waktu tutup toko",
        "istirahat; liburan",
      ],
      en: [
        "holiday; day off; closed",
        "rest; break; vacation",
      ],
      my: [
        "ပိတ်ရက် ၊ အနားယူရက်",
        "ဆိုင်ပိတ်ချိန်",
      ],
    },
  },

  // 手作り (tezukuri)
  "手作り": {
    term: "手作り",
    reading: "てづくり",
    romaji: "tezukuri",
    meanings: {
      id: [
        "buatan tangan; buatan sendiri; homemade",
        "karya kreasi mandiri",
      ],
      en: [
        "handmade; homemade; handcrafted",
        "handcrafted product",
      ],
      my: [
        "လက်လုပ် ၊ အိမ်လုပ်",
        "ကိုယ်တိုင်ပြုလုပ်ထားသောအရာ",
      ],
    },
  },

  // 午後 (gogo)
  "午後": {
    term: "午後",
    reading: "ごご",
    romaji: "gogo",
    meanings: {
      id: [
        "sore; petang; siang (setelah jam 12 siang)",
        "waktu p.m.",
      ],
      en: [
        "afternoon; p.m.",
        "time past noon",
      ],
      my: [
        "မွန်းလွဲပိုင်း ၊ ညနေ (p.m.)",
        "နေ့လယ် ၁၂ နာရီ နောက်ပိုင်း",
      ],
    },
  },

  // 図書館 (toshokan)
  "図書館": {
    term: "図書館",
    reading: "としょかん",
    romaji: "toshokan",
    meanings: {
      id: [
        "perpustakaan",
        "gedung perpustakaan umum",
      ],
      en: [
        "library",
        "public reading room",
      ],
      my: [
        "စာကြည့်တိုက်",
        "ပြည်သူ့စာကြည့်တိုက်",
      ],
    },
  },

  // 一緒 (issho)
  "一緒": {
    term: "一緒",
    reading: "いっしょ",
    romaji: "issho",
    meanings: {
      id: [
        "bersama; bareng-bareng",
        "serempak; satu kesatuan",
      ],
      en: [
        "together; along with",
        "at the same time; identical",
      ],
      my: [
        "အတူတူ ၊ အတူတကွ",
        "တစ်ပြိုင်နက်တည်း",
      ],
    },
  },

  // 仕事 (shigoto)
  "仕事": {
    term: "仕事",
    reading: "しごと",
    romaji: "shigoto",
    meanings: {
      id: [
        "pekerjaan; tugas; aktivitas",
        "pekerjaan; profesi; mata pencaharian",
        "karya; prestasi; hasil kerja",
        "aksi; perbuatan; ulah (konteks negatif)",
        "jahitan; kegiatan menjahit",
      ],
      en: [
        "work; job; business; duty; task",
        "occupation; profession; career",
        "one's work; achievement; output",
        "action; deed (negative context)",
        "sewing; needlework",
      ],
      my: [
        "အလုပ် ၊ လုပ်ငန်း ၊ တာဝန်",
        "အသက်မွေးဝမ်းကျောင်း ၊ အလုပ်အကိုင်",
        "လက်ရာ ၊ စွမ်းဆောင်ချက်",
        "လုပ်ရပ် (မကောင်းသော အဓိပ္ပာယ်)",
        "အဝတ်ချုပ်လုပ်ငန်း",
      ],
    },
  },

  // 退勤 (taikin)
  "退勤": {
    term: "退勤",
    reading: "たいきん",
    romaji: "taikin",
    meanings: {
      id: [
        "jam pulang kerja; selesai jam kerja kantor",
        "meninggalkan kantor setelah jam kerja usai",
      ],
      en: [
        "leaving work; clocking out; quitting work for the day",
        "finish of the work shift",
      ],
      my: [
        "ရုံးဆင်းချိန် ၊ အလုပ်ဆင်းချိန်",
        "တစ်နေ့တာ အလုပ်ပြီးဆုံး၍ ပြန်ခြင်း",
      ],
    },
  },

  // 保存 (hozon)
  "保存": {
    term: "保存",
    reading: "ほぞん",
    romaji: "hozon",
    meanings: {
      id: [
        "penyimpanan; menyimpan (data/file)",
        "pelestarian; pengawetan; preservasi",
      ],
      en: [
        "saving (a computer file / data)",
        "preservation; storage; conservation",
      ],
      my: [
        "သိမ်းဆည်းခြင်း (ဒေတာ / ဖိုင်)",
        "ထိန်းသိမ်းစောင့်ရှောက်ခြင်း",
      ],
    },
  },

  // 電源 (dengen)
  "電源": {
    term: "電源",
    reading: "でんげん",
    romaji: "dengen",
    meanings: {
      id: [
        "daya listrik; tombol power",
        "sumber arus listrik",
      ],
      en: [
        "power supply; power source; power switch",
        "source of electrical power",
      ],
      my: [
        "လျှပ်စစ်ပါဝါ ခလုတ်",
        "လျှပ်စစ်ဓာတ်အား အရင်းအမြစ်",
      ],
    },
  },

  // 保守 (hoshu)
  "保守": {
    term: "保守",
    reading: "ほしゅ",
    romaji: "hoshu",
    meanings: {
      id: [
        "pemeliharaan; perawatan rutin (mesin / server)",
        "konservatisme; berpandangan konservatif",
      ],
      en: [
        "maintenance; routine upkeep; servicing",
        "conservatism; maintaining tradition",
      ],
      my: [
        "ပုံမှန် ပြုပြင်ထိန်းသိမ်းမှု (စနစ် / စက်)",
        "ရှေးရိုးစွဲဝါဒ",
      ],
    },
  },

  // ネットワーク (nettowaaku)
  "ネットワーク": {
    term: "ネットワーク",
    reading: "ネットワーク",
    romaji: "nettowaaku",
    meanings: {
      id: [
        "jaringan (komputer / internet)",
        "jejaring relasi kerja / sosial",
      ],
      en: [
        "network (computer / telecommunication)",
        "social or professional network",
      ],
      my: [
        "ကွန်ရက် (ကွန်ပျူတာ / အင်တာနက်)",
        "လူမှုဆက်ဆံရေး ကွန်ရက်",
      ],
    },
  },

  // 業務 (gyoumu)
  "業務": {
    term: "業務",
    reading: "ぎょうむ",
    romaji: "gyoumu",
    meanings: {
      id: [
        "urusan kerja; operasional bisnis",
        "tugas kedinasan / kantor sehari-hari",
      ],
      en: [
        "business operations; professional duties; work tasks",
        "official business; routine services",
      ],
      my: [
        "လုပ်ငန်းတာဝန်များ ၊ ရုံးလုပ်ငန်း",
        "စီးပွားရေးဆိုင်ရာ စစ်ဆင်ရေးများ",
      ],
    },
  },

  // 確認 (kakunin)
  "確認": {
    term: "確認",
    reading: "かくにん",
    romaji: "kakunin",
    meanings: {
      id: [
        "konfirmasi; verifikasi; pengecekan ulang",
        "memastikan kebenaran informasi",
      ],
      en: [
        "confirmation; verification; checking; validation",
        "identifying / ascertaining the facts",
      ],
      my: [
        "အတည်ပြုခြင်း ၊ ပြန်လည်စစ်ဆေးခြင်း",
        "သေချာစေရန် လုပ်ဆောင်ခြင်း",
      ],
    },
  },

  // ログイン (roguin)
  "ログイン": {
    term: "ログイン",
    reading: "ログイン",
    romaji: "roguin",
    meanings: {
      id: [
        "masuk akun; login sistem",
      ],
      en: [
        "login; logging in; sign-in",
      ],
      my: [
        "လော့ဂ်အင်ဝင်ခြင်း",
      ],
    },
  },

  // 総務部 (soumubu)
  "総務部": {
    term: "総務部",
    reading: "そうむぶ",
    romaji: "soumubu",
    meanings: {
      id: [
        "Departemen Umum / Bagian Urusan Umum Perusahaan",
      ],
      en: [
        "General Affairs Department",
      ],
      my: [
        "အထွေထွေစီမံခန့်ခွဲရေးဌာန",
      ],
    },
  },

  // 管理 (kanri)
  "管理": {
    term: "管理",
    reading: "かんり",
    romaji: "kanri",
    meanings: {
      id: [
        "manajemen; pengelolaan; administrasi",
        "pengendalian; pengawasan",
      ],
      en: [
        "management; administration; control",
        "supervision; governance",
      ],
      my: [
        "စီမံခန့်ခွဲခြင်း ၊ ထိန်းချုပ်ခြင်း",
        "ကြီးကြပ်စောင့်ရှောက်ခြင်း",
      ],
    },
  },

  // 終了 (shuuryou)
  "終了": {
    term: "終了",
    reading: "しゅうりょう",
    romaji: "shuuryou",
    meanings: {
      id: [
        "selesai; berakhir; penutupan",
      ],
      en: [
        "end; completion; finish; termination",
      ],
      my: [
        "ပြီးဆုံးခြင်း ၊ ပိတ်သိမ်းခြင်း",
      ],
    },
  },

  // 予定 (yotei)
  "予定": {
    term: "予定",
    reading: "よてい",
    romaji: "yotei",
    meanings: {
      id: [
        "rencana; jadwal; estimasi waktu",
      ],
      en: [
        "plans; schedule; estimate; expectation",
      ],
      my: [
        "အစီအစဉ် ၊ သတ်မှတ်ချိန်ဇယား",
      ],
    },
  },

  // ご不便 (gofuben) / 不便 (fuben)
  "ご不便": {
    term: "ご不便",
    reading: "ごふべん",
    romaji: "gofuben",
    meanings: {
      id: [
        "ketidaknyamanan (ungkapan sopan bisnis)",
        "hal yang merepotkan / menyulitkan",
      ],
      en: [
        "inconvenience (polite business honorific)",
        "trouble; difficulty caused to customers/others",
      ],
      my: [
        "အဆင်မပြေမှု (ယဉ်ကျေးသော အသုံးအနှုန်း)",
        "အခက်အခဲဖြစ်စေခြင်း",
      ],
    },
  },

  "不便": {
    term: "不便",
    reading: "ふべん",
    romaji: "fuben",
    meanings: {
      id: [
        "tidak praktis; tidak nyaman; repot",
      ],
      en: [
        "inconvenient; awkward; troublesome",
      ],
      my: [
        "အဆင်မပြေသော ၊ သွားလာရခက်ခဲသော",
      ],
    },
  },

  // 協力 (kyouryoku)
  "協力": {
    term: "協力",
    reading: "きょうりょく",
    romaji: "kyouryoku",
    meanings: {
      id: [
        "kerja sama; bantuan sukarela; kolaborasi",
      ],
      en: [
        "cooperation; collaboration; assistance",
      ],
      my: [
        "ပူးပေါင်းပါဝင်ဆောင်ရွက်ခြင်း ၊ ကူညီခြင်း",
      ],
    },
  },

  // お願い (onegai)
  "お願い": {
    term: "お願い",
    reading: "おねがい",
    romaji: "onegai",
    meanings: {
      id: [
        "permohonan; tolong; permintaan sopan",
      ],
      en: [
        "request; wish; favor; please",
      ],
      my: [
        "မေတ္တာရပ်ခံချက် ၊ အကူအညီတောင်းခံခြင်း",
      ],
    },
  },



  // 先延ばし (sakinobashi)
  "先延ばし": {
    term: "先延ばし",
    reading: "さきのばし",
    romaji: "sakinobashi",
    meanings: {
      id: [
        "menunda-nunda; prokrastinasi; menangguhkan pekerjaan",
      ],
      en: [
        "procrastination; putting off; postponement; delaying",
      ],
      my: [
        "အချိန်ဆွဲခြင်း ၊ နောက်ရွှေ့ခြင်း",
      ],
    },
  },
};

// Common single Kanji dictionary entries
export const QUICK_LOOKUP_KANJI: Record<string, QuickLookupEntry> = {
  "仕": {
    term: "仕",
    reading: "し",
    kanjiInfo: {
      strokes: 5,
      onReadings: ["シ", "ジ"],
      kunReadings: ["つか・える"],
      radical: "亻 (orang)",
    },
    meanings: {
      id: ["melayani; bertugas; bekerja untuk"],
      en: ["attend; doing; serve; official"],
      my: ["အမှုထမ်းခြင်း ၊ အလုပ်လုပ်ခြင်း"],
    },
  },
  "事": {
    term: "事",
    reading: "じ",
    kanjiInfo: {
      strokes: 8,
      onReadings: ["ジ", "ズ"],
      kunReadings: ["こと", "つか・う"],
      radical: "亅 (kait)",
    },
    meanings: {
      id: ["hal; perkara; masalah; urusan"],
      en: ["matter; thing; fact; business; reason"],
      my: ["ကိစ္စ ၊ အကြောင်းအရာ ၊ အလုပ်"],
    },
  },
  "退": {
    term: "退",
    reading: "たい",
    kanjiInfo: {
      strokes: 9,
      onReadings: ["タイ"],
      kunReadings: ["しりぞ・く", "ひ・く"],
      radical: "⻌ (jalan)",
    },
    meanings: {
      id: ["mundur; keluar; meninggalkan"],
      en: ["retreat; withdraw; retire; resign"],
      my: ["ဆုတ်ခွာခြင်း ၊ နုတ်ထွက်ခြင်း"],
    },
  },
  "勤": {
    term: "勤",
    reading: "きん",
    kanjiInfo: {
      strokes: 12,
      onReadings: ["キン", "ゴン"],
      kunReadings: ["つと・める"],
      radical: "力 (kekuatan)",
    },
    meanings: {
      id: ["rajin; bekerja dinas; bertugas"],
      en: ["diligence; employed; serve"],
      my: ["ကြိုးစားအားထုတ်ခြင်း ၊ အလုပ်တာဝန်"],
    },
  },
  "保": {
    term: "保",
    reading: "ほ",
    kanjiInfo: {
      strokes: 9,
      onReadings: ["ホ", "ホウ"],
      kunReadings: ["たも・つ"],
      radical: "亻 (orang)",
    },
    meanings: {
      id: ["menjaga; melindungi; memelihara"],
      en: ["protect; guarantee; keep; preserve"],
      my: ["ကာကွယ်စောင့်ရှောက်ခြင်း ၊ ထိန်းသိမ်းခြင်း"],
    },
  },
  "存": {
    term: "存",
    reading: "ぞん",
    kanjiInfo: {
      strokes: 6,
      onReadings: ["ゾン", "ソン"],
      kunReadings: ["あ・る"],
      radical: "子 (anak)",
    },
    meanings: {
      id: ["ada; eksis; menyimpan"],
      en: ["exist; suppose; be aware of; believe"],
      my: ["တည်ရှိခြင်း ၊ သတိပြုခြင်း"],
    },
  },
  "電": {
    term: "電",
    reading: "でん",
    kanjiInfo: {
      strokes: 13,
      onReadings: ["デン"],
      kunReadings: [],
      radical: "雨 (hujan)",
    },
    meanings: {
      id: ["listrik; elektron"],
      en: ["electricity; electric"],
      my: ["လျှပ်စစ်"],
    },
  },
  "源": {
    term: "源",
    reading: "げん",
    kanjiInfo: {
      strokes: 13,
      onReadings: ["ゲン"],
      kunReadings: ["みなもと"],
      radical: "氵 (air)",
    },
    meanings: {
      id: ["sumber; asal mula; hulu sungai"],
      en: ["source; origin"],
      my: ["အရင်းအမြစ် ၊ အစ"],
    },
  },
  "業": {
    term: "業",
    reading: "ぎょう",
    kanjiInfo: {
      strokes: 13,
      onReadings: ["ギョウ", "ゴウ"],
      kunReadings: ["わざ"],
      radical: "木 (pohon)",
    },
    meanings: {
      id: ["bisnis; pekerjaan; industri"],
      en: ["business; vocation; arts; performance"],
      my: ["လုပ်ငန်း ၊ ကုန်ထုတ်လုပ်မှု"],
    },
  },
  "務": {
    term: "務",
    reading: "む",
    kanjiInfo: {
      strokes: 11,
      onReadings: ["ム"],
      kunReadings: ["つと・める"],
      radical: "力 (kekuatan)",
    },
    meanings: {
      id: ["tugas; kewajiban; pekerjaan"],
      en: ["task; duties"],
      my: ["တာဝန် ၊ ဝတ္တရား"],
    },
  },
};

/**
 * Searches the quick lookup database for any word or single kanji.
 */
export function findQuickLookupEntry(rawText: string): QuickLookupEntry | null {
  const text = rawText.trim();
  if (!text) return null;

  // 1. Direct match in word entries
  if (QUICK_LOOKUP_ENTRIES[text]) {
    return QUICK_LOOKUP_ENTRIES[text];
  }

  // 2. Direct match in single kanji entries
  if (QUICK_LOOKUP_KANJI[text]) {
    return QUICK_LOOKUP_KANJI[text];
  }

  // 3. Try stripping particles like の, を, に, で, は, が, と, から, まで, です, だ
  const stripped = text.replace(/(のを|のに|ので|のは|から|まで|です|だ|の|を|に|で|は|が|と|へ)$/, "");
  if (stripped && QUICK_LOOKUP_ENTRIES[stripped]) {
    return QUICK_LOOKUP_ENTRIES[stripped];
  }

  return null;
}
