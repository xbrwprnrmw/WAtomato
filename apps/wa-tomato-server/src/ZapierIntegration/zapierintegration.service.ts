import { Injectable } from "@nestjs/common";
import { ConnectionDto } from "../zapierIntegration/ConnectionDto";
import { WebhookDto } from "../zapierIntegration/WebhookDto";

@Injectable()
export class ZapierIntegrationService {
  constructor() {}
  async CreateConnection(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async CreateNewConnection(args: ConnectionDto): Promise<ConnectionDto> {
    throw new Error("Not implemented");
  }
  async FetchConnection(args: string): Promise<ConnectionDto> {
    throw new Error("Not implemented");
  }
  async GetConnection(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async ProcessWebhook(args: WebhookDto): Promise<string> {
    throw new Error("Not implemented");
  }
}
