import type { PersonalityId } from "@/types/common";

import {
  PERSONALITY_INFO,
  type PersonalityTypeId,
} from "@/constants/personality";

function countByPersonalityType(
  entries: Record<PersonalityId, number>,
): Record<PersonalityTypeId, number> {
  const result: Record<PersonalityTypeId, number> = {
    Passionate: 0,
    Active: 0,
    Calm: 0,
    Thinker: 0,
  };

  for (const [personalityId, count] of Object.entries(entries)) {
    const personalityTypeId =
      PERSONALITY_INFO[personalityId as PersonalityId].type.id;
    result[personalityTypeId] += count;
  }
  return result;
}

export { countByPersonalityType };
