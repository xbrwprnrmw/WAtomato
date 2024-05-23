import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { KNOWLEDGEBASE_TITLE_FIELD } from "../knowledgeBase/KnowledgeBaseTitle";

export const ConnectionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Bot" source="bot" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="KnowledgeBase"
          source="knowledgebase.id"
          reference="KnowledgeBase"
        >
          <TextField source={KNOWLEDGEBASE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
