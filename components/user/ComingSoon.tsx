import Image from "next/image";
import Link from "next/link";

import { PERSONALITY_INFO } from "@/constants/personality";

import { Button } from "@/components/ui/button";

function ComingSoon() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <Image
        src={PERSONALITY_INFO["13"].image}
        alt="Coming soon illustration"
        width={240}
        height={240}
        className="mb-6 opacity-30"
      />
      <h1 className="mb-2 text-2xl font-semibold text-gray-600">
        このページは準備中です！
      </h1>
      <p className="mb-8 text-gray-500">
        現在、ページの内容を鋭意作成中です。
        <br />
        もうしばらくお待ちください！
      </p>
      <Link href="/user/start">
        <Button>マイページ に戻る</Button>
      </Link>
    </div>
  );
}

export { ComingSoon };
