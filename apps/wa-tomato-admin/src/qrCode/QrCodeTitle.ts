import { QrCode as TQrCode } from "../api/qrCode/QrCode";

export const QRCODE_TITLE_FIELD = "url";

export const QrCodeTitle = (record: TQrCode): string => {
  return record.url?.toString() || String(record.id);
};
