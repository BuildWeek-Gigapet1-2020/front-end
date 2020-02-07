import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Parent from "./Parents/Parent";
import api from "../utils/api";
// import Monster from './Children/Monster';
import Child from "./Children/Child";
// import ChildProfile from "./ChildProfile";

import { useSelector, useDispatch } from "react-redux";

import { connect } from "react-redux";
import { loadChild } from "../../redux/actions/childActions";

function ParentProfile(props) {
  console.log("Parent Profile props", props);
  console.log("test console log TEST TEST TEST");

  const child = useSelector(state => state.childReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadChild());
  }, []);
  // const [child, setChild] = useState([
  //   {
  //     id: 0,
  //     name: "",
  //     monster_id: 0,
  //     parent_id: 0,
  //     co_parent_id: null
  //   }
  // ]);

  // useEffect(() => {
  //   const load = () => {
  //     return props.loadChild();
  //   };
  //   setChild(load);
  // }, []);
  console.log("child from ParentProfile", child);

  return (
    <div className="wrapper">
      <Parent />

      {/* 
        1) display each child that belongs to the current parent logged in
        2) add new child button -> takes user to child form
      */}

      {child &&
        child.map((entry, index) => {
          // console.log("E", e);
          // console.log("I", i);
          return (
            <div className="child-info" key={index}>
              {/* {console.log("I number 2", i)} */}

              <Child child={entry} index={index} />
            </div>
          );
        })}

      {/* <Route exact path="/child/:id"></Route>
            <Link to="/child/:id" ></Link> */}

      <Link to="add-child">Add Child</Link>
    </div>
  );
}

// function mapStateToProps(state) {
//   console.log("loadChild state", state);
//   return console.log("{loadChild Data: state.childReducer}", {
//     loadChild: state.childReducer
//   });
// }

export default ParentProfile;
