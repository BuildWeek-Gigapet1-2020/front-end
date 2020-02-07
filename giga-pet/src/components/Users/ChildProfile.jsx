import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import FoodForm from "../forms/FoodForm";
// import Child from "./Children/Child";
import Food from "../FoodList/Food";
// import moment from "moment";

import { useSelector, useDispatch } from "react-redux";
import { loadFood } from "../../redux/actions/foodActions";

function ChildProfile(props) {
  console.log("Child profile props", props);

  const childList = useSelector(state => state.foodReducer);
  const dispatch = useDispatch();

  const child = childList.child;
  const childFood = childList.child_food;

  const id = props.location.state.id;
  const name = props.location.state.name;

  console.log("child", child);
  console.log("childFood", childFood);

  useEffect(() => {
    dispatch(loadFood(props));
  }, [props.match.params.id]);

  return (
    <div className="wrapper">
      <h1>Hello, {name}</h1>
      <Link
        to={{
          pathname: "/food-form",
          state: { id: props.match.params.id }
        }}
      >
        Add Food
        <br />
      </Link>
      {childFood.map((e, i) => {
        return (
          <div key={i}>
            <Food food={e} index={i} />
          </div>
        );
      })}
    </div>
  );
}

export default ChildProfile;
