import React from "react";
import { connect } from "react-redux";
function FoodList(props) {
  const emptyMessage = <p>There are no foods in your list.</p>;
  const foodList = <p>empty2</p>;
  return (
    <>
      <div>{props.name}</div>
      <div>{props.type}</div>
    </>
  );
}
// FoodList.propTypes = {
//   food: React.propTypes.array.isRequired
// };
function mapStateToProps(state) {
  console.log("foodList State2", state);
  return {
    name: state.foodReducer.name,
    type: state.foodReducer.type
  };
}
export default connect(mapStateToProps)(FoodList);
