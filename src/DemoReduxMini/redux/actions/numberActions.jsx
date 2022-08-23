import { DECREMENT, INCREMENT } from "../const/numberConst";

let increMentAction = (value) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};

let decreMentAction = (value) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};

export { increMentAction, decreMentAction };
