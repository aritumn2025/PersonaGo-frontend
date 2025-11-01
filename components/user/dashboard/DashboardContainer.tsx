"use client";

import { useEffect, useState } from "react";

import type {
  GetGamesResultPlayerResponse,
  GetUserHistoryResponse,
  GetUserResponse,
} from "@/types/api";

import { PERSONALITY_INFO, PersonalityTypeId } from "@/constants/personality";

import { getGamesResultPlayer } from "@/services/games_services";
import { getUser, getUserHistory } from "@/services/user_service";

import { useCookie } from "@/hooks/useCookie";

import { SquareSpin2 } from "@/components/common/loader";

import { ActiveDashboard } from "./ActiveDasboard";
import { CalmDashboard } from "./CalmDasboard";
import { PassionateDashboard } from "./PassionateDasboard";
import { ThinkerDashboard } from "./ThinkerDasboard";

interface DashboardPersonalitySwitchProps {
  personalityTypeId: PersonalityTypeId;
  history: GetUserHistoryResponse["history"];
  results: GetGamesResultPlayerResponse["results"];
  user: GetUserResponse;
}

function DashboardPersonalitySwitch({
  personalityTypeId,
  user,
  history,
  results,
}: DashboardPersonalitySwitchProps) {
  switch (personalityTypeId) {
    case "Passionate":
      return (
        <PassionateDashboard user={user} history={history} results={results} />
      );
    case "Active":
      return (
        <ActiveDashboard user={user} history={history} results={results} />
      );
    case "Calm":
      return <CalmDashboard user={user} history={history} results={results} />;
    case "Thinker":
      return (
        <ThinkerDashboard user={user} history={history} results={results} />
      );
    default:
      return null;
  }
}

function DashboardContainer() {
  const [userData, setUserData] = useState<GetUserResponse | null>(null);
  const [historyData, setHistoryData] = useState<GetUserHistoryResponse | null>(
    null,
  );
  const [resultsData, setResultsData] =
    useState<GetGamesResultPlayerResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { getUserId } = useCookie();

  useEffect(() => {
    let isMounted = true;
    const id = getUserId();
    if (!id) {
      setIsLoading(false);
      setHistoryData(null);
      setUserData(null);
      setResultsData(null);
      return;
    }

    (async () => {
      setIsLoading(true);
      try {
        const userResponse = await getUser(id);
        const historyResponse = await getUserHistory(id);
        const resultsResponse = await getGamesResultPlayer(id);

        if (!isMounted) return;

        setUserData(userResponse);
        setHistoryData(historyResponse);
        setResultsData(resultsResponse);
      } catch (error) {
        if (isMounted) {
          setUserData(null);
          setHistoryData(null);
          setResultsData(null);
        }
        console.error("Error fetching user data:", error);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    })();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div
      className="min-h-screen p-4 pb-24"
      style={{
        backgroundImage: 'url("/images/background/grid.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {isLoading ? (
        <div className="mt-24 flex flex-col items-center justify-center gap-6">
          <SquareSpin2 color="var(--color-gray-500)" size="1.5rem" />
          <p className="text-gray-500">ダッシュボードを読み込み中...</p>
        </div>
      ) : userData && historyData && resultsData ? (
        <DashboardPersonalitySwitch
          personalityTypeId={
            PERSONALITY_INFO[userData.currentPersonality].type.id
          }
          user={userData}
          history={historyData.history}
          results={resultsData.results}
        />
      ) : (
        <p className="mt-24 text-center text-gray-500">
          ダッシュボードの読み込みに失敗しました
        </p>
      )}
    </div>
  );
}

export { DashboardContainer };
