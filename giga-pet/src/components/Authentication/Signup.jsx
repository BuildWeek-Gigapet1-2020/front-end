import React, { useState } from "react";
// import api from '../utils/api';

// import { initialState, reducer } from '../../reducer/loginReducer';

import { register } from "../../redux/actions/userActions";
import { connect } from "react-redux";

import styled from "styled-components";

function Signup(props) {
  // console.log('login props', props)

  // const [err, setErr] = useState("");

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
    <ContainerDiv className="signup-form">
      <form
        onSubmit={handleSubmit}
        disabled={props.loading}
        // class name below changes based on loading state
        // this is handled with redux state management
        className={props.isLoading ? "loading" : "regular"}
      >
        {/* {err && <div className="err">{err}</div>} */}

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
          minLength="8"
        />

        <button
          className="signup-button"
          disabled={props.loading}
          type="submit"
        >
          Sign Up
        </button>
      </form>
    </ContainerDiv>
  );
}

function mapStateToProps(state) {
  return {
    isLoading: state.userReducer.isLoading
  };
}

export default connect(mapStateToProps, { register })(Signup);

const ContainerDiv = styled.div`
  form {
    display: flex;
    flex-direction: column;
    width: 40%;
    margin: 0 auto;
  }

  input {
    font-size: 1rem;
    margin: 2%;
    padding: 3%;
    border-radius: 10px;
  }

  button {
    display: flex;
    flex-direction: column;
    padding: 2% 4% 2% 4%;
    margin: 0 auto;
    color: white;
    font-size: 1.5rem;
    background-color: #74b456;
    border: 2px solid #4b8f29;
    border-radius: 10px;
    -webkit-box-shadow: 3px 11px 22px 0px rgba(72, 119, 61, 1);
    -moz-box-shadow: 3px 11px 22px 0px rgba(72, 119, 61, 1);
    box-shadow: 3px 11px 22px 0px rgba(72, 119, 61, 1);
  }
`;
