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
    image_url: String
    is_closed: Boolean
    url: String
    rating: String
    #transaction: Array
    price: String
    #location: Object
    display_phone: String
    distance: String
  }
  type Resturaunts {
    resturauntId: ID!
    name: String!
    image_url: String
    is_closed: Boolean
    url: String
    rating: String
    #transaction: Array
    price: String
    #location: Object
    display_phone: String
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
    addUser(username: String!, email: String!, password: String!): Auth
    # searchResturaunt(_id: , name: String): Resturaunts
    # saveResturaunt(resturauntID: ID!, name: String!): User
    # removeResturaunt(resturaunt: ID!): User
    saveFood(foodId: String, name: String!, image_url: String, url: String, rating: String, price: String, display_phone: String, distance: String): User
    removeFood(foodId: ID!): User
  }
`;

module.exports = typeDefs;
