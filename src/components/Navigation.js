import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <NavLink to="/" style={{texDecoration: 'none', color: 'white', margin:'10px'}}>Home</NavLink>
          <NavLink to="/about" style={{texDecoration: 'none', color: 'white', margin:'10px'}}>About Us</NavLink>
          <NavLink to="/contact" style={{texDecoration: 'none', color: 'white', margin:'10px'}}>Contact Us</NavLink>
       </div>
    );
}
    
export default Navigation;