import { notFound } from "next/navigation";

import type { PersonalityCode } from "@/constants/personality";
import { PERSONALITY_ARTICLE_INFO } from "@/constants/personality_article";

import { BottomNavigation } from "@/components/user/BottomNavigation";
import { PersonalityArticle } from "@/components/user/info/";

interface PageProps {
  params: { id: PersonalityCode } | Promise<{ id: PersonalityCode }>;
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await Promise.resolve(params); // Resolve Promise for backward compatibility with older versions that may pass a Promise
  const { id } = resolvedParams;

  if (!(id in PERSONALITY_ARTICLE_INFO)) {
    notFound();
  }

  return (
    <main className="pb-24">
      <PersonalityArticle personalityCode={id} result={false} />
      <BottomNavigation currentPage="info" />
    </main>
  );
}
