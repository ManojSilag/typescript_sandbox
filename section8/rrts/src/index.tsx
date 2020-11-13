import * as React from "react";
import RectDom from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import {  App } from "./components/App";
import { reducers } from "./reducers";

const store = createStore(reducers, applyMiddleware(thunk));

RectDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
