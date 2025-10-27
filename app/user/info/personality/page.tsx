import { BottomNavigation } from "@/components/user/BottomNavigation";
import { PersonalityListContainer } from "@/components/user/info/";

export default function Page() {
  return (
    <main>
      <PersonalityListContainer />
      <BottomNavigation currentPage="info" />
    </main>
  );
}
