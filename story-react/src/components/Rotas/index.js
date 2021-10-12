import React from "react";
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Founders_Page from "../Founders_Page";
import Home_Page from "../Home_Page";
export default function Rotas(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home_Page}/>
                <Route path="/Founders" component={Founders_Page}/>
                

            </Switch>
        
        </BrowserRouter>

    );
}

