import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Button, Link, Grid, Typography } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailOutlineIcon from '@material-ui/icons/MailOutline';


const styles = makeStyles(theme => ({
  container: {
    backgroundColor: '#34353A',
    height: '9.6vw'
  },
  links: {
    color: 'black'
  },
  icons: {
    fontSize: '3vw'
  },
  copyright: {
    textAlign: 'center',
    color: 'white',
    fontSize: '1.25vw',
    alignSelf: 'flex-end',
    marginBottom: '1vw'
  },
  clickClack: {
    textAlign: 'right',
    color: '#E33A27',
    fontSize: '.9vw',
    // alignSelf: 'center',
    marginRight: '1vw'
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
          </Grid>
          <Grid item md={2}
            style={{ alignSelf: 'flex-end' }}
          >
            <Typography className={classes.copyright}>
              Viet Tran 2021
            </Typography>
          </Grid>
          <Grid item md={5}>
            <p className={classes.clickClack}>
              click-ity clack-ity . click-ity clack-ity
            </p>
          </Grid>
        </Grid>
      </footer>
    </React.Fragment>
  );
}

export default Footer;