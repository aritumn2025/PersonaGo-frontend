"use client";

import { QRCodeCanvas } from "qrcode.react";

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
    <QRCodeCanvas
      value={content}
      size={size || 128}
      bgColor={bgColor || "#FFFFFF"}
      fgColor={fgColor || "#000000"}
      level={level || "L"}
      marginSize={0}

      // imageSettings={{
      //   src: "/favicon.ico",
      //   x: undefined,
      //   y: undefined,
      //   height: 24,
      //   width: 24,
      //   excavate: true,
      // }}
    />
  );
}

export { QRCodeForText };
export type { QRCodeForTextProps };
