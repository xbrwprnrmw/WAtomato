import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { KnowledgeBaseTitle } from "../knowledgeBase/KnowledgeBaseTitle";

export const ConnectionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Bot" source="bot" />
        <ReferenceInput
          source="knowledgeBase.id"
          reference="KnowledgeBase"
          label="KnowledgeBase"
        >
          <SelectInput optionText={KnowledgeBaseTitle} />
        </ReferenceInput>
        <SelectInput
          source="status"
          label="Status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
