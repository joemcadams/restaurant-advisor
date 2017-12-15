import React, { Component } from 'react'
import {
    RaisedButton,
    Paper, 
    Toolbar, 
    ToolbarGroup, 
    ToolbarSeparator, 
    ToolbarTitle } from 'material-ui'
import MdShoppingBasket from 'react-icons/lib/md/shopping-basket'

export class NavBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            changePage: props.changePage
        }
    }
    
    render = () => (
        <Paper zDepth={ 1 }>
            <Toolbar>
                <ToolbarGroup firstChild={ true }>
                    <ToolbarTitle style={{ marginLeft: '2vw' }} text='Restaurant Advisor'/>
                </ToolbarGroup>
                <ToolbarGroup>
                    {this.props.menuPage 
                    	? <RaisedButton 
                    			label='Current Order' 
                    			primary={ true } 
                    			icon={ <MdShoppingBasket size={ 20 } /> }
                    			onClick={this.props.goToOrderPage}
                    	/> 
                    	: <div/>}
                    <ToolbarSeparator/>
                    <RaisedButton label='Logout' secondary={ true } onClick={ this.props.onLogout() }/>
                </ToolbarGroup>
            </Toolbar>
        </Paper>

    )
}