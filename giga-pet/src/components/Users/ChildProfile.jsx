import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import FoodForm from "../forms/FoodForm";
// import Child from "./Children/Child";
import api from "../utils/api";
import Food from "../FoodList/Food";

function ChildProfile(props) {
  console.log("Child profile props", props);
  // console.log("child profile props ID", props.match.params.id);
  // console.log("child profile props NAME", props.history.location.state.name);
  const [food, setFood] = useState([
    // { child: { id: 0, name: "", monster_id: 0, parent_id: 0 } }
  ]);

  const [child, setChild] = useState([]);

  // const name = props.history.location.state.name;
  // const id = props.match.params.id;

  useEffect(() => {
    api()
      .get(`/api/child/${props.match.params.id}`)
      .then(res => {
        console.log("useEffect ChildProfile", res.data);
        setFood(res.data.child_food);
      });
  }, []);

  // const childArray = child.pop();
  // console.log("childArray", childArray);
  // const childArrayPlusName = childArray.child_id;
  // console.log("childArrayPlusId", childArrayPlusId);
  // const childFood = child.child_food;
  return (
    <div className="wrapper">
      {/* <Child /> */}

      {console.log("child", food)}
      {/* <h1>Hello {childArray.name}</h1> */}
      <h2></h2>
      {/* 1) drop down for selecting: recent, monthly, weekly */}
      {/* 2) checkbox to sort by food type: fruit, vegetable, whole-grains, meat, dairy, fats-oils, treats */}
      {/* 3) list of food with edit and delete button next to each item */}
      {food.map((e, i) => {
        return (
          <div>
            <Food key={i} food={e} index={i} />
          </div>
        );
      })}
      {/* 4) add new food button */}
      <Link
        to={{
          pathname: "/food-form",
          state: { id: props.match.params.id }
        }}
      >
        Add Food
      </Link>
      {/* 5) display a picture of the child's monster choice */}

      {/* <Route exact path="/add-food"></Route>
      <Link to="/add-food" component={FoodForm}>
        Submit
      </Link> */}
    </div>
  );
}

export default ChildProfile;
