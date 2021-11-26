import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import icon_rigth from "../../icons/header-next.png"

export default function Header(){
    
    return(
        <header>
            <section className="header-logo">
                <h1>AAA</h1>
            </section>
           <nav> 
                <Link className="Home-link" to="/"> <img className="icon128" src={icon_rigth}/> <h4>Home</h4></Link>
                <Link className="Home-link" to="/Founders"> <img className="icon128" src={icon_rigth}/> <h4>Founders</h4></Link>
                <Link className="Home-link" to="/Building"> <img className="icon128" src={icon_rigth}/> <h4>Dolor</h4></Link>
                <Link className="Home-link" to="/Building"> <img className="icon128" src={icon_rigth}/> <h4>Siamet</h4></Link>
            </nav>
            
        </header>
    );
}
