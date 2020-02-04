import React from "react";
import { Link, Route } from "react-router-dom";
import ChildProfile from "../ChildProfile";

function Child(props) {

  return (
    <div>
      <Route exact path={`/api/child/${props.child.id}`} component={ChildProfile} />

      <Link className="child-card" to={`/api/child/${props.child.id}`}>
        <h1>{props.child.name}</h1>
      </Link>
    </div>
  );
}

export default Child;
