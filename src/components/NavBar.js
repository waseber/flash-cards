import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch, Link} from 'react-router-dom';

const NavBar = () => (
    <nav>
        <Link to="/add-question">Add</Link> | <Link to="/play">Play</Link>
    </nav>
);

export default NavBar;