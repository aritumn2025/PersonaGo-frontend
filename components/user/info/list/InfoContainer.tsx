import { NOTIFICATION } from "@/constants/notification";

import {
  AttractionSection,
  LinksSection,
  MbtiSection,
  NotificationsSection,
} from "./InfoSections";

function InfoContainer() {
  return (
    <div className="flex w-full flex-col items-center gap-4 px-4 py-8">
      <MbtiSection />
      <AttractionSection />
      <NotificationsSection notifications={NOTIFICATION} />
      <LinksSection />
    </div>
  );
}

export { InfoContainer };
