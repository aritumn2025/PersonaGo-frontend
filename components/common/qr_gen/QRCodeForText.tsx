"use client";

import { QRCodeSVG } from "qrcode.react";

import type { QRCodeCanvasProps } from "./qr_canvas";

interface QRCodeForTextProps extends QRCodeCanvasProps {
  content: string;
}

function QRCodeForText({
  content,
  size,
  bgColor,
  fgColor,
  level,
}: QRCodeForTextProps) {
  return (
    <QRCodeSVG
      value={content}
      // デフォルト値は変わらないがこちらでも明示
      size={size || 128}
      bgColor={bgColor || "#FFFFFF"}
      fgColor={fgColor || "#000000"}
      level={level || "L"}
      marginSize={0}
    />
  );
}

export { QRCodeForText };
export type { QRCodeForTextProps };
