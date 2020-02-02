import axios from "axios";
import { LOADING, LOGIN_SUCCESS, NEW_USER_SUCCESS } from "./types";

export const login = (creds, props) => dispatch => {
  dispatch({ type: LOADING });
  return setTimeout(() => {
    axios
      .post("https://gigapet-backend.herokuapp.com/api/auth/login", creds)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        console.log("login username", res);
        dispatch({
          type: LOGIN_SUCCESS
        });
        props.history.push("/");
      })
      .catch(err => console.log(err.response));
  }, 2000);
};

export const register = (creds, props) => dispatch => {
  dispatch({ type: LOADING });
  return setTimeout(() => {
    return axios
      .post("https://gigapet-backend.herokuapp.com/api/auth/register", creds)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        dispatch({
          type: NEW_USER_SUCCESS
        });
        props.history.push("/login");
      })
      .catch(err => console.log(err.response));
  }, 2000);
};
