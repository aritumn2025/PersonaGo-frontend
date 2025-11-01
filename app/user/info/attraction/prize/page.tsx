import { ATTRACTIONS_INFO } from "@/constants/attraction";

import { BottomNavigation } from "@/components/user/BottomNavigation";
import { ArticleTemplate } from "@/components/user/info/article/Template";

export default function Page() {
  const attraction = ATTRACTIONS_INFO["prize"];

  return (
    <main className="bg-purple-50 pb-24">
      <ArticleTemplate
        color={attraction.color.primary}
        title={attraction.name}
        description={attraction.description}
      >
        <section className="space-y-3">
          <p>
            情報システムコースのアトラクションを楽しんだあとは、スマホ（またはスタンプカード）を持って景品ブースに行ってみましょう！
            抽選をして、豪華景品をゲットできるかも？！
          </p>
          抽選では、アトラクションに行った数に応じて当たる確率がアップします。
          たくさんアトラクションを体験して、豪華景品を手に入れよう！
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">
            ここがオススメ！
          </h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>アトラクションを体験した数に応じて当たる確率がアップ！</li>
            <li>豪華景品をゲットできるチャンス！</li>
            <li>友達と一緒に挑戦して、盛り上がろう！</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">
            景品のもらい方（とっても簡単！）
          </h2>
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              各アトラクション入場時、性格診断して発行されたQRコードをスタッフに提示します。
            </li>
            <li>アトラクションを体験後、景品ブースに行きます。</li>
            <li>景品ブースのスタッフにQRコードを提示して抽選開始！</li>
            <li>大当たりや中あたり、小あたりに応じて、景品をゲット！</li>
          </ol>
          <p className="text-sm text-gray-600">
            ※景品は数に限りがあります。お早めの来場がおすすめです。
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">開催情報</h2>
          <div className="rounded-2xl border-3 border-purple-200 px-4 py-4 text-sm text-gray-700">
            <dl className="space-y-2">
              <div className="flex justify-between gap-4">
                <dt className="min-w-max font-semibold text-gray-900">場所</dt>
                <dd>{attraction.place}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="min-w-max font-semibold text-gray-900">対象</dt>
                <dd>アトラクションを体験した方ならどなたでも</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="min-w-max font-semibold text-gray-900">
                  持ち物
                </dt>
                <dd>スマホまたはスタンプカード（忘れずにお持ちください）</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">
            文化祭の思い出を景品で彩ろう
          </h2>
          <p>
            アトラクションで盛り上がったあとは、景品ブースで達成感を形に。スタッフ一同、皆さんの挑戦を楽しみにお待ちしています！
          </p>
        </section>
      </ArticleTemplate>
      <BottomNavigation currentPage="info" />
    </main>
  );
}
