import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VoiceflowBotServiceBase } from "./base/voiceflowBot.service.base";

@Injectable()
export class VoiceflowBotService extends VoiceflowBotServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
