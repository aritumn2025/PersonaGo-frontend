import { NextResponse } from "next/server";

/**
 * JSON形式のレスポンスを作る共通関数
 * @param body リクエストボディ
 * @param status HTTPステータスコード
 * @returns JSON形式のレスポンス
 */
function jsonResponse<T>(body: T, status: number): NextResponse<T> {
  return NextResponse.json(body, { status });
}

export { jsonResponse };
