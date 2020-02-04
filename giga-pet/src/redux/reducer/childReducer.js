import { NEW_CHILD_POST, NEW_FOOD_POST } from "../actions/types";
const initialState = {
  name: "test",
  child_id: 0,
  type: "test",
  servings: 0
};

export const childReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_FOOD_POST:
      return {
        ...action.payload
      };
  }
};
