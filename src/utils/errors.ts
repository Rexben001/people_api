import { ApolloError } from "apollo-server-errors";

export class ErrorResponse {
  constructor(error: {
    response?: {
      data: {
        message: string;
      };
      status: string;
    };
    message?: string;
  }) {
    if (error.response) {
      const { data, status } = error.response;
      throw new ApolloError(data.message, status);
    }
    throw new ApolloError(error.message || "", "500");
  }
}
