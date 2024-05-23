import { Module } from "@nestjs/common";
import { VoiceflowBotModuleBase } from "./base/voiceflowBot.module.base";
import { VoiceflowBotService } from "./voiceflowBot.service";
import { VoiceflowBotController } from "./voiceflowBot.controller";
import { VoiceflowBotResolver } from "./voiceflowBot.resolver";

@Module({
  imports: [VoiceflowBotModuleBase],
  controllers: [VoiceflowBotController],
  providers: [VoiceflowBotService, VoiceflowBotResolver],
  exports: [VoiceflowBotService],
})
export class VoiceflowBotModule {}
