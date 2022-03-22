import { AuthContext } from "../contexts/Auth";
import Header from "../components/Header";
import { useContext, useEffect, useState } from "react";
import avatar from '../assets/avatar.png';
import './dashboard.css'
import { FiUpload } from 'react-icons/fi'
import { toast } from "react-toastify";
import firebase from '../services/firebaseConection';
import { Link } from "react-router-dom";

export default function Dashboard(){
    const{user, singed, setUser, storeUser} = useContext(AuthContext);
    
    
    const [nome, setNome] = useState(user && user.nome);
    const [email, setEmail] = useState(user && user.email);
    const [empresa, setEmpresa] = useState(user && user.empresa);
    const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl);
    const [imageAvatar, setImageAvatar] = useState(null);

    useEffect(()=>{
        setNome(user && user.nome);
        setEmail(user && user.email);
        setEmpresa(user && user.empresa);
        setAvatarUrl(user && user.avatarUrl);
    },[user]);

    function handleFile(e){
        if(e.target.files[0]){
            const image = e.target.files[0];

            if(image.type === 'image/jpeg' || image.type === 'image/png'){
                setImageAvatar(image);
                setAvatarUrl(URL.createObjectURL(e.target.files[0]))
            }else{
                toast.error('Tipo de imagem inválido, selecione uma imagem JPEG ou PNG');
                setAvatarUrl(null);
                return null;
            }
        }
    }

    async function handleUpload(){
        const currentUid = user.uid;

        const uploadTask = await firebase.storage()
        .ref(`images/${currentUid}/${imageAvatar.name}`)
        .put(imageAvatar)
        .then(async()=>{
            console.log('FOTO ENVIADA COM SUCESSO');

            await firebase.storage().ref(`images/${currentUid}`)
            .child(imageAvatar.name).getDownloadURL()
            .then(async (url)=>{
                let urlFoto = url;

                await firebase.firestore().collection('users')
                .doc(user.uid)
                .update({
                    avatarUrl: urlFoto,
                    nome: nome
                })
                .then(()=>{
                    let data = {
                        ...user,
                        avatarUrl: urlFoto,
                        nome: nome
                    }
                    setUser(data);
                    storeUser(data);
                });
            })
        })
    }

    async function handleSave(e){
        e.preventDefault();

        if(imageAvatar === null && nome !== '' && empresa !== ''){
            await firebase. firestore().collection('users')
            .doc(user.uid)
            .update({
                nome: nome,
                empresa: empresa
            })
            .then(()=>{
                let data = {
                    ...user,
                    nome: nome,
                    empresa: empresa
                };

                setUser(data);
                storeUser(data);
            })
        }else if(nome !== '' && imageAvatar !== null){
            handleUpload();
        }
    }
       
    if(!singed){
        return(
            <div>
                <Header/>
                <div className="redirect">
                    <h2>Você não está logado!</h2>
                    
                        <Link to="/login"><button>Clique aqui para fazer seu login</button></Link>
                        <h3>Ou</h3>
                        <Link to="/cadastro"><button>Clique aqui para fazer seu cadastro</button></Link>
                </div>
            </div>
        );
    }
    return(
        <div>
            <Header/>
            <div className="dashboard-itens">
                <form onSubmit={handleSave} className="form-profile">
                    <label className="label-avatar">
                        <span>
                            <FiUpload color='white' size={25}/>
                        </span>

                        <input type="file" accept='image/*' onChange={handleFile}/><br />
                        {avatarUrl === null  ?
                            <img src={avatar} width="250" height="250" alt='Foto de perfil'/>
                        :
                            <img src={avatarUrl} width="250" height="250" alt='Foto de perfil'/>
                        }
                    </label>
                
                    <div className="campos">
                        <div>
                            <p>Nome:</p>
                            <input type="text" value={nome} onChange={(e)=>{setNome(e.target.value)}}/>
                        
                        </div>
                        <div>
                        <p>Email:</p>
                            <input type="text" value={email} disabled={true}/>
                        </div>
                        <div>
                            <p>Empresa:</p>
                            <input type="text" value={empresa} onChange={(e)=>{setEmpresa(e.target.value)}}/>
                        </div>
                        <button type="submit">Salvar</button>
                    </div>
                </form>
                
                
                
                
            </div>
        </div>
    )
}