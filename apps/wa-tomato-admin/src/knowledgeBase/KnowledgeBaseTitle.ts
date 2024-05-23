import { KnowledgeBase as TKnowledgeBase } from "../api/knowledgeBase/KnowledgeBase";

export const KNOWLEDGEBASE_TITLE_FIELD = "title";

export const KnowledgeBaseTitle = (record: TKnowledgeBase): string => {
  return record.title?.toString() || String(record.id);
};
