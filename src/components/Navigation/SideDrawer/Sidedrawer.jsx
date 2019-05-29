import React from 'react';
import Logo from './../../Logo/Logo';
import Navigation from "../Navbar/Navigation"
import "./Sidedrawer.css";
import BackDrop from '../../UI/Backdrop/Backdrop';
import Wrapper from './../../../hoc/Wrappers';

const SideDrawer = (props) => {
    let classes = ["Sidedrawer", "Close"]
    if(props.open){
        classes = ["Sidedrawer", "Open"]    
    }
       return (
            <Wrapper>   
             <BackDrop show={props.open} clicked={props.close}/>
                    <div className={classes.join(" ")}>
                        <Logo height='11%' marginBottom="32px"/>
                    <nav>
                        <Navigation/> 
                    </nav>
                    </div>
           </Wrapper> 
       )
}
export default SideDrawer