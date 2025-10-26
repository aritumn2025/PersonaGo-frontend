import Image from "next/image";

import {
  PERSONALITY_CODE_TO_ID_MAP,
  PERSONALITY_INFO,
  type PersonalityCode,
  type PersonalityTypeId,
} from "@/constants/personality";
import { PERSONALITY_ARTICLE_INFO } from "@/constants/personality_article";

import { BackButton } from "@/components/common/BackButton";
import * as border from "@/components/common/Borders";

import { PersonalityIcon } from "./PersonalityIcon";

const PERSONALITY_BORDER_MAP: Record<
  PersonalityTypeId,
  typeof border.BorderAngularWave01
> = {
  Passionate: border.BorderRoundedWave02,
  Active: border.BorderAngularWave01,
  Calm: border.BorderRoundedWave01,
  Thinker: border.BorderAngularWave02,
};

interface PersonalityArticleProps {
  personalityCode: PersonalityCode;
  result: boolean;
}

function PersonalityArticle({
  personalityCode,
  result = false,
}: PersonalityArticleProps) {
  const personality =
    PERSONALITY_INFO[PERSONALITY_CODE_TO_ID_MAP[personalityCode]];
  const details = PERSONALITY_ARTICLE_INFO[personalityCode];
  const BorderComponent = PERSONALITY_BORDER_MAP[personality.type.id];
  return (
    <article className="w-full">
      {/* 戻るボタン -> infoページのみ */}
      {!result && (
        <div className="fixed top-4 left-4 z-1000">
          <BackButton href="/user/info" />
        </div>
      )}
      <div
        className="flex flex-col items-center px-4 pt-16 pb-1 text-center"
        style={{
          backgroundColor: personality.type.color.main,
        }}
      >
        <h1 className="mb-4 text-4xl font-extrabold text-white">
          {personality.name}
        </h1>
        <p className="text-md mb-1 font-bold text-white">
          {personality.description}
        </p>
        <Image
          src={personality.image}
          alt={personality.name}
          width={200}
          height={200}
        />
      </div>
      <BorderComponent
        top={personality.type.color.main}
        bottom="var(--color-white)"
      />

      <div className="flex flex-col gap-5 pt-10">
        {details.sections.map(({ title, Content }, index) => {
          const isEven = index % 2 === 1; // 0始まりなので注意(2つめが偶数)
          return (
            <div key={index}>
              {/* ボーダー(2つめのみ) */}
              {isEven ? (
                <BorderComponent
                  top="var(--color-white)"
                  bottom={personality.type.color.mainLight}
                />
              ) : null}

              <section
                className="pt-8"
                style={{
                  backgroundColor: isEven
                    ? personality.type.color.mainLight
                    : "var(--color-white)",
                }}
              >
                <h2
                  className="mx-5 border-x-4 text-center text-2xl font-bold text-gray-800"
                  style={{ borderColor: personality.type.color.main }}
                >
                  {title}
                </h2>
                <p className="p-4 whitespace-pre-wrap text-gray-700">
                  <Content link={result ? "result" : "info"} />
                </p>
              </section>

              {/* ボーダー(2つめのみ) */}
              {isEven ? (
                <BorderComponent
                  top={personality.type.color.mainLight}
                  bottom="var(--color-white)"
                />
              ) : null}
            </div>
          );
        })}
        <section>
          {/* ここは文字サイズを少し小さくする */}
          <h2 className="mb-2 text-center text-xl font-bold">関係のある性格</h2>
          <ul className="grid grid-cols-2 gap-4 p-4">
            {details.relations.map((related, index) => (
              <li key={index}>
                <PersonalityIcon
                  personalityCode={related}
                  link={result ? "result" : "info"}
                />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}

export { PersonalityArticle };
