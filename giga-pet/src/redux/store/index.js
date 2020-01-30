import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { foodReducer } from "../reducer/foodReducer";

const initialState = {};

const middleware = [thunk];

const rootReducer = combineReducers({
  foodReducer
});

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
