/**
 * エラーオブジェクトの型ガード(Error Code)
 * @param error 判定対象のエラーオブジェクト
 */
export function hasErrorCode(error: unknown): error is { code: string } {
  return typeof error === "object" && error !== null && "code" in error;
}

/**
 * エラーオブジェクトからエラーコードを取得する
 * @param error 取得対象のエラーオブジェクト
 * @returns エラーコードまたはundefined
 */
export function getErrorCode(error: unknown): string | undefined {
  return hasErrorCode(error) ? error.code : undefined;
}

/**
 * エラーオブジェクトの型ガード(Error Message)
 * @param error 判定対象のエラーオブジェクト
 */
export function hasErrorMessage(error: unknown): error is { message: string } {
  return typeof error === "object" && error !== null && "message" in error;
}

/**
 * エラーオブジェクトからエラーメッセージを取得する
 * @param error 取得対象のエラーオブジェクト
 * @returns エラーメッセージまたはundefined
 */
export function getErrorMessage(error: unknown): string | undefined {
  return hasErrorMessage(error) ? error.message : undefined;
}
