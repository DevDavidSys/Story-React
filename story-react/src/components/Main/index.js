import React from "react";
import "./style.css"
import { Link } from "react-router-dom";
import EstructurePage from "../EstructurePage";
import Founders from "../Founders";
export default function Main(){
    return(
        <EstructurePage>
            <div className="content">
                <Founders/>
                
                
            </div>


        </EstructurePage>

    );


}