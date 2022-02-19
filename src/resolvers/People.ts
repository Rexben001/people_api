import { Resolver, Query, Arg } from "type-graphql";
import { Person } from "../entities/People";
import axios from "axios";
import { ErrorResponse } from "../utils/errors";

@Resolver()
export class PeopleResolver {
  @Query(() => [Person])
  async getAllPeople() {
    try {
      const { data } = await axios.get("https://swapi.dev/api/people");
      return data?.results;
    } catch (error) {
      return new ErrorResponse(error);
    }
  }

  @Query((_returns) => [Person])
  async nextPage(@Arg("pageNumber") pageNumber: number) {
    try {
      if (!pageNumber) {
        throw new Error("Enter a valid page number");
      }
      const { data } = await axios.get(
        `https://swapi.dev/api/people/?page=${pageNumber}`
      );

      return data?.results;
    } catch (error) {
      return new ErrorResponse(error);
    }
  }

  @Query((_returns) => [Person])
  async searchPeople(@Arg("username") username: string) {
    try {
      const url = `https://swapi.dev/api/people/?search=${username}`;
      const { data } = await axios.get(url);
      return data?.results;
    } catch (error) {
      return new ErrorResponse(error);
    }
  }
}
