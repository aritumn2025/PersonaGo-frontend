"use client";

import Image from "next/image";
import Link from "next/link";

import { PERSONALITY_INFO } from "@/constants/personality";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <Image
        src={PERSONALITY_INFO["12"].image}
        alt="Error illustration"
        width={240}
        height={240}
        className="mb-6 opacity-30"
      />
      <h1 className="mb-2 text-2xl font-semibold text-gray-600">
        エラーが発生しました
      </h1>
      <p className="mb-8 text-gray-500">
        申し訳ありません。ページの読み込み中に問題が発生しました。
      </p>

      <div className="flex gap-4">
        <Button onClick={() => reset()}>再試行</Button>

        <Link href="/user/start">
          <Button variant="secondary">マイページ に戻る</Button>
        </Link>
      </div>
    </main>
  );
}
