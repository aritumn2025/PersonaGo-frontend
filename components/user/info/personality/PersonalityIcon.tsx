import Image from "next/image";
import Link from "next/link";

import {
  PERSONALITY_CODE_TO_ID_MAP,
  PERSONALITY_INFO,
  type PersonalityCode,
} from "@/constants/personality";

interface PersonalityIconProps {
  personalityCode: PersonalityCode;
}

function PersonalityIcon({ personalityCode }: PersonalityIconProps) {
  const personality =
    PERSONALITY_INFO[PERSONALITY_CODE_TO_ID_MAP[personalityCode]];
  return (
    <Link href={personality.link} className="flex flex-col items-center gap-1">
      <div
        className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border-2"
        style={{
          borderColor: personality.type.color.primary,
        }}
      >
        <Image
          src={personality.image}
          alt={personality.name}
          width={70}
          height={70}
        />
      </div>
      <p className="text-sm" style={{ color: personality.type.color.primary }}>
        {personality.name}
      </p>
    </Link>
  );
}

export { PersonalityIcon };
