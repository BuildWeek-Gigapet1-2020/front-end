export const initialState = {};

export const foodReducer = (state = {}, action) => {
  console.log(state, action);
  switch (action.type) {
    default:
      return state;
  }
};
