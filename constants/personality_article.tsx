import React from "react";

import type { PersonalityId } from "@/types/common";

import { PersonalityLink } from "@/components/user/info/";

import type { PersonalityCode } from "./personality";
import { PERSONALITY_INFO } from "./personality";

// 性格の記事データに関しては、PersonalityCode をキーにして管理する

/**
 * 各セクションの情報
 * - title: 見出し
 * - content: JSXまたはテキストを含む内容
 */
type PersonalityArticleSection = {
  title: string;
  Content: React.FC<{
    link: keyof (typeof PERSONALITY_INFO)[PersonalityId]["link"];
  }>;
};

/**
 * 各性格の記事データ
 * - sections: 各セクション配列
 * - relations: 関連性格
 */
type PersonalityArticleInfoEntry = Readonly<{
  sections: PersonalityArticleSection[];
  relations: PersonalityCode[];
}>;

const SECTION_01_TITLE = "どんな人？";
const SECTION_02_TITLE = "長所・短所とアドバイス";
const SECTION_03_TITLE = "相性と関係性";

// 各性格の記事データマップ
// TODO: 全部の性格を埋める
const PERSONALITY_ARTICLE_INFO: Readonly<
  Record<PersonalityCode, PersonalityArticleInfoEntry>
> = {
  EFSA: {
    sections: [
      {
        title: SECTION_01_TITLE,
        Content: () => (
          <>
            キャプテンは、「情熱タイプ」の中でも特に実行力と責任感に優れたリーダー的存在です。
            人と関わることでエネルギーを得ながらも、目標を達成するためには現実的な手段を選ぶ“行動の人”でもあります。
            <br />
            困難な状況でも諦めず、チームをまとめながら前進する姿は、まさに頼れるキャプテンそのものです。
            <br />
            明確な目的意識と強い意志を持ち、どんな環境でも「どうすればできるか」を考え、結果を出すことに情熱を注ぎます。
          </>
        ),
      },
      {
        title: SECTION_02_TITLE,
        Content: () => (
          <>
            キャプテンの最大の強みは、実現力とリーダーシップです。自分だけでなく周囲をも鼓舞し、チームを勝利へと導く力を持っています。
            現実的な判断力とスピーディな行動が、多くの人から信頼を集める理由です。
            <br />
            一方で、計画や結果にこだわりすぎて柔軟さを欠いたり、他人の感情よりも効率を優先してしまうことがあります。
            また、責任感の強さが裏目に出て、自分を追い込みすぎてしまうことも。
            <br />
            そんなときは、少し立ち止まって「人の気持ち」や「チームの空気」に目を向けてみましょう。
            心の余白を持つことで、あなたのリーダーシップはより温かく、強く、信頼されるものへと進化します。
          </>
        ),
      },
      {
        title: SECTION_03_TITLE,
        Content: ({ link }) => (
          <>
            キャプテンにとって最も相性が良いのは、穏やかで支え上手なタイプです。
            たとえば
            <PersonalityLink personalityCode="IFPA" link={link} />
            は、あなたの情熱をやさしく包み込み、チーム全体に調和をもたらしてくれます。
            また、
            <PersonalityLink personalityCode="ITSA" link={link} />
            のような論理的で堅実なタイプは、あなたの実行力を堅固な戦略で支える最高のパートナーになるでしょう。
            <br />
            <br />
            一方で、自由奔放な
            <PersonalityLink personalityCode="ETPM" link={link} />
            や、感性豊かでマイペースな
            <PersonalityLink personalityCode="IFPM" link={link} />
            とは、価値観の違いから衝突することもあります。しかし、彼らの存在はあなたに「柔軟さ」や「感情の豊かさ」を思い出させてくれる貴重な刺激です。
            <br />
            正反対だからこそ、学び合える関係――それがキャプテンにとっての理想的な人間関係なのです。
          </>
        ),
      },
    ],
    relations: ["IFPA", "ITSA", "ETPM", "IFPM"],
  },
  EFSM: {
    sections: [
      { title: "どんな人？", Content: () => <> インフルエンサーの説明文</> },
      {
        title: "長所・短所とアドバイス",
        Content: () => <> インフルエンサーの長所と短所</>,
      },
      {
        title: "相性と関係性",
        Content: ({ link }) => <> インフルエンサーの相性の良い性格</>,
      },
    ],
    relations: [],
  },
  EFPA: {
    sections: [
      { title: "どんな人？", Content: () => <> ムードメーカーの説明文</> },
      {
        title: "長所・短所とアドバイス",
        Content: () => <> ムードメーカーの長所と短所</>,
      },
      {
        title: "相性と関係性",
        Content: ({ link }) => <> ムードメーカーの相性の良い性格</>,
      },
    ],
    relations: [],
  },
  EFPM: {
    sections: [
      { title: "どんな人？", Content: () => <> ドリーマーの説明文</> },
      {
        title: "長所・短所とアドバイス",
        Content: () => <> ドリーマーの長所と短所</>,
      },
      {
        title: "相性と関係性",
        Content: ({ link }) => <> ドリーマーの相性の良い性格</>,
      },
    ],
    relations: [],
  },
  ETSA: {
    sections: [
      { title: "どんな人？", Content: () => <> リーダーの説明文</> },
      {
        title: "長所・短所とアドバイス",
        Content: () => <> リーダーの長所と短所</>,
      },
      {
        title: "相性と関係性",
        Content: ({ link }) => <> リーダーの相性の良い性格</>,
      },
    ],
    relations: [],
  },
  ETSM: {
    sections: [
      { title: "どんな人？", Content: () => <> チャレンジャーの説明文</> },
      {
        title: "長所・短所とアドバイス",
        Content: () => <> チャレンジャーの長所と短所</>,
      },
      {
        title: "相性と関係性",
        Content: ({ link }) => <> チャレンジャーの相性の良い性格</>,
      },
    ],
    relations: [],
  },
  ETPA: {
    sections: [
      { title: "どんな人？", Content: () => <> ハンターの説明文</> },
      {
        title: "長所・短所とアドバイス",
        Content: () => <> ハンターの長所と短所</>,
      },
      {
        title: "相性と関係性",
        Content: ({ link }) => <> ハンターの相性の良い性格</>,
      },
    ],
    relations: [],
  },
  ETPM: {
    sections: [
      { title: "どんな人？", Content: () => <> エンターテイナーの説明文</> },
      {
        title: "長所・短所とアドバイス",
        Content: () => <> エンターテイナーの長所と短所</>,
      },
      {
        title: "相性と関係性",
        Content: ({ link }) => <> エンターテイナーの相性の良い性格</>,
      },
    ],
    relations: [],
  },
  IFSA: {
    sections: [
      { title: "どんな人？", Content: () => <> サポーターの説明文</> },
      {
        title: "長所・短所とアドバイス",
        Content: () => <> サポーターの長所と短所</>,
      },
      {
        title: "相性と関係性",
        Content: ({ link }) => <> サポーターの相性の良い性格</>,
      },
    ],
    relations: [],
  },
  IFSM: {
    sections: [
      { title: "どんな人？", Content: () => <> ナレーターの説明文</> },
      {
        title: "長所・短所とアドバイス",
        Content: () => <> ナレーターの長所と短所</>,
      },
      {
        title: "相性と関係性",
        Content: ({ link }) => <> ナレーターの相性の良い性格</>,
      },
    ],
    relations: [],
  },
  IFPA: {
    sections: [
      { title: "どんな人？", Content: () => <> ヒーラーの説明文</> },
      {
        title: "長所・短所とアドバイス",
        Content: () => <> ヒーラーの長所と短所</>,
      },
      {
        title: "相性と関係性",
        Content: ({ link }) => <> ヒーラーの相性の良い性格</>,
      },
    ],
    relations: [],
  },
  IFPM: {
    sections: [
      { title: "どんな人？", Content: () => <> ミュージシャンの説明文</> },
      {
        title: "長所・短所とアドバイス",
        Content: () => <> ミュージシャンの長所と短所</>,
      },
      {
        title: "相性と関係性",
        Content: ({ link }) => <> ミュージシャンの相性の良い性格</>,
      },
    ],
    relations: [],
  },
  ITSA: {
    sections: [
      { title: "どんな人？", Content: () => <> エンジニアの説明文</> },
      {
        title: "長所・短所とアドバイス",
        Content: () => <> エンジニアの長所と短所</>,
      },
      {
        title: "相性と関係性",
        Content: ({ link }) => <> エンジニアの相性の良い性格</>,
      },
    ],
    relations: [],
  },
  ITSM: {
    sections: [
      { title: "どんな人？", Content: () => <> プランナーの説明文</> },
      {
        title: "長所・短所とアドバイス",
        Content: () => <> プランナーの長所と短所</>,
      },
      {
        title: "相性と関係性",
        Content: ({ link }) => <> プランナーの相性の良い性格</>,
      },
    ],
    relations: [],
  },
  ITPA: {
    sections: [
      { title: "どんな人？", Content: () => <> アナリストの説明文</> },
      {
        title: "長所・短所とアドバイス",
        Content: () => <> アナリストの長所と短所</>,
      },
      {
        title: "相性と関係性",
        Content: ({ link }) => <> アナリストの相性の良い性格</>,
      },
    ],
    relations: [],
  },
  ITPM: {
    sections: [
      { title: "どんな人？", Content: () => <> イノベーターの説明文</> },
      {
        title: "長所・短所とアドバイス",
        Content: () => <> イノベーターの長所と短所</>,
      },
      {
        title: "相性と関係性",
        Content: ({ link }) => <> イノベーターの相性の良い性格</>,
      },
    ],
    relations: [],
  },
};

export { PERSONALITY_ARTICLE_INFO };
