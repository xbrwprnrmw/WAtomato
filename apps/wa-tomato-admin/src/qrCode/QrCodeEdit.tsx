import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const QrCodeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="ExpiryDate" source="expiryDate" />
        <TextInput label="Url" source="url" />
      </SimpleForm>
    </Edit>
  );
};
