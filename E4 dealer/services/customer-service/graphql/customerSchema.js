const { gql } = require('apollo-server-express');

// Define the GraphQL schema
const typeDefs = gql`
  type Customer {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    customers: [Customer!]!
  }
`;

module.exports = typeDefs;
