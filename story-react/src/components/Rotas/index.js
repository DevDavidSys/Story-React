import React from "react";
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Main from "../Main";
export default function Rotas(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main}/>
                

            </Switch>
        
        </BrowserRouter>

    );
}

