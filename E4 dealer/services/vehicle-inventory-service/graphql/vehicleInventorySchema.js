// vehicleInventoryServiceSchema.js

const { gql } = require('apollo-server-express');

const VehicleInventoryServiceSchema = gql`
  type Vehicle {
    id: ID!
    model: String!
    make: String!
    year: Int!
    vin: String!
    quantity: Int!
    pricing: Float!
    # Add more fields as needed
  }

  type Query {
    getVehicle(id: ID!): Vehicle
  }

  type Mutation {
    createVehicle(model: String!, make: String!, year: Int!, vin: String!, quantity: Int!, pricing: Float!): Vehicle
  }
`;

module.exports = VehicleInventoryServiceSchema;
