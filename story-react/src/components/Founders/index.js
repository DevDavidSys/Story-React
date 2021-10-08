import React from "react";
import Card_fouder from "../Card_founder";
import "./style.css";

import Founder1 from "../../assets/founder1.jpg";
import Founder2 from "../../assets/founder2.jpg";
import Founder3 from "../../assets/founder3.jpg";

export default function Founders(){
    return(
        <div className="container-founders">
            <h1>FOUNDERS</h1>
            <Card_fouder src={Founder1} name="Saul Calvert" description="Lorem Ipsum Dolor Siamet"/>
            <Card_fouder src={Founder2} name="Iwan Farmer" description="Lorem Ipsum Dolor Siamet"/>
            <Card_fouder src={Founder3} name="Rodrigo French" description="Lorem Ipsum Dolor Siamet"/>
            
        </div>
    );
}