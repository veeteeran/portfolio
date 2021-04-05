import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Link,
  Typography
} from '@material-ui/core';
import shopper from "./images/tcl17.png"
import friendzy from "./images/friendzy.png"
import airbnb from "./images/airbnb.png"
import smile from "./images/smile.png"
import headphones from "./images/headphones.png"

const styles = makeStyles( theme => ({
  cardRoot1: {
    maxWidth: 345,
    [theme.breakpoints.down('md')]: {
      marginTop: 25,
      marginBottom: 25,
    },

    [theme.breakpoints.down('sm')]: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  },

  cardRoot2: {
    maxWidth: 345,
    [theme.breakpoints.down('md')]: {
      marginTop: 0,
      marginBottom: 50,
    },
  },

  boxRoot: {
    background: 'linear-gradient(to bottom, #CC3300, #ffc922)',
    paddingTop: 0,
    paddingBottom: 100,
  },

  projectBox: {
    paddingTop: 50,
    paddingBottom: 50,
    color: 'white',
    [theme.breakpoints.down('md')]: {
      paddingBottom: 10,
    },
  },

  rowOne: {
    marginBottom: 75,
  },
}));



export default function Projects() {
  const classes = styles();

  return (
    <React.Fragment>
      <Box className={classes.boxRoot}>
        <Box className={classes.projectBox}>
          <Typography gutterBottom variant="h4" component="h1" id='projects'>Projects</Typography>
        </Box>
        <Grid container align='center' className={classes.rowOne}>
          <Grid item sm={12} md={4}>
            <Card className={classes.cardRoot1}>
              <CardActionArea href='https://tcl-17-smart-shopping-list.netlify.app/'>
                <CardMedia
                  component="img"
                  alt="Smart Shopper screenshot"
                  height="140"
                  image={shopper}
                  title="React smart shopping list app"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Smart shopper
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    An app that reminds the shopper when to purchase an item based on past purchases. Written in React, using the Material UI framework and connected to Firebase.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Container>
                  <Button size="small" color="primary" href="https://github.com/the-collab-lab/tcl-17-smart-shopping-list">
                    Source code
                  </Button>
                </Container>
              </CardActions>
            </Card>
          </Grid>
          <Grid item sm={12} md={4}>
            <Card className={classes.cardRoot1}>
              <CardActionArea href="https://veeteeran.github.io/holberton-smiling-school/">
                <CardMedia
                  component="img"
                  alt="Smile school screenshot"
                  height="140"
                  image={smile}
                  title="Smile school project"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Smile School
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Frontend design project using HTML and Bootstrap to create a responsive web site from a Figma wireframe. Dynamic site populated using Javascipt and JQuery can be found
                   <Link href="https://veeteeran.github.io/holberton-smiling-school-javascript/"> here.</Link>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Container>
                  <Button size="small" color="primary" href="https://github.com/veeteeran/holberton-smiling-school">
                    Source code
                  </Button>
                </Container>
              </CardActions>
            </Card>
          </Grid>
          <Grid item sm={12} md={4}>
            <Card className={classes.cardRoot1}>
              <CardActionArea href="https://veeteeran.github.io/holberton-headphones">
                <CardMedia
                  component="img"
                  alt="Headphones project screenshot"
                  height="140"
                  image={headphones}
                  title="Headphones responsive design project"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Headphones
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Using only HTML and CSS this project was created following a Figma wireframe and is responsive for desktop, tablet, and mobile screens.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Container>
                  <Button size="small" color="primary" href="https://github.com/veeteeran/holberton-headphones">
                    Source code
                  </Button>
                </Container>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <Grid container align="center">
          <Grid item sm={12} md={6}>
            <Card className={classes.cardRoot2}>
              <CardActionArea href="https://github.com/veeteeran/Friendzy">
                <CardMedia
                  component="img"
                  alt="Friendzy screenshot"
                  height="140"
                  image={friendzy}
                  title="Friendzy web app"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Friendzy
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    An app created to find Friendz with shared interests. Designed using HTML, Bootstrap, and Javascript on the front end with Python on the backend. Running on Nginx and formerly hosted on Google Cloud Platform. Currently not hosted. Check out the source code!
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Container>
                  <Button size="small" color="primary" href="https://github.com/veeteeran/Friendzy">
                    Source code
                  </Button>
                </Container>
              </CardActions>
            </Card>
          </Grid>
          <Grid item sm={12} md={6}>
            <Card className={classes.cardRoot2}>
              <CardActionArea href="https://github.com/veeteeran/Airbnb_clone_v4">
                <CardMedia
                  component="img"
                  alt="Airbnb clone screenshot"
                  height="140"
                  image={airbnb}
                  title="Airbnb clone project"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Airbnb clone
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Fullstack project, using HTML, CSS, Python for both frontend and backend. connected to MySQL database to dynamically populate and filter content. Using a variation on the LAMP stack with Nginx and Python. Currently not live. Feel free to check out the source code!
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Container>
                  <Button size="small" color="primary" href="https://github.com/veeteeran/Airbnb_clone_v4">
                    Source code
                  </Button>
                </Container>
              </CardActions>
            </Card>
          </Grid>
          </Grid>
      </Box>
    </React.Fragment>
  );
}