import { Link } from "react-router-dom"
import './header.css'
import {AiOutlineMenu} from 'react-icons/ai'
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../contexts/Auth"
import avatar from '../../assets/avatar.png'
export default function Header(){
    const [sideBar, setSideBar] = useState(false);
    const {singed, user, deslogar} = useContext(AuthContext);

    useEffect(()=>{},[sideBar])
    function handleChange(){
        setSideBar(!sideBar);
    }
    
    return(
        <div>
            <div className="cabecalho">
                <div className="botoes-cabecalho">
                    <Link to="/">Home</Link>
                    <Link to="/projetos">Meus Projetos</Link>
                    <Link to="/sobre">Sobre Mim</Link>
                </div>

                {sideBar ?
                    <div className="Menu-hot-dog">
                        <button  onClick={handleChange}>
                            <Link to="/">Home</Link>
                        </button>
                        <button  onClick={handleChange}>
                            <Link to="/projetos">Meus Projetos</Link>
                        </button>
                        <button onClick={handleChange}>
                            <Link to="/sobre">Sobre Mim</Link>
                        </button>
                        <button onClick={handleChange}>Sair menu</button>
                    </div>
                    :
                    <div className="hotdog">
                        <button onClick={handleChange}>
                            <AiOutlineMenu size={25} color={'#fff'}/>
                        </button>
                    </div>
                }
                
                
                {singed ?
                    <div className="user-profile-head">
                        
                        <div>
                            <button onClick={deslogar} className="deslogar">Deslogar</button>
                            <Link to="/dashboard"><button>Meu Perfil</button></Link>
                        </div>
                        {user.avatarUrl === null ?
                            <img src={avatar} alt="avatar" width="50" height="50"/>
                        :
                            <img src={user.avatarUrl} alt="avatar" width="50" height="50"/>
                        }
                    </div>
                    :
                    <div className="botoes-cabecalho">
                        <Link to="/cadastro">Cadastre-se</Link>
                        <Link to="/login">Login</Link>
                    </div>
                }

                
            </div>
        </div>
    )
}