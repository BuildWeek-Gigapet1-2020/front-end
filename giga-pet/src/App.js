import React from 'react';
import './App.css';
import Login from './components/Authentication/Login';
import SignUp from './components/Authentication/SignUp';
import { Route, withRouter, Link } from 'react-router-dom';


function App() {

  return (
    <div className="wrapper">
      <Link to='/login'>Log In</Link>
      <Link to='/signup'>Sign Up</Link>

      <div className="App">
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={SignUp} />
      </div>
    </div>
  );
}

export default App;
