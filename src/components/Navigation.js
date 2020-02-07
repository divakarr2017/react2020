import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
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
 
const Navigation = () => {
   const classes = useStyles();
    return (
      <Toolbar>
      <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <MenuIcon />
      </IconButton>    
 
      <Typography className={classes.root}>
          <NavLink to="/" style={{texDecoration: 'none', color: 'white', margin:'10px'}}>Home</NavLink>
          <NavLink to="/about" style={{texDecoration: 'none', color: 'white', margin:'10px'}}>About Us</NavLink>
          <NavLink to="/contact" style={{texDecoration: 'none', color: 'white', margin:'10px'}}>Contact Us</NavLink>
          <NavLink to="/signIn" style={{texDecoration: 'none', color: 'white', margin:'10px'}}>Sign In</NavLink>
          </Typography>
       </Toolbar>
    );
}
    
export default Navigation;