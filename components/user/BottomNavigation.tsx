/* ボトムナビゲーション */
import { BsThreeDots } from "react-icons/bs";
import {
  // FaChartBar,
  FaChartPie,
  FaHome,
  FaInfoCircle,
  FaSearch,
} from "react-icons/fa";

import Link from "next/link";

type NavItem = {
  href: string;
  icon: React.ReactNode;
  label: string;
  pageKey: string;
  isCenter: boolean;
};

const navs: readonly NavItem[] = [
  {
    href: "/user/dashboard",
    icon: <FaHome className="text-2xl" />,
    label: "HOME",
    pageKey: "dashboard",
    isCenter: false,
  },
  {
    href: "/user/summary",
    icon: <FaChartPie className="text-2xl" />,
    label: "みんなの診断",
    pageKey: "summary",
    isCenter: false,
  },
  {
    href: "/user/diagnose",
    icon: <FaSearch className="text-2xl" />,
    label: "診断",
    pageKey: "diagnosis",
    isCenter: true,
  },
  {
    href: "/user/info",
    icon: <FaInfoCircle className="text-2xl" />,
    label: "案内",
    pageKey: "info",
    isCenter: false,
  },
  {
    href: "/user/more",
    icon: <BsThreeDots className="text-2xl" />,
    label: "その他",
    pageKey: "more",
    isCenter: false,
  },
];

interface NavLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  isCenter: boolean;
}

function NavLink({ href, icon, label, isActive, isCenter }: NavLinkProps) {
  const baseClass = isCenter
    ? "-mt-5 flex h-16 w-16 flex-col items-center justify-center gap-1 rounded-full bg-purple-500 text-white shadow-lg transition-all duration-200"
    : `flex w-12 flex-col items-center justify-center gap-1 ${isActive ? "text-purple-500" : "text-gray-500"}`;

  return (
    <Link href={href} className={baseClass}>
      {icon}
      <span className="text-xs whitespace-nowrap">{label}</span>
    </Link>
  );
}

interface BottomNavigationProps {
  currentPage: (typeof navs)[number]["pageKey"];
}

function BottomNavigation({ currentPage }: BottomNavigationProps) {
  return (
    <nav
      className="glass fixed bottom-2 left-1/2 z-50 w-[90%] max-w-lg -translate-x-1/2 rounded-full p-3"
      role="navigation"
      aria-label="メインナビゲーション"
    >
      <ul className="flex w-full items-center justify-between">
        {navs.map((nav) => (
          <li key={nav.pageKey}>
            <NavLink
              href={nav.href}
              icon={nav.icon}
              label={nav.label}
              isActive={currentPage === nav.pageKey}
              isCenter={nav.isCenter}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export { BottomNavigation };
