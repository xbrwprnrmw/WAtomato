import { SortOrder } from "../../util/SortOrder";

export type ConnectionOrderByInput = {
  bot?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  knowledgeBaseId?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
