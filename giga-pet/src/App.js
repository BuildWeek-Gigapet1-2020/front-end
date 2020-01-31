import React from "react";
import "./App.css";
import Login from "./components/Authentication/Login";
import SignUp from "./components/Authentication/SignUp";
import { Route, withRouter, Link } from "react-router-dom";
import FoodList from "./components/FoodList/FoodList";
import ChildProfile from "./components/Profiles/ChildProfile";
import ChildForm from "./components/forms/ChildForm";

function App() {
  return (
    <div className="wrapper">
      <Link to="/login">Log In</Link>
      <Link to="/signup">Sign Up</Link>

      <div className="App">
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/foodlist" component={FoodList} />
        <Route exact path="/childprofile" component={ChildProfile} />
        <Route exact path="/add-child" component={ChildForm} />
      </div>
    </div>
  );
}

export default withRouter(App);
