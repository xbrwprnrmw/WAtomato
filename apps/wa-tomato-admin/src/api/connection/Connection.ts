import { KnowledgeBase } from "../knowledgeBase/KnowledgeBase";

export type Connection = {
  bot: string | null;
  createdAt: Date;
  id: string;
  knowledgeBase?: KnowledgeBase | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
