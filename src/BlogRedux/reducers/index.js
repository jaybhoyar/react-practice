import { combineReducers, createStore, applyMiddleware, compose } from "redux";

import { createLogger } from "redux-logger";
import postReducers from "./postReducers";

const rootReducer = combineReducers({ posts: postReducers });

const thunk = (store) => (next) => (action) => {
	if (typeof action === "function") {
		return action(store.dispatch);
	}
	next(action);
};

//let store = createStore(rootReducer);
const logger = createLogger();

export let store = createStore(rootReducer, applyMiddleware(thunk));
