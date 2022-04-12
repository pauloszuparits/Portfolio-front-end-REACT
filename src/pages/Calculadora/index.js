import "./calculadora.css"
import {useState} from 'react'
import Header from "../../components/Header";


export default function Calculadora(){

    const [input, setInput] = useState([]);
    
    //seta a entrada
    function entrada(valor){
        setInput([...input, valor]);
        
    }
    //junta e faz a conta -> chamada no igual
    function juntar(){
        let consolidado = input.map(item=>{return item}).join('');//remove as virgulas
        let resultado = eval(consolidado);
        
        if(isNaN(resultado) || resultado === Infinity){
            resultado = 'ERRO!!!';
            console.log(resultado)
        }
        setInput([resultado]);
    }
    //função do botao remover -> chamada na seta
    function remover(){
        let exp = [...input];
        exp.pop();
        exp = exp.map(item=>{return item}).join('');
        setInput([...exp]);
    }

    //botoes
    return(
        <div>
            <Header/>
            <h1 className="titulo-projetos">Projeto Calculadora</h1>
            <div className="projetos">
                <p className="botoes">
                    {/* numeros aparecem aqui */}
                    <input type="text" id="input" value={input.map(item=>{return item}).join('')}/>
                    {/* botao para remover caractere */}
                    <button className="botao" onClick={()=>{remover()}}> &larr; </button>
                </p>
                <p className="botoes">
                    <button  onClick={()=>{entrada(1)}}>1</button>
                    <button  onClick={()=>{entrada(2)}}>2</button>
                    <button  onClick={()=>{entrada(3)}}>3</button>
                    <button  onClick={()=>{entrada('+')}}>+</button>
                </p>
                <p className="botoes">
                    <button  onClick={()=>{entrada(4)}}>4</button>
                    <button  onClick={()=>{entrada(5)}}>5</button>
                    <button  onClick={()=>{entrada(6)}}>6</button>
                    <button  onClick={()=>{entrada('-')}}>-</button>
                </p>
                <p className="botoes">
                    <button  onClick={()=>{entrada(7)}}>7</button>
                    <button  onClick={()=>{entrada(8)}}>8</button>
                    <button  onClick={()=>{entrada(9)}}>9</button>
                    <button  onClick={()=>{entrada('*')}}>x</button>
                </p>
                <p className="botoes">
                    <button  onClick={()=>{setInput([])}}>c</button>
                    <button  onClick={()=>{entrada(0)}}>0</button>
                    <button  onClick={()=>{entrada('/')}}>/</button>
                    <button  onClick={()=>{juntar()}}>=</button>
                </p>
            </div>
            
            <div className="sobre-projetos">
                <h2>Sobre o projeto</h2>
                <p>
                    Uma calculadora simples com as principais operações, e também com alertas de erro caso a operação seja inválida.<br/>
                    Este projeto foi feito primeiramente em Javascript puro, e depois, usei o framework React para melhora-lo.
                </p>
                
                <h2>Tempo dedicado: <span>1-2 horas</span> </h2>
                
                
            </div>
        </div>
    );
}