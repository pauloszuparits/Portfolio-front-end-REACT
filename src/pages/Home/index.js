import Header from "../../components/Header"
import videoH from '../../assets/video-home-2.mp4'
import './home.css'

export default function Home(){
    return(
        <div >
            <Header/>
            <div className="home-1">
                <div className="titulo-home">
                    <h1>Projeto portifolio </h1> 
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem consequuntur, officia magnam quaerat quasi vitae et ipsum animi illo delectus eum, vero voluptatem nobis labore quos earum sint recusandae deleniti?</p>
                </div>
                <video width="100%"  autoPlay muted loop>
                    <source src={videoH} />
                    
                </video>
                
            </div>
        </div>
    )
}