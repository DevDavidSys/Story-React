import React from "react";
import EstructurePage from "../EstructurePage";
import "./style.css"
import Wave from "../Wave";
export default function Home_Page(){
    return(
        <EstructurePage>
            <h1>Welcome</h1>
            <Wave/>
        </EstructurePage>
    );
}
