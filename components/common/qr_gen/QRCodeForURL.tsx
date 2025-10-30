import { QRCodeForText } from "./QRCodeForText";
import type { QRCodeCanvasProps } from "./qr_canvas";

interface QRCodeForURLProps extends QRCodeCanvasProps {
  url: string;
}

function QRCodeForURL({ url, ...props }: QRCodeForURLProps) {
  if (!/^https?:\/\//.test(url)) {
    throw new Error("Invalid URL");
  }
  return <QRCodeForText content={url} {...props} />;
}

export { QRCodeForURL };
export type { QRCodeForURLProps };
