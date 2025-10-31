import Image from "next/image";
import Link from "next/link";

import type { PersonalityId } from "@/types/common";

import {
  PERSONALITY_CODE_TO_ID_MAP,
  PERSONALITY_INFO,
  type PersonalityCode,
} from "@/constants/personality";

interface PersonalityIconProps {
  personalityCode: PersonalityCode;
  link: keyof (typeof PERSONALITY_INFO)[PersonalityId]["link"];
}

function PersonalityIcon({ personalityCode, link }: PersonalityIconProps) {
  const personality =
    PERSONALITY_INFO[PERSONALITY_CODE_TO_ID_MAP[personalityCode]];
  return (
    <Link
      href={personality.link[link]}
      className="flex flex-col items-center gap-1"
    >
      <div
        className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border-2"
        style={{
          borderColor: personality.type.color.main,
        }}
      >
        <Image
          src={personality.image.regular}
          alt={personality.name}
          width={70}
          height={70}
        />
      </div>
      <p className="text-sm" style={{ color: personality.type.color.main }}>
        {personality.name}
      </p>
    </Link>
  );
}

export { PersonalityIcon };
