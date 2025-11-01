import { ATTRACTIONS_INFO } from "@/constants/attraction";

import { BottomNavigation } from "@/components/user/BottomNavigation";
import { ArticleTemplate } from "@/components/user/info/article/Template";

export default function Page() {
  const attraction = ATTRACTIONS_INFO["picture"];

  return (
    <main className="bg-purple-50 pb-24">
      <ArticleTemplate
        color={attraction.color.primary}
        title={attraction.name}
        description={attraction.description}
      >
        <section className="space-y-3">
          <p>
            「いつもの写真が映画のワンシーンみたいに変わったら？」そのワクワクをAIで叶える新コンテンツが、情報システムコースに登場！
          </p>
          <p>
            お好きなテーマ（ジブリ風・ピクサー風・アニメ風など）を選ぶだけで、AIがその場で写真を変換。完成した似顔絵はプリンターから受け取れます。
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">
            ここがオススメ！
          </h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              テーマはジブリ風・ピクサー風・アニメ風など多数。気分に合わせてセレクトOK。
            </li>
            <li>
              AI変換は数分で完了。モニターで変化の瞬間を一緒に楽しめます。
            </li>
            <li>高画質プリントは持ち帰り自由。文化祭の記念にもぴったり。</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">
            体験の流れ（とってもシンプル！）
          </h2>
          <ol className="list-decimal space-y-2 pl-5">
            <li>写真を撮影。希望のテーマを選択。</li>
            <li>
              AIがその場で画像を変換。大画面に映し出されるので一緒にチェック！
            </li>
            <li>
              数分後にプリンターから似顔絵が完成。希望者にはデータ共有も対応。
            </li>
          </ol>
          <p className="text-sm text-gray-600">
            ※複数人写真をご希望の場合はスタッフまで。
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">
            できあがった似顔絵の楽しみ方
          </h2>
          <p>
            印刷した似顔絵はフォトスポットに飾ったり、SNSでシェアして文化祭の思い出として残せます。
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
                <dd>どなたでもOK！記念写真を撮りたい方はぜひ</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="min-w-max font-semibold text-gray-900">
                  持ち物
                </dt>
                <dd>特になし</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">
            文化祭で「自分だけのアート」を手に入れよう
          </h2>
          <p>
            AIが描き出す新しい自分に出会えるチャンス。キャラクターになった姿なら写真が苦手でも笑顔になれるはず。スタッフ一同、あなたのとっておきの一枚をお手伝いします。
          </p>
        </section>
      </ArticleTemplate>
      <BottomNavigation currentPage="info" />
    </main>
  );
}
