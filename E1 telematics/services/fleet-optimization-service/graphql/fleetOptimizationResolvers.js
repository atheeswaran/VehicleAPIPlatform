const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'fleet-optimization-service',
  brokers: ['localhost:9092'], // Update with your Kafka broker(s) address
});

const consumer = kafka.consumer({ groupId: 'fleet-optimization-group' });
let isConsumerRunning = false;
let telematicsDataCache = null; // Cache to store telematics data

// Function to stop and disconnect the Kafka consumer
const stopConsumer = async () => {
  if (isConsumerRunning) {
    try {
      await consumer.disconnect();
      console.log('Consumer stopped.');
    } catch (error) {
      console.error('Error stopping consumer:', error);
    }
  }
};

const adjustRoute = (vehicleId, telematicsData) => {
  let message = ''; // Initialize an empty message
  
  // Search for the vehicle ID in the telematicsData array
  const vehicleTelematics = telematicsData.find(data => data.telematicsId === vehicleId);
  if (vehicleTelematics) {
    // If the vehicle telematics data is found
    console.log(`Telematics data found for Vehicle ${vehicleId}:`, vehicleTelematics);
    // Implement logic to adjust the route of the vehicle based on telematics data
    console.log(`Adjusting Route for Vehicle ${vehicleId} based on Telematics Data:`, vehicleTelematics);

    // Example logic: Adjust route if fuel efficiency is below a certain threshold
    if (vehicleTelematics.fuelEfficiency < 20) {
      message = `Route adjusted for Fleet ${vehicleId} due to low fuel efficiency`;
      console.log(`Route adjusted for Fleet ${vehicleId} due to low fuel efficiency`)
      // Add your specific route adjustment implementation here
    } else {
      message = `No route adjustment needed for Fleet ${vehicleId}`;
      console.log(`No route adjustment needed for Fleet ${vehicleId}`)
    }
  } else {
    // If the vehicle telematics data is not found
    console.log(`Telematics data not found for Fleet ${vehicleId}`);
    message = `Telematics data not found for Fleet ${vehicleId}`;
  }
  
  return message; // Return the message
};

const consumeTelematicsData = async (vehicleId) => {
  if (!isConsumerRunning) {
    try {
      await consumer.connect();
      await consumer.subscribe({ topic: 'telematics-data-topic', fromBeginning: true });
      await consumer.run({
        eachMessage: async ({ message }) => {
          const telematicsData = JSON.parse(message.value.toString());
          console.log('Processing Telematics Data:', telematicsData);
          telematicsDataCache = telematicsData; // Cache the telematics data
          isConsumerRunning = true;
        },
      });
    } catch (error) {
      console.error('Error consuming telematics data:', error);
      throw error;
    }
  }
};

const getTelematicsData = () => {
  if (telematicsDataCache.length === 0) {
    throw new Error('Telematics data is not available. Please wait for the first telemetry data to be received.');
  }
  return telematicsDataCache;
};

const fleetOptimizationResolvers = {
  Mutation: {
    adjustRoute: async (_, { vehicleId }) => {
      try {
        console.log(`Adjusting Route for Vehicle ${vehicleId}`);
        await consumeTelematicsData(vehicleId);
        const telematicsData = getTelematicsData();
        const message = adjustRoute(vehicleId, telematicsData);
        console.log('message:', message);  
        return message; // Return the message
      } catch (error) {
        console.error('Error adjusting route:', error);
        throw error; // Propagate the error
      }
    },
  },
};

module.exports = fleetOptimizationResolvers;
