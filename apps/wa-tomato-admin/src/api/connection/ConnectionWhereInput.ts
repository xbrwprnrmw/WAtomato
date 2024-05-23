import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { KnowledgeBaseWhereUniqueInput } from "../knowledgeBase/KnowledgeBaseWhereUniqueInput";

export type ConnectionWhereInput = {
  bot?: StringNullableFilter;
  id?: StringFilter;
  knowledgeBase?: KnowledgeBaseWhereUniqueInput;
  status?: "Option1";
};
