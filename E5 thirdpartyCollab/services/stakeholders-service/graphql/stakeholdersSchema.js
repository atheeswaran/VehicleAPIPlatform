// stakeholdersServiceSchema.js

const { gql } = require('apollo-server-express');

const StakeholdersSchema = gql`
  type Stakeholder {
    designId: ID
    manufacturerId: ID
    bodyBuilderId: ID
    // Add more fields as needed
  }

  type Query {
    getStakeholderById(designId: ID): Stakeholder
    getAllStakeholders: [Stakeholder]
  }

  type Mutation {
    createStakeholder(designId: ID, manufacturerId: ID, bodyBuilderId: ID): Stakeholder
    // Add more mutation operations as needed
  }
`;

module.exports = StakeholdersSchema;
