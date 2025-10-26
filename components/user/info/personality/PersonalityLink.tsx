import Link from "next/link";

import {
  PERSONALITY_CODE_TO_ID_MAP,
  PERSONALITY_INFO,
  type PersonalityCode,
} from "@/constants/personality";

interface PersonalityLinkProps {
  personalityCode: PersonalityCode;
}

function PersonalityLink({ personalityCode }: PersonalityLinkProps) {
  const personality =
    PERSONALITY_INFO[PERSONALITY_CODE_TO_ID_MAP[personalityCode]];

  return (
    <Link
      href={personality.link.info}
      className="rounded-md px-1 underline"
      style={{
        color: personality.type.color.main,
      }}
    >
      {personality.name}
    </Link>
  );
}

export { PersonalityLink };
