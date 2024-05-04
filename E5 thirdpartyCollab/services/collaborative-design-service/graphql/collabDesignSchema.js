// collaborativeDesignServiceSchema.js

const { gql } = require('apollo-server-express');

const CollaborativeDesignServiceSchema = gql`
  type Design {
    collabDesignId: ID!
    stakeholderId: ID!
    manufacturerId: ID!
    bodyBuilderId: ID!
    designSpecifications: [String]!
    # Add more fields as needed
  }

  type Query {
    getDesign(collabDesignId: ID!): Design
    getAllDesigns: [Design]
  }

  type Mutation {
    updateDesign(manufacturerId: ID!, bodyBuilderId: ID!, designSpecifications: [String]!): Design
  }
`;

module.exports = CollaborativeDesignServiceSchema;
