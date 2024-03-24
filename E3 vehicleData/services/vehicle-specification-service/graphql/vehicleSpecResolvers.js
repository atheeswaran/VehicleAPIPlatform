// vehicleSpecificationResolvers.js

const VehicleSpecificationResolvers = {
    Query: {
      getVehicleSpecification: async (_, { specificationId }, { dataSources }) => {
        // Assume you have a data source named 'vehicleSpecificationAPI'
        return dataSources.vehicleSpecificationAPI.getVehicleSpecificationById(specificationId);
      },
    },
    Mutation: {
      createVehicleSpecification: async (_, args, { dataSources }) => {
        // Assume you have a data source named 'vehicleSpecificationAPI'
        return dataSources.vehicleSpecificationAPI.createVehicleSpecification(args);
      },
    },
  };
  
  module.exports = VehicleSpecificationResolvers;
  