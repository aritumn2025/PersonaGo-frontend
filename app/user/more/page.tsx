import { BottomNavigation } from "@/components/user/BottomNavigation";
import { MoreContainer } from "@/components/user/more";

export default function Page() {
  return (
    <main className="h-screen bg-purple-50">
      <MoreContainer />
      <BottomNavigation currentPage="more" />
    </main>
  );
}
