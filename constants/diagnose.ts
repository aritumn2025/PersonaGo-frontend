import { type SwapMap, shuffleByMap } from "@/utils/array";

import { createDiagnoseConfig } from "@/lib/diagnose";

import {
  PERSONALITY_CODE_TO_ID_MAP,
  type PersonalityCode,
} from "./personality";

/*
| 軸 ID  | 名称（日本語 / 英語）                              | 対立軸（正方向 ↔ 負方向）         | 説明                                                                 |
| :----- | :------------------------------------------------- | :-------------------------------- | :------------------------------------------------------------------- |
| **EI** | 外向性 ↔ 内向性（**Extraversion ↔ Introversion**） | 他人と関わる ↔ 一人で思考する     | 社交性やエネルギーの向きを示す軸。社交的か、内省的か。               |
| **TF** | 論理型 ↔ 感情型（**Thinking ↔ Feeling**）          | 理性重視 ↔ 共感重視               | 判断や意思決定の基準。合理性を重視するか、人の気持ちを重視するか。   |
| **SP** | 構造型 ↔ 自由型（**Structured ↔ Spontaneous**）    | 計画的・秩序重視 ↔ 柔軟・即興的   | 生活や行動のスタイル。ルールや計画を重んじるか、柔軟さを優先するか。 |
| **AM** | 現実型 ↔ 創造型（**Analytic ↔ Imaginative**）      | 現実的・実証主義 ↔ 創造的・空想的 | 情報やアイデアの捉え方。論理的・現実的か、直感的・創造的か。         |
*/

const RESULT_CODES = [
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
] as const satisfies readonly PersonalityCode[];

