import api from "../../components/utils/api";
import { store } from "../store/index";
import { NEW_CHILD_POST, NEW_FOOD_POST } from "./types";

export const newFood = (food, props) => dispatch => {
  // dispatch({type: NEW_CHILD_POST})
  console.log("childActions newFood food", food.child_id);
  const childId = food.child_id;
  console.log("childActions childId", childId);
  return setTimeout(() => {
    api()
      .post("/api/foods", food)
      .then(res => {
        console.log(res.data);
        dispatch({
          type: NEW_FOOD_POST,
          payload: res.data
        });
        props.history.push(`/child/${childId}`);
      });
  }, 1000);
};
