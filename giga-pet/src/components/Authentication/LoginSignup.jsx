import React from "react";
import { Link } from "react-router-dom";

const token = window.localStorage.getItem("token");

function LoginSignup() {
  return (
    <div>
      <Link to="/login">Log In</Link>
      {!token && <Link to="/signup">Sign Up</Link>}

      {/* <Link to="/signup">Sign Up</Link> */}
    </div>
  );
}

export default LoginSignup;
