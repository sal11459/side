import React from "react";
import Sidenav from '../components/Sidenav';
import Box from '@mui/material/Box';

function Profile() {
    return(
        <>
        <Box sx = {{ display: "flex"}}>
         <Sidenav/>
            <h1>
                Profile
            </h1>
        </Box>
        </>
        );
}

export default Profile;