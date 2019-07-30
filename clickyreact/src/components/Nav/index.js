import React from "react";
import "./style.css";

function Nav(props){
    return <div className="navbar">
        <h5>"The Gang makes a clicky game"</h5>
        <span className="counter">{props.count}/12</span>
    </div>
}

export default Nav;