import type { GameId } from "@/types/common";

type GameInfoEntry = Readonly<{
  name: string;
  description: string;
  link: string;
  image: string;
}>;

// TODO: 正式なゲーム情報を設定

// ゲームID一覧
const GAME_IDS: Readonly<GameId[]> = ["coin", "shooting"];

// ゲームの基本情報
const GAMES_INFO: Readonly<Record<GameId, GameInfoEntry>> = {
  coin: {
    name: "コイン拾い",
    description: "コインを拾って、ハイスコアを目指そう！",
    link: "/user/info/games/coin",
    image: "/games/coin_01.png",
  },
  shooting: {
    name: "シューティング",
    description: "みんなで協力して、迫りくる敵たちを倒せ！",
    link: "/user/info/games/shooting",
    image: "/games/shooting_01.png",
  },
};

export { GAME_IDS, GAMES_INFO };
