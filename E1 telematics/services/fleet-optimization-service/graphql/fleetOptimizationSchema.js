const { gql } = require('apollo-server-express');
const typeDefs = gql`
type Query {
  # Add any query fields here
  VehicleAPIPlatform: String
  }

  type Mutation {
    adjustRoute(vehicleId: ID): String
  }
`;
module.exports = typeDefs;
