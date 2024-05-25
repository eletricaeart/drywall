

import React from "react";
import ReactDOM from "react-dom/client";
import Comps from "../../../../components/Comps";
import instalaçãoDasCantoneirasDaSancaPadrão from "./pix/instalação das cantoneiras da sanca padrão.png";
import esqueletoDaSancaPadrão from "./pix/esqueleto da sanca padrão.png";
import nivelamentoDaSanca from "./pix/nivelamento da sanca.png";


export default function SancaPadrao() {
    Comps.Pix.defaultProps = {
        width: "350",
        alt: "Sanca Padrão",
    };

    return( <>
        <article>
            <t1>Sanca padrão</t1>
            <br />
            <t2>medidas</t2>
            <ul>
                <li>rebaixo acabado: 15cm</li>
                <li>corpo: 40cm</li>
                <li>iluminação indireta: 10cm</li>
            </ul>
            <t2>instalação das cantoneiras</t2>
            <ul>
                <li><Comps.Pix url={ instalaçãoDasCantoneirasDaSancaPadrão } /></li>
                <li>cantoneira: 25 x 30</li>
                <li>cantoneira da parede: lado maior na parede</li>
                <li>cantoneira do teto: lado menor no teto</li>
                <li>parafusos:
                    <ul>
                        <li>cantoneiras: parafuso 6</li>
                        <li>tirantes: parafuso 8 e arruela</li>
                    </ul>
                </li>
                <li>tirantes:
                    <ul>
                        <li>quase encostado com a canaleta do teto</li>
                        <li>15 cm das estremidades</li>
                        <li>e a cada 1 metro</li>
                        <li><Comps.Pix url={ esqueletoDaSancaPadrão } /></li>
                        <li>o nível é feito após instalar a canaleta f530</li>    
                        <li><Comps.Pix url={ nivelamentoDaSanca } /></li>
                    </ul>
                </li>
                <li>chapeamento:
                    <ul>
                        <li>começa pela frente</li>
                        <li>faz o tratamento das juntas</li>
                        <li>faz a instalação do corpo com 1cm a menos do total</li>
                        <li>a aba tem a metade da altura do rebaixo</li>
                        <li>instala uma canaleta f530 na beirada da sanca</li>
                        <li>tratamento da quina com a fita leveline</li>
                    </ul>
                </li>
            </ul>
        </article>
    </> );
}
