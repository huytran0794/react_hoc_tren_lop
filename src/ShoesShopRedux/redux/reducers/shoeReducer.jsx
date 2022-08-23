import { shoeArr } from "../../DataShoe";
import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  DELETE_ALL_CART,
  VIEW_DETAIL,
} from "../const/shoeConst";

let initialState = {
  shoeArr,
  currentShoe: "",
  cart: [],
};

let shoeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      return {};
    case VIEW_DETAIL:
      this.state.currentShoe = payload;
      return { ...state };
    default: {
      return state;
    }
  }
};

export { shoeReducer };
