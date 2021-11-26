import React from "react";
import "./style.css"
import { Link } from "react-router-dom";
import EstructurePage from "../EstructurePage";
import Wave from "../Wave";

import Card from "../Card"
import Founder1 from "../../assets/founder1.jpg";
import Founder2 from "../../assets/founder2.jpg";
import Founder3 from "../../assets/founder3.jpg";


export default function Founders_Page(){
    return(
        <EstructurePage>
            <div className="content-founders">

                <Card src={Founder1} name="Saul Calvert" description="Lorem Ipsum Dolor Siamet"/>
                <Card src={Founder2} name="Iwan Farmer" description="Lorem Ipsum Dolor Siamet"/>
                <Card src={Founder3} name="Rodrigo French" description="Lorem Ipsum Dolor Siamet"/>
                
            </div>
            
        </EstructurePage>

    );


}