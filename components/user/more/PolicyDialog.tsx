import {
  PRIVACY_POLICY_CONTENT,
  TERMS_OF_SERVICE_CONTENT,
} from "@/constants/policy";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface PolicyProps {
  children: React.ReactNode;
}

function PolicyDialog({ children }: PolicyProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>利用規約とプライバシーポリシー</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[600px] w-full rounded-md border p-2">
          <div className="space-y-4">
            <div>{TERMS_OF_SERVICE_CONTENT}</div>
            <div>{PRIVACY_POLICY_CONTENT}</div>
          </div>
          <ScrollBar />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

export { PolicyDialog };
