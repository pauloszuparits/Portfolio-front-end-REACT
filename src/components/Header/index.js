import { Link } from "react-router-dom"
import './header.css'
export default function Header(){
    return(
        <div className="cabecalho">

            <div className="botoes-cabecalho">
                <Link to="/">Home</Link>
                <Link to="/projetos">Meus Projetos</Link>
            </div>

            <div>
                <h2 id="logo-principal">Paulo Szuparits</h2>
            </div>

            <div>
                <input type="search" />
            </div>
        </div>
    )
}