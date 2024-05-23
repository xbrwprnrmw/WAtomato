import { SortOrder } from "../../util/SortOrder";

export type KnowledgeBaseOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  createdDate?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
