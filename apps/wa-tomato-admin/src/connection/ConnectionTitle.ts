import { Connection as TConnection } from "../api/connection/Connection";

export const CONNECTION_TITLE_FIELD = "bot";

export const ConnectionTitle = (record: TConnection): string => {
  return record.bot?.toString() || String(record.id);
};
