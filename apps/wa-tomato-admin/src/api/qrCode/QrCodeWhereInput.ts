import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type QrCodeWhereInput = {
  expiryDate?: DateTimeNullableFilter;
  id?: StringFilter;
  url?: StringNullableFilter;
};
