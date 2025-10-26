import { twMerge } from "tailwind-merge";

import { EmphasizeButton } from "@/components/common/EmphasizeButton";

interface GoToMyPageProps {
  className?: string;
}

function GoToMyPage({ className }: GoToMyPageProps) {
  return (
    <EmphasizeButton
      href="/user/dashboard"
      className={twMerge(
        "bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 text-lg font-bold",
        className,
      )}
    >
      マイページに行こう！
    </EmphasizeButton>
  );
}

export { GoToMyPage };
