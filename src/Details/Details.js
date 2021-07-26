import React from "react";
import { Box, Container, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  container: {
    backgroundColor: '#34353A',
    paddingTop: '2vw',
    paddingBottom: '2vw'
  },
  title: {
    fontFamily: 'Skranji',
    fontSize: '3.9vw',
    color: 'white',
    textAlign: 'center',
    width: '75%',
    // marginTop: '',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  content: {
    fontFamily: 'Open Sans',
    fontSize: '1.4vw',
    width: '50%',
    color: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
  }
}))

const Details = () => {
  const classes = styles();
  return (
    <Grid className={classes.container} container spacing={2} id='details'>
      <Grid item md={6}>
        <Box className={classes.title}>About Me</Box>
        <p className={classes.content}>I grew up in Michigan, moved to San Francisco after graduating from college, and taught English in South Korea for 5 years. A generalist who enjoys learning a little bit about a lot of things. Continually growing and improving.</p>
      </Grid>
      <Grid item md={6}><Box className={classes.title}>Focus</Box>
        <p className={classes.content}>
          Being a little bit better than I was before. Stepping outside of my  comfort zone, going through the process of feeling lost, the spark of understanding, and the satisfaction of using that knowledge to solve problems. Then, refining those skills.
        </p>
      </Grid>
      <Grid item md={6}><Box className={classes.title}>Vibe</Box>
        <p className={classes.content}>
          Working on a team with people who listen to each other, give and receive feedback, are not afraid to make mistakes or ask for help. Let's create products and services that are easy for people to use and help make their lives better.
        </p>
      </Grid>
      <Grid item md={6}><Box className={classes.title}>Extra</Box>
        <p className={classes.content}>When I’m not making click-ity clack-ity sounds I’ll be climbing, hopefully on rocks or otherwise on plastic. I love the desert and discovered being envenomed does not make you a Parselmouth. Let’s nerd out or talk sport ball.</p>
      </Grid>
    </Grid>
  );
};

export default Details;