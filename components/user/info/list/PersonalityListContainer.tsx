import { PersonalityId } from "@/types/common";

import {
  PERSONALITY_IDS,
  PERSONALITY_INFO,
  PERSONALITY_TYPE_INFO,
  type PersonalityTypeId,
} from "@/constants/personality";

import { BackButton } from "@/components/common/BackButton";
import * as border from "@/components/common/Borders";
import { Marker } from "@/components/common/Marker";

import { PersonalityIcon } from "../personality/PersonalityIcon";

function PersonalityListContainer() {
  const groupByType: Record<PersonalityTypeId, PersonalityId[]> = {} as Record<
    PersonalityTypeId,
    PersonalityId[]
  >;

  PERSONALITY_IDS.forEach((id) => {
    const type = PERSONALITY_INFO[id].type.id;
    if (!groupByType[type]) {
      groupByType[type] = [];
    }
    groupByType[type].push(id);
  });

  const groupByTypeEntry = Object.entries(groupByType) as [
    PersonalityTypeId,
    PersonalityId[],
  ][];

  return (
    <div className="flex w-full flex-col items-center">
      <div className="fixed top-4 left-4 z-1000">
        <BackButton href="/user/info/" />
      </div>
      <h1 className="my-10 text-3xl font-bold text-gray-600">
        <Marker color="var(--color-purple-200)">性格タイプ一覧</Marker>
      </h1>
      <border.BorderAngularWave02
        top="var(--color-white)"
        bottom={PERSONALITY_TYPE_INFO[groupByTypeEntry[0][0]].color.mainLight}
      />
      {groupByTypeEntry.map(([typeKey, ids], index, arr) => {
        const type = typeKey;
        return (
          <section
            key={type}
            className="flex flex-col gap-4 p-4"
            style={{
              backgroundColor: PERSONALITY_TYPE_INFO[type].color.mainLight,
              paddingBottom: index === arr.length - 1 ? "6rem" : undefined,
            }}
          >
            <h2
              className="text-center text-2xl font-bold"
              style={{ color: PERSONALITY_TYPE_INFO[type].color.main }}
            >
              {PERSONALITY_TYPE_INFO[type].name}
            </h2>
            <p className="mb-4 text-gray-500">
              {PERSONALITY_TYPE_INFO[type].description}
            </p>
            <ul className="grid grid-cols-2 gap-4">
              {ids.map((id) => (
                <li key={id}>
                  <PersonalityIcon
                    personalityCode={PERSONALITY_INFO[id].code}
                    link="info"
                  />
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}

export { PersonalityListContainer };
