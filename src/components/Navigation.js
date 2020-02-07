import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <NavLink to="/react2020/" style={{texDecoration: 'none', color: 'white', margin:'10px'}}>Home</NavLink>
          <NavLink to="/react2020/about" style={{texDecoration: 'none', color: 'white', margin:'10px'}}>About Us</NavLink>
          <NavLink to="/react2020/contact" style={{texDecoration: 'none', color: 'white', margin:'10px'}}>Contact Us</NavLink>
          <NavLink to="/react2020/signIn" style={{texDecoration: 'none', color: 'white', margin:'10px'}}>Sign In</NavLink>
       </div>
    );
}
    
export default Navigation;