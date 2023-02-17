import { gql } from "apollo-server-express";

const schema = gql`
  type Student {
    id: Int!
    first_name: String!
    email: String!
    hobbies: [Hobbies!]!
  }

  type Hobbies {
    id: Int!
    title: String!
    student: Student!
  }

  type Query {
    getStudent(id: Int!): Student
    getAllStudents: [Student!]!
    getHobbies(id: Int!): Hobbies
  }

  type Mutation {
    createStudent(first_name: String!, email: String!): Student!
    createHobbies(student_id: Int!, title: String!): Hobbies!
  }
`;

export default schema;
