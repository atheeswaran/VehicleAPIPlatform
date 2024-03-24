const { MongoClient } = require('mongodb');

const connectionString = 'mongodb+srv://2022mt93200:Wp06071983@cluster0.w5y9tcc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';


async function createAndLoadData() {
  try {
    const client = new MongoClient(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

    // Connect to MongoDB
    await client.connect();
    console.log('Connected to MongoDB');

    // Use the fleet_management database
    const database = client.db('Telematics');

    // Create a collection named 'telematicsCollection'
    const telematicsCollection = database.collection('telematicsAnalytics');
    console.log('Collection "telematicsCollection" created');

   
    const telematicsAnalyticsData = [
        { id: '1', telematicsId: '1', fuelEfficiency: 20.5, averageSpeed: 60.2, engineHealthMetrics: 'Normal' },
        // Add more sample data...
      ];

    await telematicsCollection.insertMany(telematicsAnalyticsData);
    console.log('subscriptions data inserted into "telematicsAnalyticsData" collection');

    // Close the MongoDB connection
    await client.close();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error:', error);
  }
}

// Execute the script
createAndLoadData();
