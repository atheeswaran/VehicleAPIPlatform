// vehicleInventoryServiceResolvers.js

const { MongoClient } = require('mongodb');

// Initialize the MongoDB client
const client = new MongoClient('mongodb+srv://2022mt93200:Wp06071983@cluster0.w5y9tcc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

const VehicleInventoryServiceResolvers = {
  Query: {
    getVehicle: async (_, { id }) => {
      try {
        await client.connect(); // Connect to MongoDB
        const db = client.db('dealer');
        const vehiclesCollection = db.collection('inventory');

        // Fetch vehicle details by ID
        return await vehiclesCollection.findOne({ _id: id });
      } catch (error) {
        console.error('Error in getVehicle resolver:', error);
        throw error;
      }
    },
  },
  Mutation: {
    createVehicle: async (_, args) => {
      try {
        await client.connect(); // Connect to MongoDB
        const db = client.db('dealer');
        const vehiclesCollection = db.collection('inventory');

        // Insert new vehicle
        const result = await vehiclesCollection.insertOne(args);

        // Return the newly created vehicle
        return { id: result.insertedId, ...args };
      } catch (error) {
        console.error('Error in createVehicle resolver:', error);
        throw error;
      }
    },
  },
};

module.exports = VehicleInventoryServiceResolvers;
