import { combineReducers } from "redux";
import { numberReducer } from "./numberReducer";
export let rootReducer_DemoReduxMini = combineReducers({
  number: numberReducer,
});
