import { VIEW_DETAIL } from "../const/shoeConst";
let viewDetailAction = (value) => {
  return {
    type: VIEW_DETAIL,
    payload: value,
  };
};
export { viewDetailAction };
