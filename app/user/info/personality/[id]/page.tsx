import { notFound } from "next/navigation";

import type { PersonalityCode } from "@/constants/personality";
import { PERSONALITY_ARTICLE_INFO_MAP } from "@/constants/personality_article";

import { BottomNavigation } from "@/components/user/BottomNavigation";
import { PersonalityArticle } from "@/components/user/info/";

interface PageProps {
  params: { id: PersonalityCode } | Promise<{ id: PersonalityCode }>;
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await Promise.resolve(params); // 一応旧バージョンの互換性を保つために Promise を解決
  const { id } = resolvedParams;

  if (!(id in PERSONALITY_ARTICLE_INFO_MAP)) {
    notFound();
  }

  return (
    <>
      <PersonalityArticle personalityCode={id} />
      <BottomNavigation currentPage="info" />
    </>
  );
}
