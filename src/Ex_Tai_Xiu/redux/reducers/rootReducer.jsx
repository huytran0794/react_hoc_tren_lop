import { combineReducers } from "redux";
import gameReducer from "./gameReducer";

export let rootReducer = combineReducers({
  gameReducer,
});
