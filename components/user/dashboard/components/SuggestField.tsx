import { HistoryEntry } from "@/types/common";
import type { AttractionId } from "@/types/common";

import { ATTRACTIONS_INFO } from "@/constants/attraction";

import { randomChoice } from "@/utils/random";

interface SuggestFieldProps {
  history: HistoryEntry[];
}

function SuggestField({ history = [] }: SuggestFieldProps) {
  const suggestion = ((): [AttractionId, string] => {
    // let prize = 0;
    // if (history.length === 0) {
    //   return ["battle" as AttractionId, "まずはサバゲーで遊んでみよう！"];
    // }
    // for (const entry of history) {
    //   if (entry.attraction === "prize") {
    //     prize = 0;
    //   } else {
    //     prize += 1;
    //   }
    // }
    // if (prize >= 3) {
    //   return ["prize" as AttractionId, "抽選に参加できます！行ってみよう！"];
    // }

    return randomChoice<[AttractionId, string]>(
      [
        ["battle", "サバゲーで遊んで、熱くなろう！"],
        ["picture", "似顔絵メーカーでで思い出を残そう！"],
        ["games", "みんなと協力してゲームを楽しもう！"],
      ],
      1,
    )[0];
  })();

  const Icon = ATTRACTIONS_INFO[suggestion[0]].icon;
  return (
    <div className="flex flex-row items-end gap-4 text-black">
      <Icon className="h-8 w-8" />
      <span className="w-40 text-xs">{suggestion[1]}</span>
    </div>
  );
}

export { SuggestField };
