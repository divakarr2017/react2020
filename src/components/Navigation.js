import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <NavLink to="/" style={{texDecoration: 'none', color: 'black', margin:'10px'}}>Home</NavLink>
          <NavLink to="/about" style={{texDecoration: 'none', color: 'black', margin:'10px'}}>About Us</NavLink>
          <NavLink to="/contact" style={{texDecoration: 'none', color: 'black', margin:'10px'}}>Contact Us</NavLink>
          <NavLink to="/signIn" style={{texDecoration: 'none', color: 'black', margin:'10px'}}>Sign In</NavLink>
       </div>
    );
}
    
export default Navigation;