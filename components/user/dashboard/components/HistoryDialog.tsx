import { AttractionId, HistoryEntry, PersonalityId } from "@/types/common";

import { ATTRACTIONS_INFO } from "@/constants/attraction";
import { PERSONALITY_INFO } from "@/constants/personality";

import { dateFormatter } from "@/lib/date_format";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface HistoryItemProps {
  attraction: AttractionId;
  personality: PersonalityId;
  visitedAt: Date;
  isFirst: boolean;
  isLast: boolean;
}

function HistoryItem({
  attraction,
  personality,
  visitedAt,
  isFirst,
  isLast,
}: HistoryItemProps) {
  const Icon = ATTRACTIONS_INFO[attraction].icon;
  const personalityColor = PERSONALITY_INFO[personality].type.color;
  const attractionColor = ATTRACTIONS_INFO[attraction].color;

  return (
    <li className="relative flex flex-row items-center p-2">
      {/* タイムライン用の縦線 */}
      <div
        className="pointer-events-none absolute left-8 flex w-0 justify-center"
        style={{
          top: isFirst ? "50%" : 0,
          bottom: isLast ? "50%" : 0,
          height: isFirst || isLast ? "50%" : "100%",
        }}
        aria-hidden
      >
        <div className="h-full border-l-2 border-dashed border-gray-300" />
      </div>
      <div
        className="z-10 mr-4 flex items-center justify-center rounded-lg bg-white p-3"
        style={{
          color: attractionColor.primary,
          background: attractionColor.secondary,
        }}
      >
        <Icon size={24} />
      </div>
      <div className="flex flex-col">
        <p className="text-xs text-gray-400">
          {dateFormatter.format(new Date(visitedAt))}{" "}
          <span style={{ color: personalityColor.main }}>
            {PERSONALITY_INFO[personality].name}{" "}
          </span>
          で入場
        </p>
        <p className="text-md text-gray-700">
          {ATTRACTIONS_INFO[attraction].name}
        </p>
      </div>
    </li>
  );
}

interface HistoryDialogContent {
  history: HistoryEntry[];
}

function HistoryDialogContent({ history }: HistoryDialogContent) {
  const formattedHistory = history
    // visitedAtをDate型に変換
    .map((item) => ({
      ...item,
      visitedAt: new Date(item.visitedAt),
    }))
    // 日付順に降順ソート(=直近が上に)
    .sort((a, b) => b.visitedAt.getTime() - a.visitedAt.getTime());

  return (
    <ol className="flex flex-col gap-1">
      {formattedHistory.map((item, index) => (
        <HistoryItem
          key={item.visitedAt.getTime()}
          attraction={item.attraction}
          personality={item.personality}
          visitedAt={item.visitedAt}
          isFirst={index === 0}
          isLast={index === formattedHistory.length - 1}
        />
      ))}
    </ol>
  );
}

interface HistoryDialogProps {
  history: HistoryEntry[];
  children: React.ReactNode;
}

function HistoryDialog({ history, children }: HistoryDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="mx-auto w-96">
        <DialogHeader>
          <DialogTitle>体験の記録</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-96 w-full">
          <div className="p-2">
            <HistoryDialogContent history={history} />
          </div>
          <ScrollBar orientation="vertical" />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

export { HistoryDialog };
