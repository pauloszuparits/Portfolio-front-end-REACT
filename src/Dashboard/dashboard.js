import { AuthContext } from "../contexts/Auth"
import Header from "../components/Header"
import { useContext } from "react"
export default function Dashboard(){
    const{singed, deslogar} = useContext(AuthContext);
    if(!singed){
        return(
            <div>
                Não esta logado
            </div>
        );
    }
    return(
        <div>
            <Header/>
            <button onClick={deslogar}>Deslogar</button>
        </div>
    )
}