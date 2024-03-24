

const resolvers = {
  Mutation: {
    createSubscription: async (_, { fleetId, customerName, startDate, endDate }) => {
      try {

        // Perform business logic for booking the fleet, such as checking availability, validating input, etc.
        // Example logic: Check availability of fleet for the specified dates
        // You can use database queries or external services to perform this check
        // Example:
         //const isAvailable = await checkFleetAvailability(fleetId, startDate, endDate);
         console.log('inside Createsubscription');
         const isAvailable = true;
        if (!isAvailable) {
         throw new Error('Fleet not available for the specified dates');
         }

        // Validate input (optional)
        // Example:
         if (startDate >= endDate) {
           throw new Error('End date must be after start date');
        }

        // Save the booking information to a database
        // Example logic: Create a new booking record in the database
        // const booking = await Booking.create({

        //   fleetId,
        //   customerName,
        //   startDate,
        //   endDate,
        // });

        // Return a response to the Angular component
        return 'Fleet has been subscribed successfully!';
        // return {
        //   success: true,
        //   message: 'Fleet booked successfully',
        //   booking: booking,
        // };
      } catch (error) {
        console.error('Error booking fleet:', error);
        return 'Failed to subscribe fleet!';
        // Return an error response to the Angular component
        // return {
        //   success: false,
        //   message: 'Failed to book fleet',
        //   error: error.message || 'Unknown error',
        // };
      }
    }
  },
};

module.exports = resolvers;
