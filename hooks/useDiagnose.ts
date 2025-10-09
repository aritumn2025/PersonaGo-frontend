/**
 * Diagnose クラスをhooksでラップする
 */
import { useState } from "react";

import { Diagnose, type DiagnoseConfig } from "@/lib/diagnose";

function useDiagnose<K extends string>(config: DiagnoseConfig<K>) {
  /* React19ではメモ化に関する処理は不要 */

  // インスタンスの作成
  const diagnose = new Diagnose(config);
  // バージョン管理（状態管理用）
  const [version, setVersion] = useState(0);

  // メソッドのラップ
  const reset = () => {
    diagnose.reset();
    setVersion(0);
  };

  const answer = (qIndex: number, value: number | null) => {
    diagnose.answer(qIndex, value);
    setVersion((v) => v + 1);
  };

  const getQuestion = (qIndex: number) => diagnose.getQuestion(qIndex);
  const getAnswer = (qIndex: number) => diagnose.getAnswer(qIndex);

  const progress = () => diagnose.getProgress();
  const result = (debug: boolean) => diagnose.getResult(debug);
  const score = () => diagnose.getScore();
  const bias = () => diagnose.getBias();

  return {
    reset,
    answer,
    getQuestion,
    getAnswer,
    progress,
    result,
    score,
    bias,
    version,
  };
}
export { useDiagnose };
