import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Button, Link, Grid, Typography } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Fade from 'react-reveal/Fade';


const styles = makeStyles(theme => ({
  container: {
    backgroundColor: '#34353A',
    height: '9.6vw',
    [theme.breakpoints.down(700)]: {
      height: 'unset'
    }
  },
  links: {
    color: 'black',
    [theme.breakpoints.down(700)]: {
      color: 'white',
      padding: '1vw 0'
    }
  },
  icons: {
    fontSize: '3vw',
    [theme.breakpoints.down(700)]: {
      fontSize: '8vw'
    }
  },
  copyrightContainer: {
    alignSelf: 'flex-end',
  },
  copyright: {
    textAlign: 'center',
    color: 'white',
    fontSize: '1.25vw',
    alignSelf: 'flex-end',
    marginBottom: '1vw',
    [theme.breakpoints.down(700)]: {
      display: 'none'
    }
  },
  clickClackContainer: {
    [theme.breakpoints.down(700)]: {
      margin: '0 auto',
      paddingBottom: '2vw'
    }
  },
  clickClack: {
    textAlign: 'right',
    color: '#E33A27',
    fontSize: '.9vw',
    marginRight: '1vw',
    [theme.breakpoints.down(700)]: {
      fontSize: '2vw',
      margin: '0 auto',
      textAlign: 'unset'
    }
  }
}));

const Footer = () => {
  const classes = styles();

  return (
    <React.Fragment>
      <footer id='contact'>
        <Grid
          className={classes.container}
          direction='row'
          container
          alignItems='center'
        >
          <Grid
            container
            item
            md={5}
            direction='row'
            justifyContent='space-around'
          >
            <Fade left>
              <Grid item>
                <Button>
                  <Link className={classes.links} href="https://www.linkedin.com/in/viet-t/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon className={classes.icons} />
                  </Link>
                </Button>
              </Grid>
              <Grid item>
                <Button>
                  <Link className={classes.links} href="https://github.com/veeteeran"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon className={classes.icons} />
                  </Link>
                </Button>
              </Grid>
              <Grid item>
                <Button>
                  <Link className={classes.links} href="https://twitter.com/veeteeran"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TwitterIcon className={classes.icons} />
                  </Link>
                </Button>
              </Grid>
              <Grid item>
                <Button>
                  <Link className={classes.links} href="mailto:viet_tran@pm.me" target="_blank"
                    rel="noopener noreferrer">
                    <MailOutlineIcon className={classes.icons} />
                  </Link>
                </Button>
              </Grid>
            </Fade>
          </Grid>
          <Grid item md={2}
            className={classes.copyrightContainer}
          >
            <Fade up>
              <Typography className={classes.copyright}>
                Viet Tran 2021
              </Typography>
            </Fade>
          </Grid>
          <Grid item md={5} className={classes.clickClackContainer}>
            <Fade right>
              <p className={classes.clickClack}>
                click-ity clack-ity ... click-ity clack-ity
              </p>
            </Fade>
          </Grid>
        </Grid>
      </footer>
    </React.Fragment>
  );
}

export default Footer;