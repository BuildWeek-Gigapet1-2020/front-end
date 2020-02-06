import api from "../../components/utils/api";
// import { store } from "../store/index";
import { NEW_CHILD_POST } from "./types";

export const newChild = (child, props) => dispatch => {
  // dispatch({type: NEW_CHILD_POST})
  console.log("ChildActions newChild child", child);
  api()
    .post(`/api/child/props.child.id`, food)
    .then(res => {
      console.log(res.data);
      dispatch({
        type: NEW_CHILD_POST,
        payload: res.data
      });
      props.history.push(`parent-profile`);
    });
};
