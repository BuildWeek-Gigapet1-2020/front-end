import React, { useState } from "react";

import styled from "styled-components";

import { login } from "../../redux/actions/userActions";
import { connect } from "react-redux";
import spinner from "../../images/rainbow-spinner.gif";

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
    <ContainerDiv className="container">
      <div id="overlay">
        <form
          onSubmit={handleSubmit}
          // class name below changes based on loading state
          // this is handled with redux state management
        >
          {/* {err && <div className="err">{err}</div>} */}
          <div
            className="login-field"
            className={props.isLoading ? "displayNone" : null}
          >
            <input
              type="text"
              name="username"
              placeholder="username"
              value={data.username}
              onChange={handleChange}
            />
          </div>
          <div
            className="login-field"
            className={props.isLoading ? "displayNone" : null}
          >
            <input
              type="password"
              name="password"
              placeholder="password"
              value={data.password}
              onChange={handleChange}
            />
          </div>
          <button
            className="login-button"
            className={props.isLoading ? "displayNone" : null}
            disabled={props.loading}
            type="submit"
          >
            Log In
          </button>
          <div className={props.isLoading ? "loader" : "displayNone"}>
            <img src={spinner} alt="" />
            <h1>Loading...</h1>
          </div>
        </form>
      </div>
    </ContainerDiv>
  );
}

function mapStateToProps(state) {
  console.log("login state", state);
  return {
    isLoading: state.userReducer.isLoading
    // parent_name: state.userReducer.parent_name
  };
}

export default connect(mapStateToProps, { login })(Login);

const ContainerDiv = styled.div`
  font-size: 3rem;

  .loader {
    margin-top: 150px;
  }

  input {
    border-radius: 10px;
    padding: 1.5%;
    margin: 0.7%;
    width: 37%;
    font-size: 1rem;
  }

  .displayNone {
    display: none;
  }

  button {
    width: 10%;
    height: 58px;
    background-color: #74b456;
    border: 2px solid #4b8f29;
    border-radius: 10px;
    color: white;
    font-size: 1.5rem;
    -webkit-box-shadow: 3px 11px 22px 0px rgba(72, 119, 61, 1);
    -moz-box-shadow: 3px 11px 22px 0px rgba(72, 119, 61, 1);
    box-shadow: 3px 11px 22px 0px rgba(72, 119, 61, 1);
  }
`;
