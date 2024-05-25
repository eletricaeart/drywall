

import React from "react";
import Comps from "../../../components/Comps";
import janela from "./pix/janela.png";
import MontantesAuxiliaresETravessaDaPorta from "./pix/Montantes auxiliares e travessa da porta.png";
import paredeEmL from "./pix/parede em L.png";
import instalaçãoDoChepeamentoDaPorta from "./pix/instalação do chepeamento da porta.png";



export default function Instalação() {
    document.title = "Guia De Instalação";
    Comps.Pix.defaultProps = {
        width: "350",
    };

    return( <>
        <article>
            <t1>Drywall - 4 Passos para executar o trabalho</t1>
            <Comps.Pix url={ instalaçãoDoChepeamentoDaPorta } width={ "900px" } />
            <ol>
                <li>
                    <t3>Instalação das guias inferior e superior</t3>
                    <ol>
                        <li>riscar o chão na posição da guia ( levando em conta a espessura da placa&lt;1cm p/ trás&gt; )</li>
                        <li>
                            transferir para o teto essa medida com o nível a laser
                            <ul>
                                <li>com o nível de bolha, tirar a medida nas duas faces:</li>
                                <li>frente e lado</li>
                            </ul>
                        </li>
                        <li>
                            Fixação da guia de baixo
                            <ul>
                                <li>1 parafuso em cada ponta</li>
                                <li>1 parafuso à cada 1 metro</li>
                                <li>banda acústica sempre atrás da guia (entre o chão e a guia)</li>
                            </ul>
                        </li>
                    </ol>
                </li>
                <li>
                    <t3>Instalação dos montantes</t3>
                    <ul>
                        <li>Instalação:
                            <ol>
                                <li>Instalação dos montantes fixos das extremidades</li>
                                <li>
                                    distância entre os montantes internos
                                    <ul>
                                        <li>chapas st: 60cm</li>
                                        <li>chapas ru: 40cm</li>
                                    </ul>
                                </li>
                                <li>faz a marcação de corte da altura dos montantes com 0.5cm de folga</li>
                                <li>corta primeiro as laterais</li>
                                <li>dobra na posição do meio e corta a frente</li>
                                <li>acerta as beiradas do corte com o alicate</li>
                                <li>os montantes devem estar com a parte aberta no sentido oposto ao do chapeamento</li>
                                <li>os furos dos montantes devem estar alinhados</li>
                                <li>fixa os montantes do projeto</li>
                                <li>a fixação dos montantes internos devem permanecer soltos até a instalação do chapeamento</li>
                                <li>
                                    para montantes com pé direito alto
                                    <ul>
                                        <li>as partes do montante devem ser emendados com uma parte de guia de 60cm com 30cm para cada lado do transpasse</li>
                                        <li>cada transpasse deve ser fixado com dois parafusos dos dois lados</li>
                                        <li>na hora da montagem as emendas devem estar desencontradas em ralação aos montantes</li>
                                    </ul>
                                </li>
                            </ol>
                        </li>
                        <li>Instalação de cargas em drywall
                            <ul>
                                <li>o reforço deve ser feito com madeiras tratadas contra fungos e cupins</li>
                                <li>medias: 60cm x 20cm</li>
                                <li>faz a marcação do eixo na madeira e nos montantes</li>
                                <li>3 parafusos em cada lado</li>
                                <li>para até 30kg: buchas toggle bolt</li>
                                <li>para pesos maiores: montantes duplos, um de costas para o outro</li>
                            </ul>
                        </li>
                        <li>paredes em L
                            <ul>
                                <li>a parede B não deve ser encostada na parede A, deve ser levado em conta a expessura da chapa também</li>
                                <li>os montantes da parede B devem ser instalados à 60cm entre: com referencia ao montante da parede A
                                    <br />
                                    <Comps.Pix url={ paredeEmL } />
                                </li>
                            </ul>
                        </li>
                        <li>
                            Janelas
                            <ul>
                                <li>são instalados dois montantes como batentes da janela</li>
                                <li>ambos com o lado aberto voltado para dentro</li>
                                <li>respeitando o espaço de 60cm, devem ser instalados os montantes auxiliares
                                    <br />
                                    <Comps.Pix url={ janela } />
                                </li>
                                <li>para janelas coladas com espuma, a estrutura pode ser deixada no aço mesmo</li>
                                <li>para janelas com trilhos do vidro, deve ser feito o chapeamento e o tratamento de quina</li>
                                <li>nas áreas das curvas da janela ou porta, não deve ter as emendas, deve ser inteira</li>
                            </ul>
                        </li>
                        <li>Vão de portas
                            <ul>
                                <li>A porta nunca encosta direto na parede, precisa de 10cm </li>
                                <li>espaço da porta = tamanho total da porta acabada + 1cm de cada lado para receber a espuma</li>
                                <li>chapas de reforço de pelo menos 15cm</li>
                                <li>um montante à 20cm de distância do montante de batente da porta</li>
                                <li>para portas grandes ou pesadas = dois montantes ou com madeira dentro</li>
                                <li>
                                    montantes auxiliares e a travessa da porta
                                    <br />
                                    <Comps.Pix url={ MontantesAuxiliaresETravessaDaPorta } />
                                </li>
                                <li>regras de chapeamento de portas
                                    <ul>
                                        <li>
                                            uma chapa inteira desde a bandeira até a parte de baixo alcançavel
                                            <br />
                                            <Comps.Pix url={ instalaçãoDoChepeamentoDaPorta } />
                                        </li>
                                        <li>fazer cortes de marcações com o serrote e riscar com o lapis</li>
                                        <li>cortar com o serrote um lado e a parte da bandeira</li>
                                        <li>cortar com a estilete o outro lado por dentro e dobrar para fora</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <t3>Instalação das chapas drywall</t3>
                    <ul>
                        <li>as placas não devem ser fixadas encostando no chão</li>
                        <li>a primeira placa deve começar inteira de baixo para cima</li>
                        <li>a distancia entre os parafusos deve ser: 30cm</li>
                        <li>nas pontas não coloca parafusos</li>
                        <li>nas extremidades os parafusos devem formar um triangulo</li>
                        <li>os parafusos de uma placa deve ser desencontrado com os da outra</li>
                        <li>as placas devem ser desencontradas</li>
                        <li>na parte de trás a placa também deve ser desencontrada com a do outro lado</li>
                    </ul>
                </li>
                <li>
                    <t3>Tratamento das juntas ( fita e massa )</t3>
                    <ul>
                        <li>Materiais:
                            <ul>
                                <li>espatulas
                                    <ul>
                                        <li>pequena para pegar massa</li>
                                        <li>média: 20cm, para fazer o tratamento no rebaixo</li>
                                        <li>grande: 30cm, para topo e segurar a massa</li>
                                    </ul>
                                </li>
                                <li>fita para tratamento
                                    <ul>
                                        <li>fita de papel microperfurada</li>
                                        <li>fita telada: para reparos</li>
                                    </ul>
                                </li>
                                <li>massa para tratamento de juntas de drywall</li>
                            </ul>
                        </li>
                        <li>Tratamento:
                            <li>tratar primeiro todas as juntas de rebaixo</li>
                            <li>nas juntas de topo fazer uma camada extra maior para desfarçar o desnível da fita</li>
                            <li>quinas:
                                <ul>
                                    <li>perfuração na segunda fileira de furos</li>
                                    <li>parafusos desencontrados e a cada 40cm</li>
                                    <li>1° demão com massa para tratamento drywall</li>
                                    <li>2° demão com massa corrida</li>
                                </ul>
                            </li>
                        </li>
                    </ul>
                </li>
                <li>
                    <t3>Elétrica básica</t3>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </li>
            </ol>
            <tipos-de-montantes>
                <t2>Tipos de guias e montantes</t2>
                <ol>
                    <li>48mm: paredes e mobiliário</li>
                    <li>70mm: paredes com portas</li>
                    <li>90mm: parede de pé direito alto</li>
                </ol>
            </tipos-de-montantes>
        </article>
    </> );
}

