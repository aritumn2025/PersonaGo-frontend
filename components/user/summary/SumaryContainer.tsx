import { use } from "react";

import { countByPersonalityType } from "@/lib/count_by_personality_type";

import { getEntrySummary } from "@/services/entry_services";

import { Marker } from "@/components/common/Marker";

import { PersonalityChart } from "./PersonalityChart";
import { PersonalityTable } from "./PersonalityTable";

function SummaryContainer() {
  const entrySummary = use(getEntrySummary());

  const personalityTypeCounts = countByPersonalityType(
    entrySummary.mbti.visitorsCountByPersonality,
  );

  return (
    <div className="flex w-full flex-col">
      <h1 className="my-10 text-center text-3xl font-bold text-gray-600">
        <Marker color="var(--color-purple-200)">みんなの診断結果</Marker>
      </h1>
      <div className="p-4">
        <PersonalityChart
          data={personalityTypeCounts}
          title="来場者の性格タイプ分布"
          description="来場者の性格タイプごとの分布"
        />
        <PersonalityTable
          visitors={entrySummary.mbti.visitorsCountByPersonality}
        />
      </div>
    </div>
  );
}

export { SummaryContainer };
