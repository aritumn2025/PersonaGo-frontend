/* 性格の基本情報を定めた定数ファイル */
import type { PersonalityId } from "@/types/common";

import { lightColor } from "@/utils/color";

// 色定義
const COLORS = {
  red: "#FF669F",
  yellow: "#FFD434",
  green: "#1BD045",
  blue: "#458BE8",
  purple: "#AF00F1",
} as const;

const LIGHT_DEFAULT_RATIO = 0.9;
const LIGHT_COLORS = {
  red: lightColor(COLORS.red, LIGHT_DEFAULT_RATIO),
  yellow: lightColor(COLORS.yellow, LIGHT_DEFAULT_RATIO),
  green: lightColor(COLORS.green, LIGHT_DEFAULT_RATIO),
  blue: lightColor(COLORS.blue, LIGHT_DEFAULT_RATIO),
  purple: lightColor(COLORS.purple, LIGHT_DEFAULT_RATIO),
} as const;

// 性格タイプ(上位4分類)

// ID型定義
type PersonalityTypeId = "Passionate" | "Active" | "Calm" | "Thinker";

// 基本情報
type PersonalityTypeInfoEntry = Readonly<{
  id: PersonalityTypeId;
  name: string;
  description: string;
  color: {
    readonly main: string;
    readonly mainLight: string;
    readonly sub: string;
    readonly assort: string;
    readonly accent: string;
  };
}>;

const PERSONALITY_TYPE_INFO: Readonly<
  Record<PersonalityTypeId, Readonly<PersonalityTypeInfoEntry>>
