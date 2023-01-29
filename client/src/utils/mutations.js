import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
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
  mutation saveFood($foodId: String, $name: String, $image_url: String, $is_closed: Boolean, $url: String, $rating: Number, $price: String, $display_phone: String, $distance: String) {
    saveFood(foodId: $foodId, name: $name, image_url: $image_url, is_closed: $is_closed, url: $url, rating: $rating, price: $price, display_phone: $display_phone, distance: $distance) {
      foodId
    }
  }
`;

export const REMOVE_FOOD = gql`
  mutation removeFood($foodId: String!) {
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

export const SAVE_RESTURAUNT = gql`
  mutation saveResturaunt($resturauntId: String!, $name: String, $image_url: String, $is_closed: Boolean, $url: String, $rating: Number, $price: String, $display_phone: String, $distance: String) {
    saveResturaunt(resturauntId: $resturauntId, name: $name, image_url: $image_url, is_closed: $is_closed, url: $url, rating: $rating, price: $price, display_phone: $display_phone, distance: $distance) {
      resturauntId
    }
  }
`;

export const REMOVE_RESTURAUNT = gql`
  mutation removeResturaunt($resturauntId: String!) {
    removeResturaunt(resturauntId: $resturauntId) {
      _id
      username
      email
      savedResturaunt {
        resturauntId
      }
    }
  }
`;