import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";
import logger from "redux-logger";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createHistory as history } from "history";
import PostsIndex from "./containers/posts_index";

import "../assets/stylesheets/application.scss";

import postsReducer from "./reducers/posts_reducer";

const reducers = combineReducers({
  posts: postsReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={PostsIndex} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
