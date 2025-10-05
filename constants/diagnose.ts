import { createDiagnoseConfig } from "@/lib/diagnose";

const COUNT = 7;
const DIAGNOSE_CONFIG = createDiagnoseConfig({
  labels: [
    {
      id: "EI",
      text: "外向性 vs 内向性",
      description: "",
      positive: { text: "外向性 (E)", description: "" },
      negative: { text: "内向性 (I)", description: "" },
      bias: 0,
    },
    {
      id: "SN",
      text: "感覚 vs 直観",
      description: "",
      positive: { text: "感覚 (S)", description: "" },
      negative: { text: "直観 (N)", description: "" },
      bias: 0,
    },
    {
      id: "TF",
      text: "思考 vs 感情",
      description: "",
      positive: { text: "思考 (T)", description: "" },
      negative: { text: "感情 (F)", description: "" },
      bias: 0,
    },
    {
      id: "JP",
      text: "判断 vs 知覚",
      description: "",
      positive: { text: "判断 (J)", description: "" },
      negative: { text: "知覚 (P)", description: "" },
      bias: 0,
    },
  ],

  questions: [
    {
      kind: "continuous",
      text: "初対面の人ともすぐに打ち解けられるほうだ",
      options: {
        count: COUNT,
        left: { text: "あてはまる", score: { EI: 1 } },
        right: { text: "あてはまらない", score: { EI: -1 } },
      },
    },
    {
      kind: "continuous",
      text: "細かい計画を立てて行動するのが好きだ",
      options: {
        count: COUNT,
        left: { text: "あてはまる", score: { JP: 1 } },
        right: { text: "あてはまらない", score: { JP: -1 } },
      },
    },
    {
      kind: "continuous",
      text: "論理よりも気持ちを重視して判断することが多い",
      options: {
        count: COUNT,
        left: { text: "あてはまる", score: { TF: -1 } },
        right: { text: "あてはまらない", score: { TF: 1 } },
      },
    },
    {
      kind: "continuous",
      text: "新しいアイデアや未来の可能性について考えるのが好きだ",
      options: {
        count: COUNT,
        left: { text: "あてはまる", score: { SN: -1 } },
        right: { text: "あてはまらない", score: { SN: 1 } },
      },
    },
    {
      kind: "continuous",
      text: "一人で過ごす時間より、人と一緒に過ごす時間の方が好きだ",
      options: {
        count: COUNT,
        left: { text: "あてはまる", score: { EI: 1 } },
        right: { text: "あてはまらない", score: { EI: -1 } },
      },
    },
    {
      kind: "continuous",
      text: "物事はまずデータや事実に基づいて考える",
      options: {
        count: COUNT,
        left: { text: "あてはまる", score: { SN: 1 } },
        right: { text: "あてはまらない", score: { SN: -1 } },
      },
    },
    {
      kind: "continuous",
      text: "感情を表に出す方だ",
      options: {
        count: COUNT,
        left: { text: "あてはまる", score: { TF: -1 } },
        right: { text: "あてはまらない", score: { TF: 1 } },
      },
    },
    {
      kind: "continuous",
      text: "臨機応変に対応することが得意だ",
      options: {
        count: COUNT,
        left: { text: "あてはまる", score: { JP: -1 } },
        right: { text: "あてはまらない", score: { JP: 1 } },
      },
    },
    {
      kind: "discrete",
      text: "どちらかといえば自分は？",
      options: [
        { text: "人と過ごすと元気になる", score: { EI: 1 } },
        { text: "一人の時間でリフレッシュする", score: { EI: -1 } },
      ],
    },
    {
      kind: "discrete",
      text: "どちらのスタイルに近いですか？",
      options: [
        { text: "計画を立てて進めたい", score: { JP: 1, TF: 1 } },
        { text: "流れに任せて柔軟に動きたい", score: { JP: -1, TF: -1 } },
      ],
    },
  ],

  result: [
    "INFP",
    "INFJ",
    "INTP",
    "INTJ",
    "ISFP",
    "ISFJ",
    "ISTP",
    "ISTJ",
    "ENFP",
    "ENFJ",
    "ENTP",
    "ENTJ",
    "ESFP",
    "ESFJ",
    "ESTP",
    "ESTJ",
  ],
});

export { DIAGNOSE_CONFIG };
