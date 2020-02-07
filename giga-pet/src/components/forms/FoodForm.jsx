import React, { useState } from "react";

import { connect } from "react-redux";
import { newFood } from "../../redux/actions/childActions";
// import { NEW_FOOD_POST } from "../../redux/actions/types";

function FoodForm(props) {
  console.log("FoodForm props", props);
  const [food, setFood] = useState({
    name: "",
    child_id: props.location.state.id,
    type: "fruit",
    servings: 0
  });

  const id = props.location.state.id;
  // // const [foodFormResult, setFoodFormResult] = useState({
  // //   name: "",
  // //   child_id: 0,
  // //   type: "",
  // //   servings: 0
  // // });
  // const id = props.location.state.id;

  const handleChange = event => {
    setFood({ ...food, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.newFood(food, props);
    // props.history.push(`/api/child/${props.formData.child_id}`);
    //   // api()
    //   //   .post("/api/foods", food)
    //   //   .then(res => {
    //   //     console.log("FoodForm res.data", res.data);
    //   //     // console.log("FoodForm food", food);
    //   //     // setFoodFormResult(res.data);
    //   //     // console.log("foodFormResult", foodFormResult);
    //   //     // props.history.push(`/child/${food.child_id}`);
    //   //   })
    //   //   .catch(error => console.log("Error", error));
  };

  // props.history.push(`/api/child/${id}`);
  // create onChange for form below

  // create onSubmit for form below

  // add form validation
  //    - for food name make sure the text typed in is a string and not a number

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

function mapStateToProps(state) {
  console.log("newFood state", state);
  return console.log("{formData: state.childReducer}", {
    formData: state.childReducer
  });
  // return {
  //   console.log('mapstatetoprops test'),
  //   // name: state.childReducer.name,
  //   // childId: state.childReducer.child_id,
  //   // type: state.childReducer.type,
  //   // servings: state.childReducer.servings
  // };
}

// const mapDispatchToProps = dispatch => ({
//   handleSubmitToProps: dispatch({ type: NEW_FOOD_POST })
// });

export default connect(mapStateToProps, { newFood })(FoodForm);
