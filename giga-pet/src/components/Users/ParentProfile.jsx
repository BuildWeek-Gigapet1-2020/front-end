import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Parent from "./Parents/Parent";
import api from "../utils/api";
// import Monster from './Children/Monster';
import Child from "./Children/Child";
// import ChildProfile from "./ChildProfile";

function ParentProfile(props) {
  console.log("Parent Profile", props);

  const [child, setChild] = useState([
    {
      id: 0,
      name: "",
      monster_id: 0,
      parent_id: 0,
      co_parent_id: null
    }
  ]);

  useEffect(() => {
    api()
      .get("/api/child")
      .then(res => {
        setChild(res.data);
      })
      .catch(err => console.log("Error: ", err));
  }, []);
  console.log("child from ParentProfile", child);

  return (
    <div className="wrapper">
      <Parent />

      {/* 
        1) display each child that belongs to the current parent logged in
        2) add new child button -> takes user to child form
      */}

      {child.map((entry, index) => {
        // console.log("E", e);
        // console.log("I", i);
        return (
          <div className="child-info">
            {/* {console.log("I number 2", i)} */}

            <Child key={index} child={entry} index={index} />
          </div>
        );
      })}

      {/* <Route exact path="/child/:id"></Route>
            <Link to="/child/:id" ></Link> */}

      <Link to="add-child">Add Child</Link>
    </div>
  );
}

export default ParentProfile;
