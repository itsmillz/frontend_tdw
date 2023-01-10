import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Logo from "../../assets/LogoUrban.png";
const Header = () =>{
    return (
        <Grid container sx={{
            width:"100%",
            backgroundColor:"#064e3b"
        }}>
            <Box sx={{
                width: "40%",
                display:"flex",
                justifyContent:"center",
                alignItems:"center"
            }}>
                <img src={Logo} alt="logo" width="300px" />
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
                >¡Bienvenid@!</Typography>
            </Box>


        </Grid>
    );
};

export default Header;

