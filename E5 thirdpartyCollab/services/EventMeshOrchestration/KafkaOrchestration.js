const express = require('express');
const { json } = require('express');
const { Kafka } = require('kafkajs');
const { getAllStakeholders } = require('../stakeholders-service/graphql/stakeholdersResolvers');
const { getAllDesigns } = require('../collaborative-design-service/graphql/collabDesignResolvers');

const app = express();
const kafka = new Kafka({
  clientId: 'collaboration-orchestrator',
  brokers: ['localhost:9092'],
});

const consumer = kafka.consumer({ groupId: 'collaboration-orchestrator-group' });
let isConsumerRunning = false;
let eventData = [];
let responses = [];
let count = 0;

app.use(json());

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

const processEvent = (event) => {
  switch (event) {
    case 'StakeholdersRetrieved':
      const retrievedStakeholders = getAllStakeholders();
      responses.push(retrievedStakeholders);
      count++;
      break;
    case 'CollabDesignsRetrieved':
      const retrievedCollabDesigns = getAllDesigns();
      responses.push(retrievedCollabDesigns);
      count++;
      break;
    case 'UpdateCollabDesigns':
      const msg = 'Updated collaboration designs successfully!';
      responses.push(msg);
      count++;
      break;
    default:
      console.log(`Unhandled event: ${event}`);
  }
};

const consumeEvents = async () => {
  if (!isConsumerRunning) {
    try {
      await consumer.connect();
      await consumer.subscribe({ topic: 'collaboration-events', fromBeginning: true });
      await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
          eventData.push(JSON.parse(message.value.toString()));
          processEvent(eventData[eventData.length - 1].event);

          if (count === 2) {
            stopConsumer();
          }
        },
      });
      isConsumerRunning = true;
    } catch (error) {
      console.error('Error consuming events:', error);
      throw error;
    }
  }
};

app.post('/event', async (req, res) => {
  try {
    console.log('Received request from API Gateway:', req.body);
    const { events } = req.body;

    if (!isConsumerRunning) {
      eventData = [];
      responses = [];
      count = 0;
      await consumeEvents();
    }
    // else
    // {
    //   responses = [];
    //   processEvent(eventData[eventData.length - 1].event);
    // }

    // Wait for all messages to be processed before sending the response
    await new Promise(resolve => setTimeout(resolve, 1000)); // Adjust delay as needed

    console.log('responses', responses);
    res.status(200).send(responses);
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).send('Internal Server Error');
  }
});

const PORT = process.env.PORT || 3021;
app.listen(PORT, () => {
  console.log(`Kafka consumer server is running on port ${PORT}`);
});
