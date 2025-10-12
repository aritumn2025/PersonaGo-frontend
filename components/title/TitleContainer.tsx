import Image from "next/image";

import {
  BorderAngularWave02,
  BorderLiner02,
  BorderRoundedWave01,
} from "@/components/common/Borders";
import { Marker } from "@/components/common/Marker";

import { FadeIn } from "./FadeIn";
import { Footer } from "./Footer";
import { StartButton } from "./StartButton";

const markerColor = "var(--color-pink-300)";

function TitleContainer() {
  return (
    <>
      <main className="flex w-full flex-col items-center text-center">
        {/* ===== タイトルセクション ===== */}
        <section className="relative w-full bg-gradient-to-br from-pink-400 via-rose-400 to-orange-300 py-16 text-white">
          <FadeIn>
            <h1 className="sr-only">Persona Go（ペルソナ・ゴー）</h1>
            <div className="mb-8 flex justify-center">
              <Image
                src="/images/title/title.png"
                alt="Persona Go タイトル画像"
                width={480}
                height={160}
                priority
              />
            </div>
            <p className="text-lg font-medium md:text-xl">
              あなたの性格が、
              <br />
              文化祭をもっと楽しくする！
            </p>
          </FadeIn>
        </section>

        {/* ===== アプリ概要セクション ===== */}
        <section className="w-full bg-white px-4 py-12 text-gray-800 md:px-8">
          <FadeIn>
            <h2 className="mb-4 text-3xl font-bold text-pink-500">
              Persona Goとは？
            </h2>
            <p className="text-md leading-relaxed">
              Persona Go は、
              <Marker color={markerColor}>
                ありたむフェスタの情報システムコースの出し物をもっと楽しむ
              </Marker>
              ための参加型アプリです。
              <br />
              <Marker color={markerColor}>性格診断</Marker>
              をして、自分だけの体験を楽しもう！
              <br />
              出し物をまわると記録がたまり、
              <Marker color={markerColor}>3つ以上の体験で抽選</Marker>
              にも参加できます。
            </p>
            {/* TODO: ここに一部の性格のイラスト表示。 */}
          </FadeIn>
        </section>

        <BorderRoundedWave01
          top="var(--color-white)"
          bottom="var(--color-yellow-400)"
        />
        {/* ===== 使い方セクション ===== */}
        <section className="w-full border-none bg-yellow-400 px-4 py-8 md:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold text-white">使い方</h2>
          </FadeIn>
        </section>

        <BorderAngularWave02
          top="var(--color-yellow-400)"
          bottom="var(--color-green-400)"
        />

        {/* ===== 開始ボタンセクション ===== */}
        <section className="w-full bg-green-400 px-4 py-16 md:px-8">
          <FadeIn>
            <h2 className="mb-15 text-2xl font-bold text-white">
              さあ、文化祭を楽しもう！
            </h2>
          </FadeIn>
          <StartButton href="/user/start">始める</StartButton>
        </section>
      </main>
      <BorderLiner02
        top="var(--color-green-400)"
        bottom="var(--color-blue-300)"
      />
      <Footer />
    </>
  );
}

export { TitleContainer };
