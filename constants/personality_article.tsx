import React from "react";

import { PersonalityLink } from "@/components/user/info/";

import type { PersonalityCode } from "./personality";

// 性格の記事データに関しては、PersonalityCode をキーにして管理する

/**
 * 各セクションの情報
 * - title: 見出し
 * - content: JSXまたはテキストを含む内容
 */
type PersonalityArticleSection = {
  title: string;
  content: React.ReactNode;
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
const PERSONALITY_ARTICLE_INFO_MAP: Readonly<
  Record<PersonalityCode, PersonalityArticleInfoEntry>
> = {
  EFSA: {
    sections: [
      {
        title: SECTION_01_TITLE,
        content: (
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
        content: (
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
        content: (
          <>
            キャプテンにとって最も相性が良いのは、穏やかで支え上手なタイプです。
            たとえば
            <PersonalityLink personalityCode="IFPA" />
            は、あなたの情熱をやさしく包み込み、チーム全体に調和をもたらしてくれます。
            また、
            <PersonalityLink personalityCode="ITSA" />
            のような論理的で堅実なタイプは、あなたの実行力を堅固な戦略で支える最高のパートナーになるでしょう。
            <br />
            <br />
            一方で、自由奔放な
            <PersonalityLink personalityCode="ETPM" />
            や、感性豊かでマイペースな
            <PersonalityLink personalityCode="IFPM" />
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
      { title: SECTION_01_TITLE, content: <> インフルエンサーの説明文</> },
      {
        title: SECTION_02_TITLE,
        content: <> インフルエンサーの長所と短所</>,
      },
      {
        title: SECTION_03_TITLE,
        content: <> インフルエンサーの相性の良い性格</>,
      },
    ],
    relations: [],
  },
  EFPA: {
    sections: [
      { title: SECTION_01_TITLE, content: <> ムードメーカーの説明文</> },
      {
        title: SECTION_02_TITLE,
        content: <> ムードメーカーの長所と短所</>,
      },
      {
        title: SECTION_03_TITLE,
        content: <> ムードメーカーの相性の良い性格</>,
      },
    ],
    relations: [],
  },
  EFPM: {
    sections: [
      { title: SECTION_01_TITLE, content: <> ドリーマーの説明文</> },
      {
        title: SECTION_02_TITLE,
        content: <> ドリーマーの長所と短所</>,
      },
      { title: SECTION_03_TITLE, content: <> ドリーマーの相性の良い性格</> },
    ],
    relations: [],
  },
  ETSA: {
    sections: [
      { title: SECTION_01_TITLE, content: <> リーダーの説明文</> },
      { title: SECTION_02_TITLE, content: <> リーダーの長所と短所</> },
      { title: SECTION_03_TITLE, content: <> リーダーの相性の良い性格</> },
    ],
    relations: [],
  },
  ETSM: {
    sections: [
      { title: SECTION_01_TITLE, content: <> チャレンジャーの説明文</> },
      {
        title: SECTION_02_TITLE,
        content: <> チャレンジャーの長所と短所</>,
      },
      {
        title: SECTION_03_TITLE,
        content: <> チャレンジャーの相性の良い性格</>,
      },
    ],
    relations: [],
  },
  ETPA: {
    sections: [
      { title: SECTION_01_TITLE, content: <> ハンターの説明文</> },
      { title: SECTION_02_TITLE, content: <> ハンターの長所と短所</> },
      { title: SECTION_03_TITLE, content: <> ハンターの相性の良い性格</> },
    ],
    relations: [],
  },
  ETPM: {
    sections: [
      { title: SECTION_01_TITLE, content: <> エンターテイナーの説明文</> },
      {
        title: SECTION_02_TITLE,
        content: <> エンターテイナーの長所と短所</>,
      },
      {
        title: SECTION_03_TITLE,
        content: <> エンターテイナーの相性の良い性格</>,
      },
    ],
    relations: [],
  },
  IFSA: {
    sections: [
      { title: SECTION_01_TITLE, content: <> サポーターの説明文</> },
      {
        title: SECTION_02_TITLE,
        content: <> サポーターの長所と短所</>,
      },
      { title: SECTION_03_TITLE, content: <> サポーターの相性の良い性格</> },
    ],
    relations: [],
  },
  IFSM: {
    sections: [
      { title: SECTION_01_TITLE, content: <> ナレーターの説明文</> },
      {
        title: SECTION_02_TITLE,
        content: <> ナレーターの長所と短所</>,
      },
      { title: SECTION_03_TITLE, content: <> ナレーターの相性の良い性格</> },
    ],
    relations: [],
  },
  IFPA: {
    sections: [
      { title: SECTION_01_TITLE, content: <> ヒーラーの説明文</> },
      { title: SECTION_02_TITLE, content: <> ヒーラーの長所と短所</> },
      { title: SECTION_03_TITLE, content: <> ヒーラーの相性の良い性格</> },
    ],
    relations: [],
  },
  IFPM: {
    sections: [
      { title: SECTION_01_TITLE, content: <> ミュージシャンの説明文</> },
      {
        title: SECTION_02_TITLE,
        content: <> ミュージシャンの長所と短所</>,
      },
      {
        title: SECTION_03_TITLE,
        content: <> ミュージシャンの相性の良い性格</>,
      },
    ],
    relations: [],
  },
  ITSA: {
    sections: [
      { title: SECTION_01_TITLE, content: <> エンジニアの説明文</> },
      {
        title: SECTION_02_TITLE,
        content: <> エンジニアの長所と短所</>,
      },
      { title: SECTION_03_TITLE, content: <> エンジニアの相性の良い性格</> },
    ],
    relations: [],
  },
  ITSM: {
    sections: [
      { title: SECTION_01_TITLE, content: <> プランナーの説明文</> },
      {
        title: SECTION_02_TITLE,
        content: <> プランナーの長所と短所</>,
      },
      { title: SECTION_03_TITLE, content: <> プランナーの相性の良い性格</> },
    ],
    relations: [],
  },
  ITPA: {
    sections: [
      { title: SECTION_01_TITLE, content: <> アナリストの説明文</> },
      {
        title: SECTION_02_TITLE,
        content: <> アナリストの長所と短所</>,
      },
      { title: SECTION_03_TITLE, content: <> アナリストの相性の良い性格</> },
    ],
    relations: [],
  },
  ITPM: {
    sections: [
      { title: SECTION_01_TITLE, content: <> イノベーターの説明文</> },
      {
        title: SECTION_02_TITLE,
        content: <> イノベーターの長所と短所</>,
      },
      { title: SECTION_03_TITLE, content: <> イノベーターの相性の良い性格</> },
    ],
    relations: [],
  },
};

export { PERSONALITY_ARTICLE_INFO_MAP };
