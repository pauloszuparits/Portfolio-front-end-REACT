import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Projetos from "../pages/Projetos";
import Calculadora from "../pages/Calculadora";
import Cronometro from "../pages/Cronometro";
import Tarefas from "../pages/Tarefas";
import PssSaved from "../pages/GeradorSenhas/PssSaved";
import PssGen from "../pages/GeradorSenhas/PssGen";

export default function Routes(){
    return(
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/projetos" component={Projetos}/>
            <Route exact path="/projetos/calculadora" component={Calculadora}/>
            <Route exact path="/projetos/cronometro" component={Cronometro}/>
            <Route exact path="/projetos/geradorsenhas" component={PssGen}/>
            <Route exact path="/projetos/geradorsenhas/salvas" component={PssSaved}/>
            <Route exact path="/projetos/tarefas" component={Tarefas}/>
            
            
            
        </Switch>
    )
}