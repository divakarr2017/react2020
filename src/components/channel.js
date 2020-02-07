import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';





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
  
  export default function Channel() {
    const classes = useStyles();
  
    return (
      <Container component="main">
        <CssBaseline />
           welcome 2020 dashboard
           <div className={classes.root}>
              <Grid container spacing={3}>
                
                <Grid item xs={6}>
                  <Paper className={classes.paper}>
                    <iframe 
                        title="aajtak"
                        width="560"
                        height="315" 
                        src="https://www.youtube-nocookie.com/embed/CLN-yvl9KEM"
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                    />
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper className={classes.paper}>                    
                  <iframe title="avbp" width="560" autoplay="true" height="315" src="https://www.youtube-nocookie.com/embed/-pADmfpjSFk" frameborder="0" 
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                    
                    </Paper>
                </Grid>
                
              </Grid>
        </div>
       
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    );
  }
