// vehicleInventoryResolvers.js

const vehicles = [
  {
    id: '1',
    model: 'Accord',
    make: 'Honda',
    year: 2022,
    VIN: '12345678901234567',
    quantity: 5,
    pricing: 25000.00
  },
  {
    id: '2',
    model: 'Camry',
    make: 'Toyota',
    year: 2021,
    VIN: '98765432109876543',
    quantity: 3,
    pricing: 27000.00
  },
  // Add more vehicles as needed
];

const resolvers = {
  Query: {
    getAllVehicles: () => {
      return vehicles;
    },
    getVehicleById: (_, { id }) => {
      return vehicles.find(vehicle => vehicle.id === id);
    }
  }
};

module.exports = resolvers;


/*
const { DataSource } = require('apollo-datasource-rest');
// Define a custom data source to fetch data from Azure API Management
class VehicleInventoryAPI extends DataSource {

  // Define a method to fetch all vehicle inventories
  async getAllVehicleInventories() {
    // Make a GET request to the APIM endpoint
    const response = await this.get('/allVehicleInventories', undefined, {  });
    return response; // Return the response data
  }
}

const resolvers = {
  Query: {
    getAllVehicleInventories: async (parent, args, { dataSources }) => {
      // Call the data source method to fetch all vehicle inventories
      return dataSources.vehicleInventoryAPI.getAllVehicleInventories();
    },

    getVehicleById: (_, { id }) => {
      return vehicles.find(vehicle => vehicle.id === id);
    }
  }
};*/