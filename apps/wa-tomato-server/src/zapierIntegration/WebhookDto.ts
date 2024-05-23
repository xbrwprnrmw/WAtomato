import { ArgsType, Field } from "@nestjs/graphql";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../types";

@ArgsType()
class WebhookDto {
    @Field(() => GraphQLJSON)
    data!: InputJsonValue;
}

export { WebhookDto as WebhookDto };