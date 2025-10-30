import { QRCodeForText } from "./QRCodeForText";
import type { QRCodeCanvasProps } from "./qr_canvas";

interface QRCodeForJSONProps extends QRCodeCanvasProps {
  json: object;
}

function QRCodeForJSON({ json, ...props }: QRCodeForJSONProps) {
  return <QRCodeForText content={JSON.stringify(json)} {...props} />;
}

export { QRCodeForJSON };
export type { QRCodeForJSONProps };
