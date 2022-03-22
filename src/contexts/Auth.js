import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import firebase from '../services/firebaseConection'

export const  AuthContext = createContext({});

function AuthProvider({children}){
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);

    

    useEffect(()=>{

        function loadStorage(){
            const storageUser = localStorage.getItem('SistemaUser');
            if(storageUser){
                setUser(JSON.parse(storageUser));
                setLoading(false);
            }
    
            setLoading(false);
        }
        loadStorage();
        
    },[])

    async function logar(email, senha){
        setLoading(true);

        await firebase.auth().signInWithEmailAndPassword(email, senha)
        .then(async (value)=>{
            let uid = value.user.uid;

            const userProfile = await firebase.firestore().collection('users')
            .doc(uid).get();

            let data = {
                uid: uid,
                nome: userProfile.data().nome,
                avatarUrl: userProfile.data().avatarUrl,
                empresa: userProfile.data().empresa,
                email: value.user.email
            }

            setUser(data);
            storeUser(data);
            setLoading(false);
            toast.success('Bem vindo de volta');
        })
        .catch((error)=>{
            setLoading(false);
            toast.error('Algo deu errado');
        })
    }

    async function cadastro(email, senha, nome, empresa){
        setLoading(true);
        await firebase.auth().createUserWithEmailAndPassword(email, senha)
        .then(async(value)=>{
            let uid = value.user.uid;

            await firebase.firestore().collection('users')
            .doc(uid).set({
                nome: nome,
                empresa: empresa,
                avatarUrl: null,
            })
            .then(()=>{
                let data = {
                    uid: uid,
                    nome: nome,
                    email: value.user.email,
                    empresa: empresa,
                    avatarUrl: null
                };

                setUser(data);
                storeUser(data);
                setLoading(false);
                toast.success('Cadastro Efetuado com sucesso');
            })
            .catch((error)=>{
                console.log(error);
                toast.error('Algo saiu errado, tente novamente mais tarde');
                setLoading(false);
            })
        })
    }

    async function deslogar(){
        await firebase.auth().signOut();
        localStorage.removeItem('SistemaUser')
        setUser(null);
    }

    function storeUser(data){
        localStorage.setItem('SistemaUser', JSON.stringify(data));
    }

    return(
        <AuthContext.Provider
        value={{
            singed: !!user,
            user,
            loading,
            cadastro,
            logar,
            deslogar, 
            setUser,
            storeUser,
            
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
