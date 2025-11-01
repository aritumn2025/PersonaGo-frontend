"use client";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import { useCookie } from "@/hooks/useCookie";

import { BackButton } from "@/components/common/BackButton";
import { Marker } from "@/components/common/Marker";
import { Button } from "@/components/ui/button";

import { PersonalityView } from "./PersonalityView";
import { UserNameInput } from "./UserNameInput";

function StartContainer() {
  const router = useRouter();
  const { getUserId, setUserName: setUserNameCookie } = useCookie();
  const [userName, setUserName] = useState<string>(""); // ユーザー名
  const [loggedIn, setLoggedIn] = useState<boolean>(false); // ログイン状態
  type Level = "short" | "middle" | "long";
  const [level, setLevel] = useState<Level>("short"); // 診断レベル

  const isUserNameInput = userName.trim() !== ""; // ユーザー名が入力されているか

  const levelMap: Record<
    Level,
    { title: string; description: string; questions: number }
  > = {
    short: {
      title: "短め",
      description: "短い質問でサクッと診断",
      questions: 8,
    },
    middle: {
      title: "標準",
      description: "標準的な質問数で診断",
      questions: 16,
    },
    long: {
      title: "長め",
      description: "時間をかけてじっくり診断",
      questions: 24,
    },
  };

  // ログイン済み or 未ログインでユーザー名入力済みの場合に診断開始
  const handleStart = () => {
    if (loggedIn) {
      router.push(
        `/user/diagnose/question/?length=${levelMap[level].questions}`,
      );
    } else {
      if (isUserNameInput) {
        setUserNameCookie(userName.trim());
        router.push(
          `/user/diagnose/question/?length=${levelMap[level].questions}`,
        );
      }
    }
  };

  useEffect(() => {
    const userId = getUserId();
    setLoggedIn(userId !== null);
  }, [getUserId]);

  return (
    <div className="relative flex h-screen w-full flex-col items-center gap-6 bg-purple-50 px-4 py-6 pt-20">
      {loggedIn && (
        <div className="fixed top-4 left-4 z-1000">
          <BackButton href="/user/dashboard" />
        </div>
      )}
      <h1 className="text-3xl font-bold text-gray-600">
        <Marker color="var(--color-purple-200)">性格診断テスト</Marker>
      </h1>
      <div className="flex flex-col gap-2 text-center text-lg text-gray-500">
        <p>
          {loggedIn ? (
            <>
              診断は何度でも受けられます。
              <br />
              あなたの性格タイプを再確認してみよう！
            </>
          ) : (
            <>あなたの性格タイプを見つけてみよう！</>
          )}
        </p>
      </div>
      {!loggedIn && (
        <UserNameInput userName={userName} setUserName={setUserName} />
      )}

      <h2 className="text-2xl font-bold text-gray-600">診断レベルを選ぼう！</h2>
      <div className="flex w-full max-w-2xl flex-col justify-center">
        {(["short", "middle", "long"] as Level[]).map((lvl, index) => (
          <button
            key={lvl}
            onClick={() => setLevel(lvl)}
            className={`flex flex-row items-center gap-4 border px-6 py-2 text-center transition-all duration-200 ${
              level === lvl
                ? "border-purple-500 bg-purple-100"
                : "border-gray-300 bg-white hover:border-purple-400"
            } ${index === 0 ? "rounded-t-xl" : ""} ${index === 2 ? "rounded-b-xl" : ""} `}
          >
            <h3 className="mb-2 text-xl font-semibold text-gray-700">
              {levelMap[lvl].title}
            </h3>
            <div className="flex flex-col items-start gap-1">
              <p className="text-gray-600">{levelMap[lvl].description}</p>
              <span className="text-xs text-gray-500">
                問題数: {levelMap[lvl].questions}問
              </span>
            </div>
          </button>
        ))}
      </div>
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
