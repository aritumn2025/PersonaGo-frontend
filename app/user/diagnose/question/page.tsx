"use client";

import { useSearchParams } from "next/navigation";

import { DIAGNOSE_CONFIG } from "@/constants/diagnose";

import { createDiagnoseConfig } from "@/lib/diagnose";

import { QuestionContainer } from "@/components/diagnose/";

const isDevelopment = process.env.NODE_ENV === "development";

export default function Page() {
  const searchParams = useSearchParams();
  const lengthParam = searchParams.get("length");

  // 数値に変換し、無効な場合はデフォルト18
  const length =
    lengthParam &&
    0 < Number(lengthParam) &&
    Number(lengthParam) <= DIAGNOSE_CONFIG.questions.length
      ? Number(lengthParam) || 18
      : 18;

  const diagnoseConfig = createDiagnoseConfig(DIAGNOSE_CONFIG, length);

  return (
    <main>
      <QuestionContainer
        diagnoseConfig={diagnoseConfig}
        questionsPerPage={6}
        debug={isDevelopment}
      />
    </main>
  );
}
