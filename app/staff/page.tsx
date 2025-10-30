import Link from "next/link";

import { AttractionId } from "@/types/common";

import { ATTRACTIONS_INFO } from "@/constants/attraction";

import { StaffProfile } from "@/components/auth/StaffProfile";

type LinkItem = {
  section: {
    attraction: AttractionId;
    list: { title: string; link: string }[];
  };
}[];

const links: LinkItem = [
  {
    section: {
      attraction: "picture",
      list: [
        {
          title: "入場QRコードスキャン",
          link: "/staff/attractions/picture/scan",
        },
        { title: "管理画面", link: "/staff/attractions/picture/dashboard" },
      ],
    },
  },
  {
    section: {
      attraction: "battle",
      list: [
        {
          title: "入場QRコードスキャン",
          link: "/staff/attractions/battle/scan",
        },
        { title: "管理画面", link: "/staff/attractions/battle/dashboard" },
      ],
    },
  },
  {
    section: {
      attraction: "games",
      list: [
        {
          title: "入場QRコードスキャン",
          link: "/staff/attractions/games/scan",
        },
        { title: "管理画面", link: "/staff/attractions/games/dashboard" },
      ],
    },
  },
  {
    section: {
      attraction: "prize",
      list: [{ title: "管理画面", link: "/staff/attractions/prize/dashboard" }],
    },
  },
  {
    section: {
      attraction: "mbti",
      list: [{ title: "管理画面", link: "/staff/attractions/mbti/dashboard" }],
    },
  },
];

export default function Page() {
  return (
    <main className="flex items-center justify-center bg-gray-50">
      <div className="flex w-full flex-col gap-10 px-2 py-10">
        <h1 className="mb-8 text-center text-2xl font-bold text-gray-600">
          スタッフ用ページ
        </h1>
        <section className="flex flex-col items-center gap-3">
          <StaffProfile />
        </section>
        <section className="flex flex-col items-center gap-3">
          <h2 className="mb-4 text-center text-lg font-bold text-gray-600">
            各アトラクション管理ページ
          </h2>
          {links.map((item, index) => (
            <div key={index} className="w-full rounded bg-white p-6 shadow">
              <h3
                className="mb-4 text-xl font-bold"
                style={{
                  color:
                    ATTRACTIONS_INFO[item.section.attraction].color.primary,
                }}
              >
                {ATTRACTIONS_INFO[item.section.attraction].name}
              </h3>
              <ul className="flex list-disc flex-col gap-3 pl-5">
                {item.section.list.map((linkItem) => (
                  <li key={linkItem.link}>
                    <Link
                      href={linkItem.link}
                      className="text-blue-400 hover:underline"
                    >
                      {linkItem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
        <section className="flex flex-col items-center gap-3">
          <h2 className="mb-4 text-center text-lg font-bold text-gray-600">
            ユーザー管理ページ
          </h2>
          <p className="text-gray-500">いつか実装します....</p>
        </section>
      </div>
    </main>
  );
}
