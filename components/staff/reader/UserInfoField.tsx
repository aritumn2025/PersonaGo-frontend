import type { User } from "@/types/common";

import { PERSONALITY_INFO } from "@/constants/personality";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface UserInfoFieldProps {
  user: User | null;
}

function UserInfoField({ user }: UserInfoFieldProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">ユーザー情報</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {user ? (
          <ul>
            <li>ID: {user.id}</li>
            <li>ニックネーム: {user.name}</li>
            <li>
              {"性格タイプ: "}
              <span
                style={{
                  color:
                    PERSONALITY_INFO[user.currentPersonality].type.color.main,
                }}
              >
                {`${PERSONALITY_INFO[user.currentPersonality].name}(${PERSONALITY_INFO[user.currentPersonality].code})`}
              </span>
            </li>
          </ul>
        ) : (
          <p>なし</p>
        )}
      </CardContent>
      <CardFooter className="text-sm text-gray-500">
        ※同じユーザのQRコードを連続して読み取っても1回の入場となります。二重に入場となることはありません。
      </CardFooter>
    </Card>
  );
}

export { UserInfoField };
