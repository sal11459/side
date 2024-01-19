import React from "react";
import Sidenav from '../components/Sidenav';
import Box from '@mui/material/Box';

function home() {
    return(
        <>
        <Box sx = {{ display: "flex"}}>
         <Sidenav/>
            <h1>
                Home
            </h1>
        </Box>
        </>
        );
}

export default home;