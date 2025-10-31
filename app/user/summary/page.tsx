import { BottomNavigation } from "@/components/user/BottomNavigation";
import { SummaryContainer } from "@/components/user/summary";

export default function Page() {
  return (
    <main className="bg-purple-50 pb-24">
      <SummaryContainer />
      <BottomNavigation currentPage="summary" />
    </main>
  );
}
