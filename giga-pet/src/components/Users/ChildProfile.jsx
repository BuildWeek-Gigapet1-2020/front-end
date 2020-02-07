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
      <img
        src="https://cdn3.iconfinder.com/data/icons/monsters-3/66/69-512.png"
        alt="trash"
        width="150px"
      />
      <br />
      <Link
        to={{
          pathname: "/food-form",
          state: { id: props.match.params.id }
        }}
      >
        Add Food
        <br />
      </Link>
      <select>
        <option value="daily" label="Daily" />
        <option value="weekly" label="Weekly" />
        <option value="monthly" label="Monthly" />
      </select>
      <br />
      <input type="checkbox" label="Fruit" /> Fruit
      <input type="checkbox" label="Vegetable" /> Vegetable
      <input type="checkbox" label="Whole Grains" /> Whole Grains
      <input type="checkbox" label="Meat" /> Meat
      <input type="checkbox" label="Dairy" /> Dairy
      <input type="checkbox" label="Fats/Oils" /> Fats/Oils
      <input type="checkbox" label="Treats" /> Treats
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
