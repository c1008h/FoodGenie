import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      #bookCount
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

