import { Suspense } from "react";

import { SquareSpin2 } from "@/components/common/loader";
import { BottomNavigation } from "@/components/user/BottomNavigation";
import { SummaryContainer } from "@/components/user/summary";

export default function Page() {
  return (
    <main className="bg-purple-50 pb-24">
      <Suspense
        fallback={
          <div className="flex h-screen w-full items-center justify-center">
            <SquareSpin2 color="var(--color-gray-600)" size="36px" />
          </div>
        }
      >
        <SummaryContainer />
      </Suspense>
      <BottomNavigation currentPage="summary" />
    </main>
  );
}
