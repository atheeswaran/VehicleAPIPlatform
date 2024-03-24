const { MongoClient } = require('mongodb');

const connectionString = 'mongodb+srv://2022mt93200:Wp06071983@cluster0.w5y9tcc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';


async function createAndLoadData() {
  try {
    const client = new MongoClient(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

    // Connect to MongoDB
    await client.connect();
    console.log('Connected to MongoDB');

    // Use the fleet_management database
    const database = client.db('telematics');

    // Create a collection named 'subscriptions'
    const vehiclesCollection = database.collection('safetyalerts');
    console.log('Collection "subscriptions" created');

   
    const initialSafetyAlerts = [
        {
          id: '1',
          telematicsId: '123',
          alertType: 'Speeding',
          timestamp: '2024-02-15T08:30:00Z',
        },
        {
          id: '2',
          telematicsId: '456',
          alertType: 'Harsh Braking',
          timestamp: '2024-02-15T09:45:00Z',
        },
        // Add more safety alerts as needed
      ];

    await vehiclesCollection.insertMany(initialSafetyAlerts);
    console.log('initialSafetyAlerts data inserted into "initialSafetyAlerts" collection');

    // Close the MongoDB connection
    await client.close();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error:', error);
  }
}

// Execute the script
createAndLoadData();
