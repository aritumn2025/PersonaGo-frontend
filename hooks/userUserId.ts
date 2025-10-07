/**
 * ユーザーIDをcookieで管理する
 */
import { useCallback, useEffect, useState } from "react";

import Cookies from "js-cookie";

const COOKIE_KEY: string = "user_id"; // Cookie のキー
const COOKIE_EXPIRES_DAYS: number = 30; // Cookie の有効期限（日数）

interface UseUserIdReturn {
  userId: string | null;
  isLoggedIn: boolean;
  saveUserId: (id: string) => void;
  clearUserId: () => void;
}

function useUserId(): UseUserIdReturn {
  const [userId, setUserId] = useState<string | null>(null);
  const isLoggedIn = userId !== null;

  // Cookie の設定オプション（開発時は secure=false）
  const cookieOptions = {
    expires: COOKIE_EXPIRES_DAYS,
    path: "/", // どのパスでも有効
    secure: process.env.NODE_ENV === "production", // 本番のみ HTTPS 限定
    sameSite: "lax" as const,
  };

  // 初期化: Cookie から読み込み
  useEffect(() => {
    const storedId = Cookies.get(COOKIE_KEY);
    if (storedId) {
      setUserId(storedId);
      if (process.env.NODE_ENV === "development") {
        console.info(`[useUserId] Loaded user_id from cookie: ${storedId}`);
      }
    } else {
      if (process.env.NODE_ENV === "development") {
        console.info("[useUserId] No user_id cookie found.");
      }
    }
  }, []);

  /**
   * ユーザーIDを保存する
   * @param id - 保存するユーザーID
   */
  const saveUserId = useCallback((id: string) => {
    Cookies.set(COOKIE_KEY, id, cookieOptions);
    setUserId(id);
    if (process.env.NODE_ENV === "development") {
      console.info(`[useUserId] Saved user_id cookie: ${id}`);
    }
  }, []);

  /**
   * ユーザーIDを削除し、ログアウト状態にする
   */
  const clearUserId = useCallback(() => {
    Cookies.remove(COOKIE_KEY, { path: "/" });
    setUserId(null);
    if (process.env.NODE_ENV === "development") {
      console.info("[useUserId] Cleared user_id cookie");
    }
  }, []);

  return {
    userId,
    isLoggedIn,
    saveUserId,
    clearUserId,
  };
}

export { useUserId };
