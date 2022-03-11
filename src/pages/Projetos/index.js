import Header from "../../components/Header"
import './projetos.css'
import imgCalculadora from '../../assets/calculadora.png'
import imgCronometro from '../../assets/cronometro.png'
import { Link } from "react-router-dom"
export default function Projetos(){
    return(
        <div>
            <Header/>
            
            <h1 id="titulo-projetos">Meus Projetos</h1>
            
            <div className="texto-projetos">
                <p>
                    Aqui estão alguns dos meus projetos que programei em React.

                    Também algumas imagens de outros projetos em linguagens como java, python, entre outras.

                    Os projetos em React podem ser clicados para utilização, enquanto os projetos em outra linguagem após clicados redirecionarão para meu github
                </p>
            </div>
            <h2 id="titulo-projetos-react">Projetos em React</h2>
            <div className="projetos-react">
                
                <div>
                    <h3>Calculadora</h3>
                    <Link to="/projetos/calculadora"><img id="calculadora" src={imgCalculadora} /></Link>
                    <Link to="/projetos/cronometro"><img id="cronometro" src={imgCronometro} /></Link>
                </div>
            </div>
        </div>
    )
}