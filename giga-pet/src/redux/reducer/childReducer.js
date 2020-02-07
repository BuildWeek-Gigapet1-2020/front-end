import { NEW_CHILD_POST, LOAD_CHILD } from "../actions/types";
const initialState = [];

export const childReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_CHILD_POST:
      return {
        ...action.payload
        // name: action.payload.name,
        // child_id: action.payload.child_id,
        // type: action.payload.type,
        // servings: action.payload.servings
      };
    case LOAD_CHILD:
      return [...action.payload];
    default:
      return state;
  }
};
