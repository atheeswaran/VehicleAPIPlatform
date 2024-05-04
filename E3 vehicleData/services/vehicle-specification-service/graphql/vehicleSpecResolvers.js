// Sample data
const vehicleSpecs = [
  {
    id: '1',
    model: 'SUV',
    make: 'Toyota',
    year: 2020,
    VIN: 'ABC123456DEF',
  },
  {
    id: '2',
    model: 'Sedan',
    make: 'Honda',
    year: 2019,
    VIN: 'XYZ789012UVW',
  },
  // Add more sample vehicle specifications as needed
];

// Resolver code for fetching all vehicle specifications
const resolvers = {
  Query: {
    getAllVehicleSpecs: async (parent, args, context, info) => {
      try {
        // Return all vehicle specifications from the sample data
        return vehicleSpecs.map(vehicleSpec => ({
          id: vehicleSpec.id,
          model: vehicleSpec.model,
          make: vehicleSpec.make,
          year: vehicleSpec.year,
          VIN: vehicleSpec.VIN,
          // Add more fields as needed
        }));
      } catch (error) {
        throw new Error(`Failed to fetch all vehicle specifications: ${error.message}`);
      }
    },
  },
};

module.exports = resolvers;
