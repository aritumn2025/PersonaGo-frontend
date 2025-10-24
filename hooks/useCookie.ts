"use client";

import { useCallback } from "react";

import Cookies from "js-cookie";

// cookieキー定義
const USER_ID_KEY = "user_id";
const USER_NAME_KEY = "user_name";

// cookieの有効期限（日）
const USER_ID_EXPIRE_DAYS = 100; // イベント期間中は長めでもOK
const USER_NAME_EXPIRE_DAYS = 2; // ページ遷移用の一時メモリ

/**
 * user_id, user_name をクッキーで管理するカスタムフック
 */
function useCookie() {
  // --- Getter ---
  const getUserId = () => Cookies.get(USER_ID_KEY) ?? null;
  const getUserName = () => Cookies.get(USER_NAME_KEY) ?? null;

  // --- Setter ---
  const setUserId = (id: string) => {
    Cookies.set(USER_ID_KEY, id, { expires: USER_ID_EXPIRE_DAYS });
  };

  const setUserName = (name: string) =>
    Cookies.set(USER_NAME_KEY, name, { expires: USER_NAME_EXPIRE_DAYS });

  // --- Remover ---
  const removeUserId = () => Cookies.remove(USER_ID_KEY);

  const removeUserName = () => Cookies.remove(USER_NAME_KEY);

  return {
    // getter
    getUserId,
    getUserName,
    // setter
    setUserId,
    setUserName,
    // remover
    removeUserId,
    removeUserName,
  };
}

export { useCookie };
