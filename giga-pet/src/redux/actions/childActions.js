import api from "../../components/utils/api";
// import { store } from "../store/index";
import { NEW_CHILD_POST, LOAD_CHILD } from "./types";

export const newChild = (child, props) => dispatch => {
  // console.log("ChildActions newChild child", child);
  api()
    .post(`/api/child/`, child)
    .then(res => {
      // console.log(res.data);
      dispatch({
        type: NEW_CHILD_POST,
        payload: res.data
      });
      props.history.push(`parent-profile`);
    });
};

export const loadChild = props => dispatch => {
  // console.log("childActions loadChild child", child);
  api()
    .get(`/api/child`)
    .then(res => {
      // console.log(res.data);
      dispatch({
        type: LOAD_CHILD,
        payload: res.data
      });
    });
};
