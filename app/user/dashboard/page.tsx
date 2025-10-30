import { BottomNavigation } from "@/components/user/BottomNavigation";
import { ComingSoon } from "@/components/user/ComingSoon";

export default function Page() {
  return (
    <main className="bg-purple-50">
      <ComingSoon />
      <BottomNavigation currentPage="home" />
    </main>
  );
}
