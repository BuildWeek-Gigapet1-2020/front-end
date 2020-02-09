import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

// images
import logo from "../../images/giga-pet-logo.png";
import orange from "../../images/mon-orange-two.png";
import red from "../../images/mon-red-four.png";
import green from "../../images/mon-teal-one.png";
import pink from "../../images/mon-pink-three.png";

const token = window.localStorage.getItem("token");
// src/images/giga-pet-logo.png
function LoginSignup() {
  return (
    <ContainerDiv>
      <img src={logo} alt="gigapet logo" width="160px" />
      <h1>Learn What to Eat With a GigaPet Of Your Own!</h1>
      <div className="link-monster">
        <div className="links">
          <Link to="/login" className="link">
            Log In
          </Link>
          {!token && (
            <Link to="/signup" className="link">
              Sign Up
            </Link>
          )}
        </div>
        <div className="monsters">
          <img src={orange} alt="" className="monster" />
          <img src={red} alt="" className="monster" />
          <img src={green} alt="" className="monster" />
          <img src={pink} alt="" className="monster" />
        </div>
      </div>
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

  h1 {
    font-size: 3rem;
    color: white;
    margin-bottom: 70px;
    margin-top: 0px;
  }

  .link-monster {
  }
  .links {
    display: flex;
    justify-content: space-between;
    width: 35%;
    margin: 0 auto;
  }
  .link {
    text-decoration: none;
    color: white;
    border: 7px solid;
    border-radius: 18px;
    padding: 1% 2% 1% 2%;
    width: 25%;
  }

  .monsters {
    margin-top: 5%;
  }
  .monster {
    width: 20%;
  }
`;
