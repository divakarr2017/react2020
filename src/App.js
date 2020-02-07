
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import SignIn from './components/SignIn';
import Error from './components/Error';
import Navigation from './components/Navigation';
import logo from './logo.svg';
import './App.css';

import { NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Learn React 2020
        <p><b>Divakar Rattan</b>
        <a to="/" style={{texDecoration: 'none', color: 'red', margin:'10px'}} href="https://divakarr2017.github.io/react2020/">demo website</a>
        @divakartec09
        Do more than belong: participate. 
        Do more than care: help. 
        Do more than believe: practice. 
        Do more than be fair: be kind. 
        Do more than forgive: forget. Do more
        </p>
        
      </header>
      <BrowserRouter>
      <div>
          <NavLink to="/" style={{texDecoration: 'none', color: 'black', margin:'10px'}}>Home</NavLink>
          <NavLink to="/about" style={{texDecoration: 'none', color: 'black', margin:'10px'}}>About Us</NavLink>
          <NavLink to="/contact" style={{texDecoration: 'none', color: 'black', margin:'10px'}}>Contact Us</NavLink>
          <NavLink to="/signIn" style={{texDecoration: 'none', color: 'black', margin:'10px'}}>SignIn</NavLink>
       </div>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/about" component={AboutUs}/>
             <Route path="/contact" component={ContactUs}/>
             <Route path="/signIn" component={SignIn}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    </div>
  );
}
export default App;
