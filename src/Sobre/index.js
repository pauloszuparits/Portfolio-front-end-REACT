import Header from "../components/Header"
import './sobreMim.css';
export default function Sobre(){
    return(
        <div>
            <Header/>
            <div className="sobre-mim-cabeca">
                <h1>Paulo Szuparits</h1>
                <p>Campo Belo, Zona Sul, São Paulo - (11)9 8760 2831</p>
                <a href="mailto:pauloszuparits@hotmail.com">pauloszuparits@hotmail.com</a>
                <a href="">Paulo Szuparits | Linkedin</a>
                <hr />
                <p>Busco um estágio na área de desenvolvimento/programação, para que eu possa abstrair o máximo de conhecimento possivel, e que este conhecimento me ajude no mercado de trabalho no futuro. Tenho variados projetos em diversas lingagens disponíveis em meu GitHub, além do meu portifólio que foi interiamente programado por mim usando o framework ReactJS. Programação sempre foi meu diferencial desde que comecei a cursar sistemas de informação, e hoje quero colocar tudo que sei em prática.</p>
            </div>

            <div className="sobre-mim-corpo">
                <div className="sobre-mim-esquerda">
                    <div>
                        <h3>Educação</h3>
                    
                        <ul>
                            <li>2016-2018</li>
                            <span>Ensino Médio</span> <br/>
                            <span>Colégio dos Santos Anjos</span>
                            <li>2020-2024</li>
                            <span>Bacharelado em Sistemas de Informação</span> <br/>
                            <span>Universidade Anhembi Morumbi</span>
                        </ul>
                    </div>

                    <div>
                        <h2>Idiomas</h2>
                    </div>

                    <div>
                        <h2>Habilidades</h2>
                    </div>
                </div>
                <div className="sobre-mim-direita">
                    <div>
                        <h3>Experiencia</h3>
                        <ul>
                            <li>2021-Atualmente</li>
                            <span>Pré-Vendas</span>
                            <span>Orange Business Services</span>
                            <p>Trabalhando como estágiario em Pré-Vendas.
                            O pré-vendas é responsável pela parte técnica em vendas, conversando com o cliente para entender suas necessidades.
                            Para este cargo, é necessario entendimento técnico de hardware de redes como switch, acesspoint e roteadores.</p>
                        </ul>
                    </div>
                    <div>
                        <h2>Sobre mim</h2>
                        <ul>
                            <li>Sou apaixonado por tecnologia e hoje com meus 21 anos estou em busca de novos desafios.
                            Após passar mais de um ano em um multinacional absorvendo todos aprendizados possíveis, agora estou em busca de conhecimentos na área que sou apaixonado, desenvolvimento/programação.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            
        </div>
    )
}