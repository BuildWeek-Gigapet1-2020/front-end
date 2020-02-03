import React from "react";
import { Link } from "react-router-dom";

function LoginSignup() {
  return (
    <div>
      <Link to="/login">Log In</Link>
      <Link to="/signup">Sign Up</Link>
    </div>
  );
}

export default LoginSignup;
