import React from "react";
// import { connect } from "react-redux";

function FoodList({ food }) {
  const emptyMessage = <p>There are no foods in your list.</p>;

  const foodList = <p>empty2</p>;

  return <div>{food.length === 0 ? emptyMessage : foodList}</div>;
}

// FoodList.propTypes = {
//   food: React.propTypes.array.isRequired
// };

export default FoodList;
