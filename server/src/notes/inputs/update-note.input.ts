import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateNoteInput {
  @Field(() => ID)
  id: number;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  text: string;
}
