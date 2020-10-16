import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = (count) => {
    console.log("count ", count)
    let PlayLink
    if(count.count>0){
        PlayLink = <span> | <NavLink to="/play">Play</NavLink></span>
    }
    return(
        <nav>
            <NavLink exact to="/">Home</NavLink> | <NavLink to="/add-question">Add</NavLink>{PlayLink}
        </nav>
    )};

export default NavBar;