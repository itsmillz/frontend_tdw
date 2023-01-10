import { Alert, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import Header from "../../components/header/header.component";
import {TextField} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = ()=>{
    const {handleSubmit,register,formState: { errors }} = useForm();
    const navigate = useNavigate();
    const onSubmit = async (data) =>{
        const response = await axios.post("http://localhost:8000/api/register",data);
        console.log(response.data);
        if(response.data.status==1){
            navigate("/");
        }
    }
    return (
        <Grid container sx={{
            width:"100%",
            display:"flex",
            flexDirection:"column",
        }}>
            <Header/>
            <Grid item sx={{
                width:"50%",
                margin:"0px auto",
                display:"flex",
                flexDirection:"column"
            }}>
                <Typography variant="h2" sx={{
                    fontSize:"30px",
                    textAlign:"center",
                    marginTop:"20px",
                    marginBottom:"20px"
                }}>Registro de usuario</Typography>
                <form className="form" onSubmit={handleSubmit(onSubmit)} >

                <TextField label="Nombre completo" type="text" {...register("name",{
                    required:true
                })} sx={{
                        marginTop:"10px",
                        marginBottom:"10px"
                }} />
                {
                    errors.name && <Alert severity="error" sx={{marginBottom:"10px"}}>Ingrese su nombre completo</Alert>
                }
                <TextField sx={{
                        marginTop:"10px",
                        marginBottom:"10px"
                        }} label="Correo" type="email" {...register("email",{
                        required:true
                        })} />
                 {errors.email && <Alert severity="error" sx={{marginBottom:"10px"}}>Ingrese un Correo</Alert> }
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
                        <TextField label="Confirmar contraseña" type="password" 
                        sx={{
                            marginTop:"10px",
                            marginBottom:"10px"
                        }}
                        {...register("password_confirmation",{
                            required:"true"
                        })}
                        />
                        {errors.password && <Alert severity="error" sx={{marginBottom:"10px"}}>Por favor confirme su contraseña</Alert> }
                        <Button type="submit" disabled={false} variant="contained" color="success" sx={{
                            width:"70%",
                            marginTop:"10px",
                            margin:"0px auto"
                        }} >Enviar datos</Button>
                    </form>
            </Grid>
        </Grid>
    );
};

export default Register;