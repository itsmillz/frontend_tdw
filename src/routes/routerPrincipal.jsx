import React, { useEffect, useState } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import ClientesPage from "../pages/clientes/clientes.page";
import Login from "../pages/login/login";
import NotFound from "../pages/NotFound/NotFound";
import Register from "../pages/register/register";
const RouterPrincipal = ()=>{
        const [token,setToken] = useState(null);
        useEffect(()=>{
        
            setToken( localStorage.getItem("Token"));
        },[])
        
        return(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>} />
                    {token !=null ? <Route path="/clientes" element={<ClientesPage/>}/> : <Route path="clientes" element={<NotFound/>}/> }
                    <Route path="/register" element={<Register/>} />
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        );

    
    
};

export default RouterPrincipal;