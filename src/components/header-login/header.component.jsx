import { Box, Grid, Typography } from "@mui/material";
import React from "react";
const Header = () =>{
    return (
        <Grid container sx={{
            width:"100%",
            backgroundColor:"#38bdf8"
        }}>
            <Box sx={{
                width: "40%",
                display:"flex",
                justifyContent:"center",
                alignItems:"center"
            }}>
            </Box>
            <Box sx={{
                display:"flex",
                width:"50%",
                justifyContent:"center",
                alignItems:"center"
            }}>
                <Typography
                    sx={{
                    
                        fontSize:"30px",
                        color:"white"
                    }}
                >Home</Typography>
            </Box>


        </Grid>
    );
};

export default Header;

