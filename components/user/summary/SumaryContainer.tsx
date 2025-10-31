"use client";

import { useEffect, useState } from "react";

import type { GetEntrySummaryResponse } from "@/types/api";

import { countByPersonalityType } from "@/lib/count_by_personality_type";

import { getEntrySummary } from "@/services/entry_services";

import { Marker } from "@/components/common/Marker";
import { SquareSpin2 } from "@/components/common/loader";

import { PersonalityChart } from "./PersonalityChart";
import { PersonalityTable } from "./PersonalityTable";

function SummaryContainer() {
  const [summaryData, setSummaryData] =
    useState<GetEntrySummaryResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;

    (async () => {
      setIsLoading(true);
      try {
        const data = await getEntrySummary();
        if (!isMounted) return;

        setSummaryData(data);
      } catch (error) {
        if (isMounted) setSummaryData(null);
        console.error("Error fetching entry data:", error);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    })();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="flex min-h-screen w-full flex-col">
      <h1 className="my-10 text-center text-3xl font-bold text-gray-600">
        <Marker color="var(--color-purple-200)">みんなの診断結果</Marker>
      </h1>
      {isLoading ? (
        <div className="mt-24 flex flex-col items-center justify-center gap-6">
          <SquareSpin2 color="var(--color-gray-500)" size="1.5rem" />
          <p className="text-gray-500">診断結果データを取得中...</p>
        </div>
      ) : summaryData === null ? (
        <p className="mt-24 text-center text-gray-500">
          診断結果データの取得に失敗しました
        </p>
      ) : (
        <div className="p-4">
          <PersonalityChart
            data={countByPersonalityType(
              summaryData.mbti.visitorsCountByPersonality,
            )}
            title="来場者の性格タイプ分布"
            description="来場者の性格タイプごとの分布"
          />
          <PersonalityTable
            visitors={summaryData.mbti.visitorsCountByPersonality}
          />
        </div>
      )}
    </div>
  );
}

export { SummaryContainer };
