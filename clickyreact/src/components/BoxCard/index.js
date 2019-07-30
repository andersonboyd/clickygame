import React from "react";
import "./style.css";

function BoxCard(props){
    return <div className="card">
        <div onClick={() => props.handleClick(props.id)} className="img-container">
            <img 
                id={props.id}
                src={props.image} 
                alt={props.name} 
                isclicked={props.isClicked}
            />
        </div>
    </div>
}

export default BoxCard;