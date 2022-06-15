import { useState } from 'react';
import './tarefas.css'
import Draggable from "react-draggable";
import { useEffect } from "react";
import Header from "../../components/Header";
export default function Tarefas(){

    const[tarefa, setTarefa] = useState('');
    const[descricao, setDescricao] = useState('');
    const[tarefas, setTarefas] = useState([]);
    const[contador, setContador] = useState(0);
    
    //condicional render
    const[amareloB, setAmareloB] = useState(false);
    const[laranjaB, setLaranjaB] = useState(false);
    const[vermelhoB, setVermelhoB] = useState(false);
    const[verdeB, setVerdeB] = useState(false);
    const[azulB, setAzulB] = useState(false);
    
    //subtitles
    const[amareloLeg, setAmareloLeg] = useState('');
    const[laranjaLeg, setLaranjaLeg] = useState('');
    const[vermelhoLeg, setVermelhoLeg] = useState('');
    const[verdeLeg, setVerdeLeg] = useState('');
    const[azulLeg, setAzulLeg] = useState('');

    //position
    const[posicao, setPosicao] = useState({x: -3, y:10})

    //select color value
    const[cor, setCor] = useState("amarelo");

    useEffect(()=>{ //get data on Local Stroage
        const status = localStorage.getItem('status');
        const legendas = localStorage.getItem('legendas');
        
        let statusSaved = JSON.parse(status) || [];
        let legSaved = JSON.parse(legendas) || [];

        setTarefas(statusSaved); //Tasks
        
        //Subtitles
        setAmareloLeg(legSaved.amarelo);
        setLaranjaLeg(legSaved.laranja);
        setVermelhoLeg(legSaved.vermelho);
        setVerdeLeg(legSaved.verde);
        setAzulLeg(legSaved.azul);

        //subtitles booleans
        setAmareloB(legSaved.aB);
        setLaranjaB(legSaved.lB);
        setVermelhoB(legSaved.vB);
        setVerdeB(legSaved.verB);
        setAzulB(legSaved.azulB);

    },[])


    function handleAdd(){
        
        let objTarefa = {id: contador,
                        tarefa: tarefa,
                        descricao: descricao.length === 0 ? 'Tarefa sem descrição' : descricao,
                        cor: cor,
                        posicao: {x: -3, y:10}
                        }
        setTarefas([...tarefas, objTarefa]);
        setTarefa('');
        setDescricao('');
        let cont = contador + 1;
        setContador(cont);

    }

    function handleDelete(id){
        let filtro = tarefas.filter((item)=>{return(item.id !== id)})
        setTarefas(filtro);
    }

    function saveStatus(){
        let objLeg = {amarelo: amareloLeg,
                      laranja: laranjaLeg,
                      vermelho: vermelhoLeg,
                      verde: verdeLeg,
                      azul: azulLeg,
                      aB: amareloB,
                      lB: laranjaB,
                      vB: vermelhoB,
                      verB: verdeB,
                      azB: azulB
        }  
        localStorage.setItem('status', JSON.stringify(tarefas));
        localStorage.setItem('legendas', JSON.stringify(objLeg));
    }

    
    
    return(
        <div>
            <Header/>
            <div className="titulo-tarefas-conteiner">
                
                    
                        
                            <div>
                                <h1 className="item-titulo-tarefa">Suas Tarefas</h1>
                                <div className="input-tarefa">
                                    <p className="item-titulo-tarefa">Titulo da Tarefa</p>
                                    <input className="item-titulo-tarefa" id="titulo-tarefa" type="text" value = {tarefa} onChange={(e)=>{setTarefa(e.target.value)}}/>
                                    <p className="item-titulo-tarefa">Descrição da Tarefa</p>
                                    <textarea className="item-titulo-tarefa" value={descricao} onChange={(e)=>{setDescricao(e.target.value)}} id="descricao-tarefa"></textarea>
                                    <p className="item-titulo-tarefa" id="slct-cor">Selecione a cor que você deseja</p>
                                    <select onChange={(e)=>{setCor(e.target.value)}} className="item-titulo-tarefa">
                                        <option value="amarelo" selected>amarelo</option>
                                        <option value="laranja">laranja</option>
                                        <option value="vermelho">vermelho</option>
                                        <option value="verde">verde</option>
                                        <option value="azul">azul</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div>
                           
                            <div className="legendas">
                                <h2>Legenda</h2>
                                <h3>Digite a legenda para cada cor</h3>
                                {amareloB ?
                                <div className="legenda">
                                    <p className="titulo-legenda">🟨 - Amarelo - {amareloLeg} <button onClick={()=>{setAmareloB(false)}} className="botao-tarefa botao-legenda">Editar</button> </p>
                                </div>
                                :
                                <div className="legenda">
                                    <p className="titulo-legenda">🟨 - Amarelo</p>
                                    <input type="text" value={amareloLeg}
                                    onChange={(e)=>{setAmareloLeg(e.target.value)}}/>
                                    <button onClick={()=>{setAmareloB(true)}} className="botao-tarefa botao-legenda">Adicionar</button>
                            
                                </div>
                                }
                                {laranjaB ?
                                <div className="legenda">
                                    <p className="titulo-legenda">🟧 - Laranja {laranjaLeg}</p>
                                    <button onClick={()=>{setLaranjaB(false)}} className="botao-tarefa botao-legenda">Editar</button>
                                </div>
                                :
                                <div className="legenda">
                                    <p className="titulo-legenda">🟧 - Laranja</p>
                                    <input type="text" value={laranjaLeg}
                                    onChange={(e)=>{setLaranjaLeg(e.target.value)}}/>
                                    <button onClick={()=>{setLaranjaB(true)}} className="botao-tarefa botao-legenda">Adicionar</button>
                                </div>
                                }
                                {vermelhoB ?
                                <div className="legenda">
                                    <p className="titulo-legenda">🟥 - Vermelho {vermelhoLeg}</p>
                                    <button onClick={()=>{setVermelhoB(false)}} className="botao-tarefa botao-legenda">Editar</button>
                                </div>
                                :
                                <div className="legenda">
                                    <p className="titulo-legenda">🟥 - Vermelho</p>
                                    <input type="text" value={vermelhoLeg}
                                    onChange={(e)=>{setVermelhoLeg(e.target.value)}}/>
                                    <button onClick={()=>{setVermelhoB(true)}} className="botao-tarefa botao-legenda">Adicionar</button>
                                </div>
                                }
                                {verdeB ?
                                <div className="legenda">
                                    <p className="titulo-legenda">🟩 - Verde {verdeLeg}</p>
                                    <button onClick={()=>{setVerdeB(false)}} className="botao-tarefa botao-legenda">Editar</button>
                                </div>
                                :
                                <div className="legenda">
                                    <p className="titulo-legenda">🟩 - Verde</p>
                                    <input type="text" value={verdeLeg}
                                    onChange={(e)=>{setVerdeLeg(e.target.value)}}/>
                                    <button onClick={()=>{setVerdeB(true)}} className="botao-tarefa botao-legenda">Adicionar</button>
                                </div>
                                }
                                {azulB ?
                                <div className="legenda">
                                    <p className="titulo-legenda">🟦 - Azul {azulLeg}</p>
                                    <button onClick={()=>{setAzulB(false)}} className="botao-tarefa botao-legenda">Editar</button>
                                </div>
                                :
                                <div className="legenda">
                                    <p className="titulo-legenda">🟦 - Azul</p>
                                    <input type="text" value={azulLeg}
                                    onChange={(e)=>{setAzulLeg(e.target.value)}}/>
                                    <button onClick={()=>{setAzulB(true)}} className="botao-tarefa botao-legenda">Adicionar</button>
                                </div>
                                }
                            
                            </div>
                                                
                            </div>
                            
                        
                        </div>
            
            <div className="botoes-tarefas">
                <button className="item-titulo-tarefa botao-tarefa" onClick={handleAdd}>Adicionar</button>
                <div><button onClick={saveStatus} className="item-titulo-tarefa botao-tarefa">Salvar Tarefas</button></div>
            </div>


            <div className="conteiner-tarefas">
                <div className="tarefas" id="planejado">
                    <h2>Planejado</h2>
                    
                        {tarefas.map(tarefa => (
                            
                            
                                <Draggable defaultPosition={tarefa.posicao} key={tarefa.id}
                                 
                                onDrag={(e, ui)=>{
                                    setPosicao({x: posicao.x + ui.deltaX,
                                                y: posicao.y + ui.deltaY})
                                }} onStop={()=>{tarefa.posicao = posicao}}>
                                    <div className="tarefa" id={tarefa.cor}>
                                        <p>{tarefa.tarefa}</p>
                                        <div>
                                            <abbr title={tarefa.descricao} id="descricao-abbr">?</abbr>
                                            <button  onClick={()=>{handleDelete(tarefa.id)}} id="botao-delete">X</button>
                                        </div>
                                    </div>
                                </Draggable>
                            
                            
                        ))}
                    
                </div>

                <div className="tarefas" id="progresso">
                    <h2>Em progresso</h2>
                </div>

                <div className="tarefas" id="feito">
                    <h2>Feito</h2>
                </div>
            </div>

            <div className="sobre-aviso">
                <div className="sobre-projetos">
                        <h2>Sobre o projeto</h2>
                        <p>
                        Este organizador de tarefas foi um projeto que utilizou a biblioteca do React Dragabble para que o usuário possa ter uma liberadade em organizar suas tarefas.
                        <br/>
                        Ela possui legendas para cada cor disponível, legendas essas que ficam armazenadas no “LocalStorage” para que possam ser consultadas posteriormente no mesmo dispositivo.
                        <br/>
                        As tarefas alocadas, também ficam armazenadas no dispositivo. Cada tarefa pode possuir uma descrição que pode ser consultada no ponto de interrogação que fica dentro da tarefa.
                        </p>
                
                        <h2>Tempo dedicado: <span>5-6 Horas</span> </h2>
                </div>
                <div className="aviso">
                    <h1>Este projeto ainda não possui suporte para dispositivos moveis :(</h1>
                </div>
            </div>
        </div>
    );
}