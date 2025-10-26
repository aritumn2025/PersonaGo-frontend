/**
 * デバッグ用コンポーネント郡
 */
import { PERSONALITY_INFO } from "@/constants/personality";

import type { Result, Score } from "@/lib/diagnose";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

interface DebugDrawerProps {
  children: React.ReactNode;
  result: Result | null;
}

/**
 * デバッグ用ドロワーコンポーネント
 * @param children ドロワーを開くトリガー要素
 * @param result デバッグ情報として表示する診断結果
 */
function DebugDrawer({ children, result }: DebugDrawerProps) {
  const personalityInfo = result ? PERSONALITY_INFO[result.id] : null;
  return (
    <Drawer>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Details</DrawerTitle>
        </DrawerHeader>
        <pre style={{ maxHeight: "100%", overflow: "auto" }}>
          {JSON.stringify(
            {
              personalityInfo: personalityInfo,
              result: result,
            },
            null,
            2,
          )}
        </pre>
      </DrawerContent>
    </Drawer>
  );
}

interface DebugScoreProps<K extends string> {
  score: Score<K>;
  result: Result | null;
}

/**
 * デバッグ用スコア表示コンポーネント
 * @param score スコアオブジェクト
 * @param result 診断結果
 */
function DebugScore<K extends string>({ score, result }: DebugScoreProps<K>) {
  return (
    <DebugDrawer result={result}>
      <button className="fixed right-4 bottom-10 z-50 rounded-lg bg-black/30 p-4 text-white">
        <h3 className="text-xs font-bold">DEBUG MODE</h3>
        <div className="flex flex-col gap-1">
          <ul className="flex flex-row gap-2 text-xs">
            {Object.entries(score).map(([key, value]) => (
              <li
                key={key}
                style={{
                  color:
                    typeof value === "number" && value < 0 ? "blue" : "red",
                }}
              >
                {key}:{" "}
                {typeof value === "number" ? value.toFixed(2) : String(value)}
              </li>
            ))}
          </ul>
          <p className="text-xs">Result: {result?.id ?? "null"}</p>
        </div>
      </button>
    </DebugDrawer>
  );
}

export { DebugScore };
