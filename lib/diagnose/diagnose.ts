import { randomChoice } from "@/utils/random";

import type { DiagnoseConfig, Question, Result, Score } from "./types";

/**
 * 線形補間
 * @param x0 開始点のx座標
 * @param y0 開始点のy座標
 * @param x1 終了点のx座標
 * @param y1 終了点のy座標
 * @param x 補完対象のx座標
 * @return 補完されたy座標
 */
function lerp(x0: number, y0: number, x1: number, y1: number, x: number) {
  return y0 + ((y1 - y0) * (x - x0)) / (x1 - x0);
}

/**
 * 診断の設定を作成するためのヘルパー関数
 * @param config 診断の設定
 * @returns 設定オブジェクト
 */
function createDiagnoseConfig<K extends string>(
  config: DiagnoseConfig<K>,
  questions: number = config.questions.length,
  shuffle: boolean = false,
): DiagnoseConfig<K> {
  if (questions < 1 || config.questions.length < questions) {
    throw new Error("Invalid questions length");
  }
  config = {
    ...config,
    questions: (shuffle
      ? randomChoice(config.questions, config.questions.length)
      : config.questions
    ).slice(0, questions),
  };
  return config;
}

class Diagnose<K extends string> {
  private _labels: DiagnoseConfig<K>["labels"];
  private _questions: DiagnoseConfig<K>["questions"];
  private _result: DiagnoseConfig<K>["result"];
  private _questionCache: Question[]; // question() 用のキャッシュデータ

  private _answer: (number | null)[];
  private _score: Score<K>;

  /**
   * コンストラクタ
   * @param config 診断の設定
   */
  constructor(config: DiagnoseConfig<K>) {
    // 結果の数が2^[項目数]通りであるかチェック
    if (config.result.length !== 1 << config.labels.length) {
      throw new Error("Invalid results length");
    }

    this._labels = config.labels;
    this._questions = config.questions;
    this._result = config.result;
    this._questionCache = this._questions.map((question, index) => {
      if (question.kind === "continuous") {
        return {
          index,
          kind: "continuous",
          text: question.text,
          options: {
            left: question.options.left.text,
            right: question.options.right.text,
            count: question.options.count,
          },
        };
      } else {
        return {
          index,
          kind: "discrete",
          text: question.text,
          options: question.options.map((option, index) => ({
            index,
            text: option.text,
          })),
        };
      }
    });

    // 実際の初期化は this.reset() で行う。未初期化エラー回避のためダミーの代入を行う。
    this._answer = [];
    this._score = {} as Score<K>;
    this.reset();
  }

  /**
   * 回答の進捗の取得
   * @return 回答の進捗
   */
  getProgress(): { current: number; total: number; percent: number } {
    const current = this._answer.filter((a) => a !== null).length;
    const total = this._questions.length;
    return { current, total, percent: (current / total) * 100 };
  }

  /**
   * 質問と選択肢を取得する
   * @param qIndex 質問のインデックス
   * @return 質問と選択肢
   * @throws 質問のインデックスが範囲外の場合
   */
  getQuestion(qIndex: number): Question {
    // 質問のインデックスが範囲外の場合のエラー処理
    if (qIndex < 0 || this._questions.length <= qIndex) {
      throw new Error("Question index out of range");
    }

    return this._questionCache[qIndex];
  }

  /**
   * 回答を取得する
   * @param qIndex 質問のインデックス
   * @return 回答のインデックス(無回答の場合はnull)
   * @throws 質問のインデックスが範囲外の場合
   */
  getAnswer(qIndex: number): number | null {
    // 質問のインデックスが範囲外の場合のエラー処理
    if (qIndex < 0 || this._questions.length <= qIndex) {
      throw new Error("Question index out of range");
    }

    return this._answer[qIndex];
  }

