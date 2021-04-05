import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Box, Link, Typography } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CopyrightIcon from '@material-ui/icons/Copyright';

const styles = makeStyles({
  root: {
    justify: "center",
    alignItems: "center",
  },

  parent: {
    background: '#191919',
    display: 'flex',
    flexDirection: 'column',
    alignItems: "center",
    paddingTop: "2rem",
    color: 'white'
  },

  iconBox: {
    display: 'flex',
    width: "25%",
    justifyContent: "space-around",
    marginTop: "1rem",
    marginBottom: "2rem",
  },

  icons: {
    fontSize: "2rem",
  },

  links: {
    color: 'white',
  }
});

const Footer = () => {
  const classes = styles();

  return (
    <React.Fragment>
      <Box className={classes.parent} id='contact'>
        <Typography variant="h5">Contact me</Typography>
        <Box className={classes.iconBox}>
          <Link className={classes.links} href="https://www.linkedin.com/in/viet-t/">
            <LinkedInIcon className={classes.icons} />
          </Link>
          <Link className={classes.links} href="https://github.com/veeteeran">
            <GitHubIcon className={classes.icons} />
          </Link>
          <Link className={classes.links} href="https://twitter.com/veeteeran">
            <TwitterIcon className={classes.icons} />
          </Link>
          <Link className={classes.links} href="mailto:viet_tran@pm.me" target="_blank">
            <MailOutlineIcon className={classes.icons}/>
          </Link>
        </Box>
        <Typography>
          <CopyrightIcon/> Viet Tran 2021
        </Typography>
      </Box>
    </React.Fragment>
  );
}

export default Footer;