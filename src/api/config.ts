import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const typeDefs = gql`
  type Picture {
    url: String!
  }

  type Country {
    picture: Picture!
    code: String!
  }

  enum Sex {
    MAN
    WOMAN
  }

  type Stats {
    rank: Int!
    points: Int!
    weight: Int!
    height: Int!
    age: Int!
  }

  type Player {
    id: String!
    firstname: String!
    lastname: String!
    shortname: String!
    sex: Sex!
    picture: Picture!
    country: Country!
    stats: Stats!
  }

  type Match {
    id: String!
    players: [Player!]!
    winner: Player!
    startTime: String!
    endTime: String!
  }

  type Query {
    players: [Player!]!
    matches: [Match!]!
  }
`;

export const client = new ApolloClient({
  uri: 'https://kf9p4bkih6.execute-api.eu-west-1.amazonaws.com/dev/',
  cache: new InMemoryCache(),
  typeDefs
});

