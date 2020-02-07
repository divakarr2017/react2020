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
  
  export default function Games() {
    const classes = useStyles();
  
    return (
      <Container component="main">
        <CssBaseline />
           welcome 2020 dashboard
           <div className={classes.root}>
              <Grid container spacing={3}>
                
                <Grid item xs={6}>
                  <Paper className={classes.paper}>
                  <embed width="550" height="450" 
                  base="https://external.kongregate-games.com/gamez/0000/5196/live/" 
                  src="https://external.kongregate-games.com/gamez/0000/5196/live/embeddable_5196.swf" 
                  type="application/x-shockwave-flash" />
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper className={classes.paper}>
                  <embed width="550" height="450" base="https://external.kongregate-games.com/gamez/0022/3733/live/" 
                  src="https://external.kongregate-games.com/gamez/0022/3733/live/embeddable_223733.swf" 
                  type="application/x-shockwave-flash"/>                
                  
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
