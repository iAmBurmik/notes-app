import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateNoteInput {
  @Field()
  name: string;

  @Field()
  text: string;
}
