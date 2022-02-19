import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Person {
  @Field()
  name: string;
  @Field()
  height: string;
  @Field()
  mass: string;
  @Field()
  gender: string;
  @Field()
  homeworld: string;
  @Field()
  url: string;
  @Field()
  birth_year: string;
}
