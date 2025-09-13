import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Persona Go",
  description: "Aritumn 2025", // 説明は変更する予定
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
