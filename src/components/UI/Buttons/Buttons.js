import React from 'react';
import "./Buttons.css";
const Buttons = (props) => {
    const classes = [];
    if(props.btnType === "Danger"){
        classes.push("Danger");
    }
    if(props.btnType === "Success"){
        classes.push("Success");
    }
    return(
        <button className={`Button ${classes.join(" ")}`}   onClick={props.clicked}>{props.children}</button>
    )
     
};

export default Buttons;