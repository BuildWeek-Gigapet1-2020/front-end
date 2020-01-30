import React from 'react';
import { Route, Link } from 'react-router-dom';
import Parent from '../Users/Parent';

function ParentProfile() {
    return (
        <div className="wrapper">
            <Parent />

            <Route exact path="/child/:id"></Route>

            <Link to="/child/:id" ></Link>
        </div>
    )
}

export default ParentProfile;
