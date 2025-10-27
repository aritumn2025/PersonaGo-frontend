import { BottomNavigation } from "@/components/user/BottomNavigation";
import { InfoContainer } from "@/components/user/info";

export default function Page() {
  return (
    <main className="bg-purple-50 pb-24">
      <InfoContainer />
      <BottomNavigation currentPage="info" />
    </main>
  );
}
