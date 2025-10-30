"use client";

import { useEffect, useState } from "react";

import { UserId } from "@/types/common";

import { QRReader } from "@/components/common/qr_read/QRReader";

interface QrFieldProps {
  setUserId: (value: UserId | null) => void;
}

function QrField({ setUserId }: QrFieldProps) {
  const [content, setContent] = useState<string | null>(null);

  // contentが更新されたらuserIdに反映
  useEffect(() => {
    try {
      if (content) {
        const newUserId = JSON.parse(content).id as UserId;
        if (newUserId) {
          setUserId(newUserId);
        }
      }
    } catch (error) {
      console.error("Error parsing QR code content:", error);
      setUserId(null);
    }
  }, [content, setUserId]);

  return <QRReader content={content} setContent={setContent} />;
}

export { QrField };
