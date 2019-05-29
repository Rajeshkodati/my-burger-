import React from "react";
import BuildControle from "../BuildControle/BuildControle";
import "./BuildControl.css";
const control = [
    {label:'Salad', type:"salad"},
    {label:'Bacon', type:"bacon"},
    {label:'Cheese', type:"cheese"},
    {label:'Meat', type:"meat"}
]
const BuildControles = (props) => {
    return (
        <div className="BuildControles">
            <p>Current Price:<strong>{props.price.toFixed(2)}</strong></p>
            {control.map(ctr => (
                <BuildControle key={ctr.label} label={ctr.label}
                type={ctr.type} 
                added={() => props.ingredientAdded(ctr.type)}
                removed={() => props.ingredientRemoved(ctr.type)}
                disabled={props.disabled[ctr.type]}
                />
            ))}
           <button className="OrderButton"
           disabled={!props.purchasable}
           onClick={props.order}>ORDER NOW</button> 
        </div>
    );
}
 
export default BuildControles;