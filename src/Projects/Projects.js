import React from "react";
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
  Paper,
  Typography
} from '@material-ui/core';
import Carousel from 'react-material-ui-carousel'
import { makeStyles } from '@material-ui/core/styles';
import headshot from '../assets/headshot.jpg'
import './Projects.css'
import shopper from "../assets/tcl17.png"
import friendzy from "../assets/friendzy.png"
import airbnb from "../assets/airbnb.png"
import smile from "../assets/smile.png"
import headphones from "../assets/headphones.png"

const styles = makeStyles(theme => ({
  // container: {
  //   backgroundImage: `url(${headshot})`,
  //   backgroundRepeat: 'no-repeat',
  //   backgroundSize: 'cover',
  //   backgroundPosition: '0% 20%',
  //   height: '50vw',
  //   color: '#683b2f',
  //   display: 'flex',
  //   flexDirection: 'column',
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  //   fontSize: '2rem',
  //   fontWeight: '600',
  //   height: 'auto',
  //   width: 'auto',
  //   background: 'linear-gradient(rgba(0, 0, 0, 0.41), rgba(0, 0, 0, 0.41))'
  // },
  carousel: {
    left: '25vw',
  },
  card: {
    maxWidth: '25vw',
    maxHeight: '40vw'
  },
  cardMedia: {
    height: '11rem'
  },
  cardContent: {
    paddingBottom: 0
  },
  cardTitle: {
    textAlign: 'center'
  },
  text: {
    // background: 'rgba(0, 0, 0, 0.41)'
  }
}))

const Projects = () => {
  const classes = styles()
  // const items = [

  // ]

  return (
    <div className='projects' id='proj'>
      {/* <p className={classes.text}>PROJECTS</p> */}
      <Carousel className={classes.carousel} autoPlay={false}>
        <Card className={classes.card}>
          {/* <CardActionArea href='https://tcl-17-smart-shopping-list.netlify.app/'> */}
          <CardMedia
            component="img"
            alt="Smart Shopper screenshot"
            height="auto"
            image={shopper}
            title="React smart shopping list app"
          />
          <CardContent className={classes.cardContent}>
            <Typography className={classes.cardTitle} gutterBottom variant="h5" component="h2">
              Smart shopper
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              An app that reminds the shopper when to purchase an item based on past purchases. Written in React, using the Material UI framework and connected to Firebase.
            </Typography>
          </CardContent>
          {/* </CardActionArea> */}
          <CardActions>
            <Grid container justifyContent='space-around'>
              <Button size="small" color="primary" href="https://tcl-17-smart-shopping-list.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </Button>
              <Button size="small" color="primary" href="https://github.com/the-collab-lab/tcl-17-smart-shopping-list"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source code
              </Button>
            </Grid>
          </CardActions>
        </Card>
        <Card className={classes.card}>
          {/* <CardActionArea href="https://veeteeran.github.io/holberton-smiling-school/"> */}
          {/* <Grid container direction='column' justifyContent='space-between'> */}
          <CardMedia
            className={classes.cardMedia}
            component="img"
            alt="Smile school screenshot"
            // height="9rem"
            image={smile}
            title="Smile school project"
          />
          <CardContent className={classes.cardContent}>
            <Typography className={classes.cardTitle} gutterBottom variant="h5" component="h2">
              Smile School
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Frontend design project using HTML and Bootstrap to create a responsive web site from a Figma wireframe. Dynamic site populated using Javascipt and JQuery can be found
              <Link href="https://veeteeran.github.io/holberton-smiling-school-javascript/"> here.</Link>
            </Typography>
          </CardContent>
          {/* </CardActionArea> */}
          <CardActions>
            <Grid container justifyContent='space-around'>
              <Button size="small" color="primary" href="https://veeteeran.github.io/holberton-smiling-school/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </Button>
              <Button size="small" color="primary" href="https://github.com/veeteeran/holberton-smiling-school"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source code
              </Button>
            </Grid>
          </CardActions>
          {/* </Grid> */}
        </Card>
        <Card className={classes.card}>
          {/* <CardActionArea href="https://veeteeran.github.io/holberton-headphones"> */}
          <CardMedia
            component="img"
            alt="Headphones project screenshot"
            height="auto"
            image={headphones}
            title="Headphones responsive design project"
          />
          <CardContent className={classes.cardContent}>
            <Typography className={classes.cardTitle} gutterBottom variant="h5" component="h2">
              Headphones
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Using only HTML and CSS this project was created following a Figma wireframe and is responsive for desktop, tablet, and mobile screens.
            </Typography>
          </CardContent>
          {/* </CardActionArea> */}
          <CardActions>
            <Grid container justifyContent='space-around'>
              <Button size="small" color="primary" href="https://veeteeran.github.io/holberton-headphones"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </Button>
              <Button size="small" color="primary" href="https://github.com/veeteeran/holberton-headphones"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source code
              </Button>
            </Grid>
          </CardActions>
        </Card>
        <Card className={classes.card}>
          {/* <CardActionArea href="https://github.com/veeteeran/Friendzy"> */}
          <CardMedia
            component="img"
            alt="Friendzy screenshot"
            height="auto"
            image={friendzy}
            title="Friendzy web app"
          />
          <CardContent className={classes.cardContent}>
            <Typography className={classes.cardTitle} gutterBottom variant="h5" component="h2">
              Friendzy
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              An app created to find Friendz with shared interests. Designed using HTML, Bootstrap, and Javascript on the front end with Python on the backend. Running on Nginx and formerly hosted on Google Cloud Platform.
            </Typography>
          </CardContent>
          {/* </CardActionArea> */}
          <CardActions style={{ justifyContent: 'center' }}>
            {/* <Container> */}
            <Button size="small" color="primary" href="https://github.com/veeteeran/Friendzy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source code
            </Button>
            {/* </Container> */}
          </CardActions>
        </Card>
        <Card className={classes.card}>
          {/* <CardActionArea href="https://github.com/veeteeran/Airbnb_clone_v4"> */}
          <CardMedia
            component="img"
            alt="Airbnb clone screenshot"
            height="auto"
            image={airbnb}
            title="Airbnb clone project"
          />
          <CardContent className={classes.cardContent}>
            <Typography className={classes.cardTitle} gutterBottom variant="h5" component="h2">
              Airbnb clone
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Fullstack project, using HTML, CSS, Python for both frontend and backend. connected to MySQL database to dynamically populate and filter content. Using a variation on the LAMP stack with Nginx and Python.
            </Typography>
          </CardContent>
          {/* </CardActionArea> */}
          <CardActions style={{ justifyContent: 'center' }}>
            {/* <Container> */}
            <Button size="small" color="primary" href="https://github.com/veeteeran/Airbnb_clone_v4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source code
            </Button>
            {/* </Container> */}
          </CardActions>
        </Card>
      </Carousel>
    </div >
  )
}

export default Projects;
