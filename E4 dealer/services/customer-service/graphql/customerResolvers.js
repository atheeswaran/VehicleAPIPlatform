// // customerServiceResolvers.js

// const { MongoClient } = require('mongodb');

// // Initialize the MongoDB client
// const client = new MongoClient('mongodb+srv://2022mt93200:Wp06071983@cluster0.w5y9tcc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

// const CustomerServiceResolvers = {
//   Query: {
//     getCustomer: async (_, { id }) => {
//       try {
//         await client.connect(); // Connect to MongoDB
//         const db = client.db('dealers');
//         const customersCollection = db.collection('customers');

//         // Fetch customer details by ID
//         return await customersCollection.findOne({ _id: id });
//       } catch (error) {
//         console.error('Error in getCustomer resolver:', error);
//         throw error;
//       }
//     },
//   },
//   Mutation: {
//     createCustomer: async (_, args) => {
//       try {
//         await client.connect(); // Connect to MongoDB
//         const db = client.db('dealers');
//         const customersCollection = db.collection('customers');

//         // Insert new customer
//         const result = await customersCollection.insertOne(args);

//         // Return the newly created customer
//         return { id: result.insertedId, ...args };
//       } catch (error) {
//         console.error('Error in createCustomer resolver:', error);
//         throw error;
//       }
//     },
//   },
// };

// module.exports = CustomerServiceResolvers;


// Hardcoded data for customers
const customers = [
  { id: '1', name: 'Vijay', email: 'vijay@example.com' },
  { id: '2', name: 'Sharma', email: 'sharma@example.com' },
  { id: '3', name: 'Divya', email: 'divya@example.com' },
];

// Define resolvers
const resolvers = {
  Query: {
    customers: () => customers,
  },
};

module.exports = resolvers;
