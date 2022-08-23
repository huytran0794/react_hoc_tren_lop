import { createStore } from "redux";
import { rootReducer_DemoReduxMini } from "../reducer/rootReducer";

let store = createStore(
  rootReducer_DemoReduxMini,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export { store };
