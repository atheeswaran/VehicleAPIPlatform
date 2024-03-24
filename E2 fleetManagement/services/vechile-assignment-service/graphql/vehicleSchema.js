// vehicleAssignmentSchema.graphql.js

const { gql } = require('apollo-server-express');

const VehicleAssignmentSchema = gql`
  type VehicleAssignment {
    assignmentId: ID!
    vehicleId: ID!
    driverId: ID!
    assignmentStatus: String!
    assignmentDate: String!
    subscription: Subscription
  }

  type Subscription {
    id: ID!
    userId: ID!
    fleetId: ID!
    startDate: String!
    endDate: String!
  }

  type Query {
    getVehicleAssignment(assignmentId: ID!): VehicleAssignment
  }

  type Mutation {
    createVehicleAssignment(vehicleId: ID!, driverId: ID!, assignmentStatus: String!, assignmentDate: String!, subscriptionId: ID!): VehicleAssignment
  }
`;

module.exports = VehicleAssignmentSchema;
