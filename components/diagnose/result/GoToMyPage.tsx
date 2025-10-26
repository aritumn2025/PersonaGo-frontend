import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface GoToMyPageProps {
  className?: string;
}

function GoToMyPage({ className }: GoToMyPageProps) {
  return (
    <Link
      href="/user/dashboard"
      className={twMerge(
        "bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-4 py-2 text-xl",
        className,
      )}
    >
      マイページへ行こう！
    </Link>
  );
}

export { GoToMyPage };
