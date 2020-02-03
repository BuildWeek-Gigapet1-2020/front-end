import { LOADING, LOGIN_SUCCESS, NEW_USER_SUCCESS } from "../actions/types";
const initialState = {
  isLoading: false,
  parent_name: ""
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      console.log("loading");
      return {
        ...state,
        isLoading: true
      };
    case LOGIN_SUCCESS:
    case NEW_USER_SUCCESS:
      return {
        ...state,
        isLoading: true,
        parent_name: action.payload
      };
    default:
      return state;
  }
};
