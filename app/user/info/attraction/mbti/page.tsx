import { ATTRACTIONS_INFO } from "@/constants/attraction";

import { Marker } from "@/components/common/Marker";
import { BottomNavigation } from "@/components/user/BottomNavigation";
import { ArticleTemplate } from "@/components/user/info/article/Template";

export default function Page() {
  const attraction = ATTRACTIONS_INFO["mbti"];

  return (
    <main className="bg-purple-50 pb-24">
      <ArticleTemplate
        color={attraction.color.primary}
        title={attraction.name}
        description={attraction.description}
      >
        <section className="space-y-4">
          <p>
            「私って本当はどんな人？」そんなモヤモヤに答える文化祭限定の性格診断体験が、情報システムコースに登場！
          </p>
          <p>
            <Marker color={attraction.color.secondary}>
              スマホから数分で答えられる簡単な質問に進むだけで、あなたの性格タイプを診断します。
            </Marker>
          </p>
          <p>
            全部で16種類のキャラクターから、あなたの「性格タイプ」がきっと見つかるはず。
          </p>
          <p>
            自分自身を見つめ直したい人も、友達の意外な素顔を知りたい人も、ぜひ気軽に遊びに来てください！
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">
            ここがオススメ！
          </h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              所要時間はわずか数分。待ち時間の合間にもサクッと診断できる手軽さ。
            </li>
            <li>
              <Marker color={attraction.color.secondary}>
                16種類のキャラクター結果は、思わずスクショしたくなるかわいさ＆わかりやすさ。
              </Marker>
            </li>
            <li>
              診断後は、自分のQRコードが発行！
              <Marker color={attraction.color.secondary}>
                QRコードは情報システムコースの各アトラクションと連携しており、特別な体験が可能に。
              </Marker>
            </li>
            <li>
              診断結果は別アトラクション「みんなでゲーム」と連携して、自分の能力やスキルに反映！
              遊びの幅がぐっと広がる！
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">
            体験の流れ（とってもシンプル！）
          </h2>
          <ol className="list-decimal space-y-2 pl-5">
            <li>案内ポスターのQRコードから性格診断を行う。</li>
            <li>質問に直感でこたえるだけ。全問回答して診断ボタンをタップ！</li>
            <li>
              すぐに結果が表示されるので、友達と見せ合いっこしたり、スクショして保存しよう。
            </li>
          </ol>
          <p className="text-sm text-gray-600">
            ※通信環境が不安な人は、スタッフがサポートしますので安心してご参加ください。
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">
            診断後の楽しみ方
          </h2>
          <p>
            文化祭当日は、診断結果を
            <span className="font-semibold text-purple-600">
              情報システムコースのゲームコーナー
            </span>
            で提示すると、あなたのタイプに合わせた遊び方やおすすめゲームをご案内します！
          </p>
          <div
            className="rounded-lg px-3 py-3 text-sm text-gray-700"
            style={{ backgroundColor: attraction.color.secondary }}
          >
            <p className="font-semibold text-gray-900">
              シェアして盛り上がろう！
            </p>
            <p>
              写真を撮ってSNSに載せたり、家族に送ったりするのも大歓迎。スタッフに声をかければ、思い出の1枚も撮影します♪
            </p>
          </div>
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
                <dd>どなたでもOK！友達同士やご家族でも参加歓迎</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="min-w-max font-semibold text-gray-900">
                  持ち物
                </dt>
                <dd>スマホ（貸出用端末あり・スタッフにご相談ください）</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">
            文化祭で「本当の自分」を探しに行こう
          </h2>
          <p>
            好奇心の向くままに、性格診断で新しい自分を発見してみませんか？友達や気になる人のタイプと見比べると、思わぬ共通点や相性が見えてきます。
          </p>
          <p>
            あなたの「性格タイプ」を見つけて、文化祭の会話をさらに盛り上げよう。
            スタッフ一同、あなたの参加をお待ちしています！
          </p>
        </section>
      </ArticleTemplate>
      <BottomNavigation currentPage="info" />
    </main>
  );
}
