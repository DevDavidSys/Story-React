import React from 'react';
import "./style.css"


export default function Card_fouder(props){
    return(
        <div className="card-founder">
            <img className="founder-img" src={props.src}/>
            <h6>{props.name}</h6>
            <p>{props.description}</p>
        </div>
    );

}