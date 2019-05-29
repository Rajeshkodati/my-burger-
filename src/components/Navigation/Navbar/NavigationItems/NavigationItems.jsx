import React from 'react';
import "./navigationItems.css"
const navigationItems = (props) => (
    <li className="NavigationItems">
     <a href={props.link} className={props.active ? 'active' : null}>
    {props.children}</a></li>
)
export default navigationItems;