import Image from "next/image";
import Link from "next/link";

import { PERSONALITY_INFO } from "@/constants/personality";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <Image
        src={PERSONALITY_INFO["12"].image.regular}
        alt="Error illustration"
        width={240}
        height={240}
        className="mb-6 opacity-30"
      />
      <h1 className="mb-2 text-2xl font-semibold text-gray-600">
        ページが見つかりません
      </h1>
      <p className="mb-8 text-gray-500">
        お探しのページは存在しないか、移動した可能性があります。
      </p>
      <Link href="/user/start">
        <Button>マイページ に戻る</Button>
      </Link>
    </main>
  );
}
