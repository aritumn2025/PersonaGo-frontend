import { FaGithub } from "react-icons/fa";

import Link from "next/link";

import { EXTERNAL_LINKS } from "@/constants/links";

type MaterialCredit = { type: string; name: string; url: string };

const materialCredits: MaterialCredit[] = [];

interface MaterialCreditProps {
  credits: MaterialCredit[];
}

function MaterialCredit({ credits }: MaterialCreditProps) {
  return (
    <div className="flex flex-col items-center gap-1">
      <p>素材提供</p>
      <ul>
        {credits.map((credit, index) => (
          <li key={index}>
            {credit.type}: {credit.name} {" ( "}
            <Link
              href={credit.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              {credit.url}
            </Link>
            {" )"}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <footer className="w-full bg-blue-300 pt-24 pb-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-4 text-sm text-gray-500 md:flex-row">
        <div className="flex flex-col items-center gap-1 text-center">
          <p className="font-medium text-gray-700">
            有明工業高等専門学校 情報システムコース
          </p>
          <p>ありタムフェスタ 2025</p>
        </div>
        <div className="flex items-center gap-4">
          <p>&copy; 2025 aritumn2025</p>
          <Link
            href={EXTERNAL_LINKS.development.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 transition-transform duration-200 hover:scale-125"
          >
            <FaGithub size={24} />
          </Link>
        </div>
        {materialCredits.length > 0 && (
          <MaterialCredit credits={materialCredits} />
        )}
      </div>
    </footer>
  );
}

export { Footer };
