import { useContext, useState } from "react";
import Header from "../../components/Header";
import './cadastro.css';
import { AuthContext } from "../../contexts/Auth";
import { toast } from "react-toastify";
export default function Cadastro(){
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaCon, setSenhaCon] = useState('');

    const{cadastro, loading} = useContext(AuthContext);

    function handleSubmit(e){
        e.preventDefault();
        if(nome !== '' && email !== '' && senha !== '' && senhaCon !== ''){
            if(senha === senhaCon){
                cadastro(email, senha, nome);
    
                setNome('');
                setEmail('');
                setSenha('');
                setSenhaCon('');
            }else{
                toast.error('Senhas não conferem');
                setSenha('');
                setSenhaCon('');
            }
        }else{
            toast.error('Algum campo não foi preenchido, preencha e tente novamente')
        }
    }

    return(
        <div>
            <Header/>
            <div className="titulo-projetos">
                <h1>Cadastre-se</h1>
            </div>
            <div className="campos-cadastro">
                <form onSubmit={handleSubmit}>
                    <p>Nome e Sobrenome</p>
                    <input type="text"  placeholder="José Pereria" onChange={(e)=>{setNome(e.target.value)}}/>
                    <p>Email</p>
                    <input type="text"  placeholder="jose.pereira@gmail.com" onChange={(e)=>{setEmail(e.target.value)}}/>
                    <p>Senha</p>
                    <input type="password" placeholder="*******" onChange={(e)=>{setSenha(e.target.value)}}/>
                    <p>Confirmar senha</p>
                    <input type="password" placeholder="*******" onChange={(e)=>{setSenhaCon(e.target.value)}}/>
                    <br/>
                    {loading ?
                    <button>Carregando ...</button>
                    :
                    <button type="submit" >Cadastrar</button>}
                </form>
            </div>
        </div>
    )
}