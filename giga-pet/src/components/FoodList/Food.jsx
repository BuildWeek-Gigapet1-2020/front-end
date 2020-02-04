import React from "react";

function Food(props) {
  console.log("Food component props", props);
  return (
    <div>
      <h1>Food Name: {props.food.name}</h1>
      <h2>Food Type: {props.food.type}</h2>
      <h3>Serving Size: {props.food.servings}</h3>
    </div>
  );
}

export default Food;
