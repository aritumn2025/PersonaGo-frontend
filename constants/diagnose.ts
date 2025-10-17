import { createDiagnoseConfig } from "@/lib/diagnose";

import {
  PERSONALITY_CODE_TO_ID_MAP,
  type PersonalityCode,
} from "./personality";

/*
| 軸 ID  | 名称（日本語 / 英語）                              | 対立軸（正方向 ↔ 負方向）         | 説明                                                                 |
| :----- | :------------------------------------------------- | :-------------------------^------ | :------------------------------------------------------------------- |
| **EI** | 外向性 ↔ 内向性（**Extraversion ↔ Introversion**） | 他人と関わる ↔ 一人で思考する     | 社交性やエネルギーの向きを示す軸。社交的か、内省的か。               |
| **TF** | 論理型 ↔ 感情型（**Thinking ↔ Feeling**）          | 理性重視 ↔ 共感重視               | 判断や意思決定の基準。合理性を重視するか、人の気持ちを重視するか。   |
| **SP** | 構造型 ↔ 自由型（**Structured ↔ Spontaneous**）    | 計画的・秩序重視 ↔ 柔軟・即興的   | 生活や行動のスタイル。ルールや計画を重んじるか、柔軟さを優先するか。 |
| **AM** | 現実型 ↔ 創造型（**Analytic ↔ Imaginative**）      | 現実的・実証主義 ↔ 創造的・空想的 | 情報やアイデアの捉え方。論理的・現実的か、直感的・創造的か。         |
*/

const COUNT = 7;
const DIAGNOSE_CONFIG = createDiagnoseConfig({
  labels: [
    {
      id: "EI",
      text: "外向性 vs 内向性",
      description: "外交性やエネルギーの向きを示す。社交的か、内省的か。",
      positive: { text: "外向性 (E)", description: "他人と関わる" },
      negative: { text: "内向性 (I)", description: "一人で思考する" },
      bias: 0,
    },
    {
      id: "TF",
      text: "論理型 vs 感情型",
      description:
        "判断や意思決定の基準。合理性を重視するか、人の気持ちを重視するか。",
      positive: { text: "論理型 (T)", description: "理性重視" },
      negative: { text: "感情型 (F)", description: "共感重視" },
      bias: 0,
    },
    {
      id: "SP",
      text: "構造型 vs 自由型",
      description:
        "生活や行動のスタイル。ルールや計画を重んじるか、柔軟さを優先するか。",
      positive: { text: "構造型 (S)", description: "計画的・秩序重視" },
      negative: { text: "自由型 (P)", description: "柔軟・即興的" },
      bias: 0,
    },
    {
      id: "AM",
      text: "現実型 vs 創造型",
      description:
        "情報やアイデアの捉え方。論理的・現実的か、直感的・創造的か。",
      positive: { text: "現実型 (A)", description: "現実的・実証主義" },
      negative: { text: "創造型 (M)", description: "創造的・空想的" },
      bias: 0,
    },
  ],

  questions: [
    {
      kind: "continuous",
      text: "大人数での集まりやパーティーに参加するとエネルギーが湧く",
      options: {
        left: { text: "あてはまる", score: { EI: 1 } },
        right: { text: "あてはまらない", score: { EI: -1 } },
        count: COUNT,
      },
    },
    {
      kind: "continuous",
      text: "一人で過ごす時間の方が自分をリセットできると感じる",
      options: {
        left: { text: "あてはまる", score: { EI: -1 } },
        right: { text: "あてはまらない", score: { EI: 1 } },
        count: COUNT,
      },
    },
    {
      kind: "continuous",
      text: "初対面の人との会話に抵抗を感じない",
      options: {
        left: { text: "あてはまる", score: { EI: 1 } },
        right: { text: "あてはまらない", score: { EI: -1 } },
        count: COUNT,
      },
    },

    //
    // === TF（論理型 vs 感情型） ===
    //
    {
      kind: "continuous",
      text: "物事を判断するとき、まず理屈や根拠を重視する",
      options: {
        left: { text: "あてはまる", score: { TF: 1 } },
        right: { text: "あてはまらない", score: { TF: -1 } },
        count: COUNT,
      },
    },
    {
      kind: "continuous",
      text: "人の感情を考慮して決定を下すことが多い",
      options: {
        left: { text: "あてはまる", score: { TF: -1 } },
        right: { text: "あてはまらない", score: { TF: 1 } },
        count: COUNT,
      },
    },
    {
      kind: "continuous",
      text: "自分の意見が正しいと思っても、相手の気持ちを優先することがある",
      options: {
        left: { text: "あてはまる", score: { TF: -1 } },
        right: { text: "あてはまらない", score: { TF: 1 } },
        count: COUNT,
      },
    },

    //
    // === SP（構造型 vs 自由型） ===
    //
    {
      kind: "continuous",
      text: "何事も事前に計画を立てて進めたい方だ",
      options: {
        left: { text: "あてはまる", score: { SP: 1 } },
        right: { text: "あてはまらない", score: { SP: -1 } },
        count: COUNT,
      },
    },
    {
      kind: "continuous",
      text: "予定を立てるより、その場の流れで行動したい",
      options: {
        left: { text: "あてはまる", score: { SP: -1 } },
        right: { text: "あてはまらない", score: { SP: 1 } },
        count: COUNT,
      },
    },
    {
      kind: "continuous",
      text: "締切が近づくと集中力が上がるタイプだ",
      options: {
        left: { text: "あてはまる", score: { SP: -1 } },
        right: { text: "あてはまらない", score: { SP: 1 } },
        count: COUNT,
      },
    },

    //
    // === AM（現実型 vs 創造型） ===
    //
    {
      kind: "continuous",
      text: "現実的な方法やデータに基づいた考えを重視する",
      options: {
        left: { text: "あてはまる", score: { AM: 1 } },
        right: { text: "あてはまらない", score: { AM: -1 } },
        count: COUNT,
      },
    },
    {
      kind: "continuous",
      text: "新しいアイデアや空想を広げるのが好きだ",
      options: {
        left: { text: "あてはまる", score: { AM: -1 } },
        right: { text: "あてはまらない", score: { AM: 1 } },
        count: COUNT,
      },
    },
    {
      kind: "continuous",
      text: "現実的な結果よりも、発想のユニークさを重視する",
      options: {
        left: { text: "あてはまる", score: { AM: -1 } },
        right: { text: "あてはまらない", score: { AM: 1 } },
        count: COUNT,
      },
    },

    //
    // === 複合質問（交差軸） ===
    //
    {
      kind: "continuous",
      text: "計画的に物事を進めながらも、状況に応じて柔軟に変化できる",
      options: {
        left: { text: "あてはまる", score: { SP: 0.5, AM: -0.5 } },
        right: { text: "あてはまらない", score: { SP: -0.5, AM: 0.5 } },
        count: COUNT,
      },
    },
  ],

  result: [
    "IFPM",
    "IFPA",
    "IFSM",
    "IFSA",
    "ITPM",
    "ITPA",
    "ITSM",
    "ITSA",
    "EFPM",
    "EFPA",
    "EFSM",
    "EFSA",
    "ETPM",
    "ETPA",
    "ETSM",
    "ETSA",
  ].map((code) => PERSONALITY_CODE_TO_ID_MAP[code as PersonalityCode]),
});

export { DIAGNOSE_CONFIG };
