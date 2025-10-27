import type { IconType } from "react-icons";
import { IoMap } from "react-icons/io5";

import Link from "next/link";

import { ATTRACTIONS_INFO, ATTRACTION_IDS } from "@/constants/attraction";
import { EXTERNAL_LINKS } from "@/constants/links";
import { PERSONALITY_IDS, PERSONALITY_INFO } from "@/constants/personality";

import { randomChoice } from "@/utils/random";

import { Marker } from "@/components/common/Marker";

import { infoCard } from "./InfoCard";

interface InfoListProps {
  title: string;
  children: React.ReactNode;
}

function InfoSection({ title, children }: InfoListProps) {
  return (
    <section className="w-full">
      <h2 className="mb-2 w-full p-4 text-center text-xl font-semibold text-gray-600">
        <Marker color="var(--color-purple-200)">{title}</Marker>
      </h2>
      {children}
    </section>
  );
}

function MbtiSection() {
  const mbtiList: Parameters<typeof infoCard>[0][] = [
    {
      title: "使い方",
      description: "アプリの基本的な使い方を見ることができます",
      link: "/user/info/usage/",
      imageSrc: "/images/other/question_mark.png",
      imageAlt: "Usage Image",
    },
    {
      title: "性格タイプ一覧",
      description: "性格の紹介を見ることができます",
      link: "/user/info/personality/",
      imageSrc:
        PERSONALITY_INFO[randomChoice([...PERSONALITY_IDS], 1)[0]].image,
      imageAlt: "Personality Image",
    },
  ];

  return (
    <InfoSection title="性格診断">
      <div className="flex flex-col gap-4">
        {mbtiList.map((cardProps, index) => (
          <div key={index}>{infoCard(cardProps)}</div>
        ))}
      </div>
    </InfoSection>
  );
}

function AttractionSection() {
  const attractions: {
    id: string;
    link: string;
    name: string;
    color: {
      primary: string;
      secondary: string;
    };
    icon: IconType;
  }[] = [
    ...ATTRACTION_IDS.map((id) => {
      const { link, name, color, icon } = ATTRACTIONS_INFO[id];
      return { id, link, name, color, icon };
    }),
    {
      id: "map",
      link: "/user/info/attraction/map",
      name: "校内マップ",
      color: {
        primary: "var(--color-gray-500)",
        secondary: "var(--color-gray-300)",
      },
      icon: IoMap,
    },
  ];

  return (
    <InfoSection title="出し物紹介">
      <ul className="grid grid-cols-3 gap-4">
        {attractions.map((attraction) => {
          const Icon = attraction.icon;
          return (
            <li key={attraction.id}>
              <Link
                href={attraction.link}
                className="flex flex-col items-center justify-center"
              >
                <Icon
                  size={48}
                  className="mb-1 h-12 w-12 rounded-full p-3"
                  style={{
                    backgroundColor: attraction.color.secondary,
                    color: attraction.color.primary,
                  }}
                />
                <p className="text-sm text-gray-500">{attraction.name}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </InfoSection>
  );
}

function LinksSection() {
  const links: { name: string; link: string }[] = [
    { name: "有明高専公式サイト", link: EXTERNAL_LINKS.official.ariake },
    {
      name: "ありタムフェスタ公式サイト",
      link: EXTERNAL_LINKS.official.aritumn,
    },
  ];
  return (
    <InfoSection title="関連リンク">
      <ul className="flex flex-col gap-1">
        {links.map((link, index) => (
          <li key={index} className="list-inside list-disc text-gray-500">
            <Link href={link.link} className="text-blue-400 underline">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </InfoSection>
  );
}

export { MbtiSection, AttractionSection, LinksSection };
