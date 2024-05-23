/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { VoiceflowBotWhereInput } from "./VoiceflowBotWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class VoiceflowBotListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => VoiceflowBotWhereInput,
  })
  @ValidateNested()
  @Type(() => VoiceflowBotWhereInput)
  @IsOptional()
  @Field(() => VoiceflowBotWhereInput, {
    nullable: true,
  })
  every?: VoiceflowBotWhereInput;

  @ApiProperty({
    required: false,
    type: () => VoiceflowBotWhereInput,
  })
  @ValidateNested()
  @Type(() => VoiceflowBotWhereInput)
  @IsOptional()
  @Field(() => VoiceflowBotWhereInput, {
    nullable: true,
  })
  some?: VoiceflowBotWhereInput;

  @ApiProperty({
    required: false,
    type: () => VoiceflowBotWhereInput,
  })
  @ValidateNested()
  @Type(() => VoiceflowBotWhereInput)
  @IsOptional()
  @Field(() => VoiceflowBotWhereInput, {
    nullable: true,
  })
  none?: VoiceflowBotWhereInput;
}
export { VoiceflowBotListRelationFilter as VoiceflowBotListRelationFilter };
