import { LOADING, LOGIN_SUCCESS, NEW_USER_SUCCESS } from "../actions/types";
const initialState = {
  isLoading: false
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
        isLoading: false
      };
    default:
      return state;
  }
};
