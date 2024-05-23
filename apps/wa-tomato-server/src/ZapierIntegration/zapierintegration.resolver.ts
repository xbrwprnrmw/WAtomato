import * as graphql from "@nestjs/graphql";
import { ConnectionDto } from "../zapierIntegration/ConnectionDto";
import { WebhookDto } from "../zapierIntegration/WebhookDto";
import { ZapierIntegrationService } from "./zapierintegration.service";

export class ZapierIntegrationResolver {
  constructor(protected readonly service: ZapierIntegrationService) {}

  @graphql.Query(() => String)
  async CreateConnection(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.CreateConnection(args);
  }

  @graphql.Mutation(() => ConnectionDto)
  async CreateNewConnection(
    @graphql.Args()
    args: ConnectionDto
  ): Promise<ConnectionDto> {
    return this.service.CreateNewConnection(args);
  }

  @graphql.Query(() => ConnectionDto)
  async FetchConnection(
    @graphql.Args()
    args: string
  ): Promise<ConnectionDto> {
    return this.service.FetchConnection(args);
  }

  @graphql.Query(() => String)
  async GetConnection(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.GetConnection(args);
  }

  @graphql.Mutation(() => String)
  async ProcessWebhook(
    @graphql.Args()
    args: WebhookDto
  ): Promise<string> {
    return this.service.ProcessWebhook(args);
  }
}
