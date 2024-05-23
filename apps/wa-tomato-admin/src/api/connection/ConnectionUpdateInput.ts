import { KnowledgeBaseWhereUniqueInput } from "../knowledgeBase/KnowledgeBaseWhereUniqueInput";

export type ConnectionUpdateInput = {
  bot?: string | null;
  knowledgeBase?: KnowledgeBaseWhereUniqueInput | null;
  status?: "Option1" | null;
};
