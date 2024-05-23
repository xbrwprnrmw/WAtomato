import { ConnectionUpdateManyWithoutKnowledgeBasesInput } from "./ConnectionUpdateManyWithoutKnowledgeBasesInput";

export type KnowledgeBaseUpdateInput = {
  connections?: ConnectionUpdateManyWithoutKnowledgeBasesInput;
  content?: string | null;
  createdDate?: Date | null;
  title?: string | null;
};
