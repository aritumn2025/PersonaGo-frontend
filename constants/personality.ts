/* 性格の基本情報を定めた定数ファイル */
import type { PersonalityId } from "@/types/common";

// 性格タイプ(上位4分類)

// ID型定義
type PersonalityTypeId = "Passionate" | "Active" | "Calm" | "Thinker";

// 基本情報
type PersonalityTypeInfoEntry = Readonly<{
  id: PersonalityTypeId;
  name: string;
  description: string;
  color: { readonly primary: string; readonly secondary: string };
}>;

const PERSONALITY_TYPE_INFO: Readonly<
  Record<PersonalityTypeId, Readonly<PersonalityTypeInfoEntry>>
> = {
  Passionate: {
    id: "Passionate",
    name: "情熱タイプ",
    description:
      "人とのつながりや共感にエネルギーを感じるタイプ。感受性が強く、明るく社交的。イベント企画や表現活動などに向く。",
    color: {
      primary: "var(--color-pink-500)",
      secondary: "var(--color-pink-50)",
    },
  },
  Active: {
    id: "Active",
    name: "行動タイプ",
    description:
      "考えるよりまず行動するタイプ。リーダーシップがあり、挑戦や競争に強い。スポーツ・営業・起業などに多い。",
    color: {
      primary: "var(--color-yellow-400)",
      secondary: "var(--color-yellow-50)",
    },
  },
  Calm: {
    id: "Calm",
    name: "穏やかタイプ",
    description:
      "人に寄り添い、穏やかな関係を築くタイプ。思慮深く、落ち着いた性格で、教育・医療・心理などに適性がある。",
    color: {
      primary: "var(--color-green-400)",
      secondary: "var(--color-green-50)",
    },
  },
  Thinker: {
    id: "Thinker",
    name: "思索タイプ",
    description:
      "分析と探究を好む冷静な思考家タイプ。物事を体系的に理解し、研究・開発・プログラミングなどに向いている。",
    color: {
      primary: "var(--color-blue-400)",
      secondary: "var(--color-blue-50)",
    },
  },
};

// ID一覧
const PERSONALITY_TYPE_IDS = Object.keys(
  PERSONALITY_TYPE_INFO,
) as ReadonlyArray<PersonalityTypeId>;

// 性格(下位16分類)

