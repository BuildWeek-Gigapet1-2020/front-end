import React, { useState } from "react";
// import api from "../utils/api";

import { useDispatch } from "react-redux";
import { newFood } from "../../redux/actions/foodActions";
// import { NEW_FOOD_POST } from "../../redux/actions/types";

function FoodForm(props) {
  console.log("FoodForm props", props);

  // const food = useSelector(state => state.foodReducer);
  const dispatch = useDispatch();

  // const id = props.location.state.id;
  const [food, setFood] = useState({
    name: "",
    child_id: props.location.state.id,
    type: "fruit",
    servings: 0
  });
  // const id = props.location.state.id;

  const handleChange = event => {
    setFood({ ...food, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(newFood(food));
    props.history.push(`/child/${food.child_id}`);
    // console.log(food)
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

// function mapStateToProps(state) {
//   console.log("newFood state", state);
//   return console.log("{formData: state.childReducer}", {
//     formData: state.foodReducer
//   });
// }

export default FoodForm;
