/* アトラクションの基本情報を定めた定数ファイル */
import { IconType } from "react-icons";
import { FaSearch } from "react-icons/fa";
import { FaGun } from "react-icons/fa6";
import { IoCamera, IoGameController, IoStar } from "react-icons/io5";

import { AttractionId } from "@/types/common";

type AttractionInfoEntry = Readonly<{
  name: string;
  description: string;
  place: string;
  link: string;
  image: string;
  icon: IconType;
  color: {
    readonly primary: string;
    readonly secondary: string;
  };
}>;

// アトラクションID一覧（MBTI診断含む）
const ATTRACTION_IDS: Readonly<AttractionId[]> = [
  "mbti",
  "picture",
  "games",
  "battle",
  "prize",
];

// アトラクションID一覧（MBTI診断除く）
const ATTRACTION_IDS_WHITHOUT_MBTI: Readonly<AttractionId[]> = [
  "picture",
  "games",
  "battle",
  "prize",
];

// アトラクションの基本情報
const ATTRACTIONS_INFO: Readonly<Record<AttractionId, AttractionInfoEntry>> = {
  mbti: {
    name: "MBTI診断",
    description: "まだ知らないあなた自身、のぞいてみませんか？",
    place: "スマホ",
    image: "/attraction/mbti_01.png",
    link: "/user/info/attraction/mbti",
    color: {
      // 紫系統
      // MBTIは基本的に色を使用しないが一応
      primary: "#B359E7",
      secondary: "#F0DFFA",
    },
    icon: FaSearch,
  },
  picture: {
    name: "AI似顔絵プリクラ",
    description: "キミだけの特性プリクラをゲットしよう！",
    place: "3I教室",
    image: "/attraction/picture_01.png",
    link: "/user/info/attraction/picture",
    color: {
      // 赤系統
      primary: "#FF7F94",
      secondary: "#FFE0E5",
    },
    icon: IoCamera,
  },
  games: {
    name: "みんなでゲーム",
    description: "大画面でみんなと協力or対戦してハイスコアを目指せ！",
    place: "3I教室",
    image: "/attraction/games_01.png",
    link: "/user/info/attraction/games",
    color: {
      // 緑系統
      primary: "#68CC3D",
      secondary: "#D3F0C6",
    },
    icon: IoGameController,
  },
  battle: {
    name: "サバゲー",
    description: "教室が戦場に変わる。君は生き残れるか？",
    place: "4I教室・5I教室",
    image: "/attraction/battle_01.png",
    link: "/user/info/attraction/battle",
    color: {
      // 青系統
      primary: "#7F83FF",
      secondary: "#E0E1FF",
    },
    icon: FaGun,
  },
  prize: {
    name: "景品受取",
    description: "3つのアトラクションを体験して、素敵な景品をゲットしよう！",
    place: "情報棟入口",
    image: "/attraction/prize_01.png",
    link: "/user/info/attraction/prize",
    color: {
      // 黄系統
      primary: "#FFC447",
      secondary: "#FFEDC6",
    },
    icon: IoStar,
  },
};

export { ATTRACTION_IDS, ATTRACTION_IDS_WHITHOUT_MBTI, ATTRACTIONS_INFO };
