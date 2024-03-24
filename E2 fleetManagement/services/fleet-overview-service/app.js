// src/fleet-overview-service/index.js
const express = require('express');
const { ApolloServer} = require('apollo-server-express');
const FleetSchema = require('./graphql/fleetOverviewSchema');
const FleetResolvers = require('./graphql/fleetOverviewResolvers');
const cors = require('cors');
//const mongoose = require('mongoose');

// const FleetOverviewSchema = new mongoose.Schema({
//    totalVehicles: Number,
// });

// const Fleet = mongoose.model('Fleet', FleetOverviewSchema);

async function startServer() {
  try {
    const server = new ApolloServer({
      typeDefs: FleetSchema,
      resolvers: FleetResolvers,
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
    const PORT = 3001;
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}${server.graphqlPath}`);
    });
  } catch (error) {
    console.error('Error starting server:', error);
  }
}

// Call the async function to start the server
startServer();
