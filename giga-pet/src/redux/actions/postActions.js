export const fetchFoodPosts = () => dispatch => {
  api()
    .get(/* put api link here */)
    .then(res =>
      dispatch({
        type: FETCH_FOOD_POSTS,
        payload: res.data
      })
    );
};
