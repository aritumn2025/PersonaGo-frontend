import Link from "next/link";

import type { PersonalityId } from "@/types/common";

import {
  PERSONALITY_CODE_TO_ID_MAP,
  PERSONALITY_INFO,
  type PersonalityCode,
} from "@/constants/personality";

interface PersonalityLinkProps {
  personalityCode: PersonalityCode;
  link: keyof (typeof PERSONALITY_INFO)[PersonalityId]["link"];
}

function PersonalityLink({ personalityCode, link }: PersonalityLinkProps) {
  const personality =
    PERSONALITY_INFO[PERSONALITY_CODE_TO_ID_MAP[personalityCode]];

  return (
    <Link
      href={personality.link[link]}
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
