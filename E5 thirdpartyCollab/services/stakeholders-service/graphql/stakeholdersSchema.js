// stakeholdersServiceSchema.js

const { gql } = require('apollo-server-express');

const StakeholdersSchema = gql`
  type Stakeholder {
    stakeholderId: ID
    manufacturerId: ID
    bodyBuilderId: ID
  }

  type Query {
    getStakeholderById(stakeholderId: ID): Stakeholder
    getAllStakeholders: [Stakeholder]
  }
`;

module.exports = StakeholdersSchema;