> = {
  Passionate: {
    id: "Passionate",
    name: "情熱タイプ",
    description:
      "人とのつながりや共感にエネルギーを感じるタイプ。自分の気持ちを素直に表現し、周囲に前向きな影響を与えることが多い。",
    color: {
      main: COLORS.red,
      mainLight: LIGHT_COLORS.red,
      sub: COLORS.purple,
      assort: COLORS.yellow,
      accent: COLORS.green,
    },
  },
  Active: {
    id: "Active",
    name: "行動タイプ",
    description:
      "考えるよりまず行動するタイプ。新しいことへの挑戦を楽しみ、周囲を引っ張っていくエネルギーにあふれている。",
    color: {
      main: COLORS.yellow,
      mainLight: LIGHT_COLORS.yellow,
      sub: COLORS.red,
      accent: COLORS.green,
      assort: COLORS.blue,
    },
  },
  Calm: {
    id: "Calm",
    name: "穏やかタイプ",
    description:
      "人に寄り添い、穏やかな関係を築くタイプ。落ち着いた雰囲気で、周囲に安心感を与える存在。",
    color: {
      main: COLORS.green,
      mainLight: LIGHT_COLORS.green,
      sub: COLORS.blue,
      accent: COLORS.yellow,
      assort: COLORS.purple,
    },
  },
  Thinker: {
    id: "Thinker",
    name: "思索タイプ",
    description:
      "分析と探究を好む冷静な思考家タイプ。物事を客観的に捉え、深く考えることで新しい発見を導き出す。",
    color: {
      main: COLORS.blue,
      mainLight: LIGHT_COLORS.blue,
      sub: COLORS.purple,
      accent: COLORS.green,
      assort: COLORS.yellow,
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
  link: {
    info: string;
    result: string;
  };
  image: {
    regular: string;
    edged: string;
    logo: string;
  };
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
      link: {
        info: "/user/info/personality/EFSA",
        result: "/user/diagnose/result/EFSA",
      },
      image: {
        regular: "/images/personality/EFSA.png",
        edged: "/images/personality_edging/EFSA.svg",
        logo: "/images/personality_logo/EFSA.png",
      },
    },
    "1": {
      id: "1",
      code: "EFSM",
      type: PERSONALITY_TYPE_INFO.Passionate,
      name: "インフルエンサー",
      description: "影響力で人を動かす発信者",
      link: {
        info: "/user/info/personality/EFSM",
        result: "/user/diagnose/result/EFSM",
      },
      image: {
        regular: "/images/personality/EFSM.png",
        edged: "/images/personality_edging/EFSM.svg",
        logo: "/images/personality_logo/EFSM.png",
      },
    },
    "2": {
      id: "2",
      code: "EFPA",
      type: PERSONALITY_TYPE_INFO.Passionate,
      name: "ムードメーカー",
      description: "その場を明るくする太陽",
      link: {
        info: "/user/info/personality/EFPA",
        result: "/user/diagnose/result/EFPA",
      },
      image: {
        regular: "/images/personality/EFPA.png",
        edged: "/images/personality_edging/EFPA.svg",
        logo: "/images/personality_logo/EFPA.png",
      },
    },
    "3": {
      id: "3",
      code: "EFPM",
      type: PERSONALITY_TYPE_INFO.Passionate,
      name: "ドリーマー",
      description: "想いを夢に変える自由人",
      link: {
        info: "/user/info/personality/EFPM",
        result: "/user/diagnose/result/EFPM",
      },
      image: {
        regular: "/images/personality/EFPM.png",
        edged: "/images/personality_edging/EFPM.svg",
        logo: "/images/personality_logo/EFPM.png",
      },
    },

    // Active
    "4": {
      id: "4",
      code: "ETSA",
      type: PERSONALITY_TYPE_INFO.Active,
      name: "リーダー",
      description: "みんなを導く情熱の旗手",
      link: {
        info: "/user/info/personality/ETSA",
        result: "/user/diagnose/result/ETSA",
      },
      image: {
        regular: "/images/personality/ETSA.png",
        edged: "/images/personality_edging/ETSA.svg",
        logo: "/images/personality_logo/ETSA.png",
      },
    },
    "5": {
      id: "5",
      code: "ETSM",
      type: PERSONALITY_TYPE_INFO.Active,
      name: "チャレンジャー",
      description: "常識を打ち破る行動の革命者",
      link: {
        info: "/user/info/personality/ETSM",
        result: "/user/diagnose/result/ETSM",
      },
      image: {
        regular: "/images/personality/ETSM.png",
        edged: "/images/personality_edging/ETSM.svg",
        logo: "/images/personality_logo/ETSM.png",
      },
    },
    "6": {
      id: "6",
      code: "ETPA",
      type: PERSONALITY_TYPE_INFO.Active,
      name: "ハンター",
      description: "機を逃さない俊敏な挑戦者",
      link: {
        info: "/user/info/personality/ETPA",
        result: "/user/diagnose/result/ETPA",
      },
      image: {
        regular: "/images/personality/ETPA.png",
        edged: "/images/personality_edging/ETPA.svg",
        logo: "/images/personality_logo/ETPA.png",
      },
    },
    "7": {
      id: "7",
      code: "ETPM",
      type: PERSONALITY_TYPE_INFO.Active,
      name: "エンターテイナー",
      description: "驚きと笑顔を生み出す達人",
      link: {
        info: "/user/info/personality/ETPM",
        result: "/user/diagnose/result/ETPM",
      },
      image: {
        regular: "/images/personality/ETPM.png",
        edged: "/images/personality_edging/ETPM.svg",
        logo: "/images/personality_logo/ETPM.png",
      },
    },

    // Calm
    "8": {
      id: "8",
      code: "IFSA",
      type: PERSONALITY_TYPE_INFO.Calm,
      name: "サポーター",
      description: "支えることで輝く優しさ",
      link: {
        info: "/user/info/personality/IFSA",
        result: "/user/diagnose/result/IFSA",
      },
      image: {
        regular: "/images/personality/IFSA.png",
        edged: "/images/personality_edging/IFSA.svg",
        logo: "/images/personality_logo/IFSA.png",
      },
    },
    "9": {
      id: "9",
      code: "IFSM",
      type: PERSONALITY_TYPE_INFO.Calm,
      name: "ナレーター",
      description: "静かな声で物語を紡ぐ",
      link: {
        info: "/user/info/personality/IFSM",
        result: "/user/diagnose/result/IFSM",
      },
      image: {
        regular: "/images/personality/IFSM.png",
        edged: "/images/personality_edging/IFSM.svg",
        logo: "/images/personality_logo/IFSM.png",
      },
    },
    "10": {
      id: "10",
      code: "IFPA",
      type: PERSONALITY_TYPE_INFO.Calm,
      name: "ヒーラー",
      description: "癒しの空気を届ける人",
      link: {
        info: "/user/info/personality/IFPA",
        result: "/user/diagnose/result/IFPA",
      },
      image: {
        regular: "/images/personality/IFPA.png",
        edged: "/images/personality_edging/IFPA.svg",
        logo: "/images/personality_logo/IFPA.png",
      },
    },
    "11": {
      id: "11",
      code: "IFPM",
      type: PERSONALITY_TYPE_INFO.Calm,
      name: "ミュージシャン",
      description: "感性で世界を癒す奏者",
      link: {
        info: "/user/info/personality/IFPM",
        result: "/user/diagnose/result/IFPM",
      },
      image: {
        regular: "/images/personality/IFPM.png",
        edged: "/images/personality_edging/IFPM.svg",
        logo: "/images/personality_logo/IFPM.png",
      },
    },

    // Thinker
    "12": {
      id: "12",
      code: "ITSA",
      type: PERSONALITY_TYPE_INFO.Thinker,
      name: "エンジニア",
      description: "精密な思考で問題を解く理論派",
      link: {
        info: "/user/info/personality/ITSA",
        result: "/user/diagnose/result/ITSA",
      },
      image: {
        regular: "/images/personality/ITSA.png",
        edged: "/images/personality_edging/ITSA.svg",
        logo: "/images/personality_logo/ITSA.png",
      },
    },
    "13": {
      id: "13",
      code: "ITSM",
      type: PERSONALITY_TYPE_INFO.Thinker,
      name: "プランナー",
      description: "戦略を練り、未来を描く構想家",
      link: {
        info: "/user/info/personality/ITSM",
        result: "/user/diagnose/result/ITSM",
      },
      image: {
        regular: "/images/personality/ITSM.png",
        edged: "/images/personality_edging/ITSM.svg",
        logo: "/images/personality_logo/ITSM.png",
      },
    },
    "14": {
      id: "14",
      code: "ITPA",
      type: PERSONALITY_TYPE_INFO.Thinker,
      name: "アナリスト",
      description: "現実を読み解く冷静な観察者",
      link: {
        info: "/user/info/personality/ITPA",
        result: "/user/diagnose/result/ITPA",
      },
      image: {
        regular: "/images/personality/ITPA.png",
        edged: "/images/personality_edging/ITPA.svg",
        logo: "/images/personality_logo/ITPA.png",
      },
    },
    "15": {
      id: "15",
      code: "ITPM",
      type: PERSONALITY_TYPE_INFO.Thinker,
      name: "イノベーター",
      description: "革新を生み出す創造的発想家",
      link: {
        info: "/user/info/personality/ITPM",
        result: "/user/diagnose/result/ITPM",
      },
      image: {
        regular: "/images/personality/ITPM.png",
        edged: "/images/personality_edging/ITPM.svg",
        logo: "/images/personality_logo/ITPM.png",
      },
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
