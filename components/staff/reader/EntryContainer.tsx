"use client";

import { useEffect, useState } from "react";

import { AttractionId, User, type UserId } from "@/types/common";

import { ATTRACTIONS_INFO } from "@/constants/attraction";

import { postEntryAttractionVisit } from "@/services/entry_services";

import { QrField } from "./QrField";
import { UserInfoField } from "./UserInfoField";

interface ReaderContainerProps {
  staffName: string;
  attraction: AttractionId;
}

function EntryContainer({ staffName, attraction }: ReaderContainerProps) {
  const [userId, setUserId] = useState<UserId | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    (async () => {
      try {
        if (userId) {
          console.log("Scanned User ID:", userId);
          const data = await postEntryAttractionVisit(
            userId,
            attraction,
            staffName,
          );
          setUser(data ? data.user : null);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Error posting attraction visit:", error);
        setUser(null);
      }
    })();
  }, [userId]);

  return (
    <div className="flex flex-col items-center gap-8 px-4">
      <h1 className="text-2xl font-bold text-gray-600">
        入場管理 - {ATTRACTIONS_INFO[attraction].name}
      </h1>
      <QrField setUserId={setUserId} />
      <UserInfoField user={user} />
    </div>
  );
}

export { EntryContainer };
