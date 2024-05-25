

import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import "./sidebar.css";


export default function Sidebar() {
    const 
        [ openned, setOpenned ] = useState( false );


    return( <side-bar>
        <home>
            <header className={ `${ openned && "is-active" }` }>
                <Link to="/">
                    <icon>
                        <icon-img class="material-icons">home</icon-img>
                    </icon>
                </Link>
            </header>
            <dummy className={ `${ openned && "is-active" }` }>
                <Link to="/links">
                    <icon>
                        <icon-img class="material-icons">cloud</icon-img>
                        <icon-name>Links</icon-name>
                    </icon>
                </Link>
                <Link to="/drywall">
                    <icon>
                        <icon-img class="material-icons">cloud</icon-img>
                        <icon-name>Drywall</icon-name>
                    </icon>
                </Link>
                <Link to="/drywall/sanca-padrao">
                    <icon>
                        <icon-img class="material-icons">cloud</icon-img>
                        <icon-name>Sanca</icon-name>
                    </icon>
                </Link>
                <Link to="/drywall/forro-estruturado">
                    <icon>
                        <icon-img class="material-icons">cloud</icon-img>
                        <icon-name>Forro</icon-name>
                    </icon>
                </Link>
                <Link to="/drywall/calculo-de-materiais">
                    <icon>
                        <icon-img class="material-icons">cloud</icon-img>
                        <icon-name>Calculos</icon-name>
                    </icon>
                </Link>
                <Link to="/drywall/instalação">
                    <icon>
                        <icon-img class="material-icons">cloud</icon-img>
                        <icon-name>Instalação</icon-name>
                    </icon>
                </Link>
            </dummy>
            <footer></footer>
        </home>
    </side-bar> );
}
