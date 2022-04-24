import Header from "../../components/Header";
import img1 from '../../assets/blackjack1.png';
import img2 from '../../assets/blackjack4.png';
export default function BlackJack(){
    return(
        <div>
            <Header/>

            <div className="titulo-projetos">
                <h1>BlackJack</h1>
                
            </div>
            <div className="cont-jgVelha">
                <h2>Introdução</h2>
                <p>Este projeto foi feito como um trabalho minha graduação, que consiste basicamente em usar uma pilha para fazer um jogo chamado BlackJack, utilizei a linguagem java para este projeto.</p>
            </div>

            <div className="cont-jgVelha">
                <h2>Como Jogar</h2>
                <p>
                    O jogo começa com um menu inicial onde o usuário pode escolher entre 3 opções. <br />
                    
                </p>
                <img src={img1}/>
                <p>
                    O jogador pode escolher também, a dificuldade do oponente, no caso, o próprio computador será o adversário. 
                    Após começar o jogo, o usuário jogará contra o computador, e terá a escolha entre pedir mais cartas, ou manter, assim, o computador irá tirar cartas aleatórias e dependendo do nível da dificuldade, o computador pode arriscar mais ou menos.
                </p>
                <img src={img2} width="500px"/>
            </div>

            <div className="cont-jgVelha">
                <h2>Regras do jogo</h2>
                <p>
                    O objetivo do jogo é fazer 21 pontos ou mais próximo disso, o jogador que fizer mais pontos sem ultrapassar 21 vence. <br />
                    A carta “Ás” pode valer 1 ou 11. <br />
                    Valete, dama e rei valem 10 pontos. <br />
                    As demais cartas valem seus respectivos valores. <br />
                </p>
            </div>
        </div>
    )
}