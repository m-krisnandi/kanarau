// Trilingual translations for Bunpo (Grammar) questions
// Strictly zero emojis across all fields
import type { Language } from './translations';
import type { BunpoQuestion } from '@/types/jlptModules';

export interface BunpoQuestionTranslationItem {
  title: Record<Language, string>;
  translation: Record<Language, string>;
  setsuzoku: Record<Language, string>;
  nuanceExplanation: Record<Language, string>;
  trapNotes: Record<Language, string>;
}

export const BUNPO_QUESTION_TRANSLATIONS: Record<string, BunpoQuestionTranslationItem> = {
  "bq_1": {
    "title": {
      "id": "Pola 〜ざるを得ない",
      "en": "Pattern 〜ざるを得ない",
      "my": "〜ざるを得ない ပုံစံ"
    },
    "translation": {
      "id": "Karena bukti sudah selengkap ini, kita terpaksa harus mengakui kesalahan dari klaimnya.",
      "en": "Since the evidence is this complete, we cannot help but admit the error of his claim.",
      "my": "သက်သေအထောက်အထားများ ဤမျှပြည့်စုံနေသဖြင့် သူ၏တောင်းဆိုချက်မှားယွင်းမှုကို ဝန်မခံဘဲ မနေနိုင်ပေ။"
    },
    "setsuzoku": {
      "id": "Kata Kerja bentuk-ない (tanpa ない) + ざるを得ない (Khusus する → せざるを得ない)",
      "en": "Verb nai-form (without ない) + ざるを得ない (Special: する → せざるを得ない)",
      "my": "ကြိယာ nai-ပုံစံ (nai မပါ) + ざるを得ない (အထူး- する → せざるを得ない)"
    },
    "nuanceExplanation": {
      "id": "Digunakan ketika pembicara sebenarnya enggan/berat hati, tetapi karena situasi atau fakta yang mendesak, tidak ada pilihan lain selain melakukan hal tersebut.",
      "en": "Used when the speaker is actually reluctant or unwilling, but due to compelling facts or unavoidable circumstances, there is no choice but to do so.",
      "my": "ပြောဆိုသူသည် အမှန်တကယ်တွင် ဝန်လေးသော်လည်း အခြေအနေ သို့မဟုတ် ခိုင်လုံသောအချက်အလက်များကြောင့် မလွှဲမရှောင်သာ ထိုသို့ပြုလုပ်ရသည့်အခါ အသုံးပြုသည်။"
    },
    "trapNotes": {
      "id": "「〜わけにはいかない」 artinya secara etika tidak boleh mengakui (kontradiktif dengan bukti lengkap).",
      "en": "「〜わけにはいかない」 means ethically one cannot admit (contradicts the overwhelming evidence).",
      "my": "「〜わけにはいかない」 သည် ကိုယ်ကျင့်တရားအရ ဝန်ခံ၍မဖြစ်နိုင်ဟု အဓိပ္ပာယ်ရသဖြင့် ခိုင်လုံသောသက်သေနှင့် ဆန့်ကျင်နေပါသည်။"
    }
  },
  "bq_2": {
    "title": {
      "id": "Pola 〜わけにはいかない",
      "en": "Pattern 〜わけにはいかない",
      "my": "〜わけにはいかない ပုံစံ"
    },
    "translation": {
      "id": "Besok ada negosiasi bisnis terpenting bagi perusahaan, jadi meski merasa agak masuk angin, saya tidak bisa begitu saja libur.",
      "en": "Tomorrow is the most important business negotiation for the company, so even with a slight cold, I cannot simply take the day off.",
      "my": "မနက်ဖြန်သည် ကုမ္ပဏီအတွက် အရေးအကြီးဆုံး စီးပွားရေးဆွေးနွေးပွဲရှိသောကြောင့် အအေးမိချင်သလိုဖြစ်နေရုံဖြင့် အလုပ်နား၍ မဖြစ်နိုင်ပေ။"
    },
    "setsuzoku": {
      "id": "Kata Kerja bentuk Kamus (Kamus / Nai) + わけにはいかない",
      "en": "Verb Dictionary / Nai form + わけにはいかない",
      "my": "ကြိယာ အဘိဓာန်ပုံစံ / Nai-ပုံစံ + わけにはいかない"
    },
    "nuanceExplanation": {
      "id": "Bukan ketidakmampuan fisik, melainkan hambatan psikologis, tanggung jawab, moral, atau kewajiban sosial yang membuat seseorang tidak pantas melakukannya.",
      "en": "Not a physical impossibility, but psychological, moral, or social duty constraints that prevent one from doing something.",
      "my": "ကာယပိုင်းဆိုင်ရာ မစွမ်းဆောင်နိုင်ခြင်း မဟုတ်ဘဲ လူမှုရေးတာဝန်၊ ကျင့်ဝတ် သို့မဟုတ် စိတ်ပိုင်းဆိုင်ရာ တာဝန်သိမှုတို့ကြောင့် ထိုသို့မပြုလုပ်နိုင်ခြင်းကို ဖော်ပြသည်။"
    },
    "trapNotes": {
      "id": "Beda dengan 「〜ことができない」 yang murni fisik/kemampuan, 「〜わけにはいかない」 menyangkut rasa tanggung jawab sosial.",
      "en": "Unlike 「〜ことができない」 which is purely physical capability, 「〜わけにはいかない」 involves social duty or conscience.",
      "my": "စွမ်းရည်သက်သက်ဖြစ်သော 「〜ことができない」 နှင့်မတူဘဲ 「〜わけにはいかない」 သည် လူမှုရေးတာဝန်သိစိတ်နှင့် သက်ဆိုင်ပါသည်။"
    }
  },
  "bq_3": {
    "title": {
      "id": "Pola 〜かねる (Penolakan Sopan)",
      "en": "Pattern 〜かねる (Polite Refusal)",
      "my": "〜かねる ပုံစံ (ယဉ်ကျေးစွာ ငြင်းပယ်ခြင်း)"
    },
    "translation": {
      "id": "Mohon maaf yang sebesar-besarnya, dari sudut pandang perlindungan data pribadi, kami tidak dapat menjawab pertanyaan Anda.",
      "en": "We sincerely apologize, but from the viewpoint of personal data protection, we cannot answer your inquiry.",
      "my": "အထူးပင် တောင်းပန်အပ်ပါသည်၊ ကိုယ်ရေးအချက်အလက် ကာကွယ်ရေးရှုထောင့်အရ လူကြီးမင်း၏ မေးမြန်းစုံစမ်းမှုကို ဖြေကြားပေးရန် ခက်ခဲပါသည် (မဖြေကြားနိုင်ပါ)။"
    },
    "setsuzoku": {
      "id": "Kata Kerja bentuk Masu (tanpa ます) + かねる",
      "en": "Verb Masu-stem (without ます) + かねる",
      "my": "ကြိယာ Masu-stem (ます မပါ) + かねる"
    },
    "nuanceExplanation": {
      "id": "Ungkapan formal/halus dalam bahasa bisnis untuk menolak permintaan karena alasan aturan, prinsip, atau ketidakmampuan.",
      "en": "A formal, polite business expression used to decline a request due to rules, principles, or institutional limitations.",
      "my": "စည်းမျဉ်း၊ မူဝါဒ သို့မဟုတ် အခြေအနေအရ တောင်းဆိုချက်ကို မလိုက်လျောနိုင်ကြောင်း စီးပွားရေးလုပ်ငန်းသုံး ယဉ်ကျေးသောစကားဖြင့် ငြင်းပယ်ရာတွင် သုံးသည်။"
    },
    "trapNotes": {
      "id": "JANGAN tertukar! 「〜かねる」 = TIDAK BISA (menolak sopan). Sedangkan 「〜かねない」 = BISA BERBAHAYA/BERISIKO buruk.",
      "en": "Do not confuse! 「〜かねる」 = cannot do (polite decline). Meanwhile 「〜かねない」 = might cause a negative risk.",
      "my": "မမှားပါစေနှင့်! 「〜かねる」 သည် မလုပ်နိုင်ပါ (ယဉ်ကျေးစွာ ငြင်းဆိုခြင်း) ဖြစ်ပြီး 「〜かねない」 မှာ ဆိုးကျိုးဖြစ်နိုင်ခြေရှိသည်ဟု အဓိပ္ပာယ်ရသည်။"
    }
  },
  "bq_4": {
    "title": {
      "id": "Pola 〜かねない",
      "en": "Pattern 〜かねない",
      "my": "〜かねない ပုံစံ"
    },
    "translation": {
      "id": "Jika stres berlebihan dibiarkan, ada risiko besar merusak keseimbangan fisik dan mental, sehingga perlu berhati-hati.",
      "en": "If excessive stress is left unaddressed, there is a serious risk of disrupting mental and physical balance, so caution is needed.",
      "my": "အလွန်အကျွံ စိတ်ဖိစီးမှုကို လျစ်လျူရှုထားပါက ရုပ်ပိုင်းဆိုင်ရာနှင့် စိတ်ပိုင်းဆိုင်ရာ မျှတမှုကို ပျက်ပြားစေနိုင်သော အန္တရာယ်ရှိသဖြင့် သတိထားရန် လိုအပ်ပါသည်။"
    },
    "setsuzoku": {
      "id": "Kata Kerja bentuk Masu (tanpa ます) + かねない",
      "en": "Verb Masu-stem (without ます) + かねない",
      "my": "ကြိယာ Masu-stem (ます မပါ) + かねない"
    },
    "nuanceExplanation": {
      "id": "Menyatakan bahwa ada potensi atau kemungkinan besar terjadi hasil yang BURUK / NEGATIF (kecelakaan, penyakit, salah paham).",
      "en": "Indicates that there is a considerable risk or likelihood of a negative or dangerous outcome occurring.",
      "my": "မတော်တဆမှု၊ နာမကျန်းမှု သို့မဟုတ် အမှားအယွင်းကဲ့သို့သော ဆိုးကျိုးတစ်ခု ဖြစ်ပေါ်လာနိုင်သည့် အန္တရာယ်ရှိကြောင်း ဖော်ပြသည်။"
    },
    "trapNotes": {
      "id": "Selalu berkonotasi negatif. Tidak bisa digunakan untuk hal positif.",
      "en": "Always carries a negative connotation. Cannot be used for positive outcomes.",
      "my": "ဆိုးကျိုးသက်ရောက်မှုများအတွက်သာ အမြဲသုံးပြီး ကောင်းသောရလဒ်များအတွက် အသုံးမပြုနိုင်ပါ။"
    }
  },
  "bq_5": {
    "title": {
      "id": "Pola 〜ずにはいられない",
      "en": "Pattern 〜ずにはいられない",
      "my": "〜ずにはいられない ပုံစံ"
    },
    "translation": {
      "id": "Ending filmnya begitu memilukan hati, hingga saya tak kuasa menahan air mata.",
      "en": "The ending of the movie was so heartbreaking that I could not hold back my tears.",
      "my": "ရုပ်ရှင်၏ ဇာတ်သိမ်းပိုင်းသည် အလွန်ရင်နင့်ဖွယ်ကောင်းလွန်းသဖြင့် မျက်ရည်မကျဘဲ မနေနိုင်ခဲ့ပေ။"
    },
    "setsuzoku": {
      "id": "Kata Kerja bentuk-ない (tanpa ない) + ずにはいられない (する → せずにはいられない)",
      "en": "Verb nai-form (without ない) + ずにはいられない (Special: する → せずにはいられない)",
      "my": "ကြိယာ nai-ပုံစံ (nai မပါ) + ずにはいられない (အထူး- する → せずにはいられない)"
    },
    "nuanceExplanation": {
      "id": "Emosi, tawa, atau air mata yang meluap spontan dari dalam hati sehingga pembicara tidak mampu mengendalikan atau menahannya.",
      "en": "An involuntary emotion, laughter, or tears swelling up inside that the speaker simply cannot restrain.",
      "my": "အတွင်းစိတ်မှ ထိန်းမရသိမ်းမရ ဖြစ်ပေါ်လာသော စိတ်ခံစားမှု၊ ရယ်မောခြင်း သို့မဟုတ် မျက်ရည်များကို မထိန်းချုပ်နိုင်ဘဲ ပေါက်ကွဲထွက်လာသည့်အခါ သုံးသည်။"
    },
    "trapNotes": {
      "id": "Menandakan dorongan emosi batin yang tak terbendung.",
      "en": "Signifies an overwhelming, uncontrollable inner emotional impulse.",
      "my": "မထိန်းချုပ်နိုင်သော အတွင်းစိတ်ခံစားချက် တွန်းအားကို ဖော်ပြသည်။"
    }
  },
  "bq_5b": {
    "title": {
      "id": "Pola 〜っこない",
      "en": "Pattern 〜っこない",
      "my": "〜っこない ပုံစံ"
    },
    "translation": {
      "id": "Dokumen sebanyak ini mustahil bisa dihafal seluruhnya hanya dalam satu malam.",
      "en": "It is completely impossible to memorize all of these massive documents in just one night.",
      "my": "ဤမျှများပြားသော စာရွက်စာတမ်းများကို တစ်ညတည်းဖြင့် အကုန်အလွတ်ကျက်မှတ်နိုင်ရန် လုံးဝမဖြစ်နိုင်ပေ။"
    },
    "setsuzoku": {
      "id": "Kata Kerja bentuk Masu (tanpa ます) + っこない",
      "en": "Verb Masu-stem (without ます) + っこない",
      "my": "ကြိယာ Masu-stem (ます မပါ) + っこない"
    },
    "nuanceExplanation": {
      "id": "Ungkapan tegas lisan yang menyatakan keyakinan penuh bahwa hal tersebut 100% mustahil terwujud.",
      "en": "An emphatic spoken expression showing absolute conviction that something is 100% impossible to achieve.",
      "my": "ထိုအရာသည် လုံးဝ (၁၀၀%) ဖြစ်မြောက်ရန် မဖြစ်နိုင်ကြောင်း အခိုင်အမာ ပြောဆိုရာတွင် သုံးသော စကားပြောပုံစံဖြစ်သည်။"
    },
    "trapNotes": {
      "id": "Sering dipasangkan dengan kata penguat seperti 「できるっこない」 atau 「勝てるっこない」.",
      "en": "Frequently paired with potential verbs like 「できるっこない」 (can never do) or 「勝てるっこない」 (can never win).",
      "my": "「できるっこない」 (လုံးဝမလုပ်နိုင်) သို့မဟုတ် 「勝てるっこない」 (လုံးဝမနိုင်နိုင်) ကဲ့သို့ စွမ်းရည်ပြကြိယာများနှင့် အများဆုံးတွဲသုံးသည်။"
    }
  },
  "bq_6": {
    "title": {
      "id": "Pola 〜一方（で）",
      "en": "Pattern 〜一方（で）",
      "my": "〜一方（で） ပုံစံ"
    },
    "translation": {
      "id": "Mobil ini di satu sisi memiliki efisiensi bahan bakar yang unggul, tetapi di sisi lain ada kekurangan interiornya sempit.",
      "en": "While this car has excellent fuel efficiency on one hand, on the other hand it has the drawback of a cramped interior.",
      "my": "ဤကားသည် တစ်ဖက်တွင် ဆီစားသက်သာမှု အလွန်ကောင်းမွန်သော်လည်း အခြားတစ်ဖက်တွင် အတွင်းခန်းကျဉ်းမြောင်းသည်ဟူသော အားနည်းချက်လည်း ရှိသည်။"
    },
    "setsuzoku": {
      "id": "Bentuk Biasa (Futsukei) + 一方で / Kata Sifat-na + である一方で",
      "en": "Plain form + 一方で / な-Adj + である一方で",
      "my": "ရိုးရိုးပုံစံ (普通形) + 一方で / な-နာမဝိသေသန + である一方で"
    },
    "nuanceExplanation": {
      "id": "Menyandingkan dua aspek yang berlawanan atau kontras pada satu subjek yang sama (sisi positif vs sisi negatif).",
      "en": "Juxtaposes two contrasting or opposite aspects of the same subject (e.g. merits vs demerits).",
      "my": "အကြောင်းအရာတစ်ခုတည်း၏ ဆန့်ကျင်ဘက်ဖြစ်သော ရှုထောင့်နှစ်ခု (အားသာချက်နှင့် အားနည်းချက်) ကို ယှဉ်တွဲဖော်ပြရာတွင် အသုံးပြုသည်။"
    },
    "trapNotes": {
      "id": "Sering dipasangkan dengan kata 「欠点もある」 atau 「問題もある」.",
      "en": "Frequently paired with phrases like 「欠点もある」 (also has drawbacks) or 「問題もある」 (also has problems).",
      "my": "「欠点もある」 (အားနည်းချက်လည်းရှိသည်) သို့မဟုတ် 「問題もある」 (ပြဿနာလည်းရှိသည်) ကဲ့သို့သော စကားစုများနှင့် အများဆုံး တွဲသုံးလေ့ရှိသည်။"
    }
  },
  "bq_7": {
    "title": {
      "id": "Pola 〜どころか",
      "en": "Pattern 〜どころか",
      "my": "〜どころか ပုံစံ"
    },
    "translation": {
      "id": "Jangankan bisa membaca kanji, menulis hiragana saja dia belum bisa dengan lancar.",
      "en": "Far from being able to read kanji, he cannot even write hiragana properly.",
      "my": "ခန်းဂျီးကို ဖတ်နိုင်ဖို့ဝေးစွ၊ ဟိရဂနကိုပင် ကောင်းမွန်စွာ မရေးနိုင်သေးပေ။"
    },
    "setsuzoku": {
      "id": "Kata Benda / Bentuk Biasa + どころか",
      "en": "Noun / Plain form + どころか",
      "my": "နာမ် / ရိုးရိုးပုံစံ + どころか"
    },
    "nuanceExplanation": {
      "id": "Digunakan untuk menyangkal perkiraan sebelumnya dengan fakta yang jauh lebih ekstrim atau berlawanan secara kontras.",
      "en": "Used to refute an assumption with a reality that is far more extreme, inadequate, or completely opposite.",
      "my": "မျှော်မှန်းထားသည့်အရာနှင့် လုံးဝဆန့်ကျင်ဘက်ဖြစ်ပြီး ပိုမိုဆိုးရွားသော အခြေအနေကို နှိုင်းယှဉ်ဖော်ပြရာတွင် သုံးသည်။"
    },
    "trapNotes": {
      "id": "Klausa kedua sering memakai kata penguat seperti 「さえ」 (bahkan) atau 「も」.",
      "en": "The second clause often features emphasizing particles like 「さえ」 (even) or 「も」.",
      "my": "ဒုတိယဝါကျတွင် 「さえ」 (ပင်လျှင်) သို့မဟုတ် 「も」 (လည်း) ကဲ့သို့သော အလေးပေးစကားလုံးများ ပါလေ့ရှိသည်။"
    }
  },
  "bq_7b": {
    "title": {
      "id": "Pola 〜反面",
      "en": "Pattern 〜反面",
      "my": "〜反面 ပုံစံ"
    },
    "translation": {
      "id": "Tinggal di kota metropolitan memang praktis dan penuh stimulasi, tetapi di balik itu, biaya hidup yang tinggi dan stres keramaian juga besar.",
      "en": "While living in a metropolis is convenient and exciting, on the flip side, living expenses are high and crowd stress is significant.",
      "my": "မြို့ပြကြီးတွင် နေထိုင်ခြင်းသည် အဆင်ပြေပြီး တက်ကြွမှုများစွာရှိသော်လည်း အခြားတစ်ဖက်တွင် ကုန်ကျစရိတ်ကြီးမြင့်ပြီး လူစည်ကားမှုဒဏ် စိတ်ဖိစီးမှုလည်း ကြီးမားသည်။"
    },
    "setsuzoku": {
      "id": "Bentuk Biasa + 反面 / Kata Sifat-na + である反面",
      "en": "Plain form + 反面 / な-Adj + である反面",
      "my": "ရိုးရိုးပုံစံ + 反面 / な-နာမဝိသေသန + である反面"
    },
    "nuanceExplanation": {
      "id": "Menyoroti dua sifat intrinsik yang saling bertolak belakang dari suatu keadaan (seperti koin yang memiliki dua sisi).",
      "en": "Highlights two inherently conflicting sides of a single condition, like two faces of the same coin.",
      "my": "အခြေအနေတစ်ခု၏ မွေးရာပါ ဆန့်ကျင်ဘက် သဘောသဘာဝနှစ်ခု (ဒင်္ဂါးပြားတစ်ခု၏ ခေါင်းနှင့်ပန်းကဲ့သို့) ကို ယှဉ်ပြရာတွင် သုံးသည်။"
    },
    "trapNotes": {
      "id": "Hampir mirip dengan 「一方で」, namun 「反面」 lebih kuat menonjolkan aspek kontras dari hakikat suatu benda.",
      "en": "Similar to 「一方で」, but 「反面」 emphasizes inherent dual opposing natures more strongly.",
      "my": "「一方で」 နှင့်ဆင်တူသော်လည်း 「反面」 သည် သဘောသဘာဝ၏ ဆန့်ကျင်ဘက်ဖြစ်မှုကို ပိုမိုပေါ်လွင်စေသည်။"
    }
  },
  "bq_7c": {
    "title": {
      "id": "Pola 〜に反して",
      "en": "Pattern 〜に反して",
      "my": "〜に反して ပုံစံ"
    },
    "translation": {
      "id": "Bertentangan dengan ekspektasi orang-orang di sekitar, pertandingan dari awal sudah dipaksa melalui pertarungan yang sengit dan tak terduga.",
      "en": "Contrary to surrounding expectations, the match turned into an unexpectedly fierce struggle right from the opening.",
      "my": "ပတ်ဝန်းကျင်၏ မျှော်လင့်ချက်များနှင့် ဆန့်ကျင်ဘက်အနေဖြင့် ပွဲစဉ်စတင်ချိန်မှစ၍ မမျှော်လင့်ထားသော ခက်ခဲကြမ်းတမ်းသည့် တိုက်ပွဲကို ရင်ဆိုင်ခဲ့ရသည်။"
    },
    "setsuzoku": {
      "id": "Kata Benda + に反して / に反する + Kata Benda",
      "en": "Noun + に反して / に反する + Noun",
      "my": "နာမ် + に反して / に反する + နာမ်"
    },
    "nuanceExplanation": {
      "id": "Hasil atau realitas yang terjadi berbanding terbalik 180 derajat dari prediksi, ekspektasi, atau aturan yang ada.",
      "en": "Shows that an actual result or reality turned out 180 degrees opposite to forecasts, expectations, or regulations.",
      "my": "ခန့်မှန်းချက်၊ မျှော်လင့်ချက် သို့မဟုတ် စည်းမျဉ်းများနှင့် လုံးဝ ၁၈၀ ဒီဂရီ ဆန့်ကျင်ဘက် ရလဒ်ထွက်ပေါ်လာသည့်အခါ သုံးသည်။"
    },
    "trapNotes": {
      "id": "Sering dipasangkan dengan 「予想に反して」 (di luar prediksi) atau 「意図に反して」 (di luar niat).",
      "en": "Frequently paired as 「予想に反して」 (contrary to predictions) or 「意図に反して」 (contrary to intentions).",
      "my": "「予想に反して」 (ခန့်မှန်းချက်နှင့်ဆန့်ကျင်၍) သို့မဟုတ် 「意図に反して」 (ရည်ရွယ်ချက်နှင့်ဆန့်ကျင်၍) တို့နှင့် အသုံးများသည်။"
    }
  },
  "bq_7d": {
    "title": {
      "id": "Pola 〜わりに（は）",
      "en": "Pattern 〜わりに（は）",
      "my": "〜わりに（は） ပုံစံ"
    },
    "translation": {
      "id": "Masakan restoran ini, untuk ukuran harganya yang murah, rasanya sangat otentik dan lezat.",
      "en": "Considering its low price, this restaurant's food is surprisingly authentic and delicious.",
      "my": "ဤစားသောက်ဆိုင်၏ ဟင်းလျာများသည် စျေးနှုန်းသက်သာသည်နှင့် နှိုင်းယှဉ်ပါက အလွန်အရသာရှိပြီး လက်ရာမြောက်လှသည်။"
    },
    "setsuzoku": {
      "id": "Bentuk Biasa / Kata Benda + の + わりに（は）",
      "en": "Plain form / Noun + の + わりに（は）",
      "my": "ရိုးရိုးပုံစံ / နာမ် + の + わりに（は）"
    },
    "nuanceExplanation": {
      "id": "Kualitas atau hasil yang terjadi tidak sebanding secara proporsional dengan standar acuan normalnya (murah tapi enak, sudah tua tapi lincah).",
      "en": "The quality or outcome is disproportionately unexpected relative to the normal standard ratio (e.g. cheap but great taste).",
      "my": "သာမန်စံနှုန်းအချိုးအစားနှင့် မမျှော်လင့်ဘဲ ကွာခြားနေသော အခြေအနေ (စျေးပေါသော်လည်း အလွန်အရသာရှိခြင်း စသည်) ကို ဖော်ပြသည်။"
    },
    "trapNotes": {
      "id": "Beda dengan 「にしては」 yang menunjuk fakta konkret spesifik, 「わりに」 menunjuk perbandingan rentang proporsi.",
      "en": "Unlike 「にしては」 which targets a specific concrete fact, 「わりに」 compares against a broad proportional range.",
      "my": "တိကျသော အချက်အလက်ကို ညွှန်းဆိုသော 「にしては」 နှင့်မတူဘဲ 「わりに」 သည် အချိုးအစား နှိုင်းယှဉ်ချက်ကို အဓိကထားသည်။"
    }
  },
  "bq_7e": {
    "title": {
      "id": "Pola 〜にしては",
      "en": "Pattern 〜にしては",
      "my": "〜にしては ပုံစံ"
    },
    "translation": {
      "id": "Untuk ukuran baru 3 bulan datang ke Jepang, percakapan sehari-harinya sangat fasih.",
      "en": "For someone who has only been in Japan for 3 months, his daily conversation is remarkably fluent.",
      "my": "ဂျပန်သို့ ရောက်ရှိလာသည်မှာ ၃ လသာ ရှိသေးသည်နှင့် ကြည့်လျှင် သူ၏ နေ့စဉ်စကားပြောသည် အလွန်ကျွမ်းကျင်ချောမောလှသည်။"
    },
    "setsuzoku": {
      "id": "Bentuk Biasa / Kata Benda langsung + にしては (tanpa の)",
      "en": "Plain form / Noun directly + にしては (no の)",
      "my": "ရိုးရိုးပုံစံ / နာမ် (တိုက်ရိုက်) + にしては (の မပါ)"
    },
    "nuanceExplanation": {
      "id": "Digunakan ketika ada fakta konkret yang jelas (angka waktu, usia, gelar) dan hasil kenyataannya di luar bayangan dari fakta tersebut.",
      "en": "Used when a specific concrete fact (time period, age, status) leads to a reality that defies standard expectations.",
      "my": "တိကျခိုင်လုံသော အချက်အလက် (အချိန်ကာလ၊ အသက်၊ ရာထူး) တစ်ခုရှိပြီး ယင်းမှ မျှော်လင့်ထားသည်ထက် ထူးခြားနေသည့်အခါ သုံးသည်။"
    },
    "trapNotes": {
      "id": "Kunci ujian: Kata Benda langsung menempel tanpa partikel 「の」.",
      "en": "Exam key: Nouns attach directly without the particle 「の」.",
      "my": "စာမေးပွဲ အဓိကအချက်- နာမ်များတွင် 「の」 မထည့်ဘဲ တိုက်ရိုက်ကပ်ရပါမည်။"
    }
  },
  "bq_8": {
    "title": {
      "id": "Pola 〜を契機に（して）",
      "en": "Pattern 〜を契機に（して）",
      "my": "〜を契機に（して） ပုံစံ"
    },
    "translation": {
      "id": "Bermula dari pengalaman dirawat di rumah sakit, saya menata ulang pola makan harian dan kebiasaan tidur saya.",
      "en": "Taking my hospitalization as an opportunity/turning point, I re-evaluated my daily diet and sleeping habits.",
      "my": "ဆေးရုံတက်ခဲ့ရသည့် အဖြစ်အပျက်ကို အခွင့်ကောင်းယူ၍ (အလှည့်အပြောင်းအဖြစ် သတ်မှတ်ကာ) နေ့စဉ် စားသောက်မှုပုံစံနှင့် အိပ်စက်မှုအလေ့အထကို ပြန်လည်ပြင်ဆင်ခဲ့သည်။"
    },
    "setsuzoku": {
      "id": "Kata Benda / Kata Kerja bentuk-た + ことを + 契機に",
      "en": "Noun / Verb Ta-form + ことを + 契機に",
      "my": "နာမ် / ကြိယာ Ta-ပုံစံ + ことを + 契機に"
    },
    "nuanceExplanation": {
      "id": "Menjadikan suatu peristiwa penting atau musibah sebagai titik balik/momentum untuk memulai perubahan besar ke arah baru.",
      "en": "Treats an important event or experience as a catalyst/turning point to initiate a major positive change.",
      "my": "အရေးကြီးသော အဖြစ်အပျက်တစ်ခုကို အလှည့်အပြောင်းအဖြစ် အခြေခံကာ ဘဝအတွက် ကြီးမားသော ပြောင်းလဲမှုသစ် စတင်ရာတွင် သုံးသည်။"
    },
    "trapNotes": {
      "id": "Sering muncul dalam bahasa tulis/formal sebagai sinonim resmi dari 「〜をきっかけに」.",
      "en": "Appears in formal written Japanese as the literary synonym of 「〜をきっかけに」.",
      "my": "「〜をきっかけに」 ၏ တရားဝင် စာပေသုံး စကားလုံးအဖြစ် အသုံးများသည်။"
    }
  },
  "bq_9": {
    "title": {
      "id": "Pola 〜にほかならない",
      "en": "Pattern 〜にほかならない",
      "my": "〜にほかならない ပုံစံ"
    },
    "translation": {
      "id": "Keberhasilannya lulus JLPT N2 dalam waktu singkat tidak lain dan tidak bukan adalah berkat kerja kerasnya yang tiada henti.",
      "en": "His passing the JLPT N2 in a short period is nothing other than the fruit of his relentless hard work.",
      "my": "သူသည် အချိန်တိုအတွင်း JLPT N2 အောင်မြင်ခဲ့ခြင်းမှာ သူ၏ မဆုတ်မနစ်သော ကြိုးစားအားထုတ်မှု၏ ရလဒ်ကြောင့်သာ ဖြစ်သည်မှာ သေချာပေသည်။"
    },
    "setsuzoku": {
      "id": "Kata Benda + にほかならない / Kata Kerja bentuk Biasa + からにほかならない",
      "en": "Noun + にほかならない / Plain Verb + からにほかならない",
      "my": "နာမ် + にほかならない / ရိုးရိုးကြိယာ + からにほかならない"
    },
    "nuanceExplanation": {
      "id": "Penegasan tegas pembicara bahwa alasan di atas adalah satu-satunya faktor utama, tidak ada alasan lainnya.",
      "en": "Emphatic statement by the speaker that this specific reason is the sole, definitive cause and nothing else.",
      "my": "ဤအကြောင်းပြချက်သည် အဓိကတစ်ခုတည်းသော အကြောင်းရင်းဖြစ်ပြီး အခြားအရာ မဟုတ်ကြောင်း အခိုင်အမာ ပြောဆိုရာတွင် သုံးသည်။"
    },
    "trapNotes": {
      "id": "Beda dengan 「〜にすぎない」 yang artinya hanya sepele, 「〜にほかならない」 menegaskan faktor tunggal penentu.",
      "en": "Unlike 「〜にすぎない」 which downplays something as mere, 「〜にほかならない」 asserts the absolute primary reason.",
      "my": "သာမန်မျှသာဟု လျှော့ချဖော်ပြသော 「〜にすぎない」 နှင့်မတူဘဲ 「〜にほかならない」 သည် အဆုံးအဖြတ်ပေးသည့် တစ်ခုတည်းသော အကြောင်းရင်းကို အတည်ပြုသည်။"
    }
  },
  "bq_10": {
    "title": {
      "id": "Pola 〜つつある",
      "en": "Pattern 〜つつある",
      "my": "〜つつある ပုံစံ"
    },
    "translation": {
      "id": "Kelesuan ekonomi yang berlarut-larut pun perlahan-lahan mulai menunjukkan tanda-tanda pemulihan.",
      "en": "The prolonged economic stagnation is also gradually beginning to show signs of recovery.",
      "my": "ကာလရှည်ကြာ စီးပွားရေးကျဆင်းမှုသည်လည်း တဖြည်းဖြည်း ပြန်လည်ဦးမော့လာမည့် အရိပ်အယောင်များကို ပြသလာနေပြီဖြစ်သည်။"
    },
    "setsuzoku": {
      "id": "Kata Kerja bentuk Masu (tanpa ます) + つつある",
      "en": "Verb Masu-stem (without ます) + つつある",
      "my": "ကြိယာ Masu-stem (ます မပါ) + つつある"
    },
    "nuanceExplanation": {
      "id": "Menunjukkan perubahan yang sedang berlangsung secara gradual/bertahap. Digunakan bersama kata kerja perubahan.",
      "en": "Indicates an ongoing gradual process of change. Always combined with verbs of change.",
      "my": "တဖြည်းဖြည်း အဆင့်ဆင့် ဖြစ်ပေါ်ပြောင်းလဲနေသော အခြေအနေကို ဖော်ပြပြီး အပြောင်းအလဲပြ ကြိယာများနှင့် တွဲသုံးသည်။"
    },
    "trapNotes": {
      "id": "Sering dipasangkan dengan kata keterangan seperti 「徐々に」(perlahan).",
      "en": "Often paired with adverbs of gradual change like 「徐々に」(gradually).",
      "my": "「徐々に」(တဖြည်းဖြည်းချင်း) ကဲ့သို့သော ကြိယာဝိသေသနများနှင့် အလွန်တွဲသုံးများသည်။"
    }
  },
  "bq_10b": {
    "title": {
      "id": "Pola 〜にすぎない",
      "en": "Pattern 〜にすぎない",
      "my": "〜にすぎない ပုံစံ"
    },
    "translation": {
      "id": "Keberhasilan kali ini hanyalah langkah pertama, tantangan yang sesungguhnya baru akan dimulai.",
      "en": "This success is merely the very first step; the real challenge begins now.",
      "my": "ယခုတစ်ကြိမ် အောင်မြင်မှုသည် ပထမဆုံး ခြေလှမ်းတစ်ခုမျှသာဖြစ်ပြီး အစစ်အမှန် စိန်ခေါ်မှုမှာ ယခုမှ စတင်မည်ဖြစ်သည်။"
    },
    "setsuzoku": {
      "id": "Kata Benda / Kata Kerja Bentuk Biasa + にすぎない",
      "en": "Noun / Plain Verb + にすぎない",
      "my": "နာမ် / ရိုးရိုးကြိယာ + にすぎない"
    },
    "nuanceExplanation": {
      "id": "Mengecilkan bobot suatu hal dengan menegaskan bahwa hal tersebut hanyalah hal biasa atau terbatas.",
      "en": "Downplays the weight or importance of something, stating it is nothing more than that limited extent.",
      "my": "ထိုအရာသည် သာမန်အတိုင်းအတာတစ်ခုမျှသာဖြစ်ပြီး ကြီးကျယ်လှသည်မဟုတ်ကြောင်း လျှော့ချဖော်ပြရာတွင် သုံးသည်။"
    },
    "trapNotes": {
      "id": "Sering dipasangkan dengan kata 「単なる」(sekadar) atau 「ほんの」(hanya sedikit).",
      "en": "Frequently paired with modifier words like 「単なる」(mere) or 「ほんの」(just a small).",
      "my": "「単なる」(ရိုးရိုးသာမန်မျှ) သို့မဟုတ် 「ほんの」(အနည်းငယ်မျှ) စသည့် စကားလုံးများနှင့် တွဲသုံးလေ့ရှိသည်။"
    }
  },
  "bq_10c": {
    "title": {
      "id": "Pola 〜際（に）",
      "en": "Pattern 〜際（に）",
      "my": "〜際（に） ပုံစံ"
    },
    "translation": {
      "id": "Ketika kehilangan paspor, segeralah melapor ke kantor polisi terdekat dan kedutaan besar.",
      "en": "In the event that you lose your passport, promptly report it to the nearest police station and embassy.",
      "my": "နိုင်ငံကူးလက်မှတ် ပျောက်ဆုံးသွားသည့်အခါ အနီးဆုံး ရဲစခန်းနှင့် သံရုံးသို့ အမြန်ဆုံး သွားရောက်အကြောင်းကြားပါ။"
    },
    "setsuzoku": {
      "id": "Kata Kerja Bentuk Kamus/Ta + 際（に） / Kata Benda + の + 際（に）",
      "en": "Verb Dictionary/Ta-form + 際（に） / Noun + の + 際（に）",
      "my": "ကြိယာ အဘိဓာန်/Ta-ပုံစံ + 際（に） / နာမ် + の + 際（に）"
    },
    "nuanceExplanation": {
      "id": "Sinonim formal tingkat tinggi dari 「ときに」(ketika/saat). Sering dipakai pada aturan resmi kantor dan instruksi hukum.",
      "en": "A formal, high-register synonym for 「ときに」(when/at the time of). Widely used in formal manuals and legal guidelines.",
      "my": "「ときに」(အခါတွင်) ၏ အဆင့်မြင့် တရားဝင် စာပေသုံး စကားဖြစ်ပြီး ရုံးသုံးစည်းမျဉ်းများနှင့် ဥပဒေညွှန်ကြားချက်များတွင် အသုံးပြုသည်။"
    },
    "trapNotes": {
      "id": "Beda dengan 「最中に」 yang berarti sedang di tengah-tengah kejadian mendadak, 「際に」 berarti momen/kesempatan resmi.",
      "en": "Unlike 「最中に」 which indicates an interruption in the middle of an action, 「際に」 simply designates the formal occasion.",
      "my": "လုပ်ဆောင်နေစဉ် မတော်တဆ အနှောင့်အယှက်ဖြစ်သည်ကို ပြသော 「最中に」 နှင့်မတူဘဲ 「際に」 သည် တရားဝင်အချိန်အခါကို ရည်ညွှန်းသည်။"
    }
  },
  "bq_10d": {
    "title": {
      "id": "Pola 〜最中に",
      "en": "Pattern 〜最中に",
      "my": "〜最中に ပုံစံ"
    },
    "translation": {
      "id": "Tepat di tengah-tengah rapat penting, tiba-tiba ponsel saya berdering dan membuat suasana menjadi canggung.",
      "en": "Right in the middle of an important meeting, my mobile phone suddenly rang and created an awkward situation.",
      "my": "အရေးကြီးသော အစည်းအဝေး ပြုလုပ်နေဆဲ အလယ်တွင် ရုတ်တရက် ဖုန်းမြည်လာသဖြင့် အနေရခက်သော အခြေအနေ ဖြစ်ခဲ့ရသည်။"
    },
    "setsuzoku": {
      "id": "Kata Kerja bentuk-ている + 最中に / Kata Benda + の + 最中に",
      "en": "Verb Te-iru form + 最中に / Noun + の + 最中に",
      "my": "ကြိယာ Te-iru ပုံစံ + 最中に / နာမ် + の + 最中に"
    },
    "nuanceExplanation": {
      "id": "Menunjukkan gangguan atau kejadian tak terduga yang tiba-tiba memotong suatu aksi yang sedang berlangsung intens.",
      "en": "Indicates an unexpected disturbance or event that abruptly interrupts an ongoing, focused action.",
      "my": "အာရုံစိုက်လုပ်ဆောင်နေသော လုပ်ငန်းစဉ်တစ်ခုအတွင်း မမျှော်လင့်ထားသည့် အနှောင့်အယှက်တစ်ခု ရုတ်တရက် ဝင်ရောက်လာသည့်အခါ သုံးသည်။"
    },
    "trapNotes": {
      "id": "Klausa kedua hampir selalu berupa kejadian mendadak yang mengganggu.",
      "en": "The second clause is almost always a sudden, interrupting occurrence.",
      "my": "ဒုတိယဝါကျသည် ရုတ်တရက် အနှောင့်အယှက်ဖြစ်စေသော အဖြစ်အပျက် အမြဲဖြစ်လေ့ရှိသည်။"
    }
  },
  "bq_11a": {
    "title": {
      "id": "Pola 〜に限って",
      "en": "Pattern 〜に限って",
      "my": "〜に限って ပုံစံ"
    },
    "translation": {
      "id": "Justru pada hari saya tidak membawa payung, selalu saja turun hujan lebat.",
      "en": "On the very days when I don't carry an umbrella, it invariably pours heavily.",
      "my": "ထီးမပါလာသည့် နေ့မှရွေးပြီး မိုးသည်းထန်စွာ အမြဲရွာတတ်သည်။"
    },
    "setsuzoku": {
      "id": "Kata Benda + に限って",
      "en": "Noun + に限って",
      "my": "နာမ် + に限って"
    },
    "nuanceExplanation": {
      "id": "Mengungkapkan kejengkelan karena kebetulan yang sial justru terjadi tepat pada saat kondisi sedang tidak siap.",
      "en": "Expresses annoyance when an unlucky coincidence happens specifically at the most inconvenient moment.",
      "my": "မပြင်ဆင်ထားသည့် အချိန်မှရွေးပြီး ကံဆိုးစွာ တိုက်ဆိုင်မှုဖြစ်ပေါ်လာသည့်အပေါ် စိတ်ပျက်မကျေနပ်မှုကို ဖော်ပြသည်။"
    },
    "trapNotes": {
      "id": "Sering dipasangkan dengan kata 「よりによって」 atau 「決まって」.",
      "en": "Frequently paired with expressions like 「よりによって」(of all things) or 「決まって」(invariably).",
      "my": "「よりによって」(ဒီအချိန်မှရွေးပြီး) သို့မဟုတ် 「決まって」(ပုံမှန်အတိုင်း) ကဲ့သို့သော စကားများနှင့် တွဲသုံးလေ့ရှိသည်။"
    }
  },
  "bq_11b": {
    "title": {
      "id": "Pola 〜さえ〜ば",
      "en": "Pattern 〜さえ〜ば",
      "my": "〜さえ〜ば ပုံစံ"
    },
    "translation": {
      "id": "Asalkan memiliki kesehatan, saya yakin kesulitan apa pun pasti bisa dilalui.",
      "en": "As long as one has good health, I believe any hardship can certainly be overcome.",
      "my": "ကျန်းမာရေးသာ ကောင်းမွန်နေပါက မည်သို့သော အခက်အခဲကိုမဆို ကျော်လွှားနိုင်မည်ဟု ယုံကြည်ပါသည်။"
    },
    "setsuzoku": {
      "id": "Kata Benda + さえ + Bentuk Pengandaian (ば / なら)",
      "en": "Noun + さえ + Conditional form (ば / なら)",
      "my": "နာမ် + さえ + အခြေအနေပြပုံစံ (ば / なら)"
    },
    "nuanceExplanation": {
      "id": "Menegaskan bahwa hanya dengan satu syarat minimal itu saja terpenuhi, kondisi lain sudah tidak menjadi masalah.",
      "en": "Emphasizes that if this single prerequisite is met, everything else will be fine or manageable.",
      "my": "အဓိက အခြေခံလိုအပ်ချက်တစ်ခုသာ ပြည့်စုံပါက ကျန်ရှိသော အရာအားလုံး အဆင်ပြေသွားမည်ဖြစ်ကြောင်း အလေးပေးဖော်ပြသည်။"
    },
    "trapNotes": {
      "id": "Pola wajib: partikel 「さえ」 di depan, akhiran pengandaian 「ば/なら」 di belakang.",
      "en": "Mandatory structure: particle 「さえ」 in front, conditional ending 「ば/なら」 at the back.",
      "my": "မဖြစ်မနေ သဒ္ဒါပုံစံ- ရှေ့တွင် 「さえ」 နှင့် နောက်တွင် 「ば/なら」 တို့ အစုံလိုက် လိုက်ရပါမည်။"
    }
  },
  "bq_11c": {
    "title": {
      "id": "Pola 〜気味",
      "en": "Pattern 〜気味",
      "my": "〜気味 ပုံစံ"
    },
    "translation": {
      "id": "Akhir-akhir ini karena tekanan pekerjaan saya agak kurang tidur, jadi akhir pekan ini ingin istirahat total.",
      "en": "Lately I've been slightly sleep-deprived due to work pressure, so I want to rest thoroughly this weekend.",
      "my": "မကြာသေးမီက အလုပ်ဖိစီးမှုကြောင့် အိပ်ရေးပျက်ချင်သလို ဖြစ်နေသဖြင့် ယခုသီတင်းပတ်ကုန်တွင် အေးအေးဆေးဆေး အနားယူချင်သည်။"
    },
    "setsuzoku": {
      "id": "Kata Benda / Kata Kerja bentuk Masu (tanpa ます) + 気味（ぎみ）",
      "en": "Noun / Verb Masu-stem (without ます) + 気味（ぎみ）",
      "my": "နာမ် / ကြိယာ Masu-stem (ます မပါ) + 気味（ぎみ）"
    },
    "nuanceExplanation": {
      "id": "Merasa ada sedikit gejala atau kecenderungan negatif fisik/mental (風邪気味 = agak masuk angin, 疲れ気味 = agak letih).",
      "en": "Feeling a slight physical or mental tendency or symptom of a negative state (e.g. slight cold, slight fatigue).",
      "my": "ကာယ သို့မဟုတ် စိတ်ပိုင်းဆိုင်ရာ အခြေအနေ မကောင်းသော အရိပ်အယောင် အနည်းငယ် ခံစားရသည့်အခါ (ဥပမာ- အအေးမိချင်သလို၊ မောပန်းချင်သလို) သုံးသည်။"
    },
    "trapNotes": {
      "id": "Beda dengan 「〜っぽい」 yang sifatnya kasual, 「〜気味」 spesifik pada gejala kondisi tubuh/mental.",
      "en": "Unlike the casual and personality-focused 「〜っぽい」, 「〜気味」 is specific to internal physical/mental states.",
      "my": "အပြုအမူနှင့် သွင်ပြင်အတွက်သုံးသော 「〜っぽい」 နှင့်မတူဘဲ 「〜気味」 သည် ခန္ဓာကိုယ်နှင့် စိတ်၏ လက္ခဏာများအတွက်သာ သီးသန့်သုံးသည်။"
    }
  },
  "bq_11d": {
    "title": {
      "id": "Pola 〜抜く",
      "en": "Pattern 〜抜く",
      "my": "〜抜く ပုံစံ"
    },
    "translation": {
      "id": "Bagaimanapun sulitnya, jika itu jalan yang kupilih sendiri, aku bertekad menyelesaikannya sampai tuntas hingga akhir.",
      "en": "No matter how painful it may be, if it is the path I chose myself, I am resolved to see it through to the bitter end.",
      "my": "မည်မျှပင် ခက်ခဲပါစေ၊ မိမိကိုယ်တိုင် ရွေးချယ်ခဲ့သော လမ်းဖြစ်ပါက အဆုံးတိုင် အောင်မြင်အောင် ပြီးဆုံးစေရန် သန္နိဋ္ဌာန်ချထားသည်။"
    },
    "setsuzoku": {
      "id": "Kata Kerja bentuk Masu (tanpa ます) + 抜く（ぬく）",
      "en": "Verb Masu-stem (without ます) + 抜く（ぬく）",
      "my": "ကြိယာ Masu-stem (ます မပါ) + 抜く（ぬく）"
    },
    "nuanceExplanation": {
      "id": "Melakukan aksi dengan mengerahkan seluruh daya upaya menembus kesulitan hingga tuntas ke garis akhir.",
      "en": "Carrying out an arduous action through all difficulties until the very finish line.",
      "my": "အခက်အခဲ ဒုက္ခအားလုံးကို ကြံ့ကြံ့ခံရင်း အစွမ်းကုန် ကြိုးစားကာ နောက်ဆုံးပန်းတိုင်အထိ ပြီးဆုံးအောင် ဆောင်ရွက်သည့်အခါ သုံးသည်။"
    },
    "trapNotes": {
      "id": "Beda dengan 「やり切る」(menghabiskan kapasitas), 「やり抜く」 menekankan perjuangan menahan penderitaan.",
      "en": "Unlike 「やり切る」(finishing all capacity), 「やり抜く」 emphasizes enduring struggle and perseverance.",
      "my": "စွမ်းဆောင်ရည် အကုန်ထုတ်သုံးသော 「やり切る」 နှင့်မတူဘဲ 「やり抜く」 သည် အခက်အခဲကို ကြိုးစားသည်းခံ ကျော်လွှားမှုကို အလေးပေးသည်။"
    }
  },
  "bq_11e": {
    "title": {
      "id": "Pola 〜げ",
      "en": "Pattern 〜げ",
      "my": "〜げ ပုံစံ"
    },
    "translation": {
      "id": "Dia sempat menampakkan ekspresi wajah yang tampak sedih sejenak, namun segera tersenyum dan beranjak pergi.",
      "en": "She briefly showed a sorrowful expression, but immediately put on a smile and walked away.",
      "my": "သူမသည် ဝမ်းနည်းရိပ်သန်းသော မျက်နှာအမူအရာကို ခဏတာ ပြသခဲ့သော်လည်း ချက်ချင်းပင် အပြုံးမျက်နှာပြုကာ ထွက်ခွာသွားခဲ့သည်။"
    },
    "setsuzoku": {
      "id": "Kata Sifat-i (tanpa い) / Kata Sifat-na + げ（な / に）",
      "en": "い-Adj (without い) / な-Adj + げ（な / に）",
      "my": "い-နာမဝိသေသန (い မပါ) / な-နာမဝိသေသန + げ（な / に）"
    },
    "nuanceExplanation": {
      "id": "Bahasa tulis/estetik untuk menggambarkan suasana hati orang lain yang terpancar dari gestur atau raut muka.",
      "en": "A literary expression depicting another person's inner emotional appearance through their facial expressions or demeanor.",
      "my": "အခြားသူ၏ စိတ်ခံစားချက်ကို သူ၏ အမူအရာ သို့မဟုတ် မျက်နှာရိပ်မှတစ်ဆင့် ခန့်မှန်းဖော်ပြသော စာပေအသုံးအနှုန်း ဖြစ်သည်။"
    },
    "trapNotes": {
      "id": "Bentuk modifikasi ke kata benda adalah 「〜げな表情」.",
      "en": "Noun-modifying form is 「〜げな + Noun」, such as 「〜げな表情」.",
      "my": "နာမ်ကို အထူးပြုလိုပါက 「〜げな表情」(ဝမ်းနည်းရိပ်သန်းသော အမူအရာ) ဟု သုံးရသည်။"
    }
  },
  "bq_11f": {
    "title": {
      "id": "Pola 〜切る",
      "en": "Pattern 〜切る",
      "my": "〜切る ပုံစံ"
    },
    "translation": {
      "id": "Setelah menuntaskan lari maraton penuh, energiku benar-benar habis terkuras tuntas hingga tak sanggup melangkah selangkah pun.",
      "en": "After finishing the full marathon, I had completely exhausted all my physical strength and could not take another step.",
      "my": "မာရသွန်ပြိုင်ပွဲ အပြည့်အဝ ပြီးဆုံးပြီးနောက် ခွန်အားများ လုံးဝကုန်ခမ်းသွားသဖြင့် ခြေတစ်လှမ်းမျှပင် မလှမ်းနိုင်တော့ပေ။"
    },
    "setsuzoku": {
      "id": "Kata Kerja bentuk Masu (tanpa ます) + 切る",
      "en": "Verb Masu-stem (without ます) + 切る",
      "my": "ကြိယာ Masu-stem (ます မပါ) + 切る"
    },
    "nuanceExplanation": {
      "id": "Melakukan sesuatu sampai 100% batas maksimalnya tanpa ada sisa (使い切る = habis total, 疲れ切る = sangat amat letih).",
      "en": "Doing something completely to its 100% absolute limit with nothing remaining (e.g. use up completely, thoroughly exhausted).",
      "my": "အရာတစ်ခုခုကို အကြွင်းမဲ့ (၁၀၀%) ကုန်ဆုံးအောင် လုပ်ဆောင်ခြင်း သို့မဟုတ် အကန့်အသတ်မရှိ ပြည့်ဝသွားခြင်းကို ဖော်ပြသည်။"
    },
    "trapNotes": {
      "id": "Biasa digunakan untuk energi, uang, atau rasa lelah total.",
      "en": "Commonly used for physical stamina, monetary funds, or utter exhaustion.",
      "my": "ခွန်အား၊ ငွေကြေး သို့မဟုတ် ပင်ပန်းနွမ်းနယ်မှု လုံးဝကုန်ခမ်းခြင်းများတွင် အဓိက သုံးသည်။"
    }
  },
  "bq_star_1": {
    "title": {
      "id": "★ Soal Bintang N2 (Pola 〜にほかならない)",
      "en": "★ Star Question N2 (Pattern 〜にほかならない)",
      "my": "★ N2 ကြယ်ပွင့် မေးခွန်း (〜にほかならない ပုံစံ)"
    },
    "translation": {
      "id": "Kegagalan proyek kali ini tidak lain adalah akibat dari kurangnya berbagi informasi di antara kita.",
      "en": "The failure of this project is nothing other than the result of a lack of information sharing among us.",
      "my": "ယခုတစ်ကြိမ် စီမံကိန်း ကျရှုံးရခြင်းမှာ ကျွန်ုပ်တို့အကြား သတင်းအချက်အလက် မျှဝေမှု လိုအပ်ချက်ကြောင့်သာ ဖြစ်သည်မှာ သေချာပေသည်။"
    },
    "setsuzoku": {
      "id": "Menghubungkan kepemilikan: [我々の] -> [情報共有の] -> [不足が] -> predikat [招いたもの] -> にほかならない",
      "en": "Connecting modifiers: [我々の] -> [情報共有の] -> [不足が] -> predicate [招いたもの] -> にほかならない",
      "my": "ဆက်စပ်မှု အစီအစဉ်- [我々の] -> [情報共有の] -> [不足が] -> ကြိယာ [招いたもの] -> にほかならない"
    },
    "nuanceExplanation": {
      "id": "Kunci urutan: 「我々の」 menerangkan 「情報共有」, lalu partikel 「不足が」 menjadi subjek bagi kata kerja pemanggil akibat 「招いた」.",
      "en": "Ordering key: 「我々の」 modifies 「情報共有」, and particle 「不足が」 serves as the subject for the verb 「招いた」.",
      "my": "စီစဉ်မှုသော့ချက်- 「我々の」 သည် 「情報共有」 ကို အထူးပြုပြီး 「不足が」 က ဆိုးကျိုးဖြစ်စေသော ကြိယာ 「招いた」 ၏ ကတ္တားအဖြစ် ဆောင်ရွက်သည်။"
    },
    "trapNotes": {
      "id": "Posisi bintang ★ ada di urutan ke-3 yaitu 「不足が」.",
      "en": "The star ★ position is in slot 3: 「不足が」.",
      "my": "ကြယ်ပွင့် ★ နေရာသည် အမှတ်စဉ် ၃ ဖြစ်သော 「不足が」 ဖြစ်သည်။"
    }
  },
  "bq_star_2": {
    "title": {
      "id": "★ Soal Bintang N2 (Pola 〜ざるを得ない)",
      "en": "★ Star Question N2 (Pattern 〜ざるを得ない)",
      "my": "★ N2 ကြယ်ပွင့် မေးခွန်း (〜ざるを得ない ပုံစံ)"
    },
    "translation": {
      "id": "Bagaimanapun sulitnya situasi, tanpa menyerah hingga akhir kita terpaksa harus terus mencari jalan untuk maju.",
      "en": "No matter how difficult the situation, without giving up to the end we must continue seeking a path forward.",
      "my": "မည်မျှပင် ခက်ခဲသော အခြေအနေဖြစ်ပါစေ၊ အဆုံးတိုင် အရှုံးမပေးဘဲ ရှေ့ဆက်ရမည့်လမ်းကို မရပ်မနား ရှာဖွေရပေမည်။"
    },
    "setsuzoku": {
      "id": "[進む道] (jalan maju) + [を模索し] (mencari) + [続け] (melanjutkan) + ざるを得ない",
      "en": "[進む道] (path forward) + [を模索し] (seeking) + [続け] (continuing) + ざるを得ない",
      "my": "[進む道] (ရှေ့ဆက်လမ်း) + [を模索し] (ရှာဖွေ) + [続け] (ဆက်လက်) + ざるを得ない"
    },
    "nuanceExplanation": {
      "id": "Kombinasi V-masu + 続ける. 「模索し」 menyambung ke 「続け」, lalu 「続け」 (tanpa ない) + ざるを得ない.",
      "en": "Combined V-masu + 続ける. 「模索し」 joins with 「続け」, then 「続け」 connects with ざるを得ない.",
      "my": "V-masu + 続ける ပေါင်းစပ်မှု။ 「模索し」 သည် 「続け」 နှင့် ဆက်စပ်ပြီး 「続け」 ကို ざるを得ない နှင့် ဆက်သွယ်သည်။"
    },
    "trapNotes": {
      "id": "Posisi bintang ★ adalah slot ke-3 yaitu 「模索し」.",
      "en": "The star ★ position is slot 3: 「模索し」.",
      "my": "ကြယ်ပွင့် ★ နေရာသည် အမှတ်စဉ် ၃ ဖြစ်သော 「模索し」 ဖြစ်သည်။"
    }
  },
  "bq_star_3": {
    "title": {
      "id": "★ Soal Bintang N2 (Pola 〜わけにはいかない)",
      "en": "★ Star Question N2 (Pattern 〜わけにはいかない)",
      "my": "★ N2 ကြယ်ပွင့် မေးခွန်း (〜わけにはいかない ပုံစံ)"
    },
    "translation": {
      "id": "Meskipun dia memohon dengan sangat sungguh-sungguh, karena sudah menjadi aturan resmi, kita tidak bisa memberikan pengecualian khusus hanya untuk kali ini.",
      "en": "No matter how earnestly he pleaded, as long as it is an official rule, we cannot allow a special exception just for this time.",
      "my": "သူသည် မည်မျှပင် အသည်းအသန် တောင်းဆိုခဲ့သော်လည်း စည်းကမ်းဖြစ်နေသရွေ့ ယခုတစ်ကြိမ်တည်းအတွက် အထူးကင်းလွတ်ခွင့် ပေး၍မဖြစ်နိုင်ပေ။"
    },
    "setsuzoku": {
      "id": "[今回だけ] -> [特別な例外を] -> [認める] + わけにはいかない",
      "en": "[今回だけ] -> [特別な例外を] -> [認める] + わけにはいかない",
      "my": "[今回だけ] -> [特別な例外を] -> [認める] + わけにはいかない"
    },
    "nuanceExplanation": {
      "id": "Kata sifat-na 「特別な」 memodifikasi kata benda 「例外」. Objek 「例外を」 diikuti kata kerja transitif 「認める」.",
      "en": "Na-adj 「特別な」 modifies noun 「例外」. The object phrase 「例外を」 is followed by transitive verb 「認める」.",
      "my": "な-နာမဝိသေသန 「特別な」 က နာမ် 「例外」 ကို အထူးပြုပြီး ကံပုဒ် 「例外を」 ၏နောက်တွင် ကံလိုကြိယာ 「認める」 လိုက်သည်။"
    },
    "trapNotes": {
      "id": "Posisi bintang ★ adalah slot ke-3 yaitu 「例外を」.",
      "en": "The star ★ position is slot 3: 「例外を」.",
      "my": "ကြယ်ပွင့် ★ နေရာသည် အမှတ်စဉ် ၃ ဖြစ်သော 「例外を」 ဖြစ်သည်။"
    }
  },
  "bq_star_4": {
    "title": {
      "id": "★ Soal Bintang N2 (Pola 〜かねない)",
      "en": "★ Star Question N2 (Pattern 〜かねない)",
      "my": "★ N2 ကြယ်ပွင့် မေးခွန်း (〜かねない ပုံစံ)"
    },
    "translation": {
      "id": "Bekerja di depan komputer dalam waktu lama dapat memicu penurunan daya penglihatan yang serius pada kesehatan, sehingga harus beristirahat secara berkala.",
      "en": "Working on a computer for long hours may cause serious vision deterioration to one's health, so one should take regular breaks.",
      "my": "ကွန်ပျူတာရှေ့တွင် အချိန်ကြာမြင့်စွာ အလုပ်လုပ်ခြင်းသည် ကျန်းမာရေးအတွက် ပြင်းထန်သော အမြင်အာရုံကျဆင်းမှုကို ဖြစ်စေနိုင်သဖြင့် ပုံမှန်အနားယူသင့်သည်။"
    },
    "setsuzoku": {
      "id": "[健康に] -> [深刻な視力低下を] -> [引き起こし] + かねない",
      "en": "[健康に] -> [深刻な視力低下を] -> [引き起こし] + かねない",
      "my": "[健康に] -> [深刻な視力低下を] -> [引き起こし] + かねない"
    },
    "nuanceExplanation": {
      "id": "「深刻な」 adalah kata sifat menerangkan kata benda 「視力低下」. Frasa diakhiri kata kerja stem 「引き起こし」 + かねない.",
      "en": "「深刻な」 is an adjective modifying the noun phrase 「視力低下」. The verbal phrase ends with stem 「引き起こし」 + かねない.",
      "my": "「深刻な」 သည် နာမ် 「視力低下」 ကို အထူးပြုပြီး ကြိယာ stem 「引き起こし」 + かねない ဖြင့် ဝါကျအဆုံးသတ်သည်။"
    },
    "trapNotes": {
      "id": "Posisi bintang ★ jatuh pada slot ke-3 yaitu 「視力低下を」.",
      "en": "The star ★ position is slot 3: 「視力低下を」.",
      "my": "ကြယ်ပွင့် ★ နေရာသည် အမှတ်စဉ် ၃ ဖြစ်သော 「視力低下を」 ဖြစ်သည်။"
    }
  },
  "bq_star_5": {
    "title": {
      "id": "★ Soal Bintang N2 (Pola 〜つつある)",
      "en": "★ Star Question N2 (Pattern 〜つつある)",
      "my": "★ N2 ကြယ်ပွင့် မေးခွန်း (〜つつある ပုံစံ)"
    },
    "translation": {
      "id": "Wilayah ini, dengan momentum dibukanya jalur shinkansen baru, sedang berkembang pesat sebagai kota pariwisata.",
      "en": "With the opening of the new Shinkansen as momentum, this region is rapidly developing into a tourist city.",
      "my": "ဤဒေသသည် ကျည်ဆန်ရထားလမ်းသစ် ဖွင့်လှစ်ခြင်းကို အခွင့်ကောင်းယူကာ ခရီးသွားမြို့တော်အဖြစ် လျင်မြန်စွာ ဖွံ့ဖြိုးတိုးတက်လာနေသည်။"
    },
    "setsuzoku": {
      "id": "[開通を] + [契機に] -> [観光都市として] -> [急速に] -> [発展し] + つつある",
      "en": "[開通を] + [契機に] -> [観光都市として] -> [急速に] -> [発展し] + つつある",
      "my": "[開通を] + [契機に] -> [観光都市として] -> [急速に] -> [発展し] + つつある"
    },
    "nuanceExplanation": {
      "id": "Pola ganda: 「〜を契機に」 di awal kalimat, dipadukan dengan kata kerja perubahan bertahap 「発展しつつある」 di akhir kalimat.",
      "en": "Dual pattern: 「〜を契機に」 at the front paired with progressive change verb 「発展しつつある」 at the end.",
      "my": "နှစ်ဆင့်သဒ္ဒါပုံစံ- ရှေ့တွင် 「〜を契機に」 ပါရှိပြီး ဝါကျအဆုံးတွင် အပြောင်းအလဲပြ 「発展しつつある」 ဖြင့် တွဲစပ်ထားသည်။"
    },
    "trapNotes": {
      "id": "Posisi bintang ★ jatuh pada slot ke-3 yaitu kata keterangan 「急速に」.",
      "en": "The star ★ position is slot 3: the adverb 「急速に」.",
      "my": "ကြယ်ပွင့် ★ နေရာသည် အမှတ်စဉ် ၃ ဖြစ်သော ကြိယာဝိသေသန 「急速に」 ဖြစ်သည်။"
    }
  },
  "bq_n2_6_1": {
    "title": {
      "id": "Pola 〜にほかならない",
      "en": "Pattern 〜にほかならない",
      "my": "〜にほかならない ပုံစံ"
    },
    "translation": {
      "id": "Keberhasilan proyek kali ini tidak lain adalah buah dari kerja keras dan pengorbanan seluruh anggota tim.",
      "en": "The success of this project is nothing other than the result of the dedicated hard work of all team members.",
      "my": "ယခုတစ်ကြိမ် စီမံကိန်း အောင်မြင်မှုသည် အဖွဲ့ဝင်အားလုံး၏ ကိုယ်ကျိုးစွန့် အားထုတ်ကြိုးပမ်းမှု ရလဒ်ကြောင့်သာ ဖြစ်သည်မှာ မလွဲပေ။"
    },
    "setsuzoku": {
      "id": "Kata Benda + にほかならない",
      "en": "Noun + にほかならない",
      "my": "နာမ် + にほかならない"
    },
    "nuanceExplanation": {
      "id": "Bahasa formal untuk menegaskan secara mutlak bahwa tidak ada sebab lain selain faktor tersebut.",
      "en": "Formal register asserting absolutely that there is no other reason besides this decisive factor.",
      "my": "ဤအကြောင်းရင်းမှတစ်ပါး အခြားအကြောင်းရင်း မရှိကြောင်း ပြတ်သားစွာ အတည်ပြုပြောဆိုသော တရားဝင် စကားအသုံးအနှုန်း ဖြစ်သည်။"
    },
    "trapNotes": {
      "id": "Digunakan untuk kesimpulan penting atau apresiasi mendalam.",
      "en": "Used for momentous conclusions or deep heartfelt appreciation.",
      "my": "အရေးကြီးသော ကောက်ချက်ချမှုများ သို့မဟုတ် လေးနက်သော ကျေးဇူးတင်စကားများတွင် သုံးသည်။"
    }
  },
  "bq_n2_6_2": {
    "title": {
      "id": "Pola 〜ざるを得ない",
      "en": "Pattern 〜ざるを得ない",
      "my": "〜ざるを得ない ပုံစံ"
    },
    "translation": {
      "id": "Disodorkan bukti sejelas ini, saya terpaksa tidak punya pilihan lain selain mengakui kesalahan sendiri.",
      "en": "Confronted with such clear evidence, I am compelled to admit my own mistake.",
      "my": "ဤမျှ ရှင်းလင်းသော သက်သေအထောက်အထားကို ပြသခံရသည့်အခါ မိမိ၏ အမှားကို ဝန်မခံဘဲ မနေနိုင်တော့ပေ။"
    },
    "setsuzoku": {
      "id": "Kata Kerja bentuk-ない (tanpa ない) + ざるを得ない",
      "en": "Verb nai-form (without ない) + ざるを得ない",
      "my": "ကြိယာ nai-ပုံစံ (nai မပါ) + ざるを得ない"
    },
    "nuanceExplanation": {
      "id": "Situasi yang memaksa seseorang melakukan hal yang bertentangan dengan keinginannya.",
      "en": "A situation that forces one to perform an action against their internal wishes.",
      "my": "မိမိဆန္ဒနှင့် ဆန့်ကျင်သော်လည်း အခြေအနေအရ မဖြစ်မနေ လုပ်ဆောင်ရသည့် အခြေအနေကို ဖော်ပြသည်။"
    },
    "trapNotes": {
      "id": "Khusus kata kerja する berubah menjadi せざるを得ない.",
      "en": "Irregular verb: する becomes せざるを得ない.",
      "my": "အထူးပြောင်းလဲမှု- する သည် せざるを得ない ဖြစ်လာသည်။"
    }
  },
  "bq_n2_6_3": {
    "title": {
      "id": "Pola 〜を余儀なくされる",
      "en": "Pattern 〜を余儀なくされる",
      "my": "〜を余儀なくされる ပုံစံ"
    },
    "translation": {
      "id": "Diterjang angin topan secara langsung, acara luar ruangan akhir pekan terpaksa dibatalkan.",
      "en": "Directly hit by the typhoon, the weekend outdoor event was forced to be canceled.",
      "my": "တိုင်ဖွန်းမုန်တိုင်း တိုက်ရိုက်ဝင်ရောက်မှုကြောင့် သီတင်းပတ်ကုန် ပြင်ပအခမ်းအနားကို မလွှဲမရှောင်သာ ဖျက်သိမ်းခဲ့ရသည်။"
    },
    "setsuzoku": {
      "id": "Kata Benda + を余儀なくされる",
      "en": "Noun + を余儀なくされる",
      "my": "နာမ် + を余儀なくされる"
    },
    "nuanceExplanation": {
      "id": "Subjek dipaksa oleh keadaan eksternal atau bencana yang di luar kendali.",
      "en": "The subject is forced into an outcome by external circumstances beyond their control.",
      "my": "ထိန်းချုပ်၍မရသော ပြင်ပအခြေအနေ သို့မဟုတ် သဘာဝဘေးအန္တရာယ်ကြောင့် မလိုလားအပ်သော အခြေအနေသို့ ရောက်ရှိသွားခြင်းကို ဖော်ပြသည်။"
    },
    "trapNotes": {
      "id": "Berbeda dengan bentuk aktif 「〜を余儀なくさせる」.",
      "en": "Distinguish carefully from the active form 「〜を余儀なくさせる」.",
      "my": "ကြိယာပြောင်းလဲမှု- 「〜を余儀なくさせる」 (စေခိုင်းခြင်း) နှင့် မမှားစေရန် သတိပြုပါ။"
    }
  },
  "bq_n2_6_4": {
    "title": {
      "id": "Pola 〜以上（は）",
      "en": "Pattern 〜以上（は）",
      "my": "〜以上（は） ပုံစံ"
    },
    "translation": {
      "id": "Karena sudah bersedia menerima tugas ini, saya harus menyelesaikannya dengan penuh tanggung jawab sampai tuntas.",
      "en": "Now that I have accepted this responsibility, I must see it through with full accountability until the end.",
      "my": "တာဝန်ကို တစ်ကြိမ် လက်ခံလိုက်ပြီဖြစ်သဖြင့် အဆုံးတိုင် တာဝန်သိစိတ် အပြည့်ဖြင့် ပြီးမြောက်အောင် ဆောင်ရွက်ရမည်။"
    },
    "setsuzoku": {
      "id": "Bentuk Biasa / Kata Kerja Ta-form + 以上（は）",
      "en": "Plain form / Verb Ta-form + 以上（は）",
      "my": "ရိုးရိုးပုံစံ / ကြိယာ Ta-ပုံစံ + 以上（は）"
    },
    "nuanceExplanation": {
      "id": "Karena suatu fakta atau komitmen sudah dimulai, maka ada konsekuensi moral atau tekad yang wajib dijalankan.",
      "en": "Since a factual commitment has been established, a moral obligation or natural resolution must naturally follow.",
      "my": "ကတိကဝတ် သို့မဟုတ် အခြေအနေတစ်ခု စတင်ပြီးဖြစ်သဖြင့် မလွဲမသွေ လိုက်နာဆောင်ရွက်ရမည့် ကျင့်ဝတ်တာဝန်ကို ဖော်ပြသည်။"
    },
    "trapNotes": {
      "id": "Klausa belakang biasanya menyatakan keharusan: 〜べきだ, 〜なければならない.",
      "en": "The following clause almost always conveys strong obligation: 〜べきだ, 〜なければならない.",
      "my": "နောက်ဝါကျတွင် မဖြစ်မနေ လိုက်နာရမည့် 〜べきだ၊ 〜なければならない စသည်တို့ လိုက်ရသည်။"
    }
  },
  "bq_n2_7_1": {
    "title": {
      "id": "Pola 〜をもとに（して）",
      "en": "Pattern 〜をもとに（して）",
      "my": "〜をもとに（して） ပုံစံ"
    },
    "translation": {
      "id": "Novel ini merupakan kisah fiksi yang ditulis berdasarkan pengalaman nyata sang pengarang.",
      "en": "This novel is a fictional work written based upon the author's real-life experiences.",
      "my": "ဤဝတ္ထုသည် စာရေးသူ၏ လက်တွေ့ဘဝ အတွေ့အကြုံများကို အခြေခံ၍ ရေးသားထားသော စိတ်ကူးယဉ် ဝတ္ထုတစ်ပုဒ် ဖြစ်သည်။"
    },
    "setsuzoku": {
      "id": "Kata Benda + をもとに（して）",
      "en": "Noun + をもとに（して）",
      "my": "နာမ် + をもとに（して）"
    },
    "nuanceExplanation": {
      "id": "Mengambil suatu materi, ide, atau fakta mentah sebagai sumber inspirasi untuk melahirkan karya baru.",
      "en": "Using raw materials, real experiences, or motifs as an inspirational foundation to create something new.",
      "my": "လက်တွေ့ အချက်အလက်၊ စိတ်ကူး သို့မဟုတ် အတွေ့အကြုံကို ကုန်ကြမ်းအဖြစ် အခြေခံကာ အသစ်တစ်ခုကို ဖန်တီးရာတွင် သုံးသည်။"
    },
    "trapNotes": {
      "id": "Sering dipakai untuk karya seni, film, desain, atau novel.",
      "en": "Commonly applied to creative works, films, design concepts, or literature.",
      "my": "ရုပ်ရှင်၊ ဝတ္ထု၊ ဒီဇိုင်း သို့မဟုတ် အနုပညာဖန်တီးမှုများတွင် အများဆုံး တွဲသုံးသည်။"
    }
  },
  "bq_n2_7_2": {
    "title": {
      "id": "Pola 〜に基づいて",
      "en": "Pattern 〜に基づいて",
      "my": "〜に基づいて ပုံစံ"
    },
    "translation": {
      "id": "Pengadilan harus diselenggarakan secara adil dengan berlandaskan hukum dan bukti objektif.",
      "en": "Trials must be conducted fairly, grounded strictly in law and objective evidence.",
      "my": "တရားစီရင်ရေးကို ဥပဒေနှင့် ဓမ္မဓိဋ္ဌာန်ကျသော သက်သေအထောက်အထားများအပေါ် အခြေခံ၍ တရားမျှတစွာ ဆောင်ရွက်ရမည်။"
    },
    "setsuzoku": {
      "id": "Kata Benda + に基づいて / に基づく + Kata Benda",
      "en": "Noun + に基づいて / に基づく + Noun",
      "my": "နာမ် + に基づいて / に基づく + နာမ်"
    },
    "nuanceExplanation": {
      "id": "Menjadikan norma, hukum, data resmi, atau aturan sebagai pedoman mutlak tindakan.",
      "en": "Using official laws, hard data, or strict regulations as an absolute baseline guideline for action.",
      "my": "ဥပဒေ၊ တရားဝင်အချက်အလက် သို့မဟုတ် တင်းကျပ်သော စည်းမျဉ်းများကို မူဝါဒအဖြစ် အတိအကျ အခြေခံရာတွင် သုံးသည်။"
    },
    "trapNotes": {
      "id": "Lebih formal dan kaku dibanding 「〜をもとに」.",
      "en": "More formal, authoritative, and rigid than 「〜をもとに」.",
      "my": "「〜をもとに」 ထက် ပိုမိုတရားဝင်ပြီး ဥပဒေနှင့် စည်းမျဉ်းများအတွက် အဓိက သုံးသည်။"
    }
  },
  "bq_n2_7_3": {
    "title": {
      "id": "Pola 〜にわたって",
      "en": "Pattern 〜にわたって",
      "my": "〜にわたって ပုံစံ"
    },
    "translation": {
      "id": "Rapat diperdebatkan secara antusias selama rentang waktu 5 jam penuh, dan akhirnya mencapai mufakat.",
      "en": "The meeting was earnestly debated over a span of 5 full hours, and finally reached consensus.",
      "my": "အစည်းအဝေးတွင် ၅ နာရီကြာမြင့်စွာ စိတ်အားထက်သန်စွာ အငြင်းပွားဆွေးနွေးခဲ့ကြပြီး နောက်ဆုံးတွင် သဘောတူညီမှု ရရှိခဲ့သည်။"
    },
    "setsuzoku": {
      "id": "Kata Benda (Rentang Waktu / Lokasi / Bidang) + にわたって",
      "en": "Noun (Time span / Geographic range / Scope) + にわたって",
      "my": "နာမ် (အချိန်ကာလ / ပထဝီဝင်နယ်ပယ် / ကဏ္ဍ) + にわたって"
    },
    "nuanceExplanation": {
      "id": "Menunjukkan bahwa aksi atau fenomena membentang luas di seluruh rentang waktu atau area tersebut.",
      "en": "Indicates that an action or phenomenon spans broadly across the entirety of that time period or physical area.",
      "my": "လုပ်ဆောင်ချက် သို့မဟုတ် အဖြစ်အပျက်တစ်ခုသည် ထိုအချိန်ကာလ သို့မဟုတ် ဧရိယာတစ်ခုလုံးကို အပြည့်အဝ လွှမ်းခြုံဖြစ်ပွားခဲ့ကြောင်း ဖော်ပြသည်။"
    },
    "trapNotes": {
      "id": "Menekankan skala besar dan rentang keseluruhan.",
      "en": "Emphasizes broad scale, extensive reach, and full duration.",
      "my": "အချိန်ကာလ သို့မဟုတ် နယ်ပယ် အတိုင်းအတာ၏ ကျယ်ပြန့်မှုကို အလေးပေးသည်။"
    }
  },
  "bq_n2_7_4": {
    "title": {
      "id": "Pola 〜を通じて / 〜を通して",
      "en": "Pattern 〜を通じて / 〜を通して",
      "my": "〜を通じて / 〜を通して ပုံစံ"
    },
    "translation": {
      "id": "Melalui aktivitas sukarelawan, saya mendapatkan banyak sahabat dan pengalaman hidup yang berharga.",
      "en": "Through volunteer activities, I gained many companions and invaluable life experiences.",
      "my": "စေတနာ့ဝန်ထမ်း လှုပ်ရှားမှုများမှတစ်ဆင့် မိတ်ဆွေများစွာနှင့် တန်ဖိုးမဖြတ်နိုင်သော ဘဝအတွေ့အကြုံများကို ရရှိခဲ့သည်။"
    },
    "setsuzoku": {
      "id": "Kata Benda + を通じて / を通して",
      "en": "Noun + を通じて / を通して",
      "my": "နာမ် + を通じて / を通して"
    },
    "nuanceExplanation": {
      "id": "Menggunakan suatu perantara, relasi, atau media untuk mendapatkan hal positif.",
      "en": "Using a relationship, intermediary activity, or medium to attain a positive result or insight.",
      "my": "ကြားခံ ဆက်ဆံရေး၊ လှုပ်ရှားမှု သို့မဟုတ် ကြားခံအရာတစ်ခုမှတစ်ဆင့် အကျိုးကျေးဇူးတစ်ခုခုကို ရရှိသည့်အခါ သုံးသည်။"
    },
    "trapNotes": {
      "id": "Sering dipakai dalam esai pengalaman diri atau wawancara kerja.",
      "en": "Widely utilized in personal reflection essays or job interview self-introductions.",
      "my": "ကိုယ်ရေးအတွေ့အကြုံ စာစီစာကုံးများနှင့် အလုပ်အင်တာဗျူးများတွင် အလွန်အသုံးများသည်။"
    }
  },
  "bq_n2_8_1": {
    "title": {
      "id": "Pola 〜げ",
      "en": "Pattern 〜げ",
      "my": "〜げ ပုံစံ"
    },
    "translation": {
      "id": "Dia menatap ke arah sini dengan ekspresi wajah yang tampak seolah ingin mengatakan sesuatu.",
      "en": "She was gazing over here with a look on her face as if she had something she wanted to say.",
      "my": "သူမသည် တစ်စုံတစ်ခုကို ပြောပြချင်သကဲ့သို့သော မျက်နှာအမူအရာဖြင့် ဤဘက်သို့ စိုက်ကြည့်နေခဲ့သည်။"
    },
    "setsuzoku": {
      "id": "Kata Kerja Masu-stem (tanpa masu) / Kata Sifat-i + げ",
      "en": "Verb Masu-stem (without masu) / い-Adj + げ",
      "my": "ကြိယာ Masu-stem (masu မပါ) / い-နာမဝိသေသန + げ"
    },
    "nuanceExplanation": {
      "id": "Menggambarkan suasana rasa yang terpancar jelas dari raut muka atau penampilan seseorang.",
      "en": "Depicts an apparent emotional state emanating clearly from someone's facial expression or posture.",
      "my": "လူတစ်ဦး၏ မျက်နှာအမူအရာ သို့မဟုတ် အသွင်အပြင်မှ ထင်ရှားစွာ မြင်တွေ့ရသော စိတ်ခံစားချက်ကို ဖော်ပြသည်။"
    },
    "trapNotes": {
      "id": "Bentuk kata bendanya memakai 「〜げな」: 言いたげな顔.",
      "en": "Pre-nominal modifier form attaches 「〜げな」: 言いたげな顔 (a look as if wanting to speak).",
      "my": "နာမ်နှင့်တွဲလိုပါက 「〜げな」 အဖြစ်သုံးသည် (ဥပမာ- 言いたげな顔)။"
    }
  },
  "bq_n2_8_2": {
    "title": {
      "id": "Pola 〜気味",
      "en": "Pattern 〜気味",
      "my": "〜気味 ပုံစံ"
    },
    "translation": {
      "id": "Akhir-akhir ini lembur terus dan merasa agak masuk angin, jadi malam ini saya berencana istirahat lebih awal.",
      "en": "Due to continuous overtime lately I feel a slight cold coming on, so I plan to rest early tonight.",
      "my": "မကြာသေးမီက အလုပ်များ ဆက်တိုက်ဆင်းနေရသဖြင့် အအေးမိချင်သလို ဖြစ်နေသောကြောင့် ယနေ့ညတွင် စောစောအနားယူရန် စဉ်းစားထားသည်။"
    },
    "setsuzoku": {
      "id": "Kata Benda / Kata Kerja Masu-stem + 気味（ぎみ）",
      "en": "Noun / Verb Masu-stem + 気味（ぎみ）",
      "my": "နာမ် / ကြိယာ Masu-stem + 気味（ぎみ）"
    },
    "nuanceExplanation": {
      "id": "Kondisi fisik atau situasi yang mulai menunjukkan sedikit kecenderungan negatif.",
      "en": "A bodily condition or situation beginning to exhibit subtle signs of a negative state.",
      "my": "ခန္ဓာကိုယ်ကျန်းမာရေး သို့မဟုတ် အခြေအနေတစ်ခုသည် အနည်းငယ် ဆိုးကျိုးဘက်သို့ စတင်ယိမ်းယိုင်နေခြင်းကို ဖော်ပြသည်။"
    },
    "trapNotes": {
      "id": "風邪気味 (agak flu), 太り気味 (agak menggemuk), 緊張気味 (agak tegang).",
      "en": "風邪気味 (touch of cold), 太り気味 (putting on weight), 緊張気味 (a bit nervous).",
      "my": "အသုံးများသော စကားစုများ- 風邪気味 (အအေးမိချင်သလို)၊ 太り気味 (ဝချင်သလို)၊ 緊張気味 (စိတ်လှုပ်ရှားချင်သလို)။"
    }
  },
  "bq_n2_8_3": {
    "title": {
      "id": "Pola 〜っぽい",
      "en": "Pattern 〜っぽい",
      "my": "〜っぽい ပုံစံ"
    },
    "translation": {
      "id": "Karena sudah dewasa, kamu harus mengubah sikapmu yang gampang tersulut emosi marah itu.",
      "en": "Now that you are an adult, you should amend that short-tempered attitude of getting easily irritated.",
      "my": "အရွယ်ရောက်ပြီးသူ ဖြစ်လာပြီဖြစ်သဖြင့် ထိုသို့ ဒေါသထွက်လွယ်သော အကျင့်စရိုက်ကို ပြုပြင်သင့်သည်။"
    },
    "setsuzoku": {
      "id": "Kata Kerja Masu-stem / Kata Benda / Kata Sifat-i + っぽい",
      "en": "Verb Masu-stem / Noun / い-Adj + っぽい",
      "my": "ကြိယာ Masu-stem / နာမ် / い-နာမဝိသေသန + っぽい"
    },
    "nuanceExplanation": {
      "id": "Kecenderungan watak atau sifat negatif yang mudah berulang (怒りっぽい = cepat marah, 忘れっぽい = pelupa).",
      "en": "A personal disposition or recurring negative tendency (e.g. short-tempered, forgetful).",
      "my": "စိတ်သဘောထား သို့မဟုတ် အလွယ်တကူ ဖြစ်ပေါ်တတ်သော အကျင့်စရိုက် (ဒေါသကြီးလွယ်ခြင်း၊ မေ့တတ်ခြင်း စသည်) ကို ဖော်ပြသည်။"
    },
    "trapNotes": {
      "id": "Nuansanya kasual dan sering bermakna merendahkan atau mengkritik kebiasaan buruk.",
      "en": "Casual tone, often implying criticism toward a noticeable bad habit or inclination.",
      "my": "စကားပြောသုံး ပေါ့ပေါ့ပါးပါးဖြစ်ပြီး အလေ့အထဆိုးကို ဝေဖန်ရာတွင် သုံးလေ့ရှိသည်။"
    }
  },
  "bq_n2_8_4": {
    "title": {
      "id": "Pola 〜ものがある",
      "en": "Pattern 〜ものがある",
      "my": "〜ものがある ပုံစံ"
    },
    "translation": {
      "id": "Jejak langkah perjuangannya yang luar biasa selama ini benar-benar menyentuh lubuk sanubari secara mendalam.",
      "en": "His extraordinary journey of perseverance up until now truly has something deeply touching about it.",
      "my": "သူ၏ ယခုတိုင် ထူးခြားပြောင်မြောက်သော ကြိုးပမ်းအားထုတ်မှု ခရီးစဉ်သည် နှလုံးသားကို နက်ရှိုင်းစွာ ထိမိစေသော ခံစားချက်တစ်ခု ရှိပေသည်။"
    },
    "setsuzoku": {
      "id": "Bentuk Kamus / Kata Sifat-i / Kata Sifat-na + な + ものがある",
      "en": "Dictionary form / い-Adj / な-Adj + な + ものがある",
      "my": "အဘိဓာန်ပုံစံ / い-နာမဝိသေသန / な-နာမဝိသေသန + な + ものがある"
    },
    "nuanceExplanation": {
      "id": "Pembicara merasakan dengan kuat adanya suatu kualitas emosional mendalam yang sulit diungkapkan secara biasa.",
      "en": "The speaker intensely feels a deep, remarkable emotional quality that cannot easily be described ordinary terms.",
      "my": "စကားလုံးဖြင့် ဖော်ပြရန်ခက်ခဲသော လေးနက်သည့် စိတ်ခံစားမှု သို့မဟုတ် အရည်အသွေးတစ်ခု ရှိနေကြောင်း အလေးပေးဖော်ပြသည်။"
    },
    "trapNotes": {
      "id": "Sering berpasangan dengan: 感銘を受ける (terkesan), 胸を打つ (menyentuh hati), 見事な (luar biasa).",
      "en": "Frequently paired with: 感銘を受ける (impressive), 胸を打つ (touching), 見事な (splendid).",
      "my": "感銘を受ける (စွဲမက်ဖွယ်ကောင်း)၊ 胸を打つ (ရင်ထဲထိရှစေ) စသော စကားလုံးများနှင့် တွဲသုံးလေ့ရှိသည်။"
    }
  },
  "bq_n1_1": {
    "title": {
      "id": "Pola 〜極まりない",
      "en": "Pattern 〜極まりない",
      "my": "〜極まりない ပုံစံ"
    },
    "translation": {
      "id": "Meneruskan proyek konstruksi tanpa melakukan pemeriksaan keselamatan sama sekali merupakan tindakan yang sangat amat berbahaya.",
      "en": "Proceeding with construction without carrying out any safety checks whatsoever is an exceedingly dangerous act.",
      "my": "လုံခြုံရေး စစ်ဆေးမှု လုံးဝမပြုလုပ်ဘဲ ဆောက်လုပ်ရေးလုပ်ငန်းကို ဆက်လက်လုပ်ဆောင်ခြင်းသည် အလွန်အမင်း အန္တရာယ်ကြီးမားသော လုပ်ရပ်ဖြစ်သည်။"
    },
    "setsuzoku": {
      "id": "Kata Sifat-na (tanpa な) + 極まりない（きわまりない）",
      "en": "な-Adj (without な) + 極まりない",
      "my": "な-နာမဝိသေသန (な မပါ) + 極まりない"
    },
    "nuanceExplanation": {
      "id": "Bahasa tulis tinggi untuk menyatakan kondisi yang telah mencapai derajat ekstrim paling puncak (biasanya bernuansa kritik keras).",
      "en": "High literary register indicating that a state has reached its absolute extreme peak, typically conveying severe criticism.",
      "my": "အခြေအနေတစ်ခုသည် အစွန်းဆုံးအဆင့်သို့ ရောက်ရှိနေကြောင်း (အထူးသဖြင့် ပြင်းပြင်းထန်ထန် ဝေဖန်ရာတွင်) ဖော်ပြသော အဆင့်မြင့် စာပေသုံးစကား ဖြစ်သည်။"
    },
    "trapNotes": {
      "id": "Biasa dipakai untuk: 危険極まりない (amat berbahaya), 無責任極まりない (amat tidak bertanggung jawab).",
      "en": "Common pairings: 危険極まりない (extremely dangerous), 無責任極まりない (grossly irresponsible).",
      "my": "အသုံးများသော ပုံစံများ- 危険極まりない (အလွန်အန္တရာယ်များသော)၊ 無責任極まりない (အလွန်တာဝန်မဲ့သော)။"
    }
  },
  "bq_n1_2": {
    "title": {
      "id": "Pola 〜てやまない",
      "en": "Pattern 〜てやまない",
      "my": "〜てやまない ပုံစံ"
    },
    "translation": {
      "id": "Saya tiada hentinya mendoakan dan berharap dari lubuk hati yang terdalam bagi pemulihan secepatnya wilayah terdampak bencana dan keselamatan seluruh warga.",
      "en": "I earnestly pray and hope from the bottom of my heart for the speedy recovery of the disaster area and the safety of all residents.",
      "my": "သဘာဝဘေးဒဏ်သင့် ဒေသ အမြန်ဆုံး ပြန်လည်ထူထောင်နိုင်ရေးနှင့် ဒေသခံအားလုံး ဘေးကင်းလုံခြုံရေးအတွက် နှလုံးသားထဲမှ အစဉ်မပြတ် ဆုတောင်းမေတ္တာ ပို့သအပ်ပါသည်။"
    },
    "setsuzoku": {
      "id": "Kata Kerja bentuk-て + やまない",
      "en": "Verb Te-form + やまない",
      "my": "ကြိယာ Te-ပုံစံ + やまない"
    },
    "nuanceExplanation": {
      "id": "Perasaan harapan, doa, atau kekaguman yang terus mengalir dari dalam hati tanpa henti.",
      "en": "A profound feeling of prayer, hope, or deep admiration that continues to well up ceaselessly from one's heart.",
      "my": "ဆုတောင်းခြင်း၊ မျှော်လင့်ခြင်း သို့မဟုတ် လေးစားအားကျခြင်း ခံစားချက်သည် ရင်ထဲမှ အဆုံးမရှိ စဉ်ဆက်မပြတ် ပေါ်ထွက်နေခြင်းကို ဖော်ပြသည်။"
    },
    "trapNotes": {
      "id": "Hampir selalu berpasangan dengan kata kerja doa/harapan: 願ってやまない, 祈ってやまない, 期待してやまない.",
      "en": "Almost exclusively paired with verbs of hope/prayer: 願ってやまない, 祈ってやまない, 期待してやまない.",
      "my": "ဆုတောင်းမျှော်လင့်ပြ ကြိယာများနှင့်သာ တွဲသုံးသည်- 願ってやまない၊ 祈ってやまない၊ 期待してやまない။"
    }
  },
  "bq_n1_3": {
    "title": {
      "id": "Pola 〜に堪えない",
      "en": "Pattern 〜に堪えない",
      "my": "〜に堪えない ပုံစံ"
    },
    "translation": {
      "id": "Pemandangan bangunan bersejarah yang dulunya begitu megah kini hancur secara mengenaskan sungguh tak tega untuk dipandang.",
      "en": "The sight of the once-glorious historic building now tragically destroyed is truly too painful to bear looking at.",
      "my": "တစ်ချိန်က ခမ်းနားထည်ဝါခဲ့သော သမိုင်းဝင်အဆောက်အအုံသည် ယခုအခါ ဆိုးရွားစွာ ပျက်စီးယိုယွင်းနေသည့် မြင်ကွင်းမှာ မျက်စိဖြင့် ကြည့်ရက်စရာပင် မရှိတော့ပေ။"
    },
    "setsuzoku": {
      "id": "Kata Kerja Bentuk Kamus + に堪えない（たえない）",
      "en": "Verb Dictionary form + に堪えない（たえない）",
      "my": "ကြိယာ အဘိဓာန်ပုံစံ + に堪えない（たえない）"
    },
    "nuanceExplanation": {
      "id": "Begitu menyedihkan atau memilukan sehingga seseorang secara emosional tidak sanggup untuk melihat atau mendengarnya.",
      "en": "So heartbreaking, tragic, or pitiful that one emotionally cannot bear to see or hear it.",
      "my": "အလွန်ဝမ်းနည်း ကြေကွဲဖွယ် ကောင်းလွန်းသဖြင့် စိတ်ခံစားမှုအရ ကြည့်ရှုရန် သို့မဟုတ် ကြားနာရန် မခံစားနိုင်လောက်အောင် ဖြစ်ရသည့်အခါ သုံးသည်။"
    },
    "trapNotes": {
      "id": "Pasangan paling umum di ujian: 「見るに堪えない」(tak sanggup melihat), 「聞くに堪えない」(tak sanggup mendengar).",
      "en": "Most standard exam collocations: 「見るに堪えない」(unbearable to see), 「聞くに堪えない」(unbearable to hear).",
      "my": "စာမေးပွဲ အသုံးများဆုံး ပုံစံများ- 「見るに堪えない」(ကြည့်ရက်စရာမရှိ)၊ 「聞くに堪えない」(နားထောင်ရက်စရာမရှိ)။"
    }
  },
  "bq_n1_4": {
    "title": {
      "id": "Pola 〜を禁じ得ない",
      "en": "Pattern 〜を禁じ得ない",
      "my": "〜を禁じ得ない ပုံစံ"
    },
    "translation": {
      "id": "Mendengar berita bahwa warga sipil tak berdosa terlibat dalam kekerasan yang tak masuk akal, saya tak kuasa menahan amarah yang begitu kuat.",
      "en": "Hearing the news that innocent civilians were caught up in unreasonable violence, I could not suppress a profound surge of anger.",
      "my": "အပြစ်မဲ့ ပြည်သူများသည် အဓိပ္ပာယ်မဲ့သော အကြမ်းဖက်မှုတွင် သားကောင်ဖြစ်ခဲ့ရသည့် သတင်းကို ကြားရသဖြင့် ပြင်းထန်သော ဒေါသကို မထိန်းချုပ်နိုင်ဘဲ ဖြစ်ခဲ့ရသည်။"
    },
    "setsuzoku": {
      "id": "Kata Benda Emosi + を禁じ得ない（きんじえない）",
      "en": "Noun of Emotion + を禁じ得ない",
      "my": "စိတ်ခံစားမှုပြနာမ် + を禁じ得ない"
    },
    "nuanceExplanation": {
      "id": "Pembicara tidak sanggup menekan atau menahan luapan emosi spontan yang timbul (kemarahan, simpati, keraguan).",
      "en": "The speaker cannot suppress a spontaneous, overwhelming emotional outburst (anger, grief, deep sympathy).",
      "my": "အတွင်းစိတ်မှ အလိုအလျောက် ပေါ်ထွက်လာသော ပြင်းထန်သည့် စိတ်ခံစားမှု (ဒေါသ၊ ဝမ်းနည်းမှု၊ စာနာမှု) ကို ထိန်းချုပ်၍ မရနိုင်သည့်အခါ သုံးသည်။"
    },
    "trapNotes": {
      "id": "Dipasangkan dengan kata emosi: 怒りを禁じ得ない, 涙を禁じ得ない, 同情を禁じ得ない.",
      "en": "Paired with emotion nouns: 怒りを禁じ得ない (cannot suppress anger), 涙を禁じ得ない (cannot hold back tears).",
      "my": "စိတ်ခံစားမှုပြ စကားလုံးများနှင့် တွဲသုံးသည်- 怒りを禁じ得ない (ဒေါသမထိန်းနိုင်)၊ 涙を禁じ得ない (မျက်ရည်မထိန်းနိုင်)။"
    }
  },
  "bq_n1_5": {
    "title": {
      "id": "Pola 〜に足る",
      "en": "Pattern 〜に足る",
      "my": "〜に足る ပုံစံ"
    },
    "translation": {
      "id": "Hasil risetnya selama bertahun-tahun sangat layak diganjar Hadiah Nobel, sebuah pencapaian yang patut dipercaya seutuhnya.",
      "en": "His many years of research achievements are fully worthy of the Nobel Prize, a work entirely deserving of trust.",
      "my": "သူ၏ နှစ်ပေါင်းများစွာ သုတေသန ရလဒ်များသည် နိုဘယ်လ်ဆု ချီးမြှင့်ခံရရန် လုံလောက်သော တန်ဖိုးရှိပြီး အပြည့်အဝ ယုံကြည်ကိုးစားထိုက်သော အောင်မြင်မှု ဖြစ်သည်။"
    },
    "setsuzoku": {
      "id": "Kata Kerja bentuk Kamus / Kata Benda + に足る（たる）",
      "en": "Verb Dictionary form / Noun + に足る（たる）",
      "my": "ကြိယာ အဘိဓာန်ပုံစံ / နာမ် + に足る（たる）"
    },
    "nuanceExplanation": {
      "id": "Memiliki nilai, kualitas, atau bukti yang cukup dan layak untuk mendapatkan perlakuan tersebut.",
      "en": "Possesses ample value, quality, or evidence to fully merit that action, evaluation, or trust.",
      "my": "ထိုကဲ့သို့ အကဲဖြတ်ခြင်း သို့မဟုတ် ဆက်ဆံခြင်းကို ခံယူထိုက်သော လုံလောက်သည့် တန်ဖိုး၊ အရည်အသွေး သို့မဟုတ် အထောက်အထား ရှိကြောင်း ဖော်ပြသည်။"
    },
    "trapNotes": {
      "id": "Biasa berpasangan dengan: 信頼に足る (layak dipercaya), 恐れるに足らない (tak perlu ditakuti).",
      "en": "Common pairings: 信頼に足る (worthy of trust), 恐れるに足らない (nothing to fear).",
      "my": "တွဲသုံးများသော စကားစုများ- 信頼に足る (ယုံကြည်ထိုက်သော)၊ 恐れるに足らない (ကြောက်စရာမလိုသော)။"
    }
  },
  "bq_n1_6": {
    "title": {
      "id": "Pola 〜を余儀なくされる",
      "en": "Pattern 〜を余儀なくされる",
      "my": "〜を余儀なくされる ပုံစံ"
    },
    "translation": {
      "id": "Akibat longsor tanah oleh badai taifun, para warga terpaksa harus menjalani kehidupan di pengungsian.",
      "en": "Due to the typhoon-induced landslide, residents were forced to live as evacuees in shelters.",
      "my": "တိုင်ဖွန်းမုန်တိုင်းကြောင့် မြေပြိုမှုဒဏ်ကြောင့် ဒေသခံပြည်သူများသည် ကယ်ဆယ်ရေးစခန်းများတွင် ခိုလှုံနေထိုင်ရသည့် ဘဝကို မလွှဲမရှောင်သာ ကြုံတွေ့ခဲ့ရသည်။"
    },
    "setsuzoku": {
      "id": "Kata Benda + を余儀なくされる（よぎなくされる）",
      "en": "Noun + を余儀なくされる",
      "my": "နာမ် + を余儀なくされる"
    },
    "nuanceExplanation": {
      "id": "Bentuk pasif: Subjek manusia dipaksa oleh bencana alam atau faktor luar untuk melakukan tindakan darurat yang tidak diinginkan.",
      "en": "Passive form: Human subjects are forced by disaster or external hardship into an unwanted emergency action.",
      "my": "ခံပြပုံစံ- ပြင်ပဘေးအန္တရာယ် သို့မဟုတ် မလွှဲသာသောအခြေအနေကြောင့် လူများက မလိုလားအပ်သော အရေးပေါ်လုပ်ဆောင်ချက်ကို မဖြစ်မနေ ပြုလုပ်ရသည့်အခါ သုံးသည်။"
    },
    "trapNotes": {
      "id": "HATI-HATI BENTUK PASIF VS AKTIF! 「〜を余儀なくされる」 (orang terpaksa) vs 「〜を余儀なくさせる」 (faktor bencana memaksa orang).",
      "en": "CAREFUL WITH PASSIVE VS ACTIVE! 「〜を余儀なくされる」 (people forced) vs 「〜を余儀なくさせる」 (cause forces people).",
      "my": "ခံပြနှင့် စေခိုင်းပြ မမှားပါစေနှင့်! 「〜を余儀なくされる」(လူများ မဖြစ်မနေကြုံရသည်) နှင့် 「〜を余儀なくさせる」(အကြောင်းရင်းက ဖိအားပေးသည်)။"
    }
  },
  "bq_n1_7": {
    "title": {
      "id": "Pola 〜ずにはおかない",
      "en": "Pattern 〜ずにはおかない",
      "my": "〜ずにはおかない ပုံစံ"
    },
    "translation": {
      "id": "Antusiasmenya yang luar biasa dan pidatonya yang berwibawa pasti dan tidak mungkin gagal menggetarkan hati para hadirin.",
      "en": "His overwhelming enthusiasm and powerful speech will certainly and inevitably move the hearts of the audience.",
      "my": "သူ၏ ထူးကဲသော စိတ်အားထက်သန်မှုနှင့် အရှိန်အဝါရှိသော မိန့်ခွန်းသည် ပရိသတ်၏ နှလုံးသားကို မလှုပ်ခတ်ဘဲ မနေပေ (မလွဲမသွေ လှုပ်ခတ်စေမည်)။"
    },
    "setsuzoku": {
      "id": "Kata Kerja bentuk-ない (tanpa ない) + ずにはおかない (する → せずにはおかない)",
      "en": "Verb nai-form (without ない) + ずにはおかない (Special: する → せずにはおかない)",
      "my": "ကြိယာ nai-ပုံစံ (nai မပါ) + ずにはおかない (အထူး- する → せずにはおかない)"
    },
    "nuanceExplanation": {
      "id": "Suatu karya, pesona, atau daya tarik yang pasti memberi dampak batin yang sangat kuat kepada pihak eksternal/orang lain.",
      "en": "A creative work or overwhelming force that will inevitably exert a powerful emotional impact upon external parties/others.",
      "my": "ထူးချွန်သောလက်ရာ သို့မဟုတ် စွမ်းအားတစ်ခုသည် အခြားသူများ၏ စိတ်နှလုံးကို မလွဲမသွေ ပြင်းထန်စွာ သက်ရောက်မှုပေးမည်ဖြစ်ကြောင်း ဖော်ပြသည်။"
    },
    "trapNotes": {
      "id": "BEDA! 「〜ずにはいられない」 = dorongan batin sendiri. 「〜ずにはおかない」 = efek kepastian memengaruhi orang lain.",
      "en": "DISTINCTION: 「〜ずにはいられない」 = internal spontaneous urge. 「〜ずにはおかない」 = inevitable external impact upon others.",
      "my": "ကွာခြားချက်- 「〜ずにはいられない」 သည် မိမိစိတ်တွန်းအားဖြစ်ပြီး 「〜ずにはおかない」 မှာ အခြားသူများအပေါ် မလွဲမသွေ သက်ရောက်စေခြင်းဖြစ်သည်။"
    }
  },
  "bq_n1_8": {
    "title": {
      "id": "Pola 〜たるもの",
      "en": "Pattern 〜たるもの",
      "my": "〜たるもの ပုံစံ"
    },
    "translation": {
      "id": "Sebagai seorang pemimpin yang memandu bangsa, semestinya membuang kepentingan pribadi dan berbakti demi rakyat.",
      "en": "One who is a leader guiding a nation ought to cast aside personal self-interest and devote themselves to the people.",
      "my": "နိုင်ငံကို ဦးဆောင်လမ်းပြသော ခေါင်းဆောင်တစ်ဦးအနေဖြင့် ကိုယ်ကျိုးစီးပွားကို စွန့်လွှတ်ကာ ပြည်သူအတွက် အနစ်နာခံ ဆောင်ရွက်သင့်သည်။"
    },
    "setsuzoku": {
      "id": "Kata Benda Status / Profesi + たるもの",
      "en": "Noun of Status / Profession + たるもの",
      "my": "ရာထူး / အဆင့်အတန်း / အသက်မွေးဝမ်းကျောင်းပြနာမ် + たるもの"
    },
    "nuanceExplanation": {
      "id": "Menuntut kewajiban moral, sikap luhur, dan integritas tinggi yang wajib dipenuhi oleh seseorang yang memangku jabatan atau profesi terhormat.",
      "en": "Demands the high moral duty, noble attitude, and integrity expected naturally of someone occupying an esteemed position.",
      "my": "ဂုဏ်သိက္ခာရှိသော ရာထူး သို့မဟုတ် အဆင့်အတန်းတစ်ခုတွင် ရှိနေသူတစ်ဦး မဖြစ်မနေ ပြည့်စုံရမည့် မြင့်မြတ်သော ကိုယ်ကျင့်တရားနှင့် တာဝန်ကို တောင်းဆိုရာတွင် သုံးသည်။"
    },
    "trapNotes": {
      "id": "Selalu diikuti kewajiban ideal: 「〜べきだ」 atau 「〜なければならない」.",
      "en": "Almost always followed by ideal obligations: 「〜べきだ」 or 「〜なければならない」.",
      "my": "နောက်တွင် စံပြုလိုက်နာရမည့် တာဝန်ပြ 「〜べきだ」 သို့မဟုတ် 「〜なければならない」 အမြဲလိုက်သည်။"
    }
  },
  "bq_n1_9": {
    "title": {
      "id": "Pola 〜まじき",
      "en": "Pattern 〜まじき",
      "my": "〜まじき ပုံစံ"
    },
    "translation": {
      "id": "Membocorkan data pribadi pasien ke pihak ketiga merupakan tindakan pengkhianatan berat yang sama sekali tidak pantas dilakukan oleh seorang dokter.",
      "en": "Leaking patients' personal data to third parties is a grave betrayal utterly impermissible for a medical doctor.",
      "my": "လူနာ၏ ကိုယ်ရေးအချက်အလက်များကို ပြင်ပတတိယလူထံ ပေါက်ကြားစေခြင်းသည် ဆရာဝန်တစ်ဦးအနေဖြင့် လုံးဝမပြုလုပ်သင့်သော ကြီးလေးသည့် သစ္စာဖောက်မှု ဖြစ်သည်။"
    },
    "setsuzoku": {
      "id": "Kata Kerja bentuk Kamus + まじき + Kata Benda (Khusus: あるまじき / するまじき)",
      "en": "Verb Dictionary form + まじき + Noun (Special: あるまじき / するまじき)",
      "my": "ကြိယာ အဘိဓာန်ပုံစံ + まじき + နာမ် (အထူး- あるまじき / するまじき)"
    },
    "nuanceExplanation": {
      "id": "Kecaman etika keras bahwa tindakan tersebut pantang dan haram hukumnya dilakukan oleh orang dengan profesi/kedudukan tersebut.",
      "en": "Severe ethical condemnation asserting that such an action is absolutely unacceptable and impermissible for that profession or status.",
      "my": "ထိုရာထူး သို့မဟုတ် အသက်မွေးဝမ်းကျောင်းတွင် ရှိသူတစ်ဦးအနေဖြင့် ကျင့်ဝတ်အရ လုံးဝမပြုလုပ်သင့်၊ ခွင့်မလွှတ်နိုင်သော လုပ်ရပ်ဖြစ်ကြောင်း ပြင်းထန်စွာ ပြစ်တင်ရှုတ်ချရာတွင် သုံးသည်။"
    },
    "trapNotes": {
      "id": "Sering dipakai dalam bentuk: 「プロにあるまじきミス」(kesalahan yang tabu bagi profesional).",
      "en": "Frequently used as: 「プロにあるまじきミス」(a blunder unacceptable for a professional).",
      "my": "အသုံးများသော ပုံစံ- 「プロにあるまじきミス」(ပရော်ဖက်ရှင်နယ်တစ်ဦး မလုပ်သင့်သော အမှား)။"
    }
  },
  "bq_n1_10": {
    "title": {
      "id": "Pola 〜といえども",
      "en": "Pattern 〜といえども",
      "my": "〜といえども ပုံစံ"
    },
    "translation": {
      "id": "Sekalipun seorang pengrajin kawakan yang berpengalaman, jika lengah bisa saja melakukan kekeliruan yang tak disangka-sangka.",
      "en": "Even granted that one is a seasoned master artisan, if they let their guard down they can make unexpected blunders.",
      "my": "အတွေ့အကြုံရင့်ကျက်သော ပညာရှင်ကြီးတစ်ဦး ဖြစ်လင့်ကစား ပေါ့ဆသွားပါက မမျှော်လင့်သော အမှားကို ကျူးလွန်မိတတ်သည်။"
    },
    "setsuzoku": {
      "id": "Kata Benda / Bentuk Biasa + といえども",
      "en": "Noun / Plain form + といえども",
      "my": "နာမ် / ရိုးရိုးပုံစံ + といえども"
    },
    "nuanceExplanation": {
      "id": "Konsesi formal: Bahkan bagi orang atau kondisi yang terhebat sekalipun, ada perkecualian di mana aturan umum tetap berlaku.",
      "en": "Formal concession: Even for the most exceptional person or condition, general limitations still apply.",
      "my": "တရားဝင် လျှော့ပေါ့ဖော်ပြချက်- အထူးချွန်ဆုံး ပုဂ္ဂိုလ် သို့မဟုတ် အခြေအနေဖြစ်စေကာမူ သာမန်ကန့်သတ်ချက်များ သက်ရောက်နိုင်သေးကြောင်း ဖော်ပြသည်။"
    },
    "trapNotes": {
      "id": "Pola kalimat sering diikuti: 「〜こともある」(bisa saja terjadi) atau 「〜わけではない」(bukan berarti kebal).",
      "en": "Often followed by: 「〜こともある」(can happen) or 「〜わけではない」(doesn't mean exempt).",
      "my": "ဝါကျအဆုံးတွင် 「〜こともある」(ဖြစ်နိုင်သည်) သို့မဟုတ် 「〜わけではない」(ကင်းလွတ်သည်မဟုတ်) လိုက်လေ့ရှိသည်။"
    }
  },
  "bq_star_n1_1": {
    "title": {
      "id": "★ Soal Bintang N1 (Pola 〜たるもの)",
      "en": "★ Star Question N1 (Pattern 〜たるもの)",
      "my": "★ N1 ကြယ်ပွင့် မေးခွန်း (〜たるもの ပုံစံ)"
    },
    "translation": {
      "id": "Sebagai penanggung jawab tertinggi suatu organisasi, krisis apa pun yang dihadapi wajib menjaga ketenangan kepala dingin.",
      "en": "As the supreme leader of an organization, whatever crisis one confronts, one must maintain calmness.",
      "my": "အဖွဲ့အစည်းတစ်ခု၏ အမြင့်ဆုံးတာဝန်ခံတစ်ဦး အနေဖြင့် မည်သို့သော အကျပ်အတည်းနှင့် ရင်ဆိုင်ရပါစေ တည်ငြိမ်အေးဆေးမှုကို ထိန်းသိမ်းရမည်။"
    },
    "setsuzoku": {
      "id": "[最高責任者] + [たるもの] -> [いかなる危機に] -> [直面しても] -> [冷静さを保た] + なければならない",
      "en": "[最高責任者] + [たるもの] -> [いかなる危機に] -> [直面しても] -> [冷静さを保た] + なければならない",
      "my": "[最高責任者] + [たるもの] -> [いかなる危機に] -> [直面しても] -> [冷静さを保た] + なければならない"
    },
    "nuanceExplanation": {
      "id": "Frasa 「たるもの」 langsung menempel pada jabatan 「最高責任者」. Klausa bersyarat 「直面しても」 menyambung ke keharusan 「保たなければならない」.",
      "en": "The phrase 「たるもの」 attaches directly to title 「最高責任者」. Concession clause 「直面しても」 joins with obligation 「保たなければならない」.",
      "my": "「たるもの」 သည် ရာထူး 「最高責任者」 နှင့် တိုက်ရိုက်ကပ်ပြီး 「直面しても」 က တာဝန်ဝတ္တရား 「保たなければならない」 သို့ ဆက်သွယ်သည်။"
    },
    "trapNotes": {
      "id": "Posisi bintang ★ jatuh pada slot ke-3 yaitu 「直面しても」.",
      "en": "The star ★ position is slot 3: 「直面しても」.",
      "my": "ကြယ်ပွင့် ★ နေရာသည် အမှတ်စဉ် ၃ ဖြစ်သော 「直面しても」 ဖြစ်သည်။"
    }
  },
  "bq_star_n1_2": {
    "title": {
      "id": "★ Soal Bintang N1 (Pola 〜を余儀なくされる)",
      "en": "★ Star Question N1 (Pattern 〜を余儀なくされる)",
      "my": "★ N1 ကြယ်ပွင့် မေးခွန်း (〜を余儀なくされる ပုံစံ)"
    },
    "translation": {
      "id": "Akibat lonjakan harga bahan baku global kali ini, banyak perusahaan terpaksa harus merevisi besar-besaran rencana bisnis mereka.",
      "en": "Due to the global raw material price surge this time, many companies are compelled to drastically revise their business plans.",
      "my": "ယခုတစ်ကြိမ် ကမ္ဘာလုံးဆိုင်ရာ ကုန်ကြမ်းစျေးနှုန်းများ မြင့်တက်မှုကြောင့် ကုမ္ပဏီအများအပြားသည် လုပ်ငန်းအစီအစဉ်များကို ကြီးမားစွာ ပြန်လည်ပြင်ဆင်ရန် မလွှဲမရှောင်သာ ဖြစ်ခဲ့ရသည်။"
    },
    "setsuzoku": {
      "id": "[多くの企業が] -> [事業計画の] -> [大幅な見直しを] -> [余儀なくされ] + ざるを得ない",
      "en": "[多くの企業が] -> [事業計画の] -> [大幅な見直しを] -> [余儀なくされ] + ざるを得ない",
      "my": "[多くの企業が] -> [事業計画の] -> [大幅な見直しを] -> [余儀なくされ] + ざるを得ない"
    },
    "nuanceExplanation": {
      "id": "Objek kalimat 「大幅な見直しを」 langsung berpasangan dengan bentuk pasif paksaan 「余儀なくされ」.",
      "en": "The object noun 「大幅な見直しを」 pairs directly with the passive forced action 「余儀なくされ」.",
      "my": "ကံပုဒ် 「大幅な見直しを」 သည် မလွှဲသာသော ခံပြကြိယာ 「余儀なくされ」 နှင့် တိုက်ရိုက်တွဲစပ်သည်။"
    },
    "trapNotes": {
      "id": "Posisi bintang ★ jatuh pada slot ke-3 yaitu 「大幅な見直しを」.",
      "en": "The star ★ position is slot 3: 「大幅な見直しを」.",
      "my": "ကြယ်ပွင့် ★ နေရာသည် အမှတ်စဉ် ၃ ဖြစ်သော 「大幅な見直しを」 ဖြစ်သည်။"
    }
  },
  "bq_n1_6_1": {
    "title": {
      "id": "Pola 〜と相まって",
      "en": "Pattern 〜と相まって",
      "my": "〜と相まって ပုံစံ"
    },
    "translation": {
      "id": "Bakat alami yang langka berpadu dengan latihan disiplin yang tekun setiap hari, menghasilkan pencapaian gemilang yang belum pernah dicapai siapa pun.",
      "en": "Rare inborn talent, combined with diligent daily training, brought about an unprecedented monumental achievement.",
      "my": "ရှားပါးသော မွေးရာပါ ပါရမီစွမ်းရည်သည် နေ့စဉ် စည်းကမ်းရှိသော လေ့ကျင့်မှုများနှင့် ပေါင်းစပ်မိကာ မည်သူမျှ မရောက်ရှိဖူးသော ကြီးကျယ်သည့် အောင်မြင်မှုကို ရရှိစေခဲ့သည်။"
    },
    "setsuzoku": {
      "id": "Kata Benda + と相まって / が相まって",
      "en": "Noun + と相まって / が相まって",
      "my": "နာမ် + と相まって / が相まって"
    },
    "nuanceExplanation": {
      "id": "Dua faktor positif atau negatif saling berinteraksi dan melipatgandakan efek sinerginya.",
      "en": "Two positive or negative factors interact together to produce a synergistic, multiplied impact.",
      "my": "အကြောင်းရင်းနှစ်ခု အတူတကွ ပေါင်းစပ်သွားပြီး အကျိုးသက်ရောက်မှုကို ဆတိုး တိုးပွားစေသည့်အခါ သုံးသည်။"
    },
    "trapNotes": {
      "id": "Sering dipakai dalam biografi tokoh sukses atau ulasan kuliner.",
      "en": "Frequently used in biographies of achievers or gourmet critiques.",
      "my": "ထူးချွန်သူများ၏ အတ္ထုပ္ပတ္တိများနှင့် အစားအစာ အရသာဝေဖန်ချက်များတွင် အသုံးများသည်။"
    }
  },
  "bq_n1_6_2": {
    "title": {
      "id": "Pola 〜べからず",
      "en": "Pattern 〜べからず",
      "my": "〜べからず ပုံစံ"
    },
    "translation": {
      "id": "[Pemberitahuan] Utamakan keselamatan. Selain pekerja dilarang keras melintas. Dilarang masuk tanpa izin.",
      "en": "[Notice] Safety First. Entry prohibited to all except workers. Do not enter without permission.",
      "my": "[သတိပေးချက်] ဘေးကင်းရေး ပထမ။ အလုပ်သမားများမှအပ ဝင်ရောက်ခြင်းကို တင်းကျပ်စွာ တားမြစ်သည်။ ခွင့်ပြုချက်မရှိဘဲ လုံးဝမဝင်ရ။"
    },
    "setsuzoku": {
      "id": "Kata Kerja bentuk Kamus + べからず (Khusus する: すべからず / するべからず)",
      "en": "Verb Dictionary form + べからず (Special: すべからず / するべからず)",
      "my": "ကြိယာ အဘိဓာန်ပုံစံ + べからず (အထူး- すべからず / するべからず)"
    },
    "nuanceExplanation": {
      "id": "Bahasa pengumuman kuno/resmi yang menyatakan larangan keras mutlak kepada publik (Dilarang keras!).",
      "en": "Archaic and official sign language stating an absolute, non-negotiable prohibition to the public.",
      "my": "အများပြည်သူသို့ တရားဝင် ကြော်ငြာသင်ပုန်းများတွင် လုံးဝမပြုလုပ်ရန် ပြတ်သားစွာ တားမြစ်ရာတွင် သုံးသော ရှေးသုံး စာပေစကား ဖြစ်သည်။"
    },
    "trapNotes": {
      "id": "Hanya muncul pada papan larangan resmi atau aturan hukum publik.",
      "en": "Only appears on formal public prohibition notices, signboards, or statutory codes.",
      "my": "တရားဝင် တားမြစ်ချက် သင်ပုန်းများနှင့် ဥပဒေစည်းမျဉ်းများတွင်သာ အသုံးပြုသည်။"
    }
  },
  "bq_n1_6_3": {
    "title": {
      "id": "Pola 〜まじき",
      "en": "Pattern 〜まじき",
      "my": "〜まじき ပုံစံ"
    },
    "translation": {
      "id": "Membocorkan informasi pribadi pasien ke pihak luar secara sengaja adalah perbuatan yang sama sekali tidak bermoral bagi seorang dokter.",
      "en": "Intentionally leaking patients' personal information to external parties is an utterly impermissible conduct for a medical professional.",
      "my": "လူနာ၏ ကိုယ်ရေးကိုယ်တာ အချက်အလက်များကို ပြင်ပသို့ တမင်တကာ ပေါက်ကြားစေခြင်းသည် ဆရာဝန်တစ်ဦးအနေဖြင့် လုံးဝမပြုလုပ်သင့်သော ကျင့်ဝတ်မဲ့ လုပ်ရပ်ဖြစ်သည်။"
    },
    "setsuzoku": {
      "id": "Kata Kerja bentuk Kamus + まじき + Kata Benda",
      "en": "Verb Dictionary form + まじき + Noun",
      "my": "ကြိယာ အဘိဓာန်ပုံစံ + まじき + နာမ်"
    },
    "nuanceExplanation": {
      "id": "Kecaman moral tajam bahwa seseorang telah melanggar etika profesinya secara fatal.",
      "en": "Sharp moral condemnation that an individual has fatally breached professional or social ethics.",
      "my": "လူတစ်ဦးသည် မိမိ၏ အသက်မွေးဝမ်းကျောင်း ကျင့်ဝတ်ကို ဆိုးရွားစွာ ချိုးဖောက်မိကြောင်း ပြင်းထန်စွာ ပြစ်တင်ရှုတ်ချရာတွင် သုံးသည်။"
    },
    "trapNotes": {
      "id": "Kata benda di belakangnya biasanya berupa: 行為, 態度, 発言.",
      "en": "The subsequent noun is usually: 行為 (conduct), 態度 (attitude), 発言 (remark).",
      "my": "နောက်တွင် အများဆုံးလိုက်သော နာမ်များ- 行為 (လုပ်ရပ်)၊ 態度 (သဘောထား)၊ 発言 (ပြောဆိုချက်)။"
    }
  },
  "bq_n1_6_4": {
    "title": {
      "id": "Pola 〜に値する",
      "en": "Pattern 〜に値する",
      "my": "〜に値する ပုံစံ"
    },
    "translation": {
      "id": "Mendengar berita warga sipil tak berdosa menjadi korban perang, saya tidak kuasa membendung rasa amarah dan duka mendalam.",
      "en": "Hearing the news that innocent civilians fell victim to war, I cannot suppress feelings of profound fury and sorrow.",
      "my": "အပြစ်မဲ့ သာမန်ပြည်သူများသည် စစ်ပွဲ၏ သားကောင်ဖြစ်ခဲ့ရသည့် သတင်းကို ကြားရသဖြင့် နက်ရှိုင်းသော ဒေါသနှင့် ဝမ်းနည်းကြေကွဲမှုကို မထိန်းချုပ်နိုင်ခဲ့ပေ။"
    },
    "setsuzoku": {
      "id": "Kata Benda Emosi + を禁じ得ない",
      "en": "Noun of Emotion + を禁じ得ない",
      "my": "စိတ်ခံစားမှုပြနာမ် + を禁じ得ない"
    },
    "nuanceExplanation": {
      "id": "Tidak mampu menahan luapan emosi dukacita dan amarah yang meledak dari lubuk hati.",
      "en": "Inability to suppress explosive feelings of grief and outrage surging from deep inside.",
      "my": "ရင်တွင်းမှ ပေါက်ကွဲထွက်လာသော ဝမ်းနည်းကြေကွဲမှုနှင့် ဒေါသစိတ်ကို မထိန်းချုပ်နိုင်ခြင်းကို ဖော်ပြသည်။"
    },
    "trapNotes": {
      "id": "Sering muncul pada topik tragedi kemanusiaan atau berita dunia.",
      "en": "Often appears in topics concerning humanitarian tragedies or international news.",
      "my": "လူသားချင်းစာနာထောက်ထားမှုဆိုင်ရာ ကြေကွဲဖွယ်ရာများနှင့် နိုင်ငံတကာသတင်းများတွင် တွေ့ရလေ့ရှိသည်။"
    }
  },
  "bq_n1_7_1": {
    "title": {
      "id": "Pola 〜ならでは（の）",
      "en": "Pattern 〜ならでは（の）",
      "my": "〜ならでは（の） ပုံစံ"
    },
    "translation": {
      "id": "Hidangan yang piawai menangkap perubahan halus empat musim adalah pesona khas yang hanya ada pada kebudayaan tradisional Jepang.",
      "en": "Cuisine that skillfully captures the delicate transitions of the four seasons is a unique charm found only in traditional Japanese culture.",
      "my": "ရာသီလေးခု၏ သိမ်မွေ့သော အပြောင်းအလဲများကို ကျွမ်းကျင်စွာ ထင်ဟပ်စေသော ဟင်းလျာများသည် ဂျပန်ရိုးရာ ယဉ်ကျေးမှုတွင်သာ ရှိသည့် ထူးခြားသော ဆွဲဆောင်မှု ဖြစ်သည်။"
    },
    "setsuzoku": {
      "id": "Kata Benda + ならでは（の + Kata Benda）",
      "en": "Noun + ならでは（の + Noun）",
      "my": "နာမ် + ならでは（の + နာမ်）"
    },
    "nuanceExplanation": {
      "id": "Memuji kualitas unggul atau keunikan istimewa yang hanya bisa terwujud oleh subjek tersebut dan mustahil ada di tempat lain.",
      "en": "Praises an outstanding unique quality that can only be realized by that particular subject and nowhere else.",
      "my": "ထိုအရာတွင်သာ သီးသန့်ရှိပြီး အခြားမည်သည့်နေရာတွင်မျှ မတွေ့နိုင်သော ထူးကဲသည့် အရည်အသွေး သို့မဟုတ် ဆွဲဆောင်မှုကို ချီးကျူးရာတွင် သုံးသည်။"
    },
    "trapNotes": {
      "id": "Selalu bermakna positif, memuji orisinalitas tinggi.",
      "en": "Always holds a positive connotation, praising exceptional originality.",
      "my": "အထူးကောင်းမွန်သော မူရင်းအရည်အသွေးကို ချီးကျူးသည့် ကောင်းသော သဘောတွင်သာ အမြဲသုံးသည်။"
    }
  },
  "bq_n1_7_2": {
    "title": {
      "id": "Pola 〜なくしては",
      "en": "Pattern 〜なくしては",
      "my": "〜なくしては ပုံစံ"
    },
    "translation": {
      "id": "Tanpa adanya pemahaman dan kerja sama tanpa henti dari setiap warga negara, mengatasi kesulitan finansial ini adalah hal yang mustahil.",
      "en": "Without the tireless understanding and cooperation of every citizen, overcoming this fiscal crisis is impossible.",
      "my": "နိုင်ငံသားတိုင်း၏ မဆုတ်မနစ်သော နားလည်မှုနှင့် ပူးပေါင်းဆောင်ရွက်မှု မရှိဘဲ ဤဘဏ္ဍာရေး အကျပ်အတည်းကို ကျော်လွှားနိုင်ရန် လုံးဝမဖြစ်နိုင်ပေ။"
    },
    "setsuzoku": {
      "id": "Kata Benda + なくしては（…ない）",
      "en": "Noun + なくしては（…ない）",
      "my": "နာမ် + なくしては（…ない）"
    },
    "nuanceExplanation": {
      "id": "Menyatakan bahwa faktor tersebut adalah syarat mutlak tanpa alternatif; jika tidak ada, hasil yang diharapkan mustahil tercapai.",
      "en": "Asserts that this element is an indispensable absolute condition; without it, the desired result cannot possibly be achieved.",
      "my": "ထိုအရာသည် မရှိမဖြစ် လိုအပ်သော အခြေအနေဖြစ်ပြီး ၎င်းမပါဘဲ လိုလားသော ရလဒ်ကို ရရှိရန် လုံးဝမဖြစ်နိုင်ကြောင်း ဖော်ပြသည်။"
    },
    "trapNotes": {
      "id": "Klausa kedua selalu negatif mutlak: あり得ない, 不可能だ, できない.",
      "en": "The second clause is always strictly negative: あり得ない (impossible), 不可能だ, できない.",
      "my": "ဒုတိယဝါကျတွင် အငြင်းသဘောဆောင်သော あり得ない (လုံးဝမဖြစ်နိုင်)၊ 不可能だ စသည်တို့ အမြဲလိုက်ရသည်။"
    }
  },
  "bq_n1_7_3": {
    "title": {
      "id": "Pola 〜に至る",
      "en": "Pattern 〜に至る",
      "my": "〜に至る ပုံစံ"
    },
    "translation": {
      "id": "Bermula dari kesalahpahaman sepele, masalah berkembang hingga akhirnya berujung pada sengketa di pengadilan.",
      "en": "Starting from a trivial misunderstanding, the matter escalated all the way to legal disputes in court.",
      "my": "အစပထမတွင် အသေးအမွှား နားလည်မှုလွဲမှားခြင်းမှ စတင်ခဲ့သော်လည်း နောက်ဆုံးတွင် တရားရုံး၌ အငြင်းပွားရသည့် အခြေအနေအထိ ရောက်ရှိသွားခဲ့သည်။"
    },
    "setsuzoku": {
      "id": "Kata Kerja bentuk Kamus / Kata Benda + に至る（にいたる）",
      "en": "Verb Dictionary form / Noun + に至る",
      "my": "ကြိယာ အဘိဓာန်ပုံစံ / နာမ် + に至る"
    },
    "nuanceExplanation": {
      "id": "Menunjukkan bahwa suatu proses atau eskalasi telah berkembang hingga mencapai titik akhir atau tahap kritis.",
      "en": "Shows that a process or dispute has escalated all the way to a serious final stage or critical turning point.",
      "my": "အငြင်းပွားမှု သို့မဟုတ် လုပ်ငန်းစဉ်တစ်ခုသည် ကြီးထွားလာကာ နောက်ဆုံး စိုးရိမ်ရသော အဆင့်အထိ ရောက်ရှိသွားခြင်းကို ဖော်ပြသည်။"
    },
    "trapNotes": {
      "id": "Sering dipakai dalam bentuk: 〜に至っては (bila sudah sampai tahap ekstrim tersebut).",
      "en": "Often utilized as: 〜に至っては (when things have reached such an extreme stage).",
      "my": "အသုံးများသော ပုံစံ- 〜に至っては (ထိုကဲ့သို့ အစွန်းရောက်အဆင့်သို့ ရောက်လာသည့်အခါ)။"
    }
  },
  "bq_n1_7_4": {
    "title": {
      "id": "Pola 〜極まる",
      "en": "Pattern 〜極まる",
      "my": "〜極まる ပုံစံ"
    },
    "translation": {
      "id": "Memberikan penjelasan dusta secara terang-terangan di hadapan khalayak ramai adalah sikap yang teramat sangat tidak tulus.",
      "en": "Giving a blatant false explanation in front of a large audience is an attitude of the utmost insincerity.",
      "my": "ပရိသတ်အများအပြားရှေ့တွင် မုသားရှင်းလင်းချက်ကို ပြောင်ပြောင်တင်းတင်း ပေးခြင်းသည် အလွန်အမင်း ရိုးသားမှုကင်းမဲ့သော သဘောထားဖြစ်သည်။"
    },
    "setsuzoku": {
      "id": "Kata Sifat-na (tanpa な) + 極まる（きわまる）",
      "en": "な-Adj (without な) + 極まる",
      "my": "な-နာမဝိသေသန (な မပါ) + 極まる"
    },
    "nuanceExplanation": {
      "id": "Bentuk sinonim dari 「〜極まりない」, menyatakan puncak kondisi yang tak tertandingi (biasanya negatif/kritik).",
      "en": "Synonymous with 「〜極まりない」, expressing an unsurpassable peak condition, typically for negative criticism.",
      "my": "「〜極まりない」 နှင့် အဓိပ္ပာယ်တူပြီး အဆိုးဆုံး သို့မဟုတ် အမြင့်ဆုံး အခြေအနေကို ဝေဖန်ဖော်ပြရာတွင် သုံးသည်။"
    },
    "trapNotes": {
      "id": "Nuansa bahasa tulis sangat kaku dan formal.",
      "en": "Extremely rigid and formal literary nuance.",
      "my": "အလွန်လေးနက် တင်းကျပ်သော စာပေအသုံးအနှုန်း ဖြစ်သည်။"
    }
  },
  "bq_n1_8_1": {
    "title": {
      "id": "Pola 〜であれ…であれ",
      "en": "Pattern 〜であれ…であれ",
      "my": "〜であれ…であれ ပုံစံ"
    },
    "translation": {
      "id": "Apa pun alasannya, baik kondisi ekonomi maupun lingkungan keluarga, tindakan melanggar hukum sama sekali tidak dapat ditoleransi.",
      "en": "Whatever the reason, be it financial circumstances or family background, breaking the law cannot be condoned under any circumstances.",
      "my": "အကြောင်းပြချက်သည် စီးပွားရေးအခြေအနေဖြစ်စေ၊ မိသားစုပတ်ဝန်းကျင်ဖြစ်စေ မည်သို့ပင်ဖြစ်ပါစေ ဥပဒေချိုးဖောက်သောလုပ်ရပ်ကို လုံးဝခွင့်မလွှတ်နိုင်ပေ။"
    },
    "setsuzoku": {
      "id": "Kata Benda A + であれ + Kata Benda B + であれ",
      "en": "Noun A + であれ + Noun B + であれ",
      "my": "နာမ် A + であれ + နာမ် B + であれ"
    },
    "nuanceExplanation": {
      "id": "Menyatakan konsesi mutlak bahwa baik contoh A maupun contoh B, kesimpulan akhirnya sama sekali tidak berubah.",
      "en": "Presents an absolute concession that whether it is instance A or instance B, the ultimate standard remains completely unchanged.",
      "my": "A ဖြစ်စေ၊ B ဖြစ်စေ မည်သည့်အရာပင်ဖြစ်ပါစေ နောက်ဆုံးရလဒ် သို့မဟုတ် စံနှုန်းသည် လုံးဝမပြောင်းလဲကြောင်း ဖော်ပြသည်။"
    },
    "trapNotes": {
      "id": "Klausa akhir berupa vonis tegas atau prinsip moral tak tergoyahkan.",
      "en": "The final clause is a resolute verdict or unwavering moral principle.",
      "my": "နောက်ဝါကျသည် ပြတ်သားသော ဆုံးဖြတ်ချက် သို့မဟုတ် မယိမ်းယိုင်သော ဥပဒေကျင့်ဝတ် ဖြစ်သည်။"
    }
  },
  "bq_n1_8_2": {
    "title": {
      "id": "Pola 〜といえども",
      "en": "Pattern 〜といえども",
      "my": "〜といえども ပုံစံ"
    },
    "translation": {
      "id": "Betapapun dia seorang veteran yang berpengalaman dalam ratusan pertempuran, jika lengah tetap ada bahaya melakukan kesalahan fatal.",
      "en": "However battle-hardened a veteran one may be, if they become careless, there remains the risk of making fatal mistakes.",
      "my": "တိုက်ပွဲပေါင်းများစွာ ဖြတ်သန်းခဲ့သော ဝါရင့်ကျွမ်းကျင်သူတစ်ဦး ဖြစ်လင့်ကစား ပေါ့ဆသွားပါက ကြီးလေးသောအမှား ကျူးလွန်မိနိုင်သည့် အန္တရာယ်ရှိသည်။"
    },
    "setsuzoku": {
      "id": "Kata Benda / Bentuk Biasa + といえども",
      "en": "Noun / Plain form + といえども",
      "my": "နာမ် / ရိုးရိုးပုံစံ + といえども"
    },
    "nuanceExplanation": {
      "id": "Meskipun berada dalam posisi atau keahlian tertinggi, tidak ada jaminan kebal dari hukum alam atau kesalahan manusiawi.",
      "en": "Even with the highest status or expertise, there is no absolute immunity from natural limitations or human errors.",
      "my": "အမြင့်ဆုံး အတွေ့အကြုံရှိသူ ဖြစ်စေကာမူ သာမန်လူသားတို့၏ အမှားများမှ ကင်းလွတ်ခွင့်မရှိကြောင်း ဖော်ပြသည်။"
    },
    "trapNotes": {
      "id": "Sering berpasangan dengan kata penguat: いかに, たとえ.",
      "en": "Frequently reinforced with adverbs: いかに (however much), たとえ (even if).",
      "my": "အလေးပေး စကားလုံးများဖြစ်သော いかに သို့မဟုတ် たとえ တို့နှင့် တွဲသုံးလေ့ရှိသည်။"
    }
  },
  "bq_n1_8_3": {
    "title": {
      "id": "Pola 〜ばこそ",
      "en": "Pattern 〜ばこそ",
      "my": "〜ばこそ ပုံစံ"
    },
    "translation": {
      "id": "Justru karena saya sungguh-sungguh mengkhawatirkan masa depanmu, saya berani memberikan nasihat yang tegas ini.",
      "en": "It is precisely because I genuinely care about your future that I dare to offer this stern advice.",
      "my": "သင့်အနာဂတ်အတွက် အမှန်တကယ် စိုးရိမ်ပူပန်သောကြောင့်သာလျှင် ယခုကဲ့သို့ တင်းကျပ်သော သတိပေးဆုံးမစကားကို ပြောရဲခြင်း ဖြစ်သည်။"
    },
    "setsuzoku": {
      "id": "Bentuk Pengandaian-ば + こそ",
      "en": "Conditional Ba-form + こそ",
      "my": "အခြေအနေပြ Ba-ပုံစံ + こそ"
    },
    "nuanceExplanation": {
      "id": "Menegaskan bahwa justru alasan itulah satu-satunya motif sejati mengapa tindakan yang tampak keras/sulit tersebut dilakukan.",
      "en": "Emphatically asserts that this specific reason alone is the true positive motive behind an action that might seem harsh.",
      "my": "တင်းကျပ်ခက်ခဲပုံရသော လုပ်ရပ်တစ်ခု၏ နောက်ကွယ်ရှိ စစ်မှန်သော မေတ္တာနှင့် အကြောင်းရင်းကို အလေးပေးဖော်ပြရာတွင် သုံးသည်။"
    },
    "trapNotes": {
      "id": "Sering dipasangkan dengan kata penjelas seperti: あえて (sengaja memberanikan diri).",
      "en": "Often paired with adverbs like: あえて (daringly / deliberately choosing to).",
      "my": "あえて (တမင်သတိပြုကာ ရဲဝံ့စွာ) ကဲ့သို့သော စကားလုံးများနှင့် တွဲသုံးလေ့ရှိသည်။"
    }
  },
  "bq_n1_8_4": {
    "title": {
      "id": "Pola 〜んがため（に）",
      "en": "Pattern 〜んがため（に）",
      "my": "〜んがため（に） ပုံစံ"
    },
    "translation": {
      "id": "Demi mempertahankan dan mewariskan keyakinannya kepada generasi mendatang, ia berani menghadapi segala rintangan berat.",
      "en": "In order to carry through his convictions to future generations, he confronted every formidable hardship.",
      "my": "မိမိ၏ ယုံကြည်ချက်ကို နောင်လာနောက်သားများထံ အဆုံးတိုင် လက်ဆင့်ကမ်းနိုင်ရန်အတွက် သူသည် ကြီးမားသော အခက်အခဲအားလုံးကို ရင်ဆိုင်ခဲ့သည်။"
    },
    "setsuzoku": {
      "id": "Kata Kerja bentuk-Nai (tanpa nai) + んがため（に） (Khusus する: せんがため)",
      "en": "Verb Nai-form (without nai) + んがため（に） (Special: する → せんがため)",
      "my": "ကြိယာ Nai-ပုံစံ (nai မပါ) + んがため（に） (အထူး- する → せんがため)"
    },
    "nuanceExplanation": {
      "id": "Tujuan luhur, mulia, dan berbobot besar yang dikejar dengan tekad membara dan pengorbanan jiwa raga.",
      "en": "A monumental, noble purpose pursued with burning determination and great personal sacrifice.",
      "my": "ကြီးမြတ်သော ရည်မှန်းချက် သို့မဟုတ် မွန်မြတ်သော ပန်းတိုင်တစ်ခုကို အသက်စွန့် အားထုတ်ကြိုးပမ်းရာတွင် သုံးသော အဆင့်မြင့် စာပေစကား ဖြစ်သည်။"
    },
    "trapNotes": {
      "id": "Tidak dipakai untuk tujuan sepele sehari-hari (seperti pergi belanja).",
      "en": "Never used for mundane daily goals (such as grocery shopping).",
      "my": "စျေးဝယ်ထွက်ခြင်းကဲ့သို့ နေ့စဉ် သာမန်ကိစ္စများအတွက် အသုံးမပြုပါ။"
    }
  },
  "bq_n3_1": {
    "title": {
      "id": "Pola 〜わけにはいかない",
      "en": "Pattern 〜わけにはいかない",
      "my": "〜わけにはいかない ပုံစံ"
    },
    "translation": {
      "id": "Karena besok ada wawancara akhir yang sangat penting, meski sedang demam saya tidak bisa (secara tanggung jawab) bolos.",
      "en": "Because tomorrow is a crucial final interview, even with a fever I simply cannot afford to take the day off.",
      "my": "မနက်ဖြန်တွင် အလွန်အရေးကြီးသော နောက်ဆုံးအဆင့် အင်တာဗျူးရှိသဖြင့် ဖျားနေသော်လည်း ခွင့်ယူ၍ မဖြစ်နိုင်ပေ။"
    },
    "setsuzoku": {
      "id": "Kata Kerja Bentuk Kamus + わけにはいかない",
      "en": "Verb Dictionary form + わけにはいかない",
      "my": "ကြိယာ အဘိဓာန်ပုံစံ + わけにはいかない"
    },
    "nuanceExplanation": {
      "id": "Menyatakan bahwa secara norma sosial, etika, atau tanggung jawab, seseorang tidak boleh/tidak bisa melakukan hal itu.",
      "en": "Indicates that based on social norms, ethics, or personal duty, one morally or practically cannot do so.",
      "my": "လူမှုကျင့်ဝတ်၊ စည်းကမ်း သို့မဟုတ် တာဝန်သိစိတ်အရ ထိုသို့ မပြုလုပ်နိုင်ကြောင်း ဖော်ပြသည်။"
    },
    "trapNotes": {
      "id": "「〜わけがない」artinya mustahil/tidak masuk akal (salah konteks situasi ini).",
      "en": "「〜わけがない」 means impossible or logically absurd (incorrect for this situational context).",
      "my": "「〜わけがない」 မှာ လုံးဝမဖြစ်နိုင်ဟု အဓိပ္ပာယ်ရသဖြင့် ဤအခြေအနေနှင့် မကိုက်ညီပါ။"
    }
  },
  "bq_n3_2": {
    "title": {
      "id": "Pola 〜わけがない",
      "en": "Pattern 〜わけがない",
      "my": "〜わけがない ပုံစံ"
    },
    "translation": {
      "id": "Tidak mungkin Yamada-san yang rajin dan jujur itu mencuri uang perusahaan.",
      "en": "There is no way that the diligent and honest Yamada-san would steal company funds.",
      "my": "ထိုမျှ ကြိုးစားရိုးသားသော တာနာကာစံသည် ကုမ္ပဏီငွေကို ခိုးယူရန် လုံးဝမဖြစ်နိုင်ပေ။"
    },
    "setsuzoku": {
      "id": "Bentuk Biasa (Futsuukei) + わけがない",
      "en": "Plain form + わけがない",
      "my": "ရိုးရိုးပုံစံ (普通形) + わけがない"
    },
    "nuanceExplanation": {
      "id": "Keyakinan mutlak dari pembicara bahwa sesuatu secara logika sama sekali mustahil terjadi.",
      "en": "The speaker's absolute conviction that something is logically completely impossible.",
      "my": "ယုတ္တိဗေဒအရ ထိုအရာသည် လုံးဝဖြစ်ပေါ်ရန် မဖြစ်နိုင်ကြောင်း ပြောဆိုသူ၏ ခိုင်မာသော ယုံကြည်ချက်ကို ဖော်ပြသည်။"
    },
    "trapNotes": {
      "id": "Bisa diganti dengan 「はずがない」 dalam percakapan sehari-hari.",
      "en": "Can be interchanged with 「はずがない」 in casual everyday conversation.",
      "my": "နေ့စဉ်စကားပြောတွင် 「はずがない」 ဖြင့် အစားထိုး အသုံးပြုနိုင်သည်။"
    }
  },
  "bq_n3_3": {
    "title": {
      "id": "Pola 〜うちに",
      "en": "Pattern 〜うちに",
      "my": "〜うちに ပုံစံ"
    },
    "translation": {
      "id": "Mumpung supnya masih hangat, silakan dinikmati.",
      "en": "While the soup is still nice and warm, please enjoy it.",
      "my": "ဟင်းချို ပူပူနွေးနွေး ရှိနေဆဲ အခိုက်တွင် ကျေးဇူးပြု၍ သုံးဆောင်ပါ။"
    },
    "setsuzoku": {
      "id": "Kata Sifat-i / Kata Kerja Kamus / Kata Kerja Bentuk Nai + うちに",
      "en": "い-Adj / Dictionary form / Nai-form + うちに",
      "my": "い-နာမဝိသေသန / အဘိဓာန်ပုံစံ / Nai-ပုံစံ + うちに"
    },
    "nuanceExplanation": {
      "id": "Melakukan sesuatu selagi kondisi tertentu masih berlangsung sebelum keadaannya berubah.",
      "en": "Doing something while a specific optimal condition is still ongoing before it changes.",
      "my": "အခြေအနေတစ်ခု မပြောင်းလဲမီ ထိုအခြေအနေ ကောင်းမွန်နေဆဲ အခိုက်အတန့်တွင် တစ်စုံတစ်ခုကို လုပ်ဆောင်ရာ၌ သုံးသည်။"
    },
    "trapNotes": {
      "id": "Pilihan 1 「温かい」 paling alami karena sup dinikmati saat hangat.",
      "en": "Option 1 「温かい」 (warm) is most natural since soup is best savored when warm.",
      "my": "ဟင်းချိုကို နွေးနွေးထွေးထွေး သောက်သုံးရသောကြောင့် ရွေးချယ်မှု ၁ 「温かい」 မှာ အသင့်တော်ဆုံး ဖြစ်သည်။"
    }
  },
  "bq_n3_star_1": {
    "title": {
      "id": "★ Soal Bintang N3 (Pola 〜に対して / 〜べきだ)",
      "en": "★ Star Question N3 (Pattern 〜に対して / 〜べきだ)",
      "my": "★ N3 ကြယ်ပွင့် မေးခွန်း (〜に対して / 〜べきだ ပုံစံ)"
    },
    "translation": {
      "id": "Terhadap masalah lingkungan, setiap individu seyogianya menghadapinya secara bersungguh-sungguh.",
      "en": "Toward environmental issues, every single individual ought to confront them with genuine seriousness.",
      "my": "သဘာဝပတ်ဝန်းကျင် ပြဿနာများနှင့် ပတ်သက်၍ လူတစ်ဦးချင်းစီသည် အလေးအနက်ထား ရင်ဆိုင်ဖြေရှင်းသင့်သည်။"
    },
    "setsuzoku": {
      "id": "[環境問題] + [に対して] -> [一人ひとりが] -> [真剣に] -> [向き合う] + べきである",
      "en": "[環境問題] + [に対して] -> [一人ひとりが] -> [真剣に] -> [向き合う] + べきである",
      "my": "[環境問題] + [に対して] -> [一人ひとりが] -> [真剣に] -> [向き合う] + べきである"
    },
    "nuanceExplanation": {
      "id": "Frasa 「〜に対して」 berpasangan dengan kata benda masalah. Adverbia 「真剣に」 menerangkan kata kerja 「向き合う」.",
      "en": "The phrase 「〜に対して」 pairs with the issue noun. The adverb 「真剣に」 modifies the verb 「向き合う」.",
      "my": "「〜に対して」 သည် ပြဿနာပြနာမ်နှင့် တွဲစပ်ပြီး ကြိယာဝိသေသန 「真剣に」 က ကြိယာ 「向き合う」 ကို အထူးပြုသည်။"
    },
    "trapNotes": {
      "id": "Posisi bintang ★ ada di slot ke-3 yaitu 「真剣に」.",
      "en": "The star ★ position is in slot 3: 「真剣に」.",
      "my": "ကြယ်ပွင့် ★ နေရာသည် အမှတ်စဉ် ၃ ဖြစ်သော 「真剣に」 ဖြစ်သည်။"
    }
  },
  "bq_n4_1": {
    "title": {
      "id": "Pola 〜たら",
      "en": "Pattern 〜たら",
      "my": "〜たら ပုံစံ"
    },
    "translation": {
      "id": "Kalau sudah sampai di stasiun, tolong telepon ya. Saya akan menjemputmu.",
      "en": "When you arrive at the station, please give me a call. I will come pick you up.",
      "my": "ဘူတာရုံသို့ ရောက်သည့်အခါ ကျေးဇူးပြု၍ ဖုန်းဆက်ပါ။ လာကြိုပါမည်။"
    },
    "setsuzoku": {
      "id": "Kata Kerja bentuk-Ta + ら (着いた -> 着いたら)",
      "en": "Verb Ta-form + ら (着いた -> 着いたら)",
      "my": "ကြိယာ Ta-ပုံစံ + ら (着いた -> 着いたら)"
    },
    "nuanceExplanation": {
      "id": "Pola pengandaian urutan waktu yang pasti terjadi atau aksi setelah kondisi terpenuhi.",
      "en": "Conditional pattern indicating sequential action that occurs once a prerequisite condition is realized.",
      "my": "သတ်မှတ်ထားသော အခြေအနေ ပြည့်စုံသွားပြီးနောက် ဆက်လက်လုပ်ဆောင်မည့် အချိန်အစီအစဉ်ကို ဖော်ပြသည်။"
    },
    "trapNotes": {
      "id": "Bila kalimat belakang berupa permohonan (〜てください), bentuk 「〜たら」 adalah yang paling tepat.",
      "en": "When the following clause is a request (〜てください), the form 「〜たら」 is most natural.",
      "my": "နောက်ဝါကျတွင် မေတ္တာရပ်ခံချက် (〜てください) ပါရှိပါက 「〜たら」 ပုံစံသည် အသင့်တော်ဆုံး ဖြစ်သည်။"
    }
  },
  "bq_n4_2": {
    "title": {
      "id": "Pola 〜すぎる",
      "en": "Pattern 〜すぎる",
      "my": "〜すぎる ပုံစံ"
    },
    "translation": {
      "id": "Tadi malam saya terlalu banyak minum alkohol, sehingga pagi ini kepala saya pusing.",
      "en": "Last night I drank too much alcohol, so my head aches this morning.",
      "my": "မနေ့ညက အရက် အလွန်အကျွံ သောက်မိခဲ့သဖြင့် ယနေ့နံနက်တွင် ခေါင်းကိုက်နေသည်။"
    },
    "setsuzoku": {
      "id": "Kata Kerja bentuk-Masu (tanpa masu) + すぎる",
      "en": "Verb Masu-stem (without masu) + すぎる",
      "my": "ကြိယာ Masu-stem (masu မပါ) + すぎる"
    },
    "nuanceExplanation": {
      "id": "Menyatakan tindakan melampaui batas wajar sehingga menimbulkan akibat negatif.",
      "en": "Expresses that an action exceeded reasonable limits, leading to an unfavorable outcome.",
      "my": "လုပ်ဆောင်ချက်သည် သာမန်အတိုင်းအတာထက် ကျော်လွန်သွားကာ ဆိုးကျိုးဖြစ်ပေါ်စေသည့်အခါ သုံးသည်။"
    },
    "trapNotes": {
      "id": "Hapus 「ます」 dari kata kerja 「飲みます」 menjadi 「飲み」.",
      "en": "Drop 「ます」 from the verb 「飲みます」 to get 「飲み」.",
      "my": "ကြိယာ 「飲みます」 မှ 「ます」 ကို ဖြုတ်ပြီး 「飲み」 အဖြစ် တွဲရမည်။"
    }
  },
  "bq_n4_3": {
    "title": {
      "id": "Pola 〜られる (Pasif)",
      "en": "Pattern 〜られる (Passive)",
      "my": "〜られる ပုံစံ (ခံပြကြိယာ)"
    },
    "translation": {
      "id": "Di dalam kereta, kaki saya terinjak oleh orang tak dikenal (saya merasa terganggu).",
      "en": "On the train, my foot was stepped on by a stranger (causing distress/inconvenience).",
      "my": "ရထားပေါ်တွင် မသိသောသူတစ်ဦးက ကျွန်ုပ်၏ခြေထောက်ကို တက်နင်းသွားခဲ့သည် (စိတ်အနှောင့်အယှက် ဖြစ်ခဲ့ရသည်)။"
    },
    "setsuzoku": {
      "id": "Kata Kerja Golongan 1: ganti vokal u -> a + れる (踏む -> 踏まれる)",
      "en": "Group 1 Verb: change vowel u -> a + れる (踏む -> 踏まれる)",
      "my": "အုပ်စု ၁ ကြိယာ- u သရကို a သရသို့ ပြောင်း + れる (踏む -> 踏まれる)"
    },
    "nuanceExplanation": {
      "id": "Bentuk pasif penderitaan (Meiwaku no Ukemi) saat pembicara dirugikan oleh aksi orang lain.",
      "en": "Adversity passive (Meiwaku no Ukemi) used when the speaker suffers distress from someone else's action.",
      "my": "အခြားသူ၏ လုပ်ရပ်ကြောင့် မိမိတွင် စိတ်အနှောင့်အယှက် သို့မဟုတ် ထိခိုက်နစ်နာမှု ဖြစ်ရသည့် ခံပြပုံစံ (Meiwaku no Ukemi) ဖြစ်သည်။"
    },
    "trapNotes": {
      "id": "「踏みました」 artinya saya yang menginjak (salah subjek).",
      "en": "「踏みました」 means I stepped on someone (incorrect agent).",
      "my": "「踏みました」 သည် မိမိက နင်းခြင်းဖြစ်သဖြင့် ကတ္တားမှားယွင်းသွားမည်။"
    }
  },
  "bq_n4_star_1": {
    "title": {
      "id": "★ Soal Bintang N4 (Pola 〜ようにする / 〜てから)",
      "en": "★ Star Question N4 (Pattern 〜ようにする / 〜てから)",
      "my": "★ N4 ကြယ်ပွင့် မေးခွန်း (〜ようにする / 〜てから ပုံစံ)"
    },
    "translation": {
      "id": "Setiap hari sebelum tidur saya membiasakan diri membaca buku selama 30 menit.",
      "en": "Every day before going to bed, I make an effort to read a book for 30 minutes.",
      "my": "နေ့စဉ် အိပ်ရာမဝင်မီ စာအုပ်ကို မိနစ် ၃၀ ဖတ်ရန် အလေ့အကျင့် ပြုလုပ်ထားပါသည်။"
    },
    "setsuzoku": {
      "id": "[毎日寝る前に] -> [本を] -> [30分] -> [読む] + ようにしています",
      "en": "[毎日寝る前に] -> [本を] -> [30分] -> [読む] + ようにしています",
      "my": "[毎日寝る前に] -> [本を] -> [30分] -> [読む] + ようにしています"
    },
    "nuanceExplanation": {
      "id": "Pola 「〜ようにしている」 menunjukkan usaha konsisten untuk membiasakan rutinitas positif.",
      "en": "The pattern 「〜ようにしている」 indicates consistent effort to maintain a good habit.",
      "my": "「〜ようにしている」 သည် အလေ့အကျင့်ကောင်းတစ်ခုကို စွဲမြဲစွာ မွေးမြူကြိုးပမ်းနေခြင်းကို ဖော်ပြသည်။"
    },
    "trapNotes": {
      "id": "Bintang ★ berada di urutan ke-3 yaitu keterangan durasi 「30分」.",
      "en": "The star ★ is in slot 3: the duration 「30分」.",
      "my": "ကြယ်ပွင့် ★ နေရာသည် အမှတ်စဉ် ၃ ဖြစ်သော ကြာချိန် 「30分」 ဖြစ်သည်။"
    }
  },
  "bq_n5_1": {
    "title": {
      "id": "Partikel で (Sarana / Alat)",
      "en": "Particle で (Means / Transport)",
      "my": "ဝိဘတ် で (နည်းလမ်း / သယ်ယူပို့ဆောင်ရေး)"
    },
    "translation": {
      "id": "Saya setiap hari pergi pulang sekolah naik bus (dengan bus).",
      "en": "I commute to school by bus every day.",
      "my": "ကျွန်ုပ်သည် နေ့စဉ် ဘတ်စ်ကားဖြင့် ကျောင်းတက်နေပါသည်။"
    },
    "setsuzoku": {
      "id": "Kata Benda (Alat Transportasi) + で",
      "en": "Noun (Transportation means) + で",
      "my": "နာမ် (သယ်ယူပို့ဆောင်ရေး ယာဉ်) + で"
    },
    "nuanceExplanation": {
      "id": "Partikel 「で」 menunjukkan alat, sarana, atau metode yang digunakan untuk berpindah.",
      "en": "Particle 「で」 indicates the tool, vehicle, or means used to travel.",
      "my": "ဝိဘတ် 「で」 သည် သွားလာလှုပ်ရှားရာတွင် အသုံးပြုသော နည်းလမ်း သို့မဟုတ် ယာဉ်ကို ညွှန်ပြသည်။"
    },
    "trapNotes": {
      "id": "Partikel 「に」 salah karena 「に」 untuk tujuan/waktu, bukan sarana.",
      "en": "Particle 「に」 is incorrect here because 「に」 marks destination or time, not means.",
      "my": "「に」 သည် ဦးတည်ရာ သို့မဟုတ် အချိန်အတွက်ဖြစ်သဖြင့် နည်းလမ်းအတွက် မှားယွင်းပါသည်။"
    }
  },
  "bq_n5_2": {
    "title": {
      "id": "Pola 〜てください (Permohonan Santun)",
      "en": "Pattern 〜てください (Polite Request)",
      "my": "〜てください ပုံစံ (ယဉ်ကျေးစွာ တောင်းဆိုခြင်း)"
    },
    "translation": {
      "id": "Permisi, tolong ajarkan cara membaca kanji ini.",
      "en": "Excuse me, please teach me how to read this kanji.",
      "my": "ခွင့်ပြုပါခင်ဗျာ၊ ဤခန်းဂျီးဖတ်နည်းကို ကျေးဇူးပြု၍ သင်ပြပေးပါ။"
    },
    "setsuzoku": {
      "id": "Kata Kerja bentuk-Te + ください",
      "en": "Verb Te-form + ください",
      "my": "ကြိယာ Te-ပုံစံ + ください"
    },
    "nuanceExplanation": {
      "id": "Digunakan untuk meminta bantuan atau memohon tindakan orang lain secara sopan.",
      "en": "Used to request assistance or politely ask someone to perform an action.",
      "my": "အခြားသူထံမှ အကူအညီတောင်းခံရာတွင် သို့မဟုတ် တစ်စုံတစ်ခု ပြုလုပ်ပေးရန် ယဉ်ကျေးစွာ ပြောဆိုရာတွင် သုံးသည်။"
    },
    "trapNotes": {
      "id": "Bentuk Te dari 「教えます」 adalah 「教えて」.",
      "en": "The Te-form of 「教えます」 is 「教えて」.",
      "my": "「教えます」 ၏ Te-ပုံစံမှာ 「教えて」 ဖြစ်သည်။"
    }
  },
  "bq_n5_3": {
    "title": {
      "id": "Pola 〜たいです (Keinginan)",
      "en": "Pattern 〜たいです (Desire)",
      "my": "〜たいです ပုံစံ (ဆန္ဒဖော်ပြခြင်း)"
    },
    "translation": {
      "id": "Kalau pergi ke Jepang, saya ingin makan ramen autentik.",
      "en": "If I go to Japan, I want to eat authentic ramen.",
      "my": "ဂျပန်သို့ သွားရောက်ပါက စစ်မှန်သော ရာမင်ခေါက်ဆွဲကို စားချင်ပါသည်။"
    },
    "setsuzoku": {
      "id": "Kata Kerja bentuk-Masu (tanpa masu) + たい（です）",
      "en": "Verb Masu-stem (without masu) + たい（です）",
      "my": "ကြိယာ Masu-stem (masu မပါ) + たい（です）"
    },
    "nuanceExplanation": {
      "id": "Menyatakan keinginan diri sendiri untuk melakukan suatu aktivitas.",
      "en": "Expresses the speaker's own first-person desire to perform an activity.",
      "my": "ပြောဆိုသူ ကိုယ်တိုင် လုပ်ဆောင်လိုသော ဆန္ဒကို ဖော်ပြရာတွင် သုံးသည်။"
    },
    "trapNotes": {
      "id": "Bentuk stem dari 「食べます」 adalah 「食べ」 + たい.",
      "en": "The stem of 「食べます」 is 「食べ」 + たい.",
      "my": "「食べます」 ၏ stem မှာ 「食べ」 ဖြစ်ပြီး 「たい」 နှင့် ပေါင်းစပ်ရသည်။"
    }
  },
  "bq_n5_star_1": {
    "title": {
      "id": "★ Soal Bintang N5 (Susunan Kalimat Dasar)",
      "en": "★ Star Question N5 (Basic Sentence Order)",
      "my": "★ N5 ကြယ်ပွင့် မေးခွန်း (အခြေခံဝါကျ အစီအစဉ်)"
    },
    "translation": {
      "id": "Kemarin di toko buku depan stasiun saya membeli kamus bahasa Jepang.",
      "en": "Yesterday at the bookstore in front of the station, I bought a Japanese dictionary.",
      "my": "မနေ့က ဘူတာရုံရှေ့ စာအုပ်ဆိုင်တွင် ဂျပန်စာအဘိဓာန်တစ်အုပ်ကို ဝယ်ယူခဲ့ပါသည်။"
    },
    "setsuzoku": {
      "id": "[昨日] -> [駅前の本屋で] -> [日本語の] -> [辞書を] + 買いました",
      "en": "[昨日] -> [駅前の本屋で] -> [日本語の] -> [辞書を] + 買いました",
      "my": "[昨日] -> [駅前の本屋で] -> [日本語の] -> [辞書を] + 買いました"
    },
    "nuanceExplanation": {
      "id": "Waktu (昨日) + Tempat aksi (で) + Objek (日本語の辞書を) + Predikat (買いました).",
      "en": "Time (昨日) + Location of action (で) + Direct object (日本語の辞書を) + Verb (買いました).",
      "my": "အချိန် (昨日) + ပြုလုပ်ရာနေရာ (で) + ကံပုဒ် (日本語の辞書を) + ကြိယာ (買いました)။"
    },
    "trapNotes": {
      "id": "Bintang ★ jatuh pada slot ke-3 yaitu 「日本語の」.",
      "en": "The star ★ is in slot 3: 「日本語の」.",
      "my": "ကြယ်ပွင့် ★ နေရာသည် အမှတ်စဉ် ၃ ဖြစ်သော 「日本語の」 ဖြစ်သည်။"
    }
  }
};

export function localizeBunpoQuestion(q: BunpoQuestion, lang: Language): BunpoQuestion {
  const trans = BUNPO_QUESTION_TRANSLATIONS[q.id];
  if (!trans) return q;
  return {
    ...q,
    title: trans.title[lang] || q.title,
    translation: trans.translation[lang] || q.translation,
    setsuzoku: trans.setsuzoku[lang] || q.setsuzoku,
    nuanceExplanation: trans.nuanceExplanation[lang] || q.nuanceExplanation,
    trapNotes: trans.trapNotes[lang] || q.trapNotes,
  };
}
