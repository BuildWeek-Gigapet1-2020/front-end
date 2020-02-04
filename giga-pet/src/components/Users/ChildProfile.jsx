import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import FoodForm from "../forms/FoodForm";
import Child from "./Children/Child";
import api from "../utils/api";

function ChildProfile(props) {
  console.log("Child profile props", props);
  console.log("child profile props ID", props.history.location.state.id);
  console.log("child profile props NAME", props.history.location.state.name);
  const [child, setChild] = useState({});

  const name = props.history.location.state.name;
  const id = props.history.location.state.id;

  useEffect(() => {
    api()
      .get(`/api/child/${id}`)
      .then(res => {
        console.log("useEffect ChildProfile", res.data);
        setChild(res.data);
      });
  }, []);

  return (
    <div className="wrapper">
      {/* <Child /> */}

      <h1>Hello {name}</h1>
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
