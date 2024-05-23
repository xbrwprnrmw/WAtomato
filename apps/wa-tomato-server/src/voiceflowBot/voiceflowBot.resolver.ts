import * as graphql from "@nestjs/graphql";
import { VoiceflowBotResolverBase } from "./base/voiceflowBot.resolver.base";
import { VoiceflowBot } from "./base/VoiceflowBot";
import { VoiceflowBotService } from "./voiceflowBot.service";

@graphql.Resolver(() => VoiceflowBot)
export class VoiceflowBotResolver extends VoiceflowBotResolverBase {
  constructor(protected readonly service: VoiceflowBotService) {
    super(service);
  }
}
