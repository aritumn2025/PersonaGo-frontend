"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import type { AuthRequest, AuthResponse } from "@/types/next_api";

import { useCookie } from "@/hooks/useCookie";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function AuthForm() {
  const [staffName, setStaffNameValue] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const router = useRouter();
  const { setStaffName } = useCookie();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const body: AuthRequest = { password };
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data: AuthResponse = await res.json();

      if (res.ok) {
        setStaffName(staffName);
        router.push("/staff");
      } else {
        switch (data.error) {
          case "missing_password":
            setError("パスワードが入力されていません。");
            break;
          case "invalid_password":
            setError("パスワードが正しくありません。");
            break;
          case "internal_server_error":
            setError(
              "サーバーエラーが発生しました。後でもう一度お試しください。",
            );
            break;
          default:
            setError("認証に失敗しました。パスワードを確認してください。");
            break;
        }
      }
    } catch (err) {
      console.error("Authentication error:", err);
      setError("認証に失敗しました。パスワードを確認してください。");
    }
  };

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>スタッフ認証</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="staffName">スタッフ名</Label>
            <Input
              id="staffName"
              value={staffName}
              onChange={(e) => setStaffNameValue(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="password">パスワード</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <p className="h-8 text-sm text-red-500">{error}</p>

          <Button type="submit" className="w-full">
            ログイン
          </Button>
        </form>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
