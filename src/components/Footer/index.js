import './footer.css';
import {AiOutlineLinkedin} from 'react-icons/ai';
import {AiOutlineGithub} from 'react-icons/ai';
import {AiOutlineWhatsApp} from 'react-icons/ai';
import {AiOutlineMail} from 'react-icons/ai';

export default function Footer(){
    return(
        <div className="footer">
            <div>
                
                <a href="https://www.linkedin.com/in/pauloszuparits/" target="_blank">
                    <AiOutlineLinkedin size={35}/> 
                </a> 
                            
                 <a href="mailto:pauloszuparits@hotmail.com">
                     <AiOutlineMail size={35}/>
                 </a>
                 <a href="https://github.com/pauloszuparits" target="_blank">
                     <AiOutlineGithub size={35}/>
                 </a>
                 <a href="https://wa.me/5511987602831" target="_blank">
                     <AiOutlineWhatsApp size={35}/>
                 </a>
            </div>
            <div><p>Paulo Szuparits © 2022</p></div>
        </div>
    )
}