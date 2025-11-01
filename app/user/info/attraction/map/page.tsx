import Image from "next/image";

import { ATTRACTIONS_INFO } from "@/constants/attraction";

import { BottomNavigation } from "@/components/user/BottomNavigation";
import { ArticleTemplate } from "@/components/user/info/article/Template";

export default function Page() {
  const attraction = ATTRACTIONS_INFO["battle"];

  return (
    <main className="bg-purple-50 pb-24">
      <ArticleTemplate
        color="var(--color-gray-500)"
        title="校内マップ"
        description="情報システムコースのマップ"
      >
        <section className="space-y-3">
          <Image
            src="/images/attraction/map/map_info_system_course.png"
            alt="情報システムコースのマップ"
            width={800}
            height={600}
            className="h-auto w-full rounded-lg border border-gray-300"
          />
        </section>
      </ArticleTemplate>
      <BottomNavigation currentPage="info" />
    </main>
  );
}
