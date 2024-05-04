// const { Payment } = require('./models/Payment');


// Dummy data for available subscriptions

const subscriptions = [
  { fleetid: '133',  startDate: '2024-03-01', endDate: '2024-04-01', price: 9.99, currency: 'USD', status: 'available' },
  { fleetid: '202',  startDate: '2024-04-01', endDate: '2024-08-01', price: 19.99, currency: 'USD', status: 'Subscribed' },
  { fleetid: '343',  startDate: '2024-05-01', endDate: '2024-07-01', price: 29.99, currency: 'USD', status: 'available' },
];

const getAvailableSubscriptions = () => {
    return subscriptions;
};

const resolvers = {
  Query: {
    getPayment: async (_, { fleetid }) => {
      // try {
      //   const payment = await Payment.findById(id);
      //   return payment;
      // } catch (error) {
      //   throw new Error(`Failed to fetch payment with ID ${id}`);
      // }
    },
    getAvailableSubscriptions,
  },
  Mutation: {
    makePayment: async (_, { amount, currency }) => {
      try {
        // Logic to make the payment
        // For example, call a payment gateway API

        // Return a success message
        return 'Payment has been made successfully for the selected Subscription!';
      } catch (error) {
        console.error('Error making payment:', error);
        throw new Error('Failed to make payment');
      }
    },
  },
};

module.exports = resolvers;
