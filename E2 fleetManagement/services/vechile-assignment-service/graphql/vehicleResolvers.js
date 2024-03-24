// vehicleAssignmentResolvers.js

const VehicleAssignmentResolvers = {
  Query: {
    getVehicleAssignment: async (_, { assignmentId }) => {
      // Implement logic to retrieve a vehicle assignment by ID
      // You may need to query your database or another data source
      // Return the retrieved vehicle assignment
    },
  },
  Mutation: {
    createVehicleAssignment: async (_, { vehicleId, driverId, assignmentStatus, assignmentDate, subscriptionId }) => {
      // Implement logic to create a new vehicle assignment
      // This may involve creating a record in your database and associating it with the specified subscription
      // Return the newly created vehicle assignment
    },
  },
  VehicleAssignment: {
    subscription: async (parent, _, { dataSources }) => {
      // Implement logic to retrieve the associated subscription for a given vehicle assignment
      // You may use dataSources or other methods to fetch the subscription information
      const { subscriptionId } = parent; // Assuming you have a subscriptionId field in VehicleAssignment
      const subscription = await dataSources.subscriptionService.getSubscriptionById(subscriptionId);
      return subscription;
    },
  },
};

module.exports = VehicleAssignmentResolvers;
