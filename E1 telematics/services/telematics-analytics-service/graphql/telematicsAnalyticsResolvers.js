const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'telematics-analytics-service',
  brokers: ['localhost:9092'],
});

const producer = kafka.producer();


const telematicsData = [
  {
    telematicsId: '1',
    fuelEfficiency: 15.6,
    averageSpeed: 60,
    engineHealthMetrics: 'Normal',
    availability: 'No'
  },
  {
    telematicsId: '2',
    fuelEfficiency: 30.2,
    averageSpeed: 105,
    engineHealthMetrics: 'Fair',
    availability: 'Yes'
  },
  //Add more hardcoded data as needed
];

// Resolver function for the getAllTelematics query
const getAllTelematicsResolver = () => {
  return telematicsData;
};

// Resolver function for the getTelematics query (if needed)
const getTelematicsResolver = (parent, args) => {
  const { telematicsId } = args;
  return telematicsData.find(data => data.telematicsId === telematicsId);
};

const sendTelematicsData = async (telematicsData) => {
  await producer.connect();
  await producer.send({
    topic: 'telematics-data-topic',
    messages: [{ value: JSON.stringify(telematicsData) }],
  });
  await producer.disconnect();
};

  sendTelematicsData(telematicsData);

module.exports = {
  Query: {
    getAllTelematics: getAllTelematicsResolver,
    getTelematics: getTelematicsResolver,
  },
};
