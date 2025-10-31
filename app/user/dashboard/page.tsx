import { BottomNavigation } from "@/components/user/BottomNavigation";
import { DashboardContainer } from "@/components/user/dashboard";

export default function Page() {
  return (
    <main className="overflow-hidden">
      <DashboardContainer />
      <BottomNavigation currentPage="home" />
    </main>
  );
}
