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
  mutation saveFood($input: SaveFoodInput!) {
    saveFood(input: $input) {
      username
      savedFoods {
        foodId
        name
        image_url
        is_closed
        url
        rating
        price
        display_phone
        distance
      }
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
        name
        image_url
        is_closed
        url
        rating
        price
        display_phone
        distance
      }
    }
  }
`;
// export const REMOVE_FOOD = gql`
//   mutation removeFood($foodId: String!) {
//     removeFood(foodId: $foodId) {
//       _id
//       username
//       email
//       savedFoods {
//         foodId
//       }
//     }
//   }
// `;
export const SAVE_RESTURAUNT = gql`
  mutation saveResturaunt($input: SaveResturauntInput!) {
    saveResturaunt(input: $input) {
      username
      savedResturaunts {
        resturauntId
        name
        image_url
        is_closed
        url
        rating
        price
        display_phone
        distance
      }
    }
  }
`;
// export const REMOVE_RESTURAUNT = gql`
//   mutation removeResturaunt($resturauntId: String!) {
//     removeResturaunt(resturauntId: $resturauntId) {
//       _id
//       username
//       email
//       savedResturaunt {
//         resturauntId
//       }
//     }
//   }
// `;
export const REMOVE_RESTURAUNT = gql`
  mutation removeResturaunt($resturauntId: ID!) {
    removeResturaunt(resturauntId: $resturauntId) {
      _id
      username
      email
      #bookCount
      savedResturaunts {
        resturauntId
        name
        image_url
        is_closed
        url
        rating
        price
        display_phone
        distance
      }
    }
  }
`;