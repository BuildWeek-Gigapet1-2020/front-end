import {
  NEW_CHILD_POST,
  LOAD_CHILDREN,
  LOAD_CHILD,
  UPDATE_CHILD
} from "../actions/types";

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

export const childReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_CHILD_POST:
      return {
        ...state,
        children: [...state.children, action.payload]
      };
    case LOAD_CHILDREN:
      return {
        ...state,
        children: action.payload
      };
    case LOAD_CHILD:
      return {
        ...state,
        child: action.payload
      };
    case UPDATE_CHILD:
      return {
        ...state,
        child: {
          ...state.child,
          child: {
            ...state.child.child,
            name: action.payload.name,
            monster_id: action.payload.monster_id
          }
        }
      };
    default:
      return state;
  }
};
