import { NEW_FOOD_POST, LOAD_FOOD } from "../actions/types";
const initialState = {
  child: {
    child: {
      id: 1,
      name: "Bob",
      monster_id: 1,
      parent_id: 1,
      co_parent_id: null
    },
    child_food: [
      {
        id: 1,
        name: "food",
        created_at: "2020-02-01 16:48:49",
        updated_at: "2020-02-01 16:48:49",
        child_id: 1,
        type: "fruits",
        servings: 2
      }
    ],
    monster: [
      {
        id: 1,
        name: "monster-orange"
      }
    ]
  },
  children: [
    {
      id: 1,
      name: "Bob",
      monster_id: 1,
      parent_id: 1,
      co_parent_id: null
    },
    {
      id: 2,
      name: "Larry",
      monster_id: 1,
      parent_id: 1,
      co_parent_id: null
    }
  ]
};

export const foodReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_FOOD_POST:
      return {
        ...state,
        child: [...state.child.child_food, action.payload]
      };
    case LOAD_FOOD:
      return {
        ...state,
        child: action.payload
      };
    default:
      return state;
  }
};
