"use client";

import { useEffect, useState } from "react";

import type { GetEntryAttractionResponse } from "@/types/api";

import { ATTRACTIONS_INFO } from "@/constants/attraction";

import { getEntryAttraction } from "@/services/entry_services";

import { useItemSelector } from "@/hooks/useItemSelector";

import { SquareSpin2 } from "@/components/common/loader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { PlayerTable } from "./PlayerTable";
import { SelectedPlayerList } from "./SelectedPlayerList";

// 一度に取得する来場者数
const LIMIT = 30;

function GameDashboardContainer() {
  const { toggle, selections, reset } = useItemSelector(4);
  const [entryData, setEntryData] = useState<GetEntryAttractionResponse | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;

    (async () => {
      setIsLoading(true);
      try {
        const data = await getEntryAttraction("games", LIMIT);
        if (!isMounted) return;

        setEntryData({
          ...data,
          visitors: data.visitors.toSorted(
            (a, b) =>
              new Date(b.visitedAt).getTime() - new Date(a.visitedAt).getTime(),
          ),
        });
      } catch (error) {
        if (isMounted) setEntryData(null);
        console.error("Error fetching entry attraction data:", error);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    })();

    return () => {
      isMounted = false;
    };
  });

  return (
    <div className="flex flex-col items-center gap-8 p-6">
      <h1 className="text-2xl font-bold text-gray-600">
        入場・プレイヤー管理 - {ATTRACTIONS_INFO.games.name}
      </h1>
      {isLoading ? (
        <>
          <SquareSpin2 color="var(--color-gray-500)" size="1.5rem" />
          <p className="text-gray-500">来場者データを取得中...</p>
        </>
      ) : entryData === null ? (
        <p className="text-gray-500">来場者データが取得できませんでした</p>
      ) : (
        <Card className="px-10">
          <CardHeader>
            <CardTitle className="text-lg">来場者一覧</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-6 px-10">
            <SelectedPlayerList
              visitors={entryData.visitors}
              selections={selections}
              reset={reset}
            />
            <PlayerTable
              visitors={entryData.visitors}
              limit={entryData.limit}
              visitorsCount={entryData.visitorsCount}
              selections={selections}
              toggle={toggle}
            />
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export { GameDashboardContainer };
