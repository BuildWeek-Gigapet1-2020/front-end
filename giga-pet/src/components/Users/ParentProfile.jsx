import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Parent from "./Parents/Parent";
import api from "../utils/api";
import Monster from './Children/Monster';
import Child from "./Children/Child";

function ParentProfile(props) {
  const [child, setChild] = useState([]);

  useEffect(() => {
    api()
      .get('/api/child')
      .then(res => setChild(res.data))
      .catch(err => console.log('Error: ', err))
  }, [])

  console.log("Parent Profile", props);
  return (
    <div className="wrapper">
      <Parent />

      {/* 
        1) display each child that belongs to the current parent logged in
        2) add new child button -> takes user to child form
      */}

      {child.map((e, i) => {
        return (
          <div className="child-info">
            <Child key={i} child={e.name} />
            <Monster key={i} monster={e.monster_id} />
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
