import React from "react";
import { connect } from "react-redux";
import Food from "./Food";

function FoodList(props) {
  return (
    <>
      <Food />

      {/* {props.foodArray.map(entry => {
        return <Food />;
      })} */}
    </>
  );
}

function mapStateToProps(state) {
  console.log("foodList State2", state);
  return {
    foodArray: state.foodReducer.foodArray
  };
}
export default connect(mapStateToProps)(FoodList);
