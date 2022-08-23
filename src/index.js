import React from "react";
import ReactDOM from "react-dom/client";
import "./DemoReduxMini/style.css";
import "./index.css";
import "./Ex_Tai_Xiu/game.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { store } from "./DemoReduxMini/redux/store/store";
// import { store } from "./ShoesShopRedux/redux/store/store";
import { store } from "./Ex_Tai_Xiu/redux/store/store";
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
