/* 性格の基本情報を定めた定数ファイル */
import { PersonalityId } from "@/types/common";

type PersonalityInfoEntry = Readonly<{
  name: string;
  slogan: string;
  description: string;
  imageUrl: string;
  link: string;
  color: {
    readonly primary: string;
    readonly secondary: string;
  };
}>;

// 暫定的に仮の性格(MBTIから適当に4種)を設定
// TODO: 性格診断と併せて正式な性格を設定

// 性格ID一覧
const PERSONALITY_IDS: Readonly<PersonalityId[]> = ["0", "1", "2", "3"];

// 性格の基本情報
const PERSONALITY_INFO: Readonly<Record<PersonalityId, PersonalityInfoEntry>> =
  {
    "0": {
      name: "INTJ",
      slogan: "深く考えることが好きで、独自の視点を持つ",
      description: "",
      imageUrl: "",
      link: "",
      color: {
        primary: "#83379C",
        secondary: "#E1D8E5",
      },
    },
    "1": {
      name: "ENFJ",
      slogan: "人とのつながりを大切にし、他者をサポートする",
      description: "",
      imageUrl: "",
      link: "",
      color: {
        primary: "#35AF78",
        secondary: "#D5EBE1",
      },
    },
    "2": {
      name: "ESFJ",
      slogan: "社交的で、周囲の人々を喜ばせることが得意",
      description: "",
      imageUrl: "",
      link: "",
      color: {
        primary: "#B6A739",
        secondary: "#F6E9D4",
      },
    },
    "3": {
      name: "ISFJ",
      slogan: "思いやりがあり、他者のニーズに敏感",
      description: "",
      imageUrl: "",
      link: "",
      color: {
        primary: "#8A9FCD",
        secondary: "#DBEBEB",
      },
    },
  };

export { PERSONALITY_IDS, PERSONALITY_INFO };
