import { Link } from "react-router-dom"
import './header.css'
import {AiOutlineMenu} from 'react-icons/ai'
export default function Header(){
    return(
        <div>
            <div className="cabecalho">
                <div className="botoes-cabecalho">
                    <Link to="/">Home</Link>
                    <Link to="/projetos">Meus Projetos</Link>
                </div>
                <div className="hotdog">
                    <button>
                        <AiOutlineMenu size={25} color={'#fff'}/>
                    </button>
                </div>
                <div>
                    <h2 id="logo-principal">Paulo Szuparits</h2>
                </div>
                <div>
                    <input type="search" />
                </div>
            </div>
        </div>
    )
}