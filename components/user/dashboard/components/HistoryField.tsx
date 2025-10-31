import { HistoryEntry } from "@/types/common";

import { ATTRACTIONS_INFO } from "@/constants/attraction";

interface HistoryFieldProps {
  history: HistoryEntry[];
}

function HistoryField({ history }: HistoryFieldProps) {
  return (
    <div className="flex flex-row gap-2">
      {history.slice(0, 6).map((entry, index) => {
        const attraction = ATTRACTIONS_INFO[entry.attraction];
        const Icon = attraction.icon;
        return (
          <div
            key={index}
            className="flex items-end justify-start p-2 text-black"
          >
            {index === 0 ? (
              <div className="flex flex-col items-center">
                <Icon className="h-8 w-8" />
                <span className="text-sm font-bold">{attraction.name}</span>
              </div>
            ) : (
              <Icon className="mb-1 h-6 w-6" />
            )}
          </div>
        );
      })}
    </div>
  );
}
export { HistoryField };
