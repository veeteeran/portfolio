import React from "react";
import {Box, Typography} from '@material-ui/core';
import "./Landing.css"

const Landing = () => {
    return (
        // Add a background image
        <React.Fragment>
            <Box id='home'>Lorem ipsum</Box>
            <Box className="landing">
                <Typography id="hello">Hello, I'm Viet.</Typography>
                <Typography>I talk to computers.</Typography>
            </Box>
        </React.Fragment>
    );
};

export default Landing;