import { gql } from "@apollo/client";

const GET_PLAYERS_AND_MATCHES = gql`
  query GetAllStats {
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

export { GET_PLAYERS_AND_MATCHES };