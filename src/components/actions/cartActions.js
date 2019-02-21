import { ADD_TO_CART, REMOVE_ITEM } from "./actionTypes";

//add to cart action
export const addtoCart = id => {
  return {
    type: ADD_TO_CART,
    id
  };
};

//remove item from cart action
export const removeItem = id => {
  return {
    type: REMOVE_ITEM,
    id
  };
};
