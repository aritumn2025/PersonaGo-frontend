"use client";

import { Suspense } from "react";

import { useSearchParams } from "next/navigation";

import { DIAGNOSE_CONFIG } from "@/constants/diagnose";

import { createDiagnoseConfig } from "@/lib/diagnose";

import { SquareSpin2 } from "@/components/common/loader";
import { QuestionContainer } from "@/components/diagnose/";

const isDevelopment = process.env.NODE_ENV === "development";

function PageInter() {
  const searchParams = useSearchParams();
  const lengthParam = searchParams.get("length");

  // 数値に変換し、無効な場合はデフォルト18
  const length =
    lengthParam &&
    0 < Number(lengthParam) &&
    Number(lengthParam) <= DIAGNOSE_CONFIG.questions.length
      ? Number(lengthParam) || 18
      : 18;

  const diagnoseConfig = createDiagnoseConfig(DIAGNOSE_CONFIG, length, true);

  return (
    <main>
      <QuestionContainer
        diagnoseConfig={diagnoseConfig}
        questionsPerPage={8}
        debug={isDevelopment}
      />
    </main>
  );
}

export default function Page() {
  return (
    <Suspense
      fallback={<SquareSpin2 color="var(--color-gray-500)" size="1.5rem" />}
    >
      <PageInter />
    </Suspense>
  );
}
