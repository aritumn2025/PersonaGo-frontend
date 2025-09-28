/* メタデータの設定情報を定めた定数ファイル */
import type { MetaConfig } from "@/utils/metadata";

// メタデータ
// TODO: 内容が決まり次第更新する
// TODO: 画像 ogp_default.png と favicon.icoを用意する
const META_CONFIG: MetaConfig = {
  url: process.env.NEXT_PUBLIC_BASE_URL || "https://persona-go.example.com",
  title: "Persona-Go",
  description:
    "Persona-Goは、あなたの性格を発見してアトラクションで連携して楽しめる新しい体験型イベントです。",
  twitterHandle: undefined,
  locale: "ja_JP",
  ogp: "/meta/ogp_default.png",
  favicon: "/meta/favicon.ico",
  creator: "有明工業高等専門学校 情報システムコース",
  keywords: [
    "personago",
    "有明高専",
    "有明工業高等専門学校",
    "ありたむ2025",
    "文化祭",
  ],
};

export { type MetaConfig, META_CONFIG };
