import { PersonalityId } from "@/types/common";

// 以下、診断の設定オブジェクトの型定義

// スコア型
type Score<K extends string> = Record<K, number>;

// 連続的な選択肢(あてはまる〜あてはまらない のn段階)の質問
type ContinuousQuestionConfig<K extends string> = {
  kind: "continuous";
  text: string;
  options: {
    count: number;
    left: {
      text: string;
      score: Partial<Score<K>>;
    };
    right: {
      text: string;
      score: Partial<Score<K>>;
    };
  };
};

// 離散的な選択肢(選択肢がいくつかある)の質問
type DiscreteQuestionConfig<K extends string> = {
  kind: "discrete";
  text: string;
  options: {
    text: string;
    score: Partial<Score<K>>;
  }[];
};

// 質問の型(連続的 or 離散的)
type QuestionConfig<K extends string> =
  | ContinuousQuestionConfig<K>
  | DiscreteQuestionConfig<K>;

// 診断の設定オブジェクトの型
type DiagnoseConfig<K extends string> = Readonly<{
  labels: {
    id: K;
    text: string;
    description: string;
    positive: {
      text: string;
      description: string;
    };
    negative: {
      text: string;
      description: string;
    };
    bias: number;
  }[];
  questions: QuestionConfig<K>[];
  result: PersonalityId[];
}>;

// 以下、診断クラスのインターフェース定義

// 連続的な選択肢(あてはまる〜あてはまらない のn段階)の質問
type ContinuousQuestion = {
  kind: "continuous";
  text: string;
  options: { left: string; right: string; count: number };
};

// 離散的な選択肢(選択肢がいくつかある)の質問
type DiscreteQuestion = {
  kind: "discrete";
  text: string;
  options: { index: number; text: string }[];
};

// 質問の型(連続的 or 離散的)
type Question = (ContinuousQuestion | DiscreteQuestion) & { index: number };

// 診断結果の型
type Result = {
  id: PersonalityId;
  labels: {
    text: string;
    description: string;
    positive: {
      text: string;
      description: string;
    };
    negative: {
      text: string;
      description: string;
    };
    score: number;
    result: "positive" | "negative";
  }[];
};

export type {
  Score,
  DiagnoseConfig,
  QuestionConfig,
  ContinuousQuestionConfig,
  DiscreteQuestionConfig,
  Question,
  ContinuousQuestion,
  DiscreteQuestion,
  Result,
};
