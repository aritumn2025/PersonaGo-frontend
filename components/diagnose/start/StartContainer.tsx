"use client";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import { useCookie } from "@/hooks/useCookie";

import { Button } from "@/components/ui/button";

import { PersonalityView } from "./PersonalityView";
import { UserNameInput } from "./UserNameInput";

function StartContainer() {
  const router = useRouter();
  const { getUserId, setUserName: setUserNameCookie } = useCookie();
  const [userName, setUserName] = useState<string>(""); // ユーザー名
  const [loggedIn, setLoggedIn] = useState<boolean>(false); // ログイン状態

  const isUserNameInput = userName.trim() !== ""; // ユーザー名が入力されているか

  // ログイン済み or 未ログインでユーザー名入力済みの場合に診断開始
  const handleStart = () => {
    if (loggedIn) {
      router.push("/user/diagnose/question");
    } else {
      if (isUserNameInput) {
        setUserNameCookie(userName.trim());
        router.push("/user/diagnose/question");
      }
    }
  };

  useEffect(() => {
    const userId = getUserId();
    setLoggedIn(userId !== null);
  }, [getUserId]);

  return (
    <div className="flex h-screen w-full flex-col items-center gap-6 bg-purple-50 px-4 py-6 pt-20">
      <h1 className="text-4xl font-bold text-gray-600">性格診断テスト</h1>
      <div className="flex flex-col gap-2 text-center text-lg text-gray-500">
        <p>あなたの性格タイプを見つけてみよう！</p>
      </div>
      {!loggedIn && (
        <UserNameInput userName={userName} setUserName={setUserName} />
      )}
      <Button
        onClick={handleStart}
        disabled={!(loggedIn || isUserNameInput)}
        className="rounded-full px-8 py-6 text-lg font-bold"
      >
        診断を始める &#8594;
      </Button>
      <PersonalityView />
    </div>
  );
}

export { StartContainer };
