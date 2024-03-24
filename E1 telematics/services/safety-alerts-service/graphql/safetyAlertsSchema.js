const { gql } = require('apollo-server-express');

const typeDefs = gql`

type Query {
  # Add any query fields here
  VehicleAPIPlatform: String
  }

  type Mutation {
    safetyAlerts(vehicleId: ID): String
  }

  type Subscription {
    telematicsDataReceived: TelematicsData
  }

  type TelematicsData {
    telematicsId: ID
    fuelEfficiency: Float
    averageSpeed: Float
    engineHealthMetrics: String
  }
`;

module.exports = typeDefs;
