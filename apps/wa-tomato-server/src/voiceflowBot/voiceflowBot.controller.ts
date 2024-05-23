import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { VoiceflowBotService } from "./voiceflowBot.service";
import { VoiceflowBotControllerBase } from "./base/voiceflowBot.controller.base";

@swagger.ApiTags("voiceflowBots")
@common.Controller("voiceflowBots")
export class VoiceflowBotController extends VoiceflowBotControllerBase {
  constructor(protected readonly service: VoiceflowBotService) {
    super(service);
  }
}
