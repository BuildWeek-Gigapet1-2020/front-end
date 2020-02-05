import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import FoodForm from "../forms/FoodForm";
// import Child from "./Children/Child";
import api from "../utils/api";
import Food from "../FoodList/Food";
import moment from "moment";

function ChildProfile(props) {
  console.log("Child profile props", props);
  // console.log("child profile props ID", props.match.params.id);
  // console.log("child profile props NAME", props.history.location.state.name);
  const [food, setFood] = useState([
    // { child: { id: 0, name: "", monster_id: 0, parent_id: 0 } }
  ]);

  const [child, setChild] = useState([]);

  const [date, setDate] = useState({
    current_selection: ""
  });
  // const name = props.history.location.state.name;
  // const id = props.match.params.id;

  useEffect(() => {
    api()
      .get(`/api/child/${props.match.params.id}`)
      .then(res => {
        console.log("useEffect ChildProfile", res.data);
        setFood(res.data.child_food);
        setChild(res.data.child);
      });
  }, []);



  // const childArray = child.pop();
  // console.log("childArray", childArray);
  // const childArrayPlusName = childArray.child_id;
  // console.log("childArrayPlusId", childArrayPlusId);
  // const childFood = child.child_food;

  const handleChange = event => {
    setDate({ ...date, [event.target.name]: event.target.value });
  };

  const weekly = () => {
    let newArray = []
    if (date.current_selection === "weekly") {
  for (let index = 0; index <= 6; index++) {
   newArray.push(moment().subtract(index, 'days').calendar());
   return newArray;
  }
  console.log("weekly function newArray", newArray);
  }
  
}

console.log(moment().subtract(4, 'days').calendar());


  

  return (
    <div className="wrapper">
      {/* <Child /> */}

      {console.log("food", food)}
      {console.log("child", child)}
      <h1>Hello {child.name}</h1>
      <Link
        to={{
          pathname: "/food-form",
          state: { id: props.match.params.id }
        }}
      >
        Add Food
      </Link>
      {/* <h2></h2> */}
      {/* 1) drop down for selecting: recent, monthly, weekly */}
      
      {/* 
          1. Create dropdown with options.
          2. Create handleChange, set value of dropdown to state.
          3. Type Daily/Weekly/Monthly.
            Moment.js, 
      */}

        <select 
          name="current_selection" 
          value={date.current_selection} 
          onChange={handleChange}
          >
          <option value="daily" label="Daily" />
          <option value="weekly" label="Weekly" />
          <option value="monthly" label="Monthly" />
        </select>

        {weekly()}

        {console.log(date)}
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

      {/* 5) display a picture of the child's monster choice */}

      {/* <Route exact path="/add-food"></Route>
      <Link to="/add-food" component={FoodForm}>
        Submit
      </Link> */}
    </div>
  );
}

export default ChildProfile;
