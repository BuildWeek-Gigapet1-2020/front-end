import React from "react";
// import { Link } from "react-router-dom";
// import FoodForm from "../forms/FoodForm";
import Child from "../Users/Child";

function ChildProfile() {
  return (
    <div className="wrapper">
      <Child />

      {/* <Route exact path="/add-food"></Route>
      <Link to="/add-food" component={FoodForm}>
        Submit
      </Link> */}
    </div>
  );
}

export default ChildProfile;
