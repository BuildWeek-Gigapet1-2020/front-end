import { NEW_FOOD_POST, LOAD_FOOD } from "../actions/types";
const initialState = {
  child: {},
  child_food: [{}]
};

export const foodReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_FOOD_POST:
      return {
        ...action.payload
        // name: action.payload.name,
        // child_id: action.payload.child_id,
        // type: action.payload.type,
        // servings: action.payload.servings
      };
    case LOAD_FOOD:
      return {
        ...state,
        child: action.payload.child,
        child_food: action.payload.child_food
      };
    default:
      return state;
  }
};
