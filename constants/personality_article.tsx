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
            キャプテンは、人間関係のバランス職人。誰とでも仲良くできる天才で、空気を読む力に長けています。
            優しすぎて疲れることもありますが、感謝されるとすべてが報われるタイプです。
            <br />
            頼まれると断れず、つい抱え込みがち。秩序と調和を大切にし、人の悪口が苦手で、聞かされると心で泣いてしまうほどの優しさを持っています。
          </>
        ),
      },
      {
        title: SECTION_02_TITLE,
        Content: () => (
          <>
            キャプテンの強みは、思いやりと気配りのプロフェッショナルであること。
            周囲の気持ちを察して行動でき、チームの空気を整える天才です。
            <br />
            信頼されやすい一方で、その優しさゆえに抱え込みやすい一面もあります。アドバイスは「無理なときは無理と言う」こと。
            自分を大切にする余裕ができれば、あなたの優しさはもっと温かく伝わります。
          </>
        ),
      },
      {
        title: SECTION_03_TITLE,
        Content: ({ link }) => (
          <>
            思いやりと調和を大切にするあなたは、
            <PersonalityLink personalityCode="IFSM" link={link} />、
            <PersonalityLink personalityCode="ITSM" link={link} />、
            <PersonalityLink personalityCode="EFSM" link={link} />
            と穏やかで安心できる関係を築けます。感情を共有できる相手とは深い信頼関係を結べるでしょう。
            <br />
            一方で、自由奔放な
            <PersonalityLink personalityCode="ITPM" link={link} /> や
            <PersonalityLink personalityCode="ETPM" link={link} />
            とはズレが生まれやすいかもしれません。
            しかし、彼らの論理的な視点はあなたに新しい刺激を与えてくれます。
            <br />
            違いを受け入れ、歩み寄ることで、意外と長続きする関係へと発展するでしょう。
          </>
        ),
      },
    ],
    relations: ["IFSM", "ITSM", "EFSM", "ITPM", "ETPM"],
  },

  EFSM: {
    sections: [
      {
        title: SECTION_01_TITLE,
        Content: () => (
          <>
            インフルエンサーは、存在自体がイベントのようなムードメーカー。
            場の空気を明るくし、ノリと勢いで周囲を引っ張るタイプです。
            <br />
            楽しいことには全力で取り組みますが、つまらないことにはすぐ興味を失うことも。
            注目されたい気持ちと寂しがり屋な一面を併せ持ち、恋も人生もドラマチックに楽しむ人です。
            周囲の笑顔こそが、生きるエネルギーの源です。
          </>
        ),
      },
      {
        title: SECTION_02_TITLE,
        Content: () => (
          <>
            インフルエンサーの強みは、どんな場でも笑顔と明るさを生み出す天性の才能。
            人を楽しませる力があり、直感的な判断でチャンスを掴むタイプです。
            <br />
            勢いが魅力ですが、感情に流されて後悔することもあります。アドバイスは「少しの計画性」を意識すること。
            楽しむ力に冷静さを加えることで、人生も仕事も驚くほど上手く進みます。
          </>
        ),
      },
      {
        title: SECTION_03_TITLE,
        Content: ({ link }) => (
          <>
            明るく社交的なあなたは、
            <PersonalityLink personalityCode="IFSA" link={link} />、
            <PersonalityLink personalityCode="ETSM" link={link} />、
            <PersonalityLink personalityCode="EFPM" link={link} />
            と相性抜群で、笑顔の絶えない関係を築けます。一緒にいるとエネルギーが増し、互いを高め合える関係です。
            <br />
            一方で、内向的で慎重な
            <PersonalityLink personalityCode="ITPA" link={link} /> や
            <PersonalityLink personalityCode="IFPA" link={link} />
            とはテンポが合わないこともありますが、
            彼らの落ち着きから学べることは多いでしょう。
            <br />
            違いを面白がり、歩み寄ることで、テンションと知性のバランスが取れた関係に成長します。
          </>
        ),
      },
    ],
    relations: ["IFSA", "ETSM", "EFPM", "ITPA", "IFPA"],
  },

  EFPA: {
    sections: [
      {
        title: SECTION_01_TITLE,
        Content: () => (
          <>
            ムードメーカーは、「人の幸せ＝自分の幸せ」で動く、まさに周囲を明るく照らす存在です。
            カリスマ性があり、人の心を動かす力を持っています。
            <br />
            優しすぎて損をすることもありますが、なぜか周りはあなたを助けたくなります。
            <br />
            表向きは完璧でも、内心は不安を抱えていることも。人の期待を背負いがちな一面もありますが、
            褒められると一気にやる気がブーストされるタイプです。
          </>
        ),
      },
      {
        title: SECTION_02_TITLE,
        Content: () => (
          <>
            ムードメーカーの強みは、人を導き励ますカリスマ性と高い共感力です。
            誰かの成長を心から喜べるあなたは、まさにチームの太陽のような存在。
            <br />
            一方で、周りのために全力を尽くすあまり、自分のことを後回しにしてしまうことがあります。
            アドバイスは「自分のペースも守る」こと。自分を大切にできるリーダーこそ、本当の意味で人を幸せにできるのです。
          </>
        ),
      },
      {
        title: SECTION_03_TITLE,
        Content: ({ link }) => (
          <>
            人のために全力を尽くすあなたは、感受性豊かな
            <PersonalityLink personalityCode="IFPM" link={link} />、
            <PersonalityLink personalityCode="IFSM" link={link} />、
            <PersonalityLink personalityCode="IFPA" link={link} />
            と相性が良く、思いやりに満ちた温かい関係を築けます。
            <br />
            一方で、論理重視の
            <PersonalityLink personalityCode="ITSA" link={link} /> や
            <PersonalityLink personalityCode="ITPA" link={link} />
            とは感情面で衝突することもありますが、
            その冷静さから学べることも多いでしょう。
            <br />
            感情と思考のバランスを意識することで、互いに支え合える最高の関係が築けます。
          </>
        ),
      },
    ],
    relations: ["IFPM", "IFSM", "IFPA", "ITSA", "ITPA"],
  },

  EFPM: {
    sections: [
      {
        title: SECTION_01_TITLE,
        Content: () => (
          <>
            ドリーマーは、感情のジェットコースターのような人生を楽しむ自由人。
            テンション高めで思いつきで行動する一方、実はとても繊細な心を持っています。
            <br />
            周りを笑わせる天才で、自由を奪われるとしおれてしまうタイプ。
            <br />
            モットーは「なんとかなる！」。怒っている人が苦手で、いつも場の空気を明るくしようとします。
            <br />
            笑って泣いて、また笑う――全力で生きるあなたは、まさにドラマの主人公です。
          </>
        ),
      },
      {
        title: SECTION_02_TITLE,
        Content: () => (
          <>
            ドリーマーの強みは、発想力と人を惹きつけるエネルギー。
            周囲を巻き込んで行動する力は抜群で、情熱があるときの推進力は圧倒的です。
            <br />
            ただし、飽きやすく、興味が一瞬で冷めてしまうことも。アドバイスは「続ける仕組みを作る」こと。
            小さなルールで自分を縛ることで、才能を長く輝かせられます。
            <br />
            飽きることもあるけれど、それもあなたらしさ。情熱の火を絶やさず、楽しみながら進みましょう。
          </>
        ),
      },
      {
        title: SECTION_03_TITLE,
        Content: ({ link }) => (
          <>
            情熱と自由を愛するあなたは、夢を理解してくれる
            <PersonalityLink personalityCode="IFPA" link={link} />、
            <PersonalityLink personalityCode="ITPA" link={link} />、
            <PersonalityLink personalityCode="EFPA" link={link} />
            と相性抜群。お互いに刺激し合いながら新しい世界を広げられます。
            <br />
            一方で、現実的な
            <PersonalityLink personalityCode="ITSA" link={link} /> や
            <PersonalityLink personalityCode="ETSA" link={link} />
            とはぶつかることもありますが、その違いから多くを学べます。
            <br />
            理想と現実、どちらも大切にできるあなたなら、どんな相手とも良い関係を築けるでしょう。
          </>
        ),
      },
    ],
    relations: ["IFPA", "ITPA", "EFPA", "ITSA", "ETSA"],
  },

  ETSA: {
    sections: [
      {
        title: SECTION_01_TITLE,
        Content: () => (
          <>
            リーダーは、「現実主義タイプ」の中でも特に実行力と統率力に優れた存在です。
            状況を冷静に見極め、効率的な方法で物事を確実に進めます。
            <br />
            チームをまとめる力と責任感の強さから、周囲の信頼も厚いタイプ。
            <br />
            困難な状況でも揺らがず、着実に目標を達成していくあなたは、まさに頼れるリーダーそのものです。
          </>
        ),
      },
      {
        title: SECTION_02_TITLE,
        Content: () => (
          <>
            リーダーの強みは、安定した判断力と実行力。チームをまとめる確かな指揮力を持っています。
            <br />
            現実的で的確な判断が人々に安心感を与える一方、効率を重視しすぎて感情を見落とすことも。
            アドバイスは「人の気持ちに寄り添う」こと。温かさを持ってチームを導くことで、あなたのリーダーシップはさらに輝きを増します。
          </>
        ),
      },
      {
        title: SECTION_03_TITLE,
        Content: ({ link }) => (
          <>
            リーダーにとって相性が良いのは、穏やかで支え上手なタイプ。
            <PersonalityLink personalityCode="IFPA" link={link} />
            は、あなたの堅実な判断を柔らかく支え、チームに安定をもたらしてくれます。
            <br />
            また、
            <PersonalityLink personalityCode="ITSA" link={link} />
            のような論理的なタイプは、あなたの行動を戦略面でサポートする最高のパートナーです。
            <br />
            一方で、自由奔放な
            <PersonalityLink personalityCode="ETPM" link={link} /> や感情豊かな
            <PersonalityLink personalityCode="EFPM" link={link} />
            とは衝突することもありますが、
            違いがあなたに柔軟さをもたらしてくれる貴重な刺激となるでしょう。
          </>
        ),
      },
    ],
    relations: ["IFPA", "ITSA", "ETPM", "EFPM"],
  },

  ETSM: {
    sections: [
      {
        title: SECTION_01_TITLE,
        Content: () => (
          <>
            チャレンジャーは、「行動派タイプ」の中でも特に瞬発力と適応力に優れた冒険者です。
            変化を恐れず、直感と判断力で新しい道を切り開いていきます。
            <br />
            困難な状況でも冷静に対応し、チームを前に進める力を持っています。経験から学び、現場で輝くあなたは、まさに頼れるチャレンジャーそのものです。
          </>
        ),
      },
      {
        title: SECTION_02_TITLE,
        Content: () => (
          <>
            チャレンジャーの強みは、スピード感と柔軟な発想。
            <br />
            即断即決の行動力が周囲を引っ張る原動力となります。状況に応じて最適な判断ができる一方、計画性を欠くことも。
            <br />
            アドバイスは「長期的な視点を持つ」こと。勢いと冷静さのバランスを意識すれば、より大きな成果を生み出せます。
          </>
        ),
      },
      {
        title: SECTION_03_TITLE,
        Content: ({ link }) => (
          <>
            チャレンジャーにとって相性が良いのは、落ち着きがあり思いやり深いタイプ。
            <PersonalityLink personalityCode="IFPA" link={link} />
            は、あなたの勢いを受け止め、安定感を与えてくれます。
            <br />
            また、論理的な
            <PersonalityLink personalityCode="ITSA" link={link} />
            は、あなたの行動を整理し現実的に支える存在です。
            <br />
            一方で、慎重な
            <PersonalityLink
              personalityCode="ETSA"
              link={link}
            /> や理想家の <PersonalityLink personalityCode="IFPM" link={link} />
            とは意見がぶつかることもありますが、そこから新たな視点を学べます。
            <br />
            違いを尊重し合うことで、互いを高め合う関係が築けるでしょう。
          </>
        ),
      },
    ],
    relations: ["IFPA", "ITSA", "ETSA", "IFPM"],
  },

  ETPA: {
    sections: [
      {
        title: SECTION_01_TITLE,
        Content: () => (
          <>
            ハンターは、「戦略タイプ」の中でも特に先見性と統率力に優れたビジョナリーリーダーです。
            明確な目標を掲げ、チームを力強く導く姿はまさに理想を形にする指揮官。
            <br />
            論理的な思考と大胆な行動力を兼ね備え、どんな環境でも結果を出すことに情熱を注ぎます。
            高い志と冷静な判断力を持ち、多くの人から信頼される存在です。
          </>
        ),
      },
      {
        title: SECTION_02_TITLE,
        Content: () => (
          <>
            ハンターの強みは、計画力と決断力。
            <br />
            戦略的に目標へ進む姿勢がチームの士気を高めます。一方で、完璧を求めすぎて周囲にプレッシャーを与えることもあります。
            <br />
            アドバイスは「他人の意見や感情に耳を傾ける」こと。厳しさの中に思いやりを持つことで、あなたのリーダーシップはより温かく、信頼されるものになります。
          </>
        ),
      },
      {
        title: SECTION_03_TITLE,
        Content: ({ link }) => (
          <>
            ハンターにとって相性が良いのは、穏やかで誠実なタイプ。
            <PersonalityLink personalityCode="IFPA" link={link} />
            は、あなたのビジョンを現実的に支え、チームに安定をもたらしてくれます。
            <br />
            また、
            <PersonalityLink personalityCode="ITSA" link={link} />
            のような論理的で戦略的なタイプは、あなたの長期的な計画を的確に補強してくれる最高のパートナーです。
            <br />
            一方で、自由奔放な
            <PersonalityLink personalityCode="ETSM" link={link} /> や感性豊かな
            <PersonalityLink personalityCode="EFPM" link={link} />
            とは意見が衝突することもありますが、
            その刺激があなたに柔軟さと人間味を思い出させてくれます。
            <br />
            違いを認め合うことで、共に成長できる理想的な関係が築けるでしょう。
          </>
        ),
      },
    ],
    relations: ["IFPA", "ITSA", "ETSM", "EFPM"],
  },

  ETPM: {
    sections: [
      {
        title: SECTION_01_TITLE,
        Content: () => (
          <>
            エンターテイナーは、「アイデアマン」や「発明家」とも呼ばれる知的探求者です。
            好奇心が非常に旺盛で、常に新しい発想や可能性を見つけ出そうとします。
            頭の回転が速く、論理的かつ柔軟な思考を持ち、現状に疑問を投げかけては周囲を刺激します。
            <br />
            議論を通じて自分の考えを磨き、他者との対話から新しい発見を得ることを好みます。
            自由で刺激的な環境を求め、ルールや常識に縛られることを嫌う冒険的なタイプです。
          </>
        ),
      },
      {
        title: SECTION_02_TITLE,
        Content: () => (
          <>
            エンターテイナーの最大の強みは、柔軟な発想力と論理的思考力です。
            複雑な問題にも独自の切り口からアプローチし、誰も思いつかない解決策を提示できます。
            <br />
            一方で、感情面や空気を読むことが苦手で、相手の気持ちを軽視してしまうことがあります。
            また、興味が移りやすく、ひとつのことを最後までやり遂げる前に次のアイデアへ飛びついてしまう傾向も。
            <br />
            そのため、計画的に行動し、地道な努力の大切さを意識することで、あなたのアイデアが現実に形を持つようになります。
            議論の場では、相手の立場や感情にも配慮することで、より多くの人から信頼を得られるでしょう。
          </>
        ),
      },
      {
        title: SECTION_03_TITLE,
        Content: ({ link }) => (
          <>
            エンターテイナーにとって相性が良いのは、あなたの発想を現実に落とし込んでくれる行動派のタイプです。
            たとえば、
            <PersonalityLink personalityCode="ETSM" link={link} />
            はあなたのアイデアを実現に導く実行力を持ち、良いチームを築ける相手です。
            また、
            <PersonalityLink personalityCode="ETPA" link={link} />
            のような論理的で挑戦的なタイプとは、知的な刺激を与え合える関係になれます。
            <br />
            一方で、
            <PersonalityLink personalityCode="IFSA" link={link} /> や
            <PersonalityLink personalityCode="ITSA" link={link} />
            のような保守的で安定志向のタイプとは、価値観の違いから衝突することもあります。
            しかし、彼らの堅実さは、あなたに「継続」と「信頼」の重要性を教えてくれる貴重な存在です。
          </>
        ),
      },
    ],
    relations: ["ETSM", "ETPA", "IFSA", "ITSA"],
  },

  IFSA: {
    sections: [
      {
        title: SECTION_01_TITLE,
        Content: () => (
          <>
            サポーターは、誠実で協調性に富み、人を支えることに喜びを感じる献身的なタイプです。
            周囲の人々を温かく見守り、細やかな気配りで安心感をもたらします。
            <br />
            現実的で実務的な性格を持ち、ルールや伝統を大切にする傾向があります。控えめで自己主張は強くありませんが、内には強い責任感と忠誠心を秘めています。
          </>
        ),
      },
      {
        title: SECTION_02_TITLE,
        Content: () => (
          <>
            サポーターの強みは、観察力と記憶力、そして思いやりの心です。
            他人の小さな変化にも気づき、相手のために最善を尽くせる優しさを持っています。
            <br />
            しかし、自分の感情を後回しにして他人を優先しすぎると、ストレスを溜めてしまうことがあります。
            また、変化や対立を避けるあまり、成長のチャンスを逃すことも。
            <br />
            時には自分の気持ちを表に出し、自分を大切にする勇気を持ちましょう。変化を受け入れる柔軟さが加わることで、より豊かで安定した人間関係を築けるようになります。
          </>
        ),
      },
      {
        title: SECTION_03_TITLE,
        Content: ({ link }) => (
          <>
            サポーターにとって相性が良いのは、あなたの努力を理解し、感謝を示してくれるリーダータイプです。
            たとえば、
            <PersonalityLink personalityCode="ETPA" link={link} />
            のように力強く引っ張ってくれる存在や、
            <PersonalityLink personalityCode="ITSA" link={link} />
            のように安定を重んじるタイプは、信頼し合える関係を築けます。 また、
            <PersonalityLink personalityCode="EFSM" link={link} />
            のような明るく社交的なタイプは、あなたに活力を与えてくれるでしょう。
            <br />
            一方で、
            <PersonalityLink personalityCode="ETPM" link={link} />
            のような自由奔放で議論を好むタイプとは、ペースの違いで疲れてしまうことも。
            それでも、彼らの柔軟な発想はあなたに新しい視点をもたらし、成長のきっかけを与えてくれます。
          </>
        ),
      },
    ],
    relations: ["ETPA", "ITSA", "EFSM", "ETPM"],
  },

  IFSM: {
    sections: [
      {
        title: SECTION_01_TITLE,
        Content: () => (
          <>
            ナレーターは、感受性が豊かで、芸術的センスや独自の世界観を持つ「表現者タイプ」です。
            自然や人とのつながりを大切にし、穏やかで優しい雰囲気を持ちながらも、内面には強い信念を秘めています。
            <br />
            今この瞬間の体験を大切にし、形式や規則に縛られることを嫌う自由人でもあります。
          </>
        ),
      },
      {
        title: SECTION_02_TITLE,
        Content: () => (
          <>
            ナレーターの強みは、美的感覚と共感力です。芸術・デザイン・音楽など、感性を活かす分野で才能を発揮できます。
            <br />
            一方で、計画性や持続力が求められる場面では苦手意識を感じることがあります。感情を言葉で伝えるのが得意ではなく、優柔不断に見られることも。
            <br />
            行動の前に一呼吸おき、自分の思いや考えを整理する習慣を持つと、より充実した日々を送れるでしょう。自分の意見を伝える勇気を持つことで、あなたの魅力はより多くの人に伝わります。
          </>
        ),
      },
      {
        title: SECTION_03_TITLE,
        Content: ({ link }) => (
          <>
            ナレーターにとって相性が良いのは、あなたの感性を尊重し、共に新しい体験を楽しめるタイプです。
            たとえば、
            <PersonalityLink personalityCode="ETPM" link={link} />
            のように好奇心旺盛で刺激をくれる相手や、
            <PersonalityLink personalityCode="ITPA" link={link} />
            のように実現力のあるタイプとは、互いに刺激し合える関係を築けます。
            <br />
            一方で、
            <PersonalityLink personalityCode="ETSA" link={link} /> や
            <PersonalityLink personalityCode="ETPA" link={link} />
            のように効率やルールを重視するタイプとは、
            自由を制限されて窮屈に感じることもあります。それでも、彼らの現実的な視点はあなたに「形にする力」を与え、良い影響をもたらします。
          </>
        ),
      },
    ],
    relations: ["ETPM", "ITPA", "ETSA", "ETPA"],
  },

  IFPA: {
    sections: [
      {
        title: SECTION_01_TITLE,
        Content: () => (
          <>
            ヒーラーは、深い洞察力と理想を胸に秘めた「内なる導き手タイプ」です。
            他人の感情を敏感に察し、静かに寄り添い、支えとなることを大切にします。
            表面は穏やかでも、その内側には強い信念と情熱があり、周囲に安心と希望を与える存在です。
          </>
        ),
      },
      {
        title: SECTION_02_TITLE,
        Content: () => (
          <>
            ヒーラーの強みは、共感力と洞察力です。他人の感情を深く理解し、思いやりを持って接する姿勢は、多くの人に信頼をもたらします。
            <br />
            しかし、他者を優先しすぎて自分を犠牲にしてしまうことがあります。理想を追い求めるあまり、現実を見失うこともあるでしょう。
            <br />
            ときには距離を取り、自分自身の心を癒す時間を大切にしてください。自分に優しくあることが、結果的に他人への思いやりにもつながります。
          </>
        ),
      },
      {
        title: SECTION_03_TITLE,
        Content: ({ link }) => (
          <>
            ヒーラーにとって相性が良いのは、理想を現実へと導く行動力のあるタイプです。
            たとえば、
            <PersonalityLink personalityCode="ETPA" link={link} />
            は、あなたの理想を具体的な形にする力を持っています。 また、
            <PersonalityLink personalityCode="EFPM" link={link} />
            のように感受性が豊かで情熱的なタイプとは、深い共感を通じて強い絆を築けるでしょう。
            <br />
            一方で、
            <PersonalityLink personalityCode="ITSA" link={link} />
            のような現実主義のタイプとは、最初は価値観の違いを感じるかもしれません。
            しかし、誠実さを共有できれば、長期的に支え合える関係に発展します。
          </>
        ),
      },
    ],
    relations: ["ETPA", "EFPM", "ITSA"],
  },

  IFPM: {
    sections: [
      {
        title: SECTION_01_TITLE,
        Content: () => (
          <>
            ミュージシャンは、想像力と優しさに満ちた「夢想家タイプ」です。
            自分の中に広がる理想の世界を大切にし、純粋な心で生きる人。誰かを救いたいという想いが原動力で、現実の中にも希望を見つけ出す才能を持ちます。
            <br />
            繊細で感受性が高く、人の気持ちを深く理解できるあなたは、まるで世界に温もりを届ける小さな灯火のような存在です。
          </>
        ),
      },
      {
        title: SECTION_02_TITLE,
        Content: () => (
          <>
            ミュージシャンの強みは、思いやりと創造性。人を傷つけることを嫌い、常に優しさを選べる心を持っています。
            <br />
            ただし、理想が高すぎて現実とのギャップに悩むこともあります。すべてを完璧にしようとせず、「小さな一歩」から始めることを意識しましょう。
            <br />
            現実と向き合う勇気を持つことで、あなたの優しさはより多くの人を救う力へと変わります。
          </>
        ),
      },
      {
        title: SECTION_03_TITLE,
        Content: ({ link }) => (
          <>
            ミュージシャンにとって相性が良いのは、行動的でエネルギッシュなタイプです。
            たとえば <PersonalityLink personalityCode="ETSM" link={link} />
            は、あなたの理想を現実に導く力強いパートナー。 また、
            <PersonalityLink personalityCode="EFPM" link={link} />
            のような共感性の高いタイプとは、感情を共有しながら夢を語り合える関係です。
            <br />
            一方で、論理的な
            <PersonalityLink personalityCode="ITPA" link={link} /> や
            <PersonalityLink personalityCode="ITSA" link={link} />
            とは考え方が異なるかもしれません。
            しかし、互いを理解し合えたとき、現実と理想のバランスが取れた強い絆が生まれるでしょう。
          </>
        ),
      },
    ],
    relations: ["ETSM", "EFPM", "ITPA", "ITSA"],
  },

  ITSA: {
    sections: [
      {
        title: SECTION_01_TITLE,
        Content: () => (
          <>
            エンジニアは、誠実で信頼される「実務家タイプ」です。責任感が強く、どんな状況でも冷静に行動できるあなたは、まさに組織の柱。
            <br />
            ルールを守り、計画を立て、確実に成果を出すことを重んじる堅実な性格です。派手さはないものの、地道な努力で信頼を築く姿勢は多くの人に安心感を与えます。
            <br />
            誠実さこそが、あなたの最大の魅力です。
          </>
        ),
      },
      {
        title: SECTION_02_TITLE,
        Content: () => (
          <>
            エンジニアの強みは、安定感と実行力。努力を惜しまず、与えられた責任を最後まで果たす姿は模範的です。
            <br />
            ただし、完璧を求めすぎて柔軟性を欠くこともあります。ときには他人に任せたり、新しい考え方に触れる余裕を持ちましょう。
            <br />
            感情を抑えすぎず、自分の気持ちを言葉にすることで、人間関係もよりスムーズになります。
          </>
        ),
      },
      {
        title: SECTION_03_TITLE,
        Content: ({ link }) => (
          <>
            エンジニアにとって相性が良いのは、思いやりのあるタイプです。
            たとえば <PersonalityLink personalityCode="EFSA" link={link} />
            は、あなたの堅実さを温かく支える理想的なパートナー。 また、
            <PersonalityLink personalityCode="IFSM" link={link} />
            のような穏やかな感性タイプとも、静かな信頼関係を築けます。
            <br />
            一方で、理想主義の
            <PersonalityLink personalityCode="IFPM" link={link} /> や自由奔放な
            <PersonalityLink personalityCode="ETPM" link={link} />
            とは衝突することもありますが、
            互いを理解し尊重できれば、弱点を補い合う関係へと発展します。
          </>
        ),
      },
    ],
    relations: ["EFSA", "IFSM", "IFPM", "ETPM"],
  },

  ITSM: {
    sections: [
      {
        title: SECTION_01_TITLE,
        Content: () => (
          <>
            プランナーは、戦略的で計画性に富み、未来を見据えて行動する構想家タイプです。
            理論的に物事を分析し、全体像を描いてから動きます。
            <br />
            理想を現実に落とし込む力があり、先を読む洞察力と粘り強い集中力が特徴です。
          </>
        ),
      },
      {
        title: SECTION_02_TITLE,
        Content: () => (
          <>
            完璧を求めすぎると、周囲がついてこられないことがあります。理想を形にする過程で、人との調整を恐れず行うことが鍵です。
            <br />
            意見の違いを「新しい視点」と捉えると、計画がより柔軟で現実的になります。
          </>
        ),
      },
      {
        title: SECTION_03_TITLE,
        Content: ({ link }) => (
          <>
            プランナーは、
            <PersonalityLink personalityCode="ITSA" link={link} />
            と相互補完の関係にあります。
            構想と実行のバランスが取れ、堅実な成果を出せるコンビです。
            <br />
            また、
            <PersonalityLink personalityCode="ITPA" link={link} />
            のような論理的なタイプとは、理論的に刺激し合える良き仲間となるでしょう。
            <br />
            感情重視のタイプとは距離を感じやすいかもしれませんが、視野を広げ、相互理解を深めることで強い信頼関係が築けます。
          </>
        ),
      },
    ],
    relations: ["ITSA", "ITPA"],
  },

  ITPA: {
    sections: [
      {
        title: SECTION_01_TITLE,
        Content: () => (
          <>
            アナリストは、一歩引いた視点で状況を読み解く観察者タイプです。
            感情よりも事実を重視し、冷静に全体を把握して最善の判断を下します。
            <br />
            思考は論理的で整理上手。理想を追うより、現実の中でどう動くかを考える堅実なリアリストです。
          </>
        ),
      },
      {
        title: SECTION_02_TITLE,
        Content: () => (
          <>
            情報を整理し、筋道を立てて答えを導くのが得意です。ただし、分析に時間をかけすぎて動きが遅くなることもあります。
            <br />
            完璧を求めすぎず、まず一歩行動してみる姿勢が大切。小さな実践を重ねることで信頼と成果を築けます。
          </>
        ),
      },
      {
        title: SECTION_03_TITLE,
        Content: ({ link }) => (
          <>
            アナリストは、
            <PersonalityLink personalityCode="ITSA" link={link} />
            と価値観が近く、現場志向で協力しやすいタイプです。
            <br />
            また、
            <PersonalityLink personalityCode="ITSM" link={link} />
            とは、互いの論理性を認め合える関係になります。
            <br />
            感情重視の <PersonalityLink personalityCode="IFPM" link={link} />
            とは距離を感じやすいですが、誠実に向き合うことで安定した信頼が生まれるでしょう。
          </>
        ),
      },
    ],
    relations: ["ITSA", "ITSM", "IFPM"],
  },

  ITPM: {
    sections: [
      {
        title: SECTION_01_TITLE,
        Content: () => (
          <>
            自由な発想力と理論構築力を併せ持つ創造的な思想家。抽象的な概念を扱うのが得意で、独自の理屈から新しい仕組みを生み出します。
            <br />
            固定観念にとらわれず、アイデアで世界を変えるタイプです。
          </>
        ),
      },
      {
        title: SECTION_02_TITLE,
        Content: () => <>イノベーターの長所と短所</>, // TODO: 追記
      },
      {
        title: SECTION_03_TITLE,
        Content: ({ link }) => <>イノベーターの相性の良い性格</>, // TODO: 追記
      },
    ],
    relations: [],
  },
};

export { PERSONALITY_ARTICLE_INFO };
