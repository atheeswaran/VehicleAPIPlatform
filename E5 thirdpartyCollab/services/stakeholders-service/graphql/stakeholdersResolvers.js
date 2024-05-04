// stakeholdersResolvers.js
const StakeholdersSchema = require('./stakeholdersSchema');

// Sample stakeholders data
const stakeholders = [
  {
    stakeholderId: '1',
    manufacturerId: 'M1',
    bodyBuilderId: 'BB1'
  },
  {
    stakeholderId: '2',
    manufacturerId: 'M2',
    bodyBuilderId: 'BB2'
  },
  // Add more sample data as needed
];

// const resolvers = {
//   Query: {
    getStakeholderById: (parent, { designId }, context, info) => {
      // Find stakeholder by designId
      return stakeholders.find(stakeholder => stakeholder.designId === designId);
    }


//   }
// };


const getAllStakeholders = () => {
  // Return all stakeholders
  return stakeholders;
}
module.exports = {getAllStakeholders};
