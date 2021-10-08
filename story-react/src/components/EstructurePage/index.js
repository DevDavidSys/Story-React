import React from "react";
import "./style.css"
import Header from "../Header";
import Footer from "../Footer";
export default function EstructurePage(props){
    return(
        <div className="estructure">
            <Header/>
            {props.children}
            <Footer/>
        </div>


        );


}

