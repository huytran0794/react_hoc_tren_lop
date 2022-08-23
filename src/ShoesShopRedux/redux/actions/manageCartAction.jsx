import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  DELETE_ALL_CART,
  VIEW_DETAIL,
} from "../const/shoeConst";

let addToCartAction = (value) => {
  return {
    type: ADD_TO_CART,
    payload: value,
  };
};

let deleteFromCartAction = (value) => {
  return {
    type: DELETE_FROM_CART,
    payload: value,
  };
};

export { addToCartAction, deleteFromCartAction };
