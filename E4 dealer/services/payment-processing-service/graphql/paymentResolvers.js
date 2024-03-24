// paymentProcessingServiceResolvers.js

const { MongoClient } = require('mongodb');

// Initialize the MongoDB client
const client = new MongoClient('mongodb+srv://2022mt93200:Wp06071983@cluster0.w5y9tcc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

const PaymentProcessingServiceResolvers = {
  Query: {
    getTransaction: async (_, { id }) => {
      try {
        await client.connect(); // Connect to MongoDB
        const db = client.db('dealer');
        const transactionsCollection = db.collection('transactions');

        // Fetch transaction details by ID
        return await transactionsCollection.findOne({ _id: id });
      } catch (error) {
        console.error('Error in getTransaction resolver:', error);
        throw error;
      }
    },
  },
  Mutation: {
    processPayment: async (_, args) => {
      try {
        await client.connect(); // Connect to MongoDB
        const db = client.db('dealer');
        const transactionsCollection = db.collection('transactions');

        // Process payment and create a new transaction record
        const result = await transactionsCollection.insertOne({
          userId: args.userId,
          vehicleId: args.vehicleId,
          paymentAmount: args.paymentAmount,
          paymentStatus: 'Processed', // You can customize the payment status logic
        });

        // Return the newly created transaction
        return { id: result.insertedId, ...args, paymentStatus: 'Processed' };
      } catch (error) {
        console.error('Error in processPayment resolver:', error);
        throw error;
      }
    },
  },
};

module.exports = PaymentProcessingServiceResolvers;
