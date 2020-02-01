import React from "react";
// import api from "../utils/api";

function FoodForm() {
  //   useEffect(() => {
  //     api()
  //       .get("/api/")
  //       .then()
  //       .catch();
  //   }, []);

  // create onChange for form below

  // create onSubmit for form below

  // add form validation
  //    - for food name make sure the text typed in is a string and not a number

  return (
    <form>
      <input type="text" name="food-name" placeholder="Food Name" />

      <select name="food-type">
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
