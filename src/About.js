import React from "react";
import {Box, Container, Typography} from '@material-ui/core';
import "./About.css"
import headshot from "./images/holbie.jpg"

const About = () => {
    return (
        <Box className="container">
            <Box className="about-text">
                <h1 className="section-header">About me</h1>
                <Typography className="section-tagline">I am the person on your team who will lead when necessary and am comfortable in the back seat so others can drive. As a generalist I know a little bit about a lot of things. This allows me to move in the realms of the frontend, backend, as well as devops. I continue to grow instead of staying in a fixed state, so as tech changes so will I. My preference is to work for companies that make the lives of everyone better while also helping to solve some of our problems. I promise to do what I can to aid in the fight against the Galactic Empire.</Typography><br/>
                <Typography className="section-tagline">When I’m not making click-ity clack-ity sounds with my keyboard and mouse I’ll be climbing, hopefully on rocks or otherwise on plastic. I love the desert and, fun fact, being envenomed does not make you a Parselmouth. Let’s nerd out or talk sport ball.</Typography>
            </Box>
            
            <Box className="about-img">
                <img src={headshot} alt="Viet Tran headshot" id="me" />
            </Box>
        </Box>
    );
};

export default About;