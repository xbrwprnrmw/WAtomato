import { VoiceflowBotWhereInput } from "./VoiceflowBotWhereInput";
import { VoiceflowBotOrderByInput } from "./VoiceflowBotOrderByInput";

export type VoiceflowBotFindManyArgs = {
  where?: VoiceflowBotWhereInput;
  orderBy?: Array<VoiceflowBotOrderByInput>;
  skip?: number;
  take?: number;
};
