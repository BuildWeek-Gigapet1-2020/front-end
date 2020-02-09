import api from "../../components/utils/api";
// import { store } from "../store/index";
import {
  NEW_CHILD_POST,
  LOAD_CHILDREN,
  LOAD_CHILD,
  UPDATE_CHILD
} from "./types";

export const newChild = (child, props) => dispatch => {
  console.log("ChildActions newChild child", child);
  console.log("ChildActions newChild props", props);
  api()
    .post(`/api/child/`, child)
    .then(res => {
      console.log(res.data);
      dispatch({
        type: NEW_CHILD_POST,
        payload: res.data[0]
      });
      props.history.push(`parent-profile`);
    });
};

export const loadChildren = props => dispatch => {
  // console.log("childActions loadChildren child", child);
  api()
    .get(`/api/child`)
    .then(res => {
      // console.log(res.data);
      dispatch({
        type: LOAD_CHILDREN,
        payload: res.data
      });
    });
};

export const loadChild = props => dispatch => {
  console.log("loadChild props", props);
  api()
    .get(`/api/child/${props.match.params.id}`)
    .then(res => {
      console.log("loadChild from childActions on EditChild", res.data);
      dispatch({
        type: LOAD_CHILD,
        payload: res.data
      });
    });
};

export const updateChild = (newChild, props) => dispatch => {
  api()
    .put(`/api/child/${props.match.params.id}`, newChild)
    .then(res => {
      console.log("updateChild from childActions on EditChild component");
      dispatch({
        type: UPDATE_CHILD,
        payload: newChild
      });
      // props.history.push(`/parent-profile`);
    });
};
