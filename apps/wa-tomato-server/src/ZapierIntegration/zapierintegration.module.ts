import { Module } from "@nestjs/common";
import { ZapierIntegrationService } from "./zapierintegration.service";
import { ZapierIntegrationController } from "./zapierintegration.controller";
import { ZapierIntegrationResolver } from "./zapierintegration.resolver";

@Module({
  controllers: [ZapierIntegrationController],
  providers: [ZapierIntegrationService, ZapierIntegrationResolver],
  exports: [ZapierIntegrationService],
})
export class ZapierIntegrationModule {}
