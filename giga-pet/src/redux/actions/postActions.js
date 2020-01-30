export const fetchFoodPosts = () => {
  api()
    .get(/* put api link here */)
    .then(res =>
      dispatchEvent({
        type: FETCH_FOOD_POSTS,
        payload: res.data
      })
    );
};
