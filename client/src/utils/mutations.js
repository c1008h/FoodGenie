import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password,) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const SAVE_FOOD = gql`
  mutation saveFood($foodId: String, $name: String, $photos: String, $category: String, $url: String, $distance: String) {
    saveFood(foodId: $foodId, name: $name, photos: $photos, category: $category,url: $url, distance: $distance) {
      foodId
    }
  }
`;

export const REMOVE_FOOD = gql`
  mutation removeFood($foodId: ID!) {
    removeFood(foodId: $foodId) {
      _id
      username
      email
      savedFoods {
        foodId
      }
    }
  }
`;