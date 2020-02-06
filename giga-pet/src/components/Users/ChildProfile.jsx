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

  /* 
    1. loop over the last week of dates and push to new array *
    2. loop over child's food
    3. using the food's created_at, loop over the new array of dates and see if it includes any of those dates
    4. Add those to a new array and set that to state

    possibly implement a switch case for rendering food to DOM
    if selection is weekly, if case is true, run code - if daily, etc...

    maybe eliminate weekly function and replacing with switch case
  */



  console.log("Moment date: ", moment().utc().format("YYYY-MM-DD"));

  let newDailyArray = [];
  let newWeeklyArray = [];
  let newMonthlyArray = [];
  let foodDateArray = [];

  food.forEach((el) => {
    foodDateArray.push(el.created_at.slice(0, 10));
  })

  const weekly = () => {
    if (date.current_selection === "weekly") {
      //Start weekly check code
      for (let index = 0; index <= 6; index++) {
        newWeeklyArray.push(moment().subtract(index, 'days').utc().format("YYYY-MM-DD"));
      }
      console.log("Dates: ", newWeeklyArray);

      let filteredWeeklyArray = [];

      foodDateArray.filter((e) => {
        filteredWeeklyArray.push(newWeeklyArray.includes(e));
      })

      console.log("Filtered: ", filteredWeeklyArray);
      //end weekly check code
    } else if (date.current_selection === "daily") {
      newDailyArray.push(moment().format("YYYY-MM-DD"));
      console.log("Dates: ", newDailyArray);

    } else if (date.current_selection === "monthly") {
      for (let index = 0; index <= 29; index++) {
        newMonthlyArray.push(moment().subtract(index, 'days').format("YYYY-MM-DD"));
      }
      console.log("Dates: ", newMonthlyArray);
    }
  }

  return (
    <div className="wrapper">
      {/* <Child /> */}

      {console.log("food", food)}
      {console.log("child", child)}
      <h1>Hello, {child.name}!</h1>

      <img src="https://cdn3.iconfinder.com/data/icons/monsters-3/66/69-512.png" alt="trash" width="150px" /> <br /> <br />

      <Link
        to={{
          pathname: "/food-form",
          state: { id: props.match.params.id }
        }}
      >
        Add Food
        <br />
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

      <br />

      <input type="checkbox" label="Fruit" /> Fruit
      <input type="checkbox" label="Vegetable" /> Vegetable
      <input type="checkbox" label="Whole Grains" /> Whole Grains
      <input type="checkbox" label="Meat" /> Meat
      <input type="checkbox" label="Dairy" /> Dairy
      <input type="checkbox" label="Fats/Oils" /> Fats/Oils
      <input type="checkbox" label="Treats" /> Treats

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
