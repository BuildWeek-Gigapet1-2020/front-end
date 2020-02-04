import React from "react";
import { Link } from "react-router-dom";

function Child(props) {
  console.log(props.child)

  return (
    <Link className="child-card" to="/child-profile">
      <h1>{props.child}</h1>
    </Link>
  );
}

export default Child;
