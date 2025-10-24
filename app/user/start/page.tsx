"use client";

import { useEffect } from "react";

import { useRouter } from "next/navigation";

import { useCookie } from "@/hooks/useCookie";

import { SquareSpin2 } from "@/components/common/loader";

export default function Page() {
  const { getUserId } = useCookie();
  const router = useRouter();

  // ユーザーIDの取得とリダイレクト
  useEffect(() => {
    const id = getUserId();
    if (id) {
      router.replace(`/user/dashboard`);
    } else {
      router.replace("/user/diagnose/");
    }
  }, [router, getUserId]);

  return (
    <main>
      <div className="flex h-screen w-full items-center justify-center">
        <SquareSpin2 color="var(--color-gray-600)" size="36px" />
      </div>
    </main>
  );
}
