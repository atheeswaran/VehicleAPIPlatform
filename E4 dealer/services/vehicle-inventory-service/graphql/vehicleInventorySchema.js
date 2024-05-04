// vehicleInventorySchema.js

const { gql } = require('apollo-server-express');

const VehicleInventorySchema = gql`
  type Vehicle {
    id: ID!
    model: String!
    make: String!
    year: Int!
    VIN: String!
    quantity: Int!
    pricing: Float!
  }

  type Query {
    getAllVehicles: [Vehicle!]!
    getVehicleById(id: ID!): Vehicle
  }
`;

module.exports = VehicleInventorySchema;
