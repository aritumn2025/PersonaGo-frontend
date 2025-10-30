/**
 * 進捗バーコンポーネント
 */
import { Progress } from "@/components/ui/progress";

type ProgressBarProps = {
  current: number;
  total: number;
  showText?: boolean;
};

/** 進捗バーコンポーネント
 *
 * @param current 現在の進捗
 * @param total 総数
 * @param showText 進捗テキストを表示するかどうか（デフォルト: true）
 */
function ProgressBar({ current, total, showText = true }: ProgressBarProps) {
  return (
    <div className="flex w-full max-w-2xl flex-col items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-4 pt-2 pb-3">
      {showText && (
        <p className="text-sm text-gray-700">
          {current} / {total}
        </p>
      )}
      <Progress value={(current / total) * 100} className="-mt-1" />
    </div>
  );
}

export { ProgressBar };
