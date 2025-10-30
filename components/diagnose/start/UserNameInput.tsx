import { twMerge } from "tailwind-merge";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface UserNameInputProps {
  userName: string;
  setUserName: (name: string) => void;
  className?: string;
}

function UserNameInput({
  userName,
  setUserName,
  className,
}: UserNameInputProps) {
  return (
    <Card
      className={twMerge("flex flex-col items-center gap-2 p-4", className)}
    >
      <Label
        htmlFor="user-name"
        className="text-md mb-2 font-medium text-gray-600"
      >
        ニックネームを入力
      </Label>
      <Input
        id="user-name"
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="例: たろう"
      />
      <ul className="mt-2 text-xs text-gray-500">
        <li>・ニックネームは結果やイベント展示に表示されます</li>
        <li>・本名などの個人情報は避けてください</li>
        <li>・不適切な内容を含む場合は削除される場合があります</li>
      </ul>
    </Card>
  );
}

export { UserNameInput };
