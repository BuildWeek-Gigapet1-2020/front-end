import React, { useState } from "react";
// import api from '../utils/api';

// import { initialState, reducer } from '../../reducer/loginReducer';

import { register } from "../../redux/actions/userActions";
import { connect } from "react-redux";

function SignUp(props) {
  // console.log('login props', props)

  const [err, setErr] = useState("");

  const [data, setData] = useState({
    username: "",
    parent_name: "",
    email: "",
    password: ""
  });

  const handleChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.register(data, props);
    console.log("props.history", props.history);
  };

  return (
    <div className="signup-form">
      <form
        onSubmit={handleSubmit}
        disabled={props.loading}
        className={props.loading ? "transparent" : "regular"}
      >
        {err && <div className="err">{err}</div>}

        <input
          type="text"
          name="username"
          placeholder="username"
          value={data.username}
          className="signup-field"
          onChange={handleChange}
        />
        <input
          type="text"
          name="parent_name"
          placeholder="Name"
          value={data.name}
          className="signup-field"
          onChange={handleChange}
        />

        <input
          type="text"
          name="email"
          placeholder="Email"
          value={data.email}
          className="signup-field"
          onChange={handleChange}
        />

        <input
          type="text"
          name="password"
          placeholder="password"
          value={data.password}
          className="signup-field"
          onChange={handleChange}
        />

        <button
          className="signup-button"
          disabled={props.loading}
          type="submit"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    loading: state.loading
  };
}

export default connect(mapStateToProps, { register })(SignUp);
