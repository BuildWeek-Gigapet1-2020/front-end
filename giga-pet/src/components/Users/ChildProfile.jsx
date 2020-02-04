import React from "react";
// import { Link } from "react-router-dom";
// import FoodForm from "../forms/FoodForm";
import Child from "./Children/Child";

function ChildProfile(props) {

  console.log("Child profile props", props)

  return (
    <div className="wrapper">
      <Child />
      
      <h1>Hello</h1>
      {/* 
        1) drop down for selecting: recent, monthly, weekly
        2) checkbox to sort by food type: fruit, vegetable, whole-grains, meat, dairy, fats-oils, treats
        3) list of food with edit and delete button next to each item
        4) add new food button
        5) display a picture of the child's monster choice
      */}
      
      {/* <Route exact path="/add-food"></Route>
      <Link to="/add-food" component={FoodForm}>
        Submit
      </Link> */}
    </div>
  );
}

export default ChildProfile;
