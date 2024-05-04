// vehicleSpecificationSchema.js

const { gql } = require('apollo-server-express');

const VehicleSpecificationSchema = gql`
  type VehicleSpecification {
    id: ID!
    model: String!
    make: String!
    year: Int!
    VIN: String!
    # Add more fields as needed
  }

  type Query {
    getVehicleSpecification(id: ID!): VehicleSpecification
    getAllVehicleSpecs: [VehicleSpecification!]!
  }
`;

module.exports = VehicleSpecificationSchema;
