"use client";

import { useMemo } from "react";

import { Label, Pie, PieChart } from "recharts";

import {
  PERSONALITY_TYPE_IDS,
  PERSONALITY_TYPE_INFO,
  type PersonalityTypeId,
} from "@/constants/personality";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

type PersonalityChartData = Record<PersonalityTypeId, number>;

interface PersonalityChartProps {
  data: PersonalityChartData;
  title?: string;
  description?: string;
}

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  ...PERSONALITY_TYPE_IDS.reduce(
    (acc, id) => {
      acc[id] = {
        label: PERSONALITY_TYPE_INFO[id].name,
        color: PERSONALITY_TYPE_INFO[id].color.main,
      };
      return acc;
    },
    {} as Record<PersonalityTypeId, { label: string; color: string }>,
  ),
} satisfies ChartConfig;

function PersonalityChart({ data, title, description }: PersonalityChartProps) {
  const chartData: {
    personalityType: PersonalityTypeId;
    visitors: number;
    fill: string;
  }[] = PERSONALITY_TYPE_IDS.map((id) => ({
    personalityType: id,
    visitors: data[id] || 0,
    fill: PERSONALITY_TYPE_INFO[id].color.main,
  }));

  const totalVisitors = useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, [chartData]);

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="personalityType"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Visitors
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export { PersonalityChart, type PersonalityChartData };
