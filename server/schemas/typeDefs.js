const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    savedFoods: [Food]
  }

  type Food {
    foodId: ID!
    name: String!
    photos: String
    category: String
    url: String
    distance: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User 
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    # addUser(username: String!, email: String!, password: String!): Auth
    # searchResturaunt(_id: , name: String): Resturaunts
    # saveResturaunt(resturauntID: ID!, name: String!): User
    # removeResturaunt(resturaunt: ID!): User
    addUser(username: String!, email: String!, password: String!): Auth
    saveFood(foodId: ID!, name: String!, photos: String, category: String, url: String, distance: String): User
    removeFood(foodId: ID!): User
  }
`;

module.exports = typeDefs;
