import { MdArrowBackIos } from "react-icons/md";

import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface BackButtonProps {
  href: string;
  className?: string;
}

function BackButton({ href, className }: BackButtonProps) {
  return (
    <Link href={href}>
      <div
        className={twMerge(
          "glass flex h-14 w-14 cursor-pointer items-center justify-center rounded-full",
          className,
        )}
      >
        <MdArrowBackIos size={28} className="ml-2 font-bold text-gray-700" />
      </div>
    </Link>
  );
}

export { BackButton };
