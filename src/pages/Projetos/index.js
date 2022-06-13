import Header from "../../components/Header";
import './projetos.css';
import imgCalculadora from '../../assets/calculadora.png';
import imgCronometro from '../../assets/cronometro.png';
import imgGerador from '../../assets/gerados.png';
import imgTarefas from '../../assets/tarefas.png';
import imgJogoDaVelha from '../../assets/jogo-da-velha.png'
import imgBlackJack from '../../assets/siteSaudavel.png';
import imgCraps from '../../assets/craps.png'
import imgChat from '../../assets/chat-bot.png'
import { Link } from "react-router-dom"
import { useEffect } from "react";
import {AiOutlineArrowRight} from 'react-icons/ai'
export default function Projetos(){

    useEffect(()=>{ 
        window.scrollTo(0, 0);
        
      }, []);
      
    return(
        <div>
            <Header/>
            
            <div className="titulo-projetos">
                <h1>Meus Projetos</h1>
            </div>
            
            <div className="texto-projetos">
                <p>
                    Aqui estão alguns dos meus projetos que programei em React.

                    Também algumas imagens de outros projetos em linguagens como java, python, entre outras.

                    Os projetos em React podem ser clicados para utilização, enquanto os projetos em outra linguagem após clicados redirecionarão para meu github.
                </p>
            </div>
            
            <div className="projetos-react">
                <h2 className="titulo-projetos2">Projetos em React</h2>
                <div className="imagens-projetos">
                
                    <div className="imgProjetos">
                    <h3>Calculadora</h3>
                        <Link to="/projetos/calculadora"><img id="calculadora" src={imgCalculadora} /></Link>
                        <Link to="/projetos/calculadora"> <p>Saiba mais sobre esse projeto <AiOutlineArrowRight/></p>  </Link>
                        <a href="https://github.com/pauloszuparits/Portifolio/tree/main/src/pages/Calculadora" target="_blank" rel="noopener noreferrer">
                            <p>Acessar este projeto no GitHub <AiOutlineArrowRight/></p>
                        </a>
                    </div>
                    <div className="imgProjetos">
                    <h3>Cronometro</h3>
                        <Link to="/projetos/cronometro"><img id="cronometro" src={imgCronometro} /></Link>
                        <Link to="/projetos/cronometro"> <p>Saiba mais sobre esse projeto <AiOutlineArrowRight/></p>  </Link>
                        <a href="https://github.com/pauloszuparits/Portifolio/tree/main/src/pages/Cronometro" target="_blank" rel="noopener noreferrer">
                            <p>Acessar este projeto no GitHub <AiOutlineArrowRight/></p>
                        </a>
                    </div>
                    <div className="imgProjetos">
                        <h3>Gerador de Senhas</h3>
                        <Link to="/projetos/geradorsenhas"><img id="gerador" src={imgGerador} /></Link>
                        <Link to="/projetos/geradorsenhas"> <p>Saiba mais sobre esse projeto <AiOutlineArrowRight/></p>  </Link>
                        <a href="https://github.com/pauloszuparits/Portifolio/tree/main/src/pages/GeradorSenhas" target="_blank" rel="noopener noreferrer">
                            <p>Acessar este projeto no GitHub <AiOutlineArrowRight/></p>
                        </a>
                    </div>
                    <div className="imgProjetos">
                        <h3>Organizazdor de Tarefas</h3>
                        <Link to="/projetos/tarefas"><img id="tarefas" src={imgTarefas} /></Link>
                        <Link to="/projetos/tarefas"> <p>Saiba mais sobre esse projeto <AiOutlineArrowRight/></p>  </Link>
                        <a href="https://github.com/pauloszuparits/Portifolio/tree/main/src/pages/Tarefas" target="_blank" rel="noopener noreferrer">
                            <p>Acessar este projeto no GitHub <AiOutlineArrowRight/></p>
                        </a>
                    </div>
                    
                </div>

            </div>
            <div className="projetos-react">
                    <h2 className="titulo-projetos2">Projetos em outras linguagens</h2>

                    <div className="imagens-projetos">
                        <div className="imgProjetos">
                            <h3>Jogo da Velha (Python) </h3>
                            <Link to="/projetos/jogodavelha"><img id="tarefas" src={imgJogoDaVelha} /></Link>
                            <Link to="/projetos/jogodavelha"> <p>Saiba mais sobre esse projeto <AiOutlineArrowRight/></p>  </Link>
                            <a href="https://github.com/pauloszuparits/Projetos_Programacao/tree/main/Jogo%20da%20Velha" target="_blank" rel="noopener noreferrer">
                            <p>Acessar este projeto no GitHub <AiOutlineArrowRight/></p>
                            </a>

                        </div>

                        <div className="imgProjetos">
                            <h3>Site Saudavel(NodeJS+EJS) </h3>
                            <Link to="/projetos/siteSaudavel"><img id="tarefas" src={imgBlackJack} /></Link>
                            <Link to="/projetos/siteSaudavel"> <p>Saiba mais sobre esse projeto <AiOutlineArrowRight/></p>  </Link>
                            <a href="https://github.com/pauloszuparits/Projeto_Node-Mongo" target="_blank" rel="noopener noreferrer">
                            <p>Acessar este projeto no GitHub <AiOutlineArrowRight/></p>
                            </a>
                        </div>

                        <div className="imgProjetos">
                            <h3>CRAPS (C) </h3>
                            <Link to="/projetos/craps"><img id="tarefas" src={imgCraps} /></Link>
                            <Link to="/projetos/craps"> <p>Saiba mais sobre esse projeto <AiOutlineArrowRight/></p>  </Link>
                            <a href="https://github.com/pauloszuparits/Projetos_Programacao/tree/main/CRAPS" target="_blank" rel="noopener noreferrer">
                            <p>Acessar este projeto no GitHub <AiOutlineArrowRight/></p>
                            </a>
                        </div>
                        
                        <div className="imgProjetos chatbot">
                            <h3>ChatBot (Java) </h3>
                            <Link to="/projetos/chatbot"><img id="tarefas" src={imgChat} /></Link>
                            <Link to="/projetos/chatbot"> <p>Saiba mais sobre esse projeto <AiOutlineArrowRight/></p>  </Link>
                            <a href="https://github.com/pauloszuparits/Projetos_Programacao/tree/main/CHATBOT" target="_blank" rel="noopener noreferrer">
                            <p>Acessar este projeto no GitHub <AiOutlineArrowRight/></p>
                            </a>
                        </div>
                    </div>
                    
                </div>
        </div>
    )
}