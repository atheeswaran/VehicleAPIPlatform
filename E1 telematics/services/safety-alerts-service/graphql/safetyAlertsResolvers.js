const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'safety-alerts-service',
  brokers: ['localhost:9092'], // Update with your Kafka broker(s) address
});

const consumer = kafka.consumer({ groupId: 'safety-alerts-group' });

// const { PubSub } = require('graphql-subscriptions');
// const pubsub = new PubSub();

const consumeTelematicsData = (vehicleId) => {

    try {
      consumer.connect().then(() => {
        consumer.subscribe({ topic: 'telematics-data-topic', fromBeginning: true }).then(() => {
          consumer.run({
            eachMessage: async ({ message }) => {
              const telematicsData = JSON.parse(message.value.toString());
              console.log('Processing Telematics Data:', telematicsData); 
              return telematicsData;


            },
          });
        });
      });
    } catch (error) {
      console.error('Error consuming telematics data:', error);
      // Reject the promise with the error
      reject(error);
    }

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
        const vehicleData = await consumeTelematicsData();
        const vehicleTelematics = vehicleData.find(data => data.telematicsId === vehicleId);
 
        if (vehicleTelematics.averageSpeed > 100) {
          return `Safety alert!!!: High speed detected for fleet with ID: ${vehicleId}`;
        } else {
          return `No safety alerts are needed for fleet with ID: ${vehicleId}`;
        }
      } catch (error) {
        console.error('Error processing safety alerts:', error);
        return `Error processing safety alerts for fleet with ID: ${vehicleId}`;
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
