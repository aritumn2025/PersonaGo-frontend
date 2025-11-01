import { ATTRACTIONS_INFO } from "@/constants/attraction";

import { BottomNavigation } from "@/components/user/BottomNavigation";
import { ArticleTemplate } from "@/components/user/info/article/Template";

export default function Page() {
  const attraction = ATTRACTIONS_INFO["games"];

  return (
    <main className="bg-purple-50 pb-24">
      <ArticleTemplate
        color={attraction.color.primary}
        title={attraction.name}
        description={attraction.description}
      >
        <section className="space-y-3">
          <p>
            最大4人で協力するシューティングゲームが文化祭に登場！チーム全員の性格タイプを読み込むと、それぞれの性格に合わせた攻撃方法やスキルが解放され、戦い方がカラフルに変化します。
          </p>
          <p>
            画面いっぱいに飛び交うエフェクトと、性格の組み合わせ次第で変わる攻略ルート。観戦しているだけでもドキドキの大迫力バトルを楽しめます。
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">
            ここがオススメ！
          </h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>4人同時プレイで協力＆役割分担。チームワークが勝利のカギ。</li>
            <li>
              性格タイプごとに攻撃スタイルが変化。性格に合わせた戦い方を体感。
            </li>
            <li>
              画面はひっちゃかめっちゃかな派手さ。弾幕とスキルの嵐で盛り上がり必至。
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">
            体験の流れ（サクッと遊べる！）
          </h2>
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              受付で人数を揃えてエントリー。性格診断をしていない人はその場でチェック。
            </li>
            <li>チームのタイプを読み込み、キャラクターの武器を確認。</li>
            <li>
              大画面の前で協力バトル開始！ボスを倒してハイスコアを更新しよう。
            </li>
          </ol>
          <p className="text-sm text-gray-600">
            ※ソロ参加も歓迎。スタッフが即席チームを組んでくれます。
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
                <dd>お友達同士での参加はもちろん、親子やソロ参加も大歓迎</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="min-w-max font-semibold text-gray-900">
                  持ち物
                </dt>
                <dd>特になし（性格診断診断結果があるとスムーズです）</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">
            文化祭の伝説を一緒に作ろう
          </h2>
          <p>
            役割を活かした連携と性格シナジーで、チームだけの攻略法を見つけてみませんか？観客の応援に包まれながら、手に汗握る激闘を体験しよう！
          </p>
        </section>
      </ArticleTemplate>
      <BottomNavigation currentPage="info" />
    </main>
  );
}
