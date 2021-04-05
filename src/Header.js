import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Box, IconButton, Link, Menu, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import './Header.css'

const styles = makeStyles(theme => ({
  parent: {
    display: 'flex',
    alignItems: "center",
    justifyContent: "space-between",
    height: 100,
    background: '#191919',
    [theme.breakpoints.down(700)]: {
      height: 150,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },

  title: {
    color: 'white',
    marginLeft: "2rem",
    [theme.breakpoints.down(700)]: {
      marginLeft: '0rem',
    },
  },

  linkBox: {
    display: 'flex',
    width: '25%',
    justifyContent: "space-between",
    marginRight: '2rem',
    [theme.breakpoints.down(700)]: {
      flexDirection: 'column',
      marginRight: '0rem',
      alignItems: "space-between",
    },
  },

  links: {
    color: 'white',
  },

  menu: {
    color: 'white',
  },

  messageBox: {
    maxWidth: 200,
    margin: '1rem'
  }
}));

const Header = () => {
  const classes = styles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <header>
      <AppBar>
        <Box className={classes.parent}>
          <Box className={classes.title}>
            <IconButton color='white' aria-controls="message" aria-haspopup="true" onClick={handleClick}>
              <MenuIcon className={classes.menu}></MenuIcon>
            </IconButton>
            <Menu
              id="message"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <Box className={classes.messageBox}>
              <Typography>
                  I'm a super awesome team mate. Let's work together! 
              </Typography>
            </Box>
                </Menu>
          </Box>
          <Box className={classes.linkBox}>
            <Link className={classes.links} href="#home">Home</Link>
            <Link className={classes.links} href="#projects">Projects</Link>
            <Link className={classes.links} href="#contact">Contact</Link>
          </Box>
        </Box>
      </AppBar>
    </header>
  );
}
export default Header;