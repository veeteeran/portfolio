import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Box, Button, Link, Menu, MenuItem, Typography, Slide, SvgIcon, useMediaQuery, useScrollTrigger } from '@material-ui/core';
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
    alignItems: 'center',
    [theme.breakpoints.down(700)]: {
      backgroundColor: 'rgba(196, 196, 196, 0)',

    }
  },
  scrolled: {
    backgroundColor: 'rgba(255, 255, 255, .9)',
    color: '#FFF',
    [theme.breakpoints.down(700)]: {
      backgroundColor: 'rgba(196, 196, 196, .3)',

    }
  },
  linkBox: {
    display: 'flex',
    width: '45vw',
    justifyContent: "space-around",
    marginRight: '1rem',
    [theme.breakpoints.down(700)]: {
      width: '78%',
      justifyContent: "space-between",
      display: 'none'
    },
  },
  links: {
    color: '#362A27',
    fontSize: '1.3vw',
    [theme.breakpoints.down(700)]: {
      fontSize: '3vw',
      color: '#FFF'
    },
  },
  btnImage: {
    // backgroundImage: `url(${reactIcon})`,
    height: '6.3vw',
    width: '6.3vw',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'center center',
    // border: 'none',
    // backgroundColor: 'transparent',
    // cursor: 'pointer',
    [theme.breakpoints.down(700)]: {
      // flexDirection: 'column',
      // marginRight: '0rem',
      // alignItems: "space-between",
      height: '10vw',
      width: '10vw',
    }
  },
  button: {
    height: '6.3vw',
    width: '6.3vw',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    marginLeft: '1rem',
    [theme.breakpoints.down(700)]: {
      margin: '2vw 0'
    }
  },
  hideMenu: {
    display: 'none'
  },
  showMenu: {
    display: 'unset',
    width: '100%',
    height: '100%'
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
  const matches = useMediaQuery('(min-width:700px)')
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
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
            <Button className={classes.button}
              disabled={matches}
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
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
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                className={matches ? classes.hideMenu : classes.showMenu}
                PaperProps={{
                  style: {
                    height: '48%',
                    width: '100%',
                    backgroundColor: 'black'
                  },
                }}
              >
                <MenuItem onClick={handleClose}>
                  <Link href="#home" className={classes.links}>
                    Home
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link href="#details" className={classes.links}>
                    About
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link href="#proj" className={classes.links}>
                    Projects
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link className={classes.links} href="#contact">
                    Contact
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link className={classes.links} href="resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Resume
                  </Link>
                </MenuItem>
              </Menu>
            </Box>
          </AppBar>
        </Slide>
      </HideOnScroll>
    </ThemeProvider>
  )
}

export default Header;
