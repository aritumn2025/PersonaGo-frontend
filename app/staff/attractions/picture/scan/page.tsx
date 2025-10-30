"use client";

import { useCookie } from "@/hooks/useCookie";

import { EntryContainer } from "@/components/staff";

export default function Page() {
  const { getStaffName } = useCookie();
  const staffName = getStaffName() || "unknown_staff"; // リダイレクトするので、staffNameが空になることはないはず
  return (
    <main className="flex h-screen items-center justify-center bg-gray-50">
      <EntryContainer attraction="picture" staffName={staffName} />
    </main>
  );
}
