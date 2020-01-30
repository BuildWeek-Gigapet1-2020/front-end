import React from "react";
import { connect } from "react-redux";
import FoodList from "./FoodList";

function Food(props) {
  return <div>hello</div>;
}

// Food.propTypes = {
//   food: React.propTypes.array.isRequired
// };

function mapStateToProps(state) {
  console.log(state);
  return {
    // food: state.food
  };
}

export default connect(mapStateToProps)(Food);
