import { FaRegIdCard } from "react-icons/fa";

import Image from "next/image";
import Link from "next/link";

import { GameResultEntry, HistoryEntry, User } from "@/types/common";

import { PERSONALITY_INFO } from "@/constants/personality";

import { QRCodeForJSON } from "@/components/common/qr_gen";

import { HistoryDialog } from "./components/HistoryDialog";
import { HistoryField } from "./components/HistoryField";
import { QRCodeDrawer } from "./components/QRCodeDrawer";
import { ScoreField, ScoreValue } from "./components/ScoreField";
import { SuggestField } from "./components/SuggestField";

interface ActiveDashboardProps {
  user: User;
  history: HistoryEntry[];
  results: GameResultEntry[];
}

function ActiveDashboard({ user, history, results }: ActiveDashboardProps) {
  const personality = PERSONALITY_INFO[user.currentPersonality];
  const colors = personality.type.color;
  const maxScore = Math.max(
    ...(results || []).map((result) => result.score),
    0,
  );
  return (
    <div
      className="relative flex flex-col justify-between rounded-3xl"
      style={{
        borderColor: colors.main,
        borderWidth: "16px",
        backgroundColor: "transparent",
        color: "var(--text-color-gray-800)",
      }}
    >
      {/* コンテナ上装飾 */}
      <div className="relative">
        <Image
          className="absolute -top-10 -left-32 z-[6]"
          src="/images/dashboard/active/flash.svg"
          alt="Passionate Dashboard"
          width={250}
          height={100}
        />
      </div>
      {/* コンテナ中身 */}
      <div
        className="relative -my-2 flex flex-col justify-between gap-1"
        style={{ height: "45rem" }}
      >
        {/* プロフィールセクション */}
        <div className="relative -mx-2 h-56">
          {/* レイアウト用 */}
          <Image
            className="absolute top-0 left-0 z-[1]"
            src="/images/dashboard/active/islands/profile.svg"
            alt="Passionate Dashboard"
            width={300}
            height={150}
          />

          {/* 性格名 */}
          <Image
            className="absolute -top-4 -left-5 z-[2]"
            src={personality.image.logo}
            alt="Passionate Dashboard"
            width={275}
            height={75}
          />

          {/* QRコード */}
          <div className="absolute top-24 left-3 z-[2]">
            <QRCodeForJSON
              json={{ id: user.id }}
              bgColor={colors.main}
              fgColor="var(--color-black)"
              size={65}
            />
          </div>

          {/* QRコード拡大ボタン */}
          <div className="absolute top-36 left-18 z-[2] text-sm font-bold text-black">
            <QRCodeDrawer id={user.id}>
              <Image
                src="/images/dashboard/active/buttons/fullscreen.svg"
                alt="QRコード拡大"
                width={40}
                height={40}
              />
            </QRCodeDrawer>
          </div>

          {/* ユーザー名 */}
          <div className="absolute top-24 left-28 z-[2] text-sm font-bold text-black">
            <FaRegIdCard className="mr-1 inline" />
            {user.name}
          </div>

          {/* キャラクターイメージ */}
          <Link href={personality.link.info}>
            <Image
              className="absolute -right-32 -bottom-8 z-[3]"
              src={PERSONALITY_INFO[user.currentPersonality].image.edged}
              alt="Passionate Dashboard"
              width={350}
              height={350}
            />
          </Link>

          {/* 他性格キャラクターイメージ */}
          <Image
            className="absolute -right-2 -bottom-10 z-[0] opacity-80"
            src="/images/dashboard/anotherPersonality.png"
            alt="Passionate Dashboard"
            width={275}
            height={75}
          />

          {/* 他性格セクション */}
          <Image
            className="absolute -right-2 bottom-0 z-[4]"
            src="/images/dashboard/active/islands/anotherPersonality.svg"
            alt="Passionate Dashboard"
            width={150}
            height={75}
          />
          {/* 他性格リンクボタン */}
          <Link
            href="/user/info/personality"
            className="absolute -right-3 -bottom-3 z-[6]"
          >
            <Image
              src="/images/dashboard/active/buttons/next.svg"
              alt="他性格"
              width={40}
              height={40}
            />
          </Link>
        </div>

        {/* おすすめセクション */}
        <div className="relative -mx-2 -mt-12 h-36">
          {/* タグ */}
          <Image
            className="absolute -top-6 -left-11 z-50"
            src="/images/dashboard/active/tags/suggest.svg"
            alt="suggest tag"
            width={200}
            height={100}
          />
          {/* おすすめ内容 */}
          <div className="absolute top-22 left-5 z-4">
            <SuggestField history={history} />
          </div>
          {/* レイアウト用 */}
          <Image
            className="absolute top-0 left-0"
            src="/images/dashboard/active/islands/suggest.svg"
            alt="Passionate Dashboard"
            width={275}
            height={150}
          />
        </div>

        {/* ゲームスコアセクション */}
        <div className="relative -mx-2 mb-14 h-24">
          {/* タグ */}
          <Image
            className="absolute top-3 -left-7 z-50"
            src="/images/dashboard/active/tags/score.svg"
            alt="score tag"
            width={200}
            height={100}
          />
          {/* レイアウト用 */}
          <Image
            className="absolute top-0 left-0"
            src="/images/dashboard/active/islands/score.svg"
            alt="Passionate Dashboard"
            width={200}
            height={100}
          />
        </div>

        {/* 入場履歴セクション */}
        <div className="relative -mx-2 h-36">
          {/* スコア内容 */}
          {/* 実装上の関係でこっちに移動 */}
          <div className="absolute -top-20 right-0 z-[1] h-56 w-56">
            <ScoreValue score={maxScore} />
          </div>
          <div className="absolute -top-20 -right-28 z-[0] h-56 w-56">
            <ScoreField score={maxScore} color={colors.assort} />
          </div>
          {/* タグ */}
          <Image
            className="absolute -top-11 -left-7 z-50"
            src="/images/dashboard/active/tags/history.svg"
            alt="history tag"
            width={200}
            height={100}
          />
          {/* レイアウト用 */}
          <Image
            className="absolute bottom-0 left-0 w-full"
            src="/images/dashboard/active/islands/history.svg"
            alt="Passionate Dashboard"
            width={300}
            height={150}
          />
          {/* 履歴内容 */}
          <div className="absolute top-10 left-3 z-10">
            <HistoryField history={history} />
          </div>

          <div className="absolute right-0 bottom-7 z-20">
            <HistoryDialog history={history}>
              <Image
                src="/images/dashboard/active/buttons/next.svg"
                alt="履歴をもっと見る"
                width={40}
                height={40}
              />
            </HistoryDialog>
          </div>
        </div>
      </div>

      {/* コンテナ下装飾 */}
      <div className="relative -mx-2">
        {/* 装飾(星型) */}
        <Image
          className="absolute -top-2 -right-30 z-[6]"
          src="/images/dashboard/active/flash.svg"
          alt="Passionate Dashboard"
          width={250}
          height={100}
        />
      </div>
    </div>
  );
}

export { ActiveDashboard };
