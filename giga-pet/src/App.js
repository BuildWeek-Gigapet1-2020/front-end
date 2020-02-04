import React, { useState } from "react";
import "./App.css";
import Login from "./components/Authentication/Login";
import Signup from "./components/Authentication/Signup";
import { Route, withRouter } from "react-router-dom";
import FoodList from "./components/FoodList/FoodList";
import ChildProfile from "./components/Users/ChildProfile";
import ChildForm from "./components/forms/ChildForm";
import ParentProfile from "./components/Users/ParentProfile";
import FoodForm from "./components/forms/FoodForm";
import LoginSignup from "./components/Authentication/LoginSignup";
import Parent from "./components/Users/Parents/Parent";
// import Child from "./components/Users/Children/Child";

function App() {
  const [id] = useState();
  const [child, setChild] = useState([]);

  return (
    <div className="wrapper">
      <div className="App">
        <Route exact path="/" component={LoginSignup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/food-list" component={FoodList} />
        <Route
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
        <Route exact path="/add-child" component={ChildForm} />
        <Route exact path="/parent-profile" component={ParentProfile} />
        <Route exact path="/food-form" component={FoodForm} />
        <Route exact path="/parent" component={Parent} />
      </div>
    </div>
  );
}

export default withRouter(App);
