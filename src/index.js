import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import App from "./App";
import userReducer from "./Redux/userReducer";

const root = ReactDOM.createRoot(document.getElementById("root"));

let store = createStore(userReducer, applyMiddleware(thunk));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
