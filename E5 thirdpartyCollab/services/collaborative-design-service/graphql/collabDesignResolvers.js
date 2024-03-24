// collaborativeDesignServiceResolvers.js

const { MongoClient } = require('mongodb');

// Initialize the MongoDB client
const client = new MongoClient('mongodb+srv://2022mt93200:Wp06071983@cluster0.w5y9tcc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

const CollaborativeDesignServiceResolvers = {
  Query: {
    getDesign: async (_, { id }) => {
      try {
        await client.connect(); // Connect to MongoDB
        const db = client.db('thirdparty');
        const designsCollection = db.collection('designs');

        // Fetch design details by ID
        return await designsCollection.findOne({ _id: id });
      } catch (error) {
        console.error('Error in getDesign resolver:', error);
        throw error;
      }
    },
  },
  Mutation: {
    createDesign: async (_, args) => {
      try {
        await client.connect(); // Connect to MongoDB
        const db = client.db('thirdparty');
        const designsCollection = db.collection('designs');

        // Create a new design record
        const result = await designsCollection.insertOne({
          manufacturerId: args.manufacturerId,
          bodyBuilderId: args.bodyBuilderId,
          designSpecifications: args.designSpecifications,
          // Add more fields as needed
        });

        // Return the newly created design
        return { id: result.insertedId, ...args };
      } catch (error) {
        console.error('Error in createDesign resolver:', error);
        throw error;
      }
    },
  },
};

module.exports = CollaborativeDesignServiceResolvers;
