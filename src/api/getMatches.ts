import { gql } from "@apollo/client";

export const GET_MATCHES = gql`
  query GetMatches {
    matches {
      id
      winner {
        id
      }
      startTime
      endTime
    }
  }
`;