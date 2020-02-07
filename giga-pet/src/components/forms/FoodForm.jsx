import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { newFood } from "../../redux/actions/foodActions";

function FoodForm(props) {
  console.log("FoodForm props", props);

  const dispatch = useDispatch();

  const [food, setFood] = useState({
    name: "",
    child_id: props.location.state.id,
    type: "fruit",
    servings: 0
  });

  const handleChange = event => {
    setFood({ ...food, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(newFood(food));
    props.history.push(`/child/${food.child_id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Food Name"
        value={food.name}
        id="food"
        onChange={handleChange}
      />

      <input
        type="number"
        name="servings"
        placeholder="Food Servings"
        value={food.servings}
        id="servings"
        onChange={handleChange}
      />

      <select name="type" value={food.type} onChange={handleChange} id="type">
        <option value="fruit">fruit</option>
        <option value="vegetable">vegetable</option>
        <option value="whole-grains">whole-grain</option>
        <option value="meat">meat</option>
        <option value="dairy">dairy</option>
        <option value="fats-oils">fats-oils</option>
        <option value="treats">treats</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );
}

export default FoodForm;
