import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { NavLink } from 'react-router-dom';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import SignIn from './SignIn';
import Navigation from './Navigation';
import Error from './Error';

import CssBaseline from '@material-ui/core/CssBaseline';

import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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
  
  export default function Home() {
    const classes = useStyles();
  
    return (
      <Container component="main">
        <CssBaseline />
           welcome 2020 dashboard
        <div className={classes.paper}>
      
        <AppBar position="static">
        <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
            </IconButton>    
       
            <Typography className={classes.root}>
            <Button color="inherit"><Link href="/about"  color="inherit" >
                 AboutUs
            </Link></Button>
            <Button color="inherit"><Link href="/contact" color="inherit">
            ContactUs
            </Link></Button>
            <Button color="inherit"><Link href="/signIn"   color="inherit">SignIn</Link></Button>
            <Button color="inherit"><Link href="/"  color="inherit" >
                 back to Home
            </Link></Button>
            </Typography>
          
        </Toolbar>
        </AppBar>
            
        <BrowserRouter>      
          <Navigation />
            <Switch>
            
             <Route path="/about" component={AboutUs}/>
             <Route path="/contact" component={ContactUs}/>
             <Route path="/signIn" component={SignIn}/>
            
           </Switch>
         </BrowserRouter>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    );
  }
