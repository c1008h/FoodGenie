import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query QUERY_ME {
    me {
      _id
      username
      email
      savedFoods {
        foodId
        foodtype
        name
        image_url
        is_closed
        url
        rating
        price
        display_phone
        distance
      }
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

