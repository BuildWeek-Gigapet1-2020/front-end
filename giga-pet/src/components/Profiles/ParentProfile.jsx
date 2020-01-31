import React from "react";
import { Link } from "react-router-dom";
import Parent from "../Users/Parent";
// import Child from "../Users/Child";

function ParentProfile() {
  return (
    <div className="wrapper">
      <Parent />
      {/* <Route exact path="/child/:id"></Route>
            <Link to="/child/:id" ></Link> */}

      <Link to="add-child">Add Child</Link>
    </div>
  );
}

export default ParentProfile;
