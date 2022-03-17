import { Link } from "react-router-dom"
import './header.css'
import {AiOutlineMenu} from 'react-icons/ai'
import { useState } from "react"
export default function Header(){
    const [sideBar, setSideBar] = useState(false);

    function handleChange(){
        setSideBar(!sideBar);
    }
    
    return(
        <div>
            <div className="cabecalho">
                <div className="botoes-cabecalho">
                    <Link to="/">Home</Link>
                    <Link to="/projetos">Meus Projetos</Link>
                </div>
                <div className="hotdog">
                    <button onClick={handleChange}>
                        <AiOutlineMenu size={25} color={'#fff'}/>
                    </button>
                </div>
                <div>
                    <h2 id="logo-principal">Paulo Szuparits</h2>
                </div>
                <div className="botoes-cabecalho">
                    <Link to="/cadastro">Cadastre-se</Link>
                    <Link to="/login">Login</Link>
                </div>
            </div>
        </div>
    )
}