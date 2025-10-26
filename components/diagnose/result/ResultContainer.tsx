import type { PersonalityCode } from "@/constants/personality";

import { PersonalityArticle } from "@/components/user/info";

import { GoToMyPage } from "./GoToMyPage";

interface ResultContainerProps {
  personalityCode: PersonalityCode;
}

function ResultContainer({ personalityCode }: ResultContainerProps) {
  return (
    <div className="flex flex-col items-center gap-4 pb-10">
      <PersonalityArticle personalityCode={personalityCode} result={true} />
      <GoToMyPage />
    </div>
  );
}

export { ResultContainer };
