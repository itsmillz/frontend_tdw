import { Button, Grid, TextField, Typography,Card, Alert, Input, Snackbar, Link, Box } from "@mui/material";
import axios from "axios";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Header from "../../components/header-login/header.component";
import { useNavigate } from "react-router-dom";

const Login = ()=>{
    const BASE_API="http://localhost:8000/api";
    const {register,handleSubmit,formState:{errors}} = useForm();
    const [respuesta, setRespuesta] = useState({});
    const [handleOpen, setHandleOpen] = useState(false);
    const navigate = useNavigate();
    const onSubmit = async (data,e)=>{
        e.preventDefault();
        const response = await axios.post(`${BASE_API}/login`,data);
        setRespuesta(response.data);
        if(response.data.token){
            console.log(response.data.token);
       
            localStorage.setItem("Token",response.data.token);
        
            navigate("/clientes");
            window.location.reload();
        }
        setHandleOpen(true);
    }

    return(
        <Grid container
            sx={{
                width:"100%",
                display:"flex",
                flexDirection:"column",
                minHeight:"100vh"
            }}
        >
            <Header/>
            <Card variant="outlined"  sx={{
                width:"30%",
                display:"flex",
                flexDirection:"column",
                margin:"0px auto",
                marginTop:"15px",
                padding:"20px",
                height:"auto",
                
            }} >
                <Typography sx={{
                    fontSize:"30px",
                    textAlign:"center"
                }}>Acceso a plataforma</Typography>
                <form className="form" onClick={handleSubmit(onSubmit)}>
        
                <TextField sx={{

                    marginTop:"10px",
                    marginBottom:"10px"
                }} label="Correo" type="email" {...register("email",{
                    required:true
                })} />
                {errors.correo && <Alert severity="error" sx={{marginBottom:"10px"}}>Ingrese un Correo</Alert> }
                <TextField label="Contraseña" type="password" 
                    sx={{
                        marginTop:"10px",
                        marginBottom:"10px"
                    }}
                    {...register("password",{
                        required:"true"
                    })}
                />
                {errors.password && <Alert severity="error" sx={{marginBottom:"10px"}}>Ingrese una contraseña</Alert> }
                <Button variant="contained" color="success" sx={{
                    width:"70%",
                    marginTop:"10px",
                    margin:"0px auto"
                }} >Iniciar Sesión</Button>
                </form>
                <Link sx={{
                    background:"blue",
                    textAlign:"center",
                    padding:"10px",
                    textDecoration:"none",
                    color:"white",
                    width:"65%",
                    margin:"0px auto",
                    marginTop:"10px",
                    borderRadius:"5px",
                    fontFamily:"arial"
                }} href="/register" >Registrarse</Link>
            </Card>
            
            {respuesta.mensaje && <Alert sx={{width:"30%",margin:"0px auto",marginTop:"10px"}} severity="error">{respuesta.mensaje}</Alert>  }

        </Grid>
    )
};

export default Login;