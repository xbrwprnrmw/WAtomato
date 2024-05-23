import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const QrCodeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="ExpiryDate" source="expiryDate" />
        <TextInput label="Url" source="url" />
      </SimpleForm>
    </Create>
  );
};
