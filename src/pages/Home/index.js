import Header from "../../components/Header"
import videoH from '../../assets/video-home-2.mp4'
import './home.css'
import { useRef } from "react"
import {AiOutlineArrowDown} from 'react-icons/ai'
export default function Home(){
  
    const ref = useRef(null);
    const executeScroll = () => ref.current.scrollIntoView();

    return(
        <div >
            <Header/>
            <div className="home-1">
                <div className="titulo-home">
                    <h1><strong>Paulo Szuparits</strong></h1>
                    <div className="intro">
                        <div>
                            <span>Sistema de informação</span>
                            <span>5º semestre</span>
                        </div>
                        <button onClick={executeScroll}>Saiba mais sobre este projeto <label ><AiOutlineArrowDown size={30}/></label></button>
                    </div>
                    
                </div>
                <video width="100%" autoPlay muted loop>
                    <source src={videoH} />
                    
                </video>
                
                <div className="texto-home-1" ref={ref}>
                    <div>
                        <h2>Sobre este Projeto</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quis repudiandae accusamus similique sed ea. Omnis consectetur quod laudantium, animi quis ducimus eveniet, cumque aperiam doloremque recusandae quisquam neque iure.</p>
                    </div>
                    <hr/>
                    <div>
                        <h2>Sobre mim</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur praesentium tenetur labore eius odit beatae quasi ipsam aliquam facilis totam temporibus fugit provident vitae, laboriosam, velit numquam, laudantium officiis aliquid?</p>
                    </div>
                </div>

                <div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi labore obcaecati explicabo nulla esse consequuntur distinctio! Dicta, blanditiis. Rerum, recusandae! Esse reprehenderit adipisci possimus id rerum quidem quo. Accusantium, quaerat!</p>
                </div>
            </div>
        </div>
    )
}