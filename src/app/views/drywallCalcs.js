

const _ = v => console.log( v );

const Area = {
    st: ( 1.80 * 1.20 ),
    ru: ( 1.80 * 1.20 ),
    rf: ( 1.80 * 1.20 ),
    lev: ( 2.40 * 1.20 ),

};

const calc = {
    chapas: ( placa, peDireito, comprimento, umOuDoisLados ) => {
        const area = {
            parede: peDireito * comprimento * umOuDoisLados,
            placa: ( 1.80 * 1.20 ),
        };

        return( area.parede / area.placa ) * 1.05;


        // switch( placa ) {
        //     case "st": {
        //         st 
        //     };
        //     break;
        //     case "ru": ;
        //     break;
        //     case "rf": ;
        //     break;
        // }
    },
    guias: ( comprimento ) => {
        const metroLinear = comprimento * 2;

        let quantidadeDeGuias = 0;

        return quantidadeDeGuias = Math.ceil( metroLinear / 3 );
    },
    montantes: ( comprimento, espaçamentoDosMontantes ) => {
        let quantidadeDeMontantes = ( comprimento / espaçamentoDosMontantes ) + 2;

        return( quantidadeDeMontantes );
    },
    forro: ( areaDoForro, perimetro ) => {
        const 
            areaDaChapa = ( 1.80 * 1.20 ),
            area = ( areaDoForro / areaDaChapa ) * 1.05,
            areaDoPerimetro = perimetro / 3;

        let chapas = ( area ),
            cantoneiras = ( areaDoPerimetro );

        let res = ( area );

        _( `area da chapa: ${areaDaChapa}` );
        _( `area do forro: ${areaDoForro}` );
        _( `area: ${area}` );
        _( `res: ${res}` );
        _( `tabicas: ${areaDoPerimetro}` );
        return res;
        
    },
    forroLev: ( areaDoForro, perimetro ) => {
        const 
            areaDaChapa = ( 2.40 * 1.20 ),
            area = ( areaDoForro / areaDaChapa ) * 1.05,
            areaDoPerimetro = perimetro / 3;

        let chapas = ( area ),
            cantoneiras = ( areaDoPerimetro );

        let res = ( area );

        _( `area da chapa: ${areaDaChapa}` );
        _( `area do forro: ${areaDoForro}` );
        _( `area: ${area}` );
        _( `res: ${res}` );
        _( `tabicas: ${areaDoPerimetro}` );
        return res;
        
    },
    // wall: (  ) => {},
};


// _( `área: ${ calc.chapas( "st", 2, 2, 2 ) }m2` );
// _( `área: ${ calc.chapas( "st", 2.70, 5, 2 ) }m2` );

// _( `guias: ${ calc.guias( 2 ) } un.` );
// _( `guias: ${ calc.guias( 5 ) } un.` );

// _( `montantes: ${ calc.montantes( 2, .6 ) } un.` );
// _( `montantes: ${ calc.montantes( 5, .6 ) } un.` );

_( `c: ${ calc.forro( 24, 20 ) }` )


