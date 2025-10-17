/* 性格の基本情報を定めた定数ファイル */

// 性格タイプ(上位4分類)

// ID型定義
type PersonalityTypeId = "Passionate" | "Active" | "Calm" | "Thinker";

// 基本情報
type PersonalityTypeInfoEntry = Readonly<{
  name: string;
  description: string;
  color: { readonly primary: string; readonly secondary: string };
}>;

const PERSONALITY_TYPE_INFO: Readonly<
  Record<PersonalityTypeId, Readonly<PersonalityTypeInfoEntry>>
> = {
  Passionate: {
    name: "情熱タイプ",
    description:
      "人とのつながりや共感にエネルギーを感じるタイプ。感受性が強く、明るく社交的。イベント企画や表現活動などに向く。",
    color: {
      primary: "var(--color-pink-500)",
      secondary: "var(--color-pink-300)",
    },
  },
  Active: {
    name: "行動タイプ",
    description:
      "考えるよりまず行動するタイプ。リーダーシップがあり、挑戦や競争に強い。スポーツ・営業・起業などに多い。",
    color: {
      primary: "var(--color-yellow-400)",
      secondary: "var(--color-yellow-200)",
    },
  },
  Calm: {
    name: "穏やかタイプ",
    description:
      "人に寄り添い、穏やかな関係を築くタイプ。思慮深く、落ち着いた性格で、教育・医療・心理などに適性がある。",
    color: {
      primary: "var(--color-green-400)",
      secondary: "var(--color-green-200)",
    },
  },
  Thinker: {
    name: "思索タイプ",
    description:
      "分析と探究を好む冷静な思考家タイプ。物事を体系的に理解し、研究・開発・プログラミングなどに向いている。",
    color: {
      primary: "var(--color-blue-400)",
      secondary: "var(--color-blue-200)",
    },
  },
};

// ID一覧
const PERSONALITY_TYPE_IDS = Object.keys(
  PERSONALITY_TYPE_INFO,
) as ReadonlyArray<PersonalityTypeId>;

// 性格(下位16分類)

// ID型定義(API用のPersonalityIdとは別に)
type PersonalityId =
  | "EFSA"
  | "EFSM"
  | "EFPA"
  | "EFPM"
  | "ETSA"
  | "ETSM"
  | "ETPA"
  | "ETPM"
  | "IFSA"
  | "IFSM"
  | "IFPA"
  | "IFPM"
  | "ITSA"
  | "ITSM"
  | "ITPA"
  | "ITPM";

