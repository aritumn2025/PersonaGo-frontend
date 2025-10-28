import Link from "next/link";

import { Marker } from "@/components/common/Marker";
import { Button } from "@/components/ui/button";

import { PolicyDialog } from "./PolicyDialog";
import { ResetDialog } from "./ResetDialog";

function MoreContainer() {
  return (
    <div className="flex w-full flex-col px-6 py-12 text-center">
      <h1 className="mb-8 text-3xl font-bold text-gray-600">
        <Marker color="var(--color-purple-200)">その他</Marker>
      </h1>

      <div className="flex w-full max-w-md flex-col gap-4">
        {/* ===== タイトル画面に戻る ===== */}
        <Link href="/">
          <Button variant="link">タイトル画面に戻る</Button>
        </Link>

        {/* ===== 利用規約・プライバシーポリシー ===== */}
        <PolicyDialog>
          <Button variant="link">利用規約とプライバシーポリシー</Button>
        </PolicyDialog>

        {/* ===== データ削除ダイアログ ===== */}
        <ResetDialog>
          <Button variant="link" className="text-red-500">
            診断・入場データの削除
          </Button>
        </ResetDialog>
      </div>
    </div>
  );
}

export { MoreContainer };
