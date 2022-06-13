import Header from "../components/Header"
import './sobreMim.css';
import idiomas from '../assets/idiomas.png';
import habilidades from '../assets/habilidades.png';
import { useEffect, useState } from "react";
export default function Sobre(){
    
    
    useEffect(()=>{ 
        window.scrollTo(0, 0);
        
      }, [])

    return(
        <div>
            <Header/>
            <div className="sobre-mim-cabeca">
                <h1>Paulo <strong>Szuparits</strong></h1>
                <p>Campo Belo, Zona Sul, São Paulo - (11)9 8760 2831</p>
                <a href="mailto:pauloszuparits@hotmail.com" target="_blank">pauloszuparits@hotmail.com</a>
                <a href="https://www.linkedin.com/in/pauloszuparits/" target="_blank">Paulo Szuparits | Linkedin</a>
                <hr />
                <p>Busco um estágio na área de desenvolvimento/programação, para que eu possa abstrair o máximo de conhecimento possivel, e que este conhecimento me ajude no mercado de trabalho no futuro. Tenho variados projetos em diversas lingagens disponíveis em meu GitHub, além do meu portifólio que foi interiamente programado por mim usando o framework ReactJS. Programação sempre foi meu diferencial desde que comecei a cursar sistemas de informação, e hoje quero colocar tudo que sei em prática.</p>
            </div>

            <div className="sobre-mim-corpo">
                <div className="sobre-mim-esquerda">
                
                    <div>
                        
                        <h2>Educação</h2>
                        <ul>
                            <li>2016 - 2018</li>
                            <p className="sobre-title"><span>Ensino Médio</span> </p>
                            <p><span>Colégio dos Santos Anjos</span></p>
                            <li>2020 - 2024</li>
                            <p className="sobre-title"><span>Bacharelado em Sistemas de Informação</span> </p>
                            <p><span>Universidade Anhembi Morumbi</span></p>
                        </ul>
                    </div>

                    <div>
                        <h2>Idiomas</h2>
                        <img src={idiomas} alt="idiomas" />
                    </div>

                    <div>
                        <h2>Habilidades</h2>
                        <img src={habilidades} alt="habilidades" />
                    </div>
                </div>
                <div className="sobre-mim-direita">
                    <div>
                        <h2>Experiencia</h2>
                        <ul>
                            <li>2021 - Atualmente</li>
                            <p className="sobre-title"><span>Pré-Vendas</span></p>
                            <p className="sobre-title"><span>Orange Business Services</span></p>
                            <p>Trabalhando como estágiario em Pré-Vendas.
                            O pré-vendas é responsável pela parte técnica em vendas, conversando com o cliente para entender suas necessidades.
                            Para este cargo, é necessario entendimento técnico de hardware de redes como switch, acesspoint e roteadores.</p>
                        </ul>
                    </div>
                    <div>
                        <h2>Sobre mim</h2>
                        <ul>
                            <li><p>Sou apaixonado por tecnologia e hoje com meus 21 anos estou em busca de novos desafios.
                            Após passar mais de um ano em um multinacional absorvendo todos aprendizados possíveis, agora estou em busca de conhecimentos na área que sou apaixonado, desenvolvimento/programação.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            
        </div>
    )
}