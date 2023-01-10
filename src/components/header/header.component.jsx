import { Box, Button, Grid, Link, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/LogoUrban.png";

const Header = () =>{
    const navigate = useNavigate();
    const BASE_API = "http://localhost:8000/api";
    const logout = async()=>{
        const token = localStorage.getItem("Token");
        if(token){
            //Eliminamos el token de localstorage
            console.log("Token"+token);
            const config = {
                headers:{
                  "Authorization": `Bearer ${token}`
                }
              }
            const response = await axios.get(`${BASE_API}/logout`,config);
            console.log(response.data);
            localStorage.clear();
            navigate("/");
        }
    };
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
                <Button color="warning" variant="contained" onClick={logout} >Cerrar Sesión</Button>             
                
            </Box>


        </Grid>
    );
};

export default Header;

