import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import postReducers from "./postReducers";

const AppReducers = combineReducers({ posts: postReducers });

const rootReducer = (state, action) => {
	return AppReducers(state, action);
};

export default createStore(
	rootReducer,
	compose(applyMiddleware(thunk, logger))
);
