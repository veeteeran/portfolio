import React from "react";
import { Box, Slide, Typography } from '@material-ui/core';
import "./Hero.css"
import { makeStyles } from '@material-ui/core/styles';
import hobbit from '../assets/hwb.png'
import ldip from '../assets/ldip.jpeg'
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../theme';

const styles = makeStyles(theme => ({
  container: {
    backgroundImage: `url(${hobbit})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    minHeight: '55vw',
    color: '#683b2f',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '2rem',
    fontWeight: '600',
    [theme.breakpoints.down(700)]: {
      backgroundImage: `url(${ldip})`,
      height: '100%',
      alignItems: 'flex-end',
      color: '#EBD8D3'
    },
  },
  hello: {
    marginTop: '100px',
    fontSize: '5vw',
    fontFamily: 'Skranji',
    [theme.breakpoints.down(700)]: {
      marginTop: '12vw',
      fontSize: '6vw',
      paddingRight: '2vw',
    },
  },
  subText: {
    alignSelf: 'flex-start',
    marginLeft: '3rem',
    color: '#EBD8D3',
  }
}))

const Hero = () => {
  const classes = styles();

  return (
    // Add a background image
    <Slide direction='down' in='true' timeout={750}>
      {/* <Box id='home'>Lorem ipsum</Box> */}
      {/* <ThemeProvider theme={theme}>
        <CssBaseline /> */}
      <Box className={classes.container} id='home'>
        {/* <Typography className={classes.hello}>Hello, I'm Viet!</Typography> */}
        <p className={classes.hello}>Hello, I'm Viet!</p>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <p className='typewriter'>I talk to computers.</p>
        </ ThemeProvider>

        {/* <Typography classes={{ root: 'typewriter' }}>I talk to computers.</Typography> */}
      </Box>
      {/* </ ThemeProvider> */}
    </Slide>
  );
};

export default Hero;