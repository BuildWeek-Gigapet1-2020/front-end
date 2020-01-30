export const initialState = {
  name: "apple",
  type: "fruit"
};
export const foodReducer = (state = initialState, action) => {
  console.log("foodReducerState: ", state);
  switch (action.type) {
    default:
      return state;
  }
};
