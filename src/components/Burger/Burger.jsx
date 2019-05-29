import React from "react";
import "./Burger.css";
import BurgerIngredient from "./BurgerIngridiant/BurgerIngrident";

const Burger = (props) => {
    let transformIngredient = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) =>{
               return <BurgerIngredient key={igKey + i}
                 type={igKey}/>;
            });
        }).reduce((arr,el) => {
            return arr.concat(el)
        }, []);
        if(transformIngredient.length === 0) {
            transformIngredient = <p>Please start adding ingredient</p>
        }
        //reduce is array function is caoncat arr add array objects
      return (
          <div className="Burger">
                <BurgerIngredient type="bread-top"/>
                  {transformIngredient} 
                <BurgerIngredient type="bread-bottom"/>
          </div>
      )
}
export default Burger