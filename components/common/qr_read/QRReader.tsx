"use client";

import { useCallback } from "react";

import { Scanner } from "@yudiel/react-qr-scanner";

interface QRReaderProps {
  content: string | null;
  setContent: (value: string | null) => void;
}

function QRReader({ content, setContent }: QRReaderProps) {
  // QRコード検出時の処理
  const handleScan = useCallback(
    (detectedCodes: any[]) => {
      // 検出なし
      if (!detectedCodes?.length) return;

      // 最初の検出値を取得
      const newValue = detectedCodes[0].rawValue;

      // 現在の値と同じ場合は何もしない
      if (newValue === content) return;

      setContent(newValue);
    },
    [content, setContent],
  );

  // エラー時の処理
  const handleError = useCallback((error: unknown) => {
    console.error("QR scan error:", error);
  }, []);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <Scanner
        onScan={handleScan}
        onError={handleError}
        constraints={{
          facingMode: "environment", // 外カメラを使用（スマホ想定）
        }}
        scanDelay={500} // 同じQRの連続読み取りを防止
        components={{
          finder: true, // 枠を表示
        }}
        styles={{
          container: { width: "100%", maxWidth: 400, aspectRatio: "1/1" },
          video: { borderRadius: 12 },
        }}
      />
    </div>
  );
}

export { QRReader };
