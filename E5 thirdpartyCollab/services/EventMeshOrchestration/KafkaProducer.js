// kafkaProducer.js
const express = require('express');
const { Kafka } = require('kafkajs');

const app = express();
const kafka = new Kafka({
  clientId: 'collaboration-producer',
  brokers: ['localhost:9092'], // Update with your Kafka broker address
});

const producer = kafka.producer();
app.use(express.json());

app.post('/event', async (req, res) => {
  try {
    const { events } = req.body;
    console.log('Received request from API Gateway:', events);
    
    if (!events || !Array.isArray(events)) {
      console.log('events is missing');
    }

    // Connect to Kafka broker
    await producer.connect();


      // Example events to send


    // Send the received data to Kafka topic
    // await producer.send({
    //   topic: 'collaboration-events',
    //   messages: [{ value: JSON.stringify({ event, data }) }]
    // });

    // Send each event to the Kafka topic
    await Promise.all(events.map(async (event) => {
      await producer.send({
        topic: 'collaboration-events', // Update with your Kafka topic
        messages: [
          { value: JSON.stringify(event) }
        ]
      });
    }));

    console.log('Events sent successfully');
    res.status(200).send('Message sent to Kafka');
  } catch (error) {
    console.error('Error in sending message to Kafka:', error);
    res.status(500).send('Internal Server Error');
  }
});

const PORT = process.env.PORT || 3020;
app.listen(PORT, () => {
  console.log(`Kafka producer server is running on port ${PORT}`);
});
