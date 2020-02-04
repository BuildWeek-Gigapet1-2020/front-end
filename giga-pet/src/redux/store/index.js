import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { userReducer } from "../reducer/userReducer";

const initialState = {};

const middleware = [thunk];

const rootReducer = combineReducers({
  userReducer
});

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

// console.log(store.getState());
// store.subscribe();

export default store;
