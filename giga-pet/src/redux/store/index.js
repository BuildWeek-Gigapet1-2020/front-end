import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { userReducer } from "../reducer/userReducer";
import { childReducer } from "../reducer/childReducer";

// const initialState = {};

const middleware = [thunk];

const rootReducer = combineReducers({
  userReducer,
  childReducer
});

export const store = createStore(
  rootReducer,
  // initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

// console.log(store.getState());
// store.subscribe();

export default store;
