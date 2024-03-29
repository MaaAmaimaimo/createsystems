// 君への気持ち
const feelings4u = [
    "憐れみ",
    "心酔",
    "独占欲",
    "劣等感",
    "相互不理解",
    "偶像視",
    "嫉妬",
    "軽蔑",
    "劣情",
    "比較",
    "罪悪感",
    "服従",
    "拒絶",
    "優越感",
    "唯一の信頼",
    "恐怖",
    "憧れ",
    "同一視",
    "同情",
    "負けたくない",
    "利害の一致",
    "寵愛",
    "腫れ物",
    "一方的な理解",
    "アガペー"
];

// ストーリーライン
const scenario = [
    "何かが終わる話",
    "何かが壊れる話",
    "現状を変える話",
    "新しく生まれ変わる話",
    "何かの罪を犯す話",
    "何かと決別する話",
    "何かが枯れる話",
    "何かを失う話",
    "何かを手に入れる話",
    "何かを取り戻す話",
    "何かをやめる話",
    "見切りをつける話",
    "希望を見つける話",
    "何かを捨てる話",
    "何かがばれる話",
    "安心を得る話",
    "報われる話",
    "認められる話",
    "復讐する話",
    "「元に戻る」話",
    "罪を贖う話",
    "どこかから逃げる話",
    "何かが生まれる話"
];

// 関係性創作のとっかかり
const ship_title = [
    "別れなければならなくなったとき、別れを拒むほうはどちらか",
    "自分から連絡しそうなほう",
    "相手のために世界を滅ぼせるか",
    "「相手には自分が必要だ」と思っているか",
    "相手に弱みをさらせるかどうか",
    "相手に理想を抱いているかどうか",
    "「相手に負けたくない」という感情について",
    "相手の存在に救われているかどうか",
    "相手に対しての「勝手な共感",
    "メッセージアプリの使用方法について",
    "「相手は自分に勝てない」と思っているか",
    "「自分は置いて行かれる側だ」と思っているほうはどちらか",
    "相手を意識的/無意識的に見下しているかどうか",
    "相手のためにいつも損をしているのはどちらか",
    "お互いに「相手によってのみ引き出される面」はあるか",
    "相手に劣等感を感じたことはあるか",
    "相手をかわいいと思っているか(見た目中身問わない)",
    "どちらかが助かるシチュエーション"
];

// もしものストーリー
const if_story = [
    "信念を失ったら？",
    "精神が不健全になったら？",
    "幽霊に取り憑かれたら？",
    "風邪をひいたら？",
    "大切なものを失ったら？",
    "不思議な力を手に入れたら？",
    "精神的に追い詰められたら？",
    "目が覚めたら○○だったら？",
    "大切な人が傷つけられたら？",
    "人を殺してしまったら？",
    "共犯するとしたら？",
    "盗難に遭ったら？",
    "ストーカーに遭ったら？",
    "運命に出会ったら？",
    "知らない土地に迷い込んだら？",
    "酔い潰れたら？",
    "監禁されたら？",
    "幽体離脱してしまったら？",
    "世界が滅ぶとしたら？",
    "性格が逆転したら？",
    "二人暮らしをはじめたら？",
    "未来を語るなら？",
    "不安になるとしたら？",
    "宝くじ1等を当てたら？",
    "記憶喪失になったら？",
    "眠れない夜は？",
    "大切なものを失ったら？",
    "明晰夢を見たら？",
    "悪いことを勧められたら？",
    "遭難したら？",
    "「変わりたい」と思うなら？",
    "復讐を誓うなら？",
    "助けてくれた人に報いるなら？",
    "ひとつだけ願いが叶うとしたら？",
    "弱みを握られたら？",
    "弱みを見せるとしたら？",
    "落ち込んだら？",
    "朝早く起きすぎたら？",
    "変な次元に迷い込んだら？",
    "仲間がいなくなろうとしていたら？",
    "「自分だけが××のことを知っている世界」に来たら？",
    "「誰も○○のことを知らない世界」に来たら？",
    "××と合作するとしたら？",
    "力を失ってしまったら？",
    "長所を失ってしまったら？"
];

// キーワード
const keywords = [
    "宇宙",
    "台風",
    "別荘",
    "無人島",
    "夜の繁華街",
    "路地裏",
    "知らない街",
    "街中の廃墟",
    "俳優",
    "幽霊",
    "占い師",
    "フェチ",
    "噂",
    "霊媒師",
    "降霊術",
    "魔女",
    "魔法少女",
    "フォロワー",
    "怪談",
    "流行りもの",
    "回送",
    "チャット",
    "メール",
    "ゲーム",
    "配信",
    "8bit",
    "仮想世界",
    "熱帯魚",
    "才能",
    "ラスボス",
    "疑心暗鬼",
    "音信不通",
    "着信拒否",
    "フリー素材",
    "ハラスメント",
    "フリマアプリ",
    "正体不明",
    "死体",
    "動画サイト",
    "オフ会",
    "夜の散歩",
    "飲み会",
    "朝の散歩",
    "SNS",
    "承認欲求",
    "隠し通路",
    "隠し扉",
    "AI",
    "水遊び",
    "トマソン",
    "秘密基地",
    "しゃぼんだま",
    "海を見る",
    "カフェ",
    "流星群",
    "天文台",
    "裏山",
    "面接",
    "犯行現場",
    "不登校",
    "ピクニック",
    "無人駅",
    "お菓子作り",
    "希死念慮",
    "死生観",
    "引きこもり",
    "アイドル",
    "ソシャゲ",
    "催眠術",
    "薬物",
    "ゲーム実況",
    "アプリ",
    "超能力",
    "宝くじ",
    "記憶喪失",
    "礼拝",
    "パーティ",
    "手術",
    "デスゲーム",
    "ストーカー",
    "締切",
    "闇堕ち",
    "呪い",
    "停電",
    "宇宙人",
    "憑依",
    "復活",
    "虚言癖",
    "サイコパス",
    "バグ",
    "仮想現実",
    "ループ",
    "ギャンブル",
    "不可抗力",
    "共依存",
    "依存",
    "裏アカ",
    "スケープゴート",
    "グロ画像",
    "抑圧",
    "ペルソナ",
    "酩酊",
    "宗教",
    "黒幕",
    "冗談",
    "隙間",
    "葬儀",
    "祈り",
    "悪夢",
    "使命",
    "変身",
    "お伽噺",
    "絶体絶命",
    "絶滅危惧種",
    "踏切",
    "不審者",
    "不機嫌",
    "シャーデンフロイデ",
    "メサイアコンプレックス",
    "コンビニ",
    "墓地",
    "ゴシック",
    "出会い系",
    "終末",
    "終末思想",
    "人魚",
    "人形",
    "逢魔が時",
    "悪魔",
    "黒魔術",
    "都市伝説",
    "ネイル",
    "天然石",
    "贖罪",
    "探偵",
    "月光",
    "教団",
    "最悪",
    "地獄",
    "殺人事件",
    "深夜",
    "深海魚",
    "ナイトウォーク",
    "密告",
    "遊泳",
    "天球",
    "闇夜",
    "天使",
    "無重力",
    "深夜放送",
    "異常",
    "超常",
    "魔性",
    "解剖",
    "実験",
    "身代わり",
    "バックドア",
    "地下室",
    "貴族",
    "交信",
    "スパムbot",
    "禁呪",
    "禁書"
];
