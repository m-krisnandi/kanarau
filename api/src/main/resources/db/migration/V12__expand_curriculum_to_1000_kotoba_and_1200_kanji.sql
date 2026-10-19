-- V12: Massive JLPT Curriculum Expansion to 1,000+ Kotoba and 1,180+ Kanji
-- Fully localized in Indonesian (ID), English (EN), and Myanmar (MY)

ALTER TABLE kotoba ADD COLUMN IF NOT EXISTS meaning_my TEXT;
ALTER TABLE kanji ADD COLUMN IF NOT EXISTS meaning_en TEXT;
ALTER TABLE kanji ADD COLUMN IF NOT EXISTS meaning_my TEXT;

-- Step 1: Update existing 661 kanji with EN and MY translations
UPDATE kanji SET meaning_en = 'interval, space', meaning_my = 'ကြားအကွာအဝေး ၊ နေရာလွတ်' WHERE character = '間';
UPDATE kanji SET meaning_en = 'isolate, alternate, distance', meaning_my = 'ခွဲထားသည် ၊ အလှည့်ကျသည် ၊ အကွာအဝေး' WHERE character = '隔';
UPDATE kanji SET meaning_en = 'char, hurry, impatient', meaning_my = 'ကျွမ်းသည် ၊ အလျင်စလိုလုပ်သည် ၊ စိတ်မရှည်သော' WHERE character = '焦';
UPDATE kanji SET meaning_en = 'ward off, defend, protect', meaning_my = 'တားဆီးသည် ၊ ကာကွယ်သည် ၊ စောင့်ရှောက်သည်' WHERE character = '防';
UPDATE kanji SET meaning_en = 'stop, halt', meaning_my = 'ရပ်တန့်သည် ၊ ရပ်သည်' WHERE character = '止';
UPDATE kanji SET meaning_en = 'smoke', meaning_my = 'မီးခိုး' WHERE character = '煙';
UPDATE kanji SET meaning_en = 'mistake, err, do wrong', meaning_my = 'အမှား ၊ မှားယွင်းသည် ၊ အမှားလုပ်သည်' WHERE character = '誤';
UPDATE kanji SET meaning_en = 'heavy, important, esteem', meaning_my = 'လေးလံသော ၊ အရေးကြီးသော ၊ လေးစားသည်' WHERE character = '重';
UPDATE kanji SET meaning_en = 'infancy, childhood', meaning_my = 'နို့စို့အရွယ် ၊ ကလေးဘဝ' WHERE character = '幼';
UPDATE kanji SET meaning_en = 'roof, house, shop', meaning_my = 'ခေါင်မိုး ၊ အိမ် ၊ ဆိုင်' WHERE character = '屋';
UPDATE kanji SET meaning_en = 'root, radical, head (pimple)', meaning_my = 'အမြစ် ၊ အရင်းခံ ၊ အဓိပ္ပာယ်' WHERE character = '根';
UPDATE kanji SET meaning_en = 'revise, correct, decide', meaning_my = 'ပြင်ဆင်သည် ၊ မှန်ကန်သော ၊ ဆုံးဖြတ်သည်' WHERE character = '訂';
UPDATE kanji SET meaning_en = 'correct, justice, righteous', meaning_my = 'မှန်ကန်သော ၊ တရားမျှတမှု ၊ ဖြောင့်မတ်သော' WHERE character = '正';
UPDATE kanji SET meaning_en = 'walk, counter for steps', meaning_my = 'လမ်း / လမ်းကြောင်း' WHERE character = '歩';
UPDATE kanji SET meaning_en = 'exit, leave, go out', meaning_my = 'အပြင်ဘက် ၊ muncul' WHERE character = '出';
UPDATE kanji SET meaning_en = 'products, bear, give birth', meaning_my = 'မွေးဖွားခြင်း ၊ menghasilkan' WHERE character = '産';
UPDATE kanji SET meaning_en = 'sash, belt, obi', meaning_my = 'ခါးပတ် ၊ အဓိပ္ပာယ်' WHERE character = '帯';
UPDATE kanji SET meaning_en = 'wink, blink, twinkle', meaning_my = 'မျက်စိမှိတ်သည် ၊ မျက်တောင်ခတ်သည်' WHERE character = '瞬';
UPDATE kanji SET meaning_en = 'know, wisdom', meaning_my = 'သိရှိသည် ၊ ဉာဏ်ပညာ' WHERE character = '知';
UPDATE kanji SET meaning_en = 'short, brevity, fault', meaning_my = 'တိုတောင်းသော ၊ တိုတိုတုတ်တုတ် ၊ အပြစ်' WHERE character = '短';
UPDATE kanji SET meaning_en = 'long, leader, superior', meaning_my = 'ရှည်လျားသော ၊ ခေါင်းဆောင် ၊ သာလွန်သော' WHERE character = '長';
UPDATE kanji SET meaning_en = 'ward, district', meaning_my = 'ဖခင် ၊ membedakan' WHERE character = '区';
UPDATE kanji SET meaning_en = 'separate, branch off, diverge', meaning_my = 'ခွဲထုတ်သည် ၊ ဌာနခွဲ ၊ အဓိပ္ပာယ်' WHERE character = '別';
UPDATE kanji SET meaning_en = 'boil, cook', meaning_my = 'ပြုတ်သည် ၊ ချက်ပြုတ်သည်' WHERE character = '煮';
UPDATE kanji SET meaning_en = 'crowded, mixture, in bulk', meaning_my = 'အတွင်းပိုင်း ၊ padat' WHERE character = '込';
UPDATE kanji SET meaning_en = 'unravel, notes, key', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '解';
UPDATE kanji SET meaning_en = 'decide, fix, agree upon', meaning_my = 'ဆုံးဖြတ်သည် ၊ အဓိပ္ပာယ် ၊ အပေါ်' WHERE character = '決';
UPDATE kanji SET meaning_en = 'shadow, silhouette, phantom', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '影';
UPDATE kanji SET meaning_en = 'echo, sound, resound', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '響';
UPDATE kanji SET meaning_en = 'shouldering, carry, raise', meaning_my = 'အဓိပ္ပာယ် ၊ ကား' WHERE character = '担';
UPDATE kanji SET meaning_en = 'hit, right, appropriate', meaning_my = 'အဓိပ္ပာယ် ၊ သင့်လျော်သော' WHERE character = '当';
UPDATE kanji SET meaning_en = 'prolong, stretching', meaning_my = 'ဆွဲဆန့်သည် ၊ ဆန့်ထုတ်သည်' WHERE character = '延';
UPDATE kanji SET meaning_en = 'period, time, date', meaning_my = 'ကာလ ၊ အချိန် ၊ ရက်စွဲ' WHERE character = '期';
UPDATE kanji SET meaning_en = 'outlook, look, appearance', meaning_my = 'ကြည့်သည် ၊ အဓိပ္ပာယ်' WHERE character = '観';
UPDATE kanji SET meaning_en = 'guess, presume, surmise', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '察';
UPDATE kanji SET meaning_en = 'plan, suggestion, draft', meaning_my = 'အစီအစဉ် ၊ အကြံပြုချက် ၊ မူကြမ်း' WHERE character = '案';
UPDATE kanji SET meaning_en = 'inside, within, between', meaning_my = 'အတွင်းပိုင်း ၊ urusan rumah' WHERE character = '内';
UPDATE kanji SET meaning_en = 'take along, lead, join', meaning_my = 'ရှည်လျားသော ၊ ဦးဆောင်သည် ၊ ပူးပေါင်းသည်' WHERE character = '連';
UPDATE kanji SET meaning_en = 'entwine, coil around, get caught in', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '絡';
UPDATE kanji SET meaning_en = 'semi-, correspond to, proportionate to', meaning_my = 'အဓိပ္ပာယ် ၊ လိုက်လျောညီထွေရှိသည်' WHERE character = '準';
UPDATE kanji SET meaning_en = 'equip, provision, preparation', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '備';
UPDATE kanji SET meaning_en = 'promise, approximately, shrink', meaning_my = 'ကတိပေးသည် ၊ ခန့်မှန်းခြေ ၊ အဓိပ္ပာယ်' WHERE character = '約';
UPDATE kanji SET meaning_en = 'bundle, sheaf, ream', meaning_my = 'စည်း ၊ ကောက်လှိုင်း ၊ အဓိပ္ပာယ်' WHERE character = '束';
UPDATE kanji SET meaning_en = 'beforehand, previous, myself', meaning_my = 'မတိုင်မီ ၊ estimasi' WHERE character = '予';
UPDATE kanji SET meaning_en = 'determine, fix, establish', meaning_my = 'သက်တမ်း ၊ အဓိပ္ပာယ်' WHERE character = '定';
UPDATE kanji SET meaning_en = 'eat, food', meaning_my = 'စားသောက်ခြင်း ၊ အစားအစာ' WHERE character = '食';
UPDATE kanji SET meaning_en = 'drink, smoke, take', meaning_my = 'သောက်သုံးခြင်း' WHERE character = '飲';
UPDATE kanji SET meaning_en = 'going, journey, carry out', meaning_my = 'သွားခြင်း ၊ တန်းစီခြင်း' WHERE character = '行';
UPDATE kanji SET meaning_en = 'come, due, next', meaning_my = 'လာခြင်း ၊ အနာဂတ်' WHERE character = '来';
UPDATE kanji SET meaning_en = 'see, hopes, chances', meaning_my = 'ကြည့်ရှုခြင်း ၊ ရှုမြင်ခြင်း' WHERE character = '見';
UPDATE kanji SET meaning_en = 'hear, ask, listen', meaning_my = 'ကြားရခြင်း ၊ မေးမြန်းခြင်း' WHERE character = '聞';
UPDATE kanji SET meaning_en = 'read', meaning_my = 'ဖတ်ရှုခြင်း' WHERE character = '読';
UPDATE kanji SET meaning_en = 'write', meaning_my = 'ရေးသားခြင်း ၊ စာအုပ် / စာရွက်စာတမ်း' WHERE character = '書';
UPDATE kanji SET meaning_en = 'tale, talk', meaning_my = 'စကားပြောခြင်း ၊ ပုံပြင် / အကြောင်းအရာ' WHERE character = '話';
UPDATE kanji SET meaning_en = 'buy', meaning_my = 'ဝယ်ယူခြင်း' WHERE character = '買';
UPDATE kanji SET meaning_en = 'one, one radical (no.1)', meaning_my = 'တစ်' WHERE character = '一';
UPDATE kanji SET meaning_en = 'two, two radical (no. 7)', meaning_my = 'နှစ်' WHERE character = '二';
UPDATE kanji SET meaning_en = 'three', meaning_my = 'သုံး' WHERE character = '三';
UPDATE kanji SET meaning_en = 'four', meaning_my = 'လေး' WHERE character = '四';
UPDATE kanji SET meaning_en = 'five', meaning_my = 'ငါး' WHERE character = '五';
UPDATE kanji SET meaning_en = 'six', meaning_my = 'ခြောက်' WHERE character = '六';
UPDATE kanji SET meaning_en = 'seven', meaning_my = 'ခုနစ်' WHERE character = '七';
UPDATE kanji SET meaning_en = 'eight, eight radical (no. 12)', meaning_my = 'ရှစ်' WHERE character = '八';
UPDATE kanji SET meaning_en = 'nine', meaning_my = 'ကိုး' WHERE character = '九';
UPDATE kanji SET meaning_en = 'ten', meaning_my = 'ဆယ်' WHERE character = '十';
UPDATE kanji SET meaning_en = 'hundred', meaning_my = 'ရာ' WHERE character = '百';
UPDATE kanji SET meaning_en = 'thousand', meaning_my = 'ထောင်' WHERE character = '千';
UPDATE kanji SET meaning_en = 'ten thousand, 10, 000', meaning_my = 'သောင်း' WHERE character = '万';
UPDATE kanji SET meaning_en = 'day, sun, Japan', meaning_my = 'နေမင်း / နေ့ရက် ၊ နေ့ရက်' WHERE character = '日';
UPDATE kanji SET meaning_en = 'month, moon', meaning_my = 'လမင်း / လ' WHERE character = '月';
UPDATE kanji SET meaning_en = 'fire', meaning_my = 'မီး' WHERE character = '火';
UPDATE kanji SET meaning_en = 'water', meaning_my = 'ရေ' WHERE character = '水';
UPDATE kanji SET meaning_en = 'tree, wood', meaning_my = 'သစ်ပင် ၊ သစ်သား' WHERE character = '木';
UPDATE kanji SET meaning_en = 'gold', meaning_my = 'ရွှေ / ငွေကြေး ၊ ငွေကြေး' WHERE character = '金';
UPDATE kanji SET meaning_en = 'soil, earth, ground', meaning_my = 'မြေကြီး' WHERE character = '土';
UPDATE kanji SET meaning_en = 'year, counter for years', meaning_my = 'နှစ် (ခုနှစ်)' WHERE character = '年';
UPDATE kanji SET meaning_en = 'now', meaning_my = 'ယခု / လက်ရှိ' WHERE character = '今';
UPDATE kanji SET meaning_en = 'part, minute of time, segment', meaning_my = 'မိနစ် ၊ ခွဲဝေခြင်း' WHERE character = '分';
UPDATE kanji SET meaning_en = 'half, middle, odd number', meaning_my = 'တစ်ဝက်' WHERE character = '半';
UPDATE kanji SET meaning_en = 'time, hour', meaning_my = 'အချိန် ၊ နာရီ' WHERE character = '時';
UPDATE kanji SET meaning_en = 'mountain', meaning_my = 'တောင်' WHERE character = '山';
UPDATE kanji SET meaning_en = 'stream, river, river or three-stroke river radical (no. 47)', meaning_my = 'မြစ်ချောင်း' WHERE character = '川';
UPDATE kanji SET meaning_en = 'rice field, rice paddy', meaning_my = 'လယ်ကွင်း' WHERE character = '田';
UPDATE kanji SET meaning_en = 'heavens, sky, imperial', meaning_my = 'ကောင်းကင် ၊ surga' WHERE character = '天';
UPDATE kanji SET meaning_en = 'spirit, mind, air', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '気';
UPDATE kanji SET meaning_en = 'rain', meaning_my = 'မိုးရေ' WHERE character = '雨';
UPDATE kanji SET meaning_en = 'above, up', meaning_my = 'အထက် / အပေါ်' WHERE character = '上';
UPDATE kanji SET meaning_en = 'below, down, descend', meaning_my = 'အောက်' WHERE character = '下';
UPDATE kanji SET meaning_en = 'left', meaning_my = 'ဘယ်ဘက်' WHERE character = '左';
UPDATE kanji SET meaning_en = 'right', meaning_my = 'ညာဘက်' WHERE character = '右';
UPDATE kanji SET meaning_en = 'in, inside, middle', meaning_my = 'အလယ် / အတွင်း ၊ အတွင်းပိုင်း' WHERE character = '中';
UPDATE kanji SET meaning_en = 'north', meaning_my = 'မြောက်ဘက်' WHERE character = '北';
UPDATE kanji SET meaning_en = 'south', meaning_my = 'တောင်ဘက်' WHERE character = '南';
UPDATE kanji SET meaning_en = 'east', meaning_my = 'အရှေ့ဘက်' WHERE character = '東';
UPDATE kanji SET meaning_en = 'west, Spain', meaning_my = 'အနောက်ဘက်' WHERE character = '西';
UPDATE kanji SET meaning_en = 'in front, before', meaning_my = 'အရှေ့ / ရှေ့ ၊ မတိုင်မီ' WHERE character = '前';
UPDATE kanji SET meaning_en = 'behind, back, later', meaning_my = 'အနောက် / နောက် ၊ sesudah' WHERE character = '後';
UPDATE kanji SET meaning_en = 'person', meaning_my = 'လူသား ၊ လူသား' WHERE character = '人';
UPDATE kanji SET meaning_en = 'male', meaning_my = 'ယောက်ျား ၊ အမျိုးသား' WHERE character = '男';
UPDATE kanji SET meaning_en = 'woman, female', meaning_my = 'မိန်းမ ၊ အမျိုးသမီး' WHERE character = '女';
UPDATE kanji SET meaning_en = 'child, sign of the rat, 11PM-1AM', meaning_my = 'ကလေး' WHERE character = '子';
UPDATE kanji SET meaning_en = 'father', meaning_my = 'ဖခင်' WHERE character = '父';
UPDATE kanji SET meaning_en = 'mother', meaning_my = 'မိခင်' WHERE character = '母';
UPDATE kanji SET meaning_en = 'friend', meaning_my = 'သူငယ်ချင်း ၊ မိတ်ဆွေ' WHERE character = '友';
UPDATE kanji SET meaning_en = 'study, learning, science', meaning_my = 'လေ့လာသင်ယူခြင်း ၊ ပညာရပ်' WHERE character = '学';
UPDATE kanji SET meaning_en = 'exam, school, printing', meaning_my = 'ကျောင်း' WHERE character = '校';
UPDATE kanji SET meaning_en = 'before, ahead, previous', meaning_my = 'မတိုင်မီ ၊ ရှေ့တွင် ၊ ယခင်က' WHERE character = '先';
UPDATE kanji SET meaning_en = 'life, genuine, birth', meaning_my = 'အသက်ရှင်ခြင်း ၊ မွေးဖွားခြင်း ၊ murid' WHERE character = '生';
UPDATE kanji SET meaning_en = 'car', meaning_my = 'မော်တော်ကား / ရထား ၊ ယာဉ်' WHERE character = '車';
UPDATE kanji SET meaning_en = 'name, noted, distinguished', meaning_my = 'နာမည် ၊ ကျော်ကြားမှု' WHERE character = '名';
UPDATE kanji SET meaning_en = 'electricity', meaning_my = 'လျှပ်စစ်' WHERE character = '電';
UPDATE kanji SET meaning_en = 'station', meaning_my = 'ဘူတာရုံ' WHERE character = '駅';
UPDATE kanji SET meaning_en = 'company, firm, office', meaning_my = 'ကုမ္ပဏီ ၊ နတ်ကွန်း / ဘုရားကျောင်း' WHERE character = '社';
UPDATE kanji SET meaning_en = 'store, shop', meaning_my = 'ဆိုင် ၊ အရောင်းဆိုင်' WHERE character = '店';
UPDATE kanji SET meaning_en = 'road-way, street, district', meaning_my = 'လမ်း / လမ်းကြောင်း ၊ တရားလမ်းစဉ်' WHERE character = '道';
UPDATE kanji SET meaning_en = 'trip, travel', meaning_my = 'ခရီးသွားခြင်း ၊ ခရီးလည်ပတ်ခြင်း' WHERE character = '旅';
UPDATE kanji SET meaning_en = 'reflect, reflection, projection', meaning_my = 'အရိပ်ထင်ဟပ်မှု ၊ ရုပ်ရှင်' WHERE character = '映';
UPDATE kanji SET meaning_en = 'brush-stroke, picture', meaning_my = 'ရုပ်ပုံ / ပန်းချီ ၊ ရေးဆွဲချက်' WHERE character = '画';
UPDATE kanji SET meaning_en = 'copy, be photographed, describe', meaning_my = 'ကူးယူခြင်း / ဓာတ်ပုံရိုက်ခြင်း ၊ ဓာတ်ပုံရိုက်ခြင်း' WHERE character = '写';
UPDATE kanji SET meaning_en = 'true, reality, Buddhist sect', meaning_my = 'အမှန်တရား ၊ စစ်မှန်သော' WHERE character = '真';
UPDATE kanji SET meaning_en = 'sound, noise', meaning_my = 'အသံ / အသံထွက် ၊ အသံအနိမ့်အမြင့်' WHERE character = '音';
UPDATE kanji SET meaning_en = 'music, comfort, ease', meaning_my = 'ဂီတ ၊ ပျော်ရွှင်ဖွယ်ကောင်းသော' WHERE character = '楽';
UPDATE kanji SET meaning_en = 'exertion, endeavour, encourage', meaning_my = 'ကြိုးစားအားထုတ်သော ၊ အပြင်းအထန် ကြိုးပမ်းခြင်း' WHERE character = '勉';
UPDATE kanji SET meaning_en = 'strong', meaning_my = 'သန်မာသော ၊ ခိုင်ခံ့သော' WHERE character = '強';
UPDATE kanji SET meaning_en = 'empty, sky, void', meaning_my = 'ကောင်းကင် ၊ ဗလာ / ဟာလာဟင်းလင်း' WHERE character = '空';
UPDATE kanji SET meaning_en = 'sea, ocean', meaning_my = 'ပင်လယ် ၊ သမုဒ္ဒရာ' WHERE character = '海';
UPDATE kanji SET meaning_en = 'springtime, spring (season)', meaning_my = 'နွေဦးရာသီ' WHERE character = '春';
UPDATE kanji SET meaning_en = 'summer', meaning_my = 'နွေရာသီ' WHERE character = '夏';
UPDATE kanji SET meaning_en = 'autumn', meaning_my = 'ဆောင်းဦးရာသီ' WHERE character = '秋';
UPDATE kanji SET meaning_en = 'winter', meaning_my = 'ဆောင်းရာသီ' WHERE character = '冬';
UPDATE kanji SET meaning_en = 'sutra, longitude, pass thru', meaning_my = 'အဓိပ္ပာယ် ၊ ရှည်လျားသော' WHERE character = '経';
UPDATE kanji SET meaning_en = 'settle (debt, etc.), relieve (burden), finish', meaning_my = 'ချထားသည် ၊ အဓိပ္ပာယ်' WHERE character = '済';
UPDATE kanji SET meaning_en = 'politics, government', meaning_my = 'အဓိပ္ပာယ် ၊ သွားသည်' WHERE character = '政';
UPDATE kanji SET meaning_en = 'reign, be at peace, calm down', meaning_my = 'အဓိပ္ပာယ် ၊ ငြိမ်းချမ်းရေး' WHERE character = '治';
UPDATE kanji SET meaning_en = 'tie, bind, contract', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '結';
UPDATE kanji SET meaning_en = 'marriage', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '婚';
UPDATE kanji SET meaning_en = 'inter-, mutual, together', meaning_my = 'အပြန်အလှန် ၊ နှစ်ဦးနှစ်ဖက် ၊ အတူတကွ' WHERE character = '相';
UPDATE kanji SET meaning_en = 'discuss, talk', meaning_my = 'အဓိပ္ပာယ် ၊ စကားပြောသည်' WHERE character = '談';
UPDATE kanji SET meaning_en = 'introduce, inherit, help', meaning_my = 'အဓိပ္ပာယ် ၊ ကူညီသည်' WHERE character = '紹';
UPDATE kanji SET meaning_en = 'jammed in, shellfish, mediate', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '介';
UPDATE kanji SET meaning_en = 'ring, circle, loop', meaning_my = 'စက်ဝိုင်း ၊ lingkungan' WHERE character = '環';
UPDATE kanji SET meaning_en = 'boundary, border, region', meaning_my = 'အထက် / အပေါ် ၊ ဖခင်' WHERE character = '境';
UPDATE kanji SET meaning_en = 'trade, exchange', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '貿';
UPDATE kanji SET meaning_en = 'easy, ready to, simple', meaning_my = 'အဓိပ္ပာယ် ၊ ဖတ်သည်' WHERE character = '易';
UPDATE kanji SET meaning_en = 'transport, send, be inferior', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '輸';
UPDATE kanji SET meaning_en = 'assets, resources, capital', meaning_my = 'ချထားသည် ၊ အဓိပ္ပာယ်' WHERE character = '資';
UPDATE kanji SET meaning_en = 'fee, materials', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '料';
UPDATE kanji SET meaning_en = 'tax, duty', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '税';
UPDATE kanji SET meaning_en = 'ratio, rate, proportion', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '率';
UPDATE kanji SET meaning_en = 'value, price', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '価';
UPDATE kanji SET meaning_en = 'every', meaning_my = 'တိုင်း / စီ ၊ saban' WHERE character = '毎';
UPDATE kanji SET meaning_en = 'week', meaning_my = 'အပတ် / ရက်သတ္တပတ် ၊ ရက်သတ္တပတ်' WHERE character = '週';
UPDATE kanji SET meaning_en = 'flower', meaning_my = 'ပန်းပွင့်' WHERE character = '花';
UPDATE kanji SET meaning_en = 'fish', meaning_my = 'ငါး' WHERE character = '魚';
UPDATE kanji SET meaning_en = 'outside', meaning_my = 'အပြင်ဘက် ၊ နိုင်ငံခြား' WHERE character = '外';
UPDATE kanji SET meaning_en = 'hand', meaning_my = 'လက်' WHERE character = '手';
UPDATE kanji SET meaning_en = 'leg, foot, be sufficient', meaning_my = 'ခြေထောက် ၊ mencukupi' WHERE character = '足';
UPDATE kanji SET meaning_en = 'eye, class, look', meaning_my = 'မျက်စိ' WHERE character = '目';
UPDATE kanji SET meaning_en = 'ear', meaning_my = 'နား' WHERE character = '耳';
UPDATE kanji SET meaning_en = 'mouth', meaning_my = 'ပါးစပ် ၊ ဝင်ရောက်ခြင်း' WHERE character = '口';
UPDATE kanji SET meaning_en = 'country', meaning_my = 'နိုင်ငံ ၊ တိုင်းပြည်' WHERE character = '国';
UPDATE kanji SET meaning_en = 'circle, yen, round', meaning_my = 'ယန်းငွေ / စက်ဝိုင်း ၊ စက်ဝိုင်း' WHERE character = '円';
UPDATE kanji SET meaning_en = 'book, present, main', meaning_my = 'စာအုပ် ၊ မူလအစ ၊ pokok' WHERE character = '本';
UPDATE kanji SET meaning_en = 'large, big', meaning_my = 'ကြီးမားသော' WHERE character = '大';
UPDATE kanji SET meaning_en = 'little, small', meaning_my = 'သေးငယ်သော ၊ mungil' WHERE character = '小';
UPDATE kanji SET meaning_en = 'tall, high, expensive', meaning_my = 'မြင့်သော / စျေးကြီးသော ၊ စျေးကြီးသော' WHERE character = '高';
UPDATE kanji SET meaning_en = 'relax, cheap, low', meaning_my = 'စျေးချိုသော ၊ အေးချမ်းသော ၊ aman' WHERE character = '安';
UPDATE kanji SET meaning_en = 'white', meaning_my = 'အဖြူရောင် ၊ suci' WHERE character = '白';
UPDATE kanji SET meaning_en = 'red', meaning_my = 'အနီရောင်' WHERE character = '赤';
UPDATE kanji SET meaning_en = 'new', meaning_my = 'အသစ် ၊ လတ်ဆတ်သော' WHERE character = '新';
UPDATE kanji SET meaning_en = 'old', meaning_my = 'ရှေးကျသော ၊ အဟောင်း / ကြာမြင့်သော ၊ tua' WHERE character = '古';
UPDATE kanji SET meaning_en = 'many, frequent, much', meaning_my = 'များပြားသော ၊ melimpah' WHERE character = '多';
UPDATE kanji SET meaning_en = 'few, little', meaning_my = 'အနည်းငယ် ၊ langka' WHERE character = '少';
UPDATE kanji SET meaning_en = 'enter, insert', meaning_my = 'ဝင်ရောက်ခြင်း ၊ ထည့်သွင်းခြင်း' WHERE character = '入';
UPDATE kanji SET meaning_en = 'stand up, rise, set up', meaning_my = 'မတ်တပ်ရပ်ခြင်း ၊ ဖြောင့်မတ်သော' WHERE character = '立';
UPDATE kanji SET meaning_en = 'rest, day off, retire', meaning_my = 'အနားယူခြင်း ၊ အားလပ်ရက်' WHERE character = '休';
UPDATE kanji SET meaning_en = 'meeting, meet, party', meaning_my = 'တွေ့ဆုံခြင်း ၊ အစည်းအဝေး ၊ အသင်းအဖွဲ့' WHERE character = '会';
UPDATE kanji SET meaning_en = 'say, word', meaning_my = 'ပြောဆိုခြင်း ၊ စကားသံ' WHERE character = '言';
UPDATE kanji SET meaning_en = 'homecoming, arrive at, lead to', meaning_my = 'အိမ်ပြန်ခြင်း ၊ ပြန်လည်ရောက်ရှိခြင်း' WHERE character = '帰';
UPDATE kanji SET meaning_en = 'noon, sign of the horse, 11AM-1PM', meaning_my = 'မွန်းတည့် / နေ့လယ် ၊ မွန်းတည့်ချိန်' WHERE character = '午';
UPDATE kanji SET meaning_en = 'what', meaning_my = 'ဘာလဲ / အဘယ်အရာ ၊ အဘယ်ကြောင့်' WHERE character = '何';
UPDATE kanji SET meaning_en = 'same, agree, equal', meaning_my = 'အဓိပ္ပာယ် ၊ သဘောတူသည်' WHERE character = '同';
UPDATE kanji SET meaning_en = 'matter, thing, fact', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '事';
UPDATE kanji SET meaning_en = 'oneself', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '自';
UPDATE kanji SET meaning_en = 'departure, discharge, publish', meaning_my = 'အပိုင်း ၊ ကျွမ်းသည် ၊ ထုတ်ဝေသည်' WHERE character = '発';
UPDATE kanji SET meaning_en = 'someone, person', meaning_my = 'လူသား ၊ pihak' WHERE character = '者';
UPDATE kanji SET meaning_en = 'ground, earth', meaning_my = 'မြေကြီး ၊ မြေပြင် ၊ ဖခင်' WHERE character = '地';
UPDATE kanji SET meaning_en = 'business, vocation, arts', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '業';
UPDATE kanji SET meaning_en = 'direction, person, alternative', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '方';
UPDATE kanji SET meaning_en = 'location, place', meaning_my = 'လေး ၊ lokasi ၊ arena' WHERE character = '場';
UPDATE kanji SET meaning_en = 'employee, member, number', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '員';
UPDATE kanji SET meaning_en = 'open, unfold, unseal', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '開';
UPDATE kanji SET meaning_en = 'power, strength, strong', meaning_my = 'အင်အား ၊ ခွန်အား ၊ သန်မာသော' WHERE character = '力';
UPDATE kanji SET meaning_en = 'question, ask, problem', meaning_my = 'အဓိပ္ပာယ် ၊ မေးသည်' WHERE character = '問';
UPDATE kanji SET meaning_en = 'substitute, change, convert', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '代';
UPDATE kanji SET meaning_en = 'bright, light', meaning_my = 'တောက်ပသော ၊ အလင်းရောင်' WHERE character = '明';
UPDATE kanji SET meaning_en = 'move, motion, change', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '動';
UPDATE kanji SET meaning_en = 'capital, 10**16', meaning_my = 'မိခင်' WHERE character = '京';
UPDATE kanji SET meaning_en = 'traffic, pass through, avenue', meaning_my = 'အဓိပ္ပာယ် ၊ ဖြတ်သန်းသည်' WHERE character = '通';
UPDATE kanji SET meaning_en = 'logic, arrangement, reason', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '理';
UPDATE kanji SET meaning_en = 'body, substance, object', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '体';
UPDATE kanji SET meaning_en = 'lord, chief, master', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '主';
UPDATE kanji SET meaning_en = 'topic, subject', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '題';
UPDATE kanji SET meaning_en = 'idea, mind, heart', meaning_my = 'အဓိပ္ပာယ် ၊ ကြားသည်' WHERE character = '意';
UPDATE kanji SET meaning_en = 'negative, non-, bad', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '不';
UPDATE kanji SET meaning_en = 'make, production, prepare', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '作';
UPDATE kanji SET meaning_en = 'utilize, business, service', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '用';
UPDATE kanji SET meaning_en = 'degrees, occurrence, time', meaning_my = 'အဓိပ္ပာယ် ၊ အချိန်' WHERE character = '度';
UPDATE kanji SET meaning_en = 'public, prince, official', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '公';
UPDATE kanji SET meaning_en = 'hold, have', meaning_my = 'ကိုင်တွယ်သည် ၊ အဓိပ္ပာယ်' WHERE character = '持';
UPDATE kanji SET meaning_en = 'plains, field, rustic', meaning_my = 'ဘာလဲ / အဘယ်အရာ ၊ ladang liar' WHERE character = '野';
UPDATE kanji SET meaning_en = 'by means of, because, in view of', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '以';
UPDATE kanji SET meaning_en = 'think', meaning_my = 'တွေးတောသည်' WHERE character = '思';
UPDATE kanji SET meaning_en = 'house, home, family', meaning_my = 'အိမ် ၊ အဓိပ္ပာယ် ၊ မိသားစု' WHERE character = '家';
UPDATE kanji SET meaning_en = 'generation, world, society', meaning_my = 'အဓိပ္ပာယ် ၊ ကမ္ဘာ' WHERE character = '世';
UPDATE kanji SET meaning_en = 'Inst., institution, temple', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '院';
UPDATE kanji SET meaning_en = 'heart, mind, spirit', meaning_my = 'ကြားသည် ၊ အဓိပ္ပာယ်' WHERE character = '心';
UPDATE kanji SET meaning_en = 'world, boundary', meaning_my = 'ကမ္ဘာ ၊ အဓိပ္ပာယ်' WHERE character = '界';
UPDATE kanji SET meaning_en = 'teach, faith, doctrine', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '教';
UPDATE kanji SET meaning_en = 'sentence, literature, style', meaning_my = 'ငါး ၊ naskah ၊ kesusastraan' WHERE character = '文';
UPDATE kanji SET meaning_en = 'beginning, former time, origin', meaning_my = 'မူလအစ ၊ pokok ၊ mantan ၊ awal' WHERE character = '元';
UPDATE kanji SET meaning_en = 'near, early, akin', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '近';
UPDATE kanji SET meaning_en = 'consider, think over', meaning_my = 'အဓိပ္ပာယ် ၊ တွေးတောသည်' WHERE character = '考';
UPDATE kanji SET meaning_en = 'sell', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '売';
UPDATE kanji SET meaning_en = 'gather, meet, congregate', meaning_my = 'အဓိပ္ပာယ် ၊ တွေ့ဆုံသည်' WHERE character = '集';
UPDATE kanji SET meaning_en = 'thing, object, matter', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '物';
UPDATE kanji SET meaning_en = 'use, send on a mission, order', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '使';
UPDATE kanji SET meaning_en = 'goods, refinement, dignity', meaning_my = 'သွားသည် ၊ အဓိပ္ပာယ်' WHERE character = '品';
UPDATE kanji SET meaning_en = 'plot, plan, scheme', meaning_my = 'အဓိပ္ပာယ် ၊ အစီအစဉ်' WHERE character = '計';
UPDATE kanji SET meaning_en = 'death, die', meaning_my = 'စားသည် ၊ သေဆုံးသည်' WHERE character = '死';
UPDATE kanji SET meaning_en = 'special', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '特';
UPDATE kanji SET meaning_en = 'private, I, me', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '私';
UPDATE kanji SET meaning_en = 'commence, begin', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '始';
UPDATE kanji SET meaning_en = 'morning, dynasty, regime', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '朝';
UPDATE kanji SET meaning_en = 'carry, luck, destiny', meaning_my = 'ကား ၊ အဓိပ္ပာယ်' WHERE character = '運';
UPDATE kanji SET meaning_en = 'end, finish', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '終';
UPDATE kanji SET meaning_en = 'pedestal, a stand, counter for machines and vehicles', meaning_my = 'အဓိပ္ပာယ် ၊ ယာဉ်' WHERE character = '台';
UPDATE kanji SET meaning_en = 'wide, broad, spacious', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '広';
UPDATE kanji SET meaning_en = 'dwell, reside, live', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '住';
UPDATE kanji SET meaning_en = 'possess, have, exist', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '有';
UPDATE kanji SET meaning_en = 'town, village, block', meaning_my = 'သေးငယ်သော ၊ ဖခင်' WHERE character = '町';
UPDATE kanji SET meaning_en = 'craft, construction, katakana e radical (no. 48)', meaning_my = 'အဓိပ္ပာယ် ၊ အရင်းခံ' WHERE character = '工';
UPDATE kanji SET meaning_en = 'build', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '建';
UPDATE kanji SET meaning_en = 'hurry, emergency, sudden', meaning_my = 'အလျင်စလိုလုပ်သည် ၊ အဓိပ္ပာယ်' WHERE character = '急';
UPDATE kanji SET meaning_en = 'escort, send', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '送';
UPDATE kanji SET meaning_en = 'cut, cutoff, be sharp', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '切';
UPDATE kanji SET meaning_en = 'revolve, turn around, change', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '転';
UPDATE kanji SET meaning_en = 'polish, study of, sharpen', meaning_my = 'အဓိပ္ပာယ် ၊ လေ့လာသည်' WHERE character = '研';
UPDATE kanji SET meaning_en = 'research, study', meaning_my = 'ရှာဖွေသည် ၊ လေ့လာသည်' WHERE character = '究';
UPDATE kanji SET meaning_en = 'rouse, wake up, get up', meaning_my = 'အဓိပ္ပာယ် ၊ အပေါ်' WHERE character = '起';
UPDATE kanji SET meaning_en = 'don, arrive, wear', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '着';
UPDATE kanji SET meaning_en = 'ill, sick', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '病';
UPDATE kanji SET meaning_en = 'substance, quality, matter', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '質';
UPDATE kanji SET meaning_en = 'wait, depend on', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '待';
UPDATE kanji SET meaning_en = 'test, try, attempt', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '試';
UPDATE kanji SET meaning_en = 'tribe, family', meaning_my = 'မျိုးနွယ်စု ၊ မိသားစု' WHERE character = '族';
UPDATE kanji SET meaning_en = 'silver', meaning_my = 'ငွေ' WHERE character = '銀';
UPDATE kanji SET meaning_en = 'early, fast', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '早';
UPDATE kanji SET meaning_en = 'parent, intimacy, relative', meaning_my = 'လူသား ၊ akrab ၊ dekat' WHERE character = '親';
UPDATE kanji SET meaning_en = 'head, counter for large animals', meaning_my = 'အဓိပ္ပာယ် ၊ ကြီးမားသော' WHERE character = '頭';
UPDATE kanji SET meaning_en = 'England, English, hero', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '英';
UPDATE kanji SET meaning_en = 'doctor, medicine', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '医';
UPDATE kanji SET meaning_en = 'attend, doing, official', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '仕';
UPDATE kanji SET meaning_en = 'gone, past, quit', meaning_my = 'သွားသည် ၊ အဓိပ္ပာယ်' WHERE character = '去';
UPDATE kanji SET meaning_en = 'flavor, taste', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '味';
UPDATE kanji SET meaning_en = 'character, letter, word', meaning_my = 'ကျွမ်းသည် ၊ အဓိပ္ပာယ်' WHERE character = '字';
UPDATE kanji SET meaning_en = 'solution, answer', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '答';
UPDATE kanji SET meaning_en = 'night, evening', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '夜';
UPDATE kanji SET meaning_en = 'pour, irrigate, shed (tears)', meaning_my = 'ငွေကြေး ၊ fokus ၊ menyiram' WHERE character = '注';
UPDATE kanji SET meaning_en = 'song, sing', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '歌';
UPDATE kanji SET meaning_en = 'bad, vice, rascal', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '悪';
UPDATE kanji SET meaning_en = 'map, drawing, plan', meaning_my = 'အဓိပ္ပာယ် ၊ အစီအစဉ်' WHERE character = '図';
UPDATE kanji SET meaning_en = 'room, apartment, chamber', meaning_my = 'ငွေကြေး ၊ kamar' WHERE character = '室';
UPDATE kanji SET meaning_en = 'wind, air, style', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '風';
UPDATE kanji SET meaning_en = 'paper', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '紙';
UPDATE kanji SET meaning_en = 'black', meaning_my = 'ချို့တဲ့သည်' WHERE character = '黒';
UPDATE kanji SET meaning_en = 'blue, green', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '青';
UPDATE kanji SET meaning_en = 'building, mansion, large building', meaning_my = 'အဓိပ္ပာယ် ၊ ကြီးမားသော' WHERE character = '館';
UPDATE kanji SET meaning_en = 'color', meaning_my = 'အရောင်' WHERE character = '色';
UPDATE kanji SET meaning_en = 'run', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '走';
UPDATE kanji SET meaning_en = 'meal, boiled rice', meaning_my = 'အဓိပ္ပာယ် ၊ ပြုတ်သည်' WHERE character = '飯';
UPDATE kanji SET meaning_en = 'meat', meaning_my = 'စားသည်' WHERE character = '肉';
UPDATE kanji SET meaning_en = 'lend', meaning_my = 'နာရီ ၊ menyewakan' WHERE character = '貸';
UPDATE kanji SET meaning_en = 'borrow, rent', meaning_my = 'နာရီ ၊ berhutang' WHERE character = '借';
UPDATE kanji SET meaning_en = 'clothing, admit, obey', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '服';
UPDATE kanji SET meaning_en = 'evening', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '夕';
UPDATE kanji SET meaning_en = 'dog', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '犬';
UPDATE kanji SET meaning_en = 'bird, chicken', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '鳥';
UPDATE kanji SET meaning_en = 'younger brother, faithful service to elders', meaning_my = 'ယောက်ျား' WHERE character = '弟';
UPDATE kanji SET meaning_en = 'younger sister', meaning_my = 'မိန်းမ' WHERE character = '妹';
UPDATE kanji SET meaning_en = 'elder sister', meaning_my = 'မိန်းမ' WHERE character = '姉';
UPDATE kanji SET meaning_en = 'elder brother, big brother', meaning_my = 'ယောက်ျား' WHERE character = '兄';
UPDATE kanji SET meaning_en = 'tea', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '茶';
UPDATE kanji SET meaning_en = 'daytime, noon', meaning_my = 'မွန်းတည့် / နေ့လယ် ၊ နေ့ရက်' WHERE character = '昼';
UPDATE kanji SET meaning_en = 'cow', meaning_my = 'မီး ၊ lembu perah' WHERE character = '牛';
UPDATE kanji SET meaning_en = 'lightly, trifling, unimportant', meaning_my = 'အလင်းရောင် ၊ အဓိပ္ပာယ် ၊ အရေးကြီးသော' WHERE character = '軽';
UPDATE kanji SET meaning_en = 'cold', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '寒';
UPDATE kanji SET meaning_en = 'darkness, disappear, shade', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '暗';
UPDATE kanji SET meaning_en = 'neck, counter for songs and poems', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '首';
UPDATE kanji SET meaning_en = 'wash, inquire into, probe', meaning_my = 'အဓိပ္ပာယ် ၊ အတွင်းသို့' WHERE character = '洗';
UPDATE kanji SET meaning_en = 'ocean, sea, foreign', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '洋';
UPDATE kanji SET meaning_en = 'distant, far', meaning_my = 'ဝေးကွာသော ၊ ဝေးသော' WHERE character = '遠';
UPDATE kanji SET meaning_en = 'public chamber, hall', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '堂';
UPDATE kanji SET meaning_en = 'park, garden, yard', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '園';
UPDATE kanji SET meaning_en = 'snow', meaning_my = 'ယခု' WHERE character = '雪';
UPDATE kanji SET meaning_en = 'plump, thick, big around', meaning_my = 'အဓိပ္ပာယ် ၊ ကြီးသော' WHERE character = '太';
UPDATE kanji SET meaning_en = 'pond, cistern, pool', meaning_my = 'ခြောက်' WHERE character = '池';
UPDATE kanji SET meaning_en = 'grove, forest', meaning_my = 'သေးငယ်သော ၊ သစ်ပင်' WHERE character = '林';
UPDATE kanji SET meaning_en = 'forest, woods', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '森';
UPDATE kanji SET meaning_en = 'co-, cooperation', meaning_my = 'ပူးတွဲ ၊ ပူးပေါင်းဆောင်ရွက်မှု' WHERE character = '協';
UPDATE kanji SET meaning_en = 'individual, counter for articles', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '個';
UPDATE kanji SET meaning_en = 'overall, relationship, ruling', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '統';
UPDATE kanji SET meaning_en = 'protect, guarantee, keep', meaning_my = 'စောင့်ရှောက်သည် ၊ အဓိပ္ပာယ် ၊ ထိန်းသိမ်းသည်' WHERE character = '保';
UPDATE kanji SET meaning_en = 'exist, suppose, be aware of', meaning_my = 'အဓိပ္ပာယ် ၊ အပေါ်' WHERE character = '存';
UPDATE kanji SET meaning_en = 'deliberation, consultation, debate', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '議';
UPDATE kanji SET meaning_en = 'elect, select, choose', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '選';
UPDATE kanji SET meaning_en = 'present, existing, actual', meaning_my = 'လက်ရှိ ၊ အဓိပ္ပာယ်' WHERE character = '現';
UPDATE kanji SET meaning_en = 'acknowledge, witness, discern', meaning_my = 'သိရှိသည် ၊ အဓိပ္ပာယ်' WHERE character = '認';
UPDATE kanji SET meaning_en = 'bureau, board, office', meaning_my = 'ဌာန ၊ အဓိပ္ပာယ် ၊ ရုံး' WHERE character = '局';
UPDATE kanji SET meaning_en = 'tune, tone, meter', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '調';
UPDATE kanji SET meaning_en = 'investigate', meaning_my = 'စုံစမ်းစစ်ဆေးသည်' WHERE character = '査';
UPDATE kanji SET meaning_en = 'surface, table, chart', meaning_my = 'အဓိပ္ပာယ် ၊ ကျွမ်းသည်' WHERE character = '表';
UPDATE kanji SET meaning_en = 'show, indicate, point out', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '示';
UPDATE kanji SET meaning_en = 'standard, measure', meaning_my = 'အဓိပ္ပာယ် ၊ အတိုင်းအတာ' WHERE character = '規';
UPDATE kanji SET meaning_en = 'rule, law, follow', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '則';
UPDATE kanji SET meaning_en = 'system, law, rule', meaning_my = 'ငါး ၊ sistem' WHERE character = '制';
UPDATE kanji SET meaning_en = 'style, ceremony, rite', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '式';
UPDATE kanji SET meaning_en = 'fundamentals, radical (chem), counter for machines', meaning_my = 'အဓိပ္ပာယ် ၊ အရင်းခံ' WHERE character = '基';
UPDATE kanji SET meaning_en = 'establishment, provision, prepare', meaning_my = 'ငါး ၊ merancang' WHERE character = '設';
UPDATE kanji SET meaning_en = 'sort, kind, variety', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '類';
UPDATE kanji SET meaning_en = 'increase, add, augment', meaning_my = 'လွယ်ကူစေသည် ၊ အဓိပ္ပာယ်' WHERE character = '増';
UPDATE kanji SET meaning_en = 'dwindle, decrease, reduce', meaning_my = 'အဓိပ္ပာယ် ၊ လွယ်ကူစေသည်' WHERE character = '減';
UPDATE kanji SET meaning_en = 'contain, form, looks', meaning_my = 'အဓိပ္ပာယ် ၊ ကြည့်သည်' WHERE character = '容';
UPDATE kanji SET meaning_en = 'shift, move, change', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '移';
UPDATE kanji SET meaning_en = 'throw, discard, abandon', meaning_my = 'အဓိပ္ပာယ် ၊ ကား' WHERE character = '投';
UPDATE kanji SET meaning_en = 'impart, instruct, grant', meaning_my = 'ငါး ၊ menganugerahkan' WHERE character = '授';
UPDATE kanji SET meaning_en = 'blame, condemn, censure', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '責';
UPDATE kanji SET meaning_en = 'responsibility, duty, term', meaning_my = 'အဓိပ္ပာယ် ၊ သက်တမ်း' WHERE character = '任';
UPDATE kanji SET meaning_en = 'status quo, conditions, circumstances', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '状';
UPDATE kanji SET meaning_en = 'attitude, condition, figure', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '態';
UPDATE kanji SET meaning_en = 'memorize, learn, remember', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '覚';
UPDATE kanji SET meaning_en = 'enlightenment, perceive, discern', meaning_my = 'အလင်းရောင် ၊ အဓိပ္ပာယ်' WHERE character = '悟';
UPDATE kanji SET meaning_en = 'welcome, meet, greet', meaning_my = 'လာသည် ၊ တွေ့ဆုံသည် ၊ အဓိပ္ပာယ်' WHERE character = '迎';
UPDATE kanji SET meaning_en = 'chase, drive away, follow', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '追';
UPDATE kanji SET meaning_en = 'surpass, cross over, move to', meaning_my = 'သာလွန်သည် ၊ ဖြတ်ကျော်သည် ၊ အဓိပ္ပာယ်' WHERE character = '越';
UPDATE kanji SET meaning_en = 'slip out, extract, pull out', meaning_my = 'အဓိပ္ပာယ် ၊ ထုတ်ယူသည် ၊ ဆွဲထုတ်သည်' WHERE character = '抜';
UPDATE kanji SET meaning_en = 'deliver, reach, arrive', meaning_my = 'ငါး ၊ laporan tiba' WHERE character = '届';
UPDATE kanji SET meaning_en = 'transit, ford, ferry', meaning_my = 'အဓိပ္ပာယ် ၊ မှားယွင်းသည်' WHERE character = '渡';
UPDATE kanji SET meaning_en = 'draw near, stop in, bring near', meaning_my = 'အဓိပ္ပာယ် ၊ ရပ်တန့်သည်' WHERE character = '寄';
UPDATE kanji SET meaning_en = 'beckon, invite, summon', meaning_my = 'ခေါ်ယူသည် ၊ ဖိတ်ခေါ်သည် ၊ ဆင့်ခေါ်သည်' WHERE character = '招';
UPDATE kanji SET meaning_en = 'call on, visit, look up', meaning_my = 'ခေါ်သည် ၊ အဓိပ္ပာယ် ၊ အပေါ်' WHERE character = '訪';
UPDATE kanji SET meaning_en = 'pay respects, visit, ask', meaning_my = 'ရိုသေသည် ၊ အဓိပ္ပာယ် ၊ မေးသည်' WHERE character = '伺';
UPDATE kanji SET meaning_en = 'nonplussed, three (in documents), going', meaning_my = 'အဓိပ္ပာယ် ၊ သွားသည်' WHERE character = '参';
UPDATE kanji SET meaning_en = 'worship, adore, pray to', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '拝';
UPDATE kanji SET meaning_en = 'petition, request, vow', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '願';
UPDATE kanji SET meaning_en = 'ambition, full moon, hope', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '望';
UPDATE kanji SET meaning_en = 'longing, covetousness, greed', meaning_my = 'ရှည်လျားသော ၊ အဓိပ္ပာယ်' WHERE character = '欲';
UPDATE kanji SET meaning_en = 'rejoice, take pleasure in', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '喜';
UPDATE kanji SET meaning_en = 'angry, be offended', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '怒';
UPDATE kanji SET meaning_en = 'grieve, sad, deplore', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '悲';
UPDATE kanji SET meaning_en = 'suffering, trial, worry', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '苦';
UPDATE kanji SET meaning_en = 'pain, hurt, damage', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '痛';
UPDATE kanji SET meaning_en = 'trouble, worry, in pain', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '悩';
UPDATE kanji SET meaning_en = 'astray, be perplexed, in doubt', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '迷';
UPDATE kanji SET meaning_en = 'doubt, distrust, be suspicious', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '疑';
UPDATE kanji SET meaning_en = 'beguile, delusion, perplexity', meaning_my = 'အဓိပ္ပာယ် ၊ ထွက်ပေါက်' WHERE character = '惑';
UPDATE kanji SET meaning_en = 'fear, dread, awe', meaning_my = 'အဓိပ္ပာယ် ၊ ဖတ်သည်' WHERE character = '恐';
UPDATE kanji SET meaning_en = 'dreadful, be frightened, fearful', meaning_my = 'ဖတ်သည် ၊ အဓိပ္ပာယ်' WHERE character = '怖';
UPDATE kanji SET meaning_en = 'wonder, be surprised, frightened', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '驚';
UPDATE kanji SET meaning_en = 'disconcerted, be confused, lose one''s head', meaning_my = 'အဓိပ္ပာယ် ၊ ရှုပ်ထွေးစေသည်' WHERE character = '慌';
UPDATE kanji SET meaning_en = 'busy, occupied, restless', meaning_my = 'မိခင် ၊ repot bergegas' WHERE character = '忙';
UPDATE kanji SET meaning_en = 'spare time, rest, leisure', meaning_my = 'ငွေကြေး ၊ santai senggang' WHERE character = '暇';
UPDATE kanji SET meaning_en = 'bountiful, excellent, rich', meaning_my = 'အဓိပ္ပာယ် ၊ ထူးချွန်သည်' WHERE character = '豊';
UPDATE kanji SET meaning_en = 'wealth, enrich, abundant', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '富';
UPDATE kanji SET meaning_en = 'poverty, poor', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '貧';
UPDATE kanji SET meaning_en = 'destitution, scarce, limited', meaning_my = 'အဓိပ္ပာယ် ၊ ကား ၊ ကန့်သတ်ချက်' WHERE character = '乏';
UPDATE kanji SET meaning_en = 'violent, get excited, enraged', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '激';
UPDATE kanji SET meaning_en = 'fierce, rave, rush', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '猛';
UPDATE kanji SET meaning_en = 'ardent, violent, vehement', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '烈';
UPDATE kanji SET meaning_en = 'calm, quiet, moderation', meaning_my = 'အေးချမ်းသော ၊ damai tenteram' WHERE character = '穏';
UPDATE kanji SET meaning_en = 'harmony, Japanese style, peace', meaning_my = 'အဓိပ္ပာယ် ၊ ငြိမ်းချမ်းရေး' WHERE character = '和';
UPDATE kanji SET meaning_en = 'precipitous, inaccessible place, impregnable position', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '険';
UPDATE kanji SET meaning_en = 'dangerous, fear, uneasy', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '危';
UPDATE kanji SET meaning_en = 'harm, injury', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '害';
UPDATE kanji SET meaning_en = 'damage, loss, disadvantage', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '損';
UPDATE kanji SET meaning_en = 'gain, get, find', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '得';
UPDATE kanji SET meaning_en = 'benefit, gain, profit', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '益';
UPDATE kanji SET meaning_en = 'achievement, merits, success', meaning_my = 'အောင်မြင်သည် ၊ အဓိပ္ပာယ်' WHERE character = '功';
UPDATE kanji SET meaning_en = 'failure, defeat, reversal', meaning_my = 'ကျရှုံးသည် ၊ စားသည် ၊ အဓိပ္ပာယ်' WHERE character = '敗';
UPDATE kanji SET meaning_en = 'contend, dispute, argue', meaning_my = 'အဓိပ္ပာယ် ၊ ထားသည်' WHERE character = '争';
UPDATE kanji SET meaning_en = 'riot, war, disorder', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '乱';
UPDATE kanji SET meaning_en = 'mix, blend, confuse', meaning_my = 'အဓိပ္ပာယ် ၊ ရှုပ်ထွေးစေသည်' WHERE character = '混';
UPDATE kanji SET meaning_en = 'miscellaneous', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '雑';
UPDATE kanji SET meaning_en = 'mutually, reciprocally, together', meaning_my = 'နှစ်ဦးနှစ်ဖက် ၊ ခေါ်သည် ၊ အတူတကွ' WHERE character = '互';
UPDATE kanji SET meaning_en = 'together, both, neither', meaning_my = 'အတူတကွ ၊ အဓိပ္ပာယ်' WHERE character = '共';
UPDATE kanji SET meaning_en = 'single, alone, spontaneously', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '独';
UPDATE kanji SET meaning_en = 'each, every, either', meaning_my = 'နိုင်ငံခြား ၊ တိုင်း / စီ' WHERE character = '各';
UPDATE kanji SET meaning_en = 'various, many, several', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '諸';
UPDATE kanji SET meaning_en = 'again, twice, second time', meaning_my = 'အဓိပ္ပာယ် ၊ အချိန်' WHERE character = '再';
UPDATE kanji SET meaning_en = 'duplicate, double, compound', meaning_my = 'အပေါ် ၊ အဓိပ္ပာယ်' WHERE character = '複';
UPDATE kanji SET meaning_en = 'simple, one, single', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '単';
UPDATE kanji SET meaning_en = 'genuine, purity, innocence', meaning_my = 'စစ်မှန်သော ၊ အဓိပ္ပာယ်' WHERE character = '純';
UPDATE kanji SET meaning_en = 'difficult, impossible, trouble', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '難';
UPDATE kanji SET meaning_en = 'victory, win, prevail', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '勝';
UPDATE kanji SET meaning_en = 'defeat, negative, -', meaning_my = 'စားသည် ၊ အဓိပ္ပာယ်' WHERE character = '負';
UPDATE kanji SET meaning_en = 'enemy, foe, opponent', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '敵';
UPDATE kanji SET meaning_en = 'consort, accompany, bring with', meaning_my = 'အဓိပ္ပာယ် ၊ ကုမ္ပဏီ' WHERE character = '伴';
UPDATE kanji SET meaning_en = 'weave, fabric', meaning_my = 'ရက်လုပ်သည် ၊ အဓိပ္ပာယ်' WHERE character = '織';
UPDATE kanji SET meaning_en = 'group, association', meaning_my = 'အပေါ် ၊ အသင်းအဖွဲ့' WHERE character = '団';
UPDATE kanji SET meaning_en = 'posture, stance, appearance', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '構';
UPDATE kanji SET meaning_en = 'create, make, structure', meaning_my = 'စားသည် ၊ အဓိပ္ပာယ်' WHERE character = '造';
UPDATE kanji SET meaning_en = 'utensil, vessel, receptacle', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '器';
UPDATE kanji SET meaning_en = 'tool, utensil, means', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '具';
UPDATE kanji SET meaning_en = 'lumber, log, timber', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '材';
UPDATE kanji SET meaning_en = 'made in..., manufacture', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '製';
UPDATE kanji SET meaning_en = 'marketing, sell, trade', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '販';
UPDATE kanji SET meaning_en = 'subscription, buy', meaning_my = 'ဝယ်ယူခြင်း ၊ berlangganan' WHERE character = '購';
UPDATE kanji SET meaning_en = 'expense, cost, spend', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '費';
UPDATE kanji SET meaning_en = 'status, rank, capacity', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '格';
UPDATE kanji SET meaning_en = 'forehead, tablet, plaque', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '額';
UPDATE kanji SET meaning_en = 'fare, fee, hire', meaning_my = 'ဝေးသော ၊ အဓိပ္ပာယ်' WHERE character = '賃';
UPDATE kanji SET meaning_en = 'breath, respiration, son', meaning_my = 'စားသည် ၊ အဓိပ္ပာယ်' WHERE character = '息';
UPDATE kanji SET meaning_en = 'distinction, difference, variation', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '差';
UPDATE kanji SET meaning_en = 'level, average', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '均';
UPDATE kanji SET meaning_en = 'etc., and so forth, class (first)', meaning_my = 'အဓိပ္ပာယ် ၊ အတန်း' WHERE character = '等';
UPDATE kanji SET meaning_en = 'compare, race, ratio', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '比';
UPDATE kanji SET meaning_en = 'contrast, compare', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '較';
UPDATE kanji SET meaning_en = 'fathom, plan, scheme', meaning_my = 'အတွင်းပိုင်း' WHERE character = '測';
UPDATE kanji SET meaning_en = 'calculate, divining, number', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '算';
UPDATE kanji SET meaning_en = 'quantity, measure, weight', meaning_my = 'အဓိပ္ပာယ် ၊ အတိုင်းအတာ' WHERE character = '量';
UPDATE kanji SET meaning_en = 'signpost, seal, mark', meaning_my = 'အမှတ်အသား ၊ အဓိပ္ပာယ်' WHERE character = '標';
UPDATE kanji SET meaning_en = 'extent, degree, law', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '程';
UPDATE kanji SET meaning_en = 'limit, restrict, to best of ability', meaning_my = 'အထက် / အပေါ် ၊ အထက် / အပေါ်' WHERE character = '限';
UPDATE kanji SET meaning_en = 'range, region, limits', meaning_my = 'ဖခင် ၊ kawasan zona' WHERE character = '域';
UPDATE kanji SET meaning_en = 'stratum, social class, layer', meaning_my = 'မီး ၊ tingkatan strata' WHERE character = '層';
UPDATE kanji SET meaning_en = 'class, rank, grade', meaning_my = 'အတန်း ၊ အဓိပ္ပာယ်' WHERE character = '級';
UPDATE kanji SET meaning_en = 'storey, stair, counter for storeys of a building', meaning_my = 'သိုလှောင်သည် ၊ အဓိပ္ပာယ်' WHERE character = '階';
UPDATE kanji SET meaning_en = 'obey, order, turn', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '順';
UPDATE kanji SET meaning_en = 'file, row, rank', meaning_my = 'တန်းစီခြင်း ၊ deretan antrean' WHERE character = '列';
UPDATE kanji SET meaning_en = 'row, and, besides', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '並';
UPDATE kanji SET meaning_en = 'overthrow, fall, collapse', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '倒';
UPDATE kanji SET meaning_en = 'crumble, die, demolish', meaning_my = 'ပြိုကျသည် ၊ သေဆုံးသည် ၊ ဖျက်ဆီးသည်' WHERE character = '崩';
UPDATE kanji SET meaning_en = 'demolition, break, destroy', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '壊';
UPDATE kanji SET meaning_en = 'discipline, conduct oneself well, study', meaning_my = 'အဓိပ္ပာယ် ၊ လေ့လာသည်' WHERE character = '修';
UPDATE kanji SET meaning_en = 'supplement, supply, make good', meaning_my = 'ခြောက် ၊ မီး' WHERE character = '補';
UPDATE kanji SET meaning_en = 'perfect, completion, end', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '完';
UPDATE kanji SET meaning_en = 'turn into, become, get', meaning_my = 'အတွင်းသို့ ၊ လာသည် ၊ အဓိပ္ပာယ်' WHERE character = '成';
UPDATE kanji SET meaning_en = 'un-, not yet, hitherto', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '未';
UPDATE kanji SET meaning_en = 'continue, series, sequel', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '続';
UPDATE kanji SET meaning_en = 'severance, decline, refuse', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '断';
UPDATE kanji SET meaning_en = 'halt, stopping', meaning_my = 'ရပ်သည် ၊ ရပ်တန့်သည်' WHERE character = '停';
UPDATE kanji SET meaning_en = 'detain, fasten, halt', meaning_my = 'အဓိပ္ပာယ် ၊ ရပ်သည်' WHERE character = '留';
UPDATE kanji SET meaning_en = 'extreme, pole, extremely', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '極';
UPDATE kanji SET meaning_en = 'edge, origin, end', meaning_my = 'အဓိပ္ပာယ် ၊ မူလအစ' WHERE character = '端';
UPDATE kanji SET meaning_en = 'place on the head, receive, top of head', meaning_my = 'အဓိပ္ပာယ် ၊ လက်ခံသည်' WHERE character = '頂';
UPDATE kanji SET meaning_en = 'bottom, sole, depth', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '底';
UPDATE kanji SET meaning_en = 'deep, heighten, intensify', meaning_my = 'အတွင်းပိုင်း ၊ အတွင်းပိုင်း' WHERE character = '深';
UPDATE kanji SET meaning_en = 'shallow, superficial, frivolous', meaning_my = 'အဓိပ္ပာယ် ၊ အပေါ်' WHERE character = '浅';
UPDATE kanji SET meaning_en = 'concentrated, thick, dark', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '濃';
UPDATE kanji SET meaning_en = 'thin, faint, pale', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '淡';
UPDATE kanji SET meaning_en = 'floating, float, rise to surface', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '浮';
UPDATE kanji SET meaning_en = 'sink, be submerged, subside', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '沈';
UPDATE kanji SET meaning_en = 'perform, complete, footgear', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '履';
UPDATE kanji SET meaning_en = 'contact, touch, feel', meaning_my = 'ယန်းငွေ / စက်ဝိုင်း ၊ menyinggung rasa' WHERE character = '触';
UPDATE kanji SET meaning_en = 'embrace, hug, hold in arms', meaning_my = 'အဓိပ္ပာယ် ၊ ကိုင်တွယ်သည်' WHERE character = '抱';
UPDATE kanji SET meaning_en = 'pinch, between', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '挟';
UPDATE kanji SET meaning_en = 'employ, hire', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '雇';
UPDATE kanji SET meaning_en = 'exchange, spare, substitute', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '替';
UPDATE kanji SET meaning_en = 'acquiesce, hear, listen to', meaning_my = 'အဓိပ္ပာယ် ၊ ကြားသည် ၊ နားထောင်သည်' WHERE character = '承';
UPDATE kanji SET meaning_en = 'shrink, contract, shrivel', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '縮';
UPDATE kanji SET meaning_en = 'stagnate, be delayed, overdue', meaning_my = 'အဓိပ္ပာယ် ၊ ရောက်ရှိချိန်' WHERE character = '滞';
UPDATE kanji SET meaning_en = 'route, way, road', meaning_my = 'အလယ် / အတွင်း ၊ ခရီးသွားခြင်း' WHERE character = '途';
UPDATE kanji SET meaning_en = 'accidentally, even number, couple', meaning_my = 'မြင့်သော ၊ အဓိပ္ပာယ် ၊ အပေါ်' WHERE character = '偶';
UPDATE kanji SET meaning_en = 'strange, strangeness, curiosity', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '奇';
UPDATE kanji SET meaning_en = 'interchange, period, change', meaning_my = 'အဓိပ္ပာယ် ၊ ကာလ' WHERE character = '換';
UPDATE kanji SET meaning_en = 'rend, rip, tear', meaning_my = 'ခွဲခြမ်းသည် ၊ စုတ်ပြဲသည် ၊ စုတ်သည်' WHERE character = '破';
UPDATE kanji SET meaning_en = 'reparation, make up for, recompense', meaning_my = 'အဓိပ္ပာယ် ၊ အပေါ်' WHERE character = '償';
UPDATE kanji SET meaning_en = 'checkup, seeing, diagnose', meaning_my = 'စစ်ဆေးသည် ၊ ကြည့်သည် ၊ အဓိပ္ပာယ်' WHERE character = '診';
UPDATE kanji SET meaning_en = 'vein, pulse, hope', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '脈';
UPDATE kanji SET meaning_en = 'heal, cure', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '療';
UPDATE kanji SET meaning_en = 'foster, bring up, rear', meaning_my = 'အဓိပ္ပာယ် ၊ အပေါ်' WHERE character = '養';
UPDATE kanji SET meaning_en = 'healthy, health, strength', meaning_my = 'အဓိပ္ပာယ် ၊ ခွန်အား' WHERE character = '健';
UPDATE kanji SET meaning_en = 'ease, peace', meaning_my = 'လွယ်ကူစေသည် ၊ ငြိမ်းချမ်းရေး' WHERE character = '康';
UPDATE kanji SET meaning_en = 'afflicted, disease, suffer from', meaning_my = 'အဓိပ္ပာယ် ၊ လွယ်ကူစေသည်' WHERE character = '患';
UPDATE kanji SET meaning_en = 'symptoms, illness', meaning_my = 'လက္ခဏာ ၊ အဓိပ္ပာယ်' WHERE character = '症';
UPDATE kanji SET meaning_en = 'portent, 10**12, trillion', meaning_my = 'ရှေ့ပြေးနိမိတ် ၊ အဓိပ္ပာယ်' WHERE character = '兆';
UPDATE kanji SET meaning_en = 'repress, well, now', meaning_my = 'အဓိပ္ပာယ် ၊ ယခု' WHERE character = '抑';
UPDATE kanji SET meaning_en = 'pressure, push, overwhelm', meaning_my = 'ညာဘက် ၊ menindih tindas' WHERE character = '圧';
UPDATE kanji SET meaning_en = 'stimulate, urge, press', meaning_my = 'လှုံ့ဆော်သည် ၊ တိုက်တွန်းသည် ၊ အဓိပ္ပာယ်' WHERE character = '促';
UPDATE kanji SET meaning_en = 'advance, proceed, progress', meaning_my = 'တိုးတက်သည် ၊ အဓိပ္ပာယ်' WHERE character = '進';
UPDATE kanji SET meaning_en = 'repel, refuse, reject', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '拒';
UPDATE kanji SET meaning_en = 'discontinue, sever, cut off', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '絶';
UPDATE kanji SET meaning_en = 'consent, assent, agreement', meaning_my = 'အဓိပ္ပာယ် ၊ သဘောတူသည်' WHERE character = '諾';
UPDATE kanji SET meaning_en = 'persuade, recommend, advise', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '勧';
UPDATE kanji SET meaning_en = 'entice, lead, tempt', meaning_my = 'အဓိပ္ပာယ် ၊ ဦးဆောင်သည်' WHERE character = '誘';
UPDATE kanji SET meaning_en = 'urge, force, imminent', meaning_my = 'တိုက်တွန်းသည် ၊ အဓိပ္ပာယ်' WHERE character = '迫';
UPDATE kanji SET meaning_en = 'threaten, coerce', meaning_my = 'စားသည် ၊ အဓိပ္ပာယ်' WHERE character = '脅';
UPDATE kanji SET meaning_en = 'intimidate, dignity, majesty', meaning_my = 'ရက်စွဲ ၊ အဓိပ္ပာယ်' WHERE character = '威';
UPDATE kanji SET meaning_en = 'sponsor, hold (a meeting), give (a dinner)', meaning_my = 'အဓိပ္ပာယ် ၊ ကိုင်တွယ်သည်' WHERE character = '催';
UPDATE kanji SET meaning_en = 'coach, command, urge', meaning_my = 'အဓိပ္ပာယ် ၊ တိုက်တွန်းသည်' WHERE character = '督';
UPDATE kanji SET meaning_en = 'encourage, be diligent, inspire', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '励';
UPDATE kanji SET meaning_en = 'stirred up, be invigorated, flourish', meaning_my = 'အပေါ် ၊ သွားသည် ၊ အဓိပ္ပာယ်' WHERE character = '奮';
UPDATE kanji SET meaning_en = 'fight, war', meaning_my = 'ငွေကြေး ၊ bertarung tanding' WHERE character = '闘';
UPDATE kanji SET meaning_en = 'challenge, contend for, make love to', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '挑';
UPDATE kanji SET meaning_en = 'war, battle, match', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '戦';
UPDATE kanji SET meaning_en = 'emulate, compete with, bid', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '競';
UPDATE kanji SET meaning_en = 'chastise, attack, defeat', meaning_my = 'အဓိပ္ပာယ် ၊ စားသည်' WHERE character = '討';
UPDATE kanji SET meaning_en = 'argument, discourse', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '論';
UPDATE kanji SET meaning_en = 'hearing, judge, trial', meaning_my = 'ကြားသည် ၊ တရားသူကြီး ၊ အဓိပ္ပာယ်' WHERE character = '審';
UPDATE kanji SET meaning_en = 'evaluate, criticism, comment', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '評';
UPDATE kanji SET meaning_en = 'criticism, strike', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '批';
UPDATE kanji SET meaning_en = 'judgement, judgment, signature', meaning_my = 'တရားသူကြီး ၊ အဓိပ္ပာယ် ၊ အမှတ်အသား' WHERE character = '判';
UPDATE kanji SET meaning_en = 'just so, this, right', meaning_my = 'အမှန်တရား ၊ sudah barang tentu' WHERE character = '是';
UPDATE kanji SET meaning_en = 'un-, mistake, negative', meaning_my = 'အဓိပ္ပာယ် ၊ အမှား' WHERE character = '非';
UPDATE kanji SET meaning_en = 'approve, praise, title or inscription on picture', meaning_my = 'အဓိပ္ပာယ် ၊ စုတ်ပြဲသည်' WHERE character = '賛';
UPDATE kanji SET meaning_en = 'negate, no, noes', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '否';
UPDATE kanji SET meaning_en = 'agreement, consent, comply with', meaning_my = 'သဘောတူသည် ၊ အဓိပ္ပာယ်' WHERE character = '肯';
UPDATE kanji SET meaning_en = 'propose, take along, carry in hand', meaning_my = 'အဓိပ္ပာယ် ၊ ရှည်လျားသော ၊ ကား' WHERE character = '提';
UPDATE kanji SET meaning_en = 'submit, offer, present', meaning_my = 'အဓိပ္ပာယ် ၊ လက်ရှိ' WHERE character = '供';
UPDATE kanji SET meaning_en = 'defer, turnover, transfer', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '譲';
UPDATE kanji SET meaning_en = 'committee, entrust to, leave to', meaning_my = 'အဓိပ္ပာယ် ၊ ထွက်ခွာသည်' WHERE character = '委';
UPDATE kanji SET meaning_en = 'consign, requesting, entrusting with', meaning_my = 'မိနစ် ၊ memercayakan amanah' WHERE character = '託';
UPDATE kanji SET meaning_en = 'solicit, invite, ask', meaning_my = 'အဓိပ္ပာယ် ၊ ဖိတ်ခေါ်သည် ၊ မေးသည်' WHERE character = '請';
UPDATE kanji SET meaning_en = 'permit, approve', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '許';
UPDATE kanji SET meaning_en = 'can, passable, approval', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '可';
UPDATE kanji SET meaning_en = 'prohibition, ban, forbid', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '禁';
UPDATE kanji SET meaning_en = 'difference, differ', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '違';
UPDATE kanji SET meaning_en = 'anti-', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '反';
UPDATE kanji SET meaning_en = 'encroach, invade, raid', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '侵';
UPDATE kanji SET meaning_en = 'dispose, manage, deal with', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '処';
UPDATE kanji SET meaning_en = 'penalty, punishment', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '罰';
UPDATE kanji SET meaning_en = 'guilt, sin, crime', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '罪';
UPDATE kanji SET meaning_en = 'evade, avoid, avert', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '避';
UPDATE kanji SET meaning_en = 'excuse, dismissal', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '免';
UPDATE kanji SET meaning_en = 'salvation, save, help', meaning_my = 'အဓိပ္ပာယ် ၊ စုဆောင်းသည် ၊ ကူညီသည်' WHERE character = '救';
UPDATE kanji SET meaning_en = 'abet, help, save', meaning_my = 'အဓိပ္ပာယ် ၊ ကူညီသည် ၊ စုဆောင်းသည်' WHERE character = '援';
UPDATE kanji SET meaning_en = 'help, rescue, assist', meaning_my = 'ကူညီသည် ၊ အဓိပ္ပာယ် ၊ အကူအညီပေးသည်' WHERE character = '助';
UPDATE kanji SET meaning_en = 'adhere, attach, refer to', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '付';
UPDATE kanji SET meaning_en = 'tribute, support, finance', meaning_my = 'အဓိပ္ပာယ် ၊ ထောက်ပံ့သည်' WHERE character = '貢';
UPDATE kanji SET meaning_en = 'offering, counter for drinks, present', meaning_my = 'အဓိပ္ပာယ် ၊ သောက်သည် ၊ လက်ရှိ' WHERE character = '献';
UPDATE kanji SET meaning_en = 'grace, kindness, goodness', meaning_my = 'အဓိပ္ပာယ် ၊ သွားသည်' WHERE character = '恩';
UPDATE kanji SET meaning_en = 'favor, blessing, grace', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '恵';
UPDATE kanji SET meaning_en = 'report, news, reward', meaning_my = 'အဓိပ္ပာယ် ၊ အသစ် ၊ ဆုလာဘ်' WHERE character = '報';
UPDATE kanji SET meaning_en = 'repay, reward, retribution', meaning_my = 'အဓိပ္ပာယ် ၊ ဆုလာဘ်' WHERE character = '酬';
UPDATE kanji SET meaning_en = 'apologize, thank, refuse', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '謝';
UPDATE kanji SET meaning_en = 'salute, bow, ceremony', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '礼';
UPDATE kanji SET meaning_en = 'awe, respect, honor', meaning_my = 'အဓိပ္ပာယ် ၊ ရိုသေသည်' WHERE character = '敬';
UPDATE kanji SET meaning_en = 'revered, valuable, precious', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '尊';
UPDATE kanji SET meaning_en = 'inspection, regard as, see', meaning_my = 'ရှုမြင်ခြင်း ၊ memeriksa cermat' WHERE character = '視';
UPDATE kanji SET meaning_en = 'nothingness, none, ain''t', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '無';
UPDATE kanji SET meaning_en = 'look back, review, examine oneself', meaning_my = 'ပြန်လည်ရောက်ရှိခြင်း ၊ menoleh' WHERE character = '顧';
UPDATE kanji SET meaning_en = 'finger, point to, indicate', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '指';
UPDATE kanji SET meaning_en = 'guidance, leading, conduct', meaning_my = 'အဓိပ္ပာယ် ၊ ဦးဆောင်သည်' WHERE character = '導';
UPDATE kanji SET meaning_en = 'oversee, official, govt office', meaning_my = 'ကြည့်သည် ၊ အဓိပ္ပာယ် ၊ သွားသည်' WHERE character = '監';
UPDATE kanji SET meaning_en = 'pipe, tube, wind instrument', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '管';
UPDATE kanji SET meaning_en = 'undertake, scheme, design', meaning_my = 'ကလေး ၊ ကုမ္ပဏီ' WHERE character = '企';
UPDATE kanji SET meaning_en = 'property, money, wealth', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '財';
UPDATE kanji SET meaning_en = 'dissolve, melt', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '融';
UPDATE kanji SET meaning_en = 'income, obtain, reap', meaning_my = 'ခြောက် ၊ memanen perolehan' WHERE character = '収';
UPDATE kanji SET meaning_en = 'lose, error, fault', meaning_my = 'အဓိပ္ပာယ် ၊ မှားယွင်းသည် ၊ အပြစ်' WHERE character = '失';
UPDATE kanji SET meaning_en = 'bond, loan, debt', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '債';
UPDATE kanji SET meaning_en = 'restore, return to, revert', meaning_my = 'သိုလှောင်သည် ၊ အဓိပ္ပာယ်' WHERE character = '復';
UPDATE kanji SET meaning_en = 'entertain, revive, retrieve', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '興';
UPDATE kanji SET meaning_en = 'luxuriant, thick, overgrown', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '繁';
UPDATE kanji SET meaning_en = 'flourish, prosperity, honor', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '栄';
UPDATE kanji SET meaning_en = 'decline, wane, weaken', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '衰';
UPDATE kanji SET meaning_en = 'retreat, withdraw, retire', meaning_my = 'စားသည် ၊ အဓိပ္ပာယ်' WHERE character = '退';
UPDATE kanji SET meaning_en = 'drown, sink, hide', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '没';
UPDATE kanji SET meaning_en = 'fall, drop, come down', meaning_my = 'အဓိပ္ပာယ် ၊ လာသည်' WHERE character = '落';
UPDATE kanji SET meaning_en = 'slacken, loosen, relax', meaning_my = 'ချို့တဲ့သည် ၊ လျော့ရဲသည် ၊ သက်သာစေသည်' WHERE character = '緩';
UPDATE kanji SET meaning_en = 'steadily, gradually advancing, finally', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '漸';
UPDATE kanji SET meaning_en = 'thwart, separate from, prevent', meaning_my = 'အဓိပ္ပာယ် ၊ ခွဲထုတ်သည်' WHERE character = '阻';
UPDATE kanji SET meaning_en = 'deceit, cheat, delude', meaning_my = 'အဓိပ္ပာယ် ၊ စားသည်' WHERE character = '欺';
UPDATE kanji SET meaning_en = 'lie, falsehood, deceive', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '詐';
UPDATE kanji SET meaning_en = 'be rent, ripped, unravel', meaning_my = 'အဓိပ္ပာယ် ၊ စုတ်ပြဲသည်' WHERE character = '綻';
UPDATE kanji SET meaning_en = 'scorn, despise, make light of', meaning_my = 'အဓိပ္ပာယ် ၊ အလင်းရောင်' WHERE character = '侮';
UPDATE kanji SET meaning_en = 'ignore, despise, neglect', meaning_my = 'အဓိပ္ပာယ် ၊ လျစ်လျူရှုသည်' WHERE character = '蔑';
UPDATE kanji SET meaning_en = 'ridicule, insult', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '嘲';
UPDATE kanji SET meaning_en = 'brew, cause', meaning_my = 'ချက်သည် ၊ အဓိပ္ပာယ်' WHERE character = '醸';
UPDATE kanji SET meaning_en = 'yell, cry, call', meaning_my = 'အဓိပ္ပာယ် ၊ ခေါ်သည်' WHERE character = '喚';
UPDATE kanji SET meaning_en = 'fine (i.e. not coarse)', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '緻';
UPDATE kanji SET meaning_en = 'secrecy, density (pop), minuteness', meaning_my = 'အစည်းအဝေး ၊ rahasia intim' WHERE character = '密';
UPDATE kanji SET meaning_en = 'dark, not clear', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '曖';
UPDATE kanji SET meaning_en = 'dark, foolish', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '昧';
UPDATE kanji SET meaning_en = 'consult with', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '諮';
UPDATE kanji SET meaning_en = 'widow, minority, few', meaning_my = 'အနည်းငယ် ၊ janda sepi' WHERE character = '寡';
UPDATE kanji SET meaning_en = 'melancholy, grieve, lament', meaning_my = 'ရွှေ / ငွေကြေး ၊ gundah berduka' WHERE character = '憂';
UPDATE kanji SET meaning_en = 'prudence, thought, concern', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '慮';
UPDATE kanji SET meaning_en = 'fear', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '慄';
UPDATE kanji SET meaning_en = 'twist, ask, investigate', meaning_my = 'အဓိပ္ပာယ် ၊ မေးသည် ၊ စုံစမ်းစစ်ဆေးသည်' WHERE character = '糾';
UPDATE kanji SET meaning_en = 'bullet, twang, flip', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '弾';
UPDATE kanji SET meaning_en = 'oppose, disobey', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '乖';
UPDATE kanji SET meaning_en = 'detach, separation, disjoin', meaning_my = 'အဓိပ္ပာယ် ၊ ပူးပေါင်းသည်' WHERE character = '離';
UPDATE kanji SET meaning_en = 'mark, foot print', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '痕';
UPDATE kanji SET meaning_en = 'tracks, mark, print', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '跡';
UPDATE kanji SET meaning_en = 'be proud', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '傲';
UPDATE kanji SET meaning_en = 'ridicule, laziness', meaning_my = 'အဓိပ္ပာယ် ၊ ပျင်းရိခြင်း' WHERE character = '慢';
UPDATE kanji SET meaning_en = 'slacken, relax', meaning_my = 'ချို့တဲ့သည် ၊ သက်သာစေသည်' WHERE character = '弛';
UPDATE kanji SET meaning_en = 'hesitate', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '躊';
UPDATE kanji SET meaning_en = 'hesitate', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '躇';
UPDATE kanji SET meaning_en = 'uneven, bite, disagree', meaning_my = 'အဓိပ္ပာယ် ၊ သဘောတူသည်' WHERE character = '齟';
UPDATE kanji SET meaning_en = 'irregular teeth', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '齬';
UPDATE kanji SET meaning_en = 'pull, tug, drag', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '牽';
UPDATE kanji SET meaning_en = 'knead, mix', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '捏';
UPDATE kanji SET meaning_en = 'conceal, hide, cover', meaning_my = 'အသံ / အသံထွက် ၊ ငါး' WHERE character = '隠';
UPDATE kanji SET meaning_en = 'cover, shade, mantle', meaning_my = 'ဖုံးအုပ်သည် ၊ အဓိပ္ပာယ်' WHERE character = '蔽';
UPDATE kanji SET meaning_en = 'leak, escape, time', meaning_my = 'အဓိပ္ပာယ် ၊ လွတ်မြောက်သည် ၊ အချိန်' WHERE character = '漏';
UPDATE kanji SET meaning_en = 'leak, escape', meaning_my = 'အပြင်ဘက် ၊ membocorkan' WHERE character = '洩';
UPDATE kanji SET meaning_en = 'covet, indulge in', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '貪';
UPDATE kanji SET meaning_en = 'tenacious, take hold, grasp', meaning_my = 'အဓိပ္ပာယ် ၊ ကိုင်တွယ်သည် ၊ ဆုပ်ကိုင်သည်' WHERE character = '執';
UPDATE kanji SET meaning_en = 'crooked, twisted, distorted', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '拗';
UPDATE kanji SET meaning_en = 'cunning, sly, crafty', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '狡';
UPDATE kanji SET meaning_en = 'crafty', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '猾';
UPDATE kanji SET meaning_en = 'torment, scold, chastise', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '苛';
UPDATE kanji SET meaning_en = 'cruel, severe, atrocious', meaning_my = 'နာရီ ၊ keras amat sangat' WHERE character = '酷';
UPDATE kanji SET meaning_en = 'wretched, disaster, cruelty', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '惨';
UPDATE kanji SET meaning_en = 'calm, quiet, move', meaning_my = 'ရွှေ / ငွေကြေး ၊ hancur luluh' WHERE character = '憺';
UPDATE kanji SET meaning_en = 'bad', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '獰';
UPDATE kanji SET meaning_en = 'calamity, misfortune, evil', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '禍';
UPDATE kanji SET meaning_en = 'abuse, evil, vice', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '弊';
UPDATE kanji SET meaning_en = 'flaw, blemish', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '瑕';
UPDATE kanji SET meaning_en = 'crack, flaw, scratch', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '疵';
UPDATE kanji SET meaning_en = 'woods, grove', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '杜';
UPDATE kanji SET meaning_en = 'composing, editing, compiling', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '撰';
UPDATE kanji SET meaning_en = 'coarse, rough, rugged', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '粗';
UPDATE kanji SET meaning_en = 'blind, blind man, ignoramus', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '盲';
UPDATE kanji SET meaning_en = 'fetters', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '桎';
UPDATE kanji SET meaning_en = 'manacles', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '梏';
UPDATE kanji SET meaning_en = 'branch off, fork in road, scene', meaning_my = 'ဌာနခွဲ ၊ အဓိပ္ပာယ်' WHERE character = '岐';
UPDATE kanji SET meaning_en = 'path, route, road', meaning_my = 'လမ်း / လမ်းကြောင်း ၊ rute' WHERE character = '路';
UPDATE kanji SET meaning_en = 'narrow, obstruct', meaning_my = 'အဓိပ္ပာယ် ၊ တားဆီးသည်' WHERE character = '隘';
UPDATE kanji SET meaning_en = 'thirst, dry up, parch', meaning_my = 'အဓိပ္ပာယ် ၊ အပေါ်' WHERE character = '渇';
UPDATE kanji SET meaning_en = 'envious, be jealous, covet', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '羨';
UPDATE kanji SET meaning_en = 'jealous, envy', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '嫉';
UPDATE kanji SET meaning_en = 'jealous, envy', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '妬';
UPDATE kanji SET meaning_en = 'aroused, resent, be indignant', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '憤';
UPDATE kanji SET meaning_en = 'rue, be sad, sigh', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '慨';
UPDATE kanji SET meaning_en = 'sigh, lament, moan', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '嘆';
UPDATE kanji SET meaning_en = 'repent, regret', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '悔';
UPDATE kanji SET meaning_en = 'regret, bear a grudge, resentment', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '恨';
UPDATE kanji SET meaning_en = 'truth, clarity, abandon', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '諦';
UPDATE kanji SET meaning_en = 'arrest, seize, concerned', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '拘';
UPDATE kanji SET meaning_en = 'mud, mire, adhere to', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '泥';
UPDATE kanji SET meaning_en = 'harden, set, clot', meaning_my = 'အဓိပ္ပာယ် ၊ ချထားသည်' WHERE character = '固';
UPDATE kanji SET meaning_en = 'partial, side, left-side radical', meaning_my = 'အပိုင်း ၊ အဓိပ္ပာယ် ၊ အရင်းခံ' WHERE character = '偏';
UPDATE kanji SET meaning_en = 'cramped, narrow, contract', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '狭';
UPDATE kanji SET meaning_en = 'tolerant, leniency, generosity', meaning_my = 'ဘာလဲ / အဘယ်အရာ ၊ pemaaf toleran' WHERE character = '寛';
UPDATE kanji SET meaning_en = 'self-effacing, humble oneself, condescend', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '謙';
UPDATE kanji SET meaning_en = 'void, emptiness, unpreparedness', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '虚';
UPDATE kanji SET meaning_en = 'sincerity, admonish, warn', meaning_my = 'အဓိပ္ပာယ် ၊ သတိပေးသည်' WHERE character = '誠';
UPDATE kanji SET meaning_en = 'gift, seriousness', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '摯';
UPDATE kanji SET meaning_en = 'discreet, reverently, humbly', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '謹';
UPDATE kanji SET meaning_en = 'humility, be careful, discreet', meaning_my = 'အဓိပ္ပာယ် ၊ ကား' WHERE character = '慎';
UPDATE kanji SET meaning_en = 'respect, reverent', meaning_my = 'ရိုသေသည် ၊ အဓိပ္ပာယ်' WHERE character = '恭';
UPDATE kanji SET meaning_en = 'adore, respect, revere', meaning_my = 'အဓိပ္ပာယ် ၊ ရိုသေသည်' WHERE character = '崇';
UPDATE kanji SET meaning_en = 'fear, majestic, graciously', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '畏';
UPDATE kanji SET meaning_en = 'solemn, quietly, softly', meaning_my = 'လေးနက်သော ၊ တိတ်ဆိတ်သော ၊ အဓိပ္ပာယ်' WHERE character = '粛';
UPDATE kanji SET meaning_en = 'stern, strictness, severity', meaning_my = 'အဓိပ္ပာယ် ၊ တင်းကြပ်သော' WHERE character = '厳';
UPDATE kanji SET meaning_en = 'villa, inn, cottage', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '荘';
UPDATE kanji SET meaning_en = 'brilliant fabric design', meaning_my = 'အမှတ်အသား' WHERE character = '絢';
UPDATE kanji SET meaning_en = 'be sore, inflamed, bleary', meaning_my = 'အဓိပ္ပာယ်' WHERE character = '爛';

-- Step 2: Update existing 205 kotoba with MY translations
UPDATE kotoba SET meaning_my = 'အကွာအဝေး ; ပြတ်တောက်သည်။' WHERE id = 1;
UPDATE kotoba SET meaning_my = 'မီးလောင်ကျွမ်း; မီးရှို့' WHERE id = 2;
UPDATE kotoba SET meaning_my = 'ကာကွယ်ရေး' WHERE id = 3;
UPDATE kotoba SET meaning_my = 'မီးခိုး' WHERE id = 4;
UPDATE kotoba SET meaning_my = 'တစ်စိတ်တစ်ပိုင်း တစ်ပိုင်း' WHERE id = 5;
UPDATE kotoba SET meaning_my = 'အမှား ; အမှား' WHERE id = 6;
UPDATE kotoba SET meaning_my = 'stacked; ထပ်နေပါသည်။' WHERE id = 7;
UPDATE kotoba SET meaning_my = 'စတင်လမ်းလျှောက်' WHERE id = 8;
UPDATE kotoba SET meaning_my = 'ကလေးမွေးဖွား; ကလေးမွေး' WHERE id = 9;
UPDATE kotoba SET meaning_my = 'သေးသေး၊ လူငယ်' WHERE id = 10;
UPDATE kotoba SET meaning_my = 'ခေါင်မိုး' WHERE id = 11;
UPDATE kotoba SET meaning_my = 'ပြုပြင်ခြင်း ; ပြန်လည်ပြင်ဆင်မှု' WHERE id = 12;
UPDATE kotoba SET meaning_my = 'မှား; ခြေလှမ်းမှား' WHERE id = 13;
UPDATE kotoba SET meaning_my = 'ပြည့်မီခြင်း (လိုအပ်ချက်များ၊ စံနှုန်းများ)' WHERE id = 14;
UPDATE kotoba SET meaning_my = 'မေး ; လိုချင် ; ရှာဖွေနေ' WHERE id = 15;
UPDATE kotoba SET meaning_my = 'တစ်နေ့တာအချိန်အပိုင်းအခြား' WHERE id = 16;
UPDATE kotoba SET meaning_my = 'ထိုဒုတိယ၊ ခဏ' WHERE id = 17;
UPDATE kotoba SET meaning_my = 'သတိမထားမိဘဲ' WHERE id = 18;
UPDATE kotoba SET meaning_my = 'အချိန်တို' WHERE id = 19;
UPDATE kotoba SET meaning_my = 'အချိန်ကြာမြင့်စွာ; နာရီများအတွက်' WHERE id = 20;
UPDATE kotoba SET meaning_my = 'ကွဲပြားမှု; ခွဲခွာခြင်း' WHERE id = 21;
UPDATE kotoba SET meaning_my = 'စုပ်ယူသည်အထိ အချိန်အကြာကြီးပြုတ်ပါ။' WHERE id = 22;
UPDATE kotoba SET meaning_my = 'ပျံ့နှံ့နေသော စုပ်ယူပါ။' WHERE id = 23;
UPDATE kotoba SET meaning_my = 'ချည်ထိုးခြင်း; ရက်ကန်း' WHERE id = 24;
UPDATE kotoba SET meaning_my = 'အားလျော့; ဖြည်' WHERE id = 25;
UPDATE kotoba SET meaning_my = 'ပြီးပြည့်စုံသောထိန်းချုပ်မှု; ဆိုးဆိုးရွားရွားရိုက်တယ်။' WHERE id = 101;
UPDATE kotoba SET meaning_my = 'အလွန်ထင်ရှားသော၊ သိသိသာသာ' WHERE id = 102;
UPDATE kotoba SET meaning_my = 'ဇဝေဇဝါ ; မရှင်းလင်းသည် (အလားတူဖြစ်သောကြောင့် ခွဲခြားရခက်သည်)' WHERE id = 103;
UPDATE kotoba SET meaning_my = 'ကွာခြားချက်; အဖြစ်မှန်ကွဲလွဲမှု' WHERE id = 104;
UPDATE kotoba SET meaning_my = 'ပြုပြင်ခြင်း ; ပြုပြင်ခြင်း (အခြေအနေဆိုးသည် မှန်သည်)' WHERE id = 105;
UPDATE kotoba SET meaning_my = 'အပေးအယူ ; အလယ်လမ်း' WHERE id = 106;
UPDATE kotoba SET meaning_my = 'ထွက်လမ်းရှာ; အဖြေတစ်ခုကို ရှာဖွေနေသည်။' WHERE id = 107;
UPDATE kotoba SET meaning_my = 'ပျော်မွေ့; လက်ဆောင်/အကျိုးခံစားခွင့်များ ရယူပါ။' WHERE id = 108;
UPDATE kotoba SET meaning_my = 'ရပ်စဲ ; သီးသန့်ထားခြင်း၊ ခွဲထားခြင်း; ပိတ်ဆို့ခြင်း။' WHERE id = 109;
UPDATE kotoba SET meaning_my = 'ပြိုကျ ; စနစ်/အဆောက်အအုံပြိုကျခြင်း။' WHERE id = 110;
UPDATE kotoba SET meaning_my = 'စုဆောင်းခြင်း ; သိုလှောင်မှု; စုဆောင်းခြင်း။' WHERE id = 111;
UPDATE kotoba SET meaning_my = 'အရှိန်အဟုန်; အရှိန်မြှင့်ပါ။' WHERE id = 112;
UPDATE kotoba SET meaning_my = 'အလေးပေး; မိမိကိုယ်အားထိန်းချုပ်ခြင်း ; muffle' WHERE id = 113;
UPDATE kotoba SET meaning_my = 'အပန်းဖြေ; တင်းမာမှုသက်သာရာရ' WHERE id = 114;
UPDATE kotoba SET meaning_my = 'နက်နဲသောနားလည်မှု; အခြေအနေကို ဆုပ်ကိုင်ပါ။' WHERE id = 115;
UPDATE kotoba SET meaning_my = 'သက်ဆိုင်ရာ၊ စံသတ်မှတ်ချက်များနှင့်ကိုက်ညီသည်။' WHERE id = 116;
UPDATE kotoba SET meaning_my = 'ကျိုးကြောင်းဆီလျော်သော၊ သင့်လျော်သော ; အဓိပ္ပာယ်ရှိသည်။' WHERE id = 117;
UPDATE kotoba SET meaning_my = 'အထူးပရိုမိုးရှင်းများ; ထူးခြားသောခန့်အပ်မှု' WHERE id = 118;
UPDATE kotoba SET meaning_my = 'အောင်နိုင် ; အတားအဆီးများကိုကျော်လွှား' WHERE id = 119;
UPDATE kotoba SET meaning_my = 'အစောပိုင်းလက္ခဏာများ; အပြုအမူ' WHERE id = 120;
UPDATE kotoba SET meaning_my = 'ဒေဝါလီခံ; ပြိုကျသွားတယ်။' WHERE id = 121;
UPDATE kotoba SET meaning_my = 'ယေဘုယျအားဖြင့်; ကောက်ကြောင်း' WHERE id = 122;
UPDATE kotoba SET meaning_my = 'ယခင် ; အချိန်၏အစတွင်' WHERE id = 123;
UPDATE kotoba SET meaning_my = 'တစ်ခုတည်း အာရုံစိုက်ပါ။' WHERE id = 124;
UPDATE kotoba SET meaning_my = 'တကယ်လား (သံသယ/သက်သေ)' WHERE id = 125;
UPDATE kotoba SET meaning_my = 'အလှမ်းဝေးသည် ; ကြီးမြတ်ခြင်းထက်ကျော်လွန်' WHERE id = 151;
UPDATE kotoba SET meaning_my = 'အခွင့်အာဏာအပြည့်အဝအပ်နှင်း; လက်လွှဲ' WHERE id = 152;
UPDATE kotoba SET meaning_my = 'လေထုကို ထုတ်လွှတ်သည်။ aura ကိုဖန်တီးသည်။' WHERE id = 153;
UPDATE kotoba SET meaning_my = 'အဓိပ္ပာယ်ဖွင့်ဆိုချက်ကို နားလည်ပါ။ စာနာပါ။' WHERE id = 154;
UPDATE kotoba SET meaning_my = 'ပျင်းရိခြင်း ; ပျင်းရိသည်။' WHERE id = 155;
UPDATE kotoba SET meaning_my = 'မရှိခြင်း ; လိုငွေပြမှု ; တစ်ခုခုမရှိခြင်း။' WHERE id = 156;
UPDATE kotoba SET meaning_my = 'နှိုးဆော်; အာရုံနှိုးဆော်' WHERE id = 157;
UPDATE kotoba SET meaning_my = 'အရေးယူဆောင်ရွက်မှုများ; အရေးပေါ်ခြေလှမ်းများ' WHERE id = 158;
UPDATE kotoba SET meaning_my = 'ပြင်းပြင်းထန်ထန်သတိပေး။ သတိရှိကြပါရန် အကြံပြုအပ်ပါသည်။' WHERE id = 159;
UPDATE kotoba SET meaning_my = 'မှောက်ခြင်း ; အရာများကိုလှည့်ပါ။' WHERE id = 160;
UPDATE kotoba SET meaning_my = 'အဟန့်အတား; လမ်းပိတ်ဆို့ခြင်း။' WHERE id = 161;
UPDATE kotoba SET meaning_my = 'လှုပ်ရှားမှုကိုအားပေး; အရေးတကြီး' WHERE id = 162;
UPDATE kotoba SET meaning_my = 'လွတ်မြောက်ရန် ; အန္တရာယ်မှလွတ်မြောက်' WHERE id = 163;
UPDATE kotoba SET meaning_my = 'လိမ္မာပါးနပ်; ဉာဏ်ပညာနှင့် ပြည့်စုံသူ' WHERE id = 164;
UPDATE kotoba SET meaning_my = 'ဓမ္မ; မြင့်မြတ်မှုအပြည့်နဲ့ တိတ်ဆိတ်နေတယ်။' WHERE id = 165;
UPDATE kotoba SET meaning_my = 'အခြေချ; ပြဿနာဖြေရှင်းခြင်း။' WHERE id = 301;
UPDATE kotoba SET meaning_my = 'သြဇာလွှမ်းမိုးမှု; ထိခိုက်မှု' WHERE id = 302;
UPDATE kotoba SET meaning_my = 'တာဝန်ခံ၊ တာဝန်ကိုကိုင်' WHERE id = 303;
UPDATE kotoba SET meaning_my = 'အချိန်ဇယားနှောင့်နှေးမှုများ' WHERE id = 304;
UPDATE kotoba SET meaning_my = 'လေ့လာရေး; အတွင်းကျကျလေ့လာရေး' WHERE id = 305;
UPDATE kotoba SET meaning_my = 'ဘတ်ဂျက်/ ပါဝါချွေတာခြင်း။' WHERE id = 306;
UPDATE kotoba SET meaning_my = 'ပူးပေါင်းဆောင်ရွက်မှု; ပေါင်းစပ်မှု' WHERE id = 307;
UPDATE kotoba SET meaning_my = 'ခံနိုင်ရည်/ခံနိုင်ရည် ကန့်သတ်ချက်' WHERE id = 308;
UPDATE kotoba SET meaning_my = 'စွမ်းရည်ပြသ; သင်၏အရည်အချင်းကိုပြသပါ။' WHERE id = 309;
UPDATE kotoba SET meaning_my = 'ပံ့ပိုးမှု ; ပစ္စည်း/စာရိတ္တအကူအညီ' WHERE id = 310;
UPDATE kotoba SET meaning_my = 'ဆုံးဖြတ်ချက် ၊ ဆင်ခြင်သုံးသပ်မှု' WHERE id = 311;
UPDATE kotoba SET meaning_my = 'လေးနက်စွာ ထည့်သွင်းစဉ်းစားခြင်း' WHERE id = 312;
UPDATE kotoba SET meaning_my = 'ထင်ဟပ်စေခြင်း ၊ ရောင်ပြန်ဟပ်ခြင်း' WHERE id = 313;
UPDATE kotoba SET meaning_my = 'ပြည့်စုံကြွယ်ဝခြင်း ၊ ကျေနပ်ဖွယ်ဖြစ်ခြင်း' WHERE id = 314;
UPDATE kotoba SET meaning_my = 'သဘောပေါက်လက်ခံခြင်း' WHERE id = 315;
UPDATE kotoba SET meaning_my = 'သတိထားစောင့်ကြည့်ခြင်း ၊ ကြိုတင်သတိပြုခြင်း' WHERE id = 316;
UPDATE kotoba SET meaning_my = 'သတိကြီးစွာထားသော ၊ အလေးအနက်ထားသော' WHERE id = 317;
UPDATE kotoba SET meaning_my = 'မသဲကွဲသော ၊ မရေရာသော' WHERE id = 318;
UPDATE kotoba SET meaning_my = 'ရိုးသားဖြောင့်မတ်သော ၊ သစ္စာရှိသော' WHERE id = 319;
UPDATE kotoba SET meaning_my = 'ပျော့ပျောင်းသော ၊ အခြေအနေနှင့်လိုက်လျောညီထွေရှိသော' WHERE id = 320;
UPDATE kotoba SET meaning_my = 'အရေးတကြီး; အရှိန်မြှင့်' WHERE id = 321;
UPDATE kotoba SET meaning_my = 'ဖြည့်ဆည်းသည် ၊ အစားထိုးသည်' WHERE id = 322;
UPDATE kotoba SET meaning_my = 'ဘက်လိုက်သည် ၊ မညီမမျှဖြစ်သည်' WHERE id = 323;
UPDATE kotoba SET meaning_my = 'လျစ်လျူရှုသည် ၊ ပေါ့ဆသည်' WHERE id = 324;
UPDATE kotoba SET meaning_my = 'ပွေ့ပိုက်သည် ၊ ပြဿနာရင်ဆိုင်ရသည်' WHERE id = 325;
UPDATE kotoba SET meaning_my = 'ဖမ်းဆုပ်သည် ၊ သဘောပေါက်နားလည်သည်' WHERE id = 326;
UPDATE kotoba SET meaning_my = 'ဖိတ်ခေါ်သည် ၊ အန္တရာယ်ဖြစ်စေသည်' WHERE id = 327;
UPDATE kotoba SET meaning_my = 'အချိန်နောက်ပြန်လိုက်သည် ၊ မူလသို့ခြေရာခံသည်' WHERE id = 328;
UPDATE kotoba SET meaning_my = 'ပါဝင်ဆောင်ရွက်သည် ၊ ပါဝင်ပတ်သက်သည်' WHERE id = 329;
UPDATE kotoba SET meaning_my = 'ရွှေ့ဆိုင်းသည် ၊ ဆိုင်းငံ့ထားသည်' WHERE id = 330;
UPDATE kotoba SET meaning_my = 'လမ်းညွှန် လမ်းညွှန်မှု; အချက်အလက်' WHERE id = 401;
UPDATE kotoba SET meaning_my = 'ဆက်သွယ်ရန် ; ဆက်သွယ်ရေး' WHERE id = 402;
UPDATE kotoba SET meaning_my = 'ပြင်ဆင်မှု' WHERE id = 403;
UPDATE kotoba SET meaning_my = 'ကတိပေးသည်။' WHERE id = 404;
UPDATE kotoba SET meaning_my = 'အစီအစဉ် ; အချိန်ဇယား' WHERE id = 405;
UPDATE kotoba SET meaning_my = 'ဖိတ်ကြားချက်' WHERE id = 406;
UPDATE kotoba SET meaning_my = 'တိုင်ပင် ; ဆွေးနွေးပါ။' WHERE id = 407;
UPDATE kotoba SET meaning_my = 'တွန့်ဆုတ်; ကိုယ့်ကိုယ်ကို ချုပ်တည်းပါ။' WHERE id = 408;
UPDATE kotoba SET meaning_my = 'အတွေ့အကြုံ' WHERE id = 409;
UPDATE kotoba SET meaning_my = 'စက်ပျက်ကွက်; ပိတ်မိ' WHERE id = 410;
UPDATE kotoba SET meaning_my = 'သတိထားခြင်း ၊ ဂရုပြုခြင်း' WHERE id = 411;
UPDATE kotoba SET meaning_my = 'စိုးရိမ်ပူပန်ခြင်း' WHERE id = 412;
UPDATE kotoba SET meaning_my = 'ရှုပ်ထွေးသော' WHERE id = 413;
UPDATE kotoba SET meaning_my = 'လွယ်ကူရိုးရှင်းသော' WHERE id = 414;
UPDATE kotoba SET meaning_my = 'အန္တရာယ်ရှိသော' WHERE id = 415;
UPDATE kotoba SET meaning_my = 'ဘေးကင်းလုံခြုံသော' WHERE id = 416;
UPDATE kotoba SET meaning_my = 'အလေ့အထ ၊ ဓလေ့ထုံးတမ်း' WHERE id = 417;
UPDATE kotoba SET meaning_my = 'အကြောင်းပြချက် ၊ အကြောင်းရင်း' WHERE id = 418;
UPDATE kotoba SET meaning_my = 'ပြိုင်ပွဲ ၊ ပွဲစဉ်' WHERE id = 419;
UPDATE kotoba SET meaning_my = 'ပထမဆုရရှိခြင်း ၊ ဗိုလ်စွဲခြင်း' WHERE id = 420;
UPDATE kotoba SET meaning_my = 'ပို့ဆောင်ပေးသည်' WHERE id = 421;
UPDATE kotoba SET meaning_my = 'သယ်ယူပို့ဆောင်သည်' WHERE id = 422;
UPDATE kotoba SET meaning_my = 'ပြုပြင်သည် ၊ ပြင်ဆင်သည်' WHERE id = 423;
UPDATE kotoba SET meaning_my = 'ရောက်ရှိသည် (စာ/ပါဆယ်)' WHERE id = 424;
UPDATE kotoba SET meaning_my = 'သတင်းစကားပါးသည် ၊ အကြောင်းကြားသည်' WHERE id = 425;
UPDATE kotoba SET meaning_my = 'ကြိုဆိုသည် ၊ သွားရောက်ကြိုဆိုသည်' WHERE id = 426;
UPDATE kotoba SET meaning_my = 'ဆုံးဖြတ်သည် ၊ သတ်မှတ်သည်' WHERE id = 427;
UPDATE kotoba SET meaning_my = 'ပြုစုပျိုးထောင်သည် ၊ မွေးမြူသည်' WHERE id = 428;
UPDATE kotoba SET meaning_my = 'ပြုတ်ကျသည် ၊ စာမေးပွဲကျရှုံးသည်' WHERE id = 429;
UPDATE kotoba SET meaning_my = 'လဲကျသည် ၊ ပြိုကျသည်' WHERE id = 430;
UPDATE kotoba SET meaning_my = 'စားပါ။' WHERE id = 501;
UPDATE kotoba SET meaning_my = 'သောက်' WHERE id = 502;
UPDATE kotoba SET meaning_my = 'သွား' WHERE id = 503;
UPDATE kotoba SET meaning_my = 'လာ' WHERE id = 504;
UPDATE kotoba SET meaning_my = 'ကြည့် ; စောင့်ကြည့်' WHERE id = 505;
UPDATE kotoba SET meaning_my = 'ကြား ; မေးတယ်။' WHERE id = 506;
UPDATE kotoba SET meaning_my = 'စာဖတ်ခြင်း။' WHERE id = 507;
UPDATE kotoba SET meaning_my = 'ရေးပါ။' WHERE id = 508;
UPDATE kotoba SET meaning_my = 'စကားပြောခြင်း၊ စကားစမြည်' WHERE id = 509;
UPDATE kotoba SET meaning_my = 'ဝယ်' WHERE id = 510;
UPDATE kotoba SET meaning_my = 'သူငယ်ချင်းများ; သူငယ်ချင်း' WHERE id = 511;
UPDATE kotoba SET meaning_my = 'မိသားစု' WHERE id = 512;
UPDATE kotoba SET meaning_my = 'ဆရာ၊ ဆရာ၊ ဆရာဝန်' WHERE id = 513;
UPDATE kotoba SET meaning_my = 'ကျောင်း' WHERE id = 514;
UPDATE kotoba SET meaning_my = 'ကုမ္ပဏီ; ရုံး' WHERE id = 515;
UPDATE kotoba SET meaning_my = 'အခန်း; အခန်း' WHERE id = 516;
UPDATE kotoba SET meaning_my = 'ရေ (အအေး/အချို)' WHERE id = 517;
UPDATE kotoba SET meaning_my = 'မိုး' WHERE id = 518;
UPDATE kotoba SET meaning_my = 'လျှပ်စစ်ရထား' WHERE id = 519;
UPDATE kotoba SET meaning_my = 'ရထားဘူတာ' WHERE id = 520;
UPDATE kotoba SET meaning_my = 'ဒီနေ့' WHERE id = 521;
UPDATE kotoba SET meaning_my = 'မနက်ဖြန်' WHERE id = 522;
UPDATE kotoba SET meaning_my = 'အချိန် ; ကြာချိန် နာရီ' WHERE id = 523;
UPDATE kotoba SET meaning_my = 'ကြီးတယ်။' WHERE id = 524;
UPDATE kotoba SET meaning_my = 'သေးငယ်သည်။' WHERE id = 525;
UPDATE kotoba SET meaning_my = 'အသစ်' WHERE id = 526;
UPDATE kotoba SET meaning_my = 'မြင့်မားသော ; ဈေးကြီးတယ်။' WHERE id = 527;
UPDATE kotoba SET meaning_my = 'စျေးပေါတယ်။' WHERE id = 528;
UPDATE kotoba SET meaning_my = 'ကြိုက် ; ကြိုက်တယ်။' WHERE id = 529;
UPDATE kotoba SET meaning_my = 'လိမ္မာပါးနပ်; ကျွမ်းကျင်' WHERE id = 530;
UPDATE kotoba SET meaning_my = 'ဒီနေ့' WHERE id = 801;
UPDATE kotoba SET meaning_my = 'မနက်ဖြန်' WHERE id = 802;
UPDATE kotoba SET meaning_my = 'မနေ့က' WHERE id = 803;
UPDATE kotoba SET meaning_my = 'ဂျပန်နိုင်ငံ' WHERE id = 804;
UPDATE kotoba SET meaning_my = 'သူငယ်ချင်း သူငယ်ချင်း' WHERE id = 805;
UPDATE kotoba SET meaning_my = 'ဆရာ၊ ဆရာ၊ ဆရာဝန်' WHERE id = 806;
UPDATE kotoba SET meaning_my = 'ကျောင်းသား / ကျောင်းသူ' WHERE id = 807;
UPDATE kotoba SET meaning_my = 'ကျောင်း; ကျောင်းဝင်း' WHERE id = 808;
UPDATE kotoba SET meaning_my = 'အချိန်; ကြာချိန် နာရီ' WHERE id = 809;
UPDATE kotoba SET meaning_my = 'အမည် ၊ နာမည်' WHERE id = 810;
UPDATE kotoba SET meaning_my = 'လျှပ်စစ်ရထား' WHERE id = 811;
UPDATE kotoba SET meaning_my = 'ရထားဘူတာ' WHERE id = 812;
UPDATE kotoba SET meaning_my = 'ကား ၊ မော်တော်ယာဉ်' WHERE id = 813;
UPDATE kotoba SET meaning_my = 'စာအုပ်' WHERE id = 814;
UPDATE kotoba SET meaning_my = 'ရေအေး/ ရိုးရိုးရေ' WHERE id = 815;
UPDATE kotoba SET meaning_my = 'ငွေကြေး ၊ ပိုက်ဆံ' WHERE id = 816;
UPDATE kotoba SET meaning_my = 'ရာသီဥတု' WHERE id = 817;
UPDATE kotoba SET meaning_my = 'တောင်' WHERE id = 818;
UPDATE kotoba SET meaning_my = 'မြစ် ၊ ချောင်း' WHERE id = 819;
UPDATE kotoba SET meaning_my = 'မိုးအလင်း / မိုးသည်းထန်စွာရွာ' WHERE id = 820;
UPDATE kotoba SET meaning_my = 'ခရီးသွားခြင်း' WHERE id = 851;
UPDATE kotoba SET meaning_my = 'ရုပ်ရှင်' WHERE id = 852;
UPDATE kotoba SET meaning_my = 'ဓာတ်ပုံ' WHERE id = 853;
UPDATE kotoba SET meaning_my = 'ဂီတ ၊ တေးဂီတ' WHERE id = 854;
UPDATE kotoba SET meaning_my = 'စာကျက်ခြင်း ၊ လေ့လာသင်ယူခြင်း' WHERE id = 855;
UPDATE kotoba SET meaning_my = 'အိမ်ထောင်စု/ဆွေမျိုးများ' WHERE id = 856;
UPDATE kotoba SET meaning_my = 'မိဘနှစ်ပါး' WHERE id = 857;
UPDATE kotoba SET meaning_my = 'မေးခွန်း' WHERE id = 858;
UPDATE kotoba SET meaning_my = 'နေရပ်လိပ်စာ' WHERE id = 859;
UPDATE kotoba SET meaning_my = 'အချိန်အဆင်ပြေမှု ၊ အခြေအနေ' WHERE id = 860;
UPDATE kotoba SET meaning_my = 'စီးပွားရေး' WHERE id = 901;
UPDATE kotoba SET meaning_my = 'နိုင်ငံရေး' WHERE id = 902;
UPDATE kotoba SET meaning_my = 'ပတ်ဝန်းကျင်' WHERE id = 903;
UPDATE kotoba SET meaning_my = 'နိုင်ငံခြားကုန်သွယ်ရေး' WHERE id = 904;
UPDATE kotoba SET meaning_my = 'တိုင်ပင်ဆွေးနွေးမှု; စေ့စေ့စပ်စပ်' WHERE id = 905;
UPDATE kotoba SET meaning_my = 'မိတ်ဆက်ပေးခြင်း' WHERE id = 906;
UPDATE kotoba SET meaning_my = 'နည်းပညာ ၊ ကျွမ်းကျင်မှု' WHERE id = 907;
UPDATE kotoba SET meaning_my = 'ထုတ်ပြန်ကြေညာခြင်း ၊ တင်ပြခြင်း' WHERE id = 908;
UPDATE kotoba SET meaning_my = 'ထိမ်းမြားလက်ထပ်ခြင်း' WHERE id = 909;
UPDATE kotoba SET meaning_my = 'ပျံသန်းမှုအတွေ့အကြုံ' WHERE id = 910;
UPDATE kotoba SET meaning_my = 'အရည်အချင်းလက်မှတ် ၊ အရည်အချင်းသတ်မှတ်ချက်' WHERE id = 951;
UPDATE kotoba SET meaning_my = 'ဘတ်ဂျက်ငွေ ၊ လျာထားစရိတ်' WHERE id = 952;
UPDATE kotoba SET meaning_my = 'လုပ်ငန်းစွမ်းဆောင်ရည် ၊ ထိရောက်မှု' WHERE id = 953;
UPDATE kotoba SET meaning_my = 'ဝယ်လိုအား ၊ လိုအပ်ချက်' WHERE id = 954;
UPDATE kotoba SET meaning_my = 'ရောင်းလိုအား ၊ ပံ့ပိုးပေးမှု' WHERE id = 955;
UPDATE kotoba SET meaning_my = 'စေ့စေ့စပ်စပ် နားလည်မှု၊ ပြဿနာကို ကျွမ်းကျင်ပါ။' WHERE id = 956;
UPDATE kotoba SET meaning_my = 'မဟာဗျူဟာမြောက် မိတ်ဖက်ပူးပေါင်းမှု' WHERE id = 957;
UPDATE kotoba SET meaning_my = 'စိုးရိမ်မကင်းဖြစ်မှု ၊ သံသယ' WHERE id = 958;
UPDATE kotoba SET meaning_my = 'တန်ပြန်ဆောင်ရွက်မှုများ အကာအကွယ်ခြေလှမ်းများ' WHERE id = 959;
UPDATE kotoba SET meaning_my = 'အများသဘောတူအပေးအယူ' WHERE id = 960;

-- Step 3: Insert 520 New Joyo Kanji
INSERT INTO kanji (id, character, meaning, meaning_en, meaning_my, on_reading, kun_reading, radical, radical_meaning, stroke_count, grade, jlpt_level) VALUES
(3001, '丁', 'Jalan, Bangsal, Kota', 'Street, Ward, Town', 'လမ်း၊ရပ်ကွက်၊မြို့', 'チョウ, テイ, チン, トウ, チ', 'ひのと', 'Street', 'radikal street', 2, 3, 'N4'),
(3002, '他', 'Lainnya, Lainnya, Lainnya', 'Other, Another, The Others', 'အခြား၊ နောက်တစ်ခု၊ အခြားသူများ', 'タ', 'ほか', 'Leader', 'radikal leader', 5, 3, 'N4'),
(3003, '号', 'Nama Panggilan, Nomor, Barang', 'Nickname, Number, Item', 'နာမည်၊ နံပါတ်၊ ပစ္စည်း', 'ゴウ', 'さけ・ぶ, よびな', 'Mouth', 'radikal mouth', 5, 3, 'N4'),
(3004, '央', 'Tengah, Tengah', 'Center, Middle', 'အလယ်၊ အလယ်', 'オウ', '', 'Big', 'radikal big', 5, 3, 'N4'),
(3005, '平', 'Rata, Datar, Damai', 'Even, Flat, Peace', 'တောင်၊ ပြား၊ ငြိမ်းချမ်းရေး', 'ヘイ, ビョウ, ヒョウ', 'たい・ら, だいら, ひら, ひら', 'Dry', 'radikal dry', 5, 3, 'N4'),
(3006, '打', 'Pukul, Pukul, Ketuk', 'Strike, Hit, Knock', 'ရိုက်၊ ခေါက်၊ ခေါက်', 'ダ, ダアス', 'う・つ, う・ち, ぶ・つ', 'Fingers', 'radikal fingers', 5, 3, 'N4'),
(3007, '氷', 'Es, Es, Hujan es', 'Icicle, Ice, Hail', 'ရေခဲ၊ ရေခဲ၊ မိုးသီး', 'ヒョウ', 'こおり, ひ, こお・る', 'Water', 'radikal water', 5, 3, 'N4'),
(3008, '申', 'Miliki Kehormatan Untuk, Tanda Monyet, 3-5 sore', 'Have The Honor To, Sign Of The Monkey, 3-5pm', 'ဂုဏ်ရှိစွ၊ မျောက်နိမိတ်၊ ညနေ ၃-၅ နာရီ', 'シン', 'もう・す, もう・し, さる', 'Cross', 'radikal cross', 5, 3, 'N4'),
(3009, '皮', 'Pelt, Kulit, Sembunyikan', 'Pelt, Skin, Hide', 'Pelt, Skin, Hide', 'ヒ', 'かわ', 'Slide', 'radikal slide', 5, 3, 'N4'),
(3010, '皿', 'Piring, Bantuan, Piring', 'Dish, A Helping, Plate', 'ပန်းကန်၊ အကူအညီ၊ ပန်းကန်', 'ベイ', 'さら', 'Plate', 'radikal plate', 5, 3, 'N4'),
(3011, '化', 'Ubah, Ambil Bentuknya, Pengaruh', 'Change, Take The Form Of, Influence', 'ပြောင်းလဲပါ၊ လွှမ်းမိုးမှုပုံစံကိုယူပါ။', 'カ, ケ', 'ば・ける, ば・かす, ふ・ける, け・する', 'Leader', 'radikal leader', 4, 3, 'N4'),
(3012, '両', 'Keduanya, Koin Jepang Kuno, Konter Untuk Gerbong (mis., Di Kereta)', 'Both, Old Japanese Coin, Counter For Carriages (e.g., In A Train)', 'နှစ်ခုစလုံး၊ ဂျပန်ဒင်္ဂါးပြားအဟောင်း၊ ရထားများအတွက်ကောင်တာ (ဥပမာ၊ ရထားတစ်စင်းတွင်)', 'リョウ', 'てる, ふたつ', 'Ground', 'radikal ground', 6, 3, 'N4'),
(3013, '全', 'Keseluruhan, Keseluruhan, Semua', 'Whole, Entire, All', 'တစ်ခုလုံး၊ တစ်ခုလုံး၊ အားလုံး', 'ゼン', 'まった・く, すべ・て', 'Hat', 'radikal hat', 6, 3, 'N4'),
(3014, '向', 'Di sana, Menghadapi, Melampaui', 'Yonder, Facing, Beyond', 'Yoonder, Facing, Beyond', 'コウ', 'む・く, む・い, む・き, む・ける, む・け, む・かう, む・かい, む・こう, む・こう, むこ, むか・い', 'Drop', 'radikal drop', 6, 3, 'N4'),
(3015, '州', 'Negara Bagian, Provinsi', 'State, Province', 'ပြည်နယ်၊ပြည်နယ်', 'シュウ, ス', 'す', 'Drop', 'radikal drop', 6, 3, 'N4'),
(3016, '曲', 'Tikungan, Musik, Melodi', 'Bend, Music, Melody', 'Bend, Music, Melody', 'キョク', 'ま・がる, ま・げる, くま', 'Mouth', 'radikal mouth', 6, 3, 'N4'),
(3017, '次', 'Selanjutnya, Urutan, Urutan', 'Next, Order, Sequence', 'ပြီးရင်တော့ Order, Sequence ပေါ့။', 'ジ, シ', 'つ・ぐ, つぎ', 'Ice', 'radikal ice', 6, 3, 'N4'),
(3018, '羊', 'Domba', 'Sheep', 'သိုး', 'ヨウ', 'ひつじ', 'Sheep', 'radikal sheep', 6, 3, 'N4'),
(3019, '血', 'Darah', 'Blood', 'သွေး', 'ケツ', 'ち', 'Blood', 'radikal blood', 6, 3, 'N4'),
(3020, '欠', 'Kekurangan, Kesenjangan, Gagal', 'Lack, Gap, Fail', 'ချို့တဲ့ခြင်း၊ ကွာဟခြင်း၊ ပျက်ကွက်ခြင်း။', 'ケツ, ケン', 'か・ける, か・く', 'Lack', 'radikal lack', 4, 4, 'N4'),
(3021, '氏', 'Nama Keluarga, Nama Keluarga, Klan', 'Family Name, Surname, Clan', 'မိသားစုအမည်၊ မျိုးရိုးအမည်၊ မျိုးနွယ်စု', 'シ', 'うじ, うじ', 'Clan', 'radikal clan', 4, 4, 'N4'),
(3022, '由', 'Oleh karena itu, Suatu Alasan', 'Wherefore, A Reason', 'ထို့ကြောင့် A ကြောင်းပြချက်', 'ユ, ユウ, ユイ', 'よし, よ・る', 'Cross', 'radikal cross', 5, 3, 'N4'),
(3023, '札', 'Tag, Uang Kertas, Counter Obligasi', 'Tag, Paper Money, Counter For Bonds', 'Tag၊ Paper Money၊ Bonds အတွက်ကောင်တာ', 'サツ', 'ふだ', 'Tree', 'radikal tree', 5, 4, 'N4'),
(3024, '民', 'Rakyat, Bangsa, Subyek', 'People, Nation, Subjects', 'လူမျိုး၊ လူမျိုး၊ ဘာသာရပ်', 'ミン', 'たみ', 'Mouth', 'radikal mouth', 5, 4, 'N4'),
(3025, '辺', 'Lingkungan, Batas, Perbatasan', 'Environs, Boundary, Border', 'ပတ်ဝန်းကျင်၊ နယ်နိမိတ်၊ နယ်နိမိတ်', 'ヘン', 'あた・り, ほと・り, べ', 'Scooter', 'radikal scooter', 5, 4, 'N4'),
(3026, '必', 'Selalu, Pasti, Tak Terelakkan', 'Invariably, Certain, Inevitable', 'အမြဲလိုလို၊ သေချာသည်၊ ရှောင်လွှဲ၍မရ', 'ヒツ', 'かなら・ず', 'Heart', 'radikal heart', 5, 4, 'N4'),
(3027, '末', 'Akhir, Tutup, Tip', 'End, Close, Tip', 'အဆုံး၊ ပိတ်၊ ထိပ်ဖျား', 'マツ, バツ', 'すえ', 'Jet', 'radikal jet', 5, 4, 'N4'),
(3028, '君', 'Tuan, Anda, Penguasa', 'Mister, You, Ruler', 'သခင်၊ မင်း၊ မင်း', 'クン', 'きみ, ぎみ', 'Wolverine', 'radikal wolverine', 7, 3, 'N4'),
(3029, '対', 'Berhadapan, Berlawanan, Genap', 'Vis-a-vis, Opposite, Even', 'Vis-a-vis၊ ဆန့်ကျင်ဘက်၊ တောင်', 'タイ, ツイ', 'あいて, こた・える, そろ・い, つれあ・い, なら・ぶ, むか・う', 'Writing', 'radikal writing', 7, 3, 'N4'),
(3030, '役', 'Tugas, Perang, Kampanye', 'Duty, War, Campaign', 'တာဝန်၊ စစ်၊ စည်းရုံးရေး', 'ヤク, エキ', '', 'Loiter', 'radikal loiter', 7, 3, 'N4'),
(3031, '久', 'Lama sekali, Cerita Lama', 'Long Time, Old Story', 'ရှေးရှေး၊ ပုံပြင်', 'キュウ, ク', 'ひさ・しい', 'Prison', 'radikal prison', 3, 5, 'N3'),
(3032, '支', 'Cabang, Dukungan, Pertahankan', 'Branch, Support, Sustain', 'အကိုင်းအခက်၊ ပံ့ပိုးမှု၊ ပံ့ပိုးမှု', 'シ', 'ささ・える, つか・える, か・う', 'Branch', 'radikal branch', 4, 5, 'N3'),
(3033, '要', 'Kebutuhan, Poin Utama, Esensi', 'Need, Main Point, Essence', 'လိုအပ်ချက်၊ အဓိကအချက်၊ အနှစ်သာရ', 'ヨウ', 'い・る, かなめ', 'Helicopter', 'radikal helicopter', 9, 4, 'N3'),
(3034, '仮', 'Palsu, Sementara, Interim', 'Sham, Temporary, Interim', 'အတုအယောင်၊ ယာယီ၊ ကြားဖြတ်', 'カ, ケ', 'かり, かり', 'Leader', 'radikal leader', 6, 5, 'N3'),
(3035, '最', 'Yang Paling, Paling, Ekstrim', 'Utmost, Most, Extreme', 'အစွမ်းကုန်၊ အများစု၊ အလွန်အကျူး', 'サイ, シュ', 'もっと・も, つま', 'Sun', 'radikal sun', 12, 4, 'N3'),
(3036, '仲', 'Perantara, Hubungan', 'Go-between, Relationship', 'ဆက်ဆံရေး၊ ဆက်ဆံရေး', 'チュウ', 'なか', 'Leader', 'radikal leader', 6, 4, 'N3'),
(3037, '伝', 'Kirimkan, Ikuti, Berjalan Bersama', 'Transmit, Go Along, Walk Along', 'ပို့ပါ၊ လျှောက်ပါ၊ လျှောက်ပါ။', 'デン, テン', 'つた・わる, つた・える, つた・う, つだ・う, づた・い, つて', 'Leader', 'radikal leader', 6, 4, 'N3'),
(3038, '好', 'Menyukai, Menyenangkan, Menyukai Sesuatu', 'Fond, Pleasing, Like Something', 'နှစ်သက်တယ်၊ နှစ်သက်တယ်၊ တစ်ခုခုကို ကြိုက်တယ်။', 'コウ', 'この・む, す・く, よ・い, い・い', 'Woman', 'radikal woman', 6, 4, 'N3'),
(3039, '老', 'Orang Tua, Usia Tua, Menjadi Tua', 'Old Man, Old Age, Grow Old', 'သာဓု၊ သာဓု၊ သာဓု', 'ロウ', 'お・いる, ふ・ける', 'Coffin', 'radikal coffin', 6, 4, 'N3'),
(3040, '位', 'Pangkat, Kelas, Tahta', 'Rank, Grade, Throne', 'အဆင့်၊ အဆင့်၊ ပလ္လင်', 'イ', 'くらい, ぐらい', 'Leader', 'radikal leader', 7, 4, 'N3'),
(3041, '低', 'Lebih Rendah, Pendek, Rendah Hati', 'Lower, Short, Humble', 'နှိမ့်ချခြင်း၊ တိုတို၊ နှိမ့်ချခြင်း။', 'テイ', 'ひく・い, ひく・める, ひく・まる', 'Leader', 'radikal leader', 7, 4, 'N3'),
(3042, '初', 'Pertama Kali, Awal', 'First Time, Beginning', 'ပထမအကြိမ်၊ အစ', 'ショ', 'はじ・め, はじ・めて, はつ, はつ, うい, そ・める, ぞ・め', 'Spirit', 'radikal spirit', 7, 4, 'N3'),
(3043, '利', 'Untung, Keuntungan, Manfaat', 'Profit, Advantage, Benefit', 'အမြတ်၊ အားသာချက်၊ အကျိုး', 'リ', 'き・く', 'Grain', 'radikal grain', 7, 4, 'N3'),
(3044, '努', 'Kerja Keras, Rajin, Semaksimal Mungkin', 'Toil, Diligent, As Much As Possible', 'တတ်နိုင်သမျှ လုံ့လ၊', 'ド', 'つと・める', 'Woman', 'radikal woman', 7, 4, 'N3'),
(3045, '労', 'Buruh, Terima Kasih, Hadiah Untuk', 'Labor, Thank For, Reward For', 'အလုပ်သမား၊ ကျေးဇူးတင်ပါတယ်၊ ဆုလာဘ်', 'ロウ', 'ろう・する, いたわ・る, いた・ずき, ねぎら, つか・れる, ねぎら・う', 'Viking', 'radikal viking', 7, 4, 'N3'),
(3046, '良', 'Bagus, Menyenangkan, Terampil', 'Good, Pleasing, Skilled', 'ကောင်းတယ်၊ ကျေနပ်တယ်၊ ကျွမ်းကျင်တယ်။', 'リョウ', 'よ・い, よ・い, い・い, い・い', 'Drop', 'radikal drop', 7, 4, 'N3'),
(3047, '便', 'Kenyamanan, Fasilitas, Kotoran', 'Convenience, Facility, Excrement', 'အဆင်ပြေမှု၊ ပံ့ပိုးမှု၊ စွန့်စားမှု', 'ベン, ビン', 'たよ・り', 'Leader', 'radikal leader', 9, 4, 'N3'),
(3048, '働', 'Bekerja, (kokuji)', 'Work, (kokuji)', 'အလုပ်၊ (kokuji)', 'ドウ', 'はたら・く', 'Leader', 'radikal leader', 13, 4, 'N3'),
(3049, '令', 'Perintah, Hukum Kuno, Perintah', 'Orders, Ancient Laws, Command', 'အမိန့်၊ ရှေးဟောင်းဥပဒေ၊ အမိန့်', 'レイ', '', 'Orders', 'radikal orders', 5, 4, 'N3'),
(3050, '泉', 'Musim semi, Air Mancur', 'Spring, Fountain', 'နွေဦး၊ ရေပန်း', 'セン', 'いずみ', 'White', 'radikal white', 9, 6, 'N3'),
(3051, '亡', 'Meninggal, Terlambat, Sekarat', 'Deceased, The Late, Dying', 'ကွယ်လွန်၊ နှောင်းလူ၊ သေခြင်း။', 'ボウ, モウ', 'な・い, な・き, ほろ・びる, ほろ・ぶ, ほろ・ぼす', 'Death', 'radikal death', 3, 6, 'N3'),
(3052, '億', 'Seratus Juta, 10**8', 'Hundred Million, 10**8', 'သိန်းတစ်ရာ၊ ၁၀**၈', 'オク', '', 'Leader', 'radikal leader', 15, 4, 'N3'),
(3053, '士', 'Tuan-tuan, Sarjana, Samurai', 'Gentleman, Scholar, Samurai', 'လူကြီးလူကောင်း၊ ပညာရှင်၊ ဆာမူရိုင်း', 'シ', 'さむらい', 'Samurai', 'radikal samurai', 3, 4, 'N3'),
(3054, '殺', 'Bunuh, Pembunuhan, Jagal', 'Kill, Murder, Butcher', 'သတ်၊ သတ်၊ အသား', 'サツ, サイ, セツ', 'ころ・す, ごろ・し, そ・ぐ', 'Treasure', 'radikal treasure', 10, 4, 'N3'),
(3055, '然', 'Semacamnya, Jadi, Jika Ya', 'Sort Of Thing, So, If So', 'တစ်မျိုးပေါ့၊ ဒါ ဆိုရင်ပေါ့။', 'ゼン, ネン', 'しか, しか・り, しか・し, さ', 'Moon', 'radikal moon', 12, 4, 'N3'),
(3056, '熱', 'Panas, Suhu, Demam', 'Heat, Temperature, Fever', 'အပူ၊ အပူချိန်၊ အဖျား', 'ネツ', 'あつ・い', 'Womb', 'radikal womb', 15, 4, 'N3'),
(3057, '課', 'Bab, Pelajaran, Bagian', 'Chapter, Lesson, Section', 'အခန်း၊ သင်ခန်းစာ၊ အခန်း', 'カ', '', 'Say', 'radikal say', 15, 4, 'N3'),
(3058, '賞', 'Hadiah, Hadiah, Pujian', 'Prize, Reward, Praise', 'ဆု၊ ဆု၊ ချီးမြှောက်ခြင်း။', 'ショウ', 'ほ・める', 'Viking', 'radikal viking', 15, 4, 'N3'),
(3059, '輪', 'Roda, Cincin, Lingkaran', 'Wheel, Ring, Circle', 'ဘီး၊ လက်စွပ်၊ စက်ဝိုင်း', 'リン', 'わ', 'Car', 'radikal car', 15, 4, 'N3'),
(3060, '鏡', 'Cermin, Spekulum, Kepala Barel', 'Mirror, Speculum, Barrel-head', 'ကြေးမုံ၊ Speculum၊ Barrel-ခေါင်း', 'キョウ, ケイ', 'かがみ', 'Gold', 'radikal gold', 19, 4, 'N3'),
(3061, '像', 'Patung, Gambar, Gambar', 'Statue, Picture, Image', 'ရုပ်တု၊ ရုပ်ပုံ၊ ရုပ်ပုံ', 'ゾウ', '', 'Leader', 'radikal leader', 14, 5, 'N3'),
(3062, '情', 'Perasaan, Emosi, Gairah', 'Feelings, Emotion, Passion', 'ခံစားချက်၊ စိတ်ခံစားမှု၊ စိတ်အားထက်သန်မှု', 'ジョウ, セイ', 'なさ・け', 'Soul', 'radikal soul', 11, 5, 'N3'),
(3063, '例', 'Contoh, Kustom, Penggunaan', 'Example, Custom, Usage', 'ဥပမာ၊ စိတ်ကြိုက်၊ အသုံးပြုမှု', 'レイ', 'たと・える', 'Leader', 'radikal leader', 8, 4, 'N3'),
(3064, '卒', 'Lulusan, Prajurit, Prajurit', 'Graduate, Soldier, Private', 'ဘွဲ့ရ၊ စစ်သား၊ သီးသန့်', 'ソツ, シュツ', 'そっ・する, お・える, お・わる, ついに, にわか', 'Lid', 'radikal lid', 8, 4, 'N3'),
(3065, '周', 'Keliling, Sirkuit, Putaran', 'Circumference, Circuit, Lap', 'လုံးပတ်၊ ပတ်လမ်း၊ ရင်ခွင်', 'シュウ', 'まわ・り', 'Circumference', 'radikal circumference', 8, 4, 'N3'),
(3066, '囲', 'Kelilingi, Kepung, Simpan', 'Surround, Besiege, Store', 'ဝိုင်း၊ ဝိုင်း၊ စတိုး', 'イ', 'かこ・む, かこ・う, かこ・い', 'Mouth', 'radikal mouth', 7, 4, 'N3'),
(3067, '季', 'Musim', 'Seasons', 'ဥတု', 'キ', '', 'Grain', 'radikal grain', 8, 4, 'N3'),
(3068, '希', 'Harapan, Mohon, Permintaan', 'Hope, Beg, Request', 'မျှော်လင့်ခြင်း၊ တောင်းရမ်းခြင်း၊ တောင်းဆိုခြင်း။', 'キ, ケ', 'まれ', 'Treasure', 'radikal treasure', 7, 4, 'N3'),
(3069, '念', 'Keinginan, Rasa, Ide', 'Wish, Sense, Idea', 'ဆန္ဒ၊ အသိ၊ စိတ်ကူး', 'ネン', '', 'Now', 'radikal now', 8, 4, 'N3'),
(3070, '折', 'Lipat, Patah, Patah', 'Fold, Break, Fracture', 'ခေါက်၊ချိုး၊ကျိုး', 'セツ, シャク', 'お・る, おり, お・り, お・り, お・れる', 'Fingers', 'radikal fingers', 7, 4, 'N3'),
(3071, '松', 'Pohon Pinus', 'Pine Tree', 'ထင်းရှူးပင်', 'ショウ', 'まつ', 'Tree', 'radikal tree', 8, 4, 'N3'),
(3072, '残', 'Sisa, Sisa, Saldo', 'Remainder, Leftover, Balance', 'လက်ကျန်၊ လက်ကျန်၊ လက်ကျန်', 'ザン, サン', 'のこ・る, のこ・す, そこな・う, のこ・り', 'Yakuza', 'radikal yakuza', 10, 4, 'N3'),
(3073, '求', 'Meminta, Menginginkan, Menginginkan', 'Request, Want, Wish For', 'တောင်းဆိုမှု၊ လိုချင်မှု၊ ဆန္ဒ', 'キュウ, グ', 'もと・める', 'Ground', 'radikal ground', 7, 4, 'N3'),
(3074, '的', 'Tepat sasaran, Tandai, Sasaran', 'Bull''s Eye, Mark, Target', 'Bull''s Eye, Mark, ပစ်မှတ်', 'テキ', 'まと', 'White', 'radikal white', 8, 4, 'N3'),
(3075, '芸', 'Teknik, Seni, Kerajinan', 'Technique, Art, Craft', 'နည်းပညာ၊ အနုပညာ၊ လက်မှုပညာ', 'ゲイ, ウン', 'う・える, のり, わざ', 'Flowers', 'radikal flowers', 7, 4, 'N3'),
(3076, '性', 'Jenis Kelamin, Gender, Alam', 'Sex, Gender, Nature', 'လိင်၊ လိင်၊ သဘာဝ', 'セイ, ショウ', 'さが', 'Soul', 'radikal soul', 8, 5, 'N3'),
(3077, '技', 'Keterampilan, Seni, Kerajinan', 'Skill, Art, Craft', 'ကျွမ်းကျင်မှု၊ အနုပညာ၊ လက်မှုပညာ', 'ギ', 'わざ', 'Fingers', 'radikal fingers', 7, 5, 'N3'),
(3078, '能', 'Kemampuan, Bakat, Keterampilan', 'Ability, Talent, Skill', 'အရည်အချင်း၊ အရည်အချင်း၊ အရည်အချင်း', 'ノウ', 'よ・く', 'Private', 'radikal private', 10, 5, 'N3'),
(3079, '術', 'Seni, Teknik, Keterampilan', 'Art, Technique, Skill', 'အနုပညာ၊ နည်းပညာ၊ ကျွမ်းကျင်မှု', 'ジュツ', 'すべ', 'Go', 'radikal go', 11, 5, 'N3'),
(3080, '骨', 'Kerangka, Tulang, Sisa', 'Skeleton, Bone, Remains', 'အရိုး၊ အရိုး၊ အကြွင်း', 'コツ', 'ほね', 'Mustache', 'radikal mustache', 10, 6, 'N3'),
(3081, '信', 'Iman, Kebenaran, Kesetiaan', 'Faith, Truth, Fidelity', 'သစ္စာ၊ သစ္စာ၊ သစ္စာ', 'シン', '', 'Leader', 'radikal leader', 9, 4, 'N3'),
(3082, '勇', 'Berani, Bergembiralah, Bersemangat Tinggi', 'Courage, Cheer Up, Be In High Spirits', 'သတ္တိရှိပါ၊ ရွှင်လန်းပါ၊ မြင့်မြတ်သောစိတ်ဓာတ်ရှိပါ။', 'ユウ', 'いさ・む', 'Mama', 'radikal mama', 9, 4, 'N3'),
(3083, '司', 'Direktur, Pejabat, Kantor Pemerintah', 'Director, Official, Govt Office', 'ဒါရိုက်တာ၊ တာဝန်ရှိသူ၊ အစိုးရရုံး', 'シ', 'つかさど・る', 'Cape', 'radikal cape', 5, 4, 'N3'),
(3084, '変', 'Tidak Biasa, Berubah, Aneh', 'Unusual, Change, Strange', 'ထူးထူးခြားခြား၊ ပြောင်းလဲခြင်း၊ ထူးဆန်းသည်။', 'ヘン', 'か・わる, か・わり, か・える', 'Red', 'radikal red', 9, 4, 'N3'),
(3085, '夫', 'Suamiku, Bung', 'Husband, Man', 'ခင်ပွန်း၊ လူ', 'フ, フウ, ブ', 'おっと, それ', 'Husband', 'radikal husband', 4, 4, 'N3'),
(3086, '昨', 'Kemarin, Sebelumnya', 'Yesterday, Previous', 'မနေ့က၊ အရင်', 'サク', '', 'Sun', 'radikal sun', 9, 4, 'N3'),
(3087, '毒', 'Racun, Virus, Racun', 'Poison, Virus, Venom', 'အဆိပ်၊ ဗိုင်းရပ်စ်၊ အဆိပ်', 'ドク', '', 'Life', 'radikal life', 8, 4, 'N3'),
(3088, '法', 'Metode, Hukum, Aturan', 'Method, Law, Rule', 'နည်းလမ်း၊ ဥပဒေ၊ နည်းဥပဒေ', 'ホウ, ハッ, ホッ, フラン', 'のり', 'Tsunami', 'radikal tsunami', 8, 4, 'N3'),
(3089, '泣', 'Menangis, Menangis, Mengerang', 'Cry, Weep, Moan', 'ငို၊ ငို၊ ညည်း', 'キュウ', 'な・く', 'Tsunami', 'radikal tsunami', 8, 4, 'N3'),
(3090, '紀', 'Kronik, Akun, Narasi', 'Chronicle, Account, Narrative', 'Chronicle၊ အကောင့်၊ ဇာတ်ကြောင်း', 'キ', '', 'Thread', 'radikal thread', 9, 4, 'N3'),
(3091, '軍', 'Tentara, Angkatan, Pasukan', 'Army, Force, Troops', 'တပ်မတော်၊ တပ်ဖွဲ့၊ တပ်ဖွဲ့', 'グン', 'いくさ', 'Forehead', 'radikal forehead', 9, 4, 'N3'),
(3092, '仏', 'Buddha, Orang Mati, Prancis', 'Buddha, The Dead, France', 'ဗုဒ္ဓ, သေလွန်, ပြင်သစ်', 'ブツ, フツ', 'ほとけ', 'Leader', 'radikal leader', 4, 5, 'N3'),
(3093, '築', 'Fabrikasi, Bangun, Bangun', 'Fabricate, Build, Construct', 'ဖန်တီး၊ တည်ဆောက်၊ တည်ဆောက်', 'チク', 'きず・く', 'Bamboo', 'radikal bamboo', 16, 5, 'N3'),
(3094, '晩', 'Malam tiba, Malam', 'Nightfall, Night', 'ညမိုးချုပ်၊ည', 'バン', '', 'Sun', 'radikal sun', 12, 6, 'N3'),
(3095, '典', 'Kode, Upacara, Hukum', 'Code, Ceremony, Law', 'ကုဒ်၊ အခမ်းအနား၊ ဥပဒေ', 'テン, デン', '', 'Music', 'radikal music', 8, 4, 'N3'),
(3096, '府', 'Borough, Prefektur Perkotaan, Kantor Pemerintah', 'Borough, Urban Prefecture, Govt Office', 'မြို့နယ်၊ မြို့ပြစီရင်စု၊ အစိုးရရုံး', 'フ', '', 'Canopy', 'radikal canopy', 8, 4, 'N3'),
(3097, '浴', 'Mandi, Disukai, Berjemur', 'Bathe, Be Favored With, Bask In', 'ရေချိုး၊ နှစ်ခြိုက်စွာ ရေချိုးပါ။', 'ヨク', 'あ・びる, あ・びせる', 'Tsunami', 'radikal tsunami', 10, 4, 'N3'),
(3098, '笑', 'Tertawa', 'Laugh', 'ရယ်ပါ။', 'ショウ', 'わら・う, え・む', 'Bamboo', 'radikal bamboo', 10, 4, 'N3'),
(3099, '辞', 'Mengundurkan diri, Kata, Istilah', 'Resign, Word, Term', 'နှုတ်ထွက်၊ စကား၊ သက်တမ်း', 'ジ', 'や・める, いな・む', 'Tongue', 'radikal tongue', 13, 4, 'N3'),
(3100, '関', 'Koneksi, Penghalang, Gerbang', 'Connection, Barrier, Gateway', 'ချိတ်ဆက်မှု၊ အတားအဆီး၊ ဂိတ်ဝေး', 'カン', 'せき, ぜき, かか・わる, からくり, かんぬき', 'Gate', 'radikal gate', 14, 4, 'N3'),
(3101, '弁', 'Katup, Kelopak, Kepang', 'Valve, Petal, Braid', 'Valve, Petal, Braid', 'ベン, ヘン', 'かんむり, わきま・える, わ・ける, はなびら, あらそ・う', 'Private', 'radikal private', 5, 5, 'N3'),
(3102, '証', 'Bukti, Bukti, Sertifikat', 'Evidence, Proof, Certificate', 'အထောက်အထား၊ အထောက်အထား၊ လက်မှတ်', 'ショウ', 'あかし', 'Say', 'radikal say', 12, 5, 'N3'),
(3103, '専', 'Khusus, Eksklusif, Terutama', 'Specialty, Exclusive, Mainly', 'အထူးသီးသန့်၊ အဓိကအားဖြင့်', 'セン', 'もっぱ・ら', 'Cross', 'radikal cross', 9, 6, 'N3'),
(3104, '側', 'Samping, Miring, Berlawanan', 'Side, Lean, Oppose', 'တစ်ဖက်၊ ယိမ်း၊ ဆန့်ကျင်', 'ソク', 'かわ, がわ, そば', 'Leader', 'radikal leader', 11, 4, 'N3'),
(3105, '兵', 'Prajurit, Prajurit, Pasukan', 'Soldier, Private, Troops', 'စစ်သား၊ သီးသန့်၊ တပ်ဖွဲ့', 'ヘイ, ヒョウ', 'つわもの', 'Axe', 'radikal axe', 7, 4, 'N3'),
(3106, '塩', 'Garam', 'Salt', 'ဆား', 'エン', 'しお', 'Dirt', 'radikal dirt', 13, 4, 'N3'),
(3107, '席', 'Kursi, Tikar, Acara', 'Seat, Mat, Occasion', 'ထိုင်ခုံ၊ ဖျာ၊ ပွဲ', 'セキ', 'むしろ', 'Yurt', 'radikal yurt', 10, 4, 'N3'),
(3108, '果', 'Buah, Hadiah, Laksanakan', 'Fruit, Reward, Carry Out', 'အသီးအနှံ၊ ဆုလာဘ်၊ ဆောင်ရွက်ပါ။', 'カ', 'は・たす, はた・す, は・たす, は・てる, は・てる, は・て', 'Fruit', 'radikal fruit', 8, 4, 'N3'),
(3109, '梅', 'prem', 'Plum', 'ဇီးသီး', 'バイ', 'うめ', 'Tree', 'radikal tree', 10, 4, 'N3'),
(3110, '因', 'Penyebab, Faktor, Berhubungan Dengan', 'Cause, Factor, Be Associated With', 'အကြောင်းတရား၊ အကြောင်းတရား၊ အကြောင်းတရားတို့နဲ့ ဆက်စပ်နေတယ်။', 'イン', 'よ・る, ちな・む', 'Mouth', 'radikal mouth', 6, 5, 'N3'),
(3111, '常', 'Biasa, Biasa, Biasa', 'Usual, Ordinary, Normal', 'ပုံမှန်၊ သာမာန်၊ ပုံမှန်', 'ジョウ', 'つね, とこ', 'Viking', 'radikal viking', 11, 5, 'N3'),
(3112, '識', 'Membedakan, Mengetahui, Menulis', 'Discriminating, Know, Write', 'ခွဲခြားသိ၊ ရေးပါ။', 'シキ', 'し・る, しる・す', 'Say', 'radikal say', 19, 5, 'N3'),
(3113, '干', 'Kering, Parch, Ebb', 'Dry, Parch, Ebb', 'အခြောက်၊ Parch၊ Ebb', 'カン', 'ほ・す, ほ・し, ぼ・し, ひ・る', 'Dry', 'radikal dry', 3, 6, 'N3'),
(3114, '官', 'Birokrat, Pemerintah, Organ', 'Bureaucrat, The Government, Organ', 'ဗျူရိုကရက်၊ အစိုးရ၊ အဖွဲ့အစည်း', 'カン', '', 'Roof', 'radikal roof', 8, 4, 'N3'),
(3115, '愛', 'Cinta, Kasih Sayang, Favorit', 'Love, Affection, Favourite', 'အချစ်၊ အချစ်၊ အကြိုက်ဆုံး', 'アイ', 'いと・しい, かな・しい, め・でる, お・しむ, まな', 'Cleat', 'radikal cleat', 13, 4, 'N3'),
(3116, '署', 'Tanda Tangan, Kantor Pemerintah, Kantor Polisi', 'Signature, Govt Office, Police Station', 'လက်မှတ်၊ အစိုးရရုံး၊ ရဲစခန်း', 'ショ', '', 'Net', 'radikal net', 13, 6, 'N3'),
(3117, '警', 'Peringatan, Perintah', 'Admonish, Commandment', 'သတိပေး၊ အမိန့်ပေး', 'ケイ', 'いまし・める', 'Poem', 'radikal poem', 19, 6, 'N3'),
(3118, '説', 'Opini, Teori, Penjelasan', 'Opinion, Theory, Explanation', 'အမြင်၊ သီအိုရီ၊ ရှင်းလင်းချက်', 'セツ, ゼイ', 'と・く', 'Say', 'radikal say', 14, 4, 'N3'),
(3119, '訓', 'Instruksi, Bacaan Karakter Jepang, Penjelasan', 'Instruction, Japanese Character Reading, Explanation', 'သင်ကြားမှု၊ ဂျပန်အက္ခရာဖတ်ခြင်း၊ ရှင်းလင်းချက်', 'クン, キン', 'おし・える, よ・む, くん・ずる', 'Say', 'radikal say', 10, 4, 'N3'),
(3120, '告', 'Wahyu, Beritahu, Informasikan', 'Revelation, Tell, Inform', 'ဗျာဒိတ်၊ ပြောပါ၊ အသိပေးပါ။', 'コク', 'つ・げる', 'Slide', 'radikal slide', 7, 4, 'N3'),
(3121, '種', 'Spesies, Jenis, Kelas', 'Species, Kind, Class', 'မျိုးစိတ်၊ အမျိုးအစား၊ လူတန်းစား', 'シュ', 'たね, ぐさ', 'Grain', 'radikal grain', 14, 4, 'N3'),
(3122, '達', 'Selesai, Capai, Tiba', 'Accomplished, Reach, Arrive', 'ပြီးပြီ၊ လက်လှမ်း၊ ဆိုက်ရောက်', 'タツ, ダ', 'たち', 'Scooter', 'radikal scooter', 12, 4, 'N3'),
(3123, '焼', 'Panggang, Bakar', 'Bake, Burning', 'ဖုတ်၊ လောင်', 'ショウ', 'や・く, や・き, や・き, や・き, や・ける', 'Fire', 'radikal fire', 12, 4, 'N3'),
(3124, '座', 'Jongkok, Kursi, Bantal', 'Squat, Seat, Cushion', 'ထိုင်ထ၊ ထိုင်ခုံ၊ ကူရှင်', 'ザ', 'すわ・る', 'Canopy', 'radikal canopy', 10, 6, 'N3'),
(3125, '忘', 'Lupakan', 'Forget', 'မေ့လိုက်ပါ။', 'ボウ', 'わす・れる', 'Death', 'radikal death', 7, 6, 'N3'),
(3126, '胸', 'Dada, Payudara, Dada', 'Bosom, Breast, Chest', 'ရင်ဘတ်၊ ရင်သား၊ ရင်ဘတ်', 'キョウ', 'むね, むな', 'Moon', 'radikal moon', 10, 6, 'N3'),
(3127, '脳', 'Otak, Memori', 'Brain, Memory', 'ဦးနှောက်၊ မှတ်ဉာဏ်', 'ノウ, ドウ', 'のうずる', 'Moon', 'radikal moon', 11, 6, 'N3'),
(3128, '験', 'Verifikasi, Efek, Pengujian', 'Verification, Effect, Testing', 'အတည်ပြုခြင်း၊ အကျိုးသက်ရောက်မှု၊ စမ်းသပ်ခြင်း။', 'ケン, ゲン', 'あかし, しるし, ため・す, ためし', 'Horse', 'radikal horse', 18, 4, 'N3'),
(3129, '枚', 'Lembaran..., Counter Untuk Benda Atau Lembaran Tipis Datar', 'Sheet Of..., Counter For Flat Thin Objects Or Sheets', 'Sheet Of...၊ ပြားချပ်ချပ်ချပ် အရာဝတ္ထုများ သို့မဟုတ် စာရွက်များအတွက် ကောင်တာ', 'マイ, バイ', '', 'Tree', 'radikal tree', 8, 6, 'N3'),
(3130, '静', 'Tenang', 'Quiet', 'တိတ်တိတ်', 'セイ, ジョウ', 'しず, しず・か, しず・まる, しず・める', 'Blue', 'radikal blue', 14, 4, 'N3'),
(3131, '句', 'Frasa, Klausa, Kalimat', 'Phrase, Clause, Sentence', 'စကားစု၊ အပိုဒ်၊ ဝါကျ', 'ク', '', 'Paragraph', 'radikal paragraph', 5, 5, 'N3'),
(3132, '加', 'Tambah, Tambah, Tambah', 'Add, Addition, Increase', 'ပေါင်းထည့်၊ ထပ်တိုး၊ တိုး', 'カ', 'くわ・える, くわ・わる', 'Power', 'radikal power', 5, 4, 'N3'),
(3133, '節', 'Node, Musim, Periode', 'Node, Season, Period', 'Node, Season, Period', 'セツ, セチ', 'ふし, ぶし, のっと', 'Bamboo', 'radikal bamboo', 13, 4, 'N3'),
(3134, '布', 'Linen, Kain, Sebaran', 'Linen, Cloth, Spread', 'ပိတ်၊ အထည်၊ ဖြန့်', 'フ', 'ぬの', 'Narwhal', 'radikal narwhal', 5, 5, 'N3'),
(3135, '若', 'Muda, Jika, Mungkin', 'Young, If, Perhaps', 'Young, If, ဖြစ်ကောင်းဖြစ်နိုင်သည်။', 'ジャク, ニャク, ニャ', 'わか・い, わか, も・しくわ, も・し, も・しくは, ごと・し', 'Flowers', 'radikal flowers', 8, 6, 'N3'),
(3136, '詞', 'Bagian Pidato, Kata-kata, Puisi', 'Part Of Speech, Words, Poetry', 'စကား၊ စကား၊ ကဗျာ အပိုင်း', 'シ', 'ことば', 'Say', 'radikal say', 12, 6, 'N3'),
(3137, '歴', 'Kurikulum, Lanjutan, Perjalanan Waktu', 'Curriculum, Continuation, Passage Of Time', 'သင်ရိုးညွှန်းတမ်း၊ စဉ်ဆက်မပြတ်၊ အချိန်၏ဖြတ်သန်းမှု', 'レキ, レッキ', '', 'Cliff', 'radikal cliff', 14, 4, 'N3'),
(3138, '舌', 'Lidah, Reed, Clapper', 'Tongue, Reed, Clapper', 'လျှာ၊ကျူ၊လက်ခုပ်', 'ゼツ', 'した', 'Tongue', 'radikal tongue', 6, 5, 'N3'),
(3139, '冊', 'Tome, Penghitung Buku, Volume', 'Tome, Counter For Books, Volume', 'Tome၊ စာအုပ်များအတွက်ကောင်တာ၊ အတွဲ', 'サツ, サク', 'ふみ', 'Bookshelf', 'radikal bookshelf', 5, 6, 'N3'),
(3140, '宇', 'Atap, Atap, Rumah', 'Eaves, Roof, House', 'တံစက်မြိတ်၊ အမိုး၊ အိမ်', 'ウ', '', 'Roof', 'radikal roof', 6, 6, 'N3'),
(3141, '宙', 'Udara, Udara, Luar Angkasa', 'Mid-air, Air, Space', 'လေထု၊ လေ၊ အာကာသ', 'チュウ', '', 'Roof', 'radikal roof', 8, 6, 'N3'),
(3142, '暴', 'Ledakan, Sambutan hangat, Resah', 'Outburst, Rave, Fret', 'ပေါက်ကွဲခြင်း၊ ရိုင်းစိုင်းခြင်း၊ စိတ်မပူခြင်း။', 'ボウ, バク', 'あば・く, あば・れる', 'Sun', 'radikal sun', 15, 5, 'N3'),
(3143, '徒', 'Berjalan Kaki, Junior, Kekosongan', 'On Foot, Junior, Emptiness', 'ခြေလျင်၊ ဂျူနီယာ၊ လွတ်ခြင်း', 'ト', 'いたずら, あだ', 'Loiter', 'radikal loiter', 10, 4, 'N3'),
(3144, '改', 'Reformasi, Ubah, Modifikasi', 'Reformation, Change, Modify', 'ပြုပြင်ပြောင်းလဲရေး၊ ပြောင်းလဲရေး၊ ပြုပြင်ပြောင်းလဲရေး', 'カイ', 'あらた・める, あらた・まる', 'Oneself', 'radikal oneself', 7, 4, 'N3'),
(3145, '善', 'Berbudi Luhur, Baik, Baik', 'Virtuous, Good, Goodness', 'သီလ၊ ကုသိုလ်၊ ကုသိုလ်', 'ゼン', 'よ・い, い・い, よ・く, よし・とする', 'Sheep', 'radikal sheep', 12, 6, 'N3'),
(3146, '困', 'Kebingungan, Menjadi Tertekan, Kesal', 'Quandary, Become Distressed, Annoyed', 'ကမောက်ကမ၊ စိတ်ဆင်းရဲ၊ စိတ်အနှောက်အယှက်ဖြစ်မယ်။', 'コン', 'こま・る', 'Mouth', 'radikal mouth', 7, 6, 'N3'),
(3147, '災', 'Bencana, Bencana, Celaka', 'Disaster, Calamity, Woe', 'ဘေးဥပဒ်၊ ဘေးဥပဒ်၊', 'サイ', 'わざわ・い', 'Flood', 'radikal flood', 7, 5, 'N3'),
(3148, '機', 'Alat Tenun, Mekanisme, Mesin', 'Loom, Mechanism, Machine', 'ယက်ကန်း၊ ယန္တရား၊ စက်', 'キ', 'はた', 'Tree', 'radikal tree', 16, 4, 'N3'),
(3149, '飛', 'Terbang, Lewati (halaman), Sebarkan', 'Fly, Skip (pages), Scatter', 'ပျံသန်းပါ၊ ကျော်ပါ (စာမျက်နှာများ)၊ ဖြန့်ကြဲပါ။', 'ヒ', 'と・ぶ, と・ばす, と・ばす', 'Fly', 'radikal fly', 9, 4, 'N3'),
(3150, '余', 'Terlalu Banyak, Saya Sendiri, Kelebihan', 'Too Much, Myself, Surplus', 'အလွန်အကျွံ၊ ကျွန်ုပ်ကိုယ်တိုင်၊ ပိုလျှံသည်။', 'ヨ', 'あま・る, あま・り, あま・す, あんま・り', 'Hat', 'radikal hat', 7, 5, 'N3'),
(3151, '械', 'Alat, Belenggu, Mesin', 'Contraption, Fetter, Machine', 'ချုပ်နှောင်ခြင်း၊ ချုပ်နှောင်ခြင်း၊ စက်', 'カイ', 'かせ', 'Tree', 'radikal tree', 11, 4, 'N3'),
(3152, '確', 'Kepastian, Tegas, Ketat', 'Assurance, Firm, Tight', 'အာမခံချက်၊ ခိုင်မာမှု၊ တင်းကျပ်မှု', 'カク, コウ', 'たし・か, たし・かめる', 'Stone', 'radikal stone', 15, 5, 'N3'),
(3153, '在', 'Ada, Pinggiran, Pinggiran Kota', 'Exist, Outskirts, Suburbs', 'ရှိပြီးသား၊ မြို့စွန်၊ ဆင်ခြေဖုံး', 'ザイ', 'あ・る', 'Narwhal', 'radikal narwhal', 6, 5, 'N3'),
(3154, '夢', 'Mimpi, Visi, Ilusi', 'Dream, Vision, Illusion', 'အိပ်မက်၊ အမြင်၊ စိတ်ကူးယဉ်', 'ム, ボウ', 'ゆめ, ゆめ・みる, くら・い', 'Flowers', 'radikal flowers', 13, 5, 'N3'),
(3155, '厚', 'Tebal, Berat, Kaya', 'Thick, Heavy, Rich', 'ထူတယ်၊ လေးတယ်၊ ချမ်းသာတယ်။', 'コウ', 'あつ・い, あか', 'Cliff', 'radikal cliff', 9, 5, 'N3'),
(3156, '妻', 'Istri, Pasangan', 'Wife, Spouse', 'ဇနီး၊ အိမ်ထောင်ဖက်', 'サイ', 'つま', 'Ground', 'radikal ground', 8, 5, 'N3'),
(3157, '犯', 'Kejahatan, Dosa, Pelanggaran', 'Crime, Sin, Offense', 'ရာဇဝတ်မှု၊ ဒုစရိုက်', 'ハン, ボン', 'おか・す', 'Animal', 'radikal animal', 5, 5, 'N3'),
(3158, '穴', 'Lubang, Bukaan, Celah', 'Hole, Aperture, Slit', 'အပေါက်၊ အလင်းဝင်ပေါက်၊ အပေါက်', 'ケツ', 'あな', 'Hole', 'radikal hole', 5, 6, 'N3'),
(3159, '史', 'Sejarah, Kronik', 'History, Chronicle', 'သမိုင်း၊ မှတ်တမ်း', 'シ', '', 'History', 'radikal history', 5, 4, 'N3'),
(3160, '挙', 'Angkat, Rencanakan, Proyek', 'Raise, Plan, Project', 'မြှင့်တင်ရန်၊ စီမံချက်၊ စီမံကိန်း', 'キョ', 'あ・げる, あ・がる, こぞ・る', 'Grass', 'radikal grass', 10, 4, 'N3'),
(3161, '務', 'Tugas, Tugas', 'Task, Duties', 'တာဝန်၊ တာဝန်', 'ム', 'つと・める', 'Spear', 'radikal spear', 11, 5, 'N3'),
(3162, '総', 'Umum, Utuh, Semua', 'General, Whole, All', 'General, Whole, All', 'ソウ', 'す・べて, すべ・て, ふさ', 'Thread', 'radikal thread', 14, 5, 'N3'),
(3163, '権', 'Otoritas, Kekuasaan, Hak', 'Authority, Power, Rights', 'လုပ်ပိုင်ခွင့်၊ အာဏာ၊ အခွင့်အရေး', 'ケン, ゴン', 'おもり, かり, はか・る', 'Tree', 'radikal tree', 15, 6, 'N3'),
(3164, '件', 'Perselingkuhan, Kasus, Masalah', 'Affair, Case, Matter', 'ကိစ္စ၊ ကိစ္စ၊ ကိစ္စ', 'ケン', 'くだん', 'Leader', 'radikal leader', 6, 5, 'N3'),
(3165, '派', 'Fraksi, Golongan, Partai', 'Faction, Group, Party', 'ဂိုဏ်းခွဲ၊ အဖွဲ့၊ ပါတီ', 'ハ', '', 'Tsunami', 'radikal tsunami', 9, 6, 'N3'),
(3166, '素', 'Dasar, Prinsip, Telanjang', 'Elementary, Principle, Naked', 'မူလတန်း၊ သဘောတရား၊ ကိုယ်လုံးတီး', 'ソ, ス', 'もと', 'Life', 'radikal life', 10, 5, 'N3'),
(3167, '検', 'Pemeriksaan, Selidiki', 'Examination, Investigate', 'စစ်ဆေးမှု၊ စုံစမ်းပါ။', 'ケン', 'しら・べる', 'Tree', 'radikal tree', 12, 5, 'N3'),
(3168, '条', 'Artikel, Klausul, Item', 'Article, Clause, Item', 'အပိုဒ်၊ အပိုဒ်၊ အကြောင်းအရာ', 'ジョウ, チョウ, デキ', 'えだ, すじ', 'Winter', 'radikal winter', 7, 5, 'N3'),
(3169, '省', 'Fokus, Kementerian Pemerintah, Konservasi', 'Focus, Government Ministry, Conserve', 'အလေးထားပါ၊ အစိုးရဝန်ကြီးဌာန၊ ထိန်းသိမ်းပါ။', 'セイ, ショウ', 'かえり・みる, はぶ・く', 'Few', 'radikal few', 9, 4, 'N3'),
(3170, '際', 'Acara, Samping, Tepi', 'Occasion, Side, Edge', 'အခါသမယ၊ ဘေး၊ အစွန်း', 'サイ', 'きわ, ぎわ', 'Building', 'radikal building', 14, 5, 'N3'),
(3171, '義', 'Kebenaran, Keadilan, Moralitas', 'Righteousness, Justice, Morality', 'ဖြောင့်မတ်ခြင်း၊ တရားမျှတခြင်း၊', 'ギ', '', 'Righteousness', 'radikal righteousness', 13, 5, 'N3'),
(3172, '誕', 'Kelahiran, Dilahirkan, Kemunduran', 'Nativity, Be Born, Declension', 'ဇာတိ၊ မွေးဖွားခြင်း၊ ယုတ်လျော့ခြင်း။', 'タン', '', 'Say', 'radikal say', 15, 6, 'N3'),
(3173, '過', 'Berlebihan, Melebihi, Melampaui', 'Overdo, Exceed, Go Beyond', 'Overdo, Exceed, Go Beyond', 'カ', 'す・ぎる, す・ぎる, す・ぎ, す・ごす, あやま・つ, あやま・ち, よ・ぎる', 'Scooter', 'radikal scooter', 12, 5, 'N3'),
(3174, '置', 'Penempatan, Letakkan, Set', 'Placement, Put, Set', 'နေရာချထား၊ ထား၊ သတ်မှတ်', 'チ', 'お・く, お・き', 'Net', 'radikal net', 13, 4, 'N3'),
(3175, '勢', 'Kekuatan, Energi, Kekuatan Militer', 'Forces, Energy, Military Strength', 'တပ်ဖွဲ့၊ စွမ်းအင်၊ စစ်အင်အား', 'セイ, ゼイ', 'いきお・い, はずみ', 'Womb', 'radikal womb', 13, 5, 'N3'),
(3176, '営', 'Pekerjaan, Perkemahan, Pertunjukan', 'Occupation, Camp, Perform', 'အလုပ်အကိုင်၊ စခန်းသွင်း၊ လုပ်ဆောင်ပါ။', 'エイ', 'いとな・む, いとな・み', 'Viking', 'radikal viking', 12, 5, 'N3'),
(3177, '領', 'Yurisdiksi, Dominasi, Wilayah', 'Jurisdiction, Dominion, Territory', 'တရားစီရင်ပိုင်ခွင့်၊ ဂုဏ်တော်၊ နယ်မြေ', 'リョウ', 'えり', 'Orders', 'radikal orders', 14, 5, 'N3'),
(3178, '策', 'Skema, Rencana, Kebijakan', 'Scheme, Plan, Policy', 'အစီအစဉ်၊ အစီအစဉ်၊ မူဝါဒ', 'サク', '', 'Bamboo', 'radikal bamboo', 12, 6, 'N3'),
(3179, '副', 'Wakil-, Asisten, Ajudan', 'Vice-, Assistant, Aide', 'ဒု-၊ လက်ထောက်၊ လက်ထောက်', 'フク', '', 'Scarecrow', 'radikal scarecrow', 11, 4, 'N3'),
(3180, '値', 'Harga, Biaya, Nilai', 'Price, Cost, Value', 'စျေးနှုန်း၊ ကုန်ကျစရိတ်၊ တန်ဖိုး', 'チ', 'ね, あたい', 'Leader', 'radikal leader', 10, 6, 'N3'),
(3181, '吸', 'Hisap, Imbibe, Tarik napas', 'Suck, Imbibe, Inhale', 'စုတ်ပါ၊ ရှူသွင်းပါ၊ ရှူပါ။', 'キュウ', 'す・う', 'Mouth', 'radikal mouth', 6, 6, 'N3'),
(3182, '姿', 'Gambar, Bentuk, Bentuk', 'Figure, Form, Shape', 'ပုံ၊ ပုံစံ၊ ပုံသဏ္ဍာန်', 'シ', 'すがた', 'Next', 'radikal next', 9, 6, 'N3'),
(3183, '応', 'Terapkan, Jawab, Ya', 'Apply, Answer, Yes', 'လျှောက်ထား၊ ဖြေ၊ ဟုတ်ကဲ့', 'オウ, ヨウ, -ノウ', 'あた・る, まさに, こた・える', 'Canopy', 'radikal canopy', 7, 5, 'N3'),
(3184, '賀', 'Selamat, sukacita', 'Congratulations, Joy', 'ဂုဏ်ယူပါတယ် Joy', 'ガ', '', 'Power', 'radikal power', 12, 5, 'N3'),
(3185, '革', 'Kulit, Kulit, Reformasi', 'Leather, Skin, Reform', 'သားရေ၊အရေပြား၊ပြုပြင်ပြောင်းလဲမှု', 'カク', 'かわ', 'Leather', 'radikal leather', 9, 6, 'N3'),
(3186, '職', 'Posting, Pekerjaan, Pekerjaan', 'Post, Employment, Work', 'ရာထူး၊ အလုပ်အကိုင်၊ အလုပ်', 'ショク, ソク', '', 'Ear', 'radikal ear', 18, 5, 'N3'),
(3187, '護', 'Lindungi, Lindungi', 'Safeguard, Protect', 'ကာကွယ်ပါ၊ ကာကွယ်ပါ။', 'ゴ', 'まも・る', 'Say', 'radikal say', 20, 5, 'N3'),
(3188, '割', 'Proporsi, Relatif, Bagilah', 'Proportion, Comparatively, Divide', 'အချိုး၊ ယှဉ်၊ ပိုင်းခြားခြင်း။', 'カツ', 'わ・る, わり, わ・り, わ・れる, さ・く', 'Roof', 'radikal roof', 12, 6, 'N3'),
(3189, '裁', 'Penjahit, Hakim, Keputusan', 'Tailor, Judge, Decision', 'အပ်ချုပ်၊ တရားသူကြီး၊ ဆုံးဖြတ်ချက်', 'サイ', 'た・つ, さば・く', 'Cross', 'radikal cross', 12, 6, 'N3'),
(3190, '演', 'Pertunjukan, Akting, Permainan', 'Performance, Act, Play', 'စွမ်းဆောင်ရည်၊ အက်ဥပဒေ၊ ကစား', 'エン', '', 'Tsunami', 'radikal tsunami', 14, 5, 'N3'),
(3191, '律', 'Irama, Hukum, Regulasi', 'Rhythm, Law, Regulation', 'စည်းချက်၊ ဥပဒေ၊ စည်းမျဉ်း', 'リツ, リチ, レツ', '', 'Loiter', 'radikal loiter', 9, 6, 'N3'),
(3192, '師', 'Pakar, Guru, Guru', 'Expert, Teacher, Master', 'ကျွမ်းကျင်သူ၊ ဆရာ၊ ဆရာ', 'シ', 'いくさ', 'Drop', 'radikal drop', 10, 5, 'N3'),
(3193, '看', 'Awasi, Lihat', 'Watch Over, See', 'စောင့်ကြည့်ပါ၊ ကြည့်ရှုပါ။', 'カン', 'み・る', 'Hand', 'radikal hand', 9, 6, 'N3'),
(3194, '幹', 'Batang Pohon, Bagian Utama, Bakat', 'Tree Trunk, Main Part, Talent', 'သစ်ပင် ပင်စည်၊ အဓိက အပိုင်း၊ စွမ်းရည်', 'カン', 'みき', 'Morning', 'radikal morning', 13, 5, 'N3'),
(3195, '張', 'Perpanjang, Penghitung Untuk Busur & Alat Musik Petik, Regangkan', 'Lengthen, Counter For Bows & Stringed Instruments, Stretch', 'အရှည်၊ လေးနှင့် ကြိုးတပ်တူရိယာအတွက် ကောင်တာ၊ ဆန့်', 'チョウ', 'は・る, は・り, ば・り', 'Bow', 'radikal bow', 11, 5, 'N3'),
(3196, '優', 'Kelembutan, Unggul, Melampaui', 'Tenderness, Excel, Surpass', 'နူးညံ့မှု၊ Excel၊ သာလွန်မှု', 'ユウ, ウ', 'やさ・しい, すぐ・れる, まさ・る', 'Leader', 'radikal leader', 17, 6, 'N3'),
(3197, '宅', 'Rumah, Rumah, Tempat Tinggal', 'Home, House, Residence', 'အိမ်၊ အိမ်၊ အိမ်', 'タク', '', 'Roof', 'radikal roof', 6, 6, 'N3'),
(3198, '乳', 'Susu, Payudara', 'Milk, Breasts', 'နို့၊ ရင်သား', 'ニュウ', 'ちち, ち', 'Cleat', 'radikal cleat', 8, 6, 'N3'),
(3199, '呼', 'Telepon, Telepon, Undang', 'Call, Call Out To, Invite', 'ခေါ်ပါ၊ ခေါ်ပါ၊ ဖိတ်ပါ။', 'コ', 'よ・ぶ', 'Mouth', 'radikal mouth', 8, 6, 'N3'),
(3200, '城', 'Kastil', 'Castle', 'ရဲတိုက်', 'ジョウ, セイ', 'しろ', 'Dirt', 'radikal dirt', 9, 6, 'N3'),
(3201, '俳', 'Haiku, Aktor', 'Haiku, Actor', 'ဟိုင်ကူ၊ သရုပ်ဆောင်', 'ハイ', '', 'Leader', 'radikal leader', 10, 6, 'N3'),
(3202, '燃', 'Bakar, Nyalakan, Bersinar', 'Burn, Blaze, Glow', 'မီးလောင်၊ တောက်၊ တောက်', 'ネン', 'も・える, も・やす, も・す', 'Fire', 'radikal fire', 16, 5, 'N3'),
(3203, '祝', 'Rayakan, ucapkan selamat', 'Celebrate, Congratulate', 'ဂုဏ်ပြုပါ၊ ဂုဏ်ပြုပါ။', 'シュク, シュウ', 'いわ・う', 'Spirit', 'radikal spirit', 9, 4, 'N3'),
(3204, '型', 'Cetakan, Jenis, Model', 'Mould, Type, Model', 'ပုံစံခွက်၊ အမျိုးအစား၊ မော်ဒယ်', 'ケイ', 'かた, がた', 'Lantern', 'radikal lantern', 9, 4, 'N3'),
(3205, '庁', 'Kantor Pemerintah', 'Government Office', 'အစိုးရရုံး', 'チョウ, テイ', 'やくしょ', 'Canopy', 'radikal canopy', 5, 6, 'N3'),
(3206, '象', 'Gajah, Pola Setelahnya, Tiru', 'Elephant, Pattern After, Imitate', 'ဆင်၊ ပုံဖော်ပြီးနောက်၊ အတုယူပါ။', 'ショウ, ゾウ', 'かたど・る', 'Elephant', 'radikal elephant', 12, 4, 'N3'),
(3207, '武', 'Prajurit, Militer, Ksatria', 'Warrior, Military, Chivalry', 'စစ်သည်တော်၊ စစ်ရေး၊ သူရဲကောင်း', 'ブ, ム', 'たけ, たけ・し', 'Ground', 'radikal ground', 8, 5, 'N3'),
(3208, '述', 'Sebutkan, Nyatakan, Bicara', 'Mention, State, Speak', 'ဖော်ပြပါ၊ ပြည်နယ်၊ စကားပြောပါ။', 'ジュツ', 'の・べる', 'Scooter', 'radikal scooter', 8, 5, 'N3'),
(3209, '展', 'Buka, Perluas', 'Unfold, Expand', 'ဖြန့်ပါ၊ ချဲ့ပါ။', 'テン', '', 'Flag', 'radikal flag', 10, 6, 'N3'),
(3210, '株', 'Saham, Tunggul, Saham', 'Stocks, Stump, Shares', 'စတော့များ၊ ငုတ်များ၊ ရှယ်ယာများ', 'シュ', 'かぶ', 'Tree', 'radikal tree', 10, 6, 'N3'),
(3211, '票', 'Surat Suara, Label, Tiket', 'Ballot, Label, Ticket', 'မဲ၊ တံဆိပ်၊ လက်မှတ်', 'ヒョウ', '', 'Helicopter', 'radikal helicopter', 11, 4, 'N3'),
(3212, '景', 'Pemandangan, Pemandangan', 'Scenery, View', 'ရှုခင်း၊ ရှုခင်း', 'ケイ', '', 'Sun', 'radikal sun', 12, 4, 'N3'),
(3213, '候', 'Iklim, Musim, Cuaca', 'Climate, Season, Weather', 'ရာသီဥတု၊ ရာသီ၊ ရာသီဥတု', 'コウ', 'そうろう', 'Leader', 'radikal leader', 10, 4, 'N3'),
(3214, '模', 'Imitasi, Salin, Tiruan', 'Imitation, Copy, Mock', 'အတုယူ၊ အတုယူ၊ အတုယူပါ။', 'モ, ボ', '', 'Tree', 'radikal tree', 14, 6, 'N3'),
(3215, '効', 'Kelebihan, Khasiat, Efisiensi', 'Merit, Efficacy, Efficiency', 'ကုသိုလ်၊ ထိရောက်မှု', 'コウ', 'き・く, ききめ, なら・う', 'Mix', 'radikal mix', 8, 5, 'N3'),
(3216, '了', 'Selesai, Selesai', 'Complete, Finish', 'ပြီးအောင်၊ ပြီးအောင်', 'リョウ', '', 'Barb', 'radikal barb', 2, 8, 'N2'),
(3217, '皆', 'Semuanya, Semuanya', 'All, Everything', 'အားလုံး၊ အရာအားလုံး', 'カイ', 'みな, みんな', 'Compare', 'radikal compare', 9, 8, 'N2'),
(3218, '妥', 'Lembut, Damai, Kebobrokan', 'Gentle, Peace, Depravity', 'သိမ်မွေ့ခြင်း၊ ငြိမ်သက်ခြင်း၊ ယုတ်ညံ့ခြင်း။', 'ダ', '', 'Cleat', 'radikal cleat', 7, 8, 'N2'),
(3219, '頑', 'Keras kepala, Bodoh, Tegas', 'Stubborn, Foolish, Firmly', 'ခေါင်းမာသော၊ မိုက်မဲသော၊ ခိုင်မာစွာ', 'ガン', 'かたく', 'Origin', 'radikal origin', 13, 8, 'N2'),
(3220, '猫', 'Kucing', 'Cat', 'ကြောင်', 'ビョウ', 'ねこ', 'Animal', 'radikal animal', 11, 8, 'N2'),
(3221, '阪', 'Ketinggian, Kemiringan', 'Heights, Slope', 'အမြင့်၊ Slope', 'ハン', 'さか', 'Building', 'radikal building', 7, 8, 'N2'),
(3222, '渉', 'Ford, Go Cross, Transit', 'Ford, Go Cross, Transit', 'Ford၊ Go Cross၊ Transit', 'ショウ', 'わた・る', 'Tsunami', 'radikal tsunami', 11, 8, 'N2'),
(3223, '恋', 'Romantis, Jatuh Cinta, Merindukan', 'Romance, In Love, Yearn For', 'အချစ်၊ အချစ်၊ တောင့်တခြင်း။', 'レン', 'こ・う, こい, こい・しい', 'Red', 'radikal red', 10, 8, 'N2'),
(3224, '祈', 'Berdoalah, Berharap', 'Pray, Wish', 'ဆုတောင်းပါ၊ ဆုတောင်းပါ။', 'キ', 'いの・る', 'Spirit', 'radikal spirit', 8, 8, 'N2'),
(3225, '喫', 'Konsumsi, Makan, Minum', 'Consume, Eat, Drink', 'စားသုံးပါ၊ စားပါ၊ သောက်ပါ။', 'キツ', 'の・む', 'Mouth', 'radikal mouth', 12, 8, 'N2'),
(3226, '閥', 'Klik, Silsilah, Silsilah', 'Clique, Lineage, Pedigree', 'Clique၊ မျိုးရိုး၊ မျိုးရိုး', 'バツ', '', 'Gate', 'radikal gate', 14, 8, 'N2'),
(3227, '被', 'Dikenakan, Penutup, Kerudung', 'Incur, Cover, Veil', 'ဖုံးအုပ်၊ ဖုံးအုပ်', 'ヒ', 'こうむ・る, おお・う, かぶ・る, かぶ・せる', 'Spirit', 'radikal spirit', 10, 8, 'N2'),
(3228, '裕', 'Berlimpah, Kaya, Subur', 'Abundant, Rich, Fertile', 'ပေါများခြင်း၊ ကြွယ်ဝခြင်း၊ မြေသြဇာ', 'ユウ', '', 'Spirit', 'radikal spirit', 12, 8, 'N2'),
(3229, '震', 'Gempa, Goyang, Gemetar', 'Quake, Shake, Tremble', 'လှုပ်၊ လှုပ်၊ တုန်', 'シン', 'ふる・う, ふる・える', 'Rain', 'radikal rain', 15, 8, 'N2'),
(3230, '尾', 'Ekor, Ujung, Penghitung Untuk Ikan', 'Tail, End, Counter For Fish', 'အမြီး၊ အဆုံး၊ ငါးအတွက်ကောင်တာ', 'ビ', 'お', 'Flag', 'radikal flag', 7, 8, 'N2'),
(3231, '嫌', 'Tidak Suka, Benci, Benci', 'Dislike, Detest, Hate', 'မကြိုက်၊ ဒေါသ၊ အမုန်း', 'ケン, ゲン', 'きら・う, きら・い, いや', 'Woman', 'radikal woman', 13, 8, 'N2'),
(3232, '岡', 'Gunung, Bukit, Knoll', 'Mount, Hill, Knoll', 'တောင်၊ တောင်၊ Knoll', 'コウ', 'おか', 'Head', 'radikal head', 8, 8, 'N2'),
(3233, '脱', 'Menanggalkan Pakaian, Melepas, Melarikan Diri', 'Undress, Removing, Escape From', '၀တ်စားဆင်ယင်ခြင်း၊ ဖယ်ရှားခြင်း၊ လွတ်မြောက်ခြင်း။', 'ダツ', 'ぬ・ぐ, ぬ・げる', 'Moon', 'radikal moon', 11, 8, 'N2'),
(3234, '坊', 'Nak, Kediaman Pendeta, Pendeta', 'Boy, Priest''s Residence, Priest', 'ယောက်ျားလေး၊ ဘုန်းကြီးအိမ်၊ ဘုန်းကြီး', 'ボウ, ボッ', '', 'Dirt', 'radikal dirt', 7, 8, 'N2'),
(3235, '寝', 'Berbaring, Tidur, Istirahat', 'Lie Down, Sleep, Rest', 'အိပ်ပါ၊ အိပ်ပါ၊ အနားယူပါ။', 'シン', 'ね・る, ね・かす, い・ぬ, みたまや, や・める', 'Roof', 'radikal roof', 13, 8, 'N2'),
(3236, '藤', 'Wisteria', 'Wisteria', 'ခရမ်းနုရောင်', 'トウ, ドウ', 'ふじ', 'Flowers', 'radikal flowers', 18, 8, 'N2'),
(3237, '崎', 'Tanjung, Tanjung, Ludah', 'Promontory, Cape, Spit', 'Promontory၊ Cape၊ Spit', 'キ', 'さき, さい, みさき', 'Mountain', 'radikal mountain', 11, 8, 'N2'),
(3238, '沢', 'Rawa, Rawa, Kecemerlangan', 'Swamp, Marsh, Brilliance', 'ရွှံ့ညွန်၊ စိမ့်၊ တောက်ပမှု', 'タク', 'さわ, うるお・い, うるお・す, つや', 'Tsunami', 'radikal tsunami', 7, 8, 'N2'),
(3239, '施', 'Memberi, Memberikan, Melakukan', 'Give, Bestow, Perform', 'ပေး၊ ပေး၊ ဆောင်ရွက်ပေး', 'シ, セ', 'ほどこ・す', 'Direction', 'radikal direction', 9, 8, 'N2'),
(3240, '秀', 'Unggul, Keunggulan, Kecantikan', 'Excel, Excellence, Beauty', 'Excel, Excellence, အလှအပ', 'シュウ', 'ひい・でる', 'Grain', 'radikal grain', 7, 8, 'N2'),
(3241, '肩', 'Bahu', 'Shoulder', 'ပခုံး', 'ケン', 'かた', 'Door', 'radikal door', 8, 8, 'N2'),
(3242, '腕', 'Lengan, Kemampuan, Bakat', 'Arm, Ability, Talent', 'လက်၊ စွမ်းရည်၊ စွမ်းရည်', 'ワン', 'うで', 'Moon', 'radikal moon', 12, 8, 'N2'),
(3243, '腰', 'Pinggang, Pinggul, Pinggang', 'Loins, Hips, Waist', 'ခါး၊ တင်ပါး၊ ခါး', 'ヨウ', 'こし', 'Moon', 'radikal moon', 13, 8, 'N2'),
(3244, '載', 'Naik, Naik, Ayo', 'Ride, Board, Get On', 'စီးပါ၊ ဘုတ်အဖွဲ့၊ တက်ပါ။', 'サイ', 'の・せる, の・る', 'Cross', 'radikal cross', 13, 8, 'N2'),
(3245, '与', 'Memberikan, Berpartisipasi, Memberi', 'Bestow, Participate In, Give', 'ပေးကမ်းပါ၊ ပါဝင်ပါ၊ ပေးပါ။', 'ヨ', 'あた・える, あずか・る, くみ・する, ともに', 'Beggar', 'radikal beggar', 3, 8, 'N2'),
(3246, '含', 'Berisi, Sertakan, Tahan Di Mulut', 'Contain, Include, Hold In The Mouth', 'ပါးစပ်ထဲတွင် ကိုင်ထားပါ၊ ပါ၀င်ပါ', 'ガン', 'ふく・む, ふく・める', 'Now', 'radikal now', 7, 8, 'N2'),
(3247, '況', 'Kondisi, Situasi', 'Condition, Situation', 'အခြေအနေ၊ အခြေအနေ', 'キョウ', 'まし・て, いわ・んや, おもむき', 'Tsunami', 'radikal tsunami', 8, 8, 'N2'),
(3248, '訴', 'Tuduhan, Sue, Keluhan Sakit', 'Accusation, Sue, Complain Of Pain', 'အပြစ်တင်ခြင်း၊ တရားစွဲခြင်း၊ နာကျင်စေမှု', 'ソ', 'うった・える', 'Say', 'radikal say', 12, 8, 'N2'),
(3249, '訟', 'Menuntut, Menuduh', 'Sue, Accuse', 'တရားစွဲ၊စွပ်စွဲ', 'ショウ', '', 'Say', 'radikal say', 11, 8, 'N2'),
(3250, '逮', 'Tangkap, Chase', 'Apprehend, Chase', 'ဖမ်းပါ၊ Chase', 'タイ', '', 'Scooter', 'radikal scooter', 11, 8, 'N2'),
(3251, '捕', 'Tangkap, Tangkap', 'Catch, Capture', 'ဖမ်း၊ ဖမ်း', 'ホ', 'と・らえる, と・らわれる, と・る, とら・える, とら・われる, つか・まえる, つか・まる', 'Fingers', 'radikal fingers', 10, 8, 'N2'),
(3252, '鮮', 'Segar, Jelas, Jelas', 'Fresh, Vivid, Clear', 'လတ်ဆတ်၊ ကွက်ကွက်ကွင်းကွင်း၊ ရှင်းရှင်းလင်းလင်း', 'セン', 'あざ・やか', 'Sheep', 'radikal sheep', 17, 8, 'N2'),
(3253, '捜', 'Cari, Cari, Temukan', 'Search, Look For, Locate', 'ရှာပါ၊ ရှာပါ၊ ရှာပါ။', 'ソウ, シュ, シュウ', 'さが・す', 'Fingers', 'radikal fingers', 10, 8, 'N2'),
(3254, '絞', 'Mencekik, Menyempitkan, Peras', 'Strangle, Constrict, Wring', 'Strangle, Constrict, Wring', 'コウ', 'しぼ・る, し・める, し・まる', 'Thread', 'radikal thread', 12, 8, 'N2'),
(3255, '掛', 'Gantung, Tangguhkan, Tergantung', 'Hang, Suspend, Depend', 'ဆိုင်းထား၊ ဆိုင်းငံ့၊ မှီခို', 'カイ, ケイ', 'か・ける, か・ける, か・け, か・け, が・け, か・かる, か・かる, が・かる, か・かり, が・かり, かかり, がかり', 'Fingers', 'radikal fingers', 11, 8, 'N2'),
(3256, '刺', 'Duri, Pierce, Tusuk', 'Thorn, Pierce, Stab', 'ဆူး၊ပီယ၊ဓား', 'シ', 'さ・す, さ・さる, さ・し, さし, とげ', 'Tree', 'radikal tree', 8, 8, 'N2'),
(3257, '徴', 'Indikasi, Tanda, Pertanda', 'Indications, Sign, Omen', 'အမှတ်အသား၊ နိမိတ်၊ အမှတ်အသား', 'チョウ, チ', 'しるし', 'Loiter', 'radikal loiter', 14, 8, 'N2'),
(3258, '突', 'Tusuk, Menonjol, Dorong', 'Stab, Protruding, Thrust', 'ဓား၊ ပြူး၊ ထိုး', 'トツ, カ', 'つ・く', 'Hole', 'radikal hole', 8, 8, 'N2'),
(3259, '菓', 'Permen, Kue, Buah', 'Candy, Cakes, Fruit', 'သကြားလုံး၊ ကိတ်မုန့်၊ သစ်သီး', 'カ', '', 'Flowers', 'radikal flowers', 11, 8, 'N2'),
(3260, '振', 'Goyang, Lambaikan, Goyang', 'Shake, Wave, Wag', 'လှုပ်၊ လှုပ်၊ လှုပ်', 'シン', 'ふ・る, ぶ・る, ふ・り, ぶ・り, ふ・るう', 'Fingers', 'radikal fingers', 10, 8, 'N2'),
(3261, '汗', 'Keringat, Berkeringat', 'Sweat, Perspire', 'ချွေး၊ ချွေး', 'カン', 'あせ', 'Tsunami', 'radikal tsunami', 6, 8, 'N2'),
(3262, '占', 'Meramal, Meramal, Meramal', 'Fortune-telling, Divining, Forecasting', 'ဗေဒင်ဟောခြင်း၊ ရေငုပ်ခြင်း၊ ကြိုတင်ခန့်မှန်းခြင်း။', 'セン', 'し・める, うらな・う', 'Fortune', 'radikal fortune', 5, 8, 'N2'),
(3263, '昇', 'Bangkit', 'Rise Up', 'ထလော့', 'ショウ', 'のぼ・る', 'Sun', 'radikal sun', 8, 8, 'N2'),
(3264, '眠', 'Tidur, Mati, Mengantuk', 'Sleep, Die, Sleepy', 'အိပ်၊ သေ၊ အိပ်ငိုက်', 'ミン', 'ねむ・る, ねむ・い', 'Eye', 'radikal eye', 10, 8, 'N2'),
(3265, '締', 'Kencangkan, Ikat, Tutup', 'Tighten, Tie, Shut', 'ကြပ်၊ ချည်၊ ပိတ်', 'テイ', 'し・まる, し・まり, し・める, し・め, じ・め', 'Thread', 'radikal thread', 15, 8, 'N2'),
(3266, '靴', 'Sepatu', 'Shoes', 'ဖိနပ်', 'カ', 'くつ', 'Leather', 'radikal leather', 13, 8, 'N2'),
(3267, '郎', 'Nak, Kontra Untuk Putra', 'Son, Counter For Sons', 'သား၊ သားများအတွက် ကောင်တာ', 'ロウ, リョウ', 'おとこ', 'Good', 'radikal good', 9, 8, 'N2'),
(3268, '巨', 'Raksasa, Besar, Besar', 'Gigantic, Big, Large', 'ဧရာမ၊ ကြီး၊ ကြီး', 'キョ', '', 'Giant', 'radikal giant', 5, 8, 'N2'),
(3269, '凍', 'Beku, Beku, Dinginkan', 'Frozen, Congeal, Refrigerate', 'Frozen၊ Congeal၊ ရေခဲသေတ္တာ', 'トウ', 'こお・る, こご・える, こご・る, い・てる, し・みる', 'Ice', 'radikal ice', 10, 8, 'N2'),
(3270, '妙', 'Indah, Aneh, Aneh', 'Exquisite, Strange, Queer', 'လက်ရာမြောက်သော၊ ထူးဆန်းသော၊ Queer', 'ミョウ, ビョウ', 'たえ', 'Woman', 'radikal woman', 7, 8, 'N2'),
(3271, '微', 'Halus, Kecil, Tidak Penting', 'Delicate, Minuteness, Insignificance', 'သိမ်မွေ့မှု၊ မိနစ်ပိုင်း၊ အရေးမပါမှု', 'ビ', 'かす・か', 'Loiter', 'radikal loiter', 13, 8, 'N2'),
(3272, '浜', 'Pantai, Pantai, Pantai', 'Seacoast, Beach, Seashore', 'ပင်လယ်ကမ်းစပ်၊ ကမ်းခြေ၊ ကမ်းခြေ', 'ヒン', 'はま', 'Tsunami', 'radikal tsunami', 10, 8, 'N2'),
(3273, '撃', 'Kalahkan, Serang, Kalahkan', 'Beat, Attack, Defeat', 'အနိုင်ယူ၊ တိုက်ခိုက်၊ အနိုင်ယူ', 'ゲキ', 'う・つ', 'Car', 'radikal car', 15, 8, 'N2'),
(3274, '攻', 'Agresi, Menyerang, Mengkritik', 'Aggression, Attack, Criticize', 'ရန်လိုခြင်း၊ တိုက်ခိုက်ခြင်း၊ ဝေဖန်ခြင်း။', 'コウ', 'せ・める', 'Construction', 'radikal construction', 7, 8, 'N2'),
(3275, '杯', 'Counter Untuk Secangkir, Gelas Anggur, Gelas', 'Counter For Cupfuls, Wine Glass, Glass', 'ဖလားများအတွက် ကောင်တာ၊ ဝိုင်ဖန်ခွက်၊ ဖန်ခွက်', 'ハイ', 'さかずき', 'Tree', 'radikal tree', 8, 8, 'N2'),
(3276, '乾', 'Kekeringan, Kering, Kering', 'Drought, Dry, Dessicate', 'ခြောက်သွေ့ခြင်း၊ ခြောက်သွေ့ခြင်း၊ Dessicate', 'カン, ケン', 'かわ・く, かわ・かす, ほ・す, ひ・る, いぬい', 'Morning', 'radikal morning', 11, 8, 'N2'),
(3277, '欧', 'Eropa', 'Europe', 'ဥရောပ', 'オウ', 'うた・う, は・く', 'District', 'radikal district', 8, 8, 'N2'),
(3278, '江', 'Sungai kecil, saluran masuk, teluk', 'Creek, Inlet, Bay', 'ချောင်း၊ ရေဝင်၊ ပင်လယ်အော်', 'コウ', 'え', 'Tsunami', 'radikal tsunami', 6, 8, 'N2'),
(3279, '雄', 'Maskulin, Pria, Pahlawan', 'Masculine, Male, Hero', 'ယောက်ျား၊ ယောကျာ်း၊ သူရဲကောင်း', 'ユウ', 'お, おす, おん', 'Narwhal', 'radikal narwhal', 12, 8, 'N2'),
(3280, '韓', 'Korea', 'Korea', 'ကိုရီးယား', 'カン', 'から, いげた', 'Korea', 'radikal korea', 18, 8, 'N2'),
(3281, '僚', 'Rekan kerja, Pejabat, Pendamping', 'Colleague, Official, Companion', 'လုပ်ဖော်ကိုင်ဖက်၊ တရားဝင်၊ အဖော်', 'リョウ', '', 'Leader', 'radikal leader', 14, 8, 'N2'),
(3282, '緊', 'Tegang, Padat, Keras', 'Tense, Solid, Hard', 'Tense, Solid, Hard', 'キン', 'し・める, し・まる', 'Servant', 'radikal servant', 15, 8, 'N2'),
(3283, '娘', 'Putri, Gadis', 'Daughter, Girl', 'သမီး၊ သမီး', 'ジョウ', 'むすめ, こ', 'Woman', 'radikal woman', 10, 8, 'N2'),
(3284, '索', 'Tali, Tali, Pencarian', 'Cord, Rope, Searching', 'ကြိုး၊ ကြိုး၊ ရှာဖွေခြင်း။', 'サク', '', 'Cross', 'radikal cross', 10, 8, 'N2'),
(3285, '詰', 'Dikemas, Tutup, Ditekan', 'Packed, Close, Pressed', 'Packed, Close, Pressed', 'キツ, キチ', 'つ・める, つ・め, づ・め, つ・まる, つ・む', 'Say', 'radikal say', 13, 8, 'N2'),
(3286, '詳', 'Detil, Penuh, Menit', 'Detailed, Full, Minute', 'အသေးစိတ်၊ အပြည့်အစုံ၊ မိနစ်', 'ショウ', 'くわ・しい, つまび・らか', 'Say', 'radikal say', 13, 8, 'N2'),
(3287, '魅', 'Daya Tarik, Pesona, Menyihir', 'Fascination, Charm, Bewitch', 'စွဲလန်းမှု၊ ဆွဲဆောင်မှု၊ လှည့်စားမှု', 'ミ', '', 'Demon', 'radikal demon', 15, 8, 'N2'),
(3288, '押', 'Dorong, Berhenti, Periksa', 'Push, Stop, Check', 'တွန်းပါ၊ ရပ်ပါ၊ စစ်ဆေးပါ။', 'オウ', 'お・す, お・し, お・っ, お・さえる, おさ・える', 'Fingers', 'radikal fingers', 8, 8, 'N2'),
(3289, '更', 'Tumbuh Terlambat, Jaga Malam, Duduk Terlambat', 'Grow Late, Night Watch, Sit Up Late', 'နောက်ကျမှထ၊ ညစောင့်၊ နောက်ကျမှထပါ။', 'コウ', 'さら, さら・に, ふ・ける, ふ・かす', 'Ground', 'radikal ground', 7, 8, 'N2'),
(3290, '符', 'Token, Tanda Tangan, Tandai', 'Token, Sign, Mark', 'တိုကင်၊ ဆိုင်းဘုတ်၊ အမှတ်အသား', 'フ', '', 'Bamboo', 'radikal bamboo', 11, 8, 'N2'),
(3291, '飾', 'Menghias, Ornamen, Menghiasi', 'Decorate, Ornament, Adorn', 'အလှဆင်ခြင်း၊ အလှဆင်ခြင်း၊ အလှဆင်ခြင်း။', 'ショク', 'かざ・る, かざ・り', 'Eat', 'radikal eat', 13, 8, 'N2'),
(3292, '騒', 'Riuh, Bikin Kegaduhan, Geger', 'Boisterous, Make Noise, Clamor', 'ရွံရှာ၊ ဆူညံအောင်၊ အော်ဟစ်', 'ソウ', 'さわ・ぐ, うれい, さわ・がしい', 'Horse', 'radikal horse', 18, 8, 'N2'),
(3293, '撮', 'Jepretan, Ambil Gambar', 'Snapshot, Take Pictures', 'လျှပ်တစ်ပြက်ရိုက်ပါ၊ ဓာတ်ပုံရိုက်ပါ။', 'サツ', 'と・る, つま・む, ど・り', 'Fingers', 'radikal fingers', 15, 8, 'N2'),
(3294, '盗', 'Mencuri, Rob, Mencuri', 'Steal, Rob, Pilfer', 'ခိုး၊ ရော့၊ Pilfer', 'トウ', 'ぬす・む, ぬす・み', 'Next', 'radikal next', 11, 8, 'N2'),
(3295, '華', 'Kemegahan, Bunga, Kelopak', 'Splendor, Flower, Petal', 'ဘုန်း၊ ပန်း၊ ပန်းပွင့်', 'カ, ケ', 'はな', 'Flowers', 'radikal flowers', 10, 8, 'N2'),
(3296, '既', 'Sebelumnya, Sudah Lama Sekali', 'Previously, Already, Long Ago', 'အရင်က ပြီးပြီ ဟိုးအရင်တုန်းက', 'キ', 'すで・に', 'Root', 'radikal root', 10, 8, 'N2'),
(3297, '普', 'Universal, Lebar (ly), Umumnya', 'Universal, Wide(ly), Generally', 'Universal, Wide(ly), ယေဘုယျအားဖြင့်', 'フ', 'あまね・く, あまねし', 'Line Up', 'radikal line up', 12, 8, 'N2'),
(3298, '豪', 'Sangat Kuat, Hebat, Kuat', 'Overpowering, Great, Powerful', 'တန်ခိုးကြီးသည်၊ ကြီးမြတ်သည်၊ တန်ခိုးကြီးသည်။', 'ゴウ', 'えら・い', 'Lid', 'radikal lid', 14, 8, 'N2'),
(3299, '掃', 'Sapu, Sikat', 'Sweep, Brush', 'တံမြက်လှည်း၊', 'ソウ, シュ', 'は・く', 'Fingers', 'radikal fingers', 11, 8, 'N2'),
(3300, '汚', 'Kotor, Mencemari, Aib', 'Dirty, Pollute, Disgrace', 'ညစ်ပတ်တယ်၊ ညစ်ပတ်တယ်၊ အရှက်ကွဲတယ်။', 'オ', 'けが・す, けが・れる, けが・らわしい, よご・す, よご・れる, きたな・い', 'Tsunami', 'radikal tsunami', 6, 8, 'N2'),
(3301, '薦', 'Rekomendasikan, Mat, Sarankan', 'Recommend, Mat, Advise', 'အကြံပြုရန်၊ ဖျာ၊ အကြံဉာဏ်', 'セン', 'すす・める', 'Flowers', 'radikal flowers', 16, 8, 'N2'),
(3302, '歓', 'Senang sekali, Sukacita', 'Delight, Joy', 'ရွှင်လန်းခြင်း၊', 'カン', 'よろこ・ぶ', 'Arrow', 'radikal arrow', 15, 8, 'N2'),
(3303, '腐', 'Membusuk, Membusuk, Asam', 'Rot, Decay, Sour', 'ပုပ်ခြင်း၊ ပျက်စီးခြင်း၊ အချဉ်', 'フ', 'くさ・る, くさ・る, くさ・れる, くさ・れ, くさ・らす, くさ・す', 'Canopy', 'radikal canopy', 14, 8, 'N2'),
(3304, '遅', 'Lambat, Terlambat, Kembali', 'Slow, Late, Back', 'နှေး၊ နောက်ကျ၊ နောက်ပြန်', 'チ', 'おく・れる, おく・らす, おそ・い', 'Scooter', 'radikal scooter', 12, 8, 'N2'),
(3305, '寿', 'Panjang Umur, Selamat Hidup Alamiah Seseorang', 'Longevity, Congratulations, One''s Natural Life', 'အသက်ရှည်ခြင်း၊ ဂုဏ်ယူခြင်း၊ ဇာတိပကတိဘဝ', 'ジュ, ス, シュウ', 'ことぶき, ことぶ・く, ことほ・ぐ', 'Spring', 'radikal spring', 7, 8, 'N2'),
(3306, '彼', 'Dia, Itu, Itu', 'He, That, The', 'သူ၊ အဲဒါ၊', 'ヒ', 'かれ, かの, か・の', 'Loiter', 'radikal loiter', 8, 8, 'N2'),
(3307, '恥', 'Malu, Aib', 'Shame, Dishonor', 'အရှက်ကွဲခြင်း၊', 'チ', 'は・じる, はじ, は・じらう, は・ずかしい', 'Ear', 'radikal ear', 10, 8, 'N2'),
(3308, '杉', 'Cedar, Kriptomeria', 'Cedar, Cryptomeria', 'Cedar၊ Cryptomeria', 'サン', 'すぎ', 'Tree', 'radikal tree', 7, 8, 'N2'),
(3309, '炎', 'Peradangan, Api, Api', 'Inflammation, Flame, Blaze', 'ရောင်ရမ်းခြင်း၊ မီးလျှံ၊ လောင်ခြင်း။', 'エン', 'ほのお', 'Fire', 'radikal fire', 8, 8, 'N2'),
(3310, '為', 'Lakukan, Ubah, Buat', 'Do, Change, Make', 'လုပ်ပါ၊ ပြောင်းလဲပါ၊ လုပ်ပါ။', 'イ', 'ため, な・る, な・す, す・る, たり, つく・る, なり', 'Sake', 'radikal sake', 9, 8, 'N2'),
(3311, '熊', 'Beruang', 'Bear', 'ဝက်ဝံ', 'ユウ', 'くま', 'Ability', 'radikal ability', 14, 8, 'N2'),
(3312, '払', 'Bayar, Bersihkan, Pangkas', 'Pay, Clear Out, Prune', 'ပေးချေပါ၊ ရှင်းပါ၊ သုတ်ပါ။', 'フツ, ヒツ, ホツ', 'はら・う, はら・い, ばら・い', 'Fingers', 'radikal fingers', 5, 8, 'N2'),
(3313, '姓', 'Nama keluarga', 'Surname', 'မျိုးရိုးအမည်', 'セイ, ショウ', '', 'Woman', 'radikal woman', 8, 8, 'N2'),
(3314, '伸', 'Perluas, Regangkan, Perluas', 'Expand, Stretch, Extend', 'ချဲ့ပါ၊ ဆန့်ပါ၊ ချဲ့ပါ။', 'シン', 'の・びる, の・ばす, の・べる, の・す', 'Leader', 'radikal leader', 7, 8, 'N2'),
(3315, '及', 'Jangkau, Berusaha, Berolahraga', 'Reach Out, Exert, Exercise', 'တက်လှမ်းပါ၊ အားထုတ်ပါ၊ လေ့ကျင့်ပါ။', 'キュウ', 'およ・ぶ, およ・び, および, およ・ぼす', 'Escalator', 'radikal escalator', 3, 8, 'N2'),
(3316, '奈', 'Nara, apa?', 'Nara, What?', 'နရာ၊ ဘာလဲ', 'ナ, ナイ, ダイ', 'いかん, からなし', 'Big', 'radikal big', 8, 8, 'N2'),
(3317, '幅', 'Gulir Gantung, Lebar', 'Hanging Scroll, Width', 'တွဲလောင်း၊ အကျယ်', 'フク', 'はば', 'Towel', 'radikal towel', 12, 8, 'N2'),
(3318, '廃', 'Hapus, Usang, Penghentian', 'Abolish, Obsolete, Cessation', 'ဖျက်သိမ်းခြင်း၊ ဖျက်သိမ်းခြင်း၊ ရပ်ဆိုင်းခြင်း။', 'ハイ', 'すた・れる, すた・る', 'Canopy', 'radikal canopy', 12, 8, 'N2'),
(3319, '甘', 'Manis, Membujuk, Memanjakan', 'Sweet, Coax, Pamper', 'ချော၊ချော့၊', 'カン', 'あま・い, あま・える, あま・やかす, うま・い', 'Sweet', 'radikal sweet', 5, 8, 'N2'),
(3320, '摘', 'Jepit, Petik, Petik', 'Pinch, Pick, Pluck', 'Pinch, Pick, Pluck', 'テキ', 'つ・む', 'Fingers', 'radikal fingers', 14, 8, 'N2'),
(3321, '核', 'Inti, Inti, Kernel', 'Nucleus, Core, Kernel', 'Nucleus၊ Core၊ Kernel', 'カク', '', 'Tree', 'radikal tree', 10, 8, 'N2'),
(3322, '沖', 'Laut Terbuka, Sebentar Lagi, Naik Tinggi Ke Langit', 'Open Sea, Offing, Rise High Into Sky', 'ပွင့်လင်းပင်လယ်၊ ကမ်းတက်၊ ကောင်းကင်သို့ မြင့်မြင့်တက်ပါ။', 'チュウ', 'おき, おきつ, ちゅう・する, わく', 'Tsunami', 'radikal tsunami', 7, 8, 'N2'),
(3323, '縄', 'Tali Jerami, Tali', 'Straw Rope, Cord', 'ကောက်ရိုးကြိုး၊ ကြိုး', 'ジョウ', 'なわ, ただ・す', 'Thread', 'radikal thread', 15, 8, 'N2'),
(3324, '津', 'Surga, Pelabuhan, Pelabuhan', 'Haven, Port, Harbor', 'ဆိပ်၊ ဆိပ်ကမ်း၊ ဆိပ်ကမ်း', 'シン', 'つ', 'Tsunami', 'radikal tsunami', 9, 8, 'N2'),
(3325, '継', 'Mewarisi, Sukses, Lanjutkan', 'Inherit, Succeed, Continue', 'အမွေဆက်ခံ၊ အောင်မြင်၊ ဆက်ရန်', 'ケイ', 'つ・ぐ, まま', 'Thread', 'radikal thread', 13, 8, 'N2'),
(3326, '維', 'Fiber, Dasi, Tali', 'Fiber, Tie, Rope', 'ဖိုက်ဘာ၊ ကြိုး၊ ကြိုး', 'イ', '', 'Thread', 'radikal thread', 14, 8, 'N2'),
(3327, '舞', 'Menari, Melayang, Lingkaran', 'Dance, Flit, Circle', 'အက၊ Flit၊ စက်ဝိုင်း', 'ブ', 'ま・う, ま・う, まい', 'Nothing', 'radikal nothing', 15, 8, 'N2'),
(3328, '踏', 'Langkah, Injak, Lanjutkan', 'Step, Trample, Carry Through', 'ခြေလှမ်း၊ နင်းပါ၊ ဖြတ်သန်းပါ။', 'トウ', 'ふ・む, ふ・まえる', 'Foot', 'radikal foot', 15, 8, 'N2'),
(3329, '般', 'Pembawa, Bawa, Semua', 'Carrier, Carry, All', 'သယ်ဆောင်သူ၊ သယ်ယူ၊ အားလုံး', 'ハン', '', 'Boat', 'radikal boat', 10, 8, 'N2'),
(3330, '頼', 'Percaya, Minta', 'Trust, Request', 'ယုံကြည်ပါ၊ တောင်းဆိုပါ။', 'ライ', 'たの・む, たの・もしい, たよ・る', 'Bundle', 'radikal bundle', 16, 8, 'N2'),
(3331, '依', 'Bergantung, Bergantung Pada, Konsekuensinya', 'Reliant, Depend On, Consequently', 'အားကိုး၊မှီခို၊အကျိုးဆက်', 'イ, エ', 'よ・る', 'Leader', 'radikal leader', 8, 8, 'N2'),
(3332, '鹿', 'Rusa', 'Deer', 'သမင်', 'ロク', 'しか, か', 'Canopy', 'radikal canopy', 11, 8, 'N2'),
(3333, '刑', 'Hukuman, Penalti, Kalimat', 'Punish, Penalty, Sentence', 'ပြစ်ဒဏ်၊ ပြစ်ဒဏ်၊ စာကြောင်း', 'ケイ', '', 'Lantern', 'radikal lantern', 6, 8, 'N2'),
(3334, '募', 'Rekrut, Kampanye, Kumpulkan (kontribusi)', 'Recruit, Campaign, Gather (contributions)', 'စုဆောင်းခြင်း၊ စည်းရုံးလှုံ့ဆော်ခြင်း၊ စုဆောင်းခြင်း (ပံ့ပိုးမှုများ)', 'ボ', 'つの・る', 'Greenhouse', 'radikal greenhouse', 12, 8, 'N2'),
(3335, '塁', 'Pangkalan, Benteng, Benteng', 'Bases, Fort, Rampart', 'Bases, Fort, Rampart', 'ルイ, ライ, スイ', 'とりで', 'Rice Paddy', 'radikal rice paddy', 12, 8, 'N2'),
(3336, '戻', 'Kembali, Kembali, Kembalikan', 'Re-, Return, Revert', 'Re-, Return, Revert', 'レイ', 'もど・す, もど・る', 'Door', 'radikal door', 7, 8, 'N2'),
(3337, '抗', 'Hadapi, Lawan, Lawan', 'Confront, Resist, Defy', 'ရင်ဆိုင်ပါ၊ တွန်းလှန်ပါ၊ ခုခံပါ။', 'コウ', 'あらが・う', 'Fingers', 'radikal fingers', 7, 8, 'N2'),
(3338, '抵', 'Tolak, Jangkau, Sentuh', 'Resist, Reach, Touch', 'ခုခံရန်၊ လက်လှမ်းမီရန်၊ ထိပါ။', 'テイ', '', 'Fingers', 'radikal fingers', 8, 8, 'N2'),
(3339, '旬', 'Decameron, Periode Sepuluh Hari, Musim (untuk Produk Tertentu)', 'Decameron, Ten-day Period, Season (for Specific Products)', 'Decameron၊ ဆယ်ရက်တာကာလ၊ ရာသီ (အထူးထုတ်ကုန်များအတွက်)', 'ジュン, シュン', '', 'Prison', 'radikal prison', 6, 8, 'N2'),
(3340, '湾', 'Teluk, Teluk, Saluran Masuk', 'Gulf, Bay, Inlet', 'ပင်လယ်ကွေ့၊ ပင်လယ်အော်၊ ဝင်ပေါက်', 'ワン', 'いりえ', 'Tsunami', 'radikal tsunami', 12, 8, 'N2'),
(3341, '爆', 'Bom, Meledak, Pop', 'Bomb, Burst Open, Pop', 'ဗုံး၊ အဖွင့်၊ ပေါ့ပ်', 'バク', 'は・ぜる', 'Fire', 'radikal fire', 19, 8, 'N2'),
(3342, '聴', 'Dengar, keras kepala, nakal', 'Listen, Headstrong, Naughty', 'နားထောင်ပါ၊ ခေါင်းမာပါ၊ မိုက်မဲပါ။', 'チョウ, テイ', 'き・く, ゆる・す', 'Ear', 'radikal ear', 17, 8, 'N2'),
(3343, '遣', 'Pengiriman, Pengiriman, Kirim', 'Dispatch, Despatch, Send', 'ပို့ပါ၊ ပို့ပါ၊ ပို့ပါ။', 'ケン', 'つか・う, つか・い, づか・い, つか・わす, や・る', 'Scooter', 'radikal scooter', 13, 8, 'N2'),
(3344, '陣', 'Perkemahan, Array Pertempuran, Pangkat', 'Camp, Battle Array, Ranks', 'စခန်း၊ စစ်ခင်းကျင်း၊ အဆင့်', 'ジン', '', 'Building', 'radikal building', 10, 8, 'N2'),
(3345, '香', 'Dupa, Bau, Parfum', 'Incense, Smell, Perfume', 'နံ့သာ၊ အနံ့၊ ရေမွှေး', 'コウ, キョウ', 'か, かお・り, かお・る', 'Grain', 'radikal grain', 9, 8, 'N2'),
(3346, '削', 'Pesawat, Pertajam, Whittle', 'Plane, Sharpen, Whittle', 'လေယာဉ်၊ ချွန်ထက်၊ ဝှေ့', 'サク', 'けず・る, はつ・る, そ・ぐ', 'Triceratops', 'radikal triceratops', 9, 8, 'N2'),
(3347, '契', 'Ikrar, Janji, Sumpah', 'Pledge, Promise, Vow', 'ကတိ၊ ကတိ၊ ကတိ', 'ケイ', 'ちぎ・る', 'Life', 'radikal life', 9, 8, 'N2'),
(3348, '掲', 'Pasang (Pemberitahuan), Pasang, Kerek', 'Put Up (a Notice), Put Up, Hoist', 'Put Up (သတိပေးချက်)၊ Put Up၊ Hoist', 'ケイ', 'かか・げる', 'Fingers', 'radikal fingers', 11, 8, 'N2'),
(3349, '狙', 'Bidik, Penglihatan, Bayangan', 'Aim At, Sight, Shadow', 'ပန်းတိုင်၊ အမြင်၊ အရိပ်', 'ソ, ショ', 'ねら・う, ねら・い', 'Animal', 'radikal animal', 8, 8, 'N2'),
(3350, '葬', 'Interment, Kubur, Rak', 'Interment, Bury, Shelve', 'Interment၊ Bury၊ Shelve', 'ソウ', 'ほうむ・る', 'Flowers', 'radikal flowers', 12, 8, 'N2'),
(3351, '需', 'Permintaan, Permintaan, Kebutuhan', 'Demand, Request, Need', 'လိုအပ်ချက်၊ တောင်းဆိုမှု၊ လိုအပ်ချက်', 'ジュ', '', 'Rain', 'radikal rain', 14, 8, 'N2'),
(3352, '齢', 'Usia', 'Age', 'အသက်', 'レイ', 'よわい, とし', 'Tooth', 'radikal tooth', 17, 8, 'N2'),
(3353, '繰', 'Berliku, Reel, Putar', 'Winding, Reel, Spin', 'အကွေ့အကောက်၊ ရစ်ပတ်၊ လှည့်ခြင်း။', 'ソウ', 'く・る', 'Thread', 'radikal thread', 19, 8, 'N2'),
(3354, '致', 'Lakukan, Lakukan, Kirim', 'Doth, Do, Send', 'Doth, Do, Send', 'チ', 'いた・す', 'Mole', 'radikal mole', 10, 8, 'N2'),
(3355, '併', 'Bergabunglah, Berkumpul, Bersatu', 'Join, Get Together, Unite', 'ပူးပေါင်းပါ၊ လက်တွဲပါ၊ စည်းလုံးပါ။', 'ヘイ', 'あわ・せる', 'Leader', 'radikal leader', 8, 8, 'N2'),
(3356, '傾', 'Miring, Miring, Miring', 'Lean, Incline, Tilt', 'ပိန်၊ စောင်း၊ စောင်း', 'ケイ', 'かたむ・く, かたむ・ける, かたぶ・く, かた・げる, かし・げる', 'Change', 'radikal change', 13, 8, 'N2'),
(3357, '却', 'Sebaliknya, Sebaliknya', 'Instead, On The Contrary, Rather', 'အစား၊ ဆန့်ကျင်ဘက်', 'キャク', 'かえ・って, しりぞ・く, しりぞ・ける', 'Past', 'radikal past', 7, 8, 'N2'),
(3358, '奥', 'Jantung, Pedalaman', 'Heart, Interior', 'နှလုံး၊ အတွင်းခန်း', 'オウ', 'おく, おく・まる, くま', 'Drop', 'radikal drop', 12, 8, 'N2'),
(3359, '懸', 'Keadaan Penangguhan, Hang, Tergantung', 'State Of Suspension, Hang, Depend', 'ဆိုင်းငံ့မှုအခြေအနေ၊ ဟန်းဆက်၊ မှီခိုမှု', 'ケン, ケ', 'か・ける, か・かる', 'Prefecture', 'radikal prefecture', 20, 8, 'N2'),
(3360, '房', 'Rumbai, Jumbai, Pinggiran', 'Tassel, Tuft, Fringe', 'Tassel, Tuft, Fringe', 'ボウ', 'ふさ', 'Door', 'radikal door', 8, 8, 'N2'),
(3361, '扱', 'Menangani, Menghibur, Mengirik', 'Handle, Entertain, Thresh', 'ကိုင်တွယ်ပါ၊ ဖျော်ဖြေပါ၊ ခြွေပါ။', 'ソウ, キュウ', 'あつか・い, あつか・う, あつか・る, こ・く', 'Fingers', 'radikal fingers', 6, 8, 'N2'),
(3362, '択', 'Pilih, Pilih, Pilih', 'Choose, Select, Elect', 'ရွေးပါ၊ ရွေးပါ၊ ရွေးပါ။', 'タク', 'えら・ぶ', 'Fingers', 'radikal fingers', 7, 8, 'N2'),
(3363, '描', 'Sketsa, Tulis, Tulis', 'Sketch, Compose, Write', 'ပုံကြမ်း၊ ရေးပါ၊ ရေးပါ။', 'ビョウ', 'えが・く, か・く', 'Fingers', 'radikal fingers', 11, 8, 'N2'),
(3364, '盤', 'Baki, Mangkuk Dangkal, Piring', 'Tray, Shallow Bowl, Platter', 'ဗန်း၊ ပန်းကန်လုံး၊ ပန်းကန်ပြား', 'バン', '', 'Boat', 'radikal boat', 15, 8, 'N2'),
(3365, '称', 'Sebutan, Pujian, Kagumi', 'Appellation, Praise, Admire', 'ပလောင်၊ ချီးမွမ်း၊ ချီးမြှောက်', 'ショウ', 'たた・える, とな・える, あ・げる, かな・う, はか・り, はか・る, ほめ・る', 'Grain', 'radikal grain', 10, 8, 'N2'),
(3366, '緒', 'Thong, Awal, Awal', 'Thong, Beginning, Inception', 'Thong, Beginning, Inception', 'ショ, チョ', 'お, いとぐち', 'Thread', 'radikal thread', 14, 8, 'N2'),
(3367, '賄', 'Suap, Dewan, Pasokan', 'Bribe, Board, Supply', 'လာဘ်ထိုး၊ ဘုတ်အဖွဲ့၊ ထောက်ပံ့ရေး', 'ワイ', 'まかな・う', 'Shellfish', 'radikal shellfish', 13, 8, 'N2'),
(3368, '贈', 'Hadiah, Kirim, Berikan Kepada', 'Presents, Send, Give To', 'လက်ဆောင်များ၊ ပေးပို့ရန်၊ ပေးကမ်းပါ။', 'ゾウ, ソウ', 'おく・る', 'Shellfish', 'radikal shellfish', 18, 8, 'N2'),
(3369, '逃', 'Kabur, Kabur, Syirik', 'Escape, Flee, Shirk', 'ပြေး၊ ပြေး၊ ရေသာခို', 'トウ', 'に・げる, に・がす, のが・す, のが・れる', 'Scooter', 'radikal scooter', 9, 8, 'N2'),
(3370, '還', 'Kirim Kembali, Kembali', 'Send Back, Return', 'ပြန်ပို့ပါ၊ ပြန်လာပါ။', 'カン', 'かえ・る', 'Scooter', 'radikal scooter', 16, 8, 'N2'),
(3371, '超', 'Melampaui, Super-, Ultra-', 'Transcend, Super-, Ultra-', 'ကျော်လွှား၊ စူပါ-၊ အလွန်-', 'チョウ', 'こ・える, こ・す', 'Run', 'radikal run', 12, 8, 'N2'),
(3372, '邦', 'Negara Asal, Negara, Jepang', 'Home Country, Country, Japan', 'မူလနိုင်ငံ၊ နိုင်ငံ၊ ဂျပန်', 'ホウ', 'くに', 'Three', 'radikal three', 7, 8, 'N2'),
(3373, '鈴', 'Lonceng Kecil, Bel', 'Small Bell, Buzzer', 'ဘဲလ်အသေး၊ Buzzer', 'レイ, リン', 'すず', 'Gold', 'radikal gold', 13, 8, 'N2'),
(3374, '隆', 'Punuk, Tinggi, Mulia', 'Hump, High, Noble', 'Hump, High, Noble', 'リュウ', '', 'Building', 'radikal building', 11, 8, 'N2'),
(3375, '控', 'Tarik, Tarik, Tahan', 'Withdraw, Draw In, Hold Back', 'ငွေထုတ်၊ ဆွဲသွင်း၊ ဖိထားပါ။', 'コウ', 'ひか・える, ひか・え', 'Fingers', 'radikal fingers', 11, 8, 'N2'),
(3376, '壁', 'Dinding, Lapisan (perut), Pagar', 'Wall, Lining (stomach), Fence', 'နံရံ၊ အနားသပ်(ဝမ်း)၊ ခြံစည်းရိုး', 'ヘキ', 'かべ', 'Dirt', 'radikal dirt', 16, 8, 'N2'),
(3377, '渋', 'Astringen, Ragu, Enggan', 'Astringent, Hesitate, Reluctant', 'ထုံကျင်ခြင်း၊ တွန့်ဆုတ်ခြင်း၊ တွန့်ဆုတ်ခြင်း။', 'ジュウ, シュウ', 'しぶ, しぶ・い, しぶ・る', 'Tsunami', 'radikal tsunami', 11, 8, 'N2'),
(3378, '仙', 'Pertapa, Penyihir, Cent', 'Hermit, Wizard, Cent', 'ရသေ့၊ Wizard၊ Cent', 'セン, セント', '', 'Leader', 'radikal leader', 5, 8, 'N2'),
(3379, '充', 'Bagikan, Isi', 'Allot, Fill', 'ဖြည့်ပါ၊ ဖြည့်ပါ။', 'ジュウ', 'あ・てる, み・たす', 'Allocate', 'radikal allocate', 6, 8, 'N2'),
(3380, '圏', 'Bola, Lingkaran, Jari-jari', 'Sphere, Circle, Radius', 'စက်လုံး၊ စက်ဝိုင်း၊ အချင်းဝက်', 'ケン', 'かこ・い', 'Mouth', 'radikal mouth', 12, 8, 'N2'),
(3381, '埋', 'Kubur, Diisi, Disematkan', 'Bury, Be Filled Up, Embedded', 'သင်္ဂြိုလ်၊ ဖြည့်သွင်း၊ မြှုပ်ထားသည်။', 'マイ', 'う・める, う・まる, う・もれる, うず・める, うず・まる, い・ける', 'Dirt', 'radikal dirt', 10, 8, 'N2'),
(3382, '埼', 'Tanjung, Ludah, Tanjung', 'Cape, Spit, Promontory', 'Cape၊ Spit၊ Promontory', 'キ', 'さき, さい, みさき', 'Dirt', 'radikal dirt', 11, 8, 'N2'),
(3383, '奪', 'Rob, Ambil Dengan Paksa, Rebut', 'Rob, Take By Force, Snatch Away', 'ရော့၊ အင်အားသုံး၊ လုယူ', 'ダツ', 'うば・う', 'Big', 'radikal big', 14, 8, 'N2'),
(3384, '御', 'Yang Terhormat, Memanipulasi, Memerintah', 'Honorable, Manipulate, Govern', 'ဂုဏ်ထူးဆောင်၊ ခြယ်လှယ်၊ အုပ်ချုပ်ပါ။', 'ギョ, ゴ', 'おん, お, み', 'Loiter', 'radikal loiter', 12, 8, 'N2'),
(3385, '枠', 'Bingkai, Kerangka, Spindle', 'Frame, Framework, Spindle', 'Frame၊ Framework၊ Spindle', '', 'わく', 'Tree', 'radikal tree', 8, 8, 'N2'),
(3386, '甲', 'Armor, Tinggi (suara), Nilai A', 'Armor, High (voice), A Grade', 'သံချပ်၊ အမြင့် (အသံ)၊ A အဆင့်', 'コウ, カン', 'きのえ', 'Turtle Shell', 'radikal turtle shell', 5, 8, 'N2'),
(3387, '祉', 'Kesejahteraan, Kebahagiaan', 'Welfare, Happiness', 'ချမ်းသာမှု၊ ပျော်ရွှင်မှု', 'シ', '', 'Spirit', 'radikal spirit', 8, 8, 'N2'),
(3388, '稲', 'Tanaman Padi', 'Rice Plant', 'စပါးပင်', 'トウ, テ', 'いね, いな', 'Grain', 'radikal grain', 14, 8, 'N2'),
(3389, '躍', 'Lompat, Menari, Lewati', 'Leap, Dance, Skip', 'ခုန်၊ ကသည်၊ ကျော်ပါ။', 'ヤク', 'おど・る', 'Foot', 'radikal foot', 21, 8, 'N2'),
(3390, '銃', 'Senjata, Senjata', 'Gun, Arms', 'သေနတ်၊လက်နက်', 'ジュウ', 'つつ', 'Gold', 'radikal gold', 14, 8, 'N2'),
(3391, '項', 'Paragraf, Tengkuk Leher, Klausa', 'Paragraph, Nape Of Neck, Clause', 'စာပိုဒ်၊ Nape Of Neck၊ Clause', 'コウ', 'うなじ', 'Construction', 'radikal construction', 12, 8, 'N2'),
(3392, '駐', 'Persinggahan, Tempat Tinggal, Residen', 'Stop-over, Reside In, Resident', 'ရပ်တန့်၊ နေထိုင်၊ နေထိုင်သူ', 'チュウ', '', 'Horse', 'radikal horse', 15, 8, 'N2'),
(3393, '駆', 'Berkendara, Lari, Berpacu', 'Drive, Run, Gallop', 'Drive၊ Run၊ Gallop', 'ク', 'か・ける, か・る', 'Horse', 'radikal horse', 14, 8, 'N2'),
(3394, '俊', 'Bijaksana, Jenius, Keunggulan', 'Sagacious, Genius, Excellence', 'ထက်မြက်သူ၊ ပါရမီရှင်၊ ထူးချွန်သူ', 'シュン', '', 'Leader', 'radikal leader', 9, 8, 'N2'),
(3395, '兼', 'Secara Bersamaan, Dan, Sebelumnya', 'Concurrently, And, Beforehand', 'တစ်ချိန်တည်းမှာပင်၊', 'ケン', 'か・ねる, か・ねる', 'Mona Lisa', 'radikal mona lisa', 10, 8, 'N2'),
(3396, '剤', 'Dosis, Obat, Obat', 'Dose, Medicine, Drug', 'ဆေး၊ ဆေး၊ ဆေး', 'ザイ, スイ, セイ', 'かる, けず・る', 'Simultaneous', 'radikal simultaneous', 10, 8, 'N2'),
(3397, '吹', 'Tiup, Bernapas, Engah', 'Blow, Breathe, Puff', 'မှုတ်၊ အသက်ရှူ၊ ဖုံ', 'スイ', 'ふ・く', 'Mouth', 'radikal mouth', 7, 8, 'N2'),
(3398, '堀', 'Parit, Parit, Kanal', 'Ditch, Moat, Canal', 'ကျုံး၊ ကျုံး၊ တူးမြောင်း', 'クツ', 'ほり', 'Dirt', 'radikal dirt', 11, 8, 'N2'),
(3399, '巡', 'Patroli, Keliling, Keliling', 'Patrol, Go Around, Circumference', 'လှည့်ကင်း၊ ပတ်ပတ်လည်၊ အဝန်း', 'ジュン', 'めぐ・る, めぐ・り', 'Scooter', 'radikal scooter', 6, 8, 'N2'),
(3400, '戒', 'Perintah', 'Commandment', 'ပညတ်တော်', 'カイ', 'いまし・める', 'Drunkard', 'radikal drunkard', 7, 8, 'N2'),
(3401, '排', 'Tolak, Kecualikan, Keluarkan', 'Repudiate, Exclude, Expel', 'ငြင်းဆိုခြင်း၊ ဖယ်ထုတ်ခြင်း၊ နှင်ထုတ်ခြင်း။', 'ハイ', '', 'Fingers', 'radikal fingers', 11, 8, 'N2'),
(3402, '携', 'Portabel, Dibawa (di Tangan), Berbekal', 'Portable, Carry (in Hand), Armed With', 'အိတ်ဆောင်၊ သယ်(လက်)၊ လက်နက်ကိုင်ဆောင်', 'ケイ', 'たずさ・える, たずさ・わる', 'Fingers', 'radikal fingers', 13, 8, 'N2'),
(3403, '敏', 'Kepintaran, Tangkas, Waspada', 'Cleverness, Agile, Alert', 'ထက်မြက်ခြင်း၊ သွက်လက်ခြင်း၊ သတိရှိခြင်း။', 'ビン', 'さとい', 'Every', 'radikal every', 10, 8, 'N2'),
(3404, '鋭', 'Runcing, Ketajaman, Tepi', 'Pointed, Sharpness, Edge', 'ချွန်သည်၊ ပြတ်သားမှု၊ အနားသတ်', 'エイ', 'するど・い', 'Gold', 'radikal gold', 15, 8, 'N2'),
(3405, '敷', 'Menyebar, Mengaspal, Duduk', 'Spread, Pave, Sit', 'ခင်း၊ ခင်း၊ ထိုင်', 'フ', 'し・く, し・き', 'Cross', 'radikal cross', 15, 8, 'N2'),
(3406, '殿', 'Tuan, Aula, Rumah', 'Mr., Hall, Mansion', 'မစ္စတာ၊ ခန်းမ၊ အိမ်ကြီး', 'デン, テン', 'との, どの', 'Flag', 'radikal flag', 13, 8, 'N2'),
(3407, '犠', 'Pengorbanan', 'Sacrifice', 'အနစ်နာခံခြင်း။', 'ギ, キ', 'いけにえ', 'Cow', 'radikal cow', 17, 8, 'N2'),
(3408, '獲', 'Rebut, Dapatkan, Temukan', 'Seize, Get, Find', 'သိမ်းယူ၊ ရယူပါ၊ ရှာပါ။', 'カク', 'え・る', 'Animal', 'radikal animal', 16, 8, 'N2'),
(3409, '茂', 'Ditumbuhi, Tumbuh Tebal, Menjadi Mewah', 'Overgrown, Grow Thick, Be Luxuriant', 'အစိမ်းရင့်ရင့်၊ ထူလာ၍ ဇိမ်ရှိပါစေ။', 'モ', 'しげ・る', 'Flowers', 'radikal flowers', 8, 8, 'N2'),
(3410, '薄', 'Encer, Tipis, Lemah (teh)', 'Dilute, Thin, Weak (tea)', 'ပျော့ပျော့ပျော့ (လက်ဖက်ရည်)၊', 'ハク', 'うす・い, うす, うす, うす・める, うす・まる, うす・らぐ, うす・ら, うす・れる, すすき', 'Flowers', 'radikal flowers', 16, 8, 'N2'),
(3411, '衝', 'Bertabrakan, Brunt, Jalan Raya', 'Collide, Brunt, Highway', 'တိုက်မိ၊ ဘရန့်၊ အဝေးပြေး', 'ショウ', 'つ・く', 'Go', 'radikal go', 15, 8, 'N2'),
(3412, '誉', 'Reputasi, Pujian, Kehormatan', 'Reputation, Praise, Honor', 'ဂုဏ်၊ ဂုဏ်၊ ဂုဏ်', 'ヨ', 'ほま・れ, ほ・める', 'Grass', 'radikal grass', 13, 8, 'N2'),
(3413, '透', 'Transparan, Meresap, Filter', 'Transparent, Permeate, Filter', 'Transparent၊ Permeate၊ Filter', 'トウ', 'す・く, す・かす, す・ける, とう・る, とう・す', 'Scooter', 'radikal scooter', 10, 8, 'N2'),
(3414, '隣', 'Tetangga', 'Neighboring', 'အိမ်နီးချင်း', 'リン', 'とな・る, となり', 'Building', 'radikal building', 16, 8, 'N2'),
(3415, '雅', 'Ramah, Anggun, Anggun', 'Gracious, Elegant, Graceful', 'ယဉ်ကျေးသော၊ အံဝင်ခွင်ကျ၊ ကျက်သရေရှိသော', 'ガ', 'みや・び', 'Fang', 'radikal fang', 13, 8, 'N2'),
(3416, '又', 'Atau Sekali Lagi, Lebih Jauh lagi, Di Sisi Lain', 'Or Again, Furthermore, On The Other Hand', 'သို့တည်းမဟုတ် တနည်းအားဖြင့် အခြားတစ်ဖက်တွင်၊', 'ユウ', 'また, また, また・の', 'Stool', 'radikal stool', 2, 8, 'N1'),
(3417, '雰', 'Suasana, Kabut', 'Atmosphere, Fog', 'လေထု၊ မြူနှင်း', 'フン', '', 'Rain', 'radikal rain', 12, 8, 'N1'),
(3418, '冒', 'Resiko, Hadapi, Tentang', 'Risk, Face, Defy', 'အန္တရာယ်၊ ရင်ဆိုင်ပါ၊ ခုခံပါ။', 'ボウ', 'おか・す', 'Sun', 'radikal sun', 9, 8, 'N1'),
(3419, '冗', 'Berlebihan, Tidak Berguna', 'Superfluous, Uselessness', 'မလိုပါဘူး၊ အသုံးမကျမှု', 'ジョウ', '', 'Forehead', 'radikal forehead', 4, 8, 'N1'),
(3420, '幻', 'Fantasi, Visi, Mimpi', 'Phantasm, Vision, Dream', 'Phantasm, Vision, အိပ်မက်', 'ゲン', 'まぼろし', 'Poop', 'radikal poop', 4, 8, 'N1'),
(3421, '僧', 'Pendeta Buddha, Biksu', 'Buddhist Priest, Monk', 'ဆရာတော်၊ ဆရာတော်', 'ソウ', '', 'Leader', 'radikal leader', 13, 8, 'N1'),
(3422, '禅', 'Zen, Meditasi Hening', 'Zen, Silent Meditation', 'ဇင်၊ အသံတိတ် တရားထိုင်ခြင်း။', 'ゼン, セン', 'しずか, ゆず・る', 'Spirit', 'radikal spirit', 13, 8, 'N1'),
(3423, '昆', 'Keturunan, Kakak, Serangga', 'Descendants, Elder Brother, Insect', 'သားစဉ်မြေးဆက်၊ အစ်ကိုကြီး၊ အင်းဆက်', 'コン', '', 'Sun', 'radikal sun', 8, 8, 'N1'),
(3424, '妨', 'Mengganggu, Mencegah, Menghambat', 'Disturb, Prevent, Hamper', 'နှောင့်ယှက်ခြင်း၊ တားဆီးခြင်း၊ ဟန့်တားခြင်း။', 'ボウ', 'さまた・げる', 'Woman', 'radikal woman', 7, 8, 'N1'),
(3425, '尻', 'Bokong, Pinggul, Bokong', 'Buttocks, Hips, Butt', 'တင်ပါး၊ တင်ပါး၊ တင်ပါး', 'コウ', 'しり', 'Flag', 'radikal flag', 5, 8, 'N1'),
(3426, '臭', 'Bau, Bau, dan Tampak Mencurigakan', 'Stinking, Ill-smelling, Suspicious Looking', 'အနံ့နံခြင်း၊ အနံ့ဆိုးထွက်ခြင်း၊ သံသယဖြစ်ဖွယ်ကြည့်ခြင်း။', 'シュウ', 'くさ・い, くさ・い, にお・う, にお・い', 'Self', 'radikal self', 9, 8, 'N1'),
(3427, '鬼', 'Hantu, Iblis', 'Ghost, Devil', 'တစ္ဆေ၊ မာရ်နတ်', 'キ', 'おに, おに', 'Demon', 'radikal demon', 10, 8, 'N1'),
(3428, '輩', 'Kamerad, Rekan, Teman-teman', 'Comrade, Fellow, People', 'ရဲဘော်၊ လုပ်ဖော်ကိုင်ဖက်၊ ပြည်သူ့', 'ハイ', 'ばら, やから, やかい, ともがら', 'Criminal', 'radikal criminal', 15, 8, 'N1'),
(3429, '鉛', 'Memimpin', 'Lead', 'ခဲ', 'エン', 'なまり', 'Gold', 'radikal gold', 13, 8, 'N1'),
(3430, '怪', 'Mencurigakan, Misteri, Penampakan', 'Suspicious, Mystery, Apparition', 'သံသယဖြစ်ဖွယ်၊ လျှို့ဝှက်ဆန်းကြယ်၊ အသွင်အပြင်', 'カイ, ケ', 'あや・しい, あや・しむ', 'Soul', 'radikal soul', 8, 8, 'N1'),
(3431, '獣', 'Hewan, Binatang', 'Animal, Beast', 'တိရစ္ဆာန်၊ သားရဲ', 'ジュウ', 'けもの, けだもの', 'Grass', 'radikal grass', 16, 8, 'N1'),
(3432, '豚', 'Babi, Babi', 'Pork, Pig', 'ဝက်၊ ဝက်', 'トン', 'ぶた', 'Moon', 'radikal moon', 11, 8, 'N1'),
(3433, '屈', 'Hasil, Tekuk, Gentar', 'Yield, Bend, Flinch', 'အထွက်နှုန်း၊ ကွေး၊ Flinch', 'クツ', 'かが・む, かが・める', 'Flag', 'radikal flag', 8, 8, 'N1'),
(3434, '睡', 'Mengantuk, Tidur, Mati', 'Drowsy, Sleep, Die', 'ငိုက်မျဉ်း၊ အိပ်၊ သေ', 'スイ', 'ねむ・る, ねむ・い', 'Eye', 'radikal eye', 13, 8, 'N1'),
(3435, '稚', 'Belum dewasa, Muda', 'Immature, Young', 'မရင့်ကျက်သော၊ လူငယ်', 'チ, ジ', 'いとけない, おさない, おくて, おでる', 'Grain', 'radikal grain', 13, 8, 'N1'),
(3436, '麗', 'Cantik, Cantik, Anggun', 'Lovely, Beautiful, Graceful', 'ချစ်စရာကောင်းတယ်၊ တင့်တယ်တယ်၊ ကျက်သရေရှိတယ်။', 'レイ', 'うるわ・しい, うら・らか', 'Lovely', 'radikal lovely', 19, 8, 'N1'),
(3437, '傘', 'Payung', 'Umbrella', 'ထီး', 'サン', 'かさ', 'Hat', 'radikal hat', 12, 8, 'N1'),
(3438, '宴', 'Perjamuan, Pesta, Pesta', 'Banquet, Feast, Party', 'ပွဲ၊ ပွဲ၊ ပါတီ', 'エン', 'うたげ', 'Roof', 'radikal roof', 10, 8, 'N1'),
(3439, '添', 'Dilampirkan, Menemani, Menikah', 'Annexed, Accompany, Marry', 'နောက်ဆက်တွဲ၊ အတူလိုက်ပါ၊ လက်ထပ်ပါ။', 'テン', 'そ・える, そ・う', 'Tsunami', 'radikal tsunami', 11, 8, 'N1'),
(3440, '懐', 'Saku, Perasaan, Hati', 'Pocket, Feelings, Heart', 'အိတ်ဆောင်၊ ခံစားချက်၊ နှလုံးသား', 'カイ, エ', 'ふところ, なつ・かしい, なつ・かしむ, なつ・く, なつ・ける, なず・ける, いだ・く, おも・う', 'Soul', 'radikal soul', 16, 8, 'N1'),
(3441, '枕', 'Bantal', 'Pillow', 'ခေါင်းအုံး', 'チン, シン', 'まくら', 'Tree', 'radikal tree', 8, 8, 'N1'),
(3442, '鑑', 'Spesimen, Ambil Peringatan, Belajar Darinya', 'Specimen, Take Warning From, Learn From', 'နမူနာယူပါ၊ သတိပေးချက်ယူပါ၊ သင်ယူပါ။', 'カン', 'かんが・みる, かがみ', 'Gold', 'radikal gold', 23, 8, 'N1'),
(3443, '尋', 'Tanyakan, Pahami, Carilah', 'Inquire, Fathom, Look For', 'စုံစမ်းရန်၊ Fathom၊ ရှာဖွေပါ။', 'ジン', 'たず・ねる, ひろ', 'Wolverine', 'radikal wolverine', 12, 8, 'N1'),
(3444, '幾', 'Berapa Banyak, Berapa Banyak, Seberapa Jauh', 'How Many, How Much, How Far', 'ဘယ်လောက်၊ ဘယ်လောက်၊ ဘယ်လောက်ဝေးလဲ။', 'キ', 'いく, いく・つ, いく・ら', 'Poop', 'radikal poop', 12, 8, 'N1'),
(3445, '廊', 'Koridor, Aula, Menara', 'Corridor, Hall, Tower', 'စင်္ကြံ၊ခန်းမ၊မျှော်စင်', 'ロウ', '', 'Canopy', 'radikal canopy', 12, 8, 'N1'),
(3446, '偵', 'Mata-mata', 'Spy', 'သူလျှို', 'テイ', '', 'Leader', 'radikal leader', 11, 8, 'N1'),
(3447, '漠', 'Tidak jelas, Tidak Jelas, Gurun', 'Vague, Obscure, Desert', 'ဝိုးတဝါး၊ မထင်မရှား၊ ကန္တာရ', 'バク', '', 'Tsunami', 'radikal tsunami', 13, 8, 'N1'),
(3448, '丼', 'Mangkuk, Mangkuk Makanan', 'Bowl, Bowl Of Food', 'ပန်းကန်၊ ပန်းကန်', 'トン, タン, ショウ, セイ', 'どんぶり', 'Well', 'radikal well', 5, 8, 'N1'),
(3449, '吐', 'Meludah, Muntah, Bersendawa', 'Spit, Vomit, Belch', 'တံတွေးထွေးခြင်း၊ အော့အန်ခြင်း၊ လေချဉ်တက်ခြင်း။', 'ト', 'は・く, つ・く', 'Mouth', 'radikal mouth', 6, 8, 'N1'),
(3450, '奴', 'Guy, Budak, Pelayan', 'Guy, Slave, Manservant', 'ယောက်ျား၊ ကျွန်၊ လူဆိုး', 'ド', 'やつ, やっこ', 'Woman', 'radikal woman', 5, 8, 'N1'),
(3451, '隷', 'Budak, Hamba, Tahanan', 'Slave, Servant, Prisoner', 'ကျွန်၊ ကျွန်၊ အကျဉ်းသား', 'レイ', 'したが・う, しもべ', 'Samurai', 'radikal samurai', 16, 8, 'N1'),
(3452, '芋', 'kentang', 'Potato', 'အာလူး', 'ウ', 'いも', 'Flowers', 'radikal flowers', 6, 8, 'N1'),
(3453, '粋', 'Cantik, Gaya, Kemurnian', 'Chic, Style, Purity', 'အမိုက်စား၊ စတိုင်၊ သန့်ရှင်းမှု', 'スイ', 'いき', 'Rice', 'radikal rice', 10, 8, 'N1'),
(3454, '爪', 'Cakar, Paku, Cakar', 'Claw, Nail, Talon', 'ခြေသည်း၊ လက်သည်း၊ Talon', 'ソウ', 'つめ, つま', 'Claw', 'radikal claw', 4, 8, 'N1'),
(3455, '彫', 'Mengukir, Mengukir, Pahat', 'Carve, Engrave, Chisel', 'ထွင်းထု၊ ကမ္ပည်း၊ သံတုံး', 'チョウ', 'ほ・る, ぼ・り', 'Circumference', 'radikal circumference', 11, 8, 'N1'),
(3456, '厄', 'Sial, Kemalangan, Nasib Buruk', 'Unlucky, Misfortune, Bad Luck', 'ကံမကောင်းခြင်း၊ ကံဆိုးခြင်း၊ ကံဆိုးခြင်း။', 'ヤク', '', 'Cliff', 'radikal cliff', 4, 8, 'N1'),
(3457, '亀', 'Kura-kura, Kura-kura', 'Tortoise, Turtle', 'လိပ်၊ လိပ်', 'キ, キュウ, キン', 'かめ', 'Turtle', 'radikal turtle', 11, 8, 'N1'),
(3458, '剣', 'Pedang, Pedang, Bilah', 'Sabre, Sword, Blade', 'Sabre၊ ဓား၊ ဓား', 'ケン', 'つるぎ', 'Squid', 'radikal squid', 10, 8, 'N1'),
(3459, '汁', 'Sup, Jus, Kaldu', 'Soup, Juice, Broth', 'ဟင်းရည်၊ ဟင်းရည်၊', 'ジュウ', 'しる, しる, つゆ', 'Tsunami', 'radikal tsunami', 5, 8, 'N1'),
(3460, '獄', 'Penjara, Penjara', 'Prison, Jail', 'ထောင်၊ ထောင်', 'ゴク', '', 'Animal', 'radikal animal', 14, 8, 'N1'),
(3461, '酔', 'Mabuk, Merasa Sakit, Keracunan', 'Drunk, Feel Sick, Poisoned', 'မူးသည်၊ ဖျားသည်၊ အဆိပ်သင့်သည်။', 'スイ', 'よ・う, よ・い, よ', 'Alcohol', 'radikal alcohol', 11, 8, 'N1'),
(3462, '酢', 'Cuka, Asam, Asam', 'Vinegar, Sour, Acid', 'ရှာလကာရည်၊ အချဉ်၊ အက်ဆစ်', 'サク', 'す', 'Alcohol', 'radikal alcohol', 12, 8, 'N1'),
(3463, '鍋', 'Panci, Panci, Ketel', 'Pot, Pan, Kettle', 'အိုး၊ ပန်၊ ရေနွေးအိုး', 'カ', 'なべ', 'Gold', 'radikal gold', 17, 8, 'N1'),
(3464, '伎', 'Akta, Keterampilan', 'Deed, Skill', 'အရည်အချင်း၊ အရည်အချင်း', 'ギ, キ', 'わざ, わざおぎ', 'Leader', 'radikal leader', 6, 8, 'N1'),
(3465, '牙', 'Tusk, Fang, Tusk Radikal (no. 92)', 'Tusk, Fang, Tusk Radical (no. 92)', 'Tusk၊ Fang၊ Tusk Radical (နံပါတ် 92)', 'ガ, ゲ', 'きば, は', 'Fang', 'radikal fang', 5, 8, 'N1'),
(3466, '跳', 'Lompat, Lompatan, Musim Semi', 'Hop, Leap Up, Spring', 'ခုန်ပါ၊ ခုန်ပါ၊ နွေဦး', 'チョウ', 'は・ねる, と・ぶ, と・び', 'Foot', 'radikal foot', 13, 8, 'N1'),
(3467, '宜', 'Salam Hormat, Bagus', 'Best Regards, Good', 'လေးစားစွာဖြင့် ကောင်းပါသည်။', 'ギ', 'よろ・しい, よろ・しく', 'Roof', 'radikal roof', 8, 8, 'N1'),
(3468, '妊', 'Kehamilan', 'Pregnancy', 'ကိုယ်ဝန်', 'ニン, ジン', 'はら・む, みごも・る', 'Woman', 'radikal woman', 7, 8, 'N1'),
(3469, '娠', 'Dengan Anak, Kehamilan', 'With Child, Pregnancy', 'ကလေးနှင့်အတူ၊ ကိုယ်ဝန်', 'シン', '', 'Woman', 'radikal woman', 10, 8, 'N1'),
(3470, '阜', 'Bukit, Gundukan, Kiri Desa Radikal (no. 170)', 'Hill, Mound, Left Village Radical (no. 170)', 'တောင်ကုန်း၊ လက်ဝဲကျေးရွာ အစွန်းရောက် (အမှတ် ၁၇၀)၊', 'フ, フウ', '', 'Drop', 'radikal drop', 8, 8, 'N1'),
(3471, '棋', 'Bidak Catur, Catur Jepang, Shogi', 'Chess Piece, Japanese Chess, Shogi', 'စစ်တုရင်အပိုင်း၊ ဂျပန်စစ်တုရင်၊ Shogi', 'キ', 'ご', 'Tree', 'radikal tree', 12, 8, 'N1'),
(3472, '頻', 'Berulang kali, Berulang', 'Repeatedly, Recur', 'အထပ်ထပ်၊ ထပ်ခါထပ်ခါ', 'ヒン', 'しき・りに', 'Walk', 'radikal walk', 17, 8, 'N1'),
(3473, '殖', 'Menambah, Menambah, Kalikan', 'Augment, Increase, Multiply', 'တိုး၊ တိုး၊ တိုး', 'ショク', 'ふ・える, ふ・やす', 'Yakuza', 'radikal yakuza', 12, 8, 'N1'),
(3474, '褒', 'Puji, Puji', 'Praise, Extol', 'ချီးမွမ်း၊ Extol', 'ホウ', 'ほ・める', 'Lid', 'radikal lid', 15, 8, 'N1'),
(3475, '徹', 'Menembus, Jelas, Menembus', 'Penetrate, Clear, Pierce', 'ထိုးဖောက်ခြင်း၊ ရှင်းလင်းခြင်း၊', 'テツ', '', 'Loiter', 'radikal loiter', 15, 8, 'N1'),
(3476, '瀬', 'Jeram, Arus, Torrent', 'Rapids, Current, Torrent', 'Rapids၊ Current၊ Torrent', 'ライ', 'せ', 'Tsunami', 'radikal tsunami', 19, 8, 'N1'),
(3477, '撤', 'Hapus, Tarik, Lucuti', 'Remove, Withdraw, Disarm', 'ဖယ်ရှားရန်၊ ရုပ်သိမ်းရန်၊ လက်နက်ဖြုတ်ပါ။', 'テツ', '', 'Fingers', 'radikal fingers', 15, 8, 'N1'),
(3478, '措', 'Sisihkan, Menyerah, Menunda', 'Set Aside, Give Up, Suspend', 'ဘေးဖယ်ထား၊ စွန့်လွှတ်ပါ၊ ဆိုင်းငံ့လိုက်ပါ။', 'ソ', 'お・く', 'Fingers', 'radikal fingers', 11, 8, 'N1'),
(3479, '拠', 'Pijakan, Berdasarkan, Ikuti', 'Foothold, Based On, Follow', 'ခြေကုပ်၊ အခြေခံ၊ လိုက်နာပါ။', 'キョ, コ', 'よ・る', 'Fingers', 'radikal fingers', 8, 8, 'N1'),
(3480, '儀', 'Upacara, Aturan, Perselingkuhan', 'Ceremony, Rule, Affair', 'အခမ်းအနား၊ စည်းကမ်း၊ ကိစ္စ', 'ギ', '', 'Leader', 'radikal leader', 15, 8, 'N1'),
(3481, '棄', 'Abaikan, Buang, Buang', 'Abandon, Throw Away, Discard', 'စွန့်ပစ်ပါ၊ စွန့်ပစ်ပါ၊ စွန့်ပစ်ပါ။', 'キ', 'す・てる', 'Trash', 'radikal trash', 13, 8, 'N1'),
(3482, '虎', 'Harimau, Pemabuk', 'Tiger, Drunkard', 'ကျား၊ အမူးသမား', 'コ', 'とら', 'Tiger', 'radikal tiger', 8, 8, 'N1'),
(3483, '蛍', 'Kutu petir, Kunang-kunang', 'Lightning-bug, Firefly', 'Lightning-bug၊ Firefly', 'ケイ', 'ほたる', 'Viking', 'radikal viking', 11, 8, 'N1'),
(3484, '蜂', 'Lebah, Tawon, Tawon', 'Bee, Wasp, Hornet', 'ပျား၊ ဖား၊ ပျား', 'ホウ', 'はち', 'Insect', 'radikal insect', 13, 8, 'N1'),
(3485, '蜜', 'Madu, Nektar, Molase', 'Honey, Nectar, Molasses', 'ပျားရည်၊ ပန်းဝတ်ရည်၊ တင်လဲရည်', 'ミツ, ビツ', '', 'Roof', 'radikal roof', 14, 8, 'N1'),
(3486, '艦', 'kapal perang', 'Warship', 'စစ်သင်္ဘော', 'カン', '', 'Boat', 'radikal boat', 21, 8, 'N1'),
(3487, '潜', 'Rendam, Sembunyikan, Sembunyikan', 'Submerge, Conceal, Hide', 'ရေမြုပ်၊ ဖုံးကွယ်၊ ဝှက်', 'セン', 'ひそ・む, もぐ・る, かく・れる, くぐ・る, ひそ・める', 'Tsunami', 'radikal tsunami', 15, 8, 'N1'),
(3488, '拳', 'Tinju', 'Fist', 'လက်သီး', 'ケン, ゲン', 'こぶし', 'Gladiator', 'radikal gladiator', 10, 8, 'N1'),
(3489, '偽', 'Kepalsuan, Kebohongan, Penipuan', 'Falsehood, Lie, Deceive', 'မုသာဝါဒ၊ လိမ်လည်လှည့်ဖြားခြင်း။', 'ギ, カ', 'いつわ・る, にせ, いつわ・り', 'Leader', 'radikal leader', 11, 8, 'N1'),
(3490, '克', 'Mengatasinya, dengan Ramah, dengan Terampil', 'Overcome, Kindly, Skillfully', 'ကြင်ကြင်နာနာ၊ ကျွမ်းကျင်စွာ ကျော်ဖြတ်ပါ။', 'コク', 'か・つ', 'Old', 'radikal old', 7, 8, 'N1'),
(3491, '哲', 'Filsafat, Jelas', 'Philosophy, Clear', 'ဒဿန၊ ရှင်းရှင်းလင်းလင်း', 'テツ', 'さとい, あきらか', 'Fingers', 'radikal fingers', 10, 8, 'N1'),
(3492, '喪', 'Nona, Duka', 'Miss, Mourning', 'လွမ်းဆွတ်၊လွမ်းဆွတ်စရာ', 'ソウ', 'も', 'Cross', 'radikal cross', 12, 8, 'N1'),
(3493, '堅', 'Ketat, Keras, Padat', 'Strict, Hard, Solid', 'တင်းကျပ်၊ ခက်၊ အခဲ', 'ケン', 'かた・い, がた・い', 'Servant', 'radikal servant', 12, 8, 'N1'),
(3494, '括', 'Kencangkan, Ikat, Tangkap', 'Fasten, Tie Up, Arrest', 'ချည်နှောင်၊ ချည်နှောင်၊ ဖမ်း', 'カツ', 'くく・る', 'Fingers', 'radikal fingers', 9, 8, 'N1'),
(3495, '弧', 'Busur, Lengkungan, Busur', 'Arc, Arch, Bow', 'Arc, Arch, Bow', 'コ', '', 'Bow', 'radikal bow', 9, 8, 'N1'),
(3496, '揚', 'Angkat, Tinggikan, Angkat', 'Raise, Elevate, Hoist', 'မြှင့်တင်ပါ၊ မြှင့်တင်ပါ၊ လွှင့်ပါ။', 'ヨウ', 'あ・げる, あ・げ, あ・がる', 'Fingers', 'radikal fingers', 12, 8, 'N1'),
(3497, '握', 'Pegang, Tahan, Cetak Sushi', 'Grip, Hold, Mould Sushi', 'ဆုပ်ကိုင်၊ ဖိထား၊ ပုံသွင်းဆူရှီ', 'アク', 'にぎ・る', 'Fingers', 'radikal fingers', 12, 8, 'N1'),
(3498, '揺', 'Ayun, Goyang, Goyang', 'Swing, Shake, Sway', 'Swing၊ Shake၊ Sway', 'ヨウ', 'ゆ・れる, ゆ・る, ゆ・らぐ, ゆ・るぐ, ゆ・する, ゆ・さぶる, ゆ・すぶる, うご・く', 'Fingers', 'radikal fingers', 12, 8, 'N1'),
(3499, '斎', 'Pemurnian, Makanan Budha, Kamar', 'Purification, Buddhist Food, Room', 'သန့်စင်ခြင်း၊ ဗုဒ္ဓဘာသာ အစားအစာ၊အခန်း', 'サイ', 'とき, つつし・む, ものいみ, い・む, いわ・う, いつ・く', 'Simultaneous', 'radikal simultaneous', 11, 8, 'N1'),
(3500, '暫', 'Sementara, Sebentar, Sebentar', 'Temporarily, A While, Moment', 'ယာယီ၊ ခဏ၊ အခိုက်အတန့်', 'ザン', 'しばら・く', 'Car', 'radikal car', 15, 8, 'N1'),
(3501, '析', 'Potong, Bagi, Sobek', 'Chop, Divide, Tear', 'ခုတ်၊ ခွဲ၊ ဆုတ်ပါ။', 'セキ', '', 'Tree', 'radikal tree', 8, 8, 'N1'),
(3502, '枢', 'Engsel, Pivot, Pintu', 'Hinge, Pivot, Door', 'Hinge, Pivot, Door', 'スウ, シュ', 'とぼそ, からくり', 'Tree', 'radikal tree', 8, 8, 'N1'),
(3503, '軸', 'Sumbu, Poros, Batang', 'Axis, Pivot, Stem', 'Axis၊ Pivot၊ Stem', 'ジク', '', 'Car', 'radikal car', 12, 8, 'N1'),
(3504, '柄', 'Desain, Pola, Bangun', 'Design, Pattern, Build', 'ဒီဇိုင်း၊ ပုံစံ၊ တည်ဆောက်မှု', 'ヘイ', 'がら, え, つか', 'Tree', 'radikal tree', 9, 8, 'N1'),
(3505, '滑', 'Licin, Geser, Tergelincir', 'Slippery, Slide, Slip', 'ချော်၊ လျှော၊ ချော်', 'カツ, コツ', 'すべ・る, なめ・らか', 'Tsunami', 'radikal tsunami', 13, 8, 'N1'),
(3506, '潟', 'Laguna', 'Lagoon', 'ရေကန်', 'セキ', 'かた, がた', 'Tsunami', 'radikal tsunami', 15, 8, 'N1'),
(3507, '範', 'Pola, Contoh, Model', 'Pattern, Example, Model', 'ပုံစံ၊ ဥပမာ၊ မော်ဒယ်', 'ハン', '', 'Bamboo', 'radikal bamboo', 15, 8, 'N1'),
(3508, '紛', 'Mengalihkan perhatian, Disalahartikan, Tersesat', 'Distract, Be Mistaken For, Go Astray', 'အာရုံလွှဲ၊ အထင်မှား၊ လမ်းလွဲသွားပါ။', 'フン', 'まぎ・れる, まぎ・れ, まぎ・らす, まぎ・らわす, まぎ・らわしい', 'Thread', 'radikal thread', 10, 8, 'N1'),
(3509, '綱', 'Hawser, Kelas (genus), Tali', 'Hawser, Class (genus), Rope', 'Hawser, Class (genus), Rope', 'コウ', 'つな', 'Thread', 'radikal thread', 14, 8, 'N1'),
(3510, '網', 'Jaring, Jaringan', 'Netting, Network', 'ကွန်ရက်၊ ကွန်ရက်', 'モウ', 'あみ', 'Thread', 'radikal thread', 14, 8, 'N1'),
(3511, '肝', 'Hati, Pemetikan, Saraf', 'Liver, Pluck, Nerve', 'အသည်း၊ ပလပ်၊ အာရုံကြော', 'カン', 'きも', 'Moon', 'radikal moon', 7, 8, 'N1'),
(3512, '芝', 'Rumput, Rumput', 'Turf, Lawn', 'မြက်ခင်းပြင်၊', 'シ', 'しば', 'Flowers', 'radikal flowers', 6, 8, 'N1'),
(3513, '誰', 'Siapa, Seseorang, Seseorang', 'Who, Someone, Somebody', 'ဘယ်သူ၊ တစ်စုံတစ်ယောက်၊ တစ်စုံတစ်ယောက်', 'スイ', 'だれ, たれ, た', 'Say', 'radikal say', 15, 8, 'N1'),
(3514, '珍', 'Langka, Penasaran, Aneh', 'Rare, Curious, Strange', 'ရှားတယ်၊ စပ်စုတယ်၊ ထူးဆန်းတယ်။', 'チン', 'めずら・しい, たから', 'King', 'radikal king', 9, 8, 'N1'),
(3515, '裂', 'Pisahkan, Robek, Robek', 'Split, Rend, Tear', 'ကွဲ၊ ဆုတ်၊ မျက်ရည်', 'レツ', 'さ・く, さ・ける, ぎ・れ', 'Yakuza', 'radikal yakuza', 12, 8, 'N1'),
(3516, '襲', 'Serang, Maju, Sukses', 'Attack, Advance On, Succeed To', 'တိုက်ခိုက်မှု၊ ရှေ့တိုး၊ အောင်မြင်သည်။', 'シュウ', 'おそ・う, かさ・ね', 'Imperial', 'radikal imperial', 22, 8, 'N1'),
(3517, '趣', 'Penjelasan, Intisari, Keanggunan', 'Purport, Gist, Elegance', 'Purport၊ Gist၊ Elegance', 'シュ', 'おもむき, おもむ・く', 'Run', 'radikal run', 15, 8, 'N1'),
(3518, '距', 'Jarak jauh, Spur, Fetlock', 'Long-distance, Spur, Fetlock', 'ခရီးဝေး၊ Spur၊ Fetlock', 'キョ', 'へだ・たる, けづめ', 'Foot', 'radikal foot', 12, 8, 'N1'),
(3519, '籍', 'Pendaftaran, Daftar Domisili, Keanggotaan', 'Enroll, Domiciliary Register, Membership', 'စာရင်းသွင်းခြင်း၊ အိမ်အကူမှတ်ပုံတင်ခြင်း၊ အသင်းဝင်ခြင်း။', 'セキ', '', 'Bamboo', 'radikal bamboo', 20, 8, 'N1'),
(3520, '露', 'Embun, Air Mata, Paparan', 'Dew, Tears, Expose', 'နှင်းရည်၊ မျက်ရည်များ၊ ဖော်ထုတ်ပါ။', 'ロ, ロウ', 'つゆ', 'Rain', 'radikal rain', 21, 8, 'N1');

-- Step 4: Insert 815 New Kotoba
INSERT INTO kotoba (id, kanji, hiragana, meaning_id, meaning_en, meaning_my, notes, example_sentence, example_translation, level) VALUES
(4001, '会う', 'あう', 'untuk bertemu', 'to meet', 'တွေ့ဆုံရန်', 'Kelas kata: v5u, vi', 'もうスミスさんに会われましたね。', 'Anda sudah bertemu dengan Tuan Smith, bukan?', 'N5'),
(4002, '青', 'あお', 'biru', 'blue', 'အပြာ', 'Kelas kata: n, adj-no', '信号が青に変わったわよ。', 'Lampu lalu lintas berubah menjadi hijau.', 'N5'),
(4003, '青い', 'あおい', 'biru', 'blue', 'အပြာ', 'Kelas kata: adj-i', 'お前はまだ「青い」な。', 'Kamu masih hijau.', 'N5'),
(4004, '赤', 'あか', 'merah', 'red', 'အနီရောင်', 'Kelas kata: n, adj-no', '赤インクで書いてはいけない。', 'Jangan menulis dengan tinta merah.', 'N5'),
(4005, '赤い', 'あかい', 'merah', 'red', 'အနီရောင်', 'Kelas kata: adj-i', '彼女は赤いスカートをはいていた。', 'Dia mengenakan rok merah.', 'N5'),
(4006, '明るい', 'あかるい', 'cerah', 'bright', 'တောက်ပ', 'Kelas kata: adj-i', '外はだんだん明るくなっていく。', 'Di luar semakin terang.', 'N5'),
(4007, '秋', 'あき', 'musim gugur', 'autumn', 'ဆောင်းဦး', 'Kelas kata: n, adv', '秋はもうすぐそこまで来ている。', 'Musim gugur sudah dekat.', 'N5'),
(4008, '開く', 'あく', 'untuk membuka, menjadi terbuka', 'to open, to become open', 'ဖွင့်ရန်၊ ဖွင့်ရန်', 'Kelas kata: v5k, vi', 'ぐいと押すとドアは開いた。', 'Pintu itu menyerah karena dorongan yang kuat.', 'N5'),
(4009, '開ける', 'あける', 'untuk membuka', 'to open', 'ဖွင့်ရန်', 'Kelas kata: v1, vt', 'ドアはジムによって開けられます。', 'Pintu dibuka oleh Jim.', 'N5'),
(4010, '上げる', 'あげる', 'untuk memberi', 'to give', 'ပေးရန်', 'Kelas kata: v1, vt', '左手を上げなさい。', 'Angkat tangan kiri Anda.', 'N5'),
(4011, '朝', 'あさ', 'pagi hari', 'morning', 'မနက်ခင်း', 'Kelas kata: n, adv', '朝のラッシュは今がピークだ。', 'Keramaian pagi hari sedang mencapai puncaknya sekarang.', 'N5'),
(4012, '朝ごはん', 'あさごはん', 'sarapan', 'breakfast', 'မနက်စာ', 'Kelas kata: n', '朝ごはんにはなにがよろしいですか。', 'Apa yang kamu inginkan untuk sarapan?', 'N5'),
(4013, 'あさって', 'あさって', 'lusa', 'day after tomorrow', 'သဘက်ခါ', 'Kelas kata: n, adv', 'あさって彼にここへ来てもらうつもりです。', 'Aku akan menyuruhnya datang ke sini lusa.', 'N5'),
(4014, '足', 'あし', 'kaki, kaki', 'foot, leg', 'ခြေ၊ ခြေထောက်', 'Kelas kata: n', 'また足がしびれた。', 'Kakiku tertidur lagi!', 'N5'),
(4015, 'あそこ', 'あそこ', 'di sana', 'over there', 'ဟိုမှာ', 'Kelas kata: pn', '先生、アソコがかゆいんです。', 'Dokter, selangkangan saya terasa gatal.', 'N5'),
(4016, '遊ぶ', 'あそぶ', 'untuk bermain, berkunjung', 'to play, to make a visit', 'ကစားရန်၊ လာရောက်လည်ပတ်ရန်', 'Kelas kata: v5b, vi', 'ビルはよく一人でおもちゃで遊ぶ。', 'Bill sering bermain sendiri dengan mainannya.', 'N5'),
(4017, '暖かい', 'あたたかい', 'hangat', 'warm', 'နွေး', 'Kelas kata: adj-i', 'だんだん暖かくなります。', 'Ini akan menjadi semakin hangat.', 'N5'),
(4018, '頭', 'あたま', 'kepala', 'head', 'ခေါင်း', 'Kelas kata: n', 'アリスは頭に花をさしています。', 'Alice memiliki bunga di rambutnya.', 'N5'),
(4019, 'あちら', 'あちら', 'di sana', 'there', 'အဲဒီမှာ', 'Kelas kata: pn', 'こっちの本はあっちの本よりやさしい。', 'Buku-buku ini lebih mudah daripada buku-buku itu.', 'N5'),
(4020, '厚い', 'あつい', 'baik, dalam, tebal', 'kind, deep, thick', 'ကြင်နာ၊ နက်နဲ၊ ထူ', 'Kelas kata: adj-i', 'それは４ｃｍの厚さです。', 'Tebalnya empat sentimeter.', 'N5'),
(4021, '暑い', 'あつい', 'panas', 'hot', 'ပူတယ်။', 'Kelas kata: adj-i', 'どうして、こんなに暑いのですか。', 'Mengapa panas sekali?', 'N5'),
(4022, '熱い', 'あつい', 'panas saat disentuh', 'hot to the touch', 'ထိဖို့ပူတယ်။', 'Kelas kata: adj-i', '熱いコーヒーを入れてあげましょう。', 'Biarkan aku membuatkanmu secangkir kopi panas.', 'N5'),
(4023, 'あっち', 'あっち', 'di sana', 'over there', 'ဟိုမှာ', 'Kelas kata: pn', 'こっちの本はあっちの本よりやさしい。', 'Buku-buku ini lebih mudah daripada buku-buku itu.', 'N5'),
(4024, '後', 'あと', 'setelahnya', 'afterwards', 'နောက်မှ', 'Kelas kata: n, adj-no', '雨天の後には晴天が来る。', 'Setelah hujan datanglah cuaca cerah.', 'N5'),
(4025, 'あなた', 'あなた', 'kamu', 'you', 'သင်', 'Kelas kata: pn', 'ねえあなたたち行かないで。', 'Jangan pergi, sayang.', 'N5'),
(4026, '兄', 'あに', '(rendah hati) kakak laki-laki', '(humble) older brother', '(နှိမ့်ချ) အကိုကြီး', 'Kelas kata: n', 'これは兄です。かっこいいですね。', 'Ini saudaraku. Tampan, bukan?', 'N5'),
(4027, '姉', 'あね', '(rendah hati) kakak perempuan', '(humble) older sister', '(နှိမ့်ချ) အစ်မ', 'Kelas kata: n', '先月、姉は６ポンドの男の子を生んだ。', 'Bulan lalu saudara perempuan saya melahirkan bayi seberat enam pon.', 'N5'),
(4028, 'あの', 'あの', 'itu di sana', 'that over there', 'ဟိုမှာ', 'Kelas kata: adj-pn', 'あのおいしいワインをなぜ飲まないんだい。', 'Mengapa tidak mencoba anggur lezat itu?', 'N5'),
(4029, 'アパート', 'アパート', 'apartemen', 'apartment', 'တိုက်ခန်း', 'Kelas kata: n', '兄はアパートをさがしています。', 'Adikku sedang mencari apartemen.', 'N5'),
(4030, 'あびる', 'あびる', 'untuk mandi, mandi', 'to bathe, to shower', 'ရေချိုးရန်၊ ရေချိုးရန်', 'Kelas kata: v1, vt', 'その時はシャワーを浴びていた。', 'Saat itu aku sedang mandi.', 'N5'),
(4031, '危ない', 'あぶない', 'berbahaya', 'dangerous', 'အန္တရာယ်ရှိသည်။', 'Kelas kata: adj-i', '間一髪！危ないところでした。', 'Itu hampir saja.', 'N5'),
(4032, '甘い', 'あまい', 'manis', 'sweet', 'ချိုတယ်။', 'Kelas kata: adj-i', 'メアリーにはつい甘くなってしまう。', 'Aku selalu punya titik lemah di hatiku pada Mary.', 'N5'),
(4033, 'あまり', 'あまり', 'tidak terlalu', 'not very', 'သိပ်မဟုတ်ဘူး။', 'Kelas kata: adv', 'この手の本はあまり読まない。', 'Saya jarang membaca buku seperti ini.', 'N5'),
(4034, '飴', 'あめ', 'permen', 'candy', 'သကြားလုံး', 'Kelas kata: n', 'いい子にしていたら、あめをあげよう。', 'Jika kamu gadis yang baik, kamu harus mendapat permen.', 'N5'),
(4035, '洗う', 'あらう', 'untuk mencuci', 'to wash', 'လက်ဆေးရန်', 'Kelas kata: v5u, vt', 'いつこの車は洗われましたか。', 'Kapan mobil ini dicuci?', 'N5'),
(4036, 'ありがとう', 'ありがとう', 'Terima kasih', 'Thank you', 'ကျေးဇူးတင်ပါတယ်။', 'Kelas kata: int', 'はるばる来てくれてありがとう。', 'Senang sekali Anda datang jauh-jauh.', 'N5'),
(4037, 'ある', 'ある', 'menjadi, memiliki (digunakan untuk benda mati)', 'to be, to have (used for inanimate objects)', 'to be, to have (သက်မဲ့အရာဝတ္ထုများအတွက်သုံးသည်)', 'Kelas kata: v5r-i, vi', '話があったら電話をかけて下さい。', 'Jika Anda ingin berbicara dengan saya, silakan hubungi saya.', 'N5'),
(4038, '歩く', 'あるく', 'untuk berjalan', 'to walk', 'လမ်းလျှောက်ရန်', 'Kelas kata: v5k, vi', '歩いて行きますか？それともバスで行きますか？', 'Apakah Anda akan berjalan kaki atau naik bus?', 'N5'),
(4039, 'いい', 'いい', 'bagus', 'good', 'ကောင်းတယ်', 'Kelas kata: adj-ix', 'もう２、３ページ読みさえすればいい。', 'Anda hanya perlu membaca beberapa halaman lagi.', 'N5'),
(4040, '言う', 'いう', 'untuk mengatakan', 'to say', 'ပြောဖို့', 'Kelas kata: v5u, vt', '「みんなひと休みしようぜ」とジョンは言った。', 'John berkata, "Hai teman-teman, ayo istirahat."', 'N5'),
(4041, '家', 'いえ', 'rumah', 'house', 'အိမ်', 'Kelas kata: n', '木立の間に家が見える。', 'Saya melihat sebuah rumah di antara pepohonan.', 'N5'),
(4042, 'いかが', 'いかが', 'bagaimana', 'how', 'ဘယ်လိုလဲ။', 'Kelas kata: adv', 'コンタクトを入れるというのはいかがでしょう？', 'Bagaimana kalau memakai lensa kontak?', 'N5'),
(4043, 'いくつ', 'いくつ', 'berapa banyak?, berapa umurnya?', 'how many?, how old?', 'အသက်ဘယ်လောက်လဲ?', 'Kelas kata: adv', 'あなたのお父さんはおいくつですか。', 'Berapa umur ayahmu?', 'N5'),
(4044, 'いくら', 'いくら', 'berapa harganya?', 'how much?', 'ဘယ်လောက်ပါလဲ?', 'Kelas kata: n, adv', 'このハンカチはいくらですか。', 'Berapa harga saputangan ini?', 'N5'),
(4045, '池', 'いけ', 'kolam', 'pond', 'ရေကန်', 'Kelas kata: n', 'その池にはほとんど水がない。', 'Hanya ada sedikit air di kolam.', 'N5'),
(4046, '医者', 'いしゃ', 'dokter medis', 'medical doctor', 'ဆေးဆရာဝန်', 'Kelas kata: n', '医者になるつもりだったのですが。', 'Saya berniat menjadi seorang dokter.', 'N5'),
(4047, 'いす', 'いす', 'kursi', 'chair', 'ကုလားထိုင်', 'Kelas kata: n', 'ちょっと椅子をずらしてくれない？', 'Bisakah Anda memindahkan kursinya sedikit?', 'N5'),
(4048, '忙しい', 'いそがしい', 'sibuk, kesal', 'busy, irritated', 'အလုပ်များခြင်း၊ စိတ်တိုခြင်း။', 'Kelas kata: adj-i', '忙しくてそれどころじゃないよ。', 'Aku tidak punya waktu untuk itu sekarang.', 'N5'),
(4049, '痛い', 'いたい', 'menyakitkan', 'painful', 'နာကျင်သည်။', 'Kelas kata: adj-i', 'ほかに痛いところはありますか。', 'Apakah Anda merasakan sakit di bagian tubuh Anda yang lain?', 'N5'),
(4050, 'いただきます', 'いただきます', 'ungkapan terima kasih sebelum makan', 'expression of gratitude before meals', 'အစာမစားမီ ကျေးဇူးတင်ကြောင်းဖော်ပြခြင်း။', 'Kelas kata: exp', '８ドル５０セントいただきます。', '$8,50, tolong.', 'N5'),
(4051, '一', 'いち', 'satu', 'one', 'တစ်ခု', 'Kelas kata: num, pref', 'これは東京一のインドレストランです。', 'Ini adalah restoran India terbaik di Tokyo.', 'N5'),
(4052, '一日', 'いちにち', 'suatu hari, di awal bulan', 'one day, first of month', 'တစ်ရက်၊ လ၏ပထမ', 'Kelas kata: n', '一日で５００ドルつかってしまった。', 'Saya telah menghabiskan $500 sehari.', 'N5'),
(4053, 'いちばん', 'いちばん', 'terbaik, pertama', 'best, first', 'အကောင်းဆုံး၊ ပထမ', 'Kelas kata: n, adj-no', 'このリンゴがいちばんおいしい。', 'Ini adalah apel yang paling enak.', 'N5'),
(4054, 'いつ', 'いつ', 'kapan', 'when', 'ဘယ်အချိန်မှာ', 'Kelas kata: pn', 'いつ旅行においでになりますか。', 'Kapan Anda akan melakukan perjalanan?', 'N5'),
(4055, '五日', 'いつか', 'lima hari, hari kelima', 'five days, fifth day', 'ငါးရက်၊ ပဉ္စမနေ့', 'Kelas kata: n', '１月５日から１月１５日までおねがいします。', 'Tolong, dari tanggal 5 hingga 15 Januari.', 'N5'),
(4056, '一緒', 'いっしょ', 'bersama-sama', 'together', 'အတူ', 'Kelas kata: n', '「ご一緒してもいいですか」「もちろんです」', '"Boleh saya ikut?" "Tentu saja."', 'N5'),
(4057, '五つ', 'いつつ', 'lima', 'five', 'ငါး', 'Kelas kata: num', 'この箱にはリンゴが五つ入っている。', 'Kotak ini berisi lima buah apel.', 'N5'),
(4058, 'いつも', 'いつも', 'selalu', 'always', 'အမြဲတမ်း', 'Kelas kata: adv', 'あの子はいつもニコニコしている。', 'Dia selalu tersenyum.', 'N5'),
(4059, '犬', 'いぬ', 'anjing', 'dog', 'ခွေး', 'Kelas kata: n', 'その犬はかみついたりしませんよ。', 'Anjing itu tidak akan menyakitimu.', 'N5'),
(4060, '今', 'いま', 'sekarang', 'now', 'ယခု', 'Kelas kata: n, adj-no', '今のアナウンスは何だったのですか。', 'Apa yang baru saja disampaikan dalam pengumuman itu?', 'N5'),
(4061, '意味', 'いみ', 'artinya', 'meaning', 'အဓိပ္ပါယ်', 'Kelas kata: n, vs', 'その語にはいくつかの意味がある。', 'Kata tersebut mempunyai beberapa arti.', 'N5'),
(4062, '妹', 'いもうと', '(rendah hati) adik perempuan', '(humble) younger sister', '(နှိမ့်ချ) ညီမငယ်', 'Kelas kata: n', '男の子は妹を見下ろしがちである。', 'Anak laki-laki cenderung memandang rendah adik perempuannya.', 'N5'),
(4063, '嫌', 'いや', 'tidak menyenangkan', 'unpleasant', 'မနှစ်မြို့ဖွယ်', 'Kelas kata: adj-na', '毎日うっとうしくていやですね。', 'Bukankah kamu benci cuaca seperti ini?', 'N5'),
(4064, '入口', 'いりぐち', 'pintu masuk', 'entrance', 'ဝင်ပေါက်', 'Kelas kata: n', '１台の車が入り口に止まった。', 'Sebuah mobil berhenti di pintu masuk.', 'N5'),
(4065, 'いる', 'いる', 'menjadi, memiliki (digunakan untuk manusia dan hewan)', 'to be, to have (used for people and animals)', 'to be, to have (လူနှင့်တိရစ္ဆာန်များအတွက်သုံးသည်)', 'Kelas kata: aux-v, v1', 'すっかり食べ終わってはいない。', 'Aku belum selesai makan.', 'N5'),
(4066, '要る', 'いる', 'membutuhkan', 'to need', 'လိုအပ်သည်။', 'Kelas kata: v5r, vi', '今のところお金はいらない。', 'Saya tidak butuh uang saat ini.', 'N5'),
(4067, '入れる', 'いれる', 'untuk dimasukkan', 'to put in', 'ထည့်ရန်', 'Kelas kata: v1, vt', 'それは引き出しに入れておきました。', 'Saya menaruhnya di laci.', 'N5'),
(4068, '色', 'いろ', 'warna', 'colour', 'အရောင်', 'Kelas kata: n', 'カメレオンはどんな色にでもなれる。', 'Bunglon bisa berubah warna apa saja.', 'N5'),
(4069, 'いろいろ', 'いろいろ', 'berbagai', 'various', 'အမျိုးမျိုး', 'Kelas kata: adj-na, adj-no', '先生といってもいろいろある。', 'Ada guru dan kemudian ada guru.', 'N5'),
(4070, '上', 'うえ', 'di atas', 'on top of', 'အပေါ်မှ', 'Kelas kata: n', 'テーブルの上にリンゴがあります。', 'Ada sebuah apel di atas meja.', 'N5'),
(4071, '後ろ', 'うしろ', 'di belakang', 'behind', 'နောက်ကွယ်', 'Kelas kata: n, adj-no', '校長が先生の後ろから入ってきた。', 'Kepala sekolah masuk setelah guru.', 'N5'),
(4072, '薄い', 'うすい', 'kurus, lemah', 'thin, weak', 'ပျော့ပျောင်း', 'Kelas kata: adj-i', 'コーヒーは薄いのが好きです。', 'Saya ingin kopi saya lemah.', 'N5'),
(4073, '歌', 'うた', 'lagu', 'song', 'သီချင်း', 'Kelas kata: n', '歌がうまければいいのになあ。', 'Saya berharap saya menjadi penyanyi yang baik.', 'N5'),
(4074, '歌う', 'うたう', 'untuk bernyanyi', 'to sing', 'သီချင်းဆိုရန်', 'Kelas kata: v5u, vt', 'ジョンはステージで何を歌いましたか。', 'Apa yang John nyanyikan di atas panggung?', 'N5'),
(4075, '生まれる', 'うまれる', 'untuk dilahirkan', 'to be born', 'မွေးဖွားရန်', 'Kelas kata: v1, vi', 'どんぐりからオークが生まれる。', 'Dari biji pohon ek muncul pohon ek.', 'N5'),
(4076, '海', 'うみ', 'laut', 'sea', 'ပင်လယ်', 'Kelas kata: n', '何としても海をひと目みたいものだ。', 'Aku rindu melihat laut.', 'N5'),
(4077, '売る', 'うる', 'untuk menjual', 'to sell', 'ရောင်းရန်', 'Kelas kata: v5r, vt', 'トムはメアリーにバイクを売った。', 'Tom menjual sepeda motornya kepada Mary.', 'N5'),
(4078, '煩い', 'うるさい', 'berisik, menjengkelkan', 'noisy, annoying', 'ဆူညံခြင်း၊ စိတ်အနှောက်အယှက်ဖြစ်ခြင်း။', 'Kelas kata: adj-i', 'あの子はなんてうるさい子だろう。', 'Sungguh merepotkan anak itu!', 'N5'),
(4079, '上着', 'うわぎ', 'jaket', 'jacket', 'ဂျာကင်အင်္ကျီ', 'Kelas kata: n', 'ドアのそばのかぎに上着をかけなさい。', 'Gantungkan jaket Anda pada pengait di dekat pintu.', 'N5'),
(4080, '絵', 'え', 'gambar', 'picture', 'ပုံ', 'Kelas kata: n', '絵がテーブルの上にかかっている。', 'Gambar itu tergantung di atas meja.', 'N5'),
(4081, '映画館', 'えいがかん', 'bioskop', 'cinema', 'ရုပ်ရှင်ရုံ', 'Kelas kata: n', 'その映画館は人々でいっぱいだった。', 'Bioskop dipenuhi orang.', 'N5'),
(4082, '英語', 'えいご', 'bahasa Inggris', 'English language', 'အင်္ဂလိပ်ဘာသာစကား', 'Kelas kata: n', 'アメリカでは英語を話します。', 'Mereka berbicara bahasa Inggris di Amerika.', 'N5'),
(4083, 'ええ', 'ええ', 'ya', 'yes', 'ဟုတ်တယ်', 'Kelas kata: int', '「テニスをしましょうか」「ええ」', '“Ayo bermain tenis.” "Ya, ayo."', 'N5'),
(4084, 'エレベーター', 'エレベーター', 'lift', 'elevator', 'ဓာတ်လှေကား', 'Kelas kata: n', 'エレベーターはどこですか。', 'Dimana liftnya?', 'N5'),
(4085, '鉛筆', 'えんぴつ', 'pensil', 'pencil', 'ခဲတံ', 'Kelas kata: n', 'えんぴつであなたの名前を書きなさい。', 'Tulis nama Anda dengan pensil.', 'N5'),
(4086, 'おいしい', 'おいしい', 'lezat', 'delicious', 'အရသာ', 'Kelas kata: adj-i', 'おいしい食事をありがとう。', 'Terima kasih untuk makanannya yang lezat.', 'N5'),
(4087, '多い', 'おおい', 'banyak', 'many', 'အများကြီး', 'Kelas kata: adj-i', 'この学校は男子よりも女子が多い。', 'Jumlah anak perempuan lebih banyak dibandingkan anak laki-laki di sekolah ini.', 'N5'),
(4088, '大きな', 'おおきな', 'besar', 'big', 'ကြီးတယ်။', 'Kelas kata: adj-pn', 'それらはとても大きなりんごです。', 'Itu adalah apel yang sangat besar.', 'N5'),
(4089, '大勢', 'おおぜい', 'sejumlah besar orang', 'great number of people', 'လူပေါင်းများစွာ', 'Kelas kata: n, adj-no', '大ぜいの人たちがいた。', 'Ada banyak orang.', 'N5'),
(4090, 'お母さん', 'おかあさん', '(terhormat) ibu', '(honorable) mother', '(လေးစားရပါသော) အမေ', 'Kelas kata: n', 'お母さんに口答えしてはいけませんよ。', 'Jangan balas ibumu.', 'N5'),
(4091, 'お菓子', 'おかし', 'permen, permen', 'sweets, candy', 'သကြားလုံး၊', 'Kelas kata: n', 'もうすこしお菓子を食べませんか。', 'Maukah kamu minta kue lagi?', 'N5'),
(4092, '起きる', 'おきる', 'untuk bangun', 'to get up', 'ထရန်', 'Kelas kata: v1, vi', 'お子さんはまだ起きているのですか。', 'Apakah anak itu masih bangun?', 'N5'),
(4093, '置く', 'おく', 'untuk menempatkan', 'to put', 'တင်ရန်', 'Kelas kata: v5k, vt', 'それをテーブルの上に置きなさい。', 'Letakkan di atas meja.', 'N5'),
(4094, '奥さん', 'おくさん', 'istri (terhormat).', '(honorable) wife', '(ဂုဏ်ရှိသော) မယား', 'Kelas kata: n', '奥さんがどこかに出かけているらしいから。', 'Saya pikir istrinya akan pergi ke luar kota.', 'N5'),
(4095, 'お酒', 'おさけ', 'alkohol, anggur beras', 'alcohol, rice wine', 'အရက်၊ ဆန်ဝိုင်', 'Kelas kata: n', 'マイクはお酒をやめたの？', 'Apakah Mike sudah tidak minum lagi?', 'N5'),
(4096, 'お皿', 'おさら', 'piring, piring', 'plate, dish', 'ပန်းကန်၊ ပန်းကန်', 'Kelas kata: n', 'スープを入れるくぼんだお皿がありますか。', 'Apakah Anda punya mangkuk untuk sup?', 'N5'),
(4097, 'お祖父さん', 'おじいさん', 'kakek, warga negara senior laki-laki', 'grandfather, male senior citizen', 'အဖိုး၊ အမျိုးသား၊ သက်ကြီးရွယ်အို', 'Kelas kata: n', 'おじいさんはとてもゆっくりと話す。', 'Kakek berbicara sangat lambat.', 'N5'),
(4098, '教える', 'おしえる', 'untuk mengajar, untuk memberitahu', 'to teach, to tell', 'သင်ကြားရန်၊ ပြောပြရန်', 'Kelas kata: v1, vt', '生年月日を教えてくださいますか？', 'Bolehkah saya mengetahui tanggal lahir Anda?', 'N5'),
(4099, '押す', 'おす', 'untuk mendorong, untuk menginjak sesuatu', 'to push, to stamp something', 'တွန်းရန်၊ တစ်ခုခုကို တံဆိပ်ရိုက်ရန်', 'Kelas kata: v5s, vt', 'シャッターを押してくれますか。', 'Bisakah Anda menekan tombol ini?', 'N5'),
(4100, '遅い', 'おそい', 'terlambat, lambat', 'late, slow', 'နောက်ကျတယ်၊ နှေးတယ်။', 'Kelas kata: adj-i', '遅くなっても何もないよりはまし。', 'Lebih baik terlambat daripada tidak sama sekali.', 'N5'),
(4101, 'お茶', 'おちゃ', 'teh hijau', 'green tea', 'လက်ဖက်စိမ်း', 'Kelas kata: n', '３時はお茶にしよう。', 'Mari kita minum teh pada jam 3:00.', 'N5'),
(4102, 'お手洗い', 'おてあらい', 'kamar mandi', 'bathroom', 'ရေချိုးခန်း', 'Kelas kata: n', 'お手洗いはどこですか。', 'Dimana toiletnya?', 'N5'),
(4103, 'お父さん', 'おとうさん', '(yang terhormat) ayah', '(honorable) father', '(ဂုဏ်) ဖခင်', 'Kelas kata: n', 'お父さんからことづけがあります。', 'Aku punya pesan untukmu dari ayahmu.', 'N5'),
(4104, '弟', 'おとうと', 'adik laki-laki', 'younger brother', 'ညီငယ်', 'Kelas kata: n', '弟のことなんかほっときなさい。', 'Tinggalkan dia sendiri.', 'N5'),
(4105, '男', 'おとこ', 'laki-laki', 'man', 'လူ', 'Kelas kata: n, n-pref', 'その男とつきあってはいけないよ。', 'Anda pasti tidak ada hubungannya dengan pria itu.', 'N5'),
(4106, '男の子', 'おとこのこ', 'anak laki-laki', 'boy', 'ကောင်လေး', 'Kelas kata: exp, n', 'あのハンサムな男の子を見て。', 'Lihatlah anak laki-laki tampan itu.', 'N5'),
(4107, '一昨日', 'おととい', 'sehari sebelum kemarin', 'day before yesterday', 'မနေ့က မတိုင်ခင်', 'Kelas kata: n, adv', '一昨日、彼は学校を休んだかもしれない。', 'Dia mungkin tidak masuk sekolah kemarin lusa.', 'N5'),
(4108, '一昨年', 'おととし', 'tahun lalu', 'year before last', 'မနှစ်က', 'Kelas kata: n, adv', '彼女は、一昨年よりもはるかに暮らし向きがよい。', 'Keadaannya jauh lebih baik dibandingkan tahun sebelumnya.', 'N5'),
(4109, '大人', 'おとな', 'dewasa', 'adult', 'လူကြီး', 'Kelas kata: n, adj-no', '大人だけこの映画が見える。', 'Hanya orang dewasa saja yang boleh menonton film ini.', 'N5'),
(4110, 'おなか', 'おなか', 'perut', 'stomach', 'ဗိုက်', 'Kelas kata: n', '何かおなかに入れてから出かけなさい。', 'Anda harus memasukkan sesuatu ke dalam perut Anda sebelum pergi.', 'N5'),
(4111, '同じ', 'おなじ', 'sama', 'same', 'အတူတူပါပဲ။', 'Kelas kata: adj-f, adj-na', 'この木はあの木とほぼ同じ高さだ。', 'Pohon ini tingginya kira-kira sama dengan pohon itu.', 'N5'),
(4112, 'お兄さん', 'おにいさん', '(terhormat) kakak laki-laki', '(honorable) older brother', '(လေးစားရပါသော) အကိုကြီး', 'Kelas kata: n', '私はあなたのお兄さんより年上です。', 'Aku lebih tua dari kakakmu.', 'N5'),
(4113, 'お姉さん', 'おねえさん', '(terhormat) kakak perempuan', '(honorable) older sister', '(ဂုဏ်ယူပါတယ်) အစ်မ', 'Kelas kata: n', 'あなたのお姉さんは今何をしているの？', 'Apa yang kakak perempuanmu lakukan sekarang?', 'N5'),
(4114, 'お願いします', 'おねがいします', 'tolong', 'please', 'ကျေးဇူးပြု၍', 'Kelas kata: exp', 'ファーストクラスでお願いします。', 'Saya ingin melakukan perjalanan kelas satu.', 'N5'),
(4115, 'おばあさん', 'おばあさん', 'nenek, warga negara senior perempuan', 'grandmother, female senior-citizen', 'အဘွား၊ အမျိုးသမီး သက်ကြီးရွယ်အို', 'Kelas kata: n', 'トムのおばあさんは元気そうですよ。', 'Nenek Tom terlihat sehat.', 'N5'),
(4116, '伯母さん', 'おばさん', 'bibi', 'aunt', 'အဒေါ်', 'Kelas kata: n', '叔母さんを訪ねた時はすごいごちそうだったね。', 'Sungguh pesta yang luar biasa ketika kami mengunjungi bibiku!', 'N5'),
(4117, 'おはよう', 'おはよう', '(singkatan) Selamat pagi', '(abbreviation) Good morning', '(အတိုကောက်) မင်္ဂလာနံနက်ခင်းပါ။', 'Kelas kata: int', 'おはよう。ご飯をよそっても良いかしら？', 'Pagi. Haruskah aku menyiapkannya?', 'N5'),
(4118, 'お風呂', 'おふろ', 'mandi', 'bath', 'ရေချိုး', 'Kelas kata: n', '私はほとんど毎日お風呂に入ります。', 'Saya mandi hampir setiap hari.', 'N5'),
(4119, 'お弁当', 'おべんとう', 'kotak makan siang', 'boxed lunch', 'ထမင်းထုပ်', 'Kelas kata: n', '彼は今日、お弁当を持って来た。', 'Dia membawa bekal makan siangnya hari ini.', 'N5'),
(4120, '覚える', 'おぼえる', 'untuk diingat', 'to remember', 'မှတ်မိဖို့', 'Kelas kata: v1, vt', '日本語は外人にとって覚えにくい。', 'Sulit bagi orang asing untuk belajar bahasa Jepang.', 'N5'),
(4121, 'おまわりさん', 'おまわりさん', 'istilah ramah untuk polisi', 'friendly term for policeman', 'ရဲသားအတွက် ဖော်ရွေသော အသုံးအနှုန်း', 'Kelas kata: n', 'すみません、おまわりさん。ここはどこですか。', 'Permisi, petugas, dimana kita sekarang?', 'N5'),
(4122, '重い', 'おもい', 'berat', 'heavy', 'လေးလံ', 'Kelas kata: adj-i', 'トムはジャックよりも１０ポンド重い。', 'Tom lebih berat sepuluh pon dari Jack.', 'N5'),
(4123, 'おもしろい', 'おもしろい', 'menarik', 'interesting', 'စိတ်ဝင်စားစရာ', 'Kelas kata: adj-i', 'スケートはとてもおもしろかった。', 'Kami bersenang-senang bermain skating.', 'N5'),
(4124, '泳ぐ', 'およぐ', 'untuk berenang', 'to swim', 'ရေကူးရန်', 'Kelas kata: v5g, vi', 'トムはすぐに泳げるようになるよ。', 'Tom akan segera bisa berenang.', 'N5'),
(4125, '降りる', 'おりる', 'untuk turun, untuk turun', 'to get off, to descend', 'ဆင်းရန်၊ ဆင်းရန်', 'Kelas kata: v1, vi', 'ここで降りましょう。', 'Ayo turun dari sini.', 'N5'),
(4126, '終る', 'おわる', 'untuk menyelesaikan', 'to finish', 'ပြီးအောင်', 'Kelas kata: v5r, vi', 'そのコンサートは十時に終わった。', 'Konser berakhir pada pukul sepuluh.', 'N5'),
(4127, '女', 'おんな', 'wanita', 'woman', 'မိန်းမ', 'Kelas kata: n, n-pref', '人は男か女のどちらかである。', 'Seseorang bisa laki-laki atau perempuan.', 'N5'),
(4128, '女の子', 'おんなのこ', 'gadis', 'girl', 'မိန်းကလေး', 'Kelas kata: exp, n', '女の子はほとんどみんなやさしい。', 'Hampir semua gadis itu baik.', 'N5'),
(4129, '外国', 'がいこく', 'negara asing', 'foreign country', 'နိုင်ငံခြားတိုင်းပြည်', 'Kelas kata: n, adj-no', 'あなたは外国の本を持っていますか。', 'Apakah Anda punya buku asing?', 'N5'),
(4130, '外国人', 'がいこくじん', 'orang asing', 'foreigner', 'နိုင်ငံခြားသား', 'Kelas kata: n', 'その外国人はかなりうまく日本語を話す。', 'Orang asing itu berbicara bahasa Jepang dengan cukup baik.', 'N5'),
(4131, '階段', 'かいだん', 'tangga', 'stairs', 'လှေကား', 'Kelas kata: n', 'その階段を上ってはいけません。', 'Anda tidak boleh menaiki tangga.', 'N5'),
(4132, '買い物', 'かいもの', 'berbelanja', 'shopping', 'စျေးဝယ်', 'Kelas kata: n, vs', '１日おきに買い物に行く。', 'Saya pergi berbelanja setiap hari.', 'N5'),
(4133, '返す', 'かえす', 'untuk mengembalikan sesuatu', 'to return something', 'တစ်ခုခုပြန်လုပ်ဖို့', 'Kelas kata: v5s, vt', '車はいつ返したらいいでしょうか。', 'Kapan saya harus mengembalikan mobil?', 'N5'),
(4134, '帰る', 'かえる', 'untuk kembali', 'to go back', 'ပြန်သွားပါ။', 'Kelas kata: v5r, vi', '「帰ろ」「マックよってかない？」', 'Ayo kembali. "Bagaimana kalau kita mampir ke McDonald''s?"', 'N5'),
(4135, 'かかる', 'かかる', 'untuk mengambil waktu atau uang', 'to take time or money', 'အချိန် သို့မဟုတ် ငွေယူရန်', 'Kelas kata: v5r, vi', 'どうしたらエンジンがかかりますか。', 'Bagaimana cara menghidupkan mesin?', 'N5'),
(4136, 'かぎ', 'かぎ', 'kunci', 'key', 'သော့', 'Kelas kata: n', '車のカギをなくしちゃった。', 'Aku kehilangan kunci mobilku.', 'N5'),
(4137, 'かける', 'かける', 'untuk menelepon melalui telepon', 'to call by phone', 'ဖုန်းဖြင့်ခေါ်ရန်', 'Kelas kata: v1, vt', '１０円で電話がかけられますか。', 'Bolehkah saya menelepon seharga sepuluh yen?', 'N5'),
(4138, '傘', 'かさ', 'payung', 'umbrella', 'ထီး', 'Kelas kata: n', 'タクシーに傘を忘れてしまった。', 'Aku meninggalkan payungku di dalam taksi.', 'N5'),
(4139, '貸す', 'かす', 'untuk meminjamkan', 'to lend', 'ချေးရန်', 'Kelas kata: v5s, vt', 'ホッチキスを貸してくれませんか。', 'Maukah Anda meminjamkan saya stapler?', 'N5'),
(4140, '風', 'かぜ', 'angin', 'wind', 'လေ', 'Kelas kata: n', 'カーテンが風になびいた。', 'Tirai tertiup angin.', 'N5'),
(4141, '風邪', 'かぜ', 'pilek', 'a cold', 'အအေးမိ', 'Kelas kata: n', 'ただの風邪でしょう。', 'Anda mungkin hanya masuk angin.', 'N5'),
(4142, '方', 'かた', 'orang, cara melakukan', 'person, way of doing', 'လူ၊ လုပ်နည်း', 'Kelas kata: n', 'こちらはあなたがお話しになるお方です。', 'Inilah pria yang bisa Anda ajak bicara.', 'N5'),
(4143, 'カップ', 'カップ', 'cangkir', 'cup', 'ခွက်', 'Kelas kata: n', 'テーブルの上にカップがある。', 'Ada cangkir di atas meja.', 'N5'),
(4144, '家庭', 'かてい', 'rumah tangga', 'household', 'အိမ်သား', 'Kelas kata: n', '食事は家庭で食べますか、外食ですか。', 'Apakah Anda makan di rumah atau makan di luar?', 'N5'),
(4145, '角', 'かど', 'sebuah sudut', 'a corner', 'ထောင့်တစ်ခု', 'Kelas kata: n', '角のテーブルがいいのですが。', 'Bisakah kita minta meja di pojok?', 'N5'),
(4146, 'かばん', 'かばん', 'tas, keranjang', 'bag, basket', 'အိတ်၊ တောင်း', 'Kelas kata: n', 'これはジェーンさんのかばんです。', 'Ini tas Jane.', 'N5'),
(4147, '花瓶', 'かびん', 'sebuah vas', 'a vase', 'ပန်းအိုး', 'Kelas kata: n', '花びんに水を入れなさい。', 'Masukkan air ke dalam vas.', 'N5'),
(4148, '紙', 'かみ', 'kertas', 'paper', 'စာရွက်', 'Kelas kata: n', '紙は木から作られる。', 'Kertas terbuat dari kayu.', 'N5'),
(4149, 'カメラ', 'カメラ', 'kamera', 'camera', 'ကင်မရာ', 'Kelas kata: n', 'おじさんがぼくにカメラをくれました。', 'Paman saya memberi saya kamera.', 'N5'),
(4150, '火曜日', 'かようび', 'Selasa', 'Tuesday', 'အင်္ဂါ', 'Kelas kata: n, adv', '火曜日に国会が開かれる。', 'Diet akan bertemu pada hari Selasa.', 'N5'),
(4151, 'あ', 'あ', 'Ah', 'Ah', 'ဩ', 'Kelas kata: int', 'あ！まずい！ガソリンが切れてきた。', 'Oh tidak! Kami kehabisan bensin.', 'N4'),
(4152, 'ああ', 'ああ', 'seperti itu', 'like that', 'ကြိုက်တယ်။', 'Kelas kata: adv', 'ある人はこうだと言い、またある人はああだと言う。', 'Yang satu mengatakan ini, yang lain mengatakan itu.', 'N4'),
(4153, 'あいさつする', 'あいさつする', 'untuk menyapa', 'to greet', 'နှုတ်ဆက်ရန်', 'Kelas kata: n, vs', '私にあいさつするような人はいない。', 'Tidak ada seorang pun yang menyambut saya.', 'N4'),
(4154, '間', 'あいだ', 'sebuah spasi', 'a space', 'နေရာတစ်ခု', 'Kelas kata: n', '二人の間がしっくり行かない。', 'Mereka tidak rukun.', 'N4'),
(4155, '合う', 'あう', 'untuk mencocokkan', 'to match', 'ကိုက်ညီရန်', 'Kelas kata: v5u, vi', 'このチョッキは前が合わない。', 'Rompi ini tidak akan bertemu di bagian depan.', 'N4'),
(4156, 'あかちゃん', 'あかちゃん', 'bayi', 'infant', 'မွေးကင်းစကလေး', 'Kelas kata: n', 'その赤ちゃんは歯が生えはじめている。', 'Bayi itu sedang memotong giginya.', 'N4'),
(4157, '上がる', 'あがる', 'untuk bangkit', 'to rise', 'ထရန်', 'Kelas kata: v5r, vi', '車のバッテリーが上がってるよ。', 'Aki mobil sudah mati.', 'N4'),
(4158, '赤ん坊', 'あかんぼう', 'sayang', 'baby', 'ကလေး', 'Kelas kata: n', 'うちの赤ん坊は口をきくようになってきました。', 'Bayi kami sedang belajar berbicara.', 'N4'),
(4159, '空く', 'あく', 'untuk membuka, menjadi kosong', 'to open, to become empty', 'ဖွင့်ရန်၊ အလွတ်ဖြစ်လာရန်', 'Kelas kata: v5k, vi', '放課後は空いてますか？', 'Apakah kamu ada waktu luang sepulang sekolah?', 'N4'),
(4160, 'アクセサリー', 'アクセサリー', 'aksesori', 'accessory', 'ဆက်စပ်ပစ္စည်း', 'Kelas kata: n', 'この服にはどんなアクセサリーを付けるの？', 'Perhiasan macam apa yang akan Anda kenakan dengan gaun ini?', 'N4'),
(4161, '浅い', 'あさい', 'dangkal, dangkal', 'shallow, superficial', 'တိမ်၊ အပေါ်ယံ', 'Kelas kata: adj-i', 'この川はあそこで浅くなっている。', 'Sungai ini menjadi dangkal pada saat itu.', 'N4'),
(4162, '味', 'あじ', 'rasa', 'flavour', 'အရသာ', 'Kelas kata: n', 'このチーズはピリッとした味がする。', 'Keju ini memiliki rasa yang tajam.', 'N4'),
(4163, 'アジア', 'アジア', 'Asia', 'Asia', 'အာရှ', 'Kelas kata: n', 'ヨーロッパはアジアより人口が少ない。', 'Eropa memiliki populasi yang lebih kecil dibandingkan Asia.', 'N4'),
(4164, '遊び', 'あそび', 'bermain', 'play', 'ကစားပါ။', 'Kelas kata: n', '今度の旅行は仕事じゃなくて遊びです。', 'Perjalanan kami berikutnya adalah untuk kesenangan, bukan untuk bekerja.', 'N4'),
(4165, '集まる', 'あつまる', 'untuk berkumpul', 'to gather', 'စုဆောင်းရန်', 'Kelas kata: v5r, vi', '通りに人がたくさん集まっている。', 'Ada kerumunan orang di jalan.', 'N4'),
(4166, '集める', 'あつめる', 'untuk mengumpulkan sesuatu', 'to collect something', 'တစ်ခုခုကိုစုဆောင်းရန်', 'Kelas kata: v1, vt', '毎週月曜日にゴミを集めにきます。', 'Mereka mengumpulkan sampah kami setiap hari Senin.', 'N4'),
(4167, 'アナウンサー', 'アナウンサー', 'penyiar', 'announcer', 'ကြေညာသူ', 'Kelas kata: n', 'アナウンサーは早口が出来る。', 'Penyiar dapat berbicara dengan cepat.', 'N4'),
(4168, 'アフリカ', 'アフリカ', 'Afrika', 'Africa', 'အာဖရိက', 'Kelas kata: n', 'アフリカにはたくさんの自然がある。', 'Afrika memiliki banyak alam.', 'N4'),
(4169, 'アメリカ', 'アメリカ', 'Amerika', 'America', 'အမေရိက', 'Kelas kata: n', '私は去年の秋にアメリカにいった。', 'Saya pergi ke Amerika musim gugur lalu.', 'N4'),
(4170, '謝る', 'あやまる', 'untuk meminta maaf', 'to apologize', 'တောင်းပန်ရန်', 'Kelas kata: v5r, vt', '私は彼女に謝らなければならない。', 'Saya harus meminta maaf padanya.', 'N4'),
(4171, 'アルコール', 'アルコール', 'alkohol', 'alcohol', 'အရက်', 'Kelas kata: n', 'このビールはアルコール分が５％だ。', 'Bir ini mengandung 5% alkohol.', 'N4'),
(4172, '安心', 'あんしん', 'lega', 'relief', 'ကယ်ဆယ်ရေး', 'Kelas kata: n, adj-na', 'あいつに仕事を任せておけば安心だ。', 'Anda dapat mempercayai dia dengan pekerjaan apa pun.', 'N4'),
(4173, 'あんな', 'あんな', 'seperti itu', 'such', 'အဲဒီလို', 'Kelas kata: adj-pn', 'あんないい男そうそういないぞ！！', 'Tidak banyak pria sebaik itu!', 'N4'),
(4174, '以下', 'いか', 'kurang dari', 'less than', 'ထက်နည်းတယ်။', 'Kelas kata: n-suf', 'それは千円以下では買えません。', 'Anda tidak dapat membelinya di bawah 1.000 yen.', 'N4'),
(4175, '以外', 'いがい', 'dengan pengecualian', 'with the exception of', 'ခြွင်းချက်', 'Kelas kata: n-suf', 'その仕事以外ならなんでもやる。', 'Saya akan melakukan apa pun kecuali pekerjaan itu.', 'N4'),
(4176, '医学', 'いがく', 'ilmu kedokteran', 'medical science', 'ဆေးသိပ္ပံ', 'Kelas kata: n', '二人の医者が医学の話をしていた。', 'Dua dokter sedang berbicara di toko.', 'N4'),
(4177, '生きる', 'いきる', 'untuk hidup', 'to live', 'အသက်ရှင်ရန်', 'Kelas kata: v1, vi', '生きるものはすべていつかは死ぬ。', 'Semua makhluk hidup suatu saat akan mati.', 'N4'),
(4178, '意見', 'いけん', 'pendapat', 'opinion', 'ထင်မြင်ချက်', 'Kelas kata: n', 'ここではどんどん意見をおっしゃってかまいません。', 'Anda dapat berbicara dengan bebas di sini.', 'N4'),
(4179, '石', 'いし', 'batu', 'stone', 'ကျောက်', 'Kelas kata: n', '私にはこの石は持ち上がらない。', 'Saya tidak bisa mengangkat batu ini.', 'N4'),
(4180, 'いじめる', 'いじめる', 'untuk menggoda', 'to tease', 'ကျီစားရန်', 'Kelas kata: v1, vt', '彼はよく友人をいじめたものだ。', 'Dia sering menindas teman-temannya.', 'N4'),
(4181, '以上', 'いじょう', 'lebih dari itu, ini saja', 'more than, this is all', 'ဒါထက် ပိုပါတယ်။', 'Kelas kata: n-suf', '以上ですか？', 'Apakah itu saja?', 'N4'),
(4182, '急ぐ', 'いそぐ', 'untuk bergegas', 'to hurry', 'မြန်မြန်လုပ်', 'Kelas kata: v5g, vi', 'ニックはバスに間に合うように急いだ。', 'Nick bergegas mengejar bus.', 'N4'),
(4183, '致す', 'いたす', '(rendah hati) untuk melakukan', '(humble) to do', '(နှိမ့်ချခြင်း) ပြုခြင်း။', 'Kelas kata: v5s, vt', 'お取り寄せいたしましょうか。', 'Apakah Anda ingin saya memesannya?', 'N4'),
(4184, 'いただく', 'いただく', '(rendah hati) untuk menerima', '(humble) to receive', 'ခံယူရန် (နှိမ့်ချခြင်း)', 'Kelas kata: v5k, vt', '九時に来ていただきたいのですが。', 'Saya ingin Anda datang jam sembilan.', 'N4'),
(4185, '一度', 'いちど', 'sekali', 'once', 'တစ်ကြိမ်', 'Kelas kata: n, adv', '人間はこの世に一度しか生きない。', 'Seseorang hidup hanya sekali di dunia.', 'N4'),
(4186, '一生懸命', 'いっしょうけんめい', 'dengan usaha sekuat tenaga', 'with utmost effort', 'အစွမ်းကုန်ကြိုးစားအားထုတ်မှု', 'Kelas kata: adv, adj-na', 'もっと一生懸命勉強すべきだったのに。', 'Anda seharusnya bekerja lebih keras.', 'N4'),
(4187, 'いっぱい', 'いっぱい', 'penuh', 'full', 'အပြည့်', 'Kelas kata: adj-na, adj-no', 'このボトルに水をいっぱい入れてください。', 'Silakan isi botol ini dengan air.', 'N4'),
(4188, '糸', 'いと', 'benang', 'thread', 'ချည်', 'Kelas kata: n, n-suf', '長い糸はからまりやすい。', 'Benang panjang mudah kusut.', 'N4'),
(4189, '以内', 'いない', 'di dalam', 'within', 'အတွင်း', 'Kelas kata: n, n-suf', '１週間以内に電話します。', 'Saya akan menelepon Anda dalam waktu seminggu.', 'N4'),
(4190, '田舎', 'いなか', 'pedesaan', 'countryside', 'ကျေးလက်ဒေသ', 'Kelas kata: n', '去年の夏、父の田舎に行きました。', 'Saya mengunjungi kampung halaman ayah saya musim panas lalu.', 'N4'),
(4191, '祈る', 'いのる', 'untuk berdoa', 'to pray', 'ဆုတောင်းရန်', 'Kelas kata: v5r, vt', '早くよくなられるように祈っています。', 'Saya harap Anda akan segera sembuh.', 'N4'),
(4192, '植える', 'うえる', 'menanam, tumbuh', 'to plant, to grow', 'စိုက်ပျိုးရန်၊ ကြီးထွားရန်', 'Kelas kata: v1, vt', '私は庭にバラを植えた。', 'Saya menanam mawar di taman.', 'N4'),
(4193, 'うかがう', 'うかがう', 'untuk dikunjungi', 'to visit', 'သွားရောက်လည်ပတ်ရန်', 'Kelas kata: v5u, vt', '体重をおうかがいしてもよろしいですか。', 'Bolehkah saya bertanya berapa berat badan Anda?', 'N4'),
(4194, '受付', 'うけつけ', 'tanda terima', 'receipt', 'ပြေစာ', 'Kelas kata: n, vs', '受付で入院の手続きをしてください。', 'Anda harus mengisi aplikasi untuk masuk ke rumah sakit di meja depan.', 'N4'),
(4195, '受ける', 'うける', 'untuk mengikuti pelajaran atau ujian', 'to take a lesson or test', 'သင်ခန်းစာတစ်ခု သို့မဟုတ် စမ်းသပ်ရန်', 'Kelas kata: v1, vt', '病気なので試験が受けられません。', 'Saya tidak bisa mengikuti ujian karena saya sakit.', 'N4'),
(4196, '動く', 'うごく', 'untuk bergerak', 'to move', 'ရွှေ့ရန်', 'Kelas kata: v5k, vi', 'まだ動くうちに売ってしまわなきゃ。', 'Saya harus menjualnya selagi masih berjalan.', 'N4'),
(4197, 'うそ', 'うそ', 'sebuah kebohongan', 'a lie', 'မုသား', 'Kelas kata: n, adj-no', 'えっ嘘でしょ。', 'Ya Tuhan, aku tidak percaya ini.', 'N4'),
(4198, 'うち', 'うち', 'di dalam', 'within', 'အတွင်း', 'Kelas kata: n, adv', '教会は私の家とあなたの家の中にあります。', 'Gereja berada di antara rumahku dan rumahmu.', 'N4'),
(4199, '打つ', 'うつ', 'untuk memukul', 'to hit', 'ရိုက်ဖို့', 'Kelas kata: v5t, vt', '８時をちょうど打ちましたね。', 'Ini baru pukul delapan, bukan?', 'N4'),
(4200, '美しい', 'うつくしい', 'cantik', 'beautiful', 'လှတယ်။', 'Kelas kata: adj-i', '私たちは美しい入り日に見とれた。', 'Kami mengagumi indahnya matahari terbenam.', 'N4'),
(4201, '写す', 'うつす', 'untuk menyalin atau memotret', 'to copy or photograph', 'ကော်ပီ သို့မဟုတ် ဓာတ်ပုံရိုက်ရန်', 'Kelas kata: v5s, vt', 'その写真は空から写されたものである。', 'Gambar itu diambil dari udara.', 'N4'),
(4202, '移る', 'うつる', 'untuk pindah rumah atau pindah', 'to move house or transfer', 'အိမ်ပြောင်းရန် သို့မဟုတ် ပြောင်းရွှေ့ရန်', 'Kelas kata: v5r, vi', 'もっとお金があれば大きな家に移れるのにな。', 'Jika saya punya lebih banyak uang, saya bisa pindah ke rumah yang lebih besar.', 'N4'),
(4203, '腕', 'うで', 'lengan', 'arm', 'လက်မောင်း', 'Kelas kata: n', 'けがをした腕を見せて下さい。', 'Tolong tunjukkan padaku lenganmu yang terluka.', 'N4'),
(4204, 'うまい', 'うまい', 'lezat', 'delicious', 'အရသာ', 'Kelas kata: adj-i', 'それはあまりにもうますぎる話だ。', 'Itu cerita yang terlalu bagus untuk menjadi kenyataan.', 'N4'),
(4205, '裏', 'うら', 'sisi sebaliknya', 'reverse side', 'ပြောင်းပြန်ဘက်', 'Kelas kata: n', '靴の裏にガムがこびりついちゃった。', 'Ada permen karet menempel di dasar sepatuku.', 'N4'),
(4206, '売り場', 'うりば', 'tempat di mana barang-barang dijual', 'place where things are sold', 'ပစ္စည်းရောင်းတဲ့နေရာ၊', 'Kelas kata: n', 'スナック売り場は、どこですか。', 'Dimana saya bisa membeli makanan ringan?', 'N4'),
(4207, 'うれしい', 'うれしい', 'senang', 'glad', 'ဝမ်းသာပါတယ်။', 'Kelas kata: adj-i', 'あなたに再会できてうれしい。', 'Saya senang bertemu Anda lagi.', 'N4'),
(4208, 'うん', 'うん', '(tidak resmi) ya', '(informal) yes', '(အလွတ်သဘော) ဟုတ်တယ်။', 'Kelas kata: int', 'うん、休みが終わるまででいいの。', 'Oh, baru saja liburan.', 'N4'),
(4209, '運転', 'うんてん', 'untuk mengemudi', 'to drive', 'မောင်းရန်', 'Kelas kata: n, vs', 'キャロルはレンタカーを運転しています。', 'Carol sedang mengendarai mobil sewaan.', 'N4'),
(4210, '運転手', 'うんてんしゅ', 'pengemudi', 'driver', 'ကားသမား', 'Kelas kata: n', '運転手は車のスピードを上げた。', 'Sopir itu mempercepat mobilnya.', 'N4'),
(4211, '運動', 'うんどう', 'untuk berolahraga', 'to exercise', 'လေ့ကျင့်ခန်းလုပ်ဖို့', 'Kelas kata: n, vs', '週に一度でいいから運動しなさい。', 'Usahakan untuk berolahraga minimal seminggu sekali.', 'N4'),
(4212, 'エスカレーター', 'エスカレーター', 'eskalator', 'escalator', 'စက်လှေကား', 'Kelas kata: n', '上りのエスカレーターはどこですか？', 'Dimana eskalatornya?', 'N4'),
(4213, '枝', 'えだ', 'cabang, ranting', 'branch, twig', 'အကိုင်းအခက်၊ အကိုင်းအခက်', 'Kelas kata: n', 'たくさんの鳥が枝にとまっている。', 'Banyak burung di dahan.', 'N4'),
(4214, '選ぶ', 'えらぶ', 'untuk memilih', 'to choose', 'ရွေးချယ်ရန်', 'Kelas kata: v5b, vt', 'これとあれの中から選んで下さい。', 'Pilih antara ini dan itu.', 'N4'),
(4215, 'おいでになる', 'おいでになる', '(hormat) menjadi', '(respectful) to be', '(လေးစားဖွယ်) ဖြစ်ပါစေ။', 'Kelas kata: exp, v5r', 'いつ旅行においでになりますか。', 'Kapan Anda akan melakukan perjalanan?', 'N4'),
(4216, 'お祝い', 'おいわい', 'selamat', 'congratulation', 'မင်္ဂလာပါ', 'Kelas kata: n', '心からお祝いを申し上げます。', 'Saya mengucapkan selamat yang sebesar-besarnya kepada Anda.', 'N4'),
(4217, 'オートバイ', 'オートバイ', 'sepeda motor', 'motorcycle', 'ဆိုင်ကယ်', 'Kelas kata: n', 'オートバイに乗るのは楽しい。', 'Asyiknya mengendarai sepeda motor.', 'N4'),
(4218, 'おかげ', 'おかげ', 'karena', 'owing to', 'ကြောင့်', 'Kelas kata: n', '私が今日あるのは両親のおかげである。', 'Aku berhutang budi pada orang tuaku.', 'N4'),
(4219, 'おかしい', 'おかしい', 'aneh atau lucu', 'strange or funny', 'ထူးဆန်းသည် သို့မဟုတ် ရယ်စရာကောင်းသည်။', 'Kelas kata: adj-i', '君のジョークは何度聞いてもおかしい。', 'Leluconmu lucu tidak peduli berapa kali aku mendengarnya.', 'N4'),
(4220, 'お金持ち', 'おかねもち', 'orang kaya', 'rich man', 'သူဌေး', 'Kelas kata: n', 'どうしたらお金持ちになれるのかしら？', 'Bagaimana saya bisa menjadi kaya?', 'N4'),
(4221, '億', 'おく', 'seratus juta', 'one hundred million', 'သန်းတစ်ရာ', 'Kelas kata: num', '１０億人の人たちが英語を話しています。', 'Satu miliar orang berbicara bahasa Inggris.', 'N4'),
(4222, '屋上', 'おくじょう', 'atap', 'rooftop', 'ခေါင်မိုး', 'Kelas kata: n', 'デパートの屋上にアドバルーンが上がっている。', 'Ada balon iklan terbang di atas department store.', 'N4'),
(4223, '贈り物', 'おくりもの', 'hadiah', 'gift', 'လက်ဆောင်', 'Kelas kata: n', 'ジェニーは贈り物をありがとうと言った。', 'Jenny mengucapkan terima kasih atas hadiahnya.', 'N4'),
(4224, '送る', 'おくる', 'untuk mengirim', 'to send', 'ပေးပို့ရန်', 'Kelas kata: v5r, vt', 'この手紙を日本に送ってくれませんか。', 'Bisakah Anda mengirimkan surat ini ke Jepang?', 'N4'),
(4225, '遅れる', 'おくれる', 'terlambat', 'to be late', 'နောက်ကျဖို့', 'Kelas kata: v1, vi', '電車はほとんど一時間遅れだった。', 'Kereta terlambat hampir satu jam dari waktu yang ditentukan.', 'N4'),
(4226, '起す', 'おこす', 'untuk bangun', 'to wake', 'နိုးထရန်', 'Kelas kata: v5s, vt', '病気の子供はベッドの上で体を起こした。', 'Anak yang sakit itu duduk di tempat tidur.', 'N4'),
(4227, '行う', 'おこなう', 'untuk melakukan', 'to do', 'လုပ်ဖို့', 'Kelas kata: v5u, vt', 'いう事と行う事はまったく別だ。', 'Mengatakan adalah satu hal, dan melakukan hal lain.', 'N4'),
(4228, '怒る', 'おこる', 'menjadi marah, menjadi marah', 'to get angry, to be angry', 'ဒေါသထွက်ဖို့၊ စိတ်ဆိုးဖို့၊', 'Kelas kata: v5r, vi', 'それをそのままにしておきなさい。そうしないと怒られますよ。', 'Biarkan saja, atau Anda akan dimarahi.', 'N4'),
(4229, '押し入れ', 'おしいれ', 'lemari', 'closet', 'ဗီရို', 'Kelas kata: n', '強盗はその子供を押し入れに閉じ込めた。', 'Pencuri itu menutup anak itu di dalam lemari.', 'N4'),
(4230, 'お嬢さん', 'おじょうさん', 'wanita muda', 'young lady', 'မိန်းမပျို', 'Kelas kata: n', 'お嬢さんは試験に合格なさったそうですね。', 'Putri Anda lulus ujian, saya dengar.', 'N4'),
(4231, 'お宅', 'おたく', '(sopan) rumahmu', '(polite) your house', '(ယဉ်ကျေး) သင့်အိမ်', 'Kelas kata: n', '近いうちにお宅にうかがいます。', 'Kami akan mengunjungi Anda suatu hari nanti.', 'N4'),
(4232, 'おっしゃる', 'おっしゃる', '(dengan hormat) untuk mengatakan', '(respectful) to say', '(လေးလေးစားစား) ပြောတာ။', 'Kelas kata: v5aru, vt', '全くおっしゃる通りです。', 'Anda benar sekali.', 'N4'),
(4233, '夫', 'おっと', 'suami', 'husband', 'ခင်ပွန်း', 'Kelas kata: n', '妻は夫より長生きするものだ。', 'Istri biasanya hidup lebih lama dari suami.', 'N4'),
(4234, 'おつり', 'おつり', 'perubahan dari pembelian, saldo', 'change from purchase, balance', 'ဝယ်ယူမှုမှလက်ကျန်ငွေပြောင်းပါ။', 'Kelas kata: n', '１ドルでおつりがありますか。', 'Apakah Anda punya uang kembalian untuk satu dolar?', 'N4'),
(4235, '音', 'おと', 'suara, perhatikan', 'sound, note', 'အသံ၊ မှတ်စု', 'Kelas kata: n', 'ここから海の音が聞こえる。', 'Kita bisa mendengar laut dari sini.', 'N4'),
(4236, '落す', 'おとす', 'untuk menjatuhkan', 'to drop', 'drop ရန်', 'Kelas kata: v5s, vt', 'リストから私の名を落とさないで下さい。', 'Jangan hapus namaku dari daftarmu.', 'N4'),
(4237, '踊り', 'おどり', 'sebuah tarian', 'a dance', 'အက', 'Kelas kata: n', '私のガールフレンドは踊りがうまい。', 'Pacar saya adalah penari yang baik.', 'N4'),
(4238, '踊る', 'おどる', 'untuk menari', 'to dance', 'ကခုန်ဖို့', 'Kelas kata: v5r, vi', 'なぜ彼と踊らなかったの？', 'Kenapa kamu tidak berdansa dengannya?', 'N4'),
(4239, '驚く', 'おどろく', 'terkejut', 'to be surprised', 'အံ့သြဖို့ကောင်းပါတယ်။', 'Kelas kata: v5k, vi', '母はそのニュースを聞いて驚いた。', 'Ibu terkejut mendengar berita itu.', 'N4'),
(4240, 'お祭り', 'おまつり', 'festival', 'festival', 'ပွဲတော်', 'Kelas kata: n', 'お祭りでロブスターを食べました。', 'Saya makan lobster di festival.', 'N4'),
(4241, 'お見舞い', 'おみまい', 'memanggil seseorang yang sakit, bertanya', 'calling on someone who is ill, enquiry', 'ဖျားနာနေသူကို စုံစမ်းမေးမြန်းပါ။', 'Kelas kata: n', '彼女のお見舞いに行こうよ。', 'Mengapa kita tidak pergi dan menemuinya di rumah sakit?', 'N4'),
(4242, 'お土産', 'おみやげ', 'suvenir', 'souvenir', 'အမှတ်တရပစ္စည်း', 'Kelas kata: n', 'これは北海道からのお土産です。', 'Ini adalah oleh-oleh dari Hokkaido.', 'N4'),
(4243, '思い出す', 'おもいだす', 'untuk diingat', 'to remember', 'မှတ်မိဖို့', 'Kelas kata: v5s, vt', 'あなたを見るとお兄さんを思い出します。', 'Kamu mengingatkanku pada saudaramu.', 'N4'),
(4244, '思う', 'おもう', 'untuk berpikir, merasakan', 'to think, to feel', 'တွေးဖို့၊ ခံစားဖို့', 'Kelas kata: v5u, vt', '晴れだと思うよ。', 'Saya pikir cuacanya akan cerah.', 'N4'),
(4245, 'おもちゃ', 'おもちゃ', 'mainan', 'toy', 'အရုပ်', 'Kelas kata: n', 'あのおもちゃは木で作られている。', 'Mainan itu terbuat dari kayu.', 'N4'),
(4246, '表', 'おもて', 'bagian depan', 'the front', 'ရှေ့', 'Kelas kata: n', 'この紙はどちらが表だか見分けがつかない。', 'Saya tidak tahu sisi mana yang kanan dari kertas ini.', 'N4'),
(4247, '親', 'おや', 'orang tua', 'parents', 'မိဘများ', 'Kelas kata: n', '私たちは親をあてにしてはいけない。', 'Kita seharusnya tidak bergantung pada orang tuamu.', 'N4'),
(4248, '泳ぎ方', 'およぎかた', 'cara berenang', 'way of swimming', 'ရေကူးနည်း', 'Kelas kata: n', '君に泳ぎ方を教えよう。', 'Aku akan memberitahumu cara berenang.', 'N4'),
(4249, '下りる', 'おりる', 'untuk turun', 'to get off', 'ဆင်းရန်', 'Kelas kata: v1, vi', '一行は、歩いてその山を下りた。', 'Pesta itu berjalan menuruni gunung.', 'N4'),
(4250, '折る', 'おる', 'untuk memecahkan atau melipat', 'to break or to fold', 'ချိုးရန် သို့မဟုတ် ခေါက်ရန်', 'Kelas kata: v5r, vt', 'その紙を四つ折りにしなさい。', 'Lipat kertas menjadi empat.', 'N4'),
(4251, 'お礼', 'おれい', 'ungkapan rasa terima kasih', 'expression of gratitude', 'ကျေးဇူးတင်ကြောင်းဖော်ပြခြင်း။', 'Kelas kata: n', '息子に成り代わってお礼を申し上げます。', 'Saya berterima kasih atas nama anak saya.', 'N4'),
(4252, '折れる', 'おれる', 'untuk pecah atau terlipat', 'to break or be folded', 'ခေါက်ချိုးရန်', 'Kelas kata: v1, vi', '医者は彼の折れた足をついだ。', 'Dokter memperbaiki kakinya yang patah.', 'N4'),
(4253, '終わり', 'おわり', 'akhir', 'the end', 'အဆုံး', 'Kelas kata: n', 'さぁ、一日を終わりとしましょう。', 'Anggap saja ini sehari.', 'N4'),
(4254, 'カーテン', 'カーテン', 'tirai', 'curtain', 'ကုလားကာ', 'Kelas kata: n', 'カーテンが風になびいた。', 'Tirai tertiup angin.', 'N4'),
(4255, '海岸', 'かいがん', 'pantai', 'coast', 'ကမ်းခြေ', 'Kelas kata: n', 'このバスは、海岸に行きますか。', 'Apakah bus ini menuju ke pantai?', 'N4'),
(4256, '会議', 'かいぎ', 'pertemuan', 'meeting', 'အစည်းအဝေး', 'Kelas kata: n, vs', '会議は終わりに近づきつつあった。', 'Konferensi ini hampir berakhir.', 'N4'),
(4257, '会議室', 'かいぎしつ', 'ruang pertemuan', 'meeting room', 'အစည်းအဝေးခန်း', 'Kelas kata: n', 'クラブの会員は会議室に集まった。', 'Para anggota klub berkumpul di ruang pertemuan.', 'N4'),
(4258, '会場', 'かいじょう', 'balai pertemuan atau tempat pertemuan', 'assembly hall or meeting place', 'စုဝေးခန်းမ သို့မဟုတ် အစည်းအဝေးနေရာ', 'Kelas kata: n', '私たちは会場の後ろに座った。', 'Kami duduk di belakang aula.', 'N4'),
(4259, '会話', 'かいわ', 'percakapan', 'conversation', 'စကားဝိုင်း', 'Kelas kata: n, vs', 'その作家は会話を書くのがうまい。', 'Penulis sangat pandai berdialog.', 'N4'),
(4260, '帰り', 'かえり', 'kembali', 'return', 'ပြန်လာ', 'Kelas kata: n', 'どうして帰りがこんなに遅くなったの。', 'Kenapa kamu pulang terlambat?', 'N4'),
(4261, '変える', 'かえる', 'untuk berubah', 'to change', 'ပြောင်းလဲရန်', 'Kelas kata: v1, vt', 'なんで彼は考えを変えたのか。', 'Apa yang membuatnya berubah pikiran?', 'N4'),
(4262, '科学', 'かがく', 'sains', 'science', 'သိပ္ပံပညာ', 'Kelas kata: n', '私は、ずっと科学を習っている。', 'Saya sedang belajar suatu ilmu.', 'N4'),
(4263, '鏡', 'かがみ', 'cermin', 'mirror', 'ကြေးမုံ', 'Kelas kata: n', '少女は立って鏡をのぞきこんだ。', 'Gadis itu berdiri memandang ke cermin.', 'N4'),
(4264, '飾る', 'かざる', 'untuk menghias', 'to decorate', 'အလှဆင်ရန်', 'Kelas kata: v5r, vt', 'その広間は日本画で飾られていた。', 'Aula itu dihiasi dengan lukisan Jepang.', 'N4'),
(4265, '火事', 'かじ', 'api', 'fire', 'မီး', 'Kelas kata: n', 'その火事はおととい発生した。', 'Kebakaran terjadi kemarin lusa.', 'N4'),
(4266, 'ガソリン', 'ガソリン', 'bensin', 'petrol', 'ဓာတ်ဆီ', 'Kelas kata: n', 'この車はあまりガソリンを食わない。', 'Mobil ini sangat irit bahan bakar.', 'N4'),
(4267, 'ガソリンスタンド', 'ガソリンスタンド', 'pompa bensin', 'petrol station', 'ဓာတ်ဆီဆိုင်', 'Kelas kata: n', 'この辺にガソリンスタンドはありますか。', 'Apakah ada pompa bensin di sekitar sini?', 'N4'),
(4268, '堅い', 'かたい', 'keras', 'hard', 'ခက်တယ်။', 'Kelas kata: adj-i', 'ダイヤモンドは本来堅いものだ。', 'Berlian pada dasarnya keras.', 'N4'),
(4269, '形', 'かたち', 'bentuk', 'shape', 'ပုံသဏ္ဍာန်', 'Kelas kata: n', '物質は温度によって形を変える。', 'Materi berubah bentuknya menurut suhu.', 'N4'),
(4270, '片付ける', 'かたづける', 'untuk merapikan', 'to tidy up', 'ပြင်ဆင်ရန်', 'Kelas kata: v1, vt', 'あすの朝まっさきにそれを片付けます。', 'Saya akan melakukan hal pertama itu di pagi hari.', 'N4'),
(4271, '課長', 'かちょう', 'manajer bagian', 'section manager', 'အပိုင်းမန်နေဂျာ', 'Kelas kata: n', '私は課長に任命された。', 'Saya diangkat menjadi kepala seksi.', 'N4'),
(4272, '勝つ', 'かつ', 'untuk menang', 'to win', 'အနိုင်ရရန်', 'Kelas kata: v5t, vi', 'この病気に勝てる人は少ない。', 'Tidak banyak yang bisa bertahan dari penyakit ini.', 'N4'),
(4273, 'かっこう', 'かっこう', 'penampilan', 'appearance', 'အသွင်အပြင်', 'Kelas kata: n', 'とても見られたかっこうじゃないよ。', 'Kamu tidak cocok untuk dilihat.', 'N4'),
(4274, '家内', 'かない', 'ibu rumah tangga', 'housewife', 'အိမ်ရှင်မ', 'Kelas kata: n', '家内は海外旅行中で、よく電話をかけてくる。', 'Istri saya sering menelepon saya saat dia bepergian ke luar negeri.', 'N4'),
(4275, '悲しい', 'かなしい', 'sedih', 'sad', 'ဝမ်းနည်း', 'Kelas kata: adj-i', 'そんな悲しい目で見ないで。', 'Jangan menatapku dengan sedih.', 'N4'),
(4276, '必ず', 'かならず', 'tentu saja, tentu saja', 'certainly, necessarily', 'သေချာပေါက် သေချာပေါက်', 'Kelas kata: adv', 'あの歌は必ずヒットするよ。', 'Lagu itu pasti menjadi hit.', 'N4'),
(4277, '彼女', 'かのじょ', 'dia, pacar', 'she, girlfriend', 'သူမ ချစ်သူ', 'Kelas kata: pn', '問題は彼女が来るかどうかである。', 'Intinya adalah apakah dia akan datang atau tidak.', 'N4'),
(4278, '壁', 'かべ', 'dinding', 'wall', 'နံရံ', 'Kelas kata: n', '壁はぬりかえなければなりませんか。', 'Apakah saya harus mengecat ulang dindingnya?', 'N4'),
(4279, 'かまう', 'かまう', 'dalam pikiran', 'to mind', 'စိတ်ထဲ', 'Kelas kata: v5u, vi', 'どうか私にかまわないでください。', 'Tolong jangan pedulikan aku.', 'N4'),
(4280, '髪', 'かみ', 'rambut', 'hair', 'ဆံပင်', 'Kelas kata: n', '長い髪をした女の子に会いました。', 'Aku melihat seorang gadis berambut panjang.', 'N4'),
(4281, '噛む', 'かむ', 'menggigit, mengunyah', 'to bite, to chew', 'ကိုက်ဖို့၊ ဝါးဖို့၊', 'Kelas kata: v5m, vt', '噛むと痛いですか。', 'Apa untuk mengunyah sakit?', 'N4'),
(4282, '通う', 'かよう', 'untuk bepergian', 'to commute', 'အလုပ်သွား', 'Kelas kata: v5u, vi', 'マイクはバスで学校に通っている。', 'Mike pergi ke sekolah dengan bus.', 'N4'),
(4283, 'ガラス', 'ガラス', 'sebuah panel kaca', 'a glass pane', 'ဖန်ခွက်တစ်ခု', 'Kelas kata: n', 'ビールびんはガラスでできている。', 'Botol bir terbuat dari kaca.', 'N4'),
(4284, '彼', 'かれ', 'dia, pacar', 'he, boyfriend', 'ချစ်သူ', 'Kelas kata: pn', '彼のスイングは実に見事だ。', 'Dia memiliki ayunan yang sempurna.', 'N4'),
(4285, '彼ら', 'かれら', 'mereka', 'they', 'သူတို့', 'Kelas kata: pn', '彼らは二度と会うことはなかった。', 'Mereka tidak akan pernah bertemu lagi.', 'N4'),
(4286, '乾く', 'かわく', 'menjadi kering', 'to get dry', 'ခြောက်သွေ့ရန်', 'Kelas kata: v5k, vi', 'そのぬれたシャツはすぐに乾くだろう。', 'Baju yang basah akan segera mengering.', 'N4'),
(4287, '代わり', 'かわり', 'pengganti, alternatif', 'substitute, alternate', 'အစားထိုး၊ အလှည့်ကျ', 'Kelas kata: n, adj-no', 'その代わりにトランプをしようよ。', 'Mari kita bermain kartu saja.', 'N4'),
(4288, '変わる', 'かわる', 'untuk berubah', 'to change', 'ပြောင်းလဲရန်', 'Kelas kata: v5r, vi', '私のE-mailアドレスが変わりました。', 'Alamat email saya telah diubah.', 'N4'),
(4289, '考える', 'かんがえる', 'untuk dipertimbangkan', 'to consider', 'စဉ်းစားရန်', 'Kelas kata: v1, vt', 'あなたは家族の事を考えるべきです。', 'Anda harus memikirkan keluarga Anda.', 'N4'),
(4290, '関係', 'かんけい', 'hubungan', 'relationship', 'ဆက်ဆံရေး', 'Kelas kata: n, vs', 'これとあれはどういう関係があるの。', 'Bagaimana hubungannya dengan hal tersebut?', 'N4'),
(4291, '看護婦', 'かんごふ', 'perawat wanita', 'female nurse', 'အမျိုးသမီးသူနာပြု', 'Kelas kata: n', 'なぜ看護婦になりたいのですか。', 'Mengapa Anda ingin menjadi perawat?', 'N4'),
(4292, '気', 'き', 'semangat, suasana hati', 'spirit, mood', 'စိတ်ဓာတ်၊ စိတ်', 'Kelas kata: n', '彼は親切というよりむしろ気がやさしい。', 'Dia lebih lembut dari pada baik hati.', 'N4'),
(4293, '機会', 'きかい', 'peluang', 'opportunity', 'အခွင့်အလမ်း', 'Kelas kata: n', 'またの機会にしましょう。', 'Mari kita buat lain kali.', 'N4'),
(4294, '聞こえる', 'きこえる', 'untuk didengar', 'to be heard', 'ကြားရမည်။', 'Kelas kata: v1, vi', '車が家の前に止まる音が聞こえた。', 'Aku mendengar suara mobil berhenti di depan rumah.', 'N4'),
(4295, '汽車', 'きしゃ', 'kereta uap', 'steam train', 'ရေနွေးငွေ့ရထား', 'Kelas kata: n', '汽車はまだ着きません。', 'Keretanya belum tiba.', 'N4'),
(4296, '季節', 'きせつ', 'musim', 'season', 'ရာသီ', 'Kelas kata: n, adj-no', '秋は読書にもってこいの季節だ。', 'Musim gugur adalah musim yang baik untuk membaca.', 'N4'),
(4297, '規則', 'きそく', 'peraturan', 'regulations', 'စည်းမျဉ်းများ', 'Kelas kata: n', 'この規則はあなたにも当てはまる。', 'Aturan ini juga berlaku untuk Anda.', 'N4'),
(4298, 'きっと', 'きっと', 'tentu saja', 'surely', 'သေချာတယ်။', 'Kelas kata: adv', 'でもよー、オラのおとうさんは良い気しねーよ、きっと。', 'Tapi menurutku Ayah tidak ingin aku melakukannya.', 'N4'),
(4299, '絹', 'きぬ', 'sutra', 'silk', 'ပိုးထည်', 'Kelas kata: n', 'この美しいドレスは絹で出来ている。', 'Gaun cantik ini terbuat dari sutra.', 'N4'),
(4300, '厳しい', 'きびしい', 'ketat', 'strict', 'တင်းကျပ်', 'Kelas kata: adj-i', '厳しい冬になるという話です。', 'Mereka bilang kita akan mengalami musim dingin yang parah.', 'N4'),
(4301, '気分', 'きぶん', 'suasana hati', 'mood', 'စိတ်ခံစားချက်', 'Kelas kata: n', 'とても気分がリフレッシュされる。', 'Saya merasa seperti orang baru.', 'N4'),
(4302, '決まる', 'きまる', 'untuk diputuskan', 'to be decided', 'ဆုံးဖြတ်ရန်', 'Kelas kata: v5r, vi', 'いつ始めるのかはまだ決まっていない。', 'Masih belum diputuskan kapan kami akan memulainya.', 'N4'),
(4303, '君', 'きみ', '(informal) Kamu (digunakan oleh laki-laki terhadap perempuan)', '(informal) You (used by men towards women)', '(အလွတ်သဘော) You (အမျိုးသားများအသုံးပြုသော အမျိုးသမီးများ)', 'Kelas kata: pn', '宿題を忘れるなんて君は不注意だった。', 'Anda ceroboh hingga melupakan pekerjaan rumah Anda.', 'N4'),
(4304, '気持ち', 'きもち', 'perasaan, suasana hati', 'feeling, mood', 'ခံစားချက်၊ စိတ်ခံစားချက်', 'Kelas kata: n', '気持ちのいい朝ではありませんか。', 'Bukankah ini pagi yang indah?', 'N4'),
(4305, '着物', 'きもの', 'kimono', 'kimono', 'ကီမိုနို', 'Kelas kata: n', '彼女はその着物を着ると変に見える。', 'Dia terlihat aneh dengan pakaian itu.', 'N4'),
(4306, '客', 'きゃく', 'tamu, pelanggan', 'guest, customer', 'ဧည့်သည်၊ ဖောက်သည်', 'Kelas kata: n', '春先だから客もあまりいませんでした。', 'Saat itu awal musim semi, jadi tidak banyak pelanggan.', 'N4'),
(4307, '急', 'きゅう', 'mendesak, curam', 'urgent, steep', 'အရေးတကြီး၊ မတ်စောက်သည်။', 'Kelas kata: adj-na', 'この川の流れは急だ。', 'Arus sungai ini deras.', 'N4'),
(4308, '急行', 'きゅうこう', 'cepat, ekspres', 'speedy, express', 'အမြန်၊ အမြန်', 'Kelas kata: n', '急行の料金は幾らですか。', 'Berapa harga ekspresnya?', 'N4'),
(4309, '教育', 'きょういく', 'pendidikan', 'education', 'ပညာရေး', 'Kelas kata: n, vs', 'この世界の教育にはがっかりしてしまう。', 'Pendidikan di dunia ini mengecewakan saya.', 'N4'),
(4310, '教会', 'きょうかい', 'gereja', 'church', 'ဘုရားကျောင်း', 'Kelas kata: n', 'その教会は１１７３年までさかのぼる。', 'Gereja ini dibangun pada tahun 1173.', 'N4'),
(4311, '愛', 'あい', 'cinta', 'love', 'အချစ်', 'Kelas kata: n, n-suf', '愛とは夢にまで彼女を見ることだ。', 'Cinta adalah melihatnya dalam mimpimu.', 'N3'),
(4312, '挨拶', 'あいさつ', 'salam, salam', 'greeting, salutation', 'နှုတ်ဆက်ခြင်း၊ နှုတ်ဆက်ခြင်း။', 'Kelas kata: n, vs', '彼女はにっこり挨拶をした。', 'Dia menyambut kami dengan senyuman.', 'N3'),
(4313, '愛情', 'あいじょう', 'cinta, kasih sayang', 'love, affection', 'ချစ်ခြင်းမေတ္တာ', 'Kelas kata: n, adj-no', 'とりわけ子供たちは愛情を必要とする。', 'Yang terpenting, anak-anak membutuhkan cinta.', 'N3'),
(4314, '合図', 'あいず', 'tanda, isyarat', 'sign, signal', 'လက္ခဏာ၊ အချက်ပြ', 'Kelas kata: n, vs', 'すぐにゴーの合図をしてください。', 'Beri kami tanda untuk segera berangkat.', 'N3'),
(4315, 'アイスクリーム', 'アイスクリーム', 'es krim', 'ice cream', 'ရေခဲမုန့်', 'Kelas kata: n', 'アイスクリームを３つください。', 'Tolong beri saya tiga es krim.', 'N3'),
(4316, '愛する', 'あいする', 'untuk mencintai', 'to love', 'ချစ်ဖို့', 'Kelas kata: vs-s, vt', 'ロメオはジュリエットが愛している男だ。', 'Romeo adalah pria yang dicintai Juliet.', 'N3'),
(4317, '相手', 'あいて', 'rekan, mitra, perusahaan', 'companion, partner, company', 'အဖော်၊ လုပ်ဖော်ကိုင်ဖက်၊ ကုမ္ပဏီ', 'Kelas kata: n', 'あなたのダンスの相手はだれですか。', 'Siapa rekan dansamu?', 'N3'),
(4318, 'あいにく', 'あいにく', 'sayangnya, Maaf, tapi....', 'unfortunately, Sorry, but....', 'စိတ်မကောင်းပါဘူး တောင်းပန်ပါတယ် ဒါပေမယ့်....', 'Kelas kata: adj-na, adv', 'あいにく私はお金を持っていない。', 'Sayangnya saya tidak punya uang.', 'N3'),
(4319, 'アイロン', 'アイロン', 'besi (listrik).', '(electric) iron', '(လျှပ်စစ်) သံ', 'Kelas kata: n', 'アイロンで手をやけどしました。', 'Saya membakar tangan saya dengan besi.', 'N3'),
(4320, 'アウト', 'アウト', 'keluar', 'out', 'ထွက်', 'Kelas kata: n', '最初の打者はアウトになった。', 'Adonan pertama tertangkap.', 'N3'),
(4321, '明かり', 'あかり', 'cahaya lampu, cahaya (secara umum), kecerahan', 'lamplight, light (in general), brightness', 'မီးခွက်၊ အလင်း (ယေဘုယျအားဖြင့်)၊ တောက်ပမှု', 'Kelas kata: n', 'どうか明かりをつけて下さい。', 'Tolong nyalakan lampunya.', 'N3'),
(4322, '空き', 'あき', 'ruangan, waktu luang, kekosongan', 'room, time to spare, emptiness', 'အခန်း၊ အားလပ်ချိန်၊ အချည်းနှီး', 'Kelas kata: n', '字と字の間の空きをもっと広くしなさい。', 'Sisakan lebih banyak ruang antar karakter.', 'N3'),
(4323, '明らか', 'あきらか', 'jelas, jelas, jelas', 'obvious, evident, clear', 'သိသာတယ်၊ ထင်ရှားတယ်၊ ရှင်းတယ်။', 'Kelas kata: adj-na', 'その船が沈んだのは明らかだ。', 'Yang jelas kapalnya tenggelam.', 'N3'),
(4324, '諦める', 'あきらめる', 'untuk menyerah, untuk meninggalkan', 'to give up, to abandon', 'စွန့်လွှတ်ရန်၊ စွန့်လွှတ်ရန်', 'Kelas kata: v1, vt', 'その少年は死んだものとしてあきらめられた。', 'Anak laki-laki itu diserahkan karena mati.', 'N3'),
(4325, '飽きる', 'あきる', 'menjadi lelah, kehilangan minat, merasa cukup', 'to get tired of, to lose interest in, to have enough', 'ပျင်းဖို့ ၊ စိတ်ဝင်စားဖို့ ၊ လုံလောက်ဖို့', 'Kelas kata: v1, suf', '息子はハンバーガーにあきています。', 'Anak saya bosan dengan hamburger.', 'N3'),
(4326, '握手', 'あくしゅ', 'jabat tangan', 'handshake', 'လက်ဆွဲနှုတ်ဆက်သည်။', 'Kelas kata: n, vs', '彼は友人と握手した。', 'Dia berjabat tangan dengan temannya.', 'N3'),
(4327, '悪魔', 'あくま', 'setan, setan, roh jahat', 'devil, demon, evil spirit', 'နတ်ဆိုး၊ နတ်ဆိုး၊ နတ်ဆိုး', 'Kelas kata: n', '悪魔がやってくるかもしれないよ。', 'Iblis mungkin datang.', 'N3'),
(4328, '明ける', 'あける', 'hingga fajar, menjadi siang hari', 'to dawn, to become daylight', 'မိုးလင်းမှ၊', 'Kelas kata: v1, vi', '夜が明ける。', 'Istirahat siang hari.', 'N3'),
(4329, '預ける', 'あずける', 'untuk menyerahkan ke dalam tahanan, untuk mempercayakan, untuk menyimpan', 'to give into custody, to entrust, to deposit', 'အပ်နှံရန်၊ အပ်နှံရန်၊ အပ်နှံရန်', 'Kelas kata: v1, vt', '銀行にそのお金を預けてください。', 'Silakan simpan uangnya di bank.', 'N3'),
(4330, '汗', 'あせ', 'keringat, keringat', 'sweat, perspiration', 'ချွေး၊ချွေး', 'Kelas kata: n', '額の汗をふきなさい。', 'Usap keringat dari alis Anda.', 'N3'),
(4331, '与える', 'あたえる', 'memberi, mempersembahkan, memberi penghargaan', 'to give, to present, to award', 'ပေးအပ်ရန်၊ တင်ပြရန်၊ ဆုပေးရန်', 'Kelas kata: v1, vt', '彼は娘にたくさんのお金を与えた。', 'Dia memberi putrinya cukup banyak uang.', 'N3'),
(4332, '辺り', 'あたり', 'sekitar, dekat', 'vicinity, nearby', 'အနီးနား၊ အနီးနား', 'Kelas kata: n, n-suf', '昔この辺りにホテルがあったんだ。', 'Dulu ada sebuah hotel di sekitar sini.', 'N3'),
(4333, '当たる', 'あたる', 'untuk dipukul, untuk menjadi sukses, untuk menjadi setara dengan', 'to be hit, to be successful, to be equivalent to', 'ရိုက်ခံရဖို့၊ အောင်မြင်ဖို့၊ ညီမျှဖို့', 'Kelas kata: v5r, vi', '私は顔に冷たい風が当たるのを感じた。', 'Aku merasakan angin dingin menerpa wajahku.', 'N3'),
(4334, 'あちこち', 'あちこち', 'di sana-sini', 'here and there', 'ဒီမှာရော', 'Kelas kata: pn, adv', '本が部屋のあちこちに散らばっていた。', 'Ada buku-buku tergeletak di sekitar ruangan.', 'N3'),
(4335, '扱う', 'あつかう', 'untuk menangani, untuk menangani, untuk mengobati', 'to handle, to deal with, to treat', 'ကိုင်တွယ်ရန်၊ ကိုင်တွယ်ရန်၊ ဆက်ဆံရန်', 'Kelas kata: v5u, vt', '心理学は人間の感情を扱う。', 'Psikologi berkaitan dengan emosi manusia.', 'N3'),
(4336, '集まり', 'あつまり', 'pertemuan, pertemuan, pertemuan', 'gathering, meeting, assembly', 'စုဝေးခြင်း၊ စည်းဝေးခြင်း၊', 'Kelas kata: n', 'ごく内輪の集まりなのです。', 'Ini pertemuan yang cukup informal.', 'N3'),
(4337, '当てる', 'あてる', 'untuk memukul, untuk menerapkan tambalan', 'to hit, to apply a patch', 'ရိုက်ရန်၊ ဖာထေးရန်', 'Kelas kata: v1, vt', 'かろうじて車に当てられずにすんだ。', 'Saya nyaris lolos dari tabrak mobil.', 'N3'),
(4338, 'あと', 'あと', 'jejak, jejak, sisa-sisa', 'trace, tracks, remains', 'ခြေရာ၊ ခြေရာ၊ ကျန်ရစ်', 'Kelas kata: n', 'その女性の顔には悲しみの跡があった。', 'Wajah wanita itu dipenuhi kesedihan.', 'N3'),
(4339, '穴', 'あな', 'lubang', 'hole', 'အပေါက်', 'Kelas kata: n', '注意して！道路に穴があいてるよ。', 'Awas! Ada lubang di jalan.', 'N3'),
(4340, '油', 'あぶら', 'minyak', 'oil', 'ဆီ', 'Kelas kata: n', 'オリーブの実から油が取れます。', 'Minyak diekstraksi dari buah zaitun.', 'N3'),
(4341, '粗', 'あら', 'cacat, cacat, cacat', 'defect, flaw, blemish', 'အပြစ်အနာအဆာ၊ ချို့ယွင်းချက်၊ အပြစ်အနာအဆာ', 'Kelas kata: n', 'あら、アンジェラと呼んでください。', 'Oh, tolong panggil aku Angela.', 'N3'),
(4342, '嵐', 'あらし', 'badai, prahara', 'storm, tempest', 'မုန်တိုင်း၊ မုန်တိုင်း', 'Kelas kata: n', 'この風は嵐の印だ。', 'Angin ini merupakan tanda akan terjadinya badai.', 'N3'),
(4343, '新た', 'あらた', 'baru, segar, baru', 'new, fresh, novel', 'အသစ်၊ အသစ်၊ ဝတ္ထု', 'Kelas kata: adj-na', '彼女は記憶を新たにするためにその写真を見た。', 'Dia melihat gambar itu untuk menyegarkan ingatannya.', 'N3'),
(4344, 'あらゆる', 'あらゆる', 'semua, setiap', 'all, every', 'အားလုံး၊ တိုင်း', 'Kelas kata: adj-pn', '私はあらゆる言論の自由に賛成だ。', 'Saya mendukung kebebasan berpendapat bagi semua orang.', 'N3'),
(4345, '現す', 'あらわす', 'untuk menunjukkan, untuk menunjukkan, untuk menampilkan', 'to show, to indicate, to display', 'ပြသရန်၊ ညွှန်ပြရန်၊ ပြသရန်', 'Kelas kata: v5s, vt', '＆のマークはａｎｄの文字を表す。', 'Tanda "&" berarti "dan".', 'N3'),
(4346, '表す', 'あらわす', 'untuk mengungkapkan, untuk menunjukkan, untuk mengungkapkan', 'to express, to show, to reveal', 'ဖော်ပြရန်၊ ဖော်ပြရန်၊ ဖော်ပြရန်', 'Kelas kata: v5s, vt', '＆のマークはａｎｄの文字を表す。', 'Tanda "&" berarti "dan".', 'N3'),
(4347, '現れ', 'あらわれ', 'perwujudan, perwujudan', 'embodiment, materialization', 'ရုပ်ထွက်ပစ္စည်း၊', 'Kelas kata: n', 'それは彼女の性格の表れだ。', 'Itu adalah indeks karakternya.', 'N3'),
(4348, '現れる', 'あらわれる', 'untuk muncul, menjadi terlihat, menjadi terlihat', 'to appear, to come in sight, to become visible', 'ပေါ်လာဖို့၊ မြင်လာဖို့၊ မြင်လာဖို့', 'Kelas kata: v1, vi', '２０人の警官が現場に現れた。', 'Dua puluh polisi telah tiba di tempat kejadian.', 'N3'),
(4349, '或', 'ある', 'tertentu..., beberapa...', 'a certain..., some...', 'သေချာတယ်...၊ တချို့...', 'Kelas kata: adj-pn', 'ある学生に会うところです。', 'Saya akan bertemu dengan seorang siswa tertentu.', 'N3'),
(4350, 'あるいは', 'あるいは', 'atau, mungkin', 'or, possibly', 'ဒါမှမဟုတ် ဖြစ်နိုင်တယ်။', 'Kelas kata: adv', 'ガスで調理しますか、あるいは電気ですか。', 'Apakah Anda memasak dengan gas atau listrik?', 'N3'),
(4351, 'アルバム', 'アルバム', 'album', 'album', 'အခွေ', 'Kelas kata: n', '彼は私にアルバムを見せてくれた。', 'Dia menunjukkan padaku album fotonya.', 'N3'),
(4352, '泡', 'あわ', 'gelembung, busa, buih', 'bubble, foam, froth', 'ပူဖောင်း၊ အမြှုပ်၊ အမြှုပ်ထခြင်း။', 'Kelas kata: n', 'くだける波が泡を作った。', 'Pecahnya ombak membentuk buih.', 'N3'),
(4353, '合わせる', 'あわせる', 'untuk bergabung bersama, menjadi berlawanan, untuk menghadapi', 'to join together, to be opposite, to face', 'အတူတကွပူးပေါင်းရန်၊ ဆန့်ကျင်ဘက်ဖြစ်ရန်၊ ရင်ဆိုင်ရန်', 'Kelas kata: v1, vt', 'あなたの計画を私に合わせなさい。', 'Rencanamu harus sesuai dengan rencanaku.', 'N3'),
(4354, '哀れ', 'あわれ', 'tak berdaya, kasihan, kesedihan', 'helpless, pity, sorrow', 'အားကိုးရာမဲ့၊ သနားစရာ၊ ဝမ်းနည်းမှု', 'Kelas kata: n', '彼女は哀れを誘う有様だった。', 'Dia berada dalam kondisi yang menyedihkan.', 'N3'),
(4355, '案', 'あん', 'rencana, akhiran yang berarti rancangan', 'plan, suffix meaning draft', 'plan, suffix အဓိပ္ပါယ်မူကြမ်း', 'Kelas kata: n, n-suf', 'どちらの案がよりよいと思いますか。', 'Rencana mana yang menurut Anda lebih baik?', 'N3'),
(4356, '暗記', 'あんき', 'menghafal, belajar dengan hati', 'memorization, learning by heart', 'အာဂုံဆောင်၊ နှလုံးသားဖြင့် သင်ယူခြင်း။', 'Kelas kata: n, vs', '彼はその会話を暗記しようとした。', 'Dia mencoba menghafal percakapan itu.', 'N3'),
(4357, '安定', 'あんてい', 'stabilitas, keseimbangan', 'stability, equilibrium', 'တည်ငြိမ်မှု၊ မျှခြေ', 'Kelas kata: n, vs', '今日の政治状況はそれほど安定していない。', 'Situasi politik saat ini tidak terlalu stabil.', 'N3'),
(4358, 'あんなに', 'あんなに', 'sejauh itu, sampai pada tingkat itu', 'to that extent, to that degree', 'အဲဒီအတိုင်းအတာအထိ၊', 'Kelas kata: adv', 'あんなに怒るなんて彼らしくない。', 'Tidak seperti dia yang begitu marah.', 'N3'),
(4359, 'あんまり', 'あんまり', 'tidak terlalu, tidak banyak, sisanya', 'not very, not much, remainder', 'မများဘူး၊ သိပ်မကျန်ဘူး။', 'Kelas kata: adv', 'この手の本はあまり読まない。', 'Saya jarang membaca buku seperti ini.', 'N3'),
(4360, '胃', 'い', 'perut', 'stomach', 'ဗိုက်', 'Kelas kata: n', '食物は胃の中で消化される。', 'Makanan dicerna di perut.', 'N3'),
(4361, '委員', 'いいん', 'anggota komite', 'committee member', 'ကော်မတီဝင်', 'Kelas kata: n', '委員は全員出席している。', 'Semua panitia hadir.', 'N3'),
(4362, '意外', 'いがい', 'tak terduga, mengejutkan', 'unexpected, surprising', 'မျှော်လင့်မထားသော၊ အံ့သြစရာ', 'Kelas kata: adj-na, adv-to', '君にここで会うのは全く意外だ。', 'Sungguh mengejutkan melihat Anda di sini.', 'N3'),
(4363, '行き', 'いき', 'pergi', 'going', 'သွားမယ်။', 'Kelas kata: n', '私は歯医者行きを延ばさねばならない。', 'Saya harus menunda pergi ke dokter gigi.', 'N3'),
(4364, '息', 'いき', 'napas, nada', 'breath, tone', 'အသက်ရှူသံ၊', 'Kelas kata: n', 'おぼれかけた人は息を吹き返した。', 'Pria yang hampir tenggelam itu mulai bernapas.', 'N3'),
(4365, '勢い', 'いきおい', 'kekuatan, kekuatan, energi', 'force, vigor, energy', 'အင်အား၊ အားမာန်၊ စွမ်းအင်', 'Kelas kata: n', '勢いに流されているんですよ。', 'Anda dibawa bersama dengan perosotan.', 'N3'),
(4366, '生き物', 'いきもの', 'makhluk hidup, binatang', 'living thing, animal', 'သက်ရှိ၊ တိရစ္ဆာန်', 'Kelas kata: n', '人は意識のある生き物だ。', 'Manusia adalah makhluk yang sadar.', 'N3'),
(4367, 'いけない', 'いけない', 'tidak boleh melakukan, buruk, salah', 'must not do, bad, wrong', 'မလုပ်ရဘူး၊ မကောင်းဘူး၊ မှားတယ်။', 'Kelas kata: exp, adj-i', '友人は助け合わなければいけない。', 'Teman harus saling membantu.', 'N3'),
(4368, '意志', 'いし', 'kemauan, kemauan', 'will, volition', 'will, စေတနာ', 'Kelas kata: n', '私は辞職する意志はまったくない。', 'Saya tidak punya niat untuk mengundurkan diri.', 'N3'),
(4369, '意思', 'いし', 'niat, tujuan', 'intention, purpose', 'ရည်ရွယ်ချက်၊ ရည်ရွယ်ချက်', 'Kelas kata: n', '人間は互いに言葉で意思を通じ合う。', 'Manusia berkomunikasi satu sama lain melalui bahasa.', 'N3'),
(4370, '医師', 'いし', 'dokter, dokter', 'doctor, physician', 'ဆရာဝန်၊ ဆရာဝန်', 'Kelas kata: n', '彼は医師になるために勉強している。', 'Dia belajar dengan tujuan untuk menjadi seorang dokter.', 'N3'),
(4371, '維持', 'いじ', 'pemeliharaan, pelestarian', 'maintenance, preservation', 'ထိန်းသိမ်းခြင်း၊ ထိန်းသိမ်းခြင်း။', 'Kelas kata: n, vs', 'この車の維持は高くつく。', 'Mahal sekali menjalankan mobil ini.', 'N3'),
(4372, '意識', 'いしき', 'kesadaran, indera', 'consciousness, senses', 'အသိစိတ်၊အာရုံ', 'Kelas kata: n, vs', 'このお料理は、パリのエスプリを意識して、味付けしてみました。', 'Masakan ini dibumbui untuk membangkitkan semangat Paris.', 'N3'),
(4373, '異常', 'いじょう', 'keanehan, kelainan, ketidakteraturan', 'strangeness, abnormality, disorder', 'ထူးဆန်းမှု၊ မူမမှန်မှု၊ ချို့ယွင်းမှု', 'Kelas kata: adj-na, n', 'そんなにたくさん食べるのは異常だ。', 'Tidak normal makan terlalu banyak.', 'N3'),
(4374, '泉', 'いずみ', 'musim semi, air mancur', 'spring, fountain', 'နွေဦး၊ စမ်းရေ', 'Kelas kata: n', '泉はおよそ１７０フィートの高さまで温水を吹き出す。', 'Air mancur tersebut mengirimkan air panas hingga ketinggian 170 kaki.', 'N3'),
(4375, 'いずれ', 'いずれ', 'dimana, yang mana, siapa', 'where, which, who', 'ဘယ်၊ ဘယ်၊ ဘယ်သူ', 'Kelas kata: pn', '人間はいずれ死ぬのだ。', 'Manusia akan mati cepat atau lambat.', 'N3'),
(4376, '以前', 'いぜん', 'lalu, sejak, sebelumnya', 'ago, since, before', 'လွန်ခဲ့သော၊ ကတည်းက၊ မတိုင်မီ', 'Kelas kata: n-suf', '彼女はもはや以前の彼女ではない。', 'Dia tidak lagi seperti dulu.', 'N3'),
(4377, '板', 'いた', 'papan, papan', 'board, plank', 'ပျဉ်ပြား၊', 'Kelas kata: n', 'この鉄の板はすずでメッキしてある。', 'Lembaran besi ini dilapisi dengan timah.', 'N3'),
(4378, '偉大', 'いだい', 'kehebatan', 'greatness', 'ကြီးမြတ်ခြင်း', 'Kelas kata: adj-na', 'リンカーンは偉大な政治家であった。', 'Lincoln adalah seorang negarawan yang hebat.', 'N3'),
(4379, 'いたずら', 'いたずら', 'menggoda, mengerjai, menipu', 'tease, prank, trick', 'ကျီစားခြင်း၊ နောက်ပြောင်ခြင်း၊ လှည့်စားခြင်း။', 'Kelas kata: n, vs', '私はいたずらな子供を大目に見る事ができない。', 'Saya tidak bisa bertoleransi terhadap anak-anak nakal.', 'N3'),
(4380, '痛み', 'いたみ', 'sakit, sakit, perih', 'pain, ache, sore', 'နာကျင်ခြင်း၊ နာကျင်ခြင်း၊ နာကျင်ခြင်း။', 'Kelas kata: n', 'ここにしつこい痛みがあります。', 'Saya merasakan sakit yang berkepanjangan di sini.', 'N3'),
(4381, '至る', 'いたる', 'untuk datang, untuk tiba', 'to come, to arrive', 'လာရန်၊', 'Kelas kata: v5r, vi', 'その語は広い意味を持つに至った。', 'Kata tersebut mempunyai arti yang luas.', 'N3'),
(4382, 'いち', 'いち', 'pasar, adil', 'market, fair', 'စျေးကွက်၊ တရားမျှတသော', 'Kelas kata: n', '市は月曜ごとに立つ。', 'Pasar ini diadakan setiap hari Senin.', 'N3'),
(4383, '位置', 'いち', 'tempat, situasi, posisi', 'place, situation, position', 'နေရာ၊ အခြေအနေ၊ အနေအထား', 'Kelas kata: n, vs', '私はパレードが見えるいい位置にいた。', 'Saya berada dalam posisi yang baik untuk melihat parade.', 'N3'),
(4384, '一時', 'いちじ', 'saat, waktu', 'moment, time', 'ခဏ၊ အချိန်', 'Kelas kata: adv, n', '彼は一時ここに住んでいた。', 'Dia tinggal di sini untuk sementara waktu.', 'N3'),
(4385, '一度に', 'いちどに', 'sekaligus', 'all at once', 'တစ်ချိန်တည်းမှာ', 'Kelas kata: adv', '一度にひとつのことをするようにしなさい。', 'Cobalah melakukan satu hal pada satu waktu.', 'N3'),
(4386, '市場', 'いちば', '() pasar (sebagai sebuah konsep)', '(the) market (as a concept)', '(၎) စျေးကွက် (သဘောတရား)၊', 'Kelas kata: n', '彼は市場に出す牛を育てている。', 'Dia beternak sapi untuk dipasarkan.', 'N3'),
(4387, '一家', 'いっか', 'sebuah rumah, sebuah rumah, sebuah keluarga', 'a house, a home, a family', 'အိမ်၊ အိမ်၊ မိသားစု', 'Kelas kata: n', 'ジョンソン一家はパーティーをするのが大好きだ。', 'Keluarga Johnson senang mengadakan pesta.', 'N3'),
(4388, 'いつか', 'いつか', 'suatu saat, suatu hari nanti, suatu hari nanti', 'sometime, someday, one day', 'တစ်ချိန်ချိန်၊ တစ်နေ့နေ့၊ တစ်နေ့', 'Kelas kata: adv', '彼女はいつかあの山に登るだろう。', 'Dia akan mendaki gunung itu suatu hari nanti.', 'N3'),
(4389, '一種', 'いっしゅ', 'suatu spesies, suatu jenis, suatu keanekaragaman', 'a species, a kind, a variety', 'မျိုးစိတ်၊ တစ်မျိုး၊ အမျိုးမျိုး', 'Kelas kata: n', '記事の論調は一種の悲観論だった。', 'Nada artikelnya adalah pesimisme.', 'N3'),
(4390, '一瞬', 'いっしゅん', 'sesaat, sekejap', 'a moment, an instant', 'ခဏ၊ ခဏ', 'Kelas kata: n, adv', 'それは私にとってはらはらする一瞬だった。', 'Itu adalah momen yang menegangkan bagi saya.', 'N3'),
(4391, '一生', 'いっしょう', 'seumur hidup, seumur hidup, sepanjang hidup', 'whole life, a lifetime, all through life', 'တစ်ဘဝလုံး၊ တစ်သက်လုံး၊ ဘဝတစ်လျှောက်လုံး', 'Kelas kata: n, adj-no', 'あなたは、一生勉強しなければならない。', 'Anda harus mempelajari seluruh hidup Anda.', 'N3'),
(4392, '一層', 'いっそう', 'lebih banyak lagi, lebih banyak lagi, lebih banyak lagi', 'much more, still more, all the more', 'များများ ၊ များများ ၊ များများ ၊', 'Kelas kata: adv', '君が一緒だったおかげで休日がいっそう楽しめた。', 'Aku lebih menikmati liburan ini karena bisa bersamamu.', 'N3'),
(4393, '一体', 'いったい', 'satu benda, satu tubuh, apa sebenarnya?', 'one object, one body, what on earth?', 'အရာဝတ္ထုတစ်ခု၊ ခန္ဓာကိုယ်တစ်ခု၊ မြေကြီးပေါ်မှာ ဘာလဲ။', 'Kelas kata: adv', '一体どこで彼に会ったんだ。', 'Di mana kamu bertemu dengannya?', 'N3'),
(4394, '一致', 'いっち', 'kebetulan, kesepakatan, kesesuaian', 'coincidence, agreement, conformity', 'တိုက်ဆိုင်မှု၊ သဘောတူညီချက်၊ ညီညွတ်မှု', 'Kelas kata: n, vs', '彼は言葉と行動が一致していない。', 'Tindakannya tidak sesuai dengan perkataannya.', 'N3'),
(4395, 'いつでも', 'いつでも', '(pada) kapan saja, selalu, setiap saat', '(at) any time, always, at all times', '(at) အချိန်တိုင်း၊ အမြဲ၊ အချိန်တိုင်း', 'Kelas kata: adv', '私はいつでも喜んでお手伝いします。', 'Saya selalu siap membantu Anda.', 'N3'),
(4396, '一般', 'いっぱん', 'umum, liberal, universal', 'general, liberal, universal', 'ယေဘူယျ၊ လစ်ဘရယ်၊ စကြာဝဠာ', 'Kelas kata: adj-no, n', 'その理論はまだ一般に認められていない。', 'Teorinya belum diterima.', 'N3'),
(4397, '一方', 'いっぽう', 'di sisi lain, sementara itu, saja', 'on the other hand, meanwhile, only', 'တစ်ဖက်ကလည်း၊', 'Kelas kata: conj', '一方は赤で、また一方は白である。', 'Yang satu berwarna merah dan yang lainnya berwarna putih.', 'N3'),
(4398, 'いつまでも', 'いつまでも', 'selamanya, untuk kebaikan, selamanya', 'forever, for good, eternally', 'ထာဝရ၊ ကောင်းမြတ်သော၊ ထာဝရ', 'Kelas kata: adv', '私はいつまでも彼の名を覚えている。', 'Aku masih ingat namanya.', 'N3'),
(4399, '移動', 'いどう', 'pemindahan, migrasi, perpindahan', 'removal, migration, movement', 'ဖယ်ရှားခြင်း၊ ရွှေ့ပြောင်းခြင်း၊ လှုပ်ရှားခြင်း။', 'Kelas kata: n, vs', '彼らはあちこちへと移動してきます。', 'Mereka berpindah dari satu tempat ke tempat lain.', 'N3'),
(4400, '従兄弟', 'いとこ', 'sepupu (laki-laki)', 'cousin (male)', 'ဝမ်းကွဲ (ယောက်ျား)', 'Kelas kata: n', '彼は私の兄ではなくて、いとこである。', 'Dia bukan saudaraku. Dia sepupuku.', 'N3'),
(4401, '稲', 'いね', 'tanaman padi', 'rice-plant', 'စပါးပင်', 'Kelas kata: n', '稲は雨の多い地域で作られる。', 'Padi ditanam di daerah hujan.', 'N3'),
(4402, '居眠り', 'いねむり', 'tertidur, tertidur', 'dozing, nodding off', 'ငုံ့ကာ ခေါင်းညိတ်သည်။', 'Kelas kata: n, vs', '授業中に居眠りすることは許しません。', 'Saya tidak mengizinkan tidur di kelas.', 'N3'),
(4403, '命', 'いのち', 'perintah, keputusan, kehidupan', 'command, decree, life', 'အမိန့်၊ အမိန့်၊ အသက်', 'Kelas kata: n', 'その犬は少女の命を救った。', 'Anjing itu menyelamatkan nyawa gadis itu.', 'N3'),
(4404, '違反', 'いはん', 'pelanggaran (hukum), pelanggaran, pelanggaran', 'violation (of law), transgression, infringement', 'ဖောက်ဖျက်မှု၊ ဖောက်ပြန်မှု၊ ချိုးဖောက်မှု', 'Kelas kata: n, vs', 'それはルール違反です。', 'Itu melanggar aturan.', 'N3'),
(4405, '衣服', 'いふく', 'pakaian', 'clothes', 'အဝတ်', 'Kelas kata: n', '彼らは衣服をほとんど着用しない。', 'Mereka mengenakan pakaian yang sangat sedikit.', 'N3'),
(4406, '居間', 'いま', 'ruang tamu (gaya barat)', 'living room (western style)', 'ဧည့်ခန်း (အနောက်စတိုင်)၊', 'Kelas kata: n', '彼らは居間でお茶を飲んでいます。', 'Mereka sedang minum teh di ruang tamu.', 'N3'),
(4407, '今に', 'いまに', 'tak lama lagi, bahkan sekarang', 'before long, even now', 'မကြာသေးမီ၊ ယခုပင်', 'Kelas kata: adv', '今にバチがあたるぞ。', 'Anda akan mendapatkannya suatu hari nanti.', 'N3'),
(4408, '今にも', 'いまにも', 'kapan saja, segera', 'at any time, soon', 'အချိန်မရွေး၊ မကြာမီ', 'Kelas kata: adv', 'トムは今にもここに来るはずです。', 'Tom akan tiba di sini sebentar lagi.', 'N3'),
(4409, '否', 'いや', 'tidak, tidak', 'no, the noes', 'မဟုတ်ဘူး၊ noes', 'Kelas kata: int', 'いや、当初の考えはそうでした。', 'Atau itulah idenya.', 'N3'),
(4410, '以来', 'いらい', 'sejak itu, selanjutnya', 'since, henceforth', 'ယခုမှစ၍၊', 'Kelas kata: n-suf', '１９８８年以来トムに会っていません。', 'Saya belum pernah bertemu Tom sejak 1988.', 'N3'),
(4411, '依頼', 'いらい', 'permintaan, komisi, pengiriman', 'request, commission, dispatch', 'တောင်းဆိုမှု၊ ကော်မရှင်၊ ပေးပို့မှု', 'Kelas kata: n, vs', '彼女は彼に資金を集めるように依頼した。', 'Dia memintanya untuk mengumpulkan dana.', 'N3'),
(4412, 'いらいら', 'いらいら', 'menjadi gugup, iritasi', 'getting nervous, irritation', 'အာရုံကြောများလာခြင်း၊ ယားယံခြင်း။', 'Kelas kata: vs, n', 'ビルは試験のことでいらいらしている。', 'Bill gugup menghadapi ujian.', 'N3'),
(4413, 'いらっしゃい', 'いらっしゃい', 'selamat datang', 'welcome', 'ကြိုဆိုပါတယ်။', 'Kelas kata: int', 'いるだけ持っていらっしゃい。', 'Silakan bawa sebanyak yang Anda perlukan.', 'N3'),
(4414, '医療', 'いりょう', 'perawatan medis, perawatan medis', 'medical care, medical treatment', 'ဆေးကုသမှု၊ ဆေးကုသမှု', 'Kelas kata: n', '彼は医療に一生を捧げた。', 'Dia mendedikasikan hidupnya untuk pekerjaan medis.', 'N3'),
(4415, '岩', 'いわ', 'batu, karang', 'rock, crag', 'ကျောက်တုံး၊', 'Kelas kata: n', 'この岩は何に似ていますか。', 'Seperti apa rupa batu ini?', 'N3'),
(4416, '祝い', 'いわい', 'perayaan, festival', 'celebration, festival', 'ပွဲတော်၊ ပွဲတော်', 'Kelas kata: n', '私は彼の卒業祝いに電報を打った。', 'Saya mengiriminya pesan ucapan selamat atas kelulusannya.', 'N3'),
(4417, '祝う', 'いわう', 'untuk memberi selamat, untuk merayakan', 'to congratulate, to celebrate', 'ဂုဏ်ပြုရန်၊ ဂုဏ်ပြုရန်', 'Kelas kata: v5u, vt', '私たちは彼の試験合格を祝った。', 'Kami mengucapkan selamat kepadanya karena lulus ujian.', 'N3'),
(4418, '言わば', 'いわば', 'bisa dikatakan begitu', 'so to speak', 'ဒါကြောင့် စကားပြောဖို့', 'Kelas kata: adv', 'この犬は言わばうちの家族の一員だ。', 'Bisa dikatakan, anjing ini adalah anggota keluarga kami.', 'N3'),
(4419, 'いわゆる', 'いわゆる', 'yang disebut, bisa dikatakan begitu', 'the so-called, so to speak', 'ခေါ်လိုက်ရတယ်။', 'Kelas kata: adj-pn', 'これがいわゆる「天ぷら」というものです。', 'Inilah yang kami sebut "tempura".', 'N3'),
(4420, 'インク', 'インク', 'tinta', 'ink', 'မှင်', 'Kelas kata: n', 'あなたの名前はインクで書かなければならない。', 'Anda harus menulis nama Anda dengan tinta.', 'N3'),
(4421, '印刷', 'いんさつ', 'pencetakan', 'printing', 'ပုံနှိပ်ခြင်း။', 'Kelas kata: n, vs', 'そのニュースは急いで印刷された。', 'Berita itu segera dicetak.', 'N3'),
(4422, '印象', 'いんしょう', 'kesan', 'impression', 'အထင်ကြီးမှု၊', 'Kelas kata: n', '彼女は気の利く女の子である印象を強く受けた。', 'Dia menurutku sebagai gadis yang bijaksana.', 'N3'),
(4423, '引退', 'いんたい', 'pensiun', 'retire', 'အနားယူပါ။', 'Kelas kata: n, vs', '彼は商売をたたんで引退した。', 'Dia menjual bisnisnya dan pensiun.', 'N3'),
(4424, '引用', 'いんよう', 'kutipan, kutipan', 'quotation, citation', 'ကိုးကား၊ ကိုးကားချက်', 'Kelas kata: n, vs', 'ハムレットから１行引用できますか。', 'Bisakah Anda mengutip sebaris kalimat Hamlet?', 'N3'),
(4425, 'ウイスキー', 'ウイスキー', 'wiski', 'whisky', 'ဝီစကီ', 'Kelas kata: n', 'ウイスキーは紅茶とよく合う。', 'Wiski sangat cocok dengan teh.', 'N3'),
(4426, 'うがい', 'うがい', 'kumur, bilas mulut', 'gargle, rinse mouth', 'ပလုတ်ကျင်း၊ ပါးစပ်ကို ဆေးကြောပါ။', 'Kelas kata: n, vs', '熱があるので家にいたほうがいい。', 'Saat Anda demam, sebaiknya Anda tinggal di rumah.', 'N3'),
(4427, '受け取る', 'うけとる', 'untuk menerima, untuk mendapatkan, untuk menerima', 'to receive, to get, to accept', 'လက်ခံရန်၊ ရယူရန်၊ လက်ခံရန်', 'Kelas kata: v5r, vt', 'この贈り物は受け取れません。', 'Saya tidak bisa menerima hadiah ini.', 'N3'),
(4428, '動かす', 'うごかす', 'untuk bergerak, untuk bergeser', 'to move, to shift', 'ရွှေ့ရန်၊ ရွှေ့ရန်', 'Kelas kata: v5s, vt', '音楽は気持ちを動かします。', 'Musik menggerakkan perasaan.', 'N3'),
(4429, '兎', 'うさぎ', 'kelinci, kelinci, kelinci', 'rabbit, hare, cony', 'ယုန်၊ ယုန်၊ ကွန်နီ', 'Kelas kata: n', '私はウサギの世話をしなければならない。', 'Saya harus menjaga kelinci-kelinci itu.', 'N3'),
(4430, '牛', 'うし', 'sapi, sapi', 'cattle, cow', 'နွား၊ နွား', 'Kelas kata: n', '彼は市場に出す牛を育てている。', 'Dia beternak sapi untuk dipasarkan.', 'N3'),
(4431, '失う', 'うしなう', 'untuk kalah, untuk berpisah', 'to lose, to part with', 'ဆုံးရှုံးရန်၊ ခွဲရန်', 'Kelas kata: v5u, vt', 'ミスで財産を失った。', 'Kesalahanku membuatku kehilangan banyak uang.', 'N3'),
(4432, '疑う', 'うたがう', 'ragu, tidak percaya, curiga', 'to doubt, to distrust, to be suspicious of', 'သံသယဖြစ်ရန်၊ မယုံကြည်ရန်၊ သံသယဖြစ်ရန်', 'Kelas kata: v5u, vt', '僕の言葉をまだ疑っているんですか。', 'Apakah Anda masih ragu dengan apa yang saya katakan?', 'N3'),
(4433, '宇宙', 'うちゅう', 'alam semesta, kosmos, ruang', 'universe, cosmos, space', 'စကြာဝဠာ၊ စကြဝဠာ၊ အာကာသ', 'Kelas kata: n', '宇宙には限りはない。', 'Tidak ada batasan bagi alam semesta.', 'N3'),
(4434, '移す', 'うつす', 'untuk menghapus, untuk mentransfer, untuk menginfeksi', 'to remove, to transfer, to infect', 'ဖယ်ရှားရန်၊ လွှဲပြောင်းရန်၊ ကူးစက်ရန်', 'Kelas kata: v5s, vt', '知っていることと行動に移すことは別だ。', 'Mengetahui adalah satu hal, dan melakukan adalah hal lain.', 'N3'),
(4435, '訴える', 'うったえる', 'untuk menuntut (seseorang), untuk menggunakan, untuk mengajukan banding', 'to sue (a person), to resort to, to appeal to', '(လူတစ်ဦးကို) တရားစွဲရန်၊ အယူခံဝင်ရန်၊', 'Kelas kata: v1, vt', 'その患者はいつも頭が痛いと訴えている。', 'Pasien selalu mengeluh sakit kepala.', 'N3'),
(4436, 'うなる', 'うなる', 'mengerang, mengerang', 'to groan, to moan', 'ညည်းဖို့၊ ညည်းတယ်။', 'Kelas kata: v5r, vi', 'その犬は小さな男の子に向かって唸った。', 'Anjing itu menggeram pada seorang anak kecil.', 'N3'),
(4437, '奪う', 'うばう', 'untuk merebut', 'to snatch away', 'လုယူရန်', 'Kelas kata: v5u, vt', '彼女は若い男にバッグを奪われた。', 'Tasnya dirampok oleh seorang pria muda.', 'N3'),
(4438, '馬', 'うま', 'kuda, uskup yang dipromosikan (shogi)', 'horse, promoted bishop (shogi)', 'မြင်း၊ ရာထူးတိုး ဘုန်းတော်ကြီး (ရှိုဂီ)၊', 'Kelas kata: n', '馬に乗ることができますか？', 'Bisakah kamu menunggang kuda?', 'N3'),
(4439, '生まれ', 'うまれ', 'kelahiran, tempat lahir', 'birth, birth-place', 'မွေးဖွားရာနေရာ', 'Kelas kata: n', '私は生まれも育ちも東京だ。', 'Saya lahir dan besar di Tokyo.', 'N3'),
(4440, '梅', 'うめ', 'plum, pohon plum, terendah (dari sistem peringkat tiga tingkat)', 'plum, plum-tree, lowest (of a three-tier ranking system)', 'ဇီးသီး၊ ဇီးသီးပင်၊ အနိမ့်ဆုံး (သုံးဆင့်အဆင့်သတ်မှတ်စနစ်)', 'Kelas kata: n', '梅の花は今週が見頃です。', 'Bunga plum sedang dalam kondisi terbaiknya minggu ini.', 'N3'),
(4441, '裏切る', 'うらぎる', 'untuk mengkhianati, untuk mengubah menjadi pengkhianat, untuk mengkhianati', 'to betray, to turn traitor to, to double-cross', 'သစ္စာဖောက်ရန်၊ သစ္စာဖောက်သို့လှည့်ရန်၊ နှစ်ချက်ဖြတ်ရန်', 'Kelas kata: v5r, vt', '私が信じていた人が私を裏切った。', 'Pria yang kupercayai mengkhianatiku.', 'N3'),
(4442, '売れる', 'うれる', 'untuk dijual', 'to be sold', 'ရောင်းချရန်', 'Kelas kata: v1, vi', 'この本は最近よく売れている。', 'Buku ini laris manis akhir-akhir ini.', 'N3'),
(4443, '噂', 'うわさ', 'rumor, laporan, gosip', 'rumour, report, gossip', 'ကောလဟာလ၊ သတင်း၊ အတင်းအဖျင်း', 'Kelas kata: n, vs', 'うわさは四方八方に広がった。', 'Rumor itu menyebar luas.', 'N3'),
(4444, '運', 'うん', 'keberuntungan, keberuntungan', 'fortune, luck', 'ကံတရား၊ ကံတရား', 'Kelas kata: n', 'そうすればやがて運が開けるでしょう。', 'Dan keberuntungan Anda akan segera berubah menjadi lebih baik.', 'N3'),
(4445, '永遠', 'えいえん', 'keabadian, keabadian, keabadian', 'eternity, perpetuity, immortality', 'ထာဝရ၊ နိစ္စ၊ မသေနိုင်', 'Kelas kata: n, adj-no', 'その画家は、いわば永遠の少年だ。', 'Artisnya selamanya laki-laki.', 'N3'),
(4446, '永久', 'えいきゅう', 'keabadian, keabadian, keabadian', 'eternity, perpetuity, immortality', 'ထာဝရ၊ နိစ္စ၊ မသေနိုင်', 'Kelas kata: n, adj-na', '彼は永久に日本を離れた。', 'Dia meninggalkan Jepang untuk selamanya.', 'N3'),
(4447, '営業', 'えいぎょう', 'bisnis, perdagangan, manajemen', 'business, trade, management', 'စီးပွားရေး၊ ကုန်သွယ်မှု၊ စီမံခန့်ခွဲမှု', 'Kelas kata: n, vs', '営業の者と話をしてみました。', 'Saya berbicara dengan staf penjualan kami.', 'N3'),
(4448, '衛星', 'えいせい', 'satelit', 'satellite', 'ဂြိုလ်တု', 'Kelas kata: n', '衛星は今軌道に乗っている。', 'Satelit itu sekarang berada di orbit.', 'N3'),
(4449, '栄養', 'えいよう', 'nutrisi, nutrisi', 'nutrition, nourishment', 'အာဟာရ၊ အာဟာရ', 'Kelas kata: n', 'この魚は安くてしかも栄養がある。', 'Ikan ini murah tapi bergizi.', 'N3'),
(4450, '笑顔', 'えがお', 'wajah tersenyum', 'smiling face', 'ပြုံးနေသောမျက်နှာ', 'Kelas kata: n', '彼らは私を笑顔で迎えてくれた。', 'Mereka menyambutku dengan senyuman.', 'N3'),
(4451, '描く', 'えがく', 'menggambar, melukis, membuat sketsa', 'to draw, to paint, to sketch', 'ရေးဆွဲရန်၊ ပန်းချီဆွဲရန်၊ ပုံကြမ်းဆွဲရန်', 'Kelas kata: v5k, vt', 'やっと絵を描き終えた。', 'Akhirnya, saya menyelesaikan sebuah lukisan.', 'N3'),
(4452, '餌', 'えさ', 'pakan, umpan', 'feed, bait', 'အစာကျွေးပါ။', 'Kelas kata: n', '犬に毎日えさをあげてください。', 'Tolong beri makan anjing itu setiap hari.', 'N3'),
(4453, 'エネルギー', 'エネルギー', 'energi (de: Energie)', 'energy (de: Energie)', 'စွမ်းအင် (Energie)', 'Kelas kata: n', '熱はエネルギーの一種である。', 'Panas adalah salah satu bentuk energi.', 'N3'),
(4454, '得る', 'える', 'untuk mendapatkan, untuk mendapatkan, untuk menang', 'to get, to gain, to win', 'ရယူရန်၊ ရဖို့၊ အနိုင်ယူရန်', 'Kelas kata: v1, vt', '１０チームが賞を得ようと争った。', 'Sepuluh tim bersaing memperebutkan hadiah.', 'N3'),
(4455, '円', 'えん', 'lingkaran, uang', 'circle, money', 'စက်ဝိုင်း၊ ငွေ', 'Kelas kata: n', '私はそのレコードを買うのに３０００円かかった。', 'Saya harus membayar 3.000 yen untuk membeli rekaman itu.', 'N3'),
(4456, '演技', 'えんぎ', 'akting, pertunjukan', 'acting, performance', 'သရုပ်ဆောင်မှု၊ စွမ်းဆောင်ရည်', 'Kelas kata: n, vs', '彼女は演技の才能がある。', 'Dia memiliki kejeniusan dalam akting.', 'N3'),
(4457, '援助', 'えんじょ', 'bantuan, bantuan, dukungan', 'assistance, aid, support', 'အကူအညီ၊ အကူအညီ၊ အထောက်အပံ့', 'Kelas kata: n, vs', '私は喜んであなたの援助をします。', 'Saya akan dengan senang hati membantu Anda.', 'N3'),
(4458, 'エンジン', 'エンジン', 'mesin', 'engine', 'အင်ဂျင်', 'Kelas kata: n', 'そのエンジンは蒸気で動く。', 'Mesinnya digerakkan oleh uap.', 'N3'),
(4459, '演説', 'えんぜつ', 'pidato, alamat', 'speech, address', 'မိန့်ခွန်း၊ လိပ်စာ', 'Kelas kata: n, vs', '彼女たちの演説はすばらしかった。', 'Pidatonya sangat bagus.', 'N3'),
(4460, '演奏', 'えんそう', 'pertunjukan musik', 'musical performance', 'ဂီတဖျော်ဖြေမှု', 'Kelas kata: n, vs', '演奏は終わりかけていた。', 'Pertunjukannya hampir berakhir.', 'N3'),
(4461, '御', 'お', 'terhormat', 'honourable', 'ဂုဏ်ပြုသော', 'Kelas kata: pref', '御社のお考えを先におっしゃってください。', 'Harap beri tahu kami pendapat perusahaan Anda mengenai masalah ini terlebih dahulu.', 'N3'),
(4462, '老い', 'おい', 'usia tua, orang tua, yang tua', 'old age, old person, the old', 'အသက်ကြီး၊ လူအို၊ အရွယ်', 'Kelas kata: n', '少年老い易く学成り難し。', 'Seni itu panjang, waktu cepat berlalu.', 'N3'),
(4463, '追い付く', 'おいつく', 'untuk menyalip, untuk mengejar (dengan)', 'to overtake, to catch up (with)', 'ကျော်တက်ဖို့၊ အမီလိုက်ဖို့၊', 'Kelas kata: v5k, vi', 'トムに追いつくために走らなければならなかった。', 'Saya harus berlari untuk mengejar Tom.', 'N3'),
(4464, '王', 'おう', 'raja, penguasa, penguasa', 'king, ruler, sovereign', 'ဘုရင်၊ မင်း၊ အချုပ်အခြာအာဏာ', 'Kelas kata: n, n-suf', '彼らは王の殺害をたくらんでいる。', 'Mereka berencana membunuh raja.', 'N3'),
(4465, '追う', 'おう', 'untuk mengejar, untuk mengejar', 'to chase, to run after', 'လိုက်ရန်၊ ပြေးရန်', 'Kelas kata: v5u, vt', '今日は時間に追われていてね。', 'Saya terdesak waktu hari ini!', 'N3'),
(4466, '王様', 'おうさま', 'raja', 'king', 'ဘုရင်', 'Kelas kata: n', 'その王様はいつも王冠をかぶっている。', 'Raja selalu memakai mahkota.', 'N3'),
(4467, '王子', 'おうじ', 'pangeran', 'prince', 'မင်းသား', 'Kelas kata: n', '王子は森で道に迷った。', 'Sang pangeran tersesat di hutan.', 'N3'),
(4468, '応じる', 'おうじる', 'untuk merespons, memuaskan, menerima', 'to respond, to satisfy, to accept', 'တုံ့ပြန်ရန်၊ ကျေနပ်ရန်၊ လက်ခံရန်', 'Kelas kata: v1, vi', '彼は収入に応じた生活をしている。', 'Dia memenuhi penghasilannya.', 'N3'),
(4469, '横断', 'おうだん', 'menyeberang', 'crossing', 'ဖြတ်ကျော်ခြင်း။', 'Kelas kata: n, vs', '彼はヨットで太平洋を横断した。', 'Dia menyeberangi Samudera Pasifik dengan perahu layar.', 'N3'),
(4470, '終える', 'おえる', 'untuk menyelesaikan', 'to finish', 'ပြီးအောင်', 'Kelas kata: v1, vt', 'その仕事をもう終えましたか。', 'Apakah Anda sudah selesai dengan pekerjaannya?', 'N3'),
(4471, '大いに', 'おおいに', 'sangat, sangat, sangat', 'very, much, greatly', 'အလွန်၊ အများကြီး', 'Kelas kata: adv', '私は彼を大いに尊敬しています。', 'Saya sangat menghormatinya.', 'N3'),
(4472, '覆う', 'おおう', 'untuk menutupi, untuk menyembunyikan, untuk menyembunyikan', 'to cover, to hide, to conceal', 'ဖုံးကွယ်ရန်၊ ဖုံးကွယ်ရန်၊', 'Kelas kata: v5u, vt', '机はほこりで覆われている。', 'Mejanya tertutup debu.', 'N3'),
(4473, 'オーバー', 'オーバー', 'mantel, ganti', 'overcoat, over', 'overcoat, over', 'Kelas kata: n', 'あなたはオーバーなしですますつもりですか。', 'Apakah Anda bermaksud melakukannya tanpa mantel?', 'N3'),
(4474, '大家', 'おおや', 'tuan tanah, nyonya rumah', 'landlord, landlady', 'အိမ်ရှင်၊ အိမ်ရှင်မ', 'Kelas kata: n', 'その大家は以前は暮らし向きがよかったそうだ。', 'Mereka mengatakan bahwa pemiliknya dulunya berkecukupan.', 'N3'),
(4475, '丘', 'おか', 'bukit, tinggi, bukit kecil', 'hill, height, knoll', 'တောင်၊ အမြင့်၊ ကုန်း', 'Kelas kata: n', 'その丘は見晴らしがよい。', 'Bukit ini memberikan pemandangan yang indah.', 'N3'),
(4476, '沖', 'おき', 'laut terbuka', 'open sea', 'ပွင့်လင်းပင်လယ်', 'Kelas kata: n', 'その島は海岸から１マイル沖にある。', 'Pulau ini terletak satu mil di lepas pantai.', 'N3'),
(4477, '奥', 'おく', 'interior, bagian dalam', 'interior, inner part', 'အတွင်းပိုင်း၊ အတွင်းပိုင်း', 'Kelas kata: n', '彼らはレストランの奥の方に座った。', 'Kelompok itu duduk di belakang restoran.', 'N3'),
(4478, '贈る', 'おくる', 'untuk mengirim, memberi, memberi penghargaan', 'to send, to give to, to award to', 'ပေးပို့ရန်၊ ပေးကမ်းရန်၊ ဆုချီးမြှင့်ရန်', 'Kelas kata: v5r, vt', 'ドロシーは彼にすばらしい贈り物を贈った。', 'Dorothy mengiriminya hadiah bagus.', 'N3'),
(4479, '起こる', 'おこる', 'terjadi, terjadi', 'to occur, to happen', 'ဖြစ်ပေါ်လာရန်၊', 'Kelas kata: v5r, vi', 'あとで起こったことはなお悪かった。', 'Yang terjadi selanjutnya bahkan lebih buruk lagi.', 'N3'),
(4480, '収める', 'おさめる', 'untuk memperoleh, menuai, membayar', 'to obtain, to reap, to pay', 'ရယူရန်၊ ရိတ်ရန်၊ ပေးဆပ်ရန်', 'Kelas kata: v1, vt', 'そのアメリカ映画は大成功を収めた。', 'Film Amerika itu sukses besar.', 'N3'),
(4481, 'おしゃべり', 'おしゃべり', 'ngobrol, ngobrol, omong kosong', 'chattering, talk, idle talk', 'စကားစမြည်ပြောဆိုခြင်း၊ ပျင်းရိစွာပြောဆိုခြင်း။', 'Kelas kata: n, vs', '彼らは天気についておしゃべりした。', 'Mereka mengobrol tentang cuaca.', 'N3'),
(4482, '汚染', 'おせん', 'polusi, kontaminasi', 'pollution, contamination', 'ညစ်ညမ်းမှု၊ ညစ်ညမ်းမှု', 'Kelas kata: n, vs', '汚染が地球を傷つけている。', 'Polusi merusak bumi kita.', 'N3'),
(4483, 'おそらく', 'おそらく', 'mungkin', 'perhaps', 'ဖြစ်ကောင်းဖြစ်နိုင်သည်။', 'Kelas kata: adv', '首相はおそらく辞任するであろう。', 'Perdana Menteri kemungkinan akan mengundurkan diri.', 'N3'),
(4484, '恐れる', 'おそれる', 'untuk takut, untuk ditakuti', 'to fear, to be afraid of', 'ကြောက်ဖို့၊ ကြောက်ဖို့', 'Kelas kata: v1, vt', '大人はしばしば変化を恐れる。', 'Orang lanjut usia sering kali takut akan perubahan.', 'N3'),
(4485, '恐ろしい', 'おそろしい', 'mengerikan, mengerikan', 'terrible, dreadful', 'ကြောက်မက်ဖွယ်ကောင်းသော၊ ကြောက်မက်ဖွယ်ကောင်းသော', 'Kelas kata: adj-i', 'その嵐の天候は恐ろしかった。', 'Cuaca badai sangat buruk.', 'N3'),
(4486, 'お互い', 'おたがい', 'saling, timbal balik, satu sama lain', 'mutual, reciprocal, each other', 'အပြန်အလှန်၊ အပြန်အလှန်၊', 'Kelas kata: n, adj-no', 'お互い相性がいい。', 'Chemistrynya tepat untuk kami.', 'N3'),
(4487, '穏やか', 'おだやか', 'tenang, lembut, tenang', 'calm, gentle, quiet', 'ငြိမ်သက်ခြင်း၊ နူးညံ့သိမ်မွေ့ခြင်း။', 'Kelas kata: adj-na', '海は穏やかに、そしてなめらかに見える。', 'Laut terlihat tenang dan mulus.', 'N3'),
(4488, '男の人', 'おとこのひと', 'laki-laki', 'man', 'လူ', 'Kelas kata: exp, n', '若い男の人がドアの前で歌っています。', 'Seorang pria muda sedang bernyanyi di depan pintu.', 'N3'),
(4489, '劣る', 'おとる', 'tertinggal, menjadi inferior', 'to fall behind, to be inferior to', 'နှိမ့်ချခြင်း၊', 'Kelas kata: v5r, vi', '彼女は、彼より、数学において劣っている。', 'Dia lebih rendah darinya dalam matematika.', 'N3'),
(4490, '鬼', 'おに', 'ogre, iblis, itu (yaitu, dalam permainan kejar-kejaran)', 'ogre, demon, it (i.e., in a game of tag)', 'ဘီလူး၊ နတ်ဆိုး၊ ၎င်း (ဆိုလိုသည်မှာ တဂ်ဂိမ်းတွင်)', 'Kelas kata: n', '遅れたやつは鬼に食われろ。', 'Iblis ambil yang paling belakang.', 'N3'),
(4491, '帯', 'おび', 'pita (misalnya konduksi, valensi)', 'band (e.g. conduction, valence)', 'တီးဝိုင်း (ဥပမာ တင်ဆက်မှု၊ စည်းချက်)', 'Kelas kata: n', '彼女の着物と帯の取り合わせはおつだね。', 'Kombinasi kimono dan obinya keren ya?', 'N3'),
(4492, 'お昼', 'おひる', 'makan siang, siang', 'lunch, noon', 'နေ့လည်စာ၊ နေ့လည်', 'Kelas kata: n', 'お昼をおごってくれたのを覚えてますか。', 'Apakah kamu ingat mentraktirku makan siang?', 'N3'),
(4493, 'オフィス', 'オフィス', 'kantor', 'office', 'ရုံး', 'Kelas kata: n', 'いつでも私のオフィスを訪ねなさい。', 'Hubungi kantor saya kapan saja.', 'N3'),
(4494, '溺れる', 'おぼれる', 'untuk ditenggelamkan, untuk dinikmati', 'to be drowned, to indulge in', 'နစ်မြုပ်ဖို့၊ လုပ်ကြ၊', 'Kelas kata: v1, vi', '彼女は危うく溺れるところだった。', 'Dia hampir tenggelam.', 'N3'),
(4495, 'おまえ', 'おまえ', '(akrab) kamu (bernyanyi), kehadiran (tokoh tinggi)', '(familiar) you (sing), presence (of a high personage)', '(အကျွမ်းတဝင်) သင် (သီဆို)၊ (မြင့်မြတ်သော ပုဂ္ဂိုလ်၏) ရှိနေခြင်း၊', 'Kelas kata: pn', 'お前を娘の夫にしよう。', 'Kamu akan menjadi suami putriku.', 'N3'),
(4496, 'おめでとう', 'おめでとう', 'Selamat!, kesempatan yang baik!', 'Congratulations!, an auspicious occasion!', 'ဂုဏ်ယူပါသည်၊ မင်္ဂလာရှိသော အခါသမယ။', 'Kelas kata: int', 'クリスマスおめでとうございます。', 'Saya mengucapkan Selamat Natal.', 'N3'),
(4497, 'お目に掛かる', 'おめにかかる', 'untuk bertemu (seseorang dengan status lebih tinggi)', 'to meet (someone of higher status)', '(အဆင့်မြင့်သူနှင့်တွေ့ဆုံရန်)', 'Kelas kata: exp, v5r', '家内もお目にかかることを楽しみにしておりますから。', 'Istriku juga akan senang bertemu denganmu.', 'N3'),
(4498, '思い出', 'おもいで', 'kenangan, kenangan, kenangan', 'memories, recollections, reminiscence', 'အမှတ်တရများ၊ အမှတ်တရများ၊ အမှတ်တရများ', 'Kelas kata: n', 'この旅行はいい思い出になるでしょう。', 'Perjalanan ini akan menjadi kenangan yang menyenangkan.', 'N3'),
(4499, '主に', 'おもに', 'terutama, terutama', 'mainly, primarily', 'အဓိကအားဖြင့်၊ အဓိကအားဖြင့်', 'Kelas kata: adv', 'スペインの雨は主に平原に降る。', 'Hujan di Spanyol sebagian besar turun di dataran.', 'N3'),
(4500, '思わず', 'おもわず', 'tidak disengaja, spontan', 'unintentional, spontaneous', 'မရည်ရွယ်ဘဲ၊ အလိုအလျောက်ဖြစ်ခြင်း။', 'Kelas kata: adv', '彼は思わず笑った。', 'Dia tertawa terlepas dari dirinya sendiri.', 'N3'),
(4501, '泳ぎ', 'およぎ', 'berenang', 'swimming', 'ရေကူး', 'Kelas kata: n', 'このごろは子供は学校で泳ぎを習う。', 'Anak-anak belajar berenang di sekolah hari ini.', 'N3'),
(4502, 'およそ', 'およそ', 'tentang, secara kasar, sebagai suatu peraturan', 'about, roughly, as a rule', 'စည်းကမ်းအရ အကြမ်းဖျင်းအားဖြင့်', 'Kelas kata: adv', 'およそどれくらいの価値がありますか。', 'Berapa perkiraan nilainya?', 'N3'),
(4503, '及ぼす', 'およぼす', 'untuk mengerahkan, menyebabkan, untuk berolahraga', 'to exert, to cause, to exercise', 'အားထုတ်ရန်၊ အကြောင်းတရား၊ လေ့ကျင့်ရန်', 'Kelas kata: v5s, vt', 'あなたに被害を及ぼそうなどとは夢にも思いませんでした。', 'Aku tidak pernah bermimpi untuk menyakitimu.', 'N3'),
(4504, '居る', 'おる', 'menjadi (bernyawa), menjadi, ada', 'to be (animate), to be, to exist', 'to be (animate), to be, to exist', 'Kelas kata: v5r, vi', 'おかげで元気にしております。', 'Semuanya baik-baik saja, terima kasih.', 'N3'),
(4505, '降ろす', 'おろす', 'untuk mencatat, meluncurkan, menjatuhkan', 'to take down, to launch, to drop', 'ယူရန်၊ ပစ်ရန်၊ ပစ်ချရန်', 'Kelas kata: v5s, vt', 'あの信号の手前で降ろしてください。', 'Tolong biarkan aku turun di sisi lampu lalu lintas ini.', 'N3'),
(4506, '恩', 'おん', 'nikmat, kewajiban, hutang budi', 'favour, obligation, debt of gratitude', 'ကျေးဇူး၊ တာဝန်၊ ကျေးဇူးကြွေး', 'Kelas kata: n', 'お前は恩を仇で返したな。', 'Anda menggigit tangan yang memberi Anda makan.', 'N3'),
(4507, '温暖', 'おんだん', 'kehangatan', 'warmth', 'နွေးထွေးမှု', 'Kelas kata: adj-na, n', '島の天候はとても温暖です。', 'Pulau ini memiliki iklim sedang.', 'N3'),
(4508, '温度', 'おんど', 'suhu', 'temperature', 'အပူချိန်', 'Kelas kata: n', '物質は温度によって形を変える。', 'Materi berubah bentuknya menurut suhu.', 'N3'),
(4509, '可', 'か', 'lumayan', 'passable', 'ပျော်ပျော်ပါးပါး', 'Kelas kata: n, n-suf', 'この試験は辞書持ち込み可です。', 'Anda dapat menggunakan kamus untuk ujian ini.', 'N3'),
(4510, '課', 'か', 'counter untuk bab (dari sebuah buku)', 'counter for chapters (of a book)', 'အခန်းများ (စာအုပ်တစ်အုပ်) အတွက်ကောင်တာ', 'Kelas kata: ctr', '１０課から始めましょう。', 'Mari kita mulai dengan Pelajaran Sepuluh.', 'N3'),
(4511, 'あいかわらず', 'あいかわらず', 'seperti biasa, seperti biasa, sama saja', 'as ever, as usual, the same', 'ခါတိုင်းလိုပဲ၊ ထုံးစံအတိုင်း၊ အတူတူပါပဲ။', 'Kelas kata: adv, adj-no', '君は相変わらず健康そうに見える。', 'Anda terlihat sehat seperti biasanya.', 'N2'),
(4512, 'アイデア', 'アイデア', 'ide', 'idea', 'စိတ်ကူး', 'Kelas kata: n', 'アイディアが足りないということはない。', 'Tidak ada kekurangan ide.', 'N2'),
(4513, 'あいまい', 'あいまい', 'tidak jelas, ambigu', 'vague, ambiguous', 'ဝိုးတဝါး၊ မရေရာသော', 'Kelas kata: adj-na, n', '彼は私にあいまいな返事をした。', 'Dia memberiku jawaban yang tidak jelas.', 'N2'),
(4514, '遭う', 'あう', 'bertemu, bertemu (nuansa yang tidak diinginkan)', 'to meet, to encounter (undesirable nuance)', 'တွေ့ဆုံရန်၊ တွေ့ကြုံရန် (မလိုလားအပ်သော ကွဲပြားမှု)၊', 'Kelas kata: v5u, vi', '駅へ行く途中でにわか雨に遭った。', 'Saya ketahuan sedang mandi dalam perjalanan ke stasiun.', 'N2'),
(4515, '扇ぐ', 'あおぐ', 'mengipasi, mengepakkan', 'to fan, to flap', 'to fan, to flap', 'Kelas kata: v5g, vt', '彼はあおいで火をおこした。', 'Dia mengipasi api menjadi nyala api.', 'N2'),
(4516, '青白い', 'あおじろい', 'pucat, pucat', 'pale, pallid', 'ဖျော့ဖျော့', 'Kelas kata: adj-i', '彼女はいつも青白い顔をしている。', 'Dia selalu terlihat pucat.', 'N2'),
(4517, '明き', 'あき', 'ruangan, waktu luang, kekosongan', 'room, time to spare, emptiness', 'အခန်း၊ အားလပ်ချိန်၊ အချည်းနှီး', 'Kelas kata: n', '字と字の間の空きをもっと広くしなさい。', 'Sisakan lebih banyak ruang antar karakter.', 'N2'),
(4518, 'あきれる', 'あきれる', 'menjadi takjub, terkejut', 'to be amazed, to be shocked', 'တအံ့တသြဖြစ်အံ့၊', 'Kelas kata: v1, vi', 'あの人にはあきれてしまった。', 'Aku muak dan bosan padanya.', 'N2'),
(4519, 'アクセント', 'アクセント', 'aksen', 'accent', 'လေယူလေသိမ်း', 'Kelas kata: n', 'Australiaという語のアクセントはどこですか。', 'Di mana Anda memberi tekanan pada kata "Australia"?', 'N2'),
(4520, 'あくび', 'あくび', 'menguap', 'yawn', 'သမ်း', 'Kelas kata: n, vs', 'あの先生の講義はあくびが出る。', 'Ceramahnya sangat membosankan.', 'N2'),
(4521, 'あくまで', 'あくまで', 'sampai akhir, sampai akhir, dengan keras kepala', 'to the end, to the last, stubbornly', 'အဆုံးထိ၊ နောက်ဆုံးအထိ ဇွတ်', 'Kelas kata: adv', '彼はその計画にあくまで反対した。', 'Dia menentang rencana itu sampai akhir.', 'N2'),
(4522, '明け方', 'あけがた', 'fajar', 'dawn', 'မိုးသောက်', 'Kelas kata: n, adv', 'その事故は明け方に起こった。', 'Kecelakaan itu terjadi pada dini hari.', 'N2'),
(4523, '挙げる', 'あげる', 'untuk menaikkan, untuk terbang', 'to raise, to fly', 'မြှင့်တင်ရန်၊ ပျံသန်းရန်', 'Kelas kata: v1, vt', '質問があれば右手を挙げて下さい。', 'Jika Anda memiliki pertanyaan, silakan angkat tangan kanan Anda.', 'N2'),
(4524, '揚げる', 'あげる', 'untuk mengangkat, menggoreng', 'to lift, to fry', 'လွှင့်ရန်၊ ကြော်ရန်', 'Kelas kata: v1, vt', '彼はたこを揚げた。', 'Dia menerbangkan layang-layang.', 'N2'),
(4525, '憧れる', 'あこがれる', 'untuk dirindukan, untuk dirindukan, untuk dikagumi', 'to long for, to yearn after, to admire', 'မြတ်နိုးဖို့၊ တောင့်တ၊ မြတ်နိုးဖို့၊', 'Kelas kata: v1, vi', 'あの人達は都会の生活にあこがれている。', 'Mereka merindukan kehidupan kota.', 'N2'),
(4526, '足跡', 'あしあと', 'jejak kaki', 'footprints', 'ခြေရာများ', 'Kelas kata: n', '足跡が床に残っていた。', 'Jejak kaki tertinggal di lantai.', 'N2'),
(4527, '味わう', 'あじわう', 'untuk merasakan, untuk menikmati, untuk menikmati', 'to taste, to savor, to relish', 'မြည်းစမ်းဖို့၊ မြည်းစမ်းဖို့၊ နှစ်သက်ဖို့', 'Kelas kata: v5u, vt', 'あのテーマパークでスリルを味わった。', 'Kami bersenang-senang di taman hiburan.', 'N2'),
(4528, '預かる', 'あずかる', 'untuk tetap dalam tahanan, untuk menerima deposit, untuk mengambil alih', 'to keep in custody, to receive on deposit, to take charge of', 'ချုပ်နှောင်ထားရန်၊ စပေါ်ငွေလက်ခံရန်၊ တာဝန်ခံရန်', 'Kelas kata: v5r, vt', '４時まで荷物を預かっていただけませんか。', 'Bisakah Anda menyimpan tas saya di sini sampai jam empat?', 'N2'),
(4529, '暖まる', 'あたたまる', 'untuk menghangatkan, untuk menjadi hangat', 'to warm up, to get warm', 'နွေးဖို့၊ နွေးဖို့', 'Kelas kata: v5r, vi', 'ここにお掛けになって暖まってください。', 'Duduklah di sini dan hangatkan dirimu.', 'N2'),
(4530, '暖める', 'あたためる', 'untuk menghangatkan, untuk memanaskan', 'to warm, to heat', 'နွေးရန်၊ အပူပေးရန်', 'Kelas kata: v1, vt', 'ミルクを温めてくれませんか。', 'Tolong hangatkan susunya?', 'N2'),
(4531, 'あたりまえ', 'あたりまえ', 'biasa, biasa, biasa saja', 'usual, common, ordinary', 'ပုံမှန်၊ သာမာန်၊ သာမာန်', 'Kelas kata: adj-no, adj-na', 'この問題はあたりまえのやり方では解決しない。', 'Anda tidak dapat menyelesaikan masalah ini dengan cara biasa.', 'N2'),
(4532, 'あちらこちら', 'あちらこちら', 'di sana-sini', 'here and there', 'ဒီမှာရော', 'Kelas kata: pn, adv', 'ヨーロッパをあちらこちら旅行した。', 'Saya melakukan perjalanan keliling Eropa.', 'N2'),
(4533, '厚かましい', 'あつかましい', 'kurang ajar, tidak tahu malu, kurang ajar', 'impudent, shameless, brazen', 'မိုက်မဲသော၊ အရှက်မရှိ၊', 'Kelas kata: adj-i', '彼は厚かましくも助けを求めてきた。', 'Dia tega memintaku untuk membantunya.', 'N2'),
(4534, '圧縮', 'あっしゅく', 'kompresi, kondensasi, tekanan', 'compression, condensation, pressure', 'compression, condensation, ဖိအား', 'Kelas kata: n, vs', 'その気体は圧縮されてボンベに詰め込まれた。', 'Gas tersebut dikompres ke dalam tabung gas.', 'N2'),
(4535, '宛名', 'あてな', 'alamat, arah', 'address, direction', 'လိပ်စာ၊ ဦးတည်ချက်', 'Kelas kata: n', 'この手紙は宛名が違っている。', 'Surat ini salah alamat.', 'N2'),
(4536, 'あてはまる', 'あてはまる', 'untuk dapat diterapkan, untuk termasuk dalam (suatu kategori), untuk memenuhi', 'to be applicable, to come under (a category), to fulfill', 'to be applicable, to come under (acategory), ဖြည့်ဆည်းရန်', 'Kelas kata: v5r, vi', 'この規則は１年生には当てはまらない。', 'Aturan ini tidak berlaku untuk siswa tahun pertama.', 'N2'),
(4537, 'あてはめる', 'あてはめる', 'untuk menerapkan, untuk beradaptasi', 'to apply, to adapt', 'လျှောက်ထားရန်၊ လိုက်လျောညီထွေဖြစ်အောင်', 'Kelas kata: v1, vt', 'この規則は貴方には当てはめることはできない。', 'Aturan ini tidak dapat diterapkan pada Anda.', 'N2'),
(4538, '暴れる', 'あばれる', 'untuk bertindak kasar, mengamuk, berjuang', 'to act violently, to rage, to struggle', 'ကြမ်းတမ်းစွာ ပြုမူခြင်း၊ ဒေါသ ထွက်ခြင်း၊ ရုန်းကန်ခြင်း။', 'Kelas kata: v1, vi', '少年たちは２階でどたばた暴れていた。', 'Anak-anak itu sedang menggedor-gedor di lantai atas.', 'N2'),
(4539, '脂', 'あぶら', 'lemak, lemak, lemak babi', 'fat, tallow, lard', 'အဆီ၊ အရပ်၊ ဝက်ဆီ', 'Kelas kata: n', '肌が脂っぽいのです。', 'Saya memiliki kulit berminyak.', 'N2'),
(4540, 'あぶる', 'あぶる', 'hangus', 'to scorch', 'မီးမြှိုက်ရန်', 'Kelas kata: v5r, vt', 'それは油であぶられた。', 'Itu dimasak dengan minyak.', 'N2'),
(4541, 'あふれる', 'あふれる', 'membanjiri, meluap, meluap', 'to flood, to overflow, to brim over', 'ရေလျှံခြင်း၊ လျှံတက်ခြင်း၊', 'Kelas kata: v1, vi', 'その街は活気にあふれていた。', 'Kota itu penuh dengan aktivitas.', 'N2'),
(4542, '雨戸', 'あまど', 'pintu badai geser', 'sliding storm door', 'မုန်တိုင်းတံခါး', 'Kelas kata: n', '嵐が雨戸をがたがたとならした。', 'Badai mengguncang jendela.', 'N2'),
(4543, '甘やかす', 'あまやかす', 'untuk memanjakan, untuk memanjakan', 'to pamper, to spoil', 'နှိမ့်ချရန်၊', 'Kelas kata: v5s, vt', '私は甘やかされた子供は嫌いだ。', 'Saya tidak suka anak manja.', 'N2'),
(4544, '余る', 'あまる', 'untuk tetap, untuk tersisa, menjadi berlebihan', 'to remain, to be left over, to be in excess', 'ကျန်နေဖို့၊ ကျန်ဖို့၊ ပိုနေဖို့', 'Kelas kata: v5r, vi', '日本では米が、ヨーロッパではワインが余っている。', 'Jepang surplus beras, Eropa surplus anggur.', 'N2'),
(4545, '編物', 'あみもの', 'merajut, jaring', 'knitting, web', 'ချည်ထိုး၊ ဝဘ်', 'Kelas kata: n, adj-no', '彼女はせっせと編み物に精を出していた。', 'Dia sibuk dengan rajutannya.', 'N2'),
(4546, '危うい', 'あやうい', 'berbahaya, kritis, serius', 'dangerous, critical, grave', 'အန္တရာယ်ရှိသော၊ စိုးရိမ်ရသော၊ သင်္ချိုင်း', 'Kelas kata: adj-i', '危うい所を助かった。', 'Aku punya jalan keluar yang sempit.', 'N2'),
(4547, '怪しい', 'あやしい', 'mencurigakan, meragukan, ragu-ragu', 'suspicious, dubious, doubtful', 'သံသယဖြစ်ဖွယ်၊ သံသယဖြစ်ဖွယ်၊', 'Kelas kata: adj-i', '空が怪しい。雨が降るかな。', 'Langit terlihat tidak menyenangkan. Aku ingin tahu apakah akan turun hujan.', 'N2'),
(4548, '荒い', 'あらい', 'kasar, kasar, liar', 'rough, rude, wild', 'ရိုင်းတယ်၊ ရိုင်းတယ်၊ ရိုင်းတယ်။', 'Kelas kata: adj-i', '僕のボスは人使いが荒いんだ。', 'Bos saya adalah seorang supir budak.', 'N2'),
(4549, '粗い', 'あらい', 'kasar, kasar', 'coarse, rough', 'ကြမ်း၊ ကြမ်း', 'Kelas kata: adj-i', '彼女のドレスはきめの粗いウールでできていた。', 'Gaunnya terbuat dari wol kasar.', 'N2'),
(4550, '争う', 'あらそう', 'berselisih, berdebat, berselisih', 'to dispute, to argue, to be at variance', 'ငြင်းခုံရန်၊ ငြင်းခုန်ရန်၊ ကွဲလွဲနေရန်', 'Kelas kata: v5u, vi', '１０チームが賞を得ようと争った。', 'Sepuluh tim bersaing memperebutkan hadiah.', 'N2'),
(4551, '改めて', 'あらためて', 'lain kali, lagi, lagi', 'another time, again, over again', 'နောက်တစ်ကြိမ်၊ ထပ်ခါထပ်ခါ', 'Kelas kata: adv', '改めて言う事はない。', 'Tidak ada hal khusus yang ingin saya katakan.', 'N2'),
(4552, '改める', 'あらためる', 'untuk mengubah, mengubah, mereformasi', 'to change, to alter, to reform', 'ပြောင်းလဲရန်၊ ပြုပြင်ပြောင်းလဲရန်၊ ပြုပြင်ပြောင်းလဲရန်', 'Kelas kata: v1, vt', 'どうして考えを改めたのですか。', 'Apa yang membuatmu berubah pikiran?', 'N2'),
(4553, '著す', 'あらわす', 'untuk menulis, untuk menerbitkan', 'to write, to publish', 'ရေးသားရန်၊ ထုတ်ဝေရန်', 'Kelas kata: v5s, vt', '有名作家はまたベストセラー書を著した。', 'Penulis terkenal menciptakan buku terlaris lainnya.', 'N2'),
(4554, '有難い', 'ありがたい', 'bersyukur, bersyukur, selamat datang', 'grateful, thankful, welcome', 'ကျေးဇူးတင်တယ်၊ ကျေးဇူးတင်တယ်၊ ကြိုဆိုတယ်။', 'Kelas kata: adj-i', 'どんなインプットでもいただければありがたいです。', 'Masukan apa pun akan dihargai!', 'N2'),
(4555, 'あれこれ', 'あれこれ', 'satu hal atau lainnya, ini dan itu, ini atau itu', 'one thing or another, this and that, this or that', 'တစ်ခုမဟုတ်တစ်ခု၊ ဤနှင့်ထို၊ ဤသို့မဟုတ်ထို', 'Kelas kata: adv, pn', 'もうかれこれ１０時です。', 'Sekarang hampir jam sepuluh.', 'N2'),
(4556, 'あわただしい', 'あわただしい', 'sibuk, terburu-buru, bingung', 'busy, hurried, confused', 'အလုပ်ရှုပ်၊ မြန်မြန်၊ ရှုပ်သည်။', 'Kelas kata: adj-i', '飛行機の辺りで人の動きがあわただしかった。', 'Ada banyak aktivitas di sekitar pesawat.', 'N2'),
(4557, 'あわてる', 'あわてる', 'menjadi bingung', 'to become confused', 'စိတ်ရှုပ်လာသည်။', 'Kelas kata: v1, vi', 'その質問で彼はすっかりあわてた。', 'Pertanyaan itu membuatnya kehilangan keseimbangan.', 'N2'),
(4558, '安易', 'あんい', 'santai', 'easy-going', 'သွားလွယ်သည်။', 'Kelas kata: adj-na, n', '彼は彼女を安易な餌で誘き寄せた。', 'Dia memikatnya dengan pernak-pernik.', 'N2'),
(4559, '案外', 'あんがい', 'secara tak terduga', 'unexpectedly', 'မမျှော်လင့်ဘဲ', 'Kelas kata: adv, adv-to', 'ピクニックは案外つまらなかった。', 'Piknik itu mengecewakan.', 'N2'),
(4560, 'アンテナ', 'アンテナ', 'antena', 'antenna', 'အင်တာနာ', 'Kelas kata: n', 'このアンテナを屋根につけると画面がはっきりする。', 'Anda akan mendapatkan gambaran yang jelas dengan antena di atap ini.', 'N2'),
(4561, '言い出す', 'いいだす', 'untuk mulai berbicara, berbicara, menceritakan', 'to start talking, to speak, to tell', 'စကားပြောရန်၊ ပြောရန်၊ ပြောရန်', 'Kelas kata: v5s, vt', 'これはだれかの言い出したことかい。', 'Apakah ini ide orang lain?', 'N2'),
(4562, '言い付ける', 'いいつける', 'untuk memberitahu, untuk memberitahu pada (seseorang), untuk memesan', 'to tell, to tell on (someone), to order', 'ပြောရန်၊ ပြောရန် (တစ်စုံတစ်ဦးကို) အမိန့်ပေးသည်။', 'Kelas kata: v1, vt', '彼はちゃんと私が言いつけておいたとおりにやった。', 'Dia melakukan persis seperti yang saya katakan padanya.', 'N2'),
(4563, '意義', 'いぎ', 'makna, signifikansi', 'meaning, significance', 'အဓိပ္ပါယ်၊ အဓိပ္ပါယ်', 'Kelas kata: n', '彼は重大な意義のある決定を下した。', 'Dia telah mengambil keputusan penting.', 'N2'),
(4564, '生き生き', 'いきいき', 'jelas, hidup', 'vividly, lively', 'မှတ်မှတ်ရရ၊ အသက်ဝင်သည်။', 'Kelas kata: adv, adv-to', '彼は生き生きとした想像力を持っている。', 'Dia memiliki imajinasi yang sangat jelas.', 'N2'),
(4565, 'いきなり', 'いきなり', 'tiba-tiba, tiba-tiba, tiba-tiba', 'abruptly, suddenly, all of a sudden', 'ရုတ်တရက်၊ ရုတ်တရက်၊ ရုတ်တရက်', 'Kelas kata: adv, adj-no', 'そのタクシーはいきなり左に曲がった。', 'Taksi itu tiba-tiba berbelok ke kiri.', 'N2'),
(4566, '育児', 'いくじ', 'pengasuhan anak, keperawatan, pengasuhan', 'childcare, nursing, upbringing', 'ကလေးထိန်း၊ သူနာပြု၊ ပြုစုပျိုးထောင်ခြင်း။', 'Kelas kata: n, vs', 'ほんの一握りの男性しか育児休暇を取りたがらない。', 'Hanya segelintir laki-laki yang mau mengambil cuti mengasuh anak.', 'N2'),
(4567, '幾分', 'いくぶん', 'agak', 'somewhat', 'အတန်ငယ်', 'Kelas kata: adv, n', 'この問題は私にとっては幾分難しい。', 'Masalah ini sulit bagi saya sampai taraf tertentu.', 'N2'),
(4568, '生け花', 'いけばな', 'rangkaian bunga', 'flower arrangement', 'ပန်းစည်း', 'Kelas kata: n', '彼女は生け花の大家になった。', 'Dia telah menjadikan dirinya ahli dalam merangkai bunga.', 'N2'),
(4569, '以後', 'いご', 'setelah ini, mulai sekarang, akhirat', 'after this, from now on, hereafter', 'ဤပြီးနောက်၊ ယခုမှစ၍၊ နောင်ကာလ', 'Kelas kata: n, adv', '以後こんなことはいたしません。', 'Saya tidak akan pernah melakukan ini lagi.', 'N2'),
(4570, '以降', 'いこう', 'terus dan setelahnya, selanjutnya, sesudahnya', 'on and after, hereafter, thereafter', 'နောက်၊ နောင်၊ နောက်', 'Kelas kata: n, adv', 'それ以降彼は辛い一生を送った。', 'Dia menjalani kehidupan yang sulit setelah itu.', 'N2'),
(4571, 'イコール', 'イコール', 'sama', 'equal', 'တန်းတူ', 'Kelas kata: adj-na', '彼らは宗教イコール教会に行くことだと考えている。', 'Mereka menyamakan agama dengan pergi ke gereja.', 'N2'),
(4572, '勇ましい', 'いさましい', 'berani, gagah berani, gagah', 'brave, valiant, gallant', 'ရဲရင့်ခြင်း၊ ရဲရင့်ခြင်း၊ ရဲရင့်ခြင်း။', 'Kelas kata: adj-i', '一人で原始林へ乗り込もうとは君はなんて勇ましいんだ。', 'Betapa beraninya kamu pergi sendirian ke dalam hutan purba!', 'N2'),
(4573, '衣食住', 'いしょくじゅう', 'kebutuhan hidup (makanan,pakaian,dll)', 'necessities of life (food, clothing, etc.)', 'ဘဝအတွက်လိုအပ်သောပစ္စည်းများ (အစားအသောက်၊ အဝတ်အစားစသည်)၊', 'Kelas kata: n', '私達が生きていくためには衣食住が必要です。', 'Kita membutuhkan makanan, pakaian, dan rumah untuk hidup.', 'N2'),
(4574, '意地悪', 'いじわる', 'jahat, pemarah, tidak baik', 'malicious, ill-tempered, unkind', 'ဒေါသကြီးသူ၊ ဒေါသကြီးသူ၊', 'Kelas kata: adj-na, n', '友達に意地悪をしてはいけません。', 'Jangan bersikap kasar pada temanmu.', 'N2'),
(4575, 'いちいち', 'いちいち', 'satu per satu, secara terpisah', 'one by one, separately', 'တစ်ခုပြီးတစ်ခု၊ သီးခြားစီ', 'Kelas kata: n, adv', 'ジョンが品物をいちいち手に取って見た。', 'John mengambil artikel itu satu per satu dan memeriksanya.', 'N2'),
(4576, '一応', 'いちおう', 'sekali, untuk sementara, secara garis besar', 'once, tentatively, in outline', 'အကြမ်းဖျင်းအားဖြင့် တစ်ကြိမ်၊', 'Kelas kata: n, adv', 'ええ、先方から一応返事はありました。', 'Ya, ada semacam balasan dari mereka.', 'N2'),
(4577, '一段と', 'いちだんと', 'lebih besar, lebih banyak, lebih jauh', 'greater, more, further', 'ပိုကြီး၊ ပို၊ နောက်ထပ်', 'Kosakata penting JLPT', '冬は暗くなるのが一段と早くなる。', 'Hari menjadi gelap jauh lebih awal di musim dingin.', 'N2'),
(4578, '一流', 'いちりゅう', 'kelas satu, kelas atas, terutama', 'first class, top grade, foremost', 'ပထမတန်း၊ ထိပ်တန်းအဆင့်', 'Kelas kata: adj-no, n', 'こんな一流選手が相手では勝ち目がない。', 'Kami tidak memiliki peluang melawan para pemain top itu.', 'N2'),
(4579, '一斉', 'いっせい', 'simultan, sekaligus', 'simultaneous, all at once', 'တပြိုင်နက်တည်း၊', 'Kelas kata: adv, n', '彼らは一斉に立ち上がった。', 'Mereka berdiri secara bersamaan.', 'N2'),
(4580, '一旦', 'いったん', 'sekali, sejenak, suatu pagi', 'once, for a moment, one morning', 'တစ်ကြိမ်၊ ခဏ၊ တစ်မနက်', 'Kelas kata: adv', 'いったんしたことは元どおりにならない。', 'Apa yang sudah dilakukan tidak dapat dibatalkan.', 'N2'),
(4581, '一定', 'いってい', 'tetap, menetap, pasti', 'fixed, settled, definite', 'fixed, settled, အတိအကျ', 'Kelas kata: adj-no', '金利自由化の方向性を一定するのはむずかしいことです。', 'Sulit untuk mematok arah deregulasi kepentingan.', 'N2'),
(4582, 'いってらっしゃい', 'いってらっしゃい', 'semoga harimu menyenangkan, hati-hati, sampai jumpa', 'have a good day, take care, see you', 'ကောင်းသောနေ့ဖြစ်ပါစေ၊ ဂရုစိုက်ပါ၊ မင်းကိုတွေ့မယ်။', 'Kelas kata: int', 'そう、いいわよ。いってらっしゃい。でも運転には気を付けてね。', 'Oh baiklah. Sampai jumpa. Tapi mengemudilah dengan hati-hati.', 'N2'),
(4583, 'いつのまにか', 'いつのまにか', 'sebelum seseorang mengetahuinya, tanpa disadari, tanpa disadari', 'before one knows, unnoticed, unawares', 'မသိမီ၊ သတိမပြုမိ၊ သတိမထားမိ', 'Kelas kata: adv', 'いつの間にかボブは外へ出ていた。', 'Bob keluar sebelum aku menyadarinya.', 'N2'),
(4584, '移転', 'いてん', 'bergerak, berpindah, mati', 'moving, transfer, demise', 'ပြောင်းရွှေ့ခြင်း၊ ပြောင်းရွှေ့ခြင်း၊ ကွယ်လွန်ခြင်း။', 'Kelas kata: n, vs', 'ご移転の際はお知らせ下さい。', 'Jika Anda mengubah alamat Anda, harap beri tahu saya.', 'N2'),
(4585, '井戸', 'いど', 'air dengan baik', 'water well', 'ရေတွင်း', 'Kelas kata: n', '井戸には少しの水も無かった。', 'Tidak ada air di dalam sumur.', 'N2'),
(4586, '従姉妹', 'いとこ', 'sepupu (perempuan)', 'cousin (female)', 'ဝမ်းကွဲ (အမျိုးသမီး)', 'Kelas kata: n', '従姉妹の連絡先を教えられなくてごめん。', 'Maaf saya belum bisa memberi Anda info kontak sepupu saya.', 'N2'),
(4587, '威張る', 'いばる', 'untuk menjadi bangga, untuk menyombongkan diri', 'to be proud, to swagger', 'ဂုဏ်ယူဖို့၊ ရင်ကော့ဖို့၊', 'Kelas kata: v5r, vi', 'あの人はあまり威張るから好きになれない。', 'Pria itu terlalu sombong untuk seleraku.', 'N2'),
(4588, '嫌がる', 'いやがる', 'membenci, tidak menyukai', 'to hate, to dislike', 'မုန်းရန်၊ မကြိုက်', 'Kelas kata: v5r, vt', '彼は誤りを認めるのを嫌がらない。', 'Dia tidak merasa segan untuk mengakui kesalahan.', 'N2'),
(4589, 'いよいよ', 'いよいよ', 'semakin banyak, semakin banyak, semakin banyak', 'more and more, all the more, increasingly', 'ပိုများလာတယ်၊ အားလုံးက ပိုများလာတယ်။', 'Kelas kata: adv', 'いよいよ千載一遇のチャンスがめぐってきた。', 'Akhirnya, peluang satu juta pun tiba.', 'N2'),
(4590, '煎る', 'いる', 'untuk mengeringkan, menggoreng', 'to parch, to fry', 'to parch, ကြော်ရန်', 'Kelas kata: v5r, vt', '彼はコーヒー豆をいっている。', 'Dia sedang memanggang biji kopi.', 'N2'),
(4591, '炒る', 'いる', 'untuk memanggang, mengeringkan, bersulang', 'to roast, to parch, to toast', 'ကင်ရန်၊ ကြော်ရန်၊ ကြော်ရန်', 'Kelas kata: v5r, vt', '彼はコーヒー豆をいっている。', 'Dia sedang memanggang biji kopi.', 'N2'),
(4592, '入れ物', 'いれもの', 'wadah, kotak, wadah', 'container, case, receptacle', 'container ၊ case ၊ receptacle ၊', 'Kelas kata: n', '眼窩とは、目をいれている骨のいれもののことです。', 'Rongga mata adalah wadah tulang tempat mata berada.', 'N2'),
(4593, 'インキ', 'インキ', 'tinta', 'ink', 'မှင်', 'Kelas kata: n', '印刷インキが不足している。', 'Persediaan tinta cetak terbatas.', 'N2'),
(4594, 'インタビュー', 'インタビュー', 'wawancara', 'interview', 'အင်တာဗျူး', 'Kelas kata: n, vs', '彼がインタビューで言ったことは理にかなっている。', 'Apa yang dia katakan dalam wawancaranya masuk akal.', 'N2'),
(4595, '引力', 'いんりょく', 'gravitasi', 'gravity', 'ဆွဲငင်အား', 'Kelas kata: n', 'ニュートンは引力の法則を確立した。', 'Newton menetapkan hukum gravitasi.', 'N2'),
(4596, 'ウーマン', 'ウーマン', 'wanita', 'woman', 'မိန်းမ', 'Kelas kata: n', '彼女はウーマンリブ運動の指導者だと言われている。', 'Dia dikatakan sebagai pemimpin gerakan pembebasan perempuan.', 'N2'),
(4597, 'ウール', 'ウール', 'wol', 'wool', 'သိုးမွေး', 'Kelas kata: n', '彼はウールと綿の区別がつかない。', 'Dia tidak bisa membedakan wol dari kapas.', 'N2'),
(4598, 'ウエートレス', 'ウエートレス', 'pelayan', 'waitress', 'စားပွဲထိုး', 'Kelas kata: n', 'ウエートレスはテーブルの上に白いテーブルクロスをかけた。', 'Pelayan membentangkan kain putih di atas meja.', 'N2'),
(4599, '植木', 'うえき', 'semak taman, pohon, tanaman pot', 'garden shrubs, trees, potted plant', 'ဥယျာဉ်ချုံပင်များ၊ သစ်ပင်များ၊ အိုးပင်များ', 'Kelas kata: n', '母は植木の世話をよくする人だ。', 'Ibuku merawat tanaman dengan baik.', 'N2'),
(4600, '飢える', 'うえる', 'kelaparan', 'to starve', 'ငတ်ဖို့', 'Kelas kata: v1, vi', '彼は飢えた者に食を与えた。', 'Dia menyediakan makanan kepada mereka yang lapar.', 'N2'),
(4601, '浮かぶ', 'うかぶ', 'untuk mengapung, untuk naik ke permukaan, untuk datang ke pikiran', 'to float, to rise to surface, to come to mind', 'ပေါ်ဖို့၊ ပေါ်ဖို့၊ ပေါ်ဖို့၊ သတိရဖို့', 'Kelas kata: v5b, vi', '浮かんだと思うとまた沈む。', 'Sekarang naik, sekarang tenggelam.', 'N2'),
(4602, '浮かべる', 'うかべる', 'melayang, mengekspresikan, melihat (sedih, senang)', 'to float, to express, to look (sad, glad)', 'မျှောရန်၊ ဖော်ပြရန်၊ ကြည့်ရန် (ဝမ်းနည်း၊ ဝမ်းသာ)', 'Kelas kata: v1, vt', '彼は小さな船を水に浮かべている。', 'Dia sedang mengarungi perahu kecil di atas air.', 'N2'),
(4603, '浮く', 'うく', 'mengapung, menjadi gembira, menjadi lepas', 'to float, to become merry, to become loose', 'မျှောခြင်း၊ ရွှင်မြူးခြင်း၊', 'Kelas kata: v5k, vi', 'それから彼女はあおむけに浮いていた。', 'Lalu dia melayang telentang.', 'N2'),
(4604, '承る', 'うけたまわる', '(rendah hati) mendengar, diberitahu, mengetahui', '(humble) to hear, to be told, to know', '(ကြားသိရန်) နှိမ့်ချပြောဆိုခြင်း။', 'Kelas kata: v5r, vt', 'ご用は承っておりますか。', 'Apakah ada yang menunggumu?', 'N2'),
(4605, '受取', 'うけとり', 'tanda terima', 'receipt', 'ပြေစာ', 'Kelas kata: n', 'お受け取りくださって幸いに存じます。', 'Anda sangat baik hati menerimanya.', 'N2'),
(4606, '受け持つ', 'うけもつ', 'untuk mengambil (bertanggung jawab) atas', 'to take (be in) charge of', 'တာဝန်ယူရန်', 'Kelas kata: v5t, vt', '費用を受け持つ者に決定権がある。', 'Siapa pun yang membayar si peniup seruling akan menentukan nadanya.', 'N2'),
(4607, '薄暗い', 'うすぐらい', 'redup, suram', 'dim, gloomy', 'မှိန်မှိန်', 'Kelas kata: adj-i', '薄暗い光の中で彼の顔を見た。', 'Aku melihat wajahnya dalam cahaya redup.', 'N2'),
(4608, '打合せ', 'うちあわせ', 'pertemuan bisnis, pengaturan sebelumnya, janji temu', 'business meeting, previous arrangement, appointment', 'လုပ်ငန်းအစည်းအဝေး၊ ယခင်အစီအစဉ်၊ ချိန်းဆိုမှု', 'Kelas kata: n, vs', '打ち合わせは来週に延期になった。', 'Pertemuan itu ditunda hingga minggu depan.', 'N2'),
(4609, 'うっかり', 'うっかり', 'sembarangan, tanpa berpikir, tanpa sengaja', 'carelessly, thoughtlessly, inadvertently', 'ပေါ့ပေါ့ဆဆ၊ မတွေးဘဲ၊ မရည်ရွယ်ဘဲ', 'Kelas kata: adv, adv-to', 'うっかりそれを忘れるところだったわ。', 'Aku hampir melupakan semua hal itu.', 'N2'),
(4610, '映す', 'うつす', 'memproyeksikan, merefleksikan, melemparkan (bayangan)', 'to project, to reflect, to cast (shadow)', 'project, to reflect, tocast (အရိပ်)၊', 'Kelas kata: v5s, vt', '一本の高い木が水面に長い影を映している。', 'Sebatang pohon tinggi memproyeksikan bayangan panjangnya di atas air.', 'N2'),
(4611, '映る', 'うつる', 'untuk dipantulkan, untuk diselaraskan dengan, untuk keluar (foto)', 'to be reflected, to harmonize with, to come out (photo)', 'ရောင်ပြန်ဟပ်ရန်၊ သဟဇာတဖြစ်ရန်၊ ထွက်လာရန် (ဓာတ်ပုံ)', 'Kelas kata: v5r, vi', 'カーテンに女の子の影が映った。', 'Siluet seorang gadis muncul di tirai.', 'N2'),
(4612, '写る', 'うつる', 'untuk difoto, untuk diproyeksikan', 'to be photographed, to be projected', 'ဓာတ်ပုံရိုက်ဖို့၊ ပုံဖော်ဖို့', 'Kelas kata: v5r, vi', 'うまく写っているといいですが。', 'Saya harap hasilnya bagus.', 'N2'),
(4613, 'うどん', 'うどん', 'mie (Jepang)', 'noodles (Japanese)', 'ခေါက်ဆွဲ (ဂျပန်)', 'Kelas kata: n', 'そばはそば粉から、うどんやきしめんは普通の小麦粉からできてるの。', 'Soba terbuat dari tepung soba, dan udon serta kishimen terbuat dari tepung terigu biasa.', 'N2'),
(4614, '有無', 'うむ', 'ya atau tidak, keberadaan, indikator bendera (comp)', 'yes or no, existence, flag indicator (comp)', 'ဟုတ်သည်ဖြစ်စေ၊ မရှိသည်ဖြစ်စေ ဖြစ်တည်မှု၊ အလံညွှန်ပြချက် (comp)', 'Kelas kata: n', '排卵の有無を調べる方法はありますか？', 'Apakah ada cara untuk memeriksa ovulasi?', 'N2'),
(4615, '埋める', 'うめる', 'untuk mengubur, untuk mengisi, untuk mengisi (kursi, posisi kosong)', 'to bury, to fill up, to fill (a seat, a vacant position)', 'မြေမြှုပ်ရန်၊ ဖြည့်ရန်၊ ဖြည့်ရန် (ထိုင်ခုံ၊ လစ်လပ်နေရာ)၊', 'Kelas kata: v1, vt', '犬はよく骨を地面に埋める。', 'Anjing sering mengubur tulang.', 'N2'),
(4616, '敬う', 'うやまう', 'untuk menunjukkan rasa hormat, untuk menghormati', 'to show respect, to honour', 'လေးစားဖို့၊ ဂုဏ်ပြုဖို့', 'Kelas kata: v5u, vt', '私は、年上の人を敬うように教えられた。', 'Saya diajari untuk menghormati orang yang lebih tua.', 'N2'),
(4617, '裏返す', 'うらがえす', 'untuk membalik bagian dalam ke luar, untuk membalikkan (sesuatu).', 'to turn inside out, to turn (something) over', 'အတွင်းဘက်သို့လှည့်ရန်၊ တစ်ခုခုကိုလှည့်ရန်', 'Kelas kata: v5s, vt', '彼はシャツを裏返しに着ていた。', 'Dia mengenakan kemejanya luar dalam.', 'N2'),
(4618, '裏口', 'うらぐち', 'pintu belakang, pintu masuk belakang', 'backdoor, rear entrance', 'backdoor ၊ နောက်ဝင်ပေါက်', 'Kelas kata: n', '彼は裏口入学した。', 'Dia membeli jalannya ke perguruan tinggi.', 'N2'),
(4619, '占う', 'うらなう', 'meramalkan, meramalkan', 'to forecast, to predict', 'ခန့်မှန်းရန်၊ ခန့်မှန်းရန်', 'Kelas kata: v5u, vt', '私は運勢を占ってもらった。', 'Aku sudah diramal.', 'N2'),
(4620, '恨み', 'うらみ', 'kebencian', 'resentment', 'နာကြည်းမှု', 'Kelas kata: n', 'リサはスタンに恨みがある。', 'Lisa menaruh dendam terhadap Stan.', 'N2'),
(4621, '羨ましい', 'うらやましい', 'iri, patut ditiru', 'envious, enviable', 'မနာလို၊ မနာလို', 'Kelas kata: adj-i', 'あなたがとても羨ましい。', 'Aku sangat iri padamu.', 'N2'),
(4622, '羨む', 'うらやむ', 'untuk iri', 'to envy', 'မနာလိုရန်', 'Kelas kata: v5m, vt', '彼らは私たちの成功をうらやんでいる。', 'Mereka iri dengan kesuksesan kita.', 'N2'),
(4623, '売上', 'うりあげ', 'jumlah terjual, hasil', 'amount sold, proceeds', 'ရောင်းရငွေ၊ ပမာဏ', 'Kelas kata: n', '今年の売り上げは倍増と見込んでいます。', 'Penjualan akan berlipat ganda tahun ini.', 'N2'),
(4624, '売り切れ', 'うりきれ', 'terjual habis', 'sold-out', 'ရောင်းထွက်', 'Kelas kata: adj-no, n', '切符はすべて売り切れです。', 'Semua tiket terjual habis.', 'N2'),
(4625, '売り切れる', 'うりきれる', 'untuk terjual habis', 'to be sold out', 'ရောင်းထွက်ရန်', 'Kelas kata: v1, vi', 'そのケーキはすぐに売り切れるでしょう。', 'Kuenya mungkin akan segera terjual habis.', 'N2'),
(4626, '売れ行き', 'うれゆき', 'penjualan', 'sales', 'အရောင်း', 'Kelas kata: n', '売れ行きは目標に達しなかった。', 'Penjualan tidak mencapai tujuan mereka.', 'N2'),
(4627, 'うろうろ', 'うろうろ', 'berkeliaran, mengembara tanpa tujuan', 'loiteringly, aimless wandering', 'စူးစူးဝါးဝါး၊ ရည်ရွယ်ချက်မဲ့ လမ်းလျှောက်ခြင်း။', 'Kelas kata: adv, adv-to', '今日一日当ても無くうろうろした。', 'Saya berkeliaran tanpa tujuan sepanjang hari.', 'N2'),
(4628, '運河', 'うんが', 'kanal, jalur air', 'canal, waterway', 'မြောင်း၊ ရေလမ်း', 'Kelas kata: n', 'この船は大きすぎて運河を通れない。', 'Kapal ini terlalu besar untuk melewati kanal.', 'N2'),
(4629, 'うんと', 'うんと', 'banyak sekali, sangat banyak', 'a great deal, very much', 'အများကြီးပါပဲ။', 'Kelas kata: adv', '彼は金がうんとあって使えない。', 'Dia mempunyai lebih banyak uang daripada yang bisa dia gunakan.', 'N2'),
(4630, '英文', 'えいぶん', 'kalimat dalam bahasa Inggris', 'sentence in English', 'အင်္ဂလိပ်လိုဝါကျ', 'Kelas kata: n', '彼は英文の手紙の書き方をしりません。', 'Dia tidak tahu cara menulis surat dalam bahasa Inggris.', 'N2'),
(4631, 'ええと', 'ええと', 'coba kulihat, ya, eh....', 'let me see, well, er....', 'ကြည့်ခွင့်ပေးပါနော်...', 'Kelas kata: int', 'ええと、私はジョギングはよいと思う。', 'Menurutku jogging itu bagus.', 'N2'),
(4632, '液体', 'えきたい', 'cair, cair', 'liquid, fluid', 'အရည်၊ အရည်', 'Kelas kata: n', '水と石油は共に液体である。', 'Air dan minyak sama-sama berbentuk cairan.', 'N2'),
(4633, 'エチケット', 'エチケット', 'etiket', 'etiquette', 'ကျင့်ဝတ်', 'Kelas kata: n', 'それはエチケットの問題だ。', 'Ini masalah etiket.', 'N2'),
(4634, '絵の具', 'えのぐ', 'warna, cat', 'colors, paints', 'အရောင်များ၊ ဆေးများ', 'Kelas kata: exp, n', '赤い絵の具に青い絵の具を混ぜなさい。', 'Campurkan cat merah dengan cat biru.', 'N2'),
(4635, 'エプロン', 'エプロン', 'celemek', 'apron', 'မျက်နှာဖုံး', 'Kelas kata: n', 'エプロンの紐を結んでください。', 'Ikat celemeknya.', 'N2'),
(4636, '偉い', 'えらい', 'hebat, terkenal, terkemuka', 'great, celebrated, eminent', 'ကြီးမြတ်သော၊ ဂုဏ်ပြု၊ ထင်ရှားသော', 'Kelas kata: adj-i', '私はあの人が将来偉くなると見取った。', 'Saya melihat potensi hal-hal besar dalam dirinya.', 'N2'),
(4637, '宴会', 'えんかい', 'pesta, perjamuan', 'party, banquet', 'ပါတီ၊ ပွဲ', 'Kelas kata: n', '宴会はたけなわだった。', 'Perjamuan berlangsung lancar.', 'N2'),
(4638, '園芸', 'えんげい', 'hortikultura, berkebun', 'horticulture, gardening', 'ပန်းမန်၊ ဥယျာဉ်ခြံမြေ', 'Kelas kata: n, adj-no', '彼女は園芸の入門書を読んでいる。', 'Dia sedang membaca manual tentang berkebun.', 'N2'),
(4639, '演劇', 'えんげき', 'bermain (teater)', 'play (theatrical)', 'ပြဇာတ် (ပြဇာတ်)', 'Kelas kata: n, adj-no', '私はイギリス演劇を勉強しています。', 'Saya sedang mempelajari drama bahasa Inggris.', 'N2'),
(4640, '円周', 'えんしゅう', 'keliling', 'circumference', 'လုံးပတ်', 'Kelas kata: n, adj-no', '円周の長さの求め方ってどうでしたっけ？忘れました。', 'Bagaimana cara mendapatkan panjang keliling? saya sudah lupa.', 'N2'),
(4641, '遠足', 'えんそく', 'perjalanan, mendaki, piknik', 'trip, hike, picnic', 'ခရီး၊ တောင်တက်၊ ပျော်ပွဲစား', 'Kelas kata: n, vs', '全体として、遠足は楽しかった。', 'Secara keseluruhan, tamasya itu menyenangkan.', 'N2'),
(4642, '延長', 'えんちょう', 'perpanjangan, pemanjangan, pemanjangan', 'extension, elongation, prolongation', 'extension, elongation, prolongation များ', 'Kelas kata: n, vs', '宿泊をもう一晩延長できますか。', 'Bolehkah saya memperpanjang masa menginap saya satu malam lagi?', 'N2'),
(4643, '煙突', 'えんとつ', 'cerobong asap', 'chimney', 'မီးခိုးခေါင်းတိုင်', 'Kelas kata: n', 'あの煙突はとても高い。', 'Cerobong asap itu sangat tinggi.', 'N2'),
(4644, '追い掛ける', 'おいかける', 'untuk mengejar atau berlari setelah seseorang, untuk lari ke bawah, untuk mengejar', 'to chase or run after someone, to run down, to pursue', 'လိုက်ရန် သို့မဟုတ် ပြေးရန်၊ ပြေးရန်၊ လိုက်ရန်', 'Kelas kata: v1, vt', '犬が猫を追いかけていた。', 'Seekor anjing sedang mengejar kucing.', 'N2'),
(4645, '追い越す', 'おいこす', 'untuk lulus (misalnya mobil), untuk melampaui jarak, untuk melampaui', 'to pass (e.g. car), to outdistance, to outstrip', 'ဖြတ်သန်းရန် (ဥပမာ ကား)၊ အဝေးမှ၊ အဝေးသို့', 'Kelas kata: v5s, vt', 'うさぎはかめに追い越された。', 'Kelinci dikalahkan oleh kura-kura.', 'N2'),
(4646, 'オイル', 'オイル', 'oli, oli mesin, minyak tanah', 'oil, engine oil, kerosene', 'ဆီ၊ အင်ဂျင်ဆီ၊ ရေနံဆီ', 'Kelas kata: n', '新しいオイル・タンカーが進水した。', 'Sebuah kapal tanker minyak baru diluncurkan.', 'N2'),
(4647, '応援', 'おうえん', 'bantuan, bantuan, pertolongan', 'aid, assistance, help', 'အကူအညီ၊ အကူအညီ၊ အကူအညီ', 'Kelas kata: n, vs', '何事が起ころうとも、君を応援するよ。', 'Aku akan mendampingimu apapun yang terjadi.', 'N2'),
(4648, '王女', 'おうじょ', 'putri', 'princess', 'မင်းသမီး', 'Kelas kata: n', '王女があくどい化粧をしていた。', 'Sang putri memakai terlalu banyak riasan.', 'N2'),
(4649, '応対', 'おうたい', 'menerima, menangani', 'receiving, dealing with', 'လက်ခံခြင်း၊ ဆက်ဆံခြင်း။', 'Kelas kata: n, vs', 'その女店員が私に応対してくれた。', 'Gadis penjual itu menungguku.', 'N2'),
(4650, '往復', 'おうふく', '(sehari-hari) pulang pergi, datang dan pergi, tiket pulang pergi', '(colloquial) round trip, coming and going, return ticket', '(အသွားအပြန်) အသွားအပြန်၊ အသွားအပြန် လက်မှတ်', 'Kelas kata: n, vs', '往復ですか、片道ですか。', 'Pulang pergi atau sekali jalan?', 'N2'),
(4651, '欧米', 'おうべい', 'Eropa dan Amerika, Barat', 'Europe and America, the West', 'ဥရောပနှင့် အမေရိက၊ အနောက်နိုင်ငံများ', 'Kelas kata: n', '医学では日本は欧米に追いつきました。', 'Jepang telah menyusul Eropa dan Amerika dalam bidang kedokteran.', 'N2'),
(4652, '応用', 'おうよう', 'penerapannya, digunakan secara praktis', 'application, put to practical use', 'အသုံးချ၍ လက်တွေ့အသုံးချပါ။', 'Kelas kata: n, vs', 'その発見はいろいろな用途に応用できる。', 'Kita dapat menerapkan penemuan ini untuk berbagai kegunaan.', 'N2'),
(4653, 'オーケストラ', 'オーケストラ', 'orkestra', 'orchestra', 'သံစုံတီးဝိုင်း', 'Kelas kata: n', '指揮者はオーケストラの指揮をする。', 'Seorang konduktor mengarahkan orkestra.', 'N2'),
(4654, 'おおざっぱ', 'おおざっぱ', 'kasar (tidak tepat), luas, samar', 'rough (not precise), broad, sketchy', 'ကြမ်းတမ်းသော (မတိကျသော)၊ ကျယ်ပြန့်သည်၊ ပေ့ါ', 'Kelas kata: adj-na', 'あの人って大ざっぱな性格だからね。', 'Dia tipe orang yang tidak mengkhawatirkan detail.', 'N2'),
(4655, '大通り', 'おおどおり', 'jalan utama', 'main street', 'အဓိကလမ်း', 'Kelas kata: n', '私は大通りをずっと一人で歩いた。', 'Saya berjalan di sepanjang jalan utama.', 'N2'),
(4656, 'オートメーション', 'オートメーション', 'otomatisasi', 'automation', 'အလိုအလျောက်စနစ်', 'Kelas kata: n', '生産性はオートメーションの徹底によって向上する。', 'Produksi meningkat dengan menjadi lebih otomatis.', 'N2'),
(4657, 'オーバーコート', 'オーバーコート', 'mantel', 'overcoat', 'ကုတ်အင်္ကျီ', 'Kelas kata: n', 'とても寒かったのにもかかわらず、その子供はオーバーコートを身につけていなかった。', 'Anak itu tidak mengenakan mantel meskipun cuaca sangat dingin.', 'N2'),
(4658, 'おおよそ', 'おおよそ', 'tentang, secara kasar, sebagai suatu peraturan', 'about, roughly, as a rule', 'စည်းကမ်းအရ အကြမ်းဖျင်းအားဖြင့်', 'Kelas kata: adv', '彼女のおおよその年齢しか知らない。', 'Kami hanya dapat mengetahui perkiraan usianya.', 'N2'),
(4659, 'お帰り', 'おかえり', 'kembali, selamat datang', 'return, welcome', 'ပြန်လာပါ၊ ကြိုဆိုပါ။', 'Kelas kata: n', 'あなたのお帰りを一日千秋の思いでお待ちしています。', 'Aku tidak sabar menunggu sampai aku melihatmu.', 'N2'),
(4660, 'おかけください', 'おかけください', 'silakan duduk, silakan duduk', 'please sit down, please have a seat', 'ကျေးဇူးပြုပြီး ထိုင်ပါ၊ ထိုင်ပါ။', 'Kelas kata: exp', 'いいえ、はじめに９番におかけ下さい。', 'Tidak, silakan hubungi nomor sembilan terlebih dahulu.', 'N2'),
(4661, 'おかげさまで', 'おかげさまで', 'Terima kasih Tuhan, terima kasih padamu', 'Thanks to god, thanks to you', 'ဘုရားသခင်ကိုကျေးဇူးတင်ပါတယ်၊ မင်းကိုကျေးဇူးတင်တယ်။', 'Kelas kata: exp', 'おかげさまで助かりました。', 'Terima kasih banyak atas bantuan Anda.', 'N2'),
(4662, 'おかず', 'おかず', 'lauk pauk, pendamping lauk nasi', 'side dish, accompaniment for rice dishes', 'အရံဟင်း ၊ ထမင်း နှင့် အတူ', 'Kelas kata: n', '今晩のおかずはもう決めてあります。', 'Saya sudah memutuskan apa yang akan dimasak untuk makan malam.', 'N2'),
(4663, '拝む', 'おがむ', 'beribadah, mengemis, berdoa', 'to worship, to beg, to make a supplication', 'ကိုးကွယ်ရန်၊ တောင်းရမ်းရန်၊', 'Kelas kata: v5m, vt', 'その不届きな野郎の顔を、拝ませてもらうか。', 'Mari kita lihat pria kurang ajar ini.', 'N2'),
(4664, 'お代わり', 'おかわり', 'bantuan kedua, secangkir lagi', 'second helping, another cup', 'ဒုတိယအကူအညီ၊ နောက်တစ်ခွက်', 'Kelas kata: n, vs', 'ライスとキャベツをお代わりお願いします。', 'Bisakah saya punya waktu sebentar untuk makan nasi dan kubis?', 'N2'),
(4665, 'おきのどくに', 'おきのどくに', 'simpati saya, sayang sekali, belasungkawa', 'my sympathies, that''s too bad, my condolences', 'ကိုယ်ချင်းစာတယ်၊ အရမ်းဆိုးတယ်၊ ဝမ်းနည်းတယ်။', 'Kelas kata: exp', 'お姉さんのことはたいへんお気の毒に思います。', 'Aku merasa sangat kasihan pada adikmu.', 'N2'),
(4666, '屋外', 'おくがい', 'di luar ruangan', 'outdoors', 'အပြင်မှာ', 'Kelas kata: n, adj-no', '彼らは屋外スポーツに熱心である。', 'Mereka tertarik pada olahraga luar ruangan.', 'N2'),
(4667, '送り仮名', 'おくりがな', 'bagian kata yang ditulis dalam kana', 'part of word written in kana', 'kana ဖြင့် ရေးသားထားသော စကားလုံး၏ တစ်စိတ်တစ်ပိုင်း', 'Kelas kata: n', 'この漢字、送り仮名が間違ってるよ。', 'Okurigana pada kanji ini salah.', 'N2'),
(4668, 'おげんきで', 'おげんきで', 'hati-hati, tetap sehat (diucapkan saat berpisah)', 'take care, stay well (said when parting)', 'ဂရုစိုက်ပါ၊ နေကောင်းအောင်နေပါ။', 'Kosakata penting JLPT', '彼女が私に近づいてきて「おげんきですか」と言った。', 'Dia mendatangi saya dan berkata, "Apa kabar?"', 'N2'),
(4669, '押える', 'おさえる', 'untuk berhenti, untuk menahan, untuk merebut', 'to stop, to restrain, to seize', 'ရပ်တန့်ရန်၊ ချုပ်ကိုင်ရန်၊ သိမ်းပိုက်ရန်', 'Kelas kata: v1, vt', '私は彼が私の悪口を言っているところを押さえた。', 'Aku memergokinya berbicara buruk tentangku.', 'N2'),
(4670, 'おさきに', 'おさきに', 'sebelumnya, sebelumnya, sebelumnya', 'before, ahead, previously', 'အရင်က၊ ရှေ့၊ အရင်က', 'Kelas kata: adv', 'どうぞ、お先に！', 'Teruskan!', 'N2'),
(4671, '治める', 'おさめる', 'untuk memerintah, untuk mengelola, untuk menundukkan', 'to govern, to manage, to subdue', 'အုပ်ချုပ်ရန်၊ စီမံခန့်ခွဲရန်၊ အုပ်ချုပ်ရန်', 'Kelas kata: v1, vt', 'その王がその国を治めていた。', 'Raja memerintah negara.', 'N2'),
(4672, '納める', 'おさめる', 'untuk memperoleh, menuai, membayar', 'to obtain, to reap, to pay', 'ရယူရန်၊ ရိတ်ရန်၊ ပေးဆပ်ရန်', 'Kelas kata: v1, vt', '資産家は高額の所得税を納めなければならない。', 'Orang kaya harus membayar pajak penghasilan yang besar.', 'N2'),
(4673, '惜しい', 'おしい', 'disesalkan, mengecewakan, berharga', 'regrettable, disappointing, precious', 'ဝမ်းနည်းစရာ၊ စိတ်ပျက်စရာ၊ အဖိုးတန်', 'Kelas kata: adj-i', 'これはまだ捨てるには惜しい。', 'Ini masih terlalu bagus untuk dibuang.', 'N2'),
(4674, '御辞儀', 'おじぎ', 'busur', 'bow', 'ဦးညွှတ်', 'Kelas kata: n, vs', 'どの子も先生にお辞儀した。', 'Setiap anak membungkuk kepada gurunya.', 'N2'),
(4675, '叔父さん', 'おじさん', 'pria paruh baya, paman', 'middle-aged gentleman, uncle', 'လူလတ်ပိုင်း လူကြီးလူကောင်း၊ ဦးလေး', 'Kelas kata: n', 'あなたの叔父さんと話し合いたい。', 'Saya ingin berbicara dengan pamanmu.', 'N2'),
(4676, '小父さん', 'おじさん', 'pria paruh baya, paman', 'middle-aged gentleman, uncle', 'လူလတ်ပိုင်း လူကြီးလူကောင်း၊ ဦးလေး', 'Kelas kata: n', 'あなたの叔父さんと話し合いたい。', 'Saya ingin berbicara dengan pamanmu.', 'N2'),
(4677, '伯父さん', 'おじさん', 'pria paruh baya, paman', 'middle-aged gentleman, uncle', 'လူလတ်ပိုင်း လူကြီးလူကောင်း၊ ဦးလေး', 'Kelas kata: n', 'あなたの叔父さんと話し合いたい。', 'Saya ingin berbicara dengan pamanmu.', 'N2'),
(4678, 'おじゃまします', 'おじゃまします', 'Maafkan saya karena mengganggu Anda', 'Excuse me for disturbing you', 'မင်းကို စိတ်အနှောက်အယှက်ဖြစ်စေတဲ့အတွက် ခွင့်လွှတ်ပါ။', 'Kelas kata: exp', 'お邪魔します。', 'Halo, maaf atas masalah apa pun.', 'N2'),
(4679, 'おしゃれ', 'おしゃれ', 'berpakaian rapi, seseorang berpakaian rapi, sadar mode', 'smartly dressed, someone smartly dressed, fashion-conscious', 'စမတ်ကျကျဝတ်တတ်သူ၊ စမတ်ကျကျဝတ်တတ်သူ၊ ဖက်ရှင်ကျကျ ဝတ်ဆင်တတ်သူ', 'Kelas kata: adj-na', '彼女はオシャレだ。', 'Dia modis.', 'N2'),
(4680, '教わる', 'おそわる', 'untuk diajarkan', 'to be taught', 'သင်ကြားရန်', 'Kelas kata: v5r, vt', 'あなたが教わった事は間違っている。', 'Apa yang diajarkan kepada Anda salah.', 'N2'),
(4681, 'おだいじに', 'おだいじに', 'Jaga dirimu', 'Take care of yourself', 'ကိုယ့်ကိုယ်ကို ဂရုစိုက်ပါ။', 'Kelas kata: exp', 'くれぐれもお体をお大事に。', 'Tolong jaga dirimu baik-baik.', 'N2'),
(4682, '落着く', 'おちつく', 'untuk menenangkan diri, untuk menenangkan diri', 'to calm down, to settle down', 'စိတ်တည်ငြိမ်ဖို့၊ အခြေချဖို့', 'Kelas kata: v5k, vi', '彼は当惑して落ち着きませんでした。', 'Dia merasa tersesat dan tidak nyaman.', 'N2'),
(4683, 'お出掛け', 'おでかけ', 'akan memulai, baru saja akan pergi atau keluar', 'about to start out, just about to leave or go out', 'စတင်တော့မည်၊ ထွက်ခွာရန် သို့မဟုတ် အပြင်ထွက်တော့မည်။', 'Kelas kata: n', 'いつお出かけになりますか。', 'Kapan kamu akan keluar?', 'N2'),
(4684, 'お手伝いさん', 'おてつだいさん', 'pembantu', 'maid', 'အိမ်အကူ', 'Kelas kata: n', 'お手伝いさんたちは主人の命令を実行しようと努めた。', 'Para pelayan berusaha melaksanakan perintah tuannya.', 'N2'),
(4685, 'おどかす', 'おどかす', 'untuk mengancam, untuk memaksa', 'to threaten, to coerce', 'ခြိမ်းခြောက်ရန်၊ အတင်းအကျပ်ခိုင်းစေခြင်း။', 'Kelas kata: v5s, vt', '彼女は猫を脅かして追い払った。', 'Dia menakuti kucing itu.', 'N2'),
(4686, '落し物', 'おとしもの', 'harta benda yang hilang', 'lost property', 'ပစ္စည်း ဆုံးရှုံးတယ်။', 'Kelas kata: n', '落とし物カウンターはどこですか？', 'Dimana yang hilang dan ditemukan?', 'N2'),
(4687, 'おとなしい', 'おとなしい', 'patuh, patuh, pendiam', 'obedient, docile, quiet', 'နာခံမှု၊ သိမ်မွေ့မှု၊ ဆိတ်ငြိမ်မှု', 'Kelas kata: adj-i', '牛は大きくて、おとなしく見えました。', 'Sapi-sapi itu tampak besar dan jinak.', 'N2'),
(4688, '驚かす', 'おどろかす', 'mengejutkan, menakut-nakuti, membuat keributan', 'to surprise, to frighten, to create a stir', 'အံ့သြဖို့၊ ခြောက်ဖို့၊ နှိုးဆော်ဖန်တီးဖို့', 'Kelas kata: v5s, vt', 'その靴の値段の高さには驚かされた。', 'Saya terkejut melihat betapa mahalnya sepatu itu.', 'N2'),
(4689, '各々', 'おのおの', 'masing-masing, setiap, juga', 'each, every, either', 'တစ်ခုချင်း၊ တစ်ခုချင်း၊', 'Kelas kata: n, adv', '学生たちは各々その会合に出席しなければならない。', 'Setiap siswa harus menghadiri pertemuan tersebut.', 'N2'),
(4690, '叔母さん', 'おばさん', 'bibi, wanita paruh baya', 'aunt, middle-aged lady', 'အဒေါ်၊ လူလတ်ပိုင်း အမျိုးသမီး', 'Kelas kata: n', '叔母さんを訪ねた時はすごいごちそうだったね。', 'Sungguh pesta yang luar biasa ketika kami mengunjungi bibiku!', 'N2'),
(4691, '嗚呼', 'ああ', 'Ah!, Oh!, Aduh!', 'Ah!, Oh!, Alas!', 'အိုး !', 'Kelas kata: int', 'ああ、もしかして名前を呼ばれるのが恥ずかしいって？', 'Ah, mungkinkah kamu malu dipanggil dengan nama depanmu?', 'N1'),
(4692, '相', 'あい', 'bersama-sama, saling, sesama', 'together, mutually, fellow', 'အတူတကွ၊ အပြန်အလှန်၊', 'Kelas kata: pref', '彼の思想は時勢と相いれなかった。', 'Ide-idenya tidak selaras dengan perkembangan zaman.', 'N1'),
(4693, '愛想', 'あいそ', 'kesopanan, kesopanan, pujian', 'civility, courtesy, compliments', 'ယဉ်ကျေးခြင်း၊ ယဉ်ကျေးခြင်း၊ ချီးကျူးခြင်း။', 'Kelas kata: n', '彼女はとても愛想のよい隣人だ。', 'Dia adalah tetangga yang paling ramah.', 'N1'),
(4694, '愛憎', 'あいぞう', 'cinta dan benci, suka dan tidak suka', 'love and hate, likes and dislikes', 'အချစ်နဲ့အမုန်း၊ ကြိုက်၊ မကြိုက်', 'Kelas kata: n', 'フロイトは、親子間の愛憎関係をエディプス・コンプレックスとして展開しました。', 'Freud mengembangkan hubungan cinta-benci antara orang tua dan anak sebagai Oedipus Complex.', 'N1'),
(4695, '相対', 'あいたい', 'konfrontasi, menghadapi, di antara kita sendiri', 'confrontation, facing, between ourselves', 'ထိပ်တိုက်ရင်ဆိုင်ခြင်း၊ ရင်ဆိုင်ခြင်း၊', 'Kelas kata: n', 'このため、会談の席の配置では米国と相対して座る場所を求めた。', 'Jadi mereka mencari tempat sedemikian rupa sehingga tempat duduk konferensi menghadapkan mereka pada orang Amerika.', 'N1'),
(4696, '間柄', 'あいだがら', 'hubungan (kapal)', 'relation(ship)', 'ဆက်ဆံရေး(သင်္ဘော)', 'Kelas kata: n', '君と彼とはどういう間柄なのだ。', 'Apa hubunganmu dengannya?', 'N1'),
(4697, '合間', 'あいま', 'selang waktu', 'interval', 'ကြားကာလ', 'Kelas kata: n', '勉強の合間に私はテレビをみた。', 'Saya menonton televisi saat istirahat belajar.', 'N1'),
(4698, '敢えて', 'あえて', 'berani (melakukan), menantang (melakukan)', 'dare (to do), challenge (to do)', 'သတ္တိ (to do)၊ စိန်ခေါ် (to do)၊', 'Kelas kata: adv', 'あえて彼の意見を支持した。', 'Saya berani mendukung pendapatnya.', 'N1'),
(4699, '仰ぐ', 'あおぐ', 'untuk memandang (ke), untuk menghormati, untuk bergantung pada', 'to look up (to), to respect, to depend on', 'to look up (to) လေးစားဖို့၊ အားကိုးတယ်။', 'Kelas kata: v5g, vt', '私は何事にも彼の指導を仰ぐ。', 'Saya mengharapkan arahan darinya dalam segala hal.', 'N1'),
(4700, '垢', 'あか', 'kotoran, kotoran', 'dirt, filth', 'အညစ်အကြေး', 'Kelas kata: n', 'いつもあかだらけで、食事も満足に与えられていない様子でした。', 'Dia selalu kotor dan sepertinya dia tidak diberi cukup makanan.', 'N1'),
(4701, '証', 'あかし', 'bukti, bukti', 'proof, evidence', 'သက်သေ၊ အထောက်အထား', 'Kelas kata: n', 'しかし、あなた方は私たちの証を受け入れません。', 'Namun tetap saja kalian tidak menerima kesaksian kami.', 'N1'),
(4702, '赤字', 'あかじ', 'defisit, masuk ke zona merah', 'deficit, go in the red', 'လိုငွေပြပြီး အနီရောင်ကို သွားပါ။', 'Kelas kata: n', '彼はどうにか赤字を出さずにすんだ。', 'Dia berhasil memenuhi kedua tujuan tersebut.', 'N1'),
(4703, '明かす', 'あかす', 'untuk lulus, menghabiskan, untuk mengungkapkan', 'to pass, spend, to reveal', 'ဖြတ်သန်းရန်၊ သုံးစွဲရန်၊ ဖော်ပြရန်', 'Kelas kata: v5s, vt', '彼は寝ずに一夜を明かした。', 'Dia duduk sepanjang malam.', 'N1'),
(4704, '赤らむ', 'あからむ', 'menjadi merah, memerah, memerah', 'to become red, to redden, to blush', 'အနီရောင်ဖြစ်လာရန်၊ နီရဲလာစေရန်၊ နီရဲလာသည်။', 'Kelas kata: v5m, vi', '青白い彼の顔が興奮で赤らんだ。', 'Wajah pucatnya menunjukkan rona kegembiraan.', 'N1'),
(4705, '上がり', 'あがり', 'kemiringan, pendapatan di muka, hasil panen', 'slope, advance income, crop yield', 'ကုန်းစောင်း၊ ကြိုတင်ဝင်ငွေ၊ သီးနှံအထွက်နှုန်း', 'Kelas kata: n', '道はなだらかな上がりになっていた。', 'Jalan menanjak secara bertahap.', 'N1'),
(4706, '諦め', 'あきらめ', 'pengunduran diri, penerimaan, penghiburan', 'resignation, acceptance, consolation', 'နုတ်ထွက်ခြင်း၊ လက်ခံခြင်း၊ နှစ်သိမ့်ခြင်း။', 'Kelas kata: n', 'サムはあきらめのいいほうだろう？', 'Sam adalah seorang filsuf, bukan?', 'N1'),
(4707, '悪', 'あく', 'jahat, kejahatan', 'evil, wickedness', 'မကောင်းမှု ဒုစရိုက်', 'Kelas kata: n', '彼は人種差別を悪だと決めつけた。', 'Dia mengutuk diskriminasi rasial sebagai kejahatan.', 'N1'),
(4708, 'あくどい', 'あくどい', 'mencolok, mencolok, berlebihan', 'gaudy, showy, excessive', 'အလွန်အကျွံ၊ ဟန်ဆောင်မှု၊ အလွန်အကျွံ', 'Kelas kata: adj-i', 'かなりあくどい事をしてきたそうだな。', 'Saya dengar Anda telah melakukan beberapa hal yang cukup ekstrem.', 'N1'),
(4709, '明くる', 'あくる', 'selanjutnya, berikut', 'next, following', 'နောက်၊ နောက်', 'Kelas kata: adj-pn', '僕は明くる朝パリへ立つことになっていた。', 'Saya berangkat ke Paris keesokan paginya.', 'N1'),
(4710, '顎', 'あご', 'dagu', 'chin', 'မေးစေ့', 'Kelas kata: n', '笑いすぎて、顎がはずれそうになった。', 'Aku tertawa terbahak-bahak hingga rahangku hampir terkilir.', 'N1'),
(4711, '憧れ', 'あこがれ', 'kerinduan, kerinduan, cita-cita', 'yearning, longing, aspiration', 'တောင့်တခြင်း၊ တောင့်တခြင်း၊ ဆန္ဒ', 'Kelas kata: n, adj-no', '同時通訳が彼女の憧れだ。', 'Impiannya adalah menjadi penerjemah simultan.', 'N1'),
(4712, '朝寝坊', 'あさねぼう', 'tidur berlebihan, bangun terlambat', 'oversleeping, late riser', 'oversleeping, late riser', 'Kelas kata: n, vs', '朝寝坊が癖になった。', 'Saya mulai tidur larut pagi.', 'N1'),
(4713, '欺く', 'あざむく', 'untuk menipu', 'to deceive', 'လှည့်စားရန်', 'Kelas kata: v5k, vt', '彼は他人を欺くようなことはしない。', 'Dia tidak bisa menipu orang lain.', 'N1'),
(4714, '鮮やか', 'あざやか', 'hidup, jernih, cemerlang', 'vivid, clear, brilliant', 'ကွက်ကွက်ကွင်းကွင်း၊ ရှင်းရှင်းလင်းလင်း၊ တောက်ပသော', 'Kelas kata: adj-na', '月は鮮やかに輝いていた。', 'Bulan bersinar terang.', 'N1'),
(4715, 'あざ笑う', 'あざわらう', 'untuk mencemooh, mengejek', 'to sneer at, to ridicule', 'ကဲ့ရဲ့ခြင်း၊ လှောင်ပြောင်ခြင်း။', 'Kelas kata: v5u, vt', 'われわれは貧しい人あざ笑ってはいけない。', 'Kita tidak boleh menertawakan orang miskin.', 'N1'),
(4716, '味わい', 'あじわい', 'rasa, makna, makna', 'flavour, meaning, significance', 'အရသာ၊ အဓိပ္ပါယ်၊ အဓိပ္ပါယ်', 'Kelas kata: n, adj-no', 'この酒には独特の味わいがある。', 'Minuman keras ini memiliki cita rasa tersendiri.', 'N1'),
(4717, '焦る', 'あせる', 'menjadi terburu-buru, menjadi tidak sabar', 'to be in a hurry, to be impatient', 'အလျင်လိုခြင်း၊ စိတ်မရှည်ခြင်း။', 'Kelas kata: v5r, vi', '彼は遅れを取り戻そうと焦っている。', 'Dia berusaha mati-matian untuk menebus penundaan itu.', 'N1'),
(4718, '値', 'あたい', 'nilai, harga, biaya', 'value, price, cost', 'တန်ဖိုး၊ စျေးနှုန်း၊ ကုန်ကျစရိတ်', 'Kelas kata: n', '君この車に高い値を付けすぎだよ。', 'Anda meminta terlalu banyak untuk mobil ini.', 'N1'),
(4719, '値する', 'あたいする', 'untuk menjadi layak, untuk layak, untuk pantas', 'to be worth, to deserve, to merit', 'ထိုက်တန်သည်၊ ထိုက်တန်သည်၊ ကုသိုလ်ရရန်', 'Kelas kata: vs-i, vi', 'あの博物館はくるに値する。', 'Museum itu layak untuk dikunjungi.', 'N1'),
(4720, '私', 'あたし', 'saya (perempuan)', 'I (fem)', 'ငါ ( fem )', 'Kelas kata: pn', 'この人、あたしをどなりつけるんですよ！', 'Pria ini meneriakiku!', 'N1'),
(4721, '当たり', 'あたり', 'pukulan, sukses, mencapai sasaran', 'hit, success, reaching the mark', 'ထိတယ်၊ အောင်မြင်တယ်၊ အမှတ်အသားကို ရောက်တယ်။', 'Kelas kata: n', '何回か当たりはあったが針にはかからなかった。', 'Saya mendapat beberapa gigitan, tapi tidak bisa menangkap ikan.', 'N1'),
(4722, '悪化', 'あっか', 'kemunduran, bertambah buruk, kejengkelan', 'deterioration, growing worse, aggravation', 'ယိုယွင်းလာခြင်း၊ ပိုဆိုးလာခြင်း၊ ပိုဆိုးလာခြင်း', 'Kelas kata: n, vs', '日が経つにつれて、天気は次第に悪化しつつあった。', 'Cuaca semakin buruk seiring berjalannya hari.', 'N1'),
(4723, '扱い', 'あつかい', 'pengobatan, pelayanan', 'treatment, service', 'ကုသမှု၊ ဝန်ဆောင်မှု', 'Kelas kata: n', '彼はピストルの扱いに注意を欠いた。', 'Dia ceroboh dalam memegang pistolnya.', 'N1'),
(4724, '呆気ない', 'あっけない', 'tidak cukup, terlalu cepat (pendek, panjang, dll.)', 'not enough, too quick (short, long, etc.)', 'မလုံလောက်ပါ', 'Kelas kata: adj-i', '休暇はいつもあっけなく終わる。', 'Liburan selalu berakhir terlalu cepat.', 'N1'),
(4725, 'あっさり', 'あっさり', 'dengan mudah, siap, cepat', 'easily, readily, quickly', 'လွယ်၊ လွယ်၊ မြန်မြန်', 'Kelas kata: adv, adv-to', '彼はあっさり罪を白状した。', 'Dia mengakui kejahatannya dengan jujur.', 'N1'),
(4726, '圧迫', 'あっぱく', 'tekanan, paksaan, penindasan', 'pressure, coercion, oppression', 'ဖိအား၊ အကျပ်ကိုင်မှု၊ ဖိနှိပ်မှု', 'Kelas kata: n, vs', 'その政府は国民を圧迫した。', 'Pemerintah menindas rakyat.', 'N1'),
(4727, 'アップ', 'アップ', 'naik', 'up', 'တက်', 'Kelas kata: n, n-suf', '物価は毎日アップしている。', 'Harga naik setiap hari.', 'N1'),
(4728, '誂える', 'あつらえる', 'untuk memberi perintah, untuk memesan', 'to give an order, to place an order', 'အမိန့်ပေးဖို့၊ အမိန့်ချဖို့', 'Kelas kata: v1, vt', '私はデパートでオーバーをあつらえた。', 'Saya memesan mantel saya dari department store.', 'N1'),
(4729, '圧力', 'あつりょく', 'stres, tekanan', 'stress, pressure', 'စိတ်ဖိစီးမှု၊ ဖိအား', 'Kelas kata: n', '橋が圧力で落ちた。', 'Jembatan itu runtuh karena tekanan.', 'N1'),
(4730, '宛', 'あて', 'ditujukan kepada', 'addressed to', 'သို့ လိပ်မူထားသည်။', 'Kelas kata: suf', 'あの人達の助力はあてにできないよ。', 'Anda tidak dapat mengandalkan bantuan mereka.', 'N1'),
(4731, '当て', 'あて', 'objek, tujuan, akhir', 'object, aim, end', 'object, aim, end', 'Kelas kata: n', 'その時計は正確で当てにできる。', 'Jamnya akurat dan dapat diandalkan.', 'N1'),
(4732, '宛てる', 'あてる', 'untuk mengatasi', 'to address', 'လိပ်စာ', 'Kelas kata: v1, vt', '同一差出人から同一受取人に宛てて郵袋という、文字通り袋に印刷物を入れて郵送します。', 'Kantong surat dari satu pengirim yang ditujukan kepada satu penerima, seperti namanya, ditujukan untuk mengantarkan sekantong barang cetakan.', 'N1'),
(4733, '後回し', 'あとまわし', 'menunda, menunda', 'putting off, postponing', 'ပိတ်ခြင်း၊ ရွှေ့ဆိုင်းခြင်း။', 'Kelas kata: n', 'その問題は後回しにしよう。', 'Mari kita tinggalkan masalah itu untuk nanti.', 'N1'),
(4734, '油絵', 'あぶらえ', 'lukisan cat minyak', 'oil painting', 'ဆီဆေးပန်းချီ', 'Kelas kata: n', '彼女は油絵を始めた。', 'Dia mulai melukis dengan cat minyak.', 'N1'),
(4735, 'アプローチ', 'アプローチ', 'pendekatan (dalam golf)', 'approach (in golf)', 'ချဉ်းကပ်ခြင်း (ဂေါက်သီးတွင်)', 'Kelas kata: n, vs', 'うまいアプローチだね。', 'Itu pendekatan yang bagus.', 'N1'),
(4736, 'あべこべ', 'あべこべ', 'sebaliknya, berlawanan, terbalik', 'contrary, opposite, inverse', 'ဆန့်ကျင်ဘက်၊ ဆန့်ကျင်ဘက်၊ ပြောင်းပြန်', 'Kelas kata: adj-no, adj-na', 'あなたはシャツをあべこべに着ている。', 'Anda mengenakan baju Anda luar dalam.', 'N1'),
(4737, '甘える', 'あまえる', 'berperilaku seperti anak manja, suka menjilat', 'to behave like a spoiled child, to fawn on', 'ဖောက်ပြန်သောကလေးကဲ့သို့ ပြုမူခြင်း၊', 'Kelas kata: v1, vi', '人の好意に甘えてはいけない。', 'Jangan bergantung pada kebaikan orang lain.', 'N1'),
(4738, '雨具', 'あまぐ', 'perlengkapan hujan', 'rain gear', 'မိုးစက်ကိရိယာ', 'Kelas kata: n', '雨具をお持ちになりましたか。', 'Apakah kamu membawa perlengkapan hujan?', 'N1'),
(4739, '甘口', 'あまくち', 'rasa manis, kelembutan, sanjungan', 'sweet flavour, mildness, flattery', 'ချိုမြိန်သောအရသာ၊ နူးညံ့သိမ်မွေ့ခြင်း၊ ချော့မော့ခြင်း။', 'Kelas kata: adj-na, adj-no', 'そんな甘口には乗らないよ。', 'Sanjungan semacam itu tidak akan membawa Anda kemana-mana.', 'N1'),
(4740, 'アマチュア', 'アマチュア', 'amatir', 'amateur', 'အပျော်တမ်း', 'Kelas kata: n, adj-no', '私のおじはアマチュアのクリケット選手です。', 'Paman saya adalah pemain kriket amatir.', 'N1'),
(4741, '網', 'あみ', 'bersih, jaringan', 'net, network', 'net, network', 'Kelas kata: n', '網にかかったものは何でも魚だ。', 'Semua ikan yang masuk ke jaring.', 'N1'),
(4742, '操る', 'あやつる', 'untuk memanipulasi, mengoperasikan, menarik tali', 'to manipulate, to operate, to pull strings', 'ကြိုးကိုင်ရန်၊ လည်ပတ်ရန်၊ ကြိုးဆွဲရန်', 'Kelas kata: v5r, vt', 'あの通訳は５か国語を自由に操る。', 'Penerjemah itu adalah ahli lima bahasa.', 'N1'),
(4743, '危ぶむ', 'あやぶむ', 'takut, was-was, ragu-ragu', 'to fear, to have misgivings, to be doubtful', 'ကြောက်ရွံ့ခြင်း ၊ လွဲမှားခြင်း ၊ ယုံမှားခြင်း ၊', 'Kelas kata: v5m, vt', '彼は死んでいるのではないかと危ぶまれている。', 'Mereka takut dia mungkin sudah mati.', 'N1'),
(4744, 'あやふや', 'あやふや', 'tidak pasti, tidak jelas, ambigu', 'uncertain, vague, ambiguous', 'မသေချာ၊ မရေရာသော၊ မရှင်းလင်းသော', 'Kelas kata: adj-na', 'あやふやな手つきで一枚の紙を動かした。', 'Dia meraba-raba selembar kertas.', 'N1'),
(4745, '過ち', 'あやまち', 'kesalahan, kesalahan, kecerobohan', 'fault, error, indiscretion', 'အမှား၊ အမှား၊ သတိလက်လွတ်', 'Kelas kata: n', '彼は過ちをあからさまに白状した。', 'Dia secara terbuka mengakui kesalahannya.', 'N1'),
(4746, '歩み', 'あゆみ', 'berjalan', 'walking', 'လမ်းလျှောက်', 'Kelas kata: n', '何て歩みののろいやつだろう。', 'Betapa lambatnya kamu!', 'N1'),
(4747, '歩む', 'あゆむ', 'berjalan, berjalan kaki', 'to walk, to go on foot', 'လမ်းလျှောက်ဖို့၊ ခြေလျင်သွားပါ။', 'Kelas kata: v5m, vi', 'ビルはあの会社の社長になるまで成功への道を歩み続けた。', 'Bill menaiki tangga kesuksesan hingga ia menjadi presiden perusahaan.', 'N1'),
(4748, 'あら', 'あら', 'oh, ah, tempat bertengger bermata gergaji (Niphon spinosus)', 'oh, ah, saw-edged perch (Niphon spinosus)', 'အိုး၊ အာ့', 'Kelas kata: int', 'あら、アンジェラと呼んでください。', 'Oh, tolong panggil aku Angela.', 'N1'),
(4749, '荒らす', 'あらす', 'untuk membuang limbah, untuk menghancurkan, untuk merusak', 'to lay waste, to devastate, to damage', 'စွန့်ပစ်ရန်၊ ဖျက်ဆီးရန်၊ ပျက်စီးရန်', 'Kelas kata: v5s, vt', '掲示板を荒らす人の精神状態がわかりません。', 'Saya hanya tidak mengerti apa yang ada dalam pikiran orang-orang yang mengolok-olok forum.', 'N1'),
(4750, '争い', 'あらそい', 'perselisihan, perselisihan, pertengkaran', 'dispute, strife, quarrel', 'ငြင်းခုံခြင်း၊ ရန်ဖြစ်ခြင်း၊ ရန်ဖြစ်ခြင်း။', 'Kelas kata: n', '金銭のことで彼と争いになった。', 'Saya bertengkar dengannya karena uang.', 'N1'),
(4751, '改まる', 'あらたまる', 'untuk diperbarui', 'to be renewed', 'သက်တမ်းတိုးရန်', 'Kelas kata: v5r, vi', '長年の習慣はなかなか改まらない。', 'Kebiasaan lama sulit dihilangkan.', 'N1'),
(4752, '荒っぽい', 'あらっぽい', 'kasar, kasar', 'rough, rude', 'ကြမ်းတမ်းသော၊ ရိုင်းစိုင်းသော', 'Kelas kata: adj-i', 'ボクシングは必ずしも荒っぽいスポーツではない。', 'Tinju tidak selalu merupakan olahraga yang kasar.', 'N1'),
(4753, 'アラブ', 'アラブ', 'Arab', 'Arab', 'အာရပ်', 'Kelas kata: n', '日本は石油をアラブ諸国に頼っている。', 'Jepang bergantung pada negara-negara Arab untuk minyak.', 'N1'),
(4754, 'あられ', 'あられ', 'jenis kue, karakter kartun', 'kind of cookie, cartoon character', 'cookie အမျိုးအစား၊ ကာတွန်းဇာတ်ကောင်', 'Kelas kata: n', '突然敵の爆弾が雨あられと我々に降り注いだ。', 'Tiba-tiba, bom musuh menimpa kami seperti hujan.', 'N1'),
(4755, '有様', 'ありさま', 'keadaan, kondisi, keadaan', 'state, condition, circumstances', 'အခြေအနေ၊ အခြေအနေ၊ အခြေအနေ', 'Kelas kata: n', 'それはさんたんたる有様だった。', 'Itu adalah pemandangan yang menakutkan.', 'N1'),
(4756, 'ありのまま', 'ありのまま', 'kebenaran, fakta, apa adanya', 'the truth, fact, as it is', 'အမှန်တရား၊ အဖြစ်မှန်၊', 'Kelas kata: adj-no, adv', 'ありのままの事実を伝えることは難しい。', 'Sulit untuk mengatakan fakta sebenarnya.', 'N1'),
(4757, 'アルカリ', 'アルカリ', 'alkali', 'alkali', 'အယ်ကာလီ', 'Kelas kata: n', 'アルカリは酸を中和する。', 'Alkali menetralkan asam.', 'N1'),
(4758, 'アルミ', 'アルミ', 'aluminium (Al), aluminium', 'aluminum (Al), aluminium', 'အလူမီနီယမ် (Al) အလူမီနီယံ', 'Kelas kata: n', 'アルミニウム、マグネシウム、シリコンなどの粉末が爆発する。', 'Bubuk aluminium, magnesium, silikon, dll meledak.', 'N1'),
(4759, 'アワー', 'アワー', 'jam', 'hour', 'နာရီ', 'Kelas kata: n', 'ラッシュアワーの交通渋滞にあった。', 'Saya terjebak di jam sibuk.', 'N1'),
(4760, '合わす', 'あわす', 'untuk bergabung bersama, untuk menghadapi, untuk bersatu', 'to join together, to face, to unite', 'ပေါင်းစည်းရန်၊ မျက်နှာချင်းဆိုင်ရန်၊ စည်းလုံးရန်', 'Kelas kata: v5s, vt', '彼はその破片をくっつけ合わした。', 'Dia menyatukan pecahan-pecahan itu.', 'N1'),
(4761, '合わせ', 'あわせ', 'bersama-sama, berlawanan, menghadap', 'joint together, opposite, facing', 'အတူတကွ၊ ဆန့်ကျင်ဘက်၊ မျက်နှာချင်းဆိုင်', 'Kelas kata: n, n-suf', '旅行代理店に問い合わせてみよう。', 'Mari kita bertanya pada agen perjalanan.', 'N1'),
(4762, 'アンケート', 'アンケート', 'kuesioner (fr: enquete), survei', 'questionnaire (fr: enquete), survey', 'မေးခွန်းလွှာ (fr: enquete), စစ်တမ်း', 'Kelas kata: n', 'このアンケート、項目が多すぎて記入する気になれないよ。', 'Saya tidak merasa ingin mengisi kuesioner ini. Ada terlalu banyak item.', 'N1'),
(4763, 'アンコール', 'アンコール', 'ulangan', 'encore', 'အကျုံးဝင်သည်။', 'Kelas kata: n, vs', 'そのピアニストはアンコールに応えて２曲弾いた。', 'Pianis memainkan dua encore.', 'N1'),
(4764, '暗殺', 'あんさつ', 'pembunuhan', 'assassination', 'လုပ်ကြံမှု', 'Kelas kata: n, vs', '彼らは大統領の暗殺を企てた。', 'Mereka berusaha membunuh presiden.', 'N1'),
(4765, '暗算', 'あんざん', 'aritmatika mental', 'mental arithmetic', 'စိတ်ပိုင်းဆိုင်ရာဂဏန်းသင်္ချာ', 'Kelas kata: n, vs', '彼は暗算をするほど頭が良くない。', 'Dia tidak punya cukup otak untuk melakukan penjumlahan di kepalanya.', 'N1'),
(4766, '暗示', 'あんじ', 'petunjuk, saran', 'hint, suggestion', 'အရိပ်အမြွက်၊ အကြံပြုချက်', 'Kelas kata: n, vs', '彼の言葉は何を暗示しているのか。', 'Apa maksud kata-katanya?', 'N1'),
(4767, '案じる', 'あんじる', 'menjadi cemas, merenung', 'to be anxious, to ponder', 'စိတ်တိုခြင်း၊ ဆင်ခြင်ခြင်း', 'Kelas kata: v1, vt', '母は私の将来を案じている。', 'Ibu cemas tentang masa depanku.', 'N1'),
(4768, '安静', 'あんせい', 'istirahat', 'rest', 'အနားယူပါ။', 'Kelas kata: n, adj-na', 'しばらく安静にしておきなさい。', 'Diam di tempat tidur untuk sementara waktu.', 'N1'),
(4769, '案の定', 'あんのじょう', 'tentu saja, seperti biasa', 'sure enough, as usual', 'ထုံးစံအတိုင်းပဲ သေချာတယ်။', 'Kelas kata: adv', '案の定、彼は疑念を抱いていた。', 'Benar saja, dia memiliki keraguan.', 'N1'),
(4770, 'いい加減', 'いいかげん', 'moderat, kanan, acak', 'moderate, right, random', 'အလယ်အလတ်၊ ညာဘက်၊ ကျပန်း', 'Kelas kata: adj-na', 'この静かな生活にはいい加減飽きてしまった。', 'Aku sudah bosan dengan kehidupan yang tenang ini.', 'N1'),
(4771, '言い訳', 'いいわけ', 'alasan, penjelasan', 'excuse, explanation', 'အကြောင်းပြချက်၊ ရှင်းလင်းချက်', 'Kelas kata: n, vs', '彼は言い訳を考え出すのがうまい。', 'Dia pandai mencari alasan.', 'N1'),
(4772, '家出', 'いえで', 'lari dari rumah, meninggalkan rumah', 'running away from home, leaving home', 'အိမ်ကနေထွက်ပြေး၊', 'Kelas kata: n, vs', '舞が家出を敢行する、直前のことだろう。', 'Itu mungkin terjadi sebelum Mai mengambil langkah drastis untuk meninggalkan rumah.', 'N1'),
(4773, '生かす', 'いかす', 'untuk menghidupkan kembali, untuk menyadarkan, untuk memanfaatkan', 'to revive, to resuscitate, to make use of', 'ပြန်လည်ရှင်သန်ရန်၊ ပြန်လည်ရှင်သန်ရန်၊ အသုံးပြုရန်', 'Kelas kata: v5s, vt', '心停止の患者を応急処置で生かした。', 'Kami menggunakan tindakan darurat untuk menghidupkan kembali pasien serangan jantung.', 'N1'),
(4774, '如何に', 'いかに', 'bagaimana?, dengan cara apa?, berapa?', 'how?, in what way?, how much?', 'ဘယ်လို၊ ဘယ်နည်း၊ ဘယ်လောက်', 'Kelas kata: adv', '私は教育がいかに重要であるかを痛感しました。', 'Saya menyadari betapa pentingnya pendidikan.', 'N1'),
(4775, '如何にも', 'いかにも', 'memang, sungguh, ungkapan yang berarti persetujuan', 'indeed, really, phrase meaning agreement', 'အမှန်ပင်၊ အမှန်တကယ် အဓိပ္ပါယ်ရှိသော သဘောတူညီချက်', 'Kelas kata: adv', 'いかにもビルのやりそうなことだ。', 'Itu semua tentang Bill.', 'N1'),
(4776, '怒り', 'いかり', 'kemarahan, kebencian', 'anger, hatred', 'ဒေါသ၊ မုန်းတီးခြင်း။', 'Kelas kata: n', '私の誤りは彼の怒りを招いた。', 'Kesalahanku menimbulkan kemarahannya.', 'N1'),
(4777, '粋', 'いき', 'cantik, gaya, kemurnian', 'chic, style, purity', 'အမိုက်စား၊ စတိုင်၊ သန့်ရှင်းမှု', 'Kelas kata: adj-na, n', '今日の格好はとっても粋ですね。', 'Kamu tampak tajam hari ini.', 'N1'),
(4778, '異議', 'いぎ', 'keberatan, perbedaan pendapat, protes', 'objection, dissent, protest', 'ကန့်ကွက်ခြင်း၊ ကန့်ကွက်ခြင်း၊ ကန့်ကွက်ခြင်း။', 'Kelas kata: n', 'だからといって異議があるわけではない。', 'Bukan berarti saya keberatan.', 'N1'),
(4779, '意気込む', 'いきごむ', 'untuk menjadi antusias', 'to be enthusiastic about', 'စိတ်အားထက်သန်ဖို့', 'Kelas kata: v5m, vi', '初めから意気込みすぎると、途中で息切れするぞ。', 'Anda harus mengatur kecepatan diri sendiri atau Anda akan tersedak di tengah jalan.', 'N1'),
(4780, '行き違い', 'いきちがい', 'kesalahpahaman, keterasingan, perselisihan', 'misunderstanding, estrangement, disagreement', 'နားလည်မှုလွဲခြင်း၊ ကွဲလွဲခြင်း၊ သဘောထားကွဲလွဲခြင်း။', 'Kelas kata: n', '私たちの手紙は行き違いになった。', 'Surat-surat kami saling bersilangan.', 'N1'),
(4781, '軍', 'いくさ', 'perang, pertempuran, kampanye', 'war, battle, campaign', 'စစ်ပွဲ၊ တိုက်ပွဲ၊ စည်းရုံးရေး', 'Kelas kata: n', '腹が減っては戦ができぬ。', 'Pasukan bergerak dengan perutnya.', 'N1'),
(4782, '戦', 'いくさ', 'perang, pertempuran, kampanye', 'war, battle, campaign', 'စစ်ပွဲ၊ တိုက်ပွဲ၊ စည်းရုံးရေး', 'Kelas kata: n', '腹が減っては戦ができぬ。', 'Pasukan bergerak dengan perutnya.', 'N1'),
(4783, '育成', 'いくせい', 'membesarkan, melatih, mengasuh', 'rearing, training, nurture', 'ပြုစုပျိုးထောင်ခြင်း၊ လေ့ကျင့်ခြင်း၊ ပြုစုပျိုးထောင်ခြင်း။', 'Kelas kata: n, vs', 'ワインにはいろいろなタイプがあり、それによって育成の仕方もさまざまです。', 'Ada berbagai jenis anggur dan cara pematangannya pun berbeda-beda.', 'N1'),
(4784, '幾多', 'いくた', 'banyak, banyak sekali', 'many, numerous', 'အများကြီး၊ မြောက်မြားစွာ', 'Kelas kata: adj-no, adv', '我々は幾多の困難を克服しなければならない。', 'Kami harus mengatasi sejumlah kesulitan.', 'N1'),
(4785, '活ける', 'いける', 'untuk merangkai (bunga)', 'to arrange (flowers)', '(ပန်းများစီစဉ်ရန်)', 'Kelas kata: v1, vt', '彼女は花を生けるのが好きです。', 'Dia suka merangkai bunga.', 'N1'),
(4786, '意向', 'いこう', 'niat, ide, kecenderungan', 'intention, idea, inclination', 'ရည်ရွယ်ချက်၊ စိတ်ကူး၊ စေတနာ', 'Kelas kata: n', '政府は減税の意向を明言した。', 'Pemerintah telah menyatakan niatnya untuk mengurangi pajak.', 'N1'),
(4787, '移行', 'いこう', 'beralih ke', 'switching over to', 'သို့ပြောင်းခြင်း။', 'Kelas kata: n, vs', '英国は、１９７１年にその貨幣制度を１０進法に移行させた。', 'Pada tahun 1971 Inggris mengubah mata uangnya ke sistem desimal.', 'N1'),
(4788, 'いざ', 'いざ', 'sekarang, ayo (sekarang), baiklah', 'now, come (now), well', 'ကဲ လာ (ကဲ) ကောင်းပြီ။', 'Kelas kata: adv, int', 'いざ投票という時、彼は棄権した。', 'Ketika tiba waktunya untuk memilih, dia abstain.', 'N1'),
(4789, '意地', 'いじ', 'watak, semangat, kemauan', 'disposition, spirit, willpower', 'စိတ်သဘောထား၊ စိတ်ဓာတ်၊ စွမ်းအား', 'Kelas kata: n, adj-no', '彼の意地の悪い発言で、講義が一層激しくなった。', 'Komentar buruknya memicu perdebatan.', 'N1'),
(4790, '碑', 'いしぶみ', 'tugu batu bertuliskan prasasti', 'stone monument bearing an inscription', 'ကမ္ပည်းထိုးထားတဲ့ ကျောက်စာတိုင်', 'Kelas kata: n', '禎子の友人達は、彼女と原爆でなくなったすべての子供達の慰霊碑を建てたいと思った。', 'Teman-teman Sadako ingin membangun monumen untuknya dan semua anak yang tewas akibat bom atom.', 'N1'),
(4791, '移住', 'いじゅう', 'migrasi, imigrasi', 'migration, immigration', 'ရွှေ့ပြောင်းနေထိုင်မှု၊ လူဝင်မှုကြီးကြပ်ရေး', 'Kelas kata: n, vs', '彼らはアメリカに移住するつもりです。', 'Mereka akan beremigrasi ke Amerika.', 'N1'),
(4792, '衣装', 'いしょう', 'pakaian, kostum, pakaian', 'clothing, costume, outfit', 'အဝတ်အစား၊ ဝတ်စုံ၊ ဝတ်စုံ', 'Kelas kata: n', 'ぬれた衣装が彼女の体にくっついていた。', 'Pakaian basah menempel di tubuhnya.', 'N1'),
(4793, '弄る', 'いじる', 'untuk menyentuh, untuk merusak', 'to touch, to tamper with', 'ထိဖို့၊ လက်ဆော့ဖို့', 'Kelas kata: v5r, vt', '書類は勝手にいじられた形跡があった。', 'Dokumen-dokumen itu dirusak.', 'N1'),
(4794, '異性', 'いせい', 'lawan jenis', 'the opposite sex', 'ဆန့်ကျင်ဘက်လိင်', 'Kelas kata: n, adj-no', '私の彼氏、異性の友達が多いのよね。', 'Pacarku punya banyak teman wanita.', 'N1'),
(4795, '遺跡', 'いせき', 'reruntuhan bersejarah (peninggalan, peninggalan)', 'historic ruins (remains, relics)', 'သမိုင်းဝင် အပျက်အစီးများ (အကြွင်းအကျန်များ၊ အမွေအနှစ်များ)', 'Kelas kata: n', '新しい遺跡で未発掘はいくつだったのですか。', 'Berapa banyak situs baru yang ditemukan?', 'N1'),
(4796, '依然', 'いぜん', 'masih, sampai saat ini', 'still, as yet', 'အခုထိ၊', 'Kelas kata: adj-t, adv-to', '３人が依然行方不明です。', 'Tiga orang masih hilang.', 'N1'),
(4797, '依存', 'いぞん', 'ketergantungan, ketergantungan, ketergantungan', 'dependence, dependent, reliance', 'မှီခိုမှု၊ မှီခိုမှု၊ မှီခိုမှု', 'Kelas kata: n, vs', 'それはすべて天候に依存している。', 'Itu semua tergantung pada cuaca.', 'N1'),
(4798, '委託', 'いたく', 'menyerahkan (barang (untuk dijual) ke perusahaan), mempercayakan (orang dengan sesuatu), berkomitmen', 'consign (goods (for sale) to a firm), entrust (person with something), commit', 'ကုမ္ပဏီတစ်ခုသို့ ကုန်ပစ္စည်းများ (ရောင်းရန်)၊ အပ်နှင်းခြင်း (တစ်စုံတစ်ခုနှင့်အတူ လူတစ်ဦး)၊ ကတိပြုခြင်း။', 'Kelas kata: n, vs', 'ベンは日記を弁護士が管理するよう委託した。', 'Ben menyerahkan buku hariannya untuk perawatan pengacara.', 'N1'),
(4799, '頂', 'いただき', '(atas) kepala, puncak, puncak menara', '(top of) head, summit, spire', '(ထိပ်) ခေါင်း၊ ထိပ်၊ ထိပ်', 'Kelas kata: n', '今朝起きてみると、山の頂が雪におおわれていた。', 'Saya terbangun pagi ini dan menemukan puncak gunung tertutup salju.', 'N1'),
(4800, '至って', 'いたって', 'sangat, sangat, sangat', 'very much, exceedingly, extremely', 'အလွန် လွန်စွာ၊ အလွန်လွန်ကဲ၏။', 'Kelas kata: adv', '私は至って健康で、風邪ひとつひきません。', 'Saya cukup sehat dan tidak menderita flu.', 'N1'),
(4801, '痛む', 'いたむ', 'terluka, merasakan sakit, terluka', 'to hurt, to feel a pain, to be injured', 'နာကျင်ဖို့၊ နာကျင်ဖို့၊ ဒဏ်ရာရဖို့', 'Kelas kata: v5m, vi', '彼はいま歯が痛むのでよくかむことができない。', 'Dia tidak bisa mengunyah dengan baik, karena dia sedang sakit gigi sekarang.', 'N1'),
(4802, '痛める', 'いためる', 'menyakiti, melukai, menyebabkan rasa sakit', 'to hurt, to injure, to cause pain', 'နာကျင်စေခြင်း၊ ဒဏ်ရာရစေခြင်း၊ နာကျင်စေခြင်း။', 'Kelas kata: v1, vt', '転んで手首を痛めました。', 'Aku terjatuh dan pergelangan tanganku terluka.', 'N1'),
(4803, '炒める', 'いためる', 'untuk menggoreng', 'to stir-fry', 'မွှေကြော်ရန်', 'Kelas kata: v1, vt', 'ルーは、バターと小麦粉を炒めながら作ります。', 'Roux dibuat sambil memasak tepung dan mentega bersama-sama.', 'N1'),
(4804, '労る', 'いたわる', 'mengasihani, bersimpati, menghibur', 'to pity, to sympathize with, to console', 'သနားဖို့၊ စာနာဖို့၊ ဖြေသိမ့်ဖို့', 'Kelas kata: v5r, vt', '老人をいたわりなさい。', 'Bersikaplah baik kepada orang tua.', 'N1'),
(4805, '一概に', 'いちがいに', 'tanpa syarat, sebagai suatu peraturan', 'unconditionally, as a rule', 'ချွင်းချက်မရှိ၊ စည်းကမ်းအဖြစ်', 'Kelas kata: adv', 'そうですね。一概には言えませんね。', 'Ya, itu tergantung.', 'N1'),
(4806, '一見', 'いちげん', 'asing, belum pernah bertemu sebelumnya', 'unfamiliar, never before met', 'တစ်ခါမှ မကြုံဖူးဘူး။', 'Kelas kata: n', 'あの店、一見さんでも入れるのかな。', 'Saya ingin tahu apakah restoran itu menerima pelanggan asing.', 'N1'),
(4807, '一同', 'いちどう', 'semua yang hadir, semua yang berkepentingan, kita semua', 'all present, all concerned, all of us', 'ပစ္စုပ္ပန်၊ သက်ဆိုင်သူအားလုံး၊ ငါတို့အားလုံး', 'Kelas kata: n, n-suf', '一同を代表して、歓迎の意を表します。', 'Atas nama perusahaan, saya menyambut Anda.', 'N1'),
(4808, '一部分', 'いちぶぶん', 'sebuah bagian', 'a part', 'အစိတ်အပိုင်းတစ်ခု', 'Kelas kata: n', 'その建物の一部分だけが地震で破壊された。', 'Hanya sebagian bangunan yang hancur akibat gempa.', 'N1'),
(4809, '一面', 'いちめん', 'satu sisi, satu fase, halaman depan', 'one side, one phase, front page', 'တစ်ဖက်၊ အဆင့်၊ ရှေ့စာမျက်နှာ', 'Kelas kata: n', '地面は一面の雪に覆われていた。', 'Tanah terletak di bawah selimut salju.', 'N1'),
(4810, '一目', 'いちもく', 'sekilas, sekilas, sekilas', 'a glance, a look, a glimpse', 'တစ်ချက်၊ အကြည့်၊ တစေ့တစောင်း', 'Kelas kata: n, vs', '何としても海をひと目みたいものだ。', 'Aku rindu melihat laut.', 'N1'),
(4811, '一連', 'いちれん', 'seri, rantai, rim (kertas)', 'a series, a chain, a ream (of paper)', 'စီးရီးတစ်ခု၊ ကွင်းဆက်တစ်ခု၊ ream (စက္ကူ)', 'Kelas kata: n, adj-no', '彼らは一連の音楽会を開催した。', 'Mereka mengadakan serangkaian konser.', 'N1'),
(4812, '一括', 'いっかつ', 'semuanya, kumpulan, satu gumpalan', 'all together, batch, one lump', 'တစုတစည်းတည်း သုတ်၊', 'Kelas kata: n, vs', 'それらの議題は一括して取り上げられた。', 'Agenda-agenda tersebut diambil secara berkelompok untuk didiskusikan.', 'N1'),
(4813, '一気', 'いっき', 'minum!(diucapkan berulang kali sebagai penyemangat pesta)', 'drink!(said repeatedly as a party cheer)', 'သောက်ပါ !( ပါတီပွဲ ရွှင်ပွဲအဖြစ် ထပ်ခါထပ်ခါ ပြောသည် )', 'Kelas kata: int', '今こそ一気に取引をまとめるときだ。', 'Sekaranglah waktunya untuk mencapai kesepakatan.', 'N1'),
(4814, '一切', 'いっさい', 'semuanya, semuanya, tanpa kecuali', 'all, everything, without exception', 'အားလုံးကို ခြွင်းချက်မရှိ၊', 'Kelas kata: adv', '彼は私に食べ物を一切くれなかった。', 'Dia tidak memberiku apa pun untuk dimakan.', 'N1'),
(4815, '一心', 'いっしん', 'satu pikiran, sepenuh hati, sepenuh hati', 'one mind, wholeheartedness, the whole heart', 'စိတ်တစ်ခုတည်း၊ နှလုံးသားတစ်ခုလုံး၊ နှလုံးသားတစ်ခုလုံး', 'Kelas kata: adv, n', '彼女は一心に祈っていた。', 'Dia bersemangat dalam berdoa.', 'N1');