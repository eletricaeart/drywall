

import React, { StrictMode } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Comps from "./app/components/Comps";
import Pages from "./app/views/Pages";
import "./assets/css/imports.css";


export default function App() {
    

    return( <>
        <Comps.Appbar />
        <Comps.Sidebar />
        <main>
            <AppRoutes />
        </main>
    </> );
}


ReactDOM.createRoot( document.querySelector( "body" ) ).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
