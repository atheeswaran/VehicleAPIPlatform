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
    const vehiclesCollection = database.collection('fleetOptimization');
    console.log('Collection "fleetOptimization" created');

   
    const fleetOptimization = [
        { id: '1', userId: '101', fleetId: '201', startDate: '2024-03-01', endDate: '2024-04-01' },
        { id: '2', userId: '102', fleetId: '202', startDate: '2024-03-15', endDate: '2024-04-15' },
        // Add more subscription data
      ];

    await vehiclesCollection.insertMany(fleetOptimization);
    console.log('fleetOptimization data inserted into "fleetOptimization" collection');

    // Close the MongoDB connection
    await client.close();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error:', error);
  }
}

// Execute the script
createAndLoadData();
