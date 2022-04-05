import Header from "../../components/Header"
import videoH from '../../assets/video-home-2.mp4'
import './home.css'
import { useRef } from "react"

export default function Home(){
  
    const ref = useRef(null);
    const executeScroll = () => ref.current.scrollIntoView();

    return(
        <div >
            <Header/>
            <div className="home-1">
                <div className="titulo-home">
                    <h1>Projeto portifolio </h1> 
                    <button onClick={executeScroll}>Saiba mais sobre este projeto</button>
                </div>
                <video width="100%" autoPlay muted loop>
                    <source src={videoH} />
                    
                </video>
                
                <div className="texto-home-1" ref={ref}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis cupiditate ducimus quas quibusdam maiores laboriosam eius. Fugit voluptates aperiam quo neque numquam obcaecati delectus facilis sit cum! Accusamus, minus culpa?</p></div>
            </div>
        </div>
    )
}