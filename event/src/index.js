import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppRouter from "./AppRouter";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import {store} from "./Store"
import {Provider} from 'unistore/react'

const rootEl = document.getElementById("root");

const render = Component =>
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </Provider>
    , rootEl
  );

render(AppRouter);

serviceWorker.register();
