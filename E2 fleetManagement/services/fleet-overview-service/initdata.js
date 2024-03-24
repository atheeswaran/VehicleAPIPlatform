const { MongoClient } = require('mongodb');
const connectionString = 'mongodb+srv://2022mt93200:Wp06071983@cluster0.w5y9tcc.mongodb.net/'
                          '?retryWrites=true&w=majority&appName=Cluster0';
async function createAndLoadData() {
try {
const client = new MongoClient(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
// Connect to MongoDB
await client.connect();
// Use the fleet_management database
const database = client.db('fleet_management');
// Create a collection named 'vehicles'
const vehiclesCollection = database.collection('vehicles');
// Insert sample data into the 'vehicles' collection
const sampleData = [
  { fleetId: 'fleet1', mileage: 10000, fuelEfficiency: 25 },
  { fleetId: 'fleet1', mileage: 15000, fuelEfficiency: 20 },
  { fleetId: 'fleet2', mileage: 12000, fuelEfficiency: 22 },
  { fleetId: 'fleet2', mileage: 18000, fuelEfficiency: 18 },
];
await vehiclesCollection.insertMany(sampleData); 
// Close the MongoDB connection
await client.close();
} catch (error) {
console.error('Error:', error);
}
}
createAndLoadData();
