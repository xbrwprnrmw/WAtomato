import { ConnectionListRelationFilter } from "../connection/ConnectionListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type KnowledgeBaseWhereInput = {
  connections?: ConnectionListRelationFilter;
  content?: StringNullableFilter;
  createdDate?: DateTimeNullableFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
};
