import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import FoodForm from "../forms/FoodForm";
// import Child from "./Children/Child";
import Food from "../FoodList/Food";

import moment from "moment";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { loadFood, sortFood } from "../../redux/actions/foodActions";
import { loadChild } from "../../redux/actions/childActions";

import orange from "../../images/mon-orange-two.png";
import red from "../../images/mon-red-four.png";
import green from "../../images/mon-teal-one.png";
import purple from "../../images/mon-purple.png";

function ChildProfile(props) {
  console.log("Child profile props", props);

  const childList = useSelector(state => state.foodReducer);
  const childProfile = useSelector(state => state.childReducer);
  const dispatch = useDispatch();

  const child_id = childList.child.child.id;
  let childFood = childList.child.child_food;
  const name = childProfile.child.child.name;
  const monsterId = childProfile.child.child.monster_id;
  // const id = props.location.state.id;
  // const name = props.location.state.name;

  console.log("child_id", child_id);
  console.log("childList", childList);
  console.log("childFood", childFood);
  console.log("Monster ID", childProfile.child.child.monster_id);
  console.log("child2 from childReducer", childProfile.child.child.name);

  useEffect(() => {
    dispatch(loadFood(props));
    dispatch(loadChild(props));
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

    console.log("childList in handleSubmit 1", childList);
    let results = [];
    for (let i = 0; i < type.length; i++) {
      for (let j = 0; j < childFood.length; j++) {
        if (type[i] === childFood[j].type) {
          results.push(childFood[j]);
        }
      }
    }
    dispatch(sortFood(results));
    // childFood = childList.sorted_food;
    console.log("childFood handleSubmit", childFood);
    setType([]);
  };

  const handleChange = event => {
    setDate({ ...date, [event.target.name]: event.target.value });
    setType([...type, event.target.value]);
  };

  function resetList() {
    window.location.reload(false);
  }
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
      <Link to="/parent-profile">
        <button className="btn-parent">&lt; Parent Profile</button>
      </Link>
      <h1>Hello, {name}!</h1>
      <img src={monsterId == 1 ? orange : null} className="monster" alt="" />
      <img src={monsterId == 2 ? red : null} className="monster" alt="" />
      <img src={monsterId == 3 ? green : null} className="monster" alt="" />
      <img src={monsterId == 4 ? purple : null} className="monster" alt="" />

      <Link
        to={{
          pathname: "/food-form",
          state: { id: props.match.params.id }
        }}
        className="food-button"
      >
        + Add Food
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

        <div className="check-sort">
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
        </div>
        <button type="submit">Search</button>
      </form>
      <button type="button" onClick={resetList}>
        Reset
      </button>
      {weekly()}
      {/* {console.log(date)} */}
      {/* 2) checkbox to sort by food type: fruit, vegetable, whole-grains, meat, dairy, fats-oils, treats */}
      {/* 3) list of food with edit and delete button next to each item */}
      <div className="food-container">
        {childFood.map((e, i) => {
          return (
            <div key={i} className="single-food">
              <Food food={e} index={i} />
            </div>
          );
        })}
      </div>
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

const ContainerDiv = styled.div`
  .monster {
    width: 15%;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 22%;

    select {
      width: 50%;
    }

    .check-sort {
      display: grid;
      text-align: left;
      grid-template-columns: 50% 50%;

      .checkbox {
        text-align: left;
      }
    }
  }
  .food-container {
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    margin-top: 3%;

    .single-food {
      background-color: rgb(255, 255, 255, 0.35);
      padding: 0% 0% 4% 0%;
      margin: 5%;
      border-radius: 25px;
      font-size: 0.95rem;
    }
  }
`;
