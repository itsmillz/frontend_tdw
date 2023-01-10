import { Card, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../../components/header/header.component";


const ClientesPage = ()=>{
    const [imagenes,setImagenes] = useState([]);
    const getAllPerros = async ()=>{
        const response = await axios.get("https://dog.ceo/api/breed/hound/images");
        setImagenes(response.data.message);
    }
    useEffect(()=>{
        getAllPerros();
    },[]);
    return(
        <Grid container sx={{
            width:"100%",
            display:"flex",
            flexDirection:"flex-column"
        }} >
            <Header/>
            <Grid item sx={{
                width:"100%",
                display:"flex",
                flexDirection:"row",
                flexWrap:"wrap"
            }}>
                {
                    imagenes.map((imagen,idx)=>{
                        return(
                        <Card key={idx} sx={{
                            width:"30%",
                            display:"flex",
                            justifyContent:"center",
                            padding:"10px",
                            margin:"10px"
                        }}>
                            <img src={imagen} className="img" alt="" />
                        </Card>
                        )            
                    })
                }

                </Grid>
        </Grid>
    )
};

export default ClientesPage;