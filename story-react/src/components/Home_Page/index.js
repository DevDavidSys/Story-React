import React from "react";
import EstructurePage from "../EstructurePage";
import "./style.css"

import twitter_logo from "../../icons/tt.png"
import whatsapp from "../../icons/whatsapp.png"
import face from "../../icons/face.png"
import instagram from "../../icons/instagram.png"
import Circle from "../Circle"

export default function Home_Page(){
    return(
        <EstructurePage>
            
            <div className="content-home">
                <div className="shadow">
                    <div className="logo">
                        <h1>ForTran</h1>
                        <p>Lorem Ipsum Dolor Siamet</p>
                    </div>
                </div>
                
            </div>
            <div className="circles">
                
                    <Circle src={twitter_logo}/>
                    <Circle src={whatsapp}/>
                    <Circle src={face}/>
                    <Circle src={instagram}/>
            </div>
        </EstructurePage>
    );
}
