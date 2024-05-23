import { Connection } from "../connection/Connection";

export type KnowledgeBase = {
  connections?: Array<Connection>;
  content: string | null;
  createdAt: Date;
  createdDate: Date | null;
  id: string;
  title: string | null;
  updatedAt: Date;
};
