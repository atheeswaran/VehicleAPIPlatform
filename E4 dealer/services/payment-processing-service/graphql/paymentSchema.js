// paymentProcessingServiceSchema.js

const { gql } = require('apollo-server-express');

const PaymentProcessingServiceSchema = gql`
  type Transaction {
    id: ID!
    userId: ID!
    vehicleId: ID!
    paymentAmount: Float!
    paymentStatus: String!
    # Add more fields as needed
  }

  type Query {
    getTransaction(id: ID!): Transaction
  }

  type Mutation {
    processPayment(userId: ID!, vehicleId: ID!, paymentAmount: Float!): Transaction
  }
`;

module.exports = PaymentProcessingServiceSchema;
