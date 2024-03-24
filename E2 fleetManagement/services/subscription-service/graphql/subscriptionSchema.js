const { gql } = require('apollo-server-express');

const typeDefs = gql`

type Query {
  hello: String!
}

type Booking {
  id: ID!
  fleetId: String!
  customerName: String!
  startDate: String!
  endDate: String!
}

type SubscriptionResponse {
  success: Boolean!
  message: String!
  booking: Booking
  error: String
}

type Mutation {
  createSubscription(
    fleetId: String!
    customerName: String!
    startDate: String!
    endDate: String!
  ): String
}
`;

module.exports = typeDefs;
