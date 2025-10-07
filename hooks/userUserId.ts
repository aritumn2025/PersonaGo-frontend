/**
 * ユーザーIDをcookieで管理する
 */
import { useCallback, useEffect, useState } from "react";

import Cookies from "js-cookie";

const COOKIE_KEY: string = "user_id"; // Cookie のキー
const COOKIE_EXPIRES_DAYS: number = 30; // Cookie の有効期限（日数）

function useUserId() {
  const [userId, setUserId] = useState<string | null>(null);
  const isLoggedIn = userId !== null;

  // 初期化: Cookie から読み込み
  useEffect(() => {
    const storedId = Cookies.get(COOKIE_KEY);
    setUserId(storedId !== undefined ? storedId : null);
  }, []);

  /**
   * ユーザーIDを保存する
   * @param id - 保存するユーザーID
   */
  const saveUserId = useCallback((id: string) => {
    Cookies.set(COOKIE_KEY, id, { expires: COOKIE_EXPIRES_DAYS });
    setUserId(id);
  }, []);

  /**
   * ユーザーIDを削除し、ログアウト状態にする
   */
  const clearUserId = useCallback(() => {
    Cookies.remove(COOKIE_KEY);
    setUserId(null);
  }, []);

  return {
    userId,
    isLoggedIn,
    saveUserId,
    clearUserId,
  };
}

export { useUserId };
