import type { Language } from '@/locales/translations';

export interface LocalizedKanjiItem {
  meanings: Record<Language, string[]>;
  radicalMeaning: Record<Language, string>;
}

export const ALL_KANJI_TRANSLATIONS: Record<string, LocalizedKanjiItem> = {
  "間": {
    meanings: { id: ["jeda", "antara", "ruang"], en: ["interval", "space"], my: ["ကြားအကွာအဝေး", "နေရာလွတ်"] },
    radicalMeaning: { id: "mengurung seperti gerbang", en: "gate / enclosure", my: "တံခါးမကြီး / ဝင်းခြံ" },
  },
  "隔": {
    meanings: { id: ["memisahkan", "berjarak"], en: ["isolate", "alternate", "distance"], my: ["ခွဲထားသည်", "အလှည့်ကျသည်", "အကွာအဝေး"] },
    radicalMeaning: { id: "bukit di sisi kiri", en: "mound / village", my: "ကုန်းမြင့် / ရွာ" },
  },
  "焦": {
    meanings: { id: ["hangus", "tergesa-gesa"], en: ["char", "hurry", "impatient"], my: ["ကျွမ်းသည်", "အလျင်စလိုလုပ်သည်", "စိတ်မရှည်သော"] },
    radicalMeaning: { id: "api membakar di bawah", en: "fire / boiling", my: "မီးတောက် / ဆူပွက်ခြင်း" },
  },
  "防": {
    meanings: { id: ["mencegah", "bertahan"], en: ["ward off", "defend", "protect"], my: ["တားဆီးသည်", "ကာကွယ်သည်", "စောင့်ရှောက်သည်"] },
    radicalMeaning: { id: "bukit pertahanan", en: "mound / village", my: "ကုန်းမြင့် / ရွာ" },
  },
  "止": {
    meanings: { id: ["berhenti", "menahan"], en: ["stop", "halt"], my: ["ရပ်တန့်သည်", "ရပ်သည်"] },
    radicalMeaning: { id: "jejak kaki berhenti", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "煙": {
    meanings: { id: ["asap"], en: ["smoke"], my: ["မီးခိုး"] },
    radicalMeaning: { id: "api mengeluarkan asap", en: "fire", my: "မီး" },
  },
  "誤": {
    meanings: { id: ["kesalahan", "keliru"], en: ["mistake", "err", "do wrong"], my: ["အမှား", "မှားယွင်းသည်", "အမှားလုပ်သည်"] },
    radicalMeaning: { id: "kata-kata salah", en: "words / speech", my: "စကားလုံး / ပြောဆိုချက်" },
  },
  "重": {
    meanings: { id: ["berat", "tumpuk"], en: ["heavy", "important", "esteem"], my: ["လေးလံသော", "အရေးကြီးသော", "လေးစားသည်"] },
    radicalMeaning: { id: "lapisan bumi bertumpuk", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "幼": {
    meanings: { id: ["muda", "kecil", "kekanak-kanakan"], en: ["infancy", "childhood"], my: ["နို့စို့အရွယ်", "ကလေးဘဝ"] },
    radicalMeaning: { id: "benang kecil halus", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "屋": {
    meanings: { id: ["atap", "rumah", "toko"], en: ["roof", "house", "shop"], my: ["ခေါင်မိုး", "အိမ်", "ဆိုင်"] },
    radicalMeaning: { id: "atap rumah menaungi", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "根": {
    meanings: { id: ["akar", "pondasi"], en: ["root", "radical", "head (pimple)"], my: ["အမြစ်", "အရင်းခံ", "အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "kayu berakar kuat", en: "tree / wood", my: "သစ်ပင် / သစ်သား" },
  },
  "訂": {
    meanings: { id: ["mengoreksi"], en: ["revise", "correct", "decide"], my: ["ပြင်ဆင်သည်", "မှန်ကန်သော", "ဆုံးဖြတ်သည်"] },
    radicalMeaning: { id: "kata-kata dibenahi", en: "words / speech", my: "စကားလုံး / ပြောဆိုချက်" },
  },
  "正": {
    meanings: { id: ["benar", "tepat"], en: ["correct", "justice", "righteous"], my: ["မှန်ကန်သော", "တရားမျှတမှု", "ဖြောင့်မတ်သော"] },
    radicalMeaning: { id: "berjalan ke arah benar", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "歩": {
    meanings: { id: ["berjalan"], en: ["walk", "counter for steps"], my: ["လမ်း / လမ်းကြောင်း"] },
    radicalMeaning: { id: "langkah kaki", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "出": {
    meanings: {
      id: ["keluar", "muncul"],
      en: ["exit", "leave", "go out"],
      my: ["ထွက်လာ", "ပေါ်လာ"]
    },
    radicalMeaning: { id: "tunas keluar ke atas", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "産": {
    meanings: {
      id: ["melahirkan", "menghasilkan"],
      en: ["products", "bear", "give birth"],
      my: ["မွေးထုတ်ပေးပါ။"]
    },
    radicalMeaning: { id: "kelahiran hidup baru", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "帯": {
    meanings: { id: ["sabuk", "rentang waktu"], en: ["sash", "belt", "obi"], my: ["ခါးပတ်", "အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "kain melingkar", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "瞬": {
    meanings: { id: ["sekejap", "berkedip"], en: ["wink", "blink", "twinkle"], my: ["မျက်စိမှိတ်သည်", "မျက်တောင်ခတ်သည်"] },
    radicalMeaning: { id: "mata berkedip cepat", en: "eye / vision", my: "မျက်စိ / အမြင်" },
  },
  "知": {
    meanings: { id: ["mengetahui"], en: ["know", "wisdom"], my: ["သိရှိသည်", "ဉာဏ်ပညာ"] },
    radicalMeaning: { id: "tahu cepat bagai panah", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "短": {
    meanings: { id: ["pendek", "singkat"], en: ["short", "brevity", "fault"], my: ["တိုတောင်းသော", "တိုတိုတုတ်တုတ်", "အပြစ်"] },
    radicalMeaning: { id: "panah pendek", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "長": {
    meanings: { id: ["panjang", "lama"], en: ["long", "leader", "superior"], my: ["ရှည်လျားသော", "ခေါင်းဆောင်", "သာလွန်သော"] },
    radicalMeaning: { id: "rambut panjang terurai", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "区": {
    meanings: {
      id: ["wilayah", "membedakan"],
      en: ["ward", "district"],
      my: ["ဒေသ", "ခွဲခြား"]
    },
    radicalMeaning: { id: "kotak pembatas bagian", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "別": {
    meanings: { id: ["memisahkan", "lain", "berbeda"], en: ["separate", "branch off", "diverge"], my: ["ခွဲထုတ်သည်", "ဌာနခွဲ", "အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "pisau pemisah", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "煮": {
    meanings: { id: ["merebus", "mendidihkan"], en: ["boil", "cook"], my: ["ပြုတ်သည်", "ချက်ပြုတ်သည်"] },
    radicalMeaning: { id: "api memasak di bawah", en: "fire / boiling", my: "မီးတောက် / ဆူပွက်ခြင်း" },
  },
  "込": {
    meanings: {
      id: ["masuk ke dalam", "padat"],
      en: ["crowded", "mixture", "in bulk"],
      my: ["အထဲကိုဝင်ပါ။"]
    },
    radicalMeaning: { id: "masuk bergerak ke dalam", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "解": {
    meanings: { id: ["melepas", "memecahkan", "paham"], en: ["unravel", "notes", "key"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "membelah tanduk memahami struktur", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "決": {
    meanings: { id: ["memutuskan", "menetapkan"], en: ["decide", "fix", "agree upon"], my: ["ဆုံးဖြတ်သည်", "အဓိပ္ပာယ်", "အပေါ်"] },
    radicalMeaning: { id: "arus air menentukan aliran", en: "water drops", my: "ရေစက် / အရည်" },
  },
  "影": {
    meanings: { id: ["bayangan", "pengaruh"], en: ["shadow", "silhouette", "phantom"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "cahaya matahari membentuk bayang", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "響": {
    meanings: { id: ["bergema", "dampak"], en: ["echo", "sound", "resound"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "suara bergema di kota", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "担": {
    meanings: { id: ["memikul", "mengemban tugas"], en: ["shouldering", "carry", "raise"], my: ["အဓိပ္ပာယ်", "ကား"] },
    radicalMeaning: { id: "tangan memikul beban", en: "hand action", my: "လက်ဖြင့်လုပ်ဆောင်မှု" },
  },
  "当": {
    meanings: { id: ["tepat", "mengena", "menghadapi"], en: ["hit", "right", "appropriate"], my: ["အဓိပ္ပာယ်", "သင့်လျော်သော"] },
    radicalMeaning: { id: "mengenai sasaran", en: "small / little", my: "သေးငယ်သော" },
  },
  "延": {
    meanings: { id: ["memperpanjang", "menunda"], en: ["prolong", "stretching"], my: ["ဆွဲဆန့်သည်", "ဆန့်ထုတ်သည်"] },
    radicalMeaning: { id: "melangkah jauh ke depan", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "期": {
    meanings: { id: ["periode", "tenggat waktu"], en: ["period", "time", "date"], my: ["ကာလ", "အချိန်", "ရက်စွဲ"] },
    radicalMeaning: { id: "siklus peredaran bulan", en: "moon / flesh / time", my: "လမင်း / ခန္ဓာကိုယ်အသား / အချိန်" },
  },
  "観": {
    meanings: { id: ["mengamati", "pemandangan"], en: ["outlook", "look", "appearance"], my: ["ကြည့်သည်", "အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "mata tajam mengamati burung bangau", en: "to see / observe", my: "ကြည့်ရှုခြင်း" },
  },
  "察": {
    meanings: { id: ["menebak", "menyelidiki cermat"], en: ["guess", "presume", "surmise"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "atap pengamatan cermat", en: "roof / house", my: "အမိုး / အိမ်ခေါင်မိုး" },
  },
  "案": {
    meanings: { id: ["rencana", "memandu"], en: ["plan", "suggestion", "draft"], my: ["အစီအစဉ်", "အကြံပြုချက်", "မူကြမ်း"] },
    radicalMeaning: { id: "meja kerja memikirkan ide", en: "tree / wood", my: "သစ်ပင် / သစ်သား" },
  },
  "内": {
    meanings: {
      id: ["dalam", "urusan rumah"],
      en: ["inside", "within", "between"],
      my: ["အိမ်တွင်းရေး"]
    },
    radicalMeaning: { id: "ruang dalam batas", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "連": {
    meanings: { id: ["terhubung", "membawa"], en: ["take along", "lead", "join"], my: ["ရှည်လျားသော", "ဦးဆောင်သည်", "ပူးပေါင်းသည်"] },
    radicalMeaning: { id: "gerobak beriringan", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "絡": {
    meanings: { id: ["menjalin", "terlilit"], en: ["entwine", "coil around", "get caught in"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "benang saling terikat", en: "thread / connection", my: "အပ်ချည်ကြိုး / ချည်နှောင်မှု" },
  },
  "準": {
    meanings: { id: ["standar", "persiapan"], en: ["semi-", "correspond to", "proportionate to"], my: ["အဓိပ္ပာယ်", "လိုက်လျောညီထွေရှိသည်"] },
    radicalMeaning: { id: "air perata datar", en: "water drops", my: "ရေစက် / အရည်" },
  },
  "備": {
    meanings: { id: ["menyediakan", "perlengkapan"], en: ["equip", "provision", "preparation"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "orang mempersiapkan panah", en: "person standing", my: "မတ်တပ်ရပ်နေသောလူ" },
  },
  "約": {
    meanings: { id: ["janji", "ringkasan"], en: ["promise", "approximately", "shrink"], my: ["ကတိပေးသည်", "ခန့်မှန်းခြေ", "အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "benang pengikat kesepakatan", en: "thread / connection", my: "အပ်ချည်ကြိုး / ချည်နှောင်မှု" },
  },
  "束": {
    meanings: { id: ["seikat", "mengikat"], en: ["bundle", "sheaf", "ream"], my: ["စည်း", "ကောက်လှိုင်း", "အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "kayu dibungkus seikat", en: "tree / wood", my: "သစ်ပင် / သစ်သား" },
  },
  "予": {
    meanings: {
      id: ["sebelumnya", "estimasi"],
      en: ["beforehand", "previous", "myself"],
      my: ["အရင်က ခန့်မှန်းချက်"]
    },
    radicalMeaning: { id: "memberi tahu di muka", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "定": {
    meanings: { id: ["pasti", "menetapkan"], en: ["determine", "fix", "establish"], my: ["သက်တမ်း", "အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "atap pondasi kokoh", en: "roof / house", my: "အမိုး / အိမ်ခေါင်မိုး" },
  },
  "食": {
    meanings: { id: ["makan", "makanan"], en: ["eat", "food"], my: ["စားသောက်ခြင်း", "အစားအစာ"] },
    radicalMeaning: { id: "makanan pokok", en: "food / eating", my: "အစားအစာ / စားသုံးခြင်း" },
  },
  "飲": {
    meanings: { id: ["minum"], en: ["drink", "smoke", "take"], my: ["သောက်သုံးခြင်း"] },
    radicalMeaning: { id: "makanan dan minuman", en: "food / eating", my: "အစားအစာ / စားသုံးခြင်း" },
  },
  "行": {
    meanings: { id: ["pergi", "baris"], en: ["going", "journey", "carry out"], my: ["သွားခြင်း", "တန်းစီခြင်း"] },
    radicalMeaning: { id: "persimpangan jalan", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "来": {
    meanings: { id: ["datang", "masa depan"], en: ["come", "due", "next"], my: ["လာခြင်း", "အနာဂတ်"] },
    radicalMeaning: { id: "datang dari kejauhan", en: "tree / wood", my: "သစ်ပင် / သစ်သား" },
  },
  "見": {
    meanings: { id: ["melihat", "memandang"], en: ["see", "hopes", "chances"], my: ["ကြည့်ရှုခြင်း", "ရှုမြင်ခြင်း"] },
    radicalMeaning: { id: "mata menatap", en: "to see / observe", my: "ကြည့်ရှုခြင်း" },
  },
  "聞": {
    meanings: { id: ["mendengar", "bertanya"], en: ["hear", "ask", "listen"], my: ["ကြားရခြင်း", "မေးမြန်းခြင်း"] },
    radicalMeaning: { id: "telinga di pintu", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "読": {
    meanings: { id: ["membaca"], en: ["read"], my: ["ဖတ်ရှုခြင်း"] },
    radicalMeaning: { id: "kata-kata tertulis dibaca", en: "words / speech", my: "စကားလုံး / ပြောဆိုချက်" },
  },
  "書": {
    meanings: { id: ["menulis", "buku dokumen"], en: ["write"], my: ["ရေးသားခြင်း", "စာအုပ် / စာရွက်စာတမ်း"] },
    radicalMeaning: { id: "kuas menggores tulisan", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "話": {
    meanings: { id: ["berbicara", "cerita"], en: ["tale", "talk"], my: ["စကားပြောခြင်း", "ပုံပြင် / အကြောင်းအရာ"] },
    radicalMeaning: { id: "kata-kata diucapkan", en: "words / speech", my: "စကားလုံး / ပြောဆိုချက်" },
  },
  "買": {
    meanings: { id: ["membeli"], en: ["buy"], my: ["ဝယ်ယူခြင်း"] },
    radicalMeaning: { id: "kerang mata uang kuno", en: "shell / wealth / currency", my: "ခရုခွံ / ဥစ္စာဓန" },
  },
  "一": {
    meanings: { id: ["satu"], en: ["one", "one radical (no.1)"], my: ["တစ်"] },
    radicalMeaning: { id: "garis horizontal satu", en: "one", my: "တစ်" },
  },
  "二": {
    meanings: { id: ["dua"], en: ["two", "two radical (no. 7)"], my: ["နှစ်"] },
    radicalMeaning: { id: "garis dua", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "三": {
    meanings: { id: ["tiga"], en: ["three"], my: ["သုံး"] },
    radicalMeaning: { id: "garis tiga", en: "one", my: "တစ်" },
  },
  "四": {
    meanings: { id: ["empat"], en: ["four"], my: ["လေး"] },
    radicalMeaning: { id: "mulut mengelilingi", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "五": {
    meanings: { id: ["lima"], en: ["five"], my: ["ငါး"] },
    radicalMeaning: { id: "persilangan lima", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "六": {
    meanings: { id: ["enam"], en: ["six"], my: ["ခြောက်"] },
    radicalMeaning: { id: "angka enam", en: "eight / divide", my: "ရှစ် / ခွဲခြမ်းခြင်း" },
  },
  "七": {
    meanings: { id: ["tujuh"], en: ["seven"], my: ["ခုနစ်"] },
    radicalMeaning: { id: "garis tujuh", en: "one", my: "တစ်" },
  },
  "八": {
    meanings: { id: ["delapan"], en: ["eight", "eight radical (no. 12)"], my: ["ရှစ်"] },
    radicalMeaning: { id: "terbuka melebar delapan", en: "eight / divide", my: "ရှစ် / ခွဲခြမ်းခြင်း" },
  },
  "九": {
    meanings: { id: ["sembilan"], en: ["nine"], my: ["ကိုး"] },
    radicalMeaning: { id: "lekukan sembilan", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "十": {
    meanings: { id: ["sepuluh"], en: ["ten"], my: ["ဆယ်"] },
    radicalMeaning: { id: "palang sepuluh", en: "ten / completion", my: "ဆယ် / ပြည့်စုံခြင်း" },
  },
  "百": {
    meanings: { id: ["ratus"], en: ["hundred"], my: ["ရာ"] },
    radicalMeaning: { id: "seratus", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "千": {
    meanings: { id: ["ribu"], en: ["thousand"], my: ["ထောင်"] },
    radicalMeaning: { id: "seribu", en: "ten / completion", my: "ဆယ် / ပြည့်စုံခြင်း" },
  },
  "万": {
    meanings: { id: ["sepuluh ribu"], en: ["ten thousand", "10,000"], my: ["သောင်း"] },
    radicalMeaning: { id: "sepuluh ribu melimpah", en: "one", my: "တစ်" },
  },
  "日": {
    meanings: { id: ["matahari", "hari"], en: ["day", "sun", "Japan"], my: ["နေမင်း / နေ့ရက်", "နေ့ရက်"] },
    radicalMeaning: { id: "matahari bersinar", en: "sun / day", my: "နေမင်း / နေ့ရက်" },
  },
  "月": {
    meanings: { id: ["bulan"], en: ["month", "moon"], my: ["လမင်း / လ"] },
    radicalMeaning: { id: "bulan sabit", en: "moon / flesh / time", my: "လမင်း / ခန္ဓာကိုယ်အသား / အချိန်" },
  },
  "火": {
    meanings: { id: ["api"], en: ["fire"], my: ["မီး"] },
    radicalMeaning: { id: "lidah api membakar", en: "fire", my: "မီး" },
  },
  "水": {
    meanings: { id: ["air"], en: ["water"], my: ["ရေ"] },
    radicalMeaning: { id: "tetesan aliran air", en: "water", my: "ရေ" },
  },
  "木": {
    meanings: { id: ["pohon", "kayu"], en: ["tree", "wood"], my: ["သစ်ပင်", "သစ်သား"] },
    radicalMeaning: { id: "cabang dan akar pohon", en: "tree / wood", my: "သစ်ပင် / သစ်သား" },
  },
  "金": {
    meanings: { id: ["emas", "uang"], en: ["gold"], my: ["ရွှေ / ငွေကြေး", "ငွေကြေး"] },
    radicalMeaning: { id: "logam mulia dalam tanah", en: "metal / gold / money", my: "သတ္တု / ရွှေ / ငွေကြေး" },
  },
  "土": {
    meanings: { id: ["tanah"], en: ["soil", "earth", "ground"], my: ["မြေကြီး"] },
    radicalMeaning: { id: "tanah subur menumbuhkan tunas", en: "earth / ground", my: "မြေကြီး / မြေပြင်" },
  },
  "年": {
    meanings: { id: ["tahun"], en: ["year", "counter for years"], my: ["နှစ် (ခုနှစ်)"] },
    radicalMeaning: { id: "panen tanaman tahunan", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "今": {
    meanings: { id: ["sekarang"], en: ["now"], my: ["ယခု / လက်ရှိ"] },
    radicalMeaning: { id: "saat ini berlindung", en: "person / human", my: "လူသား" },
  },
  "分": {
    meanings: { id: ["menit", "membagi"], en: ["part", "minute of time", "segment"], my: ["မိနစ်", "ခွဲဝေခြင်း"] },
    radicalMeaning: { id: "membagi dengan pisau", en: "eight / divide", my: "ရှစ် / ခွဲခြမ်းခြင်း" },
  },
  "半": {
    meanings: { id: ["setengah"], en: ["half", "middle", "odd number"], my: ["တစ်ဝက်"] },
    radicalMeaning: { id: "membagi dua simetris", en: "ten / completion", my: "ဆယ် / ပြည့်စုံခြင်း" },
  },
  "時": {
    meanings: { id: ["waktu", "jam"], en: ["time", "hour"], my: ["အချိန်", "နာရီ"] },
    radicalMeaning: { id: "waktu matahari bergerak", en: "sun / day", my: "နေမင်း / နေ့ရက်" },
  },
  "山": {
    meanings: { id: ["gunung"], en: ["mountain"], my: ["တောင်"] },
    radicalMeaning: { id: "tiga puncak gunung", en: "mountain", my: "တောင်တန်း" },
  },
  "川": {
    meanings: { id: ["sungai"], en: ["stream", "river", "river or three-stroke river radical (no. 47)"], my: ["မြစ်ချောင်း"] },
    radicalMeaning: { id: "tiga aliran sungai", en: "river", my: "မြစ်ချောင်း" },
  },
  "田": {
    meanings: { id: ["sawah"], en: ["rice field", "rice paddy"], my: ["လယ်ကွင်း"] },
    radicalMeaning: { id: "petak-petak sawah", en: "rice field", my: "လယ်ကွင်း" },
  },
  "天": {
    meanings: {
      id: ["langit", "surga"],
      en: ["heavens", "sky", "imperial"],
      my: ["ကောင်းကင်", "ကောင်းကင်"]
    },
    radicalMeaning: { id: "di atas kepala manusia agung", en: "big / great", my: "ကြီးမားသော" },
  },
  "気": {
    meanings: { id: ["energi", "udara", "rasa"], en: ["spirit", "mind", "air"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "uap energi mengepul", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "雨": {
    meanings: { id: ["hujan"], en: ["rain"], my: ["မိုးရေ"] },
    radicalMeaning: { id: "tetesan awan hujan", en: "rain / sky weather", my: "မိုးရေ / မိုးလေဝသ" },
  },
  "上": {
    meanings: { id: ["atas"], en: ["above", "up"], my: ["အထက် / အပေါ်"] },
    radicalMeaning: { id: "titik di atas garis dasar", en: "one", my: "တစ်" },
  },
  "下": {
    meanings: { id: ["bawah"], en: ["below", "down", "descend"], my: ["အောက်"] },
    radicalMeaning: { id: "titik di bawah garis dasar", en: "one", my: "တစ်" },
  },
  "左": {
    meanings: { id: ["kiri"], en: ["left"], my: ["ဘယ်ဘက်"] },
    radicalMeaning: { id: "tangan kiri memegang perkakas", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "右": {
    meanings: { id: ["kanan"], en: ["right"], my: ["ညာဘက်"] },
    radicalMeaning: { id: "tangan kanan membawa makanan ke mulut", en: "mouth / opening", my: "ပါးစပ် / အပေါက်" },
  },
  "中": {
    meanings: { id: ["tengah", "dalam"], en: ["in", "inside", "middle"], my: ["အလယ် / အတွင်း", "အတွင်းပိုင်း"] },
    radicalMeaning: { id: "tongkat menancap tepat di pusat", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "北": {
    meanings: { id: ["utara"], en: ["north"], my: ["မြောက်ဘက်"] },
    radicalMeaning: { id: "orang saling membelakangi dingin utara", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "南": {
    meanings: { id: ["selatan"], en: ["south"], my: ["တောင်ဘက်"] },
    radicalMeaning: { id: "arah hangat selatan", en: "ten / completion", my: "ဆယ် / ပြည့်စုံခြင်း" },
  },
  "東": {
    meanings: { id: ["timur"], en: ["east"], my: ["အရှေ့ဘက်"] },
    radicalMeaning: { id: "matahari terbit menembus pohon", en: "tree / wood", my: "သစ်ပင် / သစ်သား" },
  },
  "西": {
    meanings: { id: ["barat"], en: ["west", "Spain"], my: ["အနောက်ဘက်"] },
    radicalMeaning: { id: "burung bertengger matahari terbenam", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "前": {
    meanings: { id: ["depan", "sebelum"], en: ["in front", "before"], my: ["အရှေ့ / ရှေ့", "မတိုင်မီ"] },
    radicalMeaning: { id: "maju di depan langkah", en: "knife / sword", my: "ဓား / လက်နက်" },
  },
  "後": {
    meanings: {
      id: ["belakang", "sesudah"],
      en: ["behind", "back", "later"],
      my: ["နောက်", "နောက်"]
    },
    radicalMeaning: { id: "kaki tertinggal di belakang", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "人": {
    meanings: { id: ["orang", "manusia"], en: ["person"], my: ["လူသား", "လူသား"] },
    radicalMeaning: { id: "dua orang saling menopang", en: "person / human", my: "လူသား" },
  },
  "男": {
    meanings: { id: ["laki-laki", "pria"], en: ["male"], my: ["ယောက်ျား", "အမျိုးသား"] },
    radicalMeaning: { id: "bekerja kuat tenaga di sawah", en: "rice field", my: "လယ်ကွင်း" },
  },
  "女": {
    meanings: { id: ["perempuan", "wanita"], en: ["woman", "female"], my: ["မိန်းမ", "အမျိုးသမီး"] },
    radicalMeaning: { id: "wanita anggun bersimpuh", en: "woman / female", my: "အမျိုးသမီး" },
  },
  "子": {
    meanings: { id: ["anak"], en: ["child", "sign of the rat", "11PM-1AM"], my: ["ကလေး"] },
    radicalMeaning: { id: "anak bayi merentangkan tangan", en: "child", my: "ကလေး / သားသမီး" },
  },
  "父": {
    meanings: { id: ["ayah"], en: ["father"], my: ["ဖခင်"] },
    radicalMeaning: { id: "kepala keluarga memegang kendali", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "母": {
    meanings: { id: ["ibu"], en: ["mother"], my: ["မိခင်"] },
    radicalMeaning: { id: "ibu merawat dan menyusui anak", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "友": {
    meanings: { id: ["teman", "sahabat"], en: ["friend"], my: ["သူငယ်ချင်း", "မိတ်ဆွေ"] },
    radicalMeaning: { id: "dua tangan saling menggenggam", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "学": {
    meanings: { id: ["belajar", "ilmu"], en: ["study", "learning", "science"], my: ["လေ့လာသင်ယူခြင်း", "ပညာရပ်"] },
    radicalMeaning: { id: "anak belajar di bawah naungan atap", en: "child", my: "ကလေး / သားသမီး" },
  },
  "校": {
    meanings: { id: ["sekolah"], en: ["exam", "school", "printing"], my: ["ကျောင်း"] },
    radicalMeaning: { id: "gedung kayu pertukaran ilmu", en: "tree / wood", my: "သစ်ပင် / သစ်သား" },
  },
  "先": {
    meanings: { id: ["dahulu", "sebelumnya"], en: ["before", "ahead", "previous"], my: ["မတိုင်မီ", "ရှေ့တွင်", "ယခင်က"] },
    radicalMeaning: { id: "orang yang melangkah lebih dahulu", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "生": {
    meanings: {
      id: ["hidup", "lahir", "murid"],
      en: ["life", "genuine", "birth"],
      my: ["နေထိုင်", "မွေး", "တပည့်"]
    },
    radicalMeaning: { id: "tunas tanaman bertumbuh hidup", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "車": {
    meanings: { id: ["mobil", "kendaraan"], en: ["car"], my: ["မော်တော်ကား / ရထား", "ယာဉ်"] },
    radicalMeaning: { id: "kereta beroda dua", en: "vehicle / wheel", my: "ယာဉ် / ဘီး" },
  },
  "名": {
    meanings: { id: ["nama", "reputasi"], en: ["name", "noted", "distinguished"], my: ["နာမည်", "ကျော်ကြားမှု"] },
    radicalMeaning: { id: "menyebut nama di kegelapan petang", en: "mouth / opening", my: "ပါးစပ် / အပေါက်" },
  },
  "電": {
    meanings: { id: ["listrik"], en: ["electricity"], my: ["လျှပ်စစ်"] },
    radicalMeaning: { id: "awan petir menyambar listrik", en: "rain / sky weather", my: "မိုးရေ / မိုးလေဝသ" },
  },
  "駅": {
    meanings: { id: ["stasiun"], en: ["station"], my: ["ဘူတာရုံ"] },
    radicalMeaning: { id: "kuda pos pergantian pos stasiun", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "社": {
    meanings: { id: ["perusahaan", "kuil"], en: ["company", "firm", "office"], my: ["ကုမ္ပဏီ", "နတ်ကွန်း / ဘုရားကျောင်း"] },
    radicalMeaning: { id: "tempat berkumpul dewa dan warga", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "店": {
    meanings: { id: ["toko", "kedai"], en: ["store", "shop"], my: ["ဆိုင်", "အရောင်းဆိုင်"] },
    radicalMeaning: { id: "bangunan menjual aneka barang", en: "spacious hall / shelter", my: "ကျယ်ဝန်းသောအိမ် / အမိုးခိုစရာ" },
  },
  "道": {
    meanings: { id: ["jalan", "ajaran moral"], en: ["road-way", "street", "district"], my: ["လမ်း / လမ်းကြောင်း", "တရားလမ်းစဉ်"] },
    radicalMeaning: { id: "melangkah meniti jalan benar", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "旅": {
    meanings: { id: ["perjalanan", "wisata"], en: ["trip", "travel"], my: ["ခရီးသွားခြင်း", "ခရီးလည်ပတ်ခြင်း"] },
    radicalMeaning: { id: "bendera berkibar rombongan musafir", en: "direction / method", my: "အရပ်မျက်နှာ / နည်းလမ်း" },
  },
  "映": {
    meanings: { id: ["pantulan", "bioskop"], en: ["reflect", "reflection", "projection"], my: ["အရိပ်ထင်ဟပ်မှု", "ရုပ်ရှင်"] },
    radicalMeaning: { id: "sinar matahari memproyeksikan gambar", en: "sun / day", my: "နေမင်း / နေ့ရက်" },
  },
  "画": {
    meanings: { id: ["gambar", "goresan"], en: ["brush-stroke", "picture"], my: ["ရုပ်ပုံ / ပန်းချီ", "ရေးဆွဲချက်"] },
    radicalMeaning: { id: "pembatas kuas melukis bidang", en: "rice field", my: "လယ်ကွင်း" },
  },
  "写": {
    meanings: { id: ["menyalin", "memotret"], en: ["copy", "be photographed", "describe"], my: ["ကူးယူခြင်း / ဓာတ်ပုံရိုက်ခြင်း", "ဓာတ်ပုံရိုက်ခြင်း"] },
    radicalMeaning: { id: "menyalin bentuk persis aslinya", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "真": {
    meanings: { id: ["kebenaran", "asli"], en: ["true", "reality", "Buddhist sect"], my: ["အမှန်တရား", "စစ်မှန်သော"] },
    radicalMeaning: { id: "melihat esensi hakiki tanpa cela", en: "eye / vision", my: "မျက်စိ / အမြင်" },
  },
  "音": {
    meanings: { id: ["bunyi", "nada suara"], en: ["sound", "noise"], my: ["အသံ / အသံထွက်", "အသံအနိမ့်အမြင့်"] },
    radicalMeaning: { id: "suara keluar dari rongga mulut", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "楽": {
    meanings: { id: ["musik", "menyenangkan"], en: ["music", "comfort", "ease"], my: ["ဂီတ", "ပျော်ရွှင်ဖွယ်ကောင်းသော"] },
    radicalMeaning: { id: "alat musik menabuh kegembiraan", en: "tree / wood", my: "သစ်ပင် / သစ်သား" },
  },
  "勉": {
    meanings: { id: ["tekun", "berusaha keras"], en: ["exertion", "endeavour", "encourage"], my: ["ကြိုးစားအားထုတ်သော", "အပြင်းအထန် ကြိုးပမ်းခြင်း"] },
    radicalMeaning: { id: "mengerahkan daya tenaga memeras keringat", en: "power / strength", my: "ခွန်အား / စွမ်းအင်" },
  },
  "強": {
    meanings: { id: ["kuat", "kokoh"], en: ["strong"], my: ["သန်မာသော", "ခိုင်ခံ့သော"] },
    radicalMeaning: { id: "busur panah kencang berdaya besar", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "空": {
    meanings: { id: ["langit", "kosong"], en: ["empty", "sky", "void"], my: ["ကောင်းကင်", "ဗလာ / ဟာလာဟင်းလင်း"] },
    radicalMeaning: { id: "ruang terbuka luas membentang", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "海": {
    meanings: { id: ["laut", "samudera"], en: ["sea", "ocean"], my: ["ပင်လယ်", "သမုဒ္ဒရာ"] },
    radicalMeaning: { id: "aliran air muara menuju samudra", en: "water drops", my: "ရေစက် / အရည်" },
  },
  "春": {
    meanings: { id: ["musim semi"], en: ["springtime", "spring (season)"], my: ["နွေဦးရာသီ"] },
    radicalMeaning: { id: "sinar matahari menumbuhkan rerumputan", en: "sun / day", my: "နေမင်း / နေ့ရက်" },
  },
  "夏": {
    meanings: { id: ["musim panas"], en: ["summer"], my: ["နွေရာသီ"] },
    radicalMeaning: { id: "penari topeng menyambut hangat musim panas", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "秋": {
    meanings: { id: ["musim gugur"], en: ["autumn"], my: ["ဆောင်းဦးရာသီ"] },
    radicalMeaning: { id: "padi menguning matang siap dipanen", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "冬": {
    meanings: { id: ["musim dingin"], en: ["winter"], my: ["ဆောင်းရာသီ"] },
    radicalMeaning: { id: "titik es membeku di ujung daun", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "経": {
    meanings: { id: ["mengalami", "manajemen"], en: ["sutra", "longitude", "pass thru"], my: ["အဓိပ္ပာယ်", "ရှည်လျားသော"] },
    radicalMeaning: { id: "benang vertikal menenun sejarah", en: "thread / connection", my: "အပ်ချည်ကြိုး / ချည်နှောင်မှု" },
  },
  "済": {
    meanings: { id: ["selesai", "lunas"], en: ["settle (debt, etc.)", "relieve (burden)", "finish"], my: ["ချထားသည်", "အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "menyeberangi sungai hingga tuntas", en: "water drops", my: "ရေစက် / အရည်" },
  },
  "政": {
    meanings: { id: ["politik", "pemerintahan"], en: ["politics", "government"], my: ["အဓိပ္ပာယ်", "သွားသည်"] },
    radicalMeaning: { id: "kebijakan menertibkan aturan rakyat", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "治": {
    meanings: { id: ["menyembuhkan", "memerintah"], en: ["reign", "be at peace", "calm down"], my: ["အဓိပ္ပာယ်", "ငြိမ်းချမ်းရေး"] },
    radicalMeaning: { id: "mengatur aliran sungai mencegah banjir", en: "water drops", my: "ရေစက် / အရည်" },
  },
  "結": {
    meanings: { id: ["mengikat", "menyimpulkan"], en: ["tie", "bind", "contract"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "ikatan simpul menyatukan dua sisi", en: "thread / connection", my: "အပ်ချည်ကြိုး / ချည်နှောင်မှု" },
  },
  "婚": {
    meanings: { id: ["pernikahan"], en: ["marriage"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "perempuan melangsungkan upacara suci", en: "woman / female", my: "အမျိုးသမီး" },
  },
  "相": {
    meanings: { id: ["saling", "menteri"], en: ["inter-", "mutual", "together"], my: ["အပြန်အလှန်", "နှစ်ဦးနှစ်ဖက်", "အတူတကွ"] },
    radicalMeaning: { id: "mata saling menatap mengamati pohon", en: "eye / vision", my: "မျက်စိ / အမြင်" },
  },
  "談": {
    meanings: { id: ["berdiskusi", "berunding"], en: ["discuss", "talk"], my: ["အဓိပ္ပာယ်", "စကားပြောသည်"] },
    radicalMeaning: { id: "kata-kata bernas menghangatkan dialog", en: "words / speech", my: "စကားလုံး / ပြောဆိုချက်" },
  },
  "紹": {
    meanings: { id: ["memperkenalkan", "menyambung"], en: ["introduce", "inherit", "help"], my: ["အဓိပ္ပာယ်", "ကူညီသည်"] },
    radicalMeaning: { id: "benang perantara menyambung silaturahmi", en: "thread / connection", my: "အပ်ချည်ကြိုး / ချည်နှောင်မှု" },
  },
  "介": {
    meanings: { id: ["perantara", "membantu"], en: ["jammed in", "shellfish", "mediate"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "orang penengah di antara dua pihak", en: "person / human", my: "လူသား" },
  },
  "環": {
    meanings: {
      id: ["lingkaran", "lingkungan"],
      en: ["ring", "circle", "loop"],
      my: ["စက်ဝိုင်း", "ပတ်ဝန်းကျင်"]
    },
    radicalMeaning: { id: "cincin giok melingkar sempurna", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "境": {
    meanings: { id: ["perbatasan", "wilayah alam"], en: ["boundary", "border", "region"], my: ["အထက် / အပေါ်", "ဖခင်"] },
    radicalMeaning: { id: "batas tanah cermin peradaban", en: "earth / ground", my: "မြေကြီး / မြေပြင်" },
  },
  "貿": {
    meanings: { id: ["perdagangan antarbangsa"], en: ["trade", "exchange"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "kerang mata uang ditukar barang luar", en: "shell / wealth / currency", my: "ခရုခွံ / ဥစ္စာဓန" },
  },
  "易": {
    meanings: { id: ["mudah", "transaksi"], en: ["easy", "ready to", "simple"], my: ["အဓိပ္ပာယ်", "ဖတ်သည်"] },
    radicalMeaning: { id: "bunglon berganti corak dengan lincah", en: "sun / day", my: "နေမင်း / နေ့ရက်" },
  },
  "輸": {
    meanings: { id: ["mengirim", "transportasi"], en: ["transport", "send", "be inferior"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "kereta roda mengangkut barang niaga", en: "vehicle / wheel", my: "ယာဉ် / ဘီး" },
  },
  "資": {
    meanings: { id: ["modal", "sumber daya"], en: ["assets", "resources", "capital"], my: ["ချထားသည်", "အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "harta kerang penunjang modal usaha", en: "shell / wealth / currency", my: "ခရုခွံ / ဥစ္စာဓန" },
  },
  "料": {
    meanings: { id: ["biaya", "bahan material"], en: ["fee", "materials"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "takaran beras membayar upah kerja", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "税": {
    meanings: { id: ["pajak cukai"], en: ["tax", "duty"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "sebagian hasil panen disetor kas negara", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "率": {
    meanings: { id: ["rasio", "memimpin"], en: ["ratio", "rate", "proportion"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "perhitungan proporsi terukur teliti", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "価": {
    meanings: { id: ["nilai", "harga taksiran"], en: ["value", "price"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "penilaian harga oleh manusia bijak", en: "person standing", my: "မတ်တပ်ရပ်နေသောလူ" },
  },
  "毎": {
    meanings: {
      id: ["setiap", "saban"],
      en: ["every"],
      my: ["နေ့တိုင်း"]
    },
    radicalMeaning: { id: "ibu melahirkan waktu rutin", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "週": {
    meanings: { id: ["minggu", "sepekan"], en: ["week"], my: ["အပတ် / ရက်သတ္တပတ်", "ရက်သတ္တပတ်"] },
    radicalMeaning: { id: "siklus perputaran tujuh hari", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "花": {
    meanings: { id: ["bunga"], en: ["flower"], my: ["ပန်းပွင့်"] },
    radicalMeaning: { id: "tanaman mekar indah", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "魚": {
    meanings: { id: ["ikan"], en: ["fish"], my: ["ငါး"] },
    radicalMeaning: { id: "ikan bersisik di dalam air", en: "fish", my: "ငါး" },
  },
  "外": {
    meanings: { id: ["luar", "asing"], en: ["outside"], my: ["အပြင်ဘက်", "နိုင်ငံခြား"] },
    radicalMeaning: { id: "ramalan di luar dugaan", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "手": {
    meanings: { id: ["tangan"], en: ["hand"], my: ["လက်"] },
    radicalMeaning: { id: "telapak dan lima jari tangan", en: "hand", my: "လက်" },
  },
  "足": {
    meanings: {
      id: ["kaki", "mencukupi"],
      en: ["leg", "foot", "be sufficient"],
      my: ["ခြေထောက်", "လုံလောက်တယ်။"]
    },
    radicalMeaning: { id: "kaki menopang langkah tubuh", en: "foot / leg", my: "ခြေထောက်" },
  },
  "目": {
    meanings: { id: ["mata"], en: ["eye", "class", "look"], my: ["မျက်စိ"] },
    radicalMeaning: { id: "kelopak bola mata melihat", en: "eye / vision", my: "မျက်စိ / အမြင်" },
  },
  "耳": {
    meanings: { id: ["telinga"], en: ["ear"], my: ["နား"] },
    radicalMeaning: { id: "daun telinga menyimak bunyi", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "口": {
    meanings: { id: ["mulut", "pintu masuk"], en: ["mouth"], my: ["ပါးစပ်", "ဝင်ရောက်ခြင်း"] },
    radicalMeaning: { id: "rongga mulut terbuka", en: "mouth / opening", my: "ပါးစပ် / အပေါက်" },
  },
  "国": {
    meanings: { id: ["negara", "negeri"], en: ["country"], my: ["နိုင်ငံ", "တိုင်းပြည်"] },
    radicalMeaning: { id: "wilayah berbatas benteng megah", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "円": {
    meanings: { id: ["yen jepang", "lingkaran bundar"], en: ["circle", "yen", "round"], my: ["ယန်းငွေ / စက်ဝိုင်း", "စက်ဝိုင်း"] },
    radicalMeaning: { id: "lingkaran koin mata uang", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "本": {
    meanings: {
      id: ["buku", "asal-usul", "pokok"],
      en: ["book", "present", "main"],
      my: ["စာအုပ်", "မူရင်း", "ကျောင်းအုပ်"]
    },
    radicalMeaning: { id: "garis dasar akar kayu pohon", en: "tree / wood", my: "သစ်ပင် / သစ်သား" },
  },
  "大": {
    meanings: { id: ["besar"], en: ["large", "big"], my: ["ကြီးမားသော"] },
    radicalMeaning: { id: "orang merentangkan tangan luas", en: "big / great", my: "ကြီးမားသော" },
  },
  "小": {
    meanings: {
      id: ["kecil", "mungil"],
      en: ["little", "small"],
      my: ["သေးသေးလေး"]
    },
    radicalMeaning: { id: "tetesan kecil terbelah", en: "small / little", my: "သေးငယ်သော" },
  },
  "高": {
    meanings: { id: ["tinggi", "mahal"], en: ["tall", "high", "expensive"], my: ["မြင့်သော / စျေးကြီးသော", "စျေးကြီးသော"] },
    radicalMeaning: { id: "menara bertingkat menjulang", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "安": {
    meanings: {
      id: ["murah", "tenang", "aman"],
      en: ["relax", "cheap", "low"],
      my: ["စျေးပေါတယ်", "တိတ်ဆိတ်တယ်", "လုံခြုံတယ်။"]
    },
    radicalMeaning: { id: "wanita di bawah atap damai", en: "woman / female", my: "အမျိုးသမီး" },
  },
  "白": {
    meanings: {
      id: ["putih", "suci"],
      en: ["white"],
      my: ["အဖြူ", "သန့်ရှင်း"]
    },
    radicalMeaning: { id: "cahaya mentari berkilau murni", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "赤": {
    meanings: { id: ["merah"], en: ["red"], my: ["အနီရောင်"] },
    radicalMeaning: { id: "bara api menyala membara", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "新": {
    meanings: { id: ["baru", "segar"], en: ["new"], my: ["အသစ်", "လတ်ဆတ်သော"] },
    radicalMeaning: { id: "memotong kayu pohon segar", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "古": {
    meanings: {
      id: ["kuno", "lama", "tua"],
      en: ["old"],
      my: ["ရှေး", "ဟောင်း", "ဟောင်း"]
    },
    radicalMeaning: { id: "cerita turun-temurun sepuluh generasi", en: "mouth / opening", my: "ပါးစပ် / အပေါက်" },
  },
  "多": {
    meanings: {
      id: ["banyak", "melimpah"],
      en: ["many", "frequent", "much"],
      my: ["အများကြီး", "ပေါများတယ်။"]
    },
    radicalMeaning: { id: "dua potongan daging melimpah", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "少": {
    meanings: {
      id: ["sedikit", "langka"],
      en: ["few", "little"],
      my: ["ရှားတယ်", "ရှားတယ်။"]
    },
    radicalMeaning: { id: "goresan membagi sedikit", en: "small / little", my: "သေးငယ်သော" },
  },
  "入": {
    meanings: { id: ["masuk", "memasukkan"], en: ["enter", "insert"], my: ["ဝင်ရောက်ခြင်း", "ထည့်သွင်းခြင်း"] },
    radicalMeaning: { id: "aliran mengalir masuk ke dalam", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "立": {
    meanings: { id: ["berdiri", "tegak"], en: ["stand up", "rise", "set up"], my: ["မတ်တပ်ရပ်ခြင်း", "ဖြောင့်မတ်သော"] },
    radicalMeaning: { id: "orang berdiri tegak di atas bumi", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "休": {
    meanings: { id: ["istirahat", "libur"], en: ["rest", "day off", "retire"], my: ["အနားယူခြင်း", "အားလပ်ရက်"] },
    radicalMeaning: { id: "orang beristirahat di bawah pohon", en: "person / human", my: "လူသား" },
  },
  "会": {
    meanings: { id: ["bertemu", "rapat", "asosiasi"], en: ["meeting", "meet", "party"], my: ["တွေ့ဆုံခြင်း", "အစည်းအဝေး", "အသင်းအဖွဲ့"] },
    radicalMeaning: { id: "orang berkumpul di bawah atap", en: "person / human", my: "လူသား" },
  },
  "言": {
    meanings: { id: ["berkata", "ucapan"], en: ["say", "word"], my: ["ပြောဆိုခြင်း", "စကားသံ"] },
    radicalMeaning: { id: "suara perkataan dari hati dan mulut", en: "words / speech", my: "စကားလုံး / ပြောဆိုချက်" },
  },
  "帰": {
    meanings: { id: ["pulang", "kembali"], en: ["homecoming", "arrive at", "lead to"], my: ["အိမ်ပြန်ခြင်း", "ပြန်လည်ရောက်ရှိခြင်း"] },
    radicalMeaning: { id: "kembali ke tanah halaman tercinta", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "午": {
    meanings: { id: ["siang", "tengah hari"], en: ["noon", "sign of the horse", "11AM-1PM"], my: ["မွန်းတည့် / နေ့လယ်", "မွန်းတည့်ချိန်"] },
    radicalMeaning: { id: "matahari tepat di atas kepala", en: "ten / completion", my: "ဆယ် / ပြည့်စုံခြင်း" },
  },
  "何": {
    meanings: { id: ["apa", "mengapa"], en: ["what"], my: ["ဘာလဲ / အဘယ်အရာ", "အဘယ်ကြောင့်"] },
    radicalMeaning: { id: "orang membawa beban bertanya", en: "person / human", my: "လူသား" },
  },
  "同": {
    meanings: { id: ["sama", "serupa"], en: ["same", "agree", "equal"], my: ["အဓိပ္ပာယ်", "သဘောတူသည်"] },
    radicalMeaning: { id: "kesamaan suara di dalam mulut", en: "mouth / opening", my: "ပါးစပ် / အပေါက်" },
  },
  "事": {
    meanings: { id: ["hal", "perkara", "urusan"], en: ["matter", "thing", "fact"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "mencatat urusan kenegaraan", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "自": {
    meanings: { id: ["sendiri", "otomatis"], en: ["oneself"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "menunjuk hidung sendiri", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "発": {
    meanings: { id: ["berangkat", "terbit", "picu"], en: ["departure", "discharge", "publish"], my: ["အပိုင်း", "ကျွမ်းသည်", "ထုတ်ဝေသည်"] },
    radicalMeaning: { id: "kaki melangkah memicu gerakan", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "者": {
    meanings: {
      id: ["orang", "pihak"],
      en: ["someone", "person"],
      my: ["လူ", "ပါတီ"]
    },
    radicalMeaning: { id: "orang berilmu atau pelaku", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "地": {
    meanings: { id: ["tanah", "bumi", "wilayah"], en: ["ground", "earth"], my: ["မြေကြီး", "မြေပြင်", "ဖခင်"] },
    radicalMeaning: { id: "tanah lapang pembentuk bumi", en: "earth / ground", my: "မြေကြီး / မြေပြင်" },
  },
  "業": {
    meanings: { id: ["bisnis", "industri", "pekerjaan"], en: ["business", "vocation", "arts"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "papan penyangga pekerjaan kayu", en: "tree / wood", my: "သစ်ပင် / သစ်သား" },
  },
  "方": {
    meanings: { id: ["arah", "cara", "pihak orang"], en: ["direction", "person", "alternative"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "mata angin membajak sawah", en: "direction / method", my: "အရပ်မျက်နှာ / နည်းလမ်း" },
  },
  "場": {
    meanings: {
      id: ["tempat", "lokasi", "arena"],
      en: ["location", "place"],
      my: ["နေရာ", "နေရာ", "ကွင်း"]
    },
    radicalMeaning: { id: "tanah tempat berkumpul sinar matahari", en: "earth / ground", my: "မြေကြီး / မြေပြင်" },
  },
  "員": {
    meanings: { id: ["anggota", "staf", "pegawai"], en: ["employee", "member", "number"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "orang terdaftar dalam catatan bejana", en: "mouth / opening", my: "ပါးစပ် / အပေါက်" },
  },
  "開": {
    meanings: { id: ["buka", "mekar", "merintis"], en: ["open", "unfold", "unseal"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "dua tangan membuka gerbang", en: "gate / enclosure", my: "တံခါးမကြီး / ဝင်းခြံ" },
  },
  "力": {
    meanings: { id: ["tenaga", "kekuatan", "daya"], en: ["power", "strength", "strong"], my: ["အင်အား", "ခွန်အား", "သန်မာသော"] },
    radicalMeaning: { id: "otot lengan yang kuat perkasa", en: "power / strength", my: "ခွန်အား / စွမ်းအင်" },
  },
  "問": {
    meanings: { id: ["pertanyaan", "menanyakan"], en: ["question", "ask", "problem"], my: ["အဓိပ္ပာယ်", "မေးသည်"] },
    radicalMeaning: { id: "bertanya di depan pintu gerbang", en: "gate / enclosure", my: "တံခါးမကြီး / ဝင်းခြံ" },
  },
  "代": {
    meanings: { id: ["mengganti", "era", "generasi"], en: ["substitute", "change", "convert"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "orang menggantikan tugas", en: "person / human", my: "လူသား" },
  },
  "明": {
    meanings: { id: ["terang", "jelas", "cerah"], en: ["bright", "light"], my: ["တောက်ပသော", "အလင်းရောင်"] },
    radicalMeaning: { id: "matahari dan bulan bersinar terang", en: "sun / day", my: "နေမင်း / နေ့ရက်" },
  },
  "動": {
    meanings: { id: ["bergerak", "perpindahan"], en: ["move", "motion", "change"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "beban berat digerakkan dengan tenaga", en: "power / strength", my: "ခွန်အား / စွမ်းအင်" },
  },
  "京": {
    meanings: { id: ["ibu kota kerajaan"], en: ["capital", "10**16"], my: ["မိခင်"] },
    radicalMeaning: { id: "menara tinggi di ibu kota", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "通": {
    meanings: { id: ["lewat", "tembus", "bolak-balik"], en: ["traffic", "pass through", "avenue"], my: ["အဓိပ္ပာယ်", "ဖြတ်သန်းသည်"] },
    radicalMeaning: { id: "berjalan menempuh jalan tembus", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "理": {
    meanings: { id: ["alasan", "logika", "prinsip ilmu"], en: ["logic", "arrangement", "reason"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "memotong batu permata menurut uratnya", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "体": {
    meanings: { id: ["tubuh", "badan", "jasmani"], en: ["body", "substance", "object"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "orang berdiri dengan kerangka dasarnya", en: "person / human", my: "လူသား" },
  },
  "主": {
    meanings: { id: ["tuan", "utama", "pemilik"], en: ["lord", "chief", "master"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "api pelita utama di tengah rumah", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "題": {
    meanings: { id: ["judul", "topik", "pokok soal"], en: ["topic", "subject"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "pokok persoalan tertulis di dahi", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "意": {
    meanings: { id: ["maksud", "niat", "pemikiran"], en: ["idea", "mind", "heart"], my: ["အဓိပ္ပာယ်", "ကြားသည်"] },
    radicalMeaning: { id: "suara pemikiran yang terbit dari hati", en: "heart / mind", my: "နှလုံးသား / စိတ်နှလုံး" },
  },
  "不": {
    meanings: { id: ["tidak", "bukan", "tanpa"], en: ["negative", "non-", "bad"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "tunas tanaman belum menembus tanah", en: "one", my: "တစ်" },
  },
  "作": {
    meanings: { id: ["membuat", "menciptakan karya"], en: ["make", "production", "prepare"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "orang membuat perkakas", en: "person / human", my: "လူသား" },
  },
  "用": {
    meanings: { id: ["menggunakan", "urusan", "faedah"], en: ["utilize", "business", "service"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "perkakas yang dipakai bekerja", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "度": {
    meanings: { id: ["derajat", "kali", "takaran"], en: ["degrees", "occurrence", "time"], my: ["အဓိပ္ပာယ်", "အချိန်"] },
    radicalMeaning: { id: "tangan mengukur panjang ruangan", en: "spacious hall / shelter", my: "ကျယ်ဝန်းသောအိမ် / အမိုးခိုစရာ" },
  },
  "公": {
    meanings: { id: ["umum", "publik", "resmi"], en: ["public", "prince", "official"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "membagi terbuka kepada publik", en: "eight / divide", my: "ရှစ် / ခွဲခြမ်းခြင်း" },
  },
  "持": {
    meanings: { id: ["memegang", "memiliki", "membawa"], en: ["hold", "have"], my: ["ကိုင်တွယ်သည်", "အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "tangan memegang dupa di kuil", en: "hand", my: "လက်" },
  },
  "野": {
    meanings: {
      id: ["lapangan", "ladang liar"],
      en: ["plains", "field", "rustic"],
      my: ["လယ်ကွင်း", "တောလယ်"]
    },
    radicalMeaning: { id: "daerah pedesaan luas terbuka", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "以": {
    meanings: { id: ["dengan", "mulai dari", "karena"], en: ["by means of", "because", "in view of"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "menggunakan bajak sebagai patokan", en: "person / human", my: "လူသား" },
  },
  "思": {
    meanings: { id: ["berpikir", "mengira", "rindu"], en: ["think"], my: ["တွေးတောသည်"] },
    radicalMeaning: { id: "otak kepala tersambung dengan hati", en: "heart / mind", my: "နှလုံးသား / စိတ်နှလုံး" },
  },
  "家": {
    meanings: { id: ["rumah", "keluarga", "pakar"], en: ["house", "home", "family"], my: ["အိမ်", "အဓိပ္ပာယ်", "မိသားစု"] },
    radicalMeaning: { id: "babi peliharaan di bawah atap rumah", en: "roof / house", my: "အမိုး / အိမ်ခေါင်မိုး" },
  },
  "世": {
    meanings: { id: ["dunia", "zaman", "generasi"], en: ["generation", "world", "society"], my: ["အဓိပ္ပာယ်", "ကမ္ဘာ"] },
    radicalMeaning: { id: "tiga puluh tahun generasi keturunan", en: "one", my: "တစ်" },
  },
  "院": {
    meanings: { id: ["lembaga", "institusi", "asrama"], en: ["Inst.", "institution", "temple"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "dinding mengitari gedung pengadilan", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "心": {
    meanings: { id: ["hati", "batin", "jantung"], en: ["heart", "mind", "spirit"], my: ["ကြားသည်", "အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "bentuk jantung manusia pemancar rasa", en: "heart / mind", my: "နှလုံးသား / စိတ်နှလုံး" },
  },
  "界": {
    meanings: { id: ["dunia", "batas", "lingkungan"], en: ["world", "boundary"], my: ["ကမ္ဘာ", "အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "patok batas pemisah petak sawah", en: "rice field", my: "လယ်ကွင်း" },
  },
  "教": {
    meanings: { id: ["mengajar", "mendidik", "ajaran"], en: ["teach", "faith", "doctrine"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "anak meniru bimbingan tongkat guru", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "文": {
    meanings: {
      id: ["kalimat", "naskah", "kesusastraan"],
      en: ["sentence", "literature", "style"],
      my: ["ဝါကျ", "ဇာတ်ညွှန်း", "စာပေ"]
    },
    radicalMeaning: { id: "pola rajahan motif bermakna tulisan", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "元": {
    meanings: {
      id: ["asal", "pokok", "mantan", "awal"],
      en: ["beginning", "former time", "origin"],
      my: ["မူလ", "ကျောင်းအုပ်", "ယခင်"]
    },
    radicalMeaning: { id: "kepala manusia sebagai sumber permulaan", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "近": {
    meanings: { id: ["dekat", "akrab"], en: ["near", "early", "akin"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "berjalan dengan kapak jarak dekat", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "考": {
    meanings: { id: ["memikirkan", "mempertimbangkan"], en: ["consider", "think over"], my: ["အဓိပ္ပာယ်", "တွေးတောသည်"] },
    radicalMeaning: { id: "orang tua bertongkat menimbang hikmah", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "売": {
    meanings: { id: ["menjual", "memasarkan"], en: ["sell"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "menjual barang keluar untuk uang", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "集": {
    meanings: { id: ["berkumpul", "mengoleksi"], en: ["gather", "meet", "congregate"], my: ["အဓိပ္ပာယ်", "တွေ့ဆုံသည်"] },
    radicalMeaning: { id: "burung berkumpul di atas ranting pohon", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "物": {
    meanings: { id: ["benda", "barang", "materi"], en: ["thing", "object", "matter"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "sapi aneka ragam warna bendanya", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "使": {
    meanings: { id: ["menggunakan", "pesuruh"], en: ["use", "send on a mission", "order"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "petugas utusan yang mengurus tugas", en: "person / human", my: "လူသား" },
  },
  "品": {
    meanings: { id: ["barang", "komoditas", "martabat"], en: ["goods", "refinement", "dignity"], my: ["သွားသည်", "အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "tiga wadah barang berjejer rapi", en: "mouth / opening", my: "ပါးစပ် / အပေါက်" },
  },
  "計": {
    meanings: { id: ["mengukur", "rencana", "hitung"], en: ["plot", "plan", "scheme"], my: ["အဓိပ္ပာယ်", "အစီအစဉ်"] },
    radicalMeaning: { id: "kata-kata disusun berhitung sepuluh", en: "words / speech", my: "စကားလုံး / ပြောဆိုချက်" },
  },
  "死": {
    meanings: { id: ["mati", "tewas", "wafat"], en: ["death", "die"], my: ["စားသည်", "သေဆုံးသည်"] },
    radicalMeaning: { id: "tulang jenazah orang berlutut berduka", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "特": {
    meanings: { id: ["khusus", "istimewa"], en: ["special"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "sapi jantan pilihan yang luar biasa", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "私": {
    meanings: { id: ["saya", "pribadi", "rahasia"], en: ["private", "I", "me"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "bulir padi untuk konsumsi sendiri", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "始": {
    meanings: { id: ["mulai", "mengawali"], en: ["commence", "begin"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "wanita melahirkan awal kehidupan baru", en: "woman / female", my: "အမျိုးသမီး" },
  },
  "朝": {
    meanings: { id: ["pagi", "dinasti"], en: ["morning", "dynasty", "regime"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "matahari pagi terbit di antara rumput", en: "moon / flesh / time", my: "လမင်း / ခန္ဓာကိုယ်အသား / အချိန်" },
  },
  "運": {
    meanings: { id: ["mengangkut", "nasib", "gerak"], en: ["carry", "luck", "destiny"], my: ["ကား", "အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "roda kereta berputar mengantar takdir", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "終": {
    meanings: { id: ["berakhir", "tuntas", "selesai"], en: ["end", "finish"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "ikatan benang diikat simpul penutup", en: "thread / connection", my: "အပ်ချည်ကြိုး / ချည်နှောင်မှု" },
  },
  "台": {
    meanings: { id: ["landasan", "panggung", "mesin"], en: ["pedestal", "a stand", "counter for machines and vehicles"], my: ["အဓိပ္ပာယ်", "ယာဉ်"] },
    radicalMeaning: { id: "meja landasan menaruh perkakas", en: "mouth / opening", my: "ပါးစပ် / အပေါက်" },
  },
  "広": {
    meanings: { id: ["luas", "lapang", "membentang"], en: ["wide", "broad", "spacious"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "ruangan dalam rumah sangat lapang", en: "spacious hall / shelter", my: "ကျယ်ဝန်းသောအိမ် / အမိုးခိုစရာ" },
  },
  "住": {
    meanings: { id: ["tinggal", "menghuni", "menetap"], en: ["dwell", "reside", "live"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "orang menetap menyalakan pelita", en: "person / human", my: "လူသား" },
  },
  "有": {
    meanings: { id: ["ada", "memiliki", "berada"], en: ["possess", "have", "exist"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "tangan memegang sepotong daging", en: "moon / flesh / time", my: "လမင်း / ခန္ဓာကိုယ်အသား / အချိန်" },
  },
  "町": {
    meanings: { id: ["kota kecil", "distrik wilayah"], en: ["town", "village", "block"], my: ["သေးငယ်သော", "ဖခင်"] },
    radicalMeaning: { id: "petak sawah terhubung dengan jalan kota", en: "rice field", my: "လယ်ကွင်း" },
  },
  "工": {
    meanings: { id: ["pertukangan", "teknik", "pabrik"], en: ["craft", "construction", "katakana e radical (no. 48)"], my: ["အဓိပ္ပာယ်", "အရင်းခံ"] },
    radicalMeaning: { id: "alat siku-siku tukang kayu presisi", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "建": {
    meanings: { id: ["membangun", "mendirikan"], en: ["build"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "mengukur rancangan gedung sebelum berdiri", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "急": {
    meanings: { id: ["cepat", "mendadak", "genting"], en: ["hurry", "emergency", "sudden"], my: ["အလျင်စလိုလုပ်သည်", "အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "hati terdesak harus bergerak segera", en: "heart / mind", my: "နှလုံးသား / စိတ်နှလုံး" },
  },
  "送": {
    meanings: { id: ["mengirim", "mengantar"], en: ["escort", "send"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "berjalan mengantar orang membawa bekal", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "切": {
    meanings: { id: ["memotong", "mendesak"], en: ["cut", "cutoff", "be sharp"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "pisau membelah benda menjadi dua", en: "knife / sword", my: "ဓား / လက်နက်" },
  },
  "転": {
    meanings: { id: ["berguling", "berputar", "jatuh"], en: ["revolve", "turn around", "change"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "roda kereta berputar di jalan menurun", en: "vehicle / wheel", my: "ယာဉ် / ဘီး" },
  },
  "研": {
    meanings: { id: ["mengasah", "mengkaji"], en: ["polish", "study of", "sharpen"], my: ["အဓိပ္ပာယ်", "လေ့လာသည်"] },
    radicalMeaning: { id: "batu dipakai mengasah pisau hingga tajam", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "究": {
    meanings: { id: ["menyelidiki", "mendalami"], en: ["research", "study"], my: ["ရှာဖွေသည်", "လေ့လာသည်"] },
    radicalMeaning: { id: "memasuki gua hingga ke ujung paling dalam", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "起": {
    meanings: { id: ["bangun", "bangkit", "memicu"], en: ["rouse", "wake up", "get up"], my: ["အဓိပ္ပာယ်", "အပေါ်"] },
    radicalMeaning: { id: "berlari bangkit dari tempat pembaringan", en: "run", my: "ပြေးလွှားခြင်း" },
  },
  "着": {
    meanings: { id: ["memakai baju", "tiba", "sampai"], en: ["don", "arrive", "wear"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "memakai mantel wol hingga ke badan", en: "eye / vision", my: "မျက်စိ / အမြင်" },
  },
  "病": {
    meanings: { id: ["sakit", "penyakit"], en: ["ill", "sick"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "orang berbaring di dipan menderita demam", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "質": {
    meanings: { id: ["kualitas", "hakikat", "sifat"], en: ["substance", "quality", "matter"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "dua kapak menakar mutu kerang uang", en: "shell / wealth / currency", my: "ခရုခွံ / ဥစ္စာဓန" },
  },
  "待": {
    meanings: { id: ["menunggu", "menanti"], en: ["wait", "depend on"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "berhenti di pinggir jalan menanti kawan", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "試": {
    meanings: { id: ["mencoba", "menguji"], en: ["test", "try", "attempt"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "kata-kata ditimbang sebelum diujikan", en: "words / speech", my: "စကားလုံး / ပြောဆိုချက်" },
  },
  "族": {
    meanings: { id: ["suku", "marga", "keluarga"], en: ["tribe", "family"], my: ["မျိုးနွယ်စု", "မိသားစု"] },
    radicalMeaning: { id: "panah di bawah bendera mempersatukan klan", en: "direction / method", my: "အရပ်မျက်နှာ / နည်းလမ်း" },
  },
  "銀": {
    meanings: { id: ["perak", "logam putih berkilau"], en: ["silver"], my: ["ငွေ"] },
    radicalMeaning: { id: "logam keras berkilau putih", en: "metal / gold / money", my: "သတ္တု / ရွှေ / ငွေကြေး" },
  },
  "早": {
    meanings: { id: ["pagi", "cepat", "dini"], en: ["early", "fast"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "matahari pagi baru muncul di atas pohon", en: "sun / day", my: "နေမင်း / နေ့ရက်" },
  },
  "親": {
    meanings: {
      id: ["orang tua", "akrab", "dekat"],
      en: ["parent", "intimacy", "relative"],
      my: ["မိဘများ", "ရင်းနှီးသူများ"]
    },
    radicalMeaning: { id: "orang tua berdiri di pohon mengawasi anak", en: "to see / observe", my: "ကြည့်ရှုခြင်း" },
  },
  "頭": {
    meanings: { id: ["kepala", "pemimpin"], en: ["head", "counter for large animals"], my: ["အဓိပ္ပာယ်", "ကြီးမားသော"] },
    radicalMeaning: { id: "bejana makanan di atas kepala tegak", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "英": {
    meanings: { id: ["unggul", "Inggris", "cemerlang"], en: ["England", "English", "hero"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "bunga yang paling mekar merekah indah", en: "grass / plants", my: "မြက် / အပင်ငယ်" },
  },
  "医": {
    meanings: { id: ["medis", "dokter", "pengobatan"], en: ["doctor", "medicine"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "kotak obat dan panah penyembuh luka", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "仕": {
    meanings: { id: ["melayani", "bertugas"], en: ["attend", "doing", "official"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "orang berbakti menjadi pelayan negeri", en: "person / human", my: "လူသား" },
  },
  "去": {
    meanings: { id: ["berlalu", "pergi", "masa lalu"], en: ["gone", "past", "quit"], my: ["သွားသည်", "အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "orang melangkah meninggalkan lubang rumah", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "味": {
    meanings: { id: ["rasa", "bumbu", "selera"], en: ["flavor", "taste"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "mencicipi pohon belum berbuah lebat", en: "mouth / opening", my: "ပါးစပ် / အပေါက်" },
  },
  "字": {
    meanings: { id: ["huruf", "aksara", "nama"], en: ["character", "letter", "word"], my: ["ကျွမ်းသည်", "အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "anak dibina di bawah atap mengenal huruf", en: "child", my: "ကလေး / သားသမီး" },
  },
  "答": {
    meanings: { id: ["jawaban", "membalas"], en: ["solution", "answer"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "bilah bambu dicocokkan sesuai pasangan", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "夜": {
    meanings: { id: ["malam", "petang gulita"], en: ["night", "evening"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "orang berdiri di bawah bulan malam hari", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "注": {
    meanings: {
      id: ["menuang", "fokus", "menyiram"],
      en: ["pour", "irrigate", "shed (tears)"],
      my: ["လောင်းခြင်း", "စူးစိုက်ခြင်း", "ရေလောင်းခြင်း။"]
    },
    radicalMeaning: { id: "aliran air dituangkan ke dalam pelita", en: "water", my: "ရေ" },
  },
  "歌": {
    meanings: { id: ["lagu", "bernyanyi"], en: ["song", "sing"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "mulut terbuka lebar mendendangkan syair", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "悪": {
    meanings: { id: ["buruk", "jahat", "keji"], en: ["bad", "vice", "rascal"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "hati tertekan merasa cemas dan bersalah", en: "heart / mind", my: "နှလုံးသား / စိတ်နှလုံး" },
  },
  "図": {
    meanings: { id: ["peta", "gambar denah", "bagan"], en: ["map", "drawing", "plan"], my: ["အဓိပ္ပာယ်", "အစီအစဉ်"] },
    radicalMeaning: { id: "denah tata ruang tertera di dalam pagar", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "室": {
    meanings: {
      id: ["ruangan", "kamar"],
      en: ["room", "apartment", "chamber"],
      my: ["အခန်း", "အခန်း"]
    },
    radicalMeaning: { id: "anak panah mendarat pas di dalam kamar", en: "roof / house", my: "အမိုး / အိမ်ခေါင်မိုး" },
  },
  "風": {
    meanings: { id: ["angin", "suasana", "kebiasaan"], en: ["wind", "air", "style"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "angin berhembus membangkitkan ulat serangga", en: "wind", my: "လေ" },
  },
  "紙": {
    meanings: { id: ["kertas", "lembaran"], en: ["paper"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "serat benang dihaluskan menjadi lembaran", en: "thread / connection", my: "အပ်ချည်ကြိုး / ချည်နှောင်မှု" },
  },
  "黒": {
    meanings: { id: ["hitam", "gelap"], en: ["black"], my: ["ချို့တဲ့သည်"] },
    radicalMeaning: { id: "asap jelaga membumbung di atas perapian", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "青": {
    meanings: { id: ["biru", "hijau", "muda belia"], en: ["blue", "green"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "tunas segar menyerap zat bumi berwarna biru", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "館": {
    meanings: { id: ["gedung umum", "paviliun"], en: ["building", "mansion", "large building"], my: ["အဓိပ္ပာယ်", "ကြီးမားသော"] },
    radicalMeaning: { id: "rumah besar tempat menjamu makan tamu", en: "food / eating", my: "အစားအစာ / စားသုံးခြင်း" },
  },
  "色": {
    meanings: { id: ["warna", "daya pikat"], en: ["color"], my: ["အရောင်"] },
    radicalMeaning: { id: "dua orang saling berpadu ekspresi muka", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "走": {
    meanings: { id: ["berlari", "meluncur cepat"], en: ["run"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "orang membungkuk mengayunkan kaki kencang", en: "run", my: "ပြေးလွှားခြင်း" },
  },
  "飯": {
    meanings: { id: ["nasi", "makanan santapan"], en: ["meal", "boiled rice"], my: ["အဓိပ္ပာယ်", "ပြုတ်သည်"] },
    radicalMeaning: { id: "makanan dari bulir beras dimasak hangat", en: "food / eating", my: "အစားအစာ / စားသုံးခြင်း" },
  },
  "肉": {
    meanings: { id: ["daging", "otot badan"], en: ["meat"], my: ["စားသည်"] },
    radicalMeaning: { id: "irisan urat daging bergaris segar", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "貸": {
    meanings: {
      id: ["meminjamkan", "menyewakan"],
      en: ["lend"],
      my: ["ငှား", "ငှား"]
    },
    radicalMeaning: { id: "uang kerang diberikan sementara waktu", en: "shell / wealth / currency", my: "ခရုခွံ / ဥစ္စာဓန" },
  },
  "借": {
    meanings: {
      id: ["meminjam", "berhutang"],
      en: ["borrow", "rent"],
      my: ["ချေး", "ပေးမယ်။"]
    },
    radicalMeaning: { id: "orang meminjam barang masa lalu", en: "person / human", my: "လူသား" },
  },
  "服": {
    meanings: { id: ["pakaian", "busana", "mematuhi"], en: ["clothing", "admit", "obey"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "tangan mengenakan pakaian pada tubuh", en: "moon / flesh / time", my: "လမင်း / ခန္ဓာကိုယ်အသား / အချိန်" },
  },
  "夕": {
    meanings: { id: ["senja", "petang hari"], en: ["evening"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "bulan sabit mulai tampak di ufuk barat", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "犬": {
    meanings: { id: ["anjing", "peliharaan setia"], en: ["dog"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "anjing berdiri memasang telinga awas", en: "dog / animal", my: "ခွေး / တိရစ္ဆာန်" },
  },
  "鳥": {
    meanings: { id: ["burung", "unggas bersayap"], en: ["bird", "chicken"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "burung berkepala bulu dan berekor panjang", en: "bird", my: "ငှက်" },
  },
  "弟": {
    meanings: { id: ["adik laki-laki"], en: ["younger brother", "faithful service to elders"], my: ["ယောက်ျား"] },
    radicalMeaning: { id: "tali terikat melilit busur yang lentur", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "妹": {
    meanings: { id: ["adik perempuan"], en: ["younger sister"], my: ["မိန်းမ"] },
    radicalMeaning: { id: "gadis muda pohonnya belum mekar penuh", en: "woman / female", my: "အမျိုးသမီး" },
  },
  "姉": {
    meanings: { id: ["kakak perempuan"], en: ["elder sister"], my: ["မိန်းမ"] },
    radicalMeaning: { id: "wanita berdiri memimpin sembahyang pasar", en: "woman / female", my: "အမျိုးသမီး" },
  },
  "兄": {
    meanings: { id: ["kakak laki-laki"], en: ["elder brother", "big brother"], my: ["ယောက်ျား"] },
    radicalMeaning: { id: "anak sulung berbicara memimpin doa keluarga", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "茶": {
    meanings: { id: ["teh", "daun teh seduh"], en: ["tea"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "daun semak diolah menjadi minuman nikmat", en: "grass / plants", my: "မြက် / အပင်ငယ်" },
  },
  "昼": {
    meanings: { id: ["siang", "tengah hari terang"], en: ["daytime", "noon"], my: ["မွန်းတည့် / နေ့လယ်", "နေ့ရက်"] },
    radicalMeaning: { id: "matahari bersinar menerangi seluruh batas", en: "sun / day", my: "နေမင်း / နေ့ရက်" },
  },
  "牛": {
    meanings: {
      id: ["sapi", "lembu perah"],
      en: ["cow"],
      my: ["နွား", "နို့စားနွား"]
    },
    radicalMeaning: { id: "kepala sapi dengan sepasang tanduk melengkung", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "軽": {
    meanings: { id: ["ringan", "enteng", "gesit"], en: ["lightly", "trifling", "unimportant"], my: ["အလင်းရောင်", "အဓိပ္ပာယ်", "အရေးကြီးသော"] },
    radicalMeaning: { id: "gerobak ringan melaju cepat di jalan", en: "vehicle / wheel", my: "ယာဉ် / ဘီး" },
  },
  "寒": {
    meanings: { id: ["dingin", "beku membeku"], en: ["cold"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "orang di gubuk berselimut jerami kedinginan", en: "roof / house", my: "အမိုး / အိမ်ခေါင်မိုး" },
  },
  "暗": {
    meanings: { id: ["gelap", "suram", "samar"], en: ["darkness", "disappear", "shade"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "matahari tertutup suara bising petir", en: "sun / day", my: "နေမင်း / နေ့ရက်" },
  },
  "首": {
    meanings: { id: ["leher", "kepala jabatan"], en: ["neck", "counter for songs and poems"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "kepala dengan rambut dan garis leher tegak", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "洗": {
    meanings: { id: ["mencuci", "membilas bersih"], en: ["wash", "inquire into", "probe"], my: ["အဓိပ္ပာယ်", "အတွင်းသို့"] },
    radicalMeaning: { id: "aliran air mengalir membasuh kedua kaki", en: "water", my: "ရေ" },
  },
  "洋": {
    meanings: { id: ["samudra", "gaya barat luas"], en: ["ocean", "sea", "foreign"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "domba berlayar menyeberangi lautan samudra", en: "water", my: "ရေ" },
  },
  "遠": {
    meanings: { id: ["jauh", "masa silam"], en: ["distant", "far"], my: ["ဝေးကွာသော", "ဝေးသော"] },
    radicalMeaning: { id: "berjalan menempuh perjalanan mengitari batas", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "堂": {
    meanings: { id: ["aula gedung pertemuan"], en: ["public chamber", "hall"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "gedung megah beralaskan fondasi tanah kokoh", en: "earth / ground", my: "မြေကြီး / မြေပြင်" },
  },
  "園": {
    meanings: { id: ["kebun", "taman", "pelataran"], en: ["park", "garden", "yard"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "pekarangan indah dipagari tanaman bunga", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "雪": {
    meanings: { id: ["salju", "butiran putih dingin"], en: ["snow"], my: ["ယခု"] },
    radicalMeaning: { id: "hujan beku yang bisa disapu dengan sapu tangan", en: "rain / sky weather", my: "မိုးရေ / မိုးလေဝသ" },
  },
  "太": {
    meanings: { id: ["gemuk", "tebal", "agung"], en: ["plump", "thick", "big around"], my: ["အဓိပ္ပာယ်", "ကြီးသော"] },
    radicalMeaning: { id: "orang besar dengan kelebihan isi bobot", en: "big / great", my: "ကြီးမားသော" },
  },
  "池": {
    meanings: { id: ["kolam penampungan air"], en: ["pond", "cistern", "pool"], my: ["ခြောက်"] },
    radicalMeaning: { id: "aliran air tertampung tenang di lekukan tanah", en: "water", my: "ရေ" },
  },
  "林": {
    meanings: { id: ["hutan kecil", "rumpun pohon"], en: ["grove", "forest"], my: ["သေးငယ်သော", "သစ်ပင်"] },
    radicalMeaning: { id: "dua batang pohon tumbuh berdampingan", en: "tree / wood", my: "သစ်ပင် / သစ်သား" },
  },
  "森": {
    meanings: { id: ["hutan lebat", "rimbun pepohonan"], en: ["forest", "woods"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "tiga pohon rimbun membentang lebat menyejukkan", en: "tree / wood", my: "သစ်ပင် / သစ်သား" },
  },
  "協": {
    meanings: { id: ["kerja sama", "gotong royong"], en: ["co-", "cooperation"], my: ["ပူးတွဲ", "ပူးပေါင်းဆောင်ရွက်မှု"] },
    radicalMeaning: { id: "tiga tenaga bersatu mencapai tujuan bersama", en: "ten / completion", my: "ဆယ် / ပြည့်စုံခြင်း" },
  },
  "個": {
    meanings: { id: ["individu", "butir benda"], en: ["individual", "counter for articles"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "orang berdiri di dalam bilik pribadinya", en: "person / human", my: "လူသား" },
  },
  "統": {
    meanings: { id: ["menyatukan", "memerintah"], en: ["overall", "relationship", "ruling"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "benang dipintal mengendalikan banyak urusan", en: "thread / connection", my: "အပ်ချည်ကြိုး / ချည်နှောင်မှု" },
  },
  "保": {
    meanings: { id: ["menjaga", "melindungi", "garansi"], en: ["protect", "guarantee", "keep"], my: ["စောင့်ရှောက်သည်", "အဓိပ္ပာယ်", "ထိန်းသိမ်းသည်"] },
    radicalMeaning: { id: "orang tua mendekap melindungi anaknya", en: "person / human", my: "လူသား" },
  },
  "存": {
    meanings: { id: ["ada", "melestarikan", "eksis"], en: ["exist", "suppose", "be aware of"], my: ["အဓိပ္ပာယ်", "အပေါ်"] },
    radicalMeaning: { id: "anak diasuh dengan penuh kasih sayang", en: "child", my: "ကလေး / သားသမီး" },
  },
  "議": {
    meanings: { id: ["musyawarah", "sidang", "usul"], en: ["deliberation", "consultation", "debate"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "kata-kata diucapkan adil membela kebenaran", en: "words / speech", my: "စကားလုံး / ပြောဆိုချက်" },
  },
  "選": {
    meanings: { id: ["memilih", "menyaring"], en: ["elect", "select", "choose"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "berjalan teliti menyaring calon yang pantas", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "現": {
    meanings: { id: ["muncul", "nyata", "saat ini"], en: ["present", "existing", "actual"], my: ["လက်ရှိ", "အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "batu giok digosok berkilau tampak jelas", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "認": {
    meanings: { id: ["mengakui", "membenarkan"], en: ["acknowledge", "witness", "discern"], my: ["သိရှိသည်", "အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "kata-kata pisau ketabahan diakui dalam hati", en: "words / speech", my: "စကားလုံး / ပြောဆိုချက်" },
  },
  "局": {
    meanings: { id: ["biro", "dinas", "bagian kantor"], en: ["bureau", "board", "office"], my: ["ဌာန", "အဓိပ္ပာယ်", "ရုံး"] },
    radicalMeaning: { id: "papan sekat membagi ruangan kantor", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "調": {
    meanings: { id: ["menyelidiki", "nada irama"], en: ["tune", "tone", "meter"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "kata-kata diatur selaras memeriksa urusan", en: "words / speech", my: "စကားလုံး / ပြောဆိုချက်" },
  },
  "査": {
    meanings: { id: ["memeriksa", "meneliti berkas"], en: ["investigate"], my: ["စုံစမ်းစစ်ဆေးသည်"] },
    radicalMeaning: { id: "memeriksa catatan kayu di atas meja", en: "tree / wood", my: "သစ်ပင် / သစ်သား" },
  },
  "表": {
    meanings: { id: ["permukaan", "tabel", "menyatakan"], en: ["surface", "table", "chart"], my: ["အဓိပ္ပာယ်", "ကျွမ်းသည်"] },
    radicalMeaning: { id: "bagian luar mantel bulu yang terlihat", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "示": {
    meanings: { id: ["menunjukkan", "memamerkan"], en: ["show", "indicate", "point out"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "meja altar memancarkan berkah dari langit", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "規": {
    meanings: { id: ["aturan", "standar ukuran"], en: ["standard", "measure"], my: ["အဓိပ္ပာယ်", "အတိုင်းအတာ"] },
    radicalMeaning: { id: "jangka pengukur dilihat dengan mata teliti", en: "to see / observe", my: "ကြည့်ရှုခြင်း" },
  },
  "則": {
    meanings: { id: ["kaidah", "hukum dasar"], en: ["rule", "law", "follow"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "pisau mengukir hukum di atas bejana kerang", en: "knife / sword", my: "ဓား / လက်နက်" },
  },
  "制": {
    meanings: {
      id: ["mengendalikan", "sistem"],
      en: ["system", "law", "rule"],
      my: ["ထိန်းချုပ်မှု", "စနစ်"]
    },
    radicalMeaning: { id: "pisau memangkas dahan mengatur bentuk", en: "knife / sword", my: "ဓား / လက်နက်" },
  },
  "式": {
    meanings: { id: ["upacara", "rumus pola"], en: ["style", "ceremony", "rite"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "tongkat pematuk menjadi pedoman upacara", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "基": {
    meanings: { id: ["fondasi", "landasan dasar"], en: ["fundamentals", "radical (chem)", "counter for machines"], my: ["အဓိပ္ပာယ်", "အရင်းခံ"] },
    radicalMeaning: { id: "fondasi keranjang anyaman di atas tanah", en: "earth / ground", my: "မြေကြီး / မြေပြင်" },
  },
  "設": {
    meanings: {
      id: ["mendirikan", "merancang"],
      en: ["establishment", "provision", "prepare"],
      my: ["တည်ထောင်", "ဒီဇိုင်း"]
    },
    radicalMeaning: { id: "kata-kata instruksi memasang perlengkapan", en: "words / speech", my: "စကားလုံး / ပြောဆိုချက်" },
  },
  "類": {
    meanings: { id: ["jenis", "golongan ragam"], en: ["sort", "kind", "variety"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "kepala menimbang jenis bulir beras", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "増": {
    meanings: { id: ["bertambah", "melipatgandakan"], en: ["increase", "add", "augment"], my: ["လွယ်ကူစေသည်", "အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "tanah ditumpuk bertambah tinggi", en: "earth / ground", my: "မြေကြီး / မြေပြင်" },
  },
  "減": {
    meanings: { id: ["berkurang", "menyusut"], en: ["dwindle", "decrease", "reduce"], my: ["အဓိပ္ပာယ်", "လွယ်ကူစေသည်"] },
    radicalMeaning: { id: "air sungai menyusut terkena tombak kemarau", en: "water", my: "ရေ" },
  },
  "容": {
    meanings: { id: ["memuat", "isi wadah", "rupa"], en: ["contain", "form", "looks"], my: ["အဓိပ္ပာယ်", "ကြည့်သည်"] },
    radicalMeaning: { id: "lembah lapang di bawah atap menampung isi", en: "roof / house", my: "အမိုး / အိမ်ခေါင်မိုး" },
  },
  "移": {
    meanings: { id: ["pindah", "bergeser", "menular"], en: ["shift", "move", "change"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "bibit padi dipindahkan ke petak lain", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "投": {
    meanings: { id: ["melempar", "menanam modal"], en: ["throw", "discard", "abandon"], my: ["အဓိပ္ပာယ်", "ကား"] },
    radicalMeaning: { id: "tangan melempar tombak ke sasaran", en: "hand", my: "လက်" },
  },
  "授": {
    meanings: {
      id: ["memberikan", "menganugerahkan"],
      en: ["impart", "instruct", "grant"],
      my: ["ပေး", "ပေး"]
    },
    radicalMeaning: { id: "tangan menyerahkan tanda penghargaan", en: "hand", my: "လက်" },
  },
  "責": {
    meanings: { id: ["tanggung jawab", "menyalahkan"], en: ["blame", "condemn", "censure"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "menuntut pelunasan utang uang kerang", en: "shell / wealth / currency", my: "ခရုခွံ / ဥစ္စာဓန" },
  },
  "任": {
    meanings: { id: ["tugas", "jabatan", "mempercayakan"], en: ["responsibility", "duty", "term"], my: ["အဓိပ္ပာယ်", "သက်တမ်း"] },
    radicalMeaning: { id: "orang memikul beban tugas di pundak", en: "person / human", my: "လူသား" },
  },
  "状": {
    meanings: { id: ["keadaan", "bentuk wujud"], en: ["status quo", "conditions", "circumstances"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "anjing besar memperlihatkan rupa fisiknya", en: "dog / animal", my: "ခွေး / တိရစ္ဆာန်" },
  },
  "態": {
    meanings: { id: ["sikap", "gelagat tingkah"], en: ["attitude", "condition", "figure"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "hati beruang memperlihatkan sikap waspada", en: "heart / mind", my: "နှလုံးသား / စိတ်နှလုံး" },
  },
  "覚": {
    meanings: { id: ["sadar", "bangun", "mengingat"], en: ["memorize", "learn", "remember"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "mata melihat jelas menyadari keadaan", en: "to see / observe", my: "ကြည့်ရှုခြင်း" },
  },
  "悟": {
    meanings: { id: ["memahami", "menyadari hikmah"], en: ["enlightenment", "perceive", "discern"], my: ["အလင်းရောင်", "အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "hati saya terbuka mencapai pencerahan", en: "heart / mind", my: "နှလုံးသား / စိတ်နှလုံး" },
  },
  "迎": {
    meanings: { id: ["menyambut", "menjemput"], en: ["welcome", "meet", "greet"], my: ["လာသည်", "တွေ့ဆုံသည်", "အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "berjalan ke depan menyambut kedatangan tamu", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "追": {
    meanings: { id: ["mengejar", "menyusul"], en: ["chase", "drive away", "follow"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "kaki melangkah gesit mengejar musuh", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "越": {
    meanings: { id: ["melewati", "melintasi batas"], en: ["surpass", "cross over", "move to"], my: ["သာလွန်သည်", "ဖြတ်ကျော်သည်", "အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "berlari kencang melompati senjata pembatas", en: "run", my: "ပြေးလွှားခြင်း" },
  },
  "抜": {
    meanings: { id: ["mencabut", "meloloskan diri"], en: ["slip out", "extract", "pull out"], my: ["အဓိပ္ပာယ်", "ထုတ်ယူသည်", "ဆွဲထုတ်သည်"] },
    radicalMeaning: { id: "tangan menarik mencabut duri yang menancap", en: "hand", my: "လက်" },
  },
  "届": {
    meanings: {
      id: ["menyampaikan", "laporan tiba"],
      en: ["deliver", "reach", "arrive"],
      my: ["ပို့တယ်", "အစီရင်ခံစာရောက်လာတယ်။"]
    },
    radicalMeaning: { id: "membawa surat laporan masuk ke ruangan", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "渡": {
    meanings: { id: ["menyeberang", "menyerahkan"], en: ["transit", "ford", "ferry"], my: ["အဓိပ္ပာယ်", "မှားယွင်းသည်"] },
    radicalMeaning: { id: "menyeberangi sungai dengan rakit air", en: "water", my: "ရေ" },
  },
  "寄": {
    meanings: { id: ["mampir", "bersandar", "menitipkan"], en: ["draw near", "stop in", "bring near"], my: ["အဓိပ္ပာယ်", "ရပ်တန့်သည်"] },
    radicalMeaning: { id: "mampir berteduh di rumah orang lain", en: "roof / house", my: "အမိုး / အိမ်ခေါင်မိုး" },
  },
  "招": {
    meanings: { id: ["mengundang", "memanggil"], en: ["beckon", "invite", "summon"], my: ["ခေါ်ယူသည်", "ဖိတ်ခေါ်သည်", "ဆင့်ခေါ်သည်"] },
    radicalMeaning: { id: "tangan memanggil orang untuk berkumpul", en: "hand", my: "လက်" },
  },
  "訪": {
    meanings: { id: ["mengunjungi", "bertandang"], en: ["call on", "visit", "look up"], my: ["ခေါ်သည်", "အဓိပ္ပာယ်", "အပေါ်"] },
    radicalMeaning: { id: "kata-kata salam saat mengunjungi rumah", en: "words / speech", my: "စကားလုံး / ပြောဆိုချက်" },
  },
  "伺": {
    meanings: { id: ["bertamu", "menanyakan kabar"], en: ["pay respects", "visit", "ask"], my: ["ရိုသေသည်", "အဓိပ္ပာယ်", "မေးသည်"] },
    radicalMeaning: { id: "orang berdiri santun mendengarkan kabar", en: "person / human", my: "လူသား" },
  },
  "参": {
    meanings: { id: ["menghadiri", "berkunjung ziarah"], en: ["nonplussed", "three (in documents)", "going"], my: ["အဓိပ္ပာယ်", "သွားသည်"] },
    radicalMeaning: { id: "tiga bintang bersatu mengikuti rombongan", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "拝": {
    meanings: { id: ["menyembah", "memberi hormat"], en: ["worship", "adore", "pray to"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "kedua tangan merangkap memberi hormat tulus", en: "hand", my: "လက်" },
  },
  "願": {
    meanings: { id: ["memohon", "berharap pinta"], en: ["petition", "request", "vow"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "menundukkan kepala memanjatkan permohonan", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "望": {
    meanings: { id: ["menginginkan", "memandang jauh"], en: ["ambition", "full moon", "hope"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "berjinjit di bukit memandang bulan purnama", en: "moon / flesh / time", my: "လမင်း / ခန္ဓာကိုယ်အသား / အချိန်" },
  },
  "欲": {
    meanings: { id: ["hasrat", "menginginkan nafsu"], en: ["longing", "covetousness", "greed"], my: ["ရှည်လျားသော", "အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "mulut menganga lapar mendambakan air", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "喜": {
    meanings: { id: ["gembira", "berbahagia suka"], en: ["rejoice", "take pleasure in"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "alat musik ditabuh mulut bersorak gembira", en: "mouth / opening", my: "ပါးစပ် / အပေါက်" },
  },
  "怒": {
    meanings: { id: ["marah", "gusar murka"], en: ["angry", "be offended"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "hati hamba sahaya meledak marah", en: "heart / mind", my: "နှလုံးသား / စိတ်နှလုံး" },
  },
  "悲": {
    meanings: { id: ["sedih", "berduka nestapa"], en: ["grieve", "sad", "deplore"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "sayap terbelah dua menimbulkan duka batin", en: "heart / mind", my: "နှလုံးသား / စိတ်နှလုံး" },
  },
  "苦": {
    meanings: { id: ["pahit", "derita susah payah"], en: ["suffering", "trial", "worry"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "rumput liar terasa pahit saat dikunyah", en: "grass / plants", my: "မြက် / အပင်ငယ်" },
  },
  "痛": {
    meanings: { id: ["sakit", "nyeri pedih"], en: ["pain", "hurt", "damage"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "pukulan tongkat menusuk rasa sakit", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "悩": {
    meanings: { id: ["bimbang", "gundah gelisah"], en: ["trouble", "worry", "in pain"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "rambut kusut mencerminkan pikiran risau", en: "heart / mind", my: "နှလုံးသား / စိတ်နှလုံး" },
  },
  "迷": {
    meanings: { id: ["tersesat", "ragu bingung"], en: ["astray", "be perplexed", "in doubt"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "butir beras tercecer membuat kaki tersesat", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "疑": {
    meanings: { id: ["curiga", "meragukan ragu"], en: ["doubt", "distrust", "be suspicious"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "orang berhenti di jalan ragu memilih arah", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "惑": {
    meanings: { id: ["bingung", "tergoda bisik"], en: ["beguile", "delusion", "perplexity"], my: ["အဓိပ္ပာယ်", "ထွက်ပေါက်"] },
    radicalMeaning: { id: "hati gundah menjaga benteng pertahanan", en: "heart / mind", my: "နှလုံးသား / စိတ်နှလုံး" },
  },
  "恐": {
    meanings: { id: ["takut", "gentar khawatir"], en: ["fear", "dread", "awe"], my: ["အဓိပ္ပာယ်", "ဖတ်သည်"] },
    radicalMeaning: { id: "kedua tangan gemetar ketakutan di hati", en: "heart / mind", my: "နှလုံးသား / စိတ်နှလုံး" },
  },
  "怖": {
    meanings: { id: ["menakutkan", "ngeri cemas"], en: ["dreadful", "be frightened", "fearful"], my: ["ဖတ်သည်", "အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "hati gemetar melihat kain putih berkibar", en: "heart / mind", my: "နှလုံးသား / စိတ်နှလုံး" },
  },
  "驚": {
    meanings: { id: ["terkejut", "kaget tercengang"], en: ["wonder", "be surprised", "frightened"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "kuda kaget mendengarkan suara gemuruh", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "慌": {
    meanings: { id: ["panik", "gugup tergesa"], en: ["disconcerted", "be confused", "lose one's head"], my: ["အဓိပ္ပာယ်", "ရှုပ်ထွေးစေသည်"] },
    radicalMeaning: { id: "hati kehilangan kendali panik di belantara", en: "heart / mind", my: "နှလုံးသား / စိတ်နှလုံး" },
  },
  "忙": {
    meanings: {
      id: ["sibuk", "repot bergegas"],
      en: ["busy", "occupied", "restless"],
      my: ["အလုပ်ရှုပ်", "အလုပ်များ အပြေးအလွှား"]
    },
    radicalMeaning: { id: "hati lenyap tenggelam dalam kesibukan", en: "heart / mind", my: "နှလုံးသား / စိတ်နှလုံး" },
  },
  "暇": {
    meanings: {
      id: ["luang", "santai senggang"],
      en: ["spare time", "rest", "leisure"],
      my: ["လွတ်လွတ်လပ်လပ် အနားယူပါ။"]
    },
    radicalMeaning: { id: "hari cerah dinikmati santai meminjam waktu", en: "sun / day", my: "နေမင်း / နေ့ရက်" },
  },
  "豊": {
    meanings: { id: ["makmur", "subur melimpah"], en: ["bountiful", "excellent", "rich"], my: ["အဓိပ္ပာယ်", "ထူးချွန်သည်"] },
    radicalMeaning: { id: "bejana persembahan terisi penuh biji-bijian", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "富": {
    meanings: { id: ["kaya", "harta melimpah"], en: ["wealth", "enrich", "abundant"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "rumah penuh dengan guci harta benda", en: "roof / house", my: "အမိုး / အိမ်ခေါင်မိုး" },
  },
  "貧": {
    meanings: { id: ["miskin", "papa kekurangan"], en: ["poverty", "poor"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "uang kerang dibagi habis hingga tak bersisa", en: "shell / wealth / currency", my: "ခရုခွံ / ဥစ္စာဓန" },
  },
  "乏": {
    meanings: { id: ["kurang", "langka fakir"], en: ["destitution", "scarce", "limited"], my: ["အဓိပ္ပာယ်", "ကား", "ကန့်သတ်ချက်"] },
    radicalMeaning: { id: "langkah terbalik kekurangan bekal perjalanan", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "激": {
    meanings: { id: ["hebat", "dahsyat", "sengit"], en: ["violent", "get excited", "enraged"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "aliran air deras membentur batu karang", en: "water", my: "ရေ" },
  },
  "猛": {
    meanings: { id: ["buas", "garang berani"], en: ["fierce", "rave", "rush"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "anjing ganas memangsa di atas bejana", en: "dog / animal", my: "ခွေး / တိရစ္ဆာန်" },
  },
  "烈": {
    meanings: { id: ["berkobar sengit", "berapi"], en: ["ardent", "violent", "vehement"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "pedang menebas memicu kobaran api dahsyat", en: "fire", my: "မီး" },
  },
  "穏": {
    meanings: {
      id: ["tenang", "damai tenteram"],
      en: ["calm", "quiet", "moderation"],
      my: ["ငြိမ်သက်", "အေးချမ်း", "သာယာ"]
    },
    radicalMeaning: { id: "bulir padi tersimpan damai di lumbung", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "和": {
    meanings: { id: ["damai", "kerukunan", "Jepang"], en: ["harmony", "Japanese style", "peace"], my: ["အဓိပ္ပာယ်", "ငြိမ်းချမ်းရေး"] },
    radicalMeaning: { id: "makan bersama serasi menciptakan harmoni", en: "mouth / opening", my: "ပါးစပ် / အပေါက်" },
  },
  "険": {
    meanings: { id: ["curam", "berbahaya terjal"], en: ["precipitous", "inaccessible place", "impregnable position"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "tebing gunung curam menyulitkan langkah", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "危": {
    meanings: { id: ["bahaya", "gawat kritis"], en: ["dangerous", "fear", "uneasy"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "orang berdiri di bibir jurang curam", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "害": {
    meanings: { id: ["bahaya", "bencana merusak"], en: ["harm", "injury"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "kata-kata tajam di rumah melukai perasaan", en: "roof / house", my: "အမိုး / အိမ်ခေါင်မိုး" },
  },
  "損": {
    meanings: { id: ["rugi", "kerusakan cacat"], en: ["damage", "loss", "disadvantage"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "tangan menjatuhkan bejana hingga retak", en: "hand", my: "လက်" },
  },
  "得": {
    meanings: { id: ["memperoleh", "untung laba"], en: ["gain", "get", "find"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "berjalan menemukan mutiara kerang berharga", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "益": {
    meanings: { id: ["manfaat", "keuntungan faedah"], en: ["benefit", "gain", "profit"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "air tumpah melimpah dari mangkuk saji", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "功": {
    meanings: { id: ["jasa", "keberhasilan karya"], en: ["achievement", "merits", "success"], my: ["အောင်မြင်သည်", "အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "tenaga pertukangan menciptakan hasil gemilang", en: "power / strength", my: "ခွန်အား / စွမ်းအင်" },
  },
  "敗": {
    meanings: { id: ["kalah", "gagal tumbang"], en: ["failure", "defeat", "reversal"], my: ["ကျရှုံးသည်", "စားသည်", "အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "bejana kerang pecah terpukul kalah", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "争": {
    meanings: { id: ["bertengkar", "berebut sengketa"], en: ["contend", "dispute", "argue"], my: ["အဓိပ္ပာယ်", "ထားသည်"] },
    radicalMeaning: { id: "dua tangan saling berebut memegang tongkat", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "乱": {
    meanings: { id: ["kacau", "ricuh berantakan"], en: ["riot", "war", "disorder"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "tangan menarik gelendong benang kusut", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "混": {
    meanings: { id: ["campur", "baur berbaur"], en: ["mix", "blend", "confuse"], my: ["အဓိပ္ပာယ်", "ရှုပ်ထွေးစေသည်"] },
    radicalMeaning: { id: "aliran air berbaur dengan sinar mentari", en: "water", my: "ရေ" },
  },
  "雑": {
    meanings: { id: ["aneka", "campur aduk"], en: ["miscellaneous"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "burung aneka corak berkicau di pohon", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "互": {
    meanings: { id: ["saling", "timbal balik"], en: ["mutually", "reciprocally", "together"], my: ["နှစ်ဦးနှစ်ဖက်", "ခေါ်သည်", "အတူတကွ"] },
    radicalMeaning: { id: "dua gelendong tali saling bertaut erat", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "共": {
    meanings: { id: ["bersama", "seiring sejalan"], en: ["together", "both", "neither"], my: ["အတူတကွ", "အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "dua tangan bersama mengangkat persembahan", en: "eight / divide", my: "ရှစ် / ခွဲခြမ်းခြင်း" },
  },
  "独": {
    meanings: { id: ["sendiri", "mandiri terasing"], en: ["single", "alone", "spontaneously"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "anjing liar berkeliaran mandiri sendirian", en: "dog / animal", my: "ခွေး / တိရစ္ဆာန်" },
  },
  "各": {
    meanings: { id: ["masing-masing", "setiap"], en: ["each", "every", "either"], my: ["နိုင်ငံခြား", "တိုင်း / စီ"] },
    radicalMeaning: { id: "kaki tiba mengucapkan salam tiap rumah", en: "mouth / opening", my: "ပါးစပ် / အပေါက်" },
  },
  "諸": {
    meanings: { id: ["berbagai", "aneka rupa"], en: ["various", "many", "several"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "kata-kata diucapkan kepada banyak orang", en: "words / speech", my: "စကားလုံး / ပြောဆိုချက်" },
  },
  "再": {
    meanings: { id: ["lagi", "mengulang kembali"], en: ["again", "twice", "second time"], my: ["အဓိပ္ပာယ်", "အချိန်"] },
    radicalMeaning: { id: "menakar timbangan untuk kedua kalinya", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "複": {
    meanings: { id: ["ganda", "majemuk berlapis"], en: ["duplicate", "double", "compound"], my: ["အပေါ်", "အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "pakaian berlapis dua melindungi badan", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "単": {
    meanings: { id: ["tunggal", "sederhana polos"], en: ["simple", "one", "single"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "senjata pelontar batu tunggal sederhana", en: "ten / completion", my: "ဆယ် / ပြည့်စုံခြင်း" },
  },
  "純": {
    meanings: { id: ["murni", "polos suci"], en: ["genuine", "purity", "innocence"], my: ["စစ်မှန်သော", "အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "benang sutra asli belum terkena pewarna", en: "thread / connection", my: "အပ်ချည်ကြိုး / ချည်နှောင်မှု" },
  },
  "難": {
    meanings: { id: ["sulit", "sukar bencana"], en: ["difficult", "impossible", "trouble"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "burung terjebak dalam kobaran api rintangan", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "勝": {
    meanings: { id: ["menang", "unggul juara"], en: ["victory", "win", "prevail"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "tenaga perkasa mengalahkan musuh tanding", en: "power / strength", my: "ခွန်အား / စွမ်းအင်" },
  },
  "負": {
    meanings: { id: ["kalah", "menanggung beban"], en: ["defeat", "negative", "-"], my: ["စားသည်", "အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "orang membawa kerang uang menanggung rugi", en: "shell / wealth / currency", my: "ခရုခွံ / ဥစ္စာဓန" },
  },
  "敵": {
    meanings: { id: ["musuh", "tandingan setara"], en: ["enemy", "foe", "opponent"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "pasukan bersenjata membalas serangan tandingan", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "伴": {
    meanings: { id: ["menemani", "menyertai serta"], en: ["consort", "accompany", "bring with"], my: ["အဓိပ္ပာယ်", "ကုမ္ပဏီ"] },
    radicalMeaning: { id: "orang mendampingi membagi tugas paruh", en: "person / human", my: "လူသား" },
  },
  "織": {
    meanings: { id: ["menenun", "merajut anyam"], en: ["weave", "fabric"], my: ["ရက်လုပ်သည်", "အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "benang dirajut teratur dengan alat tenun", en: "thread / connection", my: "အပ်ချည်ကြိုး / ချည်နှောင်မှု" },
  },
  "団": {
    meanings: { id: ["kelompok", "rombongan tim"], en: ["group", "association"], my: ["အပေါ်", "အသင်းအဖွဲ့"] },
    radicalMeaning: { id: "banyak orang berkumpul dalam satu lingkaran", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "構": {
    meanings: { id: ["struktur", "merancang bangun"], en: ["posture", "stance", "appearance"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "balok kayu disusun membentuk kerangka rumah", en: "tree / wood", my: "သစ်ပင် / သစ်သား" },
  },
  "造": {
    meanings: { id: ["membuat", "memproduksi"], en: ["create", "make", "structure"], my: ["စားသည်", "အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "mengumumkan proses pembuatan bejana baru", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "器": {
    meanings: { id: ["wadah", "perkakas bejana"], en: ["utensil", "vessel", "receptacle"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "empat bejana saji dijaga oleh anjing setia", en: "mouth / opening", my: "ပါးစပ် / အပေါက်" },
  },
  "具": {
    meanings: { id: ["alat", "perlengkapan bekal"], en: ["tool", "utensil", "means"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "bejana makanan diangkat dengan dua tangan", en: "eight / divide", my: "ရှစ် / ခွဲခြမ်းခြင်း" },
  },
  "材": {
    meanings: { id: ["bahan", "material kayu"], en: ["lumber", "log", "timber"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "potongan balok kayu bermutu untuk bangunan", en: "tree / wood", my: "သစ်ပင် / သစ်သား" },
  },
  "製": {
    meanings: { id: ["membuat", "buatan manufaktur"], en: ["made in...", "manufacture"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "pisau memotong kain menjahit busana", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "販": {
    meanings: { id: ["menjual", "berniaga dagang"], en: ["marketing", "sell", "trade"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "mengembalikan barang dagangan untuk uang", en: "shell / wealth / currency", my: "ခရုခွံ / ဥစ္စာဓန" },
  },
  "購": {
    meanings: {
      id: ["membeli", "berlangganan"],
      en: ["subscription", "buy"],
      my: ["ဝယ်ယူ", "စာရင်းသွင်းပါ။"]
    },
    radicalMeaning: { id: "uang kerang dibayarkan untuk jalinan ikatan", en: "shell / wealth / currency", my: "ခရုခွံ / ဥစ္စာဓန" },
  },
  "費": {
    meanings: { id: ["biaya", "ongkos konsumsi"], en: ["expense", "cost", "spend"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "uang kerang mengalir lenyap untuk belanja", en: "shell / wealth / currency", my: "ခရုခွံ / ဥစ္စာဓန" },
  },
  "格": {
    meanings: { id: ["kedudukan", "standar kelas"], en: ["status", "rank", "capacity"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "dahan kayu diukur sesuai mutu kualitas", en: "tree / wood", my: "သစ်ပင် / သစ်သား" },
  },
  "額": {
    meanings: { id: ["dahi", "jumlah total uang"], en: ["forehead", "tablet", "plaque"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "jumlah nominal uang tertulis di papan dahi", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "賃": {
    meanings: { id: ["upah", "sewa ongkos kerja"], en: ["fare", "fee", "hire"], my: ["ဝေးသော", "အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "uang kerang dibayarkan untuk jasa orang", en: "shell / wealth / currency", my: "ခရုခွံ / ဥစ္စာဓန" },
  },
  "息": {
    meanings: { id: ["nafas", "hembusan", "anak"], en: ["breath", "respiration", "son"], my: ["စားသည်", "အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "udara mengalir melalui hidung menghidupi hati", en: "heart / mind", my: "နှလုံးသား / စိတ်နှလုံး" },
  },
  "差": {
    meanings: { id: ["selisih", "beda perbedaan"], en: ["distinction", "difference", "variation"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "menimbang wol gandum menemukan perbedaan", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "均": {
    meanings: { id: ["rata", "seimbang sebanding"], en: ["level", "average"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "tanah diratakan seimbang dengan garpu", en: "earth / ground", my: "မြေကြီး / မြေပြင်" },
  },
  "等": {
    meanings: { id: ["sama", "derajat", "golongan"], en: ["etc.", "and so forth", "class (first)"], my: ["အဓိပ္ပာယ်", "အတန်း"] },
    radicalMeaning: { id: "bilah bambu diukur rapi di pelataran kuil", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "比": {
    meanings: { id: ["membandingkan", "rasio tara"], en: ["compare", "race", "ratio"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "dua orang berdiri berjajar menimbang tinggi", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "較": {
    meanings: { id: ["membandingkan tara kontras"], en: ["contrast", "compare"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "dua kereta dijejerkan menguji ketangguhan", en: "vehicle / wheel", my: "ယာဉ် / ဘီး" },
  },
  "測": {
    meanings: { id: ["mengukur panjang kedalaman"], en: ["fathom", "plan", "scheme"], my: ["အတွင်းပိုင်း"] },
    radicalMeaning: { id: "alat takar dimasukkan ke air mengukur dalam", en: "water", my: "ရေ" },
  },
  "算": {
    meanings: { id: ["berhitung", "menghitung angka"], en: ["calculate", "divining", "number"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "sempoa bambu digerakkan dengan dua tangan", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "量": {
    meanings: { id: ["jumlah", "menakar volume"], en: ["quantity", "measure", "weight"], my: ["အဓိပ္ပာယ်", "အတိုင်းအတာ"] },
    radicalMeaning: { id: "matahari menyinari takaran gandum di desa", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "標": {
    meanings: { id: ["tanda", "target patokan"], en: ["signpost", "seal", "mark"], my: ["အမှတ်အသား", "အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "papan kayu penunjuk arah penanda batas", en: "tree / wood", my: "သစ်ပင် / သစ်သား" },
  },
  "程": {
    meanings: { id: ["sejauh", "tingkat kadar"], en: ["extent", "degree", "law"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "menakar bulir padi menentukan kadar pajak", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "限": {
    meanings: { id: ["batas", "membatasi kuota"], en: ["limit", "restrict", "to best of ability"], my: ["အထက် / အပေါ်", "အထက် / အပေါ်"] },
    radicalMeaning: { id: "tebing bukit membatasi pandangan mata", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "域": {
    meanings: {
      id: ["wilayah", "kawasan zona"],
      en: ["range", "region", "limits"],
      my: ["ဒေသ", "ဇုန်ဧရိယာ"]
    },
    radicalMeaning: { id: "benteng tanah dijaga tombak prajurit", en: "earth / ground", my: "မြေကြီး / မြေပြင်" },
  },
  "層": {
    meanings: {
      id: ["lapisan", "tingkatan strata"],
      en: ["stratum", "social class", "layer"],
      my: ["အလွှာများ", "အဆင့်များ"]
    },
    radicalMeaning: { id: "lapisan atap rumah tersusun bertingkat", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "級": {
    meanings: { id: ["tingkat", "kelas peringkat"], en: ["class", "rank", "grade"], my: ["အတန်း", "အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "benang disambung mencapai tingkatan baru", en: "thread / connection", my: "အပ်ချည်ကြိုး / ချည်နှောင်မှု" },
  },
  "階": {
    meanings: { id: ["tangga", "lantai bertingkat"], en: ["storey", "stair", "counter for storeys of a building"], my: ["သိုလှောင်သည်", "အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "undakan tebing bukit menyerupai tangga batu", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "順": {
    meanings: { id: ["urutan", "patuh teratur"], en: ["obey", "order", "turn"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "aliran sungai mengalir lurus menuruti arus", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "列": {
    meanings: {
      id: ["barisan", "deretan antrean"],
      en: ["file", "row", "rank"],
      my: ["လိုင်း", "လိုင်း"]
    },
    radicalMeaning: { id: "pisau memotong tulang berjajar dalam baris", en: "knife / sword", my: "ဓား / လက်နက်" },
  },
  "並": {
    meanings: { id: ["berjajar", "setara sejajar"], en: ["row", "and", "besides"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "dua orang berdiri sejajar bahu-membahu", en: "one", my: "တစ်" },
  },
  "倒": {
    meanings: { id: ["tumbang", "roboh bangkrut"], en: ["overthrow", "fall", "collapse"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "orang tersandung batu tersungkur jatuh", en: "person / human", my: "လူသား" },
  },
  "崩": {
    meanings: { id: ["longsor", "runtuh hancur"], en: ["crumble", "die", "demolish"], my: ["ပြိုကျသည်", "သေဆုံးသည်", "ဖျက်ဆီးသည်"] },
    radicalMeaning: { id: "puncak gunung runtuh terbelah dua", en: "mountain", my: "တောင်တန်း" },
  },
  "壊": {
    meanings: { id: ["rusak", "hancur berantakan"], en: ["demolition", "break", "destroy"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "tembok tanah pelindung roboh hancur", en: "earth / ground", my: "မြေကြီး / မြေပြင်" },
  },
  "修": {
    meanings: { id: ["memperbaiki", "menekuni studi"], en: ["discipline", "conduct oneself well", "study"], my: ["အဓိပ္ပာယ်", "လေ့လာသည်"] },
    radicalMeaning: { id: "orang menyisir rambut rapi memperbaiki diri", en: "person / human", my: "လူသား" },
  },
  "補": {
    meanings: { id: ["menambal", "melengkapi ganti"], en: ["supplement", "supply", "make good"], my: ["ခြောက်", "မီး"] },
    radicalMeaning: { id: "menjahit kain menambal lubang yang sobek", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "完": {
    meanings: { id: ["lengkap", "tuntas sempurna"], en: ["perfect", "completion", "end"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "gedung beratap kokoh selesai dibangun tuntas", en: "roof / house", my: "အမိုး / အိမ်ခေါင်မိုး" },
  },
  "成": {
    meanings: { id: ["menjadi", "berhasil terbentuk"], en: ["turn into", "become", "get"], my: ["အတွင်းသို့", "လာသည်", "အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "senjata tombak berpadu membentuk batas kota", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "未": {
    meanings: { id: ["belum", "masa depan"], en: ["un-", "not yet", "hitherto"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "pohon belum berbuah tunasnya masih muda", en: "tree / wood", my: "သစ်ပင် / သစ်သား" },
  },
  "続": {
    meanings: { id: ["berlanjut", "bersambung terus"], en: ["continue", "series", "sequel"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "ikatan benang disambung tanpa henti", en: "thread / connection", my: "အပ်ချည်ကြိုး / ချည်နှောင်မှု" },
  },
  "断": {
    meanings: { id: ["memutus", "menolak tegas"], en: ["severance", "decline", "refuse"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "kapak menebas ikatan benang tegas", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "停": {
    meanings: { id: ["berhenti", "jeda singgah"], en: ["halt", "stopping"], my: ["ရပ်သည်", "ရပ်တန့်သည်"] },
    radicalMeaning: { id: "orang berhenti istirahat di gardu halte", en: "person / human", my: "လူသား" },
  },
  "留": {
    meanings: { id: ["menahan", "tinggal menetap"], en: ["detain", "fasten", "halt"], my: ["အဓိပ္ပာယ်", "ရပ်သည်"] },
    radicalMeaning: { id: "mengalirkan air berhenti menggenangi sawah", en: "rice field", my: "လယ်ကွင်း" },
  },
  "極": {
    meanings: { id: ["ujung kutub", "puncak ekstrem"], en: ["extreme", "pole", "extremely"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "balok kayu puncak tertinggi penopang atap", en: "tree / wood", my: "သစ်ပင် / သစ်သား" },
  },
  "端": {
    meanings: { id: ["ujung", "pinggir batas"], en: ["edge", "origin", "end"], my: ["အဓိပ္ပာယ်", "မူလအစ"] },
    radicalMeaning: { id: "tunas berdiri tegak tepat di ujung petak", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "頂": {
    meanings: { id: ["puncak", "menerima hormat"], en: ["place on the head", "receive", "top of head"], my: ["အဓိပ္ပာယ်", "လက်ခံသည်"] },
    radicalMeaning: { id: "paku diketok tepat di puncak ubun-ubun kepala", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "底": {
    meanings: { id: ["dasar", "bawah paling dasar"], en: ["bottom", "sole", "depth"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "bagian bawah ruangan rumah paling dalam", en: "spacious hall / shelter", my: "ကျယ်ဝန်းသောအိမ် / အမိုးခိုစရာ" },
  },
  "深": {
    meanings: { id: ["dalam", "pekat mendalam"], en: ["deep", "heighten", "intensify"], my: ["အတွင်းပိုင်း", "အတွင်းပိုင်း"] },
    radicalMeaning: { id: "tangan menjulur ke air mengukur kedalaman", en: "water", my: "ရေ" },
  },
  "浅": {
    meanings: { id: ["dangkal", "cetek dangkal"], en: ["shallow", "superficial", "frivolous"], my: ["အဓိပ္ပာယ်", "အပေါ်"] },
    radicalMeaning: { id: "aliran air cetek dangkal dapat diarungi", en: "water", my: "ရေ" },
  },
  "濃": {
    meanings: { id: ["pekat", "kental tebal"], en: ["concentrated", "thick", "dark"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "aliran air pekat bercampur tanah liat", en: "water", my: "ရေ" },
  },
  "淡": {
    meanings: { id: ["hambar", "pudar tawar"], en: ["thin", "faint", "pale"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "air tawar meredam kobaran api rasa", en: "water", my: "ရေ" },
  },
  "浮": {
    meanings: { id: ["terapung", "melayang riang"], en: ["floating", "float", "rise to surface"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "anak terapung aman di atas pelampung air", en: "water", my: "ရေ" },
  },
  "沈": {
    meanings: { id: ["tenggelam", "surut redup"], en: ["sink", "be submerged", "subside"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "batu dilempar tenggelam ke dalam kolam", en: "water", my: "ရေ" },
  },
  "履": {
    meanings: { id: ["memakai sepatu", "menempuh karir"], en: ["perform", "complete", "footgear"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "melangkah mengenakan sepatu kulit baru", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "触": {
    meanings: {
      id: ["menyentuh", "menyinggung rasa"],
      en: ["contact", "touch", "feel"],
      my: ["ထိထိမိမိ", "ပုတ်ခတ်"]
    },
    radicalMeaning: { id: "tanduk serangga menyentuh meraba sekitar", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "抱": {
    meanings: { id: ["memeluk", "memendam rasa"], en: ["embrace", "hug", "hold in arms"], my: ["အဓိပ္ပာယ်", "ကိုင်တွယ်သည်"] },
    radicalMeaning: { id: "tangan mendekap memeluk bungkusan bayi", en: "hand", my: "လက်" },
  },
  "挟": {
    meanings: { id: ["menjepit", "menyisipkan sela"], en: ["pinch", "between"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "tangan menjepit benda di antara dua orang", en: "hand", my: "လက်" },
  },
  "雇": {
    meanings: { id: ["mempekerjakan", "merekrut staf"], en: ["employ", "hire"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "pintu gerbang menyambut burung pekerja", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "替": {
    meanings: { id: ["mengganti", "menukar uang"], en: ["exchange", "spare", "substitute"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "dua orang berdiri bergantian giliran hari", en: "sun / day", my: "နေမင်း / နေ့ရက်" },
  },
  "承": {
    meanings: { id: ["menerima", "menyetujui paham"], en: ["acquiesce", "hear", "listen to"], my: ["အဓိပ္ပာယ်", "ကြားသည်", "နားထောင်သည်"] },
    radicalMeaning: { id: "kedua tangan menjunjung tanda persetujuan", en: "hand", my: "လက်" },
  },
  "縮": {
    meanings: { id: ["menyusut", "mengerut ciut"], en: ["shrink", "contract", "shrivel"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "benang kain mengkerut di dalam penginapan", en: "thread / connection", my: "အပ်ချည်ကြိုး / ချည်နှောင်မှု" },
  },
  "滞": {
    meanings: { id: ["tersendat", "tertahan macet"], en: ["stagnate", "be delayed", "overdue"], my: ["အဓိပ္ပာယ်", "ရောက်ရှိချိန်"] },
    radicalMeaning: { id: "aliran air terhambat ikat pinggang pembendung", en: "water", my: "ရေ" },
  },
  "途": {
    meanings: { id: ["di tengah jalan", "perjalanan"], en: ["route", "way", "road"], my: ["အလယ် / အတွင်း", "ခရီးသွားခြင်း"] },
    radicalMeaning: { id: "berjalan menempuh jalan berliku di ladang", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "偶": {
    meanings: { id: ["kebetulan", "angka genap"], en: ["accidentally", "even number", "couple"], my: ["မြင့်သော", "အဓိပ္ပာယ်", "အပေါ်"] },
    radicalMeaning: { id: "boneka patung orang serupa tak sengaja", en: "person / human", my: "လူသား" },
  },
  "奇": {
    meanings: { id: ["aneh", "ganjil ajaib"], en: ["strange", "strangeness", "curiosity"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "orang besar menunggang kuda tampak unik", en: "big / great", my: "ကြီးမားသော" },
  },
  "換": {
    meanings: { id: ["menukar", "mengganti alih"], en: ["interchange", "period", "change"], my: ["အဓိပ္ပာယ်", "ကာလ"] },
    radicalMeaning: { id: "tangan bersorak menukar barang baru", en: "hand", my: "လက်" },
  },
  "破": {
    meanings: { id: ["merobek", "merusak memecah"], en: ["rend", "rip", "tear"], my: ["ခွဲခြမ်းသည်", "စုတ်ပြဲသည်", "စုတ်သည်"] },
    radicalMeaning: { id: "batu tajam merobek kulit pelindung", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "償": {
    meanings: { id: ["mengganti rugi", "menebus"], en: ["reparation", "make up for", "recompense"], my: ["အဓိပ္ပာယ်", "အပေါ်"] },
    radicalMeaning: { id: "orang memberi hadiah uang pelunas ganti rugi", en: "person / human", my: "လူသား" },
  },
  "診": {
    meanings: { id: ["memeriksa pasien medis"], en: ["checkup", "seeing", "diagnose"], my: ["စစ်ဆေးသည်", "ကြည့်သည်", "အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "kata-kata dokter memeriksa urat nadi pasien", en: "words / speech", my: "စကားလုံး / ပြောဆိုချက်" },
  },
  "脈": {
    meanings: { id: ["urat nadi", "aliran silsilah"], en: ["vein", "pulse", "hope"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "darah mengalir berdenyut di pembuluh tubuh", en: "moon / flesh / time", my: "လမင်း / ခန္ဓာကိုယ်အသား / အချိန်" },
  },
  "療": {
    meanings: { id: ["mengobati", "terapi pemulihan"], en: ["heal", "cure"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "penderita sakit dirawat dengan api obat", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "養": {
    meanings: { id: ["memelihara", "membesarkan asuh"], en: ["foster", "bring up", "rear"], my: ["အဓိပ္ပာယ်", "အပေါ်"] },
    radicalMeaning: { id: "memberi makan domba merawat hingga besar", en: "food / eating", my: "အစားအစာ / စားသုံးခြင်း" },
  },
  "健": {
    meanings: { id: ["sehat", "bugar bertenaga"], en: ["healthy", "health", "strength"], my: ["အဓိပ္ပာယ်", "ခွန်အား"] },
    radicalMeaning: { id: "orang perkasa menegakkan aturan dengan teguh", en: "person / human", my: "လူသား" },
  },
  "康": {
    meanings: { id: ["damai", "sehat sejahtera"], en: ["ease", "peace"], my: ["လွယ်ကူစေသည်", "ငြိမ်းချမ်းရေး"] },
    radicalMeaning: { id: "lumbung beras menyejahterakan warga desa", en: "spacious hall / shelter", my: "ကျယ်ဝန်းသောအိမ် / အမိုးခိုစရာ" },
  },
  "患": {
    meanings: { id: ["menderita sakit", "pasien"], en: ["afflicted", "disease", "suffer from"], my: ["အဓိပ္ပာယ်", "လွယ်ကူစေသည်"] },
    radicalMeaning: { id: "tusukan dua panah membuat hati menderita", en: "heart / mind", my: "နှလုံးသား / စိတ်နှလုံး" },
  },
  "症": {
    meanings: { id: ["gejala", "simtom penyakit"], en: ["symptoms", "illness"], my: ["လက္ခဏာ", "အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "tanda fisik tampak jelas saat terserang sakit", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "兆": {
    meanings: { id: ["pertanda", "triliun angka"], en: ["portent", "10**12", "trillion"], my: ["ရှေ့ပြေးနိမိတ်", "အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "retakan tempurung kura-kura pembawa pertanda", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "抑": {
    meanings: { id: ["menekan", "menahan gejolak"], en: ["repress", "well", "now"], my: ["အဓိပ္ပာယ်", "ယခု"] },
    radicalMeaning: { id: "tangan menekan orang yang sedang berlutut", en: "hand", my: "လက်" },
  },
  "圧": {
    meanings: {
      id: ["tekanan", "menindih tindas"],
      en: ["pressure", "push", "overwhelm"],
      my: ["ဖိစီးနှိပ်စက်ခြင်း"]
    },
    radicalMeaning: { id: "tebing tanah menindih ke bawah kuat", en: "earth / ground", my: "မြေကြီး / မြေပြင်" },
  },
  "促": {
    meanings: { id: ["mendesak", "mempercepat picu"], en: ["stimulate", "urge", "press"], my: ["လှုံ့ဆော်သည်", "တိုက်တွန်းသည်", "အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "orang bergegas melangkah mendesak segera", en: "person / human", my: "လူသား" },
  },
  "進": {
    meanings: { id: ["maju", "berkembang maju"], en: ["advance", "proceed", "progress"], my: ["တိုးတက်သည်", "အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "burung kecil melangkah maju ke depan", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "拒": {
    meanings: { id: ["menolak", "menampik keras"], en: ["repel", "refuse", "reject"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "tangan membentuk palang menolak masuk", en: "hand", my: "လက်" },
  },
  "絶": {
    meanings: { id: ["putus", "punah sama sekali"], en: ["discontinue", "sever", "cut off"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "pisau memotong tali benang hingga putus total", en: "thread / connection", my: "အပ်ချည်ကြိုး / ချည်နှောင်မှု" },
  },
  "諾": {
    meanings: { id: ["menyetujui", "janji kata"], en: ["consent", "assent", "agreement"], my: ["အဓိပ္ပာယ်", "သဘောတူသည်"] },
    radicalMeaning: { id: "kata-kata setuju diucapkan dengan ikhlas", en: "words / speech", my: "စကားလုံး / ပြောဆိုချက်" },
  },
  "勧": {
    meanings: { id: ["menganjurkan", "mengajak giat"], en: ["persuade", "recommend", "advise"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "burung bangau bertenaga mengajak terbang", en: "power / strength", my: "ခွန်အား / စွမ်းအင်" },
  },
  "誘": {
    meanings: { id: ["mengajak", "memikat bujuk"], en: ["entice", "lead", "tempt"], my: ["အဓိပ္ပာယ်", "ဦးဆောင်သည်"] },
    radicalMeaning: { id: "kata-kata manis memikat mengajak melangkah", en: "words / speech", my: "စကားလုံး / ပြောဆိုချက်" },
  },
  "迫": {
    meanings: { id: ["mendesak", "merapat sempit"], en: ["urge", "force", "imminent"], my: ["တိုက်တွန်းသည်", "အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "berjalan mendekat memepet hingga terdesak", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "脅": {
    meanings: { id: ["mengancam", "menakuti gertak"], en: ["threaten", "coerce"], my: ["စားသည်", "အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "tiga tenaga menekan badan membuat takut", en: "moon / flesh / time", my: "လမင်း / ခန္ဓာကိုယ်အသား / အချိန်" },
  },
  "威": {
    meanings: { id: ["kewibawaan", "kuasa agung"], en: ["intimidate", "dignity", "majesty"], my: ["ရက်စွဲ", "အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "wanita memegang kapak memiliki wibawa kuat", en: "woman / female", my: "အမျိုးသမီး" },
  },
  "催": {
    meanings: { id: ["mengadakan", "memicu timbul"], en: ["sponsor", "hold (a meeting)", "give (a dinner)"], my: ["အဓိပ္ပာယ်", "ကိုင်တွယ်သည်"] },
    radicalMeaning: { id: "orang mengajak burung berkumpul mengadakan acara", en: "person / human", my: "လူသား" },
  },
  "督": {
    meanings: { id: ["memimpin", "mengawasi mandor"], en: ["coach", "command", "urge"], my: ["အဓိပ္ပာယ်", "တိုက်တွန်းသည်"] },
    radicalMeaning: { id: "mata mandor mengawasi pekerjaan kacang", en: "eye / vision", my: "မျက်စိ / အမြင်" },
  },
  "励": {
    meanings: { id: ["menyemangati", "terpacu giat"], en: ["encourage", "be diligent", "inspire"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "batu terjal dilewati dengan segenap tenaga", en: "power / strength", my: "ခွန်အား / စွမ်းအင်" },
  },
  "奮": {
    meanings: { id: ["bersemangat", "bangkit berani"], en: ["stirred up", "be invigorated", "flourish"], my: ["အပေါ်", "သွားသည်", "အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "burung besar mengepakkan sayap bangkit gagah", en: "big / great", my: "ကြီးမားသော" },
  },
  "闘": {
    meanings: {
      id: ["berjuang", "bertarung tanding"],
      en: ["fight", "war"],
      my: ["တိုက်ပွဲ", "တိုက်ပွဲ"]
    },
    radicalMeaning: { id: "dua prajurit beradu tombak di gerbang", en: "gate / enclosure", my: "တံခါးမကြီး / ဝင်းခြံ" },
  },
  "挑": {
    meanings: { id: ["menantang", "mencoba ujian"], en: ["challenge", "contend for", "make love to"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "tangan menunjuk menantang lawan adu", en: "hand", my: "လက်" },
  },
  "戦": {
    meanings: { id: ["perang", "bertempur laga"], en: ["war", "battle", "match"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "memegang tombak bersiap menyongsong perang", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "競": {
    meanings: { id: ["bersaing", "adu tanding"], en: ["emulate", "compete with", "bid"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "dua orang berdiri berdampingan adu cepat", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "討": {
    meanings: { id: ["menyerang", "membahas kupas"], en: ["chastise", "attack", "defeat"], my: ["အဓိပ္ပာယ်", "စားသည်"] },
    radicalMeaning: { id: "kata-kata diukur membahas siasat perang", en: "words / speech", my: "စကားလုံး / ပြောဆိုချက်" },
  },
  "論": {
    meanings: { id: ["teori", "argumen bahasan"], en: ["argument", "discourse"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "kata-kata disusun teratur membukukan teori", en: "words / speech", my: "စကားလုံး / ပြောဆိုချက်" },
  },
  "審": {
    meanings: { id: ["memeriksa", "mengadili telaah"], en: ["hearing", "judge", "trial"], my: ["ကြားသည်", "တရားသူကြီး", "အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "memeriksa jejak binatang teliti di balai", en: "roof / house", my: "အမိုး / အိမ်ခေါင်မိုး" },
  },
  "評": {
    meanings: { id: ["menilai", "ulasan kritik"], en: ["evaluate", "criticism", "comment"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "kata-kata berimbang menimbang adil nilai karya", en: "words / speech", my: "စကားလုံး / ပြောဆိုချက်" },
  },
  "批": {
    meanings: { id: ["mengkritik", "mengevaluasi telaah"], en: ["criticism", "strike"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "tangan menunjuk membandingkan kekurangan", en: "hand", my: "လက်" },
  },
  "判": {
    meanings: { id: ["menghakimi", "stempel putusan"], en: ["judgement", "judgment", "signature"], my: ["တရားသူကြီး", "အဓိပ္ပာယ်", "အမှတ်အသား"] },
    radicalMeaning: { id: "pisau membelah dua menetapkan keadilan", en: "knife / sword", my: "ဓား / လက်နက်" },
  },
  "是": {
    meanings: {
      id: ["kebenaran", "sudah barang tentu"],
      en: ["just so", "this", "right"],
      my: ["အမှန်တရား", "ဟုတ်ပါတယ်။"]
    },
    radicalMeaning: { id: "matahari menyinari langkah tindakan yang benar", en: "sun / day", my: "နေမင်း / နေ့ရက်" },
  },
  "非": {
    meanings: { id: ["salah", "keliru bukan"], en: ["un-", "mistake", "negative"], my: ["အဓိပ္ပာယ်", "အမှား"] },
    radicalMeaning: { id: "sepasang sayap bertolak belakang tidak sejalan", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "賛": {
    meanings: { id: ["setuju", "memuji dukung"], en: ["approve", "praise", "title or inscription on picture"], my: ["အဓိပ္ပာယ်", "စုတ်ပြဲသည်"] },
    radicalMeaning: { id: "dua orang membawa uang kerang mendukung", en: "shell / wealth / currency", my: "ခရုခွံ / ဥစ္စာဓန" },
  },
  "否": {
    meanings: { id: ["menolak", "tidak setuju"], en: ["negate", "no", "noes"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "mulut berkata tidak menolak usulan", en: "mouth / opening", my: "ပါးစပ် / အပေါက်" },
  },
  "肯": {
    meanings: { id: ["setuju", "mengiyakan sanggup"], en: ["agreement", "consent", "comply with"], my: ["သဘောတူသည်", "အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "menghentikan keraguan menyetujui dalam hati", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "提": {
    meanings: { id: ["mengajukan usul", "menenteng"], en: ["propose", "take along", "carry in hand"], my: ["အဓိပ္ပာယ်", "ရှည်လျားသော", "ကား"] },
    radicalMeaning: { id: "tangan mengangkat bejana mengajukan usulan", en: "hand", my: "လက်" },
  },
  "供": {
    meanings: { id: ["menyediakan", "mempersembahkan"], en: ["submit", "offer", "present"], my: ["အဓိပ္ပာယ်", "လက်ရှိ"] },
    radicalMeaning: { id: "orang membawakan persembahan dengan dua tangan", en: "person / human", my: "လူသား" },
  },
  "譲": {
    meanings: { id: ["mengalah", "menyerahkan hak"], en: ["defer", "turnover", "transfer"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "kata-kata santun merelakan hak kepada kawan", en: "words / speech", my: "စကားလုံး / ပြောဆိုချက်" },
  },
  "委": {
    meanings: { id: ["menyerahkan wewenang", "amanat"], en: ["committee", "entrust to", "leave to"], my: ["အဓိပ္ပာယ်", "ထွက်ခွာသည်"] },
    radicalMeaning: { id: "wanita anggun dipercaya mengelola lumbung padi", en: "woman / female", my: "အမျိုးသမီး" },
  },
  "託": {
    meanings: {
      id: ["menitipkan", "memercayakan amanah"],
      en: ["consign", "requesting", "entrusting with"],
      my: ["အပ်နှင်းခြင်း", "အပ်နှင်းခြင်း"]
    },
    radicalMeaning: { id: "kata-kata daun amanah dititipkan pada kawan", en: "words / speech", my: "စကားလုံး / ပြောဆိုချက်" },
  },
  "請": {
    meanings: { id: ["memohon", "meminta izin"], en: ["solicit", "invite", "ask"], my: ["အဓိပ္ပာယ်", "ဖိတ်ခေါ်သည်", "မေးသည်"] },
    radicalMeaning: { id: "kata-kata suci jernih memohon restu", en: "words / speech", my: "စကားလုံး / ပြောဆိုချက်" },
  },
  "許": {
    meanings: { id: ["mengizinkan", "memaafkan restu"], en: ["permit", "approve"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "kata-kata tepat siang hari memberi izin", en: "words / speech", my: "စကားလုံး / ပြောဆိုချက်" },
  },
  "可": {
    meanings: { id: ["boleh", "mungkin layak"], en: ["can", "passable", "approval"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "suara cangkul bersuara menyetujui pekerjaan", en: "mouth / opening", my: "ပါးစပ် / အပေါက်" },
  },
  "禁": {
    meanings: { id: ["melarang", "pantang tabu"], en: ["prohibition", "ban", "forbid"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "altar suci di tengah hutan terlarang dilewati", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "違": {
    meanings: { id: ["berbeda", "melanggar selisih"], en: ["difference", "differ"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "kaki melangkah menyimpang dari aturan jalan", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "反": {
    meanings: { id: ["melawan", "berbalik kebalikan"], en: ["anti-"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "tangan memanjat tebing membalikkan keadaan", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "侵": {
    meanings: { id: ["menyerbu", "melanggar batas"], en: ["encroach", "invade", "raid"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "orang membawa sapu menyerbu wilayah seberang", en: "person / human", my: "လူသား" },
  },
  "処": {
    meanings: { id: ["menangani", "mengurus proses"], en: ["dispose", "manage", "deal with"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "berhenti duduk menata urusan perkara", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "罰": {
    meanings: { id: ["hukuman", "sanksi ganjaran"], en: ["penalty", "punishment"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "pisau menjatuhkan sanksi melanggar jaring kata", en: "knife / sword", my: "ဓား / လက်နက်" },
  },
  "罪": {
    meanings: { id: ["dosa", "kesalahan kriminal"], en: ["guilt", "sin", "crime"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "jaring menangkap orang berbuat keliru", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "避": {
    meanings: { id: ["menghindar", "menepi aman"], en: ["evade", "avoid", "avert"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "berjalan menyingkir menghindari bahaya", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "免": {
    meanings: { id: ["bebas dari", "izin lisensi"], en: ["excuse", "dismissal"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "orang meloloskan diri melepaskan helm pelindung", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "救": {
    meanings: { id: ["menolong", "menyelamatkan jiwa"], en: ["salvation", "save", "help"], my: ["အဓိပ္ပာယ်", "စုဆောင်းသည်", "ကူညီသည်"] },
    radicalMeaning: { id: "tongkat penyelamat menolong orang terperosok", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "援": {
    meanings: { id: ["bantuan", "menyokong regu"], en: ["abet", "help", "save"], my: ["အဓိပ္ပာယ်", "ကူညီသည်", "စုဆောင်းသည်"] },
    radicalMeaning: { id: "tangan mengulur menarik kawan dari jurang", en: "hand", my: "လက်" },
  },
  "助": {
    meanings: { id: ["membantu", "menolong meringankan"], en: ["help", "rescue", "assist"], my: ["ကူညီသည်", "အဓိပ္ပာယ်", "အကူအညီပေးသည်"] },
    radicalMeaning: { id: "bantuan tenaga dan alat meringankan tugas", en: "power / strength", my: "ခွန်အား / စွမ်းအင်" },
  },
  "付": {
    meanings: { id: ["menempelkan", "melampirkan serta"], en: ["adhere", "attach", "refer to"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "tangan menyerahkan dokumen pada penerima", en: "person / human", my: "လူသား" },
  },
  "貢": {
    meanings: { id: ["memberi upeti", "kontribusi"], en: ["tribute", "support", "finance"], my: ["အဓိပ္ပာယ်", "ထောက်ပံ့သည်"] },
    radicalMeaning: { id: "tenaga perkakas dan uang dipersembahkan", en: "shell / wealth / currency", my: "ခရုခွံ / ဥစ္စာဓန" },
  },
  "献": {
    meanings: { id: ["mempersembahkan", "mendonasikan"], en: ["offering", "counter for drinks", "present"], my: ["အဓိပ္ပာယ်", "သောက်သည်", "လက်ရှိ"] },
    radicalMeaning: { id: "bejana saji dan hewan dipersembahkan tulus", en: "dog / animal", my: "ခွေး / တိရစ္ဆာန်" },
  },
  "恩": {
    meanings: { id: ["budi baik", "jasa pertolongan"], en: ["grace", "kindness", "goodness"], my: ["အဓိပ္ပာယ်", "သွားသည်"] },
    radicalMeaning: { id: "hati terikat mengingat bantuan masa lalu", en: "heart / mind", my: "နှလုံးသား / စိတ်နှလုံး" },
  },
  "恵": {
    meanings: { id: ["anugerah", "berkah karunia"], en: ["favor", "blessing", "grace"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "hati lumbung pemurah membagikan karunia", en: "heart / mind", my: "နှလုံးသား / စိတ်နှလုံး" },
  },
  "報": {
    meanings: { id: ["melapor", "membalas kabar"], en: ["report", "news", "reward"], my: ["အဓိပ္ပာယ်", "အသစ်", "ဆုလာဘ်"] },
    radicalMeaning: { id: "tangan mengikat penjahat menyampaikan laporan", en: "earth / ground", my: "မြေကြီး / မြေပြင်" },
  },
  "酬": {
    meanings: { id: ["imbalan", "hadiah balas jasa"], en: ["repay", "reward", "retribution"], my: ["အဓိပ္ပာယ်", "ဆုလာဘ်"] },
    radicalMeaning: { id: "guci anggur disajikan membalas budi baik", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "謝": {
    meanings: { id: ["berterima kasih", "minta maaf"], en: ["apologize", "thank", "refuse"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "kata-kata membungkuk melepaskan rasa bersalah", en: "words / speech", my: "စကားလုံး / ပြောဆိုချက်" },
  },
  "礼": {
    meanings: { id: ["sopan santun", "etika adab"], en: ["salute", "bow", "ceremony"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "menunduk di depan altar menghormati tata krama", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "敬": {
    meanings: { id: ["menghormati", "takzim segan"], en: ["awe", "respect", "honor"], my: ["အဓိပ္ပာယ်", "ရိုသေသည်"] },
    radicalMeaning: { id: "berbicara santun membungkuk penuh takzim", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "尊": {
    meanings: { id: ["mulia", "menjunjung luhur"], en: ["revered", "valuable", "precious"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "dua tangan mengangkat cawan anggur suci", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "視": {
    meanings: {
      id: ["memandang", "memeriksa cermat"],
      en: ["inspection", "regard as", "see"],
      my: ["သေချာကြည့်", "ဆန်းစစ်ပါ။"]
    },
    radicalMeaning: { id: "altar suci diamati dengan pandangan tajam", en: "to see / observe", my: "ကြည့်ရှုခြင်း" },
  },
  "無": {
    meanings: { id: ["tiada", "tanpa hampa"], en: ["nothingness", "none", "ain't"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "hutan terbakar rata menjadi abu tanpa sisa", en: "fire / boiling", my: "မီးတောက် / ဆူပွက်ခြင်း" },
  },
  "顧": {
    meanings: {
      id: ["mengingat kembali", "menoleh"],
      en: ["look back", "review", "examine oneself"],
      my: ["သတိရခြင်း", "ပြန်ကြည့်ခြင်း။"]
    },
    radicalMeaning: { id: "burung menolehkan kepala melihat ke belakang", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "指": {
    meanings: { id: ["jari", "menunjuk arah"], en: ["finger", "point to", "indicate"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "tangan mengacungkan jari memberi petunjuk", en: "hand", my: "လက်" },
  },
  "導": {
    meanings: { id: ["membimbing", "memandu jalan"], en: ["guidance", "leading", "conduct"], my: ["အဓိပ္ပာယ်", "ဦးဆောင်သည်"] },
    radicalMeaning: { id: "tangan menuntun langkah meniti jalan benar", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "監": {
    meanings: { id: ["mengawasi", "inspeksi ketat"], en: ["oversee", "official", "govt office"], my: ["ကြည့်သည်", "အဓိပ္ပာယ်", "သွားသည်"] },
    radicalMeaning: { id: "orang mengamati bayangan air di mangkuk", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "管": {
    meanings: { id: ["pipa", "mengelola mengatur"], en: ["pipe", "tube", "wind instrument"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "pipa bambu mengatur aliran saluran", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "企": {
    meanings: { id: ["merencanakan", "perusahaan"], en: ["undertake", "scheme", "design"], my: ["ကလေး", "ကုမ္ပဏီ"] },
    radicalMeaning: { id: "orang berdiri menatap jauh merancang usaha", en: "person / human", my: "လူသား" },
  },
  "財": {
    meanings: { id: ["harta", "keuangan aset"], en: ["property", "money", "wealth"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "uang kerang dirawat menjadi modal usaha", en: "shell / wealth / currency", my: "ခရုခွံ / ဥစ္စာဓန" },
  },
  "融": {
    meanings: { id: ["melebur", "pembiayaan dana"], en: ["dissolve", "melt"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "uap panas meleburkan bejana peleburan", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "収": {
    meanings: {
      id: ["menampung", "memanen perolehan"],
      en: ["income", "obtain", "reap"],
      my: ["လိုက်လျောညီထွေ ရိတ်သိမ်းခြင်း အမြတ်"]
    },
    radicalMeaning: { id: "tangan mengikat memanen hasil gandum", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "失": {
    meanings: { id: ["hilang", "terlepas luput"], en: ["lose", "error", "fault"], my: ["အဓိပ္ပာယ်", "မှားယွင်းသည်", "အပြစ်"] },
    radicalMeaning: { id: "tangan melepaskan benda terlepas hilang", en: "big / great", my: "ကြီးမားသော" },
  },
  "債": {
    meanings: { id: ["utang", "obligasi pinjaman"], en: ["bond", "loan", "debt"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "orang memikul tanggung jawab utang uang", en: "person / human", my: "လူသား" },
  },
  "復": {
    meanings: { id: ["pulih", "kembali berulang"], en: ["restore", "return to", "revert"], my: ["သိုလှောင်သည်", "အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "berjalan kembali meniti rute pemulihan", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "興": {
    meanings: { id: ["bangkit", "memajukan gairah"], en: ["entertain", "revive", "retrieve"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "banyak tangan bersatu mengangkat lesung gembira", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "繁": {
    meanings: { id: ["ramai", "makmur berkembang"], en: ["luxuriant", "thick", "overgrown"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "tanaman merambat lebat penuh bunga mekar", en: "thread / connection", my: "အပ်ချည်ကြိုး / ချည်နှောင်မှု" },
  },
  "栄": {
    meanings: { id: ["makmur", "kejayaan gemilang"], en: ["flourish", "prosperity", "honor"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "pohon bermekaran bunga penuh kemakmuran", en: "tree / wood", my: "သစ်ပင် / သစ်သား" },
  },
  "衰": {
    meanings: { id: ["mundur", "melemah susut"], en: ["decline", "wane", "weaken"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "baju berkabung menandai kemunduran zaman", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "退": {
    meanings: { id: ["mundur", "mengundurkan diri"], en: ["retreat", "withdraw", "retire"], my: ["စားသည်", "အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "berjalan mundur meninggalkan gelanggang", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "没": {
    meanings: { id: ["tenggelam", "wafat lenyap"], en: ["drown", "sink", "hide"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "tangan menyelam ke air lenyap tenggelam", en: "water", my: "ရေ" },
  },
  "落": {
    meanings: { id: ["jatuh", "gugur rontok"], en: ["fall", "drop", "come down"], my: ["အဓိပ္ပာယ်", "လာသည်"] },
    radicalMeaning: { id: "daun rumput dan tetes air jatuh ke tanah", en: "grass / plants", my: "မြက် / အပင်ငယ်" },
  },
  "緩": {
    meanings: { id: ["longgar", "mengendur rileks"], en: ["slacken", "loosen", "relax"], my: ["ချို့တဲ့သည်", "လျော့ရဲသည်", "သက်သာစေသည်"] },
    radicalMeaning: { id: "ikatan benang dikendurkan terasa longgar", en: "thread / connection", my: "အပ်ချည်ကြိုး / ချည်နှောင်မှု" },
  },
  "漸": {
    meanings: { id: ["berangsur-angsur", "bertahap"], en: ["steadily", "gradually advancing", "finally"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "aliran air mengikis batu pelan tapi pasti", en: "water", my: "ရေ" },
  },
  "阻": {
    meanings: { id: ["menghalangi", "merintangi"], en: ["thwart", "separate from", "prevent"], my: ["အဓိပ္ပာယ်", "ခွဲထုတ်သည်"] },
    radicalMeaning: { id: "tebing terjal merintangi jalan perjalanan", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "欺": {
    meanings: { id: ["menipu", "memperdaya tipu"], en: ["deceit", "cheat", "delude"], my: ["အဓိပ္ပာယ်", "စားသည်"] },
    radicalMeaning: { id: "mulut manis membelokkan fakta menipu", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "詐": {
    meanings: { id: ["berbohong", "manipulasi curang"], en: ["lie", "falsehood", "deceive"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "kata-kata buatan menyesatkan kebenaran", en: "words / speech", my: "စကားလုံး / ပြောဆိုချက်" },
  },
  "綻": {
    meanings: { id: ["sobek", "terbongkar cacat"], en: ["be rent", "ripped", "unravel"], my: ["အဓိပ္ပာယ်", "စုတ်ပြဲသည်"] },
    radicalMeaning: { id: "jahitan benang terlepas memperlihatkan celah", en: "thread / connection", my: "အပ်ချည်ကြိုး / ချည်နှောင်မှု" },
  },
  "侮": {
    meanings: { id: ["menghina", "memandang rendah"], en: ["scorn", "despise", "make light of"], my: ["အဓိပ္ပာယ်", "အလင်းရောင်"] },
    radicalMeaning: { id: "orang mencemooh ibu memandang enteng", en: "person / human", my: "လူသား" },
  },
  "蔑": {
    meanings: { id: ["meremehkan", "menghina nista"], en: ["ignore", "despise", "neglect"], my: ["အဓိပ္ပာယ်", "လျစ်လျူရှုသည်"] },
    radicalMeaning: { id: "menutup mata menginjak rumput meremehkan", en: "grass / plants", my: "မြက် / အပင်ငယ်" },
  },
  "嘲": {
    meanings: { id: ["mencibir", "mengejek tawa"], en: ["ridicule", "insult"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "mulut tersenyum mencibir mengejek orang", en: "mouth / opening", my: "ပါးစပ် / အပေါက်" },
  },
  "醸": {
    meanings: { id: ["memfermentasi", "memicu suasana"], en: ["brew", "cause"], my: ["ချက်သည်", "အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "guci arak diragi memicu aroma khas", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "喚": {
    meanings: { id: ["berseru", "memanggil lantang"], en: ["yell", "cry", "call"], my: ["အဓိပ္ပာယ်", "ခေါ်သည်"] },
    radicalMeaning: { id: "mulut berseru memanggil menukar kabar", en: "mouth / opening", my: "ပါးစပ် / အပေါက်" },
  },
  "緻": {
    meanings: { id: ["halus cermat", "teliti padat"], en: ["fine (i.e. not coarse)"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "anyaman benang sutra tersusun sangat rapat", en: "thread / connection", my: "အပ်ချည်ကြိုး / ချည်နှောင်မှု" },
  },
  "密": {
    meanings: {
      id: ["rapat", "rahasia intim"],
      en: ["secrecy", "density (pop)", "minuteness"],
      my: ["တွေ့ဆုံမှု", "ရင်းနှီးသောလျှို့ဝှက်ချက်"]
    },
    radicalMeaning: { id: "bukit rahasia tersembunyi di bawah atap", en: "roof / house", my: "အမိုး / အိမ်ခေါင်မိုး" },
  },
  "曖": {
    meanings: { id: ["samar", "kabur tak jelas"], en: ["dark", "not clear"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "matahari tertutup awan terasa samar", en: "sun / day", my: "နေမင်း / နေ့ရက်" },
  },
  "昧": {
    meanings: { id: ["gelap", "bodoh tak terang"], en: ["dark", "foolish"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "matahari belum terbit pandangan masih gelap", en: "sun / day", my: "နေမင်း / နေ့ရက်" },
  },
  "諮": {
    meanings: { id: ["berkonsultasi", "meminta saran"], en: ["consult with"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "kata-kata musyawarah meminta pertimbangan", en: "words / speech", my: "စကားလုံး / ပြောဆိုချက်" },
  },
  "寡": {
    meanings: {
      id: ["sedikit", "janda sepi"],
      en: ["widow", "minority", "few"],
      my: ["အထီးကျန် မုဆိုးမ"]
    },
    radicalMeaning: { id: "tinggal sendirian di rumah kekurangan teman", en: "roof / house", my: "အမိုး / အိမ်ခေါင်မိုး" },
  },
  "憂": {
    meanings: {
      id: ["cemas", "gundah berduka"],
      en: ["melancholy", "grieve", "lament"],
      my: ["စိတ်ပူပန်ခြင်း", "ဝမ်းနည်းခြင်း", "ဝမ်းနည်းခြင်း။"]
    },
    radicalMeaning: { id: "hati membungkuk memikirkan duka nestapa", en: "heart / mind", my: "နှလုံးသား / စိတ်နှလုံး" },
  },
  "慮": {
    meanings: { id: ["mempertimbangkan", "menimbang"], en: ["prudence", "thought", "concern"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "harimau menimbang langkah dengan hati-hati", en: "heart / mind", my: "နှလုံးသား / စိတ်နှလုံး" },
  },
  "慄": {
    meanings: { id: ["gemetar", "ngeri merinding"], en: ["fear"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "hati dingin merinding bagai buah kastanye", en: "heart / mind", my: "နှလုံးသား / စိတ်နှလုံး" },
  },
  "糾": {
    meanings: { id: ["mengusut", "memelintir selidik"], en: ["twist", "ask", "investigate"], my: ["အဓိပ္ပာယ်", "မေးသည်", "စုံစမ်းစစ်ဆေးသည်"] },
    radicalMeaning: { id: "benang dipelintir mengusut tuntas perkara", en: "thread / connection", my: "အပ်ချည်ကြိုး / ချည်နှောင်မှု" },
  },
  "弾": {
    meanings: { id: ["peluru", "menolak denting"], en: ["bullet", "twang", "flip"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "busur melontarkan peluru menembus sasaran", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "乖": {
    meanings: { id: ["menyimpang", "terasing berselisih"], en: ["oppose", "disobey"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "garis terbelah dua saling bertolak belakang", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "離": {
    meanings: { id: ["berpisah", "menjauh lepas"], en: ["detach", "separation", "disjoin"], my: ["အဓိပ္ပာယ်", "ပူးပေါင်းသည်"] },
    radicalMeaning: { id: "burung terbang lepas meninggalkan sarang", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "痕": {
    meanings: { id: ["bekas", "luka parut"], en: ["mark", "foot print"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "bekas luka penyakit membekas pada kulit", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "跡": {
    meanings: { id: ["jejak", "tapak tilas"], en: ["tracks", "mark", "print"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "tapak kaki melangkah meninggalkan jejak tanah", en: "foot / leg", my: "ခြေထောက်" },
  },
  "傲": {
    meanings: { id: ["angkuh", "sombong congkak"], en: ["be proud"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "orang berdiri mendongak bertindak congkak", en: "person / human", my: "လူသား" },
  },
  "慢": {
    meanings: { id: ["lamban", "sombong pongah"], en: ["ridicule", "laziness"], my: ["အဓိပ္ပာယ်", "ပျင်းရိခြင်း"] },
    radicalMeaning: { id: "hati tinggi merasa diri paling hebat", en: "heart / mind", my: "နှလုံးသား / စိတ်နှလုံး" },
  },
  "弛": {
    meanings: { id: ["kendur", "loyo lemas"], en: ["slacken", "relax"], my: ["ချို့တဲ့သည်", "သက်သာစေသည်"] },
    radicalMeaning: { id: "busur panah dilepas tali menjadi kendur", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "躊": {
    meanings: { id: ["ragu bimbang", "tertegun"], en: ["hesitate"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "kaki berhenti ragu melangkah maju", en: "foot / leg", my: "ခြေထောက်" },
  },
  "躇": {
    meanings: { id: ["ragu-ragu", "menahan langkah"], en: ["hesitate"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "kaki menimbang arah menahan gerakan", en: "foot / leg", my: "ခြေထောက်" },
  },
  "齟": {
    meanings: { id: ["tak pas", "gigi bersilang"], en: ["uneven", "bite", "disagree"], my: ["အဓိပ္ပာယ်", "သဘောတူသည်"] },
    radicalMeaning: { id: "susunan gigi tak rata menimbulkan gesekan", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "齬": {
    meanings: { id: ["berselisih", "salah paham"], en: ["irregular teeth"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "kata-kata berselisih tak sejalan di mulut", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "牽": {
    meanings: { id: ["menarik", "mengikat kendali"], en: ["pull", "tug", "drag"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "tali kekang menarik lembu berjalan searah", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "捏": {
    meanings: { id: ["mengarang palsu", "memilin"], en: ["knead", "mix"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "tangan meremas tanah membuat kabar bohong", en: "hand", my: "လက်" },
  },
  "隠": {
    meanings: { id: ["bersembunyi", "menyembunyikan"], en: ["conceal", "hide", "cover"], my: ["အသံ / အသံထွက်", "ငါး"] },
    radicalMeaning: { id: "berlindung di balik bukit menyembunyikan diri", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "蔽": {
    meanings: { id: ["menutupi", "menyelubungi kedok"], en: ["cover", "shade", "mantle"], my: ["ဖုံးအုပ်သည်", "အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "rumput dan kain menutupi celah rapat", en: "grass / plants", my: "မြက် / အပင်ငယ်" },
  },
  "漏": {
    meanings: { id: ["bocor", "merembes luput"], en: ["leak", "escape", "time"], my: ["အဓိပ္ပာယ်", "လွတ်မြောက်သည်", "အချိန်"] },
    radicalMeaning: { id: "tetesan air bocor menetes dari atap rumah", en: "water", my: "ရေ" },
  },
  "洩": {
    meanings: {
      id: ["bocor keluar", "membocorkan"],
      en: ["leak", "escape"],
      my: ["ပေါက်ကြားခြင်း", "ပေါက်ကြားခြင်း။"]
    },
    radicalMeaning: { id: "aliran air merembes keluar menyebar rahasia", en: "water", my: "ရေ" },
  },
  "貪": {
    meanings: { id: ["serakah", "rakus tamak"], en: ["covet", "indulge in"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "mata sekarang mendambakan uang kerang", en: "shell / wealth / currency", my: "ခရုခွံ / ဥစ္စာဓန" },
  },
  "執": {
    meanings: { id: ["memegang teguh", "melaksanakan"], en: ["tenacious", "take hold", "grasp"], my: ["အဓိပ္ပာယ်", "ကိုင်တွယ်သည်", "ဆုပ်ကိုင်သည်"] },
    radicalMeaning: { id: "tangan memborgol memegang erat perintah", en: "earth / ground", my: "မြေကြီး / မြေပြင်" },
  },
  "拗": {
    meanings: { id: ["keras kepala", "memelintir hati"], en: ["crooked", "twisted", "distorted"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "tangan memelintir pikiran menjadi rumit", en: "hand", my: "လက်" },
  },
  "狡": {
    meanings: { id: ["licik", "cerdik licik"], en: ["cunning", "sly", "crafty"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "anjing liar berpura-pura menyerang tiba-tiba", en: "dog / animal", my: "ခွေး / တိရစ္ဆာန်" },
  },
  "猾": {
    meanings: { id: ["licik culas", "lihai mengelabui"], en: ["crafty"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "hewan buas menyelinap mengelabui mangsa", en: "dog / animal", my: "ခွေး / တိရစ္ဆာန်" },
  },
  "苛": {
    meanings: { id: ["keras pedih", "menindas kejam"], en: ["torment", "scold", "chastise"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "semak duri tajam menggores terasa perih", en: "grass / plants", my: "မြက် / အပင်ငယ်" },
  },
  "酷": {
    meanings: {
      id: ["kejam", "keras amat sangat"],
      en: ["cruel", "severe", "atrocious"],
      my: ["ရက်စက်တယ်", "အရမ်းကြမ်းတယ်။"]
    },
    radicalMeaning: { id: "minuman keras menyengat terasa pahit getir", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "惨": {
    meanings: { id: ["tragis", "mengenaskan pilu"], en: ["wretched", "disaster", "cruelty"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "hati teriris pilu melihat kehancuran", en: "heart / mind", my: "နှလုံးသား / စိတ်နှလုံး" },
  },
  "憺": {
    meanings: {
      id: ["cemas gelisah", "hancur luluh"],
      en: ["calm", "quiet", "move"],
      my: ["စိတ်ပူပန်ခြင်း", "ဂနာမငြိမ်ခြင်း"]
    },
    radicalMeaning: { id: "hati gemetar ketakutan melihat bencana", en: "heart / mind", my: "နှလုံးသား / စိတ်နှလုံး" },
  },
  "獰": {
    meanings: { id: ["ganas", "buas liar"], en: ["bad"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "anjing buas menerkam dengan ekspresi garang", en: "dog / animal", my: "ခွေး / တိရစ္ဆာန်" },
  },
  "禍": {
    meanings: { id: ["bencana", "malapetaka musibah"], en: ["calamity", "misfortune", "evil"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "altar terkena kutukan malapetaka bencana", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "弊": {
    meanings: { id: ["keburukan", "dampak buruk rugi"], en: ["abuse", "evil", "vice"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "pakaian usang sobek menandakan kebobrokan", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "瑕": {
    meanings: { id: ["cacat", "noda cela"], en: ["flaw", "blemish"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "batu permata bernoda cacat di bagian tepi", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "疵": {
    meanings: { id: ["cacat cela", "luka gores"], en: ["crack", "flaw", "scratch"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "penyakit meninggalkan cela luka pada badan", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "杜": {
    meanings: { id: ["mencegah", "menyumbat celah"], en: ["woods", "grove"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "pohon ditanam membendung lubang tanah", en: "tree / wood", my: "သစ်ပင် / သစ်သား" },
  },
  "撰": {
    meanings: { id: ["menyusun naskah", "mengedit"], en: ["composing", "editing", "compiling"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "tangan teliti menyusun lembaran naskah", en: "hand", my: "လက်" },
  },
  "粗": {
    meanings: { id: ["kasar", "mentah bersahaja"], en: ["coarse", "rough", "rugged"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "butir beras belum ditumbuk masih kasar", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "盲": {
    meanings: { id: ["tuna netra", "buta mata"], en: ["blind", "blind man", "ignoramus"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "mata lenyap kehilangan daya penglihatan", en: "eye / vision", my: "မျက်စိ / အမြင်" },
  },
  "桎": {
    meanings: { id: ["belenggu", "pasung perintang"], en: ["fetters"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "kayu pasung membelenggu kaki penjahat", en: "tree / wood", my: "သစ်ပင် / သစ်သား" },
  },
  "梏": {
    meanings: { id: ["borgol", "kungkungan jerat"], en: ["manacles"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "kayu borgol mengunci kedua pergelangan tangan", en: "tree / wood", my: "သစ်ပင် / သစ်သား" },
  },
  "岐": {
    meanings: { id: ["bercabang", "persimpangan jalan"], en: ["branch off", "fork in road", "scene"], my: ["ဌာနခွဲ", "အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "lereng gunung terbelah dua membentuk cabang", en: "mountain", my: "တောင်တန်း" },
  },
  "路": {
    meanings: {
      id: ["jalan lintasan", "rute"],
      en: ["path", "route", "road"],
      my: ["လမ်းကြောင်း", "လမ်းကြောင်း"]
    },
    radicalMeaning: { id: "kaki melangkah menempuh jalur jalanan", en: "foot / leg", my: "ခြေထောက်" },
  },
  "隘": {
    meanings: { id: ["sempit terjal", "ngarai sesak"], en: ["narrow", "obstruct"], my: ["အဓိပ္ပာယ်", "တားဆီးသည်"] },
    radicalMeaning: { id: "tebing bukit sempit menjepit lintasan", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "渇": {
    meanings: { id: ["haus", "mendambakan dahaga"], en: ["thirst", "dry up", "parch"], my: ["အဓိပ္ပာယ်", "အပေါ်"] },
    radicalMeaning: { id: "terik matahari membuat tenggorokan haus", en: "water", my: "ရေ" },
  },
  "羨": {
    meanings: { id: ["iri", "mendambakan kagum"], en: ["envious", "be jealous", "covet"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "air liur menetes mendambakan domba gemuk", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "嫉": {
    meanings: { id: ["dengki", "cemburu iri"], en: ["jealous", "envy"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "penyakit batin wanita menaruh iri hati", en: "woman / female", my: "အမျိုးသမီး" },
  },
  "妬": {
    meanings: { id: ["cemburu", "iri hati dengki"], en: ["jealous", "envy"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "wanita memasang batu cadas menolak madu", en: "woman / female", my: "အမျိုးသမီး" },
  },
  "憤": {
    meanings: { id: ["geram", "murka marah besar"], en: ["aroused", "resent", "be indignant"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "hati mendidih memendam amarah besar", en: "heart / mind", my: "နှလုံးသား / စိတ်နှလုံး" },
  },
  "慨": {
    meanings: { id: ["menghela nafas", "geram sedih"], en: ["rue", "be sad", "sigh"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "hati tercekik menghela nafas keprihatinan", en: "heart / mind", my: "နှလုံးသား / စိတ်နှလုံး" },
  },
  "嘆": {
    meanings: { id: ["mengeluh", "meratapi duka"], en: ["sigh", "lament", "moan"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "mulut mengeluh berduka meratapi nasib", en: "mouth / opening", my: "ပါးစပ် / အပေါက်" },
  },
  "悔": {
    meanings: { id: ["menyesal", "bertobat sedih"], en: ["repent", "regret"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "hati ibu menyesali kesalahan masa silam", en: "heart / mind", my: "နှလုံးသား / စိတ်နှလုံး" },
  },
  "恨": {
    meanings: { id: ["dendam", "membenci kesumat"], en: ["regret", "bear a grudge", "resentment"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "hati membendung kemarahan menyimpan dendam", en: "heart / mind", my: "နှလုံးသား / စိတ်နှလုံး" },
  },
  "諦": {
    meanings: { id: ["menyerah", "pasrah ikhlas"], en: ["truth", "clarity", "abandon"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "kata-kata kaisar menerima kenyataan pasrah", en: "words / speech", my: "စကားလုံး / ပြောဆိုချက်" },
  },
  "拘": {
    meanings: { id: ["menahan", "terikat membatasi"], en: ["arrest", "seize", "concerned"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "tangan mencengkeram menahan kebebasan", en: "hand", my: "လက်" },
  },
  "泥": {
    meanings: { id: ["lumpur", "becek kotor"], en: ["mud", "mire", "adhere to"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "aliran air bercampur tanah basah becek", en: "water", my: "ရေ" },
  },
  "固": {
    meanings: { id: ["keras", "kokoh mengeras"], en: ["harden", "set", "clot"], my: ["အဓိပ္ပာယ်", "ချထားသည်"] },
    radicalMeaning: { id: "benteng kuno bertahan kokoh di dalam kota", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "偏": {
    meanings: { id: ["berat sebelah", "condong bias"], en: ["partial", "side", "left-side radical"], my: ["အပိုင်း", "အဓိပ္ပာယ်", "အရင်းခံ"] },
    radicalMeaning: { id: "orang condong ke satu sudut pandang", en: "person / human", my: "လူသား" },
  },
  "狭": {
    meanings: { id: ["sempit", "sesak terbatas"], en: ["cramped", "narrow", "contract"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "anjing liar terdesak di sela jurang sempit", en: "dog / animal", my: "ခွေး / တိရစ္ဆာန်" },
  },
  "寛": {
    meanings: {
      id: ["luas lapang", "pemaaf toleran"],
      en: ["tolerant", "leniency", "generosity"],
      my: ["ကျယ်ဝန်းတယ်", "ခွင့်လွှတ်တယ်", "သည်းခံတယ်။"]
    },
    radicalMeaning: { id: "atap rumah luas lapang menampung siapa saja", en: "roof / house", my: "အမိုး / အိမ်ခေါင်မိုး" },
  },
  "謙": {
    meanings: { id: ["rendah hati", "tawaduk santun"], en: ["self-effacing", "humble oneself", "condescend"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "kata-kata berimbang diucapkan dengan rendah hati", en: "words / speech", my: "စကားလုံး / ပြောဆိုချက်" },
  },
  "虚": {
    meanings: { id: ["hampa", "kosong tanpa isi"], en: ["void", "emptiness", "unpreparedness"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "sarang harimau kosong tanpa penghuni", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "誠": {
    meanings: { id: ["tulus", "setia jujur"], en: ["sincerity", "admonish", "warn"], my: ["အဓိပ္ပာယ်", "သတိပေးသည်"] },
    radicalMeaning: { id: "kata-kata diwujudkan menjadi kenyataan tulus", en: "words / speech", my: "စကားလုံး / ပြောဆိုချက်" },
  },
  "摯": {
    meanings: { id: ["sungguh-sungguh", "teguh erat"], en: ["gift", "seriousness"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "tangan menggenggam janji dengan tulus hati", en: "hand", my: "လက်" },
  },
  "謹": {
    meanings: { id: ["cermat", "berhati-hati santun"], en: ["discreet", "reverently", "humbly"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "kata-kata emas diucapkan dengan penuh hormat", en: "words / speech", my: "စကားလုံး / ပြောဆိုချက်" },
  },
  "慎": {
    meanings: { id: ["waspada", "menjaga sikap"], en: ["humility", "be careful", "discreet"], my: ["အဓိပ္ပာယ်", "ကား"] },
    radicalMeaning: { id: "hati murni selalu berhati-hati bertindak", en: "heart / mind", my: "နှလုံးသား / စိတ်နှလုံး" },
  },
  "恭": {
    meanings: { id: ["hormat", "patuh takzim"], en: ["respect", "reverent"], my: ["ရိုသေသည်", "အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "dua tangan merangkap takzim menunduk hormat", en: "heart / mind", my: "နှလုံးသား / စိတ်နှလုံး" },
  },
  "崇": {
    meanings: { id: ["memuja", "menjunjung luhur"], en: ["adore", "respect", "revere"], my: ["အဓိပ္ပာယ်", "ရိုသေသည်"] },
    radicalMeaning: { id: "puncak gunung tinggi tempat memuja tuhan", en: "mountain", my: "တောင်တန်း" },
  },
  "畏": {
    meanings: { id: ["segan", "gentar takzim"], en: ["fear", "majestic", "graciously"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "hantu bertopeng menakutkan mengundang segan", en: "rice field", my: "လယ်ကွင်း" },
  },
  "粛": {
    meanings: { id: ["khusyuk", "hening tertib"], en: ["solemn", "quietly", "softly"], my: ["လေးနက်သော", "တိတ်ဆိတ်သော", "အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "tangan memegang kuas menulis dengan khusyuk", en: "kanji building component", my: "ခန်ဂျီး ဖွဲ့စည်းမှု အခြေခံ" },
  },
  "厳": {
    meanings: { id: ["ketat", "tegas disiplin"], en: ["stern", "strictness", "severity"], my: ["အဓိပ္ပာယ်", "တင်းကြပ်သော"] },
    radicalMeaning: { id: "dua tebing tegap menjulang tegas disiplin", en: "mouth / opening", my: "ပါးစပ် / အပေါက်" },
  },
  "荘": {
    meanings: { id: ["anggun megah", "vila agung"], en: ["villa", "inn", "cottage"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "tanah luas asri tempat mendirikan vila megah", en: "grass / plants", my: "မြက် / အပင်ငယ်" },
  },
  "絢": {
    meanings: { id: ["berkilau indah", "mewah elok"], en: ["brilliant fabric design"], my: ["အမှတ်အသား"] },
    radicalMeaning: { id: "anyaman sutra berwarna-warni memikat mata", en: "thread / connection", my: "အပ်ချည်ကြိုး / ချည်နှောင်မှု" },
  },
  "爛": {
    meanings: { id: ["bercahaya benderang", "melepuh"], en: ["be sore", "inflamed", "bleary"], my: ["အဓိပ္ပာယ်"] },
    radicalMeaning: { id: "kobaran api menyala benderang menerangi malam", en: "fire", my: "မီး" },
  },
};
