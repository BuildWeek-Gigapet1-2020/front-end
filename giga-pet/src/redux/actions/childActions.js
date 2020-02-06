import api from "../../components/utils/api";
// import { store } from "../store/index";
import { NEW_CHILD_POST } from "./types";

export const newChild = (child, props) => dispatch => {
  // dispatch({type: NEW_CHILD_POST})
  console.log("ChildActions newChild child", child);
  api()
    .post(`/api/child/props.child.id`, child)
    .then(res => {
      console.log(res.data);
      dispatch({
        type: NEW_CHILD_POST,
        payload: res.data
      });
      props.history.push(`parent-profile`);
    });
};

export const loadChild = (child, props) => {
  console.log("childActions loadChild child", child);
  api()
    .get(`/api/child/${props.child.id}`)
    .then(res => {
      console.log(res.data);
      dispatch({
        type: LOAD_CHILD,
        payload: res.data
      });
    });
};
