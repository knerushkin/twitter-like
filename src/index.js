import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";
import ReactDOM from "react-dom";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import style from "./index.scss";
import App from "./App";
import PostDetails from "./components/PostDetails";
import NotFound from "./components/NotFound";
import Login from "./components/login/Login";

import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route path="/post/:id" component={PostDetails} />
        <Route path="/login" component={Login} />
        <Route exact path="/" component={App} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("index")
);
