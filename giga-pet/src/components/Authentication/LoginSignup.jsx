import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

// images
import logo from "../../images/giga-pet-logo.png";

const token = window.localStorage.getItem("token");
// src/images/giga-pet-logo.png
function LoginSignup() {
  return (
    <ContainerDiv>
      <img src={logo} alt="gigapet logo" width="160px" />

      <Link to="/login">Log In</Link>
      {!token && <Link to="/signup">Sign Up</Link>}

      {/* <Link to="/signup">Sign Up</Link> */}
    </ContainerDiv>
  );
}

export default LoginSignup;

const ContainerDiv = styled.div`
  @mon-green: #d4e157;
  @mon-teal: #0097a7;
  @mon-blue: RGBA(57, 73, 171, 0.59);
  @mon-yellow: #fff8f0;
  @mon-one: #18a3a0;
  @mon-two: #fd8620;
  @mon-three: #e9446e;
  @header-text: "Bubblegum Sans", cursive;
  @reg-text: "Lato", sans-serif;
  @back-purple: #8a94cd;

  display: flex;
  font-size: 3rem;
  justify-content: center;
  flex-direction: column;
`;
