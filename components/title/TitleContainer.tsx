import Image from "next/image";

import {
  BorderAngularWave02,
  BorderLiner02,
  BorderRoundedWave01,
} from "@/components/common/Borders";
import { EmphasizeButton } from "@/components/common/EmphasizeButton";
import { Marker } from "@/components/common/Marker";

import { FadeIn } from "./FadeIn";
import { Footer } from "./Footer";
import { Step } from "./Step";

const markerColor = "var(--color-pink-300)";

const steps: {
  title: string;
  description: string;
  image?: { src: string; alt: string; width: number; height: number };
}[] = [
  {
    title: "性格診断を受けよう",
    description:
      "はじめに、簡単な質問に答えて自分の性格タイプを診断！結果に応じて、あなたのマイページが作成されます。",
    image: undefined,
  },
  {
    title: "入場時にQRコードを提示",
    description:
      "出し物に入場する際にマイページのQRコードを受付でスキャンしてもらうことで、アプリにあなたの来場情報が記録されます。",
    image: undefined,
  },
  {
    title: "出し物を楽しもう！",
    description:
      "出し物によっては、性格タイプごとにちょっと違う体験ができるかも？",
    image: undefined,
  },
  {
    title: "マイページで振り返ろう",
    description:
      "あなたが体験した出し物や、ゲームのスコアを確認できます。文化祭の思い出をアプリの中で残そう！",
    image: undefined,
  },
  {
    title: "3つ体験したら抽選チャンス！",
    description: "出し物を3つ以上体験すると、抽選にチャレンジ可能！",
    image: undefined,
  },
];

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
            <h2 className="text-3xl font-bold text-gray-800">使い方</h2>
          </FadeIn>
          <div className="mt-8 flex flex-col gap-6">
            {steps.map((step, index) => (
              <FadeIn key={index}>
                <Step
                  num={index + 1}
                  title={step.title}
                  description={step.description}
                  image={step.image}
                />
              </FadeIn>
            ))}
          </div>
        </section>

        <BorderAngularWave02
          top="var(--color-yellow-400)"
          bottom="var(--color-green-400)"
        />

        {/* ===== 開始ボタンセクション ===== */}
        <section className="w-full bg-green-400 px-4 py-16 md:px-8">
          <FadeIn>
            <h2 className="mb-16 text-2xl font-bold text-white">
              さあ、文化祭を楽しもう！
            </h2>
          </FadeIn>
          <EmphasizeButton
            href="/user/start"
            className="h-12 w-40 rounded-2xl bg-white px-10 py-2 text-2xl font-semibold text-green-500 shadow-xl"
          >
            始める
          </EmphasizeButton>
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