// 基本情報
type PersonalityInfoEntry = Readonly<{
  name: string;
  description: string;
  type: PersonalityTypeId;
  link: string;
  image: string;
  get typeInfo(): PersonalityTypeInfoEntry;
}>;
const PERSONALITY_INFO: Readonly<Record<PersonalityId, PersonalityInfoEntry>> =
  {
    // Passionate
    EFSA: {
      name: "キャプテン",
      description: "勝利を掴むために動く実践家",
      type: "Passionate",
      link: "/user/info/personality/EFSA",
      image: "/images/personality/EFSA.png",
      get typeInfo() {
        return PERSONALITY_TYPE_INFO[this.type];
      },
    },
    EFSM: {
      name: "インフルエンサー",
      description: "影響力で人を動かす発信者",
      type: "Passionate",
      link: "/user/info/personality/EFSM",
      image: "/images/personality/EFSM.png",
      get typeInfo() {
        return PERSONALITY_TYPE_INFO[this.type];
      },
    },
    EFPA: {
      name: "ムードメーカー",
      description: "その場を明るくする太陽",
      type: "Passionate",
      link: "/user/info/personality/EFPA",
      image: "/images/personality/EFPA.png",
      get typeInfo() {
        return PERSONALITY_TYPE_INFO[this.type];
      },
    },
    EFPM: {
      name: "ドリーマー",
      description: "想いを夢に変える自由人",
      type: "Passionate",
      link: "/user/info/personality/EFPM",
      image: "/images/personality/EFPM.png",
      get typeInfo() {
        return PERSONALITY_TYPE_INFO[this.type];
      },
    },

    // Active
    ETSA: {
      name: "リーダー",
      description: "みんなを導く情熱の旗手",
      type: "Active",
      link: "/user/info/personality/ETSA",
      image: "/images/personality/ETSA.png",
      get typeInfo() {
        return PERSONALITY_TYPE_INFO[this.type];
      },
    },
    ETSM: {
      name: "チャレンジャー",
      description: "常識を打ち破る行動の革命者",
      type: "Active",
      link: "/user/info/personality/ETSM",
      image: "/images/personality/ETSM.png",
      get typeInfo() {
        return PERSONALITY_TYPE_INFO[this.type];
      },
    },
    ETPA: {
      name: "ハンター",
      description: "機を逃さない俊敏な挑戦者",
      type: "Active",
      link: "/user/info/personality/ETPA",
      image: "/images/personality/ETPA.png",
      get typeInfo() {
        return PERSONALITY_TYPE_INFO[this.type];
      },
    },
    ETPM: {
      name: "エンターテイナー",
      description: "驚きと笑顔を生み出す達人",
      type: "Active",
      link: "/user/info/personality/ETPM",
      image: "/images/personality/ETPM.png",
      get typeInfo() {
        return PERSONALITY_TYPE_INFO[this.type];
      },
    },

    // Calm
    IFSA: {
      name: "サポーター",
      description: "支えることで輝く優しさ",
      type: "Calm",
      link: "/user/info/personality/IFSA",
      image: "/images/personality/IFSA.png",
      get typeInfo() {
        return PERSONALITY_TYPE_INFO[this.type];
      },
    },
    IFSM: {
      name: "ナレーター",
      description: "静かな声で物語を紡ぐ",
      type: "Calm",
      link: "/user/info/personality/IFSM",
      image: "/images/personality/IFSM.png",
      get typeInfo() {
        return PERSONALITY_TYPE_INFO[this.type];
      },
    },
    IFPA: {
      name: "ヒーラー",
      description: "癒しの空気を届ける人",
      type: "Calm",
      link: "/user/info/personality/IFPA",
      image: "/images/personality/IFPA.png",
      get typeInfo() {
        return PERSONALITY_TYPE_INFO[this.type];
      },
    },
    IFPM: {
      name: "ミュージシャン",
      description: "感性で世界を癒す奏者",
      type: "Calm",
      link: "/user/info/personality/IFPM",
      image: "/images/personality/IFPM.png",
      get typeInfo() {
        return PERSONALITY_TYPE_INFO[this.type];
      },
    },

    // Thinker
    ITSA: {
      name: "エンジニア",
      description: "精密な思考で問題を解く理論派",
      type: "Thinker",
      link: "/user/info/personality/ITSA",
      image: "/images/personality/ITSA.png",
      get typeInfo() {
        return PERSONALITY_TYPE_INFO[this.type];
      },
    },
    ITSM: {
      name: "プランナー",
      description: "戦略を練り、未来を描く構想家",
      type: "Thinker",
      link: "/user/info/personality/ITSM",
      image: "/images/personality/ITSM.png",
      get typeInfo() {
        return PERSONALITY_TYPE_INFO[this.type];
      },
    },
    ITPA: {
      name: "アナリスト",
      description: "現実を読み解く冷静な観察者",
      type: "Thinker",
      link: "/user/info/personality/ITPA",
      image: "/images/personality/ITPA.png",
      get typeInfo() {
        return PERSONALITY_TYPE_INFO[this.type];
      },
    },
    ITPM: {
      name: "イノベーター",
      description: "革新を生み出す創造的発想家",
      type: "Thinker",
      link: "/user/info/personality/ITPM",
      image: "/images/personality/ITPM.png",
      get typeInfo() {
        return PERSONALITY_TYPE_INFO[this.type];
      },
    },
  };

// ID一覧
const PERSONALITY_IDS = Object.keys(
  PERSONALITY_INFO,
) as ReadonlyArray<PersonalityId>;

export type { PersonalityId, PersonalityTypeId };
export {
  PERSONALITY_TYPE_IDS,
  PERSONALITY_TYPE_INFO,
  PERSONALITY_IDS,
  PERSONALITY_INFO,
};
