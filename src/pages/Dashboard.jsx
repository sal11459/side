import React from "react";
import Sidenav from '../components/Sidenav';
import Box from '@mui/material/Box';

function Dashboard() {
    return(
        <>
        <Box sx = {{ display: "flex"}}>
         <Sidenav/>
            <h1>
                DashBoard
            </h1>
        </Box>
        </>
        );
}

export default Dashboard;