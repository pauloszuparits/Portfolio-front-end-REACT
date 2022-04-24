import Header from "../../components/Header"
import img1 from '../../assets/craps2.png';
export default function Craps(){
    return(
        <div>
            <Header/>

            <div className="titulo-projetos">
                <h1>Craps</h1>
                
            </div>
            <div className="cont-jgVelha">
                <h2>Introdução</h2>
                <p>Este foi o primeiro projeto que programei, foi feito logo que comecei a cursar Sistemas de Informação.
                O projeto foi feito em linguagem C e começou como um desafio da professora aos alunos
                </p>
                <img src={img1}/>
            </div>

            <div className="cont-jgVelha">
                <h2>Como jogar</h2>
                <p
                >O objetivo do jogo consiste em lançar um par de dados na mesa de Craps e prever o seu resultado. O jogador faz apostas no resultado do lançamento de dados. O jogo tem o seu foco apontado para a velocidade e o estilo ao mesmo tempo que mantém as qualidades de um jogo clássico.
                </p> 
            </div>
        </div>
    )
}