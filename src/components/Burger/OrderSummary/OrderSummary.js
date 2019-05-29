import React from "react";
import Wrapper from './../../../hoc/Wrappers';
import Buttons from './../../UI/Buttons/Buttons';

class OrderSummary  extends React.Component {
    componentWillUpdate() {
        console.log("[OrderSummery], will update")
    }
    render() { 
        const ingredientSummary = Object.keys(this.props.ingredients)
                    .map(igKey => {
                        return (<li key={igKey}>
                            <span style={{textTransform:'capitalize'}}>{igKey}: {this.props.ingredients[igKey]}
                            </span>
                            </li>);
                    });
            
                return(
                <Wrapper>
                    <h3>Your Order</h3>
                    <p>A Delicious burger with following ingredients</p>
                    <ul>
                    {ingredientSummary} 
                    </ul>
                    <p><strong>Total Price:{this.props.price.toFixed(2)}</strong></p>
                    <p>Continue to Checkout?</p>
                    <Buttons btnType="Danger" clicked={this.props.cancel}>Cancel</Buttons>
                    <Buttons btnType="Success" clicked={this.props.continue}>Continue</Buttons>
                </Wrapper>
                ) 


            }  
        }
 
    
export default OrderSummary;