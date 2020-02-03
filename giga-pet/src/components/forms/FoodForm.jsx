import React, { useEffect, useState } from "react";
import api from "../utils/api";

function FoodForm() {
  const [food, setFood] = useState({
    name: "",
    type: "",
    servings: 0
  })

  const handleChange = event => {
    setFood({ ...food, [event.target.food]: event.target.value })
  }

  const handleSubmit = event => {
    api()
        .POST("/api/foods")
        .then( res => (console.log(res.data)) )
        .catch(error => console.log("Error", error));
  }


  // create onChange for form below
    
  // create onSubmit for form below

  // add form validation
  //    - for food name make sure the text typed in is a string and not a number

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Food Name" value={food.name} onChange={handleChange}/>

      <select name="type" value={food.type} onChange={handleChange}>
        <option value="fruit"></option>
        <option value="vegetable"></option>
        <option value="whole-grains"></option>
        <option value="meat"></option>
        <option value="dairy"></option>
        <option value="fats-oils"></option>
        <option value="treats"></option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );
}

export default FoodForm;
