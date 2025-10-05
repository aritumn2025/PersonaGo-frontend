import { createDiagnoseConfig } from "@/lib/diagnose";

// MBTI風の診断設定サンプル
const DIAGNOSE_CONFIG = createDiagnoseConfig({
  // ==============================
  // ラベル設定
  // ==============================
  // 診断の「軸」を定義する。MBTIでは E/I, S/N, T/F, J/P の4軸
  labels: [
    {
      id: "EI", // 軸IDはシステム内部でのみ使用される(画面表示には使用されない)
      text: "外向性 vs 内向性", // 表示用の名前
      description: "人と関わることを好むか、一人でいることを好むか", // 説明
      positive: {
        text: "外向性 (E)",
        description: "人と関わることでエネルギーを得る",
      },
      negative: {
        text: "内向性 (I)",
        description: "一人で過ごすことでエネルギーを得る",
      },
      bias: 0, // 初期値。回答が無い状態での基準スコア
    },
    {
      id: "SN",
      text: "感覚 vs 直観",
      description: "事実やデータに基づくか、可能性や直感に基づくか",
      positive: {
        text: "感覚 (S)",
        description: "現実的で具体的な情報を重視する",
      },
      negative: {
        text: "直観 (N)",
        description: "抽象的で未来志向の情報を重視する",
      },
      bias: 0,
    },
    {
      id: "TF",
      text: "思考 vs 感情",
      description: "論理で判断するか、価値観や気持ちで判断するか",
      positive: {
        text: "思考 (T)",
        description: "客観的・合理的に判断する",
      },
      negative: {
        text: "感情 (F)",
        description: "人間関係や調和を重視して判断する",
      },
      bias: 0,
    },
    {
      id: "JP",
      text: "判断 vs 知覚",
      description: "計画的に行動するか、柔軟に対応するか",
      positive: {
        text: "判断 (J)",
        description: "計画を立て、秩序を重んじる",
      },
      negative: {
        text: "知覚 (P)",
        description: "柔軟で流れに任せる傾向がある",
      },
      bias: 0,
    },
  ],

  // ==============================
  // 質問設定
  // ==============================
  questions: [
    // 連続的な質問（スライダー形式）
    // 一貫性確保のため、leftには肯定的、rightには否定的な意味合いの文言を設定する
    {
      kind: "continuous",
      text: "大人数でのパーティーに参加するのが好きだ",
      options: {
        count: 7, // 7段階評価 (0〜6)
        left: {
          text: "あてはまる",
          score: { EI: 1 }, // 外向性にスコア加算
        },
        right: {
          text: "あてはまらない",
          score: { EI: -1 }, // 内向性にスコア加算
        },
      },
    },
    // 離散的な質問（ラジオボタンや選択肢形式）
    {
      kind: "discrete",
      text: "どちらの説明がより自分に当てはまりますか？",
      options: [
        {
          text: "現実的で、今ある情報を重視する",
          score: { SN: 1 }, // 感覚寄り
        },
        {
          text: "未来の可能性やアイデアを重視する",
          score: { SN: -1 }, // 直観寄り
        },
      ],
    },
    // 複数のラベルに影響する例
    {
      kind: "discrete",
      text: "論理的に説明しつつ、計画的に進めることが得意だ",
      options: [
        {
          text: "あてはまる",
          score: { TF: 1, JP: 1 }, // 思考(T) と 判断(J) 両方にスコア
        },
        {
          text: "あてはまらない",
          score: { TF: -1, JP: -1 }, // 感情(F) と 知覚(P) にスコア
        },
      ],
    },
  ],

  // ==============================
  // 結果定義
  // ==============================
  // ラベルが4軸あるので 2^4 = 16通りの結果が必要。
  // 配列順はラベルの並び順に対応しており、bitフラグ的に決まる。
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
