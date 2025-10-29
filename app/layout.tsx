import { Noto_Sans_JP } from "next/font/google";

import { META_CONFIG } from "@/constants/meta";

import { createMetadata } from "@/utils/metadata";

import "./globals.css";

export const metadata = createMetadata(META_CONFIG);

const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
  display: "swap",
});

// Mock Server
if (
  process.env.NODE_ENV === "development" &&
  process.env.NEXT_PUBLIC_USE_MOCKS === "true"
) {
  if (typeof window === "undefined") {
    const { server } = require("../mocks/server");
    server.listen();
  } else {
    const { worker } = require("../mocks/browser");
    worker.start();
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={notoSans.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
