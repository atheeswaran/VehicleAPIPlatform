// /fleet-overview-service/schemas/fleetSchema.js
const { gql } = require('apollo-server-express');

const FleetSchema = gql`
  type Fleet {
    fleetId: ID
    totalVehicles: Int
    totalMileage: Float
    averageFuelEfficiency: Float
  }

  type Query {
    getFleetOverview(fleetId: ID): Fleet
  }
`;

module.exports = FleetSchema;
