import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import FoodForm from "../forms/FoodForm";
// import Child from "./Children/Child";
import api from "../utils/api";
import Food from "../FoodList/Food";

function ChildProfile(props) {
  console.log("Child profile props", props);
  console.log("child profile props ID", props.match.params.id);
  console.log("child profile props NAME", props.history.location.state.name);
  const [child, setChild] = useState([
    // child: {
    //   id: 0,
    //   name: "",
    //   monster_id: 1,
    //   parent_id: 1,
    //   co_parent_id: null
    // },
    // child_food: [
    //   {
    //     id: 1,
    //     name: "",
    //   }
    // ]
  ]);

  const name = props.history.location.state.name;
  const id = props.match.params.id;

  useEffect(() => {
    api()
      .get(`/api/child/${id}`)
      .then(res => {
        console.log("useEffect ChildProfile", res.data);
        setChild(res.data.child_food);
      });
  }, []);

  // const childFood = child.child_food;
  return (
    <div className="wrapper">
      {/* <Child /> */}

      <h1>Hello {name}</h1>
      <h2></h2>
      {/* 1) drop down for selecting: recent, monthly, weekly */}
      {/* 2) checkbox to sort by food type: fruit, vegetable, whole-grains, meat, dairy, fats-oils, treats */}
      {/* 3) list of food with edit and delete button next to each item */}
      {child.map((e, i) => {
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
          state: { id: id }
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
