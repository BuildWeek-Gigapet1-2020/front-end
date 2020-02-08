import React, { useState } from "react";
import "./App.css";
import Login from "./components/Authentication/Login";
import Signup from "./components/Authentication/Signup";
import { Route, withRouter } from "react-router-dom";
import ProtectedRoute from "./components/utils/ProtectedRoute";
import ChildProfile from "./components/Users/ChildProfile";
import ChildForm from "./components/forms/ChildForm";
import ParentProfile from "./components/Users/ParentProfile";
import FoodForm from "./components/forms/FoodForm";
import LoginSignup from "./components/Authentication/LoginSignup";
// import Parent from "./components/Users/Parents/Parent";
import EditFood from "./components/FoodList/EditFood";
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
        <ProtectedRoute
          exact
          path="/edit-food/:id"
          render={props => <EditFood {...props} id={id} />}
        />
        {/* <ProtectedRoute exact path="/parent" component={Parent} /> */}
      </div>
    </div>
  );
}

export default withRouter(App);
