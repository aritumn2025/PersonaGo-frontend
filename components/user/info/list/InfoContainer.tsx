import { AttractionSection, LinksSection, MbtiSection } from "./InfoSections";

function InfoContainer() {
  return (
    <div className="flex w-full flex-col items-center gap-4 px-4 py-8">
      <MbtiSection />
      <AttractionSection />
      <LinksSection />
    </div>
  );
}

export { InfoContainer };
