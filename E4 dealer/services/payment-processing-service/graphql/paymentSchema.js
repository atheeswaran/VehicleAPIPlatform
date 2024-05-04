const { gql } = require('apollo-server');

const typeDefs = gql`
  type Payment {
    fleetid: ID!
    amount: Float!
    currency: String!
    status: PaymentStatus!
    createdAt: String!
  }

  type Subscription {
    fleetid: ID!
    startDate: String!
    endDate: String!
    price: Float!
    currency: String!
    status: String!
  }

  enum PaymentStatus {
    PENDING
    SUCCESS
    FAILED
  }

  type Query {
    getPayment(fleetid: ID!): Payment
    getAvailableSubscriptions: [Subscription!]!
  }

  type Mutation {
    makePayment(amount: Float, currency: String): String
  }
`;

module.exports = typeDefs;
