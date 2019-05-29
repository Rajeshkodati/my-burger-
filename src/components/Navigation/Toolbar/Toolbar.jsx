import React from "react";
import "./Toolbar.css";
import Navigation from "./../Navbar/Navigation";
import Logo from "./../../Logo/Logo";
import "./../../Logo/Logo.css"
import DrawerToggle from './../SideDrawer/Drawer/DrawerToggle';


const Toolbar = (props) => {
    return(
        <header className="Toolbar">
            <DrawerToggle clicked={props.drawerToggleClicked}/>
            <Logo  height="60%"/>  
            <nav className=" DeskTopOnly">
            <Navigation/>
            </nav>
        </header>
    )
}

export default Toolbar