const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type TelematicsAnalytics {
    id: ID!
    telematicsId: ID
    fuelEfficiency: Float
    averageSpeed: Float
    engineHealthMetrics: String
    availability: String
  }

  type Query {
    getTelematics(telematicsId: ID): TelematicsAnalytics
    getAllTelematics: [TelematicsAnalytics!]!
  }
`;

module.exports = typeDefs;
