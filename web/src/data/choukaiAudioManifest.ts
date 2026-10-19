export interface ChoukaiAudioCue {
  turnIndex: number;
  speakerTag: string;
  start: number;
  end: number;
  text: string;
}

export interface ChoukaiQuestionAudioTrack {
  questionId: string;
  audioUrl: string;
  totalDuration: number;
  cues: ChoukaiAudioCue[];
}

export const CHOUKAI_AUDIO_MANIFEST: Record<string, ChoukaiQuestionAudioTrack> = {
  "choukai_1": {
    "questionId": "choukai_1",
    "audioUrl": "/audio/choukai/choukai_1.mp3",
    "totalDuration": 50.28,
    "cues": [
      {
        "turnIndex": 0,
        "speakerTag": "女",
        "start": 0.0,
        "end": 5.424,
        "text": "田中くん、来週の新製品セミナーの準備、進んでる？"
      },
      {
        "turnIndex": 1,
        "speakerTag": "男",
        "start": 5.874,
        "end": 14.874,
        "text": "はい、会場の手配と参加者への案内メールは完了しました。いま、配布資料の印刷をしているところです。"
      },
      {
        "turnIndex": 2,
        "speakerTag": "女",
        "start": 15.324,
        "end": 25.092,
        "text": "あ、資料なんだけど、さっき開発部から最新データの差し替え依頼が届いたのよ。だから印刷はいったん止めて。"
      },
      {
        "turnIndex": 3,
        "speakerTag": "男",
        "start": 25.542,
        "end": 29.814,
        "text": "わかりました。すぐ印刷をストップします。"
      },
      {
        "turnIndex": 4,
        "speakerTag": "女",
        "start": 30.264,
        "end": 42.792,
        "text": "ありがとう。それでね、最新のデータを差し替えたら、私が見直すから。田中くんは先に、プロジェクターとマイクの動作確認を頼める？"
      },
      {
        "turnIndex": 5,
        "speakerTag": "男",
        "start": 43.242,
        "end": 50.034,
        "text": "承知いたしました。では印刷機を止めた後、機材の確認に行ってまいります。"
      }
    ]
  },
  "choukai_2": {
    "questionId": "choukai_2",
    "audioUrl": "/audio/choukai/choukai_2.mp3",
    "totalDuration": 46.2,
    "cues": [
      {
        "turnIndex": 0,
        "speakerTag": "女",
        "start": 0.0,
        "end": 5.088,
        "text": "すみません、仕事用のノートパソコンを探しているんですが。"
      },
      {
        "turnIndex": 1,
        "speakerTag": "店員",
        "start": 5.538,
        "end": 14.154,
        "text": "いらっしゃいませ。こちらの黒いモデルは最新のCPUを搭載していて、動画編集もサクサク動きますよ。"
      },
      {
        "turnIndex": 2,
        "speakerTag": "女",
        "start": 14.604,
        "end": 22.548,
        "text": "うーん、性能は魅力的なんですが、毎日営業で持ち歩くので、重いのはちょっと困るんです。"
      },
      {
        "turnIndex": 3,
        "speakerTag": "店員",
        "start": 22.998,
        "end": 34.206,
        "text": "それでしたら、こちらの白いモデルはいかがでしょうか。画面は少し小さめですが、重さがわずか800グラムで、バッテリーも15時間持ちます。"
      },
      {
        "turnIndex": 4,
        "speakerTag": "女",
        "start": 34.656,
        "end": 46.008,
        "text": "あ、すごく軽いですね！これなら肩への負担も少なそうです。デザインもすっきりしていて気に入りました。これにします。"
      }
    ]
  },
  "choukai_3": {
    "questionId": "choukai_3",
    "audioUrl": "/audio/choukai/choukai_3.mp3",
    "totalDuration": 22.704,
    "cues": [
      {
        "turnIndex": 0,
        "speakerTag": "男",
        "start": 0.0,
        "end": 6.216,
        "text": "部長、先ほどの会議の案件、私にお引き受けさせていただけないでしょうか。"
      },
      {
        "turnIndex": 1,
        "speakerTag": "1",
        "start": 6.866,
        "end": 11.354,
        "text": "1番。ええ、喜んで伺います。"
      },
      {
        "turnIndex": 2,
        "speakerTag": "2",
        "start": 11.804,
        "end": 17.012,
        "text": "2番。そうか、じゃあ君に頼んでもいいかな。"
      },
      {
        "turnIndex": 3,
        "speakerTag": "3",
        "start": 17.462,
        "end": 22.55,
        "text": "3番。いえ、遠慮せずに引き受けてください。"
      }
    ]
  },
  "choukai_4": {
    "questionId": "choukai_4",
    "audioUrl": "/audio/choukai/choukai_4.mp3",
    "totalDuration": 40.032,
    "cues": [
      {
        "turnIndex": 0,
        "speakerTag": "男",
        "start": 0.0,
        "end": 40.032,
        "text": "在宅勤務が定着するにつれ、集中が途切れるという悩みをよく耳にします。オフィスと違って周囲の目がないため、ついつい気が散ってしまうんですね。解決策として、高価なオフィスチェアを揃えたり、部屋の模様替えをする人もいますが、実は最も効果的なのは「時間で仕事と私生活を明確に区切ること」なのです。例えば、始業前には必ず着替える、昼休みはパソコンを完全に閉じる、そして終業時刻が来たら作業環境から離れる。こうした小さな時間的メリハリこそが、脳の集中スイッチを切り替える決定打となります。"
      }
    ]
  },
  "choukai_5": {
    "questionId": "choukai_5",
    "audioUrl": "/audio/choukai/choukai_5.mp3",
    "totalDuration": 27.096,
    "cues": [
      {
        "turnIndex": 0,
        "speakerTag": "女",
        "start": 0.0,
        "end": 7.224,
        "text": "すみません、人身事故で電車が止まってしまって、始業に間に合いそうにないんです。"
      },
      {
        "turnIndex": 1,
        "speakerTag": "1",
        "start": 7.874,
        "end": 14.618,
        "text": "1番。そうですか。慌てなくていいですから、気をつけて来てください。"
      },
      {
        "turnIndex": 2,
        "speakerTag": "2",
        "start": 15.068,
        "end": 20.468,
        "text": "2番。じゃあ、これからは事故が起きないように気をつけてね。"
      },
      {
        "turnIndex": 3,
        "speakerTag": "3",
        "start": 20.918,
        "end": 26.942,
        "text": "3番。間に合って本当によかったですね。安心しました。"
      }
    ]
  },
  "choukai_n1_1": {
    "questionId": "choukai_n1_1",
    "audioUrl": "/audio/choukai/choukai_n1_1.mp3",
    "totalDuration": 54.936,
    "cues": [
      {
        "turnIndex": 0,
        "speakerTag": "男",
        "start": 0.0,
        "end": 10.824,
        "text": "先日の役員会で、秋の新作スイーツの販売方針が決まったよ。ターゲット層を若年層から働く女性全般に広げることになった。"
      },
      {
        "turnIndex": 1,
        "speakerTag": "女",
        "start": 11.274,
        "end": 22.746,
        "text": "承知いたしました。そうなりますと、現在進めているパッケージデザインの刷新と、Web広告のキャッチコピーの再検討が必要ですね。"
      },
      {
        "turnIndex": 2,
        "speakerTag": "男",
        "start": 23.196,
        "end": 40.38,
        "text": "そうだね。ただ、パッケージの最終決定には予算の再配分が確定しないと進められないんだ。経理部との調整は僕が引き受けるから、君はまず、外部のデザイナーへ納期の延期を連絡してスケジュールを確保してくれないか。"
      },
      {
        "turnIndex": 3,
        "speakerTag": "女",
        "start": 40.83,
        "end": 51.75,
        "text": "わかりました。すぐデザイナーに連絡を入れます。広告代理店との打ち合わせ資料の修正はそのあとでよろしいでしょうか。"
      },
      {
        "turnIndex": 4,
        "speakerTag": "男",
        "start": 52.2,
        "end": 54.744,
        "text": "うん、それで頼むよ。"
      }
    ]
  },
  "choukai_n1_2": {
    "questionId": "choukai_n1_2",
    "audioUrl": "/audio/choukai/choukai_n1_2.mp3",
    "totalDuration": 30.624,
    "cues": [
      {
        "turnIndex": 0,
        "speakerTag": "男",
        "start": 0.0,
        "end": 6.384,
        "text": "本日はご多忙の折、私どものためにお運びいただき、恐縮に存じます。"
      },
      {
        "turnIndex": 1,
        "speakerTag": "1",
        "start": 7.034,
        "end": 15.794,
        "text": "1番。とんでもございません。こちらこそお招きいただき、心より感謝申し上げます。"
      },
      {
        "turnIndex": 2,
        "speakerTag": "2",
        "start": 16.244,
        "end": 23.036,
        "text": "2番。ええ、お忙しいところ恐縮ですが、どうぞお入りください。"
      },
      {
        "turnIndex": 3,
        "speakerTag": "3",
        "start": 23.486,
        "end": 30.47,
        "text": "3番。私どもとしても、お運びいただくのは当然のことでございます。"
      }
    ]
  },
  "choukai_n1_3": {
    "questionId": "choukai_n1_3",
    "audioUrl": "/audio/choukai/choukai_n1_3.mp3",
    "totalDuration": 30.768,
    "cues": [
      {
        "turnIndex": 0,
        "speakerTag": "男",
        "start": 0.0,
        "end": 30.768,
        "text": "今回発表されたA社の組織改編は、単なるコスト削減にとどまらない深い戦略が込められています。これまで縦割り構造だった各開発部門をフラットに統合し、意思決定のスピードを劇的に高めることが狙いです。市場の変化が著しい現代において、現場の意見が経営陣へ届くまでのタイムラグは致命傷になりかねません。部門間の壁を取り払うことで、迅速なイノベーション創出を狙っていると考えられます。"
      }
    ]
  }
};
