import React from 'react';
import "./Navigation.css";
import NavigationItems from './NavigationItems/NavigationItems';
const Navigation = () => {
    return(
        <ul className="Navigation">
           <NavigationItems link="/" active>Burger Builder</NavigationItems>
           <NavigationItems link="/">Checkout</NavigationItems>
        </ul>
        )
}
export default Navigation;