  /**
   * 回答の登録
   * @param qIndex 質問のインデックス
   * @param answer 回答のインデックス(連続的な質問の場合は0〜count-1、離散的な質問の場合は選択肢のインデックス、無回答の場合はnull)
   * @throws 質問のインデックスが範囲外の場合
   * @throws 回答が無効な場合
   */
  answer(qIndex: number, answer: number | null): void {
    // 質問のインデックスが範囲外の場合のエラー処理
    if (qIndex < 0 || this._questions.length <= qIndex) {
      throw new Error("Question index out of range");
    }

    // 以前に回答をしていた場合、スコアを引く
    if (this._answer[qIndex] !== null) {
      this.subScore(this.getOptionScore(qIndex, this._answer[qIndex]));
    }

    // 無回答の場合
    if (answer === null) {
      this._answer[qIndex] = null;
      return;
    }

    // 回答が無効な場合のエラー処理は this.getOptionScore() で実装済み
    this.addScore(this.getOptionScore(qIndex, answer));
    this._answer[qIndex] = answer;
  }

  /**
   * 診断結果の取得
   * @param debug デバッグ用か(完答していなくてもnullを返さなくなる)
   * @returns 診断結果(質問に完答していない場合はnull)
   */
  getResult(debug: boolean = false): Result | null {
    if (!debug && this._answer.includes(null)) {
      return null;
    }

    const labelsResult: Result["labels"] = this._labels.map((label) => {
      return {
        text: label.text,
        description: label.description,
        positive: label.positive,
        negative: label.negative,
        score: this._score[label.id],
        result: this._score[label.id] >= 0 ? "positive" : "negative",
      };
    });

    // 各項目をpostive/negativeで判定し、2^[項目数]通りの結果から選ぶ
    // postive/negativeの境界は0(0はpositiveとなる)
    let key = 0;
    this._labels.forEach((label, idx, labels) => {
      if (this._score[label.id] >= 0) {
        key += 1 << (labels.length - idx - 1);
      }
    });
    const idResult = this._result[key];

    return {
      id: idResult,
      labels: labelsResult,
    };
  }

  /**
   * 診断の初期化(スコアを初期化)
   */
  reset(): void {
    this._answer = Array(this._questions.length).fill(null);
    this._score = this._labels.reduce((acc, label) => {
      acc[label.id] = label.bias;
      return acc;
    }, {} as Score<K>);
  }

  /**
   * 回答のスコアを取得する
   * @param qIndex 質問のインデックス
   * @param answer 回答のインデックス
   * @throws 質問のインデックスが範囲外の場合
   * @throws 回答が無効な場合
   */
  getOptionScore(qIndex: number, answer: number): Score<K> {
    // 質問のインデックスが範囲外の場合のエラー処理
    if (qIndex < 0 || this._questions.length <= qIndex) {
      throw new Error("Question index out of range");
    }
    const question = this._questions[qIndex];

    if (question.kind === "continuous") {
      // 回答が無効な場合のエラー処理
      if (answer < 0 || question.options.count <= answer) {
        throw new Error("Invalid answer for continuous question");
      }

      // 線形補間により計算
      const left = question.options.left.score;
      const right = question.options.right.score;
      const count = question.options.count;

      const out = {} as Score<K>;
      for (const key in this._score) {
        out[key] = lerp(0, left[key] ?? 0, count - 1, right[key] ?? 0, answer);
      }
      return out;
    } else {
      // 回答が無効な場合のエラー処理
      if (answer < 0 || question.options.length <= answer) {
        throw new Error("Invalid answer for discrete question");
      }

      // 設定から取得
      const out = {} as Score<K>;
      for (const key in this._score) {
        out[key] = question.options[answer].score[key] ?? 0;
      }
      return out;
    }
  }

  // 以下は開発時のみ利用

  /**
   * 現在のスコアを取得する
   * @returns スコア
   */
  getScore(): Score<K> {
    return { ...this._score };
  }

  /**
   * バイアスを取得する
   * @returns バイアス
   */
  getBias(): Score<K> {
    return this._labels.reduce((acc, label) => {
      acc[label.id] = label.bias;
      return acc;
    }, {} as Score<K>);
  }

  /**
   * スコアを加算する
   * @param score
   */
  private addScore(score: Score<K>): void {
    for (const key in this._score) {
      this._score[key] += score[key] ?? 0;
    }
  }

  /**
   * スコアを減算する
   * @param score
   */
  private subScore(score: Score<K>): void {
    for (const key in this._score) {
      this._score[key] -= score[key] ?? 0;
    }
  }
}

export { createDiagnoseConfig, Diagnose, type DiagnoseConfig };
