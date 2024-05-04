const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'safety-alerts-service',
  brokers: ['localhost:9092'], // Update with your Kafka broker(s) address
});

const consumer = kafka.consumer({ groupId: 'safety-alerts-group' });
let isConsumerRunning = false;
let telematicsDataCache = null; // Cache to store received telematics data

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

const consumeTelematicsData = async () => {
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
  if (!telematicsDataCache) {
    throw new Error('Telematics data is not available. Please wait for the first telemetry data to be received.');
  }
  return telematicsDataCache;
};

const resolvers = {
  Query: {
    VehicleAPIPlatform: () => {
      return "Some information about the Vehicle API Platform";
    }
  },
  Mutation: {
    safetyAlerts: async (_, { vehicleId }) => {
      try {
        console.log(`Safety alerts requested for Vehicle ${vehicleId}`);
        await consumeTelematicsData(); // Start consuming telematics data
        const vehicleData = getTelematicsData();
        const vehicleTelematics = vehicleData.find(data => data.telematicsId === vehicleId);
 
        if (vehicleTelematics.averageSpeed > 100) {
          return `Safety alert!!!: High speed detected for fleet with ID: ${vehicleId}`;
        } else {
          return `No safety alerts are needed for fleet with ID: ${vehicleId}`;
        }
      } catch (error) {
        console.error('Error processing safety alerts:', error);
        throw error;
      }
    }
  },
  Subscription: {
    telematicsDataReceived: {
      subscribe: () => pubsub.asyncIterator('telematicsDataReceived')
    }
  }
};

module.exports = resolvers;

// Call consumeTelematicsData to start consuming telematics data
consumeTelematicsData();
