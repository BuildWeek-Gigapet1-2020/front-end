import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import FoodForm from "../forms/FoodForm";
// import Child from "./Children/Child";
import Food from "../FoodList/Food";

import moment from "moment";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { loadFood } from "../../redux/actions/foodActions";
import { loadChildren } from "../../redux/actions/childActions";

function ChildProfile(props) {
  console.log("Child profile props", props);

  const childList = useSelector(state => state.foodReducer);
  const dispatch = useDispatch();

  const child = childList.child;
  const childFood = childList.child_food;

  // const id = props.location.state.id;
  const name = props.location.state.name;

  console.log("child", child);
  console.log("childFood", childFood);

  useEffect(() => {
    dispatch(loadFood(props));
    dispatch(loadChildren(props));
    console.log("ran");
  }, [dispatch, props]);

  const [type, setType] = useState([]);

  const [date, setDate] = useState({
    current_selection: ""
  });

  // function fetchData() {
  //   dispatch(loadChildren(props));
  // }

  const handleSubmit = event => {
    event.preventDefault();

    console.log("Food: ", childFood);
    let results = [];
    for (let i = 0; i < type.length; i++) {
      for (let j = 0; j < childFood.length; j++) {
        if (type[i] === childFood[j].type) {
          results.push(childFood[j]);
        }
      }
    }
    dispatch(loadFood(results));
    setType([]);
  };

  const handleChange = event => {
    setDate({ ...date, [event.target.name]: event.target.value });
    setType([...type, event.target.value]);
  };

  // console.log("FOOOOOOOD", type);
  /*
    1. loop over the last week of dates and push to new array *
    2. loop over child's food
    3. using the food's created_at, loop over the new array of dates and see if it includes any of those dates
    4. Add those to a new array and set that to state

    possibly implement a switch case for rendering food to DOM
    if selection is weekly, if case is true, run code - if daily, etc...

    maybe eliminate weekly function and replacing with switch case
  */

  // console.log("Moment date: ", moment().utc().format("YYYY-MM-DD"));

  let newDailyArray = [];
  let newWeeklyArray = [];
  let newMonthlyArray = [];
  let foodDateArray = [];

  const weekly = () => {
    if (date.current_selection === "weekly") {
      //Start weekly check code
      for (let index = 0; index <= 6; index++) {
        newWeeklyArray.push(
          moment()
            .subtract(index, "days")
            .utc()
            .format("YYYY-MM-DD")
        );
      }
      console.log("Dates: ", newWeeklyArray);
      let filteredWeeklyArray = [];
      foodDateArray.filter(e => {
        filteredWeeklyArray.push(newWeeklyArray.includes(e));
      });
      console.log("Filtered: ", filteredWeeklyArray);
      //end weekly check code
    } else if (date.current_selection === "daily") {
      newDailyArray.push(moment().format("YYYY-MM-DD"));
      console.log("Dates: ", newDailyArray);
    } else if (date.current_selection === "monthly") {
      for (let index = 0; index <= 29; index++) {
        newMonthlyArray.push(
          moment()
            .subtract(index, "days")
            .format("YYYY-MM-DD")
        );
      }
      console.log("Dates: ", newMonthlyArray);
    }
  };

  return (
    <ContainerDiv>
      {/* <Child /> */}
      {/* {console.log("food", food)} */}
      {/* {console.log("child", child)} */}
      <h1>Hello, {name}!</h1>
      <img
        src="https://cdn3.iconfinder.com/data/icons/monsters-3/66/69-512.png"
        alt="trash"
        width="150px"
      />{" "}
      <br /> <br />
      <Link
        to={{
          pathname: "/food-form",
          state: { id: props.match.params.id }
        }}
        className="food-button"
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
      <br />
      <form onSubmit={handleSubmit}>
        <select
          name="current_selection"
          value={date.current_selection}
          onChange={handleChange}
          className="dropdown"
        >
          <option value="daily" label="Daily" />
          <option value="weekly" label="Weekly" />
          <option value="monthly" label="Monthly" />
        </select>

        <label className="checkbox-styles">
          <input
            type="checkbox"
            label="Fruit"
            name="fruit"
            value="fruit"
            onChange={handleChange}
          />{" "}
          Fruit
        </label>
        <label className="checkbox-styles">
          <input
            type="checkbox"
            label="Vegetable"
            name="vegetable"
            value="vegetable"
            onChange={handleChange}
          />{" "}
          Vegetable
        </label>
        <label className="checkbox-styles">
          <input
            type="checkbox"
            label="Whole Grains"
            name="whole-grains"
            value="whole-grains"
            onChange={handleChange}
          />{" "}
          Whole Grains
        </label>
        <label className="checkbox-styles">
          <input
            type="checkbox"
            label="Meat"
            name="meat"
            value=""
            value="meat"
            onChange={handleChange}
          />{" "}
          Meat
        </label>
        <label className="checkbox-styles">
          <input
            type="checkbox"
            label="Dairy"
            name="dairy"
            value="dairy"
            onChange={handleChange}
          />{" "}
          Dairy
        </label>
        <label className="checkbox-styles">
          <input
            type="checkbox"
            label="Fats/Oils"
            name="fats-oils"
            value="fats-oils"
            onChange={handleChange}
          />{" "}
          Fats/Oils
        </label>
        <label className="checkbox-styles">
          <input
            type="checkbox"
            label="Treats"
            name="treats"
            value="treats"
            onChange={handleChange}
          />{" "}
          Treats
        </label>
        <button type="submit">Search</button>
      </form>
      {weekly()}
      {/* {console.log(date)} */}
      {/* 2) checkbox to sort by food type: fruit, vegetable, whole-grains, meat, dairy, fats-oils, treats */}
      {/* 3) list of food with edit and delete button next to each item */}
      {childFood.map((e, i) => {
        return (
          <div key={i}>
            <Food food={e} index={i} />
          </div>
        );
      })}
      {/* 4) add new food button */}
      {/* 5) display a picture of the child's monster choice */}
      {/* <Route exact path="/add-food"></Route>
      <Link to="/add-food" component={FoodForm}>
        Submit
      </Link> */}
    </ContainerDiv>
  );
}

export default ChildProfile;

const ContainerDiv = styled.div``;
