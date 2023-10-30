import { gql } from "@apollo/client";

export const GET_PLAYERS = gql`
  query GetPlayers {
    players {
      id
      firstname
      lastname
      shortname
      picture {
        url
      }
      sex
      country { 
        picture {
          url
        }
        code
      }
      stats {
        rank
        points
        weight
        height
        age
      }
    }
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