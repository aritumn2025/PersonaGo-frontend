"use client";

import { useRouter } from "next/navigation";

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
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface ResetDialogProps {
  children: React.ReactNode;
}

function ResetDialog({ children }: ResetDialogProps) {
  const router = useRouter();
  const { removeUserId } = useCookie();

  const handleReset = () => {
    removeUserId();
    router.push("/");
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>診断・入場データの削除</AlertDialogTitle>
          <AlertDialogDescription>
            診断履歴や入場履歴など、PersonaGoに保存されているデータがすべて削除されます。本当によろしいですか？
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>いいえ</AlertDialogCancel>
          <AlertDialogAction
            className="bg-red-500 text-white hover:bg-red-700"
            onClick={handleReset}
          >
            はい、削除します
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export { ResetDialog };
