import React from "react";
import "./App.css";
import Login from "./components/Authentication/Login";
import Signup from "./components/Authentication/Signup";
import { Route, withRouter } from "react-router-dom";
import FoodList from "./components/FoodList/FoodList";
import ChildProfile from "./components/Profiles/ChildProfile";
import ChildForm from "./components/forms/ChildForm";
import ParentProfile from "./components/Profiles/ParentProfile";
import FoodForm from "./components/forms/FoodForm";
import LoginSignup from "./components/Authentication/LoginSignup";

function App() {
  return (
    <div className="wrapper">
      <div className="App">
        <Route exact path="/" component={LoginSignup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/foodlist" component={FoodList} />
        <Route exact path="/childprofile" component={ChildProfile} />
        <Route exact path="/add-child" component={ChildForm} />
        <Route exact path="/parent-profile" component={ParentProfile} />
        <Route exact path="/food-form" component={FoodForm} />
      </div>
    </div>
  );
}

export default withRouter(App);
