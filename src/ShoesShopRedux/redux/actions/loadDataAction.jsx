import { LOAD_DATA } from "../const/shoeConst";

let loadDataAction = () => {
  return {
    type: LOAD_DATA,
    payload: "",
  };
};

export { loadDataAction };
