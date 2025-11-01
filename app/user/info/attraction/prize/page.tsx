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
            情報システムコースのアトラクションを楽しんだあとは、スタンプカードを景品ブースに持ってきてください。集めたスタンプ数に応じて、文化祭限定のオリジナルグッズをプレゼントします。
          </p>
          <p>
            人気ゲームをテーマにしたキーホルダーや、AIアートのポストカードなど、ここでしか手に入らないアイテムが勢ぞろい。友達と協力してコンプリートを目指そう！
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">
            ここがオススメ！
          </h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              体験したアトラクションの数だけグレードアップ。頑張った分だけ豪華に！
            </li>
            <li>
              景品はすべて文化祭限定デザイン。記念に残るラインナップを用意しました。
            </li>
            <li>
              友達同士で交換して楽しめるランダムアイテムもあり。何が出るかはお楽しみ。
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">
            景品のもらい方（とっても簡単！）
          </h2>
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              受付でもらったスタンプカードをチェック。アトラクション体験ごとにスタンプが貯まります。
            </li>
            <li>
              集めたスタンプ数に応じた景品コースを選択。スタッフにカードを提示してください。
            </li>
            <li>
              景品を受け取ったらフォトスポットで記念撮影。SNSにシェアするのも大歓迎！
            </li>
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
                <dd>スタンプカード（忘れずにお持ちください）</dd>
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
