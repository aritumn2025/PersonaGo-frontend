import type { Visitor } from "@/types/common";

import { PERSONALITY_INFO } from "@/constants/personality";

import { dateFormatter } from "@/lib/date_format";

import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface VisitorTableProps {
  visitors: Visitor[];
  visitorsCount: number;
  limit: number;
}

function VisitorTable({ visitors, visitorsCount, limit }: VisitorTableProps) {
  return (
    <Table className="text-lg text-gray-600">
      <TableCaption>{`来場者一覧（直近 ${limit}人 までを表示）`}</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-36 px-4">来場者ID</TableHead>
          <TableHead className="px-4">名前</TableHead>
          <TableHead className="px-4">性格タイプ</TableHead>
          <TableHead className="w-36 px-4">入場時間</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {visitors.map((visitor) => (
          <TableRow key={visitor.id}>
            <TableCell className="w-36 px-4">{visitor.id}</TableCell>
            <TableCell className="px-4">{visitor.name}</TableCell>
            <TableCell className="flex flex-row items-center gap-1 px-4">
              <Badge
                className="inline-block h-6 w-6"
                style={{
                  backgroundColor:
                    PERSONALITY_INFO[visitor.personality].type.color.main,
                }}
              />
              {`${PERSONALITY_INFO[visitor.personality].code}（${PERSONALITY_INFO[visitor.personality].name}）`}
            </TableCell>
            <TableCell className="w-36 px-4">
              {dateFormatter.format(new Date(visitor.visitedAt))}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>合計来場者数: {visitorsCount}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}

export { VisitorTable };
