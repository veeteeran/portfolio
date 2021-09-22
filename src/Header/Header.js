import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Box, Button, Link, Menu, Typography, Slide, SvgIcon, useScrollTrigger } from '@material-ui/core';
import './Header.css'
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../theme';
import reactIcon from '../assets/reactSVG'

const HideOnScroll = (props) => {
  const trigger = useScrollTrigger()
  return (
    <Slide
      appear={false}
      direction='down'
      in={!trigger}
    >
      {props.children}
    </Slide>
  )
}

const styles = makeStyles(theme => ({
  nav: {
    backgroundColor: 'rgba(196, 196, 196, .41)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  scrolled: {
    backgroundColor: 'rgba(255, 255, 255, .9)',
    color: '#FFF',
  },
  linkBox: {
    display: 'flex',
    width: '45vw',
    justifyContent: "space-around",
    marginRight: '1rem',
    [theme.breakpoints.down(700)]: {
      flexDirection: 'column',
      marginRight: '0rem',
      alignItems: "space-between",
    },
  },
  links: {
    color: '#362A27',
    fontSize: '1.3vw'
  },
  btnImage: {
    // backgroundImage: `url(${reactIcon})`,
    height: '65px',
    width: '65px',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'center center',
    // border: 'none',
    // backgroundColor: 'transparent',
    // cursor: 'pointer',
  },
  button: {
    height: '65px',
    width: '65px',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    marginLeft: '1rem'
  }
}))

const Header = (props) => {
  const classes = styles();
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const eventListener = () => {
      setScrolled(window.pageYOffset > 80)
    }
    eventListener()
    window.addEventListener('scroll', eventListener)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HideOnScroll {...props}>
        <Slide
          direction='right'
          in='true'
          timeout={1000}
        >
          <AppBar className={classes.nav + `${scrolled ? ` ${classes.scrolled}` : ''}`}>
            <Button className={classes.button}>
              <img className={classes.btnImage} alt="react logo" src={reactIcon} />
            </Button>
            <Box className={classes.linkBox}>
              <Link
                href="#home"
                className={classes.links}
              >
                Home
              </Link>
              <Link
                href="#details"
                className={classes.links}
              >
                About
              </Link>
              <Link className={classes.links} href="#proj">Projects</Link>
              <Link className={classes.links} href="#contact">Contact</Link>
              <Link className={classes.links} href="resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </Link>
            </Box>
          </AppBar>
        </Slide>
      </HideOnScroll>
    </ThemeProvider>
  )
}

export default Header;
