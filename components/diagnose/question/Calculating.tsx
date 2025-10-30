"use client";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import type { PersonalityId } from "@/types/common";

import { PERSONALITY_INFO } from "@/constants/personality";

import { createUser, patchUserPersonality } from "@/services/user_service";

import { useCookie } from "@/hooks/useCookie";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Progress } from "@/components/ui/progress";

interface CalculatingProps {
  personalityId: PersonalityId;
  trigger: number;
  setTrigger: (value: number) => void;
}

const progressEventInterval = 400; // ms
const progressEventTable: ({ progress: number; label: string } | "check")[] = [
  { progress: 0, label: "診断中..." },
  { progress: 40, label: "診断中..." },
  { progress: 60, label: "診断中..." },
  { progress: 80, label: "診断中..." },
  { progress: 90, label: "診断結果の取得中..." },
  "check", // 送信成功/失敗をここでチェック
  { progress: 100, label: "完了!" },
];

function Calculating({ personalityId, trigger, setTrigger }: CalculatingProps) {
  const router = useRouter();
  const { getUserId, setUserId, getUserName } = useCookie();
  const [open, setOpen] = useState<boolean>(false);
  // プログレスバー状態フラグ(null: 未完了, true: 成功, false: 失敗)
  const [progressStatus, setProgressStatus] = useState<boolean | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [label, setLabel] = useState<string>("");

  // 診断結果送信処理
  const sendResult = async (): Promise<boolean> => {
    const userId = getUserId();
    if (userId === null) {
      const userName = getUserName() || "名無しさん";
      try {
        const data = await createUser(userName, personalityId);
        console.log("created user:", data);
        setUserId(data.id);
        return true;
      } catch (error) {
        console.error("failed to create user:", error);
        return false;
      }
    } else {
      try {
        const data = await patchUserPersonality(userId, personalityId);
        console.log("patched user personality:", data);
        return true;
      } catch (error) {
        console.error("failed to patch user personality:", error);
        return false;
      }
    }
  };

  // 診断処理トリガー
  useEffect(() => {
    if (!trigger) return;

    setOpen(true);
    setProgress(0);
    setLabel(
      progressEventTable[0] === "check" ? "" : progressEventTable[0].label,
    );
    setProgressStatus(null);

    let interval: ReturnType<typeof setInterval>;
    const runProcess = async () => {
      // 送信を開始
      const isSuccess = await sendResult();

      // プログレスアニメーション開始
      let currentIndex = 0;
      interval = setInterval(() => {
        const event = progressEventTable[currentIndex];
        if (event === "check") {
          if (!isSuccess) {
            // 失敗していたら進捗を止めて中断
            clearInterval(interval);
            setTimeout(() => {
              setProgressStatus(false);
            }, 400); // 少し見せてから遷移
          }
        } else {
          setProgress(event.progress);
          setLabel(event.label);
        }
        currentIndex++;
        if (currentIndex >= progressEventTable.length) {
          clearInterval(interval);
          setTimeout(() => {
            setProgressStatus(true);
          }, 400); // 少し見せてから遷移
        }
      }, progressEventInterval);
    };

    runProcess();
    return () => clearInterval(interval);
  }, [trigger]);

  // プログレスバー完了時にページ遷移
  useEffect(() => {
    if (progressStatus === true) {
      router.push(
        `/user/diagnose/result/${PERSONALITY_INFO[personalityId].code}`,
      );
    }
  }, [progressStatus, personalityId]);

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      {progressStatus === false ? (
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>ネットワークエラー</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogDescription>
            診断結果の取得に失敗しました。通信環境を確認の上、再度お試しください。
          </AlertDialogDescription>
          <AlertDialogFooter className="flex-col">
            <AlertDialogAction
              onClick={() => {
                setTrigger(trigger + 1); // 再送信のために trigger をインクリメント
              }}
            >
              再試行
            </AlertDialogAction>
            <AlertDialogCancel>閉じる</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      ) : (
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-gray-600">
              診断処理の実行中...
            </AlertDialogTitle>
          </AlertDialogHeader>
          <div className="flex w-full max-w-2xl flex-col items-center gap-2 px-4">
            <span className="text-sm text-gray-600">{label}</span>
            <Progress value={progress} className="-mt-1 w-full" />
          </div>
        </AlertDialogContent>
      )}
    </AlertDialog>
  );
}

export { Calculating };
