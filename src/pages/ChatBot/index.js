import Header from "../../components/Header"
import img1 from '../../assets/chat-bot2.png';
import { useEffect } from "react";
export default function ChatBot(){
    useEffect(()=>{ 
        window.scrollTo(0, 0);
        
      }, []);
    return(
        <div>
            <Header/>

            <div className="titulo-projetos">
                <h1>ChatBot</h1>
                
            </div>
            <div className="cont-jgVelha">
                <h2>Introdução</h2>
                <p>Este projeto foi feito como um trabalho minha graduação, que consiste basicamente em um chatbot com algumas perguntas simples onde o “bot” irá respondê-las.
                </p>
            </div>

            <div className="cont-jgVelha">
                <h2>Algumas perguntas</h2>
                <p>O chat pode responder algumas perguntas como, seu nome, que dia é hoje, as horas, incrementar um contador e até mesmo contar piadas!</p>
                <img src={img1}/>
            </div>
        </div>
    )
}