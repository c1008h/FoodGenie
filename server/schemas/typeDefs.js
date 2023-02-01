const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    savedFoods: [Food]
    savedResturaunts: [Resturaunt]
  }

  type Food {
    foodId: String!
    foodtype: String
    name: String!
    image_url: String
    is_closed: Boolean
    url: String
    rating: Float
    #transaction: Array
    price: String
    #location: Object
    display_phone: String
    distance: String
  }
  type Resturaunt {
    resturauntId: String!
    name: String!
    image_url: String
    is_closed: Boolean
    url: String
    rating: Float
    #transaction: Array
    price: String
    #location: Object
    display_phone: String
    distance: String
  }

  input SaveFoodInput {
    foodId: String!
    foodtype: String
    name: String!
    image_url: String
    is_closed: Boolean
    url: String
    rating: Float
    #transaction: Array
    price: String
    #location: Object
    display_phone: String
    distance: String
  }

  input SaveResturauntInput {
    resturauntId: String!
    name: String!
    image_url: String
    is_closed: Boolean
    url: String
    rating: Float
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
    saveFood(input: SaveFoodInput!): User
    removeFood(foodId: String!): User
    saveResturaunt(input: SaveResturauntInput!): User
    removeResturaunt(resturauntId: String!): User
  }
`;

module.exports = typeDefs;
