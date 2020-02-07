import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { NavLink } from 'react-router-dom';
 
const home = () => {
    return (
       <div>
          <h1>Home</h1>
          <BrowserRouter>
                <div>
                    <NavLink to="/" style={{texDecoration: 'none', color: 'black', margin:'10px'}}>Home</NavLink>
                    <NavLink to="/about" style={{texDecoration: 'none', color: 'black', margin:'10px'}}>About Us</NavLink>
                    <NavLink to="/contact" style={{texDecoration: 'none', color: 'black', margin:'10px'}}>Contact Us</NavLink>
                </div>
       </BrowserRouter>
       Learn React 2020
        <p><b>Divakar Rattan</b>
        @divakartec09
        Do more than belong: participate. 
        Do more than care: help. 
        Do more than believe: practice. 
        Do more than be fair: be kind. 
        Do more than forgive: forget. Do more
        </p>
       </div>
    );
}
 
export default home;