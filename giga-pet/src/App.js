import React from "react";
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

function App() {
  return (
    <div className="wrapper">
      <div className="App">
        <Route exact path="/" component={LoginSignup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/food-list" component={FoodList} />
        <Route exact path="/child-profile" component={ChildProfile} />
        <Route exact path="/add-child" component={ChildForm} />
        <Route exact path="/parent-profile" component={ParentProfile} />
        <Route exact path="/food-form" component={FoodForm} />
        <Route exact path="/parent" component={Parent} />
      </div>
    </div>
  );
}

export default withRouter(App);
