import api from "../../components/utils/api";
// import { store } from "../store/index";
import { NEW_FOOD_POST, LOAD_FOOD, SORT_FOOD } from "./types";

export const newFood = (food, props) => dispatch => {
  // dispatch({type: NEW_CHILD_POST})
  console.log("props from newFood", props);
  // console.log("foodActions newFood food", food.child_id);
  // const childId = food.child_id;
  console.log("food from newFood actions", food);
  // console.log("foodActions childId", childId);
  api()
    .post("/api/foods", food)
    .then(res => {
      console.log(res.data);
      dispatch({
        type: NEW_FOOD_POST,
        payload: res.data[0]
      });
      // props.history.push(`/child/${childId}`);
    });
};

export const loadFood = props => dispatch => {
  console.log("loadFood props", props);
  api()
    .get(`/api/child/${props.match.params.id}`)
    .then(res => {
      console.log(
        "loadFood from foodActions on ChildProfile",
        res.data.child_food
      );
      dispatch({
        type: LOAD_FOOD,
        payload: res.data
      });
    });
};

export const sortFood = props => dispatch => {
  console.log("sortFood props", props);
  dispatch({
    type: SORT_FOOD,
    payload: props
  });
};
