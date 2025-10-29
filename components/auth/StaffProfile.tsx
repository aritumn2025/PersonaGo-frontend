"use client";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import { useCookie } from "@/hooks/useCookie";

import { Button } from "../ui/button";

function StaffProfile() {
  const { getStaffName, removeStaffName } = useCookie();
  const [staffName, setStaffName] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const staffName = getStaffName();
    if (staffName) {
      setStaffName(() => staffName);
    }
  }, [getStaffName]);

  return (
    <div className="flex flex-col gap-4">
      こんにちは、{staffName}さん！
      <Button
        variant="destructive"
        onClick={() => {
          removeStaffName();
          router.push("/staff/auth");
        }}
      >
        ログアウト
      </Button>
    </div>
  );
}

export { StaffProfile };
