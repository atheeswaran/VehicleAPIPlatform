// collaborativeDesignServiceSchema.js

const { gql } = require('apollo-server-express');

const CollaborativeDesignServiceSchema = gql`
  type Design {
    id: ID!
    manufacturerId: ID!
    bodyBuilderId: ID!
    designSpecifications: [String]!
    # Add more fields as needed
  }

  type Query {
    getDesign(id: ID!): Design
  }

  type Mutation {
    createDesign(manufacturerId: ID!, bodyBuilderId: ID!, designSpecifications: [String]!): Design
  }
`;

module.exports = CollaborativeDesignServiceSchema;
