import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      permission
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      permission
    }
  }
`;

export const QUERY_SINGLE_SAVED_FOOD = gql`
  query getFood {
    foods{
      _id
      name
      url
      photos
      distance
      category
    }
  }
`;

export const QUERY_ALL_SAVED_FOODS = gql`
  query getFoods {
    foods {
      _id
      name
      url
      photos
      distance
      category
    }
  }
`;

export const QUERY_USER_FOODS = gql`
  query getFoods($userId: ID!) {
    foods(userId: $userId) {
      _id
      username
      savedFoods
    }
  }
`;