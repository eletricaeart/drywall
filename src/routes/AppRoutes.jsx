

import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Pages from "../app/views/Pages";

export default function AppRoutes() {
    
    return( <>
        <Routes>
            <Route path="/" element={ <Pages.Home /> } />
            <Route path="/links" element={ <Pages.Links /> } />
            <Route path="/drywall" element={ <Pages.Drywall /> } />
            <Route path="/drywall/sanca-padrao" element={ <Pages.SancaPadrao /> } />
            <Route path="/drywall/forro-estruturado" element={ <Pages.ForroEstruturado /> } />
            <Route path="/drywall/calculo-de-materiais" element={ <Pages.CalculoDeMateriais /> } />
            <Route path="drywall/instalação" element={ <Pages.Instalação /> } />
        </Routes>
    </> );
}




