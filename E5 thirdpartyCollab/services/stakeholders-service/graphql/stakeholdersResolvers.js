// stakeholdersServiceResolvers.js

const { MongoClient } = require('mongodb');

// Initialize the MongoDB client
const client = new MongoClient('mongodb+srv://2022mt93200:Wp06071983@cluster0.w5y9tcc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

const StakeholdersResolvers = {
  Query: {
    getStakeholderById: async (_, { designId }) => {
      try {
        await client.connect(); // Connect to MongoDB
        const db = client.db('thirdparty');
        const stakeholdersCollection = db.collection('stakeholders');

        // Retrieve a stakeholder by designId
        const stakeholder = await stakeholdersCollection.findOne({ designId });
        return stakeholder;
      } catch (error) {
        console.error('Error in getStakeholderById resolver:', error);
        throw error; // Rethrow the error to propagate it to the GraphQL response
      }
    },
    getAllStakeholders: async () => {
      try {
        await client.connect(); // Connect to MongoDB
        const db = client.db('thirdparty');
        const stakeholdersCollection = db.collection('stakeholders');

        // Retrieve all stakeholders
        const stakeholders = await stakeholdersCollection.find().toArray();
        return stakeholders;
      } catch (error) {
        console.error('Error in getAllStakeholders resolver:', error);
        throw error; // Rethrow the error to propagate it to the GraphQL response
      }
    },
  },
  Mutation: {
    createStakeholder: async (_, { designId, manufacturerId, bodyBuilderId }) => {
      try {
        await client.connect(); // Connect to MongoDB
        const db = client.db('thirdparty');
        const stakeholdersCollection = db.collection('stakeholders');

        // Create a new stakeholder
        const newStakeholder = { designId, manufacturerId, bodyBuilderId };
        const result = await stakeholdersCollection.insertOne(newStakeholder);

        if (result.insertedCount === 1) {
          return newStakeholder;
        } else {
          throw new Error('Failed to create stakeholder');
        }
      } catch (error) {
        console.error('Error in createStakeholder resolver:', error);
        throw error; // Rethrow the error to propagate it to the GraphQL response
      }
    },
    // Add more mutation resolvers as needed
  },
};

module.exports = StakeholdersResolvers;
