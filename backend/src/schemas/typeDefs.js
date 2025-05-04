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
    addScore(score: Int!, date: String!): Score
    deleteScore(id: ID!): Score
  }
`;

module.exports = typeDefs;
