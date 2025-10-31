"use client";

import { RadialBar, RadialBarChart } from "recharts";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";

const MAX_SCORE = 1000;

interface ScoreFieldProps {
  score: number;
  color: string;
}

function ScoreField({ score, color }: ScoreFieldProps) {
  const chartData = [{ player: "player", score: 1260, fill: color }];

  const chartConfig = {
    score: {
      label: "Score",
    },
    player: {
      label: "Player",
      color: color,
    },
  } satisfies ChartConfig;
  return (
    <div className="scale-x-[-2.5] scale-y-[2.5]">
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[250px]"
      >
        <RadialBarChart
          data={chartData}
          endAngle={(score / MAX_SCORE) * 90}
          innerRadius={80}
          outerRadius={140}
        >
          <RadialBar dataKey="score" background />
        </RadialBarChart>
      </ChartContainer>
    </div>
  );
}

interface ScoreValueProps {
  score: number;
}

function ScoreValue({ score }: ScoreValueProps) {
  return (
    <p className="text-center text-7xl font-bold">{`${Math.round((100 * score) / MAX_SCORE)} ％`}</p>
  );
}

export { ScoreField, ScoreValue };
