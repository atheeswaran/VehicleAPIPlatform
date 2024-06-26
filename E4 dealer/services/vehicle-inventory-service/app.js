// index.js


const subscriptionServiceResolvers = require('./graphql/vehicleInventoryResolvers');
const subscriptionServiceSchema = require('./graphql/vehicleInventorySchema');
const express = require('express');
const { ApolloServer} = require('apollo-server-express');
const cors = require('cors');


async function startServer() {
  try {
    const server = new ApolloServer({
      typeDefs: subscriptionServiceSchema,
      resolvers: subscriptionServiceResolvers,
    });

    // Create an Express application
    const app = express();
    app.use(cors());
    console.log('Apollo Server created');

    await server.start();

    console.log('Apollo Server started');

    // Apply Apollo Server middleware to Express
    server.applyMiddleware({ app });

    console.log('Apollo Server middleware applied');

    // Start the server
    const PORT = 3008;
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}${server.graphqlPath}`);
    });
  } catch (error) {
    console.error('Error starting server:', error);
  }
}

// Call the async function to start the server
startServer();


/* 
async function startServer() {
  try {

    // Define your Azure API Management gateway URL and API key
    const gatewayUrl = 'https://dealerportal.azure-api.net';

    // Create an Axios instance with the API key as a default header
    const axiosInstance = axios.create({
      baseURL: gatewayUrl,
    });
    const server = new ApolloServer({
      typeDefs: subscriptionServiceSchema,
      resolvers: subscriptionServiceResolvers,
      context: () => ({ axios: axiosInstance }) // Pass the Axios instance to the context
    });

    // Create an Express application
    const app = express();
    app.use(cors());
    console.log('Apollo Server created');

    await server.start();

    console.log('Apollo Server started');

    // Apply Apollo Server middleware to Express
    server.applyMiddleware({ app });

    console.log('Apollo Server middleware applied');

    // Start the server
    const PORT = 3008;
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}${server.graphqlPath}`);
    });
  } catch (error) {
    console.error('Error starting server:', error);
  }
}*/