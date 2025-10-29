import { NextRequest } from "next/server";

import type { AuthRequest, AuthResponse } from "@/types/next_api";

import { jsonResponse } from "@/lib/next_api";

const correctPassword = process.env.APP_PASSWORD;

export async function POST(req: NextRequest) {
  try {
    // 環境変数のパスワードが設定されていない場合はエラーを返す
    if (!correctPassword) {
      console.error("Environment variable APP_PASSWORD is not set");
      return jsonResponse(
        { success: false, error: "internal_server_error" },
        500,
      );
    }

    const body: AuthRequest = await req.json();

    // バリデーション
    if (typeof body.password !== "string" || body.password.trim() === "") {
      return jsonResponse({ success: false, error: "missing_password" }, 400);
    }

    // パスワード認証
    if (body.password === correctPassword) {
      return jsonResponse<AuthResponse>(
        { success: true, message: "success" },
        200,
      );
    }

    // 認証失敗
    return jsonResponse({ success: false, error: "invalid_password" }, 401);
  } catch (err) {
    // その他のエラー処理
    console.error("Authentication error:", err);
    return jsonResponse(
      { success: false, error: "internal_server_error" },
      500,
    );
  }
}
