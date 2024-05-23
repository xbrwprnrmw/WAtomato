import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { KNOWLEDGEBASE_TITLE_FIELD } from "./KnowledgeBaseTitle";

export const KnowledgeBaseShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="CreatedDate" source="createdDate" />
        <TextField label="ID" source="id" />
        <TextField label="Title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Connection"
          target="knowledgeBaseId"
          label="Connections"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
