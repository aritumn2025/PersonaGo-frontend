import Image from "next/image";

import type { PersonalityId } from "@/types/common";

import { PERSONALITY_IDS, PERSONALITY_INFO } from "@/constants/personality";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface PersonalityIconProps {
  personalityId: PersonalityId;
}

function PersonalityIcon({ personalityId }: PersonalityIconProps) {
  const personality = PERSONALITY_INFO[personalityId];
  return (
    <div
      className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border-2"
      style={{
        borderColor: personality.type.color.main,
      }}
    >
      <Image
        src={personality.image}
        alt={personality.name}
        width={60}
        height={60}
      />
    </div>
  );
}

interface PersonalityListProps {
  visitors: Record<PersonalityId, number>;
}

function PersonalityTable({ visitors }: PersonalityListProps) {
  const total = Object.values(visitors).reduce((acc, curr) => acc + curr, 0);
  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle>性格タイプごとの人数</CardTitle>
        <CardDescription>性格タイプごとの人数と割合</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="sr-only">
              <TableHead>性格タイプ</TableHead>
              <TableHead className="text-right">人数</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {PERSONALITY_IDS.map((personalityId) => {
              const count = visitors[personalityId] || 0;
              const percentage = total
                ? ((count / total) * 100).toFixed(2).padStart(6, " ")
                : "  0.00";
              return (
                <TableRow key={personalityId}>
                  <TableCell className="flex items-center gap-2">
                    <PersonalityIcon personalityId={personalityId} />
                    {PERSONALITY_INFO[personalityId].name}
                  </TableCell>
                  <TableCell className="text-right">{`${count}人 (${percentage}%)`}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
export { PersonalityTable };
