import { NEW_FOOD_POST } from "../actions/types";
const initialState = {
  // name: "test",
  // child_id: 0,
  // type: "test",
  // servings: 0
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
    default:
      return state;
  }
};
