import { Bold } from "lucide-react";

import { ATTRACTIONS_INFO } from "@/constants/attraction";

import { BottomNavigation } from "@/components/user/BottomNavigation";
import { ArticleTemplate } from "@/components/user/info/article/Template";

export default function Page() {
  const attraction = ATTRACTIONS_INFO["battle"];

  return (
    <main className="bg-purple-50 pb-24">
      <ArticleTemplate
        color={attraction.color.primary}
        title={attraction.name}
        description={attraction.description}
      >
        <section className="space-y-3">
          <p>
            教室がまるごと戦場に変わる！本格的なサバイバルゲームを文化祭仕様にアレンジしたアトラクションが、情報システムコースに登場します。
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">
            ここがオススメ！
          </h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              実際の教室に障害を追加！！！！
              遮蔽物を駆使しながら戦略的に立ち回ろう。
            </li>
            <li>
              NERFを用いた本格的なサバイバルゲーム。
              安全に撃ち合いを楽しめます。
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">
            体験の流れ（ドキドキの数分間）
          </h2>
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              受付でエントリー。ルール説明で安全に遊ぶポイントをチェック。
            </li>
            <li>
              ゲーム開始！制限時間内にミッションを達成して勝利をつかもう。
            </li>
          </ol>
          <p className="text-sm text-gray-600">
            ※備品はすべて貸し出し。動きやすい服装・靴でご参加ください。
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">
            戦略と駆け引きが決め手
          </h2>
          <p>
            学校ならではの教室レイアウトを使いこなして、チームで勝利を目指しましょう。
          </p>
          <div
            className="rounded-lg px-3 py-3 text-sm text-gray-700"
            style={{ backgroundColor: attraction.color.secondary }}
          >
            <p className="font-semibold text-gray-900">初心者でも大丈夫？</p>
            <p>
              スタッフが安全対策と操作方法を丁寧にレクチャー。未経験でも安心して参加できます。
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
                <dd>中学生以上推奨。ご家族での参加もOKです。</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="min-w-max font-semibold text-gray-900">
                  持ち物
                </dt>
                <dd>特になし（動きやすい服装をおすすめします）</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">
            文化祭で忘れられない体験を
          </h2>
          <p>
            教室とは思えない臨場感と、仲間とのチームワークが試される緊張感。文化祭で過去最高のサバゲー体験を味わってください！
          </p>
        </section>
      </ArticleTemplate>
      <BottomNavigation currentPage="info" />
    </main>
  );
}
