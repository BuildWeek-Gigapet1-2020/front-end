import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// import { connect } from "react-redux";
import Food from "./Food";
import { loadFood } from "../../redux/actions/foodActions";

function FoodList(props) {
  console.log(props);
  const child = useSelector(state => state.childReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFood(props));
  }, [dispatch]);

  return <>{console.log(child)}</>;
}

export default FoodList;
