export interface DokkaiAudioTrack {
  passageId: string;
  audioUrl: string;
  totalDuration: number;
  title?: string;
}

export const DOKKAI_AUDIO_MANIFEST: Record<string, DokkaiAudioTrack> = {
  "dokkai_n2_1": {
    "passageId": "dokkai_n2_1",
    "audioUrl": "/audio/dokkai/dokkai_n2_1.mp3",
    "totalDuration": 53.28,
    "title": "社内システムの定期メンテナンスに伴う利用停止について"
  },
  "dokkai_n2_2": {
    "passageId": "dokkai_n2_2",
    "audioUrl": "/audio/dokkai/dokkai_n2_2.mp3",
    "totalDuration": 57.58,
    "title": "マンション居住者の皆様へ：粗大ゴミの排出ルールについて"
  },
  "dokkai_n2_3": {
    "passageId": "dokkai_n2_3",
    "audioUrl": "/audio/dokkai/dokkai_n2_3.mp3",
    "totalDuration": 51.07,
    "title": "出張旅費および交通費の精算期日に関する注意喚起"
  },
  "dokkai_n2_4": {
    "passageId": "dokkai_n2_4",
    "audioUrl": "/audio/dokkai/dokkai_n2_4.mp3",
    "totalDuration": 84.65,
    "title": "「先延ばし」の心理と感情のマネジメント"
  },
  "dokkai_n2_5": {
    "passageId": "dokkai_n2_5",
    "audioUrl": "/audio/dokkai/dokkai_n2_5.mp3",
    "totalDuration": 84.7,
    "title": "メッセージアプリの普及と「即レス」の重圧"
  },
  "dokkai_n2_6": {
    "passageId": "dokkai_n2_6",
    "audioUrl": "/audio/dokkai/dokkai_n2_6.mp3",
    "totalDuration": 84.91,
    "title": "中央市立図書館 個人学習ブース利用案内"
  },
  "dokkai_n1_1": {
    "passageId": "dokkai_n1_1",
    "audioUrl": "/audio/dokkai/dokkai_n1_1.mp3",
    "totalDuration": 49.58,
    "title": "科学技術の進歩と人間の主体性"
  },
  "dokkai_n1_2": {
    "passageId": "dokkai_n1_2",
    "audioUrl": "/audio/dokkai/dokkai_n1_2.mp3",
    "totalDuration": 85.15,
    "title": "「間（ま）」の美学と日本文化のコミュニケーション"
  },
  "dokkai_n3_1": {
    "passageId": "dokkai_n3_1",
    "audioUrl": "/audio/dokkai/dokkai_n3_1.mp3",
    "totalDuration": 73.58,
    "title": "日本のビジネス環境における「空気を読む」コミュニケーション"
  },
  "dokkai_n3_2": {
    "passageId": "dokkai_n3_2",
    "audioUrl": "/audio/dokkai/dokkai_n3_2.mp3",
    "totalDuration": 50.47,
    "title": "クラウドサーバー定期更新に伴う一時停止のお知らせ"
  },
  "dokkai_n4_1": {
    "passageId": "dokkai_n4_1",
    "audioUrl": "/audio/dokkai/dokkai_n4_1.mp3",
    "totalDuration": 54.72,
    "title": "アパートのごみの出し方ルールについて"
  },
  "dokkai_n4_2": {
    "passageId": "dokkai_n4_2",
    "audioUrl": "/audio/dokkai/dokkai_n4_2.mp3",
    "totalDuration": 42.07,
    "title": "日本の夏祭りに参加した思い出"
  },
  "dokkai_n5_1": {
    "passageId": "dokkai_n5_1",
    "audioUrl": "/audio/dokkai/dokkai_n5_1.mp3",
    "totalDuration": 27.36,
    "title": "カフェさくら 営業時間のお知らせ"
  },
  "dokkai_n5_2": {
    "passageId": "dokkai_n5_2",
    "audioUrl": "/audio/dokkai/dokkai_n5_2.mp3",
    "totalDuration": 23.78,
    "title": "田中さんからのメール"
  }
};

export function getDokkaiTrack(passageId: string): DokkaiAudioTrack | null {
  return DOKKAI_AUDIO_MANIFEST[passageId] || null;
}
