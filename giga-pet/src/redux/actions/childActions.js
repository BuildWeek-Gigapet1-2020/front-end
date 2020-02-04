import api from "../../components/utils/api";
import { store } from "../store/index";
import { NEW_CHILD_POST, NEW_FOOD_POST } from "./types";

export const newFood = food => dispatch => {
  // dispatch({type: NEW_CHILD_POST})
  return setTimeout(() => {
    api()
      .post("/api/child", food)
      .then(res => {
        console.log(res.data);
        dispatch({
          type: NEW_FOOD_POST,
          payload: res.data
        });
        // props.history.push("/parent-profile");
      });
  }, 1000);
};
