import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ZapierIntegrationService } from "./zapierintegration.service";
import { WebhookDto } from "../zapierIntegration/WebhookDto";
import { ConnectionDto } from "../zapierIntegration/ConnectionDto";

@swagger.ApiTags("zapierIntegrations")
@common.Controller("zapierIntegrations")
export class ZapierIntegrationController {
  constructor(protected readonly service: ZapierIntegrationService) {}

  @common.Get("/:id/create-connection")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateConnection(
    @common.Body()
    body: WebhookDto
  ): Promise<string> {
        return this.service.CreateConnection(body);
      }

  @common.Post("/connections")
  @swagger.ApiOkResponse({
    type: ConnectionDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateNewConnection(
    @common.Body()
    body: WebhookDto
  ): Promise<ConnectionDto> {
        return this.service.CreateNewConnection(body);
      }

  @common.Get("/connections/:id")
  @swagger.ApiOkResponse({
    type: ConnectionDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async FetchConnection(
    @common.Body()
    body: WebhookDto
  ): Promise<ConnectionDto> {
        return this.service.FetchConnection(body);
      }

  @common.Get("/:id/get-connection")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetConnection(
    @common.Body()
    body: WebhookDto
  ): Promise<string> {
        return this.service.GetConnection(body);
      }

  @common.Post("/webhook")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ProcessWebhook(
    @common.Body()
    body: WebhookDto
  ): Promise<string> {
        return this.service.ProcessWebhook(body);
      }
}
