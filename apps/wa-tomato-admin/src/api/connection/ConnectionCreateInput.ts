import { KnowledgeBaseWhereUniqueInput } from "../knowledgeBase/KnowledgeBaseWhereUniqueInput";

export type ConnectionCreateInput = {
  bot?: string | null;
  knowledgeBase?: KnowledgeBaseWhereUniqueInput | null;
  status?: "Option1" | null;
};
