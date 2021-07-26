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
    fontSize: '48px',
    color: 'white',
    textAlign: 'center',
    width: '75%',
    marginTop: '',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  content: {
    fontFamily: 'Open Sans',
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
      {/* <Box className="about-text">
                <h1 className="section-header">About me</h1>
                <Typography className="section-tagline">I am the person on your team who will lead when necessary and am comfortable in the back seat so others can drive. As a generalist I know a little bit about a lot of things. This allows me to move in the realms of the frontend, backend, as well as devops. I continue to grow instead of staying in a fixed state, so as tech changes so will I. My preference is to work for companies that make the lives of everyone better while also helping to solve some of our problems. I promise to do what I can to aid in the fight against the Galactic Empire.</Typography><br/>
                <Typography className="section-tagline">When I’m not making click-ity clack-ity sounds with my keyboard and mouse I’ll be climbing, hopefully on rocks or otherwise on plastic. I love the desert and, fun fact, being envenomed does not make you a Parselmouth. Let’s nerd out or talk sport ball.</Typography>
            </Box>
            
            <Box className="about-img">
                <img src={headshot} alt="Viet Tran headshot" id="me" />
            </Box> */}
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