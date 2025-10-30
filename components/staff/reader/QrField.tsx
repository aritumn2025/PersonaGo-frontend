"use client";

import { useEffect, useState } from "react";

import { UserId } from "@/types/common";

import { QRReader } from "@/components/common/qr_read/QRReader";

interface QrFieldProps {
  setUserId: (value: UserId) => void;
}

function QrField({ setUserId }: QrFieldProps) {
  const [content, setContent] = useState<string | null>(null);

  // contentが更新されたらuserIdに反映
  useEffect(() => {
    if (content) {
      const newUserId = JSON.parse(content).id as UserId;
      if (newUserId) {
        setUserId(newUserId);
      }
    }
  }, [content, setUserId]);

  return <QRReader content={content} setContent={setContent} />;
}

export { QrField };
