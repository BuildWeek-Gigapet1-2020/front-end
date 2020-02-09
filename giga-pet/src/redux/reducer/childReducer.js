import {
  NEW_CHILD_POST,
  LOAD_CHILDREN,
  LOAD_CHILD,
  UPDATE_CHILD
} from "../actions/types";
const initialState = [];

export const childReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_CHILD_POST:
      return [...action.payload];
    case LOAD_CHILDREN:
      return [...action.payload];
    case LOAD_CHILD:
      return { ...action.payload };
    case UPDATE_CHILD:
      return { ...action.payload };
    default:
      return state;
  }
};
