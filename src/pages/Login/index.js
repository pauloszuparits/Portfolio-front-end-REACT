import Header from "../../components/Header"
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/Auth";
import { Link } from "react-router-dom";


export default function Login(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const {logar, loading, singed} = useContext(AuthContext);
    function login(e){
        e.preventDefault();
        if(email !== '' && senha !== ''){
            logar(email, senha);
        }
    }
    if(singed){
        return(
            <div>
                <Header/>
                <div>
                    <h1>Acesse seu dashboard</h1>
                    <Link to="/dashboard">Clique aqui</Link>
                </div>
            </div>
        );
    }
    return(
        <div>
            <Header/>
            <div className="titulo-projetos">
                <h1>Login</h1>
            </div>
            <div className="campos-cadastro">
                <form onSubmit={login}>
                    <p>Email</p>
                    <input type="text"  placeholder="jose.pereira@gmail.com" onChange={(e)=>{setEmail(e.target.value)}}/>
                    <p>Senha</p>
                    <input type="password" placeholder="*******" onChange={(e)=>{setSenha(e.target.value)}}/>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}