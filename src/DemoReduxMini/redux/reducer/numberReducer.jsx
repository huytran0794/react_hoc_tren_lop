import { DECREMENT, INCREMENT } from "../const/numberConst";

let initialState = {
  soLuong: 0,
};

let numberReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      state.soLuong += action.payload;
      return { ...state };
    case DECREMENT:
      state.soLuong -= action.payload;
      return { ...state };
    default: {
      return state;
    }
  }
};

export { numberReducer };
