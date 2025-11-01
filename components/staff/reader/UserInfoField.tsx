import type { User } from "@/types/common";
import type { PersonalityId, UserId, UserName } from "@/types/common";

import { PERSONALITY_INFO } from "@/constants/personality";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface UserInfoFieldProps {
  id: UserId | null;
  name: UserName | null;
  personality: PersonalityId | null;
}

function UserInfoField({ id, name, personality }: UserInfoFieldProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">ユーザー情報</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {id && name && personality ? (
          <ul>
            <li>ID: {id}</li>
            <li>ニックネーム: {name}</li>
            <li>
              {"性格タイプ: "}
              <span
                style={{
                  color: PERSONALITY_INFO[personality].type.color.main,
                }}
              >
                {`${PERSONALITY_INFO[personality].name}(${PERSONALITY_INFO[personality].code})`}
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
