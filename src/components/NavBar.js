import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = () => (
    <nav>
        <NavLink exact to="/">Home</NavLink> | <NavLink to="/add-question">Add</NavLink> | <NavLink to="/play">Play</NavLink>
    </nav>
);

export default NavBar;