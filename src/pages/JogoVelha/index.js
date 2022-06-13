import Header from "../../components/Header";
import './jogovelha.css';
import img1 from '../../assets/jogo-da-velha.png';
import img2 from '../../assets/jogo-da-velha-1.png';
import { useEffect } from "react";
export default function JogoVelha(){

    useEffect(()=>{ 
        window.scrollTo(0, 0);
        
      }, []);

    return(
        <div>
            <Header/>

            <div className="titulo-projetos">
                <h1>Jogo da Velha</h1>
                
            </div>
            
                <div className="cont-jgVelha">
                    <h2>Introdução</h2>
                    <p>Este projeto foi meu primeiro projeto em Python.
                    Consiste basicamente em um jogo da velha simples com dois jogadores.
                    </p>
                    <img src={img1}/>
                </div>

                <div className="cont-jgVelha">
                    <h2>Como jogar</h2>
                    <p>O jogador 1 escolhe se irá jogar com X ou com o 0, após a escolha do jogador, o jogo começa.</p>
                    <p>O jogo consiste em escolher uma coluna e uma linha para jogar a “peça”.</p>
                    <img src={img2}/>
                    
                    
                </div>
                <div className="cont-jgVelha">
                    <h2>Regras do jogo</h2>
                    <p>As regras são iguais as regras do jogo da velha tradicional onde se o jogador completar uma linha com 3 peças iguais ele ganha.</p>
                </div>
            </div>
        
    )
}