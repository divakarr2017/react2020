
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './components/Home';
import logo from './logo.svg';
import './App.css';

import { NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Creation for History</h1>
          Learn React 2020
        <p><b>Divakar Rattan</b>
        @divakartec09
        Do more than belong: participate. 
        Do more than care: help. 
        Do more than believe: practice. 
        Do more than be fair: be kind. 
        Do more than forgive: forget. Do more
        </p>
      <Home />
      
    </div>
  );
}
export default App;
