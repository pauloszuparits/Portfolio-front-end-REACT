import Header from "../../components/Header";

import {AiOutlineGithub} from 'react-icons/ai';
export default function BlackJack(){
    return(
        <div>
            <Header/>

            <div className="titulo-projetos">
                <h1>Site Sáudavel - (Projeto Back End + Front End)</h1>
                
            </div>
            <div className="cont-jgVelha">
                <h2>Introdução</h2>
                <p>Este projeto foi um site que fiz para minha graduação que consiste basicamente em um site com back e front end completos, com 5 operações CRUD usando MongoDB como banco de dados sendo delas, cadastro e login.</p>
            </div>

            <div className="cont-jgVelha">
                <h2>Um pouco da interface</h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/rAp-qhQvvS8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <div className="cont-jgVelha link-github">
                <a href="https://github.com/pauloszuparits/Projeto_Node-Mongo" target="__blank">Acesse este projeto no GitHub <AiOutlineGithub size={35}/></a>
            </div>
        </div>
    )
}