

import React from "react";


export default function CalculoDeMateriais() {


    return( <>
        <article>
            <p>
                <t1>Calculo de materiais:</t1>
            </p>

            <t3>Exemplo</t3>
            <p>
                área da chapa = 1,80 x 1,20 = 2,16 m2
                parede comprimento: 5m, pé direito: 2,70m
                <li>Calculo da área
                    <ul>
                        <li>5 x 2,70 = 13,50</li>
                        <li>13,50 x 2 = 27 m2</li>
                    </ul>
                </li>
                <li>Chapas:
                    <ul>
                        <li>área da chapa: 2,16 m2</li>
                        <li>área da parede: 27 m2</li>
                        <li>Fórmula: área da parede / 2,16 + 5%</li>
                        <li>
                            27 / 2,16 = 12,50
                            <br />
                            12,50 + 5% = 13,12
                        </li>
                    </ul>
                </li>
                <li>Guias: metro linear
                    <ul>
                        <li>5 x 2 = 10m</li>
                        <li>10 / 3 = 3,33</li>
                        <li>= 4 peças</li>
                    </ul>
                </li>
                <li>Montantes: a cada 60cm
                    <ul>
                        <li>5 / 0,60 = 8,33</li>
                        <li>+ 2 montantes das extremidades</li>
                        <li>= 10 peças</li>
                    </ul>
                </li>
            </p>
        </article> 
    </> );
}
