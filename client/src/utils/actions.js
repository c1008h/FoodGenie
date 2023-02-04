export const ADD_FOOD = 'ADD_FOOD';
export const REMOVE_FOOD = 'REMOVE_FOOD';

export const ADD_FOOD_ITEM = 'ADD_FOOD_ITEM';
export const REMOVE_FOOD_ITEM = 'REMOVE_FOOD_ITEM';

export const ADD_RESTURAUNT = 'ADD_RESTURAUNT';
export const REMOVE_RESTURAUNT = 'REMOVE_RESTURAUNT';

// action creators
export function addFood(foodId) {
    return { type: ADD_FOOD, foodId };
}

export function removeFood(foodId) {
  return { type: REMOVE_FOOD, foodId };
}

export function removeFoodItem(foodtype) {
  return { type: REMOVE_FOOD_ITEM, foodtype };
}

export function addFoodItem(foodtype) {
  return { type: ADD_FOOD_ITEM, foodtype };
}

export function removeRestaurant(resturauntId) {
  return { type: REMOVE_RESTURAUNT, resturauntId };
}

export function addRestaurant(resturauntId) {
  return { type: ADD_RESTURAUNT, resturauntId };
}
