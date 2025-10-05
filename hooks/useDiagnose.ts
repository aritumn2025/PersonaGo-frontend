/**
 * Diagnose クラスをhooksでラップする
 */
import { useCallback, useMemo, useState } from "react";

import { Diagnose, type DiagnoseConfig } from "@/lib/diagnose";

function useDiagnose<K extends string>(config: DiagnoseConfig<K>) {
  // インスタンスのメモ化
  const diagnose = useMemo(() => new Diagnose(config), [config]);
  // バージョン管理（状態管理用）
  const [version, setVersion] = useState(0);

  // メソッドのラップ
  const reset = useCallback(() => {
    diagnose.reset();
    setVersion((v) => v + 1);
  }, [diagnose]);

  const answer = useCallback(
    (qIndex: number, value: number | null) => {
      diagnose.answer(qIndex, value);
      setVersion((v) => v + 1);
    },
    [diagnose],
  );

  const getQuestion = useCallback(
    (qIndex: number) => diagnose.getQuestion(qIndex),
    [diagnose],
  );
  const getAnswer = useCallback(
    (qIndex: number) => diagnose.getAnswer(qIndex),
    [diagnose],
  );

  const progress = useCallback(
    () => diagnose.getProgress(),
    [diagnose, version],
  );
  const result = useCallback(
    (debug: boolean) => diagnose.getResult(debug),
    [diagnose, version],
  );
  const score = useCallback(() => diagnose.getScore(), [diagnose, version]);
  const bias = useCallback(() => diagnose.getBias(), [diagnose, version]);

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