// 内部名称型の定義
type PersonalityCode =
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
  id: PersonalityId;
  code: PersonalityCode;
  type: PersonalityTypeInfoEntry;
  name: string;
  description: string;
  link: string;
  image: string;
}>;
const PERSONALITY_INFO: Readonly<Record<PersonalityId, PersonalityInfoEntry>> =
  {
    // Passionate
    "0": {
      id: "0",
      code: "EFSA",
      type: PERSONALITY_TYPE_INFO.Passionate,
      name: "キャプテン",
      description: "勝利を掴むために動く実践家",
      link: "/user/info/personality/EFSA",
      image: "/images/personality/EFSA.png",
    },
    "1": {
      id: "1",
      code: "EFSM",
      type: PERSONALITY_TYPE_INFO.Passionate,
      name: "インフルエンサー",
      description: "影響力で人を動かす発信者",
      link: "/user/info/personality/EFSM",
      image: "/images/personality/EFSM.png",
    },
    "2": {
      id: "2",
      code: "EFPA",
      type: PERSONALITY_TYPE_INFO.Passionate,
      name: "ムードメーカー",
      description: "その場を明るくする太陽",
      link: "/user/info/personality/EFPA",
      image: "/images/personality/EFPA.png",
    },
    "3": {
      id: "3",
      code: "EFPM",
      type: PERSONALITY_TYPE_INFO.Passionate,
      name: "ドリーマー",
      description: "想いを夢に変える自由人",
      link: "/user/info/personality/EFPM",
      image: "/images/personality/EFPM.png",
    },

    // Active
    "4": {
      id: "4",
      code: "ETSA",
      type: PERSONALITY_TYPE_INFO.Active,
      name: "リーダー",
      description: "みんなを導く情熱の旗手",
      link: "/user/info/personality/ETSA",
      image: "/images/personality/ETSA.png",
    },
    "5": {
      id: "5",
      code: "ETSM",
      type: PERSONALITY_TYPE_INFO.Active,
      name: "チャレンジャー",
      description: "常識を打ち破る行動の革命者",
      link: "/user/info/personality/ETSM",
      image: "/images/personality/ETSM.png",
    },
    "6": {
      id: "6",
      code: "ETPA",
      type: PERSONALITY_TYPE_INFO.Active,
      name: "ハンター",
      description: "機を逃さない俊敏な挑戦者",
      link: "/user/info/personality/ETPA",
      image: "/images/personality/ETPA.png",
    },
    "7": {
      id: "7",
      code: "ETPM",
      type: PERSONALITY_TYPE_INFO.Active,
      name: "エンターテイナー",
      description: "驚きと笑顔を生み出す達人",
      link: "/user/info/personality/ETPM",
      image: "/images/personality/ETPM.png",
    },

    // Calm
    "8": {
      id: "8",
      code: "IFSA",
      type: PERSONALITY_TYPE_INFO.Calm,
      name: "サポーター",
      description: "支えることで輝く優しさ",
      link: "/user/info/personality/IFSA",
      image: "/images/personality/IFSA.png",
    },
    "9": {
      id: "9",
      code: "IFSM",
      type: PERSONALITY_TYPE_INFO.Calm,
      name: "ナレーター",
      description: "静かな声で物語を紡ぐ",
      link: "/user/info/personality/IFSM",
      image: "/images/personality/IFSM.png",
    },
    "10": {
      id: "10",
      code: "IFPA",
      type: PERSONALITY_TYPE_INFO.Calm,
      name: "ヒーラー",
      description: "癒しの空気を届ける人",
      link: "/user/info/personality/IFPA",
      image: "/images/personality/IFPA.png",
    },
    "11": {
      id: "11",
      code: "IFPM",
      type: PERSONALITY_TYPE_INFO.Calm,
      name: "ミュージシャン",
      description: "感性で世界を癒す奏者",
      link: "/user/info/personality/IFPM",
      image: "/images/personality/IFPM.png",
    },

    // Thinker
    "12": {
      id: "12",
      code: "ITSA",
      type: PERSONALITY_TYPE_INFO.Thinker,
      name: "エンジニア",
      description: "精密な思考で問題を解く理論派",
      link: "/user/info/personality/ITSA",
      image: "/images/personality/ITSA.png",
    },
    "13": {
      id: "13",
      code: "ITSM",
      type: PERSONALITY_TYPE_INFO.Thinker,
      name: "プランナー",
      description: "戦略を練り、未来を描く構想家",
      link: "/user/info/personality/ITSM",
      image: "/images/personality/ITSM.png",
    },
    "14": {
      id: "14",
      code: "ITPA",
      type: PERSONALITY_TYPE_INFO.Thinker,
      name: "アナリスト",
      description: "現実を読み解く冷静な観察者",
      link: "/user/info/personality/ITPA",
      image: "/images/personality/ITPA.png",
    },
    "15": {
      id: "15",
      code: "ITPM",
      type: PERSONALITY_TYPE_INFO.Thinker,
      name: "イノベーター",
      description: "革新を生み出す創造的発想家",
      link: "/user/info/personality/ITPM",
      image: "/images/personality/ITPM.png",
    },
  };

// ID一覧
const PERSONALITY_IDS = Object.keys(
  PERSONALITY_INFO,
) as ReadonlyArray<PersonalityId>;

// code→idの変換マップ
const PERSONALITY_CODE_TO_ID_MAP: Readonly<
  Record<PersonalityCode, PersonalityId>
> = Object.fromEntries(
  Object.values(PERSONALITY_INFO).map((p) => [p.code, p.id]),
) as Readonly<Record<PersonalityCode, PersonalityId>>;

export type { PersonalityTypeId, PersonalityCode };
export {
  PERSONALITY_TYPE_IDS,
  PERSONALITY_TYPE_INFO,
  PERSONALITY_IDS,
  PERSONALITY_INFO,
  PERSONALITY_CODE_TO_ID_MAP,
};
