


"use strict";
/* == [ properties ]
== == == == == == == == == */
const 
   _ = ( ...v ) => console.log( ...v )
   ,
   $ = v => document.querySelector( v )
   ,
   $$ = v => document.querySelectorAll( v )
;

HTMLElement.prototype.$a = function( v ) {
   return( 
      this.getAttribute( v )
   );
}
_( "HTMLElement: ", submit_calcular.$a( "type" ) );
         
/* -------------------------------- */



/* == [ events ]
== == == == == == == == == */
window.addEventListener( "load", ev => {
	
   /* == [ nav-link ] 
   == == == == == == == == == */
   $$( "nav-link" ).forEach( nl => {  
      _( "oi" );
      nl.outerHTML = `
         <p>
            <a href="${ nl.getAttribute( "to" ) }"
               target="_blank" >
               ${ nl.innerText }
            </a>
         </p>
      `;
   } );
   
   /* == [ padding ] 
   == == == == == == == == == */
   $$( "[pd]" ).forEach( p => {
      p.style.padding = p.getAttribute( "pd" );
   } );

} );