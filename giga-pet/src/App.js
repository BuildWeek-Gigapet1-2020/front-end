import React, { useState } from "react";
import "./App.css";
import Login from "./components/Authentication/Login";
import Signup from "./components/Authentication/Signup";
import { Route, withRouter } from "react-router-dom";
import ProtectedRoute from "./components/utils/ProtectedRoute";
import FoodList from "./components/FoodList/FoodList";
import ChildProfile from "./components/Users/ChildProfile";
import ChildForm from "./components/forms/ChildForm";
import ParentProfile from "./components/Users/ParentProfile";
import FoodForm from "./components/forms/FoodForm";
<<<<<<< HEAD
// import styled, { css } from 'styled-components';
=======
import LoginSignup from "./components/Authentication/LoginSignup";
import Parent from "./components/Users/Parents/Parent";
// import Child from "./components/Users/Children/Child";
>>>>>>> bab95936ae4b68a386398499d98041faec663254

function App() {
  const [id] = useState();
  const [child, setChild] = useState([]);

  return (
    <div className="wrapper">
      <div className="App">
        <Route exact path="/" component={LoginSignup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <ProtectedRoute
          exact
          path="/food-list"
          render={props => <FoodList {...props} />}
        />
        <ProtectedRoute
          exact
          path="/child/:id"
          render={props => (
            <ChildProfile
              {...props}
              id={id}
              setChild={setChild}
              child={child}
            />
          )}
        />
        <ProtectedRoute
          exact
          path="/add-child"
          render={props => <ChildForm {...props} />}
        />
        <ProtectedRoute
          exact
          path="/parent-profile"
          render={props => (
            <ParentProfile
              {...props}
              id={id}
              setChild={setChild}
              child={child}
            />
          )}
        />
        <ProtectedRoute
          exact
          path="/food-form"
          render={props => <FoodForm {...props} />}
        />
        {/* <ProtectedRoute exact path="/parent" component={Parent} /> */}
      </div>
    </div>
  );
}

export default withRouter(App);
