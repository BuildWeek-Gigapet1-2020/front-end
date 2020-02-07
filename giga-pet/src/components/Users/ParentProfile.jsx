import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Parent from "./Parents/Parent";
// import Monster from './Children/Monster';
import Child from "./Children/Child";

import { useSelector, useDispatch } from "react-redux";
import { loadChild } from "../../redux/actions/childActions";

function ParentProfile(props) {
  const child = useSelector(state => state.childReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadChild());
  }, []);

  console.log("child from ParentProfile", child);

  return (
    <div className="wrapper">
      <Parent />

      {child &&
        child.map((entry, index) => {
          return (
            <div className="child-info" key={index}>
              <Child child={entry} index={index} />
            </div>
          );
        })}

      <Link to="add-child">Add Child</Link>
    </div>
  );
}

export default ParentProfile;
