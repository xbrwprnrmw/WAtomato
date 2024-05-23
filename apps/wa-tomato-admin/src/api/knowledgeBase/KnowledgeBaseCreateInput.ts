import { ConnectionCreateNestedManyWithoutKnowledgeBasesInput } from "./ConnectionCreateNestedManyWithoutKnowledgeBasesInput";

export type KnowledgeBaseCreateInput = {
  connections?: ConnectionCreateNestedManyWithoutKnowledgeBasesInput;
  content?: string | null;
  createdDate?: Date | null;
  title?: string | null;
};
