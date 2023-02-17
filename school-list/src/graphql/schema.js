import { gql } from "apollo-server-express";

const schema = gql`
  type Scholl {
    id: Int!
    name: String!
    street: String!
    number: String!
    district: String!
    city: String!
    uf: String!
    country: String!
  }

  type Query {
    getSchool(id: Int!): Scholl
    getAllSchools: [Scholl!]!
  }

  type Mutation {
    createSchool(
      name: String!
      street: String!
      number: String!
      district: String!
      city: String!
      uf: String!
      country: String!
    ): Scholl!
  }
`;

export default schema;
