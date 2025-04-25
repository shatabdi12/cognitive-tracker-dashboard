//  # GraphQL schema files

const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Score {
    id: ID!
    score: Float!
    date: String!
  }

  type Query {
    scores: [Score]
  }

  type Mutation {
    addScore(score: Float!, date: String!): Score
  }
`;

module.exports = typeDefs;
