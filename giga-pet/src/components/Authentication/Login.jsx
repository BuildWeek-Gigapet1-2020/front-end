import React, { useState } from "react";
//import api from '../utils/api';

//import { Link } from 'react-router-dom';

// import { initialState, reducer } from '../../reducer/loginReducer';

import { login } from "../../redux/actions/userActions";
import { connect } from "react-redux";

function Login(props) {
  console.log("login props", props);

  // const [err, setErr] = useState("");

  const [data, setData] = useState({
    username: "",
    password: ""
  });

  console.log("data.username", data.username);

  const handleChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.login(data, props);
    console.log("props.data", data, props);
    console.log("props.history", props.history);
  };

  return (
    <div className="login-form">
      <form
        onSubmit={handleSubmit}
        // class name below changes based on loading state
        // this is handled with redux state management
        className={props.isLoading ? "loading" : "regular"}
      >
        {/* {err && <div className="err">{err}</div>} */}
        <div className="login-field">
          <input
            type="text"
            name="username"
            placeholder="username"
            value={data.username}
            onChange={handleChange}
          />
        </div>
        <div className="login-field">
          <input
            type="text"
            name="password"
            placeholder="password"
            value={data.password}
            onChange={handleChange}
          />
        </div>
        <button className="login-button" disabled={props.loading} type="submit">
          Log In
        </button>
      </form>
    </div>
  );
}

function mapStateToProps(state) {
  console.log("login state", state);
  return {
    isLoading: state.userReducer.isLoading,
    parent_name: state.userReducer.parent_name
  };
}

export default connect(mapStateToProps, { login })(Login);
