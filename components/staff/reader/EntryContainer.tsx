"use client";

import { useEffect, useState } from "react";

import type { PostEntryAttractionVisitResponse } from "@/types/api";
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
  const [user, setUser] = useState<PostEntryAttractionVisitResponse | null>(
    null,
  );

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
          setUser(data);
          console.log("Attraction visit recorded:", data);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Error posting attraction visit:", error);
        setUser(null);
      }
    })();
  }, [userId, attraction, staffName]);

  return (
    <div className="flex flex-col items-center gap-8 px-4">
      <h1 className="text-2xl font-bold text-gray-600">
        入場管理 - {ATTRACTIONS_INFO[attraction].name}
      </h1>
      <QrField setUserId={setUserId} />
      <UserInfoField
        id={user ? user.user.id : null}
        name={user ? user.user.name : null}
        personality={user ? user.user.personality : null}
      />
    </div>
  );
}

export { EntryContainer };
