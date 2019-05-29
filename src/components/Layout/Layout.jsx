import React from 'react';
import Wrapper from './../../hoc/Wrappers';
import "./Layout.css"
import Toolbar from './../Navigation/Toolbar/Toolbar';
import SideDrawer from './../Navigation/SideDrawer/Sidedrawer';
class Layout extends React.Component {
    state = { 
        sideDrawer:true
     }
     sideDrawerToggleHandler = () => {
        //    this.setState((prevState)=> {
        //        return { sideDrawer: !prevState.sideDrawer}
        //    });   
        this.setState((prevState) => {
            return { sideDrawer : !prevState.sideDrawer}
    });
}
    sideDrawerHandler = () => {
        this.setState({sideDrawer:false})
    
   
    }
    render() { 
        return (
            <Wrapper>      
                    <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/> 
                    <SideDrawer 
                    close={this.sideDrawerHandler}
                    open={this.state.sideDrawer}/>
                    <main className="content">
                        {this.props.children}
                    </main>
             </Wrapper>

          );
    }
}
 

export default Layout