import React from "react";
import "./style.css";

function BoxCard(props){
    return <div className="card">
        <div className="img-container">
            <img 
                src={props.image} 
                alt={props.name} 
                isclicked={props.isClicked}
            />
        </div>
    </div>
}

export default BoxCard;