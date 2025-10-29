"use client";

import { useEffect } from "react";

import { useRouter } from "next/navigation";

import { useCookie } from "@/hooks/useCookie";

export default function StaffLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { getStaffName } = useCookie();
  const router = useRouter();

  useEffect(() => {
    const name = getStaffName();
    if (!name) router.push("/staff/auth");
  }, [getStaffName, router]);

  return <>{children}</>;
}
