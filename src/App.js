
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

import Error from './components/Error';
import './App.css';

import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import SignIn from './components/SignIn';
import Channel from './components/channel';
import Game from './components/games';
import Navigation from './components/Navigation';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { NavLink } from 'react-router-dom';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://divakarr2017.github.io/react2020/">
       react2020
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function App() {

  const classes = useStyles();
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
        <BrowserRouter> 
          <AppBar position="static">
            <Navigation /> 
          </AppBar>
          <Switch>
              <Route path="/home"        component={Home}/>
              <Route path="/channel"    component={Channel}/>
              <Route path="/games"    component={Game}/>
              <Route path="/about"    component={AboutUs}/>
              <Route path="/contact"  component={ContactUs}/>
              <Route path="/signIn"   component={SignIn}/>
              <Route path="/error"  component={Error}/>
            
            </Switch>
        </BrowserRouter>
        
        
      
    </div>
  );
}
export default App;
