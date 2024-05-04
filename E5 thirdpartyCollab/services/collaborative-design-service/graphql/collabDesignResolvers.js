// collaborativeDesignResolvers.js

// Sample design data
const designs = [
  {
    collabDesignId: '1',
    stakeholderId: '3',
    designSpecifications: ['Specification 1', 'Specification 2']
  },
  {
    collabDesignId: '2',
    stakeholderId: '2',   
    designSpecifications: ['Specification 3', 'Specification 4']
  },
  // Add more sample data as needed
];

const resolvers = {
  Query: {
    getDesign: (parent, { id }, context, info) => {
      // Find design by ID
      return designs.find(design => design.id === id);
    },

  },
  Mutation: {
    updateDesign: (parent, { manufacturerId, bodyBuilderId, designSpecifications }, context, info) => {
      // Implement logic to update design and return the updated design
      // For simplicity, we'll just return the input parameters
      const updatedDesign = {
        id: '3', // Assuming a new ID for the updated design
        manufacturerId,
        bodyBuilderId,
        designSpecifications
      };
      designs.push(updatedDesign); // Assuming we add the updated design to the existing designs array
      return updatedDesign;
    }
  }
};


const getAllDesigns = () => {
  // Return all designs
  return designs;
}
module.exports = {getAllDesigns};
