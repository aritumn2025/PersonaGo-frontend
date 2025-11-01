import type { UserId } from "@/types/common";

import { CopyButton } from "@/components/common/CopyButton";
import { QRCodeForJSON } from "@/components/common/qr_gen";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

interface QRDrawerProps {
  id: UserId;
  children: React.ReactNode;
}

function QRCodeDrawer({ id, children }: QRDrawerProps) {
  const qrContent = {
    id: id,
  };
  return (
    <Drawer>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>QRコード</DrawerTitle>
          <DrawerDescription>
            この画面をスタッフに見せてください
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-col items-center justify-center gap-6 p-4">
          <QRCodeForJSON json={qrContent} size={230} />
          <p>ID: {id}</p>
          <CopyButton text={id} />
        </div>
        <DrawerFooter>
          <DrawerClose>閉じる</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export { QRCodeDrawer };
