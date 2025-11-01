import Link from "next/link";

import { BottomNavigation } from "@/components/user/BottomNavigation";
import { ArticleTemplate } from "@/components/user/info/article/Template";

export default function Page() {
  return (
    <main className="bg-blue-50 pb-24">
      <ArticleTemplate
        color="var(--color-gray-500)"
        title="投票のお願い"
        description="文化祭を一緒に盛り上げてくださった皆さんへ"
      >
        <section className="mt-3 space-y-3">
          <p>
            ご来場ありがとうございます！ 私たち
            <strong>情報システムコース</strong>では、
            性格診断・似顔絵メーカー・サバゲー・マルチゲームなど、
            情報技術を活かしたさまざまな出し物を企画してきました。
          </p>
          <p>
            準備から当日まで、クラス全員で力を合わせて作り上げてきたこの出し物を、
            少しでも楽しんでいただけたなら本当に嬉しいです。
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">
            ぜひ投票をお願いします！
          </h2>
          <p>
            各コースへの投票は、みなさんの応援の気持ちを伝える大切な機会です。
            情報システムコースを「良かった！」と思っていただけた方は、
            ぜひ投票で応援をお願いします。
          </p>
          <div className="rounded-lg bg-blue-100 px-4 py-3 text-gray-800">
            <ul className="list-disc space-y-2 pl-5 text-sm">
              <li>
                <strong>一般来場者の方：</strong>
                配布されたパンフレットの中にある投票用シールを、
                <strong>校門前の投票口</strong>に貼ってください。
              </li>
              <li>
                <strong>本校の学生の方：</strong>
                以下のGoogleフォームから投票できます。
              </li>
            </ul>
            <div className="mt-3 text-center">
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSfHiubmSSAdQBKqEzja4FZDN895LJKGsdzAgpF0nsFgpfIV8Q/viewform"
                target="_blank"
                className="inline-block rounded-md bg-blue-500 px-4 py-2 font-medium text-white transition hover:bg-blue-600"
              >
                投票フォームを開く
              </Link>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">最後に</h2>
          <p>
            今回の文化祭は、私たちにとっても特別な挑戦でした。
            技術を活かし、体験を通じて「人を楽しませる」ことを目指してきました。
          </p>
          <p>
            皆さんの笑顔と応援の一票が、何よりの励みになります。
            本日は本当にありがとうございました！
          </p>
        </section>
      </ArticleTemplate>

      <BottomNavigation currentPage="info" />
    </main>
  );
}