const COUNT = 7;
const SWAP_MAP: SwapMap = [
  [3, 0],
  [8, 7],
  [7, 4],
  [3, 2],
  [13, 1],
  [0, 2],
  [6, 7],
  [0, 6],
  [13, 7],
  [14, 8],
  [0, 5],
  [13, 10],
  [8, 4],
  [6, 10],
  [3, 2],
  [12, 3],
  [8, 1],
  [14, 3],
  [12, 2],
  [9, 11],
  [6, 2],
  [1, 7],
  [9, 2],
  [7, 3],
  [12, 8],
  [14, 11],
  [5, 11],
  [11, 6],
  [8, 2],
  [5, 7],
  [5, 14],
  [12, 8],
  [7, 10],
  [1, 7],
  [1, 10],
  [12, 8],
  [2, 6],
  [10, 6],
  [15, 12],
  [14, 4],
  [8, 4],
  [7, 8],
  [13, 12],
  [11, 7],
  [4, 15],
  [2, 1],
  [3, 4],
];
const DIAGNOSE_CONFIG = createDiagnoseConfig({
  labels: [
    {
      id: "EI",
      text: "外向性 vs 内向性",
      description: "外向性やエネルギーの向きを示す。社交的か、内省的か。",
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

  questions: shuffleByMap(
    [
      {
        kind: "continuous",
        text: "大人数の集まりよりも、少人数や一人で過ごす時間の方が落ち着く",
        options: {
          left: { text: "あてはまる", score: { EI: -1 } },
          right: { text: "あてはまらない", score: { EI: +1 } },
          count: COUNT,
        },
      },
      {
        kind: "continuous",
        text: "自分から誘うより、誘われる方が多い",
        options: {
          left: { text: "あてはまる", score: { EI: -1 } },
          right: { text: "あてはまらない", score: { EI: +1 } },
          count: COUNT,
        },
      },
      {
        kind: "continuous",
        text: "休日は特に予定を入れず、家で静かに過ごす時間を大切にしたい",
        options: {
          left: { text: "あてはまる", score: { EI: -1 } },
          right: { text: "あてはまらない", score: { EI: +1 } },
          count: COUNT,
        },
      },
      {
        kind: "continuous",
        text: "友人や知人の輪を広げるのが好きだ",
        options: {
          left: { text: "あてはまる", score: { EI: +1 } },
          right: { text: "あてはまらない", score: { EI: -1 } },
          count: COUNT,
        },
      },
      {
        kind: "continuous",
        text: "初対面の人と話すことに抵抗を感じない",
        options: {
          left: { text: "あてはまる", score: { EI: +1 } },
          right: { text: "あてはまらない", score: { EI: -1 } },
          count: COUNT,
        },
      },
      {
        kind: "continuous",
        text: "賑やかな場所やイベントには積極的に参加することが好きだ",
        options: {
          left: { text: "あてはまる", score: { EI: +1 } },
          right: { text: "あてはまらない", score: { EI: -1 } },
          count: COUNT,
        },
      },

      //
      // === TF（論理型 vs 感情型） ===
      //
      {
        kind: "continuous",
        text: "決断を下す際、客観的な事実や論理を重視する方だ",
        options: {
          left: { text: "あてはまる", score: { TF: +1 } },
          right: { text: "あてはまらない", score: { TF: -1 } },
          count: COUNT,
        },
      },
      {
        kind: "continuous",
        text: "誰かの気持ちよりルールや公平性を優先する方だ",
        options: {
          left: { text: "あてはまる", score: { TF: +1 } },
          right: { text: "あてはまらない", score: { TF: -1 } },
          count: COUNT,
        },
      },
      {
        kind: "continuous",
        text: "誰かが泣いていたらまずは解決策を考える方だ",
        options: {
          left: { text: "あてはまる", score: { TF: +1 } },
          right: { text: "あてはまらない", score: { TF: -1 } },
          count: COUNT,
        },
      },
      {
        kind: "continuous",
        text: "人の気持ちを考えすぎて、自分の意見を言えないことがある",
        options: {
          left: { text: "あてはまる", score: { TF: -1 } },
          right: { text: "あてはまらない", score: { TF: +1 } },
          count: COUNT,
        },
      },
      {
        kind: "continuous",
        text: "人の気持ちを理解しようとするのが得意だ",
        options: {
          left: { text: "あてはまる", score: { TF: -1 } },
          right: { text: "あてはまらない", score: { TF: +1 } },
          count: COUNT,
        },
      },
      {
        kind: "continuous",
        text: "結論よりも「みんなが納得すること」を大切にしたいと思う",
        options: {
          left: { text: "あてはまる", score: { TF: -1 } },
          right: { text: "あてはまらない", score: { TF: +1 } },
          count: COUNT,
        },
      },

      //
      // === SP（構造型 vs 自由型） ===
      //
      {
        kind: "continuous",
        text: "予定はしっかり立てて行動する方だ",
        options: {
          left: { text: "あてはまる", score: { SP: +1 } },
          right: { text: "あてはまらない", score: { SP: -1 } },
          count: COUNT,
        },
      },
      {
        kind: "continuous",
        text: "ルールや手順に従うことを重んじる方だ",
        options: {
          left: { text: "あてはまる", score: { SP: +1 } },
          right: { text: "あてはまらない", score: { SP: -1 } },
          count: COUNT,
        },
      },
      {
        kind: "continuous",
        text: "スケジュール通りに進まないと不安になる",
        options: {
          left: { text: "あてはまる", score: { SP: +1 } },
          right: { text: "あてはまらない", score: { SP: -1 } },
          count: COUNT,
        },
      },
      {
        kind: "continuous",
        text: "計画よりもその場の流れを大切にする",
        options: {
          left: { text: "あてはまる", score: { SP: -1 } },
          right: { text: "あてはまらない", score: { SP: +1 } },
          count: COUNT,
        },
      },
      {
        kind: "continuous",
        text: "変化に合わせて柔軟に対応する方だ",
        options: {
          left: { text: "あてはまる", score: { SP: -1 } },
          right: { text: "あてはまらない", score: { SP: +1 } },
          count: COUNT,
        },
      },
      {
        kind: "continuous",
        text: "思いついたらすぐ行動する方だ",
        options: {
          left: { text: "あてはまる", score: { SP: -1 } },
          right: { text: "あてはまらない", score: { SP: +1 } },
          count: COUNT,
        },
      },
      //
      // === AM（現実型 vs 創造型） ===
      //
      {
        kind: "continuous",
        text: "新しいアイデアや、今までになかった考え方を試すのが好きだ",
        options: {
          left: { text: "あてはまる", score: { AM: -1 } },
          right: { text: "あてはまらない", score: { AM: +1 } },
          count: COUNT,
        },
      },
      {
        kind: "continuous",
        text: "新しいアイデアを聞くと、「それをどう実現するか」よりも「それがもたらす可能性」にワクワクする",
        options: {
          left: { text: "あてはまる", score: { AM: -1 } },
          right: { text: "あてはまらない", score: { AM: +1 } },
          count: COUNT,
        },
      },
      {
        kind: "continuous",
        text: "物事について深く考えたり、想像をめぐらせたりする時間を持つことを大切にしている",
        options: {
          left: { text: "あてはまる", score: { AM: -1 } },
          right: { text: "あてはまらない", score: { AM: +1 } },
          count: COUNT,
        },
      },
      {
        kind: "continuous",
        text: "いつも慣れたやり方で物事を進める方が安心する",
        options: {
          left: { text: "あてはまる", score: { AM: +1 } },
          right: { text: "あてはまらない", score: { AM: -1 } },
          count: COUNT,
        },
      },
      {
        kind: "continuous",
        text: "実際に使えることを重視する",
        options: {
          left: { text: "あてはまる", score: { AM: +1 } },
          right: { text: "あてはまらない", score: { AM: -1 } },
          count: COUNT,
        },
      },
      {
        kind: "continuous",
        text: "斬新なアイデアよりも、実用的で堅実な考え方を好む",
        options: {
          left: { text: "あてはまる", score: { AM: +1 } },
          right: { text: "あてはまらない", score: { AM: -1 } },
          count: COUNT,
        },
      },
    ],
    SWAP_MAP,
  ),

  result: RESULT_CODES.map(
    (code) => PERSONALITY_CODE_TO_ID_MAP[code as PersonalityCode],
  ),
});

export { DIAGNOSE_CONFIG };
