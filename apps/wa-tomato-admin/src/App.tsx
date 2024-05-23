import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { KnowledgeBaseList } from "./knowledgeBase/KnowledgeBaseList";
import { KnowledgeBaseCreate } from "./knowledgeBase/KnowledgeBaseCreate";
import { KnowledgeBaseEdit } from "./knowledgeBase/KnowledgeBaseEdit";
import { KnowledgeBaseShow } from "./knowledgeBase/KnowledgeBaseShow";
import { VoiceflowBotList } from "./voiceflowBot/VoiceflowBotList";
import { VoiceflowBotCreate } from "./voiceflowBot/VoiceflowBotCreate";
import { VoiceflowBotEdit } from "./voiceflowBot/VoiceflowBotEdit";
import { VoiceflowBotShow } from "./voiceflowBot/VoiceflowBotShow";
import { QrCodeList } from "./qrCode/QrCodeList";
import { QrCodeCreate } from "./qrCode/QrCodeCreate";
import { QrCodeEdit } from "./qrCode/QrCodeEdit";
import { QrCodeShow } from "./qrCode/QrCodeShow";
import { ConnectionList } from "./connection/ConnectionList";
import { ConnectionCreate } from "./connection/ConnectionCreate";
import { ConnectionEdit } from "./connection/ConnectionEdit";
import { ConnectionShow } from "./connection/ConnectionShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"WA-Tomato"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="KnowledgeBase"
          list={KnowledgeBaseList}
          edit={KnowledgeBaseEdit}
          create={KnowledgeBaseCreate}
          show={KnowledgeBaseShow}
        />
        <Resource
          name="VoiceflowBot"
          list={VoiceflowBotList}
          edit={VoiceflowBotEdit}
          create={VoiceflowBotCreate}
          show={VoiceflowBotShow}
        />
        <Resource
          name="QrCode"
          list={QrCodeList}
          edit={QrCodeEdit}
          create={QrCodeCreate}
          show={QrCodeShow}
        />
        <Resource
          name="Connection"
          list={ConnectionList}
          edit={ConnectionEdit}
          create={ConnectionCreate}
          show={ConnectionShow}
        />
      </Admin>
    </div>
  );
};

export default App;
