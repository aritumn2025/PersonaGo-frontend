"use client";

import { useState } from "react";

import type { Visitor } from "@/types/common";

import { PERSONALITY_INFO } from "@/constants/personality";

import { postGamesLobby } from "@/services/games_services";

import { useItemSelector } from "@/hooks/useItemSelector";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface EmptySlotProps {
  slot: number;
}

function EmptySlot({ slot }: EmptySlotProps) {
  return (
    <div className="flex items-center justify-center rounded border border-dashed border-gray-300 p-3 text-center text-gray-400">
      {slot + 1}. 空席
    </div>
  );
}

interface SelectedPlayerSlotProps {
  visitor: Visitor;
}

function SelectedPlayerSlot({ visitor }: SelectedPlayerSlotProps) {
  return (
    <div className="flex items-center justify-between rounded border border-gray-300 p-3 text-center text-gray-400">
      <div className="flex items-center gap-2">
        <Badge
          className="inline-block h-6 w-6"
          style={{
            backgroundColor:
              PERSONALITY_INFO[visitor.personality].type.color.main,
          }}
        />
        <span className="font-medium text-gray-800">{visitor.name}</span>
        <span className="text-sm text-gray-500">({visitor.id})</span>
      </div>
      <Badge variant="outline" className="text-sm text-gray-800">
        {PERSONALITY_INFO[visitor.personality].code}
      </Badge>
    </div>
  );
}

interface SelectedPlayerListProps {
  visitors: Visitor[];
  selections: (number | null)[];
  reset: ReturnType<typeof useItemSelector>["reset"];
}

function SelectedPlayerList({
  visitors,
  selections,
  reset,
}: SelectedPlayerListProps) {
  const [sending, setSending] = useState<boolean>(false);

  const handleSend = async () => {
    if (selections.filter((v) => v !== null).length === 0) return;

    setSending(true);
    try {
      await postGamesLobby("shooting", {
        p1: selections[0] === null ? null : visitors[selections[0]].id,
        p2: selections[1] === null ? null : visitors[selections[1]].id,
        p3: selections[2] === null ? null : visitors[selections[2]].id,
        p4: selections[3] === null ? null : visitors[selections[3]].id,
      });

      reset();
      alert("データの送信に成功しました");
    } catch (error) {
      console.error("Error Sending lobby data:", error);
      alert("データの送信に失敗しました");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="grid h-36 grid-cols-2 gap-2">
        {selections.map((visitorIndex, index) =>
          visitorIndex === null ? (
            <EmptySlot key={index} slot={index} />
          ) : (
            <SelectedPlayerSlot key={index} visitor={visitors[visitorIndex]} />
          ),
        )}
      </div>
      <div className="flex flex-row-reverse gap-2">
        <Button variant="secondary" onClick={reset}>
          リセット
        </Button>
        <Button
          onClick={handleSend}
          disabled={sending || selections.every((v) => v === null)}
        >
          {sending ? "送信中..." : "送信"}
        </Button>
      </div>
    </div>
  );
}

export { SelectedPlayerList };
