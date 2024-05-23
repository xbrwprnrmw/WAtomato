import { VoiceflowBot as TVoiceflowBot } from "../api/voiceflowBot/VoiceflowBot";

export const VOICEFLOWBOT_TITLE_FIELD = "name";

export const VoiceflowBotTitle = (record: TVoiceflowBot): string => {
  return record.name?.toString() || String(record.id);
};
