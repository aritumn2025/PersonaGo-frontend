import { DIAGNOSE_CONFIG } from "@/constants/diagnose";

import { QuestionContainer } from "@/components/diagnose/";

const isDevelopment = process.env.NODE_ENV === "development";

export default function Page() {
  return (
    <main>
      <QuestionContainer
        diagnoseConfig={DIAGNOSE_CONFIG}
        questionsPerPage={6}
        debug={isDevelopment}
      />
    </main>
  );
}
