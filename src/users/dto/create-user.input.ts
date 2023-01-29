import { InputType, Int, Field, ObjectType, ID } from '@nestjs/graphql';

/*@InputType()
export class CreateUserInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}*/

@InputType()
export class CreateUserInput {
    @Field()
    firstname: string;
    @Field()
    lastname: string;
    @Field()
    email: string;
    @Field()
    location: string;
}

@ObjectType()
export class CreateUserDto {
    @Field(() => ID)
    id: string;
    @Field()
    readonly firstname: string;
    @Field()
    readonly lastname: string;
    @Field()
    readonly email: string;
    @Field()
    readonly location: string;
}