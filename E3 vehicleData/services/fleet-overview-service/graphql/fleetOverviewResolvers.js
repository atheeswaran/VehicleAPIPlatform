const { MongoClient } = require('mongodb');

// Initialize the MongoDB client
const client = new MongoClient('mongodb+srv://2022mt93200:Wp06071983@cluster0.w5y9tcc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

const FleetResolvers = {
  Query: {
    getFleetOverview: async (_, { fleetId }) => {

      try {
        await client.connect(); // Connect to MongoDB
        const db = client.db('fleet_management');

        // Calculate total vehicles, total mileage, and average fuel efficiency based on your data
        // For simplicity, let's assume you have a collection named 'vehicles'
        const vehiclesCollection = db.collection('vehicles');
        
        // When fleetId is provided, get overview for that fleet; otherwise, get overall fleet overview
        const queryCondition = fleetId ? { fleetId } : {};

        const totalVehicles = await vehiclesCollection.countDocuments(queryCondition);

        if (totalVehicles === 0) {
          return {
            fleetId: fleetId || 'overall',
            totalVehicles: 0,
            totalMileage: 0,
            averageFuelEfficiency: 0,
          };
        }

        const totalMileage = await vehiclesCollection
          .aggregate([{ $match: queryCondition }, { $group: { _id: null, totalMileage: { $sum: '$mileage' } } }])
          .toArray();

        const averageFuelEfficiency = await vehiclesCollection
          .aggregate([{ $match: queryCondition }, { $group: { _id: null, averageFuelEfficiency: { $avg: '$fuelEfficiency' } } }])
          .toArray();

        return {
          fleetId: fleetId || 'overall',
          totalVehicles,
          totalMileage: totalMileage[0]?.totalMileage || 0,
          averageFuelEfficiency: averageFuelEfficiency[0]?.averageFuelEfficiency || 0,
        };
      } catch (error) {
        console.error('Error in getFleetOverview resolver:', error);
        throw error; // Rethrow the error to propagate it to the GraphQL response
      }
    },
  },
};

module.exports = FleetResolvers;
