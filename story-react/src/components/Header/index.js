import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import icon_rigth from "../../icons/header-next.png"

export default function Header(){
    function ShowLorem(){
        return(
            <div className="full">
                
            </div>
        );

    }
    return(
        <header>
            <Link className="Home-link"> <img className="icon128" src={icon_rigth}/> <h4>Lorem</h4></Link>
            <Link className="Home-link"> <img className="icon128" src={icon_rigth}/> <h4>Ipsum</h4></Link>
            <Link className="Home-link"> <img className="icon128" src={icon_rigth}/> <h4>Dolor</h4></Link>
            <Link className="Home-link"> <img className="icon128" src={icon_rigth}/> <h4>Siamet</h4></Link>
            
            
        </header>
    );
}
