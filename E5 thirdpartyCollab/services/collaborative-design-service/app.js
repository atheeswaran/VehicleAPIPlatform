// index.js

const { ApolloServer, gql } = require('apollo-server');
const subscriptionServiceResolvers = require('./graphql/collabDesignResolvers');
const subscriptionServiceSchema = require('./graphql/collabDesignSchema');
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
    const PORT = 3002;
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}${server.graphqlPath}`);
    });
  } catch (error) {
    console.error('Error starting server:', error);
  }
}

// Call the async function to start the server
startServer();
