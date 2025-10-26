"use client";

import { useState } from "react";

import type { DiagnoseConfig } from "@/lib/diagnose";

import { useDiagnose } from "@/hooks/useDiagnose";
import { usePagination } from "@/hooks/usePagination";

import { Button } from "@/components/ui/button";

import { Calculating } from "./Calclating";
import { DebugScore } from "./Debug";
import { ProgressBar } from "./ProgressBar";
import { QuestionList } from "./QuestionList";

interface QuestionContainerProps<K extends string> {
  diagnoseConfig: DiagnoseConfig<K>;
  questionsPerPage: number;
  debug: boolean;
}

function QuestionContainer<K extends string>({
  diagnoseConfig,
  questionsPerPage = Infinity, // 全問表示
  debug,
}: QuestionContainerProps<K>) {
  // 診断ロジックのフック
  const diagnose = useDiagnose(diagnoseConfig);

  // UI状態
  const [trigger, setTrigger] = useState<number>(0); // 診断処理トリガー
  const { items, isFirstPage, isLastPage, nextPage, prevPage } = usePagination(
    diagnose.progress().total,
    questionsPerPage,
  ); // ページネーション

  // 質問と回答、進捗を取得
  const questions = items.map((i) => diagnose.getQuestion(i));
  const answers = items.map((i) => diagnose.getAnswer(i));
  const { current, total } = diagnose.progress();

  // 診断結果
  const result = diagnose.result(debug);

  // ページネーション操作
  const handleNext = () => {
    nextPage();
    window.scrollTo({ top: 0, behavior: "smooth" }); // ページ上部へ
  };

  const handlePrev = () => {
    prevPage();
    window.scrollTo({ top: 0, behavior: "smooth" }); // ページ上部へ
  };

  // 結果表示のハンドラ
  const handleResult = () => {
    setTrigger((prev) => prev + 1);
  };

  return (
    <div className="flex min-h-screen flex-col items-center gap-6 bg-purple-50 p-6">
      {/* プログレスバー */}
      <div className="sticky top-0 z-10 w-full max-w-2xl pt-4">
        <ProgressBar current={current} total={total} />
      </div>

      {/* 質問リスト */}
      <QuestionList
        questions={questions}
        answers={answers}
        onAnswer={diagnose.answer}
      />

      {/* ナビゲーションボタン */}
      <div className="flex w-full flex-row justify-between">
        {!isFirstPage ? (
          <Button
            onClick={handlePrev}
            disabled={isFirstPage}
            className="text-lg"
          >
            戻る
          </Button>
        ) : (
          <div />
        )}

        {!isLastPage ? (
          <Button
            onClick={handleNext}
            disabled={answers.includes(null) || isLastPage}
            className="text-lg"
          >
            次へ
          </Button>
        ) : (
          <Button
            onClick={handleResult}
            disabled={result === null}
            className="text-lg"
          >
            結果を見る
          </Button>
        )}
      </div>

      {/* デバッグ情報 */}
      {debug && (
        <DebugScore score={diagnose.score()} result={diagnose.result(true)} />
      )}

      {/* 診断処理用ダイアログ */}
      <Calculating
        personalityId={diagnose.result(true)?.id || "0"}
        trigger={trigger}
        setTrigger={setTrigger}
      />
    </div>
  );
}

export { QuestionContainer };
