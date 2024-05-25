

import React from "react";
import "./css.css";


export default function Pix( props ) {
    const 
        [ pix, setPix ] = React.useState( "" );

    window.addEventListener( "load", ev => {
        let pixes = document.querySelectorAll( "img" );
    
        pixes.forEach( pix => {
            pix.addEventListener( "click", ev => {
                // console.warn( "io" );
                window.open( pix.getAttribute( "src" ), "_blank" );
            } );
        } );
    } );

    return( <>
        <img src={ props.url } alt={ props.alt } width={ props.width } />
    </> );
}

Pix.defaultProps = {
    width: "100px",
    alt: "img",
};


