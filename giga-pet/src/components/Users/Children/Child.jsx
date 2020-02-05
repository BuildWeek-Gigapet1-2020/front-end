import React from "react";
import { Link } from "react-router-dom";
// import ChildProfile from "../ChildProfile";

function Child(props) {
  console.log("child component props", props);

  
  return (
    <div>
      {/* <Route exact path={`/api/child/${props.child.id}`} component={ChildProfile} /> */}

      <Link className="child-card" to={{pathname: `child/${props.child.id}`, state: {id: props.child.id, name: props.child.name}}}  >
        <h1>{props.child.name}</h1>
      </Link>
    </div>
  );
}

export default Child;